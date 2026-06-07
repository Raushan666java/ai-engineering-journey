const { app, BrowserWindow, ipcMain, Tray, Menu, shell, dialog } = require('electron');
const path = require('path');
const axios = require('axios');
const screenshot = require('screenshot-desktop');
const activeWin = require('active-win');
const si = require('systeminformation');
const { machineId } = require('node-machine-id');
const Store = require('electron-store');
const AutoLaunch = require('auto-launch');

class MonitaskAgent {
    constructor() {
        this.store = new Store();
        this.mainWindow = null;
        this.tray = null;
        this.isMonitoring = false;
        this.currentTimeEntry = null;
        this.activityTimer = null;
        this.screenshotTimer = null;
        this.heartbeatTimer = null;
        
        // Configuration
        this.config = {
            serverUrl: 'http://127.0.0.1:8001',
            screenshotInterval: 300000, // 5 minutes
            activityInterval: 60000, // 1 minute
            heartbeatInterval: 30000, // 30 seconds
            stealthMode: false
        };

        // Activity tracking
        this.activityData = {
            keystrokes: 0,
            mouseClicks: 0,
            mouseMovements: 0,
            scrollEvents: 0,
            idleTime: 0,
            activeTime: 0,
            currentApp: null,
            currentUrl: null
        };

        this.autoLauncher = new AutoLaunch({
            name: 'Monitask Agent',
            path: process.execPath
        });
    }

    async initialize() {
        await this.createWindow();
        await this.createTray();
        await this.setupAutoLaunch();
        
        // Check if user is logged in
        const token = this.store.get('authToken');
        if (token) {
            await this.registerAgent();
            this.startHeartbeat();
        }
    }

    async createWindow() {
        this.mainWindow = new BrowserWindow({
            width: 400,
            height: 600,
            show: !this.config.stealthMode,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            },
            icon: path.join(__dirname, '../assets/icon.png'),
            title: 'Monitask Agent'
        });

        this.mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));

        // Hide window when closed instead of quitting
        this.mainWindow.on('close', (event) => {
            if (!app.isQuiting) {
                event.preventDefault();
                this.mainWindow.hide();
            }
        });
    }

    async createTray() {
        if (this.config.stealthMode) return;

        this.tray = new Tray(path.join(__dirname, '../assets/tray-icon.png'));
        
        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'Open Dashboard',
                click: () => {
                    shell.openExternal(`${this.config.serverUrl}/monitask/dashboard`);
                }
            },
            {
                label: 'Show Agent',
                click: () => {
                    this.mainWindow.show();
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Start Monitoring',
                click: () => this.startMonitoring(),
                enabled: !this.isMonitoring
            },
            {
                label: 'Stop Monitoring',
                click: () => this.stopMonitoring(),
                enabled: this.isMonitoring
            },
            {
                type: 'separator'
            },
            {
                label: 'Settings',
                click: () => {
                    this.mainWindow.show();
                    this.mainWindow.webContents.send('show-settings');
                }
            },
            {
                label: 'Quit',
                click: () => {
                    app.isQuiting = true;
                    this.cleanup();
                    app.quit();
                }
            }
        ]);

        this.tray.setContextMenu(contextMenu);
        this.tray.setToolTip('Monitask Agent');
        
        this.tray.on('double-click', () => {
            this.mainWindow.show();
        });
    }

    async setupAutoLaunch() {
        try {
            const isEnabled = await this.autoLauncher.isEnabled();
            if (!isEnabled && this.store.get('autoStart', true)) {
                await this.autoLauncher.enable();
            }
        } catch (error) {
            console.error('Auto-launch setup failed:', error);
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.config.serverUrl}/api/login`, {
                email,
                password
            });

            if (response.data.success) {
                this.store.set('authToken', response.data.token);
                this.store.set('user', response.data.user);
                
                await this.registerAgent();
                this.startHeartbeat();
                
                return { success: true, user: response.data.user };
            }
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, error: error.response?.data?.message || 'Login failed' };
        }
    }

    async registerAgent() {
        try {
            const machineIdValue = await machineId();
            const osInfo = await si.osInfo();
            const system = await si.system();
            
            const agentData = {
                device_name: system.model || 'Unknown Device',
                device_type: 'desktop',
                os_version: `${osInfo.platform} ${osInfo.release}`,
                agent_version: '1.0.0',
                mac_address: machineIdValue
            };

            const token = this.store.get('authToken');
            const response = await axios.post(
                `${this.config.serverUrl}/monitask/agents/register`,
                agentData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                this.store.set('agentId', response.data.agent_id);
                this.updateConfig(response.data.settings);
                return true;
            }
        } catch (error) {
            console.error('Agent registration failed:', error);
            return false;
        }
    }

    updateConfig(settings) {
        if (settings) {
            this.config = { ...this.config, ...settings };
            
            if (settings.stealth_mode !== undefined) {
                this.config.stealthMode = settings.stealth_mode;
                this.updateStealthMode();
            }
        }
    }

    updateStealthMode() {
        if (this.config.stealthMode) {
            this.mainWindow.hide();
            if (this.tray) {
                this.tray.destroy();
                this.tray = null;
            }
        } else {
            if (!this.tray) {
                this.createTray();
            }
        }
    }

    startHeartbeat() {
        this.heartbeatTimer = setInterval(async () => {
            try {
                const token = this.store.get('authToken');
                const agentId = this.store.get('agentId');
                
                if (!token || !agentId) return;

                await axios.post(
                    `${this.config.serverUrl}/monitask/agents/heartbeat`,
                    { agent_id: agentId },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
            } catch (error) {
                console.error('Heartbeat failed:', error);
            }
        }, this.config.heartbeatInterval);
    }

    async startMonitoring() {
        if (this.isMonitoring) return;

        this.isMonitoring = true;
        this.resetActivityData();
        
        // Start activity tracking
        this.startActivityTracking();
        
        // Start screenshot capturing
        this.startScreenshotCapture();
        
        // Notify server
        await this.notifyServerMonitoringStart();
        
        this.updateTrayMenu();
        this.mainWindow.webContents.send('monitoring-started');
    }

    async stopMonitoring() {
        if (!this.isMonitoring) return;

        this.isMonitoring = false;
        
        // Stop all timers
        if (this.activityTimer) {
            clearInterval(this.activityTimer);
            this.activityTimer = null;
        }
        
        if (this.screenshotTimer) {
            clearInterval(this.screenshotTimer);
            this.screenshotTimer = null;
        }
        
        // Send final activity data
        await this.sendActivityData();
        
        // Notify server
        await this.notifyServerMonitoringStop();
        
        this.updateTrayMenu();
        this.mainWindow.webContents.send('monitoring-stopped');
    }

    startActivityTracking() {
        this.activityTimer = setInterval(async () => {
            if (!this.isMonitoring) return;
            
            try {
                // Get active window
                const activeWindow = await activeWin();
                if (activeWindow) {
                    this.activityData.currentApp = activeWindow.owner.name;
                    this.activityData.currentUrl = activeWindow.url || null;
                }
                
                // Simulate activity tracking (in real implementation, use native APIs)
                this.activityData.keystrokes += Math.floor(Math.random() * 50);
                this.activityData.mouseClicks += Math.floor(Math.random() * 20);
                this.activityData.mouseMovements += Math.floor(Math.random() * 100);
                this.activityData.scrollEvents += Math.floor(Math.random() * 10);
                this.activityData.activeTime += 60;
                
                // Send activity data every minute
                await this.sendActivityData();
                this.resetActivityData();
                
            } catch (error) {
                console.error('Activity tracking error:', error);
            }
        }, this.config.activityInterval);
    }

    startScreenshotCapture() {
        this.screenshotTimer = setInterval(async () => {
            if (!this.isMonitoring) return;
            
            try {
                await this.captureScreenshot();
            } catch (error) {
                console.error('Screenshot capture error:', error);
            }
        }, this.config.screenshotInterval);
    }

    async captureScreenshot() {
        try {
            const img = await screenshot({ format: 'png' });
            
            // Convert to base64
            const base64Image = img.toString('base64');
            
            // Create FormData
            const formData = new FormData();
            const blob = new Blob([img], { type: 'image/png' });
            formData.append('screenshot', blob, 'screenshot.png');
            formData.append('agent_id', this.store.get('agentId'));
            formData.append('project_id', this.currentTimeEntry?.project_id || '');
            formData.append('time_entry_id', this.currentTimeEntry?.id || '');
            formData.append('activity_score', this.calculateActivityScore());
            
            const token = this.store.get('authToken');
            await axios.post(
                `${this.config.serverUrl}/monitask/agents/screenshot`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            
            console.log('Screenshot captured and uploaded');
            
        } catch (error) {
            console.error('Screenshot capture failed:', error);
        }
    }

    async sendActivityData() {
        try {
            const token = this.store.get('authToken');
            const agentId = this.store.get('agentId');
            
            const activityLog = {
                agent_id: agentId,
                project_id: this.currentTimeEntry?.project_id || null,
                time_entry_id: this.currentTimeEntry?.id || null,
                application_name: this.activityData.currentApp,
                window_title: this.activityData.currentApp,
                url: this.activityData.currentUrl,
                category: this.categorizeActivity(this.activityData.currentApp, this.activityData.currentUrl),
                duration_seconds: 60,
                keystroke_count: this.activityData.keystrokes,
                mouse_click_count: this.activityData.mouseClicks,
                scroll_count: this.activityData.scrollEvents
            };

            await axios.post(
                `${this.config.serverUrl}/monitask/agents/activity-log`,
                activityLog,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Also send keystroke data
            const keystrokeData = {
                agent_id: agentId,
                project_id: this.currentTimeEntry?.project_id || null,
                time_entry_id: this.currentTimeEntry?.id || null,
                application_name: this.activityData.currentApp,
                window_title: this.activityData.currentApp,
                keystroke_count: this.activityData.keystrokes,
                mouse_clicks: this.activityData.mouseClicks,
                mouse_movements: this.activityData.mouseMovements,
                scroll_events: this.activityData.scrollEvents,
                idle_time_seconds: this.activityData.idleTime,
                active_time_seconds: this.activityData.activeTime
            };

            await axios.post(
                `${this.config.serverUrl}/monitask/agents/keystroke-data`,
                keystrokeData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

        } catch (error) {
            console.error('Failed to send activity data:', error);
        }
    }

    categorizeActivity(appName, url) {
        if (!appName) return 'unknown';
        
        const productive = ['vscode', 'visual studio', 'phpstorm', 'sublime', 'notepad++', 'excel', 'word'];
        const neutral = ['chrome', 'firefox', 'edge', 'safari', 'explorer'];
        const unproductive = ['game', 'steam', 'discord', 'facebook', 'youtube', 'twitter'];
        
        const app = appName.toLowerCase();
        const urlLower = (url || '').toLowerCase();
        
        if (productive.some(p => app.includes(p))) return 'productive';
        if (unproductive.some(p => app.includes(p) || urlLower.includes(p))) return 'unproductive';
        if (neutral.some(p => app.includes(p))) return 'neutral';
        
        return 'unknown';
    }

    calculateActivityScore() {
        const totalActivity = this.activityData.keystrokes + this.activityData.mouseClicks + this.activityData.mouseMovements;
        return Math.min(Math.floor(totalActivity / 10), 100);
    }

    resetActivityData() {
        this.activityData = {
            keystrokes: 0,
            mouseClicks: 0,
            mouseMovements: 0,
            scrollEvents: 0,
            idleTime: 0,
            activeTime: 0,
            currentApp: this.activityData.currentApp,
            currentUrl: this.activityData.currentUrl
        };
    }

    async notifyServerMonitoringStart() {
        try {
            const token = this.store.get('authToken');
            const agentId = this.store.get('agentId');
            
            await axios.post(
                `${this.config.serverUrl}/monitask/agents/start`,
                { agent_id: agentId },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (error) {
            console.error('Failed to notify server about monitoring start:', error);
        }
    }

    async notifyServerMonitoringStop() {
        try {
            const token = this.store.get('authToken');
            const agentId = this.store.get('agentId');
            
            await axios.post(
                `${this.config.serverUrl}/monitask/agents/stop`,
                { agent_id: agentId },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (error) {
            console.error('Failed to notify server about monitoring stop:', error);
        }
    }

    updateTrayMenu() {
        if (!this.tray) return;
        
        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'Open Dashboard',
                click: () => {
                    shell.openExternal(`${this.config.serverUrl}/monitask/dashboard`);
                }
            },
            {
                label: 'Show Agent',
                click: () => {
                    this.mainWindow.show();
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Start Monitoring',
                click: () => this.startMonitoring(),
                enabled: !this.isMonitoring
            },
            {
                label: 'Stop Monitoring',
                click: () => this.stopMonitoring(),
                enabled: this.isMonitoring
            },
            {
                type: 'separator'
            },
            {
                label: 'Settings',
                click: () => {
                    this.mainWindow.show();
                    this.mainWindow.webContents.send('show-settings');
                }
            },
            {
                label: 'Quit',
                click: () => {
                    app.isQuiting = true;
                    this.cleanup();
                    app.quit();
                }
            }
        ]);

        this.tray.setContextMenu(contextMenu);
    }

    cleanup() {
        if (this.isMonitoring) {
            this.stopMonitoring();
        }
        
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
        }
    }
}

// Initialize app
const agent = new MonitaskAgent();

app.whenReady().then(() => {
    agent.initialize();
});

app.on('window-all-closed', () => {
    // Keep app running on macOS
    if (process.platform !== 'darwin') {
        agent.cleanup();
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        agent.createWindow();
    }
});

// IPC handlers
ipcMain.handle('login', async (event, credentials) => {
    return await agent.login(credentials.email, credentials.password);
});

ipcMain.handle('logout', async (event) => {
    agent.store.clear();
    agent.cleanup();
    return { success: true };
});

ipcMain.handle('get-user', (event) => {
    return agent.store.get('user');
});

ipcMain.handle('get-monitoring-status', (event) => {
    return agent.isMonitoring;
});

ipcMain.handle('start-monitoring', async (event) => {
    await agent.startMonitoring();
    return { success: true };
});

ipcMain.handle('stop-monitoring', async (event) => {
    await agent.stopMonitoring();
    return { success: true };
});

ipcMain.handle('get-settings', (event) => {
    return agent.config;
});

ipcMain.handle('update-settings', async (event, settings) => {
    agent.updateConfig(settings);
    return { success: true };
});

module.exports = MonitaskAgent;
