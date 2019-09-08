import { app, BrowserWindow } from "electron";
import * as path from "path";

export default class App {
  public static main() {
    app.on("ready", App.onReady);
  }

  private static window: BrowserWindow | null;
  private static strip = path.join(__dirname, "../index.html");

  private static onReady() {
    App.window = new BrowserWindow({
      frame: false,
      height: 80,
      width: 600
    });
    App.window.loadFile(App.strip);
    App.window.on("closed", App.onClosed);
  }

  private static onClosed() {
    App.window = null;
  }
}
