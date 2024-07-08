import { DB } from "@enkas/db";
import { ipcRenderer, contextBridge, shell } from "electron";
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },
});
const db = new DB({ file: "todos.json", path: "org.senesatka.todoapp" });
contextBridge.exposeInMainWorld("utils", {
  openBrowser(url: string) {
    shell.openExternal(url);
  },
  db: {
    set: (key: string, value: any) => db.set(key, value),
    delete: (key: string) => db.delete(key),
    deleteAll: () => db.deleteAll(),
    get: (key: string) => db.get(key),
    getAll: () => db.all(),
  },
});
