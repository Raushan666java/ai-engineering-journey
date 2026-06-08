# 🛠️ Operating Systems - Practical Labs Guide

## 📋 COMPLETE HANDS-ON LABORATORY EXERCISES

---

## 🔬 LAB 1: SYSTEM CALLS & KERNEL MODULES

### **Objective**: Understand system call interface and kernel programming

### **Lab 1A: System Call Tracing**
```c
// trace_syscalls.c
#include <stdio.h>
#include <unistd.h>
#include <sys/ptrace.h>
#include <sys/wait.h>
#include <sys/user.h>

int main() {
    pid_t child = fork();
    
    if (child == 0) {
        ptrace(PTRACE_TRACEME, 0, NULL, NULL);
        execl("/bin/ls", "ls", NULL);
    } else {
        int status;
        struct user_regs_struct regs;
        
        while (1) {
            wait(&status);
            if (WIFEXITED(status)) break;
            
            ptrace(PTRACE_GETREGS, child, NULL, &regs);
            printf("System call: %lld\n", regs.orig_rax);
            ptrace(PTRACE_SYSCALL, child, NULL, NULL);
        }
    }
    return 0;
}
```

### **Lab 1B: Simple Kernel Module**
```c
// hello_module.c
#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>

static int __init hello_init(void) {
    printk(KERN_INFO "Hello from kernel module!\n");
    return 0;
}

static void __exit hello_exit(void) {
    printk(KERN_INFO "Goodbye from kernel module!\n");
}

module_init(hello_init);
module_exit(hello_exit);
MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Simple Hello World Module");
```

---

## 🔬 LAB 2: PROCESS MANAGEMENT

### **Objective**: Implement process creation, scheduling, and IPC

### **Lab 2A: Process Manager**
```c
// process_manager.c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>
#include <signal.h>

struct process {
    pid_t pid;
    char name[256];
    int priority;
    int state; // 0=running, 1=waiting, 2=terminated
};

struct process processes[100];
int process_count = 0;

void create_process(char *program, int priority) {
    pid_t pid = fork();
    
    if (pid == 0) {
        execl(program, program, NULL);
    } else if (pid > 0) {
        processes[process_count].pid = pid;
        strcpy(processes[process_count].name, program);
        processes[process_count].priority = priority;
        processes[process_count].state = 0;
        process_count++;
    }
}

void list_processes() {
    printf("PID\tName\t\tPriority\tState\n");
    for (int i = 0; i < process_count; i++) {
        printf("%d\t%s\t\t%d\t\t%d\n", 
               processes[i].pid, processes[i].name,
               processes[i].priority, processes[i].state);
    }
}

int main() {
    create_process("/bin/sleep", 1);
    create_process("/bin/date", 2);
    list_processes();
    
    // Wait for all processes
    while (wait(NULL) > 0);
    return 0;
}
```

### **Lab 2B: Round Robin Scheduler**
```c
// rr_scheduler.c
#include <stdio.h>
#include <stdlib.h>
#include <queue>

struct task {
    int id;
    int burst_time;
    int remaining_time;
    int waiting_time;
    int turnaround_time;
};

void round_robin_schedule(struct task tasks[], int n, int quantum) {
    std::queue<int> ready_queue;
    int current_time = 0;
    int completed = 0;
    
    // Add all tasks to ready queue
    for (int i = 0; i < n; i++) {
        ready_queue.push(i);
        tasks[i].remaining_time = tasks[i].burst_time;
    }
    
    while (completed < n) {
        if (ready_queue.empty()) {
            current_time++;
            continue;
        }
        
        int current_task = ready_queue.front();
        ready_queue.pop();
        
        int exec_time = (tasks[current_task].remaining_time > quantum) ? 
                       quantum : tasks[current_task].remaining_time;
        
        tasks[current_task].remaining_time -= exec_time;
        current_time += exec_time;
        
        if (tasks[current_task].remaining_time == 0) {
            completed++;
            tasks[current_task].turnaround_time = current_time;
            tasks[current_task].waiting_time = 
                tasks[current_task].turnaround_time - tasks[current_task].burst_time;
        } else {
            ready_queue.push(current_task);
        }
    }
}
```

---

## 🔬 LAB 3: MEMORY MANAGEMENT

### **Objective**: Implement memory allocation and virtual memory systems

### **Lab 3A: Memory Allocator**
```c
// memory_allocator.c
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

#define HEAP_SIZE 1024*1024  // 1MB heap

struct block {
    size_t size;
    int free;
    struct block *next;
};

static char heap[HEAP_SIZE];
static struct block *free_list = NULL;

void init_allocator() {
    free_list = (struct block *)heap;
    free_list->size = HEAP_SIZE - sizeof(struct block);
    free_list->free = 1;
    free_list->next = NULL;
}

void *my_malloc(size_t size) {
    struct block *current = free_list;
    
    while (current) {
        if (current->free && current->size >= size) {
            // Split block if necessary
            if (current->size > size + sizeof(struct block)) {
                struct block *new_block = (struct block *)
                    ((char *)current + sizeof(struct block) + size);
                new_block->size = current->size - size - sizeof(struct block);
                new_block->free = 1;
                new_block->next = current->next;
                
                current->size = size;
                current->next = new_block;
            }
            
            current->free = 0;
            return (char *)current + sizeof(struct block);
        }
        current = current->next;
    }
    
    return NULL; // Out of memory
}

void my_free(void *ptr) {
    if (!ptr) return;
    
    struct block *block = (struct block *)((char *)ptr - sizeof(struct block));
    block->free = 1;
    
    // Coalesce adjacent free blocks
    struct block *current = free_list;
    while (current && current->next) {
        if (current->free && current->next->free) {
            current->size += current->next->size + sizeof(struct block);
            current->next = current->next->next;
        } else {
            current = current->next;
        }
    }
}
```

### **Lab 3B: Page Replacement Simulator**
```c
// page_replacement.c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_FRAMES 10
#define MAX_PAGES 100

struct frame {
    int page_number;
    int reference_bit;
    int modify_bit;
    int age;
};

int lru_replace(struct frame frames[], int num_frames, int page) {
    int oldest_frame = 0;
    int oldest_age = frames[0].age;
    
    for (int i = 1; i < num_frames; i++) {
        if (frames[i].age < oldest_age) {
            oldest_age = frames[i].age;
            oldest_frame = i;
        }
    }
    
    frames[oldest_frame].page_number = page;
    frames[oldest_frame].age = 0;
    
    // Age all other frames
    for (int i = 0; i < num_frames; i++) {
        if (i != oldest_frame) {
            frames[i].age++;
        }
    }
    
    return oldest_frame;
}

int clock_replace(struct frame frames[], int num_frames, int page, int *clock_hand) {
    while (1) {
        if (frames[*clock_hand].reference_bit == 0) {
            int victim = *clock_hand;
            frames[victim].page_number = page;
            frames[victim].reference_bit = 1;
            *clock_hand = (*clock_hand + 1) % num_frames;
            return victim;
        } else {
            frames[*clock_hand].reference_bit = 0;
            *clock_hand = (*clock_hand + 1) % num_frames;
        }
    }
}

void simulate_page_replacement(int pages[], int num_pages, int num_frames, 
                              int algorithm) {
    struct frame frames[MAX_FRAMES];
    int page_faults = 0;
    int clock_hand = 0;
    
    // Initialize frames
    for (int i = 0; i < num_frames; i++) {
        frames[i].page_number = -1;
        frames[i].reference_bit = 0;
        frames[i].age = 0;
    }
    
    for (int i = 0; i < num_pages; i++) {
        int page = pages[i];
        bool found = false;
        
        // Check if page is already in memory
        for (int j = 0; j < num_frames; j++) {
            if (frames[j].page_number == page) {
                frames[j].reference_bit = 1;
                found = true;
                break;
            }
        }
        
        if (!found) {
            page_faults++;
            
            // Find empty frame or replace
            int frame_index = -1;
            for (int j = 0; j < num_frames; j++) {
                if (frames[j].page_number == -1) {
                    frame_index = j;
                    break;
                }
            }
            
            if (frame_index == -1) {
                // Need to replace
                if (algorithm == 0) { // LRU
                    frame_index = lru_replace(frames, num_frames, page);
                } else { // Clock
                    frame_index = clock_replace(frames, num_frames, page, &clock_hand);
                }
            } else {
                frames[frame_index].page_number = page;
                frames[frame_index].reference_bit = 1;
            }
        }
    }
    
    printf("Total page faults: %d\n", page_faults);
    printf("Page fault rate: %.2f%%\n", (float)page_faults / num_pages * 100);
}
```

---

## 🔬 LAB 4: FILE SYSTEMS

### **Objective**: Implement file system components and operations

### **Lab 4A: Simple File System**
```c
// simple_fs.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

#define BLOCK_SIZE 512
#define MAX_FILES 100
#define MAX_FILENAME 32

struct inode {
    char filename[MAX_FILENAME];
    uint32_t size;
    uint32_t blocks[10]; // Direct blocks
    uint32_t indirect;   // Indirect block
    int in_use;
};

struct superblock {
    uint32_t total_blocks;
    uint32_t free_blocks;
    uint32_t total_inodes;
    uint32_t free_inodes;
    uint32_t first_data_block;
};

struct filesystem {
    struct superblock sb;
    struct inode inodes[MAX_FILES];
    uint8_t *bitmap; // Free block bitmap
    uint8_t *data_blocks;
};

struct filesystem *create_filesystem(uint32_t total_blocks) {
    struct filesystem *fs = malloc(sizeof(struct filesystem));
    
    fs->sb.total_blocks = total_blocks;
    fs->sb.free_blocks = total_blocks - 1; // Reserve superblock
    fs->sb.total_inodes = MAX_FILES;
    fs->sb.free_inodes = MAX_FILES;
    fs->sb.first_data_block = 1;
    
    // Initialize inodes
    for (int i = 0; i < MAX_FILES; i++) {
        fs->inodes[i].in_use = 0;
    }
    
    // Initialize bitmap
    fs->bitmap = calloc(total_blocks / 8 + 1, 1);
    fs->data_blocks = malloc(total_blocks * BLOCK_SIZE);
    
    return fs;
}

int allocate_block(struct filesystem *fs) {
    for (uint32_t i = fs->sb.first_data_block; i < fs->sb.total_blocks; i++) {
        int byte_index = i / 8;
        int bit_index = i % 8;
        
        if (!(fs->bitmap[byte_index] & (1 << bit_index))) {
            fs->bitmap[byte_index] |= (1 << bit_index);
            fs->sb.free_blocks--;
            return i;
        }
    }
    return -1; // No free blocks
}

void free_block(struct filesystem *fs, uint32_t block) {
    int byte_index = block / 8;
    int bit_index = block % 8;
    
    fs->bitmap[byte_index] &= ~(1 << bit_index);
    fs->sb.free_blocks++;
}

int create_file(struct filesystem *fs, const char *filename) {
    // Find free inode
    for (int i = 0; i < MAX_FILES; i++) {
        if (!fs->inodes[i].in_use) {
            strncpy(fs->inodes[i].filename, filename, MAX_FILENAME);
            fs->inodes[i].size = 0;
            fs->inodes[i].in_use = 1;
            
            // Initialize block pointers
            for (int j = 0; j < 10; j++) {
                fs->inodes[i].blocks[j] = 0;
            }
            fs->inodes[i].indirect = 0;
            
            fs->sb.free_inodes--;
            return i; // Return inode number
        }
    }
    return -1; // No free inodes
}

int write_file(struct filesystem *fs, int inode_num, const void *data, size_t size) {
    if (inode_num < 0 || inode_num >= MAX_FILES || !fs->inodes[inode_num].in_use) {
        return -1;
    }
    
    struct inode *inode = &fs->inodes[inode_num];
    size_t blocks_needed = (size + BLOCK_SIZE - 1) / BLOCK_SIZE;
    
    // Allocate blocks
    for (size_t i = 0; i < blocks_needed && i < 10; i++) {
        if (inode->blocks[i] == 0) {
            inode->blocks[i] = allocate_block(fs);
            if (inode->blocks[i] == -1) {
                return -1; // Out of space
            }
        }
        
        // Copy data to block
        size_t offset = i * BLOCK_SIZE;
        size_t copy_size = (size - offset > BLOCK_SIZE) ? BLOCK_SIZE : size - offset;
        
        memcpy(fs->data_blocks + inode->blocks[i] * BLOCK_SIZE,
               (char *)data + offset, copy_size);
    }
    
    inode->size = size;
    return 0;
}
```

---

## 🔬 LAB 5: SYNCHRONIZATION

### **Objective**: Implement synchronization primitives and solve concurrency problems

### **Lab 5A: Producer-Consumer with Semaphores**
```c
// producer_consumer.c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define BUFFER_SIZE 10
#define NUM_PRODUCERS 2
#define NUM_CONSUMERS 2

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty, full, mutex;

void *producer(void *arg) {
    int producer_id = *(int *)arg;
    
    for (int i = 0; i < 5; i++) {
        int item = rand() % 100;
        
        sem_wait(&empty);  // Wait for empty slot
        sem_wait(&mutex);  // Enter critical section
        
        buffer[in] = item;
        printf("Producer %d produced item %d at position %d\n", 
               producer_id, item, in);
        in = (in + 1) % BUFFER_SIZE;
        
        sem_post(&mutex);  // Exit critical section
        sem_post(&full);   // Signal full slot
        
        sleep(1);
    }
    return NULL;
}

void *consumer(void *arg) {
    int consumer_id = *(int *)arg;
    
    for (int i = 0; i < 5; i++) {
        sem_wait(&full);   // Wait for full slot
        sem_wait(&mutex);  // Enter critical section
        
        int item = buffer[out];
        printf("Consumer %d consumed item %d from position %d\n", 
               consumer_id, item, out);
        out = (out + 1) % BUFFER_SIZE;
        
        sem_post(&mutex);  // Exit critical section
        sem_post(&empty);  // Signal empty slot
        
        sleep(2);
    }
    return NULL;
}

int main() {
    pthread_t producers[NUM_PRODUCERS], consumers[NUM_CONSUMERS];
    int producer_ids[NUM_PRODUCERS], consumer_ids[NUM_CONSUMERS];
    
    // Initialize semaphores
    sem_init(&empty, 0, BUFFER_SIZE);
    sem_init(&full, 0, 0);
    sem_init(&mutex, 0, 1);
    
    // Create producer threads
    for (int i = 0; i < NUM_PRODUCERS; i++) {
        producer_ids[i] = i;
        pthread_create(&producers[i], NULL, producer, &producer_ids[i]);
    }
    
    // Create consumer threads
    for (int i = 0; i < NUM_CONSUMERS; i++) {
        consumer_ids[i] = i;
        pthread_create(&consumers[i], NULL, consumer, &consumer_ids[i]);
    }
    
    // Wait for all threads
    for (int i = 0; i < NUM_PRODUCERS; i++) {
        pthread_join(producers[i], NULL);
    }
    for (int i = 0; i < NUM_CONSUMERS; i++) {
        pthread_join(consumers[i], NULL);
    }
    
    // Cleanup
    sem_destroy(&empty);
    sem_destroy(&full);
    sem_destroy(&mutex);
    
    return 0;
}
```

### **Lab 5B: Deadlock Detection**
```c
// deadlock_detection.c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_PROCESSES 10
#define MAX_RESOURCES 10

struct deadlock_detector {
    int allocation[MAX_PROCESSES][MAX_RESOURCES];
    int request[MAX_PROCESSES][MAX_RESOURCES];
    int available[MAX_RESOURCES];
    int num_processes;
    int num_resources;
};

bool detect_deadlock(struct deadlock_detector *dd) {
    bool finish[MAX_PROCESSES];
    int work[MAX_RESOURCES];
    
    // Initialize work and finish arrays
    for (int i = 0; i < dd->num_resources; i++) {
        work[i] = dd->available[i];
    }
    
    for (int i = 0; i < dd->num_processes; i++) {
        finish[i] = false;
        
        // Check if process has no allocated resources
        bool has_resources = false;
        for (int j = 0; j < dd->num_resources; j++) {
            if (dd->allocation[i][j] != 0) {
                has_resources = true;
                break;
            }
        }
        if (!has_resources) {
            finish[i] = true;
        }
    }
    
    // Find processes that can complete
    bool found;
    do {
        found = false;
        for (int i = 0; i < dd->num_processes; i++) {
            if (!finish[i]) {
                bool can_complete = true;
                
                // Check if request can be satisfied
                for (int j = 0; j < dd->num_resources; j++) {
                    if (dd->request[i][j] > work[j]) {
                        can_complete = false;
                        break;
                    }
                }
                
                if (can_complete) {
                    // Process can complete, release its resources
                    for (int j = 0; j < dd->num_resources; j++) {
                        work[j] += dd->allocation[i][j];
                    }
                    finish[i] = true;
                    found = true;
                }
            }
        }
    } while (found);
    
    // Check if any process is not finished (deadlocked)
    for (int i = 0; i < dd->num_processes; i++) {
        if (!finish[i]) {
            printf("Deadlock detected involving process %d\n", i);
            return true;
        }
    }
    
    return false;
}
```

---

## 📊 LAB ASSESSMENT CRITERIA

### **Evaluation Rubric**
| Criteria | Excellent (4) | Good (3) | Fair (2) | Poor (1) |
|----------|---------------|----------|----------|----------|
| **Correctness** | Perfect implementation | Minor bugs | Some errors | Major issues |
| **Efficiency** | Optimal algorithms | Good performance | Acceptable | Inefficient |
| **Code Quality** | Clean, documented | Well-structured | Readable | Poor style |
| **Understanding** | Deep comprehension | Good grasp | Basic understanding | Confused |

### **Lab Submission Requirements**
- **Source Code**: Well-commented, compilable code
- **Documentation**: Design decisions and implementation notes
- **Test Results**: Comprehensive testing with sample inputs
- **Performance Analysis**: Timing and resource usage measurements
- **Demo Video**: Working demonstration of the implementation

---

**These practical labs provide hands-on experience with core OS concepts, preparing you for real-world systems programming challenges.**