# Chapter 2: Variables and Data Types

## Learning Objectives

- Declare and initialize variables of all fundamental C types
- Use `sizeof` to determine type sizes
- Define symbolic and constant variables with `const` and `#define`
- Format input and output with `printf` and `scanf` format specifiers
- Understand implicit and explicit type conversion rules

## 2.1 Variables in C

A variable is a named storage location in memory that holds a value of a specific type. Every variable must be declared before use.

```c
type variable_name;
type variable_name = initial_value;
```

**Rules for variable names (identifiers):**

- May contain letters (a–z, A–Z), digits (0–9), and underscores (`_`).
- Must begin with a letter or underscore.
- Are case-sensitive — `count`, `Count`, and `COUNT` are three distinct variables.
- Must not be a C keyword (`int`, `return`, `if`, `while`, etc.).
- Should be descriptive: `number_of_students` rather than `n`.

```c
int counter;           /* valid */
double _temperature;   /* valid, but leading underscore is conventionally reserved */
int 2nd_place;         /* INVALID — begins with a digit */
float my-var;          /* INVALID — hyphen is not allowed */
int return;            /* INVALID — 'return' is a keyword */
```

## 2.2 Fundamental Data Types

C provides a small set of fundamental types:

| Type | Keyword | Size (typical) | Format Specifier | Range (typical) |
|------|---------|----------------|------------------|-----------------|
| Character | `char` | 1 byte | `%c` | −128 to 127 or 0 to 255 |
| Short integer | `short` | 2 bytes | `%hd` | −32,768 to 32,767 |
| Integer | `int` | 4 bytes | `%d` | −2³¹ to 2³¹−1 |
| Long integer | `long` | 4 or 8 bytes | `%ld` | −2³¹ to 2³¹−1 or −2⁶³ to 2⁶³−1 |
| Long long | `long long` | 8 bytes | `%lld` | −2⁶³ to 2⁶³−1 |
| Float | `float` | 4 bytes | `%f` | ~±3.4×10⁻³⁸ to ±3.4×10³⁸ |
| Double | `double` | 8 bytes | `%lf` | ~±1.7×10⁻³⁰⁸ to ±1.7×10³⁰⁸ |
| Long double | `long double` | 10/16 bytes | `%Lf` | platform-dependent |

**Example — declaring and printing variables:**

```c
#include <stdio.h>

int main(void)
{
    int age = 22;
    float price = 19.99f;
    double pi = 3.14159265358979;
    char grade = 'A';
    long population = 8000000000L;
    short small = 100;

    printf("age:       %d\n", age);
    printf("price:     %.2f\n", price);
    printf("pi:        %.15lf\n", pi);
    printf("grade:     %c\n", grade);
    printf("population:%ld\n", population);
    printf("small:     %hd\n", small);

    return 0;
}
```

**Output:**
```
age:       22
price:     19.99
pi:        3.141592653589793
grade:     A
population:8000000000
small:     100
```

### 2.2.1 The `char` Type

The `char` type stores a single character as an integer (ASCII value). This means characters can participate in arithmetic.

```c
#include <stdio.h>

int main(void)
{
    char letter = 'A';
    printf("'%c' has ASCII value %d\n", letter, letter);

    letter = letter + 1;   /* 'B' */
    printf("Adding 1 gives '%c' (ASCII %d)\n", letter, letter);

    return 0;
}
```

**Output:**
```
'A' has ASCII value 65
Adding 1 gives 'B' (ASCII 66)
```

### 2.2.2 Integer Type Modifiers

The keywords `signed` and `unsigned` modify integer types:

| Declaration | Range |
|-------------|-------|
| `unsigned int` | 0 to 4,294,967,295 |
| `unsigned char` | 0 to 255 |
| `unsigned long` | 0 to 2⁶⁴−1 (on 64-bit) |

```c
unsigned int distance = 4000000000U;
unsigned char byte = 200;
```

## 2.3 The `sizeof` Operator

`sizeof` yields the size (in bytes) of a type or variable. It is evaluated at compile time.

```c
#include <stdio.h>

int main(void)
{
    printf("char:        %zu byte\n", sizeof(char));
    printf("short:       %zu bytes\n", sizeof(short));
    printf("int:         %zu bytes\n", sizeof(int));
    printf("long:        %zu bytes\n", sizeof(long));
    printf("long long:   %zu bytes\n", sizeof(long long));
    printf("float:       %zu bytes\n", sizeof(float));
    printf("double:      %zu bytes\n", sizeof(double));
    printf("long double: %zu bytes\n", sizeof(long double));

    return 0;
}
```

**Output (64-bit system):**
```
char:        1 byte
short:       2 bytes
int:         4 bytes
long:        8 bytes
long long:   8 bytes
float:       4 bytes
double:      8 bytes
long double: 16 bytes
```

**Note:** `%zu` is the correct format specifier for the `size_t` type returned by `sizeof`.

## 2.4 Constants

### 2.4.1 `const` Qualifier

A `const` variable cannot be modified after initialization:

```c
const double SPEED_OF_LIGHT = 299792458.0;
/* SPEED_OF_LIGHT = 300000000.0; — compiler error */
```

### 2.4.2 `#define` Constants (Symbolic Constants)

```c
#include <stdio.h>

#define PI 3.14159
#define MAX_STUDENTS 100

int main(void)
{
    printf("PI = %.5f\n", PI);
    printf("Max students = %d\n", MAX_STUDENTS);
    return 0;
}
```

Preprocessor constants have no type, no storage, and are substituted textually by the preprocessor. `const` variables are type-checked by the compiler.

### 2.4.3 Integer Literal Suffixes

| Suffix | Type |
|--------|------|
| `U` | `unsigned int` |
| `L` | `long` |
| `UL` | `unsigned long` |
| `LL` | `long long` |
| `ULL` | `unsigned long long` |

```c
int x = 42;
unsigned y = 42U;
long z = 42L;
long long w = 42LL;
```

## 2.5 Formatted Output with `printf`

General form:

```c
printf("format string", argument1, argument2, ...);
```

**Common format specifiers:**

| Specifier | Output |
|-----------|--------|
| `%d` or `%i` | Signed decimal integer |
| `%u` | Unsigned decimal integer |
| `%f` | Floating-point (float/double) |
| `%.2f` | Floating-point with 2 decimal places |
| `%e` | Scientific notation |
| `%g` | Shorter of `%f` and `%e` |
| `%c` | Single character |
| `%s` | String |
| `%p` | Pointer address |
| `%x` / `%X` | Unsigned hex (lowercase / uppercase) |
| `%zu` | `size_t` |

**Width and precision:**

```c
printf("%10d\n", 42);     /* right-aligned in 10 columns */
printf("%-10d\n", 42);    /* left-aligned */
printf("%010d\n", 42);    /* zero-padded */
printf("%.3f\n", 3.1415); /* three decimal places */
```

## 2.6 Formatted Input with `scanf`

```c
int value;
printf("Enter an integer: ");
scanf("%d", &value);    /* & is the address-of operator — needed for scanf */
```

**Important:** `scanf` requires the address of the variable (`&variable`) for all types except strings (arrays decay to pointers automatically).

```c
#include <stdio.h>

int main(void)
{
    int age;
    float height;
    char initial;

    printf("Enter age, height, and first initial: ");
    scanf("%d %f %c", &age, &height, &initial);

    printf("Age: %d, Height: %.1f, Initial: %c\n", age, height, initial);
    return 0;
}
```

**Common pitfall:** `scanf` with `%c` reads the next character, which may be a leftover newline. A space before `%c` (`" %c"`) skips whitespace.

## 2.7 Type Conversion

### 2.7.1 Implicit Conversion (Type Promotion)

When operands of different types appear in an expression, C promotes the smaller type to the larger type.

```c
int a = 5;
double b = 2.5;
double result = a + b;   /* a is promoted to 5.0, result = 7.5 */
```

**Integer promotion rules:** In any expression, `char` and `short` values are promoted to `int` (or `unsigned int`).

### 2.7.2 Explicit Conversion (Casting)

```c
double x = 10.8;
int truncated = (int)x;           /* 10 — fractional part discarded */
int rounded = (int)(x + 0.5);     /* 11 — manual rounding */

int numerator = 7;
int denominator = 3;
double quotient = (double)numerator / denominator; /* 2.333..., not 2 */
```

## 2.8 Declaring Multiple Variables

```c
int a, b, c;                  /* all int */
int x = 1, y = 2, z = 3;      /* initialized */
int p, q = 5;                 /* p is uninitialized, q is 5 */
```

**Warning:** Using an uninitialized variable produces undefined behavior.

```c
int uninitialized;
printf("%d\n", uninitialized);  /* UB — may print garbage, crash, or anything */
```

## Summary

- C variables must be declared with a type before use; identifiers follow specific naming rules.
- Fundamental types include `char`, `int`, `float`, `double`, and their `short`, `long`, `unsigned` variants.
- `sizeof` returns the byte size of a type or expression (result type is `size_t`, printed with `%zu`).
- `const` variables and `#define` macros provide two mechanisms for creating constant values.
- `printf` and `scanf` use format specifiers (`%d`, `%f`, `%c`, etc.) for formatted output and input.
- C performs implicit type promotion and allows explicit casting with the `(type)` syntax.
- Using uninitialized variables invokes undefined behavior.

## Exercises

### Review Questions

1. What is the difference between `int` and `long`? When would you choose one over the other?
2. Explain the output of: `char c = 'A'; printf("%d", c + 3);`
3. What happens if you use `%f` to print an `int` value? Why?
4. What is the difference between `const int MAX = 100;` and `#define MAX 100`?
5. Why must `scanf` use the `&` operator for `int` and `float` variables but not for strings?

### Application Problems

1. Write a program that declares `short`, `int`, `long`, `long long`, `float`, `double`, and `long double` variables, initializes them with appropriate values, and prints each using the correct format specifier.
2. Write a program that reads a temperature in Fahrenheit from the user and converts it to Celsius: `C = (F - 32) * 5 / 9`. Ensure the division uses floating-point arithmetic.
3. Write a program that reads a five-digit integer from the user and prints each digit separated by three spaces (e.g., 12345 → `1   2   3   4   5`). *(Hint: use division and modulus.)*
4. Write a program that demonstrates implicit integer overflow by adding 1 to the maximum value of an `unsigned int` and printing the result.

### Challenge Problem

Write a program that reads an amount in cents (integer) and breaks it down into dollars, quarters, dimes, nickels, and pennies. Use only integer arithmetic. Example: 267 cents → 2 dollars, 2 quarters, 1 dime, 1 nickel, 2 pennies. Use `const` or `#define` for the coin values.
