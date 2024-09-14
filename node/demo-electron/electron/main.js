import path from "path";
import { app, BrowserWindow } from "electron";

// 屏蔽安装警告
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

// 创建浏览器窗口
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //     preload: path.join(__dirname, "preload.js"),
    // },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    // 加载地址
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    // 开启调试台
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};

// Electron 会在初始化后并准备
app.whenReady().then(() => {
  createWindow();

  // ？？？
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
