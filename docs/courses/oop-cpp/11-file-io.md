# Chapter 11: File I/O

## Learning Objectives

After studying this chapter, students will be able to:

- Open, read, and write text files using ifstream and ofstream
- Read and write binary files with proper data handling
- Position the file pointer for random access
- Serialise and deserialise C++ objects
- Handle file I/O errors correctly

## 11.1 File Stream Classes

The `<fstream>` header provides three file stream classes derived from `iostream`:

| Class | Base | Direction |
|-------|------|-----------|
| `ifstream` | `istream` | Input (read from file) |
| `ofstream` | `ostream` | Output (write to file) |
| `fstream` | `iostream` | Both (read and write) |

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ofstream out("example.txt");
    if (!out) {
        std::cerr << "Failed to open file for writing\n";
        return 1;
    }

    out << "Hello, file!\n";
    out << 42 << ' ' << 3.14159 << '\n';
    out.close();  // optional; destructor closes automatically

    std::ifstream in("example.txt");
    if (!in) {
        std::cerr << "Failed to open file for reading\n";
        return 1;
    }

    std::string greeting;
    int number;
    double pi;
    in >> greeting >> number >> pi;

    std::cout << greeting << '\n';   // Hello,
    std::cout << number << '\n';     // 42
    std::cout << pi << '\n';         // 3.14159
}
```

## 11.2 Opening Modes

File open modes are defined in `std::ios_base`:

| Flag | Effect |
|------|--------|
| `std::ios::in` | Open for reading |
| `std::ios::out` | Open for writing (truncates by default) |
| `std::ios::app` | Append (always write at end) |
| `std::ios::ate` | Seek to end on open (but can write anywhere) |
| `std::ios::trunc` | Truncate file if it exists |
| `std::ios::binary` | Open in binary mode |

```cpp
// Append to existing file
std::ofstream log("log.txt", std::ios::app);
log << "New log entry at " << std::time(nullptr) << '\n';

// Read and write without truncation
std::fstream file("data.bin",
                  std::ios::in | std::ios::out | std::ios::binary);
```

## 11.3 Reading Line by Line

```cpp
#include <fstream>
#include <string>

std::ifstream file("input.txt");
std::string line;

while (std::getline(file, line)) {
    std::cout << "Read: " << line << '\n';
}
```

`std::getline` reads until a newline character (or the specified delimiter) and discards it. The `while` condition evaluates to false when the stream reaches EOF or an error occurs.

Reading entire file at once:

```cpp
std::ifstream file("input.txt");
std::string content(
    std::istreambuf_iterator<char>(file),
    std::istreambuf_iterator<char>()
);
```

## 11.4 Text vs Binary Mode

In text mode, the runtime performs platform-specific transformations: on Windows, `\n` is written as `\r\n` and `\r\n` is read back as `\n`. Binary mode suppresses these transformations.

```cpp
// Binary mode—no transformations
std::ofstream out("data.bin", std::ios::binary);

struct Record {
    int id;
    double value;
    char name[32];
};

Record r = {1, 3.14, "Example"};
out.write(reinterpret_cast<const char*>(&r), sizeof(r));
out.close();

// Read binary
std::ifstream in("data.bin", std::ios::binary);
Record loaded;
in.read(reinterpret_cast<char*>(&loaded), sizeof(loaded));
```

Binary I/O is faster and avoids precision loss for floating-point values, but files are not human-readable and are not portable across architectures with different endianness or padding.

## 11.5 File Positioning

File streams maintain two positions: the *get* position (for reading) and the *put* position (for writing). Positioning functions:

```cpp
#include <fstream>

std::fstream file("data.bin",
                  std::ios::in | std::ios::out | std::ios::binary);

// Get current positions
auto get_pos = file.tellg();    // tell get position
auto put_pos = file.tellp();    // tell put position

// Seek on get position
file.seekg(0, std::ios::beg);    // seek to beginning
file.seekg(100, std::ios::cur);  // seek 100 bytes forward
file.seekg(-50, std::ios::end);  // seek 50 bytes before end

// Seek on put position
file.seekp(0, std::ios::end);    // seek put to end
file.seekp(200, std::ios::beg);  // seek put to byte 200
```

## 11.6 Serialisation

Serialisation converts objects to a format suitable for storage or transmission. Simple struct serialisation:

```cpp
struct Student {
    char name[64];
    int id;
    double gpa;

    void save(std::ofstream& out) const {
        out.write(reinterpret_cast<const char*>(this), sizeof(*this));
    }

    void load(std::ifstream& in) {
        in.read(reinterpret_cast<char*>(this), sizeof(*this));
    }
};
```

For classes with dynamic allocation, a custom serialisation format is needed:

```cpp
class DynamicString {
public:
    void save(std::ofstream& out) const {
        size_t len = str_.size();
        out.write(reinterpret_cast<const char*>(&len), sizeof(len));
        out.write(str_.data(), len);
    }

    void load(std::ifstream& in) {
        size_t len = 0;
        in.read(reinterpret_cast<char*>(&len), sizeof(len));
        str_.resize(len);
        in.read(&str_[0], len);
    }

private:
    std::string str_;
};
```

## 11.7 Error Handling

File stream operations set error state flags:

```cpp
std::ifstream file("nonexistent.txt");
if (!file) {                         // or file.fail()
    std::cerr << "File not found\n";
    return 1;
}

// State flags
// file.good() — no error flags set
// file.bad()  — irrecoverable error (e.g., hardware)
// file.fail() — operation failed (recoverable)
// file.eof()  — end of file reached
```

Checking every read operation is important:

```cpp
int value;
while (file >> value) {   // returns false on failure or EOF
    process(value);
}

if (!file.eof()) {
    std::cerr << "Error reading file (non-EOF failure)\n";
}
```

## 11.8 Summary

File I/O in C++ uses stream classes that extend the `cin`/`cout` model. Text mode is human-readable but platform-dependent; binary mode is efficient and precise but not portable without care. File positioning enables random access, and serialisation translates between memory and storage formats. Always check stream state after I/O operations.

## Exercises

### Review Questions

1. What is the difference between text mode and binary mode on Windows?
2. When would you use `fstream` instead of separate `ifstream`/`ofstream` objects?
3. Why should `reinterpret_cast` be used carefully in binary I/O?
4. What are the four stream state flags and what does each indicate?
5. How does `tellg` differ from `tellp`?

### Application Problems

1. Write a program that reads a text file, counts the frequency of each word, and writes the results to another file sorted by frequency (descending).
2. Create a binary file format for storing `struct Employee { int id; char name[64]; double salary; };`. Write `save_database` and `load_database` functions that operate on `std::vector<Employee>`.

### Challenge Problem

3. Implement a simple indexed file database. Design a format with a fixed-size header containing a table of offsets. Support `insert(key, data)` and `find(key)` operations where data is a variable-length string. Use `seekg`/`seekp` for random access. The index should use a `std::map<std::string, long>` cached in memory and synchronised to the file header on close.
