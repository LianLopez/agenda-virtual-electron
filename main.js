const { app, BrowserWindow } = require('electron');

let win

function createWindow() {
   win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //Plantilla HTML SRC
  win.loadFile('index.html');

  // Abre la consola de comandos
  win.webContents.openDevTools()

  win.on('closed', () => {
     win = null
   })
}


app.on('ready', createWindow);
