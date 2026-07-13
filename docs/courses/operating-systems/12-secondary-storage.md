# Chapter 12: Secondary Storage

**<< [File System Implementation](./11-file-system-impl.md)** | [**Next: I/O Systems**](./13-io-systems.md) >>

---

## Learning Objectives

- Describe disk hardware: platters, tracks, sectors, cylinders, seek time, rotational latency, transfer time
- Implement and compare disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK)
- Calculate disk access latency and total seek distance with trace tables
- Analyze starvation and fairness tradeoffs in SSTF vs SCAN
- Explain disk formatting, partitioning, boot block, and bad-block management
- Design RAID structures and compare RAID levels (0, 1, 5, 6, 10)
- Understand swap space management (partition vs file-based)
- Describe real-world I/O schedulers (Linux CFQ, Deadline, NOOP; Windows storport)

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/hero.svg" alt="Chapter Banner: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/handwritten-notes.svg" alt="Handwritten Notes: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/sticky-notes.svg" alt="Sticky Notes: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/visual-explanation.svg" alt="Visual Explanation: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/architecture.svg" alt="Architecture: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/workflow.svg" alt="Workflow: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/mindmap.svg" alt="Mind Map: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/comparison.svg" alt="Comparison: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/cheatsheet.svg" alt="Cheat Sheet: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/interview-quiz.svg" alt="Quiz Card: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/12-secondary-storage/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/12-secondary-storage/social-card.svg" alt="Social Card: Chapter 12: Secondary Storage" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Disk Structure** | Platters, tracks, sectors, cylinders; data read via actuator arm over spinning platters |
| **Disk Scheduling** | FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK → minimize seek time |
| **Disk Management** | Partitioning, formatting, boot block, bad block handling |
| **RAID** | Redundant Array of Independent Disks: striping, mirroring, parity |
| **Swap Space** | Virtual memory paging area on disk; raw partition or file-based |
| **Stable Storage** | Write-ahead logging ensures data survives crashes |
| **Real I/O Schedulers** | Linux CFQ, Deadline, NOOP; Windows Storport; RAID controller cache |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Disk Structure] --> B[Disk Scheduling]
    B --> C[FCFS / SSTF / SCAN / C-SCAN / LOOK / C-LOOK]
    C --> D[Disk Management]
    D --> E[RAID Levels]
    E --> F[Swap Space & Stable Storage]
    F --> G[Real-World I/O Schedulers]
    G --> H[Interview Corner]
    H --> I[Summary]
</div>

---

## 1. Disk Structure

### 1.1 Physical Anatomy


Magnetic hard disk drives (HDDs) consist of:

- **Platters**: Rigid disks coated with magnetic material (typically 1â€“4 per drive)
- **Surfaces**: Top and bottom of each platter (each has a dedicated read/write head)
- **Tracks**: Concentric circles on a surface (100Kâ€“1M per surface)
- **Sectors**: Smallest addressable unit (typically 512 bytes or 4 KB)
- **Cylinders**: Set of tracks at the same radius across all platters
- **Read/Write Head**: One per surface, mounted on actuator arm

```
                    ┌─────────────────┐
                    │   Spindle       │
                    │    ┌──┐         │
                    │  ┌─┴──┴─┐       │
                    │  │Platter│       │
                    │  │ 0     │       │
                    │  ├──────┤       │
                   ┌┼─┤Platter│       │
                   │└┐│ 1     │       │
                   └─┘├──────┤       │
                    │  │Platter│       │
                    │  │ 2     │       │
                    │  └──────┘       │
                    │  Read/Write     │
                    │  Heads (arm)    │
                    └─────────────────┘
```

### 1.2 Disk Geometry Terms


| Term | Definition | Typical Value |
|------|------------|---------------|
| **Track** | Concentric ring on one platter surface | 100Kâ€“1M tracks/surface |
| **Sector** | Smallest addressable data unit | 512 B or 4 KB (Advanced Format) |
| **Cylinder** | Same track index across all platters | Same as track count |
| **Cluster/Block** | Group of sectors (file-system unit) | 4 KBâ€“64 KB |
| **Zone Bit Recording** | Outer tracks hold more sectors than inner | 1.5â€“2Ã— more in outer zone |
| **Actuator Arm** | Positions R/W heads across platters | < 10 ms full stroke |
| **Spindle** | Rotates platters at constant RPM | 5400, 7200, 10000, 15000 RPM |
| **Areal Density** | Bits per unit area | ~1 Tb/inÂ² (2025 gen) |

### 1.3 Disk Access Time


```
Access Time = Seek Time + Rotational Latency + Transfer Time
```

**Seek Time** → Move actuator arm to correct cylinder (3â€“15 ms, avg 4â€“10 ms). Dominant factor (70â€“80% of access time).

**Rotational Latency** → Time for sector to rotate under head. Average = half rotation.
- 7200 RPM: 60/7200 = 8.33 ms/rotation → avg 4.17 ms
- 15000 RPM: 60/15000 = 4 ms/rotation → avg 2 ms

**Transfer Time** → Read/write data once positioned (100â€“200 MB/s). 4 KB / 150 MB/s â‰ˆ 0.027 ms.

| Operation | Seek | Rotate | Transfer | Total | Ratio |
|-----------|------|--------|----------|-------|-------|
| Random 4 KB (7200 RPM) | 5 ms | 4.17 ms | 0.027 ms | 9.2 ms | 100KÃ— L1 cache |
| Sequential 1 MB | 0 ms | 4.17 ms | 6.67 ms | 10.84 ms | → |

### 1.4 Real-World Analogy: Library Bookshelf


HDD as a **high-rise library with a single elevator**:

- **Platters** = Floors; **Tracks** = Bookshelf rows; **Sectors** = Books
- **Cylinder** = Same shelf position across all floors (vertical column)
- **Seek** = Elevator moving between floors; **Rotation** = Walking along row
- **Transfer** = Pulling book off shelf

An elevator zigzagging between random floors (FCFS) wastes time. Moving directionally (SCAN) is efficient.

### 1.5 Advantages & Disadvantages of HDDs


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| Cost/GB | Very low (~$15/TB) | → |
| Capacity | Up to 24+ TB/drive | → |
| Random IOPS | → | ~100â€“200 (vs SSD ~100K+) |
| Sequential BW | ~200 MB/s | → |
| Durability | → | Mechanical; shock sensitive |
| Power | → | 5â€“15 W continuously |
| Latency | → | 5â€“15 ms (1000Ã— worse than SSD) |

### 1.6 Edge Cases


**No seek (contiguous access):** All requests on same cylinder → seek = 0. Throughput approaches max (~200 MB/s).

**Fragmented file:** File scattered across cylinders → seek per block. Random 4 KB IOPS ~100â€“200 vs sequential ~50K+ equivalent.

**Zoned bit recording:** Outer tracks have more sectors. Requests to outer cylinders complete faster per track.

---

## 2. Disk Scheduling Algorithms

Reorder pending I/O request queue to minimize seek time (dominant component).

### Common Benchmark Queue


All examples: `[98, 183, 37, 122, 14, 124, 65, 67]`, head=53, disk 0â€“199.

### 2.1 FCFS (First-Come, First-Served)


**Analogy:** Elevator processes floor requests in button-press order → zigzags wildly.

**Steps:**
1. Receive queue in FIFO order.
2. Move from current to first request.
3. Distance = |current âˆ’ target|. Add to total. Set current = target.
4. Repeat for each remaining request.
5. Return total.

**Pseudocode:**
```
FUNCTION FCFS(queue, head):
    total ← 0; current ← head
    FOR each request IN queue:
        total += |current âˆ’ request|
        current ← request
    RETURN total
```

**Dry Run Trace:**

| Step | Current | Request | Distance | Total | Path |
|------|---------|---------|----------|-------|------|
| Start | 53 | → | → | 0 | 53 |
| 1 | 53 | 98 | 45 | 45 | 53 → 98 |
| 2 | 98 | 183 | 85 | 130 | → 183 |
| 3 | 183 | 37 | 146 | 276 | → 37 |
| 4 | 37 | 122 | 85 | 361 | → 122 |
| 5 | 122 | 14 | 108 | 469 | → 14 |
| 6 | 14 | 124 | 110 | 579 | → 124 |
| 7 | 124 | 65 | 59 | 638 | → 65 |
| 8 | 65 | 67 | 2 | 640 | → 67 |

**Total: 640 cylinders**

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
using namespace std;

int fcfs(const vector<int>& req, int head) {
    int total = 0, cur = head;
    cout << "FCFS: " << head;
    for (int r : req) {
        total += abs(cur - r); cur = r;
        cout << " -> " << cur;
    }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    fcfs(req, 53);
    return 0;
}
```

**Python:**
```python
def fcfs(requests: list, head: int) -> int:
    total, cur = 0, head
    path = [str(head)]
    for r in requests:
        total += abs(cur - r); cur = r
        path.append(str(cur))
    print(f"FCFS: {' -> '.join(path)} | Total: {total}")
    return total

requests = [98, 183, 37, 122, 14, 124, 65, 67]
fcfs(requests, 53)
```

**Complexity: O(n)** time, **O(1)** space. Single pass, no aux storage.

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| Simple, starvation-free | High seek (640); wild oscillations |
| Fair (FIFO order) | Poor throughput under mixed load |

**Edge Cases:** Empty = 0. Same cylinder = 0. Alternating extremes [199,0,199,0] → 1194 total (thrashing).

### 2.2 SSTF (Shortest Seek Time First)


**Analogy:** Courier delivers to nearest address first → distant customer may wait forever.

**Steps:**
1. Scan entire pending queue at current position.
2. Pick nearest request by distance.
3. Move there, service, remove from pending.
4. Repeat until queue empty.
5. Sum all distances.

**Pseudocode:**
```
FUNCTION SSTF(queue, head):
    total ← 0; current ← head; pending ← copy(queue)
    WHILE pending NOT EMPTY:
        nearest ← argmin over pending of |current âˆ’ r|
        total += |current âˆ’ nearest|
        current ← nearest
        REMOVE nearest FROM pending
    RETURN total
```

**Dry Run Trace:**

| Step | Current | Pending | Nearest | Dist | Total | Path |
|------|---------|---------|---------|------|-------|------|
| Start | 53 | all | → | → | 0 | 53 |
| 1 | 53 | all | 65 (12) | 12 | 12 | → 65 |
| 2 | 65 | (98,183,37,122,14,124,67) | 67 (2) | 2 | 14 | → 67 |
| 3 | 67 | (98,183,37,122,14,124) | 37 (30) | 30 | 44 | → 37 |
| 4 | 37 | (98,183,122,14,124) | 14 (23) | 23 | 67 | → 14 |
| 5 | 14 | (98,183,122,124) | 98 (84) | 84 | 151 | → 98 |
| 6 | 98 | (183,122,124) | 122 (24) | 24 | 175 | → 122 |
| 7 | 122 | (183,124) | 124 (2) | 2 | 177 | → 124 |
| 8 | 124 | (183) | 183 (59) | 59 | 236 | → 183 |

**Total: 236 cylinders**

**Starvation:** Head=53, queue=[65, 183]. Pick 65. Before servicing 183, new [67,37] arrive. Pick 67, 37. More nearby arrivals keep 183 waiting forever.

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <climits>
using namespace std;

int sstf(const vector<int>& req, int head) {
    int total = 0, cur = head, n = req.size();
    vector<bool> done(n, false);
    cout << "SSTF: " << head;
    for (int c = 0; c < n; c++) {
        int minD = INT_MAX, idx = -1;
        for (int i = 0; i < n; i++)
            if (!done[i] && abs(cur - req[i]) < minD)
                { minD = abs(cur - req[i]); idx = i; }
        total += minD; cur = req[idx]; done[idx] = true;
        cout << " -> " << cur;
    }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    sstf(req, 53);
    return 0;
}
```

**Python:**
```python
def sstf(requests: list, head: int) -> int:
    total, cur = 0, head
    pending, path = requests[:], [str(head)]
    while pending:
        nearest = min(pending, key=lambda r: abs(cur - r))
        total += abs(cur - nearest); cur = nearest
        path.append(str(cur)); pending.remove(nearest)
    print(f"SSTF: {' -> '.join(path)} | Total: {total}")
    return total

sstf([98, 183, 37, 122, 14, 124, 65, 67], 53)
```

**Complexity: O(nÂ²)** time (scan for each request), **O(n)** space (visited flags).

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| Lower seek than FCFS (236) | **Starvation** → distant requests may wait forever |
| Fast nearby response | O(nÂ²) → expensive for large queues |

**Edge Cases:** Tie → pick any. Same cylinder → 0. Large queue (~50M distance calculations for 10K requests).

### 2.3 SCAN (Elevator Algorithm)


**Analogy:** Elevator moves one direction, servicing requests. Reverses at top floor → no starvation.

**Steps:**
1. Choose direction (toward 0 or max). Sort queue ascending.
2. Partition into left (< head) and right (â‰¥ head).
3. Move in chosen direction, service encountered requests.
4. At **physical disk end** (0 or 199), reverse.
5. Service remaining in reverse direction.
6. Sum all distances.

**Pseudocode:**
```
FUNCTION SCAN(queue, head, disk_size, toward_zero):
    sorted ← SORT(queue); left ← [r< head]; right ← [r â‰¥ head]
    total ← 0; current ← head
    IF toward_zero:
        FOR r IN REVERSE(left): total += |cur âˆ’ r|; cur ← r
        total += cur; cur ← 0
        FOR r IN right: total += |cur âˆ’ r|; cur ← r
    RETURN total
```

**Dry Run Trace (toward 0):**

Sorted: [14, 37, 65, 67, 98, 122, 124, 183]
Left: [37, 14] → Right: [65, 67, 98, 122, 124, 183]

| Step | Move | Distance | Total |
|------|------|----------|-------|
| Start 53 | → | → | 0 |
| 53 → 37 | 37 service | 16 | 16 |
| 37 → 14 | 14 service | 23 | 39 |
| 14 → 0 | disk end | 14 | 53 |
| 0 → 65 | reverse, service | 65 | 118 |
| 65 → 67 | service | 2 | 120 |
| 67 → 98 | service | 31 | 151 |
| 98 → 122 | service | 24 | 175 |
| 122 → 124 | service | 2 | 177 |
| 124 → 183 | service | 59 | 236 |

**Total: 236 cylinders**

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
using namespace std;

int scan(const vector<int>& req, int head, int ds, bool tz) {
    int total = 0, cur = head;
    vector<int> s = req; sort(s.begin(), s.end());
    cout << "SCAN: " << head;
    vector<int> L, R;
    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);
    if (tz) {
        for (int i = L.size()-1; i >=0; i--)
            { total += abs(cur-L[i]); cur=L[i]; cout << " -> " << cur; }
        if (cur != 0) { total += cur; cur = 0; cout << " -> " << cur; }
        for (int r : R) { total += abs(cur-r); cur=r; cout << " -> " << cur; }
    }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    scan(req, 53, 200, true);
    return 0;
}
```

**Python:**
```python
def scan(requests: list, head: int, ds: int = 200, tz: bool = True) -> int:
    total, cur = 0, head
    s = sorted(requests)
    L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    path = [str(head)]
    if tz:
        for r in reversed(L):
            total += abs(cur - r); cur = r; path.append(str(cur))
        if cur != 0: total += cur; cur = 0; path.append(str(cur))
        for r in R: total += abs(cur - r); cur = r; path.append(str(cur))
    print(f"SCAN: {' -> '.join(path)} | Total: {total}")
    return total

scan([98, 183, 37, 122, 14, 124, 65, 67], 53, 200, True)
```

**Complexity: O(n log n)** time (sort), **O(n)** space (partitions).

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| No starvation | Non-uniform wait (edges slower) |
| Good seek (236) | Goes to disk end unnecessarily |
| Directional sweep | Direction choice affects total |

**Edge Cases:** No requests in direction → waste. Head at extreme → reversal. All one side → like FCFS.

### 2.4 C-SCAN (Circular SCAN)


**Analogy:** Tram runs clockwise only. Passengers board during clockwise sweep. Returns empty to start. Uniform wait times.

**Steps:**
1. Sort ascending. Partition left/right.
2. Service left (toward 0).
3. At 0, **jump** to 199 (no service).
4. Service right descending from 199.
5. Jump adds disk_size âˆ’ 1 to total.

**Pseudocode:**
```
FUNCTION CSCAN(queue, head, disk_size):
    sorted ← SORT(queue); left ← [r< head]; right ← [r â‰¥ head]
    total ← 0; cur ← head
    FOR r IN REVERSE(left): total += |cur âˆ’ r|; cur ← r
    total += cur; cur ← 0
    total += (disk_size âˆ’ 1); cur ← disk_size âˆ’ 1
    FOR r IN REVERSE(right): total += |cur âˆ’ r|; cur ← r
    RETURN total
```

**Dry Run:**

| Step | Move | Distance | Total |
|------|------|----------|-------|
| Start 53 | → | → | 0 |
| 53 → 37 | service | 16 | 16 |
| 37 → 14 | service | 23 | 39 |
| 14 → 0 | disk end | 14 | 53 |
| 0 → 199 | **jump** | 199 | 252 |
| 199 → 183 | service | 16 | 268 |
| 183 → 124 | service | 59 | 327 |
| 124 → 122 | service | 2 | 329 |
| 122 → 98 | service | 24 | 353 |
| 98 → 67 | service | 31 | 384 |
| 67 → 65 | service | 2 | **386** |

**Total: 386 cylinders**

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
using namespace std;

int cscan(const vector<int>& req, int head, int ds) {
    int total = 0, cur = head;
    vector<int> s = req; sort(s.begin(), s.end());
    cout << "C-SCAN: " << head;
    vector<int> L, R;
    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);
    for (int i = L.size()-1; i >=0; i--)
        { total += abs(cur-L[i]); cur=L[i]; cout << " -> " << cur; }
    if (cur != 0) { total += cur; cur = 0; cout << " -> " << cur; }
    cout << " -> jump"; total += (ds-1); cur = ds-1;
    for (int i = R.size()-1; i >=0; i--)
        { total += abs(cur-R[i]); cur=R[i]; cout << " -> " << cur; }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    cscan(req, 53, 200);
    return 0;
}
```

**Python:**
```python
def cscan(requests: list, head: int, ds: int = 200) -> int:
    total, cur = 0, head
    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    path = [str(head)]
    for r in reversed(L):
        total += abs(cur - r); cur = r; path.append(str(cur))
    if cur != 0: total += cur; cur = 0; path.append(str(cur))
    total += (ds - 1); cur = ds - 1; path.append("jump")
    for r in reversed(R):
        total += abs(cur - r); cur = r; path.append(str(cur))
    print(f"C-SCAN: {' -> '.join(path)} | Total: {total}")
    return total

cscan([98, 183, 37, 122, 14, 124, 65, 67], 53, 200)
```

**Complexity: O(n log n)** time, **O(n)** space.

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| Uniform waiting time | Empty jump adds 199 |
| No starvation | Worse seek than SCAN/LOOK |
| Predictable max wait | |

### 2.5 LOOK (Elevator, Early Turnaround)


**Analogy:** Elevator that checks ahead → turns at last requested floor. No empty trips.

**Steps:**
1. Sort ascending. Partition left/right.
2. Service left (toward 0).
3. At **last left request** (NOT disk end), reverse.
4. Service right (ascending).
5. Sum all.

**Pseudocode:**
```
FUNCTION LOOK(queue, head):
    sorted ← SORT(queue); left ← [r< head]; right ← [r â‰¥ head]
    total ← 0; cur ← head
    FOR r IN REVERSE(left): total += |cur âˆ’ r|; cur ← r
    FOR r IN right: total += |cur âˆ’ r|; cur ← r
    RETURN total
```

**Dry Run:**

| Step | Move | Distance | Total |
|------|------|----------|-------|
| Start 53 | → | → | 0 |
| 53 → 37 | service | 16 | 16 |
| 37 → 14 | service | 23 | 39 |
| 14 → 65 | reverse at last left | 51 | 90 |
| 65 → 67 | service | 2 | 92 |
| 67 → 98 | service | 31 | 123 |
| 98 → 122 | service | 24 | 147 |
| 122 → 124 | service | 2 | 149 |
| 124 → 183 | service | 59 | **208** |

**Total: 208 cylinders** (28 less than SCAN → no 14→0→65 waste).

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
using namespace std;

int look(const vector<int>& req, int head) {
    int total = 0, cur = head;
    vector<int> s = req; sort(s.begin(), s.end());
    cout << "LOOK: " << head;
    vector<int> L, R;
    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);
    for (int i = L.size()-1; i >=0; i--)
        { total += abs(cur-L[i]); cur=L[i]; cout << " -> " << cur; }
    for (int r : R) { total += abs(cur-r); cur=r; cout << " -> " << cur; }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    look(req, 53);
    return 0;
}
```

**Python:**
```python
def look(requests: list, head: int) -> int:
    total, cur = 0, head
    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    path = [str(head)]
    for r in reversed(L): total += abs(cur - r); cur = r; path.append(str(cur))
    for r in R: total += abs(cur - r); cur = r; path.append(str(cur))
    print(f"LOOK: {' -> '.join(path)} | Total: {total}")
    return total

look([98, 183, 37, 122, 14, 124, 65, 67], 53)
```

**Complexity: O(n log n)** time, **O(n)** space.

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| **Best total seek** (208) | Non-uniform wait at edges |
| No starvation | Edge cylinders wait longer |
| No unnecessary travel | |

### 2.6 C-LOOK (Circular LOOK)


**Analogy:** Same tram as C-SCAN, but when last passenger boards, it returns to the first waiting passenger on other side. No route-end travel.

**Steps:**
1. Sort ascending. Partition left/right.
2. Service left (toward 0).
3. At last left request, **jump** directly to farthest right request.
4. Service right descending from farthest.
5. Jump = |last_left âˆ’ farthest_right|.

**Pseudocode:**
```
FUNCTION CLOOK(queue, head):
    sorted ← SORT(queue); left ← [r< head]; right ← [r â‰¥ head]
    total ← 0; cur ← head
    FOR r IN REVERSE(left): total += |cur âˆ’ r|; cur ← r
    total += |cur âˆ’ right[last]|; cur ← right[last]
    FOR r IN REVERSE(right): total += |cur âˆ’ r|; cur ← r
    RETURN total
```

**Dry Run:**

| Step | Move | Distance | Total |
|------|------|----------|-------|
| Start 53 | → | → | 0 |
| 53 → 37 | service | 16 | 16 |
| 37 → 14 | service | 23 | 39 |
| 14 → 183 | **jump** | 169 | 208 |
| 183 → 124 | service | 59 | 267 |
| 124 → 122 | service | 2 | 269 |
| 122 → 98 | service | 24 | 293 |
| 98 → 67 | service | 31 | 324 |
| 67 → 65 | service | 2 | **326** |

**Total: 326 cylinders** (between LOOK 208 and C-SCAN 386).

**C++:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
using namespace std;

int clook(const vector<int>& req, int head) {
    int total = 0, cur = head;
    vector<int> s = req; sort(s.begin(), s.end());
    cout << "C-LOOK: " << head;
    vector<int> L, R;
    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);
    for (int i = L.size()-1; i >=0; i--)
        { total += abs(cur-L[i]); cur=L[i]; cout << " -> " << cur; }
    if (!R.empty()) {
        int far = R.back(); total += abs(cur-far); cur = far; cout << " -> " << cur;
        for (int i = R.size()-2; i >=0; i--)
            { total += abs(cur-R[i]); cur=R[i]; cout << " -> " << cur; }
    }
    cout << " | Total: " << total << "\n";
    return total;
}

int main() {
    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};
    clook(req, 53);
    return 0;
}
```

**Python:**
```python
def clook(requests: list, head: int) -> int:
    total, cur = 0, head
    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    path = [str(head)]
    for r in reversed(L): total += abs(cur - r); cur = r; path.append(str(cur))
    if R:
        far = R[-1]; total += abs(cur - far); cur = far; path.append(str(cur))
        for r in reversed(R[:-1]): total += abs(cur - r); cur = r; path.append(str(cur))
    print(f"C-LOOK: {' -> '.join(path)} | Total: {total}")
    return total

clook([98, 183, 37, 122, 14, 124, 65, 67], 53)
```

**Complexity: O(n log n)** time, **O(n)** space.

**A&D:**

| Advantage | Disadvantage |
|-----------|-------------|
| Better seek than C-SCAN (326 vs 386) | Jump overhead vs LOOK |
| Uniform wait, no starvation | Slightly more complex |

### 2.7 Comparison Table


Same queue `[98, 183, 37, 122, 14, 124, 65, 67]`, head=53, disk 0â€“199:

| Algorithm | Total Seek | vs FCFS | Starvation | Uniform | Complexity |
|-----------|-----------|---------|------------|---------|------------|
| **FCFS** | 640 | → | No | Poor | O(n) |
| **SSTF** | 236 | âˆ’63% | **Yes** | Poor | O(nÂ²) |
| **SCAN** | 236 | âˆ’63% | No | Moderate | O(n log n) |
| **C-SCAN** | 386 | âˆ’40% | No | **Best** | O(n log n) |
| **LOOK** | **208** | **âˆ’68%** | No | Moderate | O(n log n) |
| **C-LOOK** | 326 | âˆ’49% | No | **Best** | O(n log n) |

LOOK has lowest seek (208). C-LOOK/C-SCAN provide best fairness. Choice depends on workload.

### 2.8 SSTF vs SCAN Starvation Analysis


| Aspect | SSTF | SCAN |
|--------|------|------|
| Selection | Nearest distance | Next in sweep direction |
| Starvation | **Yes** → distant may wait forever | **No** → direction reversal guarantees service |
| Scenario | Head=50, queue=[1000,51,52,49,48...]: SSTF serves 47â€“52 cluster forever, 1000 never reached | Head=50, toward 0: services 49,48... reverses at 0, goes up to 1000 |
| Variance | Very high (Âµs to âˆž) | Bounded by sweep time |
| Verdict | Unsuitable for production kernels | Safe for all workloads |

### 2.9 Complexity Summary


| Algorithm | Time | Space | Why Space |
|-----------|------|-------|-----------|
| FCFS | O(n) | O(1) | No aux structures |
| SSTF | O(nÂ²) | O(n) | Visited flags |
| SCAN | O(n log n) | O(n) | Sorted + partitions |
| C-SCAN | O(n log n) | O(n) | Sorted + partitions |
| LOOK | O(n log n) | O(n) | Sorted + partitions |
| C-LOOK | O(n log n) | O(n) | Sorted + partitions |

SSTF O(nÂ²) becomes prohibitive at scale (10K req → ~50M distance calcs).

### 2.10 Combined Edge Cases


| Case | FCFS | SSTF | SCAN | C-SCAN | LOOK | C-LOOK |
|------|------|------|------|--------|------|--------|
| Single request | Same | Same | Same | Same | Same | Same |
| Same cylinder | 0 | 0 | 0 | 0 | 0 | 0 |
| All left of head | Arrival | Nearest | Left→0→reverse | Left→0→jump→desc | Left→reverse at min | Left→jump→max→desc |
| Alternating extremes | Max thrashing | Moderate | Directional (good) | Jump overhead | Directional (best) | Jump overhead |
| Concurrent arrivals | Added to tail | May starve | Next sweep | Next sweep | Next sweep | Next sweep |

---

## 3. Disk Management

### 3.1 Formatting


**Low-Level (Physical):** Divides disk into sectors (headers, data, ECC). Done at factory. Advanced Format: 4 KB physical sectors for better ECC.

**Partitioning:** Logical groups of cylinders, each treated as separate device. Partition table in MBR (â‰¤2 TB, â‰¤4 primaries) or GPT (>2 TB, â‰¤128 partitions, backup at end).

**Logical Formatting (mkfs):** Creates superblock, inode table/bitmap, free block bitmap, root directory for a specific FS type (ext4, NTFS, XFS, Btrfs).

```
Disk Layout:
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Partition 1 │ Partition 2 │ Partition 3 │ Partition 4 │
│ (ext4)      │ (NTFS)      │ (swap)      │ (XFS)       │
└─────────────┴─────────────┴─────────────┴─────────────┘
┌───────────────────────────────────────────────────────┐
│ GPT Header (LBA 1)       │ Partition entries (LBA 2â€“33) │
└───────────────────────────────────────────────────────┘
```

### 3.2 Boot Block


**MBR (Master Boot Record):**
- LBA 0, 512 bytes: 440 boot code + 4 sig + 64 partition table + 2 (0xAA55).
- BIOS loads MBR → boot code loads active partition's VBR → OS kernel.
- Limits: â‰¤2 TB, â‰¤4 primary partitions.

**GPT (GUID Partition Table):**
- LBA 0: protective MBR (backward compat).
- LBA 1: GPT header; LBA 2â€“33: partition entries (128 Ã— 128 bytes).
- Backup GPT at last LBAs for redundancy.
- UEFI firmware standard. Supports >2 TB and unlimited partitions (128 by convention).
### 3.3 Bad Block Handling


**Sector Sparing (Forwarding):** Controller remaps bad sector LBA to a spare from reserved pool.
- **P-List** (primary): Factory-detected defects.
- **G-List** (grown): Lifecycle defects, remapped dynamically.
- Transparent to OS → controller handles on every read/write.

```
Bad sector detected → controller remaps LBA to spare sector → OS none the wiser
```

**Sector Slipping:** During low-level format, sectors shifted past bad sector. Bad sector never gets LBAs.

**Modern Practice:** Reed-Solomon/LDPC ECC recovers marginal sectors. S.M.A.R.T. tracks reallocated counts. Increasing reallocations → imminent failure.

### 3.4 Disk Management Edge Cases


| Case | Handling |
|------|----------|
| Increasing bad blocks | S.M.A.R.T. alert → replace drive |
| Bad block in FS metadata | fsck/chkdsk attempts recovery |
| Bad block during write | Controller remaps (G-List grows) |
| Bad block during read | ECC retry → remap; data loss if ECC fails |
| MBR sector goes bad | Catastrophic (GPT backup can recover) |
| Partition table corrupt | GPT has backup; MBR has none |
| 4K sector on 512B OS | Alignment issues; modern OS handles transparently |

---

## 4. RAID

**Redundant Array of Independent Disks:** Multiple physical disks for reliability, performance, or both. Implemented via:
- **Hardware RAID**: Dedicated controller with processor + cache (battery/NVDIMM backed).
- **Software RAID**: OS-level (Linux mdadm, Windows Storage Spaces, ZFS).

### 4.1 RAID Levels


#### RAID 0 (Striping)

Data split into stripes, written across all disks in parallel.

```
Disk 0    Disk 1    Disk 2
stripe0   stripe1   stripe2
stripe3   stripe4   stripe5
```

- **Min disks:** 2 | **Capacity:** N Ã— disk (100%)
- **Read:** Excellent (parallel) | **Write:** Excellent (parallel)
- **Reliability:** **None** → any single failure destroys all data
- **Use:** Scratch space, temp files, non-critical throughput

#### RAID 1 (Mirroring)

Data written identically to two+ disks.

```
Disk 0    Disk 1
block 0   block 0
block 1   block 1
```

- **Min disks:** 2 | **Capacity:** N/2 Ã— disk (50%)
- **Read:** Good (read from either, 2Ã— for 2-disk) | **Write:** Slower (write to both)
- **Reliability:** Excellent → survive Nâˆ’1 of N failures
- **Use:** OS partitions, transaction logs, critical metadata

#### RAID 5 (Striping with Distributed Parity)

XOR parity distributed across all disks (no dedicated parity disk).

```
Disk 0  Disk 1  Disk 2  Disk 3
D0      D1      D2      P0-2
D3      D4      P3-5    D5
D6      P6-8    D7      D8
```

- **Min disks:** 3 | **Capacity:** (Nâˆ’1)/N Ã— disk
- **Read:** Excellent | **Write:** **Poor → 4 I/O penalty per small write**
- **RAID 5 Write Penalty (4 I/Os):**
  1. Read old data block
  2. Read old parity block
  3. Write new data block
  4. Write new parity block
- **Reliability:** Survives 1 disk failure
- **Use:** Bulk storage, file servers, media archives

#### RAID 6 (Striping with Dual Parity)

Two parity blocks per stripe (P+Q or Reed-Solomon).

- **Min disks:** 4 | **Capacity:** (Nâˆ’2)/N Ã— disk
- **Read:** Excellent | **Write:** **Very poor → 6 I/O penalty**
- **Reliability:** Survives 2 simultaneous failures
- **Use:** Large arrays where rebuild time is long (protects against second failure during rebuild)

#### RAID 10 (RAID 1+0 → Striped Mirrors)

Mirror pairs (RAID 1) striped together (RAID 0).

```
            RAID 0
       ┌──────┬──────┐
     RAID 1  RAID 1  RAID 1
    ┌───┐   ┌───┐   ┌───┐
   D0  D1  D2  D3  D4  D5
```

- **Min disks:** 4 | **Capacity:** N/2 Ã— disk (50%)
- **Read:** Excellent (any disk) | **Write:** Good (both in one mirror pair)
- **Reliability:** Very good (one failure per mirror set)
- **Use:** **Most common enterprise RAID** → databases, production workloads

### 4.2 RAID Comparison


| Level | Min Disks | Redundancy | Read | Write | Capacity | Cost Eff. |
|-------|-----------|------------|------|-------|----------|-----------|
| 0 | 2 | None | Excellent | Excellent | 100% | Best |
| 1 | 2 | Mirror (Nâˆ’1 fail) | Good | Good | 50% | Low |
| 5 | 3 | Single parity | Good | **Poor** (4 IO) | (Nâˆ’1)/N | High |
| 6 | 4 | Dual parity | Good | **Very poor** (6 IO) | (Nâˆ’2)/N | Moderate |
| 10 | 4 | Mirror per pair | Excellent | Good | 50% | Low |

**4 Ã— 1 TB disks capacity:**

| Level | Usable | Note |
|-------|--------|------|
| 0 | 4 TB | No redundancy |
| 1 | 2 TB | Two 2-disk mirrors |
| 5 | 3 TB | 1 parity equivalent |
| 6 | 2 TB | 2 parity equivalent |
| 10 | 2 TB | Two striped mirror pairs |

### 4.3 RAID Reliability Calculation


MTTF of one disk = M (say 1M hours â‰ˆ 114 years).

**RAID 0:** MTTF = M / N (N disks → NÃ— failure probability).

**RAID 1 (2-disk):** Survives as long as â‰¥1 disk lives. Approx MTTF >> M.

**RAID 5 (N disks):**
- P(data loss) = P(any fails) Ã— P(second fails during rebuild)
- With 4 Ã— 4 TB, 10 hr rebuild, M=1M hr:
  - P(first failure/year) = 8766/1M â‰ˆ 0.0088 (0.88%)
  - P(second during rebuild) = 10/1M â‰ˆ 0.00001 (0.001%)
  - P(data loss/year) â‰ˆ 0.0088 Ã— 0.00001 Ã— 4 Ã— 3 â‰ˆ 1 Ã— 10â»â¹

**RAID 6:** Survives 2 failures. Need 3rd during rebuild. Much safer for large arrays.

**RAID 10:** Survives as long as no mirror pair loses both disks. More robust than RAID 5 for same usable capacity.

### 4.4 RAID Edge Cases


| Scenario | Behavior |
|----------|----------|
| RAID 5 failure during rebuild | Second failure = data loss (RAID 6 protects) |
| RAID 10 single failure | Mirror serves reads; hot-swap rebuilds |
| RAID 0 failure | Complete data loss → no recovery |
| Multiple failures in RAID 10 | OK if different mirror sets |
| Controller cache battery fail | Write-back → write-through (perf drop) |
| Rebuild I/O load | Saturates disk I/O, degrades workload |
| SSD+HDD in same set | Limited to slowest → not recommended |
| >2 TB on MBR RAID | Must use GPT |

---

## 5. Swap Space Management

Extends physical memory by providing paging area on disk.

### 5.1 Swap Partition vs Swap File


| Aspect | Swap Partition | Swap File |
|--------|---------------|-----------|
| **What** | Dedicated raw partition (no FS) | File within existing FS |
| **Perf** | Slightly faster (contiguous, no FS overhead) | Slightly slower (FS metadata + fragmentation) |
| **Flexibility** | Fixed size; repartition to change | Resizable (grow/shrink file) |
| **Hibernation** | Required by many OS | Supported on modern Linux |
| **Fragmentation** | None | Possible over time |
| **Examples** | Linux `/dev/sda3` as swap | Linux `/swapfile`; Win `pagefile.sys` |

### 5.2 Swap Sizing


| System | Recommended | Rationale |
|--------|-------------|-----------|
| Desktop 4â€“8 GB RAM | 2â€“4 GB | Light paging |
| Desktop 16+ GB RAM | 4â€“8 GB | Emergency headroom; hibernation |
| Server 64+ GB RAM | 8â€“16 GB | Emergency only; avoid swapping |
| Hibernation-enabled | RAM Ã— 1.1 | Must hold full RAM |
| Database server | None/minimal | DB manages own memory |

### 5.3 Swap Pseudocode


```
SWAP-IN(page):
    Find free frame in physical memory
    IF none: evict victim page (LRU/Clock)
        IF victim dirty: write victim to swap
    Read requested page from swap into free frame
    Update page table (present=1, frame=free)

SWAP-OUT(page):
    IF page not in swap: allocate swap slot; write page
    Update page table (present=0, swap_loc=slot)
```

### 5.4 Swap Edge Cases


| Scenario | Behavior |
|----------|----------|
| **Thrashing** | OS spends more time swapping than executing |
| **Swap too small** | OOM killer activates |
| **Swap file fragmentation** | Increases swap-out latency |
| **SSD as swap** | Faster than HDD swap; wear concern if heavy swapping |
| **No swap** | System limited to physical RAM; OOM sooner |
| **Linux swappiness** | 0â€“100; default 60; higher = more aggressive swapping |

---

## 6. Interview Corner

### 6.1 Scheduling Selection Criteria


| Factor | Recommendation |
|--------|---------------|
| Fairness critical | C-SCAN or C-LOOK |
| Max throughput | LOOK (lowest seek) |
| Simple | FCFS |
| Real-time | C-SCAN (predictable wait) |
| SSD (no seek) | FCFS or NOOP |
| DB with own I/O mgmt | NOOP |
| Mixed random+sequential | Deadline or C-LOOK |

### 6.2 RAID Reliability → Interview Answer


**Q:** "5 Ã— 4 TB disks. Compare RAID 0/1/5/6/10 usable capacity, min disks, failure tolerance."

| Level | Usable | Min Disks | Failure Tolerance |
|-------|--------|-----------|-------------------|
| 0 | 20 TB (100%) | 2 | None |
| 1 | 10 TB (50%) | 2 | 4 of 5 |
| 5 | 16 TB (80%) | 3 | 1 |
| 6 | 12 TB (60%) | 4 | 2 |
| 10 | 10 TB (50%) | 4 | Up to 2 (per mirror pair) |

**Harder:** "4-disk RAID 5, MTTF=1M hr, rebuild=12 hr. Compute data loss probability."
- P(any fail/yr) = 8766/1M â‰ˆ 0.0088
- P(second fail during rebuild) = 12/1M = 0.000012
- P(data loss/yr) â‰ˆ 0.0088 Ã— 0.000012 Ã— 4 Ã— 3 â‰ˆ 1.3 Ã— 10â»â¹

### 6.3 Swap Sizing → Interview Answer


**Q:** "How much swap for 128 GB RAM Linux server?"
**A:** "Minimal swap (4â€“8 GB). Server should be sized to never swap → swapping kills performance. Some swap needed as emergency headroom and for kdump crash dumps. Hibernation requires swap â‰¥ RAM."

### 6.4 Common Q&A


**Q: Why does C-SCAN have worse seek than SCAN but is still preferred?**
**A:** C-SCAN provides uniform waiting times. SCAN favors middle cylinders (serviced twice per cycle). C-SCAN services each cylinder exactly once per cycle → critical for real-time/multimedia.

**Q: Why RAID 5 write penalty?**
**A:** Small write = 4 I/Os: read old data + read old parity + XOR + write new data + write new parity = 4 disk I/Os for 1 logical write. RAID 6 = 6 I/Os.

**Q: Can SSTF avoid starvation?**
**A:** Yes → add request aging. When age > threshold, reduce effective distance. Similar to Linux Deadline scheduler.

**Q: 4K Advanced Format alignment issue?**
**A:** OS expecting 512B on 4K physical drive causes read-modify-write per 512B access. Modern OS align partitions to 4K boundaries transparently.

---

## 7. Applications in Real Systems

### 7.1 Linux I/O Schedulers


Select per device: `echo <scheduler> > /sys/block/<dev>/queue/scheduler`

**CFQ (Completely Fair Queueing):**
- One queue per process; allocates time slices.
- Groups sync (reads) and async (writes) separately.
- Good for desktops; higher CPU overhead.

**Deadline Scheduler:**
- Three queues: sorted-by-LBA, read-FIFO, write-FIFO.
- Read deadline = 500 ms; write deadline = 5 s.
- Prioritizes reads over writes; prevents read starvation.
- Common for databases.

**NOOP Scheduler:**
- Simple FIFO + adjacent merge. No reordering.
- Best for SSDs and hardware RAID controllers.
- Lowest CPU overhead.

**BFQ and Kyber:**
- BFQ: Better fairness than CFQ.
- Kyber: Low-overhead, adaptive; designed for NVMe SSDs.

### 7.2 Windows Storage Stack


Windows: I/O Manager → Volume Manager → Class Driver → Port Driver → Storage Driver

- **Storport**: Enterprise storage framework (FC, SAS, iSCSI)
- **StorAHCI**: SATA SSDs/HDDs
- **Stornvme**: NVMe PCIe SSDs
- **Storage Spaces**: Software RAID/volume mgmt (like Linux mdadm/LVM)
- **Storage QoS**: Min/max IOPS per VM (Hyper-V)

**Windows Scheduling:**
- No user-selectable scheduler (unlike Linux).
- I/O priority: Idle, Very Low, Low, Normal, High, Critical.
- **SysMain (Superfetch)**: Prefetches frequently used data; manages page file.

### 7.3 Hardware RAID Controllers


| Feature | Entry-Level | Enterprise |
|---------|-------------|------------|
| **Examples** | LSI MegaRAID, Adaptec | Broadcom 9560, Dell PERC H750 |
| **Cache** | 512 MBâ€“2 GB | 2â€“8 GB NVDIMM |
| **Cache Backup** | Battery (BBU) | NVDIMM to flash on power loss |
| **Features** | RAID 0/1/5/10 | All + RAID 6, hot spare, dedup, encryption |
| **Interface** | SATA/SAS | SAS3/4, NVMe |
| **OS Transparent** | Yes | Yes |

### 7.4 Real-World Configurations


| Workload | Config | Rationale |
|----------|--------|-----------|
| **Web server** | RAID 1 (OS) + RAID 5 (content) | OS reliability + efficient bulk |
| **OLTP database** | RAID 10 (16+ disks) | Max IOPS for logs + data |
| **Data warehouse** | RAID 5/6 (large, sequential) | Striping + parity protection |
| **Virtualization** | RAID 10 (SSD+HDD tiers) | VMs on SSD; backups on HDD |
| **Media streaming** | RAID 0 or 5 | Max throughput; content replaceable |
| **Desktop PC** | RAID 1 or single SSD | Reliability |
| **Linux swap** | Dedicated partition on HDD/SSD | Separate from FS; raw blocks |

---

## Examples

### Example 1: Disk Scheduling Simulation (Complete C)

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define REQUESTS 8
#define DISK_MAX 200

void fcfs(int queue[], int n, int start) {
    int total = 0;
    printf("FCFS: %d", start);
    for (int i = 0; i < n; i++) {
        total += abs(start - queue[i]);
        start = queue[i];
        printf(" -> %d", start);
    }
    printf(" | Total: %d\n", total);
}

void scan(int queue[], int n, int start) {
    int total = 0, cur = start;
    int sorted[n];
    for (int i = 0; i < n; i++) sorted[i] = queue[i];
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (sorted[j] > sorted[j+1]) {
                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;
            }
    printf("SCAN: %d", start);
    int left[n], right[n], lc = 0, rc = 0;
    for (int i = 0; i < n; i++)
        if (sorted[i] < start) left[lc++] = sorted[i];
        else right[rc++] = sorted[i];
    for (int i = lc-1; i >= 0; i--) {
        total += abs(cur - left[i]); cur = left[i]; printf(" -> %d", cur);
    }
    if (cur != 0) { total += cur; cur = 0; printf(" -> %d", cur); }
    for (int i = 0; i < rc; i++) {
        total += abs(cur - right[i]); cur = right[i]; printf(" -> %d", cur);
    }
    printf(" | Total: %d\n", total);
}

void cscan(int queue[], int n, int start) {
    int total = 0, cur = start;
    int sorted[n];
    for (int i = 0; i < n; i++) sorted[i] = queue[i];
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (sorted[j] > sorted[j+1]) {
                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;
            }
    printf("C-SCAN: %d", start);
    int left[n], right[n], lc = 0, rc = 0;
    for (int i = 0; i < n; i++)
        if (sorted[i] < start) left[lc++] = sorted[i];
        else right[rc++] = sorted[i];
    for (int i = lc-1; i >= 0; i--) {
        total += abs(cur - left[i]); cur = left[i]; printf(" -> %d", cur);
    }
    if (cur != 0) { total += cur; cur = 0; printf(" -> %d", cur); }
    printf(" -> jump"); total += DISK_MAX - 1; cur = DISK_MAX - 1;
    for (int i = rc-1; i >= 0; i--) {
        total += abs(cur - right[i]); cur = right[i]; printf(" -> %d", cur);
    }
    printf(" | Total: %d\n", total);
}

void look(int queue[], int n, int start) {
    int total = 0, cur = start;
    int sorted[n];
    for (int i = 0; i < n; i++) sorted[i] = queue[i];
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (sorted[j] > sorted[j+1]) {
                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;
            }
    printf("LOOK: %d", start);
    int left[n], right[n], lc = 0, rc = 0;
    for (int i = 0; i < n; i++)
        if (sorted[i] < start) left[lc++] = sorted[i];
        else right[rc++] = sorted[i];
    for (int i = lc-1; i >= 0; i--) {
        total += abs(cur - left[i]); cur = left[i]; printf(" -> %d", cur);
    }
    for (int i = 0; i < rc; i++) {
        total += abs(cur - right[i]); cur = right[i]; printf(" -> %d", cur);
    }
    printf(" | Total: %d\n", total);
}

void clook(int queue[], int n, int start) {
    int total = 0, cur = start;
    int sorted[n];
    for (int i = 0; i < n; i++) sorted[i] = queue[i];
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (sorted[j] > sorted[j+1]) {
                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;
            }
    printf("C-LOOK: %d", start);
    int left[n], right[n], lc = 0, rc = 0;
    for (int i = 0; i < n; i++)
        if (sorted[i] < start) left[lc++] = sorted[i];
        else right[rc++] = sorted[i];
    for (int i = lc-1; i >= 0; i--) {
        total += abs(cur - left[i]); cur = left[i]; printf(" -> %d", cur);
    }
    if (rc > 0) {
        total += abs(cur - right[rc-1]); cur = right[rc-1]; printf(" -> %d", cur);
        for (int i = rc-2; i >= 0; i--) {
            total += abs(cur - right[i]); cur = right[i]; printf(" -> %d", cur);
        }
    }
    printf(" | Total: %d\n", total);
}

int main() {
    int queue[] = {98, 183, 37, 122, 14, 124, 65, 67};
    int start = 53;
    fcfs(queue, REQUESTS, start);
    scan(queue, REQUESTS, start);
    cscan(queue, REQUESTS, start);
    look(queue, REQUESTS, start);
    clook(queue, REQUESTS, start);
    return 0;
}
```

### Example 2: Estimating Disk Throughput

```c
#include <stdio.h>

int main() {
    double avg_seek = 5.0;          // ms
    double rpm = 7200.0;
    double rot_lat = (60.0 / rpm / 2.0) * 1000.0;  // ms
    double xfer_rate = 150.0;       // MB/s
    int block = 4096;               // bytes

    double xfer_time = (block / 1024.0 / 1024.0) / xfer_rate * 1000.0;
    double random = avg_seek + rot_lat + xfer_time;
    double rand_iops = 1000.0 / random;
    double seq = (1.0 / xfer_rate) * 1000.0;
    double seq_bw = 1.0 / (seq / 1000.0);

    printf("7200 RPM HDD:\n");
    printf("Rotational latency: %.2f ms\n", rot_lat);
    printf("Transfer time (4 KB): %.4f ms\n", xfer_time);
    printf("\nRandom 4 KB: %.3f ms (%.0f IOPS)\n", random, rand_iops);
    printf("Sequential: ~%.0f MB/s\n", seq_bw);
    return 0;
}
```

### Example 3: TypeScript RAID Performance Calculator

```typescript
/**
 * RaidPerformanceCalculator: Models RAID 0, 1, 5, 6, and 10
 * to compute effective capacity, IOPS, throughput, and fault tolerance.
 */
interface RaidConfig {
  level: number;
  numDisks: number;
  diskSizeGB: number;
  diskIOPS: number;
  diskThroughputMBs: number; // sequential MB/s per disk
}

interface RaidResult {
  level: number;
  usableCapacityGB: number;
  capacityEfficiency: number;  // %
  readIOPS: number;
  writeIOPS: number;
  readThroughputMBs: number;
  writeThroughputMBs: number;
  maxFailures: number;
  rebuildTimeHours: number;    // estimated for full disk
}

class RaidCalculator {
  compute(config: RaidConfig): RaidResult {
    const { level, numDisks, diskSizeGB, diskIOPS, diskThroughputMBs } = config;
    const totalRaw = numDisks * diskSizeGB;

    let usableCapacityGB: number;
    let writePenalty: number;
    let maxFailures: number;

    switch (level) {
      case 0: // Striping
        usableCapacityGB = totalRaw;
        writePenalty = 1;
        maxFailures = 0;
        break;
      case 1: // Mirroring
        usableCapacityGB = diskSizeGB; // N/2 disks usable (assuming 2-disk mirror sets)
        writePenalty = 2;
        maxFailures = Math.floor(numDisks / 2);
        break;
      case 5: // Striping with parity
        usableCapacityGB = (numDisks - 1) * diskSizeGB;
        writePenalty = 4; // Read old data, read old parity, write new data, write new parity
        maxFailures = 1;
        break;
      case 6: // Striping with double parity
        usableCapacityGB = (numDisks - 2) * diskSizeGB;
        writePenalty = 6; // Two data reads, two parity reads, two writes
        maxFailures = 2;
        break;
      case 10: // Mirror + Stripe
        usableCapacityGB = (numDisks / 2) * diskSizeGB;
        writePenalty = 2;
        maxFailures = Math.floor(numDisks / 2);
        break;
      default:
        throw new Error(`Unsupported RAID level: ${level}`);
    }

    const capacityEfficiency = (usableCapacityGB / totalRaw) * 100;
    const readIOPS = numDisks * diskIOPS; // All disks can serve reads
    const writeIOPS = (numDisks * diskIOPS) / writePenalty; // Penalty reduces effective write IOPS
    const readThroughputMBs = numDisks * diskThroughputMBs;
    const writeThroughputMBs = (numDisks * diskThroughputMBs) / writePenalty;
    // Estimate rebuild time: reading all data from surviving disks
    const rebuildTimeHours = (usableCapacityGB / diskThroughputMBs) / 3600 * 1.1; // 10% overhead

    return {
      level, usableCapacityGB: Math.round(usableCapacityGB * 10) / 10,
      capacityEfficiency: Math.round(capacityEfficiency * 10) / 10,
      readIOPS: Math.round(readIOPS), writeIOPS: Math.round(writeIOPS),
      readThroughputMBs: Math.round(readThroughputMBs),
      writeThroughputMBs: Math.round(writeThroughputMBs),
      maxFailures, rebuildTimeHours: Math.round(rebuildTimeHours * 10) / 10
    };
  }

  compare(configs: RaidConfig[]): void {
    console.log('='.repeat(120));
    console.log('RAID Level Comparison');
    console.log('='.repeat(120));
    console.log(
      'Level | Disks | Raw(TB) | Usable(TB) | Eff.% | Read IOPS | Write IOPS | Read(MB/s) | Write(MB/s) | MaxFail | Rebuild(h)'
    );
    console.log('-'.repeat(120));

    for (const cfg of configs) {
      const r = this.compute(cfg);
      console.log(
        `  ${String(r.level).padEnd(4)} | ${cfg.numDisks} | ${(cfg.numDisks * cfg.diskSizeGB / 1000).toFixed(1)}TB | ` +
        `${(r.usableCapacityGB / 1000).toFixed(1)}TB | ${r.capacityEfficiency}% | ` +
        `${r.readIOPS.toLocaleString()} | ${r.writeIOPS.toLocaleString()} | ` +
        `${r.readThroughputMBs} | ${r.writeThroughputMBs} | ${r.maxFailures} | ${r.rebuildTimeHours}h`
      );
    }
  }
}

// Example: 6 × 1TB SAS disks, each 180 IOPS, 200 MB/s sequential
const calc = new RaidCalculator();
const configs: RaidConfig[] = [
  { level: 0, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },
  { level: 1, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },
  { level: 5, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },
  { level: 6, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },
  { level: 10, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },
];
calc.compare(configs);
```

> [TIP]
> **SCAN (elevator)** moves in one direction, services all requests, then reverses. **C-SCAN** provides uniform wait times by servicing only in one direction then jumping back.

> [WARNING]
> **SSTF** may cause **starvation** → distant cylinder requests may be delayed indefinitely if nearby requests keep arriving.

> [NOTE]
> **RAID 0** improves performance with no redundancy. **RAID 1** doubles reliability. **RAID 5** balances performance, capacity, and reliability. **RAID 10** combines both for production workloads.

---

## Concept Comparison

| Algorithm | Direction | Starvation | Throughput | Uniformity |
|---------|---------|----------|----------|----------|
| FCFS | Order of arrival | No | Low | Poor |
| SSTF | Closest request | Yes | Moderate | Poor |
| SCAN | One direction then reverse | No | High | Moderate |
| C-SCAN | One direction only | No | High | Best |
| LOOK | Only to last request | No | **Highest** | Moderate |
| C-LOOK | Last request, one direction | No | High | **Best** |

## Quick Reference

| Term | Definition |
|------|------------|
| **Seek Time** | Time to move disk arm to desired cylinder |
| **Rotational Latency** | Time for sector to rotate under head |
| **Cylinder** | Same track across all platter surfaces |
| **SSTF** | Shortest Seek Time First (prone to starvation) |
| **SCAN** | Elevator algorithm (direction-based sweep) |
| **C-SCAN** | Circular SCAN (uniform wait times) |
| **LOOK** | SCAN without end-to-end travel |
| **C-LOOK** | Circular version of LOOK |
| **RAID** | Multiple disks for perf and/or reliability |
| **Swap Space** | Disk space for paging virtual memory |
| **S.M.A.R.T.** | Self-Monitoring Analysis and Reporting Technology |
| **MBR** | Master Boot Record (legacy partition table) |
| **GPT** | GUID Partition Table (modern, >2 TB) |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded | Smartphone |
|-------|----------|--------|---------|----------|
| Disk Sched. | Elevator (deadline) | Noop (DB manages) | C-LOOK | CFQ/BFQ |
| RAID 0 | Not suitable | Scratch | Temp storage | Not production |
| RAID 1 | OS partition | Transaction logs | Critical metadata | Critical data |
| RAID 5/6 | Bulk data | Data tables | Media archive | General storage |

## Chapter Quiz

1. Which algorithm provides most uniform waiting time?
   - a) SSTF
   - b) C-SCAN
   - c) FCFS
   - d) LOOK

2. What does RAID stand for?
   - a) Redundant Array of Independent Disks
   - b) Random Access Integrated Drive
   - c) Reliable Array of Internet Devices
   - d) Rapid Access Information Disk

3. Which RAID level provides striping with parity?
   - a) RAID 0
   - b) RAID 1
   - c) RAID 5
   - d) RAID 10

4. Which scheduling algorithm can cause starvation?
   - a) FCFS
   - b) SSTF
   - c) SCAN
   - d) C-SCAN

5. What is the average rotational latency for a 7200 RPM drive?
   - a) 2 ms
   - b) 4.17 ms
   - c) 8.33 ms
   - d) 5 ms

6. Which RAID level can survive two simultaneous disk failures?
   - a) RAID 0
   - b) RAID 1
   - c) RAID 5
   - d) RAID 6

7. What is the RAID 5 write penalty in terms of I/Os?
   - a) 2
   - b) 3
   - c) 4
   - d) 6

8. Which component dominates disk access time?
   - a) Transfer time
   - b) Seek time
   - c) Rotational latency
   - d) Controller overhead

9. What is the effective capacity of RAID 5 with 6 × 2 TB disks?
   - a) 12 TB
   - b) 10 TB
   - c) 8 TB
   - d) 6 TB

10. Which I/O scheduler is best suited for NVMe SSDs?
    - a) CFQ
    - b) Deadline
    - c) NOOP (or None)
    - d) BFQ

11. What is the total access time for a 7200 RPM drive with 5 ms seek time and 4 KB transfer at 150 MB/s?
    - a) 9.17 ms
    - b) 9.20 ms
    - c) 9.24 ms
    - d) 13.34 ms

12. In GPT, where is the backup partition table stored?
    - a) At the beginning of the disk
    - b) At the end of the disk
    - c) In the MBR
    - d) On a separate disk

13. What is the purpose of Native Command Queuing (NCQ)?
    - a) Enable hot-swapping of drives
    - b) Allow the drive to reorder commands for efficiency
    - c) Provide encryption at the drive level
    - d) Monitor drive health via S.M.A.R.T.

14. Which term describes a group of sectors as the smallest file system allocation unit?
    - a) Track
    - b) Cylinder
    - c) Cluster (block)
    - d) Platter

15. What is the RAID 6 write penalty?
    - a) 2 I/Os
    - b) 4 I/Os
    - c) 6 I/Os
    - d) 8 I/Os

**Answers:** 1-b, 2-a, 3-c, 4-b, 5-b, 6-d, 7-c, 8-b, 9-b, 10-c, 11-c, 12-b, 13-b, 14-c, 15-c

## Summary

- Disk access time = seek + rotation + transfer; seek dominates (~5â€“10 ms)
- SCAN/C-SCAN and LOOK/C-LOOK reduce total arm movement compared to FCFS
- C-SCAN and C-LOOK provide uniform waiting times; LOOK achieves lowest seek (208)
- SSTF can cause **starvation** → unsuitable for production kernels
- RAID 0 (striping) improves performance; RAID 1 (mirroring) improves reliability
- RAID 5/6 use parity for space-efficient redundancy; RAID 10 combines both
- RAID 5 has a 4 I/O write penalty; RAID 6 has 6 I/O write penalty
- Bad blocks handled by sector sparing (remapping) or sector slipping
- Swap space extends virtual memory onto disk; partition vs file tradeoffs
- Linux provides CFQ, Deadline, NOOP, BFQ, Kyber I/O schedulers
- Windows uses Storport framework with multi-level I/O priority

## Exercises

### Basic


1. Given a disk with 200 cylinders, compute total head movement for FCFS and SCAN for queue: [86, 147, 12, 95, 177, 23, 55, 104]. Head starts at 50 moving toward 0.
2. What are the three components of disk access time? Which is typically the largest?
3. Describe RAID 0, RAID 1, and RAID 5. Effective capacity with 4 Ã— 1 TB disks for each?

### Intermediate


4. Write a complete disk scheduling simulator supporting FCFS, SCAN, C-SCAN, LOOK, C-LOOK. Generate random queues and compare total seek, wait variance, max wait.
5. Explain the RAID 5 write penalty. Why is RAID 5 write slower than a single disk? Use a 4-disk example.
6. Compare SSTF and SCAN. Under what conditions does SSTF starve a request? Propose a fix.

### Advanced


7. Write a benchmark measuring random vs sequential I/O using O_DIRECT. Test 512B, 4 KB, 64 KB, 1 MB. Report IOPS and throughput.
8. Research Linux CFQ and Deadline I/O schedulers. Write a test mixing random reads with sequential writes. Compare latency/throughput under each.
9. Implement a FUSE file system presenting a RAID 0 view of two directories. Stripe data across both in 4 KB chunks.
10. Compute RAID reliability: For a 6-disk RAID 5 array with 6 TB disks, MTTF=800K hr, rebuild=16 hr, what is the probability of data loss within 5 years?

### Additional Exercises


11. **IOPS vs throughput benchmark**: Write a program that measures both IOPS (random 4 KB reads) and sequential throughput (1 MB reads) on a real disk. Use direct I/O (O_DIRECT on Linux) to bypass the page cache. Run 5 iterations and report min, max, avg, and standard deviation.

12. **Disk scheduling visualizer**: Extend the disk scheduling simulator to generate Gantt-chart-style output showing when each request is serviced under FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK. For a given queue, print a horizontal timeline showing service order and wait times.

13. **SSTF starvation detector**: Write a simulation that demonstrates SSTF starvation. Generate a continuous stream of requests in cylinders 0-50 while a single request sits at cylinder 199. Count how many local requests arrive before the distant request is serviced. Show that with SCAN, the distant request is always serviced within one sweep.

14. **RAID reliability calculator**: Extend the TypeScript RaidCalculator to compute probability of data loss over a given time period using the formula: P_loss = 1 - e^(-N * (N-1) * MTTF_disk * rebuild_time / MTTF²). Compare RAID 5, RAID 6, and RAID 10 for a 10-disk array over 5 years.

15. **Swap sizing simulator**: Write a program that monitors system memory usage over time (using `/proc/meminfo` on Linux) and recommends swap size based on: peak memory pressure, hibernation requirements, and a configurable safety margin (default 20%). Test by running a memory-intensive workload and measuring peak swap usage.

16. **Zoned storage simulator**: Implement a simplified ZNS (Zoned Namespaces) SSD simulator in TypeScript. Create zones of 256 MB each. Each zone must be written sequentially and reset before rewriting. Simulate a workload of random writes and measure write amplification factor (WAF = total physical writes / total logical writes).

17. **NVMe vs HDD latency analyzer**: Create a mathematical model comparing NVMe SSD latency vs HDD latency. For HDD: seek(5ms) + rotation(4.17ms) + transfer(0.04ms) = 9.2ms. For NVMe: queue_dispatch(10μs) + NAND_access(50μs) + transfer(5μs) = 65μs. Compute the ratio and show how queue depth affects performance for each.

18. **blk-mq simulator**: Implement a simplified multi-queue block layer. Create N software submission queues (one per CPU core), each with a lockless ring buffer. A hardware dispatch queue pulls from software queues in round-robin. Measure throughput scaling from 1 to 32 cores vs a single-queue implementation.

19. **Power-aware disk scheduler**: Design and implement a disk scheduler that batches idle periods to allow the disk to enter a low-power state. If the queue is empty for longer than `idle_threshold` (e.g., 100ms), send the disk to sleep. Wake on next I/O. Measure power savings vs throughput impact using a simulation.

20. **SMR drive simulator**: Implement a shingled magnetic recording (SMR) drive simulator where tracks overlap. Writes to a zone must be sequential. Random writes require a read-merge-write cycle. Track the number of drive-managed vs host-managed operations and compute the write amplification for a random workload.

### A.1 SSTF Starvation → Full Worked Example


Consider this dynamic scenario where requests arrive over time:

**Initial state:** Head at 50. Queue initially empty.

| Time | Arriving Request | Current Queue | SSTF Choice | SCAN Choice (toward 0) |
|------|-----------------|---------------|-------------|----------------------|
| t=0 | 55 | [55] | 55 (dist 5) | Next in sweep (will get on way to 0 then reverse) |
| t=1 | 53 | [53] | 53 (dist 2) | → |
| t=2 | 1000 | [1000] | ignores | → |
| t=3 | 52 | [52, 1000] | 52 (dist 1) | → |
| t=4 | 54 | [54, 1000] | 54 (dist 2) | → |
| t=5 | 51 | [51, 1000] | 51 (dist 3) | → |
| t=6 | 1001 | [1001, 1000] | 1001 (dist 950) vs 1000 (dist 949) → 1000 | → |
| ... | ... | ... | ... | ... |

**SSTF result:** Request 1000 keeps being deferred because closer requests keep arriving. It may never be serviced.

**SCAN result:** After servicing the 50â€“55 cluster on the initial sweep toward 0, the arm reaches 0, reverses, and sweeps upward past 50, 51, 52, 53, 54, 55, then continues to 1000. The distant request **is serviced** on the return sweep → eventually.

### A.2 Head Movement Calculation Formula


For any scheduling algorithm, the total seek distance is:

```
total_seek = Î£(i=1 to n) |pos(i-1) - pos(i)|

where:
  pos(0) = initial head position
  pos(i) = cylinder of the i-th serviced request
  n = number of requests in queue
```

For FCFS, pos(i) follows arrival order. For SCAN/LOOK, pos(i) follows the direction-based sweep order after sorting.

### A.3 Average Seek Time Approximation


The average seek distance â‰ˆ (1/3) Ã— full stroke. If full stroke = 199 cylinders, avg seek â‰ˆ 66 cylinders. This is used in analytical modeling when exact request distribution is unknown.

---

## Appendix B: Disk Scheduling with Multiple Disks (Modern Context)

### B.1 NUMA-Aware Scheduling


Modern multi-socket servers may have storage controllers attached to specific NUMA nodes. Scheduling must consider:
- Which NUMA node owns the storage controller
- Cost of cross-NUMA memory access for DMA buffers
- Pin I/O completion interrupts to the same NUMA node as the requesting process

### B.2 Multi-Queue Block Layer (blk-mq)


Linux's multi-queue block layer (blk-mq) replaces the single-queue elevator for fast devices (NVMe, multi-core systems):
- One software queue per CPU core (lockless submission)
- One hardware dispatch queue per device
- Scales to millions of IOPS on NVMe SSDs
- Schedulers (kyber, bfq, mq-deadline) plug into blk-mq

### B.3 NVMe SSD Considerations


NVMe SSDs have no seek time → scheduling algorithms that minimize seek (SCAN, C-SCAN, LOOK) provide ZERO benefit:
- Request reordering wastes CPU cycles needlessly
- NOOP or FCFS is optimal
- Key metrics: queue depth (typical 64K commands), parallel I/O via multiple queues
- NUMA affinity and interrupt coalescing matter more than LBA ordering

---

## Appendix C: Additional Utility Functions

### C.1 Compute Seek Distance in Python (All Algorithms)


```python
def compute_seek(path: list) -> int:
    """Compute total seek distance from a path of cylinder positions."""
    return sum(abs(path[i] - path[i-1]) for i in range(1, len(path)))

# Benchmark
queue = [98, 183, 37, 122, 14, 124, 65, 67]
head = 53

# FCFS path
fcfs_path = [head] + queue
print(f"FCFS seek: {compute_seek(fcfs_path)}")  # 640

# SSTF path (from trace)
sstf_path = [53, 65, 67, 37, 14, 98, 122, 124, 183]
print(f"SSTF seek: {compute_seek(sstf_path)}")  # 236

# SCAN path (toward 0)
scan_path = [53, 37, 14, 0, 65, 67, 98, 122, 124, 183]
print(f"SCAN seek: {compute_seek(scan_path)}")  # 236

# C-SCAN path
cscan_path = [53, 37, 14, 0, 199, 183, 124, 122, 98, 67, 65]
print(f"C-SCAN seek: {compute_seek(cscan_path)}")  # 386

# LOOK path
look_path = [53, 37, 14, 65, 67, 98, 122, 124, 183]
print(f"LOOK seek: {compute_seek(look_path)}")  # 208

# C-LOOK path
clook_path = [53, 37, 14, 183, 124, 122, 98, 67, 65]
print(f"C-LOOK seek: {compute_seek(clook_path)}")  # 326
```

### C.2 Random Queue Generator


```python
import random

def generate_queue(size: int, max_cylinder: int = 199) -> list:
    return [random.randint(0, max_cylinder) for _ in range(size)]

# Example: generate 20 random requests
queue = generate_queue(20)
head = random.randint(0, 199)
print(f"Queue: {queue}")
print(f"Head: {head}")
```

### C.3 Full Simulation Runner


```python
import random
from typing import Callable

def fcfs(req: list, head: int) -> int:
    total, cur = 0, head
    for r in req: total += abs(cur - r); cur = r
    return total

def sstf(req: list, head: int) -> int:
    total, cur = 0, head
    pending = req[:]
    while pending:
        nearest = min(pending, key=lambda r: abs(cur - r))
        total += abs(cur - nearest); cur = nearest
        pending.remove(nearest)
    return total

def scan(req: list, head: int, ds: int = 200, tz: bool = True) -> int:
    total, cur = 0, head
    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    if tz:
        for r in reversed(L): total += abs(cur - r); cur = r
        if cur != 0: total += cur; cur = 0
        for r in R: total += abs(cur - r); cur = r
    return total

def cscan(req: list, head: int, ds: int = 200) -> int:
    total, cur = 0, head
    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    for r in reversed(L): total += abs(cur - r); cur = r
    if cur != 0: total += cur; cur = 0
    total += (ds - 1); cur = ds - 1
    for r in reversed(R): total += abs(cur - r); cur = r
    return total

def look(req: list, head: int) -> int:
    total, cur = 0, head
    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    for r in reversed(L): total += abs(cur - r); cur = r
    for r in R: total += abs(cur - r); cur = r
    return total

def clook(req: list, head: int) -> int:
    total, cur = 0, head
    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]
    for r in reversed(L): total += abs(cur - r); cur = r
    if R:
        far = R[-1]; total += abs(cur - far); cur = far
        for r in reversed(R[:-1]): total += abs(cur - r); cur = r
    return total

algorithms = {
    'FCFS': fcfs,
    'SSTF': sstf,
    'SCAN': scan,
    'C-SCAN': lambda r, h: cscan(r, h, 200),
    'LOOK': look,
    'C-LOOK': clook,
}

# Simulate 100 random workloads and compare
for _ in range(5):
    req = generate_queue(10)
    head = random.randint(0, 199)
    print(f"\nQueue: {req}, Head: {head}")
    results = {name: algo(req, head) for name, algo in algorithms.items()}
    best = min(results, key=results.get)
    for name, seek in sorted(results.items(), key=lambda x: x[1]):
        print(f"  {name:8s}: {seek:4d} cylinders {' ← best' if name == best else ''}")
```

---

## Appendix D: Additional RAID Details

### D.1 Nested RAID Levels


Beyond the standard levels, nested RAID combines multiple levels:

| Nested RAID | Composition | Min Disks | Use Case |
|------------|-------------|-----------|----------|
| **RAID 01 (0+1)** | Striped mirrors | 4 | Similar to RAID 10 but less tolerant |
| **RAID 10 (1+0)** | Mirrored stripes (most common) | 4 | Production databases, VMs |
| **RAID 50 (5+0)** | Striped RAID 5 arrays | 6 | Large-scale storage with parity |
| **RAID 60 (6+0)** | Striped RAID 6 arrays | 8 | Maximum reliability at scale |

**RAID 01 vs RAID 10:** RAID 10 can survive multiple failures (one per mirror). RAID 01 can only survive one failure total (if the wrong disk fails, the entire RAID 0 is lost).

### D.2 RAID Controller Cache Strategies


| Strategy | Description | Risk |
|----------|-------------|------|
| **Write-Through** | Write acknowledged only after written to disk | Safer; slower writes |
| **Write-Back** | Write acknowledged when cached (flushed later) | Faster; data loss on power loss without BBU |
| **Write-Back with BBU** | Battery-backed cache; survives power loss | Best perf + safety |
| **Write-Back with NVDIMM** | Non-volatile DIMM; survives power loss without battery | Modern replacement for BBU |
| **Read-Ahead** | Cache predicts sequential access; prefetches | Wastes bandwidth on random I/O |

### D.3 RAID Rebuild Time Factors


Rebuild time depends on:
- **Disk capacity**: Larger disks take longer (4 TB vs 24 TB)
- **Disk speed**: 7200 RPM vs 15000 RPM
- **Array load**: Rebuild competes with production I/O
- **RAID level**: RAID 5/6 rebuild requires parity recomputation; RAID 1/10 is simple copy
- **Controller resources**: Dedicated XOR engine vs CPU-driven

Typical rebuild speeds: 50â€“200 MB/s. For a 4 TB disk: 4 TB / 100 MB/s â‰ˆ 40,960 seconds â‰ˆ 11.4 hours.

### D.4 RAID vs Erasure Coding


For large-scale storage (>100 disks), erasure coding (Reed-Solomon, LRC) is preferred over RAID:

| Aspect | Traditional RAID | Erasure Coding |
|--------|-----------------|----------------|
| **Parity overhead** | Integer (1 or 2 disks) | Configurable (e.g., 10+2 = 20%) |
| **Failure tolerance** | 1â€“2 disks | Configurable (any k of n) |
| **Storage efficiency** | 50â€“80% (RAID 5/6) | 70â€“90% (configurable) |
| **Rebuild IO** | Full disk read | Distributed across all disks |
| **Use case** | <24 disks per array | 100+ disk object stores (Ceph, MinIO) |

---

## Appendix E: Advanced Topics

### E.1 Log-Structured File Systems


Log-structured file systems (LFS, F2FS) treat the entire disk as a circular log:
- Writes are always sequential (append to log) → no seeks on write
- Reads may require random access (lookup in map)
- Garbage collection reclaims old versions
- Modern implementations: F2FS (Flash-Friendly File System), ZFS (COW + log)

### E.2 Zoned Storage (SMR, ZNS)


**SMR (Shingled Magnetic Recording):**
- Tracks overlap like roof shingles (higher density)
- Sequential write required within zones; random write requires read-merge-write
- Drive-managed (transparent to OS) or host-managed (OS must manage writes)

**ZNS (Zoned Namespaces) SSDs:**
- NVMe SSDs organized into zones (typically 256 MBâ€“1 GB each)
- Each zone must be written sequentially and erased before rewriting
- Reduces write amplification vs conventional SSDs
- Requires zone-aware file systems (F2FS with ZNS support)

### E.3 Persistent Memory (PMEM)


Intel Optane DC Persistent Memory (discontinued) and CXL-attached memory:
- Byte-addressable, near-DRAM speeds
- Persist data across power cycles (like storage)
- Accessed via load/store instructions (no block I/O stack)
- File systems: PMFS, NOVA, ext4-DAX, XFS-DAX
- Eliminates page cache double-buffering

---

## Appendix F: Formulas Reference

| Formula | Expression | Example |
|---------|-----------|---------|
| Rotational latency (avg) | (60 / RPM) / 2 | (60/7200)/2 = 4.17 ms |
| Transfer time | BlockSize / TransferRate | 4 KB / 150 MB/s = 0.027 ms |
| Total access time | Seek + Rotation + Transfer | 5 + 4.17 + 0.027 = 9.2 ms |
| Random IOPS | 1000 / TotalAccessMs | 1000 / 9.2 â‰ˆ 109 IOPS |
| Seek distance (FCFS) | Î£|prev âˆ’ next| | 640 cylinders |
| RAID 5 capacity | (Nâˆ’1) Ã— disk_size | 3 Ã— 1 TB = 3 TB |
| RAID 6 capacity | (Nâˆ’2) Ã— disk_size | 2 Ã— 1 TB = 2 TB |
| RAID 10 capacity | (N/2) Ã— disk_size | 2 Ã— 1 TB = 2 TB |
| RAID 5 write penalty | 4 I/Os per logical write | 1 logical → 4 physical |
| RAID 6 write penalty | 6 I/Os per logical write | 1 logical → 6 physical |
| MTTF RAID 0 | M / N | 1M/4 = 250K hr |
| Average seek distance | ~1/3 Ã— full stroke | 199/3 â‰ˆ 66 |

## Appendix G: Glossary of Terms

| Term | Full Form | Definition |
|------|-----------|------------|
| **ATA** | Advanced Technology Attachment | Parallel interface standard for connecting storage devices |
| **SATA** | Serial ATA | Serial replacement for ATA; 6 Gbps max |
| **SAS** | Serial Attached SCSI | Enterprise storage interface; supports higher reliability and dual-porting |
| **NVMe** | Non-Volatile Memory Express | Protocol designed for SSDs over PCIe; low latency, high queue depth |
| **LBA** | Logical Block Address | Linear addressing scheme for disk sectors (replaces CHS) |
| **CHS** | Cylinder-Head-Sector | Legacy addressing using physical geometry |
| **RPM** | Revolutions Per Minute | Spin speed of disk platters |
| **IOPS** | Input/Output Operations Per Second | Performance metric for random access |
| **MTTF** | Mean Time To Failure | Average operational lifetime of a component |
| **MTBF** | Mean Time Between Failures | Average time between failures (includes repair time) |
| **S.M.A.R.T.** | Self-Monitoring Analysis and Reporting Technology | Drive health monitoring system |
| **ECC** | Error-Correcting Code | Redundant data that allows recovery of corrupted sectors |
| **BBU** | Battery Backup Unit | Protects RAID cache contents during power loss |
| **NVDIMM** | Non-Volatile DIMM | Memory that retains data after power loss |
| **DMA** | Direct Memory Access | Allows hardware to transfer data without CPU involvement |
| **TCQ** | Tagged Command Queuing | Native SCSI command reordering at disk level |
| **NCQ** | Native Command Queuing | SATA equivalent of TCQ |
| **blk-mq** | Block Multi-Queue | Linux multi-queue block layer for fast devices |
| **CFQ** | Completely Fair Queueing | Linux I/O scheduler with per-process fairness |
| **BFQ** | Budget Fair Queueing | Enhanced CFQ with better latency guarantees |
| **SMR** | Shingled Magnetic Recording | High-density HDD technology with sequential write zones |
| **ZNS** | Zoned Namespaces | NVMe SSD zone interface for reduced write amplification |

## Appendix H: Quick Problem Solving

### H.1 Given a request sequence, find total seek


**Problem:** Queue [86, 147, 12, 95, 177, 23, 55, 104], head=50, disk 0â€“199. Compute FCFS.

**Solution:**
```
50 → 86 (36) → 147 (61) → 12 (135) → 95 (83) → 177 (82) → 23 (154) → 55 (32) → 104 (49)
Total = 36+61+135+83+82+154+32+49 = 632 cylinders
```

### H.2 Given head movement, find scheduling algorithm


**Problem:** Head=50, requests [10, 80, 20, 90]. Path: 50 → 20 → 10 → 80 → 90. Total=120. Which algorithm?

**Solution:** This is LOOK (going toward 0 first). The arm goes to 20 then 10 (last left), reverses to 80 then 90 (right). No travel to disk end 0 or 199. SCAN would have gone 50 → 20 → 10 → 0 → 80 → 90 (total 150). The difference of 30 is the unnecessary 10→0→80 trip.

### H.3 Disk access time calculation


**Problem:** 10000 RPM drive, avg seek=6 ms, transfer rate=200 MB/s, block=8 KB. Random vs sequential?

**Solution:**
```
Rotational latency = (60/10000)/2 = 3 ms
Transfer = 8 KB / 200 MB/s = 0.04 ms
Random = 6 + 3 + 0.04 = 9.04 ms → 110 IOPS
Sequential (1 MB) = 3 + 0 + 5.12 ms = 8.12 ms → 123 MB/s
```

### H.4 RAID capacity calculation


**Problem:** 6 Ã— 2 TB disks in RAID 5 vs RAID 10 vs RAID 6.

**Solution:**
```
RAID 5: (6-1)/6 Ã— 12 TB = 10 TB usable (83%)
RAID 6: (6-2)/6 Ã— 12 TB = 8 TB usable (67%)
RAID 10: 6/2 Ã— 2 TB = 6 TB usable (50%)
```

### H.5 Swap sizing decision


**Problem:** 32 GB RAM Linux workstation used for development. How much swap?

**Solution:** 4â€“8 GB swap. Enough for emergency headroom and hibernation. The system should rarely swap; if swap usage exceeds 1 GB regularly, add more RAM.

---

## Appendix I: Key Takeaways by Topic

### Disk Structure

- Seek time dominates access latency (70â€“80% of total)
- Sequential I/O is ~1000Ã— more efficient than random I/O on HDDs
- Cylinder = same track across all platters (move head once, access all surfaces)

### Disk Scheduling

- FCFS: Simple but worst seek; no starvation
- SSTF: Better seek but dangerous → **starvation** makes it unsuitable for production
- SCAN: Direction-based sweep; good seek; non-uniform wait
- C-SCAN: Uniform wait at cost of extra jump (seek 386 vs 208)
- LOOK: **Best seek** (208); no unnecessary end-to-end travel
- C-LOOK: Circular variant; between C-SCAN and LOOK in performance
- For SSDs: NOOP or FCFS → mechanical seek doesn't exist

### Disk Management

- MBR: Legacy, â‰¤2 TB, â‰¤4 partitions, no redundancy
- GPT: Modern, >2 TB, 128+ partitions, backup at disk end
- Bad blocks: S.M.A.R.T. → increasing reallocations = drive failing

### RAID

- RAID 0: Speed, no safety (scratch only)
- RAID 1: Safety, 50% capacity (OS, logs)
- RAID 5: Balance, 4 I/O write penalty (bulk storage)
- RAID 6: Dual protection, 6 I/O write penalty (large arrays)
- RAID 10: Speed + safety (production databases → most common enterprise choice)

### Swap Space

- Partition: Faster, fixed size, needed for hibernation on many OS
- File: Flexible, resizable, slightly slower
- Rule: If you're using swap regularly, add more RAM
- Swappiness (Linux): Default 60; lower = less aggressive swapping

### Real Systems

- Linux: CFQ (fairness), Deadline (predictable latency), NOOP (SSD/fast devices)
- Windows: Storport driver framework with I/O priority tiers
- blk-mq: Modern Linux multi-queue for NVMe (>1M IOPS)
- RAID controllers: Write-back with BBU/NVDIMM for best performance
