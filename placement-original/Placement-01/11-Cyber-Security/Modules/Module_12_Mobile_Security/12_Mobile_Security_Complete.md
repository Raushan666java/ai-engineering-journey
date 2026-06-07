# 📱 Module 12: Mobile Security - Complete Guide

## 📚 Table of Contents
1. [Mobile Security Fundamentals](#fundamentals)
2. [Android Security Architecture](#android-security)
3. [iOS Security Architecture](#ios-security)
4. [Mobile App Vulnerabilities (OWASP Mobile Top 10)](#owasp-mobile)
5. [Mobile Malware Analysis](#malware-analysis)
6. [Secure Mobile Development](#secure-development)
7. [Mobile Pentesting](#mobile-pentesting)
8. [Mobile Device Management (MDM)](#mdm)
9. [Mobile App Security Testing](#security-testing)
10. [Mobile Backend Security](#backend-security)

---

## 🎯 Mobile Security Fundamentals

### Mobile Threat Landscape

```
Mobile Threats:
├── Malware & Spyware
│   ├── Trojans
│   ├── Ransomware
│   ├── Banking malware
│   └── Stalkerware
├── Data Leakage
│   ├── Insecure storage
│   ├── Clipboard data
│   ├── Logs
│   └── Backups
├── Network Attacks
│   ├── Man-in-the-middle
│   ├── SSL stripping
│   └── Rogue Wi-Fi
├── Physical Attacks
│   ├── Device theft
│   ├── Shoulder surfing
│   └── Lost devices
└── Application Vulnerabilities
    ├── Code tampering
    ├── Reverse engineering
    ├── Insecure APIs
    └── Weak authentication
```

### Mobile Security Layers

```
Application Layer
  ↓ (App Sandbox, Code Signing)
Platform Layer
  ↓ (OS Security, Permissions)
Kernel Layer
  ↓ (Process Isolation, Memory Protection)
Hardware Layer
  ↓ (Secure Boot, Hardware Encryption)
```

---

## 🤖 Android Security Architecture

### 1. Android Security Model

```
Android Security Layers:
┌─────────────────────────────────┐
│   Application Sandbox           │ ← Each app runs in isolated process
├─────────────────────────────────┤
│   Android Framework             │ ← Permission system
├─────────────────────────────────┤
│   Linux Kernel (SELinux)        │ ← Mandatory Access Control
├─────────────────────────────────┤
│   Hardware (TEE, Secure Boot)   │ ← Hardware-backed security
└─────────────────────────────────┘
```

### 2. Android Permissions

```xml
<!-- AndroidManifest.xml - Secure Permission Configuration -->

<!-- ❌ INSECURE - Requesting unnecessary permissions -->
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />

<!-- ✅ SECURE - Minimal permissions with runtime requests -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.secureapp">
    
    <!-- Only request necessary permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    
    <!-- Dangerous permissions requested at runtime -->
    <uses-permission android:name="android.permission.CAMERA" />
    
    <!-- Network security config -->
    <application
        android:networkSecurityConfig="@xml/network_security_config"
        android:allowBackup="false"
        android:fullBackupContent="false">
        
        <!-- Activities -->
        <activity
            android:name=".MainActivity"
            android:exported="false">
            <!-- Don't export unless necessary -->
        </activity>
        
        <!-- Secure BroadcastReceiver -->
        <receiver
            android:name=".MyReceiver"
            android:permission="com.example.secureapp.CUSTOM_PERMISSION"
            android:exported="false">
        </receiver>
        
    </application>
    
    <!-- Define custom permissions -->
    <permission
        android:name="com.example.secureapp.CUSTOM_PERMISSION"
        android:protectionLevel="signature" />
    
</manifest>
```

```xml
<!-- res/xml/network_security_config.xml -->
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <!-- Disable cleartext traffic -->
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <!-- Trust system CAs -->
            <certificates src="system" />
        </trust-anchors>
    </base-config>
    
    <!-- Certificate pinning for production -->
    <domain-config cleartextTrafficPermitted="false">
        <domain includeSubdomains="true">api.example.com</domain>
        <pin-set>
            <pin digest="SHA-256">7HIpactkIAq2Y49orFOOQKurWxmmSFZhBCoQYcRhJ3Y=</pin>
            <!-- Backup pin -->
            <pin digest="SHA-256">fwza0LRMXouZHRC8Ei+4PyuldPDcf3UKgO/04cDM1oE=</pin>
        </pin-set>
    </domain-config>
    
    <!-- Debug overrides (remove in production) -->
    <debug-overrides>
        <trust-anchors>
            <certificates src="user" />
        </trust-anchors>
    </debug-overrides>
</network-security-config>
```

### 3. Secure Android Code Examples

```kotlin
// Secure Data Storage
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey

class SecureStorage(context: Context) {
    private val masterKey = MasterKey.Builder(context)
        .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
        .build()
    
    private val sharedPreferences = EncryptedSharedPreferences.create(
        context,
        "secure_prefs",
        masterKey,
        EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
        EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
    )
    
    fun saveToken(token: String) {
        sharedPreferences.edit()
            .putString("auth_token", token)
            .apply()
    }
    
    fun getToken(): String? {
        return sharedPreferences.getString("auth_token", null)
    }
}

// ❌ INSECURE - Plain SharedPreferences
val sharedPref = context.getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
sharedPref.edit().putString("password", "secret123").apply()  // Stored in plaintext!

// ✅ SECURE - Encrypted storage
val secureStorage = SecureStorage(context)
secureStorage.saveToken(authToken)
```

```kotlin
// Secure Network Communication
import okhttp3.OkHttpClient
import okhttp3.CertificatePinner
import java.util.concurrent.TimeUnit

class SecureHttpClient {
    companion object {
        fun create(): OkHttpClient {
            // Certificate pinning
            val certificatePinner = CertificatePinner.Builder()
                .add("api.example.com", "sha256/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=")
                .add("api.example.com", "sha256/BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB=")
                .build()
            
            return OkHttpClient.Builder()
                .certificatePinner(certificatePinner)
                .connectTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                .writeTimeout(30, TimeUnit.SECONDS)
                .addInterceptor { chain ->
                    val request = chain.request().newBuilder()
                        // Add security headers
                        .addHeader("X-Request-ID", UUID.randomUUID().toString())
                        .build()
                    chain.proceed(request)
                }
                .build()
        }
    }
}

// ❌ INSECURE - Trusting all certificates
val trustAllCerts = arrayOf<TrustManager>(
    object : X509TrustManager {
        override fun checkClientTrusted(chain: Array<X509Certificate>, authType: String) {}
        override fun checkServerTrusted(chain: Array<X509Certificate>, authType: String) {}
        override fun getAcceptedIssuers(): Array<X509Certificate> = arrayOf()
    }
)
// DON'T DO THIS!

// ✅ SECURE - Proper certificate validation with pinning
val client = SecureHttpClient.create()
```

```kotlin
// Secure Authentication
import androidx.biometric.BiometricPrompt
import androidx.biometric.BiometricManager

class BiometricAuth(private val activity: FragmentActivity) {
    
    fun authenticate(onSuccess: () -> Unit, onError: (String) -> Unit) {
        val biometricManager = BiometricManager.from(activity)
        
        // Check if biometric authentication is available
        when (biometricManager.canAuthenticate(BiometricManager.Authenticators.BIOMETRIC_STRONG)) {
            BiometricManager.BIOMETRIC_SUCCESS -> {
                showBiometricPrompt(onSuccess, onError)
            }
            BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE -> {
                onError("No biometric hardware")
            }
            BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE -> {
                onError("Biometric hardware unavailable")
            }
            BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED -> {
                onError("No biometric enrolled")
            }
        }
    }
    
    private fun showBiometricPrompt(onSuccess: () -> Unit, onError: (String) -> Unit) {
        val executor = ContextCompat.getMainExecutor(activity)
        
        val biometricPrompt = BiometricPrompt(
            activity,
            executor,
            object : BiometricPrompt.AuthenticationCallback() {
                override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
                    super.onAuthenticationSucceeded(result)
                    onSuccess()
                }
                
                override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
                    super.onAuthenticationError(errorCode, errString)
                    onError(errString.toString())
                }
                
                override fun onAuthenticationFailed() {
                    super.onAuthenticationFailed()
                    onError("Authentication failed")
                }
            }
        )
        
        val promptInfo = BiometricPrompt.PromptInfo.Builder()
            .setTitle("Biometric Authentication")
            .setSubtitle("Verify your identity")
            .setNegativeButtonText("Cancel")
            .build()
        
        biometricPrompt.authenticate(promptInfo)
    }
}
```

```kotlin
// Secure Input Validation
object InputValidator {
    
    // ❌ INSECURE - No validation
    fun processUserInput(input: String) {
        val query = "SELECT * FROM users WHERE username = '$input'"
        // SQL injection vulnerability!
    }
    
    // ✅ SECURE - Input validation and sanitization
    fun validateEmail(email: String): Boolean {
        val emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\$".toRegex()
        return emailRegex.matches(email)
    }
    
    fun validatePhoneNumber(phone: String): Boolean {
        val phoneRegex = "^\\+?[1-9]\\d{1,14}\$".toRegex()
        return phoneRegex.matches(phone)
    }
    
    fun sanitizeInput(input: String): String {
        // Remove special characters
        return input.replace(Regex("[^A-Za-z0-9]"), "")
    }
    
    fun validatePassword(password: String): Boolean {
        // At least 12 characters, uppercase, lowercase, number, special char
        return password.length >= 12 &&
                password.any { it.isUpperCase() } &&
                password.any { it.isLowerCase() } &&
                password.any { it.isDigit() } &&
                password.any { !it.isLetterOrDigit() }
    }
}
```

### 4. Android Root Detection

```kotlin
// Root Detection
object RootDetection {
    
    fun isDeviceRooted(): Boolean {
        return checkSuBinary() ||
                checkDangerousProperties() ||
                checkRootManagementApps() ||
                checkWritePaths()
    }
    
    private fun checkSuBinary(): Boolean {
        val paths = arrayOf(
            "/system/app/Superuser.apk",
            "/sbin/su",
            "/system/bin/su",
            "/system/xbin/su",
            "/data/local/xbin/su",
            "/data/local/bin/su",
            "/system/sd/xbin/su",
            "/system/bin/failsafe/su",
            "/data/local/su",
            "/su/bin/su"
        )
        
        for (path in paths) {
            if (File(path).exists()) {
                return true
            }
        }
        
        return false
    }
    
    private fun checkDangerousProperties(): Boolean {
        val buildTags = Build.TAGS
        return buildTags != null && buildTags.contains("test-keys")
    }
    
    private fun checkRootManagementApps(): Boolean {
        val packages = arrayOf(
            "com.noshufou.android.su",
            "com.noshufou.android.su.elite",
            "eu.chainfire.supersu",
            "com.koushikdutta.superuser",
            "com.thirdparty.superuser",
            "com.yellowes.su",
            "com.topjohnwu.magisk"
        )
        
        val pm = context.packageManager
        for (packageName in packages) {
            try {
                pm.getPackageInfo(packageName, 0)
                return true
            } catch (e: Exception) {
                // Package not found
            }
        }
        
        return false
    }
    
    private fun checkWritePaths(): Boolean {
        val paths = arrayOf(
            "/system",
            "/system/bin",
            "/system/sbin",
            "/system/xbin",
            "/vendor/bin",
            "/sbin",
            "/etc"
        )
        
        for (path in paths) {
            if (File(path).canWrite()) {
                return true
            }
        }
        
        return false
    }
}
```

---

## 🍎 iOS Security Architecture

### 1. iOS Security Model

```
iOS Security Layers:
┌─────────────────────────────────┐
│   App Sandbox                   │ ← Entitlements, Container directories
├─────────────────────────────────┤
│   iOS Framework                 │ ← Permission prompts, Keychain
├─────────────────────────────────┤
│   XNU Kernel                    │ ← Mandatory Access Control
├─────────────────────────────────┤
│   Secure Enclave                │ ← Hardware encryption, Touch ID/Face ID
└─────────────────────────────────┘
```

### 2. Secure iOS Code Examples

```swift
// Secure Data Storage with Keychain
import Security

class KeychainManager {
    
    enum KeychainError: Error {
        case duplicateItem
        case itemNotFound
        case unexpectedStatus(OSStatus)
    }
    
    // ❌ INSECURE - UserDefaults for sensitive data
    // UserDefaults.standard.set("password123", forKey: "password")  // DON'T DO THIS!
    
    // ✅ SECURE - Keychain storage
    static func save(key: String, data: Data) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecValueData as String: data,
            kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlockedThisDeviceOnly
        ]
        
        let status = SecItemAdd(query as CFDictionary, nil)
        
        guard status != errSecDuplicateItem else {
            throw KeychainError.duplicateItem
        }
        
        guard status == errSecSuccess else {
            throw KeychainError.unexpectedStatus(status)
        }
    }
    
    static func load(key: String) throws -> Data {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecReturnData as String: true
        ]
        
        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        
        guard status != errSecItemNotFound else {
            throw KeychainError.itemNotFound
        }
        
        guard status == errSecSuccess else {
            throw KeychainError.unexpectedStatus(status)
        }
        
        return result as! Data
    }
    
    static func delete(key: String) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key
        ]
        
        let status = SecItemDelete(query as CFDictionary)
        
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw KeychainError.unexpectedStatus(status)
        }
    }
}

// Usage
do {
    let password = "secure_password_123"
    let data = password.data(using: .utf8)!
    try KeychainManager.save(key: "user_password", data: data)
    
    let retrievedData = try KeychainManager.load(key: "user_password")
    let retrievedPassword = String(data: retrievedData, encoding: .utf8)
} catch {
    print("Keychain error: \\(error)")
}
```

```swift
// Certificate Pinning
import Foundation

class SecureURLSession {
    
    private let pinnedCertificates: [Data]
    
    init(pinnedCertificates: [Data]) {
        self.pinnedCertificates = pinnedCertificates
    }
    
    func createSession() -> URLSession {
        let configuration = URLSessionConfiguration.default
        configuration.timeoutIntervalForRequest = 30
        configuration.timeoutIntervalForResource = 60
        
        let session = URLSession(
            configuration: configuration,
            delegate: self,
            delegateQueue: nil
        )
        
        return session
    }
}

extension SecureURLSession: URLSessionDelegate {
    
    func urlSession(
        _ session: URLSession,
        didReceive challenge: URLAuthenticationChallenge,
        completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void
    ) {
        // Certificate pinning
        guard let serverTrust = challenge.protectionSpace.serverTrust else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }
        
        // Validate server certificate
        let policies = NSMutableArray()
        policies.add(SecPolicyCreateSSL(true, challenge.protectionSpace.host as CFString))
        SecTrustSetPolicies(serverTrust, policies)
        
        // Get server certificate
        guard let serverCertificate = SecTrustGetCertificateAtIndex(serverTrust, 0) else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }
        
        let serverCertificateData = SecCertificateCopyData(serverCertificate) as Data
        
        // Compare with pinned certificates
        for pinnedCertificate in pinnedCertificates {
            if serverCertificateData == pinnedCertificate {
                let credential = URLCredential(trust: serverTrust)
                completionHandler(.useCredential, credential)
                return
            }
        }
        
        // Certificate not pinned
        completionHandler(.cancelAuthenticationChallenge, nil)
    }
}
```

```swift
// Biometric Authentication
import LocalAuthentication

class BiometricAuth {
    
    func authenticateUser(completion: @escaping (Bool, Error?) -> Void) {
        let context = LAContext()
        var error: NSError?
        
        // Check if biometric authentication is available
        guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
            completion(false, error)
            return
        }
        
        // Authenticate
        let reason = "Authenticate to access your account"
        context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason) { success, error in
            DispatchQueue.main.async {
                completion(success, error)
            }
        }
    }
}

// Usage
let biometricAuth = BiometricAuth()
biometricAuth.authenticateUser { success, error in
    if success {
        print("Authentication successful")
    } else {
        print("Authentication failed: \\(error?.localizedDescription ?? "Unknown error")")
    }
}
```

```swift
// Secure Input Validation
struct InputValidator {
    
    // ❌ INSECURE - No validation
    static func processUserInput(_ input: String) {
        let query = "SELECT * FROM users WHERE username = '\\(input)'"
        // SQL injection vulnerability!
    }
    
    // ✅ SECURE - Input validation
    static func validateEmail(_ email: String) -> Bool {
        let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        let emailPredicate = NSPredicate(format: "SELF MATCHES %@", emailRegex)
        return emailPredicate.evaluate(with: email)
    }
    
    static func validatePhoneNumber(_ phone: String) -> Bool {
        let phoneRegex = "^\\+?[1-9]\\d{1,14}$"
        let phonePredicate = NSPredicate(format: "SELF MATCHES %@", phoneRegex)
        return phonePredicate.evaluate(with: phone)
    }
    
    static func sanitizeInput(_ input: String) -> String {
        let allowedCharacters = CharacterSet.alphanumerics
        return input.components(separatedBy: allowedCharacters.inverted).joined()
    }
    
    static func validatePassword(_ password: String) -> Bool {
        // At least 12 characters, uppercase, lowercase, number, special char
        let passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{12,}$"
        let passwordPredicate = NSPredicate(format: "SELF MATCHES %@", passwordRegex)
        return passwordPredicate.evaluate(with: password)
    }
}
```

### 3. iOS Jailbreak Detection

```swift
// Jailbreak Detection
class JailbreakDetection {
    
    static func isJailbroken() -> Bool {
        return checkSuspiciousFiles() ||
                checkSuspiciousApps() ||
                checkWriteAccess() ||
                checkFork() ||
                checkSymbolicLinks()
    }
    
    private static func checkSuspiciousFiles() -> Bool {
        let paths = [
            "/Applications/Cydia.app",
            "/Library/MobileSubstrate/MobileSubstrate.dylib",
            "/bin/bash",
            "/usr/sbin/sshd",
            "/etc/apt",
            "/private/var/lib/apt/",
            "/usr/bin/ssh",
            "/Applications/FakeCarrier.app",
            "/Applications/Icy.app",
            "/Applications/IntelliScreen.app",
            "/Applications/MxTube.app",
            "/Applications/RockApp.app",
            "/Applications/SBSettings.app",
            "/Applications/WinterBoard.app",
            "/Library/MobileSubstrate/DynamicLibraries/LiveClock.plist",
            "/System/Library/LaunchDaemons/com.ikey.bbot.plist",
            "/System/Library/LaunchDaemons/com.saurik.Cydia.Startup.plist",
            "/var/cache/apt",
            "/var/lib/cydia",
            "/var/log/syslog"
        ]
        
        for path in paths {
            if FileManager.default.fileExists(atPath: path) {
                return true
            }
        }
        
        return false
    }
    
    private static func checkSuspiciousApps() -> Bool {
        guard let schemes = ["cydia://", "sileo://", "zbra://"] as? [String] else {
            return false
        }
        
        for scheme in schemes {
            if let url = URL(string: scheme) {
                if UIApplication.shared.canOpenURL(url) {
                    return true
                }
            }
        }
        
        return false
    }
    
    private static func checkWriteAccess() -> Bool {
        let path = "/private/jailbreak.txt"
        do {
            try "test".write(toFile: path, atomically: true, encoding: .utf8)
            try FileManager.default.removeItem(atPath: path)
            return true
        } catch {
            return false
        }
    }
    
    private static func checkFork() -> Bool {
        let pid = fork()
        if pid >= 0 {
            return true
        }
        return false
    }
    
    private static func checkSymbolicLinks() -> Bool {
        do {
            let path = "/Applications"
            let attributes = try FileManager.default.attributesOfItem(atPath: path)
            if let type = attributes[.type] as? FileAttributeType, type == .typeSymbolicLink {
                return true
            }
        } catch {
            // Path doesn't exist or can't be accessed
        }
        return false
    }
}
```

---

## 🔐 OWASP Mobile Top 10

### M1: Improper Platform Usage

```kotlin
// ❌ INSECURE - Exposing Activity to other apps
<activity
    android:name=".SensitiveActivity"
    android:exported="true">  <!-- Dangerous! -->
</activity>

// ✅ SECURE - Restricted access
<activity
    android:name=".SensitiveActivity"
    android:exported="false">
</activity>
```

### M2: Insecure Data Storage

```kotlin
// ❌ INSECURE
val sharedPref = context.getSharedPreferences("data", Context.MODE_PRIVATE)
sharedPref.edit().putString("credit_card", "1234-5678-9012-3456").apply()

// ✅ SECURE
val encryptedPrefs = EncryptedSharedPreferences.create(...)
encryptedPrefs.edit().putString("credit_card", encryptedCard).apply()
```

### M3: Insecure Communication

```kotlin
// ❌ INSECURE - HTTP traffic
val url = URL("http://api.example.com/data")

// ✅ SECURE - HTTPS with certificate pinning
val certificatePinner = CertificatePinner.Builder()
    .add("api.example.com", "sha256/...")
    .build()

val client = OkHttpClient.Builder()
    .certificatePinner(certificatePinner)
    .build()
```

### M4: Insecure Authentication

```kotlin
// ❌ INSECURE - Weak password policy
if (password.length >= 6) {
    // Accept password
}

// ✅ SECURE - Strong authentication
if (password.length >= 12 &&
    password.any { it.isUpperCase() } &&
    password.any { it.isLowerCase() } &&
    password.any { it.isDigit() } &&
    password.any { !it.isLetterOrDigit() }) {
    // Accept password
}

// Biometric authentication
val biometricPrompt = BiometricPrompt(...)
biometricPrompt.authenticate(promptInfo)
```

### M5: Insufficient Cryptography

```kotlin
// ❌ INSECURE - Weak encryption
val cipher = Cipher.getInstance("DES")  // Weak algorithm

// ✅ SECURE - Strong encryption
val cipher = Cipher.getInstance("AES/GCM/NoPadding")
```

---

## 🔍 Mobile Pentesting

### Android Pentesting Tools

```bash
# 1. Setup Android emulator
emulator -avd Pixel_5_API_30 -writable-system

# 2. Root emulator
adb root
adb remount

# 3. Install Burp Suite CA certificate
adb push cacert.der /system/etc/security/cacerts/

# 4. Install app
adb install app.apk

# 5. Decompile APK
apktool d app.apk -o app_decompiled/

# 6. Extract source code
jadx app.apk -d app_source/

# 7. Find hardcoded secrets
grep -r "password" app_source/
grep -r "api_key" app_source/
grep -r "secret" app_source/

# 8. Analyze AndroidManifest.xml
cat app_decompiled/AndroidManifest.xml

# 9. Check exported components
adb shell dumpsys package com.example.app

# 10. Intercept traffic with Frida
frida -U -f com.example.app -l bypass-ssl-pinning.js
```

```javascript
// bypass-ssl-pinning.js - Frida script
Java.perform(function() {
    // Bypass certificate pinning
    var CertificatePinner = Java.use('okhttp3.CertificatePinner');
    CertificatePinner.check.overload('java.lang.String', 'java.util.List').implementation = function() {
        console.log('[+] Certificate pinning bypassed');
        return;
    };
    
    // Bypass root detection
    var RootBeer = Java.use('com.scottyab.rootbeer.RootBeer');
    RootBeer.isRooted.implementation = function() {
        console.log('[+] Root detection bypassed');
        return false;
    };
});
```

---

## 📊 Summary & Best Practices

### Mobile Security Checklist
- ✅ Encrypt sensitive data at rest
- ✅ Use HTTPS with certificate pinning
- ✅ Implement proper authentication (biometric, MFA)
- ✅ Minimize permissions
- ✅ Input validation and sanitization
- ✅ Secure data storage (Keychain, EncryptedSharedPreferences)
- ✅ Code obfuscation
- ✅ Root/Jailbreak detection
- ✅ Secure API communication
- ✅ Regular security testing

**Module 12 Complete! Next: Module 13 - API Security** 🔌
