# simple-serial-port-scanner
Read in hand scanners directly from the browser without any software.

## Super short
Click this
https://njalnilum.github.io/simple-serial-port-scanner/

## Description
There are so few lines of code that it is not worth explaining anything here. Explanations are included in the js file as comments. 
The structure of the html and css files should not be explained here because they are irrelevant.

## Run

It is a very simple application that can be made to work by anyone who can read.
1. download Visual Studio Code (https://code.visualstudio.com/download)
2. install Visual Studio Code
3. install the extension "Live Server" in Visual Studio Code
4. clone this repository
5. open Visual Studio Code in the directory of the cloned repository
6. start "Live Server" (bottom right of the Studio Code window)
7. the browser opens with the Serial Port Scanner

## Application
To connect a hand-held scanner, the hand-held scanner must first be put into a mode in which it is operated via an emulated serial port. Unfortunately, there is no standardised name for this, but most devices support such a mode (read the instructions). 
Now just press Connect and select the emulated port in the browser. After that, everything that is scanned should show up in the little window (see below). QR and Data Matrix codes are mostly UTF 8 encoded. Therefore, the text here is also decoded UTF 8.
It is best not to change the baud rate.
By the way, as of Windows 10, a driver for emulated serial ports is included by default. And yes, I am a Microsoft child. Sorry.
![preview](https://user-images.githubusercontent.com/97474262/220437864-642782b5-00ec-4d0c-a4c6-d09b9f42b164.png)
