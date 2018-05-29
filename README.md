# electron-ipc-test

This sample app tests is designed to test ipc communication with the combination of sandbox and contextIsolation in electron 1.8.2

The observed pattern is that when sandbox and contextIsolation are both true in electron 1.8, then messaging from web-contents events does not reach through to the renderer process.

The test is to run this sample application with a globally installed electron binary of 1.8.
```
$ yarn run start
```
What should happen is that the devtools opens and there's a `whoooooooh!` message printed to the console.

You can try switching either (or both) contextIsolation and sandbox to false.  When you do this, the message is printed.


I've tested this with both .once('dom-ready') and ('did-finish-load');
