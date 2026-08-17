---
id: 10-structures-unions
slug: /c-programming/10-structures-unions
title: "Chapter 10: Structures and Unions"
sidebar_label: "Chapter 10: Structures and Unions"
sidebar_position: 10
---
# Chapter 10: Structures and Unions

> **Previous:** [Pointers](./09-pointers.md) | **Next:** [Dynamic Memory Allocation](./11-dma.md)

## Learning Objectives

- Declare and use structures (`struct`) to group related data of different types
- Access structure members using `.` (dot) and `->` (arrow) operators
- Initialize structures using initializer lists and designated initializers (C99)
- Use `typedef` to create type aliases and reduce syntactic overhead
- Understand nested structures and self-referential structures for linked data structures
- Understand structure padding and alignment rules to predict `sizeof(struct)`
- Use `#pragma pack` and `__attribute__((packed))` to control padding
- Differentiate between `struct` and `union` in memory layout and usage
- Use bit fields for packed data storage and hardware register mapping
- Apply anonymous structs and unions (C11) for cleaner nested type design

### Chapter at a Glance


| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Structure Definition | `struct` groups variables of different types under one name | A struct definition is a blueprint; no memory is allocated until a variable is declared |
| Member Access | Use `.` for direct access, `->` for pointer access | `->` is syntactic sugar for `(*ptr).member` |
| Initialization | C99 designated initializers allow out-of-order member init | Omitted fields in designated init are zero-initialized |
| Typedef | Creates an alias for a type name | Use `typedef struct { ... } Name;` to avoid repeating `struct` |
| Nested Structures | A struct can contain other structs as members | Access nested members with chained dots: `outer.inner.field` |
| Array of Structures | Store multiple records as a contiguous array | Access via `arr[i].member`; useful for tabular data |
| Padding and Alignment | Compilers add padding between members for CPU alignment | Reorder members by size (largest first) to minimize padding |
| Packing | `__attribute__((packed))` removes padding | Packed structs save space but may cause unaligned access faults |
| Unions | All members share the same memory location | The size of a union is the size of its largest member |
| Bit Fields | Pack multiple values into fewer bits | Use for flags, hardware registers, and protocol headers |
| Anonymous Members (C11) | Members of anonymous struct/union are accessed directly | Flattens nested type hierarchies |

```mermaid
flowchart LR
    A["10.1 Defining Structs"] --> B["10.2 Initialization"]
    B --> C["10.3 Member Access (.)"]
    C --> D["10.4 Nested Structures"]
    D --> E["10.5 Array of Structures"]
    E --> F["10.6 Pointer to Struct (->)"]
    F --> G["10.7 Padding & Packing"]
    G --> H["10.8 Bit Fields"]
    H --> I["10.9 Typedef Patterns"]
    I --> J["10.10 Unions"]
    J --> K["10.11 Union vs Struct"]
    K --> L["10.12 Anonymous Members"]
    L --> M["Interview Corner & Applications"]
```

---

## 10.1 Structure Definition and Declaration

### Real-World Analogy: Employee Record Form


Think of a **structure** as an employee record form. The form has fields for:
- **Employee ID** (integer — 4 bytes)
- **Full Name** (string — 50 bytes)
- **Department Code** (character — 1 byte)
- **Annual Salary** (floating-point — 8 bytes)

When HR designs the blank form (the **struct definition**), they decide what slots exist but fill in no values. When they fill out a specific employee's form (the **struct variable**), each slot gets an actual value. If they print 100 blank forms and stack them in a binder, that is an **array of structures** — each form identical in layout, each holding different data.

```
+--------------------------------------------+
|          EMPLOYEE RECORD FORM              |
+------------+-------------------------------+
| Field      | Type / Size                   |
+------------+-------------------------------+
| ID         | unsigned int  (4 bytes)       |
| Name       | char[50]      (50 bytes)      |
| Dept Code  | char          (1 byte)        |
| Salary     | double        (8 bytes)       |
+------------+-------------------------------+
```

### Syntax of a Structure Definition


```c
struct tag_name {
    data_type member1;
    data_type member2;
    /* ... */
};    /* semicolon mandatory */
```

- `struct` — keyword that begins the definition
- `tag_name` — name of this structure type (optional if `typedef` is used)
- `member1`, `member2` — members (fields) of possibly different types
- The closing `}` is followed by a **semicolon** (this is a statement)

### Declaring Structure Variables


```c
/* Method 1: Declare variables after definition */
struct employee {
    unsigned int id;
    char name[50];
    char dept_code;
    double salary;
};   /* definition — zero memory allocated */

struct employee emp1;    /* 64 bytes allocated (plus padding) */
struct employee emp2;    /* another 64 bytes */

/* Method 2: Declare variables between } and ; */
struct point {
    int x;
    int y;
} p1, p2;   /* p1 and p2 are global/scope-level variables of type struct point */

/* Method 3: Anonymous struct (no tag) — one-shot type */
struct {
    int x;
    int y;
} anon_point;   /* anon_point is the ONLY variable of this type */
```

### Memory Allocation at Declaration


When you write `struct employee emp1;`, the compiler allocates enough memory on the stack (or in static storage) to hold all members **plus any padding bytes** the alignment rules require. On a typical x86-64 system with default alignment:

```c
struct employee {
    unsigned int id;     /* offset 0, 4 bytes */
    char name[50];       /* offset 4, 50 bytes */
    char dept_code;      /* offset 54, 1 byte  */
    /* 1 byte padding to align double to 8 */
    double salary;       /* offset 56, 8 bytes */
};   /* total = 64 bytes */
```

### Numbered Steps to Define and Use a Struct


1. **Identify the logical grouping** — what real-world entity are you modeling? (student, book, point, packet header)
2. **List the fields** with their C data types and intended sizes
3. **Write the struct definition** — `struct name { type1 field1; type2 field2; ... };`
4. **Add typedef** (optional) — `typedef struct name Name;` or combine
5. **Declare variables** of the struct type
6. **Initialize** using an initializer list or designated initializers
7. **Access members** with `.` (dot) operator for direct access or `->` (arrow) for pointers
8. **Use the struct** in expressions, function calls, arrays, etc.

### Pseudocode


```
DEFINE STRUCT Person
    field: name  (string, max 50 chars)
    field: age   (integer)
    field: height (float)
END STRUCT

CREATE variable p1 OF TYPE Person
SET p1.name = "Alice"
SET p1.age = 30
SET p1.height = 5.7

PRINT p1.name, p1.age, p1.height

CREATE POINTER ptr TO Person, POINT TO p1
PRINT ptr->name, ptr->age, ptr->height
```

### Complete Example with Dry Run


```c
#include <stdio.h>
#include <string.h>

struct employee {
    unsigned int id;
    char name[50];
    char dept_code;
    double salary;
};

int main(void)
{
    struct employee emp1;

    emp1.id = 1001;
    strcpy(emp1.name, "Alice Johnson");
    emp1.dept_code = 'E';
    emp1.salary = 75000.50;

    printf("ID: %u\n", emp1.id);
    printf("Name: %s\n", emp1.name);
    printf("Dept: %c\n", emp1.dept_code);
    printf("Salary: %.2f\n", emp1.salary);
    printf("Size of struct: %zu bytes\n", sizeof(emp1));

    return 0;
}
```

**Output:**
```
ID: 1001
Name: Alice Johnson
Dept: E
Salary: 75000.50
Size of struct: 64 bytes
```

### Dry Run Trace Table (Memory Layout)


Assume a 64-bit system where `int` = 4 bytes, `char` = 1 byte, `double` = 8 bytes, default alignment to member size.

| Step | Operation | Memory Address | Content | Notes |
|------|-----------|---------------|---------|-------|
| 1 | `struct employee emp1;` | 0x7FFD0000 | (uninitialized) | Stack allocation, 64 bytes reserved |
| 2 | `emp1.id = 1001;` | 0x7FFD0000 | `0x000003E9` | 4 bytes at offset 0 |
| 3 | `strcpy(emp1.name, "Alice Johnson");` | 0x7FFD0004 | `"Alice Johnson\0"` | 50 bytes at offset 4 |
| 4 | `emp1.dept_code = 'E';` | 0x7FFD0036 | `0x45` ('E') | 1 byte at offset 54 |
| | *(padding)* | 0x7FFD0037 | `0x00` | 1 byte padding inserted |
| 5 | `emp1.salary = 75000.50;` | 0x7FFD0038 | IEEE 754 double | 8 bytes at offset 56 |

```
Offset:  0    4                    54 55   56          63
        +----+----------------------+--+---+------------+
        | ID |       Name          |DC| P |   Salary   |
        | 4B |       50B           |1B| 1B|    8B      |
        +----+----------------------+--+---+------------+
        ^                          ^      ^
      offset 0                  offset 54 offset 56
                                 (padding 55 for 8-byte align)
```

Total: 4 + 50 + 1 + 1(pad) + 8 = **64 bytes**

### Complexity Analysis


| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Struct definition | O(1) | O(1) blueprint |
| Variable declaration | O(1) | O(size of struct) |
| Member access (assign/read) | O(1) | — |
| Struct copy (`=`) | O(n) where n = size of struct | O(size of struct) |
| `sizeof(struct)` | O(1) compile-time | — |

### Advantages and Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Groups related data under one name | Padding can waste memory (up to 50% in poorly ordered structs) |
| Pass multiple values through one parameter | Passing by value copies all members (expensive for large structs) |
| Enables complex data structures (linked lists, trees) | Cannot define member functions inside the struct (C only) |
| Member access is O(1) via offset calculation | No access control (all members are public) |
| Binary compatible with hardware registers and protocol headers | Platform-dependent layout due to padding |
| Array of structs provides tabular data organization | No built-in serialization; must manually convert to/from bytes |

### Edge Cases


1. **Empty struct:** In C, `struct empty {};` has a size of 0 (GCC extension); standard C forbids empty structs.
2. **Flexible array member (C99):** The last member of a struct can be an incomplete array type `type flex[];` — `sizeof` excludes the flexible array.
3. **Self-referential:** `struct node { int data; struct node *next; };` — uses a pointer, not an embedded struct, since the size must be known.
4. **Incomplete type:** `struct employee;` — a forward declaration. The struct body is not yet visible; only pointers to it can be declared.
5. **Tag namespace:** Struct tags live in a separate namespace from variable names. `struct foo { int x; }; int foo;` is valid but confusing.
6. **Anonymous struct (C11):** `struct { int x; int y; };` inside another struct — members are accessed directly without an intermediate name.

---

## 10.2 Structure Initialization

A structure variable can be initialized in several ways:

### 10.2.1 Initializer List (Positional)


Members are initialized in declaration order:

```c
struct employee {
    unsigned int id;
    char name[50];
    char dept_code;
    double salary;
};

/* Positional initializer — order must match declaration */
struct employee emp1 = {1001, "Alice Johnson", 'E', 75000.50};
```

### 10.2.2 Designated Initializers (C99)


Members can be initialized by name, in any order:

```c
struct employee emp2 = {
    .salary = 82000.00,
    .name = "Bob Smith",
    .id = 1002,
    .dept_code = 'M'
};
```

**Rules:**
- Fields not listed are zero-initialized
- Once a positional initializer appears, all subsequent initializers must also be positional
- Designated initializers can be mixed with positional ones before the first designated one

```c
struct employee emp3 = {1003, .name = "Carol Lee", .salary = 91000.00};
/* id = 1003 (positional), name = "Carol Lee", dept_code = 0 (zero), salary = 91000.00 */
```

### 10.2.3 Zero Initialization


```c
struct employee emp4 = {0};     /* all members zeroed */
static struct employee emp5;    /* static storage -> zero-initialized automatically */
```

### 10.2.4 Copy Initialization


```c
struct employee emp6 = emp1;    /* member-by-member copy */
struct employee emp7;
emp7 = emp1;                    /* assignment also copies member-by-member */
```

**Warning:** If the struct contains pointers, a shallow copy means both copies point to the same memory.

### 10.2.5 Dynamic Allocation Initialization


```c
#include <stdlib.h>
#include <string.h>

struct employee *p = (struct employee*)malloc(sizeof(struct employee));
if (p != NULL) {
    p->id = 2001;
    strcpy(p->name, "Diana Ross");
    p->dept_code = 'S';
    p->salary = 65000.00;
}
```

### Code Example with Output


```c
#include <stdio.h>

typedef struct {
    unsigned int id;
    char name[50];
    char dept_code;
    double salary;
} Employee;

int main(void)
{
    /* 1. Positional initializer */
    Employee e1 = {1001, "Alice Johnson", 'E', 75000.50};

    /* 2. Designated initializer (C99) */
    Employee e2 = {.id = 1002, .name = "Bob Smith", .dept_code = 'M', .salary = 82000.00};

    /* 3. Partial designated — omitted fields zeroed */
    Employee e3 = {.id = 1003, .name = "Carol Lee"};
    /* e3.dept_code = 0 ('\0'), e3.salary = 0.0 */

    /* 4. Zero initialization */
    Employee e4 = {0};

    /* 5. Copy */
    Employee e5 = e1;

    printf("e1: %u, %s, %c, %.2f\n", e1.id, e1.name, e1.dept_code, e1.salary);
    printf("e2: %u, %s, %c, %.2f\n", e2.id, e2.name, e2.dept_code, e2.salary);
    printf("e3: %u, %s, %c, %.2f\n", e3.id, e3.name, e3.dept_code, e3.salary);
    printf("e4: %u, %s, %c, %.2f\n", e4.id, e4.name, e4.dept_code, e4.salary);
    printf("e5 (copy of e1): %u, %s, %c, %.2f\n", e5.id, e5.name, e5.dept_code, e5.salary);

    return 0;
}
```

**Output:**
```
e1: 1001, Alice Johnson, E, 75000.50
e2: 1002, Bob Smith, M, 82000.00
e3: 1003, Carol Lee, , 0.00
e4: 0, ,  , 0.00
e5 (copy of e1): 1001, Alice Johnson, E, 75000.50
```

### Dry Run Trace for Designated Initializer


| Step | Statement | Memory State |
|------|-----------|-------------|
| 1 | `Employee e3 = {.id = 1003, .name = "Carol Lee"};` | Stack reserves 64 bytes |
| 2 | `.id = 1003` | offset 0: `0x000003EB` |
| 3 | `.name = "Carol Lee"` | offset 4: `"Carol Lee\0"` + zeros for remaining 40 bytes |
| 4 | (implicit) `.dept_code = 0` | offset 54: `0x00` |
| 5 | (implicit) `.salary = 0.0` | offset 56: `0x0000000000000000` |

### Complexity


| Step | Time | Space |
|------|------|-------|
| Positional init | O(number of members) | O(struct size) |
| Designated init | O(number of members) | O(struct size) |
| Zero init `= {0}` | O(1) -> compiler fills | O(struct size) |
| Copy init | O(struct size) data copy | O(struct size) |

---

## 10.3 Accessing Members (Dot Operator)

### Real-World Analogy: Form Fields


If `emp1` is a physical employee folder, then `emp1.id` is the "Employee ID" field written on that folder. The **dot (`.`)** operator says "go inside this folder and read this specific field."

### Syntax


```c
struct_variable.member_name
```

The dot operator has the **highest precedence** among binary operators (along with `->`, `()`, `[]`). It binds left-to-right.

### Code Example


```c
#include <stdio.h>
#include <string.h>

typedef struct {
    unsigned int id;
    char name[50];
    double salary;
} Employee;

int main(void)
{
    Employee emp;

    /* Writing members via dot operator */
    emp.id = 1001;
    strcpy(emp.name, "Alice Johnson");
    emp.salary = 75000.50;

    /* Reading members via dot operator */
    printf("Read via dot:\n");
    printf("  ID:     %u\n", emp.id);
    printf("  Name:   %s\n", emp.name);
    printf("  Salary: %.2f\n", emp.salary);

    /* sizeof a member */
    printf("sizeof(emp.id)     = %zu\n", sizeof(emp.id));
    printf("sizeof(emp.name)  = %zu\n", sizeof(emp.name));
    printf("sizeof(emp.salary) = %zu\n", sizeof(emp.salary));

    /* Address of member */
    printf("Address of emp:     %p\n", (void*)&emp);
    printf("Address of emp.id:  %p\n", (void*)&emp.id);
    printf("Address of emp.name:%p\n", (void*)&emp.name);
    printf("Address of emp.salary:%p\n", (void*)&emp.salary);

    return 0;
}
```

**Output (addresses vary by run):**
```
Read via dot:
  ID:     1001
  Name:   Alice Johnson
  Salary: 75000.50
sizeof(emp.id)     = 4
sizeof(emp.name)  = 50
sizeof(emp.salary) = 8
Address of emp:     0x7FFD3A00
Address of emp.id:  0x7FFD3A00
Address of emp.name:0x7FFD3A04
Address of emp.salary:0x7FFD3A38
```

### Dry Run: Member Access Pattern


```
Expression: emp.salary

Step 1: emp is a struct at address 0x7FFD3A00
Step 2: . is the member access operator
Step 3: salary is a member of Employee at offset 0x38 (56 decimal)
Step 4: Effective address = &emp + offset(salary) = 0x7FFD3A00 + 56 = 0x7FFD3A38
Step 5: Read 8 bytes (double) from 0x7FFD3A38
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| Read/write member via `.` | O(1) | Compiler replaces member name with compile-time offset |
| `sizeof(member)` | O(1) | Compile-time |
| `&(struct.member)` | O(1) | Pointer arithmetic: base + offset |

---

## 10.4 Nested Structures

### Real-World Analogy: Address Inside Employee


An employee form has an "Address" section that itself contains Street, City, Zip Code. The outer form (Employee) **contains** the inner form (Address) as a field.

```
+------------------------------------+
|         EMPLOYEE FORM              |
|  ID:     [_____]                   |
|  Name:   [_____]                   |
|  +------------------------------+  |
|  |       ADDRESS                |  |
|  |  Street:  Oak St             |  |
|  |  City:    Boston             |  |
|  |  Zip:     02101              |  |
|  +------------------------------+  |
|  Salary: [_____]                   |
+------------------------------------+
```

### Declaration and Initialization


```c
typedef struct {
    char street[100];
    char city[50];
    int zip;
} Address;

typedef struct {
    unsigned int id;
    char name[50];
    Address addr;           /* nested struct */
    double salary;
} Employee;
```

### Accessing Nested Members


Use the dot operator **chained**: `emp.addr.zip`

### Complete Code Example


```c
#include <stdio.h>
#include <string.h>

typedef struct {
    char street[100];
    char city[50];
    int zip;
} Address;

typedef struct {
    unsigned int id;
    char name[50];
    Address addr;
    double salary;
} Employee;

int main(void)
{
    /* Nested initializer list */
    Employee e1 = {
        1001,
        "Alice Johnson",
        {"123 Oak St", "Boston", 2101},
        75000.50
    };

    /* Or use designated initializers */
    Employee e2 = {
        .id = 1002,
        .name = "Bob Smith",
        .addr = {.street = "456 Pine Ave", .city = "New York", .zip = 10001},
        .salary = 82000.00
    };

    /* Access nested members via chained dot */
    printf("e1: %s lives in %s, zip %d\n",
           e1.name, e1.addr.city, e1.addr.zip);

    /* Modify nested member */
    e1.addr.zip = 2102;
    printf("e1 updated zip: %d\n", e1.addr.zip);

    /* Print full nested record */
    printf("\n--- Employee Record ---\n");
    printf("ID:   %u\n", e1.id);
    printf("Name: %s\n", e1.name);
    printf("Addr: %s, %s %d\n", e1.addr.street, e1.addr.city, e1.addr.zip);
    printf("Sal:  %.2f\n", e1.salary);

    /* Size includes all nested structs and padding */
    printf("sizeof(Address)  = %zu\n", sizeof(Address));
    printf("sizeof(Employee) = %zu\n", sizeof(Employee));

    return 0;
}
```

**Output:**
```
e1: Alice Johnson lives in Boston, zip 2101
e1 updated zip: 2102

--- Employee Record ---
ID:   1001
Name: Alice Johnson
Addr: 123 Oak St, Boston 2102
Sal:  75000.50
sizeof(Address)  = 156
sizeof(Employee) = 224
```

### Dry Run: Nested Structure Memory Layout


```
sizeof(Address) breakdown:
  street:   char[100]  -> 100 bytes at offset 0
  city:     char[50]   ->  50 bytes at offset 100
  zip:      int        ->   4 bytes at offset 150
  padding:  ->  2 bytes (to make total multiple of 4)
  Total Address = 156

sizeof(Employee) breakdown:
  id:       unsigned int    ->  4 bytes  at offset 0
  name:     char[50]        -> 50 bytes  at offset 4 (ends at 53)
  padding:  addr needs 4-byte alignment; offset 54 mod 4 = 2 -> 2 bytes pad
  addr:     Address         -> 156 bytes at offset 56 (ends at 211)
  salary:   double needs 8-byte alignment; offset 212 mod 8 = 4 -> 4 bytes pad
  salary:   double          ->  8 bytes  at offset 216 (ends at 223)
  Total Employee = 224
```

```
Memory Layout for Employee:

Offset: 0    4                   54      56               212   216       224
        +----+--------------------+---+----+----------------+----+--------+
        | ID |       Name        | P |Address (156 bytes) | P  | Salary |
        | 4B |       50B         | 2B|                    | 4B |  8B    |
        +----+--------------------+---+----+----------------+----+--------+
                                  ^        ^                     ^
                               offset 54  offset 56          offset 216
                               (2B pad)   (4B aligned)      (8B aligned)
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| Declare nested struct | O(1) | Compiler flattens to sequential offsets |
| Access `outer.inner.member` | O(1) | Offset = offset(inner) + offset(member within inner) |
| Copy nested struct | O(size) | Deep copy of all bytes |

---

## 10.5 Array of Structures

### Real-World Analogy: Library Catalog


A library has hundreds of books. Each book has a title, author, ISBN, and year. Rather than creating separate variables `book1`, `book2`, ..., `book500`, you create an **array of structures** — a single collection of identical records.

```
+------------------------------------------------------------------+
|                  LIBRARY CATALOG                                 |
+---------+--------------+--------------+--------------+
|  BOOK 0 |  BOOK 1      |  BOOK 2      |  BOOK 3      |
+---------+--------------+--------------+--------------+
| Title:  | Title:       | Title:       | Title:       |
| "1984"  | "The Hobbit" | "Dune"       | "..."        |
| Author: | Author:      | Author:      |              |
| Orwell  | Tolkien      | Herbert      |              |
| Year:   | Year:        | Year:        |              |
| 1949    | 1937         | 1965         |              |
+---------+--------------+--------------+--------------+
```

### Declaration and Initialization


```c
typedef struct {
    char title[100];
    char author[50];
    int year;
    float price;
} Book;

/* Array of 3 Book structures */
Book library[3] = {
    {"1984", "George Orwell", 1949, 9.99},
    {"The Hobbit", "J.R.R. Tolkien", 1937, 14.99},
    {"Dune", "Frank Herbert", 1965, 12.99}
};
```

### Accessing Array Elements


```c
library[0].year   /* first book's year */
library[1].author /* second book's author */
library[i].title  /* i-th book's title */
```

### Code Example: Full Program


```c
#include <stdio.h>

typedef struct {
    char title[100];
    char author[50];
    int year;
    float price;
} Book;

int main(void)
{
    Book library[5] = {
        {"1984", "George Orwell", 1949, 9.99f},
        {"The Hobbit", "J.R.R. Tolkien", 1937, 14.99f},
        {"Dune", "Frank Herbert", 1965, 12.99f},
        {"Brave New World", "Aldous Huxley", 1932, 10.99f},
        {"Fahrenheit 451", "Ray Bradbury", 1953, 11.99f}
    };

    int n = 5;
    float total = 0.0f;

    printf("=== Library Catalog ===\n");
    for (int i = 0; i < n; i++) {
        printf("%d. %-30s by %-20s (%d) $%.2f\n",
               i + 1,
               library[i].title,
               library[i].author,
               library[i].year,
               library[i].price);
        total += library[i].price;
    }

    printf("\nTotal value: $%.2f\n", total);
    printf("Average price: $%.2f\n", total / n);

    /* Find the oldest book */
    int oldest_idx = 0;
    for (int i = 1; i < n; i++) {
        if (library[i].year < library[oldest_idx].year)
            oldest_idx = i;
    }
    printf("Oldest: %s (%d)\n", library[oldest_idx].title, library[oldest_idx].year);

    /* Compute size */
    printf("sizeof(Book)   = %zu bytes\n", sizeof(Book));
    printf("sizeof(library)= %zu bytes\n", sizeof(library));

    return 0;
}
```

**Output:**
```
=== Library Catalog ===
1. 1984                           by George Orwell        (1949) $9.99
2. The Hobbit                     by J.R.R. Tolkien       (1937) $14.99
3. Dune                           by Frank Herbert        (1965) $12.99
4. Brave New World                by Aldous Huxley        (1932) $10.99
5. Fahrenheit 451                 by Ray Bradbury         (1953) $11.99

Total value: $60.95
Average price: $12.19
Oldest: Brave New World (1932)
sizeof(Book)   = 160 bytes
sizeof(library)= 800 bytes (5 x 160)
```

### Dry Run: Array Element Access


```
Expression: library[2].author

Step 1: library is an array of Book, base address = 0x7FFD4000
Step 2: library[2] = base + 2 * sizeof(Book)
        = 0x7FFD4000 + 2 * 160
        = 0x7FFD4000 + 320
        = 0x7FFD4140
Step 3: .author = offset of author within Book
        title is at 0, size 100 -> author at offset 100
Step 4: Effective address = 0x7FFD4140 + 100 = 0x7FFD41A4
Step 5: Read null-terminated string from that address -> "Frank Herbert"
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| Access `arr[i].member` | O(1) | Compiler multiplies index by sizeof(element) |
| Linear search through array | O(n) | Must check each element |
| Sort array of structs | O(n log n) | qsort with custom comparator |
| Copy entire array | O(n * sizeof(element)) | memcpy or loop |

---

## 10.6 Pointer to Structure (Arrow Operator ->)

### Real-World Analogy: Business Card Pointer


You have a business card (the struct) on a table. Someone gives you a slip of paper with the table coordinates ("3rd row, 2nd column") — that's a **pointer to the struct**. To read the name on the card, you follow the coordinates (dereference) and then look at the name field:

- Coordinates -> card -> name field: `(*ptr).name`
- Shortcut: pointer-arrow-name: `ptr->name`

### Why Use a Pointer to Struct?


1. **Efficiency:** Passing a pointer (8 bytes on x86-64) is cheaper than copying 64+ bytes
2. **Modification:** The called function can modify the original struct
3. **Dynamic allocation:** `malloc` returns a pointer
4. **Linked data structures:** Linked lists, trees, graphs all require pointers
5. **Polymorphism (via void*):** Generic functions accept `void*`; cast to struct pointer internally

### Syntax


```c
struct struct_type *ptr;
ptr = &variable;      /* point to existing struct */
ptr->member = value;  /* access member through pointer */
```

### Complete Code Example


```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    unsigned int id;
    char name[50];
    double salary;
} Employee;

/* Pass by pointer — efficient, modifiable */
void give_raise(Employee *e, double amount)
{
    e->salary += amount;   /* modifies the original */
}

/* Pass by value — slow, creates copy */
void print_employee(Employee e)
{
    printf("ID: %u, Name: %s, Salary: %.2f\n", e.id, e.name, e.salary);
}

int main(void)
{
    /* Stack-allocated struct */
    Employee emp1 = {1001, "Alice Johnson", 75000.00};
    Employee *ptr = &emp1;

    /* Access via arrow operator */
    printf("Via pointer: %u -> %s -> %.2f\n", ptr->id, ptr->name, ptr->salary);

    /* Arrow is syntactic sugar for (*ptr).member */
    printf("Via dereference: %u -> %s -> %.2f\n", (*ptr).id, (*ptr).name, (*ptr).salary);

    /* Modify through pointer */
    ptr->salary = 80000.00;
    printf("After direct modification: %.2f\n", emp1.salary);

    /* Modify via function */
    give_raise(&emp1, 5000.00);
    printf("After raise: %.2f\n", emp1.salary);

    /* Dynamically allocated struct */
    Employee *dyn = (Employee*)malloc(sizeof(Employee));
    if (dyn != NULL) {
        dyn->id = 2001;
        strcpy(dyn->name, "Bob Smith");
        dyn->salary = 65000.00;
        print_employee(*dyn);   /* pass by value (dereference) */
        free(dyn);
    }

    /* Print size of pointer vs struct */
    printf("sizeof(ptr) = %zu bytes\n", sizeof(ptr));    /* 8 on x86-64 */
    printf("sizeof(Employee) = %zu bytes\n", sizeof(Employee));

    return 0;
}
```

**Output:**
```
Via pointer: 1001 -> Alice Johnson -> 75000.00
Via dereference: 1001 -> Alice Johnson -> 75000.00
After direct modification: 80000.00
After raise: 85000.00
ID: 2001, Name: Bob Smith, Salary: 65000.00
sizeof(ptr) = 8 bytes
sizeof(Employee) = 64 bytes
```

### Dry Run: Arrow Operator Evaluation


```
Expression: ptr->salary where ptr = &emp1

Step 1: ptr = 0x7FFD3A00  (address of emp1, which is an Employee)
Step 2: salary member offset within Employee = ?
         - id:     0, size 4
         - name:   4, size 50  (char[50])
         - padding: 54 -> 56, 2 bytes (to align double to 8)
         - salary: 56, size 8
Step 3: Effective address = ptr + offset(salary)
                          = 0x7FFD3A00 + 56
                          = 0x7FFD3A38
Step 4: Read 8 bytes from 0x7FFD3A38 as a double -> 75000.00
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| `ptr->member` | O(1) | Dereference + offset — one or two instructions |
| Pass struct by pointer | O(1) | 8 bytes copied (the pointer) |
| Pass struct by value | O(size) | All bytes copied |
| `*ptr` dereference | O(1) | Direct memory read |

### Edge Cases


1. **Null pointer dereference:** `ptr->member` when `ptr == NULL` causes a segmentation fault
2. **Dangling pointer:** Using `ptr` after `free(ptr)` is undefined behavior
3. **Pointer arithmetic:** `ptr++` advances by `sizeof(Employee)` bytes, not 1 byte
4. **Arrow chaining:** `ptr->next->next->data` for linked lists

```c
/* NULL pointer guard pattern */
void safe_print(Employee *ptr) {
    if (ptr != NULL) {
        printf("%s\n", ptr->name);
    }
}
```

---

## 10.7 Structure Padding and Packing

### Real-World Analogy: Mailbox Sizes


Imagine a post office where mailboxes come in fixed sizes: small (1 slot), medium (4 slots), and large (8 slots). If you have a letter that needs the small slot, you could put it in the large slot too — but you would waste 7 slots. The CPU is like this post office: it prefers to read data from addresses that are multiples of the data size. A 4-byte integer reads fastest when its address is a multiple of 4. When a struct member falls at an address that's not a multiple of its size, the compiler inserts **padding bytes** as filler to push it to the next aligned address.

```
CPU reads 4-byte chunks fastest at addresses 0, 4, 8, 12, ...
If an int is at address 2, the CPU must do TWO reads and merge — slow!

+------+------+------+------+
|   0  |   1  |   2  |   3  | <- address
+------+------+------+------+
|  int |  int |  int |  int | <- aligned read: 1 operation
+------+------+------+------+

+------+------+------+------+
|   0  |   1  |   2  |   3  |
+------+------+------+------+
| part1| part1| part2| part2| <- unaligned: 2 reads + merge
+------+------+------+------+
```

### Why Padding Exists


1. **CPU alignment requirements:** Most RISC architectures REQUIRE aligned access. x86-64 allows unaligned access but with a performance penalty (2x slower).
2. **Atomicity:** Aligned loads/stores are atomic on x86-64; unaligned ones are not.
3. **Cache efficiency:** Aligned data occupies fewer cache lines, reducing cache misses.

### Alignment Rules (typical x86-64, GCC/MSVC)


| Type | Size (bytes) | Alignment Requirement |
|------|-------------|----------------------|
| `char` | 1 | 1 (any address) |
| `short` | 2 | 2 (even addresses) |
| `int` | 4 | 4 (multiple of 4) |
| `float` | 4 | 4 |
| `double` | 8 | 8 |
| `long double` | 10-16 | 16 |
| `void*` | 8 (x86-64) | 8 |
| `char[N]` | N | 1 |
| `struct S` | sum + padding | strictest member alignment |

**Key rule:** A struct's overall alignment is the **strictest alignment** of any of its members. The struct is padded at the end so its total size is a multiple of this alignment.

### Example: Poorly Ordered Struct

```c
#include <stdio.h>
#include <stddef.h>

struct badly_ordered {
    char c;       /* 1 byte at offset 0 */
    /* 3 bytes padding for int alignment */
    int i;        /* 4 bytes at offset 4 */
    short s;      /* 2 bytes at offset 8 */
    /* 6 bytes padding to align double to 8 */
    double d;     /* 8 bytes at offset 16 */
};

// Actual memory:
// offset 0:   c (1 byte)
// offset 1-3: padding (3 bytes)
// offset 4-7: i (4 bytes)
// offset 8-9: s (2 bytes)
// offset 10-15: padding (6 bytes)
// offset 16-23: d (8 bytes)
// Total = 24 bytes
```

### Code Example: Padding Visualization


```c
#include <stdio.h>
#include <stddef.h>

struct badly_ordered {
    char c;
    int i;
    short s;
    double d;
};

struct well_ordered {
    double d;     /* 8 — largest first */
    int i;        /* 4 */
    short s;      /* 2 */
    char c;       /* 1 */
    /* 1 byte padding at end to make total multiple of alignof(double)=8 */
};

/* Packed version — no padding (GCC/Clang) */
struct __attribute__((packed)) packed_struct {
    char c;
    int i;
    short s;
    double d;
};

int main(void)
{
    printf("sizeof(struct badly_ordered) = %zu\n", sizeof(struct badly_ordered));
    printf("  offsetof(c) = %zu\n", offsetof(struct badly_ordered, c));
    printf("  offsetof(i) = %zu\n", offsetof(struct badly_ordered, i));
    printf("  offsetof(s) = %zu\n", offsetof(struct badly_ordered, s));
    printf("  offsetof(d) = %zu\n", offsetof(struct badly_ordered, d));

    printf("\nsizeof(struct well_ordered) = %zu\n", sizeof(struct well_ordered));
    printf("  offsetof(d) = %zu\n", offsetof(struct well_ordered, d));
    printf("  offsetof(i) = %zu\n", offsetof(struct well_ordered, i));
    printf("  offsetof(s) = %zu\n", offsetof(struct well_ordered, s));
    printf("  offsetof(c) = %zu\n", offsetof(struct well_ordered, c));

    printf("\nsizeof(struct packed_struct) = %zu\n", sizeof(struct packed_struct));
    printf("  offsetof(c) = %zu\n", offsetof(struct packed_struct, c));
    printf("  offsetof(i) = %zu\n", offsetof(struct packed_struct, i));
    printf("  offsetof(s) = %zu\n", offsetof(struct packed_struct, s));
    printf("  offsetof(d) = %zu\n", offsetof(struct packed_struct, d));

    return 0;
}
```

**Output (x86-64 GCC):**
```
sizeof(struct badly_ordered) = 24
  offsetof(c) = 0
  offsetof(i) = 4
  offsetof(s) = 8
  offsetof(d) = 16

sizeof(struct well_ordered) = 16
  offsetof(d) = 0
  offsetof(i) = 8
  offsetof(s) = 12
  offsetof(c) = 14

sizeof(struct packed_struct) = 15
  offsetof(c) = 0
  offsetof(i) = 1
  offsetof(s) = 5
  offsetof(d) = 7
```

### Memory Layout Diagrams


**badly_ordered (24 bytes):**
```
Offset: 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16             23
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
        |c | P| P| P| i| i| i| i| s| s| P| P| P| P| P| P| d| d| d| d| d| d| d| d|
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
        ^                 ^           ^                          ^
        c                  i          s                          d
      (off 0)           (off 4)    (off 8)                   (off 16)
```

**well_ordered (16 bytes):**
```
Offset: 0                         7  8        11 12 13 14 15
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
        | d                    | i        | s| c| P|
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
```

**packed_struct (15 bytes — no padding):**
```
Offset: 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
        |c | i        | s| d                          |
        +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
```

### Minimizing Padding: Best Practices


1. **Order members from largest to smallest** (double -> long -> int -> short -> char)
2. **Group same-size members together**
3. **Use `offsetof` to check actual offsets**
4. **Consider `__attribute__((packed))` only for serialization** (not for hot paths)

### Packing Directives


```c
/* GCC/Clang: __attribute__((packed)) */
struct __attribute__((packed)) my_packed {
    char c;
    int i;
};

/* MSVC: #pragma pack */
#pragma pack(push, 1)
struct my_packed_msvc {
    char c;
    int i;
};
#pragma pack(pop)
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| Access padded member | O(1) | Single aligned load |
| Access packed member | O(1) (x86) | May be unaligned load (slower) |
| `sizeof(padded struct)` | O(1) compile-time | |
| Reorder members to minimize padding | O(n log n) sort | Human optimization |

### Edge Cases


1. **`sizeof` != sum of member sizes:** Due to padding, `sizeof(struct)` is often larger than the sum of its members' sizes
2. **Cross-compiler differences:** Different compilers may align differently (especially for `long double`)
3. **`#pragma pack` effects on performance:** Packed structs on ARM/SPARC can crash on unaligned access
4. **`offsetof` is not valid for packed members** in some standards (though GCC supports it)
5. **Struct reordering:** GCC `-fpack-struct` reorders members; use `-Wpadded` to see padding warnings

---

## 10.8 Bit Fields

### Real-World Analogy: Luggage Tags


An airport luggage tag has multiple pieces of information: flight number (needs ~5 decimal digits = 17 bits), destination gate (A-Z = 5 bits), bag count (0-9 = 4 bits), priority flag (yes/no = 1 bit). Instead of using separate integers (4 bytes each = 16 bytes total), you pack all this into a single 32-bit integer. That's exactly what bit fields do — they let you specify the **exact number of bits** each field occupies.

```
Without bit fields (16 bytes):
+-------------------+----------------+-----------------+-----------------+
| flight: int (4B)  | gate: char (1B)| bags: int (4B)  | priority: int(4B)|
+-------------------+----------------+-----------------+-----------------+

With bit fields (4 bytes):
+---------------------------------------------------------------+
|  flight (17 bits)   | gate (5) | bags (4) | pri(1)| unused(5)|
+---------------------------------------------------------------+
```

### Syntax


```c
struct {
    type member_name : width_in_bits;
};
```

Where `type` must be `int`, `unsigned int`, `signed int`, or `_Bool` (C99). Some compilers also allow `char`, `short`, `long`.

### Complete Code Example


```c
#include <stdio.h>

/* Device control register — packed into 16 bits */
typedef struct {
    unsigned int power    : 1;   /* bit 0:  1 = on */
    unsigned int mode     : 3;   /* bits 1-3: mode (0-7) */
    unsigned int channel  : 4;   /* bits 4-7: channel (0-15) */
    unsigned int voltage  : 5;   /* bits 8-12: voltage setting (0-31) */
    unsigned int error    : 1;   /* bit 13: error flag */
    unsigned int reserved : 2;   /* bits 14-15: reserved */
} DeviceControl;

/* Date compact — store in 4 bytes */
typedef struct {
    unsigned int day   : 5;    /* 1-31   */
    unsigned int month : 4;    /* 1-12   */
    unsigned int year  : 7;    /* 0-127 (offset from 2000) */
} DateCompact;

int main(void)
{
    DeviceControl ctrl = {0};
    ctrl.power = 1;
    ctrl.mode = 3;
    ctrl.channel = 10;
    ctrl.voltage = 18;

    printf("Device Control:\n");
    printf("  Power:   %u\n", ctrl.power);
    printf("  Mode:    %u\n", ctrl.mode);
    printf("  Channel: %u\n", ctrl.channel);
    printf("  Voltage: %u\n", ctrl.voltage);
    printf("  Error:   %u\n", ctrl.error);
    printf("  Size:    %zu bytes\n", sizeof(ctrl));

    /* Date example */
    DateCompact today = {9, 6, 25};  /* June 9, 2025 */
    printf("\nDate: %u-%02u-%04u\n", today.month, today.day, 2000 + today.year);
    printf("Size: %zu bytes (vs 12 bytes for 3 ints)\n", sizeof(today));

    /* Bit field overflow — truncated to width */
    ctrl.mode = 8;   /* 8 = 1000 binary, only 3 bits -> 000 = 0 */
    printf("\nAfter overflow: mode = %u (expected 0)\n", ctrl.mode);

    return 0;
}
```

**Output:**
```
Device Control:
  Power:   1
  Mode:    3
  Channel: 10
  Voltage: 18
  Error:   0
  Size:    4 bytes

Date: 6-09-2025
Size: 4 bytes (vs 12 bytes for 3 ints)

After overflow: mode = 0 (expected 0)
```

### Alignment Rules for Bit Fields


1. **Storage unit:** Compiler allocates an underlying integer (typically `unsigned int`, 4 bytes). Fields are packed into this unit left-to-right or right-to-left depending on **endianness**.
2. **Crossing boundary:** If the next field doesn't fit in the remaining bits, the compiler either:
   - Puts it in the next storage unit (default)
   - Splits it across the boundary (if allowed by implementation)
3. **Zero-length bit field:** `unsigned int : 0;` forces alignment to the next storage unit boundary
4. **Unnamed bit fields:** `unsigned int : N;` skips N bits (padding)

```c
typedef struct {
    unsigned int a : 4;
    unsigned int   : 4;   /* unnamed: skip 4 bits */
    unsigned int b : 4;
    unsigned int   : 0;   /* force next field to next storage unit */
    unsigned int c : 4;
} BitFieldExample;
/* Layout: a(4) + pad(4) + b(4) + pad(0-align) + c(4) = two 32-bit units = 8 bytes */
```

### Bit Field Portability Issues


| Issue | Explanation |
|-------|-------------|
| **Endianness** | Bit fields are laid out from MSB or LSB depending on architecture. SAME source code gives DIFFERENT bit positions on little-endian (x86) vs big-endian (network). |
| **Signedness** | `int` bit field may be signed or unsigned depending on compiler. Always use `unsigned int` for portability. |
| **Storage unit** | Whether fields can cross storage-unit boundaries is implementation-defined. |
| **Alignment** | The address alignment of the struct containing bit fields is not guaranteed. |
| **Atomic access** | Reading/writing individual bit fields is NOT atomic — adjacent fields in the same byte may be corrupted by concurrent access. |
| **`offsetof`** | `offsetof` cannot be used on bit fields. |

### Edge Cases


1. **Overflow:** Assigning a value larger than the bit width truncates to the lower bits
2. **Signed bit fields:** `signed int x : 2;` can hold -2 to 1 (not -3 to 3 as one might assume)
3. **Array of bit fields:** Not possible. `struct { int a : 4; } arr[10];` is legal (allocates 10 ints each using 4 bits)
4. **Pointer to bit field:** Not possible. `int *p = &ctrl.mode;` is illegal — you must access through the struct

---

## 10.9 `typedef` with Structure Patterns

### Real-World Analogy: Giving a Nickname


When you always call your friend "Robert" you have to say the full 6 letters. When you call him "Bob" it's shorter. That's what `typedef` does: it gives a shorter alias to `struct student` so you can write `Student` instead.

### Four Common Patterns


```c
/* Pattern 1: typedef during definition (most common) */
typedef struct {
    int x;
    int y;
} Point;

/* Pattern 2: typedef after definition */
struct point {
    int x;
    int y;
};
typedef struct point Point;

/* Pattern 3: typedef with tag AND alias (self-referential needs tag) */
typedef struct node {
    int data;
    struct node *next;   /* must use 'struct node' here, 'Node' doesn't exist yet */
} Node;

/* Pattern 4: typedef with pointer */
typedef struct {
    int x;
    int y;
} Point, *PointPtr;    /* PointPtr is a pointer type */
```

### When to Use typedef


| Use `typedef` | Don't Use `typedef` |
|--------------|-------------------|
| Opaque types (hide implementation) | Self-documenting small structs |
| Complex type aliases | Public API header files (Google style) |
| Function pointer types | When clarity outweighs brevity |
| Generic containers via `void*` | Linux kernel code (no typedef for structs) |

### Code Example


```c
#include <stdio.h>

/* Pattern 1: Combined typedef */
typedef struct {
    char name[50];
    int age;
} Person;

/* Pattern 3: Self-referential with typedef */
typedef struct list_node {
    int value;
    struct list_node *next;
} ListNode;

/* Pointer typedef */
typedef struct {
    int width;
    int height;
} Rectangle, *RectPtr;

int main(void)
{
    Person p1 = {"Alice", 30};
    printf("Person: %s, %d\n", p1.name, p1.age);

    ListNode n1 = {10, NULL};
    ListNode n2 = {20, &n1};
    printf("List: %d -> %d\n", n2.value, n2.next->value);

    Rectangle r = {100, 50};
    RectPtr rp = &r;
    printf("Rect: %dx%d\n", rp->width, rp->height);

    return 0;
}
```

**Output:**
```
Person: Alice, 30
List: 20 -> 10
Rect: 100x50
```

---

## 10.10 Unions

### Real-World Analogy: Parking Spot


A parking spot can hold **one vehicle at a time** — a compact car (4 bytes), an SUV (8 bytes), or a motorcycle (2 bytes). The spot size is determined by the largest vehicle it can accommodate (8 bytes for the SUV). At any moment, only ONE vehicle is in the spot. If you park an SUV, you cannot also park a car there unless you first remove the SUV. That's exactly how a **union** works: all members share the same memory, and the total size is that of the **largest member**.

```
Parking spot analogy:
+----------------------+
|   PARKING SPOT #42   |  <- 8 bytes (sizeof = max member)
+----------------------+
|  Currently: SUV      |  <- all 8 bytes hold the SUV
|  (double, 8 bytes)   |
+----------------------+

After removing SUV and parking motorcycle:
+----------------------+
|   PARKING SPOT #42   |  <- still 8 bytes
+----------------------+
|  Currently: Motorcycle| <- first 2 bytes hold the motorcycle
|  (short, 2 bytes)    |   remaining 6 bytes are unused/uninitialized
+----------------------+
```

### Declaration and Memory Layout


```c
union data {
    int i;       /* 4 bytes */
    float f;     /* 4 bytes */
    char c[4];   /* 4 bytes */
};   /* total: 4 bytes (all members overlap) */

union wide {
    char c;      /* 1 byte  */
    int i;       /* 4 bytes */
    double d;    /* 8 bytes */
};   /* total: 8 bytes (largest member is double) */
```

```
Memory layout of union wide:
Offset:  0                                   7
         +--+--+--+--+--+--+--+--+
         | d (8 bytes)                      |
         +--+--+--+--+--+--+--+--+
         | i (4 bytes)     |    unused      |
         +--+--+--+--+--+--+--+--+
         |c |    unused                    |
         +--+--+--+--+--+--+--+--+
         ^
         All members start at same address (offset 0)
```

### Complete Code Example


```c
#include <stdio.h>

typedef union {
    int i;
    float f;
    unsigned char bytes[4];
} Data;

int main(void)
{
    Data d;

    /* Store an integer */
    d.i = 42;
    printf("As int:    %d\n", d.i);
    printf("As float:  %f (garbage — int was last written)\n", d.f);
    printf("Bytes:     %02x %02x %02x %02x\n",
           d.bytes[0], d.bytes[1], d.bytes[2], d.bytes[3]);

    /* Store a float — overwrites the int */
    d.f = 3.14f;
    printf("\nAfter d.f = 3.14f:\n");
    printf("As float:  %f\n", d.f);
    printf("As int:    %d (garbage — float was last written)\n", d.i);
    printf("Bytes:     %02x %02x %02x %02x\n",
           d.bytes[0], d.bytes[1], d.bytes[2], d.bytes[3]);

    /* Memory address check */
    printf("\nAddress check:\n");
    printf("&d       = %p\n", (void*)&d);
    printf("&d.i     = %p\n", (void*)&d.i);
    printf("&d.f     = %p\n", (void*)&d.f);
    printf("&d.bytes = %p\n", (void*)&d.bytes);
    printf("All addresses are IDENTICAL — same storage.\n");

    /* Size */
    printf("\nsizeof(Data) = %zu bytes\n", sizeof(Data));

    return 0;
}
```

**Output (x86-64 little-endian):**
```
As int:    42
As float:  0.000000 (garbage — int was last written)
Bytes:     2a 00 00 00

After d.f = 3.14f:
As float:  3.140000
As int:    1078523331 (garbage — float was last written)
Bytes:     c3 f5 48 40

Address check:
&d       = 0x7FFD3A00
&d.i     = 0x7FFD3A00
&d.f     = 0x7FFD3A00
&d.bytes = 0x7FFD3A00
All addresses are IDENTICAL — same storage.

sizeof(Data) = 4 bytes
```

### Dry Run: Union Memory Overwrite


```
Step 1: union Data d;    — 4 bytes reserved at 0x7FFD3A00. Uninitialized.

Step 2: d.i = 42;       — writes 0x0000002A at 0x7FFD3A00-0x7FFD3A03
                          Memory: [2a 00 00 00]

Step 3: printf("%d", d.i); — reads 4 bytes from 0x7FFD3A00 -> 42 OK

Step 4: d.f = 3.14f;    — writes IEEE 754 float 0x4048F5C3 at same address
                          Memory: [c3 f5 48 40] (little-endian)

Step 5: printf("%d", d.i); — reads 4 bytes -> 0x4048F5C3 = 1078523331
                          The int value 42 is GONE — overwritten by float bytes
```

### Type Punning (Legal and Illegal Uses)


**Strict aliasing rule (C99 sec 6.5):** Accessing a union member other than the last one written is **implementation-defined** (not undefined behavior for unions in C, unlike pointer-casting).

```c
/* Legal type punning via union */
union {
    float f;
    uint32_t i;
} u;
u.f = 3.14f;
uint32_t bits = u.i;   /* read the raw IEEE 754 bits — implementation-defined */

/* ILLEGAL type punning — violates strict aliasing */
float f = 3.14f;
uint32_t bits = *(uint32_t*)&f;   /* UNDEFINED BEHAVIOR */
```

### Complexity


| Operation | Time | Notes |
|-----------|------|-------|
| Read union member | O(1) | Same as struct member read |
| Write union member | O(1) | Overwrites all other members |
| `sizeof(union)` | O(1) compile-time | Size of largest member |

### Advantages and Disadvantages


| Advantages | Disadvantages |
|-----------|--------------|
| Saves memory when only one variant is active at a time | No type safety — must track active member manually |
| Enables type punning (portable) | Reading inactive member gives garbage |
| Useful for protocol parsing (same bytes, different interpretations) | Cannot have constructors/destructors for individual members (C only) |
| Discriminated union pattern provides tagged type safety | Bit-level layout may not match network byte order without manual conversion |

### Edge Cases


1. **Reading wrong member:** No compile error, just garbage
2. **Initialization:** `union U u = {42};` initializes the FIRST member only
3. **Nested union in struct:** Common pattern for discriminated unions
4. **Unions with variable-length arrays:** C99 flexible array members are not allowed in unions

---

## 10.11 Union vs Structure Comparison

### Decision Guide


- **Use `struct`** when you need to access ALL members simultaneously (employee record, point coordinates, network packet data fields)
- **Use `union`** when you need to store ONE of several possible types at a time (variant type, protocol message type, hardware register)

### Detailed Comparison Table


| Aspect | `struct` | `union` |
|--------|----------|---------|
| **Memory** | Sum of all members + padding | Size of largest member |
| **Member accessibility** | All members accessible at any time | Only one member active at a time |
| **Member addresses** | Different — each member gets unique offset | Identical — all members start at offset 0 |
| **Initialization** | `{val1, val2, ...}` initializes each member in order | `{val}` initializes only the FIRST member |
| **Copy behavior** | Copies all members | Copies all bytes of the largest member |
| **Use case** | Record/entity with multiple attributes | Variant/option that can be one of several types |
| **Padding rules** | Each member aligned per its type, padding between | Aligned to strictest member, no padding between |
| **sizeof** | Typically larger than sum of member sizes if padding present | Exactly the size of the largest member (plus possibly trailing padding for alignment) |
| **Serialization** | Layout depends on field order and padding | Layout depends on which member is active |
| **Type safety** | All members are valid | Must track active member with external tag (discriminated union) |

### Code Comparison


```c
#include <stdio.h>

typedef struct {
    int i;
    float f;
    char c;
} StructExample;

typedef union {
    int i;
    float f;
    char c;
} UnionExample;

int main(void)
{
    StructExample s = {42, 3.14f, 'A'};
    UnionExample u;
    u.f = 3.14f;

    printf("=== SIZE ===\n");
    printf("sizeof(StructExample) = %zu\n", sizeof(StructExample));
    printf("sizeof(UnionExample)  = %zu\n", sizeof(UnionExample));

    printf("\n=== STRUCT — all members valid ===\n");
    printf("s.i = %d\n", s.i);
    printf("s.f = %f\n", s.f);
    printf("s.c = %c\n", s.c);

    printf("\n=== UNION — only last written member valid ===\n");
    printf("u.f = %f (valid)\n", u.f);
    printf("u.i = %d (garbage — same bytes interpreted as int)\n", u.i);
    printf("u.c = %d (garbage)\n", u.c);

    printf("\n=== ADDRESSES ===\n");
    printf("Struct:  &s=%p &s.i=%p &s.f=%p &s.c=%p\n",
           (void*)&s, (void*)&s.i, (void*)&s.f, (void*)&s.c);
    printf("Union:   &u=%p &u.i=%p &u.f=%p &u.c=%p\n",
           (void*)&u, (void*)&u.i, (void*)&u.f, (void*)&u.c);

    return 0;
}
```

**Output:**
```
=== SIZE ===
sizeof(StructExample) = 12
sizeof(UnionExample)  = 4

=== STRUCT — all members valid ===
s.i = 42
s.f = 3.140000
s.c = A

=== UNION — only last written member valid ===
u.f = 3.140000 (valid)
u.i = 1078523331 (garbage — same bytes interpreted as int)
u.c = -61 (garbage)

=== ADDRESSES ===
Struct:  &s=0x7FFD3A00 &s.i=0x7FFD3A00 &s.f=0x7FFD3A04 &s.c=0x7FFD3A08
Union:   &u=0x7FFD3A10 &u.i=0x7FFD3A10 &u.f=0x7FFD3A10 &u.c=0x7FFD3A10
```

---

## 10.12 Anonymous Structs and Unions (C11)

### Real-World Analogy: Unlabeled Section


A form might have an unlabeled "Notes" section that you write directly in without having to open a sub-folder. An anonymous struct or union inside another struct lets you access the inner member **directly** as if it were a member of the outer struct.

### Syntax (C11 and later)


```c
typedef struct {
    union {              /* anonymous union */
        int i;
        float f;
    };                   /* no name! */
    char type;
} Value;

Value v;
v.i = 42;    /* access i directly — not v.union.i */
v.type = 'i';
```

### Complete Code Example


```c
#include <stdio.h>

typedef struct {
    union {
        unsigned char bytes[4];
        unsigned int word;
    };                   /* anonymous — both accessed directly */
    char label[20];
} Register;

typedef struct {
    int type;            /* 0 = rect, 1 = circle */
    union {              /* anonymous union of shapes */
        struct {         /* anonymous struct inside union */
            int width;
            int height;
        };
        struct {
            int radius;
        };
    };
} Shape;

int main(void)
{
    Register reg = {.bytes = {0xDE, 0xAD, 0xBE, 0xEF}, .label = "STATUS"};
    printf("Register %s: word=0x%08X\n", reg.label, reg.word);
    printf("  bytes: %02X %02X %02X %02X\n",
           reg.bytes[0], reg.bytes[1], reg.bytes[2], reg.bytes[3]);

    /* Shape example */
    Shape rect = {.type = 0, .width = 100, .height = 50};
    printf("\nRectangle: %dx%d\n", rect.width, rect.height);

    Shape circle = {.type = 1, .radius = 25};
    printf("Circle: radius=%d\n", circle.radius);

    return 0;
}
```

**Output:**
```
Register STATUS: word=0xEFBEADDE
  bytes: DE AD BE EF

Rectangle: 100x50
Circle: radius=25
```

### Advantages


1. **Cleaner syntax:** No intermediate member name
2. **Flatter code:** `v.i` instead of `v.data.i`
3. **Common in system headers:** Used extensively in `windows.h`, Linux kernel headers
4. **Improved readability:** Makes the flattened interface the default

### Limitations


1. C11 or later required (C99 does not support anonymous structs/unions inside other structs)
2. Cannot name the anonymous member (that defeats the purpose)
3. May conflict with outer struct's members if names collide

---

## Comparison Tables

### Struct vs Union


| Feature | `struct` | `union` |
|---------|----------|---------|
| Memory allocation | Sum of all members + padding | Size of largest member |
| Simultaneous access | All members | Only one member |
| Member offsets | Each at unique offset increasing by member size | All at offset 0 |
| sizeof(...) | Sum + padding | Max member size |
| Use case | Record with multiple attributes | Variant that holds one type at a time |
| Initialization | `{v1, v2, ...}` — one value per member | `{v}` — initializes first member only |
| Overlap risk | None — members are disjoint | Writing one member overwrites others |
| Copy behavior | Member-by-member or `memcpy` | `memcpy` the largest member |
| Address of members | All different (base + offset) | All identical (same as base) |
| Array of | Each element has the full struct size | Each element has the max member size |
| Passing to function | Copies all members (expensive for large structs) | Copies the largest member |
| Padding | Between members for alignment | After union for array alignment |

### Padding vs Packing Comparison


| Aspect | Default (Padded) | Packed |
|--------|-----------------|--------|
| Memory usage | Larger (typically 1.5-2x sum of members) | Exact sum of member sizes |
| Access speed | Fast — aligned loads/writes | Slower — may require unaligned loads |
| Hardware compatibility | Preferred for performance-critical code | Required for network protocols, file formats |
| Portability | Same struct defined in different compilers may have different layout | `__attribute__((packed))` is GCC-specific; MSVC uses `#pragma pack` |
| `sizeof` | Larger than expected | Exactly sum of member sizes |
| Risk | Wasted memory | Unaligned access fault on some architectures (ARM, SPARC) |
| Typical use | General applications | Network packets, binary file I/O, hardware registers |

### typedef struct Patterns


| Pattern | Syntax | Best For |
|---------|--------|----------|
| Anonymous typedef | `typedef struct { ... } Name;` | Simple data containers, no self-reference |
| Named tag + typedef | `typedef struct Tag { ... } Name;` | Self-referential structs (linked lists, trees) |
| Separate definition | `struct Tag { ... }; typedef struct Tag Name;` | Forward declarations, header files |
| Pointer typedef | `typedef struct { ... } Name, *NamePtr;` | Opaque types, handle-based APIs |

---

## Interview Corner

### Q1: Calculate Struct Size (Padding)


**Question:** Given `struct A { char c; double d; int i; };`, what is `sizeof(struct A)` on x86-64?

**Answer:** 24 bytes.

```
Offset 0:  c (char, 1 byte)
Offset 1-7:  padding (7 bytes to align double to 8)
Offset 8-15: d (double, 8 bytes)
Offset 16-19: i (int, 4 bytes)
Offset 20-23: padding (4 bytes to make total multiple of 8)

Total = 24 bytes
```

Optimized reorder: `struct A_opt { double d; int i; char c; };` -> 16 bytes.

### Q2: Using Union in Networking


**Question:** How would you parse a network packet header with variable-length options using unions?

**Answer:**

```c
typedef struct {
    unsigned int version  : 4;
    unsigned int ihl      : 4;    /* Internet Header Length */
    unsigned int dscp     : 6;
    unsigned int ecn      : 2;
    unsigned int total_length : 16;
    /* ... other fixed fields ... */
} IPv4Header;

/* Union for raw bytes vs parsed header */
typedef union {
    unsigned char raw[20];      /* raw bytes from network */
    IPv4Header    parsed;       /* parsed fields */
} PacketBuffer;

/* Usage: read raw bytes, then access parsed fields */
PacketBuffer buf;
recv(sock, buf.raw, 20, 0);
printf("Version: %u, IHL: %u\n",
       buf.parsed.version, buf.parsed.ihl);
```

### Q3: Bit Field Portability


**Question:** Why are bit fields not portable? Give an example.

**Answer:** Three reasons:

1. **Endianness:** On little-endian (x86), bit fields are allocated LSB-first. On big-endian (network, SPARC), they are MSB-first. Same code -> different bit layout.

```c
/* On x86 (little-endian): a=1, b=1, c=1 -> bytes = 0b11100000
 * On SPARC (big-endian):   a=1, b=1, c=1 -> bytes = 0b00000111
 */
typedef struct {
    unsigned int a : 1;
    unsigned int b : 1;
    unsigned int c : 1;
} Bits;
```

2. **Storage unit boundary:** Whether a bit field can cross the boundary of its storage unit is implementation-defined.

3. **Signedness of `int`:** `int x : 4;` may be signed or unsigned depending on the compiler. Always use `unsigned int` for bit fields that hold non-negative values.

### Q4: Flexible Array Member


**Question:** What is a flexible array member and how is it used?

**Answer:**

A flexible array member is an array without a specified size as the **last member** of a struct (C99). It has no fixed size at compile time.

```c
typedef struct {
    int length;
    double data[];    /* flexible array member — no size */
} Vector;

/* Allocation */
int n = 10;
Vector *v = (Vector*)malloc(sizeof(Vector) + n * sizeof(double));
v->length = n;
v->data[0] = 1.0;    /* access as normal array */
/* ... */
free(v);
```

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int length;
    int data[];     /* flexible array member */
} FlexArray;

int main(void)
{
    int n = 5;
    FlexArray *fa = (FlexArray*)malloc(sizeof(FlexArray) + n * sizeof(int));
    fa->length = n;
    for (int i = 0; i < n; i++)
        fa->data[i] = i * 10;

    printf("sizeof(FlexArray) = %zu (excludes data[])\n", sizeof(FlexArray));
    printf("Allocated = %zu + %zu = %zu bytes\n",
           sizeof(FlexArray), n * sizeof(int),
           sizeof(FlexArray) + n * sizeof(int));
    for (int i = 0; i < fa->length; i++)
        printf("  data[%d] = %d\n", i, fa->data[i]);

    free(fa);
    return 0;
}
```

**Output:**
```
sizeof(FlexArray) = 4 (excludes data[])
Allocated = 4 + 20 = 24 bytes
  data[0] = 0
  data[1] = 10
  data[2] = 20
  data[3] = 30
  data[4] = 40
```

**Rules:**
- Must be the last member of the struct
- Cannot be the only member (struct must have at least one named member before it)
- Cannot be part of an array of structs
- Cannot be initialized with `=` (must `malloc`)
- Cannot be copied by `=` (must `memcpy` all bytes)

---

## Applications in Real Systems

### Network Protocol Headers as Structs


Network protocols are often defined as packed C structs for direct memory mapping:

```c
#include <stdint.h>

/* Ethernet header (14 bytes) */
struct __attribute__((packed)) eth_hdr {
    uint8_t  dst_mac[6];
    uint8_t  src_mac[6];
    uint16_t ether_type;     /* 0x0800 = IPv4, 0x0806 = ARP */
};

/* IPv4 header (20 bytes minimum) */
struct __attribute__((packed)) ipv4_hdr {
    uint8_t  ver_ihl;        /* version (4 bits) + IHL (4 bits) */
    uint8_t  dscp_ecn;
    uint16_t total_length;
    uint16_t identification;
    uint16_t flags_fragment;
    uint8_t  ttl;
    uint8_t  protocol;
    uint16_t header_checksum;
    uint32_t src_addr;
    uint32_t dst_addr;
};

/* TCP header (20 bytes minimum) */
struct __attribute__((packed)) tcp_hdr {
    uint16_t src_port;
    uint16_t dst_port;
    uint32_t seq_num;
    uint32_t ack_num;
    uint8_t  data_offset;    /* top 4 bits: offset, bottom 4: reserved */
    uint8_t  flags;          /* NS CWR ECE URG ACK PSH RST SYN FIN */
    uint16_t window;
    uint16_t checksum;
    uint16_t urgent_ptr;
};
```

### Union for Type Punning (IEEE 754 Exploration)


```c
#include <stdio.h>
#include <stdint.h>

typedef union {
    float f;
    uint32_t i;
} FloatPun;

int main(void)
{
    FloatPun u;
    u.f = -3.14f;

    /* Extract IEEE 754 components */
    uint32_t sign     = (u.i >> 31) & 1;
    uint32_t exponent = (u.i >> 23) & 0xFF;
    uint32_t mantissa = u.i & 0x7FFFFF;

    printf("float: %f\n", u.f);
    printf("hex:  0x%08X\n", u.i);
    printf("sign:     %u (1 = negative)\n", sign);
    printf("exponent: %u (biased, actual = %d)\n", exponent, (int)exponent - 127);
    printf("mantissa: 0x%06X (%u)\n", mantissa, mantissa);

    return 0;
}
```

**Output:**
```
float: -3.140000
hex:  0xC048F5C3
sign:     1 (1 = negative)
exponent: 128 (biased, actual = 1)
mantissa: 0x48F5C3 (4781507)
```

### Hardware Register Mapping


```c
#include <stdint.h>

/* Memory-mapped UART control register */
typedef union {
    uint32_t raw;
    struct __attribute__((packed)) {
        uint32_t enable      : 1;
        uint32_t baud_rate   : 3;
        uint32_t data_bits   : 2;
        uint32_t parity      : 2;
        uint32_t stop_bits   : 2;
        uint32_t interrupt_en : 1;
        uint32_t rx_ready    : 1;
        uint32_t tx_ready    : 1;
        uint32_t error       : 1;
        uint32_t reserved    : 18;
    } bits;
} UARTControlReg;

/* In embedded code */
#define UART_BASE   ((volatile UARTControlReg*)0x40001000)
void uart_init(void) {
    UART_BASE->raw = 0;                    /* reset */
    UART_BASE->bits.enable = 1;
    UART_BASE->bits.baud_rate = 3;         /* 115200 */
    UART_BASE->bits.data_bits = 3;         /* 8 bits */
}
```

### Database Record Layout


```c
#include <stdio.h>
#include <string.h>

typedef struct {
    unsigned int id;
    char name[64];
    double balance;
    char status;        /* 'A' = active, 'I' = inactive */
    /* 7 bytes padding at end */
} Record;

/* Binary file I/O — write/read entire records */
void write_record(FILE *fp, const Record *r)
{
    fwrite(r, sizeof(Record), 1, fp);
}

int read_record(FILE *fp, Record *r)
{
    return fread(r, sizeof(Record), 1, fp) == 1;
}

/* Serialize to platform-independent format */
void serialize_record(const Record *r, unsigned char *buf)
{
    unsigned int id = r->id;
    double balance = r->balance;
    memcpy(buf,      &id,      4);     /* TODO: htonl for portability */
    memcpy(buf + 4,  r->name,  64);
    memcpy(buf + 68, &balance, 8);
    buf[76] = r->status;
}
```

---

## Concept Comparison Table

| Feature | `struct` | `union` |
|---------|----------|---------|
| Memory | Sum of all members (plus padding) | Size of largest member |
| Member access | All members accessible simultaneously | Only one member at a time |
| Use case | Group related data | Store one of several types |
| Initialization | `{val1, val2, ...}` | Same syntax (initializes first member) |
| Alignment | Each member aligned per its type | Aligned to strictest member |
| sizeof | Sum + pack padding + trailing padding | Max(sizeof(member)) |
| Reference | Members have unique offsets | All members start at offset 0 |

## Quick Reference

| Task | Syntax |
|------|--------|
| Define struct | `struct Point { int x; int y; };` |
| Declare variable | `struct Point p;` or with typedef: `Point p;` |
| Access field | `p.x` or `ptr->x` |
| Typedef | `typedef struct Point Point;` |
| Union | `union Data { int i; float f; };` |
| Bit field | `struct { unsigned int flag : 1; };` |
| Anonymous struct (C11) | `struct { int x; int y; };` inside another struct |
| Disable padding (GCC) | `__attribute__((packed))` |
| Disable padding (MSVC) | `#pragma pack(push, 1)` / `#pragma pack(pop)` |
| Get member offset | `offsetof(struct_type, member)` |
| Flexible array member | `struct { int len; int data[]; };` |
| Forward declaration | `struct Node;` — declare pointer before full definition |

## Cross-Application Matrix

| Application | Struct Pattern |
|-------------|---------------|
| Graphics | `struct Vertex { float x, y, z; float nx, ny, nz; };` |
| Networking | `struct __attribute__((packed)) PacketHeader { uint16_t len; uint32_t seq; };` |
| Employee records | `struct Employee { int id; char name[64]; double salary; };` |
| Hardware registers | `union Reg { uint32_t val; struct { uint8_t lo; uint8_t hi; }; };` |
| Binary tree | `struct TreeNode { int val; struct TreeNode *left, *right; };` |
| JSON value | `struct { int type; union { int i; double d; char *s; }; };` |
| Database record | `struct Record { int id; char data[256]; uint32_t crc; };` |
| Pixel color | `union Pixel { uint32_t rgba; struct { uint8_t r,g,b,a; }; };` |

## Chapter Quiz

1. How does the compiler arrange struct members in memory?
   A) In declaration order with possible padding
   B) Sorted by size
   C) Alphabetically
   D) Random order

<details><summary>Answer&lt;/summary&gt;**A)** Members are laid out in declaration order; padding is added for alignment.</details>

2. What is the size of `union { char c; int i; double d; }` on a typical 64-bit system?
   A) 1 byte
   B) 4 bytes
   C) 8 bytes
   D) 13 bytes

<details><summary>Answer&lt;/summary&gt;**C)** 8 bytes — the size of the largest member (`double`).</details>

3. Which operator is shorthand for `(*ptr).member`?
   A) `ptr->member`
   B) `ptr.member`
   C) `ptr::member`
   D) `ptr#>member`

<details><summary>Answer&lt;/summary&gt;**A)** `ptr->member` is equivalent to `(*ptr).member`.</details>

4. What is `sizeof(struct { char a; int b; })` on a typical 64-bit system?
   A) 5
   B) 6
   C) 8
   D) 12

<details><summary>Answer&lt;/summary&gt;**C)** 8 bytes. `char` at 0, 3 bytes padding, `int` at 4, total = 8.</details>

5. What happens when you read a union member that was not the last one written?
   A) Compiler error
   B) Runtime exception
   C) Undefined or implementation-defined behavior (garbage values)
   D) Zero is returned

<details><summary>Answer&lt;/summary&gt;**C)** The bytes are reinterpreted, typically producing garbage values. In C, it's implementation-defined via union; via pointer cast it's undefined behavior (strict aliasing violation).</details>

6. Which of the following correctly packs the smallest struct size?
   A) `struct { char c; int i; short s; }`
   B) `struct { int i; short s; char c; }`
   C) `struct { char c; short s; int i; }`
   D) `struct { short s; int i; char c; }`

<details><summary>Answer&lt;/summary&gt;**B)** `int(4) + short(2) + char(1) + 1 padding = 8 bytes`. The others require more padding.</details>

7. Can you take the address of a bit field member?
   A) Yes, with the `&` operator
   B) No — bit fields do not have byte addresses
   C) Yes, but only with `volatile`
   D) Only in C++, not in C

<details><summary>Answer&lt;/summary&gt;**B)** Bit fields may span partial bytes and thus have no address. You must access them through the containing struct.</details>

8. What is a flexible array member?
   A) An array declared with `malloc` inside a struct
   B) An array without a specified size as the last member of a struct
   C) An array that can change size at runtime
   D) A variable-length array (VLA) inside a struct

<details><summary>Answer&lt;/summary&gt;**B)** A flexible array member (C99) is declared as `type name[];` as the last member. Its size is determined at allocation time.</details>

## Summary

- `struct` groups heterogeneous data into a single type; members are accessed with `.` or `->`.
- `typedef` creates convenient type aliases; use named-tag typedef for self-referential structs.
- Structures are copied by assignment; passing by pointer is more efficient for large structs.
- Structure initialization includes positional, designated (C99), zero, and copy initialization.
- Nested structures allow composition; members are accessed with chained dot operators.
- Arrays of structures organize tabular data; each element is accessed by index.
- Pointer to struct (`->` arrow operator) is syntactic sugar for `(*ptr).member`.
- The compiler adds padding between struct members for alignment; order members largest-first to minimize waste.
- `__attribute__((packed))` or `#pragma pack` removes padding for serialization but may cause unaligned access.
- `union` stores multiple members in the same memory; only one member is active at a time.
- Discriminated unions pair a union with an enum tag for type safety.
- Bit fields allow specifying exact bit-widths for members, used for compact storage and hardware mapping.
- Anonymous structs/unions (C11) flatten nested member access for cleaner syntax.
- Flexible array members (C99) enable variable-length data at the end of a struct.

## Exercises

### Review Questions

1. What is the difference between a `struct` and a `union` in terms of memory layout?
2. Why does the compiler add padding to structures? How can you minimize it?
3. What does the arrow operator `->` do and why is it needed?
4. What is a self-referential structure? Give an example.
5. What is a bit field and what are its limitations regarding portability?
6. What is a flexible array member? When would you use one?
7. How does designated initialization differ from positional initialization?
8. Explain the difference between `__attribute__((packed))` and default struct layout.

### Application Problems

1. Define a `struct Time` with members `hours`, `minutes`, `seconds` (all `int`). Write functions `Time add_time(Time t1, Time t2)` and `void print_time(Time t)`. Test with several cases.
2. Define a `struct Student` with `id`, `name`, and an array of 5 exam scores. Write a program to read data for 3 students, compute each student's average, and print a table.
3. Create a `typedef` for a `struct Fraction` with `numerator` and `denominator`. Write functions to add, subtract, multiply, and divide fractions, returning the result in reduced form (use Euclid's algorithm for GCD).
4. Write a program that uses a discriminated union to store shapes: `Circle` (radius), `Rectangle` (width, height), `Triangle` (base, height). Write a function `double area(Shape s)` that computes the area based on the type tag.
5. Define a packed struct `Packet` containing a 4-byte header, 2-byte type, and 4-byte payload. Write serialize/deserialize functions that convert between the packed struct and a byte buffer.
6. Write a program that demonstrates struct padding: define three versions of a struct with the same members in different orders and print their `sizeof` values.

### Challenge Problem

Implement a simple tagged variant type — a `struct Variant` that can hold an `int`, `double`, `char*`, or another `Variant` (recursive). Use a union with a type tag. Write functions `variant_print`, `variant_add` (add two variants if they are numeric), and `variant_to_string`. Demonstrate nesting by creating a Variant that holds an array of Variants (use a `Variant*` pointer and a count).

