import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Switch,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import NetInfo from '@react-native-community/netinfo';
import BackgroundJob from 'react-native-background-job';
import axios from 'axios';

const { width } = Dimensions.get('window');

const DashboardScreen = ({ user, authToken, navigation }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [todayStats, setTodayStats] = useState({
    totalTime: 0,
    productivity: 0,
    locations: 0,
    apps: 0,
  });
  const [currentLocation, setCurrentLocation] = useState(null);
  const [serverUrl, setServerUrl] = useState('');
  const [agentId, setAgentId] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);

  useEffect(() => {
    initializeDashboard();
    setupLocationTracking();
    startHeartbeat();
    
    return () => {
      stopTracking();
    };
  }, []);

  const initializeDashboard = async () => {
    try {
      const url = await AsyncStorage.getItem('serverUrl');
      const id = await AsyncStorage.getItem('agentId');
      setServerUrl(url || '');
      setAgentId(id);
      
      // Load tracking state
      const trackingState = await AsyncStorage.getItem('isTracking');
      if (trackingState === 'true') {
        setIsTracking(true);
        const startTime = await AsyncStorage.getItem('sessionStartTime');
        if (startTime) {
          setSessionStartTime(new Date(startTime));
        }
      }
    } catch (error) {
      console.error('Dashboard initialization failed:', error);
    }
  };

  const setupLocationTracking = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        ]);
        
        if (
          granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          getCurrentLocation();
        }
      } catch (error) {
        console.error('Location permission error:', error);
      }
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(),
        });
      },
      (error) => {
        console.error('Location error:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const startHeartbeat = () => {
    setInterval(async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const id = await AsyncStorage.getItem('agentId');
        const url = await AsyncStorage.getItem('serverUrl');
        
        if (!token || !id || !url) return;

        await axios.post(
          `${url}/monitask/agents/heartbeat`,
          { agent_id: id },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error) {
        console.error('Heartbeat failed:', error);
      }
    }, 30000); // 30 seconds
  };

  const startTracking = async () => {
    try {
      setIsTracking(true);
      const startTime = new Date();
      setSessionStartTime(startTime);
      
      await AsyncStorage.setItem('isTracking', 'true');
      await AsyncStorage.setItem('sessionStartTime', startTime.toISOString());
      
      // Start background monitoring
      startBackgroundMonitoring();
      
      // Notify server
      await notifyServerTrackingStart();
      
      Alert.alert('Tracking Started', 'Mobile monitoring is now active');
    } catch (error) {
      console.error('Failed to start tracking:', error);
      Alert.alert('Error', 'Failed to start tracking');
    }
  };

  const stopTracking = async () => {
    try {
      setIsTracking(false);
      setSessionStartTime(null);
      setSessionDuration(0);
      
      await AsyncStorage.setItem('isTracking', 'false');
      await AsyncStorage.removeItem('sessionStartTime');
      
      // Stop background monitoring
      stopBackgroundMonitoring();
      
      // Notify server
      await notifyServerTrackingStop();
      
      Alert.alert('Tracking Stopped', 'Mobile monitoring has been stopped');
    } catch (error) {
      console.error('Failed to stop tracking:', error);
    }
  };

  const startBackgroundMonitoring = () => {
    BackgroundJob.on('start', () => {
      console.log('Background monitoring started');
      
      // Background tasks
      setInterval(() => {
        if (isTracking) {
          collectLocationData();
          collectAppUsageData();
          updateSessionDuration();
        }
      }, 60000); // Every minute
    });

    BackgroundJob.start({
      jobKey: 'monitaskTracking',
      period: 60000, // 1 minute
    });
  };

  const stopBackgroundMonitoring = () => {
    BackgroundJob.stop();
  };

  const collectLocationData = async () => {
    try {
      Geolocation.getCurrentPosition(
        async (position) => {
          const locationData = {
            agent_id: agentId,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            speed: position.coords.speed,
            heading: position.coords.heading,
          };

          // Send to server
          await sendLocationData(locationData);
          
          // Update current location
          setCurrentLocation({
            ...locationData,
            timestamp: new Date(),
          });
        },
        (error) => {
          console.error('Location collection error:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      console.error('Failed to collect location data:', error);
    }
  };

  const collectAppUsageData = async () => {
    try {
      // This would require native modules for app usage stats
      // For now, we'll simulate app usage data
      const appUsageData = {
        agent_id: agentId,
        application_name: 'Mobile Device',
        category: 'mobile',
        duration_seconds: 60,
        app_package: 'com.monitask.agent',
      };

      await sendAppUsageData(appUsageData);
    } catch (error) {
      console.error('Failed to collect app usage data:', error);
    }
  };

  const sendLocationData = async (locationData) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const url = await AsyncStorage.getItem('serverUrl');
      
      if (!token || !url) return;

      await axios.post(
        `${url}/monitask/agents/location-data`,
        locationData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Failed to send location data:', error);
    }
  };

  const sendAppUsageData = async (appData) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const url = await AsyncStorage.getItem('serverUrl');
      
      if (!token || !url) return;

      await axios.post(
        `${url}/monitask/agents/activity-log`,
        appData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Failed to send app usage data:', error);
    }
  };

  const notifyServerTrackingStart = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const url = await AsyncStorage.getItem('serverUrl');
      
      if (!token || !url) return;

      await axios.post(
        `${url}/monitask/agents/start`,
        { agent_id: agentId },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Failed to notify server about tracking start:', error);
    }
  };

  const notifyServerTrackingStop = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const url = await AsyncStorage.getItem('serverUrl');
      
      if (!token || !url) return;

      await axios.post(
        `${url}/monitask/agents/stop`,
        { agent_id: agentId },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Failed to notify server about tracking stop:', error);
    }
  };

  const updateSessionDuration = () => {
    if (sessionStartTime) {
      const now = new Date();
      const duration = Math.floor((now - sessionStartTime) / 1000);
      setSessionDuration(duration);
    }
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await stopTracking();
              await AsyncStorage.clear();
              navigation.replace('Login');
            } catch (error) {
              console.error('Logout failed:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </Text>
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{user?.name || 'User'}</Text>
              <Text style={styles.userEmail}>{user?.email || ''}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <View style={[styles.statusIndicator, isTracking ? styles.online : styles.offline]} />
            <Text style={styles.statusText}>
              {isTracking ? 'Tracking Active' : 'Tracking Stopped'}
            </Text>
          </View>
          
          <Text style={styles.sessionTime}>
            Session: {formatDuration(sessionDuration)}
          </Text>
          
          <View style={styles.trackingControls}>
            <TouchableOpacity
              style={[styles.trackingButton, isTracking ? styles.stopButton : styles.startButton]}
              onPress={isTracking ? stopTracking : startTracking}
            >
              <Text style={styles.trackingButtonText}>
                {isTracking ? 'Stop Tracking' : 'Start Tracking'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{Math.floor(todayStats.totalTime)}h</Text>
            <Text style={styles.statLabel}>Today</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{todayStats.productivity}%</Text>
            <Text style={styles.statLabel}>Productivity</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{todayStats.locations}</Text>
            <Text style={styles.statLabel}>Locations</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{todayStats.apps}</Text>
            <Text style={styles.statLabel}>Apps</Text>
          </View>
        </View>

        {/* Location Card */}
        {currentLocation && (
          <View style={styles.locationCard}>
            <Text style={styles.cardTitle}>Current Location</Text>
            <Text style={styles.locationText}>
              Lat: {currentLocation.latitude.toFixed(6)}
            </Text>
            <Text style={styles.locationText}>
              Lng: {currentLocation.longitude.toFixed(6)}
            </Text>
            <Text style={styles.locationText}>
              Accuracy: {currentLocation.accuracy?.toFixed(0)}m
            </Text>
            <Text style={styles.lastUpdate}>
              Last update: {currentLocation.timestamp?.toLocaleTimeString()}
            </Text>
          </View>
        )}

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  logoutButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  logoutText: {
    color: 'white',
    fontWeight: '600',
  },
  statusCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  online: {
    backgroundColor: '#4CAF50',
  },
  offline: {
    backgroundColor: '#ff6b6b',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  sessionTime: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  trackingControls: {
    width: '100%',
  },
  trackingButton: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#ff6b6b',
  },
  trackingButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    padding: 20,
    width: (width - 50) / 2,
    marginBottom: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  locationCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  locationText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  lastUpdate: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DashboardScreen;
