# Module 3: Process Management

## Process Concepts

### What is a Process?
A process is a program in execution, consisting of:
- **Program Code** (text section)
- **Current Activity** (program counter, registers)
- **Stack** (temporary data, function parameters, local variables)
- **Data Section** (global variables)
- **Heap** (dynamically allocated memory)

### Process vs Program
```
Program:
├── Passive entity (code on disk)
├── Static instructions
└── No execution state

Process:
├── Active entity (program in execution)
├── Dynamic execution
└── Has execution state and resources
```

## Process States

### Basic Process States
```
NEW → READY → RUNNING → TERMINATED
       ↑         ↓
       ←── WAITING ←──
```

1. **NEW**: Process being created
2. **READY**: Process waiting to be assigned to CPU
3. **RUNNING**: Instructions being executed
4. **WAITING**: Process waiting for I/O or event
5. **TERMINATED**: Process finished execution

### Extended Process States
```
NEW → READY → RUNNING → TERMINATED
       ↑  ↓      ↓
       READY    WAITING
      SUSPENDED SUSPENDED
```

## Process Control Block (PCB)
Data structure containing process information:

```c
struct PCB {
    int process_id;           // Process ID
    int process_state;        // Current state
    int program_counter;      // Next instruction address
    int cpu_registers[32];    // CPU register values
    int cpu_scheduling_info;  // Priority, scheduling queue
    int memory_management;    // Base/limit registers, page tables
    int accounting_info;      // CPU time used, time limits
    int io_status_info;       // List of I/O devices, open files
};
```

## Process Creation

### Process Creation Methods
1. **System Initialization**
2. **User Request** (double-click, command line)
3. **Batch Job Initiation**
4. **Process Spawning** (fork() system call)

### UNIX Process Creation
```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;
    
    pid = fork();  // Create new process
    
    if (pid == 0) {
        // Child process
        printf("Child: PID = %d, Parent PID = %d\n", 
               getpid(), getppid());
        execl("/bin/ls", "ls", "-l", NULL);  // Replace process image
    } else if (pid > 0) {
        // Parent process
        printf("Parent: PID = %d, Child PID = %d\n", 
               getpid(), pid);
        wait(NULL);  // Wait for child to complete
    } else {
        // Fork failed
        perror("fork failed");
    }
    
    return 0;
}
```

### Windows Process Creation
```c
#include <windows.h>
#include <stdio.h>

int main() {
    STARTUPINFO si;
    PROCESS_INFORMATION pi;
    
    ZeroMemory(&si, sizeof(si));
    si.cb = sizeof(si);
    ZeroMemory(&pi, sizeof(pi));
    
    // Create new process
    if (CreateProcess(NULL, "notepad.exe", NULL, NULL, FALSE, 
                     0, NULL, NULL, &si, &pi)) {
        printf("Process created successfully\n");
        
        // Wait for process to complete
        WaitForSingleObject(pi.hProcess, INFINITE);
        
        // Close handles
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    } else {
        printf("CreateProcess failed\n");
    }
    
    return 0;
}
```

## Process Termination

### Normal Termination
- Process completes execution
- exit() system call
- Return from main()

### Abnormal Termination
- Process killed by another process
- Fatal error (segmentation fault)
- User intervention (Ctrl+C)

### Process Termination Steps
1. Deallocate process resources
2. Update accounting information
3. Remove process from system tables
4. Return exit status to parent

## Inter-Process Communication (IPC)

### Why IPC?
- **Information Sharing**: Multiple processes access same data
- **Computation Speedup**: Parallel processing
- **Modularity**: Divide system into separate processes
- **Convenience**: User multitasking

### IPC Models

#### 1. Shared Memory
```c
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdio.h>

int main() {
    key_t key = ftok("shmfile", 65);
    int shmid = shmget(key, 1024, 0666|IPC_CREAT);
    char *str = (char*) shmat(shmid, (void*)0, 0);
    
    printf("Write Data: ");
    gets(str);
    
    printf("Data written in memory: %s\n", str);
    shmdt(str);  // Detach shared memory
    
    return 0;
}
```

#### 2. Message Passing
```c
#include <sys/ipc.h>
#include <sys/msg.h>
#include <stdio.h>

struct message {
    long msg_type;
    char msg_text[100];
};

int main() {
    key_t key = ftok("progfile", 65);
    int msgid = msgget(key, 0666 | IPC_CREAT);
    struct message msg;
    
    msg.msg_type = 1;
    printf("Write Data: ");
    gets(msg.msg_text);
    
    msgsnd(msgid, &msg, sizeof(msg), 0);
    printf("Data sent is: %s\n", msg.msg_text);
    
    return 0;
}
```

### IPC Mechanisms Comparison
| Method | Speed | Complexity | Synchronization |
|--------|-------|------------|----------------|
| Shared Memory | Fast | Medium | Manual |
| Message Passing | Slower | Low | Automatic |
| Pipes | Medium | Low | Automatic |
| Sockets | Slow | High | Manual |

## Process Scheduling Queues

### Job Queue
All processes in the system

### Ready Queue
Processes ready and waiting to execute

### Device Queues
Processes waiting for I/O devices

### Queue Implementation
```c
struct queue_node {
    struct PCB *pcb;
    struct queue_node *next;
};

struct process_queue {
    struct queue_node *front;
    struct queue_node *rear;
    int count;
};

void enqueue(struct process_queue *q, struct PCB *process) {
    struct queue_node *new_node = malloc(sizeof(struct queue_node));
    new_node->pcb = process;
    new_node->next = NULL;
    
    if (q->rear == NULL) {
        q->front = q->rear = new_node;
    } else {
        q->rear->next = new_node;
        q->rear = new_node;
    }
    q->count++;
}

struct PCB* dequeue(struct process_queue *q) {
    if (q->front == NULL) return NULL;
    
    struct queue_node *temp = q->front;
    struct PCB *process = temp->pcb;
    
    q->front = q->front->next;
    if (q->front == NULL) q->rear = NULL;
    
    free(temp);
    q->count--;
    return process;
}
```

## Context Switching

### What is Context Switching?
Saving the state of currently running process and loading the state of next process to run.

### Context Switch Steps
1. **Save Context**: Save CPU registers, program counter, stack pointer
2. **Update PCB**: Update process state, accounting information
3. **Move to Queue**: Place process in appropriate queue
4. **Select New Process**: Choose next process to run
5. **Load Context**: Restore new process state
6. **Resume Execution**: Continue new process execution

### Context Switch Overhead
```c
// Simplified context switch simulation
void context_switch(struct PCB *old_process, struct PCB *new_process) {
    // Save old process context
    save_registers(old_process->cpu_registers);
    old_process->program_counter = get_program_counter();
    old_process->stack_pointer = get_stack_pointer();
    
    // Load new process context
    load_registers(new_process->cpu_registers);
    set_program_counter(new_process->program_counter);
    set_stack_pointer(new_process->stack_pointer);
    
    // Update memory management
    switch_address_space(new_process->memory_management);
}
```

## Process Hierarchy

### UNIX Process Tree
```
init (PID 1)
├── kernel threads
├── system daemons
│   ├── sshd
│   ├── httpd
│   └── cron
└── user processes
    ├── shell
    │   ├── ls
    │   ├── grep
    │   └── sort
    └── applications
```

### Process Relationships
- **Parent Process**: Creates child processes
- **Child Process**: Created by parent process
- **Orphan Process**: Parent terminated before child
- **Zombie Process**: Child terminated but parent hasn't read exit status

## Practical Exercises

### Exercise 1: Process Creation
```c
// Create multiple child processes
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int i, n = 3;
    pid_t pid;
    
    for (i = 0; i < n; i++) {
        pid = fork();
        if (pid == 0) {
            printf("Child %d: PID = %d\n", i+1, getpid());
            sleep(2);
            exit(i+1);
        }
    }
    
    // Parent waits for all children
    for (i = 0; i < n; i++) {
        int status;
        pid_t child_pid = wait(&status);
        printf("Child %d terminated with status %d\n", 
               child_pid, WEXITSTATUS(status));
    }
    
    return 0;
}
```

### Exercise 2: IPC with Pipes
```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main() {
    int pipefd[2];
    pid_t pid;
    char write_msg[] = "Hello from parent";
    char read_msg[100];
    
    if (pipe(pipefd) == -1) {
        perror("pipe");
        return 1;
    }
    
    pid = fork();
    
    if (pid == 0) {
        // Child process - reader
        close(pipefd[1]);  // Close write end
        read(pipefd[0], read_msg, sizeof(read_msg));
        printf("Child received: %s\n", read_msg);
        close(pipefd[0]);
    } else {
        // Parent process - writer
        close(pipefd[0]);  // Close read end
        write(pipefd[1], write_msg, strlen(write_msg) + 1);
        close(pipefd[1]);
        wait(NULL);
    }
    
    return 0;
}
```

## Lab Assignment
1. **Process Monitor**: Write a program to display running processes
2. **Process Tree**: Create a program showing parent-child relationships
3. **IPC Implementation**: Implement shared memory communication
4. **Process Synchronization**: Use semaphores for process coordination

## Quiz Questions
1. What is the difference between a process and a program?
2. Explain the five-state process model
3. What information is stored in a Process Control Block?
4. Compare shared memory and message passing IPC
5. What causes context switching overhead?

## Next Module
Module 4: Threading and Concurrency