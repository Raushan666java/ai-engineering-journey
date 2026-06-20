# Chapter 9: Pointers

> **Previous:** [Functions](./08-functions.md) | **Next:** [Structures and Unions](./10-structures-unions.md)

## Learning Objectives

- Declare and use pointer variables
- Perform pointer arithmetic safely
- Understand the relationship between arrays and pointers
- Pass pointers to functions for output parameters
- Use `void` pointers for type-generic operations
- Declare and use function pointers


### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Pointer Basics | A pointer stores the memory address of another variable | Declare with `type *ptr;` and get an address with `&` |
| Dereferencing | `*ptr` accesses the value at the stored address | Dereferencing an uninitialized or NULL pointer is undefined behavior |
| Pointer Arithmetic | Adding N to a pointer advances by N × sizeof(type) | `ptr++` moves to the next element of the pointed-to type |
| Pointers and Arrays | Array names decay to pointers; `arr[i]` is `*(arr + i)` | The array subscript operator works via pointer arithmetic |
| Pointers to Pointers | `**ptr` for multi-level indirection | Used for 2D arrays, dynamic arrays of strings, and modifying pointer parameters |
| Function Pointers | Pointers that store the address of a function | Enables callbacks, state machines, and dispatch tables |


```mermaid
flowchart LR
    A["9.1 Pointer Basics"] --> B["9.2 Dereferencing"]
    B --> C["9.3 Pointer Arithmetic"]
    C --> D["9.4 Pointers & Arrays"]
    D --> E["9.5 Pointers to Pointers"]
    E --> F["9.6 Function Pointers"]
    F --> G["Summary & Exercises"]
```
![C Pointers: Fundamentals, Arithmetic, Function Pointers and Pitfalls](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch09-pointers.png)

## 9.1 Pointer Fundamentals

A pointer is a variable that holds the memory address of another variable.

```c
int x = 42;
int *p = &x;     /* p holds the address of x */
```

| Operator | Name | Meaning |
|----------|------|---------|
| `&` | Address-of | Returns the memory address of a variable |
| `*` | Dereference | Accesses the value at the address stored in the pointer |

```c
#include <stdio.h>

int main(void)
{
    int x = 42;
    int *p = &x;

    printf("Value of x:          %d\n", x);
    printf("Address of x:        %p\n", (void*)&x);
    printf("Value of p (address):%p\n", (void*)p);
    printf("Value at *p:         %d\n", *p);

    *p = 100;   /* modify x through the pointer */
    printf("New value of x:      %d\n", x);

    return 0;
}
```

**Output (addresses will vary):**
```
Value of x:          42
Address of x:        0x7fff5fbff70c
Value of p (address):0x7fff5fbff70c
Value at *p:         42
New value of x:      100
```

### 9.1.1 Pointer Declaration Syntax

```c
int *p;       /* p is a pointer to int */
int* p;       /* same â€” spacing does not matter */
int *p, q;    /* p is a pointer to int, q is an int */
int *p, *q;   /* both p and q are pointers to int */
```

### 9.1.2 Null Pointers

A null pointer points to nothing. It is used to indicate that a pointer is not valid.

```c
int *p = NULL;       /* NULL is a macro defined in <stddef.h> */
int *q = 0;          /* equivalent */
```

**Always check for NULL before dereferencing:**
```c
if (p != NULL) {
    printf("%d\n", *p);
}
```

Dereferencing a null pointer is undefined behavior â€” typically a segmentation fault.

> **One-Sentence Takeaway:** A pointer is a variable whose value is a memory address — & gets an address, * accesses the value

## 9.2 Pointer Arithmetic

Pointer arithmetic operates in units of the pointed-to type's size.

```c
#include <stdio.h>

int main(void)
{
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;        /* points to arr[0] */

    printf("p  points to: %d\n", *p);
    printf("p+1 points to: %d\n", *(p + 1));
    printf("p+2 points to: %d\n", *(p + 2));

    /* Equivalent array indexing */
    printf("p[3] = %d\n", p[3]);   /* 40 */

    /* Pointer difference */
    int *q = &arr[4];
    printf("q - p = %td\n", q - p);   /* 4 elements apart */

    return 0;
}
```

**Output:**
```
p  points to: 10
p+1 points to: 20
p+2 points to: 30
p[3] = 40
q - p = 4
```

**Important rules:**

- `p + n` advances the pointer by `n * sizeof(*p)` bytes.
- `p - q` returns the number of elements between the two pointers (type `ptrdiff_t`, printed with `%td`).
- Pointers to the same array can be compared with `<`, `>`, `<=`, `>=`.
- Arithmetic beyond the array bounds (except one past the last element) is undefined behavior.


> **One-Sentence Takeaway:** Dereferencing a NULL or uninitialized pointer causes undefined behavior
> **Warning:** Dereferencing NULL causes a segmentation fault always check pointers first.
## 9.3 Arrays and Pointers

In most contexts, an array name decays to a pointer to its first element.

```c
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;          /* equivalent to: int *p = &arr[0]; */
```

```c
#include <stdio.h>

int main(void)
{
    int arr[] = {10, 20, 30};

    printf("arr   = %p\n", (void*)arr);
    printf("&arr  = %p\n", (void*)&arr);     /* same address */
    printf("&arr[0]=%p\n", (void*)&arr[0]);  /* same address */

    /* Different types: arr decays to int*, &arr is int(*)[3] */
    printf("arr+1 = %p (int*)\n", (void*)(arr + 1));
    printf("&arr+1 = %p (int(*)[3])\n", (void*)(&arr + 1));

    return 0;
}
```

**Key difference:** `arr + 1` advances by `sizeof(int)` bytes. `&arr + 1` advances by `sizeof(arr)` bytes (the entire array).


> **One-Sentence Takeaway:** Pointer arithmetic automatically scales by the size of the pointed-to type
> **Pro Tip:** void pointers require explicit casting before dereference or arithmetic.
## 9.4 Pointers to Functions

A function pointer stores the address of a function.

```c
return_type (*pointer_name)(parameter_types);
```

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

int main(void)
{
    int (*operation)(int, int);   /* pointer to function taking two ints, returning int */

    operation = add;
    printf("add(5, 3) = %d\n", operation(5, 3));

    operation = subtract;
    printf("sub(5, 3) = %d\n", operation(5, 3));

    operation = multiply;
    printf("mul(5, 3) = %d\n", operation(5, 3));

    return 0;
}
```

**Output:**
```
add(5, 3) = 8
sub(5, 3) = 2
mul(5, 3) = 15
```

### 9.4.1 Function Pointer Arrays

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }
int divide(int a, int b) { return b ? a / b : 0; }

int main(void)
{
    int (*ops[])(int, int) = {add, sub, mul, divide};
    char *names[] = {"add", "sub", "mul", "div"};

    for (int i = 0; i < 4; i++) {
        printf("%s(10, 3) = %d\n", names[i], ops[i](10, 3));
    }

    return 0;
}
```

**Output:**
```
add(10, 3) = 13
sub(10, 3) = 7
mul(10, 3) = 30
div(10, 3) = 3
```


> **One-Sentence Takeaway:** Array indexing arr[i] is equivalent to pointer arithmetic *(arr + i)
> **Remember:** The array name is not a modifiable lvalue you cannot assign to arr++.
## 9.5 `void` Pointers

A `void*` is a generic pointer that can hold the address of any type. It must be cast before dereferencing.

```c
#include <stdio.h>

int main(void)
{
    int x = 42;
    double y = 3.14;
    char c = 'Z';

    void *ptr;

    ptr = &x;
    printf("Integer: %d\n", *(int*)ptr);

    ptr = &y;
    printf("Double:  %.2f\n", *(double*)ptr);

    ptr = &c;
    printf("Char:    %c\n", *(char*)ptr);

    return 0;
}
```

**Output:**
```
Integer: 42
Double:  3.14
Char:    Z
```

**Pointer arithmetic on `void*`:** Not allowed in standard C (the size is unknown). GCC permits it as an extension (treating it as byte-sized).


> **One-Sentence Takeaway:** Pointers to pointers enable multi-level indirection for dynamic structures
## 9.6 Pointers to Pointers

A pointer can point to another pointer, creating multiple levels of indirection.

```c
#include <stdio.h>

int main(void)
{
    int x = 42;
    int *p = &x;        /* pointer to int */
    int **pp = &p;      /* pointer to pointer to int */

    printf("x  = %d\n", x);
    printf("*p = %d\n", *p);
    printf("**pp = %d\n", **pp);

    return 0;
}
```

**Output:**
```
x  = 42
*p = 42
**pp = 42
```


> **One-Sentence Takeaway:** Function pointers store the address of a function for callback mechanisms
## 9.7 Common Pointer Mistakes

### Uninitialized Pointer
```c
int *p;
*p = 42;    /* UNDEFINED â€” p points to random memory */
```

### Dangling Pointer
```c
int *p = malloc(sizeof(int));
free(p);
*p = 42;    /* UNDEFINED â€” use-after-free */
```

### Buffer Overflow via Pointer
```c
int arr[5];
int *p = arr;
*(p + 10) = 100;    /* UNDEFINED â€” out of bounds */
```

### Leaking Address of Local
```c
int *bad(void) {
    int x = 42;
    return &x;       /* UNDEFINED â€” stack frame is gone */
}
```

## 9.8 `const` and Pointers

The placement of `const` changes what is immutable:

```c
const int *p;       /* pointer to const int â€” cannot change *p, can change p */
int const *p;       /* same as above */
int * const p;      /* const pointer to int â€” cannot change p, can change *p */
const int * const p; /* const pointer to const int â€” cannot change either */
```

```c
int x = 10, y = 20;

const int *p1 = &x;
p1 = &y;            /* OK */
/* *p1 = 30; â€” ERROR: cannot modify through const pointer */

int * const p2 = &x;
*p2 = 30;           /* OK */
/* p2 = &y; â€” ERROR: cannot change pointer itself */
```

## 9.9 Pointers and `const` in Function Parameters

Using `const` in parameters signals that the function does not modify the pointed-to data:

```c
void print_array(const int *arr, size_t n)
{
    for (size_t i = 0; i < n; i++) {
        printf("%d ", arr[i]);   /* read-only access */
    }
    printf("\n");
}
```

## Concept Comparison Table

| Expression | Meaning | Value |
|-----------|---------|-------|
| `int x = 5;` | Declare integer | 5 in memory |
| `int *p = &x;` | Pointer to x | Address of x |
| `*p` | Dereference p | 5 |
| `p + 1` | Next int address | `addr(x) + 4` |
| `int **pp = &p;` | Pointer to pointer | Address of p |
| `**pp` | Double dereference | 5 |
| `void *v = &x;` | Generic pointer | Address of x (no type) |

## Quick Reference

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declare pointer | `type *ptr;` | `int *p;` |
| Get address | `ptr = &var;` | `p = &x;` |
| Dereference | `value = *ptr;` | `int y = *p;` |
| Null check | `if (ptr != NULL)` | `if (p) { ... }` |
| Advance | `ptr++` or `ptr += N` | `p += 3;` |
| Difference | `ptr1 - ptr2` | Number of elements between |
| Function pointer | `int (*fp)(int);` | `fp = &func;` |

## Cross-Application Matrix

| Domain | Pointer Usage |
|--------|-------------|
| Dynamic arrays | `int *arr = malloc(n * sizeof(int));` |
| Linked lists | `struct node *next;` for chaining |
| Callback systems | `void (*on_event)(int code, void *data);` |
| String arrays | `char **argv;` for command-line arguments |
| Buffer management | `void *buf; memcpy(buf, src, size);` |

## Chapter Quiz

1. What does `*(arr + 3)` do?
   A) Accesses arr[3]
   B) Adds 3 to the pointer
   C) Accesses arr[0] + 3
   D) Compiler error

<details><summary>Answer</summary>**A)** `*(arr + 3)` is equivalent to `arr[3]` by definition.</details>

2. Why does `int *p = NULL; *p = 5;` crash?
   A) Syntax error
   B) Dereferencing a NULL pointer is undefined behavior
   C) NULL is read-only
   D) Cannot assign to a pointer

<details><summary>Answer</summary>**B)** Dereferencing NULL causes a segmentation fault.</details>

3. If `int x = 10; int *p = &x;`, what is `*&x`?
   A) Address of x
   B) 10
   C) Address of p
   D) Compiler error

<details><summary>Answer</summary>**B)** `&x` gets the address; `*` dereferences it — `*&x` is the same as `x`, which is 10.</details>

## Summary

- A pointer stores a memory address; `&` gets an address, `*` dereferences it.
- NULL pointers indicate invalidity â€” always check before dereferencing.
- Pointer arithmetic advances by `sizeof(pointed_type)` bytes; only valid within the same array.
- Arrays decay to pointers to their first element in most contexts.
- Function pointers enable callbacks and dynamic dispatch.
- `void*` provides generic pointer storage but requires casting before use.
- `const` with pointers controls whether the pointer or the pointed-to data is immutable.
- Dangling pointers and uninitialized pointers are serious sources of undefined behavior.

## Exercises

### Review Questions

1. Explain the difference between `int *p = &x` and `*p = x`.
2. What is pointer arithmetic? If `int *p` points to address 1000, what is `p + 3` on a system with 4-byte integers?
3. What happens when you dereference a NULL pointer? What happens when you dereference an uninitialized pointer?
4. What is the type of `arr + 1` vs `&arr + 1` when `arr` is `int arr[10]`?
5. What does `const int *p` protect? What about `int * const p`?

### Application Problems

1. Write a function `void find_min_max(const int *arr, int n, int *min, int *max)` that finds the minimum and maximum values in an array using output parameters.
2. Write a program that uses an array of function pointers to implement a simple arithmetic calculator. The supported operations are `+`, `-`, `*`, `/`, `%`. Use a menu loop to ask the user for two numbers and an operator.
3. Write a function `void reverse_array(int *arr, int n)` that reverses an array in-place using pointers (not array indexing).
4. Write a function `void *my_memcpy(void *dest, const void *src, size_t n)` that copies `n` bytes from `src` to `dest` using `void*` casting. Test it with `int` arrays and `char` arrays.

### Challenge Problem

Write a program that implements a generic bubble sort function `void bubble_sort(void *base, size_t n, size_t elem_size, int (*compar)(const void *, const void *))`. The function should sort any array type using a user-supplied comparison function. Test it by sorting an array of integers (ascending), an array of doubles (descending), and an array of strings by length. This mirrors the interface of the standard library's `qsort` function.
