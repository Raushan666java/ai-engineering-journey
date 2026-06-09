# Digital Forensics

## Learning Objectives

After completing this chapter, students will be able to apply forensic methodology to preserve evidence integrity, collect volatile data from live systems, create forensically sound disk images, analyse file system artifacts for evidence of compromise, conduct memory forensics to detect hidden processes and injected code, perform forensic analysis across Windows and Linux platforms, detect anti-forensic techniques, and document chain of custody.

## Theory

### Forensic Methodology

Digital forensics follows a four-phase process: identification, preservation, analysis, and presentation. Identification determines what evidence exists and where it resides. Preservation ensures evidence is collected without modification using write blockers and cryptographic hashes. Analysis extracts relevant information using forensic tools. Presentation communicates findings in a clear, admissible format. The methodology is independent of the operating system or device type.

### Order of Volatility

The order of volatility dictates the sequence of evidence collection based on data persistence. Registers and cache are most volatile. Routing tables, ARP cache, process tables, kernel statistics, and memory are moderately volatile. Temporary file systems persist until reboot. Disk data persists until overwritten. Logs and archival media are least volatile. Evidence must be collected in descending order of volatility to minimise data loss.

### Volatile Data Collection

Memory acquisition captures RAM contents for analysis of running processes, network connections, loaded modules, and injected code. FTK Imager and WinPmem acquire Windows memory. LiME (Linux Memory Extractor) acquires Linux memory through a loadable kernel module. The acquisition tool must be pre-validated to avoid modifying the target system. Cryptographic hashes of the acquisition file are computed immediately to verify integrity.

### Disk Forensics

Bit-for-bit imaging creates a sector-level copy of a storage device. The dd command creates raw images; FTK Imager creates E01 (EnCase) or AFF formats with metadata and compression. Hardware write blockers prevent modification of the source drive via the ATA/SATA bus. Software write blockers mount volumes read-only. File recovery uses signature-based carving (PhotoRec, Scalpel) to recover data from unallocated space.

### NTFS Artifacts

The Master File Table ($MFT) tracks every file and directory on an NTFS volume, including metadata, timestamps (MACB: Modified, Accessed, Created, Birth), and the data run list. Deleted entries remain until overwritten. The USN Journal records changes to files and directories. Prefetch files store application execution history with run count and timestamps. Windows Registry hives (SAM, SYSTEM, SOFTWARE, NTUSER.DAT) contain configuration, user accounts, MRU lists, and USB device history. Amcache tracks program execution and installation. Shellbags record folder viewing preferences and sizes. LNK files contain target path, volume serial number, and timestamps.

### Timeline Analysis

Timeline construction correlates events across multiple artifact categories. Tools like log2timeline/plaso parse disparate artifacts and output a super-timeline. Analysis focuses on activity during the suspected compromise window, identifying file creation events (malware drops), execution events (prefetch, amcache), persistence installation (registry Run keys), and network connections.

### Memory Forensics

Memory analysis using Volatility profiles identifies the operating system version and extracts process lists, network connections, loaded DLLs, and kernel modules. Hidden processes are detected through cross-referencing process lists from multiple sources (PsActiveProcessHead, EPROCESS pools). DLL injection detection compares the loaded modules list with the expected modules for a process. Rootkit detection using the `malfind` plugin identifies suspicious memory regions with executable permissions but no file mapping.

### Windows, Linux, and macOS Forensics

Windows forensics focuses on Registry, Event Logs (Event ID 4624/4625 for logons, 4688 for process creation, 4104 for PowerShell script block logging), Prefetch, and USN Journal. Linux forensics analyses auth logs, bash history, cron jobs, and systemd journal. macOS forensics examines unified logs, launchd plists, and FileVault artifacts.

### Anti-Forensics Detection

Anti-forensic techniques include data wiping (overwriting free space), timestomping (modifying file timestamps), log deletion, encryption, and evidence hiding in alternative data streams. Detection involves identifying gaps in timeline continuity, inconsistencies in metadata, and unexplained anomalies such as zeroed-out log entries or missing prefetch files.

### Chain of Custody

Chain of custody documentation is essential for admissibility. Each evidence item is assigned a unique identifier, and every transfer is recorded with date, time, handler identity, purpose, and location. Tamper-evident seals and cryptographic hashes provide integrity verification. Documentation must be contemporaneous, detailed, and signed.

## Examples

### Memory Acquisition with FTK Imager

Launch FTK Imager, select File > Capture Memory, specify the output path and filename, and optionally create a memory dump of the page file. After acquisition, compute the MD5 and SHA-256 hashes using the built-in tool. Verify the hash before transferring the memory image for analysis.

### Volatility Analysis

Identify the image profile: `volatility -f memory.dmp imageinfo`. List processes: `volatility -f memory.dmp --profile=Win10x64 pslist`. Check for hidden processes: `volatility -f memory.dmp psscan` vs `pslist`; discrepancies indicate rootkit activity. Dump process memory: `volatility -f memory.dmp memdump -p 1234 -D output/`. Scan for injected code: `volatility -f memory.dmp malfind`. Extract command line: `volatility -f memory.dmp cmdline`.

### Disk Imaging with dd

```
dd if=/dev/sda of=/mnt/evidence/image.dd bs=4M conv=noerror,sync status=progress
sha256sum /mnt/evidence/image.dd
```

The `conv=noerror,sync` option continues on read errors, filling the error position with null bytes. The hash is computed immediately and recorded in the case notes.

## Summary

Digital forensics systematically recovers and analyses evidence from digital devices following principles that ensure integrity and admissibility. The order of volatility guides collection priorities. Memory analysis captures running state. Disk forensics recovers stored data and file system artifacts. Timeline analysis reconstructs events. Anti-forensic techniques must be detected during analysis. Chain of custody documentation links every stage of the forensic process, enabling evidence presentation in legal proceedings.

## Exercises

### Review Questions

1. What is the order of volatility and why must it be observed during evidence collection?
2. Explain the difference between a bit-for-bit image and a logical copy. When is each appropriate?
3. How does the MFT record deleted files? Under what conditions can a deleted file be recovered?
4. Describe three memory artifacts that indicate malware execution. What Volatility plugin detects each?
5. What constitutes proper chain of custody documentation? What happens if the chain is broken?

### Application Problems

1. Create a forensic disk image of a USB drive using FTK Imager. Analyse the image for deleted files. Recover at least three deleted files and explain how the recovery was possible.
2. Perform memory acquisition on a Windows VM infected with simulated malware. Use Volatility to identify the malicious process, extract its command line, and dump the process memory. Analyse the dumped memory for C2 IP addresses.
3. Construct a forensic timeline from an acquired disk image. Use plaso to parse MFT, USN Journal, Registry, and Event Logs. Identify the time of compromise, the files created by the attacker, and any persistence mechanisms installed.

### Challenge Problem

Conduct a complete forensic investigation of a compromised Windows system. The scenario: an employee reported unusual behaviour after opening a PDF attachment. The system was isolated but not shut down. Perform memory acquisition and disk imaging. Analyse memory to identify the malware process, its injection technique, and C2 communication. Analyse the disk to determine the initial infection vector, persistence mechanism, and data exfiltration. Document all findings with screenshots and hash values. Prepare a forensic report suitable for legal proceedings, including a finding summary, methodology, timeline, chain of custody documentation, and expert opinion on the nature of the compromise.
