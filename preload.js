const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    scanWifi: () => ipcRenderer.invoke('wifi-scan'),
    connectWifi: (ssid, password) => ipcRenderer.invoke('wifi-connect', { ssid, password })
});
