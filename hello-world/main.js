'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false
  })
  mainWindow.loadURL(`file:///${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => (mainWindow = null))
})