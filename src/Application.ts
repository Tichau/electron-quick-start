"use strict";

// Import app Module to control application life.
// Import BrowserWindow Module to create native browser window.
import { app, BrowserWindow } from 'electron';

export class Application
{
    private mainWindow: Electron.BrowserWindow;

    // This method will be called when Electron has finished initialization and is ready to create browser windows.
    public OnReady(): void
    {
        this.CreateMainWindow();
    }

    public OnActivate(): void
    {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (this.mainWindow === null) {
            this.CreateMainWindow();
        }
    }

    public OnAllWindowsClosed(): void
    {
        // Quit when all windows are closed.

        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }

    private CreateMainWindow(): void
    {
        // Create the browser window.
        this.mainWindow = new BrowserWindow({width: 800, height: 600});

        // and load the index.html of the app.
        this.mainWindow.loadURL(`file://${__dirname}/index.html`);

        // Open the DevTools.
        this.mainWindow.webContents.openDevTools();

        // Emitted when the window is closed.
        this.mainWindow.on('closed', function() {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            this.mainWindow = null;
        });
    }
}