# Chapter 11: Dynamic Memory Allocation

## Learning Objectives

- Allocate memory at runtime using `malloc`, `calloc`, and `realloc`
- Release memory with `free` to prevent leaks
- Create and resize dynamic arrays
- Detect and avoid memory leaks, dangling pointers, and double-free errors
- Use Valgrind to verify memory correctness

## 11.1 Motivation for Dynamic Allocation

Static and automatic allocation have limitations:

- **Static (global) memory** — size fixed at compile time, persists for program lifetime.
- **Automatic (local) memory** — size fixed at compile time, exists only within the function scope.

Dynamic allocation solves two problems:

1. **Unknown size at compile time:** The user may need to enter how many elements to store.
2. **Variable lifetime:** Allocated memory persists until explicitly freed, surviving function returns.

## 11.2 `malloc` — Memory Allocation

```c
void *malloc(size_t size);
```

`malloc` allocates `size` bytes of uninitialized memory and returns a pointer to the first byte. Returns `NULL` if allocation fails.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n;
    printf("How many integers? ");
    scanf("%d", &n);

    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        return 1;
    }

    /* Use the array */
    for (int i = 0; i < n; i++) {
        arr[i] = i * i;
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
How many integers? 5
arr[0] = 0
arr[1] = 1
arr[2] = 4
arr[3] = 9
arr[4] = 16
```

**Key points:**

- Always check the return value for `NULL`.
- Do not cast the return of `malloc` in C (it is unnecessary — `void*` implicitly converts to any pointer type). In C++, the cast is required.
- The allocated memory is **not initialized** — it contains whatever was in that memory.
- Use `sizeof(type)` to compute the correct size; avoid hardcoding byte counts.

## 11.3 `calloc` — Contiguous Allocation

```c
void *calloc(size_t count, size_t element_size);
```

`calloc` allocates memory for `count` elements of `element_size` bytes each and **initializes all bytes to zero**.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n = 5;
    int *arr = (int*)calloc(n, sizeof(int));

    if (arr == NULL) {
        fprintf(stderr, "Allocation failed\n");
        return 1;
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
```

## 11.4 `realloc` — Resizing Memory

```c
void *realloc(void *ptr, size_t new_size);
```

`realloc` resizes a previously allocated memory block. It may move the block to a new location, copying the old data automatically.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *arr = (int*)malloc(3 * sizeof(int));
    if (arr == NULL) return 1;

    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;

    /* Expand to hold 5 elements */
    int *temp = (int*)realloc(arr, 5 * sizeof(int));
    if (temp == NULL) {
        free(arr);      /* realloc failed — original block is still valid */
        return 1;
    }
    arr = temp;

    arr[3] = 40;
    arr[4] = 50;

    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    free(arr);
    return 0;
}
```

**Output:**
```
10 20 30 40 50
```

**Important realloc rules:**

- If `ptr` is `NULL`, `realloc` behaves like `malloc`.
- If `new_size` is 0, behavior is implementation-defined (usually like `free`).
- Always assign the result to a temporary pointer first — if `realloc` returns `NULL`, the original block is still valid. Assigning directly to `arr` would leak the original block.

## 11.5 `free` — Deallocating Memory

```c
void free(void *ptr);
```

`free` releases dynamically allocated memory back to the heap. The pointer must have been returned by `malloc`, `calloc`, or `realloc`.

```c
int *arr = malloc(10 * sizeof(int));
/* use arr */
free(arr);      /* release memory */
arr = NULL;     /* optional — prevents use-after-free */
```

**After `free`**, the pointer is a **dangling pointer**. Dereferencing it is undefined behavior.

## 11.6 Common Memory Management Errors

### 11.6.1 Memory Leak

```c
void leaky(void)
{
    int *p = malloc(100);
    /* forget to free(p) — memory leaked */
}
```

Each call to `leaky()` loses 100 bytes. Over time, the program consumes all available memory.

### 11.6.2 Use-After-Free

```c
int *p = malloc(sizeof(int));
*p = 42;
free(p);
*p = 100;        /* UNDEFINED BEHAVIOR — writing to freed memory */
```

### 11.6.3 Double Free

```c
int *p = malloc(sizeof(int));
free(p);
free(p);         /* UNDEFINED BEHAVIOR — double free */
```

### 11.6.4 Buffer Overflow

```c
int *arr = malloc(5 * sizeof(int));
arr[10] = 42;    /* UNDEFINED BEHAVIOR — writing past allocated region */
```

### 11.6.5 Freeing Non-Dynamic Memory

```c
int x = 42;
int *p = &x;
free(p);         /* UNDEFINED BEHAVIOR — p was not returned by malloc */
```

## 11.7 Dynamic Arrays

A dynamic array can grow and shrink as needed:

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} DynArray;

void da_init(DynArray *da)
{
    da->data = NULL;
    da->size = 0;
    da->capacity = 0;
}

void da_append(DynArray *da, int value)
{
    if (da->size >= da->capacity) {
        size_t new_cap = da->capacity == 0 ? 4 : da->capacity * 2;
        int *temp = (int*)realloc(da->data, new_cap * sizeof(int));
        if (temp == NULL) {
            fprintf(stderr, "Realloc failed\n");
            return;
        }
        da->data = temp;
        da->capacity = new_cap;
    }
    da->data[da->size++] = value;
}

void da_free(DynArray *da)
{
    free(da->data);
    da->data = NULL;
    da->size = 0;
    da->capacity = 0;
}

int main(void)
{
    DynArray arr;
    da_init(&arr);

    for (int i = 0; i < 20; i++) {
        da_append(&arr, i * 10);
    }

    for (size_t i = 0; i < arr.size; i++) {
        printf("%d ", arr.data[i]);
    }
    printf("\n");

    da_free(&arr);
    return 0;
}
```

**Output:**
```
0 10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190
```

## 11.8 Detecting Memory Leaks with Valgrind

Valgrind is a tool that detects memory management errors.

```bash
gcc -g -o program program.c
valgrind --leak-check=full ./program
```

**Example output for a leaky program:**
```
==12345== HEAP SUMMARY:
==12345==     in use at exit: 100 bytes in 1 blocks
==12345==   total heap usage: 1 allocs, 0 frees, 100 bytes allocated
==12345==
==12345== 100 bytes in 1 blocks are definitely lost in loss record 1 of 1
==12345==    at 0x4845868: malloc (vg_replace_malloc.c:381)
==12345==    by 0x10916B: main (program.c:7)
==12345==
==12345== LEAK SUMMARY:
==12345==    definitely lost: 100 bytes in 1 blocks
```

## 11.9 Best Practices

1. **Always check the return value** of `malloc`, `calloc`, and `realloc`.
2. **Free memory in the same scope** where it was allocated, when possible.
3. **Set pointers to `NULL` after freeing** to prevent use-after-free.
4. **Use a temporary pointer for `realloc`** to avoid leaking on failure.
5. **Document ownership** — who is responsible for freeing dynamically allocated memory.
6. **Prefer `calloc` when zero-initialization is needed** over `malloc` + `memset`.

## Summary

- `malloc(n)` allocates `n` bytes. `calloc(n, size)` allocates and zero-initializes. `realloc(ptr, n)` resizes.
- `free(ptr)` releases allocated memory. After `free`, the pointer is a dangling pointer.
- Memory leaks, use-after-free, double-free, and buffer overflows are serious and common errors.
- Dynamic arrays grow by doubling capacity when full, achieving amortized O(1) appends.
- Valgrind detects leaks and memory errors.
- Always check allocation results; never assume memory is available.

## Exercises

### Review Questions

1. What is the difference between `malloc` and `calloc`? When would you prefer each?
2. Why must you use a temporary pointer with `realloc`? What happens if `realloc` fails?
3. What is a dangling pointer? How does it arise? How can you prevent it?
4. What is the difference between a memory leak and a use-after-free bug?
5. What does Valgrind report and why is it useful?

### Application Problems

1. Write a program that reads an unknown number of integers from the user (until the user enters a negative number), dynamically growing an array as needed. Print the sum and average.
2. Write a function `int *merge(const int *a, int na, const int *b, int nb)` that dynamically allocates a new array and merges two sorted arrays into one sorted array. Return the pointer and let the caller free it.
3. Write a program using `calloc` to create a 2D matrix of doubles. Ask the user for rows and columns. Fill with random values, compute the sum of each row, and print the matrix. Free all memory.
4. Write a program that repeatedly reallocs a buffer to hold a growing string: start with a 10-char buffer, read characters one at a time (or use `fgetc`), and double the buffer whenever it fills up.

### Challenge Problem

Implement a simple **arena allocator**: a struct that holds a large `malloc`'d block and a current offset. Provide functions:

- `Arena *arena_create(size_t capacity)` — allocate a new arena.
- `void *arena_alloc(Arena *a, size_t size)` — return a pointer to `size` bytes within the arena (just advance the offset).
- `void arena_reset(Arena *a)` — reset the offset to 0 (does not call `free`).
- `void arena_destroy(Arena *a)` — free the entire arena block.

Demonstrate that arena allocation is faster than many individual `malloc` calls by timing both approaches for allocating 100,000 small blocks.
