import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL('http://localhost:3000').then();
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
  console.log("Hello World")
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
