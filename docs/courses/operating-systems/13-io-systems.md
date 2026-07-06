# Chapter 13: I/O Systems

**<< [Secondary Storage](./12-secondary-storage.md)** | [**Next: The Linux Kernel**](./14-linux-kernel.md) >>

---

## Learning Objectives

- Describe I/O hardware components: ports, buses, controllers, and devices
- Compare programmed I/O, interrupt-driven I/O, and DMA
- Explain the interrupt handling sequence in a modern OS
- Design the kernel I/O subsystem: buffering, caching, spooling, error handling
- Describe the device driver interface and the I/O request life cycle
- Understand the performance implications of different I/O models
- Analyze polling vs interrupt vs DMA trade-offs with complexity bounds
- Implement buffering strategies (single, double, circular) and spooling mechanisms

## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **I/O Hardware** | Ports, buses, controllers; devices have data/command/status registers |
| **Polling** | CPU busy-waits on status register; simple but CPU-wasteful |
| **Interrupts** | Device signals CPU via IRQ; enables concurrency |
| **DMA** | Direct Memory Access: device transfers data directly to/from memory without CPU |
| **I/O Software Layers** | 4-layer model: User, Device-independent, Driver, Interrupt handler |
| **Device Drivers** | Kernel modules understanding device protocols; standard interface to OS |
| **Character vs Block** | Char: byte stream, no seeking; Block: fixed-size blocks, random access |
| **Buffering** | Single/double/circular; decouples producer and consumer |
| **Spooling/Caching** | Spooling manages shared device access; caching keeps frequent data ready |
| **I/O Scheduling** | Reorder requests for efficiency; deadline/CFQ/NOW-BSQ |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[I/O Hardware Basics] --> B[Ports / Buses / Controllers]
    B --> C[I/O Control Methods]
    C --> D[Polling]
    C --> E[Interrupts]
    C --> F[DMA]
    D --> G[Device Drivers]
    E --> G
    F --> G
    G --> H[I/O Software Layers]
    H --> I[Buffering & Caching & Spooling]
    I --> J[I/O Scheduling]
    J --> K[I/O Performance]
    K --> L[Real Systems: Linux I/O Stack]
    L --> M[Summary]
</div>

## Theory

![I/O Systems](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/13-io-systems.png)

---

### 1. I/O Hardware

I/O devices vary enormously in function, but they share common hardware interfaces. Every device connects through a **controller** that communicates with the CPU via **registers** (data, command, status) over a **bus**.

#### Real-World Analogy

> A restaurant kitchen (CPU) communicates with the waitstaff (device) through a service window (registers). The chef reads order tickets (data register), checks the order-ready light (status register), and writes fire commands (command register).

#### Device Types

| Category | Examples | Data Rate | Interface |
|----------|----------|-----------|-----------|
| Character | Keyboard, mouse, serial ports | 10-1000 B/s | Interrupt-driven |
| Block | Disk, SSD, USB storage | 50-5000 MB/s | DMA, block commands |
| Network | Ethernet, Wi-Fi | 1-100 Gb/s | DMA, packet-oriented |

#### CPU-Device Communication Methods

1. **Port-mapped I/O**: Special CPU instructions (`IN`, `OUT` on x86) read/write device registers.
2. **Memory-mapped I/O**: Device registers appear in the memory address space; regular load/store instructions access them.
3. **Hybrid**: Some devices use port I/O for control and memory-mapped for data (e.g., x86 VGA).

```
Memory-mapped I/O:
CPU Address Space:
+------------------------+
| RAM                    |
+------------------------+
| Device registers       |  <- Reading/writing here
| (Video RAM, NIC,      |     communicates with device
|  disk controller)      |
+------------------------+
```

#### Numbered Steps: CPU Writes to a Device (Memory-Mapped)

1. CPU executes `store` instruction targeting device register address.
2. Bus logic decodes address, identifies as device register.
3. Value written to device controller's data register.
4. Device controller interprets command and acts (e.g., send byte on network).
5. Device sets status register to READY or ERROR.
6. CPU reads status register on next interaction.

#### Dry Run Trace: Memory-Mapped I/O Write

| Step | CPU Action | Address | Data | Device State |
|------|-----------|---------|------|-------------|
| 1 | LOAD R1, 0x41 | - | 0x41 | IDLE |
| 2 | STORE R1, [0xE000] | 0xE000 | 0x41 | BUSY |
| 3 | Device receives 0x41 | - | - | PROCESSING |
| 4 | Device sends byte to network | - | - | TRANSMITTING |
| 5 | Set status = READY | 0xE004 | 0x01 | READY |
| 6 | CPU polls, sees READY | 0xE004 | 0x01 | READY |

#### C++ Implementation: Simulated Device Register

```cpp
#include <iostream>
#include <cstdint>
#include <thread>
#include <chrono>

class DeviceController {
    uint8_t data_reg;
    uint8_t status_reg;
    uint8_t cmd_reg;
public:
    DeviceController() : data_reg(0), status_reg(0), cmd_reg(0) {}

    void write_command(uint8_t cmd) {
        cmd_reg = cmd;
        status_reg = 0x02; // BUSY
        std::thread([this]() {
            std::this_thread::sleep_for(std::chrono::milliseconds(10));
            if (cmd_reg == 0x01) { // WRITE
                status_reg = 0x01; // READY
            } else if (cmd_reg == 0x02) { // READ
                data_reg = 0xFF;
                status_reg = 0x01;
            }
        }).detach();
    }

    uint8_t read_status() const { return status_reg; }
    uint8_t read_data() const { return data_reg; }
    bool is_ready() const { return status_reg == 0x01; }
};

int main() {
    DeviceController dev;
    dev.write_command(0x01);
    while (!dev.is_ready()) {}
    std::cout << "Device ready after write\n";
    dev.write_command(0x02);
    while (!dev.is_ready()) {}
    std::cout << "Device data: 0x" << std::hex << (int)dev.read_data() << "\n";
    return 0;
}
```

#### Python Implementation

```python
import threading
import time

class DeviceController:
    def __init__(self):
        self.data_reg = 0
        self.status_reg = 0
        self.cmd_reg = 0

    def write_command(self, cmd):
        self.cmd_reg = cmd
        self.status_reg = 2
        def process():
            time.sleep(0.01)
            if cmd == 1:
                self.status_reg = 1
            elif cmd == 2:
                self.data_reg = 0xFF
                self.status_reg = 1
        threading.Thread(target=process, daemon=True).start()

    def is_ready(self):
        return self.status_reg == 1

    def read_data(self):
        return self.data_reg

dev = DeviceController()
dev.write_command(1)
while not dev.is_ready(): pass
print("Device ready after write")
dev.write_command(2)
while not dev.is_ready(): pass
print(f"Device data: 0x{dev.read_data():02x}")
```

#### Complexity Analysis

| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Register read | O(1) | O(1) | Single memory/port access |
| Register write | O(1) | O(1) | Single memory/port access |
| Device status check | O(1) | O(1) | Read one register |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Simple hardware interface | CPU must handle each transfer |
| No special CPU instructions needed (MMIO) | Port I/O requires privileged instructions |
| Universal across device types | Limited address space for port I/O |
| Fast for small control operations | No parallelism without interrupts |

#### Edge Cases

- **Device not responding**: Status register returns 0xFF (all bits set) - timeout and reset.
- **Register aliasing**: Same address maps to different registers depending on access order.
- **Bus arbitration failure**: Device cannot get bus access; watchdog timer triggers reset.
- **Endianness mismatch**: Device uses big-endian, CPU is little-endian; byte-swap needed.
### 2. Polling (Programmed I/O)

Polling is the simplest I/O method: the CPU repeatedly checks a device's status register until the device signals readiness.

#### Real-World Analogy

> A student repeatedly checks their phone for a text reply instead of doing homework. The phone (device) never initiates communication; the student (CPU) must keep checking the screen (status register).

#### Numbered Steps: Polling Read

1. Application requests data from device.
2. CPU reads device status register.
3. If status != READY, go back to step 2 (busy-wait).
4. CPU reads data from device data register.
5. CPU copies data to memory.
6. Return data to application.

#### Pseudocode

```
PROCEDURE polling_read(device):
    WHILE (device.status_reg != READY):
        NOP
    END WHILE
    data = device.data_reg
    RETURN data
END PROCEDURE
```

#### Dry Run Trace: Polling 3 Bytes from Keyboard

| Iteration | Status Read | Status Value | Action | CPU Cycles Wasted |
|-----------|-------------|-------------|--------|------------------|
| 1 | 0xE004 | 0x00 (NOT READY) | Continue polling | 1 |
| 2 | 0xE004 | 0x00 (NOT READY) | Continue polling | 2 |
| 3 | 0xE004 | 0x00 (NOT READY) | Continue polling | 3 |
| 4 | 0xE004 | 0x01 (READY) | Read data byte A | 3 wasted, 1 useful |
| 5 | 0xE004 | 0x00 (NOT READY) | Continue polling | 1 |
| 6 | 0xE004 | 0x01 (READY) | Read data byte B | 1 wasted, 1 useful |
| 7 | 0xE004 | 0x00 (NOT READY) | Continue polling | 1 |
| 8 | 0xE004 | 0x00 (NOT READY) | Continue polling | 2 |
| 9 | 0xE004 | 0x01 (READY) | Read data byte C | 2 wasted, 1 useful |

**Total**: 3 useful reads, 9 CPU cycles wasted polling.

#### C++ Implementation: Polling with Timer

```cpp
#include <iostream>
#include <chrono>
#include <thread>
#include <vector>

class PollingDevice {
    volatile bool ready;
    std::vector<char> buffer;
    size_t pos;
public:
    PollingDevice() : ready(false), pos(0) {
        buffer = {'H', 'e', 'l', 'l', 'o'};
        std::thread([this]() {
            for (char c : buffer) {
                std::this_thread::sleep_for(std::chrono::milliseconds(50));
                ready = true;
                std::this_thread::sleep_for(std::chrono::milliseconds(10));
            }
        }).detach();
    }

    bool is_ready() volatile { return ready; }

    char read_byte() {
        while (!is_ready()) {} // busy-wait
        ready = false;
        return buffer[pos++];
    }
};

int main() {
    PollingDevice dev;
    auto start = std::chrono::steady_clock::now();
    for (int i = 0; i < 5; i++) {
        char c = dev.read_byte();
        auto now = std::chrono::steady_clock::now();
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(now - start).count();
        std::cout << "t=" << ms << "ms: Read '" << c << "'\n";
    }
    return 0;
}
```

#### Python Implementation

```python
import time
import threading

class PollingDevice:
    def __init__(self):
        self._ready = False
        self._buffer = list("Hello")
        self._pos = 0
        def simulate():
            for ch in self._buffer:
                time.sleep(0.05)
                self._ready = True
                time.sleep(0.01)
        threading.Thread(target=simulate, daemon=True).start()

    @property
    def ready(self):
        return self._ready

    def read_byte(self):
        while not self.ready:
            pass
        self._ready = False
        val = self._buffer[self._pos]
        self._pos += 1
        return val

dev = PollingDevice()
start = time.time()
for i in range(5):
    c = dev.read_byte()
    print(f"t={(time.time()-start)*1000:.0f}ms: Read '{c}'")
```

#### Complexity Analysis

| Metric | Value | Why |
|--------|-------|-----|
| Best-case latency | O(1) | Device already ready |
| Worst-case latency | O(poll_count) | Depends on device speed |
| CPU utilization | 100% during wait | CPU spins doing nothing |
| Throughput | 1 / (poll_interval + transfer_time) | Wasted cycles reduce rate |
| Energy efficiency | Very poor | CPU stays active and busy |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Simplest to implement | CPU is wasted while waiting |
| No special hardware needed | No concurrent computation |
| Deterministic timing | Not scalable for multiple devices |
| Predictable latency | Poor energy efficiency |
| Good for very fast devices | Falls apart with slow devices |

#### Edge Cases

- **Polling a disconnected device**: Status register returns garbage; need timeout.
- **Interrupt storm during polling**: NMI or higher-priority events preempt polling.
- **Device ready flip-flop**: Device toggles ready faster than poll interval; missed data.
- **Cache coherency**: Volatile qualifier required, otherwise compiler optimizes away the read.
### 3. Interrupts

Interrupt-driven I/O lets the device notify the CPU when it needs attention, freeing the CPU to do useful work.

#### Real-World Analogy

> Instead of checking the mailbox every minute (polling), you install a bell that rings when mail arrives. The bell (interrupt) lets you read a book (compute) until mail (data) arrives.

#### Numbered Steps: Interrupt-Driven Read

1. CPU initiates I/O operation on device.
2. CPU saves current process context and switches to another process.
3. Device processes the request.
4. Device asserts interrupt request line (IRQ).
5. CPU finishes current instruction, checks for pending interrupts.
6. CPU saves state (PC, registers, PSW) to kernel stack.
7. CPU looks up Interrupt Vector Table (IVT) using IRQ number.
8. CPU loads and executes Interrupt Service Routine (ISR).
9. ISR reads data from device, acknowledges interrupt.
10. ISR returns from interrupt (IRET) - CPU restores saved state.
11. CPU resumes the interrupted process.

#### Pseudocode

```
PROCEDURE interrupt_handler(irq_number):
    SAVE registers onto kernel stack
    device = lookup_device(irq_number)
    data = READ(device.data_reg)
    SEND_ACK(device)
    IF data_requested_by_process:
        COPY data to process buffer
        MARK process as READY
    END IF
    RESTORE registers
    IRET
END PROCEDURE
```

#### Interrupt Vector Table Layout

```
IVT base address stored in IDTR register:
+---------+----------------------------+
| Entry 0 | Divide-by-zero handler      |
| Entry 1 | Debug handler               |
| Entry 2 | NMI handler                 |
| Entry 3 | Breakpoint handler          |
|   ...   | ...                         |
| Entry 32| IRQ 0 - Timer               |
| Entry 33| IRQ 1 - Keyboard            |
| Entry 34| IRQ 2 - Cascade             |
|   ...   | ...                         |
| Entry 39| IRQ 7 - Parallel port (LPT) |
| Entry 40| IRQ 8 - RTC                 |
+---------+----------------------------+
```

#### Dry Run Trace: Keyboard Interrupt

| Step | PC | IRQ | CPU Action |
|------|-----|-----|-----------|
| 1 | 0x4012 | - | Executing add eax, ebx (user process) |
| 2 | 0x4013 | IRQ1 | Keyboard asserts IRQ1 |
| 3 | 0x4013 | IRQ1 | CPU checks interrupt flag (IF=1), acknowledges |
| 4 | 0x4013 | IRQ1 | CPU saves SS, SP, EFLAGS, CS, EIP to kernel stack |
| 5 | 0x0040 | IRQ1 | CPU loads IVT[33] -> handler at 0x00400020 |
| 6 | 0x4020 | IRQ1 | ISR: read keyboard data port (0x60) -> A (0x41) |
| 7 | 0x4025 | IRQ1 | ISR: store to key buffer, send EOI to PIC |
| 8 | 0x4030 | IRQ1 | ISR: IRET - restore EIP, CS, EFLAGS, SS, SP |
| 9 | 0x4013 | - | Resume: add eax, ebx completes |

#### C++ Implementation: Interrupt Simulation

```cpp
#include <iostream>
#include <vector>
#include <functional>
#include <thread>
#include <chrono>

class InterruptController {
    using ISR = std::function<void()>;
    std::vector<ISR> vector_table;
public:
    void register_handler(int irq, ISR handler) {
        if (irq >= (int)vector_table.size())
            vector_table.resize(irq + 1);
        vector_table[irq] = handler;
    }

    void fire(int irq) {
        std::cout << "[PIC] Firing IRQ " << irq << "\n";
        if (irq < (int)vector_table.size() && vector_table[irq])
            vector_table[irq]();
    }
};

struct CPUState {
    uint64_t rip;
    uint64_t rsp;
};

class InterruptDrivenIO {
    InterruptController pic;
    CPUState saved_state;
    char key_buffer[256];
    int buf_pos;
public:
    InterruptDrivenIO() : buf_pos(0) {
        pic.register_handler(1, [this]() {
            std::cout << "[ISR] Saving CPU state...\n";
            saved_state = {0x4013, 0x7FFF};
            char key = 'A' + (buf_pos % 26);
            key_buffer[buf_pos++] = key;
            std::cout << "[ISR] Key pressed: " << key << "\n";
            std::cout << "[ISR] Acknowledge interrupt (EOI)\n";
            std::cout << "[ISR] Restore state, IRET\n";
        });
    }

    void user_process() {
        std::cout << "[USER] Running computation...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        std::cout << "[USER] Still computing...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        std::cout << "[USER] Buffer contains: ";
        for (int i = 0; i < buf_pos; i++)
            std::cout << key_buffer[i];
        std::cout << "\n";
    }

    void device_simulator() {
        std::this_thread::sleep_for(std::chrono::milliseconds(50));
        pic.fire(1);
        std::this_thread::sleep_for(std::chrono::milliseconds(80));
        pic.fire(1);
    }

    void run() {
        std::thread dev([this]() { device_simulator(); });
        user_process();
        dev.join();
    }
};

int main() {
    InterruptDrivenIO io;
    io.run();
    return 0;
}
```

#### Python Implementation

```python
import time
import threading
from dataclasses import dataclass
from typing import List, Callable

@dataclass
class CPUState:
    rip: int = 0
    rsp: int = 0

class InterruptController:
    def __init__(self):
        self.vector_table: List[Callable] = []

    def register_handler(self, irq: int, handler: Callable):
        while len(self.vector_table) <= irq:
            self.vector_table.append(None)
        self.vector_table[irq] = handler

    def fire(self, irq: int):
        print(f"[PIC] Firing IRQ {irq}")
        if irq < len(self.vector_table) and self.vector_table[irq]:
            self.vector_table[irq]()

class InterruptDrivenIO:
    def __init__(self):
        self.pic = InterruptController()
        self.key_buffer: List[str] = []
        self._lock = threading.Lock()

        def keyboard_isr():
            print("[ISR] Saving CPU state...")
            saved = CPUState(rip=0x4013, rsp=0x7FFF)
            key = chr(ord('A') + (len(self.key_buffer) % 26))
            with self._lock:
                self.key_buffer.append(key)
            print(f"[ISR] Key pressed: {key}")
            print(f"[ISR] Acknowledge interrupt (EOI)")
            print(f"[ISR] Restore state, IRET")

        self.pic.register_handler(1, keyboard_isr)

    def user_process(self):
        print("[USER] Running computation...")
        time.sleep(0.1)
        print("[USER] Still computing...")
        time.sleep(0.1)
        with self._lock:
            print(f"[USER] Buffer contains: {''.join(self.key_buffer)}")

    def device_sim(self):
        time.sleep(0.05)
        self.pic.fire(1)
        time.sleep(0.08)
        self.pic.fire(1)

    def run(self):
        t = threading.Thread(target=self.device_sim)
        t.start()
        self.user_process()
        t.join()

io = InterruptDrivenIO()
io.run()
```

#### Complexity Analysis

| Metric | Value | Why |
|--------|-------|-----|
| Interrupt latency | 10-100 CPU cycles | Save state, vector lookup, jump |
| ISR execution | O(handler_work) | Depends on device complexity |
| Context switch overhead | 100-1000 cycles | Save/restore registers, TLB flush |
| Max interrupt rate | ~100K-1M IRQ/s | Limited by save/restore overhead |
| CPU utilization (idle) | Near 0% | CPU does useful work until interrupt |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| CPU can multitask while waiting | Overhead of context switching |
| Efficient for slow/rare events | Interrupt storm can overwhelm CPU |
| Event-driven model is natural | Shared data needs synchronization |
| Scales better than polling | NMI/latency issues in real-time systems |

#### Edge Cases

- **Interrupt storm**: Device floods CPU with interrupts -> live-lock. Mitigation: interrupt coalescing.
- **Nested interrupts**: Higher-priority IRQ interrupts a lower-priority ISR -> stack overflow risk.
- **Spurious interrupt**: Device asserts IRQ but does not drive data; must check status in ISR.
- **Lost interrupt**: Device asserts IRQ but CPU misses it; watchdog timer or polling fallback.
- **Shared IRQ**: Multiple devices share same IRQ line; ISR must probe each device.
### 4. DMA (Direct Memory Access)

DMA allows a dedicated controller to transfer data directly between device and memory without CPU intervention for each byte.

#### Real-World Analogy

> Instead of a courier hand-carrying each package from the warehouse (device) to the truck (memory) one at a time (interrupt-driven), a conveyor belt (DMA controller) moves entire pallets directly. The manager (CPU) presses start and gets notified when done.

#### Numbered Steps: DMA Transfer

1. CPU programs DMA controller: source address, destination address, byte count, transfer direction.
2. DMA controller asserts bus request (BREQ).
3. CPU grants bus control (BGNT) and disconnects from bus.
4. DMA controller transfers data: read from device, write to memory (or vice versa).
5. DMA controller increments addresses, decrements byte count.
6. Steps 4-5 repeat until byte count reaches zero.
7. DMA controller asserts interrupt to signal completion.
8. CPU resumes normal operation.

#### Pseudocode

```
PROCEDURE dma_transfer(device, memory_addr, byte_count):
    dma_controller.source_addr = device.data_port
    dma_controller.dest_addr = memory_addr
    dma_controller.byte_count = byte_count
    dma_controller.control = DMA_READ
    dma_controller.start = 1

    // DMA runs independently:
    // WHILE dma_controller.byte_count > 0:
    //     READ from device_port
    //     WRITE to memory[dest_addr]
    //     dest_addr++
    //     byte_count--
    // END WHILE

    // CPU is free during this time
    WAIT_FOR_INTERRUPT from DMA
    READ dma_controller.status
    IF status == DMA_ERROR:
        HANDLE error
    ELSE:
        RETURN OK
END PROCEDURE
```

#### Dry Run Trace: DMA Transfer of 4 KB Block

| Step | Action | Bus Master | Bytes Left | CPU Activity |
|------|--------|-----------|------------|-------------|
| 1 | CPU writes DMA registers | CPU | 4096 | Setup |
| 2 | DMA asserts BREQ | CPU | 4096 | Running user code |
| 3 | CPU grants bus | CPU->DMA | 4096 | Running user code |
| 4 | DMA reads 512B from disk | DMA | 3584 | Running user code |
| 5 | DMA writes 512B to memory | DMA | 3072 | Running user code |
| 6 | DMA reads next 512B | DMA | 2560 | Running user code |
| 7 | DMA writes to memory | DMA | 2048 | Running user code |
| 8 | ... continues ... | DMA | ... | Running user code |
| 9 | DMA byte_count = 0 | DMA | 0 | Running user code |
| 10 | DMA asserts IRQ | DMA | 0 | Interrupted, runs ISR |
| 11 | CPU reads status, handles | CPU | 0 | Done |

**Total CPU involvement**: Step 1 (setup) + Step 10 (interrupt). All data movement is DMA.

#### C++ Implementation: DMA Transfer Simulation

```cpp
#include <iostream>
#include <vector>
#include <thread>
#include <chrono>
#include <cstring>

class DMAController {
    uint32_t src_addr, dst_addr, byte_count;
    uint8_t direction; // 0=DEV->MEM, 1=MEM->DEV
    bool busy, error;
public:
    DMAController() : busy(false), error(false) {}

    void program(uint32_t src, uint32_t dst, uint32_t count, uint8_t dir) {
        src_addr = src; dst_addr = dst;
        byte_count = count; direction = dir;
    }

    void start() {
        busy = true; error = false;
        std::cout << "[DMA] Transfer started: " << byte_count
                  << " bytes\n";
    }

    bool is_busy() const { return busy; }
    bool has_error() const { return error; }

    void simulate_transfer() {
        std::this_thread::sleep_for(std::chrono::microseconds(byte_count / 10));
        busy = false;
        std::cout << "[DMA] Transfer complete\n";
    }
};

class Memory {
    uint8_t data[65536];
public:
    void write(uint32_t addr, const uint8_t* buf, uint32_t len) {
        memcpy(data + addr, buf, len);
    }
    uint8_t read(uint32_t addr) { return data[addr]; }
};

int main() {
    DMAController dma;
    Memory mem;
    uint32_t disk_buffer = 0x1000;
    uint32_t memory_addr = 0x4000;
    uint32_t transfer_size = 4096;
    uint8_t disk_data[4096];
    memset(disk_data, 'A', 4096);

    std::cout << "[CPU] Programming DMA controller...\n";
    dma.program(disk_buffer, memory_addr, transfer_size, 0);
    dma.start();

    std::cout << "[CPU] DMA is running - CPU can do other work!\n";
    for (int i = 0; i < 5; i++) {
        std::cout << "[CPU] Computing iteration " << i << "...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(1));
    }

    dma.simulate_transfer();
    mem.write(memory_addr, disk_data, transfer_size);
    std::cout << "[CPU] DMA finished. Transferred " << transfer_size << " bytes.\n";
    return 0;
}
```

#### Python Implementation

```python
import time
import threading

class DMAController:
    def __init__(self):
        self.src_addr = 0
        self.dst_addr = 0
        self.byte_count = 0
        self.direction = 0
        self.busy = False
        self.error = False

    def program(self, src, dst, count, direction):
        self.src_addr = src
        self.dst_addr = dst
        self.byte_count = count
        self.direction = direction

    def start(self):
        self.busy = True
        self.error = False
        dir_str = "DEV->MEM" if self.direction == 0 else "MEM->DEV"
        print(f"[DMA] Transfer started: {self.byte_count} bytes, {dir_str}")

    def is_busy(self):
        return self.busy

    def simulate_transfer(self):
        time.sleep(self.byte_count / 100000)
        self.busy = False
        print("[DMA] Transfer complete")

dma = DMAController()
print("[CPU] Programming DMA controller...")
dma.program(src=0x1000, dst=0x4000, count=4096, direction=0)
dma.start()

print("[CPU] DMA is running - CPU can do other work!")
for i in range(5):
    print(f"[CPU] Computing iteration {i}...")
    time.sleep(0.001)

dma.simulate_transfer()
print(f"[CPU] DMA finished. Transferred {4096} bytes.")
```

#### Complexity Analysis

| Metric | Value | Why |
|--------|-------|-----|
| CPU setup overhead | O(1) | Write 3-4 registers |
| Transfer throughput | Up to bus bandwidth | Memory bandwidth limits |
| CPU utilization during transfer | ~0% | DMA owns the bus or cycle-steals |
| Latency (first byte) | Setup + bus arbitration | Depends on bus protocol |
| Overhead per transfer | ~1 interrupt | One IRQ per DMA completion |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Zero CPU data copying | DMA controller hardware cost |
| True parallelism (CPU + DMA) | Bus contention with CPU |
| High throughput for block I/O | Cache coherency issues |
| Ideal for multimedia/streaming | Scatter-gather requires complex DMA |

#### Edge Cases

- **DMA buffer collision**: DMA writes to memory the CPU is accessing -> stale cache data. Solution: cache flushing or coherent DMA.
- **Bus deadlock**: DMA and CPU both need bus; priority arbitration, starvation prevention.
- **Scatter-gather DMA**: Non-contiguous physical pages; DMA must handle descriptor rings.
- **IOMMU protection**: DMA attacks (evil DMA); IOMMU restricts which memory regions DMA can access.
- **DMA during power transitions**: Device suspended mid-transfer; abort and retry.
### 5. Polling vs Interrupt vs DMA - Comparison

| Dimension | Polling (PIO) | Interrupt-Driven | DMA |
|-----------|-------------|-----------------|-----|
| CPU role | Checks status loop | Starts I/O, handles IRQ | Programs DMA, handles completion |
| Data path | CPU reads/writes each byte | CPU reads/writes each byte | Device to Memory (CPU bypassed) |
| Per-byte CPU cost | High (poll + read) | Medium (save + ISR + restore) | Zero (during transfer) |
| Per-transfer CPU cost | N * poll_cycles | N * (save + ISR + restore) | One-time setup + one IRQ |
| Latency | Depends on poll frequency | Fast response to events | Setup + arbitration delay |
| Concurrency | None | Process runs between interrupts | CPU works during transfer |
| Energy efficiency | Very poor | Good | Excellent |
| Complexity | Lowest | Medium | Highest |
| Hardware required | None | PIC, programmable interrupt controller | DMA controller |
| Best for | Fast/simple devices, embedded | Character devices, keyboards | Block devices, network, video |
| Worst for | Block transfers, slow devices | High-frequency events, bulk data | Small transfers (overhead ratio) |

#### Decision Flowchart

```
Is the device very fast (microsecond-level response)?
    Yes -> Can you afford 100% CPU during wait?
        Yes -> Polling
        No -> Interrupt-driven
    No -> (millisecond-level or event-driven)
        Is transfer size > ~256 bytes?
            Yes -> DMA
            No -> Interrupt-driven
        Real-time deadline?
            Yes -> Polling (deterministic latency)
            No -> Interrupt-driven or DMA
```

### 6. I/O Software Layers (4-Layer Model)

The I/O software stack is organized into four layers that abstract hardware details progressively.

#### Real-World Analogy

> Shipping a package: User (writes address) -> Post office sorting (device-independent formatting) -> Local carrier (driver for your street) -> Delivery person (last-mile hardware handler).

#### Layer Diagram

```
+------------------------------------------+
| User-Level I/O Software                  | Layer 4
| (stdio, iostream, printf, scanf)         |
+------------------------------------------+
| Device-Independent OS I/O Layer          | Layer 3
| (system calls, naming, protection,        |
|  buffering, caching, spooling)           |
+------------------------------------------+
| Device Drivers                            | Layer 2
| (understands device protocol,            |
|  translates generic to specific)         |
+------------------------------------------+
| Interrupt Handlers / Hardware             | Layer 1
| (responds to IRQ, minimal code)          |
+------------------------------------------+
```

#### Layer 4: User-Level I/O

- C's `printf()` / `scanf()`, C++'s `std::cout`, Python's `print()` / `input()`
- Buffered stdio hides syscall overhead
- Formatting, line editing, character translation

#### Layer 3: Device-Independent OS I/O

| Service | Purpose |
|---------|---------|
| System calls | `read()`, `write()`, `open()`, `close()`, `ioctl()` |
| Device naming | `/dev/sda`, `/dev/tty0` - abstraction of device identity |
| Protection | Permissions on device files (owner/group/world) |
| Buffering | Kernel buffers decouple app from device speed |
| Caching | Page cache, buffer cache, dentry cache |
| Spooling | Serialize access to exclusive devices |
| Error handling | Retry transient errors, propagate persistent errors |
| I/O scheduling | Reorder requests for performance |

#### Layer 2: Device Drivers

- Hardware-specific code
- Maps generic commands to device register operations
- Handles device interrupts
- One driver per device family (or per device)

#### Layer 1: Interrupt Handlers

- Lowest level - runs in interrupt context
- Cannot block, cannot call most kernel functions
- Should be extremely fast (bottom-half for heavy work)
- Saves data, acknowledges IRQ, schedules softirq/tasklet

#### Linux Implementation Example

```cpp
// Layer 4 (User):
// char buf[1024];
// int n = read(fd, buf, 1024);

// Layer 3 (VFS - Virtual File System):
ssize_t vfs_read(struct file *filp, char __user *buf,
                 size_t count, loff_t *pos) {
    ssize_t ret;
    if (filp->f_op->read)
        ret = filp->f_op->read(filp, buf, count, pos);
    else if (filp->f_op->read_iter)
        ret = filp->f_op->read_iter(filp, buf, count, pos);
    return ret;
}

// Layer 2 (Device Driver - e.g., AHCI disk driver):
static ssize_t ahci_read(struct file *filp, char __user *buf,
                         size_t count, loff_t *pos) {
    // Translate to AHCI command
    // Program DMA descriptor
    // Ring doorbell register
    return count;
}

// Layer 1 (Interrupt Handler):
static irqreturn_t ahci_interrupt(int irq, void *dev_id) {
    // Read interrupt status register
    // Acknowledge IRQ
    // Wake up waiting process
    return IRQ_HANDLED;
}
```

#### Complexity Analysis

| Layer | Time Complexity | Space Complexity | Why |
|-------|----------------|-----------------|-----|
| User-level I/O | O(buffer_size) | O(buffer_size) | Buffered formatting |
| Device-independent | O(1) to O(N) | O(buffer_size) | Syscall overhead + copy |
| Device driver | O(register_ops) | O(driver_state) | Device register access |
| Interrupt handler | O(1) preferred | O(1) | Must be minimal |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Separation of concerns | Layer-crossing overhead |
| Hardware independence | More code = more bugs |
| Reusable across drivers | Each layer adds latency |
| User programs are portable | Debugging across layers is hard |

#### Edge Cases

- **Layer bypass**: User program uses mmap to skip layers -> coherency issues.
- **Priority inversion**: High-priority user thread blocked on low-priority driver.
- **Mock device drivers**: Testing higher layers requires fake lower layers.
### 7. Device Drivers

A device driver is kernel code that acts as a translator between the OS and specific hardware.

#### Real-World Analogy

> A translator (driver) between a diplomat (OS) and a local official (device). The diplomat speaks one language (generic interface), the official speaks another (device protocol). The translator converts.

#### Numbered Steps: Driver I/O Request Lifecycle

1. Application calls `read(fd, buf, count)`.
2. VFS dispatches to driver's `read` function via file operations table.
3. Driver validates parameters and checks device state.
4. Driver formats device-specific command (e.g., ATA command block).
5. Driver writes command to device registers.
6. If PIO: driver polls for completion.
7. If DMA: driver programs DMA engine, starts transfer, returns.
8. Device generates interrupt on completion.
9. Interrupt handler identifies which driver owns this IRQ.
10. Handler reads status, signals completion to waiting process.
11. Data is copied to user buffer (if PIO) or already in place (DMA).
12. Driver returns bytes read to VFS, which returns to application.

#### Pseudocode: Block Device Driver

```
STRUCTURE block_device_driver:
    .major
    .ops
    .queue
    .lock
    .hw_state

FUNCTION driver_read(request):
    LOCK(driver.lock)
    cmd = FORMAT_ATA_COMMAND(request.lba, request.count)
    WRITE_REGISTER(device.cmd_reg, cmd)
    WRITE_REGISTER(device.lba_reg, request.lba)
    WRITE_REGISTER(device.count_reg, request.count)
    IF use_dma:
        dma.program(device.data_port, request.buffer, request.count)
        dma.start()
        UNLOCK(driver.lock)
        RETURN PENDING
    ELSE:
        FOR i = 0 TO request.count:
            WHILE (READ_REGISTER(device.status) & BSY): NOP
            request.buffer[i] = READ_REGISTER(device.data)
        UNLOCK(driver.lock)
        RETURN OK
END FUNCTION
```

#### Dry Run Trace: Driver Read with DMA

| Step | Component | Action |
|------|-----------|--------|
| 1 | App | read(fd, buf, 8192) |
| 2 | VFS | filp->f_op->read(file, buf, 8192, &pos) |
| 3 | ext4 | File to block mapping: logical blocks 42-43 |
| 4 | Block layer | Request merged into elevator queue |
| 5 | SCSI layer | scsi_dispatch_cmd() |
| 6 | Driver | Program DMA: address=0x2000, count=8KB |
| 7 | DMA | Transfer starts - CPU returns to app |
| 8 | Device | Sends data |
| 9 | DMA | Writes to 0x2000-0x3FFF |
| 10 | Device | Assert IRQ when done |
| 11 | Driver ISR | Read status, wake up waiting process |
| 12 | App | buf now contains data |

#### C++ Implementation: Driver Framework

```cpp
#include <iostream>
#include <string>
#include <functional>
#include <map>

struct file_operations {
    std::function<int(char*, size_t)> read;
    std::function<int(const char*, size_t)> write;
    std::function<int()> open;
    std::function<int()> release;
    std::function<int(int, void*)> ioctl;
};

class DeviceDriver {
    std::string name;
    int major;
protected:
    file_operations ops;
public:
    DeviceDriver(const std::string& n, int maj) : name(n), major(maj) {}
    virtual ~DeviceDriver() = default;

    std::string get_name() const { return name; }
    int get_major() const { return major; }
    file_operations* get_ops() { return &ops; }

    virtual int init_device() = 0;
    virtual void shutdown_device() = 0;
};

class SimpleCharDriver : public DeviceDriver {
    char buffer[256];
    int buf_pos;
public:
    SimpleCharDriver() : DeviceDriver("simple_char", 42), buf_pos(0) {
        ops.read = [this](char* buf, size_t count) -> int {
            int to_copy = std::min(count, (size_t)buf_pos);
            memcpy(buf, buffer, to_copy);
            if (to_copy < buf_pos)
                memmove(buffer, buffer + to_copy, buf_pos - to_copy);
            buf_pos -= to_copy;
            std::cout << "[DRV] Read " << to_copy << " bytes\n";
            return to_copy;
        };
        ops.write = [this](const char* buf, size_t count) -> int {
            int to_copy = std::min(count, (size_t)(256 - buf_pos));
            memcpy(buffer + buf_pos, buf, to_copy);
            buf_pos += to_copy;
            std::cout << "[DRV] Wrote " << to_copy << " bytes\n";
            return to_copy;
        };
    }

    int init_device() override {
        std::cout << "[DRV] Initializing " << get_name() << "\n";
        return 0;
    }

    void shutdown_device() override {
        std::cout << "[DRV] Shutting down\n";
    }
};

int main() {
    SimpleCharDriver driver;
    driver.init_device();
    char data[] = "Hello, device!";
    driver.get_ops()->write(data, sizeof(data));
    char readbuf[64] = {0};
    driver.get_ops()->read(readbuf, 64);
    std::cout << "Read back: " << readbuf << "\n";
    driver.shutdown_device();
    return 0;
}
```

#### Python Implementation

```python
from abc import ABC, abstractmethod

class FileOperations:
    def __init__(self):
        self.read = None
        self.write = None
        self.open = None
        self.release = None
        self.ioctl = None

class DeviceDriver(ABC):
    def __init__(self, name, major):
        self.name = name
        self.major = major
        self.ops = FileOperations()

    @abstractmethod
    def init_device(self): pass

    @abstractmethod
    def shutdown_device(self): pass

class SimpleCharDriver(DeviceDriver):
    def __init__(self):
        super().__init__("simple_char", 42)
        self.buffer = bytearray()
        self.ops.read = self._read
        self.ops.write = self._write

    def _read(self, buf, count):
        to_copy = min(count, len(self.buffer))
        result = bytes(self.buffer[:to_copy])
        self.buffer = self.buffer[to_copy:]
        print(f"[DRV] Read {to_copy} bytes: {result}")
        return result

    def _write(self, data, count):
        self.buffer.extend(data[:count])
        print(f"[DRV] Wrote {count} bytes")
        return count

    def init_device(self):
        print(f"[DRV] Initializing {self.name} at major {self.major}")
        return 0

    def shutdown_device(self):
        print("[DRV] Shutting down")

driver = SimpleCharDriver()
driver.init_device()
driver.ops.write(b"Hello, device!", 14)
data = driver.ops.read(None, 64)
print(f"Read back: {data}")
driver.shutdown_device()
```

#### Complexity Analysis

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Driver init | O(hw_init) | Device detection + register setup |
| Read (PIO) | O(N) | N bytes copied through CPU |
| Read (DMA) | O(1) setup | Setup + wait for completion interrupt |
| Interrupt handling | O(1) | Status read + wakeup |
| ioctl | O(command) | Device-specific control operation |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Standard kernel interface | Kernel-space bugs crash system |
| Hardware abstraction | Must handle every device variation |
| Hot-plug support | Race conditions with concurrent access |
| Power management hooks | Complex DMA/SG handling |

#### Edge Cases

- **Device hot-unplug**: Driver reads status, device gone; return I/O error gracefully.
- **Concurrent access**: Multiple threads on same device; lock request queue, serialize.
- **Power transition**: Device suspends mid-I/O; abort, requeue, or retry on resume.
- **Faulty device**: Status returns garbage; check magic numbers, implement timeout.
- **Module unloading**: Device still has pending I/O; drain queue before unload.

### 8. Character vs Block Devices

| Criterion | Character Device | Block Device |
|-----------|----------------|-------------|
| Data unit | Byte stream | Fixed-size blocks (512B-4KB) |
| Seeking | Not supported | Random access by block number |
| Buffering | Line or raw mode | Page cache + buffer cache |
| Access pattern | Sequential | Random + sequential |
| Examples | Keyboard, mouse, serial, TTY | Disk, SSD, CD-ROM, partition |
| Device file | `/dev/tty0`, `/dev/random` | `/dev/sda`, `/dev/nvme0n1` |
| Driver interface | char_device_operations | block_device_operations + request queue |
| Major numbers | 4 (TTY), 1 (mem), 10 (misc) | 8 (SD), 259 (NVMe) |
| Caching | Typically no | Page cache (yes) |
| DMA | Rarely (small transfers) | Always for bulk I/O |

#### Character Device Flow

```
User: read(fd, buf, 100)
  V
Kernel: tty_read()
  V
Line discipline: process special chars (^C, ^D, backspace)
  V
Serial driver: read UART register
  V
Device: provides one byte at a time via interrupt
```

#### Block Device Flow

```
User: read(fd, buf, 4096)
  V
VFS: vfs_read() -> ext4_file_read()
  V
ext4: logical offset -> physical block number (inode lookup)
  V
Page cache: check if page is already cached -> hit/miss
  V
Block layer: submit_bio(struct bio)
  V
I/O scheduler: merge, sort requests (deadline/CFQ)
  V
Device driver: translate BIO -> NVMe command or ATA command
  V
DMA: NVMe SQ doorbell -> controller reads command -> DMA data
  V
Interrupt: completion -> wake up waiting process
```

#### C++: Character vs Block Abstraction

```cpp
#include <iostream>
#include <vector>

class CharacterDevice {
protected:
    std::vector<char> buffer;
public:
    virtual ssize_t read(char* buf, size_t count) = 0;
    virtual ssize_t write(const char* buf, size_t count) = 0;
    virtual ~CharacterDevice() = default;
};

class BlockDevice {
protected:
    static const size_t BLOCK_SIZE = 4096;
    std::vector<std::vector<char>> blocks;
public:
    virtual ssize_t read_block(size_t n, char* buf) = 0;
    virtual ssize_t write_block(size_t n, const char* buf) = 0;
    virtual size_t block_count() const = 0;
    virtual ~BlockDevice() = default;
};

class SerialPort : public CharacterDevice {
public:
    ssize_t read(char* buf, size_t count) override {
        if (buffer.empty()) return 0;
        size_t n = std::min(count, buffer.size());
        std::copy(buffer.begin(), buffer.begin() + n, buf);
        buffer.erase(buffer.begin(), buffer.begin() + n);
        return n;
    }

    ssize_t write(const char* buf, size_t count) override {
        std::cout << "[SERIAL] TX: ";
        for (size_t i = 0; i < count; i++) std::cout << buf[i];
        std::cout << "\n";
        return count;
    }
};

class SSD : public BlockDevice {
public:
    SSD() { blocks.resize(1024, std::vector<char>(BLOCK_SIZE, 0)); }

    ssize_t read_block(size_t n, char* buf) override {
        if (n >= blocks.size()) return -1;
        std::copy(blocks[n].begin(), blocks[n].end(), buf);
        return BLOCK_SIZE;
    }

    ssize_t write_block(size_t n, const char* buf) override {
        if (n >= blocks.size()) return -1;
        std::copy(buf, buf + BLOCK_SIZE, blocks[n].begin());
        return BLOCK_SIZE;
    }

    size_t block_count() const override { return blocks.size(); }
};

int main() {
    SSD ssd;
    char data[4096] = "Block data content";
    ssd.write_block(42, data);
    char readback[4096] = {0};
    ssd.read_block(42, readback);
    std::cout << "Block 42: " << readback << "\n";
    return 0;
}
```
### 9. Kernel I/O Subsystem

The kernel I/O subsystem provides a unified framework for all I/O operations across devices.

#### Components

```
+----------------------------------------+
| System Calls (read/write/open)          |
+----------------------------------------+
| VFS  | Device Files  | Socket Layer     |
+------+---------------+------------------+
| I/O Scheduler  | Block Layer (bio)      |
+----------------+-----------------------+
| Page Cache | Buffer Cache | Dentry Cache|
+----------------------------------------+
| Device Drivers (char, block, network)   |
+----------------------------------------+
| Interrupt Handlers (top-half + bottom)  |
+----------------------------------------+
```

#### Key Kernel Services

| Service | Function |
|---------|----------|
| I/O Scheduling | Reorder and merge block I/O requests for efficiency |
| Buffering | Decouple producer/consumer speed mismatches |
| Caching | Keep frequently accessed data in memory |
| Spooling | Serialize access to exclusive devices |
| Error handling | Retry transient, report persistent errors |
| Protection | Device file permissions, capability checks |
| Naming | /dev/sda, /dev/ttyS0 - consistent device naming |

---

### 10. I/O Scheduling

I/O scheduling reorders and merges pending I/O requests to improve throughput and fairness.

#### Real-World Analogy

> An elevator (disk head) carries passengers (I/O requests). Serving floor 3, then floor 10, then floor 4 means wasted travel. The elevator scheduler reorders: 3, 4, 10.

#### Numbered Steps: Deadline Algorithm

1. New I/O request arrives (block number, read/write, process ID).
2. Scheduler inserts request into sorted queue (by block number).
3. Scheduler assigns expiration deadline (500ms for reads, 5s for writes).
4. Scheduler inserts into read FIFO and write FIFO (by deadline).
5. When dispatch is called:
   a. If any request in FIFO has expired, serve FIFO (starvation prevention).
   b. Otherwise, serve from sorted queue (elevator/SSTF order).
6. Adjacent requests are merged (same block = merge).
7. Driver receives merged optimal request.

#### Pseudocode

```
CLASS IOScheduler:
    sorted_queue = PRIORITY_QUEUE(key = block_number)
    read_fifo = QUEUE()
    write_fifo = QUEUE()

    FUNCTION add_request(req):
        sorted_queue.push(req)
        IF req.type == READ: read_fifo.push(req)
        ELSE: write_fifo.push(req)
        MERGE_ADJACENT()
    END FUNCTION

    FUNCTION dispatch():
        current_time = NOW()
        IF read_fifo.front().deadline < current_time:
            RETURN read_fifo.pop()
        IF write_fifo.front().deadline < current_time:
            RETURN write_fifo.pop()
        RETURN sorted_queue.pop()
    END FUNCTION

    FUNCTION merge_adjacent():
        // Combine adjacent blocks into one larger request
    END FUNCTION
END CLASS
```

#### Dry Run Trace: Deadline Scheduler

| Step | Req | Block | Type | Sorted Queue | Deadlines | Dispatch |
|------|-----|-------|------|-------------|-----------|----------|
| 1 | A | 100 | READ | [100A] | t+500ms | - |
| 2 | B | 50 | WRITE | [50B, 100A] | t+5s | - |
| 3 | C | 200 | READ | [50B, 100A, 200C] | t+500ms | - |
| 4 | D | 55 | WRITE | [50B, 55D, 100A, 200C] | t+5s | - |
| 5 | - | - | - | [50B, 55D, 100A, 200C] | - | 50B (sorted) |
| 6 | - | - | - | [100A, 200C] | - | 100A (sorted) |
| 7 | E | 60 | READ | [60E, 200C] | t+500ms | - |
| 8 | - | - | - | [60E, 200C] | expired | 60E (FIFO) |
| 9 | - | - | - | [200C] | - | 200C (sorted) |

#### C++ Implementation: I/O Scheduler

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>
#include <cstdint>

struct IORequest {
    uint64_t block;
    bool is_read;
    int pid;
    uint64_t deadline_ms;
    bool operator<(const IORequest& other) const {
        return block > other.block;
    }
};

class DeadlineIOScheduler {
    std::priority_queue<IORequest> sorted_queue;
    std::vector<IORequest> read_fifo, write_fifo;
    uint64_t current_ms;
    static constexpr uint64_t READ_DEADLINE = 500;
    static constexpr uint64_t WRITE_DEADLINE = 5000;

public:
    DeadlineIOScheduler() : current_ms(0) {}

    void add_request(uint64_t block, bool is_read, int pid) {
        uint64_t deadline = current_ms + (is_read ? READ_DEADLINE : WRITE_DEADLINE);
        sorted_queue.push({block, is_read, pid, deadline});
        (is_read ? read_fifo : write_fifo).push_back({block, is_read, pid, deadline});
    }

    IORequest dispatch() {
        for (auto* fifo : {&read_fifo, &write_fifo}) {
            auto it = std::find_if(fifo->begin(), fifo->end(),
                [this](const IORequest& r) { return r.deadline_ms <= current_ms; });
            if (it != fifo->end()) {
                IORequest req = *it;
                fifo->erase(it);
                return req;
            }
        }
        if (!sorted_queue.empty()) {
            IORequest req = sorted_queue.top();
            sorted_queue.pop();
            auto& fifo = req.is_read ? read_fifo : write_fifo;
            fifo.erase(std::remove_if(fifo.begin(), fifo.end(),
                [&](const IORequest& r) { return r.block == req.block; }), fifo.end());
            return req;
        }
        return {0, false, 0, 0};
    }

    void tick(uint64_t ms) { current_ms += ms; }
    bool empty() const { return sorted_queue.empty(); }
};

int main() {
    DeadlineIOScheduler sched;
    sched.add_request(100, true, 1);
    sched.add_request(50, false, 2);
    sched.add_request(200, true, 3);
    sched.add_request(55, false, 4);
    while (!sched.empty()) { sched.tick(100); sched.dispatch(); }
    return 0;
}
```

#### Python Implementation

```python
import heapq
from dataclasses import dataclass
from typing import List

@dataclass
class IORequest:
    block: int; is_read: bool; pid: int; deadline: int
    def __lt__(self, other):
        return self.block < other.block

class DeadlineIOScheduler:
    READ_DEADLINE = 500; WRITE_DEADLINE = 5000

    def __init__(self):
        self.sorted_queue: List[IORequest] = []
        self.read_fifo: List[IORequest] = []
        self.write_fifo: List[IORequest] = []
        self.current_ms = 0

    def add_request(self, block, is_read, pid):
        deadline = self.current_ms + (self.READ_DEADLINE if is_read else self.WRITE_DEADLINE)
        req = IORequest(block=block, is_read=is_read, pid=pid, deadline=deadline)
        heapq.heappush(self.sorted_queue, req)
        (self.read_fifo if is_read else self.write_fifo).append(req)

    def dispatch(self):
        for fifo in (self.read_fifo, self.write_fifo):
            expired = [r for r in fifo if r.deadline <= self.current_ms]
            if expired:
                req = expired[0]; fifo.remove(req); return req
        if self.sorted_queue:
            req = heapq.heappop(self.sorted_queue)
            (self.read_fifo if req.is_read else self.write_fifo).remove(req)
            return req
    def tick(self, ms): self.current_ms += ms
    def empty(self): return len(self.sorted_queue) == 0

sched = DeadlineIOScheduler()
sched.add_request(100, True, 1)
sched.add_request(50, False, 2)
sched.add_request(200, True, 3)
sched.add_request(55, False, 4)
while not sched.empty():
    sched.tick(100); sched.dispatch()
```

#### Complexity Analysis

| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Request insert | O(log N) | O(N) | Priority queue push |
| Request dispatch | O(log N) | O(N) | Pop + deadline scan |
| Request merge | O(1) | O(N) | Adjacent block check |
| Deadline check | O(M) + O(log N) | O(N) | Scan FIFO (M) + pop queue |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Increased throughput via merging | Starvation possible (without deadline) |
| Fairness across processes | Complexity overhead |
| Reduced seek time | Not optimal for SSDs (no seek) |

#### Edge Cases

- **Empty queue**: Dispatch returns immediately with no-op.
- **Read starvation**: Burst of writes delays reads indefinitely; deadline prevents this.
- **Process exits with pending I/O**: Drain or cancel requests.
- **Device removal mid-queue**: Cancel all pending, return error.

---

### 11. Buffering

A buffer is a memory region that holds data in transit between two devices or between device and application.

#### Real-World Analogy

> A water tank (buffer) between a slow well (producer) and a fast tap (consumer). The tank fills when the well pumps and drains when the tap opens. Without the tank, the tap sputters.

#### Single Buffering

```
Producer -> [Buffer] -> Consumer

One buffer shared between producer and consumer.
At any time, either the producer fills or the consumer drains.
```

**C++ Implementation: Single Buffer**

```cpp
#include <iostream>
#include <thread>

template<typename T>
class SingleBuffer {
    T data;
    bool full;
public:
    SingleBuffer() : full(false) {}

    void put(const T& item) {
        while (full) std::this_thread::yield();
        data = item;
        full = true;
    }

    T get() {
        while (!full) std::this_thread::yield();
        full = false;
        return data;
    }
};

int main() {
    SingleBuffer<char> buf;
    std::thread producer([&]() {
        for (char c : "Hello") { buf.put(c); std::this_thread::sleep_for(std::chrono::milliseconds(50)); }
    });
    std::thread consumer([&]() {
        for (int i = 0; i < 5; i++) { char c = buf.get(); std::cout << c; }
    });
    producer.join(); consumer.join();
    std::cout << "\n";
    return 0;
}
```

**Python Implementation**

```python
import threading, time

class SingleBuffer:
    def __init__(self):
        self.data = None
        self.full = False
        self._lock = threading.Lock()
        self._cond = threading.Condition(self._lock)

    def put(self, item):
        with self._lock:
            while self.full: self._cond.wait()
            self.data = item; self.full = True; self._cond.notify()

    def get(self):
        with self._lock:
            while not self.full: self._cond.wait()
            self.full = False; self._cond.notify(); return self.data

buf = SingleBuffer()
def producer():
    for c in "Hello": buf.put(c); time.sleep(0.05)
def consumer():
    for _ in range(5): print(buf.get(), end='', flush=True)
threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()
time.sleep(1); print()
```

#### Double Buffering

```
Buffer A: [ being consumed -> ]   Consumer reads from A
Buffer B: [ <- producer fills  ]   Producer writes to B

When A is empty and B is full: swap roles.
Eliminates waiting - producer and consumer work in parallel.
```

**Diagram:**

```
Time t0: A=[data ready]  B=[empty]
         consumer reads A, producer fills B

Time t1: A=[empty]       B=[data ready]
         producer fills A,  consumer reads B

Time t2: A=[data ready]  B=[empty]
         consumer reads A, producer fills B
```

**C++ Implementation: Double Buffer**

```cpp
#include <iostream>
#include <thread>
#include <vector>
#include <atomic>

template<typename T>
class DoubleBuffer {
    std::vector<T> buffers[2];
    std::atomic<int> read_idx{0};
    std::atomic<int> write_idx{1};
    static const size_t CAP = 256;

public:
    DoubleBuffer() { buffers[0].reserve(CAP); buffers[1].reserve(CAP); }

    void produce(const T& item) { buffers[write_idx.load()].push_back(item); }

    void swap() {
        int w = write_idx.exchange(read_idx);
        read_idx.store(w);
        buffers[write_idx.load()].clear();
    }

    const std::vector<T>& consume() const { return buffers[read_idx.load()]; }
};

int main() {
    DoubleBuffer<int> db;
    std::thread producer([&]() {
        for (int i = 0; i < 100; i++) { db.produce(i); std::this_thread::sleep_for(std::chrono::milliseconds(1)); if (i % 10 == 0) db.swap(); }
    });
    std::thread consumer([&]() {
        for (int i = 0; i < 10; i++) { std::this_thread::sleep_for(std::chrono::milliseconds(5)); db.swap(); auto data = db.consume(); std::cout << "Consumed " << data.size() << " items\n"; }
    });
    producer.join(); consumer.join();
    return 0;
}
```

**Python Implementation**

```python
import threading, time

class DoubleBuffer:
    def __init__(self):
        self.buffers = [[], []]
        self.read_idx = 0; self.write_idx = 1
        self._lock = threading.Lock()

    def produce(self, item):
        with self._lock: self.buffers[self.write_idx].append(item)

    def swap(self):
        with self._lock:
            self.read_idx, self.write_idx = self.write_idx, self.read_idx
            self.buffers[self.write_idx].clear()
            return list(self.buffers[self.read_idx])

db = DoubleBuffer()
def producer():
    for i in range(100): db.produce(i); time.sleep(0.001)
def consumer():
    for _ in range(10): time.sleep(0.005); data = db.swap(); print(f"Consumed {len(data)} items")
threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()
time.sleep(1)
```

#### Circular Buffer (Ring Buffer)

```
A fixed-size array with head and tail pointers that wrap around.

   head -> [ | | |X|X|X|X| | | ] <- tail

Produce at tail; consume at head. Full when (tail+1) % N == head.
```

**C++ Implementation: Circular Buffer**

```cpp
#include <iostream>
#include <vector>
#include <optional>

template<typename T>
class CircularBuffer {
    std::vector<T> buffer;
    size_t head, tail;
    bool full_flag;
public:
    CircularBuffer(size_t size) : buffer(size), head(0), tail(0), full_flag(false) {}

    bool enqueue(const T& item) {
        if (full_flag) return false;
        buffer[tail] = item;
        tail = (tail + 1) % buffer.size();
        if (tail == head) full_flag = true;
        return true;
    }

    std::optional<T> dequeue() {
        if (empty()) return std::nullopt;
        T item = buffer[head];
        head = (head + 1) % buffer.size();
        full_flag = false;
        return item;
    }

    bool empty() const { return !full_flag && head == tail; }
    bool full() const { return full_flag; }
};

int main() {
    CircularBuffer<int> cb(8);
    for (int i = 0; i < 6; i++) cb.enqueue(i * 10);
    while (!cb.empty()) {
        auto val = cb.dequeue();
        if (val) std::cout << "Dequeued " << *val << "\n";
    }
    return 0;
}
```

**Python Implementation**

```python
from typing import Optional, List

class CircularBuffer:
    def __init__(self, size: int):
        self.buffer: List[Optional[int]] = [None] * size
        self.size = size; self.head = 0; self.tail = 0; self.full_flag = False

    def enqueue(self, item: int) -> bool:
        if self.full_flag: return False
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.size
        if self.tail == self.head: self.full_flag = True
        return True

    def dequeue(self) -> Optional[int]:
        if self.empty(): return None
        item = self.buffer[self.head]
        self.head = (self.head + 1) % self.size
        self.full_flag = False
        return item

    def empty(self): return not self.full_flag and self.head == self.tail
    def full(self): return self.full_flag

cb = CircularBuffer(8)
for i in range(6): cb.enqueue(i * 10)
while not cb.empty():
    val = cb.dequeue()
    if val is not None: print(f"Dequeued {val}")
```

#### Complexity Analysis

| Type | Enqueue | Dequeue | Space | Why |
|------|---------|---------|-------|-----|
| Single buffer | O(1) | O(1) | O(1) | One slot, must wait for consumer |
| Double buffer | O(1) | O(1) | O(2N) | Swap pointers O(1); two full buffers |
| Circular buffer | O(1) | O(1) | O(N) | Array with modulo arithmetic |

#### Buffering Comparison

| Aspect | Single | Double | Circular |
|--------|--------|--------|----------|
| Concurrency | None | Yes (swap) | Fine-grained |
| Memory waste | Minimal | 2x | Wastes 1 slot |
| Best for | Simple sync | Audio/video streaming | Network ring buffers |
| Complexity | Lowest | Medium | Medium |

#### Edge Cases

- **Buffer overflow**: Producer faster than consumer; data loss. Back-pressure needed.
- **Buffer underflow**: Consumer faster than producer; stale data. Wait or return empty.
- **Wrap-around**: Circular buffer tail passes head; overwrite old data. Check full_flag.
- **Multi-producer/consumer**: Need atomic increment or locking around head/tail.
- **Cache line bouncing**: Head and tail on same cache line; false sharing. Pad to separate lines.
### 12. Caching

A cache holds copies of frequently accessed data for faster access on subsequent requests.

#### Real-World Analogy

> A toolbox (cache) next to your workbench. Instead of walking to the hardware store (disk) for every screw (data block), you keep frequently used screws in the toolbox.

#### Cache vs Buffer

| Property | Cache | Buffer |
|----------|-------|--------|
| Purpose | Speed up repeated access | Decouple producer/consumer |
| Data lifecycle | Kept for potential reuse | Transient, consumed once |
| Eviction | LRU, LFU, ARC algorithms | Not applicable |
| Example | Page cache (Linux VM) | stdio buffer, DMA ring buffer |

#### Page Cache in Linux

```
Application: read(fd, buf, 4096)
    V
VFS: lookup page in page cache
    Hit -> copy from page cache -> return (fast!)
    Miss -> allocate page -> submit I/O -> DMA fills page
            -> add to page cache -> copy to user -> return
```

#### C++ Implementation: LRU Cache

```cpp
#include <iostream>
#include <unordered_map>
#include <list>
#include <cstdint>

class PageCache {
    size_t capacity;
    std::list<std::pair<uint64_t, std::vector<char>>> lru_list;
    std::unordered_map<uint64_t, decltype(lru_list)::iterator> map;

public:
    PageCache(size_t cap) : capacity(cap) {}

    bool get(uint64_t block_num, std::vector<char>& data) {
        auto it = map.find(block_num);
        if (it == map.end()) return false;
        lru_list.splice(lru_list.begin(), lru_list, it->second);
        data = it->second->second;
        return true;
    }

    void put(uint64_t block_num, const std::vector<char>& data) {
        auto it = map.find(block_num);
        if (it != map.end()) {
            it->second->second = data;
            lru_list.splice(lru_list.begin(), lru_list, it->second);
            return;
        }
        if (lru_list.size() >= capacity) {
            map.erase(lru_list.back().first);
            lru_list.pop_back();
        }
        lru_list.emplace_front(block_num, data);
        map[block_num] = lru_list.begin();
    }
};

int main() {
    PageCache cache(3);
    std::vector<char> block(4096, 'A');
    cache.put(100, block); cache.get(100, block);
    cache.put(200, block); cache.put(300, block);
    cache.get(200, block);
    cache.put(400, block); // evicts 100
    std::vector<char> unused;
    std::cout << "Block 100 " << (cache.get(100, unused) ? "HIT" : "MISS") << "\n";
    return 0;
}
```

#### Python Implementation

```python
from collections import OrderedDict
from typing import Optional, List

class PageCache:
    def __init__(self, capacity: int):
        self.cache: OrderedDict[int, List[int]] = OrderedDict()
        self.capacity = capacity

    def get(self, block_num: int) -> Optional[List[int]]:
        if block_num not in self.cache: return None
        self.cache.move_to_end(block_num)
        return self.cache[block_num]

    def put(self, block_num: int, data: List[int]):
        if block_num in self.cache:
            self.cache.move_to_end(block_num)
            self.cache[block_num] = data
            return
        if len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)
        self.cache[block_num] = data

cache = PageCache(3)
block = [0x41] * 4096
cache.put(100, block); cache.get(100)
cache.put(200, block); cache.put(300, block)
cache.get(200)
cache.put(400, block)  # evicts 100
print(f"Block 100 cached: {cache.get(100) is not None}")
```

#### Complexity Analysis

| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Cache lookup | O(1) avg | O(C) | Hash map + list splice |
| Cache insert | O(1) | O(C) | Amortized; eviction O(1) |
| Eviction | O(1) | O(C) | Remove LRU tail |
| Miss penalty | O(I/O time) | O(block) | Disk/network I/O dominates |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Dramatically reduces I/O latency | Cache coherency complexity |
| Reduces device contention | Memory pressure |
| Transparent to applications | Stale data (stale cache problem) |

#### Edge Cases

- **Cache thrashing**: Working set exceeds cache; constant misses. Increase cache or change eviction policy.
- **Stale data**: Device writes bypass cache; cache has outdated copy; invalidate on write.
- **Write-back delay**: Data written to cache but not device; crash loses data; use write-through or journaling.
- **NUMA locality**: Cache on wrong NUMA node; cross-node memory access; bind cache to local node.

---

### 13. Spooling

A spool (Simultaneous Peripheral Operations On-Line) holds output for a device that cannot serve interleaved requests.

#### Real-World Analogy

> A deli counter with a ticket system. Multiple customers (applications) take numbers (spool files) and wait. The deli worker (device) serves one ticket at a time. Without tickets, customers would shout over each other.

#### Numbered Steps: Printer Spooler

1. Application A calls `write(printer_fd, "Report A", 8)`.
2. Kernel sees device is exclusive, writes data to spool file job001.
3. Application B calls `write(printer_fd, "Report B", 8)`.
4. Kernel writes data to spool file job002.
5. Print daemon (background process) monitors spool directory.
6. Daemon picks job001, opens printer device, sends data.
7. Daemon marks job001 as printed, deletes spool file.
8. Daemon picks job002, sends to printer.
9. Both applications got immediate completion - no waiting.

#### Pseudocode: Print Spooler

```
PROCEDURE spooler_daemon():
    WHILE TRUE:
        spool_files = LIST_FILES("/var/spool/printer/")
        SORT spool_files by creation time
        FOR each file IN spool_files:
            IF file.status == PENDING:
                printer = OPEN("/dev/lp0")
                data = READ(file)
                WRITE(printer, data)
                CLOSE(printer)
                DELETE(file)
        SLEEP(1 second)
END PROCEDURE

PROCEDURE print_document(document):
    job_id = GENERATE_UNIQUE_ID()
    spool_path = "/var/spool/printer/" + job_id + ".spool"
    WRITE_FILE(spool_path, document)
    MARK as PENDING
    RETURN job_id
END PROCEDURE
```

#### Dry Run Trace: Printer Spooler

| Time | App A | App B | Spool Dir | Printer | Daemon |
|------|-------|-------|-----------|---------|--------|
| t=0 | Submit Report | - | - | IDLE | Sleeping |
| t=1 | - | - | job001.spool | IDLE | Sleeping |
| t=2 | - | Submit Invoice | job001, job002 | IDLE | Sleeping |
| t=3 | Return OK | - | job001, job002 | IDLE | Wake, pick job001 |
| t=4 | App runs | Return OK | job001(printing), job002 | BUSY | Sending to printer |
| t=5 | - | - | job002, done: job001 | IDLE | job001 done, pick job002 |
| t=6 | - | - | job002(printing) | BUSY | Sending job002 |
| t=7 | - | - | done: job002 | IDLE | job002 done, sleep |

#### C++ Implementation: Print Spooler

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <thread>
#include <chrono>
#include <filesystem>

namespace fs = std::filesystem;

class PrintSpooler {
    fs::path spool_dir;
    bool running;
    std::string gen_id() {
        static int c = 0;
        return "job" + std::to_string(++c);
    }

public:
    PrintSpooler(const std::string& dir = "/tmp/spool") : spool_dir(dir), running(false) {
        fs::create_directories(spool_dir);
    }

    std::string submit(const std::string& doc) {
        auto id = gen_id();
        std::ofstream out(spool_dir / (id + ".spool"));
        out << doc;
        std::cout << "[SPOOL] Submitted " << id << "\n";
        return id;
    }

    void daemon_start() {
        running = true;
        std::thread([this]() {
            while (running) {
                std::vector<fs::path> jobs;
                for (auto& e : fs::directory_iterator(spool_dir))
                    if (e.path().extension() == ".spool") jobs.push_back(e.path());
                std::sort(jobs.begin(), jobs.end());
                for (auto& j : jobs) {
                    std::ifstream in(j);
                    std::string c((std::istreambuf_iterator<char>(in)), {});
                    std::cout << "[DAEMON] Printing " << j.stem() << ": " << c << "\n";
                    std::this_thread::sleep_for(std::chrono::milliseconds(300));
                    fs::remove(j);
                }
                std::this_thread::sleep_for(std::chrono::seconds(1));
            }
        }).detach();
    }

    void daemon_stop() { running = false; }
};

int main() {
    PrintSpooler sp;
    sp.daemon_start();
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
    sp.submit("Quarterly Report");
    sp.submit("Invoice #12345");
    sp.submit("Meeting Notes");
    std::this_thread::sleep_for(std::chrono::seconds(2));
    sp.daemon_stop();
    return 0;
}
```

#### Python Implementation

```python
import os, time, threading, uuid

class PrintSpooler:
    def __init__(self, spool_dir="/tmp/spool"):
        self.spool_dir = spool_dir; self.running = False
        os.makedirs(spool_dir, exist_ok=True)

    def submit(self, doc: str) -> str:
        jid = str(uuid.uuid4())[:8]
        with open(os.path.join(self.spool_dir, f"{jid}.spool"), 'w') as f:
            f.write(doc)
        print(f"[SPOOL] Submitted {jid}"); return jid

    def daemon_start(self):
        self.running = True
        def run():
            while self.running:
                jobs = sorted([os.path.join(self.spool_dir, f)
                    for f in os.listdir(self.spool_dir) if f.endswith('.spool')])
                for j in jobs:
                    with open(j) as f: c = f.read()
                    print(f"[DAEMON] Printing {os.path.basename(j)}: {c}")
                    time.sleep(0.3); os.remove(j)
                time.sleep(1)
        threading.Thread(target=run, daemon=True).start()

    def daemon_stop(self): self.running = False

sp = PrintSpooler()
sp.daemon_start()
time.sleep(0.1)
sp.submit("Quarterly Report")
sp.submit("Invoice #12345")
time.sleep(2)
print("Done")
```

#### Complexity Analysis

| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Spool submission | O(doc_size) | O(doc_size) | Write document to disk |
| Daemon poll | O(N) | O(1) | Scan directory, N = spool count |
| Print job | O(doc_size) | O(1) | Read + send to device |
| Job removal | O(1) | O(1) | File delete |

#### Advantages & Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| No application blocking | Disk space for spool files |
| Serializes exclusive devices | Daemon overhead |
| Crash resilience (spool on disk) | Temporary files need cleanup |

#### Edge Cases

- **Spool disk full**: ENOSPC -> reject submission, notify user.
- **Daemon crash**: Pending jobs remain on disk; restart daemon picks them up.
- **Printer jam**: Job stays marked printing; timeout, requeue, or notify admin.
- **Privilege escalation**: Spool files readable by other users; set restrictive permissions.
- **Giant spool file**: Print 1000 pages; daemon should stream, not load entirely into memory.

---

### 14. Error Handling

I/O errors occur at many levels. The kernel I/O subsystem layers error handling.

#### Error Classification

| Layer | Examples | Handling Strategy |
|-------|----------|-----------------|
| Hardware | Bad sector, cable disconnect | Retry, then report |
| Device | Command timeout, protocol error | Reset device, retry command |
| Driver | DMA failure, register stuck | Reinitialize, recover |
| Kernel | OOM, buffer allocation fail | Return ENOMEM, try smaller transfer |
| File system | Corrupted inode, full disk | Return EIO, ENOSPC |

#### POSIX Error Codes

```c
#define EIO       5   // I/O hardware error
#define EAGAIN   11   // Try again (non-blocking)
#define ENOSPC   28   // No space left on device
#define EINTR     4   // Interrupted by signal
#define EBADF     9   // Bad file descriptor
#define EFAULT   14   // Bad memory address
#define ENXIO     6   // Device not configured
```

#### C++: I/O with Error Handling

```cpp
#include <iostream>
#include <system_error>

enum class IOError { NONE, HARDWARE_FAILURE, TIMEOUT, DEVICE_NOT_FOUND, RETRY_EXHAUSTED };

class Device {
public:
    IOError read_sector(int lba, char* buf) {
        int retries = 3;
        while (retries--) {
            int status = hw_read(lba, buf);
            if (status == 0) return IOError::NONE;
            if (status == -ETIMEDOUT) { reset_device(); continue; }
            if (status == -ENXIO) return IOError::DEVICE_NOT_FOUND;
        }
        return IOError::RETRY_EXHAUSTED;
    }
private:
    int hw_read(int lba, char* buf) {
        static int call = 0;
        return (++call <= 2) ? -ETIMEDOUT : 0;
    }
    void reset_device() { std::cout << "[DEV] Reset device\n"; }
};

int main() {
    Device disk;
    char buf[512];
    IOError err = disk.read_sector(100, buf);
    switch (err) {
        case IOError::NONE: std::cout << "Read OK\n"; break;
        case IOError::RETRY_EXHAUSTED: std::cout << "Failed after retries\n"; break;
        default: std::cout << "Unrecoverable error\n"; break;
    }
    return 0;
}
```
### 15. Interview Corner

#### Q1: DMA vs PIO - When would you choose one over the other?

**Answer**: PIO (Programmed I/O) is simpler with lower per-transfer overhead for small transfers. DMA has higher setup overhead (programming DMA registers) but zero per-byte CPU cost. Choose PIO for transfers under ~256 bytes (register operations). Choose DMA for bulk transfers (disk, network, video). DMA also enables true parallelism - CPU computes while data moves.

#### Q2: How do you design an interrupt handler for a high-frequency device (e.g., 10GbE NIC)?

**Answer**: Use a **bottom-half** model:
1. **Top-half** (interrupt context): Minimal - save packet descriptor, acknowledge IRQ, schedule NAPI/softirq.
2. **Bottom-half** (softirq context): Process packets, DMA new buffers, handle protocols.
3. **Interrupt coalescing**: Hardware waits for N packets or T timer before raising IRQ - reduces IRQ rate 10-100x.
4. **NAPI (New API)**: Switch to polling mode under high load - disables interrupts, polls device directly.

```c
// Top-half: minimal, runs in interrupt context
static irqreturn_t nic_irq_handler(int irq, void *dev_id) {
    struct nic_device *nic = dev_id;
    napi_schedule(&nic->napi); // schedule bottom-half
    return IRQ_HANDLED;
}

// Bottom-half: runs in softirq context
static int nic_poll(struct napi_struct *napi, int budget) {
    struct nic_device *nic = container_of(napi, struct nic_device, napi);
    int work_done = 0;
    while (work_done < budget) {
        struct packet *pkt = nic_read_packet(nic);
        if (!pkt) break;
        netif_receive_skb(pkt->skb);
        work_done++;
    }
    if (work_done < budget)
        napi_complete(napi); // re-enable interrupts
    return work_done;
}
```

#### Q3: What is mmap vs read for file I/O? When to use each?

**Answer**:

| Aspect | read() | mmap() |
|--------|--------|--------|
| Mechanism | syscall -> copy to user buffer | Map file pages into process address space |
| Copies | Data copied twice (disk->kernel->user) | Data copied once (disk->page cache) |
| Page fault | No | Yes, on first access |
| Syscall overhead | Per read() call | Only during mmap() setup |
| Best for | Sequential access, small reads | Random access, large files |
| Shared memory | No | Yes (MAP_SHARED) |
| Truncation safety | Safe | SIGBUS if file truncated |

```c
// read() - traditional
char buf[4096];
read(fd, buf, 4096);  // syscall + copy

// mmap() - memory-mapped
char *map = mmap(NULL, 4096, PROT_READ, MAP_PRIVATE, fd, 0);
char c = map[0];  // page fault on first access, then direct access
```

#### Q4: What is zero-copy I/O and how does it work?

**Answer**: Zero-copy eliminates redundant data copying between kernel and user space.

```c
// Traditional: 4 copies
char buf[4096];
read(fd, buf, 4096);   // copy 1: disk->kernel, copy 2: kernel->user
write(sock, buf, 4096); // copy 3: user->kernel, copy 4: kernel->NIC

// Zero-copy with sendfile: 0 copies
sendfile(out_fd, in_fd, NULL, 4096);
// DMA disk->page cache, then DMA page cache->NIC
```

**Linux zero-copy methods**:

| Method | Copies | CPU |
|--------|--------|-----|
| read + write | 4 (DMA+CPU+CPU+DMA) | High |
| mmap + write | 2 (DMA+DMA) | Medium |
| sendfile | 2 (DMA+DMA) | Low |
| splice | 2 (DMA+DMA) | Low |

#### Q5: What happens when you press a key on the keyboard - full path?

**Answer**:
1. Key press closes circuit on keyboard matrix.
2. Keyboard controller scans matrix, generates scancode.
3. Controller asserts IRQ1 on PIC/APIC.
4. CPU saves state, vectors to keyboard ISR (entry 33 in IVT).
5. ISR reads port 0x60 (data register) -> scancode.
6. ISR translates scancode to ASCII (via keymap).
7. ISR stores character in tty input buffer.
8. ISR sends EOI to PIC, returns (IRET).
9. TTY line discipline processes character (echo, buffer, signal check).
10. When read() is waiting, wake up process.
11. read() copies character from kernel buffer to user buffer.

#### Q6: What is the difference between blocking, non-blocking, and asynchronous I/O?

**Answer**:
- **Blocking**: Process sleeps until I/O completes. Simple but ties up a thread.
- **Non-blocking**: Returns immediately (EAGAIN). Caller must retry in a loop or use event notification.
- **I/O multiplexing** (select/poll/epoll): Single thread waits on multiple file descriptors.
- **Asynchronous** (aio_read, io_uring): Initiates I/O, gets completion event later. True parallelism with single thread.

#### Q7: What is io_uring and why is it important?

**Answer**: io_uring (Linux 5.1+) is a modern async I/O interface using shared submission and completion queues (SQ/CQ) in mmap'd memory. Key advantages:
- Zero syscalls for most operations (kernel reads SQ directly)
- Supports all I/O types (read, write, open, accept, sendmsg, recvmsg)
- Batching: submit many requests, reap many completions in one syscall
- Polling mode: kernel busy-polls for completions (userspace polling)

```c
// io_uring submission-completion cycle
struct io_uring ring;
io_uring_queue_init(256, &ring, 0);

// Prepare SQE (submission queue entry)
struct io_uring_sqe *sqe = io_uring_get_sqe(&ring);
io_uring_prep_read(sqe, fd, buf, 4096, 0);

// Submit (one syscall: io_uring_enter)
io_uring_submit(&ring);

// Reap completion (may block, or use peek)
struct io_uring_cqe *cqe;
io_uring_wait_cqe(&ring, &cqe);
// cqe->res has result
io_uring_cqe_seen(&ring, cqe);
```

#### Q8: What is the difference between buffered and direct I/O?

**Answer**:

| Aspect | Buffered I/O | Direct I/O |
|--------|-------------|-----------|
| Caching | Uses page cache | Bypasses page cache |
| Write semantics | Write-back (delayed) | Write-through (immediate) |
| Alignment | No alignment needed | Must be block-aligned |
| Performance | Best for repeated reads | Best for large sequential |
| Consistency | May lose data on crash | Data safe (O_SYNC/O_DIRECT) |

#### Q9: How do you debug I/O performance issues?

**Answer**:
1. `iostat -x 1` - per-device utilization, await, svctm, queue size.
2. `iotop` - per-process I/O usage.
3. `blktrace` / `blkparse` - full I/O trace with timestamps.
4. `perf top` - kernel hotspots (driver, scheduler, VFS).
5. `strace -e trace=read,write` - syscall tracing.
6. `sar -d` - historical I/O statistics.

#### Q10: Explain the Linux Storage Stack from application to disk.

**Answer**:
1. Application: `write(fd, buf, 4096)`.
2. glibc: syscall wrapper -> `sys_write` (CPU enters kernel mode).
3. VFS: `vfs_write()` -> file's `write` operation.
4. Filesystem (ext4): allocate blocks, update inode, create journal entry.
5. Page cache: data is copied to a dirty page.
6. Block layer: `submit_bio()` -> I/O scheduler (deadline/kyber/BFQ).
7. Device mapper (optional): LVM/dm-crypt/RAID translation.
8. Block driver: NVMe driver formats command, writes to SQ doorbell.
9. DMA: NVMe controller reads command via PCIe, DMAs data from memory.
10. Interrupt: completion interrupt fires, driver completes BIO, page marked clean.
### 16. Applications in Real Systems

#### Linux I/O Stack - Full Diagram

```
+----------------------------------------------+
| System Calls (read, write, open, ioctl)       |
+----------------------------------------------+
| VFS (Virtual File System)                     |
| ext4  btrfs  XFS  NFS  tmpfs  overlayfs      |
+----------------------------------------------+
| Page Cache (mmap, buffered I/O)               |
+----------------------------------------------+
| Block Layer                                   |
| I/O Schedulers (deadline, kyber, BFQ)          |
| Block MQ (multi-queue)                        |
| Device Mapper (LVM, dm-crypt, RAID)           |
+----------------------------------------------+
| Device Drivers                                |
| NVMe  AHCI (SATA)  virtio_blk  USB storage    |
+----------------------------------------------+
| DMA Engine -> IOMMU -> Device                  |
+----------------------------------------------+
```

#### VFS (Virtual File System)

VFS provides a uniform file interface regardless of underlying filesystem.

```cpp
// VFS key structures (simplified)
struct file {
    struct file_operations *f_op;
    struct dentry *f_dentry;
    loff_t f_pos;
    unsigned int f_flags;
};

struct file_operations {
    ssize_t (*read)(struct file *, char __user *, size_t, loff_t *);
    ssize_t (*write)(struct file *, const char __user *, size_t, loff_t *);
    int (*open)(struct inode *, struct file *);
    int (*release)(struct inode *, struct file *);
    int (*mmap)(struct file *, struct vm_area_struct *);
};

struct inode {
    struct inode_operations *i_op;
    struct address_space *i_mapping; // page cache
    dev_t i_rdev; // device number
};
```

#### Device Mapper

Linux Device Mapper maps virtual block devices to physical devices.

```
+------------------------------+
| /dev/mapper/root             |  LVM logical volume
+------------------------------+
| Device Mapper                |  linear/RAID/crypt/snapshot
+------------------------------+
| /dev/sda2  /dev/sdb1         |  physical partitions
+------------------------------+
```

Common Device Mapper targets:

| Target | Purpose | Example |
|--------|---------|---------|
| linear | Concatenate devices | LVM linear LV |
| striped | RAID 0 | LVM striped LV |
| mirror | RAID 1 | LVM mirrored LV |
| crypt | dm-crypt encryption | LUKS encrypted volume |
| snapshot | Copy-on-write snapshots | LVM snapshots |
| cache | SSD caching of HDD | bcache, lvmcache |
| raid | RAID 4/5/6/10 | MD RAID via dm-raid |

#### Linux I/O Schedulers

| Scheduler | Type | Algorithm | Use Case |
|-----------|------|-----------|----------|
| Deadline | Multi-queue | Per-request deadline + FIFO + sorted | General purpose |
| Kyber | Multi-queue | Token-bucket latency control | NVMe, fast SSDs |
| BFQ | Multi-queue | Weighted fair queuing | Interactive desktop |
| mq-deadline | Multi-queue | Deadline for blk-mq | Default on modern kernels |
| none | Multi-queue | No reordering | NVMe with FTL |

#### Real-World Performance Numbers

| Device | Interface | Sequential | Random IOPS | I/O Method |
|--------|-----------|-----------|-------------|-----------|
| HDD (15K RPM) | SATA 3 | 200 MB/s | ~200 IOPS | DMA + IRQ |
| SATA SSD | SATA 3 | 550 MB/s | ~90K IOPS | DMA + IRQ |
| NVMe SSD | PCIe 4.0 x4 | 7000 MB/s | ~1M IOPS | DMA + MSI-X + poll |
| 10GbE NIC | PCIe 3.0 x8 | 10 Gb/s | ~14.8M pps | DMA + NAPI + RSS |
| Optane Persistent | DDR4 bus | 6 GB/s | ~2.5M IOPS | DMA + mmap |

#### NUMA I/O Affinity

On multi-socket systems, I/O interrupts should be handled on the same NUMA node as the application to avoid cross-node memory access.

```
Socket 0               Socket 1
+-------------------+  +-------------------+
| CPU cores 0-7     |  | CPU cores 8-15    |
| LLC (L3)          |  | LLC (L3)          |
+-------------------+  +-------------------+
| Memory             |  | Memory            |
| controller         |  | controller        |
+-------------------+  +-------------------+
| NVMe0 IRQ pinned  |  | NVMe1 IRQ pinned |
| to core 2         |  | to core 10        |
+-------------------+  +-------------------+
```

#### Linux Tuning for High-Performance I/O

```bash
# Set I/O scheduler for NVMe (none = no reordering)
echo none > /sys/block/nvme0n1/queue/scheduler

# Increase request queue depth
echo 1024 > /sys/block/nvme0n1/queue/nr_requests

# Set read-ahead (KB)
blockdev --setra 4096 /dev/nvme0n1

# Disable merging (NVMe doesn't need it)
echo 0 > /sys/block/nvme0n1/queue/nomerges

# Set CPU governor to performance
cpupower frequency-set -g performance

# Set IRQ affinity for NVMe to dedicated cores
echo 2 > /proc/irq/124/smp_affinity  # core 1
```

#### STREAMS (System V)

STREAMS provide a framework for building character I/O as a pipeline of processing modules.

```
Application
    V
Stream Head  - Interface to user space
    V
Module 1     - Line discipline (e.g., terminal processing)
    V
Module 2     - Protocol processing
    V
Driver        - Device hardware interface
```

Used in System V Unix for networking and terminal I/O. Linux does not use STREAMS (uses different architecture with TTY layer and network stack).

#### I/O in Virtualized Environments

| Virtualization | I/O Method | Overhead |
|---------------|-----------|----------|
| Full emulation | QEMU emulates device in software | Very high |
| Paravirtualization | virtio: guest driver + host backend | Low |
| SR-IOV | Hardware: device appears directly to guest | Near-native |
| VFIO passthrough | Whole PCI device to single guest | Native |

```bash
# virtio: paravirtualized I/O in Linux guests
# Guest sees /dev/vda (virtio-blk) or /dev/vda (virtio-scsi)
# Host provides backend (QEMU, vhost, vhost-user)

# NVMe MDev: mediated device, shares single NVMe
# Each guest gets isolated queue pair
```
### 17. I/O Models

| Model | Description | Pros | Cons |
|-------|-------------|------|------|
| **Blocking I/O** | Process sleeps until I/O completes | Simple | Process is blocked |
| **Non-blocking I/O** | read() returns immediately with EAGAIN | CPU can do other work | Must poll or use event-driven |
| **I/O multiplexing** | select()/poll()/epoll() - wait on multiple fds | Single thread manages many I/Os | System call overhead |
| **Signal-driven I/O** | SIGIO when device is ready | Asynchronous notification | Signal handling complexity |
| **Asynchronous I/O** | aio_read()/io_uring - callback on completion | True parallelism | Complex API |

#### Blocking I/O Pseudocode

```
PROCEDURE blocking_read(fd, buffer, count):
    result = SYSCALL_read(fd, buffer, count)
    // Process moved to WAITING state
    // Scheduler runs another process
    // When I/O completes, process moves to READY
    RETURN result
END PROCEDURE
```

#### Non-Blocking I/O Example

```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <errno.h>

int main() {
    int fd = open("/dev/tty", O_RDONLY | O_NONBLOCK);
    if (fd < 0) { perror("open"); return 1; }

    char buffer[256];
    ssize_t n;

    while (1) {
        n = read(fd, buffer, sizeof(buffer) - 1);
        if (n > 0) {
            buffer[n] = '\0';
            printf("Got: %s", buffer); break;
        } else if (n == 0) { printf("EOF\n"); break; }
        else if (errno == EAGAIN) {
            printf("No input yet - doing other work...\n");
            sleep(1);
        } else { perror("read"); break; }
    }
    close(fd);
    return 0;
}
```

#### I/O Multiplexing with epoll

```c
#include <stdio.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <unistd.h>

#define MAX_EVENTS 10

int main() {
    int epoll_fd = epoll_create1(0);
    if (epoll_fd < 0) { perror("epoll_create"); return 1; }

    struct epoll_event event;
    event.events = EPOLLIN;
    event.data.fd = STDIN_FILENO;
    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, STDIN_FILENO, &event);

    struct epoll_event events[MAX_EVENTS];
    printf("Waiting for input (5 second timeout)...\n");

    int nfds = epoll_wait(epoll_fd, events, MAX_EVENTS, 5000);
    if (nfds < 0) { perror("epoll_wait"); return 1; }
    else if (nfds == 0) printf("Timeout - no input received\n");
    else printf("Input available on fd %d!\n", events[0].data.fd);

    close(epoll_fd);
    return 0;
}
```

### 18. Examples

#### Example 1: Character Device - Reading Keyboard Input

```c
#include <stdio.h>
#include <termios.h>
#include <unistd.h>

int main() {
    struct termios old, new;
    tcgetattr(STDIN_FILENO, &old);
    new = old;
    new.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &new);

    printf("Type characters (press 'q' to quit):\n");
    char c;
    while (read(STDIN_FILENO, &c, 1) == 1) {
        if (c == 'q') break;
        printf("You pressed: '%c' (0x%02x)\n", c, c);
    }
    tcsetattr(STDIN_FILENO, TCSANOW, &old);
    return 0;
}
```

#### Example 2: Measuring I/O Performance

```c
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/time.h>

double get_time() {
    struct timeval tv;
    gettimeofday(&tv, NULL);
    return tv.tv_sec + tv.tv_usec / 1000000.0;
}

int main() {
    int fd = open("test.dat", O_CREAT | O_WRONLY | O_TRUNC | O_SYNC, 0644);
    if (fd < 0) { perror("open"); return 1; }

    int block_size = 4096;
    int num_blocks = 256;
    char *buffer = malloc(block_size);

    double start = get_time();
    for (int i = 0; i < num_blocks; i++)
        write(fd, buffer, block_size);
    double elapsed = get_time() - start;
    double throughput = (num_blocks * block_size) / (1024.0 * 1024.0) / elapsed;

    printf("Wrote %d blocks of %d bytes (O_SYNC)\n", num_blocks, block_size);
    printf("Time: %.3f seconds\n", elapsed);
    printf("Throughput: %.2f MB/s\n", throughput);

    free(buffer);
    close(fd);
    unlink("test.dat");
    return 0;
}
```

---

> [TIP]
> **DMA** is essential for high-throughput I/O. Without it, the CPU must copy every byte from device to memory.
>
> Use **io_uring** (Linux 5.1+) for modern high-performance async I/O - it eliminates most syscall overhead by using shared submission/completion queues.

> [WARNING]
> Interrupt-driven I/O is fine for character devices but too much overhead for block devices. For bulk transfers, DMA is essential. Each interrupt requires a full context switch.
>
> Always handle **spurious interrupts** - a device may assert IRQ without actually requiring service. Check the status register before assuming data is available.

> [NOTE]
> The **device driver** layer provides a uniform interface so the same system calls (read(), write(), ioctl()) work across different hardware.
>
> Linux unifies the buffer cache and page cache into a single **page cache** since kernel 2.4. This avoids double-caching and simplifies memory management.

### 19. Concept Comparisons

#### I/O Methods

| Feature | Programmed I/O | Interrupt-Driven | DMA |
|---------|--------------|----------------|-----|
| CPU Role | Polls device until ready | Starts I/O, gets interrupt | Initiates, DMA does rest |
| Data Path | CPU each byte | CPU each byte | Device &lt;-> Memory directly |
| Per-byte Overhead | Very high (busy-waits) | Moderate (ISR per byte) | Zero during transfer |
| Per-transfer Overhead | O(N) | O(N) | O(1) (setup + one IRQ) |
| Parallelism | None | Process runs between IRQs | CPU + DMA concurrent |
| Best For | Simple/slow devices | Character devices | Block devices |
| Energy | Very poor | Good | Excellent |

#### Buffering Strategies

| Feature | Single Buffer | Double Buffer | Circular Buffer |
|---------|-------------|--------------|-----------------|
| Size | 1 unit | 2 units | N units (fixed) |
| Concurrency | None | Producer/consumer parallel | Decoupled |
| Implementation | Simplest | Moderate | Moderate |
| Wasted space | None | 2x memory | 1 slot |
| Overflow | Wait | Swap (no wait) | Overwrite or block |
| Use case | Simple sync | Audio/video streaming | Network ring, DMA |

#### Block vs Character

| Criterion | Character | Block |
|-----------|-----------|-------|
| Access | Sequential stream | Random (block address) |
| Min transfer | 1 byte | 1 block (512B-4KB) |
| Caching | No | Yes (page cache) |
| DMA | Rare | Always |
| Device files | /dev/tty0, /dev/random | /dev/sda, /dev/nvme0n1 |

### Quick Reference

| Term | Definition |
|------|------------|
| **DMA** | Direct Memory Access - hardware for device-to-memory transfers |
| **Device Driver** | Kernel module providing standard interface to specific hardware |
| **Buffering** | Temporary storage for speed mismatches between devices |
| **Spooling** | Managing shared exclusive-access devices (e.g., printer queue) |
| **Memory-Mapped I/O** | Device registers mapped into CPU address space |
| **Interrupt** | Hardware signal causing CPU to save state and run handler |
| **PIO** | Programmed I/O - CPU handles every byte transfer |
| **ISR** | Interrupt Service Routine - kernel code that handles an interrupt |
| **IOMMU** | I/O Memory Management Unit - translates device DMA addresses |
| **VFS** | Virtual File System - uniform file interface across filesystems |
| **MMIO** | Memory-Mapped I/O - device accessible via load/store |
| **Polling** | CPU repeatedly checks device status register |
| **IRQ** | Interrupt ReQuest - hardware line device uses to signal CPU |
| **Bottom Half** | Deferred interrupt processing (softirq, tasklet, workqueue) |
| **Zero-Copy** | Data transfer without intermediate CPU copies |
| **io_uring** | Linux async I/O with shared submission/completion queues |

### Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|---------|-----------|----------|-----------------|-----------|
| I/O Method | DMA (NVMe, AHCI) | DMA (ring buffers) | DMA (framebuffer) | DMA (UHCI/EHCI) |
| Driver Model | Block driver | Network driver | DRM/KMS driver | USB core + class |
| Buffering | Disk cache | Socket buffer | Back buffer | OHCI/EHCI frame lists |
| I/O Model | epoll/io_uring | async I/O | Polling + interrupts | Interrupt-driven |
| Caching | Page cache | Buffer pool | None | Page cache (zRAM) |

### Chapter Quiz

1. Which I/O method needs least CPU for large transfers?
   a) Programmed I/O  b) Interrupt-driven I/O  c) DMA  d) Memory-mapped I/O

2. Main purpose of a device driver?
   a) Uniform kernel interface  b) Speed up hardware  c) Manage memory  d) Schedule processes

3. Buffering is used to:
   a) Increase disk space  b) Handle speed mismatches  c) Reduce power  d) Encrypt data

4. Which buffer type is best for audio streaming?
   a) Single buffer  b) Double buffer  c) Circular buffer  d) No buffer

5. What does VFS stand for?
   a) Virtual File System  b) Very Fast Storage  c) Variable Frequency System  d) Virtual Function Stack

6. In Linux, what unifies the buffer cache and page cache?
   a) dentry cache  b) inode cache  c) page cache  d) slab allocator

7. Which I/O model uses epoll()?
   a) Blocking I/O  b) Non-blocking I/O  c) I/O multiplexing  d) Asynchronous I/O

8. What is the primary disadvantage of polling?
   a) Complex implementation  b) Wastes CPU cycles  c) Requires special hardware  d) Cannot be interrupted

9. What type of device is /dev/tty0?
   a) Block device  b) Character device  c) Network device  d) Pseudo-device

10. Which feature prevents DMA from accessing unauthorized memory?
   a) Page cache  b) IOMMU  c) VFS  d) Device mapper

### Summary

- I/O devices communicate via ports, memory-mapped registers, or a hybrid approach
- Polling wastes CPU; interrupts allow overlap of I/O and computation
- DMA transfers data directly between device and memory without CPU involvement
- The kernel I/O subsystem provides scheduling, buffering, caching, spooling, and error handling
- Device drivers act as translators between the kernel and hardware
- Five I/O models: blocking, non-blocking, multiplexing, signal-driven, asynchronous
- epoll (Linux) enables efficient I/O multiplexing for thousands of connections
- The page cache unifies file caching with virtual memory management
- Buffering strategies: single, double, circular - each with different concurrency trade-offs
- Spooling serializes access to shared exclusive devices (printers, tape drives)
- Linux I/O stack: VFS -> page cache -> block layer -> device drivers -> DMA -> device
- Interview topics: DMA vs PIO, interrupt handler design, mmap vs read, zero-copy, io_uring

### Exercises

#### Basic

1. What is DMA and why is it important for block I/O? Walk through a DMA transfer.
2. What is the difference between buffering and caching? Give an example of each.
3. Explain the difference between blocking and non-blocking I/O. When would you use each?
4. What is the difference between a character device and a block device? Give three examples of each.
5. How does spooling differ from buffering? Why do printers need spooling?

#### Intermediate

6. Write a program that measures the overhead of system calls. Call getpid() in a loop 1M times.
7. Implement a simple I/O scheduler using FCFS and deadline-aware approach.
8. Explain spooling. Implement a simple print spooler using a directory for spool files.
9. Implement a circular buffer with one producer and one consumer without locks.
10. Compare single vs double buffering for a simulated audio player.

#### Advanced

11. Benchmark read()/write() vs mmap(). Create 512 MB file, sum integers, compare.
12. Implement an epoll-based TCP echo server handling 1000+ connections.
13. Write a Linux kernel module creating a character device with circular buffer.
14. Implement zero-copy file transfer using splice() or sendfile().
15. Create a DMA controller simulator in C++ with scatter-gather descriptor lists.

---

*End of Chapter 13 - I/O Systems*
