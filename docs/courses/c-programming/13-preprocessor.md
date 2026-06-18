# Chapter 13: The Preprocessor

## Learning Objectives

- Define and use object-like and function-like macros with `#define`
- Guard header files against multiple inclusion
- Use conditional compilation (`#ifdef`, `#ifndef`, `#if`) for portability and debugging
- Understand the dangers of macros and the alternative of `const` and inline functions
- Use predefined standard macros
- Apply `#pragma` and `#error` directives

![C Preprocessor: Macros, Conditional Compilation, Directives and Pitfalls](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-13-preprocessor.png)

## 13.1 The Preprocessor's Role

The preprocessor runs as the first stage of compilation. It processes directives â€” lines beginning with `#` â€” before the compiler sees the code.

**Common tasks:**
- File inclusion (`#include`)
- Macro definition and expansion (`#define`)
- Conditional compilation (`#if`, `#ifdef`, `#ifndef`, `#else`, `#elif`, `#endif`)
- Error generation (`#error`)
- Compiler-specific instructions (`#pragma`)

## 13.2 `#include` â€” File Inclusion

```c
#include <stdio.h>      /* system header â€” searches standard include paths */
#include "myheader.h"    /* user header â€” searches current directory first */
```

**Angle brackets vs. quotes:**

| Form | Search path |
|------|-------------|
| `#include <...>` | System include directories |
| `#include "..."` | Current directory first, then system include directories |

## 13.3 `#define` â€” Macros

### 13.3.1 Object-like Macros

```c
#define PI 3.1415926535
#define MAX_BUFFER 4096
#define PROGRAM_NAME "My Application"
```

Each occurrence of the macro name in the source code is replaced textually by the preprocessor.

### 13.3.2 Function-like Macros

```c
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define ABS(x) ((x) < 0 ? -(x) : (x))
```

```c
#include <stdio.h>

#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

int main(void)
{
    int a = 5;
    printf("SQUARE(%d) = %d\n", a, SQUARE(a));
    printf("SQUARE(%d + 1) = %d\n", a + 1, SQUARE(a + 1));

    printf("MAX(%d, %d) = %d\n", 10, 20, MAX(10, 20));
    return 0;
}
```

**Output:**
```
SQUARE(5) = 25
SQUARE(5 + 1) = 36
MAX(10, 20) = 20
```

**Why the extra parentheses matter:**

Without them:
```c
#define BAD_SQUARE(x) x * x
BAD_SQUARE(2 + 3)  /* expands to: 2 + 3 * 2 + 3 = 11, not 25 */
```

Always parenthesize macro parameters and the entire macro body.

### 13.3.3 Multi-Statement Macros

```c
#define SWAP(a, b, type)  \
    do {                  \
        type temp = a;    \
        a = b;            \
        b = temp;         \
    } while (0)
```

The `do { ... } while (0)` pattern ensures the macro works correctly in any context (e.g., inside an `if` statement without braces).

### 13.3.4 Stringification (`#`)

The `#` operator converts a macro parameter to a string literal:

```c
#include <stdio.h>

#define PRINT_INT(x) printf(#x " = %d\n", x)

int main(void)
{
    int value = 42;
    PRINT_INT(value);      /* expands to: printf("value" " = %d\n", value) */
    return 0;
}
```

**Output:**
```
value = 42
```

### 13.3.5 Token Pasting (`##`)

The `##` operator concatenates two tokens:

```c
#include <stdio.h>

#define MAKE_VAR(name, num) name ## num

int main(void)
{
    int MAKE_VAR(x, 1) = 10;   /* creates: int x1 = 10; */
    int MAKE_VAR(x, 2) = 20;   /* creates: int x2 = 20; */

    printf("x1 = %d, x2 = %d\n", x1, x2);
    return 0;
}
```

**Output:**
```
x1 = 10, x2 = 20
```

## 13.4 Conditional Compilation

### 13.4.1 `#ifdef` and `#ifndef`

```c
#include <stdio.h>

#define DEBUG

int main(void)
{
#ifdef DEBUG
    printf("Debug mode enabled\n");
#endif

#ifndef RELEASE
    printf("Release mode not defined â€” debug settings active\n");
#endif

    return 0;
}
```

**Output:**
```
Debug mode enabled
Release mode not defined â€” debug settings active
```

### 13.4.2 `#if` and `#elif`

```c
#include <stdio.h>

#define VERSION 2

int main(void)
{
#if VERSION >= 3
    printf("Version 3 or later\n");
#elif VERSION >= 2
    printf("Version 2\n");
#else
    printf("Version 1\n");
#endif

    return 0;
}
```

**Output:**
```
Version 2
```

### 13.4.3 `#if defined(...)`

```c
#if defined(__linux__) || defined(__unix__)
    printf("Compiling on Linux/Unix\n");
#elif defined(_WIN32)
    printf("Compiling on Windows\n");
#endif
```

### 13.4.4 Common Pattern â€” Header Guards

```c
#ifndef MY_HEADER_H
#define MY_HEADER_H

/* header content */

#endif /* MY_HEADER_H */
```

Alternatively, using `#pragma once` (supported by most compilers):

```c
#pragma once

/* header content */
```

## 13.5 `#undef`

Removes a previously defined macro:

```c
#define TEMP 100
int x = TEMP;   /* 100 */

#undef TEMP
/* TEMP is no longer defined */
```

## 13.6 `#error` and `#warning`

```c
#ifndef __STDC__
#error "This program requires a standard C compiler"
#endif

#if _WIN32
#warning "Compiling on Windows â€” some features may be unavailable"
#endif
```

`#error` generates a compilation error with the specified message. `#warning` (non-standard but widely supported) generates a warning.

## 13.7 Predefined Macros

| Macro | Description |
|-------|-------------|
| `__LINE__` | Current source line number (integer) |
| `__FILE__` | Current source file name (string) |
| `__DATE__` | Compilation date (string: "Mmm dd yyyy") |
| `__TIME__` | Compilation time (string: "hh:mm:ss") |
| `__STDC__` | Defined as 1 if compiler conforms to ANSI C |
| `__STDC_VERSION__` | C standard version (e.g., `201112L` for C11) |
| `__func__` | Current function name (C99) |

```c
#include <stdio.h>

int main(void)
{
    printf("File:       %s\n", __FILE__);
    printf("Line:       %d\n", __LINE__);
    printf("Date:       %s\n", __DATE__);
    printf("Time:       %s\n", __TIME__);
    printf("STDC:       %d\n", __STDC__);
    printf("STDC Ver:   %ld\n", __STDC_VERSION__);
    printf("Function:   %s\n", __func__);
    return 0;
}
```

**Output (varies):**
```
File:       macros.c
Line:       11
Date:       Jun  9 2026
Time:       16:15:00
STDC:       1
STDC Ver:   201112
Function:   main
```

## 13.8 `#pragma`

`#pragma` provides compiler-specific instructions. Common uses:

```c
#pragma once                     /* include guard (alternative) */
#pragma GCC optimize("O2")       /* GCC optimization hint */
#pragma warning(disable: 4996)   /* MSVC: disable specific warning */
#pragma pack(push, 1)            /* MSVC/GCC: pack struct members without padding */
```

**`_Pragma()` operator (C99):** Allows pragmas in macro definitions:

```c
#define STRINGIFY(x) #x
#define PRAGMA(x) _Pragma(STRINGIFY(x))
```

## 13.9 Macro Pitfalls

1. **Side effects:** `MAX(++x, y)` expands to `((++x) > (y) ? (++x) : (y))` â€” increments `x` twice.
2. **Missing parentheses:** Always wrap parameters and the entire body.
3. **Semicolon swallowing:** Multi-statement macros need `do { ... } while (0)`.
4. **No type safety:** Macros do not check types.
5. **Debugging difficulty:** Error messages refer to the expanded code.

**Prefer modern alternatives where possible:**

| Instead of macro | Use |
|------------------|-----|
| `#define PI 3.14` | `const double PI = 3.14;` |
| `#define MAX(a,b)` | `static inline int max(int a, int b)` |
| `#define DEBUG` | `const int debug = 1;` with `if (debug)` |

## 13.10 `#line` Directive

Resets the line number reported by `__LINE__`:

```c
#line 100 "newfile.c"
/* Next line is treated as line 100 of "newfile.c" */
```

## Summary

- `#include` inserts file contents; `<>` for system headers, `""` for user headers.
- `#define` creates object-like and function-like macros; always parenthesize.
- `#` stringifies a parameter; `##` pastes tokens together.
- `#ifdef`, `#ifndef`, `#if`, `#else`, `#elif`, and `#endif` control conditional compilation.
- Header guards (`#ifndef` / `#define` / `#endif`) prevent multiple inclusion.
- Predefined macros (`__LINE__`, `__FILE__`, `__DATE__`, etc.) provide compilation context.
- Macros are error-prone: side effects, missing parentheses, no type safety.
- Prefer `const`, `enum`, and `inline` functions over macros where possible.
- `#pragma` provides compiler-specific features; `#error` stops compilation with a message.

## Exercises

### Review Questions

1. Why must macro parameters be parenthesized in the replacement text?
2. What does the `#` operator do in a macro? What does `##` do?
3. What is a header guard and why is it necessary?
4. What is the difference between `#ifdef DEBUG` and `#if defined(DEBUG)`?
5. Why is `do { ... } while (0)` used in multi-statement macros?

### Application Problems

1. Write a macro `IS_EVEN(x)` that returns 1 if `x` is even and 0 otherwise. Test it with several values.
2. Write a macro `ARRAY_SIZE(arr)` that computes the number of elements in an array. Use it to iterate over an array.
3. Write a program that uses `#ifdef DEBUG` to conditionally print debugging information (filename, line number, variable values). Compile it with and without `-DDEBUG` on the command line and observe the difference.
4. Write a header file `math_utils.h` with a header guard. Define macros for `CUBE(x)`, `MIN(a,b)`, `CLAMP(x,lo,hi)`. Include it in a program and test all macros.

### Challenge Problem

Write a program that uses the preprocessor to implement a **unit test framework** with the following macros:

- `TEST(name)` â€” begins a test case.
- `ASSERT_EQ(actual, expected)` â€” checks equality; prints file, line, and failure message if not equal.
- `ASSERT_TRUE(expr)` â€” checks that expression is true.
- `TEST_REPORT()` â€” prints summary of passed/failed tests.

Use counters (static variables or object-like macros) to track the number of passed and failed tests. Write test cases for a function `factorial` and report the results. *(Hint: use `__LINE__` and `__FILE__` in your assertion macros.)*
