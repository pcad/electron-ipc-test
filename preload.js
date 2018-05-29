const {ipcRenderer} = require('electron');

console.log('here i am.');

ipcRenderer.on('ping', (event, message) => {
  console.log('message from main.', message) // Prints 'whoooooooh!'
});