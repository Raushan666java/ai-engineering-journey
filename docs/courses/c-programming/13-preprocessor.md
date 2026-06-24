# Chapter 13: The Preprocessor

> **Previous:** [File Handling](./12-file-handling.md) | **Next:** [Recursion](./14-recursion.md)

## Learning Objectives

- Understand the preprocessing phase and its role in compilation
- Define and use object-like and function-like macros with `#define`
- Guard header files against multiple inclusion
- Use conditional compilation (`#ifdef`, `#ifndef`, `#if`) for portability and debugging
- Understand the dangers of macros and the alternative of `const` and inline functions
- Use predefined standard macros
- Apply `#pragma` and `#error` directives
- Master the `#` stringification and `##` token-pasting operators
- Distinguish when to use macros vs functions vs const vs enum

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Preprocessor Overview | Textual transformation before compilation | Understand the 4-phase translation model |
| #include | Includes the contents of another file | Use `<>` for system headers and `""` for project headers |
| #define (Object-like) | Simple textual substitution | Use for constants, guards, and configuration flags |
| #define (Function-like) | Parameterized textual substitution | Always parenthesize macro parameters and the overall expression |
| Conditional Compilation | `#if`, `#ifdef`, `#ifndef`, `#else`, `#elif`, `#endif` | Use for platform detection, debug builds, and header guards |
| # and ## Operators | Stringification (`#`) and token pasting (`##`) | Stringify turns a parameter into a quoted string; token pasting concatenates tokens |
| Predefined Macros | `__LINE__`, `__FILE__`, `__DATE__`, `__TIME__`, `__STDC__` | Use for debug logging, assertions, and version checking |
| #pragma | Compiler-specific instructions | Use `#pragma once` for header guards |

```mermaid
flowchart LR
    A["13.1 Preprocessor Overview"] --> B["13.2 #include"]
    B --> C["13.3 #define (Object-like)"]
    C --> D["13.4 #define (Function-like)"]
    D --> E["13.5 Macros vs Functions"]
    E --> F["13.6 #define vs const vs enum"]
    F --> G["13.7 #undef"]
    G --> H["13.8 Conditional Compilation"]
    H --> I["13.9 #pragma"]
    I --> J["13.10 #error"]
    J --> K["13.11 #line"]
    K --> L["13.12 # and ## Operators"]
    L --> M["13.13 Predefined Macros"]
    M --> N["13.14 Macro Pitfalls"]
    N --> O["13.15 Interview Corner"]
    O --> P["13.16 Applications in Real Systems"]
    P --> Q["Summary & Exercises"]
```

## 13.1 The Preprocessor's Role

The preprocessor runs as the first stage of compilation. It processes directives — lines beginning with `#` — before the compiler sees the code. It is a **textual transformation engine**, not a language parser.

### Real-World Analogy: Kitchen Prep Station

A chef does not cook raw ingredients directly. First, vegetables are washed and chopped, spices are measured, and meat is marinated. These prep steps happen before any cooking begins. The preprocessor is the **prep station** of compilation — it arranges, substitutes, and conditions the source text before the compiler (the chef) starts cooking (compiling).

| Kitchen Prep | Preprocessor Equivalent |
|---|---|
| Recipe says "use stock" | `#include <stock.h>` |
| Substitute "butter" everywhere for "margarine" | `#define butter margarine` |
| "If using gas stove, preheat to 350" | `#ifdef GAS_STOVE` |
| Write reminder on ingredient label | `#pragma message("Check expiry")` |
| Stop if missing ingredient | `#error "Butter required"` |

### Numbered Steps of Preprocessing

1. **Trigraph replacement** — Replace trigraph sequences (deprecated in C17).
2. **Line splicing** — Join lines ending with `\` (backslash-newline).
3. **Tokenization** — Split source into preprocessing tokens.
4. **Directive processing and macro expansion** — Execute `#include`, `#define`, `#if`, etc., and expand macros.
5. **Whitespace stripping** — Remove comment tokens, trim whitespace.

### Pseudocode

```
function preprocess(sourceText):
    text = replace_trigraphs(sourceText)
    text = splice_continuation_lines(text)
    tokens = tokenize(text)
    
    while tokens remain:
        token = next_token(tokens)
        
        if token is '#include <header>':
            headerText = read_system_header(header)
            insert headerText at current position
        
        elif token is '#include "header"':
            headerText = read_user_header(header)
            insert headerText at current position
        
        elif token is '#define MACRO replacement':
            macro_table[MACRO] = replacement
        
        elif token is '#define MACRO(params) replacement':
            macro_table[MACRO] = (params, replacement)
        
        elif token is '#ifdef MACRO':
            push_condition(macro_table.contains(MACRO))
        
        elif token is '#if expression':
            push_condition(evaluate(expression))
        
        elif token is '#else':
            flip_current_condition()
        
        elif token is '#endif':
            pop_condition()
        
        elif token is '#error message':
            halt_with_error(message)
        
        elif token is identifier and token in macro_table:
            expand_macro(token)
        
        else:
            output(token)
    
    return output_text
```

### Dry Run Trace Table

Consider this input:
```c
#define PI 3.14159
#define DOUBLE(x) ((x) * 2)

int r = 5;
double c = DOUBLE(r) * PI;
```

| Step | Current Token | Action | Output |
|------|---------------|--------|--------|
| 1 | `#define` | Enter directive mode | — |
| 2 | `PI` | Add to macro table: PI → `3.14159` | — |
| 3 | `3.14159` | Replacement text stored | — |
| 4 | `#define` | Enter directive mode | — |
| 5 | `DOUBLE` | Add to macro table: DOUBLE(x) → `((x) * 2)` | — |
| 6 | `(x)` | Parameter list `x` stored | — |
| 7 | `((x) * 2)` | Replacement text stored | — |
| 8 | `int` | Not a macro, not directive | `int` |
| 9 | `r` | Check macro table — not found | `r` |
| 10 | `=` | Not a macro | `=` |
| 11 | `5` | Not a macro | `5` |
| 12 | `;` | Not a macro | `;` |
| 13 | `double` | Not a macro | `double` |
| 14 | `c` | Not a macro | `c` |
| 15 | `=` | Not a macro | `=` |
| 16 | `DOUBLE` | Found in macro table! Enter expansion | — |
| 17 | `(` | Begin argument collection | — |
| 18 | `r` | Argument `a` = `r` | — |
| 19 | `)` | End arguments | — |
| 20 | Expand | Replace `DOUBLE(r)` with `((r) * 2)` | `((r) * 2)` |
| 21 | `*` | Not a macro | `*` |
| 22 | `PI` | Found in macro table! | — |
| 23 | Expand | Replace `PI` with `3.14159` | `3.14159` |

**Final output:**
```c
int r = 5;
double c = ((r) * 2) * 3.14159;
```

### Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Line splicing | O(n) | O(n) |
| Tokenization | O(n) | O(n) |
| Macro table insertion | O(1) avg | O(m) for m macros |
| Macro expansion (single) | O(k) for k chars | O(k) |
| Macro expansion (recursive) | O(∞) without guard | O(stack depth) |
| #include resolution | O(f) for f file size | O(f) |
| Conditional compilation | O(n) | O(d) for d nesting depth |

### A&D Table

| Advantage | Disadvantage |
|-----------|--------------|
| Zero runtime overhead — all substitution happens at compile time | Debugging is hard — error messages reference expanded code, not source |
| Cross-platform code via conditional compilation | No type safety in function-like macros |
| Can create compile-time constants | Side effects from argument re-evaluation |
| Token pasting enables code generation | Missing parentheses cause precedence bugs |
| Stringification for log/assert macros | No scoping — macros are global and leak across files |
| Variadic macros for flexible logging | Cannot be pointed to (no function pointers to macros) |
| Header guards prevent redefinition errors | Recursive expansion risk (most compilers stop after one level) |

### Edge Cases

1. **Trigraphs** (removed in C17): `??=` becomes `#`, `??/` becomes `\`. Rare but can confuse old code.
2. **Backslash-newline splicing**: A `\` at end of line joins with next line. Inside `//` comments, this can swallow the next line.
3. **Empty macro**: `#define EMPTY` — expands to nothing. Useful for conditional checks without value.
4. **Macro redefinition**: Most compilers allow redefinition if the replacement text is identical; otherwise warning/error.
5. **Maximum line length**: C standard requires 4095 characters per logical line after splicing.

## 13.2 `#include` — File Inclusion

### Real-World Analogy: Copy-Paste from Reference Book

Imagine writing a report and needing the definition of "binary search tree." Instead of rewriting it by hand, you photocopy the page from a textbook and paste it into your report. `#include` does exactly this — it copies the entire contents of a file and pastes them into your source file at the exact point of the `#include` directive.

### Search Path Rules

```c
#include <stdio.h>      /* system header — searches standard include paths */
#include "myheader.h"    /* user header — searches current directory first */
```

| Form | Search Path | Typical Use Case |
|------|-------------|-----------------|
| `#include <...>` | Compiler's standard include directories | Standard library, system headers |
| `#include "..."` | Current source directory, then standard include directories | Project headers, third-party local headers |

### Numbered Steps

1. Preprocessor encounters `#include` directive.
2. Extracts the filename between `<>` or `""`.
3. For `""`: search current source directory first.
4. If not found (or `<>`), search system include paths.
5. If found: open file, read entire content, splice it at the directive location.
6. If not found: emit fatal compilation error.
7. Process the included file recursively (nested includes).

### Pseudocode

```
function handle_include(directive, filename):
    if directive is '<>':
        paths = system_include_paths
    else:
        paths = [current_directory] + system_include_paths
    
    for path in paths:
        full_path = path + '/' + filename
        if file_exists(full_path):
            content = read_file(full_path)
            push_include_guard(full_path)
            preprocess(content)
            pop_include_guard()
            return
    
    error("fatal error: " + filename + ": No such file or directory")
```

### Dry Run Trace

Source file `main.c`:
```c
#include "config.h"
int main() { return VERSION; }
```

Header file `config.h`:
```c
#ifndef CONFIG_H
#define CONFIG_H
#define VERSION 42
#endif
```

| Step | File | Directive | Action |
|------|------|-----------|--------|
| 1 | `main.c` | — | Start preprocessing |
| 2 | `main.c` | `#include "config.h"` | Search current dir → found |
| 3 | `config.h` | — | Open and start preprocessing |
| 4 | `config.h` | `#ifndef CONFIG_H` | CONFIG_H not defined → enter block |
| 5 | `config.h` | `#define CONFIG_H` | Add CONFIG_H to macro table |
| 6 | `config.h` | `#define VERSION 42` | Add VERSION → 42 |
| 7 | `config.h` | `#endif` | End conditional block |
| 8 | `config.h` | EOF | Close file, return to main.c |
| 9 | `main.c` | — | Resume: `int main() { return VERSION; }` |
| 10 | `main.c` | — | Expand `VERSION` → `42` |
| 11 | — | — | **Final:** `int main() { return 42; }` |

### Nested Include Resolution

```c
/* a.h */ #include "b.h"  → finds b.h → processes → returns
/* b.h */ #include "c.h"  → finds c.h → processes → returns
/* c.h */ #define LIMIT 100
```

The preprocessor maintains a **file stack** — each `#include` pushes a new file context; EOF pops back.

### Example with Output

```c
#include <stdio.h>
#include "mydefs.h"   /* suppose this defines GREETING "Hello from mydefs!" */

int main(void)
{
    printf("%s\n", GREETING);
    return 0;
}
```

**Output:**
```
Hello from mydefs!
```

### Edge Cases

1. **Circular includes**: `a.h` includes `b.h` which includes `a.h` — causes infinite recursion without header guards. The preprocessor would stack-overflow or hit file-descriptor limits.
2. **Missing file**: `#include "nonexistent.h"` → compilation error.
3. **Non-header files**: `#include "data.txt"` — valid but poor practice. The preprocessor doesn't care about file extension.
4. **Maximum nesting**: C99 requires at least 15 levels of nested inclusion.
5. **Include guard collision**: Two different headers using `#ifndef HEADER_H` — the first included "wins" and the second gets silently skipped.

## 13.3 `#define` — Object-like Macros

### Real-World Analogy: Find-and-Replace All

Your teacher tells the class "whenever I say 'device', write 'mobile phone'." Every time you hear "device," you automatically substitute "mobile phone" in your notes. This is an **object-like macro** — wherever the preprocessor sees the macro name, it replaces it with the replacement text.

```c
#define PI 3.1415926535
#define MAX_BUFFER 4096
#define PROGRAM_NAME "My Application"
#define DEBUG
```

### Numbered Steps

1. Preprocessor encounters `#define MACRO replacement`.
2. Stores `MACRO` as a key in the macro table with `replacement` as value.
3. For every subsequent token matching `MACRO`, replace it with `replacement`.
4. Continue scanning the replacement text for further macros (recursive expansion).
5. If `#undef MACRO` is encountered, remove the entry from the table.

### Pseudocode

```
function handle_define_OBJECT_LIKE(token_stream):
    name = next_token(token_stream)  // macro name
    replacement = remaining_tokens(token_stream)  // rest of line
    
    macro_table[name] = {
        type: OBJECT_LIKE,
        replacement: replacement
    }

function expand_macro(name):
    entry = macro_table[name]
    if entry.type == OBJECT_LIKE:
        return entry.replacement
```

### Dry Run Trace

Source:
```c
#define API_VERSION 2024
#define MSG "Welcome v" /* concat won't work here */
int v = API_VERSION;
```

| Step | Token | Action | Output |
|------|-------|--------|--------|
| 1 | `#define` | Start directive | — |
| 2 | `API_VERSION` | Store in table: `API_VERSION` → `2024` | — |
| 3 | `#define` | Start directive | — |
| 4 | `MSG` | Store in table: `MSG` → `"Welcome v"` | — |
| 5 | `int` | Not a macro | `int` |
| 6 | `v` | Not a macro | `v` |
| 7 | `=` | Not a macro | `=` |
| 8 | `API_VERSION` | Macro found! Look up → `2024` | `2024` |
| 9 | `;` | Not a macro | `;` |

**Expanded output:**
```c
int v = 2024;
```

### Example with Output

```c
#include <stdio.h>

#define PI 3.14159
#define RADIUS 5.0
#define FORMAT "Area = %.2f\n"

int main(void)
{
    double area = PI * RADIUS * RADIUS;
    printf(FORMAT, area);
    return 0;
}
```

**Output:**
```
Area = 78.54
```

### Complexity Analysis

| Operation | Complexity |
|-----------|------------|
| Macro definition | O(1) insertion into hash table |
| Macro lookup | O(1) average, O(m) worst-case |
| Macro expansion | O(k) where k = length of replacement text |
| Memory per macro | O(r) where r = characters in replacement text |

### A&D Table

| Advantage | Disadvantage |
|-----------|--------------|
| Compile-time constant — no runtime cost | No type safety |
| Works in preprocessor conditions (`#if`) | Cannot be scoped to a block |
| Can be undefined and redefined | Global — affects entire translation unit |
| Useful for include guards | Not visible to debugger symbols |
| Zero overhead abstraction | Can cause hard-to-find bugs with unintended substitution |

### Edge Cases

1. **Recursive macro (stopped)**: `#define REC REC` — the preprocessor will not expand `REC` recursively. It marks it as "currently expanding" and stops. No infinite loop.
2. **Redefinition**: `#define X 1` then `#define X 2` — most compilers warn unless the definition is identical.
3. **Empty definition**: `#define FLAG` — defines FLAG as empty. Useful with `#ifdef` for feature detection.
4. **Macro in macro replacement**: `#define TWO 2` then `#define FOUR TWO` — `FOUR` expands to `TWO` then to `2`.
5. **Semicolon in macro**: `#define PI 3.14;` — now `x = PI * 2;` becomes `x = 3.14; * 2;` — syntax error.

## 13.4 `#define` — Function-like Macros

### Real-World Analogy: Recipe Template with Blanks

A recipe card says "Bake at ___ degrees for ___ minutes." You fill in the blanks: "Bake at 350 degrees for 30 minutes." The recipe is a **function-like macro** — it has parameters (blanks) that get filled in with actual arguments each time the macro is used.

```c
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define ABS(x) ((x) < 0 ? -(x) : (x))
```

### Numbered Steps

1. Preprocessor encounters `#define MACRO(params) replacement`.
2. Parses the parameter list; spaces before `(` matter — `#define MACRO (x)` is an object-like macro named `MACRO` with expansion `(x)`.
3. Stores macro with parameter list and replacement text.
4. On invocation, collects comma-separated arguments inside parentheses.
5. Substitutes each parameter textually with its argument.
6. Then scans the result for further macro expansions.

### Critical: The Space-Before-Paren Trap

```c
#define FOO (x)  /* object-like macro: FOO expands to (x) */
#define BAR(x)   /* function-like macro: BAR takes parameter x */
```

### Why Parentheses Matter

Without parentheses:
```c
#define BAD_SQUARE(x) x * x
BAD_SQUARE(2 + 3)  /* expands to: 2 + 3 * 2 + 3 = 11, not 25 */
```

With parentheses:
```c
#define SQUARE(x) ((x) * (x))
SQUARE(2 + 3)  /* expands to: ((2 + 3) * (2 + 3)) = 25 */
```

### Dry Run Trace — With vs Without Parentheses

**Without parentheses:**
```c
#define BAD_SQUARE(x) x * x
int y = BAD_SQUARE(2 + 3);
```

| Step | Token | Action |
|------|-------|--------|
| 1 | `BAD_SQUARE` | Found in macro table |
| 2 | `(2 + 3)` | Collect arguments: a = `2 + 3` |
| 3 | Substitute | Replace `x` with `2 + 3` body: `2 + 3 * 2 + 3` |
| 4 | Evaluate | `2 + (3 * 2) + 3` = `2 + 6 + 3` = `11` |

**With parentheses:**
```c
#define SQUARE(x) ((x) * (x))
int y = SQUARE(2 + 3);
```

| Step | Token | Action |
|------|-------|--------|
| 1 | `SQUARE` | Found in macro table |
| 2 | `(2 + 3)` | Collect arguments: a = `2 + 3` |
| 3 | Substitute | Replace `x` with `2 + 3` → `((2 + 3) * (2 + 3))` |
| 4 | Evaluate | `(5 * 5)` = `25` |

### Example with Output

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

### Multi-Statement Macros

```c
#include <stdio.h>

#define SWAP(a, b, type)  \
    do {                  \
        type temp = a;    \
        a = b;            \
        b = temp;         \
    } while (0)

int main(void)
{
    int x = 10, y = 20;
    SWAP(x, y, int);
    printf("x = %d, y = %d\n", x, y);

    if (x < y)
        SWAP(x, y, int);  /* works without braces */
    else
        x = 0;

    return 0;
}
```

**Output:**
```
x = 20, y = 10
```

Why `do { ... } while (0)`? Without it:
```c
#define BAD_SWAP(a, b, t)  t _t = a; a = b; b = _t
if (x < y)
    BAD_SWAP(x, y, int);  /* expands to: if (x < y) t _t = x; x = y; y = _t; */
/* Only first statement is conditional — x = y and y = _t always execute! */
```

### Variadic Macros (C99)

```c
#include <stdio.h>

#define LOG(fmt, ...) printf("[LOG] " fmt "\n", __VA_ARGS__)
#define DEBUG_LOG(fmt, ...) fprintf(stderr, "[DEBUG] %s:%d: " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)

int main(void)
{
    LOG("Value = %d", 42);
    DEBUG_LOG("x = %d, y = %d", 10, 20);
    return 0;
}
```

**Output:**
```
[LOG] Value = 42
[DEBUG] test.c:12: x = 10, y = 20
```

The `##__VA_ARGS__` GNU extension allows omitting the variadic argument (makes the trailing comma disappear when `__VA_ARGS__` is empty).

### Complexity Analysis

| Operation | Complexity |
|-----------|------------|
| Parameter collection | O(p) where p = chars in argument list |
| Substitution into body | O(b × p) worst-case |
| Multi-argument macro | O(k × p) for k parameters |
| Nested macro expansion | O(m) total for m expansions |

### A&D Table

| Advantage | Disadvantage |
|-----------|--------------|
| Type-agnostic — works with any type | No type checking — int and pointer both accepted |
| Zero runtime overhead | Arguments evaluated multiple times → side effects |
| Can generate code via `##` | Cannot be recursive in any useful way |
| Variadic macros for logging | Hard to debug — line numbers point to expansion |
| `do { } while (0)` pattern works in all contexts | Cannot return a value from inside a statement expr |

### Edge Cases

1. **Side effects — the classic bug:**
   ```c
   #define MAX(a, b) ((a) > (b) ? (a) : (b))
   int x = 1, y = 2;
   int z = MAX(++x, y);  /* expands to: ((++x) > (y) ? (++x) : (y)) */
   /* x is incremented TWICE! z = 3, x = 3 */
   ```

2. **Double evaluation:**
   ```c
   #define SQUARE(x) ((x) * (x))
   int arr[] = {1, 2, 3};
   int i = 0;
   int s = SQUARE(arr[i++]);  /* expands to ((arr[i++]) * (arr[i++])) */
   /* i is incremented twice! arr[0] * arr[1] = 1 * 2 = 2, i = 2 */
   ```

3. **Comma in argument:**
   ```c
   #define ASSERT(cond, msg) if (!(cond)) printf("%s\n", msg)
   ASSERT(x < 3, "x is too big");  /* OK */
   /* But: */ ASSERT(x < 3, "x, which is " /* comma in string literal is OK */);
   ```

4. **Whitespace between macro name and `(`:** `#define MAX (a,b)` is an object-like macro named `MAX` expanding to `(a,b)`.

5. **Recursion guard:** `#define DOUBLE(x) (2 * DOUBLE(x))` — the preprocessor stops after detecting the recursive expansion, producing `(2 * DOUBLE(x))` as text output (which will likely cause a compilation error).

## 13.5 Macros vs Functions — Comparison

### Real-World Analogy

**Macro** is like having a personal assistant who, every time you say "double-check," physically does the two checks right there, writing them down in your notebook. **Function** is like having a reference desk — you go there, ask, get an answer, and return.

| Aspect | Macro | Function |
|--------|-------|----------|
| **When substitution happens** | Before compilation (preprocessor) | At runtime (call and return) |
| **Code size** | Inlined at every call site — can bloat binary | Single copy of code — called via call instruction |
| **Speed** | No call overhead | Call/return overhead (small, usually negligible) |
| **Type checking** | None — purely textual substitution | Full type checking of parameters and return |
| **Side effects** | Arguments re-evaluated each time used | Arguments evaluated once, then passed |
| **Can be recursive** | No (preprocessor stops recursive expansion) | Yes |
| **Can have address** | No — cannot point to a macro | Yes — function pointers work |
| **Scope** | Global — visible from point of definition to `#undef` | Block scope, file scope, or global |
| **Debugging** | Error messages refer to expanded code | Debugger shows original source line |
| **Variadic** | Yes — `__VA_ARGS__` since C99 | Yes — `...` and `va_arg` |
| **Return type** | N/A — expands to expression that must be valid C | Explicit return type |
| **Can contain complex control flow** | Awkward — needs `do { } while (0)` | Natural — any control flow works |
| **Compile-time evaluation** | Yes — can be used in `#if` | No — runtime only |
| **Token pasting / stringification** | Yes — `##` and `#` operators | No |

### Decision Guide

```c
/* USE MACRO when: */
#define IS_DIGIT(c) ((c) >= '0' && (c) <= '9')      /* Type-agnostic, hot path */
#define MAX(a,b)    ((a) > (b) ? (a) : (b))           /* Works for any type */
#define ASSERT(c)   if (!(c)) abort()                 /* __LINE__, __FILE__ needed */

/* USE FUNCTION when: */
static inline int max(int a, int b) { return a > b ? a : b; }  /* Type-safe */
double sqrt(double x);                                         /* Recursive, complex */
void sort(int* arr, size_t n);                                 /* Multi-statement, side effects */
```

## 13.6 `#define` vs `const` vs `enum` — Comparison

### Real-World Analogy

- `#define`: A sticky note on your desk that says "PI = 3.14" — you have to rewrite it everywhere you need it.
- `const`: A document in a filing cabinet labeled "PI = 3.14" — you look it up when needed.
- `enum`: A predefined list of related constants — like a restaurant menu with numbered items.

| Aspect | `#define` | `const` | `enum` |
|--------|-----------|---------|--------|
| **When evaluated** | Preprocessor — textual substitution | Compile-time initialization | Compile-time integral constant |
| **Type safety** | None | Full type checking | Integral type only |
| **Scope** | Global from definition to `#undef` | Block, file, or global scope | File or block scope |
| **Memory** | None — substitution only | Stored in memory (may be optimized out) | Integral constant, no storage |
| **Debugger visibility** | Not visible in debugger | Visible in debugger | Visible in debugger |
| **Can be used in `#if`** | Yes | No | No |
| **Can be used in switch** | Yes (integral) | No (unless constexpr in C23) | Yes |
| **Can have address** | No | Yes (`&pi`) | No |
| **Type information** | None | Full type | `int` by default |
| **Change impact** | Whole file recompiled | Only the translation unit | Only the translation unit |

### Example Demonstrating Differences

```c
#include <stdio.h>

#define PI_DEF  3.14159        /* No type, no address, no scope */
const double PI_CONST = 3.14159; /* Typed, scoped, addressable */
enum { PI_ENUM = 3 };           /* Integer only — 3, not 3.14159 */

int main(void)
{
    printf("#define: %f\n", PI_DEF);      /* works — substituted */
    printf("const:   %f\n", PI_CONST);    /* works — stored variable */
    printf("enum:    %d\n", PI_ENUM);      /* works — integral constant */

    /* What you CANNOT do: */
    // #undef PI_CONST     /* error: undef on non-macro */
    // enum { PI_ENUM = 3.14159 };  /* error: enum must be integer */
    // int* p = &PI_DEF;   /* error: PI_DEF is not an lvalue */
    
    return 0;
}
```

### When to Use What

| Use Case | Best Choice |
|----------|-------------|
| Floating-point constant | `const double` |
| Related integer constants (days, states, flags) | `enum` |
| Constant needed in `#if` directive | `#define` |
| String constant | `#define` or `const char*` |
| Array size | `enum` or `#define` (C99 VLA also works) |
| Debug flag (enable/disable code sections) | `#define` (can be checked with `#ifdef`) |
| Type-independent operation | `#define` (or `_Generic` in C11) |

## 13.7 `#undef`

### Real-World Analogy

You told your assistant "whenever I say 'current', write '2024'." Later you say "I changed my mind — stop doing that." `#undef` cancels a previous `#define`.

Removes a previously defined macro from the symbol table:

```c
#include <stdio.h>

#define TEMP 100
int main(void)
{
    int x = TEMP;   /* 100 */

#undef TEMP          /* TEMP is no longer defined */

    // int y = TEMP; /* ERROR: TEMP is not defined */
    return 0;
}
```

### Use Cases

1. **Temporary redefinition**: undefine then redefine with a different value.
2. **Cleaning up**: prevent macro name from leaking to other files.
3. **Avoiding conflicts**: undefine a library macro before defining your own.

```c
#define LIMIT 100
/* ... use LIMIT ... */
#undef LIMIT

#define LIMIT 200   /* redefine with new value */
/* ... use new LIMIT ... */
```

### Dry Run Trace

```c
#define MAX 10
int a = MAX;     /* a = 10 */
#undef MAX
/* MAX is gone */
#define MAX 20
int b = MAX;     /* b = 20 */
```

| Step | Directive | Macro Table | Code Output |
|------|-----------|-------------|-------------|
| 1 | `#define MAX 10` | MAX → 10 | — |
| 2 | — | MAX → 10 | `int a = 10;` |
| 3 | `#undef MAX` | (empty) | — |
| 4 | `#define MAX 20` | MAX → 20 | — |
| 5 | — | MAX → 20 | `int b = 20;` |

### Edge Cases

- `#undef` on an undefined macro is **safe** — no error.
- After `#undef`, `#ifdef MACRO` evaluates to false.

## 13.8 Conditional Compilation

### Real-World Analogy: Light Switch / Router Configuration

A factory assembly line can produce slightly different products depending on which switches are toggled. If SWITCH_A is on, include feature A. If SWITCH_B is on, include feature B. The factory doesn't build both features and then choose — it only builds what the switches allow. Conditional compilation works the same way: only the code that passes the condition is compiled.

### 13.8.1 Directives Overview

| Directive | Meaning | Example |
|-----------|---------|---------|
| `#ifdef MACRO` | If MACRO is defined | `#ifdef DEBUG` |
| `#ifndef MACRO` | If MACRO is NOT defined | `#ifndef HEADER_H` |
| `#if expr` | If expression is non-zero | `#if VERSION >= 3` |
| `#elif expr` | Else-if (C99) | `#elif VERSION >= 2` |
| `#else` | Otherwise | `#else` |
| `#endif` | End conditional block | `#endif` |
| `#if defined(MACRO)` | If defined (expression form) | `#if defined(__linux__)` |

### Numbered Steps

1. Preprocessor evaluates the condition in `#if`, `#ifdef`, `#ifndef`.
2. If true: keep following code until next conditional directive.
3. If false: skip (discard) following code until `#else`, `#elif`, or `#endif`.
4. For `#else`: keep code if previous condition was false.
5. For `#elif`: evaluate new condition if previous was false.
6. For `#ifdef`/`#ifndef`: condition is simply "is defined" or "is not defined."
7. `#endif` ends the conditional block and returns to normal processing.

### Pseudocode

```
condition_stack = []  // stack of booleans
skip_depth = 0        // how many levels deep we are skipping

function process_conditional(directive, condition):
    if skip_depth > 0:
        // Inside a skipped block — only track nesting
        if directive in ['#if', '#ifdef', '#ifndef']:
            skip_depth++
        elif directive == '#endif':
            skip_depth--
        return SKIP
    
    if directive in ['#if', '#ifdef', '#ifndef']:
        should_keep = evaluate_condition(directive, condition)
        condition_stack.push(should_keep)
        if not should_keep:
            skip_depth = 1  // start skipping
        return
    
    if directive == '#elif':
        if condition_stack.top() is false:
            // Previous condition was false, evaluate this one
            ...
        else:
            skip_depth = 1
    
    if directive == '#else':
        if condition_stack.top() is false:
            condition_stack.pop()
            condition_stack.push(true)
            skip_depth = 0
        else:
            skip_depth = 1
    
    if directive == '#endif':
        condition_stack.pop()
        skip_depth = 0
```

### 13.8.2 `#ifdef` and `#ifndef`

```c
#include <stdio.h>

#define DEBUG

int main(void)
{
#ifdef DEBUG
    printf("Debug mode enabled — verbose output active\n");
#endif

#ifndef RELEASE
    printf("Release mode is NOT defined — using debug settings\n");
#endif

    return 0;
}
```

**Output:**
```
Debug mode enabled — verbose output active
Release mode is NOT defined — using debug settings
```

### Dry Run Trace — `#ifdef`/`#ifndef`

| Step | Directive | Macro Table | Keep? | Output |
|------|-----------|-------------|-------|--------|
| 1 | `#define DEBUG` | DEBUG | — | — |
| 2 | `#ifdef DEBUG` | DEBUG | YES (DEBUG defined) | — |
| 3 | — | — | — | `printf("Debug mode...");` |
| 4 | `#endif` | — | End conditional | — |
| 5 | `#ifndef RELEASE` | — | YES (RELEASE not defined) | — |
| 6 | — | — | — | `printf("Release mode...");` |
| 7 | `#endif` | — | End conditional | — |

### 13.8.3 `#if` and `#elif`

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

### Dry Run Trace — `#if`/`#elif`/`#else`

| Step | Directive | Evaluation | Keep? | Output |
|------|-----------|------------|-------|--------|
| 1 | `#if VERSION >= 3` | `2 >= 3` = 0 | NO | — |
| 2 | `#elif VERSION >= 2` | `2 >= 2` = 1 | YES | — |
| 3 | — | — | — | `printf("Version 2\n");` |
| 4 | `#endif` | — | End | — |

### 13.8.4 `#if defined(...)`

The `defined()` operator works inside `#if`, enabling logical combinations:

```c
#include <stdio.h>

int main(void)
{
#if defined(__linux__) || defined(__unix__)
    printf("Compiling on Linux/Unix\n");
#elif defined(_WIN32)
    printf("Compiling on Windows\n");
#elif defined(__APPLE__)
    printf("Compiling on macOS\n");
#else
    printf("Unknown platform\n");
#endif

    return 0;
}
```

### 13.8.5 Use Cases

#### Platform Detection

```c
#ifdef _WIN32
    #include <windows.h>
    #define SLEEP(ms) Sleep(ms)
#elif defined(__linux__)
    #include <unistd.h>
    #define SLEEP(ms) usleep((ms) * 1000)
#elif defined(__APPLE__)
    #include <unistd.h>
    #define SLEEP(ms) usleep((ms) * 1000)
#endif
```

#### Debug Builds

```c
#ifdef DEBUG
    #define LOG(msg) printf("[DEBUG] %s:%d: %s\n", __FILE__, __LINE__, msg)
    #define ASSERT(cond) if (!(cond)) { fprintf(stderr, "Assertion failed: %s at %s:%d\n", #cond, __FILE__, __LINE__); abort(); }
#else
    #define LOG(msg)          /* nothing */
    #define ASSERT(cond)      /* nothing */
#endif
```

#### Header Guards

```c
#ifndef MY_HEADER_H
#define MY_HEADER_H

/* header content — only processed once per translation unit */

#endif /* MY_HEADER_H */
```

### 13.8.6 `#pragma once` vs `#ifndef` — Comparison

| Aspect | `#pragma once` | `#ifndef` Guard |
|--------|----------------|-----------------|
| **Standard** | Non-standard (but widely supported) | Standard C89+ |
| **Errors** | Cannot cause name collision | Name collision silently skips header |
| **Code** | Single line | Three lines + unique name |
| **Speed** | Faster on some compilers (no file open needed) | Opens file to check guard macro |
| **Portability** | Not supported by all compilers | Works on every conforming compiler |
| **Duplicated headers** | Detects same file via inode/file identity | Detects by macro name only |
| **Different paths, same file** | Works (same inode) | Fails (different paths → different `#include`) |

```c
/* Method 1: #pragma once (modern, concise) */
#pragma once

/* Method 2: #ifndef guard (portable, standard) */
#ifndef MY_HEADER_H
#define MY_HEADER_H
#endif
```

**Recommendation:** Use `#pragma once` for new projects (every major compiler supports it). Use `#ifndef` guards when maximum portability is required (embedded systems, legacy compilers).

### 13.8.7 Nested Conditional Compilation

```c
#include <stdio.h>

#define DEBUG
#define PLATFORM 2

int main(void)
{
#ifdef DEBUG
    #if PLATFORM == 1
        printf("[DEBUG] Platform 1\n");
    #elif PLATFORM == 2
        printf("[DEBUG] Platform 2\n");
    #else
        printf("[DEBUG] Unknown platform\n");
    #endif
#else
    printf("Release build\n");
#endif

    return 0;
}
```

**Output:**
```
[DEBUG] Platform 2
```

### Edge Cases

1. **`#ifdef` vs `#if defined()`**: Functionally identical for single conditions. `#if defined()` allows `||` and `&&`.
2. **Empty `#if`**: `#if 0` ... `#endif` — classic comment-out block (works even when comments nest poorly).
3. **Evaluating undefined macro in `#if`**: `#if UNDEFINED > 0` — undefined macros evaluate to `0`.
4. **Mismatched `#endif`**: Compilation error — "unterminated conditional."
5. **Nesting limit**: C99 mandates at least 63 levels of nesting.

## 13.9 `#pragma`

### Real-World Analogy

A recipe might include a note: "If using a convection oven, reduce temperature by 25°F." This is a **compiler-specific instruction** — it only applies if you're using a convection oven (specific compiler). Other ovens (other compilers) may ignore it.

`#pragma` provides compiler-specific instructions. Unrecognized pragmas are silently ignored.

### Common Pragmas

```c
#pragma once                     /* include guard (alternative to #ifndef) */

#if defined(__GNUC__)
#pragma GCC optimize("O2")       /* GCC: optimization hint */
#pragma GCC diagnostic ignored "-Wunused-variable"  /* GCC: suppress warning */
#endif

#if defined(_MSC_VER)
#pragma warning(disable: 4996)   /* MSVC: disable 'unsafe' function warning */
#pragma warning(push, 3)         /* MSVC: set warning level to 3 */
#pragma warning(pop)             /* MSVC: restore previous warning level */
#endif

#pragma pack(push, 1)            /* pack struct members without padding */
struct PackedData {
    char c;
    int  i;                      /* normally 8 bytes; with pack(1): 5 bytes */
};
#pragma pack(pop)                /* restore default packing */
```

### `_Pragma()` Operator (C99)

`_Pragma()` allows pragmas to be used inside macro definitions:

```c
#define STRINGIFY(x) #x
#define PRAGMA(x) _Pragma(STRINGIFY(x))
#define SUPPRESS_WARNING(w) PRAGMA(GCC diagnostic ignored w)

SUPPRESS_WARNING("-Wunused-variable")
```

### Example with Output

```c
#include <stdio.h>

#pragma pack(push, 1)
struct Packed {
    char c;
    int  i;
};
#pragma pack(pop)

struct Normal {
    char c;
    int  i;
};

int main(void)
{
    printf("Packed struct: %zu bytes\n", sizeof(struct Packed));
    printf("Normal struct: %zu bytes\n", sizeof(struct Normal));
    return 0;
}
```

**Output (typical):**
```
Packed struct: 5 bytes
Normal struct: 8 bytes
```

### A&D Table

| Advantage | Disadvantage |
|-----------|--------------|
| Access to compiler-specific optimizations | Non-portable — code may not compile on other compilers |
| Can suppress false-positive warnings | Unrecognized pragmas silently ignored (bugs hide) |
| Structure packing for binary protocols | Can cause alignment faults on some architectures |
| `#pragma once` is cleaner than header guards | `#pragma once` not in standard (but universally supported) |

## 13.10 `#error`

### Real-World Analogy

A factory assembly line has a security checkpoint. If a part doesn't meet specifications, the line stops immediately with an alarm. `#error` is that alarm — it halts compilation with a message.

### Syntax and Example

```c
#ifndef __STDC__
#error "This program requires a standard C compiler"
#endif

#if !defined(__linux__) && !defined(_WIN32) && !defined(__APPLE__)
#error "Unsupported operating system — only Linux, Windows, and macOS are supported"
#endif

#if __STDC_VERSION__ < 199901L
#error "C99 or later is required for variadic macros and // comments"
#endif
```

### Use Cases

1. **Platform requirements**: Ensure compilation on supported platforms only.
2. **Version requirements**: Check compiler or C standard version.
3. **Configuration validation**: Verify that required macros are defined.
4. **Feature detection**: Ensure required features are available.

### Example

```c
#include <stdio.h>

#define REQUIRED_FEATURE

int main(void)
{
#ifndef REQUIRED_FEATURE
#error "REQUIRED_FEATURE must be defined to compile this program"
#endif

    printf("All required features present\n");
    return 0;
}
```

If you comment out `#define REQUIRED_FEATURE`, compilation stops with:
```
error: #error "REQUIRED_FEATURE must be defined to compile this program"
```

### A&D Table

| Advantage | Disadvantage |
|-----------|--------------|
| Catches configuration errors at compile time | Crude — unconditional halt only |
| Prevents silent miscompilation | Cannot be conditional on runtime state |
| Clear error message for users | Must be combined with `#if` for conditional use |

## 13.11 `#line`

### Real-World Analogy

You're editing a document and the page numbers are wrong. You insert a sticky note saying "The next page should be numbered page 100." `#line` resets the line numbering that `__LINE__` and `__FILE__` report.

### Syntax

```c
#line 100 "newfile.c"
/* Next line is treated as line 100 of "newfile.c" */

#line 200
/* Line number reset to 200, filename unchanged */
```

### Example

```c
#include <stdio.h>

int main(void)
{
    printf("Line: %d, File: %s\n", __LINE__, __FILE__);
#line 50 "generated.c"
    printf("Line: %d, File: %s\n", __LINE__, __FILE__);
#line 75
    printf("Line: %d, File: %s\n", __LINE__, __FILE__);
    return 0;
}
```

**Output:**
```
Line: 6, File: test.c
Line: 50, File: generated.c
Line: 76, File: generated.c
```

### Use Cases

1. **Generated code**: Tools like `yacc`, `flex`, and code generators use `#line` to point errors back to the original source file.
2. **Source transformation**: If a tool transforms C code, `#line` preserves the mapping back to the original.
3. **Error reporting**: Custom preprocessors can use `#line` so compiler errors reference the correct file.

## 13.12 `#` and `##` Operators

These operators are only meaningful inside function-like macro definitions.

### 13.12.1 Stringification (`#`)

### Real-World Analogy

You're filling out a form. The blank says "Name: _____." The `#` operator is like writing the label "Name" onto the form — it takes the field name and turns it into a printed label.

The `#` operator converts a macro parameter to a **string literal**:

```c
#include <stdio.h>

#define PRINT_INT(x) printf(#x " = %d\n", x)

int main(void)
{
    int value = 42;
    PRINT_INT(value);      /* expands to: printf("value" " = %d\n", value) */
    PRINT_INT(value + 1);  /* expands to: printf("value + 1" " = %d\n", value + 1) */
    return 0;
}
```

**Output:**
```
value = 42
value + 1 = 43
```

### Detailed Expansion

```c
#define STR(x) #x

STR(hello)        → "hello"
STR(42)           → "42"
STR(x y z)        → "x y z"
STR(text)         → "text"

/* With macro argument: */
#define FOO 123
STR(FOO)          → "FOO"   /* NOT "123" — # prevents expansion of the parameter */
```

### Dry Run Trace — Stringification

```c
#define SHOW(var) printf(#var " = %d\n", var)
int count = 5;
SHOW(count);
```

| Step | Token | Action |
|------|-------|--------|
| 1 | `SHOW` | Found in macro table |
| 2 | `(count)` | Collect argument: `var` = `count` |
| 3 | `#var` | Apply `#`: `#count` → `"count"` |
| 4 | `var` | Substitute: `count` |
| 5 | Result | `printf("count" " = %d\n", count)` |

**Important:** The `#` operator prevents further macro expansion of the parameter. `#FOO` produces `"FOO"` even if `FOO` is itself a macro.

### Stringification with Spaces

```c
#define STR(x) #x
STR(  hello   world  )    → "hello   world"
```

Multiple spaces between tokens in the argument are collapsed to a single space, but leading/trailing whitespace is removed.

### 13.12.2 Token Pasting (`##`)

### Real-World Analogy

You have two pieces of a shipping label: "apt-" and "3B." You tape them together to make "apt-3B." The `##` operator concatenates two tokens into one.

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

### Practical Examples

#### Type-Generic Operations (Before C11 `_Generic`)

```c
#include <stdio.h>

#define DECLARE_VECTOR(type) \
    typedef struct { type x; type y; } Vector2##type

DECLARE_VECTOR(int);     /* creates: typedef struct { int x; int y; } Vector2int */
DECLARE_VECTOR(float);   /* creates: typedef struct { float x; float y; } Vector2float */
DECLARE_VECTOR(double);  /* creates: typedef struct { double x; double y; } Vector2double */

int main(void)
{
    Vector2int v1 = {1, 2};
    Vector2float v2 = {1.5f, 2.5f};
    printf("v1 = (%d, %d)\n", v1.x, v1.y);
    printf("v2 = (%.1f, %.1f)\n", v2.x, v2.y);
    return 0;
}
```

**Output:**
```
v1 = (1, 2)
v2 = (1.5, 2.5)
```

#### X Macros Pattern

```c
#include <stdio.h>

#define COLOR_TABLE \
    X(RED,   0xFF0000) \
    X(GREEN, 0x00FF00) \
    X(BLUE,  0x0000FF) \
    X(WHITE, 0xFFFFFF)

#define X(name, value) name,
typedef enum { COLOR_TABLE } Color;
#undef X

#define X(name, value) value,
const int color_values[] = { COLOR_TABLE };
#undef X

#define X(name, value) #name,
const char* color_names[] = { COLOR_TABLE };
#undef X

int main(void)
{
    for (int i = RED; i <= WHITE; i++)
        printf("%s = #%06X\n", color_names[i], color_values[i]);
    return 0;
}
```

**Output:**
```
RED = #FF0000
GREEN = #00FF00
BLUE = #0000FF
WHITE = #FFFFFF
```

### Combining `#` and `##`

```c
#include <stdio.h>

#define MAKE_GETTER(type, field) \
    type get_##field(void) { return field; } \
    const char* get_##field##_name(void) { return #field; }

int x = 42;
MAKE_GETTER(int, x);   /* creates: int get_x(void) { return x; } */
                       /* creates: const char* get_x_name(void) { return "x"; } */

int main(void)
{
    printf("Value: %d\n",  get_x());
    printf("Name:  %s\n",  get_x_name());
    return 0;
}
```

**Output:**
```
Value: 42
Name:  x
```

### Edge Cases

1. **Invalid token result**: `#define CAT(a, b) a ## b` — `CAT(1, 2)` produces `12` (valid). But `CAT(1, 2x)` produces `12x` (valid); `CAT(+, =)` produces `+=` (valid). `CAT(1, 2.3)` produces `12.3` (valid). However, `CAT(., 2)` produces `.2` which might not be valid depending on context.
2. **Empty macro argument**: `#define F(x) #x` — `F()` produces `""`.
3. **`##` with empty argument**: `#define CAT(a, b) a ## b` — `CAT(prefix, )` produces `prefix` (empty argument yields just the other token). This behavior is compiler-dependent.
4. **Space before `##`**: `name ## num` and `name##num` are equivalent — spaces don't affect the paste.
5. **`#` prevents expansion**: In `#x`, the parameter `x` is NOT expanded further. In `a ## b`, both `a` and `b` are fully expanded before pasting.

## 13.13 Predefined Macros

### Real-World Analogy

A factory stamps each product with the date, time, and machine ID. `__DATE__`, `__TIME__`, and `__FILE__` are automatic stamps the compiler adds to let you know when, where, and in what context your code was compiled.

### Complete Table

| Macro | Type | Description | Example Value |
|-------|------|-------------|---------------|
| `__LINE__` | `int` | Current source line number | `42` |
| `__FILE__` | `const char*` | Current source file name | `"program.c"` |
| `__DATE__` | `const char*` | Compilation date (Mmm dd yyyy) | `"Jun 24 2026"` |
| `__TIME__` | `const char*` | Compilation time (hh:mm:ss) | `"14:30:00"` |
| `__STDC__` | `int` | 1 if compiler conforms to ANSI C | `1` |
| `__STDC_VERSION__` | `long` | C standard version code | `201112L` (C11) |
| `__STDC_HOSTED__` | `int` | 1 if hosted implementation | `1` |
| `__func__` | `const char*` | Current function name (C99) | `"main"` |
| `__cplusplus` | `long` | Defined only in C++ compilation | `201703L` (C++17) |
| `__LINE__` | `int` | Current line (resettable via `#line`) | `100` |

### Example with Output

```c
#include <stdio.h>

void show_info(void)
{
    printf("Function:  %s\n", __func__);
    printf("Line:      %d\n", __LINE__);
}

int main(void)
{
    printf("File:       %s\n", __FILE__);
    printf("Line:       %d\n", __LINE__);
    printf("Date:       %s\n", __DATE__);
    printf("Time:       %s\n", __TIME__);
    printf("STDC:       %d\n", __STDC__);
    printf("STDC Ver:   %ld\n", __STDC_VERSION__);
    printf("STDC Hosted:%d\n", __STDC_HOSTED__);
    show_info();
    return 0;
}
```

**Output (varies):**
```
File:       macros.c
Line:       15
Date:       Jun 24 2026
Time:       14:30:00
STDC:       1
STDC Ver:   201112
STDC Hosted:1
Function:   show_info
Line:       10
```

### Use Cases

#### Debug Logging

```c
#define LOG(fmt, ...) \
    fprintf(stderr, "[%s:%d] " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)

LOG("x = %d", x);   /* [file.c:42] x = 10 */
```

#### Static Assertions

```c
#define STATIC_ASSERT(cond, msg) \
    typedef char static_assert_##msg##_##__LINE__[(cond) ? 1 : -1]

STATIC_ASSERT(sizeof(int) == 4, int_must_be_4_bytes);
/* If condition fails: error: size of array is negative */
```

#### Version Checking

```c
#if __STDC_VERSION__ >= 201112L
    /* C11 features available */
    _Static_assert(1, "C11 static assert");
#elif __STDC_VERSION__ >= 199901L
    /* C99 features available */
    #define inline inline
#else
    /* C89 — limited features */
    #define inline /* no inline */
#endif
```

#### C/C++ Compatibility

```c
#ifdef __cplusplus
extern "C" {
#endif

void c_function(int x);

#ifdef __cplusplus
}
#endif
```

### Edge Cases

- `__LINE__` changes after `#line` directive.
- `__FILE__` is the current file name, not the `#include`'ing file.
- `__DATE__` and `__TIME__` reflect when compilation started, not the current time.
- `__STDC_VERSION__` values: `199409L` (C95), `199901L` (C99), `201112L` (C11), `201710L` (C17), `202311L` (C23).
- `__func__` is not a macro but an implicit identifier — it cannot be used in `#if`.

## 13.14 Macro Pitfalls

### 1. Side Effects from Double Evaluation

```c
#include <stdio.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int main(void)
{
    int x = 1, y = 2;
    int z = MAX(++x, y);
    printf("z = %d, x = %d\n", z, x);
    return 0;
}
```

**Expansion:** `((++x) > (y) ? (++x) : (y))`

**Output:** `z = 3, x = 3` — `x` was incremented twice!

### 2. Missing Parentheses

```c
#define BAD_MULTIPLY(a, b) a * b
BAD_MULTIPLY(2 + 3, 4)   /* 2 + 3 * 4 = 14, not 20 */
```

**Fix:** `#define MULTIPLY(a, b) ((a) * (b))`

### 3. Semicolon Swallowing

```c
#define BAD_SWAP(a, b)  int temp = a; a = b; b = temp

if (x > y)
    BAD_SWAP(x, y);
else
    x = 0;
```

**Expansion:**
```c
if (x > y)
    int temp = x;  /* only this is conditional */
x = y;              /* always executed */
y = temp;           /* error: temp not in scope */
```

**Fix:** Multi-statement macros need `do { ... } while (0)`.

### 4. No Type Safety

```c
#define SQUARE(x) ((x) * (x))
SQUARE("hello")    /* compiles! "hello" * "hello" → garbage error */
```

### 5. Debugging Difficulty

Error messages refer to the **expanded** code, not the macro invocation:

```c
#define BUGGY(x) x + x * 2
int y = BUGGY(5);  /* compiler error points to expanded: 5 + 5 * 2 */
```

### 6. Dangling Else

```c
#define IF_BIG(x) if ((x) > 100)

int y = 50;
IF_BIG(y)
    printf("Big!\n");
else
    printf("Small\n");  /* else without if in preprocessor output? No, but in source it looks wrong */
```

### 7. Name Collisions

```c
#include "some_lib.h"    /* some_lib.h might define MIN, MAX */
#define MIN(a, b) ...    /* redefinition warning/error — or worse, silent override */
```

### Pitfalls at a Glance

| Pitfall | Example | Consequence | Fix |
|---------|---------|-------------|-----|
| Double eval | `MAX(++x, y)` | Side effects — increment twice | Use inline function |
| Missing parens | `SQUARE(2+3)` | Wrong precedence — 11 vs 25 | `((x)*(x))` |
| Semicolon | `BAD_SWAP` | Only first statement conditional | `do { } while (0)` |
| No types | `SQUARE("hello")` | Garbage error | Use inline function |
| Global scope | `#define MAX` | Collides with library headers | Use `INTPLUS_MAX` prefix |
| Hard to debug | Complex macro | Error in unreadable expansion | Keep macros simple |

## 13.15 Interview Corner

### Q1: What is the difference between a macro and an inline function?

**Answer:**

| Aspect | Macro | `static inline` Function |
|--------|-------|-------------------------|
| Substitution point | Preprocessor — textual | Compiler — semantic |
| Type checking | None | Full type checking |
| Side effect protection | None — double evaluation | Safe — arguments evaluated once |
| Can use `#` / `##` | Yes | No |
| Debugging | Poor — expanded code shown | Normal — function name visible |
| Can be recursive | No | Yes |
| Can return a value | Yes (expression result) | Yes (return statement) |
| Scope | From `#define` to `#undef` | Block or file scope |

**When to choose each:**
- Use **macro** when you need `__LINE__`/`__FILE__`, token pasting, type-agnostic operations, or preprocessor conditionals.
- Use **inline function** for type safety, side-effect protection, readability, and debugger support.

### Q2: What are macro side effects and how do you prevent them?

```c
#define SQUARE(x) ((x) * (x))

int i = 2;
int result = SQUARE(++i);
/* Expands to: ((++i) * (++i)) — i incremented twice! */
```

**Prevention strategies:**
1. Use inline functions instead where possible.
2. Document that the macro evaluates arguments multiple times.
3. Use GNU C statement expressions as a safer alternative (non-standard):
   ```c
   #define MAX(a, b) ({ \
       __typeof__(a) _a = (a); \
       __typeof__(b) _b = (b); \
       _a > _b ? _a : _b; \
   })
   ```
4. In C11, use `_Generic` for type-safe macros.

### Q3: Explain the `#` and `##` preprocessor operators with examples.

**`#` (Stringification):**
```c
#define STR(x) #x
STR(hello)   → "hello"
STR(42)      → "42"
```
Turns the parameter into a string literal. The parameter is NOT expanded before stringification.

**`##` (Token Pasting):**
```c
#define CONCAT(a, b) a ## b
CONCAT(var, 123)   → var123
CONCAT(prefix, _suffix)   → prefix_suffix
```
Concatenates two tokens into one new token. Both operands are fully expanded before pasting.

**Combined:**
```c
#define MAKE_VAR(type, name) \
    type name = 0; \
    const char* name##_str = #name

MAKE_VAR(int, counter)
/* Creates:
 *   int counter = 0;
 *   const char* counter_str = "counter";
 */
```

### Q4: Is `#pragma once` portable? Should I use it?

`#pragma once` is supported by all major compilers (GCC, Clang, MSVC, ICC, etc.) but is **not ISO C standard**. It is safe for most projects because:
- Every modern compiler supports it.
- It eliminates naming collisions that `#ifndef` guards suffer from.
- It can be faster — the compiler avoids opening the file entirely.

**Recommendation:** Use `#pragma once` for new projects. Use `#ifndef` guards only if you need to support obscure or legacy compilers.

### Q5: What are X macros? Provide an example.

X macros are a technique where a single list of data drives multiple code generation passes using `#define` and `#undef`:

```c
/* Define the data list once */
#define FRUIT_TABLE \
    X(APPLE,  "Apple",   100) \
    X(BANANA, "Banana",  80)  \
    X(CHERRY, "Cherry",  250)

/* Generate enum */
#define X(id, name, price) id,
typedef enum { FRUIT_TABLE } FruitId;
#undef X

/* Generate name array */
#define X(id, name, price) name,
const char* fruit_names[] = { FRUIT_TABLE };
#undef X

/* Generate price array */
#define X(id, name, price) price,
int fruit_prices[] = { FRUIT_TABLE };
#undef X
```

**Advantages:** Single source of truth — adding a fruit updates enum, name array, and price array simultaneously.

### Q6: Can macros be recursive?

No. The C preprocessor has an **expansion barrier** — when a macro is currently being expanded, it is marked and not expanded again. This prevents infinite recursion:

```c
#define REC REC   /* Expands once to REC, then stops — REC stays as text */
```

There is one level of indirect recursion allowed:
```c
#define A B
#define B A
A   /* Expands: A → B → A (stops here) */
```

### Q7: What is the difference between `#ifdef MACRO` and `#if defined(MACRO)`?

Functionally identical for a single condition. The difference:

| `#ifdef MACRO` | `#if defined(MACRO)` |
|----------------|----------------------|
| Shorter syntax | More verbose |
| Single condition only | Can combine with `&&`, `\|\|`, `!` |
| Cannot negate directly (`#ifndef` is separate) | Can negate: `#if !defined(MACRO)` |
| Cannot use `defined()` in `#elif` before C99 | `#elif defined(MACRO)` works |

```c
#ifdef A              ←→  #if defined(A)
#ifndef A             ←→  #if !defined(A)
                         #if defined(A) || defined(B)   ← can't do with #ifdef
```

### Q8: How do you create a debug print macro that includes file and line info?

```c
#ifdef DEBUG
    #define DBG_PRINT(fmt, ...) \
        fprintf(stderr, "[DEBUG] %s:%d: " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)
#else
    #define DBG_PRINT(fmt, ...)  /* nothing */
#endif

/* Usage: */
DBG_PRINT("x = %d, y = %s", x, "hello");
/* Output: [DEBUG] test.c:10: x = 42, y = hello */
```

The `##` before `__VA_ARGS__` is a GNU extension that removes the trailing comma when the variadic argument is empty.

### Q9: Explain the `do { ... } while (0)` pattern.

This pattern ensures multi-statement macros work correctly in all syntactic contexts:

```c
#define SWAP(a, b, type)  do { type _t = a; a = b; b = _t; } while (0)

if (x > y)
    SWAP(x, y, int);    /* Works: if (x > y) do { ... } while (0); */
else
    y = 0;

/* Without do-while: */
#define BAD_SWAP(a, b, type)  type _t = a; a = b; b = _t
if (x > y)
    BAD_SWAP(x, y, int);  /* Only first statement inside if! */
```

The `do { } while (0)` requires a semicolon, consumes it, and wraps all statements into a single compound statement.

### Q10: What is the purpose of `#line` directive?

`#line` resets the line number and optionally the filename reported by `__LINE__` and `__FILE__`. It is primarily used by:
- **Code generators** (yacc, lex, IDL compilers) to map generated C code back to the original source.
- **Source-to-source transforms** to preserve original line numbers for debugging.
- **Error reporting** in custom preprocessing tools.

## 13.16 Applications in Real Systems

### 13.16.1 The Linux Kernel — `container_of` Macro

One of the most famous macros in systems programming:

```c
#define container_of(ptr, type, member) ({                      \
    const __typeof__(((type *)0)->member) *__mptr = (ptr);     \
    (type *)((char *)__mptr - offsetof(type, member));         \
})

/* Usage: given a pointer to a struct member, get the containing struct */
struct my_struct {
    int a;
    int b;
    struct list_node node;
};

struct list_node* np = get_node();
struct my_struct* sp = container_of(np, struct my_struct, node);
/* sp points to the my_struct that contains np */
```

This macro is the foundation of Linux kernel data structures (linked lists, trees, queues).

### 13.16.2 Assertion Macros

```c
#ifdef NDEBUG
    #define ASSERT(cond) ((void)0)
#else
    #define ASSERT(cond) \
        do { \
            if (!(cond)) { \
                fprintf(stderr, "ASSERTION FAILED: %s\n  File: %s, Line: %d\n", \
                        #cond, __FILE__, __LINE__); \
                abort(); \
            } \
        } while (0)
#endif
```

### 13.16.3 Debug Logging Infrastructure

```c
/* log.h */
#ifndef LOG_H
#define LOG_H

#define LOG_LEVEL_NONE  0
#define LOG_LEVEL_ERROR 1
#define LOG_LEVEL_WARN  2
#define LOG_LEVEL_INFO  3
#define LOG_LEVEL_DEBUG 4

#ifndef LOG_LEVEL
#define LOG_LEVEL LOG_LEVEL_INFO
#endif

#if LOG_LEVEL >= LOG_LEVEL_ERROR
    #define LOG_ERROR(fmt, ...) \
        fprintf(stderr, "[ERROR] %s:%d: " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)
#else
    #define LOG_ERROR(fmt, ...) ((void)0)
#endif

#if LOG_LEVEL >= LOG_LEVEL_WARN
    #define LOG_WARN(fmt, ...) \
        fprintf(stderr, "[WARN]  %s:%d: " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)
#else
    #define LOG_WARN(fmt, ...) ((void)0)
#endif

#if LOG_LEVEL >= LOG_LEVEL_DEBUG
    #define LOG_DEBUG(fmt, ...) \
        fprintf(stderr, "[DEBUG] %s:%d: " fmt "\n", __FILE__, __LINE__, ##__VA_ARGS__)
#else
    #define LOG_DEBUG(fmt, ...) ((void)0)
#endif

#endif /* LOG_H */
```

### 13.16.4 Platform-Specific Code

```c
/* platform.h */
#ifndef PLATFORM_H
#define PLATFORM_H

/* Detect platform */
#if defined(_WIN32) || defined(_WIN64)
    #define PLATFORM_WINDOWS 1
    #include <windows.h>
    #define THREAD_RETURN DWORD WINAPI
    #define THREAD_FUNC(name) DWORD WINAPI name(LPVOID param)
#elif defined(__linux__)
    #define PLATFORM_LINUX 1
    #include <pthread.h>
    #define THREAD_RETURN void*
    #define THREAD_FUNC(name) void* name(void* param)
#elif defined(__APPLE__)
    #define PLATFORM_MACOS 1
    #include <pthread.h>
    #define THREAD_RETURN void*
    #define THREAD_FUNC(name) void* name(void* param)
#else
    #error "Unsupported platform"
#endif

#endif /* PLATFORM_H */
```

### 13.16.5 Unit Test Framework

A compact testing framework using macros:

```c
#include <stdio.h>
#include <string.h>

/* Test framework macros */
#define TEST(name) \
    static void test_##name(void); \
    static int test_##name##_passed = 0; \
    static int test_##name##_failed = 0; \
    static void test_##name(void)

#define ASSERT_EQ(actual, expected) \
    do { \
        if ((actual) != (expected)) { \
            fprintf(stderr, "FAIL: %s:%d: expected %d, got %d\n", \
                    __FILE__, __LINE__, (expected), (actual)); \
            test_##name##_failed++; \
        } else { \
            test_##name##_passed++; \
        } \
    } while (0)

#define ASSERT_STR_EQ(actual, expected) \
    do { \
        if (strcmp(actual, expected) != 0) { \
            fprintf(stderr, "FAIL: %s:%d: expected \"%s\", got \"%s\"\n", \
                    __FILE__, __LINE__, expected, actual); \
        } \
    } while (0)

#define RUN_TEST(name) \
    do { \
        printf("Running test: %s\n", #name); \
        test_##name(); \
    } while (0)

/* Application code */
int factorial(int n)
{
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

/* Test cases */
TEST(fact_zero)
{
    ASSERT_EQ(factorial(0), 1);
}

TEST(fact_positive)
{
    ASSERT_EQ(factorial(5), 120);
    ASSERT_EQ(factorial(3), 6);
    ASSERT_EQ(factorial(1), 1);
}

int main(void)
{
    RUN_TEST(fact_zero);
    RUN_TEST(fact_positive);
    printf("All tests completed.\n");
    return 0;
}
```

### 13.16.6 API Export/Import Macros

```c
/* dll_export.h */
#ifndef DLL_EXPORT_H
#define DLL_EXPORT_H

#if defined(_WIN32) || defined(_WIN64)
    #ifdef MYLIB_BUILD
        #define MYLIB_API __declspec(dllexport)
    #else
        #define MYLIB_API __declspec(dllimport)
    #endif
    #define MYLIB_API_CALL __stdcall
#else
    #define MYLIB_API __attribute__((visibility("default")))
    #define MYLIB_API_CALL
#endif

MYLIB_API int MYLIB_API_CALL mylib_function(int x);

#endif /* DLL_EXPORT_H */
```

## Concept Comparison Table

| Directive | Purpose | Example |
|-----------|---------|---------|
| `#include <file>` | Include system header | `#include <stdio.h>` |
| `#include "file"` | Include project header | `#include "myheader.h"` |
| `#define MACRO value` | Define object-like substitution | `#define PI 3.14159` |
| `#define MACRO(p) body` | Define function-like substitution | `#define MAX(a,b) ((a)>(b)?(a):(b))` |
| `#ifdef MACRO` | If defined | `#ifdef DEBUG` |
| `#ifndef MACRO` | If not defined | `#ifndef HEADER_H` |
| `#if expr` | If expression true | `#if __STDC_VERSION__ >= 201112L` |
| `#elif expr` | Else-if | `#elif VERSION >= 2` |
| `#error message` | Stop with error | `#error "Unsupported platform"` |
| `#pragma` | Compiler-specific | `#pragma once` |
| `#line num file` | Reset line number | `#line 100 "gen.c"` |
| `#undef MACRO` | Remove macro | `#undef TEMP` |

## Quick Reference

| Use Case | Code |
|----------|------|
| Header guard | `#ifndef MY_H` / `#define MY_H` / `#endif` |
| Max macro | `#define MAX(a,b) (((a)>(b))?(a):(b))` |
| Debug print | `#ifdef DEBUG` / `#define LOG(fmt,...) printf(fmt,__VA_ARGS__)` / `#endif` |
| Platform check | `#ifdef _WIN32` / `#elif defined(__linux__)` / `#endif` |
| Assert | `#define ASSERT(x) if(!(x)){fprintf(stderr,"...");abort();}` |
| Stringify | `#define STR(x) #x` → `STR(hello)` → `"hello"` |
| Token paste | `#define CAT(a,b) a ## b` → `CAT(x,1)` → `x1` |
| Comment-out | `#if 0` ... `#endif` |
| Empty macro for flag | `#define FEATURE_X` |
| Multi-statement | `#define F(x) do { ... } while (0)` |

## Cross-Application Matrix

| Scenario | Preprocessor Usage |
|----------|-------------------|
| Debug builds | `#ifdef DEBUG` with extra logging and asserts |
| Cross-platform | `#ifdef _WIN32` vs `#elif defined(__linux__)` |
| Inline math | `#define MIN(a,b) (((a)<(b))?(a):(b))` |
| API export | `#ifdef DLL_EXPORT` / `__declspec(dllexport)` / `#endif` |
| Version check | `#if __STDC_VERSION__ >= 201112L` for C11 features |
| Code generation | `##` to generate variable names, function names, types |
| Logging | `__FILE__`, `__LINE__`, `__DATE__`, `__TIME__` |
| Error handling | `ASSERT()` macro with `#cond` |
| Configuration | `#define MAX_CONNECTIONS 100` |
| Feature detection | `#ifdef HAVE_PTHREADS` |
| Conditional compilation | `#if 0` to disable dead code |
| Type-generic operations | X macros for enum + string + value tables |

## Chapter Quiz

1. What does `#define DOUBLE(x) x+x` evaluate `DOUBLE(3)*5` to?
   A) 30
   B) 18
   C) 15
   D) Undefined

<details><summary>Answer</summary>**B)** `DOUBLE(3)*5` expands to `3+3*5` = `3+15` = 18 — not `(3+3)*5` = 30. This is why parentheses are essential.</details>

2. Which directive stops compilation with a user-defined message?
   A) `#pragma`
   B) `#error`
   C) `#stop`
   D) `#warning`

<details><summary>Answer</summary>**B)** `#error "message"` stops compilation and displays the message.</details>

3. What is the purpose of a header guard?
   A) To protect the header from being modified
   B) To prevent multiple inclusions of the same header in one translation unit
   C) To make the header read-only
   D) To secure the header against viruses

<details><summary>Answer</summary>**B)** A header guard using `#ifndef` / `#define` / `#endif` prevents the same file from being included more than once.</details>

4. What does `#define STR(x) #x` do with `STR(TEST)`?
   A) Defines a variable `TEST`
   B) Expands to `"TEST"` (a string)
   C) Deletes the token `TEST`
   D) Creates a function called `TEST`

<details><summary>Answer</summary>**B)** The `#` operator stringifies the parameter, so `STR(TEST)` → `"TEST"`.</details>

5. What does `CAT(1, 2)` expand to with `#define CAT(a, b) a ## b`?
   A) `1 2`
   B) `1##2`
   C) `12`
   D) Error

<details><summary>Answer</summary>**C)** The `##` operator pastes tokens: `1 ## 2` → `12` (a single integer token).</details>

6. Why is `do { ... } while (0)` used in multi-statement macros?
   A) To create an infinite loop
   B) To make the macro work correctly inside `if` statements without braces
   C) To prevent the macro from being used in expressions
   D) To improve runtime performance

<details><summary>Answer</summary>**B)** It wraps multiple statements into a single compound statement that requires a semicolon, preventing dangling else problems.</details>

7. What happens if you define a macro recursively, like `#define REC REC`?
   A) Infinite loop in the preprocessor
   B) Preprocessor stops after one expansion
   C) Compiler crash
   D) The macro is ignored

<details><summary>Answer</summary>**B)** The preprocessor marks a macro as "currently expanding" and stops further expansion of the same macro, preventing infinite recursion.</details>

8. What is the difference between `#include <file.h>` and `#include "file.h"`?
   A) No difference
   B) `<>` includes only system files; `""` includes only user files
   C) `""` searches the current directory first, then system paths; `<>` searches only system paths
   D) `<>` is faster than `""`

<details><summary>Answer</summary>**C)** `#include "file.h"` searches the current source directory first, then falls back to system include paths. `#include <file.h>` searches only system include paths.</details>

9. Which of the following is NOT a predefined macro?
   A) `__LINE__`
   B) `__FILE__`
   C) `__FUNCTION__`
   D) `__DATE__`

<details><summary>Answer</summary>**C)** `__func__` (lowercase) is predefined; `__FUNCTION__` is not standard (though some compilers support it).</details>

10. How does `#define FOO` (with no replacement value) behave?
    A) Compilation error
    B) Warning, but works as empty macro
    C) Defines FOO as an empty token
    D) Undefined behavior

<details><summary>Answer</summary>**C)** `#define FOO` defines FOO with an empty replacement. It can be used with `#ifdef FOO` and other conditional directives.</details>

## Summary

- `#include` inserts file contents; `<>` for system headers, `""` for user headers.
- `#define` creates object-like and function-like macros; always parenthesize parameters and the body.
- `#` stringifies a parameter (turns it into a string literal); `##` pastes tokens together into one.
- `#ifdef`, `#ifndef`, `#if`, `#else`, `#elif`, and `#endif` control conditional compilation.
- Header guards (`#ifndef` / `#define` / `#endif` or `#pragma once`) prevent multiple inclusion.
- Predefined macros (`__LINE__`, `__FILE__`, `__DATE__`, etc.) provide compilation context.
- Macros are error-prone: side effects, missing parentheses, no type safety.
- Prefer `const`, `enum`, and `inline` functions over macros where possible.
- `#pragma` provides compiler-specific features; `#error` stops compilation with a message.
- `#line` resets line numbering for code generators.
- X macros use `#define`/`#undef` to generate multiple code structures from a single data table.

## Exercises

### Review Questions

1. Why must macro parameters be parenthesized in the replacement text?
2. What does the `#` operator do in a macro? What does `##` do?
3. What is a header guard and why is it necessary?
4. What is the difference between `#ifdef DEBUG` and `#if defined(DEBUG)`?
5. Why is `do { ... } while (0)` used in multi-statement macros?
6. What are the advantages of `static inline` functions over function-like macros?
7. How does the preprocessor prevent infinite recursion in macros?
8. What is the difference between `#define` and `const` for defining constants?
9. When would you use `#pragma once` vs an `#ifndef` header guard?
10. What are X macros and what problem do they solve?

### Application Problems

1. Write a macro `IS_EVEN(x)` that returns 1 if `x` is even and 0 otherwise. Test it with several values.
2. Write a macro `ARRAY_SIZE(arr)` that computes the number of elements in an array. Use it to iterate over an array.
3. Write a program that uses `#ifdef DEBUG` to conditionally print debugging information (filename, line number, variable values). Compile it with and without `-DDEBUG` on the command line and observe the difference.
4. Write a header file `math_utils.h` with a header guard. Define macros for `CUBE(x)`, `MIN(a,b)`, `CLAMP(x,lo,hi)`. Include it in a program and test all macros.
5. Write a program that uses `#line` to change the reported file name and line number, then uses `__LINE__` and `__FILE__` to confirm the change.
6. Create an X macro table for 5 planets (name, orbital radius, day length). Use it to generate an enum, a name array, and an orbital period array. Print all values.

### Challenge Problem

Write a program that uses the preprocessor to implement a **unit test framework** with the following macros:

- `TEST(name)` — begins a test case.
- `ASSERT_EQ(actual, expected)` — checks equality; prints file, line, and failure message if not equal.
- `ASSERT_TRUE(expr)` — checks that expression is true.
- `TEST_REPORT()` — prints summary of passed/failed tests.

Use counters (static variables or object-like macros) to track the number of passed and failed tests. Write test cases for a function `factorial` and report the results. *(Hint: use `__LINE__` and `__FILE__` in your assertion macros.)*
