# Module 2: System Architecture

## Computer System Organization

### Basic Computer Architecture
```
CPU ←→ Memory ←→ I/O Devices
 ↑        ↑         ↑
 └────────┼─────────┘
      System Bus
```

### CPU Components
```c
struct cpu {
    int registers[16];        // General purpose registers
    int program_counter;      // PC register
    int stack_pointer;        // SP register
    int flags;               // Status flags
    int instruction_register; // Current instruction
};
```

### Instruction Execution Cycle
```c
void cpu_cycle() {
    while (running) {
        // 1. Fetch
        instruction = memory[program_counter];
        
        // 2. Decode
        opcode = decode_instruction(instruction);
        
        // 3. Execute
        result = execute_instruction(opcode);
        
        // 4. Store
        store_result(result);
        
        // 5. Update PC
        program_counter++;
    }
}
```

## Memory Hierarchy

### Cache Memory
```c
struct cache_line {
    int valid;
    int tag;
    int data[16];
    int dirty;
};

int cache_lookup(int address) {
    int index = (address >> 6) & 0x3FF;
    int tag = address >> 16;
    
    if (cache[index].valid && cache[index].tag == tag) {
        return cache[index].data[address & 0xF]; // Hit
    }
    return load_from_memory(address); // Miss
}
```

## Interrupt Handling

### Interrupt Processing
```c
void handle_interrupt(int interrupt_number) {
    save_registers();
    call_interrupt_handler(interrupt_number);
    restore_registers();
    enable_interrupts();
}
```

## I/O Systems

### DMA Implementation
```c
struct dma_controller {
    int source_address;
    int destination_address;
    int transfer_count;
    int control_register;
};

void setup_dma_transfer(int source, int dest, int count) {
    dma.source_address = source;
    dma.destination_address = dest;
    dma.transfer_count = count;
    dma.control_register = DMA_ENABLE;
}
```

## Multi-core Architecture

### SMP System
```c
struct smp_system {
    struct cpu cores[8];
    struct shared_memory memory;
    struct cache_coherency coherency;
};
```

## Boot Process

### Boot Sequence
```c
void boot_sequence() {
    hardware_self_test();
    init_cpu();
    init_memory_controller();
    load_boot_loader();
    jump_to_kernel();
}
```

## Lab Exercises

### Exercise 1: CPU Simulator
```c
struct simple_cpu {
    int registers[8];
    int memory[1024];
    int pc;
};

void execute_instruction(struct simple_cpu *cpu, int instruction) {
    int opcode = (instruction >> 24) & 0xFF;
    switch (opcode) {
        case LOAD: /* implementation */ break;
        case STORE: /* implementation */ break;
        case ADD: /* implementation */ break;
    }
}
```

## Next Module
Module 3: Process Management