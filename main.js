const {app, BrowserWindow} = require('electron');

app.on('ready', () => {

  const mainWindow = new BrowserWindow({
      height: 768,
      width: 1024,
      webPreferences: {
        devTools: true,
        nodeIntegration:false,
        contextIsolation: true,
        sandbox: true,
        preload: `${__dirname}/preload.js`
      }
  });

  mainWindow.loadURL('about:blank');
  mainWindow.webContents.openDevTools();
  
});


app.on('web-contents-created', function configureWebContents(event, contents)  {
  contents.once('dom-ready', () => {
    contents.send('ping', 'whoooooooh!');
  });
});