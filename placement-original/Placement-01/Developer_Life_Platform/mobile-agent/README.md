# Monitask Mobile Agent

A professional mobile application for employee monitoring and time tracking, built with React Native for Android and iOS platforms.

## Features

### Core Mobile Tracking
- **Real-time Location Tracking**: GPS-based location monitoring with background tracking
- **App Usage Monitoring**: Track mobile app usage and screen time
- **Background Monitoring**: Continuous tracking even when app is not in foreground
- **Device Information**: Collect device stats and system information
- **Network Monitoring**: Track network usage and connectivity

### Mobile-Specific Features
- **GPS Location Services**: High-accuracy location tracking
- **Geofencing**: Define work areas and get alerts
- **Motion Detection**: Detect when user is moving or stationary
- **Battery Optimization**: Efficient background processing
- **Offline Mode**: Continue tracking when network is unavailable

### User Interface
- **Professional Design**: Clean, modern interface matching corporate standards
- **Real-time Dashboard**: Live tracking status and statistics
- **Session Management**: Start/stop tracking with visual feedback
- **Location Display**: Current location with accuracy information
- **Quick Actions**: Easy access to key features

### Integration
- **Web Platform Sync**: Real-time data synchronization with Laravel backend
- **Cross-platform**: Works on both Android and iOS
- **API Integration**: RESTful API communication
- **Secure Authentication**: Token-based login system

## Installation

### Prerequisites
- Node.js 16+ installed
- React Native development environment set up
- Android Studio (for Android development)
- Xcode (for iOS development)
- Access to Monitask web platform

### Setup Instructions

1. **Install Dependencies**
   ```bash
   cd mobile-agent
   npm install
   ```

2. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

3. **Android Setup**
   - Ensure Android SDK is installed
   - Set up Android device or emulator

4. **Configure Server URL**
   - Update server URL in `src/LoginScreen.js`
   - Replace `http://192.168.1.100:8001` with your server address

### Development

1. **Start Metro Bundler**
   ```bash
   npm start
   ```

2. **Run on Android**
   ```bash
   npm run android
   ```

3. **Run on iOS**
   ```bash
   npm run ios
   ```

### Production Build

1. **Android APK**
   ```bash
   npm run build:android
   ```

2. **iOS IPA**
   ```bash
   npm run build:ios
   ```

## App Architecture

### Screen Structure

1. **Login Screen (`LoginScreen.js`)**
   - Server URL configuration
   - Email/password authentication
   - Device registration
   - Auto-login functionality

2. **Dashboard Screen (`DashboardScreen.js`)**
   - User profile display
   - Tracking controls
   - Session statistics
   - Location information
   - Quick actions

### Core Services

1. **Authentication Service**
   - Token-based authentication
   - Secure credential storage
   - Auto-logout on token expiry

2. **Location Service**
   - GPS coordinate tracking
   - Background location updates
   - Location accuracy monitoring
   - Geofencing capabilities

3. **Data Sync Service**
   - Real-time API communication
   - Background data transmission
   - Offline data caching
   - Heartbeat monitoring

4. **Background Service**
   - Continuous monitoring
   - Battery optimization
   - App usage tracking
   - System event monitoring

## Permissions Required

### Android Permissions
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
```

### iOS Permissions
- Location Services (Always)
- Background App Refresh
- Notifications
- Network Access

## Configuration

### Server Integration

Update the server URL in the login screen:
```javascript
const [serverUrl, setServerUrl] = useState('https://your-monitask-server.com');
```

### Tracking Intervals

Configure monitoring intervals in `DashboardScreen.js`:
```javascript
// Location updates every 5 minutes
const LOCATION_INTERVAL = 300000;

// App usage checks every minute
const USAGE_INTERVAL = 60000;

// Heartbeat every 30 seconds
const HEARTBEAT_INTERVAL = 30000;
```

### Background Processing

The app uses React Native background jobs for continuous monitoring:
```javascript
BackgroundJob.start({
  jobKey: 'monitaskTracking',
  period: 60000, // 1 minute intervals
});
```

## Data Collection

### Location Data
- GPS coordinates (latitude/longitude)
- Accuracy radius
- Altitude and speed
- Heading direction
- Timestamp

### App Usage Data
- Active application package
- Screen time duration
- App category classification
- Usage frequency

### Device Information
- Device model and OS version
- Battery level and charging status
- Network connectivity type
- Memory and storage usage

## API Endpoints

The mobile app communicates with these Laravel backend endpoints:

- `POST /api/login` - User authentication
- `POST /monitask/agents/register` - Device registration
- `POST /monitask/agents/heartbeat` - Status updates
- `POST /monitask/agents/location-data` - GPS coordinates
- `POST /monitask/agents/activity-log` - App usage data
- `POST /monitask/agents/start` - Start tracking
- `POST /monitask/agents/stop` - Stop tracking

## Security Features

### Data Protection
- Token-based authentication
- Encrypted data transmission
- Secure local storage
- SSL/TLS communication

### Privacy Controls
- User consent for location access
- Transparent data collection
- Local data management
- Right to data deletion

### Access Control
- Role-based access
- Session timeout
- Automatic logout
- Device authorization

## Development Notes

### React Native Dependencies
- `react-navigation` - Screen navigation
- `react-native-geolocation-service` - GPS tracking
- `react-native-background-job` - Background processing
- `react-native-device-info` - Device information
- `react-native-linear-gradient` - UI gradients
- `@react-native-async-storage/async-storage` - Data storage

### Native Modules Required
Some features require native Android/iOS modules:
- App usage statistics
- System-level monitoring
- Advanced location services
- Background processing

### Performance Optimization
- Efficient location polling
- Battery usage optimization
- Memory management
- Network request batching

## Deployment

### App Store Submission

1. **iOS App Store**
   - Apple Developer Account required
   - App Store Review Guidelines compliance
   - Privacy policy and data usage disclosure
   - Location usage justification

2. **Google Play Store**
   - Google Play Developer Account
   - Target API level compliance
   - Permission usage justification
   - Privacy policy requirement

### Enterprise Distribution

For corporate deployment:
- Use enterprise certificates
- MDM (Mobile Device Management) integration
- Custom app store distribution
- Bulk device enrollment

## Testing

### Unit Testing
```bash
npm test
```

### Device Testing
- Test on various Android devices
- Test on different iOS versions
- Verify location accuracy
- Test background processing

### Performance Testing
- Battery usage analysis
- Memory leak detection
- Network usage monitoring
- Location accuracy testing

## Troubleshooting

### Common Issues

1. **Location Not Working**
   - Check location permissions
   - Verify GPS is enabled
   - Test in outdoor environment
   - Check background app refresh

2. **Background Tracking Stops**
   - Verify background app refresh enabled
   - Check battery optimization settings
   - Ensure app is not being killed by system
   - Review foreground service implementation

3. **Login Issues**
   - Verify server URL is correct
   - Check network connectivity
   - Validate credentials
   - Review API response logs

### Debug Logging

Enable debug mode:
```javascript
// In App.js
const DEBUG_MODE = __DEV__;

if (DEBUG_MODE) {
  console.log('Debug mode enabled');
}
```

### Log Files
Debug logs are available in:
- Android: Device logs via ADB
- iOS: Xcode console output
- React Native: Metro bundler logs

## Support

### Documentation
- React Native docs: https://reactnative.dev/
- Navigation: https://reactnavigation.org/
- Geolocation: https://github.com/Agontuk/react-native-geolocation-service

### Monitask Platform
- Web Dashboard: Settings → Mobile Agents
- API Documentation: /api/documentation
- Support: support@monitask-platform.com

---

**Note**: This mobile agent is designed to work with the Monitask Laravel backend. Ensure your server has the required API endpoints before deploying the mobile app.
