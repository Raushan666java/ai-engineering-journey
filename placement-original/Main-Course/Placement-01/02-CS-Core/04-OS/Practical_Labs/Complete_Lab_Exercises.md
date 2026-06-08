# Complete OS Lab Exercises

## Lab Environment Setup
- Linux VM (Ubuntu 20.04 LTS recommended)
- GCC compiler with debugging tools
- QEMU for kernel development
- Git for version control

## Module 1 Labs: OS Introduction

### Lab 1.1: System Call Tracing
**Objective**: Understand system call interface
**Tools**: strace, ltrace
**Duration**: 45 minutes

```bash
# Trace system calls for basic commands
strace ls -l
strace cat /etc/passwd
strace cp file1 file2

# Analyze output and identify:
# - File operations
# - Memory allocation
# - Process creation
```

### Lab 1.2: Kernel Module Programming
**Objective**: Create basic kernel module
**Duration**: 60 minutes

```c
// hello_module.c
#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>

static int __init hello_init(void) {
    printk(KERN_INFO "Hello from kernel!\n");
    return 0;
}

static void __exit hello_exit(void) {
    printk(KERN_INFO "Goodbye from kernel!\n");
}

module_init(hello_init);
module_exit(hello_exit);
MODULE_LICENSE("GPL");
```

## Module 2 Labs: System Architecture

### Lab 2.1: CPU Information Analysis
```c
// cpu_info.c - Extract CPU information
#include <stdio.h>
#include <cpuid.h>

void get_cpu_info() {
    unsigned int eax, ebx, ecx, edx;
    
    __cpuid(0, eax, ebx, ecx, edx);
    printf("CPU Vendor: %.4s%.4s%.4s\n", 
           (char*)&ebx, (char*)&edx, (char*)&ecx);
    
    __cpuid(1, eax, ebx, ecx, edx);
    printf("Family: %d, Model: %d, Stepping: %d\n",
           (eax >> 8) & 0xF, (eax >> 4) & 0xF, eax & 0xF);
}
```

### Lab 2.2: Memory Hierarchy Performance
```c
// memory_benchmark.c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

double measure_memory_latency(size_t size) {
    char *buffer = malloc(size);
    clock_t start = clock();
    
    for (int i = 0; i < 1000000; i++) {
        volatile char data = buffer[rand() % size];
    }
    
    clock_t end = clock();
    free(buffer);
    
    return ((double)(end - start)) / CLOCKS_PER_SEC;
}
```

## Module 3 Labs: Process Management

### Lab 3.1: Process Creation and Control
```c
// process_manager.c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        // Child process
        printf("Child PID: %d\n", getpid());
        execl("/bin/ls", "ls", "-l", NULL);
    } else if (pid > 0) {
        // Parent process
        int status;
        wait(&status);
        printf("Child exited with status: %d\n", WEXITSTATUS(status));
    }
    
    return 0;
}
```

### Lab 3.2: Inter-Process Communication
```c
// shared_memory.c
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdio.h>

int main() {
    key_t key = ftok("shmfile", 65);
    int shmid = shmget(key, 1024, 0666|IPC_CREAT);
    
    char *str = (char*) shmat(shmid, NULL, 0);
    sprintf(str, "Hello from shared memory!");
    
    printf("Data written: %s\n", str);
    shmdt(str);
    
    return 0;
}
```

## Module 4 Labs: Threading and Concurrency

### Lab 4.1: Thread Creation and Management
```c
// thread_example.c
#include <pthread.h>
#include <stdio.h>

void* thread_function(void* arg) {
    int thread_id = *(int*)arg;
    printf("Thread %d executing\n", thread_id);
    return NULL;
}

int main() {
    pthread_t threads[5];
    int thread_ids[5];
    
    for (int i = 0; i < 5; i++) {
        thread_ids[i] = i;
        pthread_create(&threads[i], NULL, thread_function, &thread_ids[i]);
    }
    
    for (int i = 0; i < 5; i++) {
        pthread_join(threads[i], NULL);
    }
    
    return 0;
}
```

### Lab 4.2: Producer-Consumer Implementation
```c
// producer_consumer.c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0, out = 0;
sem_t empty, full, mutex;

void* producer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&empty);
        sem_wait(&mutex);
        
        buffer[in] = i;
        printf("Produced: %d\n", i);
        in = (in + 1) % BUFFER_SIZE;
        
        sem_post(&mutex);
        sem_post(&full);
    }
    return NULL;
}

void* consumer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&full);
        sem_wait(&mutex);
        
        int item = buffer[out];
        printf("Consumed: %d\n", item);
        out = (out + 1) % BUFFER_SIZE;
        
        sem_post(&mutex);
        sem_post(&empty);
    }
    return NULL;
}
```

## Module 5 Labs: CPU Scheduling

### Lab 5.1: Scheduling Algorithm Simulator
```c
// scheduler.c
#include <stdio.h>
#include <stdlib.h>

struct process {
    int pid;
    int arrival_time;
    int burst_time;
    int waiting_time;
    int turnaround_time;
};

void fcfs_scheduling(struct process proc[], int n) {
    proc[0].waiting_time = 0;
    
    for (int i = 1; i < n; i++) {
        proc[i].waiting_time = proc[i-1].waiting_time + proc[i-1].burst_time;
    }
    
    for (int i = 0; i < n; i++) {
        proc[i].turnaround_time = proc[i].waiting_time + proc[i].burst_time;
    }
}

void print_results(struct process proc[], int n) {
    printf("PID\tArrival\tBurst\tWaiting\tTurnaround\n");
    for (int i = 0; i < n; i++) {
        printf("%d\t%d\t%d\t%d\t%d\n", 
               proc[i].pid, proc[i].arrival_time, proc[i].burst_time,
               proc[i].waiting_time, proc[i].turnaround_time);
    }
}
```

### Lab 5.2: Round Robin Implementation
```c
// round_robin.c
void round_robin_scheduling(struct process proc[], int n, int quantum) {
    int remaining_time[n];
    int current_time = 0;
    
    for (int i = 0; i < n; i++) {
        remaining_time[i] = proc[i].burst_time;
    }
    
    while (1) {
        bool done = true;
        
        for (int i = 0; i < n; i++) {
            if (remaining_time[i] > 0) {
                done = false;
                
                if (remaining_time[i] > quantum) {
                    current_time += quantum;
                    remaining_time[i] -= quantum;
                } else {
                    current_time += remaining_time[i];
                    proc[i].turnaround_time = current_time;
                    remaining_time[i] = 0;
                }
            }
        }
        
        if (done) break;
    }
}
```

## Module 8 Labs: Memory Management

### Lab 8.1: Memory Allocator Implementation
```c
// memory_allocator.c
#include <stdio.h>
#include <stdlib.h>

#define HEAP_SIZE 1024

struct block {
    size_t size;
    int free;
    struct block *next;
};

static char heap[HEAP_SIZE];
static struct block *free_list = NULL;

void* my_malloc(size_t size) {
    struct block *current = free_list;
    
    while (current) {
        if (current->free && current->size >= size) {
            current->free = 0;
            return (char*)current + sizeof(struct block);
        }
        current = current->next;
    }
    
    return NULL;
}

void my_free(void *ptr) {
    if (!ptr) return;
    
    struct block *block = (struct block*)((char*)ptr - sizeof(struct block));
    block->free = 1;
    
    // Coalesce adjacent free blocks
    coalesce_free_blocks();
}
```

### Lab 8.2: Page Replacement Simulator
```c
// page_replacement.c
#include <stdio.h>
#include <stdbool.h>

#define MAX_FRAMES 4
#define MAX_PAGES 20

int fifo_page_replacement(int pages[], int n, int frames) {
    int frame_array[MAX_FRAMES];
    int page_faults = 0;
    int front = 0;
    
    for (int i = 0; i < frames; i++) {
        frame_array[i] = -1;
    }
    
    for (int i = 0; i < n; i++) {
        bool found = false;
        
        // Check if page is already in frame
        for (int j = 0; j < frames; j++) {
            if (frame_array[j] == pages[i]) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            frame_array[front] = pages[i];
            front = (front + 1) % frames;
            page_faults++;
        }
    }
    
    return page_faults;
}
```

## Module 10 Labs: File Systems

### Lab 10.1: Simple File System Implementation
```c
// simple_fs.c
#include <stdio.h>
#include <string.h>

#define MAX_FILES 100
#define BLOCK_SIZE 512

struct inode {
    char filename[32];
    int size;
    int blocks[10];
    int in_use;
};

struct superblock {
    int total_blocks;
    int free_blocks;
    int total_inodes;
    int free_inodes;
};

struct filesystem {
    struct superblock sb;
    struct inode inodes[MAX_FILES];
    char *data_blocks;
};

int create_file(struct filesystem *fs, const char *filename) {
    for (int i = 0; i < MAX_FILES; i++) {
        if (!fs->inodes[i].in_use) {
            strcpy(fs->inodes[i].filename, filename);
            fs->inodes[i].size = 0;
            fs->inodes[i].in_use = 1;
            fs->sb.free_inodes--;
            return i;
        }
    }
    return -1;
}
```

## Module 15 Labs: Virtualization

### Lab 15.1: Simple Hypervisor Concepts
```c
// vm_simulator.c
#include <stdio.h>

struct vm_state {
    int registers[8];
    int memory[1024];
    int pc;
    int running;
};

struct hypervisor {
    struct vm_state vms[4];
    int current_vm;
    int num_vms;
};

void vm_execute_instruction(struct vm_state *vm) {
    int instruction = vm->memory[vm->pc];
    int opcode = (instruction >> 24) & 0xFF;
    
    switch (opcode) {
        case 0x01: // LOAD
            vm->registers[0] = vm->memory[(instruction & 0xFFFF)];
            break;
        case 0x02: // STORE
            vm->memory[(instruction & 0xFFFF)] = vm->registers[0];
            break;
        case 0x03: // ADD
            vm->registers[0] += vm->registers[1];
            break;
    }
    
    vm->pc++;
}
```

## Comprehensive Labs

### Final Project: Mini Operating System
```c
// mini_os.c - Basic OS kernel structure
#include <stdint.h>

// Boot loader entry point
void kernel_main() {
    // Initialize hardware
    init_gdt();
    init_idt();
    init_memory_manager();
    
    // Initialize kernel subsystems
    init_process_manager();
    init_scheduler();
    init_file_system();
    
    // Create init process
    create_init_process();
    
    // Start scheduling
    enable_interrupts();
    start_scheduler();
    
    // Kernel main loop
    while (1) {
        halt_cpu();
    }
}

// Process management
struct process* create_process(void (*entry_point)()) {
    struct process *proc = allocate_process();
    setup_process_memory(proc);
    setup_process_context(proc, entry_point);
    add_to_ready_queue(proc);
    return proc;
}

// Memory management
void* kmalloc(size_t size) {
    return buddy_allocate(size);
}

void kfree(void *ptr) {
    buddy_free(ptr);
}

// File system
int sys_open(const char *filename, int flags) {
    return vfs_open(filename, flags);
}

int sys_read(int fd, void *buffer, size_t count) {
    return vfs_read(fd, buffer, count);
}
```

## Lab Assessment Criteria

### Technical Implementation (60%)
- **Correctness**: Code compiles and runs correctly
- **Completeness**: All required features implemented
- **Efficiency**: Optimal algorithms and data structures
- **Error Handling**: Proper error checking and recovery

### Documentation (25%)
- **Code Comments**: Clear inline documentation
- **Design Document**: Architecture and design decisions
- **User Manual**: How to build and run the code
- **Test Results**: Comprehensive testing documentation

### Innovation (15%)
- **Creative Solutions**: Novel approaches to problems
- **Optimization**: Performance improvements
- **Additional Features**: Beyond minimum requirements
- **Research Integration**: Use of advanced concepts

## Submission Requirements
- Source code with Makefile
- Documentation in Markdown format
- Test cases and results
- Demo video (for final project)
- Git repository with commit history