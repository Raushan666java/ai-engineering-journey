const { ipcRenderer } = require('electron');

class MonitaskAgentUI {
    constructor() {
        this.isMonitoring = false;
        this.sessionStartTime = null;
        this.sessionTimer = null;
        this.currentUser = null;
        this.stats = {
            totalTime: 0,
            productivity: 0,
            screenshots: 0,
            keystrokes: 0
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.initializeApp();
    }

    initializeElements() {
        // Login elements
        this.loginSection = document.getElementById('loginSection');
        this.dashboardSection = document.getElementById('dashboardSection');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.loginBtn = document.getElementById('loginBtn');
        this.loading = document.getElementById('loading');
        this.errorMessage = document.getElementById('errorMessage');
        this.successMessage = document.getElementById('successMessage');

        // Dashboard elements
        this.userAvatar = document.getElementById('userAvatar');
        this.userName = document.getElementById('userName');
        this.userEmail = document.getElementById('userEmail');
        this.statusIndicator = document.getElementById('statusIndicator');
        this.statusText = document.getElementById('statusText');
        this.sessionDuration = document.getElementById('sessionDuration');
        this.lastSync = document.getElementById('lastSync');

        // Stats elements
        this.totalTimeEl = document.getElementById('totalTime');
        this.productivityEl = document.getElementById('productivity');
        this.screenshotsEl = document.getElementById('screenshots');
        this.keystrokesEl = document.getElementById('keystrokes');

        // Action buttons
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.logoutBtn = document.getElementById('logoutBtn');

        // Settings elements
        this.settingsPanel = document.getElementById('settingsPanel');
        this.autoStartCheck = document.getElementById('autoStart');
        this.stealthModeCheck = document.getElementById('stealthMode');
        this.screenshotIntervalSelect = document.getElementById('screenshotInterval');
        this.saveSettingsBtn = document.getElementById('saveSettingsBtn');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');
    }

    attachEventListeners() {
        // Login form
        this.loginBtn.addEventListener('click', () => this.handleLogin());
        this.emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });
        this.passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });

        // Dashboard actions
        this.startBtn.addEventListener('click', () => this.handleStartMonitoring());
        this.stopBtn.addEventListener('click', () => this.handleStopMonitoring());
        this.settingsBtn.addEventListener('click', () => this.showSettings());
        this.logoutBtn.addEventListener('click', () => this.handleLogout());

        // Settings
        this.saveSettingsBtn.addEventListener('click', () => this.saveSettings());
        this.closeSettingsBtn.addEventListener('click', () => this.hideSettings());

        // IPC listeners
        ipcRenderer.on('monitoring-started', () => this.onMonitoringStarted());
        ipcRenderer.on('monitoring-stopped', () => this.onMonitoringStopped());
        ipcRenderer.on('show-settings', () => this.showSettings());
    }

    async initializeApp() {
        try {
            // Check if user is already logged in
            const user = await ipcRenderer.invoke('get-user');
            if (user) {
                this.currentUser = user;
                await this.showDashboard();
                await this.loadMonitoringStatus();
            } else {
                this.showLogin();
            }
        } catch (error) {
            console.error('App initialization failed:', error);
            this.showLogin();
        }
    }

    async handleLogin() {
        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value.trim();

        if (!email || !password) {
            this.showError('Please enter both email and password');
            return;
        }

        this.showLoading();
        this.hideMessages();

        try {
            const result = await ipcRenderer.invoke('login', { email, password });
            
            if (result.success) {
                this.currentUser = result.user;
                this.showSuccess('Login successful!');
                setTimeout(() => {
                    this.showDashboard();
                }, 1000);
            } else {
                this.showError(result.error || 'Login failed');
            }
        } catch (error) {
            this.showError('Connection failed. Please check your internet connection.');
        } finally {
            this.hideLoading();
        }
    }

    async handleLogout() {
        try {
            await ipcRenderer.invoke('logout');
            this.currentUser = null;
            this.clearSessionTimer();
            this.showLogin();
            this.clearForm();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    async handleStartMonitoring() {
        try {
            await ipcRenderer.invoke('start-monitoring');
            this.onMonitoringStarted();
        } catch (error) {
            console.error('Failed to start monitoring:', error);
        }
    }

    async handleStopMonitoring() {
        try {
            await ipcRenderer.invoke('stop-monitoring');
            this.onMonitoringStopped();
        } catch (error) {
            console.error('Failed to stop monitoring:', error);
        }
    }

    async loadMonitoringStatus() {
        try {
            const isMonitoring = await ipcRenderer.invoke('get-monitoring-status');
            if (isMonitoring) {
                this.onMonitoringStarted();
            } else {
                this.onMonitoringStopped();
            }
        } catch (error) {
            console.error('Failed to load monitoring status:', error);
        }
    }

    onMonitoringStarted() {
        this.isMonitoring = true;
        this.sessionStartTime = new Date();
        this.startSessionTimer();
        this.updateUI();
        this.updateStats();
    }

    onMonitoringStopped() {
        this.isMonitoring = false;
        this.sessionStartTime = null;
        this.clearSessionTimer();
        this.updateUI();
    }

    startSessionTimer() {
        this.sessionTimer = setInterval(() => {
            this.updateSessionDuration();
        }, 1000);
    }

    clearSessionTimer() {
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
            this.sessionTimer = null;
        }
    }

    updateSessionDuration() {
        if (!this.sessionStartTime) return;

        const now = new Date();
        const duration = Math.floor((now - this.sessionStartTime) / 1000);
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;

        this.sessionDuration.textContent = `Session: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateUI() {
        if (this.isMonitoring) {
            this.statusIndicator.className = 'status-indicator status-online';
            this.statusText.textContent = 'Monitoring Active';
            this.startBtn.style.display = 'none';
            this.stopBtn.style.display = 'block';
        } else {
            this.statusIndicator.className = 'status-indicator status-offline';
            this.statusText.textContent = 'Monitoring Stopped';
            this.startBtn.style.display = 'block';
            this.stopBtn.style.display = 'none';
            this.sessionDuration.textContent = 'Session: 00:00:00';
        }

        this.lastSync.textContent = `Last sync: ${new Date().toLocaleTimeString()}`;
    }

    updateStats() {
        // Simulate stats updates (in real app, get from backend)
        if (this.isMonitoring) {
            this.stats.totalTime += 0.1;
            this.stats.productivity = Math.min(85 + Math.random() * 15, 100);
            this.stats.screenshots += Math.random() > 0.95 ? 1 : 0;
            this.stats.keystrokes += Math.floor(Math.random() * 50);

            this.totalTimeEl.textContent = `${Math.floor(this.stats.totalTime)}h`;
            this.productivityEl.textContent = `${Math.floor(this.stats.productivity)}%`;
            this.screenshotsEl.textContent = this.stats.screenshots.toString();
            this.keystrokesEl.textContent = this.stats.keystrokes.toString();

            // Update again in 5 seconds
            setTimeout(() => this.updateStats(), 5000);
        }
    }

    showLogin() {
        this.loginSection.style.display = 'block';
        this.dashboardSection.style.display = 'none';
        this.hideSettings();
    }

    showDashboard() {
        this.loginSection.style.display = 'none';
        this.dashboardSection.style.display = 'block';
        this.hideSettings();
        this.updateUserInfo();
        this.updateUI();
    }

    updateUserInfo() {
        if (this.currentUser) {
            this.userName.textContent = this.currentUser.name || 'User';
            this.userEmail.textContent = this.currentUser.email || '';
            
            // Set avatar initial
            const initial = (this.currentUser.name || 'U').charAt(0).toUpperCase();
            this.userAvatar.textContent = initial;
        }
    }

    showSettings() {
        this.settingsPanel.style.display = 'block';
        this.loadSettings();
    }

    hideSettings() {
        this.settingsPanel.style.display = 'none';
    }

    async loadSettings() {
        try {
            const settings = await ipcRenderer.invoke('get-settings');
            if (settings) {
                this.stealthModeCheck.checked = settings.stealthMode || false;
                this.screenshotIntervalSelect.value = Math.floor(settings.screenshotInterval / 60000) || 5;
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }
    }

    async saveSettings() {
        try {
            const settings = {
                stealthMode: this.stealthModeCheck.checked,
                screenshotInterval: parseInt(this.screenshotIntervalSelect.value) * 60000,
                autoStart: this.autoStartCheck.checked
            };

            await ipcRenderer.invoke('update-settings', settings);
            this.showSuccess('Settings saved successfully!');
            setTimeout(() => this.hideSettings(), 1500);
        } catch (error) {
            console.error('Failed to save settings:', error);
            this.showError('Failed to save settings');
        }
    }

    showLoading() {
        this.loading.style.display = 'block';
        this.loginBtn.disabled = true;
        this.loginBtn.textContent = 'Connecting...';
    }

    hideLoading() {
        this.loading.style.display = 'none';
        this.loginBtn.disabled = false;
        this.loginBtn.textContent = 'Login';
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = 'block';
        this.successMessage.style.display = 'none';
    }

    showSuccess(message) {
        this.successMessage.textContent = message;
        this.successMessage.style.display = 'block';
        this.errorMessage.style.display = 'none';
    }

    hideMessages() {
        this.errorMessage.style.display = 'none';
        this.successMessage.style.display = 'none';
    }

    clearForm() {
        this.emailInput.value = '';
        this.passwordInput.value = '';
        this.hideMessages();
    }
}

// Initialize the UI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MonitaskAgentUI();
});
