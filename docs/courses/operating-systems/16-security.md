# Chapter 16 — Security

## Learning Objectives

1. Differentiate authentication, authorisation, and encryption.
2. Implement access control using access matrices, ACLs, and capabilities.
3. Explain the UNIX permission model and assess its limitations.
4. Describe SELinux mandatory access control and its policy language.
5. Understand encryption at rest, in transit, and for authentication.

## 16.1 Security Goals

Operating system security addresses four objectives:

- **Confidentiality**: Data is accessible only to authorised parties.
- **Integrity**: Data is not modified by unauthorised parties.
- **Availability**: The system remains functional for authorised users.
- **Accountability**: Actions are traceable to the responsible principal.

## 16.2 Authentication

Authentication verifies the identity of a principal (user, process, machine). Methods are categorised by factor:

- **Something you know**: Password, PIN, passphrase.
- **Something you have**: Smart card, hardware token, phone (TOTP).
- **Something you are**: Biometric (fingerprint, face, iris).

### 16.2.1 Password Security

Passwords are not stored in plaintext. The system stores a **hash** of the password:

```c
// On Linux, /etc/shadow stores:
username:$id$salt$hashed:...: // $id = hash algorithm (1=MD5, 5=SHA-256, 6=SHA-512)
```

A **salt** (random value per user) prevents precomputation attacks (rainbow tables). Modern systems use key-derivation functions with a work factor:

- **bcrypt**: Based on Blowfish cipher; configurable cost factor.
- **scrypt**: Memory-hard; resists GPU-based cracking.
- **Argon2**: Winner of the Password Hashing Competition (2015); default in many modern systems.

### 16.2.2 Pluggable Authentication Modules (PAM)

PAM provides a flexible framework for authentication policies. Applications link against `libpam` and configuration files specify the authentication stack:

```
/etc/pam.d/sshd:
auth     required   pam_securetty.so
auth     sufficient pam_unix.so   nullok try_first_pass
auth     requisite  pam_deny.so
auth     required   pam_permit.so
account  required   pam_unix.so
password required   pam_unix.so
session  required   pam_unix.so
```

## 16.3 Authorisation

Authorisation determines whether an authenticated principal is permitted to perform an operation on a resource.

### 16.3.1 Access Matrix

An access matrix models protection by rows (domains/processes) and columns (objects). Each cell contains the set of allowed operations.

| Domain | File1 | File2 | Printer | Process1 |
|--------|-------|-------|---------|----------|
| User A | read | read, write | --- | signal |
| User B | --- | read | print | --- |

The matrix is sparse. It is implemented as either:

### 16.3.2 Access Control Lists (ACLs)

Each object stores a list of (principal, permissions) pairs. UNIX ACLs extend the basic rwx model with named users and groups:

```
# file: report.txt
user::rwx          # owner
user:alice:rwx     # specific user
group::r-x         # owning group
group:dev:rwx      # specific group
mask::rwx          # maximum permissions for named users/groups
other::---         # others
```

### 16.3.3 Capabilities

A capability is an unforgeable token that grants specific permissions on an object. Capabilities are typically implemented as kernel-managed objects. A process presents a capability to gain access. POSIX capabilities split root privileges into discrete units:

```
CAP_CHOWN:      Change file ownership
CAP_DAC_OVERRIDE: Bypass file permission checks
CAP_NET_RAW:    Use raw sockets
CAP_SETUID:     Set UID arbitrarily
CAP_SYS_ADMIN:  Various administrative operations
```

A process running as root can drop capabilities after initialisation, reducing the attack surface:

```c
cap_t caps = cap_get_proc();
cap_value_t cap_list[] = {CAP_NET_RAW, CAP_SETUID};
cap_set_flag(caps, CAP_CLEAR, 2, cap_list, CAP_CLEAR);
cap_set_proc(caps);
```

## 16.4 Mandatory Access Control (MAC)

UNIX discretionary access control (DAC) allows users to grant permissions on their own files. MAC policies override the owner's discretion.

### 16.4.1 SELinux

SELinux (Security-Enhanced Linux) implements MAC using labels (security contexts) and a policy language. Every object (file, process, socket) has a label:

```
user:role:type:level
system_u:object_r:httpd_sys_content_t:s0
```

The policy defines transitions: can a process with type `httpd_t` read a file with type `httpd_sys_content_t`? The default answer is no — the policy must explicitly allow each operation.

```bash
# Check the security context of a file
ls -Z /var/www/html/index.html

# Set the security context
chcon -t httpd_sys_content_t /var/www/html/index.html

# SELinux booleans toggle policy rules
getsebool httpd_enable_homedirs
setsebool httpd_enable_homedirs on
```

### 16.4.2 AppArmor

AppArmor binds a security profile to a program. The profile specifies per-program access to files, network, and capabilities.

```
/etc/apparmor.d/usr.bin.firefox:
include <tunables/global>
profile firefox /usr/lib/firefox/firefox {
    # Network
    network inet stream,
    network inet dgram,
    
    # Files
    /etc/firefox/** r,
    /home/*/.mozilla/** rwk,
    /tmp/** rwk,
    
    # Deny everything else by default
    deny /** w,
}
```

## 16.5 Encryption

### 16.5.1 Symmetric Encryption

Same key for encryption and decryption. Fast. Used for bulk data encryption.

| Algorithm | Key size | Notes |
|-----------|----------|-------|
| AES | 128, 192, 256 bits | NIST standard; hardware-accelerated on modern CPUs (AES-NI) |
| ChaCha20 | 256 bits | Stream cipher; fast in software (no hardware acceleration needed) |

### 16.5.2 Asymmetric Encryption

Separate keys: a public key (encryption, verification) and a private key (decryption, signing).

| Algorithm | Key size | Notes |
|-----------|----------|-------|
| RSA | 2048–4096 bits | Widely used; slower than ECC |
| ECC (ECDSA, Ed25519) | 256–521 bits | Smaller keys, faster than RSA |

### 16.5.3 Disk Encryption

**Full-disk encryption** (LUKS on Linux, BitLocker on Windows) encrypts the entire block device. The encryption key is derived from a passphrase or stored in a TPM (Trusted Platform Module).

```
cryptsetup luksFormat /dev/sda2
cryptsetup open /dev/sda2 cryptroot
mount /dev/mapper/cryptroot /mnt
```

**File-level encryption** (eCryptfs, fscrypt) encrypts individual files or directories, providing finer granularity.

### 16.5.4 Network Encryption

- **TLS/SSL**: Encrypts TCP connections. Used for HTTPS, IMAPS, SMTPS.
- **IPsec**: Encrypts IP packets. Used for VPNs.
- **SSH**: Encrypts remote shell and file transfer sessions.

## 16.6 Intrusion Detection

- **Host-based IDS (HIDS)**: Monitors system logs, file integrity (AIDE, Tripwire), and system calls (SELinux auditd).
- **Network-based IDS (NIDS)**: Monitors network traffic for signatures and anomalies (Snort, Suricata).

## 16.7 Trusted Platform Module

The TPM is a hardware security chip providing:

- Secure generation and storage of cryptographic keys.
- Platform integrity measurement (measured boot — hashes of boot firmware, bootloader, kernel).
- Remote attestation: report the system's integrity state to a remote verifier.

## Summary

OS security combines authentication, authorisation, and encryption. Authentication verifies identity; authorisation controls what the identity may do. ACLs and capabilities implement the access matrix. MAC systems like SELinux and AppArmor enforce system-wide policies beyond the discretion of resource owners. Encryption protects data at rest and in transit. Hardware support (AES-NI, TPM) strengthens these protections.

## Exercises

### Review Questions

1. What are the three authentication factors? Give an example of each.
2. How does a capability differ from an ACL?
3. What is the difference between DAC and MAC?
4. Why is password salting important, and how does it strengthen stored passwords?
5. What does the TPM provide for system security?

### Application Problems

1. An SELinux web server (httpd_t) needs to read files in `/var/www/html` (httpd_sys_content_t) and write logs to `/var/log/httpd` (httpd_log_t). Draw the type-transition rules required.
2. A database server stores the password file with SHA-256 and a 16-byte random salt per user. An attacker obtains the file and has a dictionary of 10 million common passwords. How many hash computations could a precomputed rainbow table save, and why does the salt prevent this?
3. A system uses POSIX capabilities. A network daemon requires CAP_NET_RAW at startup to open a raw socket, then needs only CAP_NET_BIND_SERVICE for the rest of its lifetime. Show the code sequence to drop CAP_NET_RAW after the initial setup.

### Challenge Problem

1. Implement a simple encrypted file utility in C using OpenSSL (or libsodium). The program should support `encrypt <input> <output>` and `decrypt <input> <output>` using AES-256 in GCM mode. Use a key derivation function (scrypt or Argon2) to derive the encryption key from a passphrase. Verify the integrity of decrypted data using the GCM authentication tag.
