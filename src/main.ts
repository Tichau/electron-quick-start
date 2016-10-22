import { app, BrowserWindow } from 'electron';
import { Application } from './Application';

// Reload the electron app on file changes!
require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let application = new Application();

app.on('ready', application.OnReady.bind(application))
app.on('activate', application.OnActivate.bind(application));
app.on('window-all-closed', application.OnAllWindowsClosed.bind(application));
