# Chapter 7: Strings

## Learning Objectives

- Distinguish between string literals and character arrays
- Manipulate strings using the `string.h` library functions
- Read and write strings safely
- Process strings character by character
- Understand null-termination and its pitfalls

![C Strings: string.h Library, I/O, and Common Pitfalls](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-07-strings.png)

## 7.1 String Fundamentals

In C, a string is a sequence of characters terminated by a null character (`'\0'`, ASCII value 0). There is no dedicated string type â€” strings are stored in `char` arrays.

```c
char greeting[] = "Hello";    /* array of 6 chars: 'H','e','l','l','o','\0' */
```

**Memory layout:**
```
Index:   0   1   2   3   4   5
Char:    H   e   l   l   o  \0
```

**String literal vs. character array:**
```c
char *str1 = "Hello";        /* string literal â€” read-only, stored in .rodata */
char str2[] = "Hello";       /* mutable char array on stack */
```

String literals are stored in read-only memory. Attempting to modify them is undefined behavior:

```c
char *s = "Fixed";   /* string literal */
s[0] = 'M';          /* UNDEFINED BEHAVIOR â€” may crash */
```

A char array initialized from a literal is mutable:

```c
char s[] = "Fixed";
s[0] = 'M';          /* OK â€” s now contains "Mixed" */
```

## 7.2 String Length

The length of a string is the number of characters before the null terminator â€” not including the null terminator.

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[] = "Hello";

    printf("String:        %s\n", str);
    printf("Array size:    %zu\n", sizeof(str));     /* 6 (includes '\0') */
    printf("String length: %zu\n", strlen(str));      /* 5 (excludes '\0') */

    return 0;
}
```

**Output:**
```
String:        Hello
Array size:    6
String length: 5
```

## 7.3 String Initialization

```c
char s1[] = "Hello";                  /* size inferred: 6 */
char s2[10] = "Hello";                /* s2 = {'H','e','l','l','o','\0',0,0,0,0} */
char s3[5] = "Hello";                 /* INVALID: no room for null */
char s4[] = {'H', 'e', 'l', 'l', 'o', '\0'};  /* explicit, same as s1 */
char s5[] = {'H', 'e', 'l', 'l', 'o'};         /* NOT a string â€” no null terminator */
```

## 7.4 String Input and Output

### 7.4.1 `printf` and `puts`

```c
char name[] = "Alice";
printf("Name: %s\n", name);     /* %s prints until '\0' */
puts(name);                     /* same, but adds newline automatically */
```

### 7.4.2 `scanf` with `%s`

```c
char word[50];
printf("Enter a word: ");
scanf("%49s", word);            /* reads until whitespace; limit to 49 chars + null */
printf("You entered: %s\n", word);
```

**Problems with `scanf("%s")`:** No buffer overflow protection by default. Always specify field width: `scanf("%49s", word)` limits input to 49 characters (reserving one for the null terminator).

### 7.4.3 `fgets` â€” Safe Line Input

```c
#include <stdio.h>

int main(void)
{
    char line[100];

    printf("Enter a line of text: ");
    fgets(line, sizeof(line), stdin);   /* reads up to 99 chars including newline */

    printf("You entered: %s", line);     /* fgets includes the newline */

    return 0;
}
```

**Remove trailing newline:**
```c
char *p = strchr(line, '\n');
if (p) {
    *p = '\0';
}
```

## 7.5 The `<string.h>` Library

### 7.5.1 `strlen` â€” String Length

```c
size_t strlen(const char *s);
```

```c
char *msg = "Hello, World!";
size_t len = strlen(msg);   /* 13 */
```

### 7.5.2 `strcpy` and `strncpy` â€” Copying

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char src[] = "Hello";
    char dest[20];

    strcpy(dest, src);               /* DANGEROUS: no bounds checking */
    printf("dest: %s\n", dest);

    strncpy(dest, "A longer string", sizeof(dest) - 1);
    dest[sizeof(dest) - 1] = '\0';   /* ensure null termination */
    printf("dest: %s\n", dest);

    return 0;
}
```

**Output:**
```
dest: Hello
dest: A longer string
```

**Warning:** `strcpy` does not check destination size â€” can overflow. Prefer `strncpy` or `snprintf`.

### 7.5.3 `strcat` and `strncat` â€” Concatenation

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char path[256] = "/home/user/";
    char filename[] = "file.txt";

    strncat(path, filename, sizeof(path) - strlen(path) - 1);
    printf("Path: %s\n", path);

    return 0;
}
```

**Output:**
```
Path: /home/user/file.txt
```

### 7.5.4 `strcmp` and `strncmp` â€” Comparison

Returns 0 if strings are equal, negative if first < second, positive if first > second (lexicographic comparison using ASCII values).

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char password[] = "secret";
    char input[50];

    printf("Enter password: ");
    fgets(input, sizeof(input), stdin);
    input[strcspn(input, "\n")] = '\0';  /* remove newline */

    if (strcmp(input, password) == 0) {
        printf("Access granted.\n");
    } else {
        printf("Access denied.\n");
    }

    return 0;
}
```

### 7.5.5 `strstr` â€” Substring Search

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "The quick brown fox jumps over the lazy dog";
    char *found = strstr(text, "fox");

    if (found) {
        printf("Found at index: %td\n", found - text);
        printf("Rest: %s\n", found);
    } else {
        printf("Not found\n");
    }

    return 0;
}
```

**Output:**
```
Found at index: 16
Rest: fox jumps over the lazy dog
```

### 7.5.6 `strchr` and `strrchr` â€” Character Search

```c
char *strchr(const char *s, int c);    /* find first occurrence of c */
char *strrchr(const char *s, int c);   /* find last occurrence of c */
```

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char path[] = "/home/user/documents/file.txt";

    char *last_slash = strrchr(path, '/');
    if (last_slash) {
        printf("Filename: %s\n", last_slash + 1);
    }

    return 0;
}
```

**Output:**
```
Filename: file.txt
```

### 7.5.7 `strtok` â€” String Tokenization

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char line[] = "apple,banana,cherry,date";
    char *token;

    token = strtok(line, ",");
    while (token) {
        printf("Token: %s\n", token);
        token = strtok(NULL, ",");
    }

    return 0;
}
```

**Output:**
```
Token: apple
Token: banana
Token: cherry
Token: date
```

**Important:** `strtok` modifies the input string (replaces delimiters with `'\0'`) and uses internal static state â€” it is not reentrant. Use `strtok_r` for reentrant tokenization.

## 7.6 Character-by-Character Processing

```c
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    char str[] = "Hello, World! 123";
    int upper = 0, lower = 0, digits = 0;

    for (int i = 0; str[i] != '\0'; i++) {
        char c = str[i];
        if (isupper(c)) upper++;
        else if (islower(c)) lower++;
        else if (isdigit(c)) digits++;
    }

    printf("Uppercase: %d, Lowercase: %d, Digits: %d\n", upper, lower, digits);
    return 0;
}
```

**Output:**
```
Uppercase: 2, Lowercase: 8, Digits: 3
```

## 7.7 Array of Strings

A 2D char array or an array of pointers can represent multiple strings:

```c
/* Method 1: 2D array (fixed width, wastes space) */
char colors[3][10] = {"Red", "Green", "Blue"};

/* Method 2: Array of pointers (variable length, read-only literals) */
char *fruits[] = {"Apple", "Banana", "Cherry", "Date"};
```

```c
#include <stdio.h>

int main(void)
{
    char *fruits[] = {"Apple", "Banana", "Cherry", "Date"};
    int n = sizeof(fruits) / sizeof(fruits[0]);

    for (int i = 0; i < n; i++) {
        printf("%s\n", fruits[i]);
    }

    return 0;
}
```

## 7.8 Common String Mistakes

**Buffer overflow:**
```c
char buf[5];
strcpy(buf, "Too long!");  /* writes past buf â€” UB */
```

**Missing null terminator:**
```c
char buf[5] = {'H','e','l','l','o'};  /* not a string */
printf("%s", buf);                     /* prints "Hello" + garbage until '\0' found */
```

**Confusing character and string:**
```c
char c = "A";     /* wrong: "A" is a string literal (pointer), not a char */
char c = 'A';     /* correct */
```

## Summary

- C strings are null-terminated `char` arrays. The terminator `'\0'` marks the end.
- String literals are read-only; modifying them is undefined behavior.
- `strlen` returns the length excluding the null terminator.
- `strcpy`, `strcat`, `strcmp`, `strstr`, `strchr`, and `strtok` provide essential string operations.
- `fgets` is the safest way to read line-oriented input.
- Always ensure destination buffers are large enough and null-terminated.
- The `<ctype.h>` library provides character classification functions.

## Exercises

### Review Questions

1. Why must every string end with a null character? What happens when it is missing?
2. What is the difference between `char *s = "Hello"` and `char s[] = "Hello"`?
3. Why is `strcpy` considered dangerous? What function should you use instead?
4. How does `strcmp` determine which string is larger?
5. What does `strtok` do to the input string? Why is it not reentrant?

### Application Problems

1. Write a program that reads a line of text and counts the number of words in it (words are separated by spaces, tabs, or punctuation).
2. Write a program that reads a string and checks whether it is a palindrome (ignoring spaces, punctuation, and case). Example: "A man, a plan, a canal: Panama" is a palindrome.
3. Write a program that reads a line of text and replaces every occurrence of a given word with another word. Example: "the cat sat on the mat" with "cat" replaced by "dog" â†’ "the dog sat on the mat".
4. Write a program that reads a filename from the user and extracts the file extension (text after the last '.').

### Challenge Problem

Write a program that implements a simple `str_compress` function: it compresses a string by replacing consecutive repeated characters with the character followed by the count. For example, `"aaabbcccc"` becomes `"a3b2c4"`. If the compressed string is not shorter than the original, return the original. Test with `"abc"` (no compression â€” should return `"abc"`) and `"aabcccccaaa"` (should return `"a2b1c5a3"`).
