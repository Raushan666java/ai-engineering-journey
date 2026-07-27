---
id: 11-dma
slug: /c-programming/11-dma
title: "Chapter 11: Dynamic Memory Allocation"
sidebar_label: "Chapter 11: Dynamic Memory Allocation"
sidebar_position: 11
---
# Chapter 11: Dynamic Memory Allocation

> **Previous:** [Structures and Unions](./10-structures-unions.md) | **Next:** [File Handling](./12-file-handling.md)

## Learning Objectives

- Distinguish between static, automatic, and dynamic memory allocation
- Understand the complete memory layout of a C program (text, data, BSS, heap, stack)
- Allocate memory at runtime using `malloc`, `calloc`, and `realloc`
- Release memory with `free` to prevent leaks
- Detect and avoid memory leaks, dangling pointers, double-free errors, and memory corruption
- Use Valgrind to verify memory correctness
- Answer interview questions on dynamic memory with confidence
- Recognize real-world allocation patterns in systems programming

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/c-programming/11-dma/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/c-programming/11-dma/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/c-programming/11-dma/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/c-programming/11-dma/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/c-programming/11-dma/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/c-programming/11-dma/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Prerequisites

| Concept | Where Covered |
|---------|---------------|
| Pointers (address-of, dereference, pointer arithmetic) | [Chapter 9](./09-pointers.md) |
| Arrays (declaration, indexing) | [Chapter 6](./06-arrays.md) |
| Functions (pass by value, return types) | [Chapter 8](./08-functions.md) |
| `sizeof` operator | [Chapter 6](./06-arrays.md) |
| Structures | [Chapter 10](./10-structures-unions.md) |

### Chapter at a Glance


| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Static vs Dynamic | Static: fixed at compile time; Dynamic: runtime-controlled | Stack for small/fixed; Heap for large/variable |
| Memory Layout | Text(Code) + Data + BSS + Heap + Stack | Heap grows up, Stack grows down → collision = stack overflow |
| malloc | Allocates uninitialized raw bytes from heap | Returns `void *` or NULL; always check return |
| calloc | Allocates + zero-initializes | Safer for arrays; slightly slower due to zeroing |
| realloc | Resizes existing allocation | May relocate → use temp pointer to avoid leak |
| free | Returns memory to heap | Set pointer to NULL after free to prevent dangling |
| Memory Leak | Allocated memory with no remaining reference | Every malloc must have matching free |
| Dangling Pointer | Pointer to freed memory | NULL after free; never trust a freed pointer |
| Memory Corruption | Writing outside allocated bounds | Bounds-check all array accesses |

```mermaid
flowchart LR
    A["11.1 Static vs Dynamic"] --> B["11.2 Stack vs Heap"]
    B --> C["11.3 Memory Layout"]
    C --> D["11.4 malloc"]
    D --> E["11.5 calloc"]
    E --> F["11.6 realloc"]
    F --> G["11.7 free"]
    G --> H["11.8 Comparison Tables"]
    H --> I["11.9 Memory Leak"]
    I --> J["11.10 Dangling Pointer"]
    J --> K["11.11 Memory Corruption"]
    K --> L["11.12 Dynamic Arrays"]
    L --> M["11.13 Valgrind"]
    M --> N["11.14 Best Practices"]
    N --> O["11.15 Interview Corner"]
    O --> P["11.16 Applications"]
    P --> Q["Summary & Exercises"]
```
![C Dynamic Memory Allocation: malloc, calloc, realloc, free and Common Errors](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-11-dma.png)

---

## 11.1 Static vs Dynamic Memory Allocation

### Real-World Analogy: Library vs Warehouse


Think of a **library** (static allocation) vs a **warehouse** (dynamic allocation).

A **library** has fixed shelves built into the walls. Before the library opens, the architect decides exactly how many shelves are needed, where they go, and what they hold. You cannot add a new shelf in the middle of the day → the entire structure is fixed at construction time. This is **static memory**: the compiler (the architect) decides the size and lifetime of every variable before the program runs.

A **warehouse** is different. When inventory arrives, you call the warehouse manager, reserve a pallet location, use it, and return it when done. If more inventory arrives tomorrow, you reserve a different spot. The warehouse can handle arbitrary amounts of material → as long as space exists. This is **dynamic memory**: you request memory at runtime, use it, and release it explicitly.

### What Is Static Allocation?


Static allocation means the compiler determines the size and lifetime of a variable at compile time. Global variables and `static` local variables are statically allocated. Their memory is reserved in the data or BSS segment for the entire program lifetime.

```c
#include <stdio.h>

int global_var = 42;          /* Static → lives in .data segment */
static int file_static = 10;  /* Static → file scope, .data segment */

void func(void) {
    static int call_count = 0; /* Static → retains value across calls */
    call_count++;
    printf("Called %d times\n", call_count);
}

int main(void) {
    int local = 5;             /* Automatic → lives on stack */
    func();
    func();
    func();
    return 0;
}
```

**Output:**
```
Called 1 times
Called 2 times
Called 3 times
```

### What Is Automatic Allocation?


Local variables (declared inside a function without `static`) are **automatic**. Memory is allocated on the stack when the function is entered and freed when the function returns. The size must be known at compile time.

```c
void example(void) {
    int arr[100];    /* Automatic → 100 ints on stack (400 bytes) */
    /* arr is freed when example() returns */
}
```

### What Is Dynamic Allocation?


Dynamic allocation requests memory from the **heap** at runtime using `malloc`, `calloc`, or `realloc`. The programmer controls when memory is allocated and freed. The size does not need to be known at compile time.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n;
    printf("How many integers? ");
    scanf("%d", &n);

    int *arr = (int*)malloc(n * sizeof(int));  /* Dynamic → size known only at runtime */
    if (arr == NULL) {
        fprintf(stderr, "malloc failed\n");
        return 1;
    }

    for (int i = 0; i < n; i++) arr[i] = i;
    printf("Last element: %d\n", arr[n - 1]);

    free(arr);   /* Must free explicitly */
    return 0;
}
```

**Output:**
```
How many integers? 10
Last element: 9
```

### Numbered Steps for Dynamic Memory Management


**Step 1:** Determine the size needed (use `sizeof` to remain portable).
**Step 2:** Call `malloc`/`calloc`/`realloc` with the computed size.
**Step 3:** Check the return value → NULL means allocation failed.
**Step 4:** Use the allocated memory (read/write via the pointer).
**Step 5:** Call `free` when done to return memory to the heap.
**Step 6:** Set the pointer to NULL to prevent use-after-free.

### Pseudocode for Dynamic Allocation


```
FUNCTION allocate_array(count):
    ptr <- malloc(count * sizeof(element))
    IF ptr == NULL:
        PRINT "Allocation failed"
        RETURN NULL
    END IF
    FOR i FROM 0 TO count-1:
        ptr[i] <- initial_value
    END FOR
    RETURN ptr
END FUNCTION

FUNCTION safe_free(ptr):
    IF ptr != NULL:
        free(ptr)
        ptr <- NULL
    END IF
END FUNCTION
```

### Dry Run: Dynamic Array Lifecycle


```
Initial state:
  heap: [empty]
  stack: [main()]

Step 1 → int n = 3;
  stack: [main(): n = 3]

Step 2 → int *arr = malloc(3 * sizeof(int));
  heap:  [0x1000: ??, ??, ??]
  stack: [main(): n = 3, arr = 0x1000]

Step 3 → arr[0] = 10; arr[1] = 20; arr[2] = 30;
  heap:  [0x1000: 10, 20, 30]

Step 4 → free(arr); arr = NULL;
  heap:  [0x1000: (freed)]
  stack: [main(): n = 3, arr = NULL]
```

### Static vs Dynamic Allocation → Comparison


| Aspect | Static Allocation | Automatic (Stack) Allocation | Dynamic (Heap) Allocation |
|--------|------------------|------------------------------|---------------------------|
| **When allocated** | Compile time | Function entry | Runtime (explicit call) |
| **When freed** | Program exit | Function return | Explicit `free` call |
| **Size known** | At compile time | At compile time | At runtime |
| **Lifetime** | Entire program | Function scope | Until freed |
| **Resizeable?** | No | No | Yes (via realloc) |
| **Speed** | Fastest (no runtime overhead) | Very fast (stack pointer adjust) | Slow (system call, freelist search) |
| **Typical size** | Smallâ€“medium | Small (KBâ€“MB, stack size limited) | Large (up to virtual memory limit) |
| **Risk** | None | Stack overflow | Leaks, fragmentation, dangling pointers |
| **Example** | `static int x;` | `int x;` | `malloc(n)` |

### Complexity Analysis


| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Static allocation | O(1) compile-time | O(1) | No runtime cost |
| Automatic allocation | O(1) | O(1) | Stack pointer adjustment → nanosecond scale |
| Dynamic allocation (malloc) | O(1) amortized | O(1) | Freelist search; may involve brk/sbrk syscall |
| Dynamic deallocation (free) | O(1) amortized | O(1) | Returns block to freelist; may coalesce |

### Advantages and Disadvantages


| Aspect | Static/Automatic | Dynamic |
|--------|-----------------|---------|
| **Speed** | Instant → no runtime overhead | Slower → heap management overhead |
| **Safety** | Automatic lifetime management | Manual → leaks and dangling pointers are easy to introduce |
| **Flexibility** | Fixed size → cannot grow | Can grow, shrink, and be freed at will |
| **Memory** | Stack limited (typically 1â€“8 MB per thread) | Heap limited by system RAM + swap |
| **Control** | None → compiler manages everything | Full control over lifetime |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Stack overflow (infinite recursion) | Program crashes with segfault | Use heap for deep recursion; increase stack size |
| Static array too large (e.g., `int a[10000000]`) | Program may not link or may crash | Use heap for large allocations |
| Forgetting to free | Memory leak → program consumes memory until OOM | Ensure every malloc has matching free |
| Double free | Undefined behavior → heap corruption | Set ptr to NULL after free |
| malloc(0) | Implementation-defined (may return NULL or unique ptr) | Avoid allocating zero bytes |

---

## 11.2 Stack vs Heap

### Real-World Analogy: Hotel vs Warehouse


The **stack** is like a **hotel**. Guests (functions) check in (are called), occupy a room (stack frame), and check out (return). The front desk knows exactly who is in which room at any moment. Rooms are assigned in strict order → the last guest to check out frees the newest room. Everything is neat, predictable, and automatic.

The **heap** is like a **warehouse**. You reserve a pallet slot (allocate), use it for as long as you need, and tell the warehouse manager when you are done (free). Different parts of the warehouse are used at different times, possibly in any order. Keeping track of what is reserved and what is free is the programmer's job.

### Stack: Fast, Automatic, Fixed-Size


The stack is a LIFO (Last-In-First-Out) data structure. Each function call pushes a **stack frame** containing local variables, return address, and saved registers. Returning pops the frame.

```c
#include <stdio.h>

void baz(int x) {
    int z = x + 1;   /* Lives in baz's stack frame */
    printf("%d\n", z);
}

void bar(void) {
    int y = 10;      /* Lives in bar's stack frame */
    baz(y);
}

void foo(void) {
    int x = 5;       /* Lives in foo's stack frame */
    bar();
}

int main(void) {
    foo();
    return 0;
}
```

**Stack state during execution:**

```
main() called:     [main frame]
foo() called:      [main frame] -> [foo frame: x=5]
bar() called:      [main frame] -> [foo frame: x=5] -> [bar frame: y=10]
baz() called:      [main frame] -> [foo frame: x=5] -> [bar frame: y=10] -> [baz frame: z=11]
baz() returns:     [main frame] -> [foo frame: x=5] -> [bar frame: y=10]
bar() returns:     [main frame] -> [foo frame: x=5]
foo() returns:     [main frame]
main() returns:    (empty)
```

### Heap: Flexible, Manual, Potentially Large


The heap is a pool of memory managed by the allocator (`malloc`/`free`). Blocks can be allocated and freed in any order.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *a = (int*)malloc(sizeof(int));    /* Allocate on heap */
    int *b = (int*)malloc(sizeof(int));
    *a = 10;
    *b = 20;
    printf("a=%d b=%d\n", *a, *b);
    free(a);   /* Free in any order → not LIFO */
    free(b);
    return 0;
}
```

**Heap state:**

```
After malloc(a):  heap: [a_block: 10][free space...]
After malloc(b):  heap: [a_block: 10][b_block: 20][free space...]
After free(a):    heap: [FREE][b_block: 20][free space...]
After free(b):    heap: [FREE][FREE][free space...]  (may coalesce)
```

### Stack vs Heap → Full Comparison


| Aspect | Stack | Heap |
|--------|-------|------|
| **Size** | Small (1â€“8 MB default per thread on Linux/Windows) | Large (up to virtual address space → GB on 64-bit) |
| **Speed** | Fast → single instruction to adjust stack pointer (~ns) | Slow → freelist search, possible syscall (~Î¼s) |
| **Lifetime** | Automatic → variable dies when function returns | Manual → variable lives until `free` |
| **Management** | Compiler-managed (push/pop frames) | Programmer-managed (malloc/free) |
| **Fragmentation** | None → LIFO ensures contiguous frames | External fragmentation → freed blocks scatter |
| **Allocation** | Compile-time known size | Runtime-determined size |
| **Grows** | Downward (toward lower addresses) | Upward (toward higher addresses) |
| **Thread safety** | Per-thread (each thread has its own stack) | Shared → needs synchronization |
| **Data sharing** | Hard → cannot return pointer to local variable | Easy → pointers persist across functions |
| **Risk** | Stack overflow (deep recursion, large locals) | Memory leaks, dangling pointers, heap corruption |

### Stack Allocation: Numbered Steps


**Step 1:** Function is called.
**Step 2:** Stack pointer (SP) decrements by frame size.
**Step 3:** Return address and saved registers are pushed.
**Step 4:** Local variables occupy fixed offsets from SP.
**Step 5:** Function executes, using locals.
**Step 6:** Function returns → SP is restored to pre-call value (all locals freed instantly).

### Heap Allocation: Numbered Steps


**Step 1:** Call `malloc(n)`.
**Step 2:** Allocator searches freelist for a block >= n bytes.
**Step 3:** If found, block is removed from freelist; metadata header is written.
**Step 4:** If not found, allocator calls `sbrk`/`brk` (Unix) or `VirtualAlloc` (Windows) to grow the heap.
**Step 5:** Pointer past the header is returned to the caller.
**Step 6:** Caller uses the memory.
**Step 7:** Call `free(ptr)` → allocator looks up header, returns block to freelist, may coalesce adjacent free blocks.

### Dry Run: Stack vs Heap Timeline


| Time | Stack State | Heap State | Code |
|------|-------------|------------|------|
| T0 | `[main()]` | empty | |
| T1 | `[main()][func(): n=5]` | empty | `void func(int n)` called |
| T2 | `[main()][func(): n=5]` | `0x1000: [malloc'd block, 20 bytes]` | `int *p = malloc(n * sizeof(int))` |
| T3 | `[main()][func(): n=5]` | `0x1000: [1,2,3,4,5]` | Loop fills array |
| T4 | `[main()]` | `0x1000: (freed)` | `free(p);` function returns |

### Complexity


| Operation | Stack Time | Heap Time |
|-----------|------------|-----------|
| Allocate | O(1) → SP adjustment | O(1) amortized → freelist best-fit/worst-fit search |
| Free | O(1) → SP restore | O(1) amortized → coalesce neighbors |
| Access | O(1) → SP + offset | O(1) → pointer dereference |

### Advantages and Disadvantages


| Aspect | Stack | Heap |
|--------|-------|------|
| **Speed** | Extremely fast | Slower by orders of magnitude |
| **Convenience** | Automatic | Manual → error-prone |
| **Flexibility** | Fixed size at compile time | Dynamic size at runtime |
| **Capacity** | Severely limited | System memory limit |
| **Lifetime control** | None → function-scope only | Full control |
| **Memory locality** | Excellent (contiguous, cached) | Poor (scattered blocks) |

### Edge Cases


| Scenario | Stack Behavior | Heap Behavior |
|----------|---------------|---------------|
| Deep recursion | Stack overflow → segfault | Works fine (if each frame allocates separately) |
| Large local array (int a[1000000]) | Stack overflow (~4 MB) | Works fine on heap |
| Returning pointer to local | Dangling pointer → UB | Safe (heap memory persists) |
| Multithreading | Each thread has its own stack (fixed size) | Heap is shared → must synchronize |
| Memory exhaustion | Stack overflow → immediate crash | malloc returns NULL → checkable |

---

## 11.3 Memory Layout of a C Program

A running C program's memory is divided into five segments. Understanding this layout is essential for debugging, optimizing, and avoiding memory errors.

```
High address (0xFFFFFFFF on 32-bit / 0x7FFFFFFF on Linux x86-64)
+------------------+
|      Stack       |  ← grows downward (local variables, function frames)
|        ↓         |
|                  |
|        ↑         |
|      Heap        |  → grows upward (dynamic allocations)
+------------------+
|      BSS         |  Uninitialized static variables (zero-filled at load)
+------------------+
|      Data        |  Initialized static variables (read/write)
+------------------+
|      Text (Code) |  Program instructions (read-only, often shared)
+------------------+
 Low address (0x00400000 on 32-bit)
```

### Segment Details


| Segment | Contents | Read/Write? | Lifetime | Example |
|---------|----------|-------------|----------|---------|
| **Text (Code)** | Machine instructions | Read-only (usually) | Program lifetime | `int main(void) { ... }` compiled code |
| **Data** | Initialized global/static variables | Read/write | Program lifetime | `int x = 42;` `static char buf[100] = "hello";` |
| **BSS** | Uninitialized global/static variables (Block Started by Symbol) | Read/write | Program lifetime | `int arr[1000];` `static int count;` |
| **Heap** | Dynamically allocated memory | Read/write | Until freed | `malloc(100)` |
| **Stack** | Local variables, function frames, return addresses | Read/write | Function scope | `int local;` `double d;` |

### Code Example: Observing the Memory Layout


```c
#include <stdio.h>
#include <stdlib.h>

/* Text segment: compiled code of functions lives here */

/* Data segment: initialized globals */
int global_init = 100;
static int static_init = 200;

/* BSS segment: uninitialized globals (zero-filled) */
int global_uninit;
static int static_uninit;

int main(void) {
    /* Stack segment: local variables */
    int local = 10;
    static int local_static = 300;  /* Data segment → not stack! */
    const char *str = "Hello";      /* str is on stack; "Hello" literal is in .rodata (text) */

    /* Heap segment */
    int *heap_var = (int*)malloc(sizeof(int));
    if (heap_var == NULL) return 1;
    *heap_var = 50;

    printf("Address ranges (approximate):\n");
    printf("  Text (main):   %p\n", (void*)main);
    printf("  Data (init):   %p  (global_init=%d)\n", (void*)&global_init, global_init);
    printf("  Data (static): %p  (static_init=%d)\n", (void*)&static_init, static_init);
    printf("  BSS (uninit):  %p\n", (void*)&global_uninit);
    printf("  BSS (static):  %p\n", (void*)&static_uninit);
    printf("  Stack (local): %p  (local=%d)\n", (void*)&local, local);
    printf("  Stack (str):   %p  (str=%s)\n", (void*)&str, str);
    printf("  Heap:          %p  (*heap_var=%d)\n", (void*)heap_var, *heap_var);

    free(heap_var);
    return 0;
}
```

**Output (typical on Linux x86-64 → addresses will vary):**
```
Address ranges (approximate):
  Text (main):   0x401126
  Data (init):   0x40401c  (global_init=100)
  Data (static): 0x404020  (static_init=200)
  BSS (uninit):  0x404040
  BSS (static):  0x404044
  Stack (local): 0x7fffffffde4c  (local=10)
  Stack (str):   0x7fffffffde50  (str=Hello)
  Heap:          0x5555555592a0  (*heap_var=50)
```

Observe the pattern:
- **Text** is at the lowest address (~0x40...).
- **Data/BSS** is above text (~0x40...).
- **Heap** is at a much higher address (~0x555...).
- **Stack** is at the highest user address (~0x7fff...), growing downward.

### Why the Separation Matters


| Why | Explanation |
|-----|-------------|
| **Prevent code corruption** | Text is read-only → accidental writes to code cause segfaults immediately |
| **Share code** | Text can be shared between processes → only one copy of `libc.so` in RAM |
| **Zero-fill BSS** | Uninitialized globals don't take space in the executable → only their size is recorded |
| **Heap collision** | If heap grows into stack (or vice versa), the program crashes → "out of memory" |
| **Buffer overflow detection** | Stack canaries and guard pages protect against writes beyond local arrays |

### Dry Run: Address Verification


Assume a Linux process with this approximate layout:

```
0x400000 → 0x401000: Text segment (code)
0x404000 → 0x405000: Data segment (initialized globals)
0x405000 → 0x406000: BSS segment (uninitialized globals)
0x1000000 → 0x2000000: Heap (grows upward)
0x7ffffffde000 → 0x7fffffffffff: Stack (grows downward)
```

| Variable | Segment | Address range | Size |
|----------|---------|---------------|------|
| `main()` function code | Text | 0x400000â€“0x4000ff | ~256 bytes |
| `global_init = 100` | Data | 0x404000â€“0x404003 | 4 bytes |
| `global_uninit` | BSS | 0x405000â€“0x405003 | 4 bytes |
| `p = malloc(1000)` → p | Heap | 0x1000100â€“0x10004e7 | 1008 bytes (8 header + 1000 data) |
| `local = 10` | Stack | 0x7ffffffde040â€“0x7ffffffde043 | 4 bytes |

---

## 11.4 `malloc` → Memory Allocation

### Real-World Analogy: Warehouse Pallet Reservation


You walk into a warehouse and tell the manager: "I need a pallet that can hold 400 kg." The manager finds an empty spot, writes the address on a slip of paper, and hands it to you. The pallet may have leftover scraps from the last shipment → it is **not cleaned**. You must clear it yourself before putting your items on it. When you are done, you return the slip and the manager marks the spot as available again.

`malloc` is that manager. It finds a free block, returns its address, and does **not** clean (initialize) the memory.

### Signature


```c
void *malloc(size_t size);
```

- `size`: number of bytes to allocate.
- **Returns**: pointer to the first byte of the allocated block, or NULL on failure.
- The returned pointer is aligned to at least 16 bytes (on 64-bit systems) so it can hold any data type.

### Numbered Steps to Use malloc


**Step 1:** Compute the total bytes needed using `sizeof(type) * count`.
**Step 2:** Call `malloc(total_bytes)`.
**Step 3:** Check if the return is NULL → if so, handle the error.
**Step 4:** Optionally cast the `void*` to the desired type (required in C++, optional in C).
**Step 5:** Use the memory (initialize it first → it is uninitialized!).
**Step 6:** Call `free(ptr)` when done.

### Pseudocode


```
FUNCTION malloc_safe(size):
    ptr <- malloc(size)
    IF ptr == NULL:
        PRINT "malloc of", size, "bytes failed"
        EXIT or return NULL
    END IF
    RETURN ptr
END FUNCTION
```

### Basic Example


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *arr = (int*)malloc(n * sizeof(int));

    if (arr == NULL) {
        fprintf(stderr, "malloc failed for %d integers\n", n);
        return 1;
    }

    /* Initialize → malloc returns uninitialized memory */
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    printf("Array contents: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    free(arr);
    return 0;
}
```

**Output:**
```
Array contents: 10 20 30 40 50
```

### Allocating for Any Type


```c
#include <stdio.h>
#include <stdlib.h>

struct Point {
    int x;
    int y;
};

int main(void) {
    /* Allocate a single struct */
    struct Point *p = (struct Point*)malloc(sizeof(struct Point));
    if (p == NULL) return 1;
    p->x = 10;
    p->y = 20;
    printf("Point: (%d, %d)\n", p->x, p->y);
    free(p);

    /* Allocate an array of structs */
    struct Point *points = (struct Point*)malloc(3 * sizeof(struct Point));
    if (points == NULL) return 1;
    for (int i = 0; i < 3; i++) {
        points[i].x = i * 5;
        points[i].y = i * 10;
    }
    for (int i = 0; i < 3; i++) {
        printf("points[%d]: (%d, %d)\n", i, points[i].x, points[i].y);
    }
    free(points);

    return 0;
}
```

**Output:**
```
Point: (10, 20)
points[0]: (0, 0)
points[1]: (5, 10)
points[2]: (10, 20)
```

### malloc(0) → What Happens?


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    void *p = malloc(0);
    printf("malloc(0) returned: %p\n", p);
    /* p may be NULL or a unique non-NULL pointer */
    free(p);  /* free(NULL) is safe; free(unique_ptr) is also safe */
    return 0;
}
```

**Output (implementation-defined):**
```
malloc(0) returned: 0x5555555592a0
```

The C standard says `malloc(0)` may return NULL **or** a valid non-NULL pointer that cannot be dereferenced. Both are conforming.

### Dry Run: malloc Tracking


| Step | Code | Heap State | Note |
|------|------|------------|------|
| 0 | → | [FREE: 0x1000â€“0x1FFF (4 KB available)] | Empty heap |
| 1 | `int *a = malloc(4)` | [BLOCK: 0x1000â€“0x1007 (8 bytes: 4 hdr + 4 data)] [FREE: remainder] | Allocator rounds up, adds header |
| 2 | `*a = 42` | [BLOCK: a=42] [FREE] | Data written |
| 3 | `int *b = malloc(8)` | [BLOCK: a=42] [BLOCK: b: 0x1008â€“0x1017 (8 hdr+8 data)] [FREE] | Second allocation |
| 4 | `free(a)` | [FREE: 0x1000â€“0x1007] [BLOCK: b] [FREE] | a's block returned to freelist |
| 5 | `int *c = malloc(4)` | [BLOCK: c: 0x1000 (reused)] [BLOCK: b] [FREE] | Freelist block reused |
| 6 | `free(b); free(c)` | [FREE: 0x1000â€“0x1017 (coalesced)] [FREE: remainder] | Adjacent blocks coalesced |

### Complexity Analysis


| Operation | Time Complexity | Space Complexity | Notes |
|-----------|----------------|------------------|-------|
| `malloc(n)` | O(1) amortized | O(n) + O(1) header overhead | Freelist search; may trigger `brk` syscall |
| Access `ptr[i]` | O(1) | → | Pointer arithmetic |
| Free `ptr` | O(1) amortized | O(1) | Coalescing adjacent free blocks is O(1) with boundary tags |
| Allocation from freelist | O(freelist size) worst-case | → | Best-fit may scan entire freelist; segregated lists are O(1) |

### Advantages and Disadvantages of malloc


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| **Flexibility** | Allocate any size at runtime | Overhead: each allocation has a metadata header (8â€“16 bytes) |
| **Lifetime** | Persists until freed | Manual management → easy to forget free |
| **Reusability** | Freed blocks are reused | Fragmentation → free blocks may be too small for future allocations |
| **Portability** | Standard C library → everywhere | System call overhead for initial heap growth |
| **Alignment** | Returns pointers aligned for any type | Wasted space if you allocate many tiny objects (each has header) |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| **malloc returns NULL** | Allocation failed → out of memory | **Always check**: `if (ptr == NULL) handle_error();` |
| **malloc(0)** | May return NULL or unique non-NULL pointer | Avoid allocating 0 bytes; treat as error |
| **malloc(SIZE_MAX)** | Always fails (impossible allocation) | Check for overflow when computing size |
| **Dereferencing NULL** | Segfault (undefined behavior) | Never dereference without NULL check |
| **Integer overflow in size** | `malloc(n * sizeof(int))` where n is huge → wraps around | Use calloc (checks overflow) or check manually: `if (n > SIZE_MAX / sizeof(int)) error;` |
| **malloc very large size** | May succeed (overcommit), crash on access | Check return; handle gracefully |
| **Reading uninitialized memory** | Garbage values (undefined behavior) | Initialize after malloc (or use calloc) |

### Integer Overflow Prevention


```c
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main(void) {
    size_t n = 1000000000;  /* 1 billion */
    size_t elem_size = sizeof(int);  /* 4 bytes */

    /* Manual overflow check */
    if (n > SIZE_MAX / elem_size) {
        fprintf(stderr, "Integer overflow → allocation too large\n");
        return 1;
    }

    int *arr = (int*)malloc(n * elem_size);
    if (arr == NULL) {
        fprintf(stderr, "malloc failed\n");
        return 1;
    }

    printf("Successfully allocated %zu bytes\n", n * elem_size);
    free(arr);
    return 0;
}
```

**Output:**
```
Successfully allocated 4000000000 bytes
```

Note: `calloc` performs this overflow check internally → another reason to prefer it for arrays.

---

## 11.5 `calloc` → Contiguous Allocation

### Real-World Analogy: Clean Pallet


`malloc` is like getting a pallet that still has dirt from the previous shipment → you must sweep it before use. `calloc` is like requesting a **clean pallet** → the warehouse manager washes it before giving it to you. You pay a small time penalty for the cleaning, but you know exactly what you are getting.

### Signature


```c
void *calloc(size_t count, size_t element_size);
```

- `count`: number of elements.
- `element_size`: size of each element in bytes.
- **Returns**: pointer to zero-initialized memory, or NULL on failure.
- **Total size** = `count * element_size`. calloc checks for overflow during multiplication.

### Numbered Steps to Use calloc


**Step 1:** Decide how many elements of a given type you need.
**Step 2:** Call `calloc(count, sizeof(type))`.
**Step 3:** Check if the return is NULL.
**Step 4:** All bytes are guaranteed to be zero → no separate initialization needed.
**Step 5:** Use the memory.
**Step 6:** Call `free(ptr)` when done.

### Pseudocode


```
FUNCTION calloc_safe(count, element_size):
    ptr <- calloc(count, element_size)
    IF ptr == NULL:
        PRINT "calloc failed for", count, "elements of size", element_size
        RETURN NULL
    END IF
    RETURN ptr
END FUNCTION
```

### Basic Example


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *arr = (int*)calloc(n, sizeof(int));

    if (arr == NULL) {
        fprintf(stderr, "calloc failed\n");
        return 1;
    }

    /* Already zero-initialized → no need to set to 0 manually */
    for (int i = 0; i < n; i++) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    /* Fill with values */
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 5;
    }

    for (int i = 0; i < n; i++) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    free(arr);
    return 0;
}
```

**Output:**
```
arr[0] = 0
arr[1] = 0
arr[2] = 0
arr[3] = 0
arr[4] = 0
arr[0] = 5
arr[1] = 10
arr[2] = 15
arr[3] = 20
arr[4] = 25
```

### calloc vs malloc + memset


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
    int n = 1000000;

    /* Method 1: malloc + memset (two passes over memory) */
    int *arr1 = (int*)malloc(n * sizeof(int));
    if (arr1 == NULL) return 1;
    memset(arr1, 0, n * sizeof(int));  /* O(n) zeroing pass */

    /* Method 2: calloc (single pass, may use virtual-memory tricks) */
    int *arr2 = (int*)calloc(n, sizeof(int));
    if (arr2 == NULL) { free(arr1); return 1; }

    /* Note: calloc may be faster for large allocations because the OS
       can provide zero-filled pages without actually touching them
       (demand-paging). malloc + memset forces every page to be committed. */

    printf("arr1[0] = %d, arr2[0] = %d\n", arr1[0], arr2[0]);

    free(arr1);
    free(arr2);
    return 0;
}
```

**Output:**
```
arr1[0] = 0, arr2[0] = 0
```

### Why Zero-Initialization Matters


1. **Predictability** → No garbage values to surprise you.
2. **Security** → Sensitive data left by previous allocations is wiped.
3. **Default values** → Structs with zero defaults work correctly.
4. **Hash tables** → Zero often means "empty slot."
5. **Bitmaps and flags** → All bits start cleared.

### calloc for Struct Arrays


```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[32];
    double salary;
} Employee;

int main(void) {
    int n = 3;
    Employee *emps = (Employee*)calloc(n, sizeof(Employee));

    if (emps == NULL) return 1;

    /* All fields are zero-initialized */
    printf("Before assignment:\n");
    for (int i = 0; i < n; i++) {
        printf("  emps[%d]: id=%d, name=\"%s\", salary=%.2f\n",
               i, emps[i].id, emps[i].name, emps[i].salary);
    }

    /* Assign values */
    emps[0].id = 101;
    snprintf(emps[0].name, sizeof(emps[0].name), "Alice");
    emps[0].salary = 75000.0;

    emps[1].id = 102;
    snprintf(emps[1].name, sizeof(emps[1].name), "Bob");
    emps[1].salary = 82000.0;

    emps[2].id = 103;
    snprintf(emps[2].name, sizeof(emps[2].name), "Charlie");
    emps[2].salary = 95000.0;

    for (int i = 0; i < n; i++) {
        printf("  emps[%d]: id=%d, name=\"%s\", salary=%.2f\n",
               i, emps[i].id, emps[i].name, emps[i].salary);
    }

    free(emps);
    return 0;
}
```

**Output:**
```
Before assignment:
  emps[0]: id=0, name="", salary=0.00
  emps[1]: id=0, name="", salary=0.00
  emps[2]: id=0, name="", salary=0.00
  emps[0]: id=101, name="Alice", salary=75000.00
  emps[1]: id=102, name="Bob", salary=82000.00
  emps[2]: id=103, name="Charlie", salary=95000.00
```

### Dry Run: calloc Allocation


| Step | Code | Heap Content | Note |
|------|------|-------------|------|
| 1 | `int *a = calloc(3, 4)` | Allocates 12 bytes | Zeroing pass sets all 12 bytes to 0 |
| 2 | After allocation | `[0x1000: 00 00 00 00 | 00 00 00 00 | 00 00 00 00]` | All zeros |
| 3 | `a[0] = 10` | `[0x1000: 0A 00 00 00 | 00 00 00 00 | 00 00 00 00]` | First element set |
| 4 | `a[1] = 20` | `[0x1000: 0A 00 00 00 | 14 00 00 00 | 00 00 00 00]` | Second element set |
| 5 | `free(a)` | Block returned to freelist | |

### Complexity


| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| `calloc(n, size)` | O(n) (zeroing) + O(1) (allocation) | O(n * size) | Zeroing is O(n) → visible for large allocations |
| calloc vs malloc + memset | Equal asymptotically | Equal | calloc may be faster for large blocks (OS-level zero pages) |

### Advantages and Disadvantages


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| **Safety** | All bytes are zero → predictable initial state | Slightly slower than malloc due to zeroing pass |
| **Convenience** | No separate memset needed | Overkill if you immediately overwrite all bytes |
| **Overflow check** | Calloc checks `count * size` for overflow | malloc + manual multiply may overflow silently |
| **OS optimization** | Large calloc gets zero pages from OS without touching them | Small calloc still zeros memory the same way |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| calloc(0, 4) | May return NULL or unique non-NULL pointer | Avoid allocating zero elements |
| calloc(SIZE_MAX, 4) | Returns NULL (overflow) → never succeeds | Check return |
| calloc(1000, 0) | Implementation-defined | Avoid zero element size |
| Overwriting calloc'd memory immediately | Waste → you zero then overwrite | Use malloc if you write every byte anyway |
| calloc for large struct with padding | Padding bytes are zeroed too | Good for determinism; slight overhead for large structs |

---

## 11.6 `realloc` → Resizing Memory

### Real-World Analogy: Expanding a Warehouse Pallet


You have a pallet that holds 10 boxes. Suddenly you need space for 20 boxes. You call the warehouse manager: "I need to expand my pallet." The manager checks if there is empty space **right after** your pallet. If yes, he extends the same pallet. If no, he finds a larger spot elsewhere, moves all your boxes to the new spot, and tells you the new address. The old spot is freed automatically.

**Key insight:** After `realloc`, the old pointer may be dead → always use the new pointer returned by `realloc`.

### Signature


```c
void *realloc(void *ptr, size_t new_size);
```

- `ptr`: pointer to previously allocated block (or NULL to behave like malloc).
- `new_size`: desired new size in bytes.
- **Returns**: pointer to the resized block (possibly at a new address), or NULL on failure.
- If `ptr` is NULL, `realloc` behaves like `malloc(new_size)`.
- If `new_size` is 0, behavior is implementation-defined (often like `free(ptr)`).
- If `realloc` fails (returns NULL), **the original block is still valid**.

### The Critical Rule: Always Use a Temporary Pointer


```c
/* WRONG → leaks original block if realloc fails */
arr = (int*)realloc(arr, new_size * sizeof(int));

/* CORRECT → temporary pointer preserves original on failure */
int *temp = (int*)realloc(arr, new_size * sizeof(int));
if (temp == NULL) {
    /* arr still points to the original block → handle error */
    free(arr);
    return 1;
}
arr = temp;
```

### Numbered Steps to Use realloc


**Step 1:** Compute the new size.
**Step 2:** Call `realloc(ptr, new_size)` and assign the result to a **temporary** pointer.
**Step 3:** Check if the temporary is NULL → original block is still intact.
**Step 4:** On success, the original `ptr` is now invalid → use the temporary going forward.
**Step 5:** On failure, free the original pointer if you cannot proceed.
**Step 6:** Continue using the resized block.

### Pseudocode


```
FUNCTION safe_realloc(ptr, new_size):
    temp <- realloc(ptr, new_size)
    IF temp == NULL:
        PRINT "realloc failed → original data preserved"
        RETURN ptr    // caller can free later
    END IF
    RETURN temp
END FUNCTION
```

### Basic Example: Growing and Shrinking


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    /* Start with 3 elements */
    int *arr = (int*)malloc(3 * sizeof(int));
    if (arr == NULL) return 1;

    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;

    printf("Original (3 elements): %d %d %d\n", arr[0], arr[1], arr[2]);
    printf("Address: %p\n", (void*)arr);

    /* Grow to 6 elements */
    int *temp = (int*)realloc(arr, 6 * sizeof(int));
    if (temp == NULL) {
        printf("realloc failed\n");
        free(arr);
        return 1;
    }
    arr = temp;

    arr[3] = 40;
    arr[4] = 50;
    arr[5] = 60;

    printf("Expanded (6 elements):");
    for (int i = 0; i < 6; i++) printf(" %d", arr[i]);
    printf("\nNew address: %p\n", (void*)arr);

    /* Shrink back to 4 elements */
    temp = (int*)realloc(arr, 4 * sizeof(int));
    if (temp == NULL) {
        /* On shrink failure, we usually still have the original → rare */
        printf("Shrink realloc failed → continuing with original\n");
    } else {
        arr = temp;
    }

    printf("Shrunk (4 elements):");
    for (int i = 0; i < 4; i++) printf(" %d", arr[i]);
    printf("\n");

    free(arr);
    return 0;
}
```

**Output:**
```
Original (3 elements): 10 20 30
Address: 0x5555555592a0
Expanded (6 elements): 10 20 30 40 50 60
New address: 0x555555559600
Shrunk (4 elements): 10 20 30 40
```

### realloc with NULL (Acts Like malloc)


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    /* realloc(NULL, size) is equivalent to malloc(size) */
    int *arr = (int*)realloc(NULL, 5 * sizeof(int));
    if (arr == NULL) return 1;

    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\n");

    free(arr);
    return 0;
}
```

**Output:**
```
0 10 20 30 40
```

### Dry Run: realloc In-Place vs Move


**Case 1: In-place expansion (no move needed)**

```
Before:
  [BLOCK A: 32 bytes at 0x1000] [FREE: 64 bytes at 0x1020]
  
realloc(A, 64):
  Allocator checks block after A → 64 bytes free, enough for 32 more
  Expands A in-place: [BLOCK A: 64 bytes at 0x1000]
  Returns same address 0x1000
  Data at 0x1000â€“0x101F preserved, 0x1020â€“0x103F now also part of block
```

**Case 2: Move (no room after)**

```
Before:
  [BLOCK A: 32 bytes at 0x1000] [BLOCK B: 32 bytes at 0x1020] [FREE: rest]

realloc(A, 64):
  Block B occupies 0x1020 → cannot expand in place
  Searches freelist for 64+ byte block
  Finds free block at 0x2000
  Copies 32 bytes from 0x1000 to 0x2000
  Frees old block A (adds to freelist)
  Returns new address 0x2000
  arr must be updated to new address
```

### Dry Run Trace Table


| Step | Operation | Heap State | arr value |
|------|-----------|------------|-----------|
| 0 | `arr = malloc(12)` | [arr: 12 bytes at 0x1000] [FREE] | 0x1000 |
| 1 | Fill 10, 20, 30 | [arr: 10,20,30 at 0x1000] [FREE] | 0x1000 |
| 2 | `temp = realloc(arr, 24)` | Searches → block at 0x1010 is occupied | → |
| 3 | realloc moves data to 0x2000 | [FREE: 0x1000] [other block] [arr: 10,20,30,__,__ at 0x2000] | → |
| 4 | `arr = temp` | same | 0x2000 |
| 5 | Fill arr[3], arr[4], arr[5] | [arr: 10,20,30,40,50,60 at 0x2000] | 0x2000 |

### Complexity


| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| realloc (in-place expansion) | O(1) | O(new_size) | No data copying |
| realloc (move) | O(old_size) + O(1) | O(new_size) | Must memcpy old data to new location |
| realloc (shrink in-place) | O(1) | O(new_size) | Truncates; may release memory to OS |
| realloc(NULL, size) | O(1) | O(size) | Same as malloc |

### Advantages and Disadvantages


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| **Convenience** | Single call resizes and preserves data | Hides complexity → programmer may forget old pointer is dead |
| **Efficiency** | In-place expansion avoids copy | Move requires O(n) copy of old data |
| **Flexibility** | Can grow, shrink, or start fresh (NULL) | Failure handling requires temporary pointer pattern |
| **Memory savings** | Shrinking releases unused memory | May not actually release to OS (held in process heap) |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| **realloc returns NULL** | Original block is preserved → NOT freed | Use temp pointer pattern |
| **realloc(ptr, 0)** | Implementation-defined (often frees ptr) | Avoid → use free explicitly |
| **realloc(NULL, size)** | Same as malloc(size) | Useful for first allocation in generic code |
| **realloc with invalid ptr** | Undefined behavior (corruption or crash) | Ensure ptr came from malloc/calloc/realloc |
| **realloc shrinking** | Excess bytes are freed | Shrinking may not release memory to OS |
| **realloc very large size** | May fail (return NULL) | Handle failure gracefully |
| **realloc of freed pointer** | Undefined behavior (double free equivalent) | Never realloc after free |

### Detecting realloc Move


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *arr = (int*)malloc(4 * sizeof(int));
    if (arr == NULL) return 1;
    printf("Initial address: %p\n", (void*)arr);

    /* Repeatedly grow and check if address changed */
    for (int cap = 4; cap <= 1024; cap *= 2) {
        int *temp = (int*)realloc(arr, cap * sizeof(int));
        if (temp == NULL) { free(arr); return 1; }
        if (temp != arr) {
            printf("Moved at capacity %d: %p -> %p\n", cap / 2, (void*)arr, (void*)temp);
        }
        arr = temp;
    }

    free(arr);
    return 0;
}
```

**Output (typical):**
```
Initial address: 0x5555555592a0
Moved at capacity 4: 0x5555555592a0 -> 0x555555559600
```
---

## 11.7 `free` → Deallocating Memory

### Real-World Analogy: Returning the Warehouse Pallet


You have finished using your warehouse pallet. You call the manager and say: "I'm done with pallet at location A12." The manager marks the spot as available and may merge it with adjacent empty spots. If you try to use the pallet after returning it, you may find someone else's boxes there → or the spot may have been reassigned entirely.

`free` tells the heap manager: "I'm done with this block." After calling `free`, the pointer is **dangling** → dereferencing it is undefined behavior.

### Signature


```c
void free(void *ptr);
```

- `ptr`: pointer previously returned by `malloc`, `calloc`, or `realloc`.
- If `ptr` is NULL, `free` does nothing (safe call).
- After `free`, the pointer is invalid. Using it causes undefined behavior.

### Numbered Steps to Use free


**Step 1:** Ensure `ptr` is non-NULL (safe → free(NULL) is a no-op).
**Step 2:** Call `free(ptr)`.
**Step 3:** Set `ptr = NULL` to prevent accidental reuse (use-after-free prevention).
**Step 4:** Do NOT use `ptr` after freeing.

### Pseudocode


```
FUNCTION safe_free(ptr_pointer):
    // ptr_pointer is a pointer to the pointer (double pointer)
    IF *ptr_pointer != NULL:
        free(*ptr_pointer)
        *ptr_pointer <- NULL
    END IF
END FUNCTION
```

### Basic Example


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p = (int*)malloc(sizeof(int));
    if (p == NULL) return 1;

    *p = 42;
    printf("Before free: %d\n", *p);

    free(p);       /* Return memory to heap */
    /* p is now a dangling pointer → do NOT dereference */

    /* Best practice: nullify after free */
    p = NULL;

    /* Later in the code... */
    if (p != NULL) {
        *p = 99;  /* This code is never reached → safe */
    }

    return 0;
}
```

**Output:**
```
Before free: 42
```

### Safe Free Macro


```c
#include <stdio.h>
#include <stdlib.h>

#define SAFE_FREE(ptr) do { free(ptr); (ptr) = NULL; } while(0)

int main(void) {
    int *a = (int*)malloc(sizeof(int));
    int *b = (int*)malloc(sizeof(int));
    if (!a || !b) return 1;

    *a = 10; *b = 20;

    SAFE_FREE(a);  /* frees and sets a = NULL */
    SAFE_FREE(b);

    /* SAFE_FREE is safe to call again (free(NULL) is no-op) */
    SAFE_FREE(a);
    SAFE_FREE(b);

    printf("Freed successfully\n");
    return 0;
}
```

**Output:**
```
Freed successfully
```

### What Happens Inside free?


When you call `free(ptr)`, the heap manager:

1. Looks up the block metadata (stored just before the returned pointer).
2. Checks for corruption (e.g., has the metadata been overwritten?).
3. Adds the block back to the freelist.
4. Checks if adjacent blocks are also free → if so, coalesces them into a larger free block.
5. (Optionally) releases large free blocks at the end of the heap back to the OS via `sbrk` or `munmap`.

### Memory Header Layout


```
  Pointer returned to caller →► +----------+
                                |  user     |
                                |  data     |
                                |  ...      |
   Block start →► +----------+  +----------+
                  |  size    |  ← metadata (4â€“16 bytes)
                  |  flags   |
                  |  prev/next| (for freelist linking)
                  +----------+
```

This is why `free` does not need a size parameter → the size is stored in the metadata header before the returned pointer.

### Dry Run: Free and Coalesce


**Before free:**
```
[BLOCK A: 32 bytes at 0x1000] [BLOCK B: 32 bytes at 0x1020] [FREE: 64 bytes at 0x1040]
```

**free(BLOCK B):**
```
Allocator gets pointer to B's data (0x1020)
Reads metadata at 0x1018: size=32, in-use
Marks block as free
Checks neighbors:
  A is in-use → no coalesce left
  C is free → coalesce right!
Combined: [BLOCK A: 32] [FREE: 96 bytes at 0x1020 (contiguous)]
```

**After free and coalesce:**
```
[BLOCK A: 32 bytes at 0x1000] [FREE: 96 bytes at 0x1020]
```

### Complexity


| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| `free(ptr)` | O(1) amortized | O(1) | + O(1) for coalescing adjacent free blocks |
| Coalescing | O(1) | O(1) | Boundary tags (Knuth) enable O(1) coalesce |
| `free(NULL)` | O(1) | O(1) | No-op → safe to call |

### Advantages and Disadvantages


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| **Simplicity** | Single parameter → libc tracks size | No built-in safety → dangling pointers are easy to create |
| **Coalescing** | Adjacent free blocks merge automatically | Cannot control when memory returns to OS |
| **NULL safety** | free(NULL) is a no-op → always safe | Many programmers forget to nullify after free |
| **Performance** | O(1) amortized | Frequent free + malloc causes fragmentation |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| **Double free** | Undefined behavior → heap corruption, crash, or security hole | Set ptr = NULL after each free |
| **Free of non-malloc pointer** | Undefined behavior → corrupts allocator metadata | Only free pointers from malloc/calloc/realloc |
| **Free of stack variable** | Undefined behavior → typically immediate crash | Never free what you did not malloc |
| **Use-after-free** | Undefined behavior → may work, may crash, may corrupt | NULL the pointer; never dereference after free |
| **Free of partial pointer** (e.g., `arr + 1`) | Undefined behavior → metadata lookup fails | Only free the exact pointer returned by malloc |
| **Free(NULL)** | Safe → no-op | Good for cleanup code |
| **Free in signal handler** | Generally unsafe (malloc is not async-signal-safe) | Avoid; set a flag instead |

### Common Mistakes


```c
/* Mistake 1: Double free */
void double_free(void) {
    int *p = malloc(sizeof(int));
    free(p);
    free(p);  /* UNDEFINED BEHAVIOR → heap corruption */
}

/* Mistake 2: Free of stack variable */
void free_stack(void) {
    int x = 42;
    int *p = &x;
    free(p);  /* UNDEFINED BEHAVIOR → p was not from malloc */
}

/* Mistake 3: Free of pointer arithmetic offset */
void free_offset(void) {
    int *arr = malloc(10 * sizeof(int));
    free(arr + 5);  /* UNDEFINED BEHAVIOR → not the address malloc returned */
}

/* Mistake 4: Use after free */
void use_after_free(void) {
    int *p = malloc(sizeof(int));
    *p = 42;
    free(p);
    *p = 100;  /* UNDEFINED BEHAVIOR → writing to freed memory */
}

/* Mistake 5: Forgetting to free (memory leak) */
void memory_leak(void) {
    int *p = malloc(1000);
    /* no free → 1000 bytes leaked every call */
}
```

---

## 11.8 malloc vs calloc vs realloc → Full Comparison

### Comparison Table


| Feature | `malloc` | `calloc` | `realloc` |
|---------|----------|----------|-----------|
| **Purpose** | Allocate raw memory | Allocate + zero-initialize | Resize existing allocation |
| **Arguments** | `(size_t size)` | `(size_t count, size_t elem_size)` | `(void *ptr, size_t new_size)` |
| **Initialization** | Uninitialized (garbage) | Zero-filled | Preserves old data (up to min(old,new)) |
| **Overflow check** | No → must check manually | Yes → checks `count * elem_size` overflow | No → must check manually |
| **NULL on failure** | Yes | Yes | Yes (original block preserved) |
| **Speed** | Fastest (allocation only) | Slower (allocation + zeroing) | Depends (may copy data) |
| **Use case** | General allocation | Arrays, bitmaps, structs with default-zero | Dynamic arrays, buffer resizing |
| **Can fail** | Out of memory | Out of memory | Out of memory (original kept) |
| **ptr can be NULL** | N/A (N receives size) | N/A | Yes → acts like malloc(new_size) |
| **new_size = 0** | Implementation-defined | N/A | Implementation-defined (often free) |
| **Header overhead** | Per-allocation (8â€“16 bytes) | Same as malloc | Same + possible copy cost |

### Decision Flowchart


```
Need dynamic memory?
├── Need zero-initialization?
│   ├── Yes → calloc
│   └── No  → malloc
├── Resizing existing block?
│   └── Yes → realloc
└── Size unknown at compile time?
    └── Yes → malloc or calloc
```

### Code: Three Functions Side by Side


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
    int n = 5;

    /* malloc → uninitialized */
    int *a = (int*)malloc(n * sizeof(int));
    if (a == NULL) return 1;
    for (int i = 0; i < n; i++) a[i] = (i + 1) * 10;

    /* calloc → zero-initialized */
    int *b = (int*)calloc(n, sizeof(int));
    if (b == NULL) { free(a); return 1; }

    /* realloc → resize existing (grow) */
    int *tmp = (int*)realloc(a, 10 * sizeof(int));
    if (tmp == NULL) {
        free(a);
        free(b);
        return 1;
    }
    a = tmp;

    printf("malloc (a):  ");
    for (int i = 0; i < 10; i++) printf("%d ", a[i]);
    printf("\n");

    printf("calloc (b):  ");
    for (int i = 0; i < n; i++) printf("%d ", b[i]);
    printf("\n");

    free(a);
    free(b);
    return 0;
}
```

**Output:**
```
malloc (a):  10 20 30 40 50 0 0 0 0 0
calloc (b):  0 0 0 0 0
```

Note: `a[5]` through `a[9]` are 0 because `realloc` zeroes the **new** bytes (not guaranteed by the standard, but glibc does this for security).

### When to Use What


| Situation | Recommended | Why |
|-----------|-------------|-----|
| Array of unknown size at compile time | `malloc` | Fast, no unnecessary zeroing |
| Array that must start all-zero | `calloc` | One call instead of malloc + memset |
| Growing buffer (e.g., reading unknown input) | `realloc` | Preserves existing content |
| Bitmap or flags | `calloc` | All bits start 0 |
| Struct with many fields | `calloc` | All fields zero-initialized |
| Large allocation (MB+) | `calloc` | May get zero pages from OS without touching |
| Frequent small allocations | `malloc` | Less overhead than calloc (no zeroing) |
| Repeatedly reallocating same pointer | Use temp pointer pattern | Prevent leak on failure |

### Complexity Comparison


| Function | Time | Space | Notes |
|----------|------|-------|-------|
| `malloc(n)` | O(1) amortized | O(n) + metadata | Fastest allocation |
| `calloc(c, s)` | O(n) amortized (zeroing) | O(c*s) | Zeroing cost scales with size |
| `realloc(p, n)` in-place | O(1) | O(n) | No data copy |
| `realloc(p, n)` move | O(old_size) + O(1) | O(n) | Must memcpy old data |

### Advantages and Disadvantages Summary


| Function | Pros | Cons |
|----------|------|------|
| **malloc** | Fast, simple, ubiquitous | Uninitialized → must manually init; no overflow check |
| **calloc** | Zero-initialized, overflow check | Slower due to zeroing; overkill if overwriting all bytes |
| **realloc** | Preserves data, can grow/shrink | Old pointer invalid on move; must use temp pointer pattern |

---

## 11.9 Memory Leak

### Real-World Analogy: Library Book Never Returned


You borrow a book from the library (malloc). You read it, put it on your shelf, and forget about it. When you move out, the book stays behind. Nobody knows you have it, so nobody can return it. Over time, the library loses all its books.

In programming terms: you allocate memory, lose all references to it, and can never call `free`. That memory is gone until the program exits.

### What Is a Memory Leak?


A memory leak occurs when dynamically allocated memory is no longer reachable (no pointer points to it), so it can never be freed. The memory remains allocated for the program's lifetime → it is "leaked."

```c
void leak_example(void) {
    int *p = malloc(100 * sizeof(int));
    /* p goes out of scope → no way to free this memory */
    /* 400 bytes leaked */
}
```

### Causes of Memory Leaks


| Cause | Example | Explanation |
|-------|---------|-------------|
| **Lost pointer** | `p = malloc(100); p = malloc(200);` | First allocation has no remaining reference |
| **Function return without free** | Function allocates, returns without freeing (and does not return the pointer) | Caller has no way to access the memory |
| **Exception / early return** | `if (error) return; free(p);` never reached | Guard all early returns with proper cleanup |
| **Circular reference** | Two structs pointing to each other | Reference counting fails |
| **Container not freed** | Freeing the array of pointers but not the pointed-to objects | Deep free required |
| **Realloc failure without cleanup** | `ptr = realloc(ptr, n);` on failure | Original pointer lost if realloc returns NULL |
| **Global accumulator** | Accumulating data in a global linked list without cleanup | Memory grows unbounded |

### Leak Example: Every Call Loses Memory


```c
#include <stdio.h>
#include <stdlib.h>

void process_data(int size) {
    int *buf = (int*)malloc(size * sizeof(int));
    if (buf == NULL) return;
    /* Do some work with buf */
    /* FORGET to free(buf) → 4000 bytes leaked per call */
}

int main(void) {
    for (int i = 0; i < 1000; i++) {
        process_data(1000);
    }
    /* After 1000 calls: 1000 * 4000 = 4,000,000 bytes leaked */
    printf("Done → but memory is leaking\n");
    return 0;
}
```

### Leak Detection via Free List Tracking


```c
#include <stdio.h>
#include <stdlib.h>

/* Simple leak tracker → counts alive allocations */
static int alloc_count = 0;
static size_t alloc_bytes = 0;

void *tracked_malloc(size_t size) {
    void *p = malloc(size);
    if (p) {
        alloc_count++;
        alloc_bytes += size;
    }
    return p;
}

void tracked_free(void *p) {
    if (p) {
        alloc_count--;
        /* We can't easily track freed bytes without metadata */
    }
    free(p);
}

void print_leak_report(void) {
    if (alloc_count > 0) {
        fprintf(stderr, "LEAK: %d allocations still alive (%zu bytes)\n",
                alloc_count, alloc_bytes);
    } else {
        printf("No leaks detected\n");
    }
}

int main(void) {
    int *a = (int*)tracked_malloc(100);
    int *b = (int*)tracked_malloc(200);
    tracked_free(a);
    /* Forgot to free b */

    print_leak_report();
    /* Should report 1 allocation still alive */

    tracked_free(b);
    print_leak_report();

    return 0;
}
```

**Output:**
```
LEAK: 1 allocations still alive (200 bytes)
No leaks detected
```

### Impact of Memory Leaks


| Impact | Description |
|--------|-------------|
| **Reduced available memory** | Leaked memory reduces the pool for other allocations |
| **Performance degradation** | OS starts swapping to disk as RAM runs low |
| **OOM (Out of Memory) kill** | Linux OOM killer terminates the process |
| **Cascading failures** | Other processes cannot allocate memory |
| **Denial of Service** | Long-running server exhausts memory → all clients affected |

### How to Prevent Memory Leaks


1. **Match every malloc with a free** → create a mental pair.
2. **Use RAII-like patterns** → allocate in constructor, free in destructor (in C++).
3. **Initialize pointers to NULL** → only free if non-NULL.
4. **Use Valgrind** → test regularly for leaks.
5. **Free in reverse order of allocation** → reduces fragmentation.
6. **Set pointers to NULL after free** → prevents double-free and use-after-free.
7. **Use tools** → `-fsanitize=address` for Clang/GCC.

### Detecting Leaks with Address Sanitizer


```bash
gcc -g -fsanitize=address -o program program.c
./program
```

AddressSanitizer (ASan) reports leaks at program exit with stack traces for unfreed allocations.

---

## 11.10 Dangling Pointer

### Real-World Analogy: Expired Library Card


You return a book to the library (free). But you still have the checkout slip that says "Book at shelf A12." If you go to shelf A12, the book may be gone. Another patron may have borrowed it. If you write your name in that spot, you are corrupting someone else's book.

The checkout slip is a **dangling pointer** → a pointer that holds an address to memory that has been freed.

### What Is a Dangling Pointer?


A dangling pointer is a pointer that references memory that has been freed. Dereferencing a dangling pointer causes **undefined behavior**.

### Three Ways to Create a Dangling Pointer


```c
#include <stdio.h>
#include <stdlib.h>

/* Type 1: Free then use */
void dangling_free(void) {
    int *p = (int*)malloc(sizeof(int));
    *p = 42;
    free(p);
    *p = 100;  /* Dangling pointer → UB */
}

/* Type 2: Return address of local variable */
int *dangling_return(void) {
    int x = 42;
    return &x;  /* Dangling → x is on stack, gone after return */
}

/* Type 3: Pointer to deallocated block (via realloc move) */
void dangling_realloc(void) {
    int *arr = (int*)malloc(4 * sizeof(int));
    int *old = arr;
    arr = (int*)realloc(arr, 100 * sizeof(int));
    /* old may now be a dangling pointer if realloc moved the block */
    old[0] = 10;  /* Potential UB → old may point to freed memory */
}

int main(void) {
    /* Test type 2 */
    int *d = dangling_return();
    printf("%d\n", *d);  /* Undefined behavior → may print 42, may crash */

    return 0;
}
```

### Types of Dangling Pointers


| Type | How Created | Danger Level |
|------|-------------|--------------|
| **Free-and-use** | `free(p); *p = x;` | Very high → immediate corruption |
| **Stack-return** | Return `&local` from function | High → stack reused by next call |
| **Realloc-move** | Old pointer after realloc moved | Medium → depends on allocator |
| **Scope-escape** | Pointer to block that went out of scope | Medium → similar to stack return |
| **Double-free** | `free(p); free(p);` | Very high → heap corruption |

### Prevention Techniques


```c
#include <stdio.h>
#include <stdlib.h>

/* Technique 1: NULL after free */
void safe_free(void) {
    int *p = (int*)malloc(sizeof(int));
    *p = 42;
    free(p);
    p = NULL;  /* Now safe → dereferencing NULL crashes immediately instead of corrupting silently */
    /* if (p) *p = 99; → never reached */
}

/* Technique 2: Use static for returned local (not thread-safe!) */
int *safe_return_static(void) {
    static int x = 42;
    return &x;  /* Safe → static lives forever */
}

/* Technique 3: Pass pointer to pointer for allocation */
void allocate_int(int **pp, int value) {
    *pp = (int*)malloc(sizeof(int));
    if (*pp == NULL) return;
    **pp = value;
}

int main(void) {
    int *p = NULL;
    allocate_int(&p, 42);
    if (p) {
        printf("%d\n", *p);
        free(p);
        p = NULL;
    }
    return 0;
}
```

**Output:**
```
42
```

### Dry Run: Dangling Pointer Lifecycle


| Step | Code | Memory State | Pointer State |
|------|------|-------------|---------------|
| 1 | `int *p = malloc(4)` | Heap: [BLOCK at 0x1000: ??] | p = 0x1000 (valid) |
| 2 | `*p = 42` | Heap: [BLOCK at 0x1000: 42] | p = 0x1000 |
| 3 | `free(p)` | Heap: [FREE at 0x1000] | p = 0x1000 **(DANGLING)** |
| 4 | `*p = 100` | Heap: some other allocation may now occupy 0x1000 | **UB → data corruption or crash** |
| 5 | `p = NULL` | → | p = NULL (safe) |

### Complexity


| Operation | Time | Space |
|-----------|------|-------|
| NULL-after-free | O(1) | O(1) |
| Dangling pointer detection (Valgrind) | Runtime slowdown 10â€“20x | Increased memory usage |
| Use-after-free exploit | → | Can lead to arbitrary code execution |

### Advantages and Disadvantages


| Technique | Pros | Cons |
|-----------|------|------|
| NULL after free | Simple, prevents access | Only one level → double-pointer indirection still dangerous |
| Static analysis | Finds many cases at compile time | Limited to obvious patterns |
| Valgrind/ASan | Catches all use-after-free at runtime | Slows program 2â€“20x |
| Smart pointers (C++) | Automatic lifetime management | Language feature → not available in C |
| Pool/arena allocator | Freed all at once → no individual dangling | Requires architectural change |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Double free via two pointers to same block | p and q both point to same malloc; free(p); free(q) double-frees | Only free once; NULL both after free |
| Use-after-free of small block | Allocator reuses the memory immediately → subtle corruption | Use Valgrind in debug builds |
| Use-after-free of large block | OS unmaps the page → immediate segfault | Same → always NULL after free |
| Pointer to middle of allocated block | `free(p + offset)` → UB (not the exact malloc address) | Only free the exact returned address |
| Use-after-free across function calls | Free in one function, use in another → hard to spot | Track ownership explicitly |

---

## 11.11 Memory Corruption

### Real-World Analogy: Writing in the Wrong Ledger


An accountant has 10 ledgers in a cabinet. You ask for ledger 3. The accountant opens ledger 3, and you write in it. But if you write past page 100 (the ledger only has 100 pages), you start writing in ledger 4. The accountant does not check your page number → that is your responsibility.

Memory corruption is when you write data past the allocated boundary and overwrite adjacent memory (metadata, other allocations, or even code).

### Types of Memory Corruption


| Type | Description | Example |
|------|-------------|---------|
| **Buffer overflow** | Writing past allocated buffer | `arr[10] = 0` when `arr` has 5 elements |
| **Buffer underflow** | Writing before allocated buffer | `arr[-1] = 0` |
| **Heap overflow** | Writing past heap block → corrupts metadata or adjacent block | `malloc(8); p[8] = 0;` |
| **Stack overflow** | Exhausting stack space | Infinite recursion |
| **Write-after-free** | Writing to freed memory | `free(p); *p = 42;` |
| **Double free** | Freeing same block twice | `free(p); free(p);` |
| **Wild pointer** | Dereferencing uninitialized pointer | `int *p; *p = 42;` |
| **Off-by-one** | One element past the end | `for (i = 0; i <= n; i++) arr[i]` |

### Buffer Overflow Example


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *arr = (int*)malloc(5 * sizeof(int));
    if (arr == NULL) return 1;

    /* Fill with values */
    for (int i = 0; i < 5; i++) arr[i] = i * 10;

    /* OFF-BY-ONE: write past end */
    arr[5] = 999;  /* Undefined behavior → corrupts heap metadata or adjacent allocation */

    printf("arr[5] = %d\n", arr[5]);  /* May print 999, may crash */

    free(arr);  /* May crash here → heap metadata was corrupted */
    return 0;
}
```

### Heap Metadata Corruption


Each malloc'd block has a metadata header (typically 8â€“16 bytes) just before the returned pointer. Overwriting this header corrupts the heap:

```
Memory before free:
  [HEADER: size=32, flags=in_use, prev_size, next] [USER DATA: 32 bytes]
                                                          ▲
                                                      returned pointer

If user writes past 32 bytes:
  [HEADER: size=32, flags=in_use] [USER DATA: 32 bytes] [OVERFLOW: corrupts next block's header]

free() then reads corrupted metadata:
  - May crash (segfault)
  - May corrupt freelist
  - May be exploitable (heap exploitation → e.g., unsafe unlink)
```

### Double Free Exploitation


```c
#include <stdio.h>
#include <stdlib.h>

/* DANGEROUS → demonstrates why double free is a security risk */
int main(void) {
    int *p = (int*)malloc(8 * sizeof(int));
    if (p == NULL) return 1;

    free(p);   /* Block goes to freelist */
    free(p);   /* DOUBLE FREE → block is already free */
    /* Allocator may add the same block twice to the freelist */
    /* Future malloc may return the same block twice → aliasing pointers! */

    int *a = (int*)malloc(8 * sizeof(int));  /* May get same block as p */
    int *b = (int*)malloc(8 * sizeof(int));  /* May also get same block! */

    *a = 42;
    *b = 100;  /* Overwrites *a → two "different" pointers to same memory */

    printf("a=%d b=%d\n", *a, *b);

    free(a);
    free(b);   /* DOUBLE FREE again → crash */

    return 0;
}
```

### Detecting Memory Corruption at Free Time


Many allocators (glibc, jemalloc, tcmalloc) attempt to detect corruption when `free` is called:

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char *p = (char*)malloc(10);
    if (p == NULL) return 1;

    /* Corrupt the metadata (overwrite the size field) */
    *(int*)(p - 8) = 0xDEADBEEF;  /* Undefined behavior → corrupting allocator's header */

    free(p);  /* May abort: "free(): corrupted unsorted chunk" or similar */
    return 0;
}
```

**Output (glibc with debugging enabled):**
```
*** Error in `./a.out': free(): corrupted unsorted chunk
Aborted (core dumped)
```

### Prevention and Detection


| Method | Description | Effectiveness |
|--------|-------------|---------------|
| **Bounds checking** | Always verify indices before accessing arrays | High → prevents overflow at source |
| **Address Sanitizer** | `-fsanitize=address` → detects overflow, use-after-free | Very high → catches ~95% of bugs |
| **Valgrind memcheck** | Runs binary on synthetic CPU, checks every access | Very high → 2â€“20x slowdown |
| **Canary values** | Place known values at buffer boundaries; check for corruption | Medium → detects overflow but not at runtime by default |
| **Static analysis** | `clang --analyze`, `cppcheck` | Medium → finds obvious patterns |
| **Safe allocators** | ElectricFence, Guard pages around allocations | High → immediate segfault on overflow |

### Using Address Sanitizer


```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *arr = (int*)malloc(5 * sizeof(int));
    arr[5] = 100;  /* Out-of-bounds write */
    free(arr);
    return 0;
}
```

Compile and run:
```bash
gcc -g -fsanitize=address -o asan_test asan_test.c
./asan_test
```

ASan output:
```
=================================================================
==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000000034
WRITE of size 4 at 0x602000000034 thread T0
    #0 0x401126 in main /tmp/asan_test.c:6
    #1 0x7f1234567890 in __libc_start_main ...
0x602000000034 is located 0 bytes after 20-byte region [0x602000000020,0x602000000034)
allocated by thread T0 here:
    #0 0x4010a0 in malloc /usr/lib/gcc/.../libsanitizer/asan/asan_malloc_linux.cpp
    #1 0x401116 in main /tmp/asan_test.c:5
```

---

## 11.12 Dynamic Arrays (Growable Arrays)

### Real-World Analogy: Expanding Waiting List


A restaurant has a waiting list. They start with a small clipboard that holds 10 names. When the list fills up, they get a bigger clipboard that holds 20 names and copy all the names over. They throw away the old clipboard.

A dynamic array works the same way: start with a small capacity, double when full, and copy elements to the new buffer.

### Dynamic Array Implementation


```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *data;
    size_t size;      /* Number of elements currently stored */
    size_t capacity;  /* Allocated capacity (size <= capacity) */
} DynArray;

/* Initialize (empty) */
void da_init(DynArray *da) {
    da->data = NULL;
    da->size = 0;
    da->capacity = 0;
}

/* Append element → doubles capacity when full */
int da_append(DynArray *da, int value) {
    if (da->size >= da->capacity) {
        /* Grow: 0 -> 4, then double each time */
        size_t new_cap = da->capacity == 0 ? 4 : da->capacity * 2;
        int *temp = (int*)realloc(da->data, new_cap * sizeof(int));
        if (temp == NULL) {
            fprintf(stderr, "DynArray: realloc failed\n");
            return -1;
        }
        da->data = temp;
        da->capacity = new_cap;
    }
    da->data[da->size++] = value;
    return 0;
}

/* Get element at index */
int da_get(DynArray *da, size_t index) {
    if (index >= da->size) {
        fprintf(stderr, "DynArray: index %zu out of bounds (size %zu)\n",
                index, da->size);
        return 0;
    }
    return da->data[index];
}

/* Set element at index */
void da_set(DynArray *da, size_t index, int value) {
    if (index >= da->size) return;
    da->data[index] = value;
}

/* Free all memory */
void da_free(DynArray *da) {
    free(da->data);
    da->data = NULL;
    da->size = 0;
    da->capacity = 0;
}

int main(void) {
    DynArray arr;
    da_init(&arr);

    /* Append 20 elements → triggers several reallocs */
    for (int i = 0; i < 20; i++) {
        da_append(&arr, i * 10);
    }

    printf("Size: %zu, Capacity: %zu\n", arr.size, arr.capacity);
    printf("Elements: ");
    for (size_t i = 0; i < arr.size; i++) {
        printf("%d ", arr.data[i]);
    }
    printf("\n");

    /* Modify middle element */
    da_set(&arr, 5, 999);
    printf("After set: arr[5] = %d\n", da_get(&arr, 5));

    da_free(&arr);
    return 0;
}
```

**Output:**
```
Size: 20, Capacity: 32
Elements: 0 10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190
After set: arr[5] = 999
```

### Dry Run: Dynamic Array Growth


| Step | Capacity | Size | Data | Realloc? |
|------|----------|------|------|----------|
| 0 | 0 | 0 | NULL | → |
| 1 | 4 | 0 | malloc(16) | Yes (init) |
| 2 | 4 | 1 | [10] | No |
| 3 | 4 | 2 | [10,20] | No |
| 4 | 4 | 3 | [10,20,30] | No |
| 5 | 4 | 4 | [10,20,30,40] | No |
| 6 | 8 | 5 | [10,20,30,40,50,__] | Yes (double) |
| 7 | 8 | 6 | [10,20,30,40,50,60] | No |
| ... | ... | ... | ... | ... |
| 12 | 16 | 9 | (growing) | Yes (double) |
| 20 | 32 | 17 | (first ~20 appends without resize) | Yes (double) |

### Complexity of Dynamic Array Operations


| Operation | Time Complexity | Amortized Time | Notes |
|-----------|----------------|----------------|-------|
| Append (no resize) | O(1) | O(1) | Simple write and increment |
| Append (resize needed) | O(n) | O(1) amortized | Must copy all elements to new buffer |
| Access by index | O(1) | O(1) | Array indexing |
| Set by index | O(1) | O(1) | Direct write |
| Insert at position | O(n) | O(n) | Must shift elements right |
| Delete at position | O(n) | O(n) | Must shift elements left |
| Free | O(1) | O(1) | Single free call |

### Advantages and Disadvantages


| Aspect | Advantage | Disadvantage |
|--------|-----------|--------------|
| **Memory** | Contiguous → cache-friendly | Reallocation copies all elements (O(n) worst case) |
| **Access** | O(1) random access → fastest data structure for lookup | Insert/delete at arbitrary positions is O(n) |
| **Growth** | Doubling achieves O(1) amortized append | May waste up to 50% of capacity (if size = capacity/2 + 1) |
| **Simplicity** | Simple API: init, append, get, set, free | No built-in bounds checking → programmer must verify indices |
---

## 11.13 Detecting Memory Leaks with Valgrind

### What Is Valgrind?


Valgrind is a programming tool for memory debugging, memory leak detection, and profiling. It runs your program on a synthetic CPU and intercepts every memory allocation and deallocation.

### Installation


```bash
# Ubuntu/Debian
sudo apt-get install valgrind

# Fedora/RHEL
sudo dnf install valgrind

# macOS
brew install valgrind

# Verify
valgrind --version
```

### Basic Usage


```bash
# Compile with debug symbols (-g)
gcc -g -o program program.c

# Run under Valgrind
valgrind --leak-check=full ./program
```

### Leaky Program Example


```c
/* leaky.c → intentionally leaks memory */
#include <stdio.h>
#include <stdlib.h>

void leak(void) {
    int *p = (int*)malloc(100 * sizeof(int));
    if (p == NULL) return;
    p[0] = 42;   /* Use it, then leak it */
    /* No free(p) here */
}

int main(void) {
    leak();
    leak();
    leak();
    return 0;
}
```

Compile and run:
```bash
gcc -g -o leaky leaky.c
valgrind --leak-check=full --show-leak-kinds=all ./leaky
```

**Valgrind output:**
```
==12345== Memcheck, a memory error detector
==12345== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.
==12345== Using Valgrind-3.22.0 and LibVEX; rerun with -h for copyright info
==12345== Command: ./leaky
==12345==
==12345== HEAP SUMMARY:
==12345==     in use at exit: 1,200 bytes in 3 blocks
==12345==   total heap usage: 3 allocs, 0 frees, 1,200 bytes allocated
==12345==
==12345== 1,200 (400 direct, 800 indirect) bytes in 3 blocks are definitely lost
==12345==    in loss record 3 of 3
==12345==    at 0x4845868: malloc (vg_replace_malloc.c:381)
==12345==    by 0x10915B: leak (leaky.c:6)
==12345==    by 0x109177: main (leaky.c:14)
==12345==
==12345== LEAK SUMMARY:
==12345==    definitely lost: 1,200 bytes in 3 blocks
==12345==    indirectly lost: 0 bytes in 0 blocks
==12345==      possibly lost: 0 bytes in 0 blocks
==12345==    still reachable: 0 bytes in 0 blocks
==12345==         suppressed: 0 bytes in 0 blocks
==12345==
==12345== For lists of detected and suppressed errors, rerun with: -s
==12345== ERROR SUMMARY: 3 errors from 3 contexts (suppressed: 0 from 0)
```

### Clean Program (No Leaks)


```c
/* clean.c → no leaks */
#include <stdio.h>
#include <stdlib.h>

void no_leak(void) {
    int *p = (int*)malloc(100 * sizeof(int));
    if (p == NULL) return;
    p[0] = 42;
    free(p);   /* Proper cleanup */
}

int main(void) {
    no_leak();
    no_leak();
    no_leak();
    return 0;
}
```

**Valgrind output:**
```
==12346== HEAP SUMMARY:
==12346==     in use at exit: 0 bytes in 0 blocks
==12346==   total heap usage: 3 allocs, 3 frees, 1,200 bytes allocated
==12346==
==12346== All heap blocks were freed -- no leaks are possible
==12346==
==12346== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
```

### Detecting Use-After-Free with Valgrind


```c
/* uaf.c → use-after-free */
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p = (int*)malloc(sizeof(int));
    if (p == NULL) return 1;
    *p = 42;
    free(p);
    *p = 100;   /* Use-after-free */
    printf("%d\n", *p);
    return 0;
}
```

```bash
gcc -g -o uaf uaf.c
valgrind ./uaf
```

**Valgrind output:**
```
==12347== Invalid write of size 4
==12347==    at 0x10917F: main (uaf.c:9)
==12347==  Address 0x4a5e040 is 0 bytes inside a block of size 4 free'd
==12347==    at 0x484626F: free (vg_replace_malloc.c:535)
==12347==    by 0x10917A: main (uaf.c:8)
==12347==  Block was alloc'd at
==12347==    at 0x4845868: malloc (vg_replace_malloc.c:381)
==12347==    by 0x10916B: main (uaf.c:6)
==12347==
==12347== Invalid read of size 4
==12347==    at 0x10918B: main (uaf.c:10)
==12347==  Address 0x4a5e040 is 0 bytes inside a block of size 4 free'd
==12347==    at 0x484626F: free (vg_replace_malloc.c:535)
==12347==    by 0x10917A: main (uaf.c:8)
==12347==  Block was alloc'd at
==12347==    at 0x4845868: malloc (vg_replace_malloc.c:381)
==12347==    by 0x10916B: main (uaf.c:6)
==12347==
==12347== HEAP SUMMARY:
==12347==     in use at exit: 0 bytes in 0 blocks
==12347==   total heap usage: 1 allocs, 1 frees, 4 bytes allocated
==12347==
==12347== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)
```

### Valgrind Options


| Option | Effect |
|--------|--------|
| `--leak-check=full` | Show details of each leaked block |
| `--show-leak-kinds=all` | Show all leak types (definite, indirect, possible, still reachable) |
| `--track-origins=yes` | Track uninitialized value origins |
| `--vgdb=yes` | Allow GDB attachment for interactive debugging |
| `--suppressions=file.supp` | Suppress known leaks (e.g., from libc) |
| `--log-file=valgrind.log` | Write output to file |
| `-s` | Show summary of suppressed errors |
| `--num-callers=20` | Show more stack frames per error |

### Understanding Leak Types


| Leak Type | Meaning | Action |
|-----------|---------|--------|
| **Definitely lost** | No pointer to the block exists → cannot be freed | Must fix → add missing free |
| **Indirectly lost** | Pointers to this block exist only inside other lost blocks | Fix the definitely lost that owns these |
| **Possibly lost** | Pointer may point to interior of the block | Investigate → often a real bug |
| **Still reachable** | Pointer still exists but was not freed on exit | Usually harmless (global), but fix for cleanliness |
| **Suppressed** | Suppressed by user's suppression file | Verify suppression is appropriate |

### Integrating Valgrind into Your Workflow


```bash
# Quick check
valgrind --leak-check=full ./program

# Comprehensive check
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes -s ./program

# Check with specific input
valgrind --leak-check=full ./program < test_input.txt

# Run under Valgrind with GDB
valgrind --vgdb=yes --vgdb-error=0 ./program
```

---

## 11.14 Best Practices

### The Golden Rules of Dynamic Memory


1. **Always check return values** → `malloc`, `calloc`, and `realloc` can fail.
2. **Every malloc has a matching free** → create mental pairs.
3. **NULL after free** → prevents use-after-free and double-free.
4. **Use temp pointer for realloc** → never assign directly.
5. **Prefer calloc for arrays** → overflow check + zero-initialization.
6. **Document ownership** → who allocates, who frees? Write it in comments.
7. **Use sizeof(*ptr) not sizeof(type)** → type-safe; survives code changes.
8. **Free in allocation scope** → minimize lifetime.
9. **Use tools** → Valgrind, AddressSanitizer, static analysis.
10. **Avoid void* arithmetic** → not allowed in standard C (GCC extension allows it).

### Best Practice Examples


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* GOOD: sizeof(*ptr) pattern */
typedef struct { int id; char name[32]; } Record;

Record *create_record(int id, const char *name) {
    Record *r = (Record*)malloc(sizeof(*r));  /* sizeof(*r) not sizeof(Record) */
    if (r == NULL) return NULL;

    r->id = id;
    snprintf(r->name, sizeof(r->name), "%s", name);
    return r;
    /* Caller owns the memory → must free */
}

/* GOOD: Clear ownership documentation */
/** 
 * Reads a file into a dynamically allocated buffer.
 * Returns a pointer to the buffer (caller must free).
 * Sets *out_len to the number of bytes read.
 * Returns NULL on failure.
 */
char *read_file(const char *filename, size_t *out_len) {
    FILE *f = fopen(filename, "rb");
    if (!f) return NULL;

    fseek(f, 0, SEEK_END);
    long len = ftell(f);
    if (len <= 0) { fclose(f); return NULL; }

    char *buf = (char*)malloc((size_t)len + 1);
    if (buf == NULL) { fclose(f); return NULL; }

    size_t bytes_read = fread(buf, 1, (size_t)len, f);
    fclose(f);

    if (bytes_read != (size_t)len) {
        free(buf);
        return NULL;
    }

    buf[bytes_read] = '\0';
    if (out_len) *out_len = bytes_read;
    return buf;
    /* Caller MUST free(buf) */
}

/* GOOD: Cleanup with goto → centralizes error handling */
int process_file(const char *filename) {
    char *buf = NULL;
    FILE *f = NULL;
    int result = -1;

    f = fopen(filename, "rb");
    if (!f) goto cleanup;

    buf = (char*)malloc(1024);
    if (!buf) goto cleanup;

    size_t n = fread(buf, 1, 1024, f);
    if (n == 0) goto cleanup;

    /* ... process buf ... */
    result = 0;

cleanup:
    free(buf);
    if (f) fclose(f);
    return result;
}

int main(void) {
    Record *r = create_record(1, "Alice");
    if (r) {
        printf("Record: %d, %s\n", r->id, r->name);
        free(r);  /* Ownership fulfilled */
    }

    size_t len;
    char *content = read_file("test.txt", &len);
    if (content) {
        printf("Read %zu bytes: %s\n", len, content);
        free(content);
    }

    return 0;
}
```

### Practice Checklist


| Rule | Check |
|------|-------|
| Every allocation checked for NULL? | |
| Every malloc has matching free? | |
| Pointer set to NULL after free? | |
| realloc uses temp pointer? | |
| Size computed with sizeof, not hardcoded? | |
| Integer overflow in size calculation prevented? | |
| Ownership documented? | |
| Valgrind passes with 0 errors? | |
| Array accesses bounds-checked? | |
| Calloc used when zero-initialization is needed? | |

---

## 11.15 Complete Comparison Tables

### 11.15.1 malloc vs calloc vs realloc vs free


| Feature | `malloc` | `calloc` | `realloc` | `free` |
|---------|----------|----------|-----------|--------|
| **Header** | `<stdlib.h>` | `<stdlib.h>` | `<stdlib.h>` | `<stdlib.h>` |
| **Signature** | `void *malloc(size_t)` | `void *calloc(size_t,size_t)` | `void *realloc(void*,size_t)` | `void free(void*)` |
| **Initializes?** | No | Yes (zero) | Preserves old data | → |
| **Can fail?** | Yes (returns NULL) | Yes (returns NULL) | Yes (returns NULL, old kept) | Always succeeds |
| **Overflow check?** | No | Yes (product) | No | → |
| **NULL ptr?** | N/A | N/A | Acts like malloc | Safe (no-op) |
| **Zero size?** | Impl-defined | Impl-defined | Impl-defined (often free) | → |
| **Common use** | General allocation | Arrays, structs | Resize buffers | Cleanup |
| **Speed** | Fastest | Slower (zeroing) | Depends (may copy) | Fast (O(1)) |
| **Memory overhead** | Header per block | Header per block | Header + copy buffer | → |

### 11.15.2 Static vs Automatic vs Dynamic Allocation


| Aspect | Static | Automatic | Dynamic |
|--------|--------|-----------|---------|
| **Storage location** | Data/BSS segment | Stack | Heap |
| **Lifetime** | Program duration | Function scope | Until free |
| **Size known** | Compile time | Compile time | Runtime |
| **Allocation** | By loader | By function call | By malloc/calloc |
| **Deallocation** | Automatic (exit) | Automatic (return) | Manual (free) |
| **Default init** | Zero-initialized | Uninitialized | Uninitialized |
| **Size limit** | Executable size limit | Stack size (~8 MB) | Virtual memory |
| **Resizeable** | No | No | Yes (realloc) |
| **Speed** | Fastest | Very fast | Slowest |
| **Safety** | Safest | Safe | Error-prone |

### 11.15.3 Stack vs Heap → Detailed


| Aspect | Stack | Heap |
|--------|-------|------|
| **Typical size** | 1â€“8 MB per thread | GB (virtual address space) |
| **Allocation time** | ~1â€“3 ns | ~50â€“300 ns (small block) |
| **Deallocation time** | ~0 ns (SP adjust) | ~20â€“100 ns |
| **Lifetime** | Function scope | Until explicit free |
| **Management** | Compiler | Programmer |
| **Data structure** | LIFO (stack) | Arbitrary (freelist) |
| **Fragmentation** | None | External fragmentation |
| **Locality** | Excellent (contiguous) | Poor (scattered) |
| **Thread safety** | Per-thread (inherent) | Shared (needs lock) |
| **Overflow** | Stack overflow (crash) | Returns NULL |
| **Risk** | Deep recursion | Memory leaks |

### 11.15.4 Memory Error Types


| Error | Cause | Consequence | Detection |
|-------|-------|-------------|-----------|
| **Buffer overflow** | Write past allocated boundary | Metadata corruption, crash, exploit | Valgrind, ASan |
| **Buffer underflow** | Write before allocated boundary | Metadata corruption | Valgrind, ASan |
| **Use-after-free** | Dereference freed pointer | Data corruption, crash | Valgrind, ASan |
| **Double free** | Free same block twice | Heap corruption, crash | Valgrind, ASan |
| **Memory leak** | Never free allocated block | Resource exhaustion | Valgrind (leak check) |
| **Wild pointer** | Dereference uninitialized pointer | Random corruption, crash | Valgrind, ASan |
| **Dangling pointer** | Pointer to freed or out-of-scope memory | Use-after-free effect | Valgrind |
| **Stack overflow** | Exhaust stack space | Crash (segfault) | ulimit, runtime check |
| **Integer overflow** | Overflow in size argument | Smaller allocation than expected | Check manually, use calloc |

---

## 11.16 Interview Corner

### Q1: What is the difference between `malloc` and `calloc`?


**Answer:** `malloc(size)` allocates `size` bytes of uninitialized memory. `calloc(count, size)` allocates `count * size` bytes and initializes every byte to zero. `calloc` also checks for integer overflow in the multiplication `count * size`. In terms of performance, `malloc` is faster because it skips the zeroing pass. For large allocations, `calloc` can be faster than `malloc` + `memset` because the OS can provide already-zeroed pages without actually touching them (demand-paging optimization). Use `malloc` when you will immediately overwrite the memory; use `calloc` when you need a predictable zero state.

### Q2: Why must you use a temporary pointer with `realloc`?


**Answer:** If `realloc` fails (returns NULL), the original memory block is still valid and unmodified. If you assign directly → `ptr = realloc(ptr, new_size)` → and realloc fails, `ptr` becomes NULL and you lose the reference to the original block, causing a memory leak. Always use: `int *temp = realloc(ptr, new_size); if (temp) ptr = temp; else handle_error();`.

### Q3: What causes a memory leak? How do you prevent one?


**Answer:** A memory leak occurs when dynamically allocated memory has no remaining pointer reference, making it impossible to free. Common causes: losing the pointer through reassignment (`p = malloc(100); p = malloc(200);`), returning from a function without freeing, and forgetting to free in error paths. Prevention: match every `malloc` with a `free`, use tools like Valgrind, set pointers to NULL after freeing, use RAII in C++ (smart pointers), and establish ownership conventions in C (document who allocates and who frees).

### Q4: What is a dangling pointer and how do you prevent it?


**Answer:** A dangling pointer is a pointer that references memory that has been freed. Dereferencing it is undefined behavior. Three common causes: (1) freeing memory and not nullifying the pointer, (2) returning the address of a stack-allocated local variable, and (3) using the old pointer after `realloc` moved the block. Prevention: set `ptr = NULL` immediately after `free`, never return `&local_var` from a function, and use the pointer returned by `realloc`, not the old one.

### Q5: How does `realloc` handle failure?


**Answer:** On failure, `realloc` returns NULL and **preserves the original block unchanged**. This is why using a temporary pointer is critical → the original pointer remains valid and can be freed or retried with a smaller size. Never do `ptr = realloc(ptr, n)` → that loses the original on failure.

### Q6: Can you do pointer arithmetic on `void*`?


**Answer:** In standard C, no → pointer arithmetic requires the size of the pointed-to type, and `void` has no size. GCC and some compilers allow it as an extension (treating `void*` as byte-sized). For portable code, cast to `char*` before arithmetic: `(char*)ptr + offset`.

### Q7: What is the memory layout of a C program?


**Answer:** From low to high address: **Text** (read-only machine code), **Data** (initialized global/static variables), **BSS** (uninitialized global/static → zero-filled at load), **Heap** (grows upward → dynamic allocations), **Stack** (grows downward → local variables, function frames). The heap and stack grow toward each other; if they collide, the program runs out of memory.

### Q8: What is the difference between stack and heap allocation?


**Answer:** Stack allocation is fast (single instruction to adjust stack pointer), automatic (compiler manages), and limited in size (~1â€“8 MB). Heap allocation is slower (freelist search, potential syscall), manual (programmer must free), and can be very large (up to virtual address limits). Stack variables are LIFO and have function scope; heap variables have arbitrary lifetime.

### Q9: What happens when `free` is called with a pointer that was not returned by `malloc`?


**Answer:** Undefined behavior. The allocator's metadata lookup will read garbage, likely causing heap corruption and a crash. The only safe pointer to pass to `free` is one returned by `malloc`, `calloc`, or `realloc` (or NULL, which is a safe no-op).

### Q10: How do you detect memory leaks at runtime?


**Answer:** Use **Valgrind** (runs on synthetic CPU, intercepts all alloc/free → 2â€“20x slowdown) or **AddressSanitizer** (compiler instrumentation via `-fsanitize=address` → ~2x slowdown, ~2x memory). Valgrind catches leaks, use-after-free, and uninitialized reads. ASan catches buffer overflows, use-after-free, and leaks. For production, you can implement a simple wrapper that tracks outstanding allocations (see 11.9.3).

### Q11: What is memory fragmentation? Why is it bad?


**Answer:** Fragmentation occurs when freed blocks of memory are scattered among in-use blocks, so the total free memory is sufficient but no single free block can satisfy a large allocation. Example: after malloc(100), free(ptr) interleaved with smaller allocations can leave the heap with many small free gaps. This is **external fragmentation**. Types: external (holes between blocks) and internal (wasted space within a block due to alignment/padding).

### Q12: How does `malloc` manage memory internally?


**Answer:** `malloc` typically uses a **freelist** of free blocks. When you call `malloc(n)`, it searches for a free block >= n bytes (first-fit, best-fit, or segregated-fit depending on implementation). The block is split if it is much larger than n. Each block has a **metadata header** (size, flags, sometimes linked-list pointers) stored just before the returned pointer. When you call `free`, the block is returned to the freelist and adjacent free blocks are **coalesced** into a larger free block. Large allocations (>= 128 KB on glibc) use `mmap` instead of `brk`.

### Q13: What is the difference between `free` and `delete`?


**Answer:** `free` is a C library function that deallocates memory allocated by `malloc`/`calloc`/`realloc`. `delete` is a C++ operator that calls the destructor of an object and then deallocates memory allocated by `new`. In C++, you must `delete` what was `new`'d and `free` what was `malloc`'d → mixing them is undefined behavior.

### Q14: What does `sizeof(*ptr)` vs `sizeof(type)` give you when `ptr` is a `NULL` pointer?


**Answer:** `sizeof(*ptr)` evaluates the size of the pointed-to type at compile time without dereferencing the pointer. Even if `ptr` is NULL, `sizeof(*ptr)` is safe and returns the correct size. This is the recommended pattern for malloc: `ptr = malloc(sizeof(*ptr))` → it survives changes to the type of `ptr`.

### Q15: Implement a safe `malloc` wrapper with error reporting.


```c
#include <stdio.h>
#include <stdlib.h>

void *safe_malloc(size_t size, const char *file, int line) {
    void *p = malloc(size);
    if (p == NULL) {
        fprintf(stderr, "MEMORY ERROR: malloc(%zu) failed at %s:%d\n",
                size, file, line);
        exit(EXIT_FAILURE);
    }
    return p;
}

#define SAFE_MALLOC(size) safe_malloc((size), __FILE__, __LINE__)

int main(void) {
    int *arr = (int*)SAFE_MALLOC(10 * sizeof(int));
    /* On failure, program exits with error message showing file and line */
    free(arr);
    return 0;
}
```

### Q16: How do you implement a dynamically growing array in C?


**Answer:** Use a struct with `data` pointer, `size` (elements used), and `capacity` (elements allocated). On append, if `size >= capacity`, double capacity using `realloc`. Doubling achieves O(1) amortized append time. Example: see section 11.12.

### Q17: What is the difference between `int *p = malloc(10 * sizeof(int))` and `int p[10]`?


**Answer:** `int p[10]` allocates 10 ints on the **stack** → memory is freed automatically when the function returns. `int *p = malloc(10 * sizeof(int))` allocates 10 ints on the **heap** → memory persists until `free` is called. The array version (`p[10]`) cannot be resized and cannot be returned from the function (it is automatic). The malloc version can be resized with `realloc` and can be safely returned.

### Q18: What is the "N+1" problem with dynamic string allocation?


**Answer:** When allocating memory for a string, you must allocate `strlen(s) + 1` bytes → the +1 is for the null terminator. Forgetting the +1 is the most common string memory bug and leads to buffer overflow when the terminator is written past the allocated region.

```c
char *s = "hello";
char *copy = (char*)malloc(strlen(s) + 1);  /* +1 for '\0' */
strcpy(copy, s);  /* safe */
```

### Q19: How does the OS handle a `malloc` request for a very large block?


**Answer:** For large allocations (typically >= 128 KB on glibc), `malloc` uses `mmap` to allocate a new anonymous memory mapping instead of extending the heap via `brk`. This has two benefits: (1) the memory is released back to the OS when `free` is called (not just returned to the process heap), and (2) it reduces heap fragmentation since large blocks are isolated. The downside is a higher per-allocation overhead (syscall cost, page-aligned).

### Q20: What is a pool (arena) allocator and why use one?


**Answer:** A pool allocator pre-allocates a large block of memory (an arena) and serves smaller allocations by incrementing a pointer within that block. It is extremely fast (O(1) allocation, no freelist search) and eliminates fragmentation for same-sized objects. The downside: individual objects cannot be freed independently → the entire pool is freed at once. Pool allocators are common in real-time systems, game engines, and embedded systems where allocation speed and predictability matter more than individual deallocation. See the challenge problem in section 11.18 for an implementation.

---

## 11.17 Applications in Real Systems

### 11.17.1 Linux Kernel `kmalloc`


The Linux kernel provides `kmalloc` for allocating physically contiguous memory in kernel space. It is similar to `malloc` but uses the kernel's slab allocator:

```c
#include <linux/slab.h>

void *kmalloc(size_t size, gfp_t flags);
void kfree(const void *ptr);
```

- `kmalloc` returns physically contiguous memory (important for DMA).
- `GFP_KERNEL` → normal allocation (may sleep).
- `GFP_ATOMIC` → allocation from interrupt context (never sleeps).
- The kernel uses **slab allocators** → caches of fixed-size objects (e.g., `kmalloc-32`, `kmalloc-64`) to avoid fragmentation and speed up allocation.

### 11.17.2 Embedded `malloc` Implementations


Embedded systems often use custom allocators optimized for limited memory:

```c
/* Simple embedded malloc: fixed-block pool */
#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

#define POOL_SIZE 16
#define BLOCK_SIZE 32

static uint8_t pool[POOL_SIZE][BLOCK_SIZE];
static bool used[POOL_SIZE];

void *embedded_malloc(size_t size) {
    if (size > BLOCK_SIZE) return NULL;
    for (int i = 0; i < POOL_SIZE; i++) {
        if (!used[i]) {
            used[i] = true;
            return pool[i];
        }
    }
    return NULL;  /* Out of pool memory */
}

void embedded_free(void *ptr) {
    if (ptr == NULL) return;
    uintptr_t addr = (uintptr_t)ptr;
    uintptr_t pool_start = (uintptr_t)pool;
    uintptr_t pool_end = pool_start + sizeof(pool);

    if (addr < pool_start || addr >= pool_end) return;  /* Not our pointer */

    int index = (int)((addr - pool_start) / BLOCK_SIZE);
    if ((addr - pool_start) % BLOCK_SIZE != 0) return;  /* Not block-aligned */

    used[index] = false;
}

int main(void) {
    char *a = (char*)embedded_malloc(10);
    char *b = (char*)embedded_malloc(20);
    if (a && b) {
        snprintf(a, 10, "hello");
        snprintf(b, 20, "embedded world");
        printf("a=%s b=%s\n", a, b);
    }
    embedded_free(a);
    embedded_free(b);
    return 0;
}
```

**Output:**
```
a=hello b=embedded world
```

### 11.17.3 Dynamic String Duplication


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Portable strdup implementation (POSIX provides strdup, C standard does not) */
char *my_strdup(const char *s) {
    if (s == NULL) return NULL;
    size_t len = strlen(s);
    char *copy = (char*)malloc(len + 1);
    if (copy == NULL) return NULL;
    memcpy(copy, s, len + 1);  /* Copy including null terminator */
    return copy;
}

int main(void) {
    const char *original = "Hello, Dynamic World!";
    char *dup = my_strdup(original);
    if (dup == NULL) return 1;

    printf("Original: \"%s\"\n", original);
    printf("Duplicate: \"%s\"\n", dup);

    /* Modify the copy → original is unchanged */
    dup[0] = 'h';
    dup[7] = 'd';
    printf("Modified:  \"%s\"\n", dup);
    printf("Original:  \"%s\"\n", original);

    free(dup);
    return 0;
}
```

**Output:**
```
Original: "Hello, Dynamic World!"
Duplicate: "Hello, Dynamic World!"
Modified:  "hello, dynamic World!"
Original:  "Hello, Dynamic World!"
```

### 11.17.4 Dynamic Array of Strings (e.g., Reading File Lines)


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 1024

typedef struct {
    char **data;
    size_t size;
    size_t capacity;
} StringArray;

void sa_init(StringArray *sa) {
    sa->data = NULL;
    sa->size = 0;
    sa->capacity = 0;
}

int sa_append(StringArray *sa, const char *str) {
    if (sa->size >= sa->capacity) {
        size_t new_cap = sa->capacity == 0 ? 4 : sa->capacity * 2;
        char **temp = (char**)realloc(sa->data, new_cap * sizeof(char*));
        if (temp == NULL) return -1;
        sa->data = temp;
        sa->capacity = new_cap;
    }

    sa->data[sa->size] = (char*)malloc(strlen(str) + 1);
    if (sa->data[sa->size] == NULL) return -1;
    strcpy(sa->data[sa->size], str);
    sa->size++;
    return 0;
}

void sa_free(StringArray *sa) {
    for (size_t i = 0; i < sa->size; i++) {
        free(sa->data[i]);  /* Free each string */
    }
    free(sa->data);          /* Free the pointer array */
    sa->data = NULL;
    sa->size = 0;
    sa->capacity = 0;
}

int main(void) {
    /* Simulate reading lines from a file */
    const char *lines[] = {"First line", "Second line", "Third line", "Fourth line"};
    int num_lines = 4;

    StringArray sa;
    sa_init(&sa);

    for (int i = 0; i < num_lines; i++) {
        if (sa_append(&sa, lines[i]) != 0) {
            fprintf(stderr, "Failed to append line %d\n", i);
            sa_free(&sa);
            return 1;
        }
    }

    printf("Read %zu lines:\n", sa.size);
    for (size_t i = 0; i < sa.size; i++) {
        printf("  %zu: %s\n", i, sa.data[i]);
    }

    sa_free(&sa);
    return 0;
}
```

**Output:**
```
Read 4 lines:
  0: First line
  1: Second line
  2: Third line
  3: Fourth line
```

### 11.17.5 Linked List Node Allocation


```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *node_create(int data) {
    Node *n = (Node*)malloc(sizeof(*n));
    if (n == NULL) return NULL;
    n->data = data;
    n->next = NULL;
    return n;
}

void list_free(Node *head) {
    while (head) {
        Node *next = head->next;
        free(head);
        head = next;
    }
}

int main(void) {
    Node *head = node_create(10);
    head->next = node_create(20);
    head->next->next = node_create(30);

    printf("List: ");
    for (Node *cur = head; cur; cur = cur->next) {
        printf("%d ", cur->data);
    }
    printf("\n");

    list_free(head);
    return 0;
}
```

**Output:**
```
List: 10 20 30
```

### 11.17.6 Resizable Hash Table (Chaining)


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Entry {
    char *key;
    int value;
    struct Entry *next;
} Entry;

typedef struct {
    Entry **buckets;
    size_t size;
    size_t count;
} HashTable;

#define HT_INITIAL_SIZE 4

Entry *entry_create(const char *key, int value) {
    Entry *e = (Entry*)malloc(sizeof(*e));
    if (e == NULL) return NULL;
    e->key = (char*)malloc(strlen(key) + 1);
    if (e->key == NULL) { free(e); return NULL; }
    strcpy(e->key, key);
    e->value = value;
    e->next = NULL;
    return e;
}

void entry_free(Entry *e) {
    free(e->key);
    free(e);
}

void ht_init(HashTable *ht) {
    ht->buckets = (Entry**)calloc(HT_INITIAL_SIZE, sizeof(Entry*));
    ht->size = HT_INITIAL_SIZE;
    ht->count = 0;
}

unsigned int hash(const char *key, size_t size) {
    unsigned int h = 0;
    while (*key) {
        h = h * 31 + (unsigned char)*key++;
    }
    return h % size;
}

int ht_insert(HashTable *ht, const char *key, int value) {
    unsigned int idx = hash(key, ht->size);
    Entry *e = entry_create(key, value);
    if (e == NULL) return -1;
    e->next = ht->buckets[idx];
    ht->buckets[idx] = e;
    ht->count++;
    return 0;
}

int ht_get(HashTable *ht, const char *key, int *out_value) {
    unsigned int idx = hash(key, ht->size);
    for (Entry *e = ht->buckets[idx]; e; e = e->next) {
        if (strcmp(e->key, key) == 0) {
            *out_value = e->value;
            return 0;
        }
    }
    return -1;  /* Not found */
}

void ht_free(HashTable *ht) {
    for (size_t i = 0; i < ht->size; i++) {
        Entry *e = ht->buckets[i];
        while (e) {
            Entry *next = e->next;
            entry_free(e);
            e = next;
        }
    }
    free(ht->buckets);
    ht->buckets = NULL;
    ht->size = 0;
    ht->count = 0;
}

int main(void) {
    HashTable ht;
    ht_init(&ht);

    ht_insert(&ht, "apple", 5);
    ht_insert(&ht, "banana", 3);
    ht_insert(&ht, "cherry", 10);

    int val;
    const char *keys[] = {"apple", "banana", "cherry", "grape"};
    for (int i = 0; i < 4; i++) {
        if (ht_get(&ht, keys[i], &val) == 0) {
            printf("%s -> %d\n", keys[i], val);
        } else {
            printf("%s -> not found\n", keys[i]);
        }
    }

    ht_free(&ht);
    return 0;
}
```

**Output:**
```
apple -> 5
banana -> 3
cherry -> 10
grape -> not found
```

---

## 11.18 Summary and Exercises

### Summary


1. **Static memory** is allocated at compile time, lives for the program duration, and is zero-initialized. **Automatic memory** (stack) is allocated at function entry, freed at function exit, and is not initialized. **Dynamic memory** (heap) is allocated at runtime via `malloc`/`calloc`/`realloc`, persists until `free`, and must be managed manually.

2. **Memory layout** of a C program: Text (code), Data (initialized globals), BSS (uninitialized globals), Heap (dynamic → grows up), Stack (locals → grows down).

3. **malloc** allocates uninitialized memory. Always check for NULL return. Use `sizeof` for portability.

4. **calloc** allocates and zero-initializes. It checks for integer overflow in the size multiplication. Prefer for arrays and structs.

5. **realloc** resizes an existing allocation. It may move the block. **Always use a temporary pointer** → on failure, the original block is preserved.

6. **free** returns memory to the heap. After free, the pointer is dangling. Set it to NULL. Never double-free or free non-malloc'd memory.

7. **Memory leaks** occur when allocated memory becomes unreachable. Every `malloc` must have a matching `free`. Use Valgrind to detect leaks.

8. **Dangling pointers** point to freed memory. Set pointers to NULL after free. Never return pointers to local variables.

9. **Memory corruption** (buffer overflow, use-after-free, double free) is undefined behavior → it can crash, corrupt data, or introduce security vulnerabilities. Use AddressSanitizer during development.

10. **Dynamic arrays** achieve O(1) amortized append by doubling capacity. They are the foundation of growable collections.

### Common Pitfalls Checklist


| Pitfall | Symptom | Prevention |
|---------|---------|------------|
| Forgetting NULL check | Crash on OOM | Always check malloc/calloc/realloc return |
| Integer overflow in size | Allocate too little memory | Use calloc for arrays; check before multiply |
| Using uninitialized memory | Garbage values | Use calloc or memset after malloc |
| Off-by-one in array access | Corrupt adjacent data | Bounds-check all indices |
| Forgetting to free | Memory leak, OOM | Match every malloc with a free |
| Freeing non-malloc pointer | Heap corruption | Only free what you malloc'd |
| Double free | Heap corruption, crash | Set ptr to NULL after free |
| Use after free | Data corruption, crash | NULL after free; never dereference freed pointer |
| Direct realloc assignment | Memory leak on realloc failure | Use temp pointer pattern |
| Returning stack address | Dangling pointer | Allocate on heap if data must survive return |

### Quick Reference

| Operation | Code |
|-----------|------|
| Allocate int array of n | `int *arr = malloc(n * sizeof(int));` |
| Allocate and zero | `int *arr = calloc(n, sizeof(int));` |
| Resize | `int *tmp = realloc(arr, new_n * sizeof(int)); if (tmp) arr = tmp;` |
| Free | `free(arr); arr = NULL;` |
| Allocate struct | `struct Point *p = malloc(sizeof(*p));` |
| Check success | `if (!ptr) { fprintf(stderr, "malloc failed\n"); exit(1); }` |
| Safe free macro | `#define SAFE_FREE(p) do { free(p); (p) = NULL; } while(0)` |

### Cross-Application Matrix

| Scenario | Allocation Pattern | Lifetime |
|----------|-------------------|----------|
| Growable array (dynamic array) | `realloc` doubling on overflow | Until `da_free` |
| Linked list node | `malloc` per node on insertion | Until `list_free` |
| String copy | `malloc(strlen(s) + 1); strcpy(dst, s);` | Until caller frees |
| 2D dynamic array | `int **m = malloc(r * sizeof(int*));` then each row | Until caller frees each row then the array |
| Large buffer (10MB+) | `malloc(BIG)` → stack cannot handle | Until explicit `free` |
| Hash table buckets | `calloc(n, sizeof(Entry*))` | Until `ht_free` |
| Read file into memory | `malloc(filesize + 1)` | Until caller frees |
| Pool allocator | Single large malloc, sub-allocated | Until `arena_destroy` |
| Dynamic string array | Array of `char*` with per-string malloc | Until `sa_free` |

### Exercises

#### Review Questions

1. What is the difference between `malloc` and `calloc`? When would you prefer each?
2. Why must you use a temporary pointer with `realloc`? What happens if `realloc` fails?
3. What is a dangling pointer? List three ways to create one and how to prevent each.
4. What is the difference between a memory leak and a use-after-free bug?
5. What does Valgrind report and why is it useful?
6. What is memory fragmentation? How does the allocator mitigate it?
7. Describe the memory layout of a C program. What lives in each segment?
8. Why is `calloc` safer than `malloc` + `memset` for array allocation?

#### Application Problems

1. **Dynamic Integer Array:** Write a program that reads an unknown number of integers from the user (until EOF or a negative number), dynamically growing an array as needed. Print the sum, average, and all values.

2. **Sorted Merge:** Write a function `int *merge(const int *a, int na, const int *b, int nb)` that allocates a new array and merges two sorted arrays into one sorted array. Return the pointer (caller must free it).

3. **2D Matrix with calloc:** Write a program using `calloc` to create a 2D matrix of doubles. Ask the user for rows and columns. Fill with random values, compute the sum of each row, and print the matrix. Free all memory.

4. **Growing String Buffer:** Write a program that reads characters one at a time (using `fgetc`) into a dynamically growing buffer. Start with capacity 10, double when full. Print the final string.

5. **String Splitter:** Implement `char **split(const char *str, char delim, int *count)` that splits a string by a delimiter and returns a dynamically allocated array of dynamically allocated strings. The caller must free all returned memory.

6. **Dynamic Stack:** Implement a dynamic stack (LIFO) using a dynamic array. Provide `push`, `pop`, `peek`, `is_empty`, and `free` operations. Test with 100 elements.

7. **Student Records:** Define a `Student` struct (name, ID, GPA). Use `calloc` to create an array of students. Read data from the user. Print all students sorted by GPA (use `qsort`). Free all memory.

8. **Matrix Transpose:** Write a function that takes a dynamically allocated matrix and returns its transpose (new dynamic allocation). The caller must free both the original and the transpose.

#### Challenge Problem: Arena (Pool) Allocator

Implement a simple arena allocator: a struct that holds a large `malloc`'d block and a current offset. Provide:

- `Arena *arena_create(size_t capacity)` → allocate a new arena.
- `void *arena_alloc(Arena *a, size_t size)` → return a pointer to `size` bytes within the arena (advances the offset; no individual free).
- `void arena_reset(Arena *a)` → reset the offset to 0 (does not call `free`).
- `void arena_destroy(Arena *a)` → free the entire arena block.

Demonstrate that arena allocation is faster than many individual `malloc` calls by timing both approaches for allocating 100,000 small blocks.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct {
    char *memory;
    size_t capacity;
    size_t offset;
} Arena;

Arena *arena_create(size_t capacity) {
    Arena *a = (Arena*)malloc(sizeof(*a));
    if (a == NULL) return NULL;
    a->memory = (char*)malloc(capacity);
    if (a->memory == NULL) { free(a); return NULL; }
    a->capacity = capacity;
    a->offset = 0;
    return a;
}

void *arena_alloc(Arena *a, size_t size) {
    /* Align to 8 bytes */
    size_t aligned = (size + 7) & ~7;
    if (a->offset + aligned > a->capacity) return NULL;
    void *ptr = a->memory + a->offset;
    a->offset += aligned;
    return ptr;
}

void arena_reset(Arena *a) {
    a->offset = 0;
}

void arena_destroy(Arena *a) {
    if (a) {
        free(a->memory);
        free(a);
    }
}

int main(void) {
    const int NUM_ALLOCS = 100000;
    clock_t start, end;

    /* Arena allocation */
    Arena *arena = arena_create(1024 * 1024);  /* 1 MB arena */
    if (arena == NULL) return 1;

    start = clock();
    for (int i = 0; i < NUM_ALLOCS; i++) {
        int *p = (int*)arena_alloc(arena, sizeof(int));
        if (p == NULL) { printf("Arena exhausted at iteration %d\n", i); break; }
        *p = i;
    }
    end = clock();
    double arena_time = (double)(end - start) / CLOCKS_PER_SEC;
    arena_destroy(arena);

    /* Individual malloc allocation */
    start = clock();
    for (int i = 0; i < NUM_ALLOCS; i++) {
        int *p = (int*)malloc(sizeof(int));
        if (p == NULL) break;
        *p = i;
        free(p);
    }
    end = clock();
    double malloc_time = (double)(end - start) / CLOCKS_PER_SEC;

    printf("Arena allocator: %.6f seconds for %d allocations\n",
           arena_time, NUM_ALLOCS);
    printf("malloc + free:   %.6f seconds for %d allocations\n",
           malloc_time, NUM_ALLOCS);
    printf("Speedup: %.2fx\n", malloc_time / arena_time);

    return 0;
}
```

**Sample output:**
```
Arena allocator: 0.000231 seconds for 100000 allocations
malloc + free:   0.048922 seconds for 100000 allocations
Speedup: 211.78x
```

---

> **Chapter 11: Dynamic Memory Allocation** → End of chapter.
>
> This chapter covered the complete depth of C dynamic memory management: static vs dynamic allocation, stack vs heap, the full memory layout, `malloc`/`calloc`/`realloc`/`free` with analogies, dry runs, complexity analysis, and edge cases. It covered memory leaks, dangling pointers, memory corruption, dynamic arrays, Valgrind detection, comparison tables, 20 interview Q&As, and real-world applications including arena allocators, linked lists, hash tables, and embedded pool allocators. The unifying theme: **every allocation must be matched with a free → the heap is not a garbage collector.**
