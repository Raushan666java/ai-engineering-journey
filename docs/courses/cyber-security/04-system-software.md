# Chapter 4: System & Software Security

---

## Learning Objectives

- Explain the mechanisms and mitigation strategies for memory corruption vulnerabilities like buffer overflows.
- Understand the principles of Operating System (OS) hardening and least privilege.
- Categorize different types of malware and their propagation methods.
- Describe the core concepts of the Secure Software Development Lifecycle (SSDLC).
- Identify common software security flaws and apply the principle of complete mediation.

---

## Theory

![Malware & Buffer Overflow](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/cyber-security/ch04-malware-buffer.png)

### Memory Corruption Vulnerabilities
Low-level languages (like C and C++) allow direct memory manipulation, which can lead to critical flaws if not handled carefully.
- **Buffer Overflow:** Occurs when a program writes more data to a fixed-length block of memory (a buffer) than it can hold. This can overwrite adjacent memory, including the return address on the stack.
- **Stack Smashing:** An attacker overflows a stack buffer to overwrite the return pointer, redirecting execution to their own malicious code (shellcode).
- **Mitigation Techniques:**
    - **ASLR (Address Space Layout Randomization):** Randomizes memory addresses to make exploitation unpredictable.
    - **DEP/NX (Data Execution Prevention / No-Execute):** Marks certain memory regions (like the stack) as non-executable.
    - **Stack Canaries:** Small values placed before the return address; if they are changed, the program terminates.

### Operating System Hardening
OS hardening is the process of securing an operating system by reducing its surface of vulnerability.
- **Removing Unnecessary Services:** Disabling any feature or service not required for the system's function.
- **Patch Management:** Regularly updating the OS and applications to fix known vulnerabilities.
- **Host-Based Access Control:** Using tools like SELinux or AppArmor to enforce mandatory access controls.
- **Logging and Auditing:** Configuring the system to record security-relevant events for later analysis.

### Malware
Malware (malicious software) is any software intentionally designed to cause damage to a computer, server, client, or computer network.
- **Viruses:** Attaches itself to a legitimate program and requires human action to propagate.
- **Worms:** Standalone programs that replicate themselves over a network without human intervention.
- **Trojans:** Disguised as legitimate software to trick users into installing them.
- **Ransomware:** Encrypts user data and demands payment for the decryption key.
- **Rootkits:** Designed to hide the existence of other malware or unauthorized access by subverting OS calls.

### Secure Software Development Lifecycle (SSDLC)
Security should be integrated into every phase of software development:
1.  **Requirements:** Identify security and privacy requirements.
2.  **Design:** Perform threat modeling and secure architecture review.
3.  **Implementation:** Use secure coding standards and static analysis (SAST).
4.  **Verification:** Conduct dynamic analysis (DAST), fuzzing, and penetration testing.
5.  **Release/Maintenance:** Plan for incident response and regular patching.

---

## Examples

### Example 1: A Simple Buffer Overflow in C
Consider this vulnerable code snippet:
```c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *str) {
    char buffer[16];
    // Dangerous: strcpy does not check the length of the source string
    strcpy(buffer, str);
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    }
    return 0;
}
```
*Vulnerability:* If `argv[1]` is longer than 15 characters, it will overflow `buffer`.
*Fix:* Use `strncpy(buffer, str, sizeof(buffer) - 1)` and manually null-terminate.

### Example 2: Static Analysis for Secret Detection
Using a tool like `trufflehog` or `gitleaks` to find hardcoded credentials in source code:
```bash
# Scan a local git repository for secrets
gitleaks detect --source . --verbose
```
*Expected Output:* Alerts if any API keys, passwords, or private keys are found committed to the repository.
*Demonstrates a key step in the "Implementation" phase of the SSDLC.*

---

## Summary

- Memory corruption (like buffer overflows) remains a significant threat to system security; modern OS features like ASLR and DEP mitigate these risks.
- OS hardening involves reducing the attack surface through configuration, patching, and strict access controls.
- Malware exists in many forms (viruses, worms, ransomware), each requiring different detection and prevention strategies.
- Secure software is best achieved by integrating security throughout the development lifecycle (SSDLC) rather than treating it as an afterthought.
- The principle of "Complete Mediation" requires that every access to every object be checked for authority.

---

## Exercises

### Review Questions
1. How does Address Space Layout Randomization (ASLR) prevent a buffer overflow from being easily exploited?
2. What is the main difference between a computer virus and a computer worm?
3. Define "Least Privilege" in the context of an operating system.
4. Name three stages of the SSDLC and a security activity associated with each.

### Application Problems
1. Rewrite the C code in Example 1 to use `fgets` instead of `strcpy` to securely read user input into the buffer.
2. You find a "rootkit" on a production server. Explain why simply deleting the malware files might not be enough to fully clean the system.
3. A company uses a 10-year-old operating system for a critical legacy application. Propose three "hardening" steps they can take to protect this system since security patches are no longer available.

### Challenge Problem
1. Research the "Return-Oriented Programming" (ROP) technique. Explain how it can be used to bypass Data Execution Prevention (DEP). Provide a conceptual explanation of how an attacker chains "gadgets" to achieve their goal.
