"use strict";
const path = require("path");
const { app, BrowserWindow } = require("electron");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
const createWindow = () => {
  const win = new BrowserWindow({
    // 宽度
    width: 800,
    // 高度
    height: 600,
    // title
    title: "云层上的光",
    // 需要先注释 index.html 中的title
    // icon
    icon: path.join(__dirname, "../public/logo.ico")
    // webPreferences: {
    //     preload: path.join(__dirname, "preload.js"),
    // },
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    console.log(111);
    app.quit();
  }
});
