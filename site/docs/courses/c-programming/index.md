---
id: index
slug: /c-programming
title: "C Programming — Complete University Textbook"
sidebar_label: "C Programming — Complete University Textbook"
sidebar_position: 19
---
# C Programming — Complete University Textbook

## Course Description

This course provides an exhaustive treatment of the C programming language as defined by the C11 standard (ISO/IEC 9899:2011). Students progress from fundamental language constructs through advanced topics including dynamic memory management, data structures, the standard library, and systems-level programming. Emphasis is placed on writing correct, efficient, and portable C code. Each chapter combines theoretical foundations with complete, runnable code examples that demonstrate real-world usage patterns.

## Prerequisites

- Familiarity with basic computer operation (file management, command-line interface)
- No prior programming experience required — the course begins from first principles
- High-school level mathematics

## Study Path

This textbook is designed as a linear progression. Each chapter builds upon its predecessors. Students are strongly advised to work through the chapters in order and to type out and compile every code example.

```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10
                                              ↓
11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19
```

Chapters 01–09 form the foundation. Chapters 10–17 cover intermediate data structures and memory management. Chapters 18–19 cover advanced and systems-level topics.

## Chapter Listing

| #  | Chapter | Topics |
|----|---------|--------|
| 01 | [Introduction](01-introduction.md) | History, compiler setup, hello world, compilation stages, program structure |
| 02 | [Variables and Data Types](02-variables-datatypes.md) | Types, sizeof, constants, printf/scanf formatting, type conversion |
| 03 | [Operators](03-operators.md) | Arithmetic, relational, logical, bitwise, assignment, ternary, precedence |
| 04 | [Control Flow](04-control-flow.md) | if/else, switch, ternary, goto, decision-making patterns |
| 05 | [Loops](05-loops.md) | for, while, do-while, nested loops, break, continue, infinite loops |
| 06 | [Arrays](06-arrays.md) | 1D, 2D, multidimensional arrays, array parameters, variable-length arrays |
| 07 | [Strings](07-strings.md) | String literals, char arrays, string.h functions, string I/O |
| 08 | [Functions](08-functions.md) | Declaration/definition, parameters, scope, storage classes, recursive preliminaries |
| 09 | [Pointers](09-pointers.md) | Pointer arithmetic, arrays and pointers, function pointers, void pointers |
| 10 | [Structures and Unions](10-structures-unions.md) | struct, typedef, nested structs, unions, bit fields, alignment |
| 11 | [Dynamic Memory Allocation](11-dma.md) | malloc, calloc, realloc, free, dynamic arrays, memory leak detection |
| 12 | [File Handling](12-file-handling.md) | fopen/fclose, formatted I/O, binary I/O, file positioning, error handling |
| 13 | [Preprocessor](13-preprocessor.md) | #define, macros, conditional compilation, #pragma, predefined macros |
| 14 | [Recursion](14-recursion.md) | Recursive functions, tail recursion, classic problems, recursion vs iteration |
| 15 | [Linked Lists](15-linked-lists.md) | Singly, doubly, circular linked lists, insertion, deletion, traversal |
| 16 | [Stacks and Queues](16-stacks-queues.md) | Array/list implementations, circular queue, applications |
| 17 | [Standard Library Reference](17-standard-library.md) | stdlib.h, stdio.h, string.h, math.h, time.h, ctype.h, assert.h, setjmp.h |
| 18 | [Advanced C](18-advanced-c.md) | Variadic functions, signal handling, errno, VLAs, complex numbers, inline, POSIX |

## Compiler Setup

**GCC (MinGW on Windows):**
```bash
gcc --version                     # verify installation
gcc -std=c11 -Wall -Wextra -o program source.c
./program
```

**Clang:**
```bash
clang --version
clang -std=c11 -Wall -Wextra -o program source.c
./program
```

**Common flags:**
| Flag | Purpose |
|------|---------|
| `-std=c11` | Use the C11 standard |
| `-Wall` | Enable most warning messages |
| `-Wextra` | Enable additional warnings |
| `-Werror` | Treat warnings as errors |
| `-g` | Include debug symbols (for GDB) |
| `-O2` | Optimize for speed |
| `-o <file>` | Name the output executable |

## How to Use This Textbook

1. Read each chapter sequentially.
2. Type out and compile every code example. Experiment by modifying them.
3. Complete all review questions and application problems.
4. Attempt the challenge problem — these are designed to stretch understanding.
5. Use the chapter links in the table above to navigate.
