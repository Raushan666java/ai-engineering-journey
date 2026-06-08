# Module 2: Physical Layer

## Physical Layer Overview
The Physical Layer (Layer 1) is responsible for the actual transmission of raw bits over a physical medium.

## Transmission Media

### Guided Media (Wired)

#### 1. Twisted Pair Cable
**Unshielded Twisted Pair (UTP)**
- Categories: Cat5e, Cat6, Cat6a, Cat7
- Distance: Up to 100 meters
- Applications: Ethernet networks

**Shielded Twisted Pair (STP)**
- Better noise immunity
- More expensive than UTP
- Used in industrial environments

#### 2. Coaxial Cable
- Central conductor surrounded by insulation
- Better bandwidth than twisted pair
- Applications: Cable TV, older Ethernet (10Base2, 10Base5)

#### 3. Fiber Optic Cable
**Single-mode Fiber**
- Core diameter: 8-10 microns
- Distance: Up to 100+ km
- Applications: Long-distance, high-speed networks

**Multi-mode Fiber**
- Core diameter: 50-62.5 microns
- Distance: Up to 2 km
- Applications: Campus networks, data centers

### Unguided Media (Wireless)

#### 1. Radio Waves
- Frequency: 3 kHz to 300 GHz
- Omnidirectional propagation
- Applications: AM/FM radio, WiFi, Bluetooth

#### 2. Microwaves
- Frequency: 300 MHz to 300 GHz
- Line-of-sight transmission
- Applications: Satellite communication, point-to-point links

#### 3. Infrared
- Frequency: 300 GHz to 400 THz
- Short-range communication
- Applications: Remote controls, IrDA

## Signal Encoding

### Digital-to-Digital Encoding
1. **Non-Return-to-Zero (NRZ)**
   - NRZ-L: Low = 0, High = 1
   - NRZ-I: Inversion represents 1

2. **Return-to-Zero (RZ)**
   - Signal returns to zero in middle of bit period

3. **Manchester Encoding**
   - Used in Ethernet (10Base-T)
   - Transition in middle: Low-to-High = 1, High-to-Low = 0

4. **Differential Manchester**
   - Used in Token Ring
   - Transition at beginning indicates bit value

### Analog-to-Digital Encoding
1. **Pulse Code Modulation (PCM)**
   - Sampling, Quantization, Encoding
   - Used in digital telephony

2. **Delta Modulation**
   - Transmits difference between samples
   - Lower bandwidth requirement

## Multiplexing Techniques

### Time Division Multiplexing (TDM)
```
Channel A: |--A1--|--A2--|--A3--|
Channel B: |--B1--|--B2--|--B3--|
Channel C: |--C1--|--C2--|--C3--|
Multiplexed: |A1|B1|C1|A2|B2|C2|A3|B3|C3|
```

### Frequency Division Multiplexing (FDM)
- Different channels use different frequency bands
- Guard bands prevent interference
- Used in radio, TV broadcasting

### Wavelength Division Multiplexing (WDM)
- Multiple optical signals on single fiber
- Dense WDM (DWDM): 40+ channels
- Coarse WDM (CWDM): 8-18 channels

## Network Hardware

### Repeaters
- Amplify and regenerate signals
- Extend network distance
- Operate at Physical Layer

### Hubs
- Multi-port repeaters
- Share collision domain
- Half-duplex operation
- Largely obsolete

### Network Interface Cards (NICs)
- Connect devices to network
- MAC address assignment
- Signal conversion (digital ↔ analog)

## Cable Standards

### Ethernet Cable Standards
```
10Base-T:    10 Mbps, Twisted Pair, 100m
100Base-TX:  100 Mbps, Cat5 UTP, 100m
1000Base-T:  1 Gbps, Cat5e/Cat6, 100m
10GBase-T:   10 Gbps, Cat6a/Cat7, 100m
```

### Fiber Standards
```
1000Base-SX: 1 Gbps, Multi-mode, 550m
1000Base-LX: 1 Gbps, Single-mode, 10km
10GBase-SR:  10 Gbps, Multi-mode, 300m
10GBase-LR:  10 Gbps, Single-mode, 10km
```

## Power over Ethernet (PoE)

### PoE Standards
- **PoE (802.3af)**: 15.4W, 12.95W available
- **PoE+ (802.3at)**: 30W, 25.5W available
- **PoE++ (802.3bt)**: 60W/100W options

### PoE Applications
- IP phones, wireless access points
- Security cameras, LED lighting
- IoT devices, small switches

## Signal Transmission

### Transmission Impairments
1. **Attenuation**: Signal strength decreases with distance
2. **Distortion**: Signal shape changes
3. **Noise**: Unwanted electrical signals

### Noise Types
- **Thermal Noise**: Random electron movement
- **Intermodulation Noise**: Signal mixing
- **Crosstalk**: Signal interference between cables
- **Impulse Noise**: Irregular pulses

## Practical Exercises

### Exercise 1: Cable Testing
1. Use cable tester to verify UTP cable
2. Test for continuity, wire mapping, length
3. Identify common cable faults

### Exercise 2: Signal Analysis
1. Use oscilloscope to view digital signals
2. Observe Manchester encoding
3. Measure signal attenuation over distance

### Exercise 3: Fiber Optic Testing
1. Use OTDR to test fiber cable
2. Measure optical power levels
3. Identify fiber breaks or bends

## Lab Assignment
1. Create different cable types (straight-through, crossover)
2. Test cable performance with network tester
3. Compare copper vs fiber transmission
4. Document findings and performance metrics

## Troubleshooting Physical Layer
```bash
# Check cable connectivity
ping -t 192.168.1.1

# View interface statistics
show interfaces fastethernet0/0

# Check for errors
show interfaces counters errors

# Cable diagnostics (Cisco)
test cable-diagnostics tdr interface fa0/1
```

## Quiz Questions
1. What is the maximum distance for Cat6 UTP cable?
2. Explain the difference between single-mode and multi-mode fiber
3. What encoding method does Ethernet use?
4. How does PoE+ differ from standard PoE?
5. What causes crosstalk in twisted pair cables?

## Next Module
Module 3: Data Link Layer - Framing and Error Control