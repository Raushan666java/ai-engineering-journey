---
slug: /operating-systems/16-security
title: "Chapter 16: Security"
sidebar_label: "Chapter 16: Security"
sidebar_position: 16
---
# Chapter 16: Security

**<< [Shell Scripting](./15-shell-scripting.md)** | [**Next: Virtualization and Cloud Computing**](./17-virtualization.md) >>

---

## Learning Objectives

- Identify the four main goals of OS security: confidentiality, integrity, availability, and authentication
- Describe authentication mechanisms from passwords to biometrics
- Explain access control models: DAC, MAC, RBAC, and ACLs
- Understand privilege escalation attacks and mitigations
- Describe Linux Security Modules (LSM) and SELinux
- Understand buffer overflow attacks and modern mitigations
- Explain the principle of least privilege and its implementation
- Analyze cryptography basics: symmetric, asymmetric, hashing
- Classify malware types: virus, worm, trojan, ransomware, rootkit

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/16-security/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/16-security/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/16-security/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/16-security/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/16-security/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/16-security/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Security Goals** | Confidentiality, integrity, availability (CIA triad) |
| **Authentication** | Passwords, biometrics, two-factor, Kerberos |
| **Access Control** | Discretionary (DAC), mandatory (MAC), role-based (RBAC) |
| **Buffer Overflow** | Classic exploit; overwrite return address to execute arbitrary code |
| **Cryptography** | Symmetric (AES), asymmetric (RSA), hashing (SHA-256), signatures |
| **Network Security** | Firewalls, VPNs, TLS, intrusion detection systems |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Security Goals: CIA] --> B[Authentication Methods]
    B --> C[Access Control Models]
    C --> D[Buffer Overflow & Malware]
    D --> E[Cryptography Basics]
    E --> F[Network Security]
    F --> G[Security Best Practices]
    G --> H[Summary]
</div>

## Theory

![Security](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/16-security.png)

### Security Goals


| Goal | Definition | Example Violation |
|------|------------|-------------------|
| **Confidentiality** | Data is accessible only to authorized users | Reading another user's files |
| **Integrity** | Data cannot be modified without authorization | Tampering with system binaries |
| **Availability** | System resources are accessible when needed | Denial-of-service attack |
| **Authentication** | Users are who they claim to be | Password theft |

---

## Security Threats

Security threats are actions or events that compromise the confidentiality, integrity, or availability of a system. The OS must defend against both external attackers and malicious insiders.

### Real-World Analogy

> **Apartment Building Security**: Just as an apartment building has multiple layers (front door lock, mailbox lock, apartment door lock, safe), an OS has layered security. A "threat" is anyone trying to bypass these layers → a burglar picking the front lock, a thief stealing mail, a neighbor entering your apartment.

### Threat Classification

| Threat Type | Description | Propagation | Payload | Example |
|-------------|-------------|-------------|---------|---------|
| **Virus** | Attaches to host files; requires user action to spread | File infection, email attachments | Data corruption, resource drain | CIH (Chernobyl) virus |
| **Worm** | Self-replicating; spreads without user action | Network exploits, removable media | Bandwidth exhaustion, backdoor installation | Morris worm, WannaCry |
| **Trojan** | Disguised as legitimate software | Social engineering, fake downloads | Credential theft, spyware, ransomware | Zeus banking trojan |
| **Ransomware** | Encrypts files and demands payment | Phishing emails, exploit kits | File encryption, data exfiltration | Ryuk, LockBit, BlackCat |
| **Rootkit** | Hides deep in the OS (kernel/boot) | Driver installation, bootkits | Stealth persistence, keylogging | Sony BMG rootkit, Stuxnet |
| **Spyware** | Secretly monitors user activity | Bundled software, drive-by download | Data theft, screen capture | Pegasus, DarkComet |
| **Adware** | Displays unwanted advertisements | Bundled installers | Revenue fraud, browser hijacking | Fireball, Gator |

### Malware Attack Chain (Numbered Steps)

```
Step 1: Delivery → Attacker delivers payload via email, exploit, or USB
Step 2: Execution → User opens file or exploit triggers code execution
Step 3: Persistence → Malware installs itself (registry keys, cron jobs, services)
Step 4: Privilege Escalation → Malware escalates to SYSTEM/root
Step 5: Defense Evasion → Malware disables AV, hides processes, clears logs
Step 6: Credential Access → Malware steals passwords, tokens, hashes
Step 7: Lateral Movement → Malware spreads to other systems on the network
Step 8: Exfiltration/Impact → Data stolen or system encrypted/destroyed
```

### Pseudocode: Basic Malware Scanner

```
FUNCTION scanFile(filePath):
    signatures = loadSignatures("virus_definitions.dat")
    fileContent = readFile(filePath)
    FOR EACH sig IN signatures:
        IF contains(fileContent, sig.pattern):
            LOG "Threat detected: " + sig.name + " in " + filePath
            quarantineFile(filePath)
            RETURN "INFECTED: " + sig.name
    RETURN "CLEAN"

FUNCTION quarantineFile(filePath):
    quarantineDir = "/quarantine/" + timestamp()
    copyFile(filePath, quarantineDir)
    deleteFile(filePath)
    LOG "Quarantined: " + filePath
```

### C++: Simple Malware Signature Scanner

```cpp
#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <ctime>
using namespace std;

struct Signature {
    string name;
    string pattern;
    int severity; // 1-5
};

class MalwareScanner {
private:
    vector<Signature> signatures;
    int scanCount = 0, threatCount = 0;

public:
    void loadSignatures(const string& path) {
        ifstream file(path);
        string name, pattern;
        int sev;
        while (file >> name >> pattern >> sev)
            signatures.push_back({name, pattern, sev});
    }

    string scanFile(const string& path) {
        ifstream file(path);
        if (!file) return "ERROR: Cannot open " + path;
        string content((istreambuf_iterator<char>(file)), {});
        scanCount++;
        for (auto& sig : signatures) {
            if (content.find(sig.pattern) != string::npos) {
                threatCount++;
                string threat = sig.name + " [" + to_string(sig.severity) + "]";
                cout << "[THREAT] " << threat << " in " << path << endl;
                quarantine(path);
                return threat;
            }
        }
        return "CLEAN";
    }

    void quarantine(const string& path) {
        string dest = "quarantine/" + to_string(time(0)) + "_" + path;
        ifstream src(path, ios::binary);
        ofstream dst(dest, ios::binary);
        dst << src.rdbuf();
        remove(path.c_str());
        cout << "[QUARANTINED] " << path << " -> " << dest << endl;
    }

    void report() {
        cout << "\n--- Scan Report ---" << endl;
        cout << "Files scanned: " << scanCount << endl;
        cout << "Threats found: " << threatCount << endl;
    }
};

int main() {
    MalwareScanner scanner;
    scanner.loadSignatures("signatures.dat");
    cout << scanner.scanFile("suspicious.exe") << endl;
    cout << scanner.scanFile("legit.doc") << endl;
    scanner.report();
    return 0;
}
```

### Python: Malware Scanner (Same Logic)

```python
import os
import shutil
from datetime import datetime
from dataclasses import dataclass
from typing import Optional

@dataclass
class Signature:
    name: str
    pattern: str
    severity: int

class MalwareScanner:
    def __init__(self):
        self.signatures: list[Signature] = []
        self.scan_count = 0
        self.threat_count = 0

    def load_signatures(self, path: str) -> None:
        with open(path) as f:
            for line in f:
                name, pattern, sev = line.strip().split()
                self.signatures.append(Signature(name, pattern, int(sev)))

    def scan_file(self, path: str) -> str:
        try:
            with open(path, 'rb') as f:
                content = f.read()
        except FileNotFoundError:
            return f"ERROR: Cannot open {path}"
        self.scan_count += 1
        for sig in self.signatures:
            if sig.pattern.encode() in content:
                self.threat_count += 1
                result = f"{sig.name} [{sig.severity}]"
                print(f"[THREAT] {result} in {path}")
                self._quarantine(path)
                return result
        return "CLEAN"

    def _quarantine(self, path: str) -> None:
        dest = f"quarantine/{datetime.now().timestamp()}_{os.path.basename(path)}"
        os.makedirs("quarantine", exist_ok=True)
        shutil.copy2(path, dest)
        os.remove(path)
        print(f"[QUARANTINED] {path} -> {dest}")

    def report(self) -> None:
        print(f"\n--- Scan Report ---")
        print(f"Files scanned: {self.scan_count}")
        print(f"Threats found: {self.threat_count}")

if __name__ == "__main__":
    s = MalwareScanner()
    s.load_signatures("signatures.dat")
    print(s.scan_file("suspicious.exe"))
    print(s.scan_file("legit.doc"))
    s.report()
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| Signature loading | O(S) | O(S) | S = number of signatures; each stored in memory |
| File scanning (naive) | O(S * N) | O(N) | S signatures * N file bytes; contains() is O(N) per sig |
| File scanning (Aho-Corasick) | O(S + N + M) | O(S + M) | Build automaton O(S), scan O(N), M = total pattern matches |
| Quarantine | O(F) | O(F) | F = file size; must copy entire file |

### Advantages & Disadvantages

| Aspect | Signature-Based Scanning | Behavioral Analysis | Heuristic Scanning |
|--------|------------------------|---------------------|-------------------|
| **Advantage** | Low false positives, fast | Detects novel malware | Balances speed and detection |
| **Disadvantage** | Misses zero-day variants | High false positives, slow | Moderate false positives |
| **Best for** | Known threats | Unknown malware | Variants of known families |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Polymorphic malware** | Changes signature each infection | Use behavioral/heuristic analysis |
| **Encrypted/obfuscated payload** | Static pattern matching fails | Decrypt/deobfuscate first or use emulation |
| **Large files (>2GB)** | Memory exhaustion | Stream-based scanning (chunked reads) |
| **Zero-day malware** | No signature exists | Behavioral monitoring, sandbox execution |
| **Race condition on quarantine** | File deleted between check and quarantine | Use atomic rename + exclusive locks |

---

## Authentication

Authentication verifies a user's claimed identity. It is the first line of defense in any secure system.

### Real-World Analogy

> **Airport Security Check**: To board a flight, you must prove your identity. "Something you know" = your booking reference. "Something you have" = your passport. "Something you are" = your face matched to the passport photo. The gate agent checks all three before allowing you through.

### Authentication Factors Comparison

| Factor | Type | Examples | Strength | Weakness |
|--------|------|----------|----------|----------|
| **Knowledge** (Type 1) | Something you know | Password, PIN, security questions | Low-medium | Replay, phishing, shoulder surfing |
| **Possession** (Type 2) | Something you have | Phone (TOTP), YubiKey, smart card | Medium-high | Theft, loss, SIM swap |
| **Inherence** (Type 3) | Something you are | Fingerprint, face, iris, voice | High | Cannot be reset; biometric data leakage |
| **Location** (Type 4) | Somewhere you are | GPS, IP geo, Wi-Fi SSID | Low (contextual) | Spoofable, VPN bypass |
| **Behavior** (Type 5) | Something you do | Keystroke dynamics, gait | Medium | High false rejection rate |

### Multi-Factor Authentication (MFA) Steps

```
Step 1: User submits username + password (Type 1)
Step 2: Server validates password hash against database
Step 3: Server generates random challenge (nonce)
Step 4: Server sends challenge to user's registered device (Type 2)
Step 5: User responds with signed challenge (TOTP or hardware token)
Step 6: Server verifies response cryptographically
Step 7: Server issues session token (JWT / session cookie)
Step 8: User accesses resources using session token
```

### Pseudocode: Password Authentication Flow

```
FUNCTION authenticateUser(username, password):
    userRecord = DB.getUser(username)
    IF userRecord == NULL:
        RETURN "USER_NOT_FOUND"
    
    salt = userRecord.salt
    storedHash = userRecord.hash
    inputHash = slowHash(password, salt)  // bcrypt/scrypt/Argon2
    
    IF inputHash == storedHash:
        sessionToken = generateSessionToken()
        DB.storeSession(username, sessionToken)
        RETURN "SUCCESS:" + sessionToken
    ELSE:
        incrementFailedAttempts(username)
        IF failedAttempts > MAX_ATTEMPTS:
            lockAccount(username)
            RETURN "ACCOUNT_LOCKED"
        RETURN "INVALID_PASSWORD"
```

### Dry Run: Authentication Trace Table

| Step | Input | Action | State | Output |
|------|-------|--------|-------|--------|
| 1 | "alice", "pass123" | Query DB for user | Found: salt=0xAB12, hash=0x7D3F | OK |
| 2 | → | Hash password with salt | hash("pass123" + "AB12") = ? | Calculate |
| 3 | → | Slow hash: bcrypt with cost=12 | ~250ms computation | Result: 0x7D3F |
| 4 | → | Compare computed vs stored | 0x7D3F == 0x7D3F | Match |
| 5 | → | Generate session token | UUID v4: "a1b2c3..." | Token |
| 6 | → | Store session in DB | key:token, value:alice, TTL:3600s | Stored |
| 7 | → | Return success | → | "SUCCESS: a1b2c3..." |

### C++: Password Hashing with Salt

```cpp
#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>
#include <random>
#include <cstring>
using namespace std;

class PasswordHasher {
private:
    random_device rd;
    mt19937_64 gen{rd()};
    uniform_int_distribution<> dis{0, 255};

    string toHex(const unsigned char* data, size_t len) {
        stringstream ss;
        for (size_t i = 0; i < len; i++)
            ss << hex << setw(2) << setfill('0') << (int)data[i];
        return ss.str();
    }

public:
    string generateSalt(size_t bytes = 16) {
        unsigned char salt[16];
        for (size_t i = 0; i < bytes; i++)
            salt[i] = dis(gen) & 0xFF;
        return toHex(salt, bytes);
    }

    string hashPassword(const string& password, const string& salt) {
        string combined = salt + password;
        unsigned char result[32];
        memset(result, 0, 32);
        for (size_t i = 0; i < combined.size(); i++)
            result[i % 32] ^= combined[i];
        return toHex(result, 32);
    }

    struct User {
        string username;
        string salt;
        string hash;
    };

    User createUser(const string& username, const string& password) {
        string s = generateSalt();
        string h = hashPassword(password, s);
        return {username, s, h};
    }

    bool verifyPassword(const User& user, const string& password) {
        string h = hashPassword(password, user.salt);
        return h == user.hash;
    }
};

int main() {
    PasswordHasher ph;
    auto user = ph.createUser("alice", "mySecureP@ss");
    cout << "Username: " << user.username << endl;
    cout << "Salt:     " << user.salt << endl;
    cout << "Hash:     " << user.hash << endl;
    cout << "\nVerification:" << endl;
    cout << "Correct pw: " << ph.verifyPassword(user, "mySecureP@ss") << endl;
    cout << "Wrong pw:   " << ph.verifyPassword(user, "wrongPass") << endl;
    return 0;
}
```

### Python: Password Authentication System

```python
import hashlib
import os
import uuid
from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    username: str
    salt: str
    hash: str

class AuthSystem:
    def __init__(self):
        self.users: dict[str, User] = {}
        self.sessions: dict[str, str] = {}
        self.failed_attempts: dict[str, int] = {}
        self.max_attempts = 3

    def _generate_salt(self) -> str:
        return os.urandom(16).hex()

    def _hash_password(self, password: str, salt: str) -> str:
        return hashlib.pbkdf2_hmac('sha256',
            password.encode(), salt.encode(), 100000).hex()

    def create_user(self, username: str, password: str) -> User:
        salt = self._generate_salt()
        hash_val = self._hash_password(password, salt)
        user = User(username, salt, hash_val)
        self.users[username] = user
        print(f"[AUTH] Created user: {username}")
        return user

    def authenticate(self, username: str, password: str) -> Optional[str]:
        if username not in self.users:
            return None
        if self.failed_attempts.get(username, 0) >= self.max_attempts:
            print(f"[AUTH] Account locked: {username}")
            return None
        user = self.users[username]
        computed = self._hash_password(password, user.salt)
        if computed != user.hash:
            self.failed_attempts[username] = \
                self.failed_attempts.get(username, 0) + 1
            remaining = self.max_attempts - self.failed_attempts[username]
            print(f"[AUTH] Failed attempt for {username} ({remaining} remaining)")
            return None
        self.failed_attempts[username] = 0
        token = str(uuid.uuid4())
        self.sessions[token] = username
        print(f"[AUTH] {username} authenticated successfully")
        return token

    def check_session(self, token: str) -> Optional[str]:
        return self.sessions.get(token)

    def logout(self, token: str) -> None:
        self.sessions.pop(token, None)

if __name__ == "__main__":
    auth = AuthSystem()
    auth.create_user("alice", "secure123")
    auth.create_user("bob", "password456")
    token = auth.authenticate("alice", "secure123")
    print(f"Session: {auth.check_session(token)}")
    auth.authenticate("bob", "wrongpass")
    auth.authenticate("bob", "wrongpass")
    auth.authenticate("bob", "wrongpass")
    auth.authenticate("bob", "stillwrong")
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| Hash computation | O(1)* | O(1) | Fixed input size; *iterations multiplies constant (e.g., PBKDF2=100k rounds) |
| Salt generation | O(1) | O(1) | Random bytes; constant time |
| User lookup | O(1) avg | O(U) | Hash table; U = number of users |
| Session validation | O(1) avg | O(S) | Hash table; S = active sessions |

### Advantages & Disadvantages

| Aspect | Password-Only | MFA (2FA/TOTP) | Biometric-Only |
|--------|---------------|-----------------|----------------|
| **Advantage** | Simple, universal user experience | Strong security against credential theft | Very hard to forge |
| **Disadvantage** | Weak against phishing/breach | User friction, device dependency | Privacy concerns, cannot reset |
| **Recovery** | Reset via email | Can lose device | Biometric data is permanent |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Salt collision** | Two users get same salt (low probability but possible) | Use cryptographic RNG; salt length >= 16 bytes |
| **Brute force** | Attacker tries all password combinations | Rate limiting, account lockout, exponential backoff |
| **Side-channel timing** | Attacker measures response time to guess hash | Constant-time comparison (hash_equals / timing_safe_compare) |
| **Password reuse** | User reuses password across services | Password blacklist checking (HaveIBeenPwned API) |
| **Session hijacking** | Token stolen via XSS or network sniffing | HTTPS only, HttpOnly cookies, short TTL, refresh rotation |

---

## Authorization

After authentication confirms who you are, authorization determines what you can do. Authentication is about identity; authorization is about permissions.

### Real-World Analogy

> **Office Building Access**: After showing your ID badge at the front desk (authentication), authorization determines which floors you can access. An intern can access only the ground floor (low authorization), an engineer can access floors 2-5 (medium authorization), and the CEO can access all floors including the penthouse (high authorization).

### Authorization Steps

```
Step 1: User is authenticated (identity established)
Step 2: System identifies the resource being accessed (object)
Step 3: System determines the type of operation (read/write/execute/delete)
Step 4: System looks up access rules for this user + resource + operation
Step 5: System evaluates the rules:
    - Does the user own the resource? -> DAC check
    - Does the user's role permit this? -> RBAC check
    - Does the system policy allow this? -> MAC check
Step 6: Grant or deny access; log the decision (audit trail)
```

### Pseudocode: Authorization Decision

```
FUNCTION checkAccess(user, resource, operation):
    // DAC layer -- does the user own the resource?
    IF resource.owner == user.uid:
        permission = resource.ownerPermissions
        IF permission.contains(operation):
            RETURN "GRANTED"
    // ACL layer -- explicit user/group entries
    IF user.uid IN resource.acl.users:
        RETURN resource.acl.users[user.uid].contains(operation)
    IF any(user.groups & resource.acl.groups):
        RETURN resource.acl.groups[common].contains(operation)
    // Default: check "others" permissions
    RETURN resource.othersPermissions.contains(operation)
```

### C++: Simple Authorization Check

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
using namespace std;

enum Operation { READ, WRITE, EXECUTE, DELETE };
const string opNames[] = {"READ", "WRITE", "EXECUTE", "DELETE"};

struct User {
    string name;
    int uid;
    unordered_set<string> groups;
};

struct Resource {
    string path;
    int ownerUid;
    unordered_set<Operation> ownerPerms;
    unordered_set<Operation> groupPerms;
    unordered_set<Operation> otherPerms;
    unordered_map<string, unordered_set<Operation>> userACL;
};

class AuthorizationService {
public:
    bool checkAccess(const User& user, const Resource& res, Operation op) {
        if (user.uid == res.ownerUid && res.ownerPerms.count(op))
            return true;
        if (res.userACL.count(user.name) && res.userACL.at(user.name).count(op))
            return true;
        for (auto& g : res.userACL) {
            if (user.groups.count(g.first) && g.second.count(op))
                return true;
        }
        return res.otherPerms.count(op);
    }
};

int main() {
    AuthorizationService authz;
    User alice{"alice", 1001, {"dev", "users"}};
    User bob{"bob", 1002, {"qa", "users"}};
    Resource secretFile{
        "/etc/secret.conf", 1001,
        {READ, WRITE}, {READ}, {},
        {{"bob", {READ}}}
    };
    cout << "Alice read:  " << authz.checkAccess(alice, secretFile, READ) << endl;
    cout << "Alice write: " << authz.checkAccess(alice, secretFile, WRITE) << endl;
    cout << "Bob read:    " << authz.checkAccess(bob, secretFile, READ) << endl;
    cout << "Bob write:   " << authz.checkAccess(bob, secretFile, WRITE) << endl;
    return 0;
}
```

### Python: Authorization Check

```python
from enum import Enum, auto
from dataclasses import dataclass, field

class Operation(Enum):
    READ = auto()
    WRITE = auto()
    EXECUTE = auto()
    DELETE = auto()

@dataclass
class User:
    name: str
    uid: int
    groups: set[str] = field(default_factory=set)

@dataclass
class Resource:
    path: str
    owner_uid: int
    owner_perms: set[Operation] = field(default_factory=set)
    group_perms: set[Operation] = field(default_factory=set)
    other_perms: set[Operation] = field(default_factory=set)
    user_acl: dict[str, set[Operation]] = field(default_factory=dict)

class AuthorizationService:
    def check_access(self, user: User, resource: Resource,
                     operation: Operation) -> bool:
        if user.uid == resource.owner_uid and \
           operation in resource.owner_perms:
            return True
        if user.name in resource.user_acl and \
           operation in resource.user_acl[user.name]:
            return True
        for group in user.groups:
            if group in resource.user_acl and \
               operation in resource.user_acl[group]:
                return True
        return operation in resource.other_perms

if __name__ == "__main__":
    authz = AuthorizationService()
    alice = User("alice", 1001, {"dev", "users"})
    bob = User("bob", 1002, {"qa", "users"})
    secret = Resource(
        path="/etc/secret.conf", owner_uid=1001,
        owner_perms={Operation.READ, Operation.WRITE},
        group_perms={Operation.READ},
        other_perms=set(),
        user_acl={"bob": {Operation.READ}}
    )
    print(f"Alice read:  {authz.check_access(alice, secret, Operation.READ)}")
    print(f"Alice write: {authz.check_access(alice, secret, Operation.WRITE)}")
    print(f"Bob read:    {authz.check_access(bob, secret, Operation.READ)}")
    print(f"Bob write:   {authz.check_access(bob, secret, Operation.WRITE)}")
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| ACL lookup (direct user) | O(1) | O(A) | Hash table; A = number of ACL entries |
| ACL lookup (group membership) | O(G) | O(G) | G = user's groups; linear scan |
| Owner check | O(1) | -- | Direct UID comparison |
| Full authorization | O(G) avg | O(A + G) | Depends on ACL structure |

### Advantages & Disadvantages

| Aspect | ACL-Based | Capability-Based | Policy-Based (MAC) |
|--------|-----------|-----------------|---------------------|
| **Advantage** | Intuitive, Unix heritage | Fine-grained, delegatable | System-enforced, tamper-proof |
| **Disadvantage** | Difficult to audit at scale | Revocation is complex | Inflexible, complex policy management |
| **Granularity** | Per-user/group | Per-token | System-wide label matching |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Least privilege violation** | User granted more access than needed | Periodic permission reviews, RBAC role mining |
| **Permission creep** | Accumulated access across role changes | Time-bound assignments, quarterly audits |
| **Confused deputy problem** | Legitimate program tricked into unauthorized actions | Capability-based security, sandboxing |
| **TOCTOU on ACL check** | ACL changes between check and use | Atomic operations, deny-by-default |

---

## Access Control Models

Access control models define how subjects (users, processes) can interact with objects (files, devices, memory).

### Real-World Analogy

> **Library Access Systems**: DAC = a book owner decides who borrows their book. MAC = the library has a classified section; no one below Top Secret clearance can enter. RBAC = "Librarians" can check books in/out; "Patrons" can browse and borrow; "Managers" can order new books → permissions go with the role, not the person.

### Discretionary Access Control (DAC)

In DAC, the owner of an object decides who can access it. This is the standard Unix/Linux permission model.

#### Steps for DAC Permission Check

```
Step 1: User executes operation on object (e.g., open file for writing)
Step 2: Kernel gets the object's owner UID, owning GID, and permission bits
Step 3: Kernel gets the user's UID and supplementary group list
Step 4: If user UID == object owner UID -> use owner permission bits
Step 5: Else if user is in object's group -> use group permission bits
Step 6: Else -> use "others" permission bits
Step 7: If required operation bit is set -> GRANT; else -> DENY
```

#### Pseudocode: DAC Permission Decision

```
FUNCTION checkUnixPermissions(user, file, requestedOp):
    ownerBits = (file.permissions >> 6) & 0x07
    groupBits = (file.permissions >> 3) & 0x07
    otherBits = file.permissions & 0x07

    IF user.uid == file.ownerUid:
        RETURN (ownerBits & requestedOp) != 0
    IF user.gid == file.groupGid OR user in file.supplementalGroups:
        RETURN (groupBits & requestedOp) != 0
    RETURN (otherBits & requestedOp) != 0
```

#### Dry Run: DAC Permission Check

Scenario: User alice (uid=1001) tries to WRITE to /etc/config. Permissions: -rw-r----- (640) owner=root group=root

| Step | Check | Value | Result |
|------|-------|-------|--------|
| 1 | User UID == file owner? | 1001 != 0 (root) | No |
| 2 | User GID == file GID? | 1001 != 0 (root) | No |
| 3 | Fall to "others" | others bits = --- (0) | 0 & W not true |
| 4 | Final decision | -- | DENIED |

### Mandatory Access Control (MAC)

In MAC, system-wide policy controls access. Users cannot override these rules, even if they own the object.

#### SELinux Security Context

Every subject (process) and object (file, socket) has a security context:

```
user:role:type:level

Example:
system_u:object_r:httpd_sys_content_t:s0

- user: SELinux user identity (system_u, user_u)
- role: RBAC role within SELinux (object_r, system_r)
- type: Type Enforcement -- the primary access control decision point
- level: MLS (Multi-Level Security) sensitivity
```

#### Steps for MAC Permission Check

```
Step 1: Subject (process with context S) requests operation OP on object (context O)
Step 2: Kernel calls LSM hook (e.g., security_file_permission)
Step 3: SELinux looks up the Access Vector Cache (AVC)
Step 4: AVC searches for an entry: allow S.type O.type : class { OP }
Step 5: If cached decision exists -> return cached result
Step 6: If not cached -> query policy database (binary .pp policy)
Step 7: Compute decision: allowed if ANY allow rule matches
Step 8: Cache decision in AVC for future requests
Step 9: Return allow/deny
```

### Role-Based Access Control (RBAC)

RBAC assigns permissions to roles, and users to roles.

#### RBAC Model (NIST Standard)

```
Core RBAC:
  - User-Role Assignment: users are members of roles
  - Role-Permission Assignment: roles have permissions
  - User's effective permissions = U(role permissions)

Hierarchical RBAC:
  - Role hierarchy: senior roles inherit junior role permissions
  - Example: admin inherits all editor permissions + more

Constrained RBAC:
  - Separation of Duty (SoD): conflicting roles cannot overlap
  - Example: same person cannot be both "purchaser" and "approver"
```

#### Pseudocode: RBAC Authorization

```
FUNCTION checkRBAC(user, resource, operation):
    userRoles = getUserRoles(user)
    FOR EACH role IN userRoles:
        permissions = getRolePermissions(role)
        resourcePerms = permissions.get(resource)
        IF resourcePerms AND resourcePerms.contains(operation):
            RETURN "GRANTED"
        inheritedRoles = getParentRoles(role)
        FOR EACH inherited IN inheritedRoles:
            inheritedPerms = getRolePermissions(inherited)
            IF inheritedPerms.get(resource).contains(operation):
                RETURN "GRANTED"
    RETURN "DENIED"
```

### Access Control Models Comparison

| Feature | DAC | MAC | RBAC |
|---------|-----|-----|------|
| **Control by** | File owner | System policy | Role assignment |
| **Flexibility** | High (users decide) | Low (centralized) | Moderate |
| **Security Level** | Low (user-granted) | High (kernel-enforced) | Moderate-High |
| **Tamper resistance** | Low | High (users cannot bypass) | Medium |
| **Granularity** | Per-user/group/other | Per-label pair | Per-role |
| **Management overhead** | Low | High (policy authoring) | Medium |
| **Auditability** | Low (decentralized) | High | High |
| **Examples** | Unix permissions, NTFS | SELinux, AppArmor, SMACK | Windows AD groups, AWS IAM |
| **Use Case** | Desktops, general servers | Military, classified systems | Enterprise organizations |

### Complexity Analysis

| Model | Authorization Decision | Policy Storage | Why |
|-------|----------------------|----------------|-----|
| DAC | O(1) | O(F) | Simple bitmask check on file inode; F = number of files |
| MAC (SELinux AVC) | O(1) cached | O(P) | AVC hash cache; P = number of policy rules |
| MAC (uncached) | O(log N) | O(P) | Binary search in avtab (AVL tree of allow rules) |
| RBAC | O(R * H) | O(R + P) | R = user's roles, H = hierarchy depth |

### Advantages & Disadvantages

| Aspect | DAC | MAC | RBAC |
|--------|-----|-----|------|
| **Advantage** | Intuitive, decentralized | Strong security, tamper-proof | Scalable permission management |
| **Disadvantage** | Malware inherits user perms | Complex to configure | Role explosion risk |
| **Maintenance** | Easy per-file | Difficult overall | Moderate |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **SetUID + DAC bypass** | Program runs as owner, not caller | Avoid SetUID; use capabilities |
| **Type collision (MAC)** | Different apps share same type | Use fine-grained type definitions |
| **Role explosion** | Hundreds of roles created | Role mining, attribute-based access (ABAC) |
| **Privilege escalation via transitive role** | Role A grants role B which grants admin | Proper separation of duties |
| **User namespace remapping** | Root inside namespace != host root | Explicit UID mapping configuration |

---

## Cryptography Basics

Cryptography provides the mathematical foundation for confidentiality, integrity, and authentication in operating systems.

### Real-World Analogy

> **Locked Diary + Sealed Envelope**: Symmetric encryption is like a locked diary → you use the same key to lock and unlock it. Asymmetric encryption is like a mailbox with a slot → anyone can drop mail in (public key encrypts), but only the owner with the private key can open it. Hashing is like a fingerprint → unique to the document, but you cannot reconstruct the person from the fingerprint.

### Symmetric vs Asymmetric Cryptography Comparison

| Property | Symmetric (AES) | Asymmetric (RSA) |
|----------|----------------|-------------------|
| **Keys** | Single shared key | Key pair: public + private |
| **Speed** | Fast (hardware-accelerated: AES-NI) | Slow (100-1000x slower) |
| **Key length** | 128-256 bits | 2048-4096 bits |
| **Security basis** | Substitution-permutation network | Integer factorization (RSA), ECDLP (ECC) |
| **Use case** | Bulk data encryption | Key exchange, digital signatures |
| **Key distribution** | Problematic (must share securely) | Easy (public key is public) |
| **Algorithm examples** | AES, ChaCha20, DES (broken) | RSA, ECDSA, Ed25519, DH |
| **Throughput** | ~1 GB/s (AES-NI) | ~1-10 MB/s |

### Steps: Encrypting a File with AES (Symmetric)

```
Step 1: Generate a random 256-bit key (32 bytes)
Step 2: Generate a random 128-bit IV (Initialization Vector)
Step 3: Initialize AES cipher in CBC/GCM mode with key and IV
Step 4: Read plaintext file in 16-byte blocks
Step 5: For each block:
    - If CBC mode: XOR block with previous ciphertext (or IV for first block)
    - Apply AES round transformation (SubBytes, ShiftRows, MixColumns, AddRoundKey)
    - Output ciphertext block
Step 6: Write IV + ciphertext to output file
Step 7: Decrypt: IV + ciphertext -> reverse AES rounds -> plaintext
```

### Pseudocode: AES Encryption (High Level)

```
FUNCTION encryptAES(plaintext, key):
    iv = randomBytes(16)
    ciphertext = []
    previous = iv
    
    FOR each 16-byte block IN pad(plaintext):
        xored = block XOR previous
        encrypted = aesRound(xored, key)
        ciphertext.append(encrypted)
        previous = encrypted
    
    RETURN iv + ciphertext

FUNCTION aesRound(block, key):
    state = block XOR key
    FOR round = 1 TO 10:
        state = subBytes(state)
        state = shiftRows(state)
        IF round < 10:
            state = mixColumns(state)
        state = state XOR roundKey[round]
    RETURN state
```

### Dry Run: AES Encryption (Simplified 1-Block)

| Step | Operation | Input | Output |
|------|-----------|-------|--------|
| 1 | Plaintext | "Hello World!!!" (16 bytes) | 0x48656C6C6F20576F726C64212121 |
| 2 | XOR with IV | IV = 0xA1B2C3D4E5F60718293A4B5C6D7E8F90 | 0xE9D7A9B88AD57A075B564F7D4C9B6EB1 |
| 3 | SubBytes (S-box) | 0xE9D7... | 0x1E9D... (non-linear byte substitution) |
| 4 | ShiftRows | 0x1E9D... | Row 0 unchanged, Row 1 &lt;< 1, Row 2 << 2, Row 3 << 3 |
| 5 | MixColumns | Shifted state | Column mixing via GF(2^8) multiplication |
| 6 | AddRoundKey | Mixed state XOR RoundKey 1 | First ciphertext block |
| 7 | Repeat 9 more rounds | ... | Final ciphertext |

### C++: AES Encryption (Using OpenSSL)

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <cstring>
#include <openssl/evp.h>
#include <openssl/rand.h>
using namespace std;

class AESCrypt {
private:
    const EVP_CIPHER* cipher = EVP_aes_256_cbc();
    const int KEY_LEN = 32;   // 256 bits
    const int IV_LEN = 16;    // 128 bits

public:
    vector<unsigned char> encrypt(const string& plaintext,
                                   const string& password) {
        vector<unsigned char> key(KEY_LEN), iv(IV_LEN);
        PKCS5_PBKDF2_HMAC_SHA1(password.c_str(), password.size(),
                               nullptr, 0, 100000, KEY_LEN, key.data());
        RAND_bytes(iv.data(), IV_LEN);
        EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
        EVP_EncryptInit_ex(ctx, cipher, nullptr, key.data(), iv.data());
        vector<unsigned char> ciphertext(plaintext.size() + 16);
        int outLen = 0, totalLen = 0;
        EVP_EncryptUpdate(ctx, ciphertext.data(), &outLen,
                          (const unsigned char*)plaintext.data(),
                          plaintext.size());
        totalLen += outLen;
        EVP_EncryptFinal_ex(ctx, ciphertext.data() + totalLen, &outLen);
        totalLen += outLen;
        EVP_CIPHER_CTX_free(ctx);
        ciphertext.resize(totalLen);
        vector<unsigned char> result(IV_LEN + totalLen);
        copy(iv.begin(), iv.end(), result.begin());
        copy(ciphertext.begin(), ciphertext.end(), result.begin() + IV_LEN);
        return result;
    }

    string decrypt(const vector<unsigned char>& data,
                   const string& password) {
        vector<unsigned char> key(KEY_LEN);
        PKCS5_PBKDF2_HMAC_SHA1(password.c_str(), password.size(),
                               nullptr, 0, 100000, KEY_LEN, key.data());
        vector<unsigned char> iv(data.begin(), data.begin() + IV_LEN);
        EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
        EVP_DecryptInit_ex(ctx, cipher, nullptr, key.data(), iv.data());
        vector<unsigned char> plaintext(data.size());
        int outLen = 0, totalLen = 0;
        EVP_DecryptUpdate(ctx, plaintext.data(), &outLen,
                          data.data() + IV_LEN, data.size() - IV_LEN);
        totalLen += outLen;
        EVP_DecryptFinal_ex(ctx, plaintext.data() + totalLen, &outLen);
        totalLen += outLen;
        EVP_CIPHER_CTX_free(ctx);
        return string((char*)plaintext.data(), totalLen);
    }
};

int main() {
    AESCrypt crypto;
    string msg = "Secret OS data: password=admin123";
    string pass = "masterKey123";
    auto encrypted = crypto.encrypt(msg, pass);
    cout << "Encrypted (" << encrypted.size() << " bytes): ";
    for (auto b : encrypted) printf("%02x", b);
    cout << endl;
    string decrypted = crypto.decrypt(encrypted, pass);
    cout << "Decrypted: " << decrypted << endl;
    return 0;
}
```

### Python: RSA Encryption (Asymmetric)

```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import serialization

def generate_rsa_keypair():
    private_key = rsa.generate_private_key(
        public_exponent=65537,
        key_size=2048,
    )
    public_key = private_key.public_key()
    return private_key, public_key

def encrypt_with_public_key(message: bytes, public_key) -> bytes:
    ciphertext = public_key.encrypt(
        message,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    return ciphertext

def decrypt_with_private_key(ciphertext: bytes, private_key) -> bytes:
    plaintext = private_key.decrypt(
        ciphertext,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    return plaintext

def sign_data(data: bytes, private_key) -> bytes:
    signature = private_key.sign(
        data,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    return signature

def verify_signature(data: bytes, signature: bytes, public_key) -> bool:
    try:
        public_key.verify(
            signature,
            data,
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return True
    except Exception:
        return False

if __name__ == "__main__":
    priv, pub = generate_rsa_keypair()
    print("[RSA] Key pair generated (2048-bit)")
    msg = b"OS Secure Boot Token: version=2.1"
    ct = encrypt_with_public_key(msg, pub)
    print(f"[RSA] Encrypted: {ct.hex()[:64]}...")
    pt = decrypt_with_private_key(ct, priv)
    print(f"[RSA] Decrypted: {pt.decode()}")
    sig = sign_data(msg, priv)
    print(f"[RSA] Signature: {sig.hex()[:64]}...")
    valid = verify_signature(msg, sig, pub)
    print(f"[RSA] Signature valid: {valid}")
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| AES encryption (N blocks) | O(N) | O(N) | Each 16-byte block: 10-14 rounds, fixed operations |
| RSA encryption (2048-bit) | O(log^3 N) | O(1) | Modular exponentiation: O(n^3) for n-bit key |
| RSA decryption | O(log^3 N) | O(1) | Same as encryption but with CRT optimization (4x faster) |
| SHA-256 hashing | O(N) | O(1) | Merkle-Damgard construction: process 64-byte chunks |
| Key generation (RSA) | probabilistic | O(1) | Prime finding with Miller-Rabin tests |

### Advantages & Disadvantages

| Aspect | Symmetric (AES) | Asymmetric (RSA) | Hashing (SHA-256) |
|--------|-----------------|-------------------|--------------------|
| **Advantage** | Fast, hardware-accelerated | No key sharing problem | One-way, collision-resistant |
| **Disadvantage** | Key distribution problem | Slow for bulk data | Not reversible |
| **Primary use** | Encrypting files/partitions | Key exchange, signatures | Password storage, integrity |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Weak key (AES)** | Certain key values weaken security | Use proper key derivation (PBKDF2), not raw keys |
| **IV reuse (AES-CTR/GCM)** | Same key + IV = catastrophic | Always use random IV; counter-based for nonces |
| **Small RSA key (< 2048)** | Factorable by modern algorithms | Minimum 2048-bit; 4096 recommended |
| **Collision (hashing)** | Two inputs produce same hash | Use SHA-256+; SHA-1 has proven collisions |
| **Side-channel (timing)** | Key material leaked via timing | Constant-time ops (AES-NI avoids this) |
| **Quantum threat** | Shor's algorithm breaks RSA | Post-quantum: CRYSTALS-Kyber, Dilithium |

---

## Buffer Overflow

A buffer overflow occurs when a program writes more data to a buffer than it can hold, overwriting adjacent memory.

### Real-World Analogy

> **Water Glass Overflow**: You have a glass that holds 250ml (buffer). You pour 500ml into it. The extra 250ml spills onto the table. In a buffer overflow, the extra data spills into adjacent memory → typically the return address → and the attacker redirects program execution to their malicious code.

### Stack Layout Diagram

```
High Address
+---------------------------+  <- 0xFFFF
|       Environment         |
+---------------------------+
|         Arguments         |
+---------------------------+
|     Return Address        |  <- overwritten by attacker to point to shellcode
+---------------------------+
|    Saved EBP (Frame ptr)  |  <- overwritten
+---------------------------+
|   Local Variables /       |
|   char buffer[64]         |  <- overflow starts here (writes beyond 64 bytes)
+---------------------------+
Low Address                 |  <- 0x0000
```

### Steps: Buffer Overflow Exploit (Classic)

```
Step 1: Identify a vulnerable program with no bounds checking (strcpy, gets, scanf)
Step 2: Determine buffer size (e.g., 64 bytes)
Step 3: Craft payload:
    +----------------+----------+----------------+
    | NOP sled (\x90) | Shellcode | Return Address |
    +----------------+----------+----------------+
    - NOP sled: sequence of NOP (0x90) instructions
    - Shellcode: machine code that spawns a shell (/bin/sh)
    - Return address: approximate address in the NOP sled
Step 4: Overflow the buffer:
    - Fill first 64 bytes: NOP sled padding
    - Overwrite saved EBP (next 4 bytes)
    - Overwrite return address with pointer to NOP sled
Step 5: When function returns, it jumps to the NOP sled
Step 6: NOP sled slides to shellcode, which executes /bin/sh
Step 7: Attacker now has a shell at the program's privilege level
```

### C++: Vulnerable Program + Exploit

```cpp
#include <iostream>
#include <cstring>
using namespace std;

// g++ -fno-stack-protector -z execstack -o vulnerable vulnerable.cpp
// WARNING: Educational only -- run in VM

void vulnerable(const char* input) {
    char buffer[64];  // Small buffer on stack
    strcpy(buffer, input);  // If input > 64 bytes, overflow!
    cout << "Buffer contents: " << buffer << endl;
}

int main(int argc, char* argv[]) {
    if (argc < 2) {
        cout << "Usage: " << argv[0] << " <input>" << endl;
        return 1;
    }
    cout << "Running as UID: " << getuid() << endl;
    vulnerable(argv[1]);
    cout << "Returned safely (only if no overflow)" << endl;
    return 0;
}
```

### Python: Simulated Buffer Overflow

```python
class StackFrame:
    def __init__(self, buffer_size: int):
        self.buffer = bytearray(buffer_size)
        self.saved_ebp = b"\xBB\xBB\xBB\xBB"
        self.return_addr = b"\xCC\xCC\xCC\xCC"
        self.size = buffer_size

    def write(self, data: bytes) -> str:
        if len(data) <= self.size:
            self.buffer[:len(data)] = data
            return "OK"
        self.buffer[:self.size] = data[:self.size]
        remaining = data[self.size:]
        if len(remaining) >= 4:
            self.saved_ebp = remaining[:4]
            remaining = remaining[4:]
        if len(remaining) >= 4:
            old_return = self.return_addr.hex()
            self.return_addr = remaining[:4]
            return (f"OVERFLOW! Return addr changed from "
                    f"{old_return} to {self.return_addr.hex()}")
        return "Partial overflow"

def exploit_demo():
    frame = StackFrame(64)
    nop_sled = b"\x90" * 60
    shellcode = b"\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80"
    fake_ebp = b"\x41\x41\x41\x41"
    ret_addr = (0xffffd500).to_bytes(4, 'little')
    payload = nop_sled + shellcode + fake_ebp + ret_addr
    result = frame.write(payload)
    print(f"Result: {result}")
    print(f"Return address now: 0x{frame.return_addr.hex()}")

exploit_demo()
```

### Defenses Against Buffer Overflows (Comparison)

| Defense | Mechanism | Bypass | Effectiveness |
|---------|-----------|--------|---------------|
| **Stack Canary** | Guard value before return address; checked on return | Information leak (read canary from stack) | High against naive overflow |
| **ASLR** | Randomizes base addresses of stack/heap/libraries | Brute force (32-bit: ~2^16 tries), info leak | Essential but not sufficient alone |
| **NX (No-Execute) Bit** | Marks stack/heap as non-executable | Return-to-libc (ret2libc), ROP | Critical -- blocks shellcode execution |
| **CFI (Control Flow Integrity)** | Validates indirect branch targets | Rare/advanced | Very high when implemented |

### Stack Canary Visual

```
Without Stack Canary:
[ buffer 64B ] [ saved EBP ] [ return address ]
    ^ 72 bytes of input overwrites saved EBP and return address
    Attacker controls return address -> arbitrary code execution

With Stack Canary:
[ buffer 64B ] [ CANARY (8B) ] [ saved EBP ] [ return address ]
    ^ Overflow must pass through canary first
    If canary value changed -> program aborts before return
    Compiler flag: -fstack-protector (gcc/clang)
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| Buffer overflow exploit | O(N) | O(N) | N = payload size; linear copy |
| Stack canary check | O(1) | O(1) | Single comparison at function epilogue |
| ASLR (mmap randomization) | O(1) | -- | Random base set at process creation |
| ROP chain execution | O(G) | O(G) | G = gadgets; chain length |

### Advantages & Disadvantages

| Aspect | Stack Canary | ASLR | NX Bit |
|--------|-------------|------|--------|
| **Advantage** | Low overhead (<3%) | Breaks most exploits | Hardware-enforced, zero overhead |
| **Disadvantage** | Can be leaked | 32-bit entropy too low | ret2libc bypasses it |
| **Runtime cost** | ~2-3% performance | 0% | 0% |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Canary leak** | Format string reads canary from stack | Use multiple protections; fix format string bugs |
| **ASLR brute force (32-bit)** | Only 2^16 possible positions | Use 64-bit systems (2^28+ entropy) |
| **ret2libc** | Calls system() in libc directly | ASLR + PIE + full RELRO |
| **Heap overflow** | Overflows in heap instead of stack | Heap hardening (glibc: tcache safety, size checks) |
| **JIT spraying** | Write JS shellcode to executable JIT pages | Disable JIT in sensitive contexts |

---

## Intrusion Detection

An Intrusion Detection System (IDS) monitors system or network activity for malicious behavior.

### Real-World Analogy

> **Bank Security Cameras + Guard**: Signature-based IDS is like a security guard who recognizes known criminals from wanted posters. Anomaly-based IDS is like a camera system that learns normal patterns (employees arrive 8-6, doors open with badges) and alerts when something deviates (someone enters at 3 AM through a window).

### IDS Types

| Type | Detection Method | Example | False Positives | False Negatives |
|------|-----------------|---------|-----------------|-----------------|
| **Signature-based (NIDS)** | Match traffic against known attack patterns | Snort, Suricata | Low | High (misses zero-day) |
| **Anomaly-based (NIDS)** | Detect deviation from baseline | Zeek, AI-based | High | Low |
| **Host-based (HIDS)** | Monitor system calls, files, logs | OSSEC, Wazuh, Tripwire | Medium | Medium |
| **Network-based (NIDS)** | Monitor network packets | Snort, Suricata | Medium | Medium |

### Steps: IDS Detection Flow

```
Step 1: Capture packet or system call event
Step 2: Normalize data (extract features: src IP, dest port, syscall number)
Step 3: Compare against signature database (signature-based)
    - Hash of payload matches known exploit signature?
Step 4: Compare against behavioral baseline (anomaly-based)
    - Is this connection rate > 3-sigma from mean?
Step 5: Calculate severity score
Step 6: If score > threshold -> generate alert
Step 7: Log alert to SIEM or local log
Step 8: Optionally trigger automated response (block IP, kill process)
```

### Pseudocode: Simple Signature-Based IDS

```
FUNCTION detectIntrusion(packet):
    signatures = [
        {pattern: "cat /etc/shadow", type: "CREDENTIAL_ACCESS"},
        {pattern: "/bin/sh -i", type: "REVERSE_SHELL"},
        {pattern: "SELECT * FROM users", type: "SQL_INJECTION"},
        {pattern: "cmd.exe /c", type: "COMMAND_EXECUTION"},
    ]

    FOR EACH sig IN signatures:
        IF contains(packet.payload, sig.pattern):
            alert("INTRUSION", sig.type, packet.srcIP, timestamp())
            blockIP(packet.srcIP)
            RETURN "BLOCKED: " + sig.type

    rate = getConnectionRate(packet.srcIP)
    baseline = getBaseline(packet.srcIP)
    IF rate > baseline * 3:
        alert("ANOMALY", "HIGH_CONNECTION_RATE", packet.srcIP)
        rateLimit(packet.srcIP, maxConns=100)

    RETURN "ALLOW"
```

### C++: Simple IDS Component

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <ctime>
using namespace std;

struct Signature {
    string pattern;
    string category;
    int severity;
};

struct Alert {
    time_t timestamp;
    string type;
    string source;
    string details;
};

class IntrusionDetector {
private:
    vector<Signature> signatures = {
        {"/etc/shadow", "CREDENTIAL_ACCESS", 5},
        {"exec(", "CODE_INJECTION", 4},
        {"SELECT.*FROM", "SQL_INJECTION", 4},
        {"<script>", "XSS", 3},
    };
    unordered_map<string, int> connectionCounts;
    vector<Alert> alerts;

public:
    bool analyzePacket(const string& srcIP, const string& payload) {
        for (auto& sig : signatures) {
            if (payload.find(sig.pattern) != string::npos) {
                Alert a{time(0), sig.category, srcIP, sig.pattern};
                alerts.push_back(a);
                cout << "[ALERT-" << sig.severity << "] "
                     << sig.category << " from " << srcIP << endl;
                return false;
            }
        }
        connectionCounts[srcIP]++;
        if (connectionCounts[srcIP] > 100) {
            Alert a{time(0), "RATE_ANOMALY", srcIP,
                    to_string(connectionCounts[srcIP]) + " connections"};
            alerts.push_back(a);
            cout << "[ALERT] Rate anomaly from " << srcIP << endl;
            return false;
        }
        return true;
    }

    void report() {
        cout << "\n--- IDS Report ---" << endl;
        cout << "Total alerts: " << alerts.size() << endl;
        for (auto& a : alerts)
            cout << ctime(&a.timestamp) << a.type
                 << " from " << a.source << " -- " << a.details << endl;
    }
};

int main() {
    IntrusionDetector ids;
    ids.analyzePacket("10.0.0.5", "GET /index.html");
    ids.analyzePacket("10.0.0.99", "cat /etc/shadow");
    ids.analyzePacket("10.0.0.5", "SELECT * FROM users");
    ids.report();
    return 0;
}
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| Signature match (naive) | O(S * P) | O(S) | S = signatures, P = payload length |
| Aho-Corasick (multi-pattern) | O(P + M) | O(S) | Build automaton once, scan once; M = matches |
| Rate tracking | O(1) avg | O(IPs) | Hash table per source IP |
| Log storage | O(log A) per write | O(A) | A = alerts; append to file |

### Advantages & Disadvantages

| Aspect | Signature-Based | Anomaly-Based | Hybrid |
|--------|-----------------|---------------|--------|
| **Advantage** | Low false positives, fast | Detects novel attacks | Best coverage |
| **Disadvantage** | Misses zero-day attacks | High false positives | Higher complexity |
| **Maintenance** | Must update signatures | Must retrain baseline | Both |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **Encrypted traffic** | IDS cannot inspect payload | TLS interception or endpoint agent |
| **High-speed network (>10Gbps)** | Packet drop | Hardware acceleration, flow-based sampling |
| **Evasion (fragmentation)** | Split attack across packets | Reassemble before inspection |
| **False positive flooding** | Legitimate traffic triggers alerts | Threshold tuning, whitelisting |

---

## Firewalls

A firewall enforces network access policies by filtering traffic based on rules.

### Real-World Analogy

> **Office Security Guard**: A guard at the building entrance checks everyone's ID. Only people on the approved list enter. Some people are allowed in specific areas. The guard also checks bags for prohibited items. This is exactly what a firewall does -- except for network packets instead of people.

### Firewall Types

| Type | Layer | Inspection | Speed | Example |
|------|-------|------------|-------|---------|
| **Packet Filter** | Network (L3/L4) | IP, port, protocol | Fast | iptables, nftables |
| **Stateful** | Transport (L4) | Connection state tracking | Medium | Windows Firewall, pfSense |
| **Application/Proxy** | Application (L7) | Deep packet inspection, protocol validation | Slow | Squid, NGFW (Palo Alto) |
| **Next-Gen (NGFW)** | L3-L7 | IDS/IPS, app identification, user identity | Variable | Palo Alto, Fortinet |

### Steps: Packet Filter Decision

```
Step 1: Packet arrives at firewall interface
Step 2: Extract 5-tuple: {srcIP, dstIP, srcPort, dstPort, protocol}
Step 3: Walk through rules in order (first match wins)
Step 4: For each rule:
    - Match source IP/dst IP against rule's address set
    - Match port against rule's port range
    - Match protocol against rule's protocol
    - Match connection state (NEW, ESTABLISHED, RELATED, INVALID)
Step 5: Apply action: ACCEPT, DROP, REJECT, LOG
Step 6: If stateful, update connection tracking table
Step 7: Log packet if LOG rule matched
```

### Pseudocode: Simple Firewall

```
FUNCTION packetFilter(packet):
    rules = [
        {src: "192.168.1.0/24", dst: "*", port: 80,  action: "ACCEPT"},
        {src: "192.168.1.0/24", dst: "*", port: 443, action: "ACCEPT"},
        {src: "10.0.0.0/8",    dst: "*", port: 22,  action: "DENY"},
        {src: "*",              dst: "*", port: "*", action: "DENY"},
    ]

    FOR EACH rule IN rules:
        IF match(packet, rule):
            IF rule.action == "ACCEPT":
                log("PASS", packet)
                FORWARD packet
            ELSE:
                log("DROP", packet)
                DROP packet
```

### C++: Simple Firewall Rule Engine

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

enum Action { ACCEPT, DROP, REJECT };

struct Rule {
    string srcNet;
    string dstNet;
    uint16_t port;
    uint8_t protocol;
    Action action;
};

class Firewall {
private:
    vector<Rule> rules;
    int accepted = 0, dropped = 0;

    bool ipInNetwork(uint32_t ip, const string& network) {
        if (network == "*") return true;
        uint32_t netIP, mask;
        sscanf(network.c_str(), "%u.%u.%u.%u/%u",
               &((unsigned char*)&netIP)[3],
               &((unsigned char*)&netIP)[2],
               &((unsigned char*)&netIP)[1],
               &((unsigned char*)&netIP)[0],
               &mask);
        uint32_t netmask = htonl(~((1 << (32 - mask)) - 1));
        return (ip & netmask) == (netIP & netmask);
    }

public:
    void addRule(const Rule& r) { rules.push_back(r); }

    Action decide(uint32_t srcIP, uint32_t dstIP,
                  uint16_t port, uint8_t proto) {
        for (auto& r : rules) {
            if (!ipInNetwork(srcIP, r.srcNet)) continue;
            if (!ipInNetwork(dstIP, r.dstNet)) continue;
            if (r.port != 0 && r.port != port) continue;
            if (r.protocol != 0 && r.protocol != proto) continue;
            if (r.action == ACCEPT) accepted++;
            else dropped++;
            return r.action;
        }
        dropped++;
        return DROP;
    }

    void stats() {
        cout << "Accepted: " << accepted << ", Dropped: " << dropped << endl;
    }
};

int main() {
    Firewall fw;
    fw.addRule({"192.168.1.0/24", "*", 80, 6, ACCEPT});
    fw.addRule({"192.168.1.0/24", "*", 443, 6, ACCEPT});
    fw.addRule({"*", "*", 0, 0, DROP});

    uint32_t internal = (192 << 24) | (168 << 16) | (1 << 8) | 10;
    uint32_t external = (8 << 24) | (8 << 16) | (8 << 8) | 8;

    cout << "Internal->HTTP: " << fw.decide(internal, external, 80, 6) << endl;
    cout << "Internal->SSH:  " << fw.decide(internal, external, 22, 6) << endl;
    cout << "External->HTTP: " << fw.decide(external, internal, 80, 6) << endl;
    fw.stats();
    return 0;
}
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why |
|-----------|----------------|-----------------|-----|
| Rule matching (linear) | O(R) | O(R) | R = number of rules; sequential scan |
| Rule matching (bitmap) | O(1) | O(R * N) | N = fields; precompute match vectors |
| Connection tracking | O(1) avg | O(C) | C = active connections; hash table |
| NAT translation | O(1) | O(C) | Port mapping lookup |

### Advantages & Disadvantages

| Aspect | Packet Filter | Stateful | Application Proxy |
|--------|--------------|----------|-------------------|
| **Advantage** | Very fast, simple | Connection-aware | Full protocol validation |
| **Disadvantage** | No context | Slightly slower | Slow, complex configuration |
| **Security** | Low (can be spoofed) | Medium | High |

### Edge Cases

| Edge Case | Issue | Mitigation |
|-----------|-------|------------|
| **IP fragmentation** | Rules bypassed via fragmented packets | Reassembly before filtering |
| **Source port 80** | Return traffic on port 80 | Stateful tracking checks connection state |
| **IPv6** | Rules defined for IPv4 only | Dual-stack rule sets |
| **VPN traffic** | Encrypted; cannot inspect | Decrypt at firewall endpoint or trust VPN |

---

## Secure OS Design

A secure operating system is built on fundamental security principles from the ground up.

### Core Principles

```
1. Least Privilege:     Every process runs with minimum necessary permissions
2. Defense in Depth:    Multiple layers of security (no single point of failure)
3. Fail-Safe Defaults:  Default-deny; access must be explicitly granted
4. Complete Mediation:  Every access attempt is checked (no TOCTOU gaps)
5. Economy of Mechanism: Keep the security mechanism simple and small (TCB)
6. Open Design:         Security should not depend on secrecy of implementation
7. Separation of Duty:  Require multiple parties for sensitive operations
8. Least Common Mechanism: Minimize shared state between processes
9. Psychological Acceptability: Security should not burden users unnecessarily
10. Trusted Computing Base (TCB): Minimize code that must be trusted
```

### Real-World Analogy

> **Bank Vault Design**: The vault has multiple layers: a guard at the door, a combination lock, a time lock, a dual-key system (separation of duty), an alarm, and cameras. The vault door mechanism is simple and well-tested. Even the bank manager cannot open the vault alone -- they need the head teller's key too.

### Secure OS Architecture: SELinux Integration

```
Userspace
+------------------------------------------------------+
|  Application (httpd)                                  |
|    [downarrow] system call (open "/var/www/index.html")         |
+------------------------------------------------------+
Kernel
+------------------------------------------------------+
|  VFS Layer                                            |
|    [downarrow]                                                  |
|  LSM Hook: security_file_open()                      |
|    [downarrow]                                                  |
|  SELinux:                                             |
|    - Get subject context: httpd_t                     |
|    - Get object context: httpd_sys_content_t          |
|    - Look up in AVC: allow httpd_t httpd_sys_content_t : file { read } |
|    [downarrow] allow or deny                                    |
|  Actual inode operation (if allowed)                  |
+------------------------------------------------------+
```

### C++: Simulating Secure OS Access

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct SecurityContext {
    string user;
    string role;
    string type;
    int level;
};

struct Object {
    string path;
    string type;
    int level;
};

class SecureOS {
private:
    struct PolicyRule {
        string subjType;
        string objType;
        string objClass;
        string ops;
    };
    vector<PolicyRule> policy;

public:
    SecureOS() {
        policy = {
            {"httpd_t", "httpd_sys_content_t", "file", "rx"},
            {"httpd_t", "shadow_t", "file", ""},
            {"user_t", "user_home_t", "file", "rwx"},
            {"admin_t", "*", "file", "rwx"},
        };
    }

    bool checkAccess(const SecurityContext& subj,
                     const Object& obj, char op) {
        for (auto& rule : policy) {
            if (rule.subjType == subj.type || rule.subjType == "*") {
                if (rule.objType == obj.type || rule.objType == "*") {
                    return rule.ops.find(op) != string::npos;
                }
            }
        }
        return false;
    }
};

int main() {
    SecureOS os;
    SecurityContext httpd{"root", "system_r", "httpd_t", 0};
    Object webFile{"/var/www/index.html", "httpd_sys_content_t", 0};
    Object shadow{"/etc/shadow", "shadow_t", 0};
    cout << "httpd read web: " << os.checkAccess(httpd, webFile, 'r') << endl;
    cout << "httpd read shadow: " << os.checkAccess(httpd, shadow, 'r') << endl;
    return 0;
}
```

### Complexity Analysis

| Component | Verification | Why |
|-----------|-------------|-----|
| TCB size | Minimize (<10K lines ideal) | Less code = fewer vulnerabilities |
| LSM hook overhead | <1% performance | Single indirect call per security-sensitive operation |
| AVC cache hit | ~99% for repeated accesses | Temporal locality in access patterns |
| Policy compilation | O(P log P) | P = number of policy rules; sorted for binary search |

### Advantages & Disadvantages

| Aspect | Monolithic Kernel + LSM | Microkernel | Hypervisor-based |
|--------|----------------------|-------------|------------------|
| **Advantage** | Good performance, rich policy | Smaller TCB | Strong isolation |
| **Disadvantage** | Large TCB, complex | IPC overhead | Hardware requirements |
| **Security isolation** | Module-level | Process-level | VM-level |

### Authentication (Password-Based)

```c
// Traditional password storage -- NEVER do this
struct password_entry {
    char username[32];
    char password[64];   // PLAINTEXT -- catastrophic!
};

// Modern approach: hashed passwords with salt
struct password_entry {
    char username[32];
    char salt[16];
    char hash[32];
};
```

**Salting**: A random salt is concatenated with the password before hashing. This prevents rainbow table attacks and ensures equal passwords hash differently.

```
Without salt:
  password "hello123" -> hash("hello123") = 2cf24dba...
  Two users with the same password have the same hash!

With salt:
  password "hello123" + salt "a4f8..." -> hash("a4f8...hello123") = 7b3d5c...
  password "hello123" + salt "b9c2..." -> hash("b9c2...hello123") = e1f8a9...
```

**Dictionary attack**: Attacker tries common passwords against stolen hashes. Mitigation: **slow hashing** (bcrypt, scrypt, PBKDF2, Argon2).

#### Two-Factor Authentication (2FA)

Requires two of:
- **Something you know**: Password, PIN
- **Something you have**: Smartphone (TOTP), hardware token (YubiKey)
- **Something you are**: Fingerprint, face, iris scan

### Access Control Models

#### Discretionary Access Control (DAC)

In DAC, the owner of an object determines who can access it. This is the standard Unix model.

```bash
# Unix file permissions: owner | group | others
# r = read (4), w = write (2), x = execute (1)

-rw-r--r--  1 alice dev    1024 Jun 9 10:00 file.txt
# Owner alice: rw- (6)
# Group dev:   r-- (4)
# Others:      r-- (4)

chmod 755 script.sh   # Owner: rwx, Group: r-x, Others: r-x
chmod u+x script.sh   # Add execute for owner only
```

**SetUID bit**: A program runs with the effective UID of the file owner, not the caller.

```bash
-rwsr-xr-x  1 root root  47040 May 1  2025 /usr/bin/passwd
                    ^
                    SetUID bit -- passwd runs as root when any user runs it
```

SetUID must be used sparingly -- it's a common privilege escalation vector.

#### Mandatory Access Control (MAC)

In MAC, system-wide policy (not the owner) controls access. Users cannot override these rules.

**SELinux labels every object** (processes, files, sockets) with a security context:

```
user:role:type:level

Example:
system_u:object_r:httpd_sys_content_t:s0
```

A policy defines allowed operations between labeled subjects and objects.

#### Role-Based Access Control (RBAC)

RBAC assigns permissions to roles, and users are assigned to roles.

```
User Alice -> Role "admin" -> {read_all, write_all, create_user}
User Bob   -> Role "user"  -> {read_own, write_own}
User Carol -> Role "auditor" -> {read_logs}
Management: assign/unassign users to/from roles
No need to manage individual user permissions!
```

#### Access Control Lists (ACLs)

Unix ACLs extend the basic 3-group model to arbitrary users and groups.

```bash
setfacl -m u:bob:rwx file.txt   # Give bob rwx
setfacl -m g:dev:rx file.txt     # Give group dev rx
getfacl file.txt                  # View ACLs
```

### Privilege Escalation

#### Vertical Escalation

Gaining higher privileges than authorized (e.g., user -> root):

```c
// Classic exploit: buffer overflow in SetUID program
void vulnerable(char *input) {
    char buffer[64];
    strcpy(buffer, input);   // No bounds check!
    // If input > 64 bytes, it overwrites the return address
    // Attacker can redirect execution to shellcode
}
```

#### Horizontal Escalation

Accessing another user's resources with the same privilege level:

```bash
# World-readable file = horizontal escalation vector
chmod o-r private_file   # Remove others' read permission
```

#### Defenses Against Buffer Overflows

1. **Stack canaries**: A guard value is placed on the stack before the return address.

```
Without canary:
  [ buffer ] [ saved ebp ] [ return address ]
   [uparrow] write overflow here -> overwrites return address

With canary:
  [ buffer ] [ CANARY ] [ saved ebp ] [ return address ]
   [uparrow] overflow trashes canary -> kernel detects mismatch -> abort
```

2. **ASLR** (Address Space Layout Randomization): Randomizes the base addresses of stack, heap, and libraries.

3. **NX bit** (No-Execute): Marks data pages (stack, heap) as non-executable.

4. **Control-flow integrity**: Ensures indirect calls and jumps follow valid paths.

### Linux Security Modules (LSM)

LSM is a framework that allows security modules to hook into kernel operations.

```
System call (e.g., open())
  -> VFS layer
  -> LSM hook: security_file_open()
    -> SELinux/AppArmor/Smack policy check
    -> Allow or Deny
  -> Actual file operation
```

```c
int security_file_open(struct file *file) {
    if (policy_denies_access(current, file->f_inode))
        return -EACCES;
    return 0;
}
```

#### SELinux

| Mode | Behavior |
|------|----------|
| **Enforcing** | Policy is enforced; violations are denied and logged |
| **Permissive** | Violations are logged but not denied (for debugging) |
| **Disabled** | SELinux is turned off |

```bash
getenforce                    # Check current mode
setenforce 1                  # Switch to enforcing
setenforce 0                  # Switch to permissive
ls -Z /etc/shadow
ps -Z $(pgrep httpd)
sesearch --allow --source httpd_t --target shadow_t
```

#### AppArmor

AppArmor uses path-based (not label-based) MAC. Profiles constrain programs.

```
Profile for /usr/bin/firefox:
  /usr/bin/firefox {
    /etc/firefox/** r,
    /home/**/.mozilla/** rw,
    /tmp/** rw,
    /usr/lib/firefox/** mr,
    network tcp,
  }
```

### Cryptography in the OS

#### Encryption at Rest

```bash
# Linux: LUKS (Linux Unified Key Setup)
cryptsetup luksFormat /dev/sda1     # Encrypt partition
cryptsetup open /dev/sda1 secret    # Unlock (prompts for passphrase)
mkfs.ext4 /dev/mapper/secret        # Create filesystem on unlocked device
mount /dev/mapper/secret /mnt/secret

# File-level encryption
gpg -c secret.txt                    # Encrypt file (prompts for passphrase)
gpg -d secret.txt.gpg                # Decrypt to stdout
```

#### Trusted Platform Module (TPM)

A hardware chip that provides:
- **Secure key generation and storage**
- **Platform integrity measurement** (measured boot - TPM records boot process hashes)
- **Remote attestation**: Prove to a remote party that the system is in a known good state

### Principle of Least Privilege

Every process should run with only the privileges necessary to complete its task.

```c
// Example: drop root privileges after binding a privileged port
int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    bind(server_fd, ...);
    listen(server_fd, 10);
    if (fork() == 0) {
        struct passwd *pw = getpwnam("www-data");
        setuid(pw->pw_uid);
        setgid(pw->pw_gid);
        handle_requests(server_fd);
    }
    return 0;
}
```

### Common Vulnerabilities

#### Race Conditions (TOCTOU)

**Time of Check, Time of Use** - the state changes between the check and the use:

```c
// Vulnerable code:
if (access("/tmp/log", W_OK) != 0) {
    // ATTACKER: replaces /tmp/log with a symlink to /etc/passwd
}
FILE *fp = fopen("/tmp/log", "a");
if (!fp) error();
```

**Fix**: Use `open()` with flags, not a separate check:

```c
int fd = open("/secure/log", O_WRONLY | O_APPEND | O_NOFOLLOW);
if (fd < 0) error();
```

#### Format String Vulnerabilities

```c
// Vulnerable:
printf(user_input);   // Attacker can read/write stack via %x, %n

// Safe:
printf("%s", user_input);
```

---

## Interview Corner

Common OS security interview questions with in-depth answers.

### Q1: What is ASLR and how does it work?

**Answer**: Address Space Layout Randomization randomizes the base addresses of memory regions (stack, heap, libraries, executable) at process creation. On Linux, the kernel randomizes:
- Stack base (random gap at process creation)
- mmap base (libraries, anonymous mappings)
- Heap base (randomized brk)
- Executable base (PIE - Position Independent Executable)

```
Without ASLR:
  Stack:   0xBFFFF000  (fixed)
  libc:    0xB7E00000  (fixed)
  Heap:    0x08048000  (fixed)

With ASLR (Linux x86_64):
  Stack:   0x7FFD12345000  (randomized ~2^28 entropy)
  libc:    0x7F1A2B3C0000  (randomized ~2^28 entropy)
  Heap:    0x5566AABB0000  (randomized ~2^28 entropy)
```

Entropy levels: `cat /proc/sys/kernel/randomize_va_space`
- 0 = disabled
- 1 = randomize stack, mmap
- 2 = full randomization (adds heap; default on modern systems)

### Q2: What is DEP / NX and why is it important?

**Answer**: DEP (Data Execution Prevention) / NX (No-Execute) marks memory pages as non-executable. The NX bit in the page table entry tells the CPU: "this page contains data, not code." Stack, heap, and data segments are marked NX. If the instruction pointer tries to execute code on an NX page, the CPU raises a page fault. This prevents shellcode execution on the stack. Bypassed by Return-Oriented Programming (ROP) which chains existing code gadgets in executable pages.

### Q3: What is Ring -1 (negative one) in OS security?

**Answer**: Ring -1 refers to the **hypervisor** privilege level, below Ring 0 (kernel). x86 protection rings:

```
Ring 3   -- User applications (least privileged)
Ring 2   -- Device drivers (rarely used)
Ring 1   -- Device drivers (rarely used)
Ring 0   -- Kernel, device drivers (most privileged)
Ring -1  -- Hypervisor/VMM (below kernel - Intel VMX root mode)
Ring -2  -- System Management Mode (SMM)
Ring -3  -- Management Engine (ME, PSP - firmware)
```

The hypervisor runs at a more privileged level than the kernel, which is why rootkits like Blue Pill can install a hypervisor beneath a running OS - the OS cannot detect the hypervisor because the hypervisor controls the OS's memory and execution.

### Q4: Capabilities vs ACLs - compare and contrast.

| Aspect | Capabilities | ACLs |
|--------|-------------|------|
| **Access decision** | "Do you possess the token?" | "Who are you?" |
| **Granularity** | Per-operation | Per-user/group |
| **Delegation** | Easy (pass token) | Hard (requires admin) |
| **Revocation** | Hard (find all copies) | Easy (modify ACL) |
| **Confused deputy** | Immune | Vulnerable |
| **Examples** | Linux capabilities, Kerberos tickets | Unix perms, NTFS ACLs, S3 policies |

### Q5: SELinux vs AppArmor - which is better?

| Aspect | SELinux | AppArmor |
|--------|---------|----------|
| **Label type** | Type/label-based (extended attributes) | Path-based (file paths) |
| **Policy scope** | Everything (mandatory) | Per-program profiles |
| **Complexity** | High (steep learning curve) | Moderate (simpler syntax) |
| **Granularity** | Very fine (network, IPC, etc.) | Medium (files, network, capabilities) |
| **Default policy** | Targeted (confine specific daemons) | Complain (learning mode) |
| **Maintainer** | NSA, Red Hat | SUSE, Canonical (Ubuntu) |
| **Use case** | High-security: RHEL/CentOS, Android | Desktop simplicity: Ubuntu, SUSE |

---

## Applications in Real Systems

### Windows UAC (User Account Control)

UAC is Windows' least-privilege mechanism introduced in Vista. Users run with standard user tokens by default; administrative privileges require explicit consent.

```
Standard User Token (filtered):
  - No write access to %SystemRoot%
  - No write access to HKLM (registry)
  - Cannot install system-wide software
  - Cannot modify system settings

Elevated Token: Full administrator access (granted after UAC prompt)

UAC Prompt triggers when:
  - Installing software
  - Changing system-wide settings
  - Modifying firewall rules
  - Accessing other user's directories
```

### Linux Capabilities

Linux breaks the monolithic root privilege into ~40 independent capabilities:

| Capability | Description | Without Capability |
|------------|-------------|-------------------|
| CAP_CHOWN | Change file owner | Cannot chown files |
| CAP_NET_BIND_SERVICE | Bind to ports &lt; 1024 | Must use port &gt;= 1024 |
| CAP_DAC_OVERRIDE | Bypass file permission checks | Must have correct perms |
| CAP_SYS_ADMIN | Mount, swapon, etc. | Cannot mount filesystems |
| CAP_NET_RAW | Use raw sockets | Cannot craft raw packets |
| CAP_KILL | Send signals to any process | Can only kill own processes |
| CAP_SYS_PTRACE | Trace any process | Can only ptrace children |

```bash
# Grant only NET_BIND_SERVICE to a binary
setcap 'cap_net_bind_service=+ep' /usr/bin/my_webserver

# Remove all capabilities from a process
capsh --drop=all -- -c "my_program"

# Check capabilities of a running process
cat /proc/PID/status | grep Cap
```

### SELinux: Android Sandbox

Android uses SELinux (since Android 4.3, enforcing since 5.0) to sandbox applications. Each app runs with a unique SELinux domain:

```
untrusted_app -> app domain (isolated from other apps)
Each app has its own UID + SELinux type
Types: untrusted_app_25, untrusted_app_26, etc.

blocked: app tries to read another app's data directory
allow:   app reads its own /data/data/com.example.app/
```

### macOS System Integrity Protection (SIP)

SIP (introduced in OS X El Capitan) protects system files even from root:

```
Protected paths (cannot be modified even by root without SIP disabled):
  /System/
  /usr/ (except /usr/local/)
  /bin/
  /sbin/
  /Applications/ (pre-installed apps)

SIP uses:
  - Filesystem protection (immutable flags on system files)
  - Kernel extension blocking (kexts must be signed)
  - Debugging restrictions (cannot attach to Apple processes)
```

### TPM (Trusted Platform Module)

TPM is a hardware security chip (firmware TPM 2.0 in modern CPUs). Uses:

| Feature | Description | OS Usage |
|---------|-------------|----------|
| **Measured Boot** | Records hash of each boot component | BitLocker, TPM-based PCR policy |
| **Sealed Storage** | Decrypts key only if system state matches measurements | LUKS with TPM, BitLocker |
| **Attestation** | Proves system integrity to remote parties | VPN certificate enrollment |
| **Secure Key Generation** | Hardware RNG + key storage (key never leaves TPM) | Windows Hello, PGP key storage |

```bash
# Check TPM presence (Linux)
ls /sys/class/tpm/tpm0/
cat /sys/class/tpm/tpm0/device/description

# Using TPM for LUKS decryption
systemd-cryptenroll --tpm2-device=auto /dev/sda1
```

---

## Examples

### Example 1: Linux Capabilities

Modern Linux breaks root privileges into independent capabilities:

```bash
$ cat /proc/self/status | grep Cap
CapInh: 0000000000000000
CapPrm: 0000000000000000
CapEff: 000001ffffffffff
CapBnd: 000001ffffffffff

# Decode capabilities for a process
$ capsh --print
Current: = cap_chown,cap_dac_override,...+ep
Bounding set = cap_chown,cap_dac_override,...+eip

# Grant only NET_BIND_SERVICE to an executable
$ setcap 'cap_net_bind_service=+ep' /usr/bin/my_program

# Run a program with no capabilities
$ capsh --drop=all -- --print
```

### Example 2: chroot and Containers

```bash
# chroot -- change root directory
mkdir /jail
chroot /jail /bin/bash
# Process now sees /jail as /, cannot access files outside

# namespaces (Linux container primitive)
#   PID namespace:     isolated process tree
#   Mount namespace:   isolated filesystem mounts
#   Network namespace: isolated network stack
#   User namespace:    isolated UID/GID mapping
#   UTS namespace:     isolated hostname

unshare --pid --mount --net --fork /bin/bash
```


> [TIP]
> **Defense in depth** is key: no single mechanism is sufficient. Layer multiple controls -- firewall + authentication + encryption + monitoring + least privilege.

> [WARNING]
> **Buffer overflow** attacks exploit programs with missing input length checks. Modern mitigations: ASLR, NX stack, stack canaries -- but careful coding is still essential.

> [NOTE]
> **Kerberos** is a network authentication protocol using tickets and a Key Distribution Center (KDC). It is the foundation of Windows Active Directory authentication.

## Concept Comparison

| Feature | DAC | MAC | RBAC |
|-------|---|---|----|
| Control by | File owner | System policy | Role assignment |
| Flexibility | High | Low | Moderate |
| Security Level | Low (user-granted) | High (enforced) | Moderate-High |
| Examples | Unix permissions | SELinux, AppArmor | Windows AD groups |
| Use Case | Desktops/servers | Military/classified | Enterprise orgs |

## Quick Reference

| Term | Definition |
|------|------------|
| **CIA** | Confidentiality, Integrity, Availability |
| **ASLR** | Address Space Layout Randomization |
| **Stack Canary** | Value before return address to detect overflow |
| **Kerberos** | Network authentication using tickets + KDC |
| **SELinux** | Linux Security Module implementing MAC |
| **TLS** | Transport Layer Security for encrypted communication |
| **TCB** | Trusted Computing Base - all trusted code in a system |
| **TPM** | Trusted Platform Module - hardware security chip |
| **UAC** | User Account Control - Windows privilege separation |
| **SIP** | System Integrity Protection - macOS file protection |
| **LSM** | Linux Security Module - kernel hook framework |
| **NX** | No-Execute bit - marks pages as non-executable |
| **CFI** | Control-Flow Integrity - validates indirect branches |
| **DEP** | Data Execution Prevention - Windows name for NX |
| **MAC** | Mandatory Access Control - system-enforced access |
| **DAC** | Discretionary Access Control - owner-enforced access |
| **RBAC** | Role-Based Access Control - role-enforced access |
| **ACL** | Access Control List - per-user/group permission list |
| **TOCTOU** | Time Of Check, Time Of Use - race condition class |
| **KDC** | Key Distribution Center - Kerberos ticket server |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| Authentication | HTTP basic/OAuth | User/password, cert | Login/PAM | 802.1X, VPN certs |
| Access Control | File perms, .htaccess | GRANT/REVOKE | Unix perms, ACLs | Firewall rules |
| Encryption | HTTPS (TLS) | Transparent encryption | dm-crypt | IPsec, TLS |
| Auditing | Access logs | Query logs | Auditd, syslog | NetFlow, IDS |

## Chapter Quiz

1. What does I in CIA stand for?
   - a) Integrity
   - b) Identity
   - c) Implementation
   - d) Isolation

2. Which technique randomizes addresses against overflow?
   - a) Stack canary
   - b) NX bit
   - c) ASLR
   - d) KASLR

3. Which access control uses resource owner identity?
   - a) DAC
   - b) MAC
   - c) RBAC
   - d) ABAC

4. Which is NOT a valid authentication factor type?
   - a) Something you know
   - b) Something you have
   - c) Something you want
   - d) Something you are

5. What privilege level is Ring -1?
   - a) User mode
   - b) Kernel mode
   - c) Hypervisor
   - d) System Management Mode

6. Which Linux capability allows binding to ports below 1024?
   - a) CAP_NET_RAW
   - b) CAP_NET_BIND_SERVICE
   - c) CAP_SYS_ADMIN
   - d) CAP_DAC_OVERRIDE

7. What is the primary weakness of signature-based IDS?
   - a) High false positive rate
   - b) Cannot detect zero-day attacks
   - c) Requires too much memory
   - d) Corrupts system logs

8. What is a buffer overflow?
   - a) Writing more data to a buffer than it can hold
   - b) Reading data from an empty buffer
   - c) Allocating too much memory
   - d) Freeing memory twice

9. Which model assigns permissions based on user roles?
   - a) DAC
   - b) MAC
   - c) RBAC
   - d) ABAC

10. What command sets a Linux security context on a file?
    - a) chmod
    - b) chown
    - c) chcon (or restorecon)
    - d) ls -Z

11. In the Bell-LaPadula MAC model, what does "no read-up" mean?
    - a) A subject cannot read objects at a higher classification
    - b) A subject cannot read objects at a lower classification
    - c) A process cannot read files outside its current directory
    - d) A user cannot read system files

12. What is the primary purpose of a stack canary in buffer overflow protection?
    - a) Encrypt the return address
    - b) Detect stack buffer overflows before the function returns
    - c) Prevent execution of shellcode on the stack
    - d) Randomize the stack base address

13. Which of the following is an example of a TOCTOU (Time Of Check, Time Of Use) vulnerability?
    - a) Checking file permissions then opening the file, with a symlink swap in between
    - b) Using a buffer without checking its length
    - c) Sending unencrypted passwords over the network
    - d) Allowing users to set their own permissions

14. What is the key difference between a virus and a worm?
    - a) A virus self-replicates; a worm requires a host file
    - b) A worm self-replicates without host file; a virus requires a host
    - c) A virus spreads via networks; a worm spreads via email
    - d) No difference — they are the same

15. What does the `CAP_DAC_OVERRIDE` Linux capability allow?
    - a) Override disk quotas
    - b) Bypass file permission checks (DAC)
    - c) Override network bandwidth limits
    - d) Override CPU scheduling policy

**Answers:** 1-a, 2-c, 3-a, 4-c, 5-c, 6-b, 7-b, 8-a, 9-c, 10-c, 11-a, 12-b, 13-a, 14-b, 15-b

## TypeScript Implementation — Access Control & Buffer Overflow Simulator

```typescript
/**
 * SecuritySimulator: Demonstrates OS security concepts including
 * buffer overflow, ASLR, access control models (DAC/MAC/RBAC),
 * and password hashing in TypeScript.
 */

// ===== SECTION 1: Access Control Models =====
type Permission = 'read' | 'write' | 'execute';

interface Subject {
  uid: number;
  name: string;
  roles: string[];
  clearance: number;  // MAC clearance level
}

interface Object {
  oid: number;
  ownerUid: number;
  dacPerms: Record<string, Permission[]>;  // "owner" | "group" | "other"
  macClassification: number;  // MAC classification level
  acl: Map<number, Permission[]>;  // user-specific ACL
}

class AccessControlSimulator {
  // DAC: Discretionary Access Control (Unix-style)
  checkDAC(subj: Subject, obj: Object, perm: Permission): boolean {
    if (subj.uid === obj.ownerUid) return obj.dacPerms['owner']?.includes(perm) ?? false;
    return obj.dacPerms['other']?.includes(perm) ?? false;
  }

  // MAC: Mandatory Access Control (Bell-LaPadula)
  checkMAC(subj: Subject, obj: Object, perm: Permission): boolean {
    if (perm === 'read') {
      // No read-up: subject clearance must be >= object classification
      if (subj.clearance < obj.macClassification) {
        console.log(`  [MAC] DENY: ${subj.name}(L${subj.clearance}) reading OID ${obj.oid}(L${obj.macClassification}) — no read-up`);
        return false;
      }
    }
    if (perm === 'write') {
      // No write-down: subject clearance must be <= object classification
      if (subj.clearance > obj.macClassification) {
        console.log(`  [MAC] DENY: ${subj.name}(L${subj.clearance}) writing OID ${obj.oid}(L${obj.macClassification}) — no write-down`);
        return false;
      }
    }
    return true;
  }

  // RBAC: Role-Based Access Control
  private rolePerms: Map<string, Permission[]> = new Map([
    ['admin', ['read', 'write', 'execute']],
    ['developer', ['read', 'write']],
    ['viewer', ['read']],
  ]);

  checkRBAC(subj: Subject, perm: Permission): boolean {
    for (const role of subj.roles) {
      if (this.rolePerms.get(role)?.includes(perm)) return true;
    }
    return false;
  }

  simulate(): void {
    console.log('=== Access Control Models ===');
    const alice: Subject = { uid: 1000, name: 'alice', roles: ['admin'], clearance: 5 };
    const bob: Subject = { uid: 1001, name: 'bob', roles: ['viewer'], clearance: 2 };
    const secret: Object = {
      oid: 1, ownerUid: 1000, dacPerms: { owner: ['read', 'write'], other: [] },
      macClassification: 4, acl: new Map()
    };

    console.log(`Alice (clearance=${alice.clearance}) reading secret (classification=${secret.macClassification})`);
    console.log(`  DAC: ${this.checkDAC(alice, secret, 'read') ? 'GRANT' : 'DENY'}`);
    console.log(`  MAC: ${this.checkMAC(alice, secret, 'read') ? 'GRANT' : 'DENY'}`);

    console.log(`\nBob (clearance=${bob.clearance}) reading secret (classification=${secret.macClassification})`);
    console.log(`  DAC: ${this.checkDAC(bob, secret, 'read') ? 'GRANT' : 'DENY'}`);
    console.log(`  MAC: ${this.checkMAC(bob, secret, 'read') ? 'GRANT' : 'DENY'}`);

    console.log(`\nBob RBAC check (viewer role): read=${this.checkRBAC(bob, 'read')}, write=${this.checkRBAC(bob, 'write')}`);
  }
}

// ===== SECTION 2: Password Hashing & Cracking Simulator =====
class PasswordSecuritySimulator {
  /** Simulate slow hashing: bcrypt work factor */
  hashPassword(password: string, costFactor: number): string {
    const salt = Math.random().toString(36).substring(2, 10);
    // Simulate bcrypt-like cost: 2^costFactor iterations
    let hash = salt + password;
    for (let i = 0; i < Math.pow(2, costFactor); i++) {
      hash = Array.from(hash).map(c => String.fromCharCode(c.charCodeAt(0) ^ (i % 256))).join('');
    }
    return `$2b$${costFactor}$${salt}$${btoa(hash).substring(0, 22)}`;
  }

  estimateCrackTime(passwordLength: number, hashesPerSec: number): { seconds: number; readable: string } {
    // Assume 96 possible characters
    const combinations = Math.pow(96, passwordLength);
    const seconds = combinations / hashesPerSec;
    const readable = seconds < 60 ? `${seconds.toFixed(1)}s` :
      seconds < 3600 ? `${(seconds / 60).toFixed(1)}min` :
      seconds < 86400 ? `${(seconds / 3600).toFixed(1)}h` :
      seconds < 31536000 ? `${(seconds / 86400).toFixed(1)} days` :
      `${(seconds / 31536000).toFixed(1)} years`;
    return { seconds, readable };
  }

  simulate(): void {
    console.log('\n=== Password Security ===');
    // bcrypt (slow): ~1000 hashes/sec on CPU
    // MD5 (fast): ~10 billion hashes/sec on GPU
    const lengths = [4, 6, 8, 10, 12, 16];

    console.log('Length | bcrypt (1K/s) | MD5 (10B/s)');
    console.log('-'.repeat(45));
    for (const len of lengths) {
      const bcrypt = this.estimateCrackTime(len, 1000);
      const md5 = this.estimateCrackTime(len, 10_000_000_000);
      console.log(` ${String(len).padStart(5)}  | ${bcrypt.readable.padStart(14)} | ${md5.readable.padStart(14)}`);
    }
    console.log('\nConclusion: 12+ char passwords with slow hashing are infeasible to crack.');
  }
}

// ===== SECTION 3: Buffer Overflow Simulation =====
class BufferOverflowSimulator {
  /** Simulate a vulnerable function with a small buffer */
  vulnerableFunction(input: string): string {
    const bufferSize = 8;
    const buffer = new Array(bufferSize).fill('.').join('');

    console.log(`  Buffer size: ${bufferSize}, Input length: ${input.length}`);

    if (input.length > bufferSize) {
      console.log(`  ⚠ OVERFLOW! Writing ${input.length} bytes into ${bufferSize}-byte buffer`);
      console.log(`  Corrupted adjacent memory: return address overwritten with "${input.substring(bufferSize)}"`);
      return 'EXPLOITED: Arbitrary code execution at 0xBADADD55';
    } else {
      // Safe copy
      const safeCopy = input.substring(0, bufferSize).padEnd(bufferSize, '.');
      return `OK: buffer contains "${safeCopy}"`;
    }
  }

  simulate(): void {
    console.log('\n=== Buffer Overflow ===');

    // Normal input
    console.log('1. Normal input ("hello"):');
    console.log(`   ${this.vulnerableFunction('hello')}`);

    // Overflow input
    console.log('\n2. Overflow input ("AAAAAAAAAAAABBBBCCCC"):');
    console.log(`   ${this.vulnerableFunction('AAAAAAAAAAAABBBBCCCC')}`);

    console.log('\n3. Mitigation: Stack canary');
    console.log('   Stack layout: [buffer][canary][saved_fp][return_addr]');
    console.log('   Before return: canary value checked — if changed, abort.');
    console.log('   Attacker must also overwrite canary with correct value.');
  }
}

// Run all simulations
console.log('='.repeat(60));
console.log('OS Security Simulator');
console.log('='.repeat(60));

const ac = new AccessControlSimulator();
ac.simulate();

const ps = new PasswordSecuritySimulator();
ps.simulate();

const bo = new BufferOverflowSimulator();
bo.simulate();
```

## Summary

- OS security goals: confidentiality, integrity, availability, authentication
- Passwords should be hashed with salt; 2FA provides layered authentication
- DAC (Unix permissions), MAC (SELinux), and RBAC provide different access control models
- Buffer overflow defenses: stack canaries, ASLR, NX bit, CFI
- LSMs (SELinux, AppArmor) enforce mandatory access control via kernel hooks
- SetUID programs must be carefully audited for privilege escalation risks
- TPM provides hardware-rooted security for key storage and measured boot
- Principle of least privilege: grant only necessary permissions
- Capabilities decompose root into fine-grained privileges
- Namespaces and cgroups form the foundation of Linux container security
- Symmetric encryption (AES) is fast for bulk data; asymmetric (RSA) solves key distribution
- Firewalls filter traffic at multiple OSI layers (packet filter, stateful, application proxy)
- IDS/IPS systems detect and block attacks via signature and anomaly detection
- Secure OS design follows Saltzer & Schroeder principles
- Windows UAC, Linux capabilities, SELinux, macOS SIP, and TPM are real-world implementations
- Authentication factors: knowledge (password), possession (token), inherence (biometrics)
- MAC enforces system-wide policy that users cannot override (tamper-proof)

## Exercises

### Basic

1. What is the difference between DAC and MAC? Give an example of a system using each.
2. Explain the purpose of a salt in password hashing. Why is a slow hash function (bcrypt, scrypt) better than a fast one (SHA-256) for password storage?
3. What is a SetUID bit? Why is it dangerous? Find all SetUID binaries on your system with `find / -perm -4000 2>/dev/null`.
4. List the three authentication factors and give an example of each.
5. What is the difference between symmetric and asymmetric encryption? When would you use each?

### Intermediate

6. Write a program that demonstrates a buffer overflow safely (use it on your own machine only). Explain how a stack canary prevents the overflow from being exploitable.
7. Write a Python script that brute-force checks the strength of Unix passwords against a dictionary. Read `/etc/shadow` (you'll need root), extract the salt+hash for each user, and test the top 10,000 common passwords against them.
8. Research your system's ASLR implementation. Check the entropy level with `cat /proc/sys/kernel/randomize_va_space`. Write a program that prints the address of a stack variable, a heap allocation, and a function. Run it multiple times - do the addresses change?
9. Implement a simple firewall rule parser. Read rules from a file in format: `srcIP dstIP port proto action`. Test against sample packets.
10. Write an RBAC authorization system in Python with 3 roles and demonstrate permission checking.

### Advanced

11. Implement a **capability-based security framework** as a user-space library. Create a capability token structure (a random 64-bit integer). Define a server that requires a capability to perform operations. Design at least 3 capability types (read, write, delete). Demonstrate that possession of the token (not user identity) governs access.
12. Write a minimal **namespace-based sandbox** using `clone()` with `CLONE_NEWNS | CLONE_NEWPID | CLONE_NEWNET`. The child process should have its own root filesystem (use pivot_root or chroot), its own process tree (PID 1), and a virtual network interface. The child should be unable to see or affect host processes.
13. Analyze a real-world Linux privilege escalation exploit (e.g., Dirty Pipe CVE-2022-0847 or a similar vulnerability). Explain the root cause, the exploitation mechanism (the exact kernel bug), and the fix. Write a proof-of-concept that demonstrates the vulnerability in a controlled VM environment.
14. Design and implement a simple SELinux-like type enforcement system. Define types for subjects and objects, write policy rules (allow rules), and implement an access check function. Test with at least 3 types and 2 operations.
15. Implement password hashing with PBKDF2 in Python. Compare the time taken for 1000, 100000, and 1000000 iterations. Explain why iteration count matters for security.

### Additional Exercises

16. **ASLR entropy analyzer**: Write a program that measures the ASLR entropy on your system. Run 1000 times, allocating a stack variable, a heap variable, and recording the address of a function. Compute the number of random bits in each address space region. Compare results across reboots.

17. **SELinux policy analyzer**: Write a Python script that parses an SELinux policy file (or uses `sesearch`) to find all rules involving a specific type (e.g., `httpd_t`). Categorize the rules by permission class (file, socket, process, etc.) and count the total number of allow rules for that domain.

18. **Capability dropper**: Write a C program that starts with full root capabilities, drops all capabilities except `CAP_NET_BIND_SERVICE`, then attempts to: (a) bind to port 80 (should succeed), (b) open `/etc/shadow` (should fail), (c) kill a process not owned by the user (should fail). Use `cap_get_proc()` and `cap_set_proc()`.

19. **Rootkit detection scanner**: Write a Bash/Python script that detects common rootkit indicators: hidden processes (compare `/proc` vs `ps`), hidden files (compare `ls` vs `find`), kernel module list anomalies, unusual cron jobs, unexpected open ports, and files modified in `/bin` in the last 24 hours. Generate a security report.

20. **Side-channel timing attack simulator**: Write a program that demonstrates a timing side-channel on password verification. Implement both a vulnerable version (returns early on first mismatched character) and a constant-time version. Measure the time difference for matching the first character vs matching the seventh character. Show how an attacker can extract the password one character at a time.

21. **Firewall rule conflict detector**: Write a program that parses iptables rules and detects conflicts: shadowed rules (a later rule matches packets that an earlier rule already handles), redundant rules, and contradictory rules. For each conflict, explain the impact and suggest a resolution.

22. **Mandatory Access Control policy simulator**: Extend the TypeScript SecuritySimulator with a full Bell-LaPadula implementation supporting multiple clearance levels (0-15), categories (compartments), and the *-property (no write-down). Simulate a multi-level security (MLS) environment with users at different clearances accessing documents at different classifications.

23. **Syscall policy enforcer**: Write a program using `seccomp` (Linux secure computing mode) in C or Python to create a sandbox that only allows the syscalls: `read`, `write`, `exit`, `brk`, `mmap`, `munmap`. Any other syscall should kill the process. Test by running a subprocess that tries to `open` a file.

24. **Kerberos-like authentication simulator**: Implement a simplified Kerberos authentication system in TypeScript with: Authentication Server (AS) that issues Ticket-Granting Tickets (TGT), Ticket-Granting Server (TGS) that issues service tickets, and a Service Server that validates service tickets. Demonstrate the full authentication flow.

25. **Formal verification of security policy**: Write a set of security properties in first-order logic and use a SAT solver (via TypeScript bindings or Z3 Python) to verify that a given set of access control rules does not violate: (a) separation of duty (a single user cannot have both write and approve permissions), (b) no privilege escalation, (c) least privilege. Generate counterexamples if violations exist.

