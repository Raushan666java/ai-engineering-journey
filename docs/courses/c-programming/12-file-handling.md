# Chapter 12: File Handling

## Learning Objectives

- Open and close files with `fopen` and `fclose`
- Read and write formatted data with `fprintf` and `fscanf`
- Read and write lines with `fgets` and `fputs`
- Perform binary I/O with `fread` and `fwrite`
- Navigate files with `fseek`, `ftell`, and `rewind`
- Handle file I/O errors properly

![C File Operations and Preprocessor Directives](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/c-programming/ch12-file-preprocessor.png)

## 12.1 File Pointers

In C, file operations use a `FILE*` pointer, defined in `<stdio.h>`.

```c
FILE *fopen(const char *filename, const char *mode);
```

```c
FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("Failed to open file");
    return 1;
}
/* ... file operations ... */
fclose(fp);
```

## 12.2 File Access Modes

| Mode | Meaning | Creates file? | Position |
|------|---------|---------------|----------|
| `"r"` | Read text | No | Beginning |
| `"w"` | Write text (truncates) | Yes | Beginning |
| `"a"` | Append text | Yes | End |
| `"r+"` | Read and write (no truncate) | No | Beginning |
| `"w+"` | Read and write (truncates) | Yes | Beginning |
| `"a+"` | Read and append | Yes | End |
| `"rb"` | Read binary | No | Beginning |
| `"wb"` | Write binary (truncates) | Yes | Beginning |
| `"ab"` | Append binary | Yes | End |

**Add `b` for binary mode** on Windows systems (where text mode translates `\n` to `\r\n`).

## 12.3 Closing a File

```c
int fclose(FILE *fp);
```

Returns 0 on success, EOF on error. Always close files to flush buffers and free resources.

## 12.4 Character I/O

```c
int fgetc(FILE *fp);    /* read one char, returns int (to accommodate EOF) */
int fputc(int c, FILE *fp);  /* write one char */
```

```c
#include <stdio.h>

int main(void)
{
    FILE *src = fopen("input.txt", "r");
    FILE *dst = fopen("output.txt", "w");

    if (src == NULL || dst == NULL) {
        perror("File error");
        return 1;
    }

    int ch;
    while ((ch = fgetc(src)) != EOF) {
        fputc(ch, dst);
    }

    fclose(src);
    fclose(dst);
    return 0;
}
```

This program copies `input.txt` to `output.txt` character by character.

## 12.5 Line I/O

```c
char *fgets(char *s, int size, FILE *fp);
int fputs(const char *s, FILE *fp);
```

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) {
        perror("Cannot open file");
        return 1;
    }

    char line[256];
    while (fgets(line, sizeof(line), fp)) {
        /* fgets includes the trailing newline */
        fputs(line, stdout);
    }

    fclose(fp);
    return 0;
}
```

**`fgets` behavior:**

- Reads up to `size - 1` characters or until a newline (included) or EOF.
- Always null-terminates the buffer.
- Returns `NULL` on EOF or error.

## 12.6 Formatted I/O

### Writing: `fprintf`

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("students.txt", "w");
    if (fp == NULL) {
        perror("File error");
        return 1;
    }

    fprintf(fp, "%-10s %-10s %5s\n", "ID", "Name", "GPA");
    fprintf(fp, "%-10d %-10s %5.2f\n", 101, "Alice", 3.8);
    fprintf(fp, "%-10d %-10s %5.2f\n", 102, "Bob", 3.5);
    fprintf(fp, "%-10d %-10s %5.2f\n", 103, "Carol", 3.9);

    fclose(fp);
    return 0;
}
```

**File contents (students.txt):**
```
ID         Name         GPA
101        Alice       3.80
102        Bob         3.50
103        Carol       3.90
```

### Reading: `fscanf`

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("students.txt", "r");
    if (fp == NULL) {
        perror("File error");
        return 1;
    }

    char header[100];
    fgets(header, sizeof(header), fp);  /* skip header line */

    int id;
    char name[50];
    float gpa;

    while (fscanf(fp, "%d %s %f", &id, name, &gpa) == 3) {
        printf("%d: %s (%.2f)\n", id, name, gpa);
    }

    fclose(fp);
    return 0;
}
```

**Output:**
```
101: Alice (3.80)
102: Bob (3.50)
103: Carol (3.90)
```

**Warning:** `fscanf` behavior on malformed input can be tricky. It returns the number of successfully matched items. For robust parsing, read lines with `fgets` and parse with `sscanf` or manual parsing.

## 12.7 Binary I/O

```c
size_t fread(void *ptr, size_t element_size, size_t count, FILE *fp);
size_t fwrite(const void *ptr, size_t element_size, size_t count, FILE *fp);
```

### Writing Binary Data

```c
#include <stdio.h>

typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;

int main(void)
{
    Student students[] = {
        {101, "Alice", 3.8f},
        {102, "Bob", 3.5f},
        {103, "Carol", 3.9f}
    };

    FILE *fp = fopen("students.bin", "wb");
    if (fp == NULL) {
        perror("File error");
        return 1;
    }

    fwrite(students, sizeof(Student), 3, fp);
    fclose(fp);

    printf("Written %zu bytes\n", 3 * sizeof(Student));
    return 0;
}
```

**Output:**
```
Written 180 bytes
```

### Reading Binary Data

```c
#include <stdio.h>

typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;

int main(void)
{
    FILE *fp = fopen("students.bin", "rb");
    if (fp == NULL) {
        perror("File error");
        return 1;
    }

    Student s;
    while (fread(&s, sizeof(Student), 1, fp) == 1) {
        printf("%d: %s (%.2f)\n", s.id, s.name, s.gpa);
    }

    fclose(fp);
    return 0;
}
```

**Output:**
```
101: Alice (3.80)
102: Bob (3.50)
103: Carol (3.90)
```

## 12.8 File Positioning

```c
int fseek(FILE *fp, long offset, int whence);
long ftell(FILE *fp);
void rewind(FILE *fp);   /* equivalent to fseek(fp, 0L, SEEK_SET) */
```

| `whence` | Meaning |
|----------|---------|
| `SEEK_SET` | From the beginning of the file |
| `SEEK_CUR` | From the current position |
| `SEEK_END` | From the end of the file |

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) return 1;

    fseek(fp, 0L, SEEK_END);
    long size = ftell(fp);
    printf("File size: %ld bytes\n", size);

    /* Go back to beginning */
    rewind(fp);

    /* Read 5th character (0-indexed) */
    fseek(fp, 4L, SEEK_SET);
    int c = fgetc(fp);
    printf("Character at position 4: %c\n", c);

    fclose(fp);
    return 0;
}
```

**Note:** `ftell` returns a `long`. For files larger than 2GB, use `fgetpos`/`fsetpos` or platform-specific functions.

## 12.9 Error Handling

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main(void)
{
    FILE *fp = fopen("nonexistent.txt", "r");
    if (fp == NULL) {
        printf("Error code: %d\n", errno);
        printf("Error message: %s\n", strerror(errno));
        perror("fopen");   /* prints: fopen: No such file or directory */
        return 1;
    }

    fclose(fp);
    return 0;
}
```

**Useful functions:**

- `feof(fp)` — returns non-zero if end-of-file indicator is set.
- `ferror(fp)` — returns non-zero if error indicator is set.
- `clearerr(fp)` — clears both EOF and error indicators.
- `perror(str)` — prints `str: system error message` to stderr.

## 12.10 Reading Directory Contents (POSIX)

```c
#include <stdio.h>
#include <dirent.h>

int main(void)
{
    DIR *dir = opendir(".");
    if (dir == NULL) {
        perror("opendir");
        return 1;
    }

    struct dirent *entry;
    while ((entry = readdir(dir)) != NULL) {
        printf("%s\n", entry->d_name);
    }

    closedir(dir);
    return 0;
}
```

This is a POSIX feature (`<dirent.h>`), not part of the C standard library.

## 12.11 Temporary Files

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char template[] = "tempXXXXXX";
    int fd = mkstemp(template);   /* POSIX */
    if (fd == -1) {
        perror("mkstemp");
        return 1;
    }

    FILE *fp = fdopen(fd, "w+");
    fprintf(fp, "Temporary data\n");
    /* ... use file ... */
    fclose(fp);

    remove(template);  /* delete temporary file */
    return 0;
}
```

Alternatively, `tmpfile()` creates a temporary file that is automatically deleted when closed:

```c
FILE *fp = tmpfile();   /* binary read/write, auto-deleted on close */
```

## Summary

- `fopen` opens a file; `fclose` closes it. Always check the return value of `fopen`.
- Character I/O: `fgetc` / `fputc`. Line I/O: `fgets` / `fputs`.
- Formatted I/O: `fprintf` / `fscanf`. Binary I/O: `fread` / `fwrite`.
- File positioning: `fseek`, `ftell`, `rewind`.
- Error handling: `ferror`, `feof`, `perror`, `strerror(errno)`.
- Binary mode (`"rb"`, `"wb"`) is required on Windows for binary data.
- Temporary files use `tmpfile()` or `mkstemp()`.

## Exercises

### Review Questions

1. What is the difference between text mode and binary mode on Windows? When should each be used?
2. What does `fgets` do if the line is longer than the buffer size? What is always guaranteed?
3. How does `fread` return value indicate success? When would it return fewer than `count` items?
4. What is the purpose of `fseek` with `SEEK_END` and `SEEK_SET`?
5. Why should `feof` not be used as the loop condition for reading a file? What should be used instead?

### Application Problems

1. Write a program that reads a text file and counts the number of characters, words, and lines in it. The filename should be provided as a command-line argument.
2. Write a program that stores an array of integers to a binary file and then reads it back. Verify the data is correct by comparing each element.
3. Write a program that appends the current date and time to a log file each time it is run. Use `fprintf` with the time functions from `<time.h>`.
4. Write a program that reads a file of student records (ID, name, GPA in CSV format), stores them in an array of structs, then writes a report showing the average GPA and the list of students sorted by GPA.

### Challenge Problem

Write a program that implements a simple **database file** for contacts. Each contact has a name, phone number, and email address. Provide the following operations via a text menu:

1. Add a new contact (appends to a binary file).
2. List all contacts (reads and displays the entire file).
3. Search for a contact by name (reads sequentially and matches).
4. Delete a contact by name (creates a new file, copies all records except the deleted one, then replaces the original).

Use a fixed-size struct for each record. The filename should be a constant. This simulates a simple flat-file database.
