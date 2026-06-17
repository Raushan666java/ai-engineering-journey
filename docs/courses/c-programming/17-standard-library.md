# Chapter 17: The C Standard Library

## Learning Objectives

- Identify the major headers in the C standard library
- Use `stdlib.h` for general utility functions
- Use `stdio.h` for input/output operations
- Use `string.h` for string manipulation
- Use `math.h` for mathematical functions
- Use `time.h` for date and time functions
- Use `ctype.h` for character classification
- Use `assert.h` for runtime assertions
- Understand `setjmp.h` for non-local jumps

![C Standard Library and Advanced Topics](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/c-programming/ch17-lib-advanced.png)

## 17.1 `<stdlib.h>` — General Utilities

### Memory Allocation

```c
void *malloc(size_t size);
void *calloc(size_t count, size_t size);
void *realloc(void *ptr, size_t new_size);
void free(void *ptr);
```

(Detailed in Chapter 11.)

### Numeric Conversion

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    const char *int_str = "1234";
    const char *double_str = "3.14159";
    const char *bad_str = "42abc";

    int i = atoi(int_str);           /* 1234 */
    long l = atol(int_str);          /* 1234L */
    double d = atof(double_str);     /* 3.14159 */

    /* More robust: detect errors */
    char *end;
    long val = strtol(bad_str, &end, 10);  /* 42 — stops at 'a' */
    printf("Parsed: %ld, remaining: '%s'\n", val, end);

    return 0;
}
```

**Output:**
```
Parsed: 42, remaining: 'abc'
```

| Function | Description |
|----------|-------------|
| `atoi`, `atol`, `atoll` | String to integer (no error detection) |
| `strtol`, `strtoll` | String to long with base (2–36) and error detection |
| `strtoul`, `strtoull` | String to unsigned long |
| `strtof`, `strtod`, `strtold` | String to float/double |
| `itoa` | Non-standard but widely available |

### Pseudo-Random Numbers

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    srand((unsigned)time(NULL));    /* seed with current time */

    for (int i = 0; i < 5; i++) {
        int r = rand();              /* 0 to RAND_MAX */
        int dice = (rand() % 6) + 1; /* 1 to 6 */
        printf("Random: %d, Dice: %d\n", r, dice);
    }

    return 0;
}
```

**Output (varies):**
```
Random: 14827, Dice: 4
Random: 24789, Dice: 1
Random: 32146, Dice: 6
Random: 18235, Dice: 3
Random: 28901, Dice: 5
```

### Sorting and Searching

```c
#include <stdio.h>
#include <stdlib.h>

int compare_int(const void *a, const void *b)
{
    int ia = *(const int*)a;
    int ib = *(const int*)b;
    return (ia > ib) - (ia < ib);   /* returns -1, 0, or 1 */
}

int main(void)
{
    int arr[] = {42, 7, 15, 8, 23, 3, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    qsort(arr, n, sizeof(int), compare_int);

    printf("Sorted: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");

    int key = 15;
    int *found = bsearch(&key, arr, n, sizeof(int), compare_int);
    if (found) {
        printf("Found %d at index %td\n", key, found - arr);
    }

    return 0;
}
```

**Output:**
```
Sorted: 3 7 8 11 15 23 42
Found 15 at index 4
```

### Process Control

| Function | Description |
|----------|-------------|
| `exit(int status)` | Terminate program normally, calls atexit handlers |
| `_Exit(int status)` | Terminate immediately, no cleanup |
| `atexit(void (*f)(void))` | Register function to call on `exit` |
| `system(const char *cmd)` | Execute shell command |
| `getenv(const char *name)` | Get environment variable value |
| `abort(void)` | Abnormal termination (SIGABRT) |

```c
#include <stdio.h>
#include <stdlib.h>

void cleanup(void)
{
    printf("Cleanup function called\n");
}

int main(void)
{
    atexit(cleanup);

    char *path = getenv("PATH");
    if (path) printf("PATH: %s\n", path);

    printf("Exiting...\n");
    return 0;
}
```

### Integer Arithmetic

| Function | Description |
|----------|-------------|
| `abs(int)`, `labs(long)`, `llabs(long long)` | Absolute value |
| `div(int, int)`, `ldiv`, `lldiv` | Integer division returning quotient and remainder |

## 17.2 `<stdio.h>` — Input and Output

(Detailed in Chapter 12.)

**Key functions:**

| Function | Description |
|----------|-------------|
| `fopen`, `fclose` | File open/close |
| `fprintf`, `fscanf` | Formatted I/O |
| `fgets`, `fputs` | Line I/O |
| `fgetc`, `fputc` | Character I/O |
| `fread`, `fwrite` | Binary I/O |
| `fseek`, `ftell`, `rewind` | File positioning |
| `printf`, `scanf` | Standard I/O (wrappers for stdin/stdout) |
| `sprintf`, `sscanf` | String I/O |
| `snprintf` | Bounded string print (C99 — preferred over `sprintf`) |
| `perror` | Print error message to stderr |
| `remove`, `rename` | File operations |
| `tmpfile`, `tmpnam` | Temporary files |
| `setvbuf` | Set buffering mode |

```c
#include <stdio.h>

int main(void)
{
    /* snprintf — safe string formatting */
    char buf[50];
    int written = snprintf(buf, sizeof(buf), "The answer is %d", 42);
    printf("Buffer: '%s' (%d chars written)\n", buf, written);

    /* sscanf — parsing from string */
    int id;
    char name[50];
    float gpa;
    const char *line = "101 Alice 3.85";
    int count = sscanf(line, "%d %s %f", &id, name, &gpa);
    printf("Parsed %d items: %d %s %.2f\n", count, id, name, gpa);

    return 0;
}
```

**Output:**
```
Buffer: 'The answer is 42' (16 chars written)
Parsed 3 items: 101 Alice 3.85
```

## 17.3 `<string.h>` — String Functions

(Detailed in Chapter 7.)

**Key functions:**

| Function | Description |
|----------|-------------|
| `strlen` | String length |
| `strcpy`, `strncpy` | Copy string |
| `strcat`, `strncat` | Concatenate strings |
| `strcmp`, `strncmp` | Compare strings |
| `strchr`, `strrchr` | Find character in string |
| `strstr` | Find substring |
| `strtok`, `strtok_r` | Tokenize string |
| `strspn`, `strcspn` | Span character sets |
| `memset` | Fill memory with byte value |
| `memcpy` | Copy memory (may overlap — use `memmove` for overlapping) |
| `memmove` | Copy memory (handles overlap) |
| `memcmp` | Compare memory |
| `memchr` | Find byte in memory |

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    /* memcpy vs memmove */
    char str[] = "Hello, World!";
    memmove(str + 7, str, 6);   /* overlap safe */
    printf("%s\n", str);         /* "Hello, Hello!" */

    /* memset */
    int arr[5];
    memset(arr, 0, sizeof(arr));     /* zero out array */
    memset(arr, 0xFF, sizeof(arr));  /* set all bits to 1 */

    return 0;
}
```

**Output:**
```
Hello, Hello!
```

## 17.4 `<math.h>` — Mathematics

```c
#include <stdio.h>
#include <math.h>

int main(void)
{
    double x = 2.0;

    printf("sqrt(%.1f)   = %.6f\n", x, sqrt(x));
    printf("exp(%.1f)    = %.6f\n", x, exp(x));
    printf("log(%.1f)    = %.6f\n", x, log(x));
    printf("log10(%.1f)  = %.6f\n", x, log10(x));
    printf("pow(%.1f,3)  = %.6f\n", x, pow(x, 3));
    printf("sin(%.1f)    = %.6f\n", x, sin(x));
    printf("cos(%.1f)    = %.6f\n", x, cos(x));
    printf("ceil(%.3f)   = %.1f\n", 3.14, ceil(3.14));
    printf("floor(%.3f)  = %.1f\n", 3.14, floor(3.14));
    printf("round(%.3f)  = %.1f\n", 3.64, round(3.64));
    printf("fabs(%.1f)   = %.1f\n", -5.0, fabs(-5.0));
    printf("remainder(10,3) = %.1f\n", remainder(10.0, 3.0));
    printf("fmod(10,3)      = %.1f\n", fmod(10.0, 3.0));
    printf("hypot(3,4)      = %.1f\n", hypot(3.0, 4.0));

    return 0;
}
```

**Output:**
```
sqrt(2.0)   = 1.414214
exp(2.0)    = 7.389056
log(2.0)    = 0.693147
log10(2.0)  = 0.301030
pow(2.0,3)  = 8.000000
sin(2.0)    = 0.909297
cos(2.0)    = -0.416147
ceil(3.140) = 4.0
floor(3.140)= 3.0
round(3.640)= 4.0
fabs(-5.0)  = 5.0
remainder(10,3) = 1.0
fmod(10,3)      = 1.0
hypot(3,4)      = 5.0
```

**Link with `-lm`** on Unix-like systems:
```bash
gcc -std=c11 -Wall -o program program.c -lm
```

### Mathematical Constants

```c
#define _USE_MATH_DEFINES     /* for MSVC */
#include <math.h>

/* M_PI, M_E, M_SQRT2, etc. */
printf("π = %.15f\n", M_PI);
printf("e = %.15f\n", M_E);
```

These constants are not part of the C standard but are widely available.

## 17.5 `<time.h>` — Date and Time

```c
#include <stdio.h>
#include <time.h>

int main(void)
{
    /* Current time */
    time_t now = time(NULL);
    printf("Seconds since epoch: %ld\n", (long)now);

    /* Format to string */
    char time_str[100];
    struct tm *local = localtime(&now);
    strftime(time_str, sizeof(time_str),
             "%Y-%m-%d %H:%M:%S (%A)", local);
    printf("Local time: %s\n", time_str);

    /* Measure elapsed time */
    clock_t start = clock();
    volatile double sum = 0;   /* prevent optimization */
    for (long i = 0; i < 100000000L; i++) {
        sum += 0.0001;
    }
    clock_t end = clock();

    double elapsed = (double)(end - start) / CLOCKS_PER_SEC;
    printf("Elapsed: %.4f seconds\n", elapsed);

    return 0;
}
```

**Output (varies):**
```
Seconds since epoch: 1838500000
Local time: 2026-06-09 16:20:00 (Tuesday)
Elapsed: 0.2340 seconds
```

### Time Structures

```c
struct tm {
    int tm_sec;    /* seconds (0–60) */
    int tm_min;    /* minutes (0–59) */
    int tm_hour;   /* hours (0–23) */
    int tm_mday;   /* day of month (1–31) */
    int tm_mon;    /* month (0–11) */
    int tm_year;   /* year (years since 1900) */
    int tm_wday;   /* day of week (0–6, Sunday=0) */
    int tm_yday;   /* day of year (0–365) */
    int tm_isdst;  /* daylight saving time flag */
};
```

## 17.6 `<ctype.h>` — Character Handling

```c
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    char ch;

    printf("Enter a character: ");
    scanf("%c", &ch);

    printf("isalnum('%c') = %d\n", ch, isalnum(ch));
    printf("isalpha('%c') = %d\n", ch, isalpha(ch));
    printf("isdigit('%c') = %d\n", ch, isdigit(ch));
    printf("islower('%c') = %d\n", ch, islower(ch));
    printf("isupper('%c') = %d\n", ch, isupper(ch));
    printf("isspace('%c') = %d\n", ch, isspace(ch));
    printf("ispunct('%c') = %d\n", ch, ispunct(ch));
    printf("tolower('%c') = '%c'\n", ch, tolower(ch));
    printf("toupper('%c') = '%c'\n", ch, toupper(ch));

    return 0;
}
```

**Output (input: 'A'):**
```
isalnum('A') = 1
isalpha('A') = 1
isdigit('A') = 0
islower('A') = 0
isupper('A') = 1
isspace('A') = 0
ispunct('A') = 0
tolower('A') = 'a'
toupper('A') = 'A'
```

## 17.7 `<assert.h>` — Diagnostics

```c
#include <stdio.h>
#include <assert.h>

int divide(int a, int b)
{
    assert(b != 0);   /* aborts with message if b == 0 */
    return a / b;
}

int main(void)
{
    printf("10 / 2 = %d\n", divide(10, 2));
    printf("10 / 0 = %d\n", divide(10, 0));   /* triggers assertion failure */
    return 0;
}
```

**Output:**
```
10 / 2 = 5
Assertion failed: b != 0, file test.c, line 7
```

To disable assertions in release builds, define `NDEBUG` before including `<assert.h>`:

```c
#define NDEBUG
#include <assert.h>
/* assert() now expands to nothing */
```

## 17.8 `<setjmp.h>` — Non-Local Jumps

`setjmp` and `longjmp` provide a way to jump across function call boundaries, similar to `goto` but between stack frames.

```c
#include <stdio.h>
#include <setjmp.h>

jmp_buf env;

void second(void)
{
    printf("In second()\n");
    longjmp(env, 42);   /* jump back to setjmp — returns value 42 */
}

void first(void)
{
    printf("In first()\n");
    second();
    printf("This line never executes\n");
}

int main(void)
{
    int ret = setjmp(env);   /* establishes jump target */
    if (ret == 0) {
        printf("Calling first() (ret = %d)\n", ret);
        first();
    } else {
        printf("Back in main() via longjmp (ret = %d)\n", ret);
    }

    return 0;
}
```

**Output:**
```
Calling first() (ret = 0)
In first()
In second()
Back in main() via longjmp (ret = 42)
```

**Warnings:** `longjmp` does not call destructors, does not free memory, and can lead to resource leaks. Use sparingly — primarily for error recovery in deep call stacks (e.g., parsing nested data).

## 17.9 Other Useful Headers

| Header | Description |
|--------|-------------|
| `<stddef.h>` | `NULL`, `size_t`, `ptrdiff_t`, `offsetof` |
| `<stdint.h>` | Fixed-width integer types: `int32_t`, `uint64_t`, etc. |
| `<inttypes.h>` | Format specifiers for fixed-width types: `PRId32`, `PRIu64` |
| `<stdbool.h>` | `bool`, `true`, `false` macros |
| `<limits.h>` | Integer type limits: `INT_MAX`, `LONG_MIN`, etc. |
| `<float.h>` | Floating-point limits: `DBL_EPSILON`, `FLT_MAX`, etc. |
| `<errno.h>` | Error number macros: `errno`, `EDOM`, `ERANGE`, `EINVAL` |
| `<signal.h>` | Signal handling: `signal()`, `raise()` |
| `<stdarg.h>` | Variable-length argument lists: `va_list`, `va_start`, etc. |

## Summary

- `<stdlib.h>` provides memory allocation, numeric conversion, random numbers, sorting, and process control.
- `<stdio.h>` provides all I/O operations: file, console, and string I/O.
- `<string.h>` provides string manipulation and memory copying functions.
- `<math.h>` provides trigonometric, logarithmic, exponential, and rounding functions. Link with `-lm`.
- `<time.h>` provides time retrieval, formatting, and performance timing.
- `<ctype.h>` provides character classification and case conversion.
- `<assert.h>` provides runtime assertions; disable with `NDEBUG` for release builds.
- `<setjmp.h>` provides non-local jumps for deep error recovery.

## Exercises

### Review Questions

1. What is the difference between `atoi` and `strtol`? When should each be used?
2. Why is `snprintf` preferred over `sprintf`?
3. What is the difference between `memcpy` and `memmove`?
4. What does `assert` do? How is it disabled for production code?
5. What is the purpose of `setjmp`/`longjmp`? Why are they considered dangerous?

### Application Problems

1. Write a program that generates 100 random integers between 1 and 1000, sorts them using `qsort`, and prints the sorted list. Find the median and quartiles.
2. Write a program that measures and prints the execution time of `sqrt(2.0)` called 10 million times. Use `clock()` and `CLOCKS_PER_SEC`.
3. Write a program that reads a text file, removes all punctuation (using `ispunct`), converts everything to lowercase, and prints the 10 most common words.
4. Write a program that uses `strftime` to display the current time in the following formats:
   - `"2026-06-09 16:20:00"`
   - `"Tuesday, June 9, 2026"`
   - `"06/09/26"`
   - `"16:20"`
   - ISO 8601: `"2026-06-09T16:20:00"`

### Challenge Problem

Write a program that implements **polynomial regression** using the normal equation. Read x,y data points from a file (CSV format). Compute the coefficients of best-fit polynomial of degree `m` (user-specified) using least squares. Use `malloc` for matrices, `qsort` for sorting data by x, `sqrt`/`pow` from `<math.h>`, and print the resulting polynomial with `fprintf`. Test with synthetic data `y = 2x^2 - 3x + 5 + noise` and verify the recovered coefficients are approximately correct.
