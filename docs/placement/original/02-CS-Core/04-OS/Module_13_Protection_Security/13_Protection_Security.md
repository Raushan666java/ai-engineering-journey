# Module 13: Protection and Security

## Goals of Protection

### Protection vs Security
- **Protection**: Internal mechanisms controlling access to system resources
- **Security**: Defense against external threats and attacks

### Principles of Protection
1. **Principle of Least Privilege**: Minimal necessary access rights
2. **Need-to-Know Basis**: Access only to required information
3. **Defense in Depth**: Multiple layers of protection
4. **Fail-Safe Defaults**: Default to no access

## Domain of Protection

### Protection Domain
```c
struct protection_domain {
    int domain_id;
    struct access_right rights[MAX_OBJECTS];
    int num_rights;
    struct process *processes[MAX_PROCESSES];
    int num_processes;
};

struct access_right {
    int object_id;
    enum access_type {
        READ = 0x1,
        WRITE = 0x2,
        EXECUTE = 0x4,
        DELETE = 0x8
    } permissions;
};

bool check_access(struct protection_domain *domain, int object_id, 
                 enum access_type requested_access) {
    for (int i = 0; i < domain->num_rights; i++) {
        if (domain->rights[i].object_id == object_id) {
            return (domain->rights[i].permissions & requested_access) != 0;
        }
    }
    return false;  // No access rights
}
```

### Domain Switching
```c
struct domain_switch_table {
    int from_domain;
    int to_domain;
    int switch_object;  // Object that allows switching
    enum access_type required_permission;
};

int switch_domain(struct process *proc, int target_domain, int switch_object) {
    struct protection_domain *current_domain = proc->current_domain;
    
    // Check if switch is allowed
    if (!check_access(current_domain, switch_object, EXECUTE)) {
        return -EACCES;
    }
    
    // Find switch table entry
    struct domain_switch_table *entry = find_switch_entry(
        current_domain->domain_id, target_domain);
    
    if (!entry || entry->switch_object != switch_object) {
        return -EPERM;
    }
    
    // Perform domain switch
    proc->current_domain = get_domain(target_domain);
    
    return 0;
}
```

## Access Matrix

### Access Matrix Implementation
```c
#define MAX_SUBJECTS 100
#define MAX_OBJECTS 1000

struct access_matrix {
    enum access_type matrix[MAX_SUBJECTS][MAX_OBJECTS];
    char subject_names[MAX_SUBJECTS][32];
    char object_names[MAX_OBJECTS][32];
    int num_subjects;
    int num_objects;
};

bool check_access_matrix(struct access_matrix *am, int subject_id, 
                        int object_id, enum access_type access) {
    if (subject_id >= am->num_subjects || object_id >= am->num_objects) {
        return false;
    }
    
    return (am->matrix[subject_id][object_id] & access) != 0;
}

void grant_access(struct access_matrix *am, int subject_id, 
                 int object_id, enum access_type access) {
    if (subject_id < am->num_subjects && object_id < am->num_objects) {
        am->matrix[subject_id][object_id] |= access;
    }
}

void revoke_access(struct access_matrix *am, int subject_id, 
                  int object_id, enum access_type access) {
    if (subject_id < am->num_subjects && object_id < am->num_objects) {
        am->matrix[subject_id][object_id] &= ~access;
    }
}
```

### Access Control Lists (ACL)
```c
struct acl_entry {
    int subject_id;
    enum access_type permissions;
    struct acl_entry *next;
};

struct access_control_list {
    int object_id;
    struct acl_entry *entries;
    struct access_control_list *next;
};

bool check_acl_access(struct access_control_list *acl, int subject_id, 
                     enum access_type access) {
    struct acl_entry *entry = acl->entries;
    
    while (entry) {
        if (entry->subject_id == subject_id) {
            return (entry->permissions & access) != 0;
        }
        entry = entry->next;
    }
    
    return false;  // Subject not in ACL
}

void add_acl_entry(struct access_control_list *acl, int subject_id, 
                  enum access_type permissions) {
    struct acl_entry *new_entry = malloc(sizeof(struct acl_entry));
    new_entry->subject_id = subject_id;
    new_entry->permissions = permissions;
    new_entry->next = acl->entries;
    acl->entries = new_entry;
}
```

### Capability Lists
```c
struct capability {
    int object_id;
    enum access_type permissions;
    int capability_id;
    time_t expiration_time;
    bool valid;
};

struct capability_list {
    int subject_id;
    struct capability capabilities[MAX_CAPABILITIES];
    int num_capabilities;
};

bool check_capability(struct capability_list *cap_list, int capability_id, 
                     int object_id, enum access_type access) {
    for (int i = 0; i < cap_list->num_capabilities; i++) {
        struct capability *cap = &cap_list->capabilities[i];
        
        if (cap->capability_id == capability_id && 
            cap->object_id == object_id && 
            cap->valid &&
            time(NULL) < cap->expiration_time) {
            
            return (cap->permissions & access) != 0;
        }
    }
    
    return false;
}

int create_capability(struct capability_list *cap_list, int object_id, 
                     enum access_type permissions, time_t expiration) {
    if (cap_list->num_capabilities >= MAX_CAPABILITIES) {
        return -1;  // No space for new capability
    }
    
    int cap_id = generate_capability_id();
    struct capability *cap = &cap_list->capabilities[cap_list->num_capabilities];
    
    cap->object_id = object_id;
    cap->permissions = permissions;
    cap->capability_id = cap_id;
    cap->expiration_time = expiration;
    cap->valid = true;
    
    cap_list->num_capabilities++;
    
    return cap_id;
}
```

## Language-Based Protection

### Type-Safe Languages
```c
// Example: Safe pointer operations
struct safe_pointer {
    void *ptr;
    size_t size;
    enum pointer_type {
        PTR_READ_ONLY,
        PTR_READ_WRITE,
        PTR_EXECUTE
    } type;
    bool valid;
};

void* safe_dereference(struct safe_pointer *safe_ptr, size_t offset) {
    if (!safe_ptr->valid) {
        return NULL;  // Invalid pointer
    }
    
    if (offset >= safe_ptr->size) {
        return NULL;  // Out of bounds
    }
    
    if (safe_ptr->type == PTR_EXECUTE) {
        return NULL;  // Cannot dereference execute-only pointer
    }
    
    return (char*)safe_ptr->ptr + offset;
}

bool safe_write(struct safe_pointer *safe_ptr, size_t offset, 
               const void *data, size_t size) {
    if (!safe_ptr->valid || safe_ptr->type != PTR_READ_WRITE) {
        return false;
    }
    
    if (offset + size > safe_ptr->size) {
        return false;  // Out of bounds
    }
    
    memcpy((char*)safe_ptr->ptr + offset, data, size);
    return true;
}
```

### Stack Protection
```c
// Stack canary implementation
struct stack_frame {
    void *return_address;
    void *frame_pointer;
    unsigned long canary;
    char local_variables[];
};

#define STACK_CANARY_VALUE 0xDEADBEEF

void setup_stack_canary(struct stack_frame *frame) {
    frame->canary = STACK_CANARY_VALUE ^ get_random_value();
}

bool check_stack_canary(struct stack_frame *frame) {
    unsigned long expected = STACK_CANARY_VALUE ^ get_random_value();
    return frame->canary == expected;
}

void function_epilogue(struct stack_frame *frame) {
    if (!check_stack_canary(frame)) {
        // Stack overflow detected
        abort_program("Stack overflow detected");
    }
}
```

## Security

### Authentication
```c
struct user_credentials {
    char username[32];
    char password_hash[64];
    char salt[16];
    int failed_attempts;
    time_t last_attempt;
    bool locked;
};

struct authentication_system {
    struct user_credentials users[MAX_USERS];
    int num_users;
    int max_failed_attempts;
    int lockout_duration;
};

bool authenticate_user(struct authentication_system *auth, 
                      const char *username, const char *password) {
    struct user_credentials *user = find_user(auth, username);
    if (!user) {
        return false;  // User not found
    }
    
    // Check if account is locked
    if (user->locked && 
        time(NULL) - user->last_attempt < auth->lockout_duration) {
        return false;  // Account locked
    }
    
    // Hash provided password with stored salt
    char password_hash[64];
    hash_password_with_salt(password, user->salt, password_hash);
    
    if (strcmp(password_hash, user->password_hash) == 0) {
        // Authentication successful
        user->failed_attempts = 0;
        user->locked = false;
        return true;
    } else {
        // Authentication failed
        user->failed_attempts++;
        user->last_attempt = time(NULL);
        
        if (user->failed_attempts >= auth->max_failed_attempts) {
            user->locked = true;
        }
        
        return false;
    }
}
```

### Authorization
```c
struct role {
    char name[32];
    enum permission permissions;
    struct role *next;
};

struct user_account {
    char username[32];
    struct role *roles;
    enum permission effective_permissions;
};

enum permission {
    PERM_READ = 0x1,
    PERM_WRITE = 0x2,
    PERM_EXECUTE = 0x4,
    PERM_DELETE = 0x8,
    PERM_ADMIN = 0x10
};

bool authorize_action(struct user_account *user, enum permission required_perm) {
    // Calculate effective permissions from all roles
    enum permission effective = 0;
    struct role *role = user->roles;
    
    while (role) {
        effective |= role->permissions;
        role = role->next;
    }
    
    user->effective_permissions = effective;
    
    return (effective & required_perm) != 0;
}

void add_role_to_user(struct user_account *user, struct role *role) {
    role->next = user->roles;
    user->roles = role;
}
```

### Cryptography
```c
// Simple XOR cipher (for demonstration only)
void xor_encrypt(const char *plaintext, const char *key, 
                char *ciphertext, size_t length) {
    size_t key_len = strlen(key);
    
    for (size_t i = 0; i < length; i++) {
        ciphertext[i] = plaintext[i] ^ key[i % key_len];
    }
}

void xor_decrypt(const char *ciphertext, const char *key, 
                char *plaintext, size_t length) {
    // XOR decryption is the same as encryption
    xor_encrypt(ciphertext, key, plaintext, length);
}

// Hash function (simplified)
unsigned int simple_hash(const char *data, size_t length) {
    unsigned int hash = 5381;
    
    for (size_t i = 0; i < length; i++) {
        hash = ((hash << 5) + hash) + data[i];
    }
    
    return hash;
}

// Digital signature (conceptual)
struct digital_signature {
    unsigned int hash;
    char signature[256];
    char public_key[256];
};

bool verify_signature(const char *data, size_t length, 
                     struct digital_signature *sig) {
    // Calculate hash of data
    unsigned int calculated_hash = simple_hash(data, length);
    
    // Verify hash matches
    if (calculated_hash != sig->hash) {
        return false;
    }
    
    // Verify signature with public key (simplified)
    return verify_with_public_key(sig->signature, sig->public_key);
}
```

## System Threats

### Malware Detection
```c
struct malware_signature {
    char name[64];
    unsigned char pattern[256];
    size_t pattern_length;
    struct malware_signature *next;
};

struct antivirus_engine {
    struct malware_signature *signatures;
    int signature_count;
    bool real_time_protection;
};

bool scan_for_malware(struct antivirus_engine *av, const char *file_path) {
    FILE *file = fopen(file_path, "rb");
    if (!file) {
        return false;
    }
    
    // Read file content
    fseek(file, 0, SEEK_END);
    long file_size = ftell(file);
    fseek(file, 0, SEEK_SET);
    
    unsigned char *buffer = malloc(file_size);
    fread(buffer, 1, file_size, file);
    fclose(file);
    
    // Check against signatures
    struct malware_signature *sig = av->signatures;
    while (sig) {
        if (search_pattern(buffer, file_size, sig->pattern, sig->pattern_length)) {
            printf("Malware detected: %s in %s\n", sig->name, file_path);
            free(buffer);
            return true;
        }
        sig = sig->next;
    }
    
    free(buffer);
    return false;  // No malware found
}

bool search_pattern(const unsigned char *data, size_t data_size, 
                   const unsigned char *pattern, size_t pattern_size) {
    for (size_t i = 0; i <= data_size - pattern_size; i++) {
        if (memcmp(data + i, pattern, pattern_size) == 0) {
            return true;
        }
    }
    return false;
}
```

### Intrusion Detection
```c
struct network_packet {
    unsigned int src_ip;
    unsigned int dst_ip;
    unsigned short src_port;
    unsigned short dst_port;
    unsigned char protocol;
    size_t payload_size;
    unsigned char *payload;
    time_t timestamp;
};

struct intrusion_rule {
    char name[64];
    unsigned int src_ip_mask;
    unsigned int dst_ip_mask;
    unsigned short port_range_start;
    unsigned short port_range_end;
    unsigned char *signature;
    size_t signature_length;
    enum severity {
        SEVERITY_LOW,
        SEVERITY_MEDIUM,
        SEVERITY_HIGH,
        SEVERITY_CRITICAL
    } severity;
};

bool detect_intrusion(struct network_packet *packet, 
                     struct intrusion_rule *rules, int num_rules) {
    for (int i = 0; i < num_rules; i++) {
        struct intrusion_rule *rule = &rules[i];
        
        // Check IP addresses
        if ((packet->src_ip & rule->src_ip_mask) != rule->src_ip_mask ||
            (packet->dst_ip & rule->dst_ip_mask) != rule->dst_ip_mask) {
            continue;
        }
        
        // Check port range
        if (packet->dst_port < rule->port_range_start ||
            packet->dst_port > rule->port_range_end) {
            continue;
        }
        
        // Check payload signature
        if (rule->signature && 
            search_pattern(packet->payload, packet->payload_size, 
                          rule->signature, rule->signature_length)) {
            
            printf("INTRUSION DETECTED: %s (Severity: %d)\n", 
                   rule->name, rule->severity);
            
            // Log the incident
            log_security_incident(packet, rule);
            
            return true;
        }
    }
    
    return false;
}
```

### Firewalls
```c
struct firewall_rule {
    enum rule_action {
        ACTION_ALLOW,
        ACTION_DENY,
        ACTION_LOG
    } action;
    
    unsigned int src_ip;
    unsigned int src_mask;
    unsigned int dst_ip;
    unsigned int dst_mask;
    unsigned short src_port;
    unsigned short dst_port;
    unsigned char protocol;
    
    struct firewall_rule *next;
};

struct firewall {
    struct firewall_rule *rules;
    enum default_policy {
        DEFAULT_ALLOW,
        DEFAULT_DENY
    } default_policy;
    
    unsigned long packets_processed;
    unsigned long packets_allowed;
    unsigned long packets_denied;
};

enum rule_action firewall_process_packet(struct firewall *fw, 
                                        struct network_packet *packet) {
    fw->packets_processed++;
    
    struct firewall_rule *rule = fw->rules;
    while (rule) {
        // Check if packet matches rule
        if (packet_matches_rule(packet, rule)) {
            if (rule->action == ACTION_ALLOW) {
                fw->packets_allowed++;
            } else if (rule->action == ACTION_DENY) {
                fw->packets_denied++;
            }
            
            if (rule->action == ACTION_LOG) {
                log_packet(packet, rule);
            }
            
            return rule->action;
        }
        rule = rule->next;
    }
    
    // No matching rule, apply default policy
    if (fw->default_policy == DEFAULT_ALLOW) {
        fw->packets_allowed++;
        return ACTION_ALLOW;
    } else {
        fw->packets_denied++;
        return ACTION_DENY;
    }
}

bool packet_matches_rule(struct network_packet *packet, 
                        struct firewall_rule *rule) {
    // Check protocol
    if (rule->protocol != 0 && packet->protocol != rule->protocol) {
        return false;
    }
    
    // Check source IP
    if ((packet->src_ip & rule->src_mask) != (rule->src_ip & rule->src_mask)) {
        return false;
    }
    
    // Check destination IP
    if ((packet->dst_ip & rule->dst_mask) != (rule->dst_ip & rule->dst_mask)) {
        return false;
    }
    
    // Check ports
    if (rule->src_port != 0 && packet->src_port != rule->src_port) {
        return false;
    }
    
    if (rule->dst_port != 0 && packet->dst_port != rule->dst_port) {
        return false;
    }
    
    return true;
}
```

## Security Policies

### Mandatory Access Control (MAC)
```c
enum security_level {
    UNCLASSIFIED = 1,
    CONFIDENTIAL = 2,
    SECRET = 3,
    TOP_SECRET = 4
};

struct security_label {
    enum security_level level;
    unsigned int categories;  // Bit mask for compartments
};

struct mac_subject {
    int subject_id;
    struct security_label clearance;
};

struct mac_object {
    int object_id;
    struct security_label classification;
};

bool bell_lapadula_read(struct mac_subject *subject, struct mac_object *object) {
    // Simple Security Property: No read up
    return subject->clearance.level >= object->classification.level &&
           (subject->clearance.categories & object->classification.categories) == 
           object->classification.categories;
}

bool bell_lapadula_write(struct mac_subject *subject, struct mac_object *object) {
    // *-Property: No write down
    return subject->clearance.level <= object->classification.level &&
           (subject->clearance.categories & object->classification.categories) == 
           subject->clearance.categories;
}
```

### Discretionary Access Control (DAC)
```c
struct dac_object {
    int object_id;
    int owner_id;
    mode_t permissions;  // Unix-style permissions
};

bool dac_check_access(struct dac_object *object, int user_id, int group_id, 
                     enum access_type access) {
    mode_t required_perm = 0;
    
    switch (access) {
        case READ:
            required_perm = S_IRUSR;
            break;
        case WRITE:
            required_perm = S_IWUSR;
            break;
        case EXECUTE:
            required_perm = S_IXUSR;
            break;
    }
    
    // Check owner permissions
    if (user_id == object->owner_id) {
        return (object->permissions & required_perm) != 0;
    }
    
    // Check group permissions
    required_perm >>= 3;  // Shift to group bits
    if (user_in_group(user_id, group_id)) {
        return (object->permissions & required_perm) != 0;
    }
    
    // Check other permissions
    required_perm >>= 3;  // Shift to other bits
    return (object->permissions & required_perm) != 0;
}
```

## Lab Exercises

### Exercise 1: Access Control System
```c
struct access_control_system {
    struct access_matrix matrix;
    struct user_account users[MAX_USERS];
    struct protection_domain domains[MAX_DOMAINS];
    int num_users;
    int num_domains;
};

int create_user(struct access_control_system *acs, const char *username);
int create_domain(struct access_control_system *acs, const char *domain_name);
bool check_user_access(struct access_control_system *acs, int user_id, 
                      int object_id, enum access_type access);
```

### Exercise 2: Simple Firewall
```c
struct simple_firewall {
    struct firewall_rule *rules;
    int num_rules;
    enum default_policy default_policy;
    FILE *log_file;
};

int add_firewall_rule(struct simple_firewall *fw, struct firewall_rule *rule);
enum rule_action process_packet(struct simple_firewall *fw, 
                               struct network_packet *packet);
void log_firewall_event(struct simple_firewall *fw, 
                       struct network_packet *packet, enum rule_action action);
```

## Quiz Questions
1. What is the difference between protection and security?
2. Explain the principle of least privilege and its importance
3. Compare access control lists (ACL) with capability lists
4. How does mandatory access control differ from discretionary access control?
5. What are the main components of a comprehensive security system?

## Next Module
Module 14: Distributed Systems