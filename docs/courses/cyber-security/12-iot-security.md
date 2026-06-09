# IoT Security

## Learning Objectives

After completing this chapter, students will be able to describe IoT architecture layers and their security implications, analyse IoT communication protocols for vulnerabilities, identify common IoT security weaknesses, perform firmware analysis to discover hardcoded secrets and backdoors, conduct IoT penetration testing, and apply the OWASP IoT Top 10 as a security assessment framework.

## Theory

### IoT Architecture

The Internet of Things (IoT) architecture consists of perception (sensors, actuators), network (gateways, communication protocols), cloud (data processing, storage), and user interface (dashboards, mobile apps). Each layer introduces distinct security challenges. Sensors often have severe resource constraints limiting cryptographic capabilities. Gateways aggregate and pre-process data but become single points of compromise. Cloud platforms scale but inherit cloud security risks. User interfaces may expose control functionality with inadequate authentication.

### IoT Communication Protocols

MQTT (Message Queue Telemetry Transport) is a publish-subscribe protocol designed for lightweight machine-to-machine communication. The broker distributes messages by topic. Security relies on TLS encryption and authentication, but many deployments use cleartext MQTT on port 1883 with no authentication. CoAP (Constrained Application Protocol) is a UDP-based RESTful protocol for constrained devices, secured through DTLS. AMQP provides advanced queuing for enterprise IoT. HTTP/2 is used for device-to-cloud and cloud-to-cloud communication. Thread is a low-power mesh networking protocol supporting IPv6. Zigbee operates on the 2.4 GHz IEEE 802.15.4 standard, using AES-128 encryption with a network key that may be pre-shared and static. Z-Wave is a proprietary sub-GHz protocol. Bluetooth Low Energy (BLE) is widely used for pairing and short-range control.

### Common IoT Security Issues

Default credentials remain the most exploited weakness. Shodan searches reveal thousands of devices accessible with credentials such as admin/admin or root/root. Lack of encryption exposes data in transit to interception. Hardcoded keys and backdoors in firmware enable permanent access. Insecure firmware updates permit unsigned firmware installation, allowing attackers to replace legitimate firmware with malicious versions. Absence of secure boot mechanisms allows unauthorised code execution at boot time. Weak update mechanisms lack integrity verification and rollback protection.

### Firmware Analysis

Firmware analysis extracts file systems, configurations, and executables from device firmware images. Binwalk scans for embedded file systems (SquashFS, JFFS2, YAFFS), boot loaders (U-Boot), and kernel images. Firmware-mod-kit unpacks and repacks firmware images. Analysis steps include identifying the CPU architecture, extracting the root file system, searching for hardcoded credentials with strings, examining init scripts for backdoors, and reviewing web server configurations for default pages. Emulation with QEMU allows dynamic analysis without physical hardware.

### IoT Penetration Testing

IoT testing covers hardware, radio, network, firmware, and application interfaces. Hardware testing examines debug ports (UART, JTAG, SWD), memory chips for data extraction, and tamper protection. Radio testing captures and analyses wireless protocols. Network testing identifies exposed services, default credentials, and unencrypted communications. Firmware testing extracts secrets and analyses update mechanisms. Application testing assesses mobile APIs and cloud interfaces. Physical security testing evaluates tamper resistance and side-channel vulnerabilities.

### OWASP IoT Top 10

The OWASP IoT Top 10 categories are: I1 Weak, Guessable, or Hardcoded Passwords; I2 Insecure Network Services; I3 Insecure Ecosystem Interfaces; I4 Lack of Secure Update Mechanism; I5 Use of Insecure or Outdated Components; I6 Insufficient Privacy Protection; I7 Insecure Data Transfer and Storage; I8 Lack of Device Management; I9 Insecure Default Settings; I10 Lack of Physical Hardening.

### Embedded Security

Secure elements are tamper-resistant chips that store cryptographic keys and perform secure operations. Trusted Platform Modules (TPMs) provide hardware root of trust, measured boot, and key attestation. ARM TrustZone provides a hardware-enforced trusted execution environment. Secure boot verifies the digital signature of each boot stage, preventing unauthorised code from executing.

## Examples

### Shodan Discovery of Vulnerable Devices

Search Shodan for default credentials: `"220" "230" "Login" "password"` reveals FTP servers with weak authentication. `port:1883 MQTT` reveals MQTT brokers accessible without authentication. `port:23 "root"` reveals telnet-enabled Linux devices with root access.

### Firmware Extraction and Analysis

Download firmware from vendor update site. Run `binwalk -Me firmware.bin` to extract embedded file systems. Search for credentials: `grep -r "password" extracted_fs/`. Examine `/etc/shadow` for password hashes. Analyse maintenance scripts. Search for hardcoded API keys: `grep -r "API_KEY\|SECRET\|token" extracted_fs/`.

### MQTT Security Assessment

Connect to an unauthenticated MQTT broker: `mosquitto_sub -h 192.168.1.100 -t "#" -v`. Subscribe to all topics to observe sensor data and control commands. Publish a malicious command: `mosquitto_pub -h 192.168.1.100 -t "actuators/lock" -m "unlock"`. If the broker accepts the message and the actuator executes it without authentication, this demonstrates a critical vulnerability.

### IoT Security Lifecycle

Secure IoT development integrates security across the device lifecycle. Design phase: threat modelling identifies attack surfaces, secure boot architecture establishes hardware root of trust, and protocol selection considers security capabilities. Development phase: secure coding practices prevent memory corruption, cryptographic implementations use platform security elements, and update mechanisms support signed images with rollback protection. Manufacturing phase: unique device credentials are provisioned per device, debug interfaces are disabled, and secure storage keys are injected. Deployment phase: default credentials are replaced, network segmentation isolates IoT devices, and monitoring detects anomalous behaviour. Operations phase: firmware updates fix vulnerabilities, certificates are rotated before expiry, and end-of-life devices are decommissioned with cryptographic erasure.

### IoT Standards and Regulations

Regulatory frameworks for IoT security are evolving. The EU Cybersecurity Act enables EU-wide certification schemes for IoT devices. The UK Product Security and Telecommunications Infrastructure Act mandates minimum security requirements including ban on default passwords, vulnerability disclosure programmes, and transparency on security update periods. The US IoT Cybersecurity Improvement Act requires NIST standards for federal IoT devices. ETSI EN 303 645 provides a consumer IoT security standard covering credential management, software updates, and data protection. IEC 62443 addresses industrial IoT and control system security with security levels from SL 1 to SL 4.

### Automotive IoT Security

Modern vehicles contain 100+ electronic control units (ECUs) communicating over CAN, CAN-FD, and Ethernet buses. Attack surfaces include telematics units, infotainment systems, keyless entry, OBD-II ports, and over-the-air (OTA) update mechanisms. The CAN bus lacks authentication, enabling message injection from a compromised ECU. ISO 21434 (Road Vehicles - Cybersecurity Engineering) provides a framework for automotive cybersecurity risk management. Hardware security modules in vehicle gateways authenticate messages and encrypt communication. Intrusion detection for automotive networks monitors for unexpected CAN message sequences that could indicate injection attacks. Keyless entry vulnerabilities (rolling jam, relay attacks) are addressed through rolling codes and proximity verification.

## Summary

IoT security is challenging due to device constraints, heterogeneous protocols, and fragmented responsibility across manufacturers, integrators, and users. Default credentials, unencrypted communications, insecure firmware updates, and weak physical security are pervasive. Firmware analysis reveals hardcoded secrets. Protocol-specific assessments identify misconfigurations in MQTT, Zigbee, and BLE deployments. Hardware security elements and secure boot provide foundational protections. The OWASP IoT Top 10 provides a structured assessment framework. As IoT adoption grows, security must shift from afterthought to design requirement.

## Exercises

### Review Questions

1. Describe the four layers of IoT architecture. What security risks are specific to each layer?
2. Compare MQTT and CoAP in terms of transport protocol, security mechanisms, and typical use cases.
3. Why are default credentials such a pervasive IoT vulnerability? What technical and economic factors contribute to this?
4. Explain the purpose of secure boot. How does it prevent persistent firmware compromise?
5. List and describe the OWASP IoT Top 10 categories. Identify a real-world vulnerability example for at least five categories.

### Application Problems

1. Use Shodan to identify at least five IoT devices with accessible services. Document the device type, open ports, running services, and any authentication weaknesses. Verify findings do not access or modify any device.
2. Download firmware for a consumer IoT device. Use binwalk to extract the file system. Identify the operating system, architecture, and init system. Search for hardcoded credentials, API endpoints, and embedded private keys.
3. Set up a Mosquitto MQTT broker and a test publisher. Capture MQTT traffic with Wireshark. Verify that TLS encryption protects the communication and demonstrate the difference between cleartext and encrypted MQTT traffic.

### Challenge Problem

Design a secure IoT system for a smart building deployment with 500 sensors (temperature, humidity, occupancy), 50 actuators (lighting, HVAC, door locks), and a cloud management platform. Address each OWASP IoT Top 10 category with specific controls. Define the protocol selection (justify MQTT, CoAP, or alternative), authentication and authorisation model, device identity management, firmware update mechanism with rollback protection and integrity verification, encryption strategy for data at rest and in transit, secure boot implementation, physical tamper protection, and privacy protections for occupant data. Produce a threat model for the system and document how each identified threat is mitigated.
