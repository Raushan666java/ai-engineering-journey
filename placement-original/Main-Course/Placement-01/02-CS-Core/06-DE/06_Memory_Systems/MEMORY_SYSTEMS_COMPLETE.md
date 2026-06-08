# Module 6: Memory Systems and Storage Complete Guide
## 💾 Digital Information Storage and Retrieval

### 🎯 Module Overview
- **Duration**: 2 weeks (30 hours)
- **Difficulty**: Intermediate to Advanced
- **Prerequisites**: Sequential circuits, combinational logic
- **Applications**: Computer memory, data storage, embedded systems

## 📋 Learning Objectives
- Understand memory hierarchy and classification
- Analyze different types of RAM and ROM
- Design memory interface circuits
- Implement address decoding systems
- Understand cache memory concepts
- Apply memory systems in digital design

## 🏗️ Topic 1: Memory Classification and Hierarchy

### 1.1 Memory System Overview
```
Memory: Device that stores binary information
Capacity: Amount of information stored (bits, bytes, words)
Access Time: Time to read/write data
Cycle Time: Minimum time between successive operations

Memory Hierarchy (Speed vs Capacity vs Cost):

Level 1: CPU Registers
- Fastest access (< 1ns)
- Smallest capacity (32-64 bits × 16-32 registers)
- Highest cost per bit
- Directly accessible by CPU

Level 2: Cache Memory
- Very fast access (1-10ns)
- Small capacity (KB to MB)
- High cost per bit
- Transparent to programmer

Level 3: Main Memory (RAM)
- Fast access (10-100ns)
- Medium capacity (GB)
- Medium cost per bit
- Directly addressable

Level 4: Secondary Storage
- Slow access (ms)
- Large capacity (TB)
- Low cost per bit
- Block-oriented access

Memory Performance Metrics:
- Access Time: Time to complete read/write operation
- Cycle Time: Minimum time between operations
- Bandwidth: Data transfer rate (bytes/second)
- Latency: Delay before data transfer begins
- Throughput: Operations completed per unit time

Memory Organization:
Word: Basic unit of memory access
Address: Location identifier for each word
Data Bus: Carries information to/from memory
Address Bus: Specifies memory location
Control Bus: Coordinates memory operations
```

### 1.2 Memory Classification
```
Classification by Technology:
1. Semiconductor Memory
   - Volatile: Loses data when power off
   - Non-volatile: Retains data without power

2. Magnetic Memory
   - Hard disks, magnetic tape
   - Non-volatile, high capacity

3. Optical Memory
   - CD, DVD, Blu-ray
   - Non-volatile, removable

Classification by Access Method:
1. Random Access Memory (RAM)
   - Any location accessible in same time
   - Examples: SRAM, DRAM

2. Sequential Access Memory (SAM)
   - Access time depends on location
   - Examples: Magnetic tape

3. Direct Access Memory (DAM)
   - Combination of sequential and random
   - Examples: Hard disk drives

Classification by Volatility:
1. Volatile Memory
   - RAM (SRAM, DRAM)
   - Cache memory
   - Registers

2. Non-volatile Memory
   - ROM (PROM, EPROM, EEPROM)
   - Flash memory
   - Magnetic storage

Classification by Function:
1. Primary Memory
   - Main memory (RAM)
   - Cache memory
   - Directly accessible by CPU

2. Secondary Memory
   - Hard drives, SSDs
   - Optical storage
   - Requires I/O operations

Memory Addressing:
Linear Addressing: Sequential address assignment
Physical Address: Actual hardware location
Logical Address: Program-generated address
Virtual Address: OS-managed address space

Address Space: Range of possible addresses
n-bit address → 2^n addressable locations
16-bit address → 64K locations
32-bit address → 4G locations
```

## 🔄 Topic 2: Random Access Memory (RAM)

### 2.1 Static RAM (SRAM)
```
SRAM Characteristics:
- Uses flip-flops for storage
- Retains data as long as power applied
- Fast access time (1-10ns)
- No refresh required
- Higher cost per bit
- Lower density than DRAM

Basic SRAM Cell:
6-Transistor (6T) Cell Design

    VDD
     |
   ┌─┴─┐  ┌─┴─┐
WL─┤ T1 ├──┤ T2 ├─WL
   └─┬─┘  └─┬─┘
     │      │
   ┌─┴─┐  ┌─┴─┐
   │ T3 │  │ T4 │ (Cross-coupled inverters)
   └─┬─┘  └─┬─┘
     │      │
    BL     BL'
     │      │
   ┌─┴─┐  ┌─┴─┐
   │ T5 │  │ T6 │ (Access transistors)
   └─┬─┘  └─┬─┘
     │      │
    VSS    VSS

Operation:
- T3-T4: Cross-coupled inverters (storage)
- T1-T2: Access transistors (read/write)
- WL: Word Line (row select)
- BL/BL': Bit Lines (column data)

Read Operation:
1. Precharge BL and BL' to VDD/2
2. Activate word line (WL = 1)
3. Storage cell drives bit lines
4. Sense amplifier detects difference
5. Output data to data bus

Write Operation:
1. Drive BL and BL' with data
2. Activate word line (WL = 1)
3. Bit lines overpower storage cell
4. New data stored in cell
5. Deactivate word line

SRAM Array Organization:
m × n array: m words of n bits each
Address decoder selects word line
Column decoder selects bit lines
Sense amplifiers detect stored data

Timing Parameters:
- Access Time (tAA): Address to valid data
- Cycle Time (tCYC): Minimum between operations
- Setup Time (tSU): Data setup before write
- Hold Time (tH): Data hold after write

Applications:
- CPU cache memory
- High-speed buffers
- Register files
- Small embedded memories
```

### 2.2 Dynamic RAM (DRAM)
```
DRAM Characteristics:
- Uses capacitor for storage
- Requires periodic refresh
- Slower than SRAM (50-100ns)
- Higher density than SRAM
- Lower cost per bit
- More complex control

Basic DRAM Cell:
1-Transistor (1T) + 1-Capacitor (1C) Cell

    BL
     |
   ┌─┴─┐
WL─┤ T1 ├
   └─┬─┘
     |
   ┌─┴─┐ CS (Storage Capacitor)
   │   │
   └─┬─┘
     |
    VSS

Storage Mechanism:
- Capacitor charged: Logic 1
- Capacitor discharged: Logic 0
- Charge leaks over time → Refresh needed

Read Operation (Destructive):
1. Precharge bit line to VDD/2
2. Activate word line
3. Capacitor shares charge with bit line
4. Sense amplifier detects small voltage change
5. Amplify and restore data to cell

Write Operation:
1. Drive bit line with data
2. Activate word line
3. Capacitor charges/discharges through transistor
4. Deactivate word line

Refresh Operation:
- Required every 2-64ms
- Read and rewrite each row
- Performed by memory controller
- Reduces available bandwidth

DRAM Types:

1. Conventional DRAM:
   - Asynchronous operation
   - RAS/CAS control signals
   - Page mode for faster access

2. Synchronous DRAM (SDRAM):
   - Synchronous with system clock
   - Pipelined operations
   - Burst mode transfers

3. Double Data Rate (DDR):
   - Data on both clock edges
   - Higher bandwidth than SDRAM
   - Multiple generations (DDR, DDR2, DDR3, DDR4, DDR5)

4. Rambus DRAM (RDRAM):
   - High-speed serial interface
   - Narrow bus with high frequency
   - Used in gaming consoles

DRAM Organization:
- 2D array of cells
- Row Address Strobe (RAS)
- Column Address Strobe (CAS)
- Multiplexed addressing
- Sense amplifiers per column

Timing Parameters:
- RAS Access Time (tRAC)
- CAS Access Time (tCAC)
- RAS Precharge Time (tRP)
- RAS to CAS Delay (tRCD)
- Refresh Period (tREF)

Applications:
- Main system memory
- Graphics memory
- Large data buffers
- Virtual memory systems
```

### 2.3 Memory Interface Design
```
Memory Interface Components:
1. Address Bus: Selects memory location
2. Data Bus: Transfers information
3. Control Signals: Coordinates operations
4. Chip Select: Enables memory device
5. Output Enable: Controls data output
6. Write Enable: Controls data input

Basic Memory Interface:
CPU ←→ Memory Controller ←→ Memory Array

Address Decoding:
Purpose: Select specific memory device
Methods: Full decoding, Partial decoding

Full Address Decoding:
- Every address bit decoded
- No address aliasing
- Maximum memory utilization
- More complex hardware

Example: 64K memory space, 16K RAM chips
Address Range: 0000H - FFFFH (16 bits)
RAM1: 0000H - 3FFFH (A15=0, A14=0)
RAM2: 4000H - 7FFFH (A15=0, A14=1)
RAM3: 8000H - BFFFH (A15=1, A14=0)
RAM4: C000H - FFFFH (A15=1, A14=1)

Decoder Logic:
CS1 = A15' · A14'
CS2 = A15' · A14
CS3 = A15 · A14'
CS4 = A15 · A14

Partial Address Decoding:
- Not all address bits used
- Address aliasing occurs
- Simpler hardware
- Wastes address space

Memory Timing:
Read Cycle:
1. Address setup
2. Chip select assertion
3. Output enable assertion
4. Data valid
5. Data hold time

Write Cycle:
1. Address setup
2. Chip select assertion
3. Data setup
4. Write enable assertion
5. Data hold time
6. Write enable deassertion

Wait States:
- CPU faster than memory
- Insert wait cycles
- Reduces system performance
- Necessary for slow memories

Memory Controller Functions:
- Address decoding
- Timing generation
- Refresh control (DRAM)
- Error detection/correction
- Bus arbitration
```

## 📚 Topic 3: Read-Only Memory (ROM)

### 3.1 ROM Types and Characteristics
```
ROM Characteristics:
- Non-volatile storage
- Data programmed during manufacturing
- Fast read access
- Cannot be modified in normal operation
- Used for firmware, lookup tables

ROM Types:

1. Mask ROM:
   - Programmed during manufacturing
   - Cannot be changed
   - Lowest cost for high volume
   - Long development time

2. Programmable ROM (PROM):
   - User programmable (once)
   - Uses fusible links
   - Cannot be erased
   - Also called OTP (One-Time Programmable)

3. Erasable PROM (EPROM):
   - UV light erasable
   - Electrically programmable
   - Reusable (erase and reprogram)
   - Requires UV eraser

4. Electrically Erasable PROM (EEPROM):
   - Electrically erasable and programmable
   - Byte-level erase capability
   - In-system programmable
   - Limited erase cycles (10K-100K)

5. Flash Memory:
   - Electrically erasable and programmable
   - Block-level erase
   - High density
   - NAND and NOR types

ROM Cell Technologies:

Mask ROM Cell:
- Transistor presence/absence
- Metal mask defines connections
- Permanent programming

EPROM Cell:
- Floating gate transistor
- UV light removes charge
- Charge retention: 10-20 years

EEPROM Cell:
- Floating gate with tunnel oxide
- Electrical erase/program
- Byte-addressable

Flash Memory Cell:
- Similar to EEPROM
- Block erase only
- Higher density
- Wear leveling required

ROM Applications:
- System BIOS/UEFI
- Microcontroller firmware
- Character generators
- Lookup tables
- Boot loaders
- Configuration data
```

### 3.2 Flash Memory
```
Flash Memory Types:

1. NOR Flash:
   - Random access capability
   - Fast read access
   - Slow write/erase
   - Execute-in-place (XIP)
   - Used for code storage

2. NAND Flash:
   - Serial access
   - Fast write/erase
   - Higher density
   - Requires error correction
   - Used for data storage

NOR Flash Architecture:
- Parallel connection of cells
- Individual bit access
- Address/data bus interface
- Similar to SRAM interface

NAND Flash Architecture:
- Series connection of cells
- Page-based access
- Serial interface
- Block-oriented operations

Flash Memory Operations:

Program Operation:
1. Page buffer loading
2. Program command
3. Address specification
4. Data transfer
5. Program execution
6. Status verification

Erase Operation:
1. Block selection
2. Erase command
3. Erase execution
4. Status verification

Read Operation:
1. Address specification
2. Read command
3. Data transfer
4. Error checking

Flash Memory Management:
- Wear leveling
- Bad block management
- Error correction codes (ECC)
- Garbage collection
- Over-provisioning

Flash File Systems:
- JFFS2 (Journaling Flash File System)
- YAFFS (Yet Another Flash File System)
- UBIFS (Unsorted Block Image File System)
- FTL (Flash Translation Layer)

Applications:
- USB drives
- SD cards
- SSD storage
- Embedded systems
- Mobile devices
```

### 3.3 Memory Testing and Reliability
```
Memory Testing Methods:

1. Checkerboard Test:
   - Alternating 0s and 1s pattern
   - Tests adjacent cell interference
   - Pattern: 01010101, 10101010

2. Walking Ones/Zeros:
   - Single bit moves through memory
   - Tests individual cell operation
   - Patterns: 00000001, 00000010, 00000100...

3. Address-in-Address Test:
   - Store address value at each location
   - Tests address decoding
   - Detects addressing errors

4. March Test:
   - Systematic read/write sequence
   - Tests coupling between cells
   - Various march algorithms (March C-, March B)

5. Butterfly Test:
   - Tests data retention
   - Simultaneous access patterns
   - Stress testing

Built-In Self-Test (BIST):
- On-chip test circuitry
- Automatic test execution
- Reduced test time
- Better fault coverage

Memory Reliability Issues:

1. Soft Errors:
   - Temporary data corruption
   - Caused by radiation
   - Single Event Upset (SEU)
   - Correctable with ECC

2. Hard Errors:
   - Permanent failures
   - Manufacturing defects
   - Wear-out mechanisms
   - Require redundancy

3. Data Retention:
   - Charge leakage in DRAM
   - Floating gate discharge
   - Temperature dependent
   - Requires refresh/rewrite

Error Correction Codes (ECC):

Single Error Correction (SEC):
- Hamming codes
- Detects and corrects 1-bit errors
- Detects 2-bit errors
- 7 data bits + 4 check bits

Double Error Correction (DEC):
- BCH codes
- Reed-Solomon codes
- Corrects multiple errors
- Higher overhead

Memory Redundancy:
- Spare rows and columns
- Laser repair during manufacturing
- Improves yield
- Transparent to user

Reliability Metrics:
- Mean Time Between Failures (MTBF)
- Failure In Time (FIT)
- Soft Error Rate (SER)
- Data retention time
```

## 🏃 Topic 4: Cache Memory

### 4.1 Cache Memory Concepts
```
Cache Memory Purpose:
- Bridge speed gap between CPU and main memory
- Store frequently accessed data
- Exploit locality of reference
- Improve system performance

Locality Principles:

1. Temporal Locality:
   - Recently accessed items likely to be accessed again
   - Examples: Loop variables, frequently called functions

2. Spatial Locality:
   - Items near recently accessed items likely to be accessed
   - Examples: Array elements, sequential instructions

Cache Performance Metrics:

Hit Rate (h): Percentage of memory accesses found in cache
Miss Rate (m): Percentage of memory accesses not in cache
m = 1 - h

Average Access Time:
T_avg = h × T_cache + m × T_memory
T_avg = h × T_cache + (1-h) × T_memory

Example:
Cache access time: 1ns
Memory access time: 100ns
Hit rate: 90%
T_avg = 0.9 × 1 + 0.1 × 100 = 10.9ns

Speedup = T_memory / T_avg = 100 / 10.9 = 9.17

Cache Organization Parameters:

1. Cache Size (C):
   - Total amount of data storage
   - Larger cache → Higher hit rate
   - Diminishing returns

2. Block Size (B):
   - Unit of data transfer
   - Exploits spatial locality
   - Larger blocks → Fewer blocks

3. Associativity (A):
   - Number of blocks per set
   - Higher associativity → Lower miss rate
   - More complex hardware

Cache Hierarchy:
L1 Cache: Smallest, fastest, on-chip
L2 Cache: Larger, slower, on-chip or off-chip
L3 Cache: Largest, slowest, shared

Multi-level Cache Performance:
T_avg = T_L1 + Miss_Rate_L1 × (T_L2 + Miss_Rate_L2 × T_memory)
```

### 4.2 Cache Mapping Techniques
```
1. Direct Mapped Cache:
   - Each memory block maps to exactly one cache block
   - Simple hardware implementation
   - Higher miss rate due to conflicts

Address Format:
| Tag | Index | Block Offset |

Index: Selects cache block
Tag: Identifies which memory block
Block Offset: Byte within block

Cache Block = (Memory Address) mod (Number of Cache Blocks)

Example: 32-bit address, 1KB cache, 32-byte blocks
Blocks in cache: 1024/32 = 32 blocks
Index bits: log₂(32) = 5 bits
Block offset bits: log₂(32) = 5 bits
Tag bits: 32 - 5 - 5 = 22 bits

Advantages:
- Simple hardware
- Fast access
- Low cost

Disadvantages:
- High conflict misses
- Poor performance for certain access patterns

2. Fully Associative Cache:
   - Any memory block can be placed in any cache block
   - Lowest miss rate
   - Complex hardware (parallel tag comparison)

Address Format:
| Tag | Block Offset |

Tag comparison with all cache blocks
Requires associative memory
LRU replacement policy

Advantages:
- Lowest miss rate
- No conflict misses
- Flexible placement

Disadvantages:
- Complex hardware
- Slow tag comparison
- High cost

3. Set Associative Cache:
   - Compromise between direct mapped and fully associative
   - N-way set associative: N blocks per set
   - Common: 2-way, 4-way, 8-way

Address Format:
| Tag | Set Index | Block Offset |

Set Index: Selects cache set
Tag comparison within selected set
Replacement policy within set

Example: 2-way set associative
Each set contains 2 blocks
Block can be placed in either position within set

Advantages:
- Lower miss rate than direct mapped
- Simpler than fully associative
- Good compromise

Disadvantages:
- More complex than direct mapped
- Still some conflict misses
```

### 4.3 Cache Replacement Policies
```
Replacement Policies (for associative caches):

1. Least Recently Used (LRU):
   - Replace block that hasn't been used for longest time
   - Good performance
   - Complex implementation for high associativity

LRU Implementation:
- Counter method: Timestamp each access
- Stack method: Move accessed block to top
- Tree method: Binary tree for 4-way and above

2. First In First Out (FIFO):
   - Replace oldest block in cache
   - Simple implementation
   - Doesn't consider usage pattern

3. Random:
   - Replace randomly selected block
   - Very simple implementation
   - Surprisingly good performance

4. Least Frequently Used (LFU):
   - Replace block with lowest access count
   - Requires usage counters
   - May not adapt to changing patterns

Performance Comparison:
LRU > Random ≈ FIFO > LFU (typically)

Write Policies:

1. Write-Through:
   - Write to both cache and memory
   - Memory always consistent
   - Higher write traffic

2. Write-Back (Write-Behind):
   - Write only to cache initially
   - Write to memory when block replaced
   - Requires dirty bit
   - Lower write traffic

Write Miss Policies:

1. Write-Allocate:
   - Load block into cache on write miss
   - Then write to cache
   - Good for programs with spatial locality

2. No-Write-Allocate:
   - Write directly to memory on write miss
   - Don't load block into cache
   - Good for programs without spatial locality

Cache Coherence (Multi-processor):
- Multiple caches may have copies of same data
- Ensure consistency across all caches
- Protocols: MESI, MOESI, Dragon
```

## 💻 Programming Implementation

### Memory System Simulator
```python
class MemoryCell:
    def __init__(self):
        self.data = 0
        self.valid = False
    
    def write(self, data):
        self.data = data
        self.valid = True
    
    def read(self):
        if self.valid:
            return self.data
        else:
            return None  # Uninitialized

class SRAM:
    def __init__(self, size, word_size=8):
        self.size = size  # Number of words
        self.word_size = word_size  # Bits per word
        self.memory = [MemoryCell() for _ in range(size)]
        self.access_time = 10  # nanoseconds
        self.access_count = 0
    
    def read(self, address):
        """Read data from SRAM"""
        if 0 <= address < self.size:
            self.access_count += 1
            return self.memory[address].read()
        else:
            raise ValueError(f"Address {address} out of range")
    
    def write(self, address, data):
        """Write data to SRAM"""
        if 0 <= address < self.size:
            self.access_count += 1
            self.memory[address].write(data)
        else:
            raise ValueError(f"Address {address} out of range")
    
    def get_stats(self):
        return {
            'size': self.size,
            'word_size': self.word_size,
            'access_time': self.access_time,
            'total_accesses': self.access_count
        }

class DRAM:
    def __init__(self, size, word_size=8):
        self.size = size
        self.word_size = word_size
        self.memory = [MemoryCell() for _ in range(size)]
        self.access_time = 60  # nanoseconds
        self.refresh_period = 64000000  # 64ms in nanoseconds
        self.last_refresh = 0
        self.access_count = 0
        self.refresh_count = 0
    
    def needs_refresh(self, current_time):
        """Check if refresh is needed"""
        return (current_time - self.last_refresh) > self.refresh_period
    
    def refresh(self, current_time):
        """Perform refresh operation"""
        self.last_refresh = current_time
        self.refresh_count += 1
        # In real DRAM, this would refresh all rows
    
    def read(self, address, current_time=0):
        """Read data from DRAM"""
        if self.needs_refresh(current_time):
            self.refresh(current_time)
        
        if 0 <= address < self.size:
            self.access_count += 1
            return self.memory[address].read()
        else:
            raise ValueError(f"Address {address} out of range")
    
    def write(self, address, data, current_time=0):
        """Write data to DRAM"""
        if self.needs_refresh(current_time):
            self.refresh(current_time)
        
        if 0 <= address < self.size:
            self.access_count += 1
            self.memory[address].write(data)
        else:
            raise ValueError(f"Address {address} out of range")

class CacheBlock:
    def __init__(self, block_size):
        self.block_size = block_size
        self.data = [0] * block_size
        self.tag = None
        self.valid = False
        self.dirty = False
        self.access_time = 0  # For LRU
    
    def load_block(self, tag, data, current_time):
        """Load block from memory"""
        self.tag = tag
        self.data = data[:]
        self.valid = True
        self.dirty = False
        self.access_time = current_time
    
    def write_data(self, offset, data, current_time):
        """Write data to block"""
        if 0 <= offset < self.block_size:
            self.data[offset] = data
            self.dirty = True
            self.access_time = current_time
    
    def read_data(self, offset, current_time):
        """Read data from block"""
        if 0 <= offset < self.block_size:
            self.access_time = current_time
            return self.data[offset]
        return None

class Cache:
    def __init__(self, cache_size, block_size, associativity, main_memory):
        self.cache_size = cache_size
        self.block_size = block_size
        self.associativity = associativity
        self.num_sets = cache_size // (block_size * associativity)
        self.main_memory = main_memory
        
        # Initialize cache blocks
        self.cache = []
        for _ in range(self.num_sets):
            cache_set = [CacheBlock(block_size) for _ in range(associativity)]
            self.cache.append(cache_set)
        
        # Statistics
        self.hits = 0
        self.misses = 0
        self.current_time = 0
    
    def get_cache_info(self, address):
        """Extract cache information from address"""
        block_offset = address % self.block_size
        block_address = address // self.block_size
        set_index = block_address % self.num_sets
        tag = block_address // self.num_sets
        
        return tag, set_index, block_offset
    
    def find_block(self, tag, set_index):
        """Find block in cache set"""
        cache_set = self.cache[set_index]
        for i, block in enumerate(cache_set):
            if block.valid and block.tag == tag:
                return i, block
        return None, None
    
    def find_lru_block(self, set_index):
        """Find least recently used block in set"""
        cache_set = self.cache[set_index]
        lru_index = 0
        lru_time = cache_set[0].access_time
        
        for i, block in enumerate(cache_set):
            if not block.valid:
                return i, block  # Use invalid block first
            if block.access_time < lru_time:
                lru_time = block.access_time
                lru_index = i
        
        return lru_index, cache_set[lru_index]
    
    def read(self, address):
        """Read data from cache"""
        self.current_time += 1
        tag, set_index, block_offset = self.get_cache_info(address)
        
        # Check for hit
        block_index, block = self.find_block(tag, set_index)
        if block is not None:
            # Cache hit
            self.hits += 1
            return block.read_data(block_offset, self.current_time)
        
        # Cache miss
        self.misses += 1
        
        # Find block to replace
        replace_index, replace_block = self.find_lru_block(set_index)
        
        # Write back if dirty
        if replace_block.valid and replace_block.dirty:
            self.write_back(replace_block)
        
        # Load new block from memory
        block_start = (address // self.block_size) * self.block_size
        memory_data = []
        for i in range(self.block_size):
            memory_data.append(self.main_memory.read(block_start + i))
        
        replace_block.load_block(tag, memory_data, self.current_time)
        return replace_block.read_data(block_offset, self.current_time)
    
    def write(self, address, data):
        """Write data to cache"""
        self.current_time += 1
        tag, set_index, block_offset = self.get_cache_info(address)
        
        # Check for hit
        block_index, block = self.find_block(tag, set_index)
        if block is not None:
            # Cache hit
            self.hits += 1
            block.write_data(block_offset, data, self.current_time)
            return
        
        # Cache miss - implement write-allocate
        self.misses += 1
        
        # Find block to replace
        replace_index, replace_block = self.find_lru_block(set_index)
        
        # Write back if dirty
        if replace_block.valid and replace_block.dirty:
            self.write_back(replace_block)
        
        # Load new block from memory
        block_start = (address // self.block_size) * self.block_size
        memory_data = []
        for i in range(self.block_size):
            memory_data.append(self.main_memory.read(block_start + i))
        
        replace_block.load_block(tag, memory_data, self.current_time)
        replace_block.write_data(block_offset, data, self.current_time)
    
    def write_back(self, block):
        """Write dirty block back to memory"""
        if block.dirty and block.valid:
            block_start = block.tag * self.num_sets * self.block_size
            for i, data in enumerate(block.data):
                self.main_memory.write(block_start + i, data)
    
    def get_stats(self):
        """Get cache performance statistics"""
        total_accesses = self.hits + self.misses
        hit_rate = self.hits / total_accesses if total_accesses > 0 else 0
        miss_rate = self.misses / total_accesses if total_accesses > 0 else 0
        
        return {
            'hits': self.hits,
            'misses': self.misses,
            'total_accesses': total_accesses,
            'hit_rate': hit_rate,
            'miss_rate': miss_rate,
            'cache_size': self.cache_size,
            'block_size': self.block_size,
            'associativity': self.associativity,
            'num_sets': self.num_sets
        }

class MemorySystem:
    def __init__(self):
        # Create memory hierarchy
        self.main_memory = DRAM(1024 * 1024, 8)  # 1MB DRAM
        self.l1_cache = Cache(1024, 32, 2, self.main_memory)  # 1KB, 2-way
        self.l2_cache = Cache(8192, 64, 4, self.main_memory)  # 8KB, 4-way
    
    def read(self, address):
        """Read from memory system (L1 -> L2 -> Main)"""
        try:
            return self.l1_cache.read(address)
        except:
            try:
                return self.l2_cache.read(address)
            except:
                return self.main_memory.read(address)
    
    def write(self, address, data):
        """Write to memory system"""
        self.l1_cache.write(address, data)
    
    def get_system_stats(self):
        """Get complete system statistics"""
        return {
            'l1_cache': self.l1_cache.get_stats(),
            'l2_cache': self.l2_cache.get_stats(),
            'main_memory': self.main_memory.get_stats()
        }

# Example usage and testing
if __name__ == "__main__":
    # Create memory system
    memory_system = MemorySystem()
    
    # Test sequential access pattern
    print("Testing Sequential Access Pattern:")
    for i in range(100):
        memory_system.write(i, i * 2)
    
    for i in range(100):
        data = memory_system.read(i)
        if i < 5:  # Print first few
            print(f"Address {i}: Data = {data}")
    
    # Test random access pattern
    print("\nTesting Random Access Pattern:")
    import random
    addresses = random.sample(range(1000), 50)
    
    for addr in addresses:
        memory_system.write(addr, addr * 3)
    
    for addr in addresses[:5]:
        data = memory_system.read(addr)
        print(f"Address {addr}: Data = {data}")
    
    # Print statistics
    stats = memory_system.get_system_stats()
    print(f"\nL1 Cache Statistics:")
    print(f"Hit Rate: {stats['l1_cache']['hit_rate']:.2%}")
    print(f"Total Accesses: {stats['l1_cache']['total_accesses']}")
    
    print(f"\nL2 Cache Statistics:")
    print(f"Hit Rate: {stats['l2_cache']['hit_rate']:.2%}")
    print(f"Total Accesses: {stats['l2_cache']['total_accesses']}")
    
    print(f"\nMain Memory Statistics:")
    print(f"Total Accesses: {stats['main_memory']['total_accesses']}")
```

## 🧪 Laboratory Experiments

### Lab 1: Memory Interface Design
```
Objective: Design and test memory interface circuits

Equipment:
- SRAM chips (6264 - 8K×8)
- Address decoder (74138)
- Logic gates
- Microcontroller or CPU trainer
- Oscilloscope
- Logic analyzer

Experiments:

1. Basic SRAM Interface:
   - Connect 8K×8 SRAM to microcontroller
   - Implement address decoding
   - Test read/write operations
   - Verify timing requirements

2. Memory Expansion:
   - Design 32K memory using 4×8K SRAMs
   - Implement full address decoding
   - Test memory mapping
   - Verify no address conflicts

3. Timing Analysis:
   - Measure access time
   - Analyze setup and hold times
   - Determine maximum operating frequency
   - Add wait states if necessary

4. Memory Testing:
   - Implement checkerboard test
   - Perform walking ones test
   - Test address decoding
   - Verify data integrity

Expected Results:
- SRAM access time: 150ns
- Address setup time: 0ns
- Data setup time: 100ns
- Maximum frequency: 6.67MHz
```

### Lab 2: Cache Memory Simulation
```
Objective: Simulate cache memory behavior and analyze performance

Equipment:
- Computer with simulation software
- Programming environment (Python/C++)
- Performance analysis tools

Experiments:

1. Direct Mapped Cache:
   - Implement direct mapped cache simulator
   - Test with different cache sizes
   - Analyze hit/miss patterns
   - Measure performance improvement

2. Set Associative Cache:
   - Implement 2-way and 4-way caches
   - Compare with direct mapped
   - Test LRU replacement policy
   - Analyze conflict reduction

3. Cache Performance Analysis:
   - Test sequential access patterns
   - Test random access patterns
   - Test loop-based patterns
   - Measure hit rates and speedup

4. Multi-level Cache:
   - Implement L1 and L2 cache hierarchy
   - Analyze inclusion policies
   - Measure average access time
   - Optimize cache parameters

Performance Metrics:
- Hit rate vs cache size
- Block size optimization
- Associativity impact
- Replacement policy comparison
```

### Lab 3: ROM Programming and Testing
```
Objective: Program and test different types of ROM

Equipment:
- EPROM programmer
- UV eraser
- EPROM chips (2764, 27256)
- EEPROM chips (2864)
- Microcontroller system
- Character generator ROM

Experiments:

1. EPROM Programming:
   - Program lookup table in EPROM
   - Implement character generator
   - Test data integrity
   - Verify programming success

2. EEPROM Operations:
   - Program EEPROM electrically
   - Test in-system programming
   - Verify erase operations
   - Test endurance limits

3. ROM Applications:
   - Implement sine wave lookup table
   - Create character font ROM
   - Program system boot code
   - Test ROM-based state machine

4. ROM Testing:
   - Verify programmed data
   - Test access times
   - Check data retention
   - Analyze failure modes

Applications Tested:
- Function generation
- Character display
- System firmware
- Configuration storage
```

### Lab 4: Memory System Integration
```
Objective: Integrate different memory types in complete system

Equipment:
- Microprocessor development board
- Various memory chips
- Address decoders
- System bus interface
- Development tools

Experiments:

1. Memory Map Design:
   - Design complete memory map
   - Allocate ROM, RAM, I/O spaces
   - Implement address decoding
   - Test memory boundaries

2. Boot System Design:
   - Program boot ROM
   - Initialize RAM
   - Test system startup
   - Implement memory test routines

3. Memory Protection:
   - Implement write protection
   - Test illegal access detection
   - Add memory bounds checking
   - Verify protection mechanisms

4. Performance Optimization:
   - Analyze memory bottlenecks
   - Optimize memory timing
   - Implement caching strategies
   - Measure system performance

System Integration:
- ROM: 0000H-7FFFH (32K)
- RAM: 8000H-BFFFH (16K)
- I/O: C000H-CFFFH (4K)
- Expansion: D000H-FFFFH (12K)
```

## 📝 Practice Problems (70+ Problems)

### Memory Fundamentals (1-20)
1. Calculate memory capacity for 16-bit address bus
2. Design address decoder for 64K memory space
3. Determine access time for memory hierarchy
4. Calculate memory bandwidth requirements
5. Analyze memory power consumption

### RAM Design Problems (21-35)
21. Design SRAM cell using CMOS transistors
22. Calculate DRAM refresh frequency
23. Compare SRAM vs DRAM trade-offs
24. Design memory controller for DRAM
25. Implement memory interleaving system

### ROM and Flash Problems (36-50)
36. Program EPROM for 7-segment decoder
37. Design Flash memory file system
38. Calculate Flash memory endurance
39. Implement wear leveling algorithm
40. Design ROM-based lookup table

### Cache Memory Problems (51-70)
51. Calculate cache hit rate for given access pattern
52. Design 4-way set associative cache
53. Implement LRU replacement algorithm
54. Analyze cache performance for different block sizes
55. Design multi-level cache hierarchy

## 🎯 Assessment and Evaluation

### Quiz Questions (30 questions)
1. What is the difference between SRAM and DRAM?
2. How does cache memory improve system performance?
3. What are the advantages of Flash memory over EEPROM?
4. How does address decoding work in memory systems?
5. What factors affect cache performance?

### Design Projects
1. **Memory Controller Design**: Complete DRAM controller with refresh
2. **Cache Simulator**: Multi-level cache performance analyzer
3. **Flash File System**: Wear-leveling flash memory manager
4. **Memory Tester**: Comprehensive memory diagnostic system

### Major Project Options
1. **Computer Memory System**: Complete memory hierarchy design
2. **Embedded Memory Manager**: Memory allocation and protection
3. **Cache Optimization Tool**: Performance analysis and tuning
4. **Memory Interface Controller**: Multi-protocol memory interface

## 📚 Resources and References

### Textbooks
- "Computer Organization and Design" by Patterson & Hennessy
- "Computer Architecture: A Quantitative Approach" by Hennessy & Patterson
- "Digital Design" by Morris Mano & Michael Ciletti (Chapter 7)

### Technical Standards
- JEDEC memory standards
- DDR SDRAM specifications
- Flash memory interface standards
- Cache coherence protocols

### Online Resources
- [Memory Technology Overview](https://www.micron.com/products)
- [Cache Memory Tutorials](https://www.geeksforgeeks.org/cache-memory/)
- [Memory System Design](https://course.ece.cmu.edu/~ece447/s15/doku.php)

### Software Tools
- Cache simulators (SimpleScalar, gem5)
- Memory testing software
- SPICE circuit simulators
- HDL synthesis tools

## 🏆 Learning Outcomes
After completing this module, you will:
- Understand memory hierarchy and trade-offs
- Design memory interface and decoding circuits
- Analyze cache memory performance and optimization
- Implement memory management systems
- Understand reliability and testing methods
- Apply memory systems in digital design projects
- Score 90%+ on memory system problems

**Next Module**: Introduction to Microprocessors →