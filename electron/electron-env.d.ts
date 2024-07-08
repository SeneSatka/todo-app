/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import("electron").IpcRenderer;
  utils: {
    openBrowser(url: string): void;
    db: {
      set: (key: string, value: any) => void;
      delete: (key: string) => void;
      deleteAll: () => void;
      get: (key: string) => any;
      getAll: () => {
        id: string;
        data: unknown;
      }[];
    };
  };
}
