const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const wifi = require('node-wifi');

// Initialize wifi module
wifi.init({
    iface: null // Use default network interface
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        },
        autoHideMenuBar: true, // Hide default menu for cleaner look
        backgroundColor: '#0a0a0a',
        title: 'SkyNet Cracker'
    });

    win.loadFile('index.html');

    // Open DevTools in dev mode (optional, commenting out for production feel)
    // win.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// === IPC Handlers for WiFi Operations ===

// Scan for networks
ipcMain.handle('wifi-scan', async () => {
    try {
        console.log('Scanning for networks...');
        const networks = await wifi.scan();
        // Filter duplicates and sort by signal strength
        const unique = [];
        const seen = new Set();
        networks.forEach(net => {
            if (!seen.has(net.ssid) && net.ssid) {
                seen.add(net.ssid);
                unique.push(net);
            }
        });
        unique.sort((a, b) => b.quality - a.quality);
        return { success: true, data: unique };
    } catch (error) {
        console.error('Scan failed:', error);
        return { success: false, error: error.message };
    }
});

// Connect to a network
ipcMain.handle('wifi-connect', async (event, { ssid, password }) => {
    try {
        console.log(`Attempting to connect to ${ssid}...`);
        await wifi.connect({ ssid, password });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
});
