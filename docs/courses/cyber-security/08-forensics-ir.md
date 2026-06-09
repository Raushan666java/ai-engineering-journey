# Chapter 8: Forensics & Incident Response

---

## Learning Objectives

- Define the phases of the Incident Response (IR) lifecycle.
- Understand the principles of digital evidence and the importance of the chain of custody.
- Explain the methodology for memory forensics and its role in modern investigations.
- Describe the steps involved in file system forensics and data recovery.
- Identify the core components of an incident response plan and the role of the CSIRT.

---

## Theory

### Incident Response Lifecycle
Incident Response is a structured process used by organizations to handle a security breach or cyberattack. The NIST SP 800-61 framework defines four main phases:
1.  **Preparation:** Establishing the team (CSIRT), tools, and policies *before* an incident occurs.
2.  **Detection & Analysis:** Identifying signs of an incident and determining its scope and severity.
3.  **Containment, Eradication, & Recovery:** Stopping the attack from spreading, removing the cause, and restoring systems to normal operation.
4.  **Post-Incident Activity:** Documenting lessons learned to improve future response capabilities.

### Principles of Digital Forensics
Digital forensics is the application of science to the identification, collection, examination, and analysis of data while preserving the integrity of the information.
- **Evidence Integrity:** Ensuring the evidence remains unchanged. This is achieved through write-blocking hardware and cryptographic hashing.
- **Chain of Custody:** A chronological document tracking who has had access to the evidence from the moment of collection to its presentation in court.
- **Order of Volatility:** Evidence should be collected starting with the most volatile (e.g., CPU cache, RAM) to the least volatile (e.g., hard drives, backup tapes).

### Memory Forensics
Investigating the contents of a computer's RAM.
- **Importance:** Essential for detecting "fileless" malware, rootkits, and live network connections that do not leave traces on the hard drive.
- **Techniques:** Capturing a memory dump and analyzing it using specialized tools.
- **Artifacts:** Running processes, network sockets, open files, encryption keys, and shellcode.

### File System Forensics
The analysis of physical storage devices to recover evidence.
- **Metadata Analysis:** Examining timestamps (MAC - Modified, Accessed, Created), file ownership, and permissions.
- **Deleted File Recovery:** Utilizing the fact that most file systems only mark space as "free" rather than overwriting the data immediately.
- **File Carving:** Recovering files based on their headers and footers (magic bytes) when the file system metadata is missing or corrupted.

### The CSIRT
The Computer Security Incident Response Team (CSIRT) is the specialized group responsible for executing the IR plan. Roles include IR managers, technical investigators, legal counsel, and public relations.

---

## Examples

### Example 1: Verifying Evidence Integrity
After imaging a suspicious hard drive, a forensic investigator calculates the hash of the original and the copy:
```bash
# Calculate MD5 hash of the original evidence disk
md5sum /dev/sdb > evidence_hash.txt

# Calculate MD5 hash of the forensic image file
md5sum evidence_image.dd >> evidence_hash.txt
```
*If the hashes match, the integrity of the image is verified.*

### Example 2: Memory Forensics with Volatility
Using the `volatility` framework to list active network connections from a memory dump:
```bash
# Analyze a Windows memory dump to find open network sockets
vol.py -f suspicious_mem.raw windows.netscan
```
*Expected Output:* A table showing local and remote IP addresses, ports, and the process ID (PID) associated with each connection.
*Demonstrates how to find command-and-control (C2) activity that might be hidden from standard OS tools.*

---

## Summary

- The Incident Response lifecycle provides a systematic approach to minimizing the impact of security breaches.
- Digital forensics requires strict adherence to evidence integrity and chain of custody to ensure results are legally defensible.
- The order of volatility dictates the sequence in which digital evidence should be collected.
- Memory forensics is critical for identifying sophisticated, modern threats that reside purely in RAM.
- A well-prepared CSIRT and a comprehensive IR plan are the cornerstones of organizational resilience.

---

## Exercises

### Review Questions
1. List the four phases of the NIST Incident Response lifecycle.
2. What is the "Order of Volatility" and why does it matter?
3. Define "Chain of Custody" and explain its importance in a legal context.
4. Explain the difference between "Containment" and "Eradication."

### Application Problems
1. An employee reports that their computer is acting strangely and files are being renamed with a ".encrypted" extension. Which IR phase should you initiate first, and what is your immediate priority?
2. You have a choice between capturing a memory dump or a disk image of a live server suspected of being compromised. Which one should you do first? Justify your answer.
3. How can hashing (e.g., SHA-256) be used to detect "time-stamping" attacks, where an attacker modifies the file system timestamps to hide their activity?

### Challenge Problem
1. Design a basic "Incident Response Playbook" for a suspected SQL Injection attack on a company's web server. Include specific steps for detection, containment (to prevent further data theft), and post-incident review.
