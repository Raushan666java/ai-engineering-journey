# Chapter 16: Security

## Learning Objectives

- Identify the four main goals of OS security: confidentiality, integrity, availability, and authentication
- Describe authentication mechanisms from passwords to biometrics
- Explain access control models: DAC, MAC, RBAC, and ACLs
- Understand privilege escalation attacks and mitigations
- Describe Linux Security Modules (LSM) and SELinux
- Understand buffer overflow attacks and modern mitigations
- Explain the principle of least privilege and its implementation

## Theory

![Security](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/16-security.png)

### Security Goals

| Goal | Definition | Example Violation |
|------|------------|-------------------|
| **Confidentiality** | Data is accessible only to authorized users | Reading another user's files |
| **Integrity** | Data cannot be modified without authorization | Tampering with system binaries |
| **Availability** | System resources are accessible when needed | Denial-of-service attack |
| **Authentication** | Users are who they claim to be | Password theft |

### Authentication

#### Password-Based Authentication

```c
// Traditional password storage â€” NEVER do this
// (storing plaintext passwords)
struct password_entry {
    char username[32];
    char password[64];   // PLAINTEXT â€” catastrophic!
};

// Modern approach: hashed passwords with salt
struct password_entry {
    char username[32];
    char salt[16];        // Random per-user salt
    char hash[32];        // hash(salt + password)
};
```

**Salting**: A random salt is concatenated with the password before hashing. This prevents rainbow table attacks and ensures equal passwords hash differently.

```
Without salt:
  password "hello123" â†’ hash("hello123") = 2cf24dba...
  Two users with the same password have the same hash!

With salt:
  password "hello123" + salt "a4f8..." â†’ hash("a4f8...hello123") = 7b3d5c...
  password "hello123" + salt "b9c2..." â†’ hash("b9c2...hello123") = e1f8a9...
  Different hashes even with the same password!
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
                    SetUID bit â€” passwd runs as root when any user runs it
```

SetUID must be used sparingly â€” it's a common privilege escalation vector.

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
User Alice â†’ Role "admin" â†’ {read_all, write_all, create_user}
User Bob   â†’ Role "user"  â†’ {read_own, write_own}
User Carol â†’ Role "auditor" â†’ {read_logs}

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

Gaining higher privileges than authorized (e.g., user â†’ root):

```c
// Classic exploit: buffer overflow in SetUID program
// Assume this runs as SetUID root:

void vulnerable(char *input) {
    char buffer[64];
    strcpy(buffer, input);   // No bounds check!
    // If input > 64 bytes, it overwrites the return address
    // Attacker can redirect execution to shellcode
}
```

#### Horizontal Escalation

Accessing another user's resources with the same privilege level (e.g., user Alice accessing user Bob's files):

```bash
# World-readable file = horizontal escalation vector
chmod o-r private_file   # Remove others' read permission
```

#### Defenses Against Buffer Overflows

1. **Stack canaries**: A guard value is placed on the stack before the return address.

```
Without canary:
  [ buffer ] [ saved ebp ] [ return address ]
   â†‘ write overflow here â†’ overwrites return address

With canary:
  [ buffer ] [ CANARY ] [ saved ebp ] [ return address ]
   â†‘ overflow trashes canary â†’ kernel detects mismatch â†’ abort
```

2. **ASLR** (Address Space Layout Randomization): Randomizes the base addresses of stack, heap, and libraries. Makes it harder for attackers to predict addresses.

3. **NX bit** (No-Execute): Marks data pages (stack, heap) as non-executable. Shellcode on the stack cannot run.

4. **Control-flow integrity**: Ensures indirect calls and jumps follow valid paths.

### Linux Security Modules (LSM)

LSM is a framework that allows security modules to hook into kernel operations.

```
System call (e.g., open())
  â†’ VFS layer
  â†’ LSM hook: security_file_open()
    â†’ SELinux/AppArmor/Smack policy check
    â†’ Allow or Deny
  â†’ Actual file operation
```

```c
// LSM hook example (kernel code)
// Every file open goes through this hook
int security_file_open(struct file *file) {
    // If SELinux is loaded, it has registered this hook
    // SELinux checks the subject (current process) against
    // the object (file's inode) using the policy
    
    if (policy_denies_access(current, file->f_inode))
        return -EACCES;     // Permission denied
    
    return 0;   // Allowed
}
```

#### SELinux

SELinux (NSA-developed) enforces MAC on Linux. Modes:

| Mode | Behavior |
|------|----------|
| **Enforcing** | Policy is enforced; violations are denied and logged |
| **Permissive** | Violations are logged but not denied (for debugging) |
| **Disabled** | SELinux is turned off |

```bash
getenforce                    # Check current mode
setenforce 1                  # Switch to enforcing
setenforce 0                  # Switch to permissive

# Check a file's security context
ls -Z /etc/shadow
# â†’ system_u:object_r:shadow_t:s0

# Check a process's security context
ps -Z $(pgrep httpd)
# â†’ system_u:system_r:httpd_t:s0

# Query policy rules
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
- **Platform integrity measurement** (measured boot â€” TPM records boot process hashes)
- **Remote attestation**: Prove to a remote party that the system is in a known good state

### Principle of Least Privilege

Every process should run with only the privileges necessary to complete its task.

```c
// Example: drop root privileges after binding a privileged port

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    
    // Bind to port 80 (requires rootâ€”privileged port)
    bind(server_fd, ...);
    listen(server_fd, 10);
    
    // Now drop privileges!
    if (fork() == 0) {
        // Child process: switch to unprivileged user
        struct passwd *pw = getpwnam("www-data");
        setuid(pw->pw_uid);    // Drop root â€” now "www-data"
        setgid(pw->pw_gid);
        
        // Handle requests as www-data (no root privileges)
        handle_requests(server_fd);
    }
    
    return 0;
}
```

### Common Vulnerabilities

#### Race Conditions (TOCTOU)

**Time of Check, Time of Use** â€” the state changes between the check and the use:

```c
// Vulnerable code:
if (access("/tmp/log", W_OK) != 0) {   // TOCTOU window starts
    // "check" â€” am I allowed to write?
    // ATTACKER: replaces /tmp/log with a symlink to /etc/passwd
    // between the access() and the fopen()!
}

FILE *fp = fopen("/tmp/log", "a");      // TOCTOU window ends
if (!fp) error();
```

**Fix**: Use `open()` with flags, not a separate check:

```c
// Safe approach: atomically check and open
int fd = open("/secure/log", O_WRONLY | O_APPEND | O_NOFOLLOW);
if (fd < 0) error();

// O_NOFOLLOW prevents symlink attacks
// The check and the open are the same operation
```

#### Format String Vulnerabilities

```c
// Vulnerable:
printf(user_input);   // Attacker can read/write stack via %x, %n

// Safe:
printf("%s", user_input);  // The format string is fixed
```

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
# chroot â€” change root directory
# Creates an isolated filesystem view
mkdir /jail
# Copy minimal binaries/libraries to /jail
chroot /jail /bin/bash
# Process now sees /jail as /, cannot access files outside

# namespaces (Linux container primitive)
# Each namespace type provides different isolation:
#   PID namespace:     isolated process tree
#   Mount namespace:   isolated filesystem mounts
#   Network namespace: isolated network stack
#   User namespace:    isolated UID/GID mapping
#   UTS namespace:     isolated hostname

unshare --pid --mount --net --fork /bin/bash  # Create new namespaces
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

## Exercises

### Basic

1. What is the difference between DAC and MAC? Give an example of a system using each.
2. Explain the purpose of a salt in password hashing. Why is a slow hash function (bcrypt, scrypt) better than a fast one (SHA-256) for password storage?
3. What is a SetUID bit? Why is it dangerous? Find all SetUID binaries on your system with `find / -perm -4000 2>/dev/null`.

### Intermediate

4. Write a program that demonstrates a buffer overflow safely (use it on your own machine only). Explain how a stack canary prevents the overflow from being exploitable.
5. Write a Python script that brute-force checks the strength of Unix passwords against a dictionary. Read `/etc/shadow` (you'll need root), extract the salt+hash for each user, and test the top 10,000 common passwords against them.
6. Research your system's ASLR implementation. Check the entropy level with `cat /proc/sys/kernel/randomize_va_space`. Write a program that prints the address of a stack variable, a heap allocation, and a function. Run it multiple times â€” do the addresses change?

### Advanced

7. Implement a **capability-based security framework** as a user-space library. Create a capability token structure (a random 64-bit integer). Define a server that requires a capability to perform operations. Design at least 3 capability types (read, write, delete). Demonstrate that possession of the token (not user identity) governs access.
8. Write a minimal **namespace-based sandbox** using `clone()` with `CLONE_NEWNS | CLONE_NEWPID | CLONE_NEWNET`. The child process should have its own root filesystem (use pivot_root or chroot), its own process tree (PID 1), and a virtual network interface. The child should be unable to see or affect host processes.
9. Analyze a real-world Linux privilege escalation exploit (e.g., Dirty Pipe CVE-2022-0847 or a similar vulnerability). Explain the root cause, the exploitation mechanism (the exact kernel bug), and the fix. Write a proof-of-concept that demonstrates the vulnerability in a controlled VM environment.
