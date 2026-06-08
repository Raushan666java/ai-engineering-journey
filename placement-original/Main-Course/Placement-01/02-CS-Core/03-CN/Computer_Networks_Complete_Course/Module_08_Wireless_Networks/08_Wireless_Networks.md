# Module 8: Wireless Networks

## Wireless Networking Overview
Wireless networks use radio waves, microwaves, or infrared signals to transmit data without physical cables.

## Radio Frequency Fundamentals

### Electromagnetic Spectrum
```
Radio Waves:    3 kHz - 300 GHz
Microwaves:     300 MHz - 300 GHz
Infrared:       300 GHz - 400 THz
Visible Light:  400 THz - 800 THz
```

### Key RF Concepts
- **Frequency**: Number of cycles per second (Hz)
- **Wavelength**: Distance between wave peaks
- **Amplitude**: Signal strength
- **Phase**: Timing relationship between waves

### RF Propagation
1. **Line of Sight**: Direct path between antennas
2. **Reflection**: Signal bounces off surfaces
3. **Refraction**: Signal bends through different media
4. **Diffraction**: Signal bends around obstacles
5. **Scattering**: Signal disperses in multiple directions

### Path Loss and Attenuation
```
Free Space Path Loss (dB) = 20 log₁₀(d) + 20 log₁₀(f) + 32.44
Where: d = distance (km), f = frequency (MHz)
```

## WiFi (IEEE 802.11) Standards

### WiFi Evolution
```
802.11 (1997):    2 Mbps,    2.4 GHz
802.11a (1999):   54 Mbps,   5 GHz
802.11b (1999):   11 Mbps,   2.4 GHz
802.11g (2003):   54 Mbps,   2.4 GHz
802.11n (2009):   600 Mbps,  2.4/5 GHz
802.11ac (2013):  6.93 Gbps, 5 GHz
802.11ax (2019):  9.6 Gbps,  2.4/5/6 GHz (WiFi 6)
802.11be (2024):  46 Gbps,   2.4/5/6 GHz (WiFi 7)
```

### WiFi 6 (802.11ax) Features
- **OFDMA**: Orthogonal Frequency Division Multiple Access
- **MU-MIMO**: Multi-User Multiple Input Multiple Output
- **BSS Coloring**: Reduce interference between networks
- **Target Wake Time**: Improve battery life
- **1024-QAM**: Higher data rates

### WiFi Frequency Bands
**2.4 GHz Band:**
- Channels: 1-14 (1-11 in US)
- Non-overlapping: 1, 6, 11
- Longer range, more interference

**5 GHz Band:**
- Channels: 36-165 (varies by country)
- More channels available
- Shorter range, less interference

**6 GHz Band (WiFi 6E):**
- Channels: 1-233
- Clean spectrum, no legacy devices
- Very high capacity

## WiFi Network Architecture

### Basic Service Set (BSS)
- **Infrastructure BSS**: Access Point + Stations
- **Independent BSS (IBSS)**: Ad-hoc network
- **Extended Service Set (ESS)**: Multiple connected APs

### WiFi Frame Types
1. **Management Frames**: Network management
   - Beacon, Probe Request/Response
   - Authentication, Association
   - Deauthentication, Disassociation

2. **Control Frames**: Medium access control
   - RTS (Request to Send)
   - CTS (Clear to Send)
   - ACK (Acknowledgment)

3. **Data Frames**: User data transmission

### CSMA/CA (Collision Avoidance)
```
1. Listen for channel idle
2. Wait for DIFS (Distributed Inter-Frame Space)
3. If busy, wait for random backoff
4. Send RTS (optional)
5. Receive CTS (optional)
6. Transmit data frame
7. Receive ACK
```

## WiFi Security

### Security Evolution
```
WEP (1997):     Wired Equivalent Privacy - BROKEN
WPA (2003):     WiFi Protected Access - Deprecated
WPA2 (2004):    Strong security with AES
WPA3 (2018):    Latest standard with enhanced security
```

### WPA2 Security
**WPA2-PSK (Personal):**
- Pre-Shared Key authentication
- AES-CCMP encryption
- Suitable for home/small office

**WPA2-Enterprise:**
- 802.1X authentication
- RADIUS server integration
- Individual user credentials

### WPA3 Enhancements
- **SAE**: Simultaneous Authentication of Equals
- **Forward Secrecy**: Past sessions remain secure
- **Brute Force Protection**: Limits password guessing
- **Enhanced Open**: Encryption for open networks

### WiFi Security Configuration
```
# WPA2-PSK Configuration
ssid MyNetwork
wpa=2
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
wpa_passphrase=MySecurePassword123!

# WPA2-Enterprise Configuration
ssid CorporateNetwork
wpa=2
wpa_key_mgmt=WPA-EAP
auth_algs=1
eap=PEAP
identity=username
password=password
```

## Enterprise WiFi

### Wireless LAN Controller (WLC)
- **Centralized Management**: Configure multiple APs
- **Roaming Support**: Seamless client movement
- **Load Balancing**: Distribute clients across APs
- **Security Policies**: Consistent security enforcement

### Lightweight Access Point Protocol (LWAPP/CAPWAP)
- **Split-MAC Architecture**: Control vs Data plane
- **Centralized Intelligence**: WLC handles decisions
- **Simplified AP Management**: Zero-touch deployment

### WiFi Site Survey
**Predictive Survey:**
- Use floor plans and RF modeling
- Estimate coverage and capacity
- Plan AP placement

**Active Survey:**
- Measure actual RF conditions
- Test with real devices
- Validate design assumptions

**Passive Survey:**
- Monitor existing RF environment
- Identify interference sources
- Analyze spectrum usage

## Bluetooth Technology

### Bluetooth Versions
```
Bluetooth 1.x:  1 Mbps,     10m range
Bluetooth 2.x:  3 Mbps,     10m range (EDR)
Bluetooth 3.x:  24 Mbps,    10m range (HS)
Bluetooth 4.x:  1 Mbps,     50m range (LE)
Bluetooth 5.x:  2 Mbps,     200m range (LE)
```

### Bluetooth Low Energy (BLE)
- **Ultra-low power consumption**
- **Coin cell battery operation**
- **IoT and wearable devices**
- **Mesh networking support**

### Bluetooth Network Topologies
- **Piconet**: 1 master + 7 active slaves
- **Scatternet**: Overlapping piconets
- **Mesh Network**: Many-to-many connections

## Cellular Networks

### Cellular Evolution
```
1G (1980s):  Analog voice (AMPS)
2G (1990s):  Digital voice + SMS (GSM, CDMA)
3G (2000s):  Mobile data (UMTS, CDMA2000)
4G (2010s):  High-speed data (LTE, WiMAX)
5G (2020s):  Ultra-fast, low latency
```

### 4G LTE Architecture
- **eNodeB**: Base station with radio functions
- **MME**: Mobility Management Entity
- **S-GW**: Serving Gateway
- **P-GW**: Packet Data Network Gateway
- **HSS**: Home Subscriber Server

### 5G Network Architecture
**Service-Based Architecture (SBA):**
- **AMF**: Access and Mobility Management
- **SMF**: Session Management Function
- **UPF**: User Plane Function
- **AUSF**: Authentication Server Function

### 5G Key Features
- **Enhanced Mobile Broadband (eMBB)**: High data rates
- **Ultra-Reliable Low Latency (URLLC)**: Mission-critical apps
- **Massive Machine Type Communications (mMTC)**: IoT scale

### Network Slicing
```
Slice 1: eMBB    - High bandwidth for consumers
Slice 2: URLLC   - Low latency for autonomous vehicles
Slice 3: mMTC    - Massive IoT connectivity
```

## IoT Wireless Technologies

### Short-Range IoT
**Zigbee:**
- IEEE 802.15.4 based
- Mesh networking
- Low power consumption
- Home automation

**Z-Wave:**
- Proprietary protocol
- Mesh networking
- Sub-1 GHz frequency
- Smart home devices

**Thread:**
- IPv6-based mesh
- Low power
- Interoperability focus
- Matter/Thread ecosystem

### Long-Range IoT
**LoRaWAN:**
- Long Range Wide Area Network
- Up to 15 km range
- Very low power
- Star topology

**NB-IoT:**
- Narrowband IoT
- Cellular-based
- Deep indoor coverage
- Massive device support

**Sigfox:**
- Ultra-narrowband
- Up to 50 km range
- Very low data rates
- Simple device design

## Satellite Communication

### Satellite Orbits
**Geostationary (GEO):**
- 35,786 km altitude
- Fixed position relative to Earth
- High latency (~500ms)
- Wide coverage area

**Medium Earth Orbit (MEO):**
- 2,000-35,786 km altitude
- GPS satellites
- Moderate latency
- Regional coverage

**Low Earth Orbit (LEO):**
- 160-2,000 km altitude
- Low latency (~20-40ms)
- Starlink, OneWeb
- Global coverage with constellation

### Satellite Internet
**Traditional Satellite:**
- GEO satellites
- High latency
- Limited bandwidth
- Rural connectivity

**LEO Constellations:**
- Thousands of satellites
- Low latency
- High bandwidth
- Global broadband coverage

## Wireless Network Design

### Coverage Planning
1. **Requirements Analysis**: Capacity, coverage, applications
2. **Site Survey**: RF environment assessment
3. **AP Placement**: Optimal locations for coverage
4. **Channel Planning**: Minimize interference
5. **Power Settings**: Balance coverage and interference

### Capacity Planning
```
Total Capacity = Number of APs × AP Capacity × Efficiency Factor
User Capacity = Total Capacity ÷ Number of Users
```

### Interference Mitigation
- **Channel Selection**: Use non-overlapping channels
- **Power Control**: Reduce unnecessary power
- **Antenna Selection**: Directional vs omnidirectional
- **Band Steering**: Move clients to less congested bands

## Practical Exercises

### Exercise 1: WiFi Site Survey
1. Use WiFi analyzer to survey environment
2. Identify interference sources
3. Plan optimal AP placement
4. Measure signal strength and quality

### Exercise 2: Wireless Security Assessment
1. Scan for wireless networks
2. Identify security vulnerabilities
3. Test WPS and weak passwords
4. Implement security best practices

### Exercise 3: IoT Network Design
1. Design IoT network for smart building
2. Select appropriate wireless technologies
3. Plan device placement and connectivity
4. Consider power and security requirements

## Lab Assignment
1. Deploy enterprise WiFi network
2. Configure WLC and lightweight APs
3. Implement multiple SSIDs with different security
4. Test roaming and load balancing

## Wireless Troubleshooting

### Common Issues
- **Poor Signal Strength**: Distance, obstacles, interference
- **Slow Performance**: Congestion, interference, old standards
- **Connection Drops**: Power saving, roaming issues
- **Security Problems**: Weak passwords, outdated encryption

### Troubleshooting Tools
```bash
# WiFi scanning
iwlist scan
nmcli dev wifi

# Signal strength
iwconfig
iw dev wlan0 link

# Spectrum analysis
# Use dedicated tools like WiFi Explorer, inSSIDer
```

### Performance Optimization
1. **Update Drivers**: Latest wireless drivers
2. **Optimize Channels**: Use 5 GHz when possible
3. **Adjust Power**: Balance coverage and interference
4. **Update Firmware**: Keep APs current
5. **Monitor Usage**: Identify bandwidth hogs

## Quiz Questions
1. What are the differences between 2.4 GHz and 5 GHz WiFi bands?
2. How does WPA3 improve security over WPA2?
3. Explain the concept of network slicing in 5G
4. What are the advantages of LEO satellite constellations?
5. How does CSMA/CA differ from CSMA/CD?

## Next Module
Module 9: Network Management - Monitoring and Troubleshooting