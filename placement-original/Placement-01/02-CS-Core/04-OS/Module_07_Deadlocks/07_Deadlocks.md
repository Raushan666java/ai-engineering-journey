# Module 7: Deadlocks

## Deadlock Characterization

### Definition
A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.

### Necessary Conditions (Coffman Conditions)
1. **Mutual Exclusion**: Resources cannot be shared
2. **Hold and Wait**: Process holds resources while waiting for others
3. **No Preemption**: Resources cannot be forcibly taken away
4. **Circular Wait**: Circular chain of processes waiting for resources

### Resource Allocation Graph
```c
struct resource_allocation_graph {
    struct process processes[MAX_PROCESSES];
    struct resource resources[MAX_RESOURCES];
    struct edge edges[MAX_EDGES];
};

struct edge {
    enum edge_type {
        REQUEST,    // Process -> Resource
        ASSIGNMENT  // Resource -> Process
    } type;
    int from, to;
};

bool has_cycle(struct resource_allocation_graph *rag) {
    // DFS-based cycle detection
    bool visited[MAX_PROCESSES] = {false};
    bool rec_stack[MAX_PROCESSES] = {false};
    
    for (int i = 0; i < rag->num_processes; i++) {
        if (!visited[i]) {
            if (dfs_cycle_check(rag, i, visited, rec_stack)) {
                return true;
            }
        }
    }
    return false;
}
```

## Deadlock Prevention

### Attacking Mutual Exclusion
- Make resources sharable when possible
- Use spooling for non-sharable resources

### Attacking Hold and Wait
```c
// Protocol 1: Request all resources at once
bool request_all_resources(struct process *p, struct resource resources[], int count) {
    // Check if all resources are available
    for (int i = 0; i < count; i++) {
        if (!is_available(&resources[i])) {
            return false;
        }
    }
    
    // Allocate all resources atomically
    for (int i = 0; i < count; i++) {
        allocate_resource(&resources[i], p);
    }
    return true;
}

// Protocol 2: Release all resources before requesting new ones
void request_with_release(struct process *p, struct resource new_resources[], int count) {
    release_all_resources(p);
    request_all_resources(p, new_resources, count);
}
```

### Attacking No Preemption
```c
bool preemptive_request(struct process *p, struct resource *r) {
    if (is_available(r)) {
        allocate_resource(r, p);
        return true;
    }
    
    struct process *holder = get_resource_holder(r);
    if (holder->priority < p->priority) {
        preempt_resource(r, holder);
        allocate_resource(r, p);
        return true;
    }
    
    return false;
}
```

### Attacking Circular Wait
```c
// Resource ordering approach
enum resource_type {
    PRINTER = 1,
    SCANNER = 2,
    DISK = 3,
    TAPE = 4
};

bool ordered_request(struct process *p, enum resource_type type) {
    // Only allow requests in increasing order
    if (type <= p->highest_resource_type) {
        return false;  // Violates ordering
    }
    
    if (allocate_resource_by_type(type, p)) {
        p->highest_resource_type = type;
        return true;
    }
    return false;
}
```

## Deadlock Avoidance

### Safe State Algorithm
```c
struct system_state {
    int allocation[MAX_PROCESSES][MAX_RESOURCES];
    int max[MAX_PROCESSES][MAX_RESOURCES];
    int available[MAX_RESOURCES];
    int need[MAX_PROCESSES][MAX_RESOURCES];
};

bool is_safe_state(struct system_state *state) {
    int work[MAX_RESOURCES];
    bool finish[MAX_PROCESSES] = {false};
    
    // Initialize work array
    for (int i = 0; i < MAX_RESOURCES; i++) {
        work[i] = state->available[i];
    }
    
    // Find safe sequence
    int count = 0;
    while (count < MAX_PROCESSES) {
        bool found = false;
        
        for (int p = 0; p < MAX_PROCESSES; p++) {
            if (!finish[p]) {
                bool can_finish = true;
                
                // Check if need <= work
                for (int r = 0; r < MAX_RESOURCES; r++) {
                    if (state->need[p][r] > work[r]) {
                        can_finish = false;
                        break;
                    }
                }
                
                if (can_finish) {
                    // Process can complete
                    for (int r = 0; r < MAX_RESOURCES; r++) {
                        work[r] += state->allocation[p][r];
                    }
                    finish[p] = true;
                    found = true;
                    count++;
                    break;
                }
            }
        }
        
        if (!found) {
            return false;  // Unsafe state
        }
    }
    
    return true;  // Safe state
}
```

### Banker's Algorithm
```c
bool bankers_algorithm(struct system_state *state, int process_id, int request[]) {
    // Check if request <= need
    for (int i = 0; i < MAX_RESOURCES; i++) {
        if (request[i] > state->need[process_id][i]) {
            return false;  // Error: exceeds maximum claim
        }
    }
    
    // Check if request <= available
    for (int i = 0; i < MAX_RESOURCES; i++) {
        if (request[i] > state->available[i]) {
            return false;  // Must wait
        }
    }
    
    // Simulate allocation
    struct system_state temp_state = *state;
    for (int i = 0; i < MAX_RESOURCES; i++) {
        temp_state.available[i] -= request[i];
        temp_state.allocation[process_id][i] += request[i];
        temp_state.need[process_id][i] -= request[i];
    }
    
    // Check if resulting state is safe
    if (is_safe_state(&temp_state)) {
        *state = temp_state;  // Grant request
        return true;
    } else {
        return false;  // Deny request
    }
}
```

### Resource Allocation Graph Algorithm
```c
struct rag_node {
    enum node_type {
        PROCESS_NODE,
        RESOURCE_NODE
    } type;
    int id;
    struct rag_node *edges[MAX_EDGES];
    int edge_count;
};

bool would_create_cycle(struct resource_allocation_graph *rag, int process, int resource) {
    // Add claim edge temporarily
    add_claim_edge(rag, process, resource);
    
    // Check for cycle
    bool has_cycle = detect_cycle(rag);
    
    // Remove claim edge
    remove_claim_edge(rag, process, resource);
    
    return has_cycle;
}
```

## Deadlock Detection

### Single Instance Algorithm
```c
struct wait_for_graph {
    bool edges[MAX_PROCESSES][MAX_PROCESSES];
    int num_processes;
};

bool detect_deadlock_single(struct wait_for_graph *wfg) {
    bool visited[MAX_PROCESSES] = {false};
    bool rec_stack[MAX_PROCESSES] = {false};
    
    for (int i = 0; i < wfg->num_processes; i++) {
        if (!visited[i]) {
            if (has_cycle_dfs(wfg, i, visited, rec_stack)) {
                return true;
            }
        }
    }
    return false;
}

bool has_cycle_dfs(struct wait_for_graph *wfg, int node, bool visited[], bool rec_stack[]) {
    visited[node] = true;
    rec_stack[node] = true;
    
    for (int i = 0; i < wfg->num_processes; i++) {
        if (wfg->edges[node][i]) {
            if (!visited[i] && has_cycle_dfs(wfg, i, visited, rec_stack)) {
                return true;
            } else if (rec_stack[i]) {
                return true;
            }
        }
    }
    
    rec_stack[node] = false;
    return false;
}
```

### Multiple Instance Algorithm
```c
bool detect_deadlock_multiple(struct system_state *state) {
    int work[MAX_RESOURCES];
    bool finish[MAX_PROCESSES];
    
    // Initialize work and finish
    for (int i = 0; i < MAX_RESOURCES; i++) {
        work[i] = state->available[i];
    }
    
    for (int i = 0; i < MAX_PROCESSES; i++) {
        bool has_allocation = false;
        for (int j = 0; j < MAX_RESOURCES; j++) {
            if (state->allocation[i][j] != 0) {
                has_allocation = true;
                break;
            }
        }
        finish[i] = !has_allocation;
    }
    
    // Find processes that can complete
    bool progress = true;
    while (progress) {
        progress = false;
        
        for (int i = 0; i < MAX_PROCESSES; i++) {
            if (!finish[i]) {
                bool can_complete = true;
                
                // Check if request <= work
                for (int j = 0; j < MAX_RESOURCES; j++) {
                    if (state->request[i][j] > work[j]) {
                        can_complete = false;
                        break;
                    }
                }
                
                if (can_complete) {
                    for (int j = 0; j < MAX_RESOURCES; j++) {
                        work[j] += state->allocation[i][j];
                    }
                    finish[i] = true;
                    progress = true;
                }
            }
        }
    }
    
    // Check for deadlock
    for (int i = 0; i < MAX_PROCESSES; i++) {
        if (!finish[i]) {
            return true;  // Deadlock detected
        }
    }
    
    return false;  // No deadlock
}
```

## Deadlock Recovery

### Process Termination
```c
void recover_by_termination(struct deadlock_info *deadlock) {
    // Strategy 1: Terminate all deadlocked processes
    for (int i = 0; i < deadlock->num_processes; i++) {
        terminate_process(deadlock->processes[i]);
    }
    
    // Strategy 2: Terminate one process at a time
    while (deadlock_exists()) {
        int victim = select_victim(deadlock);
        terminate_process(victim);
        reclaim_resources(victim);
    }
}

int select_victim(struct deadlock_info *deadlock) {
    int min_cost = INT_MAX;
    int victim = -1;
    
    for (int i = 0; i < deadlock->num_processes; i++) {
        int cost = calculate_termination_cost(deadlock->processes[i]);
        if (cost < min_cost) {
            min_cost = cost;
            victim = deadlock->processes[i];
        }
    }
    
    return victim;
}

int calculate_termination_cost(int process_id) {
    struct process *p = get_process(process_id);
    int cost = 0;
    
    // Factors to consider:
    cost += p->cpu_time_used;           // Work lost
    cost += p->remaining_time;          // Future work lost
    cost += count_resources_held(p);    // Resources to be freed
    cost += p->priority;                // Priority consideration
    
    return cost;
}
```

### Resource Preemption
```c
struct checkpoint {
    struct process_state state;
    struct resource_list held_resources;
    int checkpoint_id;
};

void recover_by_preemption(struct deadlock_info *deadlock) {
    // Select victim for preemption
    int victim = select_preemption_victim(deadlock);
    
    // Save process state
    struct checkpoint cp;
    save_checkpoint(victim, &cp);
    
    // Preempt resources
    preempt_all_resources(victim);
    
    // Rollback process to safe state
    rollback_process(victim, &cp);
    
    // Check if deadlock is resolved
    if (!deadlock_exists()) {
        // Restart victim process
        restart_process(victim);
    }
}

void save_checkpoint(int process_id, struct checkpoint *cp) {
    struct process *p = get_process(process_id);
    
    cp->state = p->state;
    cp->held_resources = p->resources;
    cp->checkpoint_id = generate_checkpoint_id();
    
    // Save to persistent storage
    write_checkpoint_to_disk(cp);
}

void rollback_process(int process_id, struct checkpoint *cp) {
    struct process *p = get_process(process_id);
    
    // Restore process state
    p->state = cp->state;
    p->resources = cp->held_resources;
    
    // Update system state
    update_system_state(p);
}
```

## Distributed Deadlock Detection

### Centralized Algorithm
```c
struct global_wait_graph {
    bool edges[MAX_GLOBAL_PROCESSES][MAX_GLOBAL_PROCESSES];
    int process_to_site[MAX_GLOBAL_PROCESSES];
    int num_processes;
};

void centralized_deadlock_detection() {
    // Coordinator collects local wait-for graphs
    struct global_wait_graph gwg;
    
    for (int site = 0; site < num_sites; site++) {
        struct wait_for_graph local_wfg = get_local_wfg(site);
        merge_into_global(&gwg, &local_wfg, site);
    }
    
    // Detect cycles in global graph
    if (detect_cycle_in_global(&gwg)) {
        initiate_recovery(&gwg);
    }
}
```

### Distributed Algorithm (Chandy-Misra-Haas)
```c
struct probe_message {
    int initiator;
    int sender;
    int receiver;
};

void send_probe(int from, int to, struct probe_message *probe) {
    if (is_blocked(to)) {
        // Forward probe to processes this one is waiting for
        struct process_list *waiting_for = get_waiting_list(to);
        
        for (int i = 0; i < waiting_for->count; i++) {
            struct probe_message new_probe = {
                .initiator = probe->initiator,
                .sender = to,
                .receiver = waiting_for->processes[i]
            };
            
            if (get_site(waiting_for->processes[i]) != current_site) {
                send_remote_probe(&new_probe);
            } else {
                send_probe(to, waiting_for->processes[i], &new_probe);
            }
        }
    }
}

void handle_probe_message(struct probe_message *probe) {
    if (probe->initiator == current_process && is_blocked(current_process)) {
        // Deadlock detected
        report_deadlock(probe);
    } else if (is_blocked(probe->receiver)) {
        // Forward probe
        send_probe(probe->sender, probe->receiver, probe);
    }
}
```

## Lab Exercises

### Exercise 1: Banker's Algorithm Implementation
```c
struct banker_system {
    int processes;
    int resources;
    int allocation[MAX_PROC][MAX_RES];
    int max[MAX_PROC][MAX_RES];
    int available[MAX_RES];
    int need[MAX_PROC][MAX_RES];
};

bool is_safe_state(struct banker_system *bs);
bool request_resources(struct banker_system *bs, int process, int request[]);
void calculate_need_matrix(struct banker_system *bs);
```

### Exercise 2: Deadlock Detection System
```c
struct deadlock_detector {
    struct resource_allocation_graph rag;
    struct wait_for_graph wfg;
    bool (*detect_deadlock)(struct deadlock_detector *dd);
    void (*recover_from_deadlock)(struct deadlock_detector *dd);
};

void initialize_detector(struct deadlock_detector *dd);
bool run_detection_algorithm(struct deadlock_detector *dd);
```

## Quiz Questions
1. What are the four necessary conditions for deadlock?
2. Explain the difference between deadlock prevention and avoidance
3. How does the Banker's algorithm ensure deadlock avoidance?
4. What are the trade-offs between different deadlock recovery strategies?
5. Why is distributed deadlock detection more complex than centralized?

## Next Module
Module 8: Memory Management