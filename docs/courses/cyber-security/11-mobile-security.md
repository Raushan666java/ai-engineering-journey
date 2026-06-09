# Mobile Security

## Learning Objectives

After completing this chapter, students will be able to identify mobile platform threats including jailbreaking and malicious sideloading, analyse Android APK files with static and dynamic techniques, assess iOS application security using Frida and Objection, perform mobile application penetration testing following the OWASP MASVS, and remediate common vulnerabilities in mobile apps.

## Theory

### Mobile Platform Threats

Jailbreaking (iOS) and rooting (Android) remove platform security restrictions, granting users elevated privileges. While enabling customisation, these actions disable security mechanisms, allowing malware to access all application data, kernel memory, and hardware functions. Sideloading, the installation of applications outside official app stores, bypasses security review processes. Repackaged applications contain modified code that may steal credentials, capture keystrokes, or exfiltrate data.

### Android Security Architecture

Android applications run in a sandbox based on the Linux user-based isolation model. Each application is assigned a unique user ID (UID) and runs in its own process. The sandbox restricts inter-process communication and file access. Application signing uses developer certificates; the signing key establishes trust relationships between applications.

Permissions are classified as normal (granted automatically), dangerous (user consent required), or signature (granted only to apps signed by the same key). Runtime permission requests (Android 6.0+) allow users to grant permissions while the app is in use. The Android Keystore system provides hardware-backed cryptographic key storage. Network Security Configuration allows developers to specify trusted certificate authorities and enforce cleartext traffic restrictions. Obfuscation tools such as ProGuard and R8 rename classes, methods, and fields, complicating reverse engineering.

### iOS Security Architecture

iOS employs a mandatory code signing requirement: all executable code must be signed by Apple or a developer certificate trusted by the device. The sandbox enforces strict resource isolation, restricting each application to its own container directory. Entitlements are key-value pairs in the application bundle that grant specific capabilities (iCloud access, push notifications, HealthKit).

The Keychain provides encrypted storage for sensitive data, accessible across applications from the same developer based on access group attributes. Data Protection classes control file encryption, with four protection levels ranging from complete protection (accessible only when unlocked) to no protection. IPA (iOS App Store Package) files are encrypted and signed application bundles. Analysis requires decryption (typically using tools on jailbroken devices or through Frida-based approaches).

### Mobile Application Penetration Testing

The OWASP Mobile Application Security Verification Standard (MASVS) defines security requirements at two levels: MASVS-L1 (standard security) and MASVS-L2 (defence-in-depth). The Mobile Security Testing Guide (MSTG) provides testing procedures. Key assessment areas include data storage, cryptography, authentication, network communication, platform interaction, code quality, and resilience.

### Common Mobile Vulnerabilities

Insecure data storage stores sensitive data in plaintext on the device, including SharedPreferences (Android), NSUserDefaults (iOS), SQLite databases, and log files. Improper platform usage misuses platform APIs, such as WebView with JavaScript execution enabled loading untrusted content. Insecure communication transmits data over cleartext HTTP or uses improperly validated TLS certificates. Weak authentication allows session token reuse, inadequate session expiry, or client-side authentication bypass. Code tampering modifies application code or resources, subverting security controls.

## Examples

### APK Static Analysis

Decompile an APK: `apktool d target.apk -o output_dir`. Convert to JAR: `dex2jar target.apk -o output.jar`. Open in JD-GUI or jadx for Java source review. Examine AndroidManifest.xml for exported components, permissions, and debuggable flag. Search for hardcoded API keys, passwords, and URLs in decompiled source and resources. Identify WebView implementations with `setJavaScriptEnabled(true)` loading remote URLs.

### Frida Dynamic Analysis

Frida injects JavaScript into running applications for dynamic analysis. Attach to a process: `frida -U com.example.app`. Intercept a function: `Java.perform(function() { var cls = Java.use('com.example.app.Crypto'); cls.decrypt.implementation = function(data) { console.log('decrypt called:', data); return this.decrypt(data); }; });`. Bypass certificate pinning using `frida-trace -U -j '*!*certificate*' com.example.app`.

### Objection Exploration

Objection provides a runtime exploration toolkit. Start: `objection -g com.example.app explore`. Disable SSL pinning: `android sslpinning disable`. List storage: `android storage list`. Dump keychain (iOS): `ios keychain dump`. Hook common classes: `android hooking watch class android.widget.Toast`.

### Mobile Application Hardening

Hardening techniques reduce the attack surface of mobile applications. Obfuscation renames classes, methods, and fields to meaningless identifiers, complicating static analysis. ProGuard (Android) and LLVM obfuscator (iOS) are common tools. String encryption stores sensitive strings in encrypted form, decrypting at runtime. Integrity verification checks application signatures and hash values at runtime to detect tampering. Root and jailbreak detection calls platform APIs such as `System.getProperty("ro.build.tags")` (Android) and `NSFileManager` checks for CydiaSubstrate (iOS). Certificate pinning hardcodes server certificate hashes, preventing MITM attacks through forged certificates. Anti-debugging detects debugger attachment through `ptrace` (iOS) or `android:debuggable` flag verification (Android). Application shielding wraps the application in a protective layer that monitors for runtime manipulation.

### Mobile Device Management

MDM platforms manage mobile device fleets, enforcing security policies such as PIN requirements, encryption enforcement, remote wipe, and application allowlisting. Mobile Application Management (MAM) containerises corporate applications, separating work and personal data on the same device. Unified Endpoint Management (UEM) converges MDM and MAM across mobile and desktop platforms. Apple Business Manager and Android Enterprise provide platform-level management frameworks. Conditional access policies use device compliance signals to grant or deny resource access, integrating with cloud identity platforms.

### Secure Development Lifecycle for Mobile

Building secure mobile applications requires security integration from requirements through deployment. Threat modelling identifies platform-specific risks such as intent interception on Android and URL scheme hijacking on iOS. Secure coding guidelines prohibit logging sensitive data, require input validation for deeplinks, and mandate proper session management. Static analysis tools such as MobSF (Mobile Security Framework) automate vulnerability scanning. Dynamic analysis validates runtime protections. Penetration testing before release identifies logic flaws and configuration issues. Privacy requirements, including data minimisation and consent mechanisms, are verified before app store submission.

## Summary

Mobile security addresses the unique challenges of constrained devices running applications from diverse sources. Platform architectures provide sandboxing, permission systems, and code signing as foundational controls. Penetration testing evaluates these controls in practise, uncovering vulnerabilities in data storage, network communication, cryptography, authentication, and platform interaction. Security must be integrated into the mobile development lifecycle, from secure coding through testing and ongoing monitoring.

## Exercises

### Review Questions

1. How does the Android sandbox isolate applications? What happens if a vulnerability is found in the Linux kernel component?
2. Explain the iOS code signing process. What is the purpose of the provisioning profile?
3. Compare the Android permission system before and after Android 6.0. What are the security implications of runtime permissions?
4. Why is certificate pinning important for mobile applications? How can an attacker bypass it if it is not implemented?
5. Describe three ways that mobile applications insecurely store data. What platform APIs should be used instead?

### Application Problems

1. Decompile an intentionally vulnerable Android application (such as InsecureBank or DIVA). Identify and document at least five vulnerabilities: hardcoded credentials, insecure data storage, WebView with JavaScript enabled, weak encryption, and intent spoofing.
2. Use Frida to bypass SSL pinning in a test application. Intercept and modify the network traffic using Burp Suite as a proxy. Document the steps and the modified requests.
3. Perform static analysis of an iOS IPA file using class-dump and Hopper. Identify the classes responsible for authentication and data storage. Use Objection to dump the iOS keychain and inspect the contents.

### Challenge Problem

Perform a complete mobile application penetration test against a custom-built banking application. The assessment must include: static analysis of the APK/IPA for hardcoded secrets, certificate pinning status, and insecure components; dynamic analysis using Frida to bypass root/jailbreak detection and SSL pinning; traffic interception and manipulation via Burp Suite; data storage assessment including SharedPreferences, Keychain, SQLite databases, and logs; authentication testing for weak session handling, token reuse, and client-side validation bypass; and platform interaction testing for WebView vulnerabilities, intent injection, and URL scheme hijacking. Produce a comprehensive report with findings, proof-of-concept, and remediations mapped to OWASP MASVS controls.
