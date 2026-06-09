# Chapter 17 — Virtualization

## Learning Objectives

1. Distinguish full virtualisation, paravirtualisation, and OS-level virtualisation.
2. Compare Type 1 and Type 2 hypervisors.
3. Explain the performance overhead of virtualisation and hardware-assisted techniques.
4. Understand containers and their relationship to the host OS.
5. Describe Docker and Kubernetes at an architectural level.

## 17.1 Why Virtualization?

Virtualisation decouples software from physical hardware, enabling multiple virtual machines (VMs) to share a single physical host. Benefits include:

- **Server consolidation**: Many underutilised physical servers replaced by VMs on fewer hosts.
- **Isolation**: Faults and security breaches in one VM do not affect others.
- **Portability**: VMs can migrate between hosts (live migration).
- **Legacy support**: Run old OSs on modern hardware.
- **Development and testing**: Snapshots of system state can be created and restored instantly.

## 17.2 Virtualization Types

### 17.2.1 Full Virtualization

The hypervisor presents a complete virtual hardware platform to the guest OS. The guest OS is unmodified, running as if on physical hardware. The hypervisor must handle **sensitive** but **non-privileged** instructions — instructions that modify or read hardware state and must be trapped and emulated.

On x86, approximately 17 instructions (including `POPF`, `PUSHF`, and certain segment-register operations) fall into this category. Binary translation was used to handle them before hardware support existed.

### 17.2.2 Paravirtualization

The guest OS is modified to replace sensitive instructions with explicit **hypercalls** — direct calls to the hypervisor. This eliminates the need for binary translation and improves performance. The guest OS "knows" it is virtualised and cooperates with the hypervisor.

Xen pioneered paravirtualization with modified Linux, FreeBSD, and NetBSD kernels. The disadvantage is the need to maintain out-of-tree kernel patches for each OS version.

### 17.2.3 Hardware-Assisted Virtualization

Modern CPUs (Intel VT-x, AMD-V) provide a new CPU mode for hypervisors:

- **Root mode**: The hypervisor runs in a new, more privileged ring.
- **Non-root mode**: Guest OSs run in a slightly less privileged ring mode.

Sensitive instructions are automatically trapped and handled by the hypervisor without binary translation. This dramatically simplifies the hypervisor and reduces overhead. Almost all modern VMMs (KVM, VMware, Hyper-V) use hardware-assisted virtualisation.

## 17.3 Hypervisor Architectures

### 17.3.1 Type 1 (Bare-Metal)

The hypervisor runs directly on the hardware. The first VM is typically a management partition (Domain 0 in Xen) that runs the management toolstack and device drivers.

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│  VM 1   │ │  VM 2   │ │  VM 3   │
│ (Guest) │ │ (Guest) │ │ (Guest) │
└────┬────┘ └────┬────┘ └────┬────┘
     └───────────┼───────────┘
                 ▼
         ┌───────────────┐
         │  Hypervisor   │
         │  (Type 1)     │
         └───────┬───────┘
                 ▼
         ┌───────────────┐
         │   Hardware    │
         └───────────────┘
```

Examples: VMware ESXi, Microsoft Hyper-V, Xen, KVM (Linux kernel module).

### 17.3.2 Type 2 (Hosted)

The hypervisor runs as an application process on top of a host OS. The host OS provides device drivers and resource management.

```
┌─────────┐ ┌─────────┐
│  VM 1   │ │  VM 2   │
│ (Guest) │ │ (Guest) │
└────┬────┘ └────┬────┘
     └────┬──────┘
          ▼
┌──────────────────┐
│   Hypervisor     │
│   (Type 2)       │
├──────────────────┤
│   Host OS        │
├──────────────────┤
│   Hardware       │
└──────────────────┘
```

Examples: VirtualBox, VMware Workstation, QEMU (user mode).

## 17.4 CPU Virtualization

The guest OS expects to control the full machine state. The hypervisor must virtualise:

- **Privilege level**: Guest runs at ring 2 (or ring 0 in non-root mode with VT-x). The hypervisor intercepts attempts to change the page table, interrupt descriptor table, or control registers.
- **Interrupts**: Physical interrupts are handled by the hypervisor, which injects virtual interrupts into the appropriate guest.
- **Timers**: Guest-visible time must be independent of actual wall-clock time (or track it accurately).

## 17.5 Memory Virtualization

The guest OS manages **guest physical addresses** (GPAs). The hypervisor maps GPAs to **machine physical addresses** (MPAs). A two-level address translation is required:

- Guest virtual address (GVA) → guest physical address (GPA) — managed by guest OS page table.
- Guest physical address (GPA) → machine physical address (MPA) — managed by the hypervisor.

**Shadow page tables**: The hypervisor maintains a direct mapping from GVA to MPA, updated whenever the guest changes its page table. This is expensive — each guest page-table modification causes a trap.

**Hardware-assisted paging** (Intel EPT, AMD NPT): A second level of page tables in hardware translates GPA to MPA directly. The guest manages its own page tables normally; the MMU walks both levels transparently. EPT reduces the overhead of memory virtualisation to near zero.

## 17.6 I/O Virtualization

- **Emulated I/O**: The hypervisor presents a virtual device (e.g., RTL8139 network card). Guest drivers are unmodified, but emulation has high overhead.
- **Paravirtualized I/O** (virtio): The guest uses a specialised driver that communicates with the hypervisor via shared memory rings. Nearly as fast as native.
- **Passthrough (VT-d, SR-IOV)**: A physical device is assigned directly to a VM. The VM has exclusive, direct DMA access. SR-IOV (Single Root I/O Virtualization) splits a physical device into multiple virtual functions, each assignable to a different VM.

## 17.7 Containers

Containers provide OS-level virtualisation: multiple isolated user-space instances share a single kernel. Unlike VMs, containers do not run a separate kernel or emulate hardware.

### 17.7.1 Namespaces

Linux namespaces isolate global system resources:

| Namespace | Isolates |
|-----------|----------|
| PID | Process IDs |
| Network | Network interfaces, routing |
| Mount | Filesystem mount points |
| UTS | Hostname, domain name |
| IPC | System V IPC, POSIX message queues |
| User | User and group IDs |
| Cgroup | Control group hierarchy |

Each namespace gives the process inside it an independent view of the corresponding resource.

### 17.7.2 Cgroups

Control groups (cgroups) limit, account for, and isolate resource usage:

- **cpu**: CPU time scheduling.
- **memory**: Memory usage limits and accounting.
- **blkio**: Block I/O throttling.
- **net_prio**: Network priority.
- **pids**: Number of processes/threads.

A container is constructed by creating new namespaces and assigning cgroup limits for the process group.

### 17.7.3 Docker

Docker automates container creation, deployment, and execution. Key concepts:

- **Image**: A read-only template (layered filesystem) containing the application and its dependencies.
- **Container**: A runnable instance of an image (namespaced process + writable layer).
- **Dockerfile**: Script to build an image:

```dockerfile
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y python3
COPY app.py /app/
CMD ["python3", "/app/app.py"]
```

- **Registry**: Repository for images (Docker Hub, private registry).

Each container sees its own filesystem, process table, and network stack, but shares the host kernel.

## 17.8 Kubernetes

Kubernetes (K8s) orchestrates containerised applications across a cluster of machines (nodes).

- **Pod**: The smallest deployable unit; one or more containers sharing a network namespace and storage.
- **Node**: A worker machine running pods; managed by the kubelet agent.
- **Control plane**: Manages the cluster state (API server, scheduler, controller-manager, etcd).

Desired state is declared in YAML:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-server
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

The control plane reads the desired state, schedules the pod to a node, and continually reconciles actual state with desired state. Pods are ephemeral — if a node fails, the scheduler recreates the pod on another node.

## Summary

Virtualisation abstracts hardware to run multiple OSs concurrently. Hardware-assisted virtualisation (VT-x, EPT, SR-IOV) reduces performance overhead to near-native levels. Containers provide lighter-weight isolation by sharing the host kernel through namespaces and cgroups. Docker packages applications into images; Kubernetes orchestrates containers across clusters.

## Exercises

### Review Questions

1. What is the difference between full virtualisation and paravirtualisation?
2. How does hardware-assisted virtualisation (Intel VT-x, AMD-V) help the hypervisor?
3. What is the role of shadow page tables? How does EPT improve on them?
4. What Linux kernel features enable containers?
5. What is a Kubernetes pod and how does it differ from a container?

### Application Problems

1. A physical server runs 10 Type-1 VMs. Each VM has 2 vCPUs, 4 GB RAM, and 50 GB disk. The physical host has 32 cores, 128 GB RAM, and 2 TB SSD storage. Compute the oversubscription ratio for each resource. Discuss which hypervisor features make this practical despite oversubscription.
2. A Java application runs in a Docker container with the JVM memory settings `-Xmx2g`. If the container has a memory limit of 1 GB (set via cgroups), what happens when the JVM tries to allocate beyond the limit? Explain the interaction between the JVM heap and the cgroup OOM killer.
3. Compare the minimum boot time for a VM (including BIOS, bootloader, kernel init) versus a container start. Why is the container difference significant for scaling?

### Challenge Problem

1. Write a minimal container runtime in C or Go. Use `clone()` with CLONE_NEWPID, CLONE_NEWNS, CLONE_NEWNET, and CLONE_NEWUTS flags to create a namespaced child process. Set a memory limit via cgroups. Inside the namespace, mount a minimal proc filesystem and execute `/bin/bash`. Verify isolation: the process tree inside the namespace should show PID 1.
