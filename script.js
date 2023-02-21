var port;
let reader, textDecoder, readableStreamClosed;
const serialInputBox = document.getElementById("serialInput");

/** Click on Connect */
async function connectSerial() {
    try {
        // Prompt user to select any serial port with the given baud.
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: document.getElementById("baud").value });
        await listenToPort();
    } catch (e) {
        alert("Serial Connection Failed" + e);
    }
}

/** Port listener. */
async function listenToPort() {
    textDecoder = new TextDecoderStream();
    readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    reader = textDecoder.readable.getReader();
    serialInputBox.innerHTML = "";

    // Listen to data coming from the serial device.
    while (true) {
        const { value, done } = await reader.read();
        if (done) {
            // Allow the serial port to be closed later.
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
        }

        serialInputBox.innerHTML += value;
    }
}

/** Click on disconnect */
async function disconnectSerial() {
    if (!(reader === undefined)) {
        serialInputBox.innerHTML = "";

        /** What an incredible pain in the ass. With reference to "https://developer.chrome.com/articles/serial/", 
         * the port must be closed in this way so that other applications can use the same port for communication. 
         * Surely that could be done better :-( */
        const textEncoder = new TextEncoderStream();
        const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
        const writer = textEncoder.writable.getWriter();

        reader.cancel();
        reader.releaseLock();
        await readableStreamClosed.catch(() => { /* Ignore the error */ });
        writer.close();
        await writableStreamClosed;
        await port.close();
    }
}