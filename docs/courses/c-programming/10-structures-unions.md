# Chapter 10: Structures and Unions

## Learning Objectives

- Declare and use structures (`struct`) to group related data
- Access structure members with `.` and `->` operators
- Use `typedef` to create type aliases
- Understand nested structures and self-referential structures
- Differentiate between `struct` and `union`
- Use bit fields for packed data storage

![C Structures, Unions and Dynamic Memory Allocation](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/c-programming/ch10-structures-dma.png)

## 10.1 Structure Declaration

A structure groups variables of possibly different types under a single name.

```c
struct student {
    int id;
    char name[50];
    float gpa;
};
```

This declaration defines a new type `struct student` but does not allocate any memory — it is a blueprint.

### 10.1.1 Declaring Structure Variables

```c
#include <stdio.h>
#include <string.h>

struct student {
    int id;
    char name[50];
    float gpa;
};

int main(void)
{
    struct student s1;              /* allocate a student */
    struct student s2 = {102, "Bob", 3.5f};  /* initialization */

    s1.id = 101;
    strcpy(s1.name, "Alice");
    s1.gpa = 3.8f;

    printf("ID: %d, Name: %s, GPA: %.2f\n", s1.id, s1.name, s1.gpa);
    printf("ID: %d, Name: %s, GPA: %.2f\n", s2.id, s2.name, s2.gpa);

    return 0;
}
```

**Output:**
```
ID: 101, Name: Alice, GPA: 3.80
ID: 102, Name: Bob, GPA: 3.50
```

### 10.1.2 Designated Initializers (C99)

```c
struct student s3 = {.name = "Carol", .gpa = 3.9f, .id = 103};
```

Fields omitted from designated initializers are zero-initialized.

## 10.2 Member Access

```c
struct student s;
s.id = 100;                /* dot operator for direct access */

struct student *ptr = &s;
ptr->id = 100;             /* arrow operator for pointer access */
(*ptr).id = 100;           /* equivalent, but verbose */
```

## 10.3 `typedef`

`typedef` creates an alias for an existing type:

```c
typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;
```

Now `Student` can be used without the `struct` keyword:

```c
Student s1 = {101, "Alice", 3.8f};
```

**Convention:** Many C projects use `typedef` for structs to reduce syntactic overhead. Others omit `typedef` to maintain clear distinction between struct types and built-in types.

## 10.4 Structure Assignment and Copying

Structures can be assigned using `=`:

```c
Student a = {1, "Alice", 3.8f};
Student b = a;            /* member-by-member copy */
```

For dynamic allocation, use `memcpy` or assign through pointers:

```c
Student s1, s2;
s2 = s1;            /* OK — copies all members */
```

**Arrays within structs are copied when the struct is copied.**

## 10.5 Structures as Function Parameters

### Pass by Value (copy)

```c
void print_student(Student s)
{
    printf("%d: %s (%.2f)\n", s.id, s.name, s.gpa);
}
```

### Pass by Pointer (efficient, modifiable)

```c
void update_gpa(Student *s, float new_gpa)
{
    s->gpa = new_gpa;
}
```

Passing large structs by pointer is more efficient than copying the entire structure.

## 10.6 Nested Structures

```c
typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    Point top_left;
    Point bottom_right;
} Rectangle;

int main(void)
{
    Rectangle r = {{0, 0}, {100, 200}};
    printf("Area: %d\n", (r.bottom_right.x - r.top_left.x) *
                         (r.bottom_right.y - r.top_left.y));
    return 0;
}
```

**Output:**
```
Area: 20000
```

## 10.7 Arrays of Structures

```c
#include <stdio.h>

typedef struct {
    char title[100];
    char author[50];
    int year;
} Book;

int main(void)
{
    Book library[3] = {
        {"1984", "George Orwell", 1949},
        {"The Hobbit", "J.R.R. Tolkien", 1937},
        {"Dune", "Frank Herbert", 1965}
    };

    for (int i = 0; i < 3; i++) {
        printf("%s by %s (%d)\n", library[i].title,
               library[i].author, library[i].year);
    }

    return 0;
}
```

**Output:**
```
1984 by George Orwell (1949)
The Hobbit by J.R.R. Tolkien (1937)
Dune by Frank Herbert (1965)
```

## 10.8 Self-Referential Structures (Linked Lists)

A structure can contain a pointer to itself, enabling recursive data structures:

```c
typedef struct node {
    int data;
    struct node *next;    /* pointer to another node */
} Node;
```

This is the foundation of linked lists (Chapter 15).

## 10.9 Structure Padding and Alignment

The compiler may insert padding between structure members to satisfy alignment requirements:

```c
#include <stdio.h>

struct packed {
    char c;    /* 1 byte */
    /* 3 bytes padding */
    int i;     /* 4 bytes */
    short s;   /* 2 bytes */
    /* 0 bytes padding needed */
};

int main(void)
{
    printf("sizeof(struct packed) = %zu\n", sizeof(struct packed));
    printf("offset of c = %zu\n", offsetof(struct packed, c));
    printf("offset of i = %zu\n", offsetof(struct packed, i));
    printf("offset of s = %zu\n", offsetof(struct packed, s));

    return 0;
}
```

**Output:**
```
sizeof(struct packed) = 12
offset of c = 0
offset of i = 4
offset of s = 8
```

To minimize padding, order members from largest to smallest. The `offsetof` macro (from `<stddef.h>`) returns the byte offset of a member within a struct.

## 10.10 Unions

A union stores all its members in the same memory location. Its size is the size of its largest member. Only one member can be active at a time.

```c
#include <stdio.h>

typedef union {
    int i;
    float f;
    char c[4];
} Data;

int main(void)
{
    Data d;

    d.i = 42;
    printf("As int:   %d\n", d.i);

    d.f = 3.14f;    /* overwrites the int */
    printf("As float: %f\n", d.f);

    /* The int value is now undefined */
    printf("As int:   %d (garbage)\n", d.i);

    return 0;
}
```

**Output:**
```
As int:   42
As float: 3.140000
As int:   1078523331 (garbage)
```

### 10.10.1 Type Tagging (Discriminated Union)

A common pattern pairs a union with an enum to track the active member:

```c
#include <stdio.h>

typedef enum { INT, FLOAT, STRING } Type;

typedef struct {
    Type type;
    union {
        int i;
        float f;
        char *s;
    } value;
} Variant;

void print_variant(Variant v)
{
    switch (v.type) {
        case INT:    printf("%d\n", v.value.i); break;
        case FLOAT:  printf("%.2f\n", v.value.f); break;
        case STRING: printf("%s\n", v.value.s); break;
    }
}

int main(void)
{
    Variant v1 = {INT, .value.i = 42};
    Variant v2 = {FLOAT, .value.f = 3.14f};
    Variant v3 = {STRING, .value.s = "Hello"};

    print_variant(v1);
    print_variant(v2);
    print_variant(v3);

    return 0;
}
```

**Output:**
```
42
3.14
Hello
```

## 10.11 Bit Fields

Bit fields allow packing multiple values into a single integer type, specifying the exact number of bits each field occupies.

```c
typedef struct {
    unsigned int enabled : 1;    /* 1 bit */
    unsigned int mode    : 3;    /* 3 bits (0–7) */
    unsigned int id      : 4;    /* 4 bits (0–15) */
} Control;
```

```c
#include <stdio.h>

typedef struct {
    unsigned int year  : 7;   /* 0–127 */
    unsigned int month : 4;   /* 0–15 */
    unsigned int day   : 5;   /* 0–31 */
} DateCompact;

int main(void)
{
    DateCompact d = {25, 6, 9}; /* 2025-06-09 (year offset from 2000) */
    printf("Size: %zu bytes\n", sizeof(d));
    printf("Date: %u-%02u-%02u\n", d.year + 2000, d.month, d.day);
    return 0;
}
```

**Output:**
```
Size: 4 bytes
Date: 2025-06-09
```

**Caveats:** Bit field layout is implementation-defined (endianness, padding, whether fields can span storage unit boundaries). Use them for hardware register mapping or compact storage, but not for cross-platform serialization.

## 10.12 Anonymous Structs and Unions (C11)

C11 allows anonymous struct and union members:

```c
typedef struct {
    union {
        int i;
        float f;
    };                /* anonymous union — members accessed directly */
    char tag;
} Value;

Value v;
v.i = 42;             /* no intermediate name needed */
v.tag = 'i';
```

## Summary

- `struct` groups heterogeneous data into a single type; members are accessed with `.` or `->`.
- `typedef` creates convenient type aliases.
- Structures are copied by assignment; passing by pointer is more efficient for large structs.
- The compiler may add padding between struct members for alignment; order members largest-first to minimize waste.
- `union` stores multiple members in the same memory; only one member is active at a time.
- Discriminated unions pair a union with an enum tag for type safety.
- Bit fields allow specifying exact bit-widths for members, used for compact storage and hardware mapping.

## Exercises

### Review Questions

1. What is the difference between a `struct` and a `union` in terms of memory layout?
2. Why does the compiler add padding to structures? How can you minimize it?
3. What does the arrow operator `->` do and why is it needed?
4. What is a self-referential structure? Give an example.
5. What is a bit field and what are its limitations regarding portability?

### Application Problems

1. Define a `struct Time` with members `hours`, `minutes`, `seconds` (all `int`). Write functions `Time add_time(Time t1, Time t2)` and `void print_time(Time t)`. Test with several cases.
2. Define a `struct Student` with `id`, `name`, and an array of 5 exam scores. Write a program to read data for 3 students, compute each student's average, and print a table.
3. Create a `typedef` for a `struct Fraction` with `numerator` and `denominator`. Write functions to add, subtract, multiply, and divide fractions, returning the result in reduced form (use Euclid's algorithm for GCD).
4. Write a program that uses a discriminated union to store shapes: `Circle` (radius), `Rectangle` (width, height), `Triangle` (base, height). Write a function `double area(Shape s)` that computes the area based on the type tag.

### Challenge Problem

Implement a simple tagged variant type — a `struct Variant` that can hold an `int`, `double`, `char*`, or another `Variant` (recursive). Use a union with a type tag. Write functions `variant_print`, `variant_add` (add two variants if they are numeric), and `variant_to_string`. Demonstrate nesting by creating a Variant that holds an array of Variants (use a `Variant*` pointer and a count).
