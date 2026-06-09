---
title: Process vs Thread
---

# Process vs Thread

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

Asked in 80% of CS-core rounds. If you confuse these, the interviewer will pivot the round into a deeper grilling on OS basics.

This drill gives you a 3-sentence answer, a memory-layout diagram, and the 3 follow-ups they always fire.

---

## Inhale.

The interviewer asks: *"What's the difference between a process and a thread?"*

Don't say *"a thread is a smaller process."* That answer triggers follow-ups designed to expose you.

---

## The Script — 3 sentences

> *"A process is an independent program with its own memory space — code, heap, stack, file descriptors. A thread is a lightweight unit of execution that lives inside a process and shares memory with other threads in the same process — but each thread has its own stack and registers."*
>
> *"That's why process-to-process communication is expensive (IPC, copy data across address spaces), but thread-to-thread communication is cheap (read the same heap). The tradeoff is threads need synchronization — mutexes, locks — because shared memory means race conditions."*
>
> *"Rule of thumb: use processes for isolation and fault tolerance (one crash doesn't kill the rest), use threads for parallelism within one task (parallel matrix multiplication, web server request handlers)."*

Three sentences. Definition → cost tradeoff → when to use which. **45 seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **the memory model**. Most candidates say *"thread is smaller"*. You said *"shares memory, own stack and registers."* That's the actual technical difference.

Sentence 2 — **the tradeoff with mechanism**. *"IPC vs shared heap, but you need locks"* — you named both the win and the cost of threads.

Sentence 3 — **the practical rule**. Interviewer is satisfied because you can pick the right tool, not just recite a definition.

---

## Show me the diagram

```
PROCESS (Chrome browser)
┌──────────────────────────────┐
│  Code   Heap   Globals       │ ← Shared across all threads
├──────────┬────────┬──────────┤
│ Thread 1 │ Thread2│ Thread 3 │
│  Stack   │ Stack  │  Stack   │ ← Each thread has its own
│  Regs    │ Regs   │  Regs    │
│  PC      │ PC     │  PC      │
└──────────┴────────┴──────────┘
        |          |          |
    File descriptors (shared)
    Open sockets (shared)
```

Two processes do **not** share that top section. Two threads in the same process **do**.

---

## Quick code — Python thread vs process

```python
# Threads — share memory
from threading import Thread

counter = 0  # shared
def increment():
    global counter
    for _ in range(100000):
        counter += 1  # RACE CONDITION without lock

t1 = Thread(target=increment)
t2 = Thread(target=increment)
t1.start(); t2.start(); t1.join(); t2.join()
# counter is NOT 200000 — it's some smaller number
```

```python
# Processes — separate memory
from multiprocessing import Process, Value

counter = Value('i', 0)  # explicit shared memory needed

def increment(c):
    for _ in range(100000):
        with c.get_lock():
            c.value += 1

p1 = Process(target=increment, args=(counter,))
p2 = Process(target=increment, args=(counter,))
p1.start(); p2.start(); p1.join(); p2.join()
```

Notice: with threads, the bug is *implicit* (shared global). With processes, you have to *opt in* to sharing.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 3-sentence script, 5×.** Aloud. Time it. 40–50 seconds.
- [ ] **Day 2 — Sketch the memory diagram from memory.** Whiteboard or paper.
- [ ] **Day 3 — Write the Python thread race-condition example.** Run it. See the wrong counter value.
- [ ] **Day 4 — Drill the 3 follow-ups below.**
- [ ] **Day 5 — Cold delivery.** Friend says *"Process vs thread?"* — you deliver script + diagram with no notes.

---

## Follow-up questions you must be ready for

### "Which is faster to create?"

> *"Threads — by a lot. Creating a process requires the OS to allocate a new address space, copy file descriptors, set up page tables. Creating a thread just allocates a stack and registers. On Linux, thread creation is ~10× cheaper than process creation."*

### "What's the GIL in Python and how does it relate?"

> *"Python's Global Interpreter Lock means only one thread executes Python bytecode at a time, even on multi-core. So Python threads give you concurrency for I/O-bound work (waiting on network/disk), but for CPU-bound parallelism you need `multiprocessing`. Other languages — Java, Go, C++ — don't have a GIL and threads do parallelize on multi-core."*

### "What's a 'green thread' or 'goroutine'?"

> *"User-space threads — scheduled by the language runtime instead of the OS. Goroutines in Go are the textbook example — you can spawn millions because they cost ~2KB each, vs OS threads at ~1MB. Tradeoff: when a green thread blocks on a syscall, the runtime has to handle it cleanly, or it blocks the entire underlying OS thread."*

---

## Recovery — when you blank

If you forget the memory model, lead with the practical version:

> *"Two browser tabs are two processes — if one crashes, the other survives. Two tabs inside the same browser process would be two threads — they share memory, but a crash takes both down."*

Then back into the technical: *"That's because processes have separate address spaces, and threads share..."* — and you're back on track.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| *"Thread is a smaller process"* | Vague, triggers follow-up grilling | Name the memory model explicitly |
| Forgets that threads need locks | Misses the entire concurrency problem | Always mention race conditions / mutex |
| Says threads are always faster | Wrong for CPU-bound in Python (GIL) | Distinguish I/O-bound vs CPU-bound |
| Confuses with coroutines/async | Different concept | Coroutines = cooperative, threads = preemptive |

---

## Variants

=== "30s — quick screen"

    *"Process has its own memory. Thread shares memory with other threads in the same process but has its own stack. Threads are cheaper to create and switch but need synchronization."*

=== "60s — default"

    See main 3-sentence script above.

=== "3min — deep dive"

    Deliver the script. Draw the diagram. Mention the GIL. Bring up green threads / goroutines as a modern alternative. Close with *"Want me to walk through a producer-consumer using threads vs processes?"*

---

## After you drill this

When this drill is **● Drilled**, the most common OS-round opener is locked.

Next drills in OS:

→ **[Context Switching](context-switching.md)** — what happens during the switch
→ **[Deadlock](deadlock.md)** — Coffman's 4 conditions
→ **[Mutex vs Semaphore](mutex-vs-semaphore.md)** — synchronization primitives

---

*Update your status badge once you can deliver the 3-sentence script with the diagram, and answer all 3 follow-ups cold.*
