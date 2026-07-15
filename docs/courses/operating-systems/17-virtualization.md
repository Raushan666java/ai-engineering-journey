# Chapter 17: Virtualization

**<< [Security](./16-security.md)** | [**Next: Case Studies**](./18-case-studies.md) >>

---

## Learning Objectives

- Define virtualization and distinguish it from emulation and paravirtualization
- Explain hypervisor types: Type 1 (bare-metal) vs Type 2 (hosted) with architecture diagrams
- Describe hardware-assisted virtualization (Intel VT-x, AMD-V) with VM-entry/VM-exit flow
- Contrast containers vs virtual machines in terms of isolation, overhead, and use cases
- Explain paravirtualization and its performance benefits over full virtualization
- Understand memory virtualization: shadow page tables vs nested paging (EPT/NPT)
- Describe I/O virtualization methods: emulated, paravirtualized (virtio), passthrough (SR-IOV)
- Analyze the Linux KVM architecture and Docker container model
- Identify real-world applications: VMware ESXi, Xen, Hyper-V, Firecracker
- Evaluate virtualization trade-offs: performance, isolation, resource overhead, security

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/17-virtualization/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/17-virtualization/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/17-virtualization/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/17-virtualization/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/17-virtualization/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/17-virtualization/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Virtualization** | Abstracting physical hardware into virtual resources; multiple VMs per host |
| **Hypervisor Types** | Type 1 (bare-metal: ESXi, Hyper-V) vs Type 2 (hosted: VirtualBox, Workstation) |
| **CPU Virt.** | Hardware-assisted via Intel VT-x/AMD-V; trap-and-emulate; VMX root/non-root modes |
| **Memory Virt.** | Nested page tables (EPT, NPT); shadow page tables; 2D page walk |
| **I/O Virt.** | Pass-through (VT-d, SR-IOV), paravirtualized (virtio), emulated (QEMU device models) |
| **Containers** | OS-level virtualization: share kernel, isolate via namespaces + cgroups |
| **Para vs Full** | Modified guest OS for hypercalls vs unmodified guest with binary translation/hardware assist |
| **Interview Corner** | VT-x vs AMD-V, nested virtualization, overcommitment risks, VM escape |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Virtualization Concept] --> B[Hypervisor Types]
    B --> C[CPU Virtualization]
    B --> D[Memory Virtualization]
    B --> E[I/O Virtualization]
    E --> F[Containerization]
    C --> G[Full vs Para vs HW-assisted]
    D --> H[Nested Page Tables vs Shadow PT]
    F --> I[Docker & Firecracker]
    G --> J[Real Systems: KVM, Xen, ESXi, Hyper-V]
    J --> K[Interview Corner]
    K --> L[Summary & Exercises]
</div>

---

# 1. Virtualization → Definition & Core Concepts

## 1.1 What is Virtualization?

**Virtualization** is the technique of creating a virtual (rather than physical) version of a computing resource → CPU, memory, storage, network → by inserting a software abstraction layer (the **hypervisor** or **Virtual Machine Monitor, VMM**) between hardware and the operating system. This enables multiple isolated operating systems (guest OSes) to run concurrently on a single physical machine.

### Real-World Analogy: Office Building Tenants


Think of a physical server as an **office building**. The hypervisor is the **building manager** who divides the building into separate **office suites** (VMs). Each tenant (guest OS) gets:

- Their own **keys** (CPU registers, page tables)
- Their own **locked rooms** (memory regions → cannot access other suites)
- Their own **mailbox and phone line** (virtualized I/O devices)
- The **illusion** they have the entire building to themselves

If tenants in Suite 201 try to open Suite 202's door, the **building manager (hypervisor)** intercepts them → analogous to a **VM exit** when a guest tries to access hardware it shouldn't.

An **apartment building** = Type 1 hypervisor (manager owns the building). A **hotel** = Type 2 hypervisor (hotel management = host OS, rents rooms = VMs as guests).

### Formal Definition


```
Virtualization satisfies three properties (Popek & Goldberg, 1974):

  [Fidelity]  → Software running under the VMM behaves identically
                 to running on bare hardware (except timing)
  [Safety]    → VMM has complete control of hardware resources
  [Efficiency]→ Most guest instructions execute directly without VMM intervention
```

### Key Terminology


| Term | Definition |
|------|------------|
| **Hypervisor / VMM** | Software layer that creates, runs, and manages VMs |
| **Guest OS** | Operating system running inside a VM (could be different from host) |
| **Host** | Physical machine that runs the hypervisor |
| **VM Exit** | Transition from guest mode to hypervisor mode (traps to VMM) |
| **VM Entry** | Transition from hypervisor back to guest mode (resume guest) |
| **Virtual CPU (vCPU)** | Virtual processor presented to a guest OS |
| **Domain 0 (Dom0)** | Privileged VM in Xen that manages other VMs (DomU) |

## 1.2 Emulation vs Virtualization vs Paravirtualization

These three approaches form a spectrum from pure software simulation to near-native hardware-assisted execution.

| Approach | Technique | Performance | Guest Modification | Example |
|----------|-----------|-------------|-------------------|---------|
| **Emulation** | Software mimics entire hardware ISA | Very slow (1-10% native) | None | QEMU (no KVM), Bochs, DOSBox |
| **Full Virtualization** | Unmodified guest; binary translation or HW assist | ~80-95% native | None | VMware ESXi, KVM + VT-x |
| **Paravirtualization** | Guest OS is modified to call hypervisor directly | ~95-98% native | Required | Xen PV, virtio drivers |
| **Hardware-assisted** | CPU extensions handle sensitive instructions natively | ~95-99% native | None | KVM, Hyper-V, VMware 6+ |

### Why These Differences Matter


```
Emulation:
  Guest Code → CPU Emulator (decode every instr) → Slow
  [Every instruction interpreted in software → 100x-10000x slowdown]

Full Virtualization:
  Guest Code → CPU (most instr run directly) → Hypervisor on sensitive instr → Guest
  [Sensitive instructions trap to VMM; non-sensitive run at native speed]

Paravirtualization:
  Guest Code (modified) → Explicit hypercall → Hypervisor
  [No traps for known-sensitive operations → conscious cooperation]
```

## 1.3 Popek & Goldberg Virtualization Requirements

Popek and Goldberg (1974) formalized the necessary CPU properties for efficient virtualization. A CPU instruction set is **classically virtualizable** if:

1. **Privileged instructions** → trap when executed in user mode
2. **Sensitive instructions** → alter or depend on hardware state
3. **All sensitive instructions are a subset of privileged instructions** (the critical condition)

### The x86 Problem


Older x86 CPUs FAILED the Popek & Goldberg criterion because several sensitive instructions (e.g., `popf`, `sgdt`, `sldt`, `smsw`) did NOT trap when executed in a lower privilege ring. They **silently succeeded** → the guest could read or modify real hardware state without the hypervisor knowing.

```
popf instruction (pop flags):
  - In Ring 0: modifies EFLAGS.IF (interrupt flag) → normal
  - In Ring 3: silently IGNORES the IF change → no trap!
  - Result: Guest OS thinks it disabled interrupts, but actually didn't
           → No hypervisor interception → Race condition in guest kernel
```

### Solutions to the x86 Problem


| Era | Solution | How It Works |
|-----|----------|-------------|
| Pre-2005 | **Binary Translation** (VMware) | Rewrite sensitive instructions on-the-fly: `popf` → trap+emulate sequence |
| 2005+ | **Intel VT-x / AMD-V** | New CPU modes where ALL sensitive instructions automatically VM-exit |
| Xen approach | **Paravirtualization** | Modify guest to never use non-virtualizable instructions; use hypercalls |

## 1.4 Steps to Create and Run a Virtual Machine

### Step-by-Step Process


```
Step 1:  Hypervisor initializes and allocates memory pool
Step 2:  Hypervisor creates VM control structure (VMCS on Intel / VMCB on AMD)
Step 3:  Hypervisor allocates guest physical memory (from host physical)
Step 4:  Hypervisor loads guest firmware/kernel into guest memory
Step 5:  Hypervisor sets up virtual devices (emulated or paravirt)
Step 6:  Hypervisor issues VM-entry instruction (VMLAUNCH/VMRESUME on Intel)
Step 7:  Guest OS begins execution in VMX non-root mode
Step 8:  Guest executes normally until a VM-exit event occurs:
         - Sensitive instruction (IN, OUT, HLT, MOV to CR3)
         - I/O access (port or MMIO)
         - External interrupt
         - Page fault requiring hypervisor intervention
Step 9:  CPU automatically saves guest state, loads host state (VM-exit)
Step 10: Hypervisor handles the exit reason, emulates if needed
Step 11: Hypervisor issues VM-entry to resume guest
Step 12: Repeat Steps 8-11 for the lifetime of the VM
```

### Pseudocode: Simple VMM Run Loop


```
FUNCTION SimpleVMMRunLoop(vm):
    // Assume VM is already created with memory and vCPUs
    
    WHTRUE:
        FOR each vCPU in vm.vcpus:
            exitReason = VMLAUNCH(vCPU)        // Enter guest mode
            
            SWITCH exitReason:
                CASE EXIT_IO_IN:
                    port = vCPU.exitQualification.port
                    data = EmulatePortIn(port)
                    vCPU.registers[RAX] = data
                    
                CASE EXIT_IO_OUT:
                    port = vCPU.exitQualification.port
                    data = vCPU.registers[RAX] & 0xFF
                    EmulatePortOut(port, data)
                    
                CASE EXIT_CPUID:
                    HandleCPUID(vCPU)            // Mask features, return emulated
                    
                CASE EXIT_HLT:
                    vCPU.state = HALTED
                    WaitForInterrupt(vCPU)
                    
                CASE EXIT_EPT_VIOLATION:
                    gpa = vCPU.exitQualification.gpa
                    HandleEptViolation(vm, gpa)   // Map or fault
                    
                CASE EXIT_SHUTDOWN:
                    ShutdownVM(vm)
                    RETURN
                    
                CASE EXIT_MSR_READ:
                    msr = vCPU.exitQualification.msr
                    vCPU.registers[RAX:RDX] = EmulateMsrRead(msr)
                    
                CASE EXIT_MSR_WRITE:
                    msr = vCPU.exitQualification.msr
                    value = (vCPU.registers[RDX] << 32) | vCPU.registers[RAX]
                    EmulateMsrWrite(msr, value)
                    
    END WHILE
END FUNCTION
```

### Dry Run Trace: VM Exit Handling


Scenario: Guest OS executes `IN` instruction (port I/O read) to read from keyboard controller.

| Step | Component | Action | State Change |
|------|-----------|--------|-------------|
| 1 | Guest OS | Executes `in al, 0x60` | RIP points to next instruction; RAX will contain result |
| 2 | CPU (VT-x) | Detects I/O access in VMX non-root mode | Triggers VM-exit; saves guest RIP, RSP, RAX to VMCS |
| 3 | CPU (VT-x) | Loads host state from VMCS | Switches to VMX root mode; host RIP = VMM entry point |
| 4 | Hypervisor | Reads `exit_reason` from VMCS | exit_reason = 30 (EXIT_IO_IN) |
| 5 | Hypervisor | Reads `exit_qualification` from VMCS | port = 0x60, size = 1, direction = IN |
| 6 | Hypervisor | Calls `EmulatePortIn(0x60)` | Reads emulated keyboard buffer (returns 0x1C = Enter key scancode) |
| 7 | Hypervisor | Writes result to vCPU RAX in VMCS | vCPU.rax = 0x1C |
| 8 | CPU (VT-x) | Executes VMRESUME | Reloads guest state from VMCS |
| 9 | Guest OS | Continues execution; RAX = 0x1C | Guest sees keyboard scancode as if from real hardware |

### C++ Implementation: Minimal VMM (Conceptual)


```cpp
#include <iostream>
#include <cstdint>
#include <unordered_map>
#include <vector>

// Forward declarations
struct VMCS;    // Virtual Machine Control Structure (Intel)
struct vCPU;
struct VM;

// VM exit reasons (simplified)
enum VMExitReason : uint32_t {
    EXIT_IO_IN      = 30,
    EXIT_IO_OUT     = 31,
    EXIT_CPUID      = 10,
    EXIT_HLT        = 12,
    EXIT_EPT_VIOL   = 48,
    EXIT_MSR_READ   = 31,
    EXIT_MSR_WRITE  = 32,
    EXIT_SHUTDOWN   = 7
};

// x86 register file (simplified)
struct RegisterFile {
    uint64_t rax, rbx, rcx, rdx;
    uint64_t rsi, rdi, rbp, rsp;
    uint64_t r8,  r9,  r10, r11;
    uint64_t r12, r13, r14, r15;
    uint64_t rip, rflags;
};

// Exit qualification for I/O instructions
struct IOExitQual {
    uint16_t port;
    uint8_t  size;     // 1, 2, or 4 bytes
    bool     is_input; // true = IN, false = OUT
    bool     string;   // true = INS/OUTS
};

// Exit qualification for EPT violations
struct EPTViolationQual {
    uint64_t gpa;       // Guest Physical Address
    bool     read;      // Access was a read
    bool     write;     // Access was a write
    bool     execute;   // Access was an execute
};

// Virtual CPU
struct vCPU {
    int id;
    RegisterFile regs;
    VM* parent_vm;
    uint32_t exit_reason;
    uint64_t exit_qualification;
    bool halted;
    uint64_t vmcs_phys;  // Physical address of VMCS
    
    vCPU(int id, VM* vm) : id(id), parent_vm(vm), halted(false), exit_reason(0) {}
};

// Virtual Machine
struct VM {
    uint64_t vm_id;
    std::vector<vCPU*> vcpus;
    std::unordered_map<uint64_t, uint8_t> guest_phys_memory;  // GPA → data
    uint64_t mem_size;
    
    VM(uint64_t id, uint64_t mem) : vm_id(id), mem_size(mem) {}
    
    ~VM() {
        for (auto vcpu : vcpus) delete vcpu;
    }
};

// Emulated devices
struct EmulatedDevice {
    std::unordered_map<uint16_t, uint8_t> io_ports;
    
    EmulatedDevice() {
        // Keyboard controller (port 0x60)
        io_ports[0x60] = 0x1C;  // Enter key scancode
        // System timer (port 0x40)
        io_ports[0x40] = 0x00;
    }
    
    uint8_t portRead(uint16_t port) {
        if (io_ports.count(port)) return io_ports[port];
        return 0xFF;  // No device
    }
    
    void portWrite(uint16_t port, uint8_t data) {
        io_ports[port] = data;
    }
};

// Memory Manager
struct MemoryManager {
    std::unordered_map<uint64_t, uint64_t> gpa_to_hpa_map;  // GPA → HPA
    
    void mapPage(uint64_t gpa, uint64_t hpa) {
        gpa_to_hpa_map[gpa] = hpa;
    }
    
    uint64_t translateGPA(uint64_t gpa) {
        auto it = gpa_to_hpa_map.find(gpa & ~0xFFFULL);
        if (it != gpa_to_hpa_map.end()) {
            return (it->second) | (gpa & 0xFFFULL);
        }
        return UINT64_MAX;  // Not mapped → EPT violation
    }
};

// Hypervisor (VMM)
class Hypervisor {
private:
    std::unordered_map<uint64_t, VM*> vms;
    EmulatedDevice device;
    MemoryManager mem_mgr;
    uint64_t next_vm_id;
    
public:
    Hypervisor() : next_vm_id(1) {
        std::cout << "[VMM] Hypervisor initialized" << std::endl;
    }
    
    ~Hypervisor() {
        for (auto& [id, vm] : vms) delete vm;
    }
    
    // Step 1-2: Create VM with control structures
    VM* createVM(uint64_t memory_size) {
        uint64_t vm_id = next_vm_id++;
        VM* vm = new VM(vm_id, memory_size);
        
        // Step 3: Allocate guest physical memory
        for (uint64_t i = 0; i < memory_size; i += 4096) {
            uint64_t hpa = (uint64_t)new uint8_t[4096];  // Simulate physical allocation
            mem_mgr.mapPage(i, hpa);
        }
        
        vms[vm_id] = vm;
        std::cout << "[VMM] Created VM " << vm_id 
                  << " with " << memory_size << " bytes" << std::endl;
        return vm;
    }
    
    // Step 4: Load guest code into GPA space
    void loadGuestCode(VM* vm, uint64_t gpa, const std::vector<uint8_t>& code) {
        for (size_t i = 0; i < code.size(); i++) {
            vm->guest_phys_memory[gpa + i] = code[i];
        }
        std::cout << "[VMM] Loaded " << code.size() 
                  << " bytes of guest code at GPA 0x" << std::hex << gpa << std::endl;
    }
    
    // Step 5-6: Add vCPU and set initial state
    vCPU* createVCPU(VM* vm) {
        int vcpu_id = vm->vcpus.size();
        vCPU* vcpu = new vCPU(vcpu_id, vm);
        vcpu->regs.rip = 0x1000;  // Start execution at 0x1000
        vcpu->regs.rflags = 2;     // Reserved bit always set
        
        vm->vcpus.push_back(vcpu);
        std::cout << "[VMM] Created vCPU " << vcpu_id << " for VM " 
                  << vm->vm_id << std::endl;
        return vcpu;
    }
    
    // Step 7-11: Main run loop (handles VM exits)
    void runVM(VM* vm) {
        std::cout << "[VMM] Starting VM " << vm->vm_id << std::endl;
        
        bool running = true;
        uint64_t exit_count = 0;
        
        while (running) {
            for (auto vcpu : vm->vcpus) {
                if (vcpu->halted) continue;
                
                // Step 7: Simulate VM-entry (guest runs until sensitive instr)
                // In real HW: VMLAUNCH instruction
                uint32_t exit_reason = simulateGuestExecution(vcpu);
                vcpu->exit_reason = exit_reason;
                exit_count++;
                
                // Step 8-9: Handle VM-exit
                switch (exit_reason) {
                    case EXIT_IO_IN: {
                        auto qual = *reinterpret_cast<IOExitQual*>(&vcpu->exit_qualification);
                        uint8_t data = device.portRead(qual.port);
                        vcpu->regs.rax = (vcpu->regs.rax & ~0xFF) | data;
                        std::cout << "[VM-Exit] I/O IN  port=0x" << std::hex << qual.port 
                                  << " data=0x" << (int)data << std::endl;
                        break;
                    }
                    case EXIT_IO_OUT: {
                        auto qual = *reinterpret_cast<IOExitQual*>(&vcpu->exit_qualification);
                        uint8_t data = vcpu->regs.rax & 0xFF;
                        device.portWrite(qual.port, data);
                        std::cout << "[VM-Exit] I/O OUT port=0x" << std::hex << qual.port 
                                  << " data=0x" << (int)data << std::endl;
                        break;
                    }
                    case EXIT_CPUID: {
                        // Mask CPU features (hide VT-x from guest)
                        uint32_t leaf = vcpu->regs.rax & 0xFFFFFFFF;
                        uint32_t idx = vcpu->regs.rcx & 0xFFFFFFFF;
                        uint32_t eax, ebx, ecx, edx;
                        emulateCPUID(leaf, idx, &eax, &ebx, &ecx, &edx);
                        vcpu->regs.rax = (vcpu->regs.rax & ~0xFFFFFFFF) | eax;
                        vcpu->regs.rbx = (vcpu->regs.rbx & ~0xFFFFFFFF) | ebx;
                        vcpu->regs.rcx = (vcpu->regs.rcx & ~0xFFFFFFFF) | ecx;
                        vcpu->regs.rdx = (vcpu->regs.rdx & ~0xFFFFFFFF) | edx;
                        break;
                    }
                    case EXIT_HLT:
                        vcpu->halted = true;
                        std::cout << "[VM-Exit] HLT - vCPU " << vcpu->id << " halted" << std::endl;
                        break;
                    case EXIT_EPT_VIOL: {
                        auto qual = *reinterpret_cast<EPTViolationQual*>(&vcpu->exit_qualification);
                        std::cout << "[VM-Exit] EPT Violation GPA=0x" << std::hex << qual.gpa << std::endl;
                        handleEptViolation(vcpu, qual.gpa);
                        break;
                    }
                    case EXIT_SHUTDOWN:
                        running = false;
                        std::cout << "[VM-Exit] SHUTDOWN - VM terminating" << std::endl;
                        break;
                    default:
                        std::cout << "[VM-Exit] Unknown exit reason: " << exit_reason << std::endl;
                }
            }
            
            // Check if all vCPUs halted
            bool all_halted = true;
            for (auto vcpu : vm->vcpus) {
                if (!vcpu->halted) { all_halted = false; break; }
            }
            if (all_halted) running = false;
        }
        
        std::cout << "[VMM] VM " << vm->vm_id << " stopped after " 
                  << exit_count << " VM exits" << std::endl;
    }
    
private:
    // Simulate guest execution until next sensitive instruction
    uint32_t simulateGuestExecution(vCPU* vcpu) {
        // In real hardware, guest instructions execute natively
        // until a VM-exit condition is hit
        // This simulates one instruction at a time for demonstration
        
        VM* vm = vcpu->parent_vm;
        uint8_t* code_ptr = &vm->guest_phys_memory[vcpu->regs.rip];
        
        // Simplified instruction decoder
        uint8_t opcode = code_ptr[0];
        
        // IN instruction (opcode 0xE4 for imm8 port, 0xEC for DX port)
        if (opcode == 0xE4 || opcode == 0xEC) {
            IOExitQual qual;
            qual.is_input = true;
            qual.size = 1;
            qual.string = false;
            qual.port = (opcode == 0xE4) ? code_ptr[1] : (vcpu->regs.rdx & 0xFFFF);
            vcpu->exit_qualification = *reinterpret_cast<uint64_t*>(&qual);
            vcpu->regs.rip += (opcode == 0xE4) ? 2 : 1;
            return EXIT_IO_IN;
        }
        
        // OUT instruction (opcode 0xE6 for imm8, 0xEE for DX)
        if (opcode == 0xE6 || opcode == 0xEE) {
            IOExitQual qual;
            qual.is_input = false;
            qual.size = 1;
            qual.string = false;
            qual.port = (opcode == 0xE6) ? code_ptr[1] : (vcpu->regs.rdx & 0xFFFF);
            vcpu->exit_qualification = *reinterpret_cast<uint64_t*>(&qual);
            vcpu->regs.rip += (opcode == 0xE6) ? 2 : 1;
            return EXIT_IO_OUT;
        }
        
        // HLT instruction (opcode 0xF4)
        if (opcode == 0xF4) {
            return EXIT_HLT;
        }
        
        // CPUID instruction (opcode 0x0F 0xA2)
        if (opcode == 0x0F && code_ptr[1] == 0xA2) {
            vcpu->regs.rip += 2;
            return EXIT_CPUID;
        }
        
        // Normal instruction → in real HW this never returns to VMM
        // Skip past it for simulation
        vcpu->regs.rip += getInstructionLength(code_ptr);
        return 0;  // No exit → continue execution
    }
    
    uint32_t getInstructionLength(uint8_t* code) {
        // Simplified x86 instruction length decoder
        // In real CPU, this is microcode
        uint8_t op = code[0];
        if (op == 0x48) return 4;  // REX.W + MOV
        if ((op & 0xF0) == 0x40) return 3;  // INC/DEC reg
        if (op == 0x90) return 1;  // NOP
        if (op == 0xCC) return 1;  // INT3
        if ((op & 0xFE) == 0xB0) return 2;  // MOV reg, imm8
        if ((op & 0xFE) == 0xB8) return 5 + ((op & 1) * 4);  // MOV reg, imm32/64
        if (op == 0x89 || op == 0x8B) return 3;  // MOV reg, reg
        if (op == 0xEB) return 2;  // JMP short
        if (op == 0x74 || op == 0x75) return 2;  // Jcc short
        if (op == 0xE9) return 5;  // JMP near
        if (op == 0xC3) return 1;  // RET
        return 1;  // Default: assume 1 byte
    }
    
    void emulateCPUID(uint32_t leaf, uint32_t idx, 
                      uint32_t* eax, uint32_t* ebx, uint32_t* ecx, uint32_t* edx) {
        switch (leaf) {
            case 0:  // Vendor ID
                *eax = 1;
                *ebx = 0x756E6547;  // "Genu"
                *ecx = 0x6C65746E;  // "ntel"
                *edx = 0x49656E69;  // "ineI"
                break;
            case 1:  // Feature bits
                *eax = 0x000306C3;  // Model: Haswell
                *ebx = 0x00100800;
                *ecx = 0x7FFAFBBF;  // Feature flags
                *edx = 0xBFEBFBFF;
                // Clear VMX bit (bit 5 of ECX) → hide VT-x from guest
                *ecx &= ~(1 << 5);
                break;
            default:
                *eax = *ebx = *ecx = *edx = 0;
        }
    }
    
    void handleEptViolation(vCPU* vcpu, uint64_t gpa) {
        uint64_t hpa = mem_mgr.translateGPA(gpa);
        if (hpa == UINT64_MAX) {
            // Allocate new page
            uint64_t new_hpa = (uint64_t)new uint8_t[4096];
            memset((void*)new_hpa, 0, 4096);
            mem_mgr.mapPage(gpa & ~0xFFFULL, new_hpa);
            std::cout << "[EPT] Allocated new page for GPA 0x" 
                      << std::hex << (gpa & ~0xFFFULL) << std::endl;
        } else {
            std::cout << "[EPT] Resolved GPA 0x" << std::hex << gpa 
                      << " → HPA 0x" << hpa << std::endl;
        }
    }
};

// Main: Demonstrate the VMM
int main() {
    Hypervisor vmm;
    
    // Create VM
    VM* vm = vmm.createVM(64 * 1024);  // 64 KB memory
    
    // Create vCPU
    vCPU* cpu = vmm.createVCPU(vm);
    
    // Load minimal guest code:
    // mov al, 'H'; out 0xe9, al  (debug port output)
    // mov al, 'i'; out 0xe9, al
    // hlt
    std::vector<uint8_t> code = {
        0xB0, 0x48,             // mov al, 'H'
        0xE6, 0xE9,             // out 0xe9, al
        0xB0, 0x69,             // mov al, 'i'
        0xE6, 0xE9,             // out 0xe9, al
        0xF4                     // hlt
    };
    
    vmm.loadGuestCode(vm, 0x1000, code);
    
    // Run VM
    vmm.runVM(vm);
    
    return 0;
}
```

### Python Implementation: Simple VMM Simulator


```python
"""
Simple VMM (Virtual Machine Monitor) Simulator
Demonstrates the core concepts of virtualization: VM creation, context switching,
and handling VM exits for I/O operations and CPUID instructions.
"""

from dataclasses import dataclass, field
from enum import IntEnum, auto
from typing import Dict, List, Optional, Tuple
import struct


class VMExitReason(IntEnum):
    """Common VM exit reasons (simplified from Intel SDM)."""
    IO_IN = 30
    IO_OUT = 31
    CPUID = 10
    HLT = 12
    EPT_VIOLATION = 48
    MSR_READ = 31
    MSR_WRITE = 32
    SHUTDOWN = 7


@dataclass
class RegisterFile:
    """x86-64 register file for a vCPU."""
    rax: int = 0; rbx: int = 0; rcx: int = 0; rdx: int = 0
    rsi: int = 0; rdi: int = 0; rbp: int = 0; rsp: int = 0
    r8: int = 0;  r9: int = 0;  r10: int = 0; r11: int = 0
    r12: int = 0; r13: int = 0; r14: int = 0; r15: int = 0
    rip: int = 0; rflags: int = 2  # Reserved bit 1 always set


@dataclass
class IOExitQualification:
    """Qualification data for I/O VM-exits."""
    port: int = 0
    size: int = 1      # 1, 2, or 4 bytes
    is_input: bool = True
    is_string: bool = False


@dataclass
class EPTViolationQualification:
    """Qualification data for EPT violation exits."""
    gpa: int = 0
    read: bool = False
    write: bool = False
    execute: bool = False


class EmulatedDevice:
    """Simple emulated device with port-mapped I/O."""
    
    def __init__(self):
        self.io_ports: Dict[int, int] = {
            0x60: 0x1C,   # Keyboard: Enter key scancode
            0xE9: 0x00,   # Debug port
            0x3F8: 0x00,  # COM1 serial
        }
    
    def port_read(self, port: int) -> int:
        return self.io_ports.get(port, 0xFF)
    
    def port_write(self, port: int, data: int) -> None:
        self.io_ports[port] = data
        if port == 0xE9:
            print(f"[DEBUG PORT] '{chr(data)}' (0x{data:02x})")


class MemoryManager:
    """Manages GPA → HPA translations (simulates EPT/NPT)."""
    
    def __init__(self):
        self.gpa_to_hpa: Dict[int, int] = {}
        # Pre-allocate memory pool
        self.memory_pool: Dict[int, bytearray] = {}
    
    def alloc_page(self, gpa: int) -> int:
        """Allocate a physical page and map GPA to it."""
        if gpa in self.gpa_to_hpa:
            return self.gpa_to_hpa[gpa]
        
        page_num = len(self.memory_pool)
        hpa = page_num * 4096
        self.memory_pool[hpa] = bytearray(4096)
        self.gpa_to_hpa[gpa & ~0xFFF] = hpa
        return hpa | (gpa & 0xFFF)
    
    def resolve(self, gpa: int) -> Tuple[int, bytearray]:
        """Resolve GPA to (offset, memory_region)."""
        gpa_page = gpa & ~0xFFF
        if gpa_page not in self.gpa_to_hpa:
            self.alloc_page(gpa_page)
        hpa = self.gpa_to_hpa[gpa_page]
        mem = self.memory_pool[hpa]
        offset = gpa & 0xFFF
        return hpa | offset, mem
    
    def read_byte(self, gpa: int) -> int:
        _, mem = self.resolve(gpa)
        return mem[gpa & 0xFFF]
    
    def write_byte(self, gpa: int, data: int) -> None:
        _, mem = self.resolve(gpa)
        mem[gpa & 0xFFF] = data & 0xFF
    
    def load_code(self, gpa: int, code: List[int]) -> None:
        for i, byte in enumerate(code):
            self.write_byte(gpa + i, byte)


class VCPU:
    """Virtual CPU → represents a hardware thread inside a VM."""
    
    def __init__(self, vcpu_id: int, vm: 'VirtualMachine'):
        self.id = vcpu_id
        self.vm = vm
        self.regs = RegisterFile()
        self.regs.rip = 0x1000  # Default entry point
        self.halted = False
        self.exit_reason = 0
        self.exit_qual = 0
    
    def __repr__(self) -> str:
        return f"vCPU[{self.id}] RIP=0x{self.regs.rip:x} HALTED={self.halted}"


class VirtualMachine:
    """A virtual machine → isolated guest environment."""
    
    def __init__(self, vm_id: int, name: str, memory_size: int):
        self.vm_id = vm_id
        self.name = name
        self.memory_size = memory_size
        self.vcpus: List[VCPU] = []
        self.state = "CREATED"
    
    def add_vcpu(self) -> VCPU:
        vcpu = VCPU(len(self.vcpus), self)
        self.vcpus.append(vcpu)
        return vcpu
    
    def __repr__(self) -> str:
        return f"VM[{self.vm_id}] '{self.name}' {len(self.vcpus)} vCPUs {self.memory_size//1024}KB"


class Hypervisor:
    """
    Virtual Machine Monitor (VMM) → the core of virtualization.
    Manages VMs, handles VM exits, emulates devices, and controls hardware access.
    """
    
    def __init__(self):
        self.vms: Dict[int, VirtualMachine] = {}
        self.devices = EmulatedDevice()
        self.mem_mgr = MemoryManager()
        self.next_vm_id = 1
        self.total_exits = 0
        print("[VMM] Hypervisor initialized")
    
    def create_vm(self, name: str, memory_kb: int = 64) -> VirtualMachine:
        """Create a new virtual machine."""
        vm = VirtualMachine(self.next_vm_id, name, memory_kb * 1024)
        self.vms[self.next_vm_id] = vm
        self.next_vm_id += 1
        print(f"[VMM] Created VM '{name}' with {memory_kb} KB memory")
        return vm
    
    def load_guest_code(self, vm: VirtualMachine, gpa: int, code: List[int]) -> None:
        """Load binary code into guest physical memory."""
        self.mem_mgr.load_code(gpa, code)
        print(f"[VMM] Loaded {len(code)} bytes at GPA 0x{gpa:x}")
    
    def _simulate_instruction(self, vcpu: VCPU) -> Optional[VMExitReason]:
        """
        Decode and (partially) execute one instruction.
        In real hardware, instructions run natively in VMX non-root mode.
        Here we simulate to demonstrate VM exit conditions.
        """
        code_byte = self.mem_mgr.read_byte(vcpu.regs.rip)
        
        # I/O instructions → always cause VM-exit
        if code_byte == 0xE4:         # IN AL, imm8
            port = self.mem_mgr.read_byte(vcpu.regs.rip + 1)
            qual = IOExitQualification(port=port, size=1, is_input=True)
            vcpu.regs.rip += 2
            vcpu.exit_qual = qual
            return VMExitReason.IO_IN
            
        elif code_byte == 0xEC:       # IN AL, DX
            qual = IOExitQualification(port=vcpu.regs.rdx & 0xFFFF, 
                                        size=1, is_input=True)
            vcpu.regs.rip += 1
            vcpu.exit_qual = qual
            return VMExitReason.IO_IN
            
        elif code_byte == 0xE6:       # OUT imm8, AL
            port = self.mem_mgr.read_byte(vcpu.regs.rip + 1)
            qual = IOExitQualification(port=port, size=1, is_input=False)
            vcpu.regs.rip += 2
            vcpu.exit_qual = qual
            return VMExitReason.IO_OUT
            
        elif code_byte == 0xEE:       # OUT DX, AL
            qual = IOExitQualification(port=vcpu.regs.rdx & 0xFFFF,
                                        size=1, is_input=False)
            vcpu.regs.rip += 1
            vcpu.exit_qual = qual
            return VMExitReason.IO_OUT
        
        # CPUID → must be intercepted to hide virtualization features
        elif code_byte == 0x0F:
            next_byte = self.mem_mgr.read_byte(vcpu.regs.rip + 1)
            if next_byte == 0xA2:    # CPUID
                vcpu.regs.rip += 2
                return VMExitReason.CPUID
        
        # HLT → halt the vCPU until interrupt
        elif code_byte == 0xF4:       # HLT
            vcpu.regs.rip += 1
            return VMExitReason.HLT
        
        # Simple ALU and data movement (no exit → run natively)
        elif code_byte == 0xB0:       # MOV AL, imm8
            imm = self.mem_mgr.read_byte(vcpu.regs.rip + 1)
            vcpu.regs.rax = (vcpu.regs.rax & 0xFFFFFF00) | imm
            vcpu.regs.rip += 2
            
        elif code_byte == 0xB8:       # MOV EAX, imm32
            imm = 0
            for i in range(4):
                imm |= self.mem_mgr.read_byte(vcpu.regs.rip + 1 + i) << (i * 8)
            vcpu.regs.rax = imm
            vcpu.regs.rip += 5
            
        elif code_byte == 0x90:       # NOP
            vcpu.regs.rip += 1
            
        elif code_byte == 0xC3:       # RET
            vcpu.regs.rip += 1
            return VMExitReason.SHUTDOWN
            
        else:
            # Unknown or complex instruction → advance by 1 (simplified)
            print(f"  [WARN] Unhandled opcode 0x{code_byte:02x} at RIP=0x{vcpu.regs.rip:x}")
            vcpu.regs.rip += 1
        
        return None
    
    def _handle_cpuid(self, vcpu: VCPU) -> None:
        """Emulate CPUID instruction → mask VMX bit from guest."""
        leaf = vcpu.regs.rax & 0xFFFFFFFF
        
        # Standard CPUID leaves
        cpu_vendor = b"GenuineIntel"
        features_ecx = 0x7FFAFBBF
        features_edx = 0xBFEBFBFF
        
        # Mask VMX bit (bit 5 of ECX) → hide hypervisor from guest
        features_ecx &= ~(1 << 5)
        
        vcpu.regs.rax = 1              # Max leaf
        vcpu.regs.rbx = struct.unpack('<I', cpu_vendor[0:4])[0]
        vcpu.regs.rcx = struct.unpack('<I', cpu_vendor[8:12])[0]
        vcpu.regs.rdx = struct.unpack('<I', cpu_vendor[4:8])[0]
        
        if leaf == 1:
            vcpu.regs.rax = 0x000306C3   # Haswell model
            vcpu.regs.rcx = features_ecx
            vcpu.regs.rdx = features_edx
    
    def _handle_exit(self, vcpu: VCPU) -> None:
        """Handle a VM exit → the core of the VMM's work."""
        reason = vcpu.exit_reason
        self.total_exits += 1
        
        if reason == VMExitReason.IO_IN:
            qual: IOExitQualification = vcpu.exit_qual
            data = self.devices.port_read(qual.port)
            vcpu.regs.rax = (vcpu.regs.rax & ~0xFF) | data
            print(f"  [VM-Exit] I/O IN  port=0x{qual.port:04x} → 0x{data:02x}")
            
        elif reason == VMExitReason.IO_OUT:
            qual: IOExitQualification = vcpu.exit_qual
            data = vcpu.regs.rax & 0xFF
            self.devices.port_write(qual.port, data)
            print(f"  [VM-Exit] I/O OUT port=0x{qual.port:04x} ← 0x{data:02x}")
            
        elif reason == VMExitReason.CPUID:
            self._handle_cpuid(vcpu)
            print(f"  [VM-Exit] CPUID leaf=0x{vcpu.regs.rax:x}")
            
        elif reason == VMExitReason.HLT:
            vcpu.halted = True
            print(f"  [VM-Exit] HLT → vCPU[{vcpu.id}] halted")
            
        elif reason == VMExitReason.SHUTDOWN:
            print(f"  [VM-Exit] SHUTDOWN → VM terminating")
            vcpu.vm.state = "SHUTDOWN"
    
    def run_vm(self, vm: VirtualMachine, max_instructions: int = 100) -> None:
        """
        Main VM run loop.
        In real hardware: VMLAUNCH → guest runs natively → VM-exit → handle → VMRESUME
        """
        print(f"\n{'='*60}")
        print(f"[VMM] Starting VM '{vm.name}'")
        print(f"{'='*60}")
        
        vm.state = "RUNNING"
        instr_count = 0
        exit_count = 0
        
        while vm.state == "RUNNING" and instr_count < max_instructions:
            for vcpu in [v for v in vm.vcpus if not v.halted]:
                instr_count += 1
                
                # Step 7: Execute one guest instruction (simulated)
                reason = self._simulate_instruction(vcpu)
                
                if reason is not None:
                    # Step 8-10: VM-exit occurred → hypervisor handles it
                    vcpu.exit_reason = reason
                    self._handle_exit(vcpu)
                    exit_count += 1
                    
                    # Step 11: VM-entry would resume guest (automatic in loop)
                    
                    if vm.state == "SHUTDOWN":
                        break
        
        print(f"\n{'='*60}")
        print(f"[VMM] VM '{vm.name}' stopped")
        print(f"     Instructions executed: {instr_count}")
        print(f"     VM exits handled:      {exit_count}")
        print(f"{'='*60}\n")
    
    def print_stats(self) -> None:
        """Print hypervisor statistics."""
        print(f"\n[VMM STATS] Total VMs:  {len(self.vms)}")
        print(f"[VMM STATS] Total exits: {self.total_exits}")
        for vm_id, vm in self.vms.items():
            print(f"[VMM STATS]   VM {vm_id}: '{vm.name}' → {vm.state}")


# ============================================================
# Demonstration: Creating and running a VM
# ============================================================

def demo_basic_vm():
    """Demonstrate a basic VM that prints 'Hi' to the debug port."""
    vmm = Hypervisor()
    vm = vmm.create_vm("TestVM", memory_kb=64)
    vcpu = vm.add_vcpu()
    
    # Guest code: output "Hi" to debug port, then halt
    #   MOV AL, 'H'  ; 0xB0 0x48
    #   OUT 0xE9, AL ; 0xE6 0xE9
    #   MOV AL, 'i'  ; 0xB0 0x69
    #   OUT 0xE9, AL ; 0xE6 0xE9
    #   HLT          ; 0xF4
    code = [
        0xB0, 0x48,   # mov al, 'H'
        0xE6, 0xE9,   # out 0xE9, al (debug port)
        0xB0, 0x69,   # mov al, 'i'
        0xE6, 0xE9,   # out 0xE9, al
        0xF4          # hlt
    ]
    
    vmm.load_guest_code(vm, 0x1000, code)
    vmm.run_vm(vm)
    vmm.print_stats()


def demo_cpuid_masking():
    """Demonstrate CPUID masking to hide VT-x from guest."""
    vmm = Hypervisor()
    vm = vmm.create_vm("CPUID-Demo", memory_kb=64)
    vcpu = vm.add_vcpu()
    
    # Guest code: execute CPUID leaf=0, then leaf=1, then halt
    code = [
        0x31, 0xC0,   # xor eax, eax (leaf = 0)
        0x0F, 0xA2,   # cpuid
        0xB8, 0x01, 0x00, 0x00, 0x00,  # mov eax, 1
        0x0F, 0xA2,   # cpuid
        0xF4          # hlt
    ]
    
    vmm.load_guest_code(vm, 0x1000, code)
    vmm.run_vm(vm)
    
    print(f"After CPUID leaf=0: Vendor = 0x{vcpu.regs.rbx:08x}:0x{vcpu.regs.rdx:08x}:0x{vcpu.regs.rcx:08x}")
    print(f"After CPUID leaf=1: Features ECX = 0x{vcpu.regs.rcx:08x}")
    print(f"VMX bit (bit 5) is {'SET' if (vcpu.regs.rcx >> 5) & 1 else 'CLEAR'} → masked by VMM")


if __name__ == "__main__":
    print("=" * 60)
    print("VMM SIMULATOR → Virtualization Concepts Demo")
    print("=" * 60)
    
    demo_basic_vm()
    print("\n" + "=" * 60 + "\n")
    demo_cpuid_masking()
```

### Complexity Analysis


| Operation | Time Complexity | Space Complexity | WHY |
|-----------|----------------|-----------------|-----|
| VM creation | O(m) | O(n + m) | Must allocate `m` pages (O(m)); VMCS/VMCB allocated once (O(1)); page tables for `n` entries |
| VM entry (VMLAUNCH) | O(1) | O(1) | Hardware operation → loads guest state from VMCS, transitions mode |
| VM exit (hardware) | O(1) | O(1) | CPU saves guest state, loads host state → fixed microcode path |
| VM exit handling (I/O) | O(d) | O(1) | Dispatcher overhead is O(1); device emulation depends on device complexity `d` |
| VM exit handling (EPT violation) | O(log p) | O(p) | Page walk resolved by hardware; VMM may need to allocate page → tree lookup O(log p) for `p` pages |
| Shadow page table sync | O(n) | O(n) | Each guest PT modification (n entries) requires VM exit + hypervisor update |
| Nested page walk (EPT) | O(l) amortized | O(p) | 2D page walk: guest walks `l` levels, then EPT walks `l` levels → hardware cached in TLBs |
| Memory ballooning | O(1) | O(b) | Balloon driver allocates or frees `b` pages via hypercall |

### A&D: Virtualization Approaches


| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| **Full Virtualization** | No guest OS modification; runs legacy OSes (Windows XP, etc.); complete isolation | Higher overhead (trap-and-emulate or binary translation); slower I/O without hardware assist |
| **Paravirtualization** | Near-native performance (95-98%); simpler hypervisor code; lower VM-exit rate | Requires modified guest OS; cannot run Windows (unless HW assist also available); driver maintenance burden |
| **Hardware-assisted** | Best performance (95-99% native); no guest modification; simpler VMM | Hardware dependency (VT-x/AMD-V required); still some overhead (VM exits); complex CPU microcode |
| **Emulation** | Runs any architecture (ARM on x86); useful for development and cross-platform | Extremely slow (1-10% native); impractical for production; high CPU usage |

### Edge Cases in Virtualization


**1. VM Escape (CVE-2019-2446, CVE-2021-22555)**

The most severe virtualization vulnerability → a guest OS breaks out of the hypervisor to execute code on the host.

```
Attack Vectors:
  - Exploiting hypervisor bugs in VM exit handling
  - CVE-2021-22555: Netfilter heap overflow in Linux → host kernel compromise
  - CVE-2019-2446: Intel VT-x VMCS caching issue
  - Virtio driver vulnerabilities (buffer overflow in shared ring)
  
Mitigations:
  - Keep hypervisor updated (apply security patches)
  - Enable KVM hardening (seccomp, SELinux)
  - Use nested virtualization for extra isolation
  - Enable Intel CET (Control-flow Enforcement Technology)
  - Avoid assigning passthrough devices to untrusted VMs
```

**2. Resource Overcommitment**

Assigning more total virtual resources than physical resources available.

```
Memory Overcommit:
  Host: 32 GB physical
  VM1:  16 GB
  VM2:  16 GB
  VM3:  16 GB
  Total: 48 GB virtual → 32 GB physical → 150% overcommit

Risks:
  - Balloon driver contention (VMs fight for memory)
  - Swap death (host swaps excessively)
  - OOM killer termination of VMs or host processes
  - Performance collapse at high memory pressure
  
Solutions:
  - Memory ballooning (cooperative memory reclaim)
  - Transparent page sharing (KSM → Kernel Same-page Merging)
  - Hot-add memory (dynamically add memory to VMs)
  - Admission control (reserve minimum guarantees)
  
CPU Overcommit:
  Host:  4 physical cores (8 with HT)
  VM1:   4 vCPUs
  VM2:   4 vCPUs
  VM3:   4 vCPUs
  Total: 12 vCPUs → 8 logical cores → 150% overcommit

Risks:
  - CPU ready time (vCPU waits for physical CPU)
  - Scheduler overhead (context switching between vCPUs)
  - Cache thrashing (vCPUs competing for L2/L3)
  - Cost of VM exits increases with more vCPUs

Solutions:
  - Limit vCPU:pCPU ratio (typically 4:1 max)
  - Use CPU affinity (pin vCPUs to specific pCPUs)
  - Enable hyperthreading awareness
  - Monitor %ready and %co-stop metrics
```

**3. NUMA (Non-Uniform Memory Access) Awareness**

In multi-socket systems, memory access time depends on which socket the memory is on.

```
NUMA Node 0              NUMA Node 1
┌──────────────┐        ┌──────────────┐
│ CPU 0-3      │        │ CPU 4-7      │
│ Memory 16 GB │ Fast   │ Memory 16 GB │
│              │◄──────►│              │
└──────────────┘  Slow  └──────────────┘
   │                         │
   │ Local: ~100ns          │ Local: ~100ns
   │ Remote: ~180ns         │ Remote: ~180ns

VM with 4 vCPUs pinned to Node 0, but memory allocated on Node 1:
  → 80% performance penalty for memory accesses!

Best practice: pin VM vCPUs and memory to same NUMA node.
Use numactl to check:  numactl --hardware
Use virsh to pin:      virsh vcpupin <vm> <vcpu> <pCPU>
```

**4. Timekeeping in VMs**

Guest OS expects a monotonically increasing time source. Virtualization breaks this.

```
Problem:
  - Guest reads TSC (Time Stamp Counter)
  - VM exit occurs → guest paused
  - VM entry resumes → guest reads TSC again
  - TSC may go BACKWARDS (if migrated or on different pCPU)
  - Result: Kernel panic ("time went backwards")

Solutions:
  - Invariant TSC (hardware guarantees TSC monotonicity across pCPUs)
  - TSC offsetting (hypervisor writes offset to VMCS)
  - Paravirtualized clock (kvmclock, Xen timers)
  - HPET emulation (slow, accurate, but expensive)
```

**5. Live Migration**

Moving a running VM from one physical host to another with zero downtime.

```
Challenges:
  - Memory state: ~2-8 GB must be transferred while VM runs
  - Network state: TCP connections must survive IP change
  - Storage: Must be shared (NAS, SAN) or replicated
  - CPU features: Both hosts must support same feature set

Pre-copy Migration Algorithm:
  Step 1: Transfer all memory pages to target host
  Step 2: VM continues running on source; dirtied pages tracked
  Step 3: Iteratively transfer only dirty pages (convergence)
  Step 4: When dirty rate < threshold → stop VM
  Step 5: Transfer final CPU state and last dirty pages
  Step 6: Resume VM on target host
  Total downtime: typically 20-100ms for production workloads
```

---

# 2. Hypervisor Types → Type 1 vs Type 2

## 2.1 Definition and Architecture

A **hypervisor** (or **Virtual Machine Monitor, VMM**) is the software layer that abstracts physical hardware into virtual resources and manages multiple VMs. Hypervisors are classified into two types based on whether they run directly on hardware or on top of an operating system.

### Real-World Analogy: Apartment Building vs Hotel


**Type 1 Hypervisor → Apartment Building**

You (the hypervisor) **own** the entire building. You directly manage:
- Water and electricity (hardware resources)
- Who gets which apartment (VM allocation)
- Common areas (shared caches, memory bus)
- Security (no landlord above you)

**Type 2 Hypervisor → Hotel**

The hotel management company = **host OS**. You (the hypervisor) are just one **department** within the hotel:
- Hotel management controls the building (host OS controls hardware)
- You need approval for major changes (system calls to host OS)
- You compete with other departments for resources (other applications)
- If hotel management goes bankrupt (host OS crashes), all departments shut down

```
   Type 1 (Bare-Metal)            Type 2 (Hosted)
   ┌──────────────────┐           ┌──────────────────┐
   │  VM1  │  VM2     │           │  VM1  │  VM2     │
   │       │          │           │       │          │
   ├──────────────────┤           ├──────────────────┤
   │   Hypervisor     │           │   Hypervisor     │
   │   (ESXi, KVM)    │           │ (VirtualBox,     │
   │                  │           │  Workstation)    │
   ├──────────────────┤           ├──────────────────┤
   │   Hardware       │           │   Host OS        │
   │   (CPU, Mem, IO) │           │   (Linux, Win)   │
   └──────────────────┘           ├──────────────────┤
                                  │   Hardware       │
                                  └──────────────────┘
```

## 2.2 Type 1: Bare-Metal Hypervisor

The hypervisor INSTALLS DIRECTLY onto the hardware. It acts as a lightweight OS specifically designed to run VMs.

### Architecture Diagram


```
┌─────────────────────────────────────────────────────────────────┐
│                     VIRTUAL MACHINE 1                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Apache HTTPD │  │  PostgreSQL  │  │  SSH Daemon  │         │
│  │              │  │              │  │              │         │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤         │
│  │      Ubuntu 22.04 LTS Guest OS     │                       │
│  │      (Custom kernel, full OS)      │                       │
│  ├──────────────┬──────────────┬──────┴───────────             │
│  │ virtio-blk  │ virtio-net   │ vCPU x4         │             │
│  └──────────────┴──────────────┴─────────────────┘             │
│                                                                 │
│  VIRTUAL MACHINE 2                  VIRTUAL MACHINE 3          │
│  ┌──────────────────┐              ┌──────────────────┐       │
│  │ Windows Server   │              │ Rocky Linux 9    │       │
│  │ 2022             │              │ (Minimal)        │       │
│  │ MS SQL + IIS     │              │ Nginx + Node.js  │       │
│  └──────────────────┘              └──────────────────┘       │
├─────────────────────────────────────────────────────────────────┤
│                     HYPERVISOR LAYER                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ CPU Sched│  │ Mem Mgmt │  │ IO Stack │  │ VM Mgmt API   │  │
│  │ (SMP)    │  │ (SLAB)   │  │ (vSwitch)│  │ (REST/CLI)    │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│  │ Driver   │  │ Driver   │  │ Driver   │                     │
│  │ (NIC)    │  │ (HBA)    │  │ (GPU)    │                     │
│  └──────────┘  └──────────┘  └──────────┘                     │
├─────────────────────────────────────────────────────────────────┤
│                     PHYSICAL HARDWARE                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CPU  │ CPU  │ CPU  │ CPU  │  RAM  │ NIC │ HBA │ GPU    │   │
│  │ x86  │ x86  │ x86  │ x86  │ 256GB │ 25G │ FC  │ A100   │   │
│  │ 3.2G │ 3.2G │ 3.2G │ 3.2G │ DDR5  │      │     │        │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### How Type 1 Hypervisors Handle Hardware


Since there is NO host OS, the hypervisor must include:

1. **Device drivers** → Native drivers for NICs, HBAs, GPUs, storage controllers
2. **CPU scheduler** → Schedules vCPUs across physical CPUs (typically a modified lottery or CFS scheduler)
3. **Memory manager** → Allocates and reclaims guest memory; handles NUMA
4. **I/O stack** → Virtual switch (vSwitch), storage stack, network stack
5. **Management interface** → CLI, REST API, or GUI for VM lifecycle

### Steps to Create a VM on Type 1 Hypervisor (VMware ESXi)


```
Step 1:  Physical server boots → BIOS/UEFI → Boot loader loads ESXi kernel
Step 2:  ESXi kernel initializes hardware (enumerate PCI devices, load drivers)
Step 3:  ESXi vmkernel creates VMkernel (the "OS" of the hypervisor)
Step 4:  VMkernel starts management services (hostd, vpxa)
Step 5:  Admin connects via vSphere client or API
Step 6:  Admin defines VM spec: vCPUs (quantity and cores), memory (GB), disks (provisioning type)
Step 7:  VMkernel allocates memory, creates VMCS structures, initializes vCPU contexts
Step 8:  VMkernel creates virtual devices (VMXNET3 NIC, LSI Logic SAS controller)
Step 9:  VMkernel locates ISO or PXE boot image
Step 10: VMkernel issues VMLAUNCH → Guest OS boots inside VM
```

### Examples of Type 1 Hypervisors

| Hypervisor | Architecture | Key Features |
|------------|-------------|--------------|
| **VMware ESXi** | Proprietary vmkernel (~200MB) | DRS (DRS), vMotion, HA, FT, vSAN, NSX |
| **Microsoft Hyper-V** | Microkernel (runs on Windows Hyper-V role) | Live migration, Shielded VMs, nested virtualization |
| **KVM (Linux)** | Kernel module; turns Linux into Type 1 | Open source; part of Linux kernel; used in OpenStack, AWS |
| **Xen** | Microkernel design; Dom0 model | AWS Nitro legacy; paravirtualization pioneer; now OpenXT |
| **Citrix Hypervisor** | Based on Xen | GPU passthrough, XenMotion, Intel MKTME |

### A&D: Type 1 Hypervisors


| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| **Performance** | Direct hardware access → near-native (95-99%) | Must include own device drivers (driver compatibility matrix) |
| **Isolation** | Each VM has its own kernel; no host OS to compromise | Hypervisor is the single point of failure |
| **Resource** | No host OS overhead (Linux: ~256MB, Windows: ~2GB → wasted) | Physical hardware fully dedicated to VMs; no desktop use while VM runs |
| **Management** | Enterprise features (live migration, HA, DRS) | Requires separate management server; higher complexity |
| **Security** | Smaller attack surface (VMkernel ~200MB vs Linux millions of lines) | Fewer security tools available; specialized expertise required |
| **Cost** | For data centers: better TCO (consolidation ratios 10:1 to 50:1) | Licensing can be expensive (vSphere); specialized hardware needed |

## 2.3 Type 2: Hosted Hypervisor

The hypervisor runs as an APPLICATION inside a full operating system. The host OS manages all hardware; the hypervisor is just another process.

### Architecture Diagram


```
┌─────────────────────────────────────────────────────────────────┐
│                         USER SPACE                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ VirtualBox  │  │  VMware     │  │  Firefox    │            │
│  │ VM1: Win10  │  │  Workstation│  │  (browser)  │            │
│  │ VM2: Ubuntu │  │  VM: Fedora │  │             │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
├─────────────────────────────────────────────────────────────────┤
│                      HOST OPERATING SYSTEM                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ Process  │  │ Memory   │  │ File     │  │ Network Stack │  │
│  │ Scheduler│  │ Manager  │  │ System   │  │ (TCP/IP)      │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                 Device Drivers                            │   │
│  │  (NVIDIA, Intel, Realtek, AHCI, NVMe, USB, Audio)        │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                     PHYSICAL HARDWARE                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CPU  │ GPU  │ RAM  │ SSD  │ NIC  │ USB  │ Audio │     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### How Type 2 Hypervisors Handle I/O


Since the host OS owns all hardware, Type 2 hypervisors face a critical challenge:

```
App → Host OS (syscall) → Host Kernel → Driver → Hardware

VM → Type2 Hypervisor (emulate) → Host OS (syscall) → Host Kernel → Driver → Hardware

Two layers of scheduling:
  1. Host OS schedules hypervisor process (like any other app)
  2. Hypervisor schedules guest vCPUs
  → Double scheduling overhead! 
```

### Steps to Create a VM on Type 2 Hypervisor (VirtualBox)


```
Step 1:  Host OS boots normally (Windows/Linux/macOS)
Step 2:  User launches VirtualBox application
Step 3:  VirtualBox loads VMM driver (can be kernel module for acceleration)
Step 4:  User clicks "New" → fills in VM name, OS type, memory size, disk size
Step 5:  VirtualBox creates VM configuration file (.vbox) and virtual disk (.vdi)
Step 6:  VirtualBox allocates guest memory (host memory for VM)
Step 7:  VirtualBox opens pass-through to host kernel for VT-x (if available)
Step 8:  User clicks "Start" → VirtualBox executes VMLAUNCH (or emulates if no VT-x)
Step 9:  Guest OS boots; every sensitive instruction → VM-exit → VirtualBox handles → VMRESUME
Step 10: User sees VM window; interacts through GUI integration
```

### Examples of Type 2 Hypervisors

| Hypervisor | Host OS Support | Key Features |
|------------|----------------|--------------|
| **Oracle VirtualBox** | Win/Linux/macOS | Free, open-source, Guest Additions, snapshot, USB passthrough |
| **VMware Workstation Pro** | Win/Linux | Snapshots, clones, vSphere integration, Unity mode |
| **VMware Fusion** | macOS | Mac-Windows integration, Apple Silicon support (ARM) |
| **Parallels Desktop** | macOS | Windows on Mac with Coherence mode, DirectX 11 support |
| **QEMU (without KVM)** | Win/Linux/macOS | Full emulation (multiple architectures), open source |
| **UTM** | macOS (Apple Silicon) | QEMU-based, ARM/x86 emulation on M1/M2/M3 |

### A&D: Type 2 Hypervisors


| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| **Usability** | Easy installation (like any app); GUI for VM management | Cannot use VM while host is off; shares desktop resources |
| **Hardware support** | All host OS devices automatically available; no driver issues | Device access goes through host OS → double overhead |
| **Flexibility** | Run VMs alongside regular applications; snapshots are user-friendly | Not suitable for production servers (5-20% overhead vs Type 1) |
| **Cost** | Free options (VirtualBox); no dedicated hardware needed | Licensing cost + host OS license (if Windows) |
| **Development** | Ideal for dev/test: quick VM creation, snapshots, revert | Performance constraints limit it to lightweight workloads |
| **Security** | Host OS provides security (firewall, AV, updates) | Larger attack surface (host OS + hypervisor); host compromise = all VMs compromised |

## 2.4 Type 1 vs Type 2: Comprehensive Comparison

| Feature | Type 1 (Bare-Metal) | Type 2 (Hosted) |
|---------|---------------------|-----------------|
| **Architecture** | Hypervisor on bare hardware | Hypervisor on host OS |
| **Host OS** | None (hypervisor is OS) | Required (Windows, Linux, macOS) |
| **Scheduling** | One level (hypervisor schedules vCPUs on pCPUs) | Two levels (host OS schedules hypervisor process; hypervisor schedules vCPUs) |
| **Performance** | 95-99% of native | 80-95% of native |
| **I/O latency** | ~2-10Î¼s | ~10-100Î¼s (extra context switches) |
| **Memory overhead** | <100 MB for hypervisor | 256 MB - 2 GB (host OS) + application memory |
| **Concurrent apps** | No (all hardware for VMs) | Yes (VMs + regular apps share) |
| **Management** | CLI, REST API, vCenter, SCVMM | GUI application (VirtualBox, Workstation) |
| **Live migration** | Yes (vMotion, Hyper-V Live Migration) | Limited or none |
| **HA / FT** | Yes (vSphere HA, Hyper-V Replica) | No |
| **GPU passthrough** | Yes (vGPU, SR-IOV, MxGPU) | Limited (Workstation has some support) |
| **Use cases** | Data center, cloud, production | Dev/test, desktop virtualization, learning |
| **Boot time** | Minutes (hypervisor + VMs) | Minutes (host OS + hypervisor + VMs) |
| **Hardware support** | Requires certified hardware (HCL) | Any hardware supported by host OS |
| **Security posture** | Minimal attack surface | Larger attack surface (host OS adds vectors) |
| **Examples** | VMware ESXi, KVM, Hyper-V, Xen | VirtualBox, VMware Workstation, QEMU |
| **Cost** | Enterprise licensing ($) | Free or low-cost desktop licensing |

### Performance Impact: Type 1 vs Type 2


```
Scenario: Web server benchmark (Requests per second)

Native Linux:          ━━━━━━━━━━━━━━━━━━━━━━━━━━ 10,000 req/s
Type 1 (KVM):          ━━━━━━━━━━━━━━━━━━━━━━━━━   9,500 req/s (95%)
Type 1 (ESXi):         ━━━━━━━━━━━━━━━━━━━━━━━━━   9,300 req/s (93%)
Type 2 (VirtualBox):   ━━━━━━━━━━━━━━━━━━━━        7,000 req/s (70%)
Type 2 (Workstation):  ━━━━━━━━━━━━━━━━━━━━━      8,200 req/s (82%)
Emulation (QEMU):      ━━━                           800 req/s  (8%)

Why the gap?
  - Type 2 must go through host OS for EVERY operation
  - Double scheduling: host process scheduler + guest vCPU scheduler
  - I/O path: Guest → Hypervisor → Host OS → Driver → Hardware
  - Cache pollution: competing with host applications
```

## 2.5 Code: Type 1 vs Type 2 Simulation in Python

```python
"""
Simulates the scheduling and overhead differences between
Type 1 (bare-metal) and Type 2 (hosted) hypervisors.
"""

import time
import threading
from collections import deque
from dataclasses import dataclass, field
from enum import Enum
import random


class HypervisorType(Enum):
    TYPE1 = "Bare-Metal"
    TYPE2 = "Hosted"


class TaskState(Enum):
    READY = "ready"
    RUNNING = "running"
    WAITING = "waiting"
    DONE = "done"


@dataclass
class Task:
    id: int
    work_units: int
    priority: int = 1
    state: TaskState = TaskState.READY
    time_in_system: float = 0.0
    time_on_cpu: float = 0.0
    
    def __repr__(self):
        return f"Task[{self.id}] work={self.work_units} state={self.state.value}"


@dataclass
class vCPU:
    id: int
    vm_id: int
    tasks: list = field(default_factory=list)
    
    def __repr__(self):
        return f"vCPU[{self.id}] (VM {self.vm_id}) tasks={len(self.tasks)}"


class CPU:
    """Physical CPU core."""
    
    def __init__(self, id, speed=1.0):
        self.id = id
        self.speed = speed  # Work units per tick
    
    def execute(self, task: Task) -> bool:
        """Execute one tick on a task. Returns True if task completes."""
        work_done = self.speed
        task.work_units -= work_done
        task.time_on_cpu += 1.0 / self.speed
        return task.work_units <= 0


class HypervisorScheduler:
    """
    Core scheduler that differs between Type 1 and Type 2.
    Type 1: direct scheduling of vCPUs on pCPUs.
    Type 2: host OS schedules hypervisor thread, which then schedules vCPUs.
    """
    
    def __init__(self, htype: HypervisorType, num_physical_cores=4):
        self.htype = htype
        self.cpus = [CPU(i) for i in range(num_physical_cores)]
        self.vcpu_queue = deque()
        self.completed_tasks = []
        self.current_time = 0.0
        self.overhead_type2 = 0.3  # 30% overhead for Type 2
        
    def add_vcpu(self, vcpu: vCPU):
        """Register a vCPU for scheduling."""
        self.vcpu_queue.append(vcpu)
    
    def _get_host_overhead(self) -> float:
        """Type 2 has additional overhead from host OS scheduling."""
        if self.htype == HypervisorType.TYPE2:
            # Simulate host OS taking CPU time for its own processes
            return random.uniform(0, self.overhead_type2)
        return 0.0
    
    def _schedule_round_robin(self):
        """Simple round-robin scheduler for vCPUs on pCPUs."""
        tick_results = []
        host_overhead = self._get_host_overhead()
        
        # Type 2: host OS preempts hypervisor (adds latency)
        if self.htype == HypervisorType.TYPE2 and host_overhead > 0.1:
            # Simulate host scheduling delay
            pass  # Would add to time but skip execution
        
        assigned = 0
        for cpu in self.cpus:
            if not self.vcpu_queue:
                break
            
            vcpu = self.vcpu_queue.popleft()
            
            # Find a ready task on this vCPU
            for task in vcpu.tasks:
                if task.state == TaskState.READY:
                    task.state = TaskState.RUNNING
                    completed = cpu.execute(task)
                    
                    if completed:
                        task.state = TaskState.DONE
                        task.time_in_system = self.current_time
                        self.completed_tasks.append(task)
                    else:
                        task.state = TaskState.READY
                    break
            
            self.vcpu_queue.append(vcpu)
            assigned += 1
        
        return assigned
    
    def run_tick(self) -> int:
        """Run one scheduling tick. Returns number of tasks worked on."""
        self.current_time += 1.0
        return self._schedule_round_robin()
    
    def get_stats(self):
        """Return scheduling statistics."""
        avg_completion = 0
        if self.completed_tasks:
            avg_completion = sum(t.time_in_system for t in self.completed_tasks) / len(self.completed_tasks)
        
        return {
            "type": self.htype.value,
            "tasks_completed": len(self.completed_tasks),
            "avg_completion_time": round(avg_completion, 2),
            "time_elapsed": round(self.current_time, 2),
        }


class VMM:
    """Virtual Machine Manager → the main hypervisor abstraction."""
    
    def __init__(self, name, htype=HypervisorType.TYPE1, num_cores=4):
        self.name = name
        self.htype = htype
        self.scheduler = HypervisorScheduler(htype, num_cores)
        self.vms = []
        self.task_counter = 0
        
    def create_vm(self, name, vcpus=2, tasks_per_vcpu=3):
        """Create a VM with vCPUs and tasks."""
        vm_tasks = []
        for v in range(vcpus):
            vcpu = vCPU(id=v, vm_id=len(self.vms))
            for t in range(tasks_per_vcpu):
                work = random.randint(5, 20)
                task = Task(id=self.task_counter, work_units=work)
                self.task_counter += 1
                vcpu.tasks.append(task)
                vm_tasks.append(task)
            self.scheduler.add_vcpu(vcpu)
        
        self.vms.append({"name": name, "tasks": vm_tasks})
        return vm_tasks
    
    def run(self, ticks=100):
        """Run the VMM for a given number of scheduling ticks."""
        print(f"\n[{self.name} ({self.htype.value})] Running for {ticks} ticks...")
        
        for t in range(ticks):
            assigned = self.scheduler.run_tick()
            if not assigned and all(t.state == TaskState.DONE for vm in self.vms for t in vm["tasks"]):
                break
        
        stats = self.scheduler.get_stats()
        print(f"[{self.name}] Completed: {stats['tasks_completed']} tasks")
        print(f"[{self.name}] Avg completion: {stats['avg_completion_time']} ticks")
        return stats


def simulate_comparison():
    """Run side-by-side comparison of Type 1 vs Type 2."""
    print("=" * 60)
    print("TYPE 1 vs TYPE 2 HYPERVISOR SIMULATION")
    print("=" * 60)
    
    # Type 1 → bare-metal
    vmm_type1 = VMM("ESXi", HypervisorType.TYPE1, num_cores=4)
    vmm_type1.create_vm("WebServer", vcpus=2, tasks_per_vcpu=4)
    vmm_type1.create_vm("Database", vcpus=2, tasks_per_vcpu=4)
    stats1 = vmm_type1.run(ticks=100)
    
    # Type 2 → hosted (same workload)
    vmm_type2 = VMM("VirtualBox", HypervisorType.TYPE2, num_cores=4)
    vmm_type2.create_vm("WebServer", vcpus=2, tasks_per_vcpu=4)
    vmm_type2.create_vm("Database", vcpus=2, tasks_per_vcpu=4)
    stats2 = vmm_type2.run(ticks=100)
    
    print("\n" + "=" * 60)
    print("COMPARISON RESULTS")
    print("=" * 60)
    print(f"{'Metric':<30} {'Type 1 (ESXi)':<18} {'Type 2 (VBox)':<18}")
    print("-" * 60)
    print(f"{'Avg completion time (ticks)':<30} {stats1['avg_completion_time']:<18} {stats2['avg_completion_time']:<18}")
    print(f"{'Tasks completed':<30} {stats1['tasks_completed']:<18} {stats2['tasks_completed']:<18}")
    print(f"{'Effective throughput':<30} {stats1['tasks_completed']/stats1['time_elapsed']:<18.2f} {stats2['tasks_completed']/stats2['time_elapsed']:<18.2f}")
    print(f"{'Scheduling overhead':<30} {'Minimal':<18} {'~30% extra':<18}")
    
    pct = (1 - stats2['avg_completion_time'] / stats1['avg_completion_time']) * 100
    print(f"\n→ Type 2 is {abs(pct):.0f}% slower than Type 1 for equivalent workload")
    print(f"→ Due to: double scheduling + host OS overhead + cache interference")


if __name__ == "__main__":
    simulate_comparison()
```
---

# 3. Full Virtualization vs Paravirtualization vs Hardware-Assisted

## 3.1 The Spectrum of Virtualization Techniques

These three approaches represent the evolution of virtualization from pure software solutions to hardware-accelerated ones. Understanding their differences is critical for system design and performance tuning.

### Real-World Analogy: Interpreting Languages


**Full Virtualization** = A **human interpreter** who sits between two people speaking different languages. The interpreter doesn't modify what either person says — they just translate every utterance. The speakers don't know the interpreter exists (unmodified guest).

**Paravirtualization** = Both people learn **a common subset vocabulary** and use it for all communication. They still speak different languages, but for certain known-critical words, they explicitly use the shared terms. This is faster because no translation is needed for those words.

**Hardware-Assisted** = A **telephone line with automatic translation hardware** built in. The basic conversation flows through the hardware without interpretation. Only complex phrases need the human interpreter.

```
                     Guest OS Modification Required?
                     +---------+
                     |   YES   |          NO
                     |    |    |          |
               Paravirtualization   +-----+-----+
                (Xen PV, virtio)    |            |
                                    |            |
                               Full Virt.   Hardware-Assisted
                               (Binary      (VT-x, AMD-V)
                                Translate)   Automatic traps
```

## 3.2 Full Virtualization

The hypervisor presents an EXACT copy of the underlying hardware to an UNMODIFIED guest OS. The guest believes it's running on bare metal.

### Binary Translation (VMware's Original Approach)


Before Intel VT-x (2005), VMware used **binary translation** to solve the x86 virtualization problem (non-trapping sensitive instructions).

```
Original Guest Code (x86):
  Address  |  Instruction            |  Problem
  ---------+-------------------------+----------------------
  0x1000   |  popf                   |  Sensitive -- modifies IF flag
  0x1001   |  mov eax, [ebx]        |  Safe -- no virtualization issue
  0x1004   |  sgdt [mem]            |  Sensitive -- reads GDTR base
  0x1007   |  cli                    |  Sensitive -- disables interrupts
  0x1008   |  add eax, ebx          |  Safe
  0x100A   |  iret                   |  Sensitive -- returns from interrupt
  0x100B   |  mov cr3, eax          |  Sensitive -- modifies page table base

Translated Code (executed by CPU):
  Address  |  Instruction
  ---------+-------------------------
  0x1000   |  call bt_emulate_popf  -> Jump to VMM handler for popf
  0x1005   |  mov eax, [ebx]        (unchanged -- safe)
  0x1008   |  call bt_emulate_sgdt  -> Jump to VMM handler for sgdt
  0x100C   |  call bt_emulate_cli   -> Jump to VMM handler for cli
  0x1010   |  add eax, ebx          (unchanged -- safe)
  0x1012   |  call bt_emulate_iret  -> Jump to VMM handler for iret
  0x1016   |  call bt_emulate_cr3   -> Jump to VMM handler for mov cr3
```

### Trap-and-Emulate (The Classical Model)


The gold standard for virtualizable architectures. The guest runs at a lower privilege level (Ring 1), and privileged instructions automatically trap to the VMM.

### Steps for Trap-and-Emulate (Correctly Virtualizable Architecture)


```
Step 1:  VMM sets up CPU in a lower privilege ring (Ring 1) for the guest
Step 2:  VMM installs trap handlers for all privileged instructions
Step 3:  VMM transfers control to guest OS entry point (VM entry)
Step 4:  Guest executes non-privileged code at full speed (no traps)
Step 5:  Guest executes a privileged instruction:
         - e.g., HLT (halt CPU until interrupt)
         - e.g., IN/OUT (port I/O)
         - e.g., MOV to CR3 (change page table)
Step 6:  CPU detects instruction is privileged -> raises general protection fault (#GP)
Step 7:  CPU vectors to VMM's trap handler (Ring 0)
Step 8:  VMM reads trap reason (from exception vector and error code)
Step 9:  VMM emulates the privileged instruction:
         - HLT: Mark vCPU as halted; schedule other tasks
         - IN:  Read from emulated device; return data to guest registers
         - MOV CR3: Validate new page table; update shadow page tables
Step 10: VMM modifies CPU context to reflect the instruction's effect
Step 11: VMM executes IRET (return from interrupt) to resume guest at next instruction
Step 12: Guest continues execution, unaware of the trap+emulate cycle
```

### Dry Run: Trap-and-Emulate (Guest OS enabling interrupts)


| Step | CPU Mode | Instruction | Action | Key State |
|------|----------|-------------|--------|-----------|
| 1 | VMM (Ring 0) | Setup | Set guest CPL=1; install trap handlers | VMCS_VCPU = all zeros |
| 2 | -> Guest (Ring 1) | sti | Try to set interrupt flag | IF=0 currently (interrupts disabled) |
| 3 | -> CPU detects | sti is privileged | Generates #GP (exception 13) | Error code = 0 |
| 4 | -> VMM (Ring 0) | Trap handler | Save guest RIP, CS, RFLAGS | Save: RIP=0x1000, CS=0x08, RFLAGS=0x202 |
| 5 | VMM | Switch table | Update EPT permissions | EPT changes for related MMIO region |
| 6 | VMM | Emulate sti | Set vCPU.RFLAGS.IF = 1 | IF=1 in virtual state |
| 7 | VMM | Update VM state | Write new RFLAGS to VMCS | VMCS.guest.rflags.IF = 1 |
| 8 | VMM | IRET | Return to guest at RIP+1 | RIP=0x1001 |
| 9 | -> Guest (Ring 1) | nop | Continues normally | RFLAGS.IF=1 (interrupts now enabled) |

## 3.3 Paravirtualization

The guest OS is MODIFIED to replace sensitive instructions with explicit **hypercalls** — direct calls into the hypervisor. This eliminates the need for traps.

### How Paravirtualization Works


```
Normal OS (unmodified):            Paravirtualized OS (modified):
+--------------------+             +--------------------+
| disable_interrupts()|             | disable_interrupts()|
|   cli              |  ---> trap  |   __hypercall(      |
|                    |             |     HC_VCPU_IRQ,    |  ---> direct call
|                    |             |     DISABLE)        |        to VMM
|                    |             |                    |
+--------------------+             +--------------------+
       |                                  |
       v                                  v
  [Trap to VMM]                      [Call VMM directly]
  CPU saves state (~200 cycles)      No trap -- just function call (~20 cycles)
  VMM handles                        VMM handles
  VMRESUME (~200 cycles)             Return (~10 cycles)
  ---------------------              ---------------------
  Total: ~400 cycles overhead        Total: ~30 cycles overhead
  -> 13x FASTER with paravirtualization!
```

### Key Paravirtualization Techniques


| Technique | Normal OS | Paravirtualized OS |
|-----------|----------|--------------------|
| **Memory management** | mov cr3, eax (load page table) | **Hypercall:** HYPERVISOR_mmuext_op() to update page tables |
| **Interrupts** | cli/sti (disable/enable) | **Event channel:** Async notification; guest acknowledges via hypercall |
| **Time** | RDTSC instruction | **HYPERVISOR_shared_info:** Shared page with wall clock time |
| **I/O** | in/out instructions | **Shared ring buffers:** virtio or Xen netfront/blkfront |
| **Page tables** | Direct management | **Read-only:** Guest updates batched and validated by Xen |
| **System calls** | sysenter/sysexit | **Hypercall page:** Direct hypercall for context switch |

### Paravirtualization Hypercall Interface


```c
// Xen hypercall interface (simplified)
#define __HYPERVISOR_mmu_update     0
#define __HYPERVISOR_sched_op       1
#define __HYPERVISOR_event_channel  2
#define __HYPERVISOR_console_io     3

static inline long HYPERVISOR_mmu_update(
    struct mmu_update *req, int count, int *success_count, domid_t domid)
{
    long ret;
    asm volatile(
        "mov %[hypercall], %%rax\n\t"
        "mov %[arg1], %%rdi\n\t"
        "mov %[arg2], %%rsi\n\t"
        "mov %[arg3], %%rdx\n\t"
        "mov %[arg4], %%r10\n\t"
        "syscall"
        : "=a" (ret)
        : [hypercall] "i" (__HYPERVISOR_mmu_update),
          [arg1] "r" (req), [arg2] "r" (count),
          [arg3] "r" (success_count), [arg4] "r" (domid)
        : "memory", "cc"
    );
    return ret;
}
```

## 3.4 Hardware-Assisted Virtualization (Intel VT-x / AMD-V)

Intel introduced **VT-x** (formerly Vanderpool) in 2005 on Pentium 4. AMD introduced **AMD-V** (formerly Pacifica) on Athlon 64.

### New CPU Modes


```
Without VT-x:
+------------------------------------+
|  Ring 0:  Host OS / VMM            |
|  Ring 1:  (guest, but problematic) |
|  Ring 2:  (unused)                 |
|  Ring 3:  User applications        |
+------------------------------------+
  Problem: x86 has non-trapping sensitive instructions

With VT-x:
+------------------------------------+
|  VMX Root Mode:                    |
|    Ring 0-3: Hypervisor            |
|    (Full hardware control)         |
+------------------------------------+
|  VMX Non-Root Mode:                |
|    Ring 0-3: Guest OS + Apps       |
|    (Guest thinks it has rings)     |
|    ALL sensitive instructions      |
|    AUTOMATICALLY VM-exit           |
+------------------------------------+
  Now: All sensitive instructions trap -- solved!
```

### VMX Root Mode vs VMX Non-Root Mode


| Feature | VMX Root Mode | VMX Non-Root Mode |
|---------|--------------|-------------------|
| **Who runs here** | Hypervisor (VMM) | Guest OS + applications |
| **Ring 0 access** | Yes -- full kernel privileges | Guest thinks so, but limited |
| **Ring 3 access** | Yes | Yes -- for guest applications |
| **Sensitive instrs** | Execute normally (VMM is trusted) | Cause VM-exit (trapped to root) |
| **VMCS access** | Full read/write via VMREAD/VMWRITE | Read-only (cannot modify VMCS) |
| **Memory protection** | EPT also applies, VMM can modify EPT | EPT enforced (GPA -> HPA translation) |
| **Interrupt handling** | Full control (host IDT) | Guest IDT for guest interrupts |
| **I/O access** | Direct hardware access | All port I/O causes VM-exit |

## 3.5 Full vs Para vs HW-Assisted: Comparison

| Aspect | Full Virtualization | Paravirtualization | HW-Assisted |
|--------|-------------------|-------------------|-------------|
| **Guest modification** | None | Required (OS must be ported) | None |
| **Performance** | 80-95% (binary translation) | 95-98% | 95-99% |
| **CPU overhead** | ~5-20% | ~2-5% | ~1-5% |
| **I/O overhead** | High (emulated devices) | Low (shared ring buffers) | Low (virtio or passthrough) |
| **Guest OS support** | Any (Windows, Linux, BSD) | Linux, BSD, Solaris (PV-port) | Any |
| **VM exit frequency** | High (every privileged instr) | Low (only explicit hypercalls) | Medium |
| **Complexity** | High | Medium | Medium |
| **Memory virt** | Shadow page tables | Shadow page tables | Nested paging (EPT/NPT) |
| **Legacy OS** | Yes | No | Yes |
| **Live migration** | Hard | Easier | Supported |
| **Nesting** | Very hard | Hard | Supported |

### Performance Gap Analysis


```
Binary Translation (VMware ESXi 3.x):
  Every page table update:
    Guest: mov cr3, eax ---> BT detects
    VMM:  decode instruction + walk new page table
         + synch shadow page table + resume guest
    Total: ~2000-5000 cycles per exit

Hardware-Assisted (KVM + VT-x + EPT):
  Every page table update:
    Guest: mov cr3, eax ---> VM-exit
    VMM:  handle exit (minimal) + VMRESUME
    Total: ~800-1500 cycles per exit
    Many updates DON'T exit (EPT handles GPA->HPA in HW)

Savings: 2-3x fewer cycles per exit,
         10-15x fewer exits overall (EPT vs shadow PT)
```

---

# 4. VT-x VM Entry/Exit Flow (Intel)

## 4.1 VMCS -- Virtual Machine Control Structure

The **VMCS** is the in-memory data structure that controls VMX operations. Each logical CPU has one active VMCS at a time.

### VMCS Layout


```
VMCS (Virtual Machine Control Structure) -- ~4KB
+----------------------------------------------+
|  VMCS Revision Identifier  (4 bytes)         |
|  VMX-abort Indicator      (4 bytes)          |
+----------------------------------------------+
|  VMCS Data (organized into groups):          |
|                                              |
|  1. Guest-State Area                         |
|     +-------------------------------------+  |
|     | Guest ES, CS, SS, DS, FS, GS       |  |
|     | GDTR, IDTR, LDTR, TR               |  |
|     | RIP, RSP, RFLAGS                   |  |
|     | CR0, CR3, CR4                     |  |
|     | Debug registers (DR0-DR7)         |  |
|     +-------------------------------------+  |
|                                              |
|  2. Host-State Area                          |
|     +-------------------------------------+  |
|     | Host CR0, CR3, CR4                 |  |
|     | Host RIP (VMM entry point)         |  |
|     | Host RSP (VMM stack pointer)       |  |
|     +-------------------------------------+  |
|                                              |
|  3. VM-Execution Control Fields              |
|     +-------------------------------------+  |
|     | Pin-based controls (interrupts)    |  |
|     | Primary/secondary processor ctrl   |  |
|     | Exception bitmap, I/O bitmap       |  |
|     +-------------------------------------+  |
|                                              |
|  4. VM-Exit Control Fields                   |
|  5. VM-Entry Control Fields                  |
|  6. VM-Exit Information Fields               |
|     +-------------------------------------+  |
|     | Exit Reason (32 bits)               |  |
|     | Exit Qualification (64 bits)        |  |
|     | VM-exit interruption info           |  |
|     +-------------------------------------+  |
+----------------------------------------------+
```

## 4.2 VM Entry Steps

```
VMLAUNCH (first entry) / VMRESUME (subsequent entries):

Step 1: CPU checks VMCS is valid (checksum verification)
Step 2: CPU loads guest state from VMCS Guest-State Area:
        - Load segment registers (CS, SS, DS, ES, ...)
        - Load control registers (CR0, CR3, CR4)
        - Load RIP, RSP, RFLAGS
        - Load GDTR, IDTR, LDTR, TR
Step 3: CPU enables VMX non-root operation
Step 4: CPU starts guest execution at the loaded RIP
        - Guest sees Ring 0-3 (but it's non-root mode)
        - All sensitive instructions will cause VM-exit
Step 5: Guest executes user code (Ring 3) or kernel code (Ring 0 guest)
```

## 4.3 VM Exit Steps

```
VM-exit triggers:
  - External interrupt (if "External-interrupt exiting" is set)
  - Triple fault (shutdown)
  - I/O instruction (IN, OUT, INS, OUTS)
  - CPUID instruction
  - HLT instruction
  - MOV to CR0/CR3/CR4, LMSW
  - RDMSR, WRMSR
  - EPT violation
  - APIC access
  - XSETBV, INVEPT, INVVPID

VM-exit Hardware Flow:

Step 1:  CPU detects a VM-exit condition (e.g., guest executes IN)
Step 2:  CPU saves guest state to VMCS Guest-State Area:
         - RIP, RSP, RFLAGS
         - All segment selectors + base + limit + AR bytes
         - Control registers, Debug registers
Step 3:  CPU populates VM-Exit Information Fields:
         - Exit reason (e.g., 30 for I/O instruction)
         - Exit qualification (e.g., port number, size, direction)
         - VM-exit instruction length
         - Guest linear address (if applicable)
Step 4:  CPU loads host state from VMCS Host-State Area:
         - Host RIP (VMM entry point)
         - Host RSP (VMM stack)
         - Host CR0, CR3, CR4
Step 5:  CPU switches to VMX root mode
Step 6:  CPU delivers VM exit to host (host RIP now executes)
Step 7:  VMM reads exit reason from VMCS:
         exit_reason = vmread(VMX_EXIT_REASON)
         exit_qual   = vmread(VMX_EXIT_QUALIFICATION)
Step 8:  VMM dispatches to handler based on exit_reason
Step 9:  VMM emulates the operation or takes action
Step 10: VMM issues VMRESUME -> CPU loads guest state and resumes
```

## 4.4 C++ Implementation: VM Entry/Exit Handler

```cpp
#include <iostream>
#include <cstdint>
#include <cstring>
#include <unordered_map>
#include <vector>
#include <array>

enum VMXExitReason : uint32_t {
    EXIT_CPUID         = 10,
    EXIT_HLT           = 12,
    EXIT_MOV_CRX       = 28,
    EXIT_IO_INSTR      = 30,
    EXIT_EPT_VIOLATION = 48,
    EXIT_TRIPLE_FAULT  = 2,
};

struct IOQualification {
    union {
        uint64_t raw;
        struct {
            uint64_t port      : 16;
            uint64_t reserved  : 4;
            uint64_t direction : 1;
            uint64_t size      : 3;
            uint64_t _reserved : 40;
        } fields;
    };
};

class VMCS {
private:
    uint64_t guest_rip, guest_rsp, guest_rflags;
    uint64_t guest_cr0, guest_cr3, guest_cr4;
    uint64_t host_rip, host_rsp, host_cr3;
    uint32_t m_exit_reason = 0;
    uint64_t m_exit_qual   = 0;
    uint32_t m_exit_inst_len = 0;

public:
    void setGuestRIP(uint64_t r)  { guest_rip = r; }
    void setGuestCR3(uint64_t c)  { guest_cr3 = c; }
    void setHostRIP(uint64_t r)   { host_rip = r; }
    void setHostRSP(uint64_t r)   { host_rsp = r; }
    void setHostCR3(uint64_t c)   { host_cr3 = c; }

    uint64_t getGuestRIP()  const { return guest_rip; }
    uint64_t getGuestCR3()  const { return guest_cr3; }
    uint64_t getHostRIP()   const { return host_rip; }

    uint32_t getExitReason()           const { return m_exit_reason; }
    uint64_t getExitQualification()    const { return m_exit_qual; }
    uint32_t getExitInstructionLength()const { return m_exit_inst_len; }

    void setExitReason(uint32_t r)     { m_exit_reason = r; }
    void setExitQual(uint64_t q)       { m_exit_qual = q; }
    void setExitInstLen(uint32_t l)    { m_exit_inst_len = l; }

    void dump() {
        printf("  RIP=0x%lx CR3=0x%lx Reason=%u Qual=0x%lx\n",
               guest_rip, guest_cr3, m_exit_reason, m_exit_qual);
    }
};

class VMM {
    VMCS vmcs;
    uint64_t exit_count = 0;
    uint64_t guest_rax = 0, guest_rip = 0;

public:
    bool prepareEntry(uint64_t entry_rip, uint64_t cr3_val) {
        vmcs.setGuestRIP(entry_rip);
        vmcs.setGuestCR3(cr3_val);
        vmcs.setHostRIP((uint64_t)this + 0x100);
        vmcs.setHostRSP(0x10000);
        vmcs.setHostCR3(0x1000);
        printf("[VMM] VM entry prepared: RIP=0x%lx CR3=0x%lx\n", entry_rip, cr3_val);
        return true;
    }

    void vmlaunch() {
        printf("[VMLAUNCH] Entering guest\n");
        guest_rip = vmcs.getGuestRIP();
    }

    void vmresume() {
        printf("[VMRESUME] Resuming guest at RIP=0x%lx\n", guest_rip);
    }

    void handleExit(uint32_t reason, uint64_t qual, uint32_t inst_len) {
        exit_count++;
        vmcs.setExitReason(reason);
        vmcs.setExitQual(qual);
        vmcs.setExitInstLen(inst_len);

        printf("[VM-EXIT #%lu] Reason=%u Qual=0x%lx\n", exit_count, reason, qual);

        switch (reason) {
            case EXIT_IO_INSTR: {
                IOQualification io;
                io.raw = qual;
                if (io.fields.direction) {
                    printf("  I/O IN  port=0x%x\n", io.fields.port);
                } else {
                    uint8_t data = guest_rax & 0xFF;
                    printf("  I/O OUT port=0x%x data=0x%02x\n", io.fields.port, data);
                }
                break;
            }
            case EXIT_CPUID:
                printf("  CPUID handled\n");
                break;
            case EXIT_HLT:
                printf("  HLT -- guest halted\n");
                break;
            case EXIT_EPT_VIOLATION:
                printf("  EPT violation at GPA=0x%lx\n", qual);
                break;
            default:
                printf("  Unknown exit\n");
        }
        guest_rip += inst_len;
    }

    uint64_t getExitCount() const { return exit_count; }
    uint64_t getGuestRIP()  const { return guest_rip; }
};

int main() {
    printf("VT-x VM ENTRY/EXIT SIMULATION\n");
    VMM vmm;
    vmm.prepareEntry(0x1000, 0x2000);
    vmm.vmlaunch();

    // Simulate: OUT instruction -> VM-exit
    IOQualification qual;
    qual.raw = 0;
    qual.fields.port = 0xE9;
    qual.fields.direction = 0; // OUT
    qual.fields.size = 0;      // 1 byte
    vmm.handleExit(EXIT_IO_INSTR, qual.raw, 2);

    // Simulate: CPUID -> VM-exit
    vmm.handleExit(EXIT_CPUID, 0, 2);

    // Simulate: HLT -> VM-exit
    vmm.handleExit(EXIT_HLT, 0, 1);

    printf("\nTotal exits: %lu\n", vmm.getExitCount());
    return 0;
}
```

## 4.5 Python Implementation: VT-x Flow Simulation

```python
"""
Simulates Intel VT-x VM Entry/VM Exit cycle for educational purposes.
Demonstrates how a hypervisor enters guest mode, handles VM exits,
and resumes the guest.
"""

from enum import IntEnum
from dataclasses import dataclass
from typing import Dict, List, Optional


class VMXExitReason(IntEnum):
    CPUID = 10
    HLT = 12
    MOV_CRX = 28
    IO_INSTR = 30
    EPT_VIOLATION = 48
    TRIPLE_FAULT = 2


@dataclass
class VMCS:
    """Virtual Machine Control Structure."""
    guest_rip: int = 0
    guest_cr3: int = 0
    host_rip: int = 0
    host_rsp: int = 0
    host_cr3: int = 0
    exit_reason: int = 0
    exit_qual: int = 0
    exit_inst_len: int = 0

    def save_state(self, rip: int, cr3: int):
        self.guest_rip = rip
        self.guest_cr3 = cr3

    def __repr__(self) -> str:
        return f"VMCS(exit={self.exit_reason}, RIP=0x{self.guest_rip:x})"


class GuestMemory:
    """Guest physical address space (simulated)."""

    def __init__(self, size_kb: int = 64):
        self.mem: Dict[int, int] = {}

    def load_code(self, gpa: int, code: List[int]) -> None:
        for i, b in enumerate(code):
            self.mem[gpa + i] = b & 0xFF

    def read_byte(self, gpa: int) -> int:
        return self.mem.get(gpa, 0x00)


class Hypervisor:
    """
    The VMM -- manages VM Entry/VM Exit lifecycle.
    """

    def __init__(self):
        self.vmcs = VMCS()
        self.exit_count = 0
        self.guest_rax = 0
        self.guest_rip = 0x1000
        print("[Hypervisor] Initialized")

    def vmlaunch(self) -> None:
        """VMLAUNCH -- first VM entry."""
        self.vmcs.save_state(self.guest_rip, 0x2000)
        print(f"[VMLAUNCH] Entering guest at RIP=0x{self.guest_rip:x}")

    def vmresume(self) -> None:
        """VMRESUME -- resume guest after VM-exit."""
        print(f"[VMRESUME] Resuming guest at RIP=0x{self.guest_rip:x}")

    def handle_io_exit(self, qual: int) -> None:
        """Handle I/O instruction VM-exit."""
        port = qual & 0xFFFF
        direction = (qual >> 20) & 1
        data = self.guest_rax & 0xFF
        if direction:
            print(f"  [I/O] IN  port=0x{port:04x}")
        else:
            print(f"  [I/O] OUT port=0x{port:04x} <- 0x{data:02x}")
            if port == 0xE9 and 32 <= data < 127:
                print(f"  [DEBUG PORT] '{chr(data)}'")

    def handle_cpuid_exit(self) -> None:
        """Handle CPUID VM-exit -- mask VT-x from guest."""
        print("  [CPUID] Masking VT-x feature bit")

    def handle_hlt_exit(self) -> None:
        """Handle HLT VM-exit."""
        print("  [HLT] Guest halted")

    def handle_ept_violation(self, qual: int) -> None:
        """Handle EPT violation VM-exit."""
        gpa = qual & 0xFFFFFFFFFFFFF000
        print(f"  [EPT] Violation at GPA=0x{gpa:x}")

    def handle_vmexit(self, reason: VMXExitReason, qual: int = 0,
                      inst_len: int = 1) -> None:
        """Main VM-exit handler -- dispatches by reason."""
        self.exit_count += 1
        self.vmcs.exit_reason = reason
        self.vmcs.exit_qual = qual
        self.vmcs.exit_inst_len = inst_len

        print(f"\n[VM-EXIT #{self.exit_count}] Reason: {reason.name} "
              f"Qual=0x{qual:x}")

        handlers = {
            VMXExitReason.IO_INSTR: lambda: self.handle_io_exit(qual),
            VMXExitReason.CPUID: self.handle_cpuid_exit,
            VMXExitReason.HLT: self.handle_hlt_exit,
            VMXExitReason.EPT_VIOLATION: lambda: self.handle_ept_violation(qual),
        }

        handler = handlers.get(reason)
        if handler:
            handler()
        else:
            print(f"  [UNHANDLED] Exit reason {reason}")

        self.guest_rip += inst_len


def simulate_vm_lifecycle():
    """Demonstrate a full VM lifecycle: Entry -> Execute -> Exit -> Resume."""
    print("=" * 60)
    print("INTEL VT-x VM ENTRY/EXIT LIFECYCLE SIMULATION")
    print("=" * 60)

    hv = Hypervisor()
    hv.vmlaunch()

    print("\n--- Guest Execution (simulated) ---")

    # Guest executes OUT instruction -> VM-exit
    print("\nGuest: OUT 0xE9, 'H'")
    io_qual = (0 << 20) | (0 << 16) | 0xE9  # OUT, 1B, port=0xE9
    hv.guest_rax = ord('H')
    hv.handle_vmexit(VMXExitReason.IO_INSTR, io_qual, 2)
    hv.vmresume()

    # Guest executes OUT instruction -> VM-exit
    print("\nGuest: OUT 0xE9, 'i'")
    hv.guest_rax = ord('i')
    hv.handle_vmexit(VMXExitReason.IO_INSTR, io_qual, 2)
    hv.vmresume()

    # Guest executes OUT instruction -> VM-exit
    print("\nGuest: OUT 0xE9, '!'")
    hv.guest_rax = ord('!')
    hv.handle_vmexit(VMXExitReason.IO_INSTR, io_qual, 2)
    hv.vmresume()

    # Guest executes CPUID -> VM-exit
    print("\nGuest: CPUID")
    hv.handle_vmexit(VMXExitReason.CPUID, 0, 2)
    hv.vmresume()

    # Guest executes HLT -> VM-exit
    print("\nGuest: HLT")
    hv.handle_vmexit(VMXExitReason.HLT, 0, 1)

    print(f"\n{'='*60}")
    print(f"Simulation complete: {hv.exit_count} VM-exits handled")
    print(f"{'='*60}")


def simulate_ept_violation():
    """Demonstrate EPT violation handling."""
    print("\n\n" + "=" * 60)
    print("EPT VIOLATION HANDLING")
    print("=" * 60)

    hv = Hypervisor()
    hv.vmlaunch()

    print("\nGuest: Access unmapped GPA 0x7000")
    hv.handle_vmexit(VMXExitReason.EPT_VIOLATION, 0x7000, 3)
    print("  -> VMM allocates new page and updates EPT")
    hv.vmresume()

    print("\nGuest: Access mapped GPA 0x7000 again")
    print("  -> No VM-exit (EPT caches translation)")

    print(f"\nTotal exits: {hv.exit_count}")


if __name__ == "__main__":
    simulate_vm_lifecycle()
    simulate_ept_violation()
```

## 6. Memory Virtualization

Memory virtualization is the most performance-critical subsystem in a VMM. The VMM must give each guest its own contiguous physical address space starting at zero while preventing any guest from reading or writing another guest's memory → or the VMM's own memory.

### 6.1 The Address Space Problem


In a non-virtualized system, the OS manages three address spaces:

- **Virtual Address (VA)** → what user processes see
- **Linear Address (LA)** → what paging sees (x86-64 collapses VA → LA)
- **Physical Address (PA)** → what the hardware bus sees

In a virtualized system, the VMM introduces a fourth layer:

- **Guest Physical Address (GPA)** → what the guest OS *thinks* is physical memory
- **Machine Physical Address (MPA)** → what is *actually* physical memory (also called Host Physical Address, HPA)

Now every guest memory access must go through a two-stage translation:
```
Guest VA  → Guest PA (guest page tables)  → Machine PA (VMM page tables)
```

### 6.2 Shadow Page Tables (Software Approach)


**Concept:** The VMM maintains shadow copies of each guest's page tables that map Guest VA directly to Machine PA → bypassing the GPA layer entirely. The guest's own page tables are write-protected; any attempt by the guest OS to modify them traps to the VMM, which updates the shadow tables accordingly.

**Analogy → Diplomatic Interpreter:**
Imagine a diplomat speaking French to a Chinese official. An interpreter stands in the middle, translating each sentence. Every time the diplomat speaks, the interpreter must listen, translate, and relay. The diplomat thinks he is speaking directly; in reality, every word passes through the interpreter.

```
Guest OS          VMM              Hardware
  |                |                 |
  |--- writes CR3 -|                 |
  |                |--- allocates ---|
  |                |   shadow PT     |
  |                |--- loads   -----|----> CR3
  |                |   shadow PT     |      |
  |--- VA access --|-----------------|-----> page walk on
  |                |                 |      shadow PT → MPA
```

**Implementation Steps:**

| Step | Actor | Action |
|------|-------|--------|
| 1 | Guest OS | Writes to CR3 to activate new page table |
| 2 | CPU | Traps to VMM (CR3 access is privileged) |
| 3 | VMM | Allocates a new shadow page table |
| 4 | VMM | Walks guest page tables, translates GPA→MPA for each entry |
| 5 | VMM | Writes MPA directly into shadow page table |
| 6 | VMM | Writes shadow PT physical address into real CR3 |
| 7 | Guest | Resumes → page walks now use shadow PT, never trap |
| 8 | VMM | Write-protects guest PT pages |
| 9 | Guest | Tries to update guest PT → page fault → trap to VMM |
| 10 | VMM | Recalculates shadow entry for the modified guest PTE |

**Pseudocode:**
```
function handle_cr3_write(guest_cr3_value):
    shadow_pt = allocate_page()
    guest_pagetable = translate_gpa_to_hpa(guest_cr3_value)
    for each entry in guest_pagetable:
        if entry.present:
            shadow_pt[entry.index] = translate_gpa_to_hpa(entry.pfn) | flags
    write_cr3(hpa_of(shadow_pt))
    write_protect(guest_pagetable)
```

**Dry-Run Trace → Guest Page Fault on PT Update:**

```
Guest code:  page_table[0x100] = new_pfn  // add a new mapping

#1  Guest writes to PT page at GPA 0x8000
#2  CPU: page fault → #PF handler = VMM
#3  VMM reads fault address: GPA 0x8000 + offset 0x800 (= entry for 0x100)
#4  VMM reads the new value the guest tried to write
#5  VMM walks shadow_pt to find shadow entry for 0x100
#6  VMM updates shadow entry: MPA = new_pfn mapped to MPA | guest flags
#7  VMM marks page dirty in dirty bitmap
#8  VMM resumes guest
#9  Guest retries instruction → succeeds because shadow PT now has correct mapping
```

**C++ Implementation Skeleton:**
```cpp
class ShadowPageTable {
    std::unordered_map<uint64_t, uint64_t> shadow_entries; // VA → MPA
    std::unordered_map<uint64_t, uint64_t> guest_entries;  // VA → GPA
    const MemoryMapper& mapper;

public:
    ShadowPageTable(const MemoryMapper& m) : mapper(m) {}

    void handle_cr3_write(uint64_t guest_cr3_hpa) {
        // Read the guest page-directory from machine memory
        uint64_t* guest_pd = mapper.get_host_pointer(guest_cr3_hpa);
        for (int i = 0; i < 512; i++) {  // 512 entries in x86-64 page table
            if (guest_pd[i] & 1) {  // present bit
                uint64_t guest_pfn = guest_pd[i] >> 12;
                uint64_t machine_pfn = mapper.gpa_to_hpa(guest_pfn << 12) >> 12;
                uint64_t flags = guest_pd[i] & 0xFFF;
                shadow_entries[i] = (machine_pfn << 12) | flags;
            }
        }
    }

    uint64_t handle_page_fault(uint64_t fault_va, uint64_t guest_cr2) {
        auto it = shadow_entries.find(fault_va >> 21);  // PDP index
        if (it == shadow_entries.end())
            return 0; // inject genuine page fault to guest
        return it->second;
    }
};
```

**Python Implementation Skeleton:**
```python
class ShadowPageTable:
    def __init__(self, memory_mapper):
        self.mapper = memory_mapper
        self.shadow = {}  # VA -> MPA
        self.guest_tables = {}

    def handle_cr3_write(self, guest_cr3_hpa):
        guest_pd = self.mapper.read_memory(guest_cr3_hpa, 4096)
        for i in range(512):
            entry = struct.unpack_from('<Q', guest_pd, i * 8)[0]
            if entry & 1:  # present
                guest_pfn = entry >> 12
                machine_pfn = self.mapper.gpa_to_hpa(guest_pfn << 12) >> 12
                self.shadow[i << 21] = (machine_pfn << 12) | (entry & 0xFFF)

    def handle_page_fault(self, guest_cr2):
        pd_index = guest_cr2 >> 21
        return self.shadow.get(pd_index, 0)
```

### 6.3 Hardware-Assisted Paging (EPT / NPT)


Intel's **Extended Page Tables (EPT)** and AMD's **Nested Page Tables (NPT)** eliminate shadow page tables by adding a second level of paging in hardware.

**How it works:**
1. Guest OS manages its own page tables (VA → GPA) normally → no traps
2. The VMM sets up a separate EPT/NPT structure that maps GPA → MPA
3. The hardware automatically walks BOTH page tables on every memory access
4. The result is combined: VA → GPA (guest PT) → MPA (EPT)

**Analogy → Bilingual Signage:**
Think of a bilingual airport: signs are written in both English and the local language. A traveler reads only the English part (VA→GPA), and the airport's signs simultaneously provide the local-language equivalent (EPT mapping GPA→MPA). No interpreter needed → both translations are pre-written.

**The Two-Dimensional Page Walk:**

Every memory access requires up to **24 memory references** on x86-64 with 4-level paging + EPT:
- Guest page walk: 4 memory reads (PML4 → PDPT → PD → PT)
- EPT page walk: 4 memory reads for *each* guest walk level = 16 memory reads
- Total: 4 + 16 = 20→24 memory references per access

```
VA translation using 4-level paging + EPT:

Guest walk (4 levels):         EPT walks (4Ã—4 = 16 levels):
  PML4[0] @ GPA_X1  ──EPT──►  PML4E[0]  @ MPA_A
  PDPT[1] @ GPA_X2  ──EPT──►  PDPTE[1]  @ MPA_B
  PD[2]   @ GPA_X3  ──EPT──►  PDE[2]    @ MPA_C
  PT[3]   @ GPA_X4  ──EPT──►  PTE[3]    @ MPA_D
                              └──► Final MPA
```

**EPT Violation (EPT Miss):**
When EPT doesn't have a mapping for a GPA, a VM-exit occurs (EPT violation). The VMM must:
1. Read the faulting GPA from VMCS
2. Allocate a new machine page
3. Install an EPT entry mapping GPA → MPA
4. Resume the guest (VM-entry)

**C++ Skeleton for EPT Handler:**
```cpp
class EPT {
    struct EPTEntry {
        uint64_t mpa : 52;   // machine physical address
        uint64_t r   : 1;    // read
        uint64_t w   : 1;    // write
        uint64_t x   : 1;    // execute
        // ... 9 more bits
    };

    EPTEntry* ept_pml4;  // root of EPT structure

public:
    void handle_ept_violation(uint64_t fault_gpa, VMCS& vmcs) {
        // Allocate a 4KB machine page
        uint64_t mpa = alloc_machine_page();
        // Zero it for security (prevent cross-guest data leak)
        memset(get_host_ptr(mpa), 0, 4096);
        // Install EPT entry
        auto [pml4e, pdpte, pde, pte] = walk_ept(fault_gpa);
        *pte = {.mpa = mpa, .r = 1, .w = 1, .x = 1};
        // Invalidate TLB for this GPA range
        invept();
        // Resume guest
        vmcs.vm_resume();
    }
};
```

**Python Implementation → EPT Lifecycle:**
```python
class EPT:
    def __init__(self, host_memory):
        self.host_memory = host_memory
        self.ept_pml4 = bytearray(4096)  # 512 entries Ã— 8 bytes

    def translate(self, gpa):
        """Translate GPA to MPA using EPT (simulated 2-level walk)"""
        pml4e = struct.unpack_from('<Q', self.ept_pml4, (gpa >> 39) * 8)[0]
        if not (pml4e & 1):
            raise EPTViolation(gpa, "PML4E not present")
        pdpt_hpa = pml4e & 0xFFFFFFFFFF000
        pdpte = struct.unpack_from('<Q', self.host_memory, pdpt_hpa + ((gpa >> 30) & 0x1FF) * 8)[0]
        if not (pdpte & 1):
            raise EPTViolation(gpa, "PDPTE not present")
        if pdpte & (1 << 7):  # huge page (1GB)
            return (pdpte & 0xFFFFFC0000000000) | (gpa & 0x3FFFFFFF)
        pd_hpa = pdpte & 0xFFFFFFFFFF000
        pde = struct.unpack_from('<Q', self.host_memory, pd_hpa + ((gpa >> 21) & 0x1FF) * 8)[0]
        if not (pde & 1):
            raise EPTViolation(gpa, "PDE not present")
        if pde & (1 << 7):  # large page (2MB)
            return (pde & 0xFFFFFFFE00000) | (gpa & 0x1FFFFF)
        pt_hpa = pde & 0xFFFFFFFFFF000
        pte = struct.unpack_from('<Q', self.host_memory, pt_hpa + ((gpa >> 12) & 0x1FF) * 8)[0]
        if not (pte & 1):
            raise EPTViolation(gpa, "PTE not present")
        return (pte & 0xFFFFFFFFFF000) | (gpa & 0xFFF)

    def handle_violation(self, gpa):
        mpa = self.alloc_zeroed_page()
        self.install_ept_entry(gpa, mpa, r=True, w=True, x=True)
        self.invept()
```

### 6.4 Shadow vs EPT Comparison


| Aspect | Shadow Page Tables | EPT/NPT |
|--------|-------------------|---------|
| **Hardware support** | None (works on any CPU) | Requires VT-x/AMD-V with EPT/NPT |
| **Guest PT modifications** | Always trap to VMM | No traps → guest manages freely |
| **Page walk cost** | 4 memory references | 20-24 memory references |
| **Memory overhead** | One shadow PT per guest PT | One EPT structure per VM |
| **TLB pressure** | Less (single walk) | More (TLB covers both walks) |
| **Context switch cost** | High (must reinstall shadow PT) | Low (EPT root stays) |
| **Ballooning support** | Complex | Simple |
| **Live migration** | Challenging (must migrate shadow state) | Straightforward |
| **KVM support** | Removed in 2015 (!) | Default since Linux 3.x |

### 6.5 Complexity Analysis


| Operation | Shadow PT | EPT |
|-----------|-----------|-----|
| Guest page table walk | 4 memory refs (trap + walk + install) | 24 memory refs (full 2D walk) |
| EPT violation handler | N/A | O(1) → allocate page + install entry |
| Guest CR3 write | O(512) → rebuild shadow table | O(1) → no action |
| Guest PT modification | O(1) → update single shadow entry | O(1) → no action |
| Memory overcommit (balloon) | O(n) → rebuild affected shadows | O(1) → update single EPT entry |

### 6.6 Edge Cases in Memory Virtualization


| Edge Case | Description | Mitigation |
|-----------|-------------|------------|
| **TLB shootdown** | Guest OS invalidates TLB on one vCPU → need cross-vCPU coordination | VMM must send IPI to all pCPUs running that VM |
| **Page table aliasing** | Two guest PTs map same guest PFN through different shadow PTs | VMM deduplicates shadow entries |
| **Memory overcommit** | Total guest memory > host physical memory | Balloon driver inflates to reclaim pages |
| **NUMA migration** | Guest memory migrates between NUMA nodes | EPT entries must be updated; TLB flush required |
| **Page sharing (KSM)** | Identical pages deduplicated across VMs | Write access must break COW; EPT must be updated |
| **Device DMA** | Device writes directly to MPA, bypassing EPT | IOMMU (VT-d) must provide separate translation |
| **5-level paging** | x86-64 57-bit VA with 5-level EPT | Adds 2 more EPT walk levels = 30+ memory refs |

## 7. I/O Virtualization

I/O virtualization gives each guest its own view of devices (disk, NIC, GPU) while enforcing isolation and sharing. There are three approaches: emulated, paravirtualized, and direct assignment.

### 7.1 Emulated I/O (Full Device Emulation)


**Concept:** The VMM presents a software-emulated device that mimics real hardware. The guest OS loads its native driver for that device, and every MMIO/PIO access traps to the VMM, which simulates the device behavior.

**Analogy → Phone Interpreter:**
Two people who don't speak the same language communicate through a human interpreter. Each sentence must be translated back and forth. It works, but it's slow → every word goes through the bottleneck.

**How It Works:**
1. Guest driver writes to a device register (e.g., NIC MMIO region)
2. CPU exits to VMM (EPT violation or PIO exit)
3. VMM decodes the instruction and simulates device behavior
4. VMM may DMA to/from guest memory
5. VMM resumes guest

**C++ Emulated NIC Skeleton:**
```cpp
class EmulatedNIC {
    uint8_t mac[6] = {0x52, 0x54, 0x00, 0x12, 0x34, 0x56};
    uint8_t* rx_ring;     // guest physical address of receive ring
    uint32_t rx_ring_size;
    uint8_t* tx_ring;
    DeviceState state = DEVICE_IDLE;

public:
    bool handle_mmio_write(uint64_t gpa, uint64_t value, uint8_t size) {
        switch (gpa - MMIO_BASE) {
        case TX_DESC_ADDR:
            tx_ring = gpa_to_hpa(value);  // guest gives us its TX ring
            break;
        case TX_START:
            transmit_packet(tx_ring);     // emulate a send
            break;
        case MAC_ADDR0 ... MAC_ADDR5:
            mac[gpa - MAC_ADDR0] = value & 0xFF;
            break;
        default:
            return false;  // not our register
        }
        return true;
    }

    void transmit_packet(uint8_t* guest_tx_desc) {
        // Read the descriptor from guest memory
        TxDesc desc;
        memcpy(&desc, get_host_ptr(guest_tx_desc), sizeof(TxDesc));
        // Copy packet data from guest memory
        uint8_t packet[1514];
        memcpy(packet, get_host_ptr(desc.buffer_addr), desc.len);
        // Write to host tap device
        write(host_tap_fd, packet, desc.len);
        // Write completion status back to guest
        desc.status = TX_COMPLETE;
        memcpy(get_host_ptr(guest_tx_desc), &desc, sizeof(TxDesc));
        // Interrupt the guest
        interrupt_guest();
    }
};
```

**Python Simulated Emulated Disk:**
```python
class EmulatedDisk:
    def __init__(self, image_path: str, size_mb: int = 256):
        self.image = bytearray(size_mb * 1024 * 1024)
        self.prdt = []  # physical region descriptor table

    def handle_mmio(self, addr: int, write: bool, data: int = 0) -> int:
        reg = addr & 0xFF
        if reg == DISK_SECTOR_NUM:
            self.sector = data
            return 0
        elif reg == DISK_CMD:
            return self.execute_command(data)
        elif reg == DISK_BUFFER_ADDR:
            self.buffer_gpa = data
            return 0
        return 0

    def execute_command(self, cmd: int) -> int:
        if cmd == CMD_READ:
            sector_data = self.image[self.sector * 512:(self.sector + 1) * 512]
            # DMA: copy data to guest memory
            self.vmm.write_guest_memory(self.buffer_gpa, sector_data)
            self.interrupt_guest()
            return 0
        elif cmd == CMD_WRITE:
            sector_data = self.vmm.read_guest_memory(self.buffer_gpa, 512)
            self.image[self.sector * 512:(self.sector + 1) * 512] = sector_data
            self.interrupt_guest()
            return 0
        return ERR_UNKNOWN_CMD
```

### 7.2 Paravirtualized I/O (Virtio)


**Concept:** The guest and VMM agree on a shared ring buffer (virtqueue) in guest memory. The guest places I/O requests directly into the ring; the VMM polls the ring and processes requests asynchronously. This eliminates MMIO traps for each I/O operation.

**Analogy → Dropbox Shared Folder:**
Instead of calling a translator for each sentence, both people write to a shared notebook. One writes a request, the other reads it later and writes back the result. Neither needs to interrupt the other → they check the notebook when convenient.

**Virtio Ring Layout:**
```
+------------------+      +------------------+
| Available Ring   |      | Used Ring        |
| (Guest writes)   |      | (Host writes)    |
+------------------+      +------------------+
| desc[0] = read    |      | desc[2] = done   |
| desc[1] = write   |      | desc[0] = done   |
| desc[2] = read    |      +------------------+
+------------------+
         |                       ^
         |  +--------------------+
         v  |
+------------------+
| Descriptor Table |
+------------------+
| buf_addr, len, flags |
| buf_addr, len, flags |
+------------------+
```

**C++ Virtio Queue Implementation:**
```cpp
struct VirtqDesc {
    uint64_t addr;   // guest physical address of buffer
    uint32_t len;
    uint16_t flags;
    uint16_t next;
};

struct VirtqAvail {
    uint16_t flags;
    uint16_t idx;      // guest writes here when it adds requests
    uint16_t ring[];
};

struct VirtqUsed {
    uint16_t flags;
    uint16_t idx;      // host writes here when it completes requests
    struct UsedElem {
        uint32_t id;
        uint32_t len;
    } ring[];
};

class VirtQueue {
    VirtqDesc* desc;
    VirtqAvail* avail;
    VirtqUsed* used;
    uint16_t queue_size;

public:
    VirtQueue(uint64_t desc_hpa, uint64_t avail_hpa, uint64_t used_hpa, uint16_t sz)
        : queue_size(sz) {
        desc  = get_host_ptr(desc_hpa);
        avail = get_host_ptr(avail_hpa);
        used  = get_host_ptr(used_hpa);
    }

    void process_requests() {
        uint16_t avail_idx = __atomic_load_n(&avail->idx, __ATOMIC_ACQUIRE);
        uint16_t used_idx = __atomic_load_n(&used->idx, __ATOMIC_RELAXED);

        while (used_idx != avail_idx) {
            uint16_t desc_id = avail->ring[used_idx % queue_size];
            // Process the descriptor chain
            uint16_t current = desc_id;
            while (current < queue_size) {
                VirtqDesc& d = desc[current];
                if (d.flags & VIRTQ_DESC_F_WRITE) {
                    // Device-to-guest (read completion)
                    handle_guest_read(&d);
                } else {
                    // Guest-to-device (write request)
                    handle_guest_write(&d);
                }
                current = d.next;
            }
            // Mark as used
            used->ring[used_idx % queue_size] = {desc_id, 0};
            used_idx++;
            __atomic_store_n(&used->idx, used_idx, __ATOMIC_RELEASE);
        }
        // Notify guest if notification is enabled
        if (used_idx - avail->last_notified > queue_size / 2)
            interrupt_guest();
    }

    void handle_guest_read(VirtqDesc* d) {
        // Copy data from host backing store to guest buffer
        memcpy(get_host_ptr(d->addr), host_buffer, d->len);
        host_buffer += d->len;
    }

    void handle_guest_write(VirtqDesc* d) {
        // Copy data from guest buffer to host backing store
        memcpy(host_buffer, get_host_ptr(d->addr), d->len);
        host_buffer += d->len;
    }
};
```

**Python Simulated Virtio-Block:**
```python
class VirtioBlock:
    QUEUE_SIZE = 256

    def __init__(self, image_path: str):
        self.image = open(image_path, 'r+b')
        self.desc = None
        self.avail = None
        self.used = None

    def set_queue(self, desc_gpa: int, avail_gpa: int, used_gpa: int):
        self.desc = memoryview(self.vmm.gpa_to_hva(desc_gpa, 16 * self.QUEUE_SIZE)).cast('B')
        self.avail = memoryview(self.vmm.gpa_to_hva(avail_gpa, 4 + 2 * self.QUEUE_SIZE)).cast('B')
        self.used = memoryview(self.vmm.gpa_to_hva(used_gpa, 8 * self.QUEUE_SIZE)).cast('B')

    def poll(self):
        avail_idx = struct.unpack_from('<H', self.avail, 2)[0]
        used_idx = struct.unpack_from('<H', self.used, 2)[0]
        while used_idx != avail_idx:
            desc_id = struct.unpack_from('<H', self.avail, 4 + (used_idx % self.QUEUE_SIZE) * 2)[0]
            self.process_desc(desc_id)
            used_idx += 1
            struct.pack_into('<H', self.used, 2, used_idx)

    def process_desc(self, desc_id: int):
        off = desc_id * 16
        addr = struct.unpack_from('<Q', self.desc, off)[0]
        length = struct.unpack_from('<I', self.desc, off + 8)[0]
        flags = struct.unpack_from('<H', self.desc, off + 12)[0]
        if flags & 2:
            data = self.image.read(length)
            self.vmm.write_guest_memory(addr, data)
        else:
            data = self.vmm.read_guest_memory(addr, length)
            self.image.write(data)
```

### 7.3 Direct I/O Assignment (SR-IOV)


**Concept:** A physical device presents itself as multiple Virtual Functions (VFs) via Single Root I/O Virtualization (SR-IOV). Each VF can be assigned directly to a guest → the guest driver talks to real hardware with zero VMM involvement on the data path.

**Analogy → Apartment Mailbox:**
Instead of all mail going through a front desk (emulated) or a shared bin (virtio), each resident gets their own private mailbox. The mail carrier puts mail directly into each box. The management only sets up the boxes once.

**SR-IOV Architecture:**
```
+--------------------------------------------------+
|                   Physical Device                 |
|  +------------------+  +-----------------------+  |
|  | Physical Function|  | Virtual Functions      |  |
|  | (PF - management) |  | VF1  VF2  VF3 ... VFn |  |
|  +------------------+  +-----------------------+  |
+--------------------------------------------------+
           |                     |   |   |   |
     VMM driver             VM1  VM2 VM3 ... VMn
                           (passthrough VF via VT-d)
```

**Steps to Assign a VF to a Guest:**
1. Enable SR-IOV on the PF: `echo 4 > /sys/class/net/eth0/device/sriov_numvfs`
2. Detach VF from host driver: `driverctl unbind pci 0000:01:00.1`
3. Assign VF via VFIO: `qemu-system-x86_64 -device vfio-pci,host=01:00.1 ...`
4. Configure IOMMU (VT-d) to allow the guest DMA access to the VF BARs

**Performance Comparison:**
```
Operation          Emulated    Virtio      SR-IOV
-----------------  --------    ------      -----
Network latency    50-100Âµs    10-20Âµs     1-3Âµs
Throughput         1-5 Gbps   10-25 Gbps  30-50+ Gbps
CPU overhead       ~80%        ~30%        ~5%
Context switches   1 per I/O   0 (polling) 0
VMM involvement    Every op    Batch poll  Setup only
```

### 7.4 Virtio vs SR-IOV Comparison


| Aspect | Virtio | SR-IOV |
|--------|--------|--------|
| **Hardware support** | None (pure software) | Device must support SR-IOV |
| **IOMMU/VT-d required** | No | Yes |
| **Live migration** | Supported | Very difficult (device state on hardware) |
| **VMM data path** | Polls virtqueue | None (direct pass-through) |
| **VM density** | Unlimited | Limited by number of VFs |
| **Feature support** | All (software-defined) | Hardware-dependent |
| **Driver requirements** | Special virtio driver | Native device driver |
| **Performance** | Good | Near-native |
| **Use case** | General purpose | High-performance workloads (NVMe, GPU, 100GbE) |

## 8. Containerization (OS-Level Virtualization)

Containers virtualize the OS rather than the hardware. Multiple containers share the same host kernel but get isolated views of the filesystem, process tree, network stack, and resource limits.

### 8.1 Namespaces → What Containers *See*


Namespaces restrict what a process can see. Each namespace wraps a global OS resource in an abstraction that makes the process think it has its own private instance.

| Namespace | Isolates | Since Linux | Created by |
|-----------|----------|-------------|------------|
| **PID** | Process IDs | 2.6.24 | `clone(CLONE_NEWPID)` |
| **Network** | Network interfaces, IP, routing | 2.6.29 | `clone(CLONE_NEWNET)` |
| **Mount** | Filesystem mount points | 2.4.19 | `clone(CLONE_NEWNS)` |
| **UTS** | Hostname, domain name | 2.6.19 | `clone(CLONE_NEWUTS)` |
| **IPC** | System V IPC, POSIX message queues | 2.6.19 | `clone(CLONE_NEWIPC)` |
| **User** | User and group IDs | 3.8 | `clone(CLONE_NEWUSER)` |
| **Cgroup** | Cgroup root directory | 4.6 | `clone(CLONE_NEWCGROUP)` |
| **Time** | Time (CLOCK_MONOTONIC, CLOCK_BOOTTIME) | 5.6 | `clone(CLONE_NEWTIME)` |

**Analogy → Cubicles in an Office:**
Each engineer in a cubicle has their own desk, phone, filing cabinet, and name plate. They can't see their neighbor's desk or papers. But they all share the same building, electricity, and plumbing. If you walk through the office, each cubicle looks like its own mini-office.

**C++ Namespace Creation (Linux syscall):**
```cpp
#include <sched.h>
#include <unistd.h>
#include <sys/wait.h>

int child_func(void* arg) {
    // Inside new namespaces
    sethostname("container-1", 11);
    mount("none", "/proc", "proc", 0, nullptr);
    execlp("/bin/bash", "/bin/bash", nullptr);
    return 0;
}

int main() {
    constexpr int STACK_SIZE = 1024 * 1024;
    char* stack = new char[STACK_SIZE];

    // Create child in new PID, UTS, mount, network, IPC namespaces
    int flags = CLONE_NEWPID | CLONE_NEWUTS | CLONE_NEWNS |
                CLONE_NEWNET | CLONE_NEWIPC | SIGCHLD;

    pid_t pid = clone(child_func, stack + STACK_SIZE, flags, nullptr);
    if (pid < 0) {
        perror("clone");
        return 1;
    }
    waitpid(pid, nullptr, 0);
    delete[] stack;
    return 0;
}
```

**Python Simulated Namespace:**
```python
import os
import ctypes

LIBC = ctypes.CDLL("libc.so.6")
CLONE_NEWPID = 0x20000000
CLONE_NEWNS = 0x00020000
CLONE_NEWUTS = 0x04000000
CLONE_NEWNET = 0x40000000
STACK_SIZE = 1024 * 1024

def run_in_new_namespaces():
    stack = ctypes.create_string_buffer(STACK_SIZE)
    flags = CLONE_NEWPID | CLONE_NEWNS | CLONE_NEWUTS | CLONE_NEWNET | os.SIGCHLD

    pid = LIBC.clone(
        ctypes.CFUNCTYPE(ctypes.c_int)(child_function),
        ctypes.byref(stack, STACK_SIZE - 8),
        flags,
        None
    )
    if pid < 0:
        raise OSError("clone failed")
    os.waitpid(pid, 0)

# Usage: run_in_new_namespaces() creates isolated process
```

### 8.2 Cgroups → What Containers *Use*


Cgroups (control groups) limit, account for, and isolate resource usage (CPU, memory, disk I/O, network). While namespaces dictate visibility, cgroups enforce boundaries.

| Cgroup Controller | Controls | File |
|-------------------|----------|------|
| **cpu** | CPU shares, quota, period | `cpu.cfs_quota_us`, `cpu.shares` |
| **memory** | Memory limit, swap, OOM | `memory.limit_in_bytes`, `memory.oom_control` |
| **blkio** | Block I/O throttling | `blkio.throttle.read_bps_device` |
| **cpuset** | CPU core pinning | `cpuset.cpus`, `cpuset.mems` |
| **pids** | Max number of processes | `pids.max` |
| **net_cls** | Network traffic classification | `net_cls.classid` |
| **freezer** | Suspend/resume processes | `freezer.state` |
| **hugetlb** | Huge page usage | `hugetlb.2MB.limit_in_bytes` |

**Analogy → Cafeteria Meal Plan:**
A university cafeteria gives each student a meal card with daily limits: $20 spending cap, 3 meal entries max, no more than 2 desserts. The student can choose what to eat within those limits. Cgroups are the meal card limits → they set the boundaries, not the content.

**C++ Skeleton for Cgroup Setup:**
```cpp
class CgroupManager {
    std::string cgroup_path;

public:
    CgroupManager(const std::string& name) {
        cgroup_path = "/sys/fs/cgroup/" + name;
        mkdir(cgroup_path.c_str(), 0755);
    }

    void set_cpu_limit(int quota_us, int period_us = 100000) {
        write_file(cgroup_path + "/cpu.cfs_quota_us", std::to_string(quota_us));
        write_file(cgroup_path + "/cpu.cfs_period_us", std::to_string(period_us));
    }

    void set_memory_limit(uint64_t bytes) {
        write_file(cgroup_path + "/memory.limit_in_bytes", std::to_string(bytes));
    }

    void add_process(pid_t pid) {
        write_file(cgroup_path + "/cgroup.procs", std::to_string(pid));
    }

    void set_pids_limit(int max) {
        write_file(cgroup_path + "/pids.max", std::to_string(max));
    }

    void freeze() {
        write_file(cgroup_path + "/freezer.state", "FROZEN");
    }

    void thaw() {
        write_file(cgroup_path + "/freezer.state", "THAWED");
    }
};

// Usage:
// CgroupManager cg("/docker/container1");
// cg.set_cpu_limit(50000);  // 50% of one core (50000/100000)
// cg.set_memory_limit(512UL * 1024 * 1024);  // 512MB
// cg.add_process(1234);  // restrict existing process
```

**Python Cgroup Limiter:**
```python
import os

class CgroupLimiter:
    def __init__(self, name: str):
        self.path = f"/sys/fs/cgroup/{name}"
        os.makedirs(self.path, exist_ok=True)

    def limit_cpu(self, quota_us: int, period_us: int = 100000):
        with open(f"{self.path}/cpu.max", "w") as f:
            f.write(f"{quota_us} {period_us}")

    def limit_memory(self, bytes: int):
        with open(f"{self.path}/memory.max", "w") as f:
            f.write(f"{bytes}")

    def limit_processes(self, max: int):
        with open(f"{self.path}/pids.max", "w") as f:
            f.write(f"{max}")

    def add_process(self, pid: int):
        with open(f"{self.path}/cgroup.procs", "w") as f:
            f.write(f"{pid}")

# cg = CgroupLimiter("my-container")
# cg.limit_cpu(50000, 100000)
# cg.limit_memory(256 * 1024 * 1024)
# cg.add_process(os.getpid())
```

### 8.3 Docker Architecture


Docker uses Linux namespaces + cgroups + union filesystems (overlay2) to package and run containers.

```
+---------------------------------------------------------------------+
|                        Docker Architecture                          |
+---------------------------------------------------------------------+
|  Client (docker CLI)                                                 |
|    |                                                                 |
|    v                                                                 |
|  Docker Daemon (dockerd)                                             |
|    ├── containerd  (container lifecycle management)                  |
|    │   └── runc     (OCI runtime → creates namespaces + cgroups)     |
|    ├── image management (layered storage)                            |
|    └── network management (CNI plugins)                              |
+---------------------------------------------------------------------+
|  Host Kernel (shared by all containers)                              |
+---------------------------------------------------------------------+
```

**Container vs VM at the Process Level:**

```
Virtual Machine:                      Container:
+------------------+                 +------------------+
| VM: App A        |                 | Container: App A |
|   Guest kernel   |                 |                  |
|   Hypervisor ----|---- VMM         |   Docker         |
+------------------+                 +------------------+
+------------------+                 +------------------+
| VM: App B        |                 | Container: App B |
|   Guest kernel   |                 |                  |
|   Hypervisor ----|---- VMM         |   Docker         |
+------------------+                 +------------------+
       |                                     |
   Host Kernel                         Host Kernel
```

### 8.4 Container vs VM Comprehensive Comparison


| Aspect | Virtual Machine | Container |
|--------|----------------|-----------|
| **Isolation level** | Hardware-enforced | Kernel-enforced (namespaces) |
| **Guest OS** | Any OS with kernel | Same kernel as host |
| **Boot time** | 30-90 seconds | < 1 second |
| **Image size** | 1-10 GB | 50-500 MB |
| **Memory overhead** | 100MB-1GB (guest kernel + services) | 5-50MB (just the app) |
| **CPU overhead** | 5-20% (VMM + 2D page walk) | 1-3% (syscall overhead) |
| **Density per host** | 2-10 typical | 50-500+ typical |
| **Live migration** | Supported | Not natively supported |
| **Security boundary** | Strong (hardware isolation) | Weaker (single kernel) |
| **Persistence** | Stateful by design | Stateless by convention |
| **Update model** | Patch guest OS | Rebuild image |
| **I/O performance** | Virtio: good; SR-IOV: near-native | Native (direct host syscalls) |
| **Use case** | Workloads needing full OS isolation | Microservices, stateless apps |

**C++ Lightweight Container Simulation:**
```cpp
#include <unistd.h>
#include <sys/mount.h>
#include <sys/syscall.h>
#include <sched.h>

class Container {
    std::string rootfs;
    std::string hostname;
    int cpu_quota;
    int mem_limit_mb;

public:
    Container(const std::string& fs, const std::string& name, int cpu, int mem)
        : rootfs(fs), hostname(name), cpu_quota(cpu), mem_limit_mb(mem) {}

    void run(const std::vector<std::string>& command) {
        pid_t pid = syscall(SYS_clone, SIGCHLD | CLONE_NEWPID | CLONE_NEWNS |
                           CLONE_NEWUTS | CLONE_NEWNET | CLONE_NEWIPC, 0, nullptr, nullptr);
        if (pid == 0) {
            // Child: inside the container
            setup_namespaces();
            setup_cgroups();
            sethostname(hostname.c_str(), hostname.length());
            chroot(rootfs.c_str());
            chdir("/");
            mount("proc", "/proc", "proc", 0, nullptr);
            // Execute the command
            execvp(command[0].c_str(), const_cast<char**>(command.data()));
        }
    }

private:
    void setup_cgroups() {
        // Write PID to cgroup.procs
        std::string cg_path = "/sys/fs/cgroup/containers/" + hostname + "/";
        mkdir(cg_path.c_str(), 0755);
        write_file(cg_path + "cpu.max",
                   std::to_string(cpu_quota) + " 100000");
        write_file(cg_path + "memory.max",
                   std::to_string(mem_limit_mb * 1024 * 1024));
        write_file(cg_path + "pids.max", "128");
        write_file(cg_path + "cgroup.procs", std::to_string(getpid()));
    }

    void setup_namespaces() {
        // Only needed for parent → children inherit automatically
    }
};
```

**Python Simulated Container Manager:**
```python
import os
import subprocess
import ctypes

class Container:
    def __init__(self, name: str, rootfs: str, mem_mb: int = 256, cpu_quota: int = 50000):
        self.name = name
        self.rootfs = rootfs
        self.mem_mb = mem_mb
        self.cpu_quota = cpu_quota
        self.cg_path = f"/sys/fs/cgroup/containers/{name}"

    def start(self, command: list):
        # Set up cgroups
        os.makedirs(self.cg_path, exist_ok=True)
        self._write_cgroup("memory.max", f"{self.mem_mb * 1024 * 1024}")
        self._write_cgroup("cpu.max", f"{self.cpu_quota} 100000")
        self._write_cgroup("pids.max", "128")

        # Fork into namespaces (simplified via unshare)
        pid = os.fork()
        if pid == 0:  # child
            self._unshare_namespaces()
            os.sethostname(self.name)
            os.chroot(self.rootfs)
            os.chdir("/")
            subprocess.run(command)
        else:
            self._write_cgroup("cgroup.procs", str(pid))

    def _unshare_namespaces(self):
        libc = ctypes.CDLL("libc.so.6")
        libc.unshare(0x20000000 | 0x00020000 | 0x04000000 | 0x40000000)

    def _write_cgroup(self, file: str, value: str):
        with open(f"{self.cg_path}/{file}", "w") as f:
            f.write(value)

    def stop(self):
        self._write_cgroup("freezer.state", "FROZEN")
        # Kill processes
        with open(f"{self.cg_path}/cgroup.procs") as f:
            for pid_str in f:
                os.kill(int(pid_str.strip()), 9)
```

### 8.5 Firecracker → MicroVM Approach


AWS Firecracker is a VMM designed specifically for serverless workloads (Lambda, Fargate). It uses KVM with a minimized device model → no PCI bus, BIOS, or ACPI → giving container-like density with VM-level isolation.

**Key Design Points:**
- Single process, ~50K LOC in Rust
- Boots a microVM in ~125ms
- 5MB memory overhead per microVM (vs 100MB+ for QEMU)
- Minimal device model: virtio-block, virtio-net, serial console only
- Uses Linux 5.10+ with 5-level page table support for memory efficiency

**Firecracker VM Boot Flow:**
```
1. Open /dev/kvm
2. Create VM fd (KVM_CREATE_VM)
3. Create vCPU fd (KVM_CREATE_VCPU)
4. Set up guest memory (KVM_SET_USER_MEMORY_REGION)
5. Load Linux kernel (direct boot → no GRUB)
6. Load initrd with minimal bootstrap
7. Set up virtio-mmio devices
8. Run vCPU (KVM_RUN) → guest boots in ~50-125ms
```

**Firecracker vs Docker vs QEMU:**
```
            Firecracker    Docker         QEMU
Boot time   125ms          <1s            30-90s
Memory      5MB            5-50MB         100MB-1GB
Isolation   HW (KVM)       Namespaces     HW (KVM)
Density     1000+/host     1000+/host     2-10/host
Security    Strong         Moderate       Strong
Guest OS    Linux only     Same kernel    Any OS
```

## 9. Interview Corner

### Q1: What is the difference between VT-x and AMD-V?


Intel VT-x and AMD-V are CPU extensions that enable hardware-assisted virtualization. They achieve the same goal → reducing the VMM's complexity and improving performance → but differ in implementation details.

| Feature | Intel VT-x | AMD-V |
|---------|-----------|-------|
| **Root mode** | VMX root (VMM) / non-root (guest) | Host / Guest mode |
| **VM entry/exit** | VM entries / VM exits | VMRUN / #VMEXIT |
| **Page table hardware** | EPT (Extended Page Tables) | NPT (Nested Page Tables) |
| **IOMMU** | VT-d | AMD-Vi |
| **MSR bitmaps** | Yes (per-VM) | No (global intercept) |
| **Posted interrupts** | Yes (APICv) | AVIC |
| **VMCS format** | Proprietary (documented) | VMCB (documented) |
| **ASID for TLB tagging** | VPID | ASID |
| **EPT violation** | Specific exit reason with GPA | NPT fault with nested page fault info |

### Q2: What is nested virtualization? How does it work?


Nested virtualization is running a VMM *inside* a VM → for example, running KVM inside a VMware VM on AWS. The inner VMM must handle VMX instructions that the outer VMM normally handles.

**Challenge:** When the inner VMM executes `VMXON`, the outer VMM intercepts it (it's a VM-exit). The outer VMM must:
1. Recognize that the guest is trying to start a hypervisor
2. Emulate VMX instruction behavior
3. Map inner guest VMCS to outer shadow VMCS structures

**Implementation (KVM on KVM):**
- Outer KVM intercepts guest VMLAUNCH/VMRESUME
- Outer KVM maps inner VMCS fields to shadow VMCS
- Outer KVM uses hardware nested virtualization support (VMX "VMCS shadowing" on Intel, or "Nested Nested Page Tables" on AMD)

**Intel VMCS Shadowing:**
- Special VM-execution controls enable "VMCS shadowing"
- Inner VMM's VMREAD/VMWRITE to "shadow VMCS" succeed without VM-exit
- Writes to the "active VMCS" (real hardware VMCS) still trap to outer VMM
- Reduces VM-exit frequency from thousands/sec to dozens/sec

### Q3: Can paravirtualization be combined with hardware virtualization?


Yes → this is the dominant architecture today. KVM uses VT-x/AMD-V for CPU virtualization (hardware-assisted) AND virtio for I/O (paravirtualized). This gives the best of both:
- VT-x handles CPU and memory with minimal traps
- Virtio handles I/O with efficient ring buffers

### Q4: What happens when a VM is overcommitted on memory?


When total guest memory exceeds host physical memory, the host must reclaim pages:
1. **Balloon driver**: Guest kernel module inflates (allocates memory), forcing the guest to page out; VMM reuses the now-free GPA range
2. **Host swapping**: VMM pages out guest memory to the host swap device
3. **KSM (Kernel Same-page Merging)**: Host deduplicates identical pages across VMs
4. **Memory compaction**: VMM migrates pages to reduce fragmentation

Overcommit risks: OOM killer may kill the VMM or a critical VM; performance thrashes under pressure; live migration becomes slower.

### Q5: How does live migration work in memory virtualization?


Live migration transfers a running VM from one host to another with minimal downtime:
1. **Pre-copy phase**: VMM iteratively copies dirty pages to target host
2. **Stop-and-copy phase**: VM paused, final dirty pages transferred
3. **Resume**: VM continues on target host

For memory virtualization:
- Shadow PT: VMM must also migrate shadow page tables (complex)
- EPT: VMM migrates EPT structures alongside guest memory (simpler)

Downtime target: &lt; 100ms for most workloads.

### Q6: Why did KVM remove shadow page table support in 2015?


By 2015, EPT hardware was universally available on server-class CPUs. Shadow page tables required a VM-exit on every guest CR3 write and every page table modification → significantly hurting performance for workloads with frequent context switches or page table activity (e.g., database workloads with large working sets). EPT removed this overhead completely.

### Q7: What is the cause of "VM-Exit storm"?


A VM-Exit storm occurs when the VMM resumes the guest and it immediately exits again on the next instruction. Causes:
- **EPT violation on every access**: Guest touches a GPA that has no EPT mapping, VMM maps it, guest runs one instruction, next instruction touches unmapped GPA
- **I/O port emulation**: Guest program does PIO to an emulated device at high frequency
- **Interrupt injection**: VMM injects interrupt, guest processes it, immediately exits due to pending interrupt

**Detection:** If VM-exit rate exceeds ~100K/sec per vCPU, investigate exit reason distribution.

### Q8: How does timekeeping work in a VM?


Guest OS uses time sources that are virtualized:
- **TSC (Time Stamp Counter)**: Must be stable across vCPU migration → use TSC scaling + TSC offsetting (VT-x) or constant TSC + invariant TSC
- **KVM-clock (paravirtualized)**: Guest reads time from a shared memory page updated by the host
- **PIT/HPET (emulated)**: Interrupt-driven, slower but compatible with unmodified guests

Without invariant TSC, a guest migrated between different-speed CPUs could see time jump backward → breaking applications.

## 10. Applications in Real Systems

### 10.1 KVM (Kernel-based Virtual Machine)


| Aspect | Detail |
|--------|--------|
| **Type** | Type 1 (kernel module) + Type 2 (QEMU userspace) |
| **CPU virt** | Hardware-assisted (VT-x/AMD-V) via /dev/kvm |
| **Memory virt** | EPT/NPT (shadow PT removed in 2015) |
| **I/O virt** | Virtio (primary), SR-IOV, VFIO passthrough |
| **Management** | libvirt, virsh, virt-manager |
| **Guest support** | Linux, Windows, \*BSD |
| **Notable users** | AWS (EC2 Nitro), Google Cloud, OpenStack |
| **Lines of code** | Kernel: ~150K; QEMU: ~1.5M |

### 10.2 Xen


| Aspect | Detail |
|--------|--------|
| **Type** | Type 1 (bare-metal hypervisor) |
| **CPU virt** | PV (paravirtualized) → HVM (hardware-assisted) |
| **Memory virt** | Shadow PT (original) → EPT (later) |
| **I/O virt** | Split drivers (dom0 ↔ domU), PV drivers |
| **Management** | xl, XAPI, Xen Orchestra |
| **Guest support** | Linux, Windows (HVM), NetBSD |
| **Notable users** | AWS (EC2 Classic), Oracle VM, Citrix Hypervisor |
| **Architecture** | Microkernel (< 1M LOC); dom0 is privileged management VM |

### 10.3 VMware ESXi


| Aspect | Detail |
|--------|--------|
| **Type** | Type 1 (bare-metal / "hypervisor" in VMware terms) |
| **CPU virt** | Binary translation (pre-VT-x) + HW-assisted (VT-x/AMD-V) |
| **Memory virt** | Shadow PT (legacy) → EPT/NPT |
| **I/O virt** | VMXNET (paravirtualized NIC), PVSCSI, SR-IOV |
| **Management** | vCenter, vSphere, ESXCLI |
| **Guest support** | 100+ OS types in compatibility matrix |
| **Notable users** | Enterprise data centers, VDI |
| **Features** | vMotion, DRS, HA, FT, vSAN |

### 10.4 Microsoft Hyper-V


| Aspect | Detail |
|--------|--------|
| **Type** | Type 1 (runs directly on hardware, parent partition) |
| **CPU virt** | HW-assisted only (no software fallback) |
| **Memory virt** | EPT with SLAT (Second-Level Address Translation) |
| **I/O virt** | SynIC (synthetic interrupt controller), VMBus, SR-IOV |
| **Management** | Hyper-V Manager, System Center VMM, PowerShell |
| **Guest support** | Windows, Linux (with Integration Services) |
| **Notable users** | Azure (entire cloud runs on Hyper-V) |
| **Features** | Live Migration, Replica, Shielded VMs, Nested Virtualization |

### 10.5 Docker (Container Runtime)


| Aspect | Detail |
|--------|--------|
| **Type** | OS-level virtualization (namespace-based) |
| **Isolation** | Namespaces + cgroups |
| **Image format** | OCI (Open Container Initiative) |
| **Storage** | OverlayFS, aufs, devicemapper |
| **Networking** | CNI plugins (bridge, overlay, macvlan) |
| **Orchestration** | Kubernetes, Docker Swarm, Nomad |
| **Performance** | Near-native (direct syscalls) |
| **Security** | Seccomp, AppArmor, SELinux, user namespaces |

### 10.6 AWS Firecracker


| Aspect | Detail |
|--------|--------|
| **Type** | MicroVM (VMM) → KVM-based |
| **CPU virt** | KVM + VT-x |
| **Memory virt** | EPT with 5-level page table support |
| **I/O virt** | Virtio-mmio (block + net only) |
| **Overhead** | ~5MB per microVM |
| **Boot time** | ~125ms (kernel + init) |
| **Language** | Rust (~50K LOC) |
| **Users** | AWS Lambda, AWS Fargate |
| **Security** | KVM hardware isolation + jailer process |

## 11. Quiz

1. **What is the key difference between Type 1 and Type 2 hypervisors?**
   - Type 1 runs directly on hardware; Type 2 runs on a host OS.

2. **Why is EPT faster than shadow page tables for most workloads?**
   - EPT eliminates VM-exits on guest page table modifications.

3. **What is the primary advantage of paravirtualized I/O (virtio) over full device emulation?**
   - Virtio uses shared ring buffers, eliminating MMIO traps for each I/O.

4. **What is the minimum number of memory accesses for a 4-level page walk with EPT?**
   - 20-24 (4 guest walk Ã— 4 EPT walk + extra for TLB miss).

5. **Why can't containers run a different kernel than the host?**
   - Containers share the host kernel through syscalls; they don't have their own kernel.

6. **What mechanism does the VMM use to enforce memory isolation between guests?**
   - EPT (hardware) or shadow page tables (software) ensure Guest A cannot access Guest B's memory.

7. **What is the purpose of the balloon driver?**
   - To reclaim guest memory under overcommit by inflating inside the guest.

8. **What is the key trade-off between SR-IOV and virtio?**
   - SR-IOV has near-native performance but prevents live migration; virtio supports live migration with slightly lower performance.

9. **What happens on a VM exit?**
   - CPU saves guest state to VMCS, loads host state, enters VMM. VMM handles the exit reason and resumes the guest.

10. **How does live migration achieve sub-100ms downtime?**
    - Pre-copy phase iteratively transfers dirty pages; final stop-and-copy phase pauses the VM only long enough to transfer remaining dirtied pages.

## 12. TypeScript Implementation — Nested Page Walk Simulator

```typescript
/**
 * NestedPageWalkSimulator: Models a guest virtual address translation
 * through 4-level guest page tables and 4-level EPT (Extended Page Tables).
 * 
 * Demonstrates why EPT/NPT requires up to 24 memory accesses per translation.
 */
interface PageWalkResult {
  levels: PageWalkLevel[];
  totalMemoryAccesses: number;
  eptViolation: boolean;
}

interface PageWalkLevel {
  level: number;           // 0=L4, 1=L3, 2=L2, 3=L1
  type: 'guest' | 'ept';
  virtualAddr: string;     // partial VPN
  pfn: number;             // page frame number from table entry
  tableAddr: string;       // physical address of page table
  entryAddr: string;       // physical address of table entry
  entryValue: string;      // raw entry bits
}

class MemoryVirtualizationSimulator {
  // Simulated physical memory for page tables
  private readonly PAGE_SIZE = 4096;
  private readonly BITS_PER_LEVEL = 9;  // x86-64 uses 9 bits per level
  private readonly ENTRY_SIZE = 8;      // 8 bytes per PTE

  /**
   * Walk a guest virtual address through 4 guest levels + 4 EPT levels.
   * Guest VA → Guest Page Tables → GPA → EPT → HPA
   */
  walkGuestAddress(guestVA: string, guestCR3: number, eptp: number): PageWalkResult {
    const va = BigInt(guestVA);
    const levels: PageWalkLevel[] = [];
    let totalAccesses = 0;

    // Extract 4 VPN indices from guest VA
    const vpn4 = Number((va >> BigInt(39)) & BigInt(0x1FF));  // bits 47:39
    const vpn3 = Number((va >> BigInt(30)) & BigInt(0x1FF));  // bits 38:30
    const vpn2 = Number((va >> BigInt(21)) & BigInt(0x1FF));  // bits 29:21
    const vpn1 = Number((va >> BigInt(12)) & BigInt(0x1FF));  // bits 20:12
    const offset = Number(va & BigInt(0xFFF));                 // bits 11:0

    console.log(`Guest VA: ${guestVA}`);
    console.log(`  VPN4=${vpn4.toString().padStart(3)} VPN3=${vpn3.toString().padStart(3)} VPN2=${vpn2.toString().padStart(3)} VPN1=${vpn1.toString().padStart(3)} Offset=${offset.toString(16).padStart(3,'0')}`);

    // Simulate 4-level guest page walk
    let currentTable = guestCR3;
    const vpns = [vpn4, vpn3, vpn2, vpn1];

    for (let level = 0; level < 4; level++) {
      // Each level requires:
      // 1. Read guest PML4 entry → 1 guest memory access
      // 2. If using EPT: each guest access triggers an EPT walk to translate the GPA
      
      const entryAddr = currentTable + vpns[level] * this.ENTRY_SIZE;
      
      // Guest page table access
      levels.push({
        level: level + 1, type: 'guest',
        virtualAddr: `VPN${4-level}=${vpns[level]}`,
        pfn: 0x1000 + level, tableAddr: `0x${currentTable.toString(16)}`,
        entryAddr: `0x${entryAddr.toString(16)}`, entryValue: `[simulated] P=1 PFN=0x${(0x1000+level).toString(16)}`
      });
      totalAccesses++;  // Guest PT read

      // EPT walk for the GPA (each guest memory access triggers EPT walk)
      if (currentTable !== guestCR3 || level === 0) {
        // Simulate 4-level EPT walk for the guest page table base
        for (let eptLevel = 0; eptLevel < 4; eptLevel++) {
          levels.push({
            level: eptLevel + 1, type: 'ept',
            virtualAddr: `EPT-L${4-eptLevel}`,
            pfn: 0x5000 + eptLevel, tableAddr: `EPT-0x${eptLevel}`,
            entryAddr: `EPT-entry-${eptLevel}`,
            entryValue: `[simulated EPT] R=1 W=1 X=1`
          });
          totalAccesses++;  // EPT walk memory access
        }
      }

      // Move to next table (simulated)
      currentTable = 0x2000 + level * 0x1000;
    }

    // Final data access: read from 0x{final GPA}
    const finalGPA = currentTable + offset;
    console.log(`  GPA (after guest walk): 0x${finalGPA.toString(16)}`);

    // One more EPT walk to translate the final GPA to HPA
    for (let eptLevel = 0; eptLevel < 4; eptLevel++) {
      levels.push({
        level: eptLevel + 1, type: 'ept',
        virtualAddr: `EPT-FINAL-L${4-eptLevel}`,
        pfn: 0x9000 + eptLevel,
        tableAddr: `EPT-FINAL-0x${eptLevel}`,
        entryAddr: `EPT-FINAL-entry-${eptLevel}`,
        entryValue: `[simulated] R=1 W=1 X=1`
      });
      totalAccesses++;
    }

    const eptViolation = false;

    console.log(`\nTotal memory accesses for this translation: ${totalAccesses}`);
    console.log(`  Guest PT walks: 4 reads`);
    console.log(`  EPT walks: 4 × ${totalAccesses - 4} translations for guest table reads + final data`);
    console.log(`  Data access (final GPA → HPA via EPT): 4 EPT reads`);

    return { levels, totalMemoryAccesses, eptViolation };
  }

  compareShadowVsEPT(): void {
    console.log('\n========== Shadow Page Tables vs EPT/NPT ==========');
    console.log('\nShadow Page Tables:');
    console.log('  VMM maintains shadow copies of guest page tables.');
    console.log('  Guest PT modifications → VM-exit → VMM updates shadow PT → VM-entry.');
    console.log('  Memory accesses per translation: 4 (guest walk via shadow PT, no EPT)');
    console.log('  BUT: every guest page table modification causes a VM-exit!');
    console.log('  Cost: applications that frequently modify page tables (fork, mmap, munmap)');
    console.log('         suffer thousands of VM-exits per second.');

    console.log('\nEPT/NPT (Nested Page Tables):');
    console.log('  Hardware walks both guest PT and EPT simultaneously.');
    console.log('  Guest PT modifications DO NOT cause VM-exits.');
    console.log('  Memory accesses per translation: up to 24 (4 guest × 4 EPT + 4 data EPT)');
    console.log('  BUT: no VM-exits for page table operations.');

    console.log('\nComparison:');
    console.log('  Metric            | Shadow PT   | EPT/NPT');
    console.log('  VM-exits on PT op | High        | None');
    console.log('  Translation cost  | ~4 accesses | ~24 accesses');
    console.log('  Overall perf      | Good for   | Good for');
    console.log('                    | static maps | dynamic maps');
    console.log('  Modern usage      | Legacy      | Default (since ~2010)');
  }
}

// Example: Walk a guest virtual address
const sim = new MemoryVirtualizationSimulator();
console.log('=== Nested Page Walk Demonstration ===');
console.log('Guest VA: 0x7F00_1234_5678, Guest CR3: 0x100000, EPTP: 0x200000\n');

sim.walkGuestAddress('0x7F0012345678', 0x100000, 0x200000);
sim.compareShadowVsEPT();
```

## 13. Chapter Quiz (Multiple Choice)
\`\`\`
1. What is the key difference between Type 1 and Type 2 hypervisors?
   a) Type 1 runs directly on hardware; Type 2 runs on a host OS
   b) Type 1 is faster; Type 2 is slower
   c) Type 1 supports more VMs; Type 2 supports fewer
   d) Type 1 is open-source; Type 2 is proprietary

2. Why is EPT faster than shadow page tables for most workloads?
   a) EPT reduces the number of memory accesses per translation
   b) EPT eliminates VM-exits on guest page table modifications
   c) EPT uses larger page sizes
   d) EPT requires no hardware support

3. What is the primary advantage of paravirtualized I/O (virtio) over full device emulation?
   a) Virtio supports more device types
   b) Virtio uses shared ring buffers, eliminating MMIO traps for each I/O
   c) Virtio is easier to implement in the VMM
   d) Virtio requires no guest driver changes

4. What is the minimum number of memory accesses for a 4-level page walk with EPT?
   a) 4
   b) 8
   c) 16-20
   d) 20-24

5. Why can't containers run a different kernel than the host?
   a) Containers share the host kernel through syscalls
   b) Container images don't include kernel binaries
   c) The host firewall blocks kernel loading
   d) The VMM prevents kernel execution in containers

6. What mechanism does the VMM use to enforce memory isolation between guests?
   a) Memory ballooning
   b) EPT (hardware) or shadow page tables (software)
   c) Virtual memory segmentation
   d) Cryptographic memory encryption

7. What is the purpose of the balloon driver?
   a) To compress guest memory
   b) To reclaim guest memory under overcommit
   c) To accelerate guest network I/O
   d) To provide live migration support

8. What happens on a VM exit?
   a) The guest OS exits gracefully
   b) CPU saves guest state, loads host state, enters VMM
   c) The VM is migrated to another host
   d) The VMM is terminated

9. How does live migration achieve sub-100ms downtime?
   a) By compressing memory pages before transfer
   b) Pre-copy phase transfers dirty pages; stop-and-copy phase is brief
   c) By using InfiniBand network interconnects
   d) By running the VM on both hosts simultaneously

10. What is the primary trade-off between SR-IOV and virtio?
    a) SR-IOV is faster but prevents live migration; virtio supports migration
    b) SR-IOV is open-source; virtio is proprietary
    c) SR-IOV supports more VFs; virtio supports fewer
    d) SR-IOV requires special hardware; virtio works on any NIC

**Answers:** 1-a, 2-b, 3-b, 4-d, 5-a, 6-b, 7-b, 8-b, 9-b, 10-a
\`\`\`

## 14. Summary

- **Virtualization** abstracts hardware resources so multiple OS instances share a single physical machine.
- **Hypervisors** come in Type 1 (bare-metal: KVM, ESXi, Hyper-V, Xen) and Type 2 (hosted: VirtualBox, VMware Workstation).
- **CPU virtualization** evolved from binary translation (VMware) → paravirtualization (Xen PV) → hardware-assisted (VT-x/AMD-V).
- **Memory virtualization** evolved from shadow page tables → EPT/NPT, eliminating costly VM-exits on guest page table operations.
- **I/O virtualization** has three tiers: emulated (slow, compatible), virtio (balanced, efficient), SR-IOV (fast, no migration).
- **Containerization** uses namespaces for isolation and cgroups for resource limits → all sharing the host kernel.
- **Performance hierarchy**: Containers > SR-IOV > Virtio > Shadow PT > Emulated I/O.
- **Key trade-offs**: Isolation vs density, migration support vs performance, compatibility vs efficiency.

## 13. Exercises

1. **Trace a memory access**: Given a guest VA 0x7F00_1234_5678, show the 4-level guest page walk and the 4-level EPT walk. Assume each level produces the same PFN (i.e., no huge pages). Calculate total memory references.

2. **Compare boot sequences**: Write the boot sequence for a VM (QEMU + KVM) vs a container (Docker). Identify what steps are unique to each and explain why one is 100x faster.

3. **Design a virtio device**: Specify the virtqueue layout, descriptor format, and processing flow for a virtio-random-number-generator. The guest sends an empty request, and the host writes a 64-byte random value back.

4. **Calculate overcommit ratios**: A host has 64GB RAM. If each VM needs 8GB (reserved) + 2GB (balloonable), and the OS needs 4GB, how many VMs can run with a 2:1 overcommit ratio? What are the risks?

5. **Implement a minimal VMM**: Using KVM's API (`/dev/kvm`), write C++ code that creates one VM with one vCPU, loads a tiny "guest" binary that writes "Hello from guest" to a virtual serial port, and outputs it on the host. (Hint: Use KVM_CREATE_VM, KVM_CREATE_VCPU, KVM_SET_USER_MEMORY_REGION, KVM_RUN.)

6. **Compare migration approaches**: For a VM with 16GB RAM and 10Gbps network, how long would the pre-copy phase take with 100ms downtime target? Assume the VM dirties 10MB/sec. Show your calculation.

7. **Container escape analysis**: Given a container with `--privileged` flag and host PID namespace sharing, what attacks are possible? What namespace configuration would prevent them?

8. **SR-IOV capacity planning**: A host has one 100GbE NIC with 128 VFs. Each VM needs 10Gbps. How many VMs can you assign VFs to? What happens if a VM needs 40Gbps?

9. **Nested virtualization performance**: If a nested VM (KVM → QEMU → KVM → guest) takes a VM-exit, how many exits actually occur on the physical CPU? Trace the exit path.

10. **Design a hypervisor comparison matrix**: Create a table comparing KVM, Xen, ESXi, and Hyper-V across: CPU virt method, memory virt method, I/O method, management interface, guest OS support, maximum vCPUs per VM, maximum RAM per VM, live migration support, and fault tolerance.

### Additional Exercises


11. **VM-Exit frequency analyzer**: Write a KVM-based tool (using `perf kvm stat` or `/sys/kernel/debug/kvm/*`) that profiles VM-exit reasons for a running VM. Measure exit counts for: EPT violation, I/O instruction, CPUID, HLT, MSR access, and control register access. Identify the top 3 exit reasons and suggest optimizations.

12. **Overcommit risk calculator**: Extend the TypeScript RaidCalculator pattern to build a memory overcommit risk model. Given: physical RAM, per-VM reserved memory, per-VM balloonable memory, workload memory pressure distribution, and acceptable risk level (e.g., 99.9% no swap), calculate the maximum number of VMs that can run.

13. **Nested virtualization performance**: Benchmark nested virtualization by running a CPU-bound workload at four levels: native, L1 VM (KVM), L2 VM (KVM nested in L1), and L3 VM (KVM in L2). Measure: SPECrate score degradation at each level, VM-exit cost (in cycles), and memory access latency. Calculate the performance multiplier per nesting level.

14. **virtio ring buffer simulator**: Implement a virtio virtqueue in TypeScript with: descriptor table (address, length, flags, next), available ring (guest-to-host notifications), and used ring (host-to-Guest completions). Simulate a network device sending and receiving packets through the ring buffer. Measure throughput vs a simple MMIO-based emulated device.

15. **Live migration cost model**: Build a mathematical model for live migration. Given: VM memory size (D), memory dirtying rate (R), network bandwidth (B), and downtime target (T), compute: number of pre-copy rounds, total migration time, total data transferred, and final downtime. Show results for: 8GB VM with 20MB/s dirty rate over 1Gbps, 10Gbps, and 100Gbps links.

16. **Container vs VM density comparison**: Given a host with 32 vCPUs, 128GB RAM, and 1TB SSD, compare maximum density for: (a) Docker containers (each: 0.1 vCPU, 256MB RAM, 1GB storage) vs (b) VMs (each: 1 vCPU, 2GB RAM, 20GB storage). Include OS overhead for each VM (assume 512MB for guest OS). Calculate total application instances achievable.

17. **KVM module performance test**: Write a C program using `/dev/kvm` to: create a VM with a vCPU, run a tiny guest code that executes a CPUID instruction, measure the latency of a VM-entry/VM-exit round trip. Run 10,000 iterations and report average, min, max, and percentile latencies. Compare with and without hardware virtualization features.

18. **Firecracker microVM vs Docker benchmark**: Compare AWS Firecracker microVMs vs Docker containers on: boot time (to first process execution), memory overhead per instance, maximum instances on a 16GB host, and security isolation (using a syscall count attack surface metric). Explain the scenarios where each is preferable.

19. **Page table isolation (KPTI) simulation**: Implement a TypeScript simulation of Kernel Page Table Isolation (KPTI / KAISER) used to mitigate Meltdown. Show the difference between: (a) without KPTI — user page tables include kernel mappings, (b) with KPTI — user page tables contain only minimal kernel entries. Measure the syscall overhead of TLB flushing for KPTI.

20. **GPU passthrough performance**: Write a benchmark that measures GPU compute performance (using CUDA or Vulkan) across: bare metal, VM with GPU passthrough (VFIO), VM with GPU paravirtualization (virtio-gpu), and VM with emulated GPU (QEMU stdvga). Report: GFLOPS, frame rate, and API call latency. Explain which workloads are suitable for each approach.
