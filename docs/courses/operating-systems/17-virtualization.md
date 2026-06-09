# Chapter 17: Virtualization

## Learning Objectives

- Define virtualization and distinguish it from emulation and paravirtualization
- Explain hypervisor types: Type 1 (bare-metal) vs Type 2 (hosted)
- Describe hardware-assisted virtualization (Intel VT-x, AMD-V)
- Contrast containers vs virtual machines in terms of isolation and overhead
- Explain paravirtualization and its performance benefits
- Understand memory virtualization: shadow page tables vs nested paging
- Describe the Linux KVM and Docker architectures

## Theory

### Virtualization Concepts

**Virtualization** is the creation of a virtual version of a resource (CPU, memory, storage, network). A **virtual machine (VM)** is an isolated environment that runs its own operating system and appears as a physical machine to that OS.

```
Virtual Machine:
┌─────────────────────────────────────────────┐
│  App A    App B          App C    App D      │
│  Guest OS (Linux)         Guest OS (BSD)     │
│  Virtual Hardware         Virtual Hardware   │
│  ──────────────────────────────────────────  │
│            Hypervisor (VMM)                  │
│  ──────────────────────────────────────────  │
│              Physical Hardware               │
│  (CPU, Memory, Disk, NIC, GPU)              │
└─────────────────────────────────────────────┘
```

#### Emulation vs Virtualization vs Paravirtualization

| Approach | Technique | Performance | Example |
|----------|-----------|-------------|---------|
| **Emulation** | Software mimics entire hardware | Very slow | QEMU (no KVM), Bochs |
| **Full virtualization** | Guest runs unmodified; sensitive instructions trapped | ~80-95% native | VMware ESXi, KVM with Intel VT-x |
| **Paravirtualization** | Guest OS is modified to call hypervisor directly | ~95-98% native | Xen (PV mode) |
| **Hardware-assisted** | CPU extensions virtualize sensitive instructions | ~95-99% native | KVM, Hyper-V, VMware |

### Hypervisor Types

#### Type 1: Bare-Metal Hypervisor

The hypervisor runs directly on the hardware with no host OS.

```
┌──────────────────────────────────────────┐
│ VM1           VM2           VM3           │
│ (Linux)       (Windows)     (BSD)         │
└──────────────┴──────────────┴─────────────┘
              ┌──────────┐
              │ Hypervisor│
              │ (Xen,    │
              │  VMware  │
              │  ESXi)   │
              └─────┬────┘
              ┌─────┴────┐
              │ Hardware  │
              └──────────┘
```

**Pros**: Minimal overhead, maximum performance, used in data centers.
**Cons**: Device drivers must be in the hypervisor, management interface needed.

#### Type 2: Hosted Hypervisor

The hypervisor runs as an application on a host OS.

```
┌──────────────────────────────────────────┐
│ VM1           VM2           VM3           │
│ (Linux)       (BSD)         (Windows)    │
└──────────────┴──────────────┴─────────────┘
              ┌──────────┐
              │ Hypervisor│
              │ (VirtualBox, │
              │  VMware  │
              │  Workstation)│
              └─────┬────┘
              ┌─────┴────┐
              │  Host OS  │
              │ (Linux)   │
              └─────┬────┘
              ┌─────┴────┐
              │ Hardware  │
              └──────────┘
```

**Pros**: Easy to use, coexists with host OS, development-friendly.
**Cons**: Double scheduling, more overhead, not for production.

### CPU Virtualization

#### The Challenge

The x86 architecture was not originally designed for virtualization. Some sensitive instructions (like `popf` or `lgdt`) silently fail in user mode rather than trapping.

Ring levels in x86:
```
Ring 0: Kernel mode — most privileged
Ring 1: Used by hypervisors in some schemes
Ring 2: (Unused in practice)
Ring 3: User mode — least privileged
```

**Trap-and-emulate**: Run the guest OS in Ring 1. Privileged instructions trigger a trap to the hypervisor (Ring 0), which emulates the operation. This was impossible on older x86 for some instructions.

#### Hardware-Assisted Virtualization (Intel VT-x / AMD-V)

Intel VT-x (and AMD-V) added new CPU modes:

```
VMX Root Mode (hypervisor):
  ┌──────────────────────────┐
  │ Hypervisor (KVM, VMware) │
  │ Full Ring 0-3 access     │
  └──────────────────────────┘

VMX Non-Root Mode (guest):
  ┌──────────────────────────┐
  │ Guest OS + Applications  │
  │ Guest thinks it has      │
  │ Ring 0-3                  │
  └──────────────────────────┘
```

When the guest executes a privileged instruction, the CPU automatically **VM-exits** to the hypervisor, which handles it and **VM-enter** resumes the guest.

```c
// Simplified KVM setup (conceptual)
struct kvm_vcpu {
    struct kvm_run *run;          // Shared page between host and guest
    struct kvm_vcpu_arch arch;    // Architecture-specific state
    
    int vcpu_id;
    struct kvm *kvm;              // Pointer to parent VM
};

// ioctl interface — user-space (QEMU) controls VCPUs
int kvm_fd = open("/dev/kvm", O_RDWR);
int vm_fd = ioctl(kvm_fd, KVM_CREATE_VM, 0);
int vcpu_fd = ioctl(vm_fd, KVM_CREATE_VCPU, 0);

// Run loop:
while (1) {
    ioctl(vcpu_fd, KVM_RUN, 0);  // VM-entry
    // On VM-exit, KVM returns with reason in kvm_run->exit_reason
    switch (kvm_run->exit_reason) {
        case KVM_EXIT_IO:     // Handle port I/O
        case KVM_EXIT_MMIO:   // Handle memory-mapped I/O
        case KVM_EXIT_HLT:    // Guest halted
        case KVM_EXIT_SHUTDOWN:
    }
}
```

### Memory Virtualization

#### Shadow Page Tables

The hypervisor maintains shadow page tables that map guest virtual addresses directly to host physical addresses.

```
Guest:  Guest Virtual Address (GVA)
         ↓ Guest page table (guest thinks it maps to guest physical)
         Guest Physical Address (GPA)
         ↓ Hypervisor intercepts
         Host Physical Address (HPA)

Shadow page table: GVA → HPA (direct, maintained by hypervisor)
```

**Problem**: Every guest page table modification causes a VM-exit (expensive).

#### Nested Page Tables (Intel EPT / AMD NPT)

The CPU handles two levels of page tables simultaneously:

- **Guest page table**: GVA → GPA (managed by guest OS)
- **Extended page table**: GPA → HPA (managed by hypervisor)

The CPU walks both tables in hardware — no VM-exit needed for page table updates.

```
GVA → GPA → HPA (single hardware walk)
       ↑ EPT  ↑
       (one CPU operation)

Performance: ~10-15x fewer VM-exits than shadow page tables
```

### I/O Virtualization

| Method | Description | Performance |
|--------|-------------|-------------|
| **Emulated I/O** | Hypervisor emulates real hardware (e.g., e1000 NIC) | Poor — every I/O traps |
| **Paravirtualized I/O** | Guest uses virtio drivers (shared ring buffers) | Good — 80-90% of native |
| **SR-IOV (passthrough)** | Physical device presents multiple virtual functions | Excellent — near-native |
| **VFIO (passthrough)** | Dedicate PCI device to one VM via VFIO | Native performance |

#### virtio — Paravirtualized I/O

A standard interface for virtual I/O devices:

```
Guest (QEMU):
  virtio-blk driver       virtio-net driver
            │                     │
            │  virtqueue (shared  │
            │  ring buffer)       │
            └──────┬──────────────┘
                   │
            ┌──────┴──────┐
Guest memory │ virtio ring │ ← Shared between host and guest
            └──────┬──────┘
                   │
Hypervisor         │
  QEMU: ───────────┘
  vhost-blk        vhost-net
```

### Containers vs Virtual Machines

#### Virtual Machine

```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ App A    │ │ App B    │ │ App C    │
│ Libs     │ │ Libs     │ │ Libs     │
│ Guest OS │ │ Guest OS │ │ Guest OS │
│ (full OS)│ │ (full OS)│ │ (full OS)│
├──────────┴─┴──────────┴─┴──────────┤
│            Hypervisor               │
├─────────────────────────────────────┤
│            Host OS (optional)       │
├─────────────────────────────────────┤
│            Hardware                 │
└─────────────────────────────────────┘
```

Each VM has its own kernel, init system, and full OS. High isolation, high resource overhead (GBs per VM).

#### Container

```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ App A    │ │ App B    │ │ App C    │
│ Libs     │ │ Libs     │ │ Libs     │
├──────────┴─┴──────────┴─┴──────────┤
│         Shared Host OS Kernel       │
├─────────────────────────────────────┤
│            Hardware                 │
└─────────────────────────────────────┘
```

Containers share the host kernel. Isolation via **namespaces** (PID, mount, net, IPC, UTS, user) and **cgroups** (resource limits).

```
Docker container = several namespaces stacked together:
  PID namespace:    Container sees only its own processes
  Mount namespace:  Container has its own filesystem tree
  Network namespace: Container has its own network stack
  UTS namespace:    Container has its own hostname
  IPC namespace:    Container has its own IPC resources
  User namespace:   Container can map UIDs (root inside ≠ root outside)

Control groups (cgroups):
  Limit and account for resource usage:
    cpu:     CPU time limits
    memory:  Memory limits
    blkio:   Block I/O limits
    pids:    Number of processes
    network: Network bandwidth
```

### KVM (Kernel-based Virtual Machine)

KVM turns Linux into a Type 1 hypervisor. KVM is a kernel module (`kvm.ko` + `kvm_intel.ko`) that exposes `/dev/kvm` to user space.

```
User space:
  QEMU (emulates devices, manages VMs)
    │
    ↓ ioctl(KVM_CREATE_VM, KVM_CREATE_VCPU, KVM_RUN, ...)
Kernel space:
  KVM module (CPU virtualization, MMU, interrupts)
    │
    ↓ VMX root mode
Hardware:
  Intel VT-x / AMD-V
```

### Xen

Xen uses a different architecture: **Domain 0** (privileged control VM) manages other **Domain U** (unprivileged VMs).

```
┌──────────────────────────────┐
│ Domain 0     Domain U        │
│ (control VM) (unpriv VMs)   │
│ paravirt     Linux  Windows  │
│ or HVM       HVM    HVM      │
│ Xen tools                    │
└──────────┬───────────────────┘
           │
    ┌──────┴──────┐
    │   Xen        │
    │ Hypervisor   │
    └──────┬──────┘
    ┌──────┴──────┐
    │   Hardware   │
    └──────────────┘
```

## Examples

### Example 1: Creating a VM with KVM/QEMU (Command Line)

```bash
#!/bin/bash
# Create a disk image
qemu-img create -f qcow2 ubuntu-disk.qcow2 20G

# Install an OS
qemu-system-x86_64 \
    -enable-kvm \
    -cdrom ubuntu-24.04.iso \
    -drive file=ubuntu-disk.qcow2,format=qcow2 \
    -m 2048 \
    -smp 2 \
    -netdev user,id=net0 \
    -device e1000,netdev=net0

# Run the VM
qemu-system-x86_64 \
    -enable-kvm \
    -drive file=ubuntu-disk.qcow2,format=qcow2 \
    -m 4096 \
    -smp 4 \
    -netdev user,id=net0,hostfwd=tcp::2222-:22 \
    -device virtio-net,netdev=net0 \
    -vga virtio
```

### Example 2: Docker Container Lifecycle

```bash
# Run a container
docker run -d --name web -p 8080:80 nginx:latest

# Inspect namespaces
docker inspect web | grep -A 10 "Id"

# List processes inside the container
docker exec web ps aux

# Check cgroup limits
cat /sys/fs/cgroup/memory/docker/<container_id>/memory.limit_in_bytes

# Build a container image
cat > Dockerfile << 'EOF'
FROM python:3.12-slim
WORKDIR /app
COPY app.py .
RUN pip install flask
EXPOSE 5000
CMD ["python", "app.py"]
EOF

docker build -t myapp .
docker run -d -p 5000:5000 myapp
```

### Example 3: Verifying Hardware Virtualization Support

```c
#include <stdio.h>

// Check for Intel VT-x support using CPUID instruction
static inline int cpuid_support_vmx() {
    unsigned int eax, ebx, ecx, edx;
    
    __asm__ volatile(
        "cpuid"
        : "=a" (eax), "=b" (ebx), "=c" (ecx), "=d" (edx)
        : "a" (1)       // CPUID function 1
    );
    
    // Bit 5 of ECX indicates VMX support
    return (ecx >> 5) & 1;
}

int main() {
    if (cpuid_support_vmx()) {
        printf("Intel VT-x is supported on this CPU\n");
    } else {
        printf("Intel VT-x is NOT supported\n");
    }
    return 0;
}
```

## Summary

- Virtualization creates virtual resources shaped by a Virtual Machine Monitor (VMM/hypervisor)
- Type 1 hypervisors run directly on hardware; Type 2 run on a host OS
- Hardware-assisted virtualization (Intel VT-x/AMD-V) eliminates trap-and-emulate overhead
- Nested page tables (EPT/NPT) accelerate memory virtualization by avoiding shadow page tables
- Paravirtualization (Xen PV, virtio) modifies guests for better performance
- Containers share the host kernel via namespaces (isolation) and cgroups (resource limits)
- VMs provide stronger isolation (separate kernels) at higher resource cost
- KVM turns Linux into a Type 1 hypervisor via the `/dev/kvm` ioctl interface
- Docker popularized containers by adding image layering, registries, and ease of use

## Exercises

### Basic

1. What is the difference between Type 1 and Type 2 hypervisors? Give an example of each.
2. Explain the difference between a container and a virtual machine. When would you use each?
3. How does Intel VT-x solve the problem of sensitive instructions that don't trap?

### Intermediate

4. Use `lscpu` to check if your system supports hardware virtualization. Run `kvm-ok` (Linux) or check `cat /proc/cpuinfo | grep vmx`. Write a program using the `cpuid` instruction to detect VMX/SVM support and print the features.
5. Create a Dockerfile for a simple web application. Build and run it. Use `docker stats` to observe CPU and memory usage. Then use `strace -f` to trace the container process and identify the system calls used for namespace and cgroup creation.
6. Use QEMU to create a minimal Linux VM. Start with a 512 MB disk and 128 MB RAM. Boot a minimal kernel (use `make tinyconfig`). Measure boot time and memory overhead compared to native.

### Advanced

7. Write a program that creates a **PID namespace** using `clone()` with `CLONE_NEWPID`. The child process should see itself as PID 1. Demonstrate that it cannot see host processes (e.g., parent's PID). Add a mount namespace and proc mount so `ps` works inside.
8. Research and implement a **minimal hypervisor** using KVM's ioctl interface. Create a VM, load a small binary into guest memory (a "hello world" that writes to a debug port), and handle the VM-exit when the guest writes to the port. Measure VM-entry/VM-exit latency.
9. Write a benchmark that compares **native execution**, **VM execution**, and **container execution** for CPU-bound and I/O-bound workloads. For CPU: compute the first 10 million primes. For I/O: write 1 GB using sequential writes. Measure wall-clock time and CPU overhead. Explain the differences.
