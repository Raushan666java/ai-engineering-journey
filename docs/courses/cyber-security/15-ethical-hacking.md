# Ethical Hacking

## Learning Objectives

After completing this chapter, students will be able to define the legal and ethical boundaries of authorised security testing, conduct comprehensive OSINT reconnaissance using diverse tools, perform vulnerability scanning and validation, exploit vulnerabilities in controlled environments, test web applications using Burp Suite, assess wireless network security, execute social engineering engagements, produce professional penetration test reports, and describe the certification landscape.

## Theory

### Legal and Ethical Framework

Ethical hacking operates under explicit, written authorisation from the asset owner. The Rules of Engagement define permitted techniques, target scope, testing windows, and prohibited actions. A signed agreement with liability protections and emergency contacts is mandatory. The tester must understand and comply with applicable laws including the Computer Fraud and Abuse Act (CFAA) in the US, the Computer Misuse Act in the UK, and similar statutes internationally. Unauthorised testing, even with benevolent intent, remains illegal.

### Reconnaissance

Reconnaissance gathers intelligence before active testing. Shodan indexes internet-connected devices, revealing exposed services, default credentials, and industrial control systems. Censys provides certificate and network intelligence. VirusTotal aggregates antivirus detections of submitted files and URLs. The Wayback Machine archives historical website content that may contain exposed credentials, API endpoints, or vulnerability information. Spidering crawls web applications to map endpoints, forms, and parameters.

### Google Dorking

Specialised search queries discover information unintentionally exposed in indexed content. `site:target.com filetype:xls password` finds Excel files containing passwords. `inurl:wp-content` identifies WordPress installations. `intitle:"index of"` reveals directory listings. `cache:target.com` shows cached content that may differ from current content. Google Hacking Database (GHDB) maintains a catalogue of dork queries.

### Vulnerability Assessment

Vulnerability scanners automate the detection of known vulnerabilities. Nessus Professional, OpenVAS, Qualys, and Nexpose are widely deployed. Scanners perform port scanning, service detection, configuration audit, and vulnerability correlation against CVE databases. False positives require manual verification. Authenticated scans, using valid credentials, provide deeper assessment by examining patch levels and configuration settings inaccessible to unauthenticated scanners.

### Exploitation

Exploitation verifies that vulnerabilities are exploitable and demonstrates business impact. Metasploit Framework provides the most comprehensive exploit library. Manual exploitation is required for custom applications and logic flaws. Password attacks use Hydra for online brute force, Hashcat for offline hash cracking, and wordlists such as rockyou.txt and SecLists. Web application exploitation leverages SQL injection, file inclusion, command injection, and authentication bypass. Client-side exploitation uses malicious documents, browser exploits, and social engineering.

### Web Application Testing with Burp Suite

Burp Suite is the standard web application testing platform. The Proxy intercepts and modifies HTTP/HTTPS requests in transit. Repeater resends modified requests for manual testing. Intruder performs automated parameter fuzzing with custom payloads. Scanner automates vulnerability detection (Professional edition). Decoder encodes, decodes, and hashes data. Extender supports community plugins including JSON Web Token (JWT) handling and GraphQL introspection.

### Wireless Testing

Wireless testing evaluates WiFi security. Aircrack-ng suite captures packets, cracks WEP and WPA2 PSK, and de-authenticates clients. Airmon-ng enables monitor mode. Airodump-ng captures packets and identifies clients and access points. Aireplay-ng injects packets for de-authentication attacks. Aircrack-ng cracks WEP (statistical) and WPA2 PSK (dictionary). Wifite automates wireless auditing. WPA3 with SAE resists dictionary attacks but implementation weaknesses may be exploitable.

### Physical Security

Physical testing evaluates perimeter controls, access control systems, surveillance, and social engineering. Tailgating follows authorised personnel through secured doors. Lock picking assesses physical access controls. Badge cloning duplicates RFID credentials. Dumpster diving recovers discarded documents containing sensitive information. These tests require explicit scope and authorisation.

### Social Engineering

Social engineering manipulates human psychology to gain access or information. Phishing tests evaluate user susceptibility to email-based attacks. Pretexting creates a fabricated scenario to extract information. Baiting leaves infected media where targets will find it. Quid pro quo offers a service in exchange for information. Social engineering engagements test people, process, and awareness training effectiveness.

### Report Writing

The penetration test report is the primary deliverable. The executive summary communicates risk in business terms, describing critical findings and their impact on operations. The technical findings section details each vulnerability with description, proof of concept (reproducible steps, screenshots), CVSS score, affected systems, risk rating, and remediation guidance. The appendix includes raw tool output, scan results, and supplementary data. Findings are prioritised by risk, and remediation is validated through a retest.

### Certifications

Offensive Security Certified Professional (OSCP) emphasises hands-on exploitation through a 24-hour practical exam. Certified Ethical Hacker (CEH) covers broad theory and tool usage. GIAC Penetration Tester (GPEN) provides vendor-neutral penetration testing certification. Offensive Security Web Expert (OSWE) specialises in web application security. CREST Registered Tester is recognised in the UK and Australia. Certifications validate different skill sets and career stages.

## Examples

### Shodan Search Queries

`port:3389` discovers RDP servers. `port:22 "OpenSSH"` finds SSH servers with version information. `city:"London" org:"Acme Corp"` targets specific organisations. `has_screenshot:true` finds devices with accessible web interfaces. Results should be cross-referenced with the authorised scope to ensure testing is confined to permitted targets.

### Hydra Brute Force

`hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.100 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Invalid"` tests the admin account against a login form. The `F=Invalid` flag identifies failed login attempts. Account lockout policies must be understood before online brute force testing to avoid denial of service.

### Aircrack-ng Wireless Attack

```
airmon-ng start wlan0
airodump-ng wlan0mon
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF wlan0mon
aircrack-ng -w /usr/share/wordlists/rockyou.txt capture-01.cap
```

This sequence enables monitor mode, discovers networks, captures the target channel, de-authenticates a client to capture the WPA2 handshake, and cracks the PSK offline.

## Summary

Ethical hacking applies adversary techniques within legal and ethical boundaries. Reconnaissance discovers the attack surface before testing begins. Vulnerability assessment identifies weaknesses; exploitation verifies their impact. Web application, wireless, and social engineering testing address distinct risk domains. Professional reporting translates technical findings into actionable remediation. Certification validates competence against industry standards. The ethical hacker's role is to find vulnerabilities before malicious actors do, improving organisational security through controlled, authorised testing.

## Exercises

### Review Questions

1. What legal documents must be in place before any penetration test begins? What happens if testing extends beyond the defined scope?
2. Distinguish between vulnerability assessment and penetration testing. When is each approach appropriate?
3. Describe the Aircrack-ng attack sequence against WPA2. Why is the 4-way handshake required?
4. What is pretexting in social engineering? Provide an example of a pretext that might be used to obtain employee credentials.
5. Compare the OSCP, CEH, and GPEN certifications. What are the strengths and focus areas of each?

### Application Problems

1. Conduct an OSINT reconnaissance exercise against your own organisation or an authorised target. Use Shodan, Google dorking, the Wayback Machine, and WHOIS lookups. Document all discovered subdomains, email addresses, exposed services, and historical content.
2. Perform a wireless security assessment using Kali Linux. Capture a WPA2 handshake from an authorised test network and attempt to crack the PSK using a wordlist. Document the steps, commands, and results.
3. Execute a blind SQL injection attack against a deliberately vulnerable web application (DVWA or bWAPP). Use Burp Suite to extract the database banner, current user, and contents of the users table. Produce a screenshot showing each step.

### Challenge Problem

Plan and execute a full-scope ethical hacking engagement against a deliberately vulnerable lab network. The engagement must include: reconnaissance (passive OSINT and active scanning), vulnerability assessment (authenticated and unauthenticated scanning), exploitation of at least three distinct vulnerabilities (web application, network service, and client-side or wireless), privilege escalation to administrative access, and evidence collection for each finding. Produce a professional penetration test report with executive summary, methodology, detailed technical findings (each with CVSS score, proof of concept, and remediation), and a retest report after applying fixes. Include a lessons learned section reflecting on what techniques were effective and what challenges were encountered.
