const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let win;

function createWindow() {
  // 画面サイズを取得
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  
  win = new BrowserWindow({
    width: 420,
    height: 720,
    // 画面右端に配置
    x: screenWidth - 420 - 20, // 右端から20px余白
    y: 50, // 上から50px
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});