# Monitask Desktop Agent

A professional desktop monitoring application built with Electron.js that integrates seamlessly with the Monitask web platform.

## Features

### Core Monitoring
- **Real-time Activity Tracking**: Monitors keystrokes, mouse clicks, movements, and scroll events
- **Application Monitoring**: Tracks active applications and window titles
- **URL Tracking**: Monitors browser URLs and web activity
- **Screenshot Capture**: Periodic screenshots with configurable intervals
- **Idle Time Detection**: Accurately tracks active vs idle time

### Productivity Analytics
- **Activity Categorization**: Automatically categorizes activities as productive, neutral, or unproductive
- **Productivity Scoring**: Real-time productivity percentage calculation
- **Time Tracking**: Precise time tracking with session management
- **Activity Reports**: Detailed activity logs sent to the web platform

### Security & Privacy
- **Stealth Mode**: Invisible monitoring option
- **Secure Authentication**: Token-based authentication with the web platform
- **Encrypted Data Transfer**: All data securely transmitted to the server
- **Local Data Protection**: Sensitive data handled securely

### Platform Integration
- **Web Dashboard Sync**: Real-time synchronization with the web platform
- **Agent Management**: Remote configuration and control
- **Heartbeat Monitoring**: Regular status updates to the server
- **Automatic Updates**: Seamless agent updates and configuration

## Installation

### Prerequisites
- Node.js 16+ installed
- Access to the Monitask web platform
- Windows, macOS, or Linux operating system

### Setup Steps

1. **Install Dependencies**
   ```powershell
   cd desktop-agent
   npm install
   ```

2. **Development Mode**
   ```powershell
   npm start
   ```

3. **Build for Production**
   ```powershell
   # Build for current platform
   npm run build
   
   # Build for Windows
   npm run build:win
   
   # Build for macOS
   npm run build:mac
   
   # Build for Linux
   npm run build:linux
   ```

## Configuration

### Default Settings
- Screenshot Interval: 5 minutes
- Activity Logging: 1 minute intervals
- Heartbeat: 30 seconds
- Server URL: http://127.0.0.1:8001

### Environment Variables
```bash
MONITASK_SERVER_URL=https://your-monitask-domain.com
MONITASK_SCREENSHOT_INTERVAL=300000
MONITASK_ACTIVITY_INTERVAL=60000
MONITASK_STEALTH_MODE=false
```

## Usage

### First Time Setup

1. **Launch the Application**
   - Run the installed application or use `npm start` for development

2. **Login with Monitask Credentials**
   - Enter your Monitask web platform email and password
   - The agent will automatically register with the server

3. **Start Monitoring**
   - Click "Start Tracking" to begin monitoring
   - The agent will run in the background and sync data

### Features Overview

#### Login Interface
- Secure authentication with the web platform
- Automatic device registration
- User profile management

#### Dashboard
- Real-time monitoring status
- Session duration tracking
- Live productivity statistics
- Quick action buttons

#### Settings Panel
- Screenshot interval configuration
- Stealth mode toggle
- Auto-start with system option
- Server connection settings

#### System Tray Integration
- Quick access to monitoring controls
- Background operation
- Context menu with essential actions

## Technical Architecture

### Core Components

1. **Main Process (`main.js`)**
   - Electron app initialization
   - System integration
   - Background monitoring
   - API communication

2. **Renderer Process (`renderer/`)**
   - User interface
   - Dashboard and settings
   - User interactions

3. **Activity Tracking**
   - Native system monitoring
   - Application detection
   - Input event capture

### Data Flow

1. **Activity Collection**
   ```
   System Events → Activity Tracker → Data Aggregation → API Submission
   ```

2. **Screenshot Capture**
   ```
   Screen Capture → Image Processing → Compression → Upload to Server
   ```

3. **Real-time Sync**
   ```
   Local Data → Batch Processing → Secure Transmission → Web Dashboard
   ```

### API Integration

The agent communicates with the Monitask web platform through these endpoints:

- `POST /api/login` - User authentication
- `POST /monitask/agents/register` - Agent registration
- `POST /monitask/agents/heartbeat` - Status updates
- `POST /monitask/agents/keystroke-data` - Activity data
- `POST /monitask/agents/screenshot` - Screenshot uploads
- `POST /monitask/agents/activity-log` - Activity logs

## Security Features

### Data Protection
- Local data encryption
- Secure token storage
- HTTPS communication
- No sensitive data caching

### Privacy Controls
- User consent required
- Transparent data collection
- Local data control
- Secure deletion

### Access Control
- Role-based permissions
- Session management
- Automatic logout
- Device authorization

## Development

### Project Structure
```
desktop-agent/
├── src/
│   ├── main.js              # Main Electron process
│   └── renderer/
│       ├── index.html       # UI layout
│       └── renderer.js      # UI logic
├── assets/
│   ├── icon.png            # App icon
│   └── tray-icon.png       # Tray icon
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Development Commands
```powershell
# Start development server
npm start

# Run with debugging
npm run dev

# Lint code
npm run lint

# Run tests
npm test

# Clean build files
npm run clean
```

### Building Executables

The application can be packaged into standalone executables:

- **Windows**: Creates `.exe` installer with NSIS
- **macOS**: Creates `.dmg` disk image
- **Linux**: Creates `.AppImage` and `.deb` packages

## Troubleshooting

### Common Issues

1. **Login Failed**
   - Check internet connection
   - Verify server URL in settings
   - Ensure web platform is accessible

2. **Monitoring Not Starting**
   - Check system permissions
   - Verify agent registration
   - Review console logs

3. **Screenshots Not Uploading**
   - Check file permissions
   - Verify server connectivity
   - Review storage quotas

### Debug Mode
Enable debug logging by setting:
```bash
DEBUG=monitask:*
```

### Log Files
- Windows: `%APPDATA%/Monitask Agent/logs/`
- macOS: `~/Library/Application Support/Monitask Agent/logs/`
- Linux: `~/.config/Monitask Agent/logs/`

## System Requirements

### Minimum Requirements
- **OS**: Windows 10, macOS 10.14, Ubuntu 18.04+
- **RAM**: 512 MB available
- **Storage**: 100 MB free space
- **Network**: Stable internet connection

### Recommended Requirements
- **OS**: Windows 11, macOS 12+, Ubuntu 20.04+
- **RAM**: 1 GB available
- **Storage**: 500 MB free space
- **Network**: Broadband connection

## License

This software is part of the Monitask Employee Monitoring Platform.
All rights reserved.

## Support

For technical support and documentation:
- Web Dashboard: Settings → Help & Support
- Email: support@monitask-platform.com
- Documentation: https://docs.monitask-platform.com

---

**Note**: This desktop agent is designed to work exclusively with the Monitask web platform. Ensure your web platform is properly configured before deploying agents to end users.
