# Chapter 15: Shell Scripting

## Learning Objectives

- Understand the role of the shell as both a command interpreter and scripting language
- Write shell scripts with variables, conditionals, loops, and functions
- Use pipes and redirection to combine commands into pipelines
- Manage processes: background execution, job control, signals, and process substitution
- Use common text-processing utilities: grep, sed, awk, cut, sort, uniq
- Debug and write robust shell scripts with proper error handling

## Theory

### The Shell

A **shell** is a program that acts as an intermediary between the user and the operating system kernel. It has two modes:

1. **Interactive mode**: Read commands from the terminal, execute them, display results
2. **Script mode**: Read commands from a file (script) and execute them sequentially

Common Unix shells:

| Shell | Path | Features |
|-------|------|----------|
| Bourne (sh) | `/bin/sh` | Original Unix shell, minimal |
| Bash | `/bin/bash` | Bourne Again SHell — de facto standard, advanced features |
| Zsh | `/bin/zsh` | Extended Bash, powerful tab-completion, theming |
| Fish | `/usr/bin/fish` | User-friendly, auto-suggestions, web-based config |

### Shell Basics

#### Shebang

Every script should start with a **shebang** (`#!`) that tells the kernel which interpreter to use:

```bash
#!/bin/bash
# The rest of the script...
```

#### Variables

```bash
# Assignment (no spaces around =)
name="Alice"
count=10
greeting="Hello, $name!"   # Variable expansion

# Read-only variable
readonly pi=3.14159

# Environment variables
export PATH="$PATH:/custom/bin"

# Command substitution — two syntaxes:
today=$(date +%Y-%m-%d)
also_today=`date +%Y-%m-%d`    # Legacy syntax

# Arithmetic
sum=$((count + 5))

# Special variables
echo "Script name:  $0"
echo "First arg:    $1"
echo "Second arg:   $2"
echo "All args:     $@"
echo "Args count:   $#"
echo "Exit code:    $?"
echo "PID:          $$"
```

### Control Flow

#### Conditionals

```bash
# if/then/elif/else
if [ "$1" = "start" ]; then
    echo "Starting..."
elif [ "$1" = "stop" ]; then
    echo "Stopping..."
else
    echo "Usage: $0 {start|stop}"
    exit 1
fi

# test command (same as [ ])
# File tests:
#   -f file    file exists and is regular file
#   -d dir     directory exists
#   -x file    file is executable
#   -e file    file exists

if [ -f /etc/passwd ]; then
    echo "Password file exists"
fi

# String comparisons: =, !=, -z (empty), -n (non-empty)
# Integer comparisons: -eq, -ne, -lt, -le, -gt, -ge

# Logical operators
if [ -f "$file" ] && [ -r "$file" ]; then
    echo "File exists and is readable"
fi

# [[ ]] — extended test (Bash-only, more features)
if [[ "$name" == A* ]]; then
    echo "Name starts with A"
fi

# case statement
case "$1" in
    start|begin)
        echo "Starting..."
        ;;
    stop|end)
        echo "Stopping..."
        ;;
    restart)
        $0 stop
        $0 start
        ;;
    *)
        echo "Unknown command: $1"
        exit 1
        ;;
esac
```

#### Loops

```bash
# for loop over explicit list
for color in red green blue; do
    echo "Color: $color"
done

# for loop over range
for i in {1..10}; do
    echo "Number: $i"
done

# for loop with C-style syntax
for ((i=0; i<10; i++)); do
    echo "i = $i"
done

# while loop
count=0
while [ $count -lt 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

# Reading a file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < "input.txt"

# until loop
count=10
until [ $count -eq 0 ]; do
    echo "Countdown: $count"
    count=$((count - 1))
done
```

#### Functions

```bash
# Function definition (two syntaxes)
greet() {
    local name="$1"        # local variable
    echo "Hello, $name!"
}

function error_exit {
    echo "ERROR: $1" >&2
    exit 1
}

# Call functions
greet "World"
error_exit "Something went wrong"

# Return values (exit code, 0–255)
is_even() {
    [ $(( $1 % 2 )) -eq 0 ]
    return $?              # return is optional
}

if is_even 42; then
    echo "42 is even"
fi
```

### Pipes and Redirection

#### File Descriptors

| Number | Name | Default | Description |
|--------|------|---------|-------------|
| 0 | stdin | Keyboard | Standard input |
| 1 | stdout | Screen | Standard output |
| 2 | stderr | Screen | Standard error |

#### Redirection Operators

```bash
# Output redirection
command > file      # stdout → file (overwrite)
command >> file     # stdout → file (append)
command 2> file     # stderr → file
command 2>> file    # stderr → file (append)
command &> file     # stdout + stderr → file (Bash)

# Input redirection
command < file      # stdin ← file

# Here document — inline input
cat << EOF
This is a multi-line
"here document" that
preserves whitespace.
EOF

# Here string
grep "error" <<< "line 1: error found
line 2: ok"

# Discard output
command > /dev/null       # Suppress stdout
command 2> /dev/null      # Suppress stderr
command &> /dev/null      # Suppress both

# File descriptor manipulation
command 2>&1              # Merge stderr into stdout
command 2>&1 | less       # Both stdout and stderr through pager
```

#### Pipes

Pipes connect the standard output of one command to the standard input of another:

```bash
# Pipe: use output of cmd1 as input to cmd2
cmd1 | cmd2

# Pipeline examples
ps aux | grep firefox
cat access.log | grep "404" | wc -l
sort data.txt | uniq -c | sort -rn | head -10
```

#### Named Pipes (FIFOs)

A named pipe persists as a filesystem entry:

```bash
mkfifo mypipe
cat mypipe &                  # Reader (background)
echo "Hello through pipe" > mypipe  # Writer
kill %1
rm mypipe
```

### Job Control

```bash
# Run in background
long_running_command &

# List jobs
jobs
# [1]+  Running    command &

# Bring to foreground
fg %1

# Send to background (after Ctrl+Z to suspend)
bg %1

# Run immune to terminal hangups
nohup long_running_command &

# Process groups and sessions
# Ctrl+C → SIGINT to foreground process group
# Ctrl+Z → SIGTSTP to foreground process group
# Ctrl+\ → SIGQUIT with core dump
```

### Process Substitution (Bash)

```bash
# Process substitution feeds the output of a command as a file
diff <(ls dir1) <(ls dir2)

# Useful when a command expects a file argument
grep "error" <(tail -100 logfile)
```

### Text Processing Utilities

#### grep — Pattern Matching

```bash
grep "pattern" file           # Basic search
grep -i "pattern" file        # Case-insensitive
grep -r "pattern" dir/        # Recursive
grep -l "pattern" *.txt       # List filenames only
grep -c "pattern" file        # Count matches
grep -n "pattern" file        # Show line numbers
grep -v "pattern" file        # Invert match (lines NOT matching)
grep -E "[0-9]+" file         # Extended regex (grep -E = egrep)
grep -A 3 "error" file        # Show 3 lines After match
grep -B 2 "error" file        # Show 2 lines Before match
grep -C 1 "error" file        # Show 1 line Context around match
```

#### sed — Stream Editor

```bash
# Substitution
sed 's/old/new/' file         # Replace first occurrence on each line
sed 's/old/new/g' file        # Replace all occurrences
sed 's/old/new/2' file        # Replace second occurrence on each line
sed 's/old/new/g' file > new  # Write to new file
sed -i 's/old/new/g' file     # In-place edit

# Line addressing
sed '3s/old/new/' file        # Only line 3
sed '10,20s/old/new/' file    # Lines 10–20
sed '/pattern/s/old/new/' file # Lines matching pattern

# Deletion
sed '/^#/d' file              # Delete comment lines
sed '1d' file                 # Delete first line

# Print
sed -n '5,10p' file           # Print lines 5–10 (no -n = all lines printed)
```

#### awk — Pattern Scanning and Processing

```bash
# awk is a programming language for field-oriented text processing
# Fields: $1, $2, $3, ... $NF (last field)

awk '{ print $1, $3 }' file           # Print fields 1 and 3
awk '/error/ { print $0 }' file       # Print entire line matching "error"
awk '$3 > 50 { print $1, $3 }' file   # Conditional

# Field separator
awk -F: '{ print $1, $6 }' /etc/passwd

# Built-in variables
awk '{ print NR, NF, $0 }' file       # Line number, field count, whole line

# BEGIN and END blocks
awk 'BEGIN { sum=0 } { sum += $1 } END { print "Total:", sum }' numbers.txt

# Formatting
awk '{ printf "%-15s %5d\n", $1, $2 }' file
```

#### sort, uniq, cut, wc, head, tail

```bash
sort file                             # Alphabetical sort
sort -n file                          # Numeric sort
sort -r file                          # Reverse sort
sort -t: -k3 -n /etc/passwd           # Sort by field 3 (numeric, colon-separated)

uniq                                  # Remove adjacent duplicates (requires sorted input)
uniq -c                               # Count occurrences
uniq -d                               # Show only duplicates
uniq -u                               # Show only unique lines

cut -d: -f1,3 /etc/passwd             # Extract fields 1 and 3
cut -c1-10 file                       # Extract characters 1–10

wc -l file                            # Count lines
wc -w file                            # Count words
wc -c file                            # Count characters

head -n 20 file                       # First 20 lines
tail -n 20 file                       # Last 20 lines
tail -f logfile                       # Follow (watch) growing file
```

### Signals and Signal Handling

```bash
# The trap command catches signals
cleanup() {
    echo "Interrupted! Cleaning up..."
    rm -f /tmp/temp_$$
    exit 1
}

trap cleanup SIGINT SIGTERM

# Ignoring signals
trap '' SIGINT     # Ignore Ctrl+C (until trap is reset)

# Reset signal handling
trap - SIGINT      # Restore default behavior

# Timeouts
timeout 5 command  # Kill command after 5 seconds
```

### Writing Robust Shell Scripts

```bash
#!/bin/bash

# Safety options
set -e   # Exit on any error
set -u   # Treat unset variables as errors
set -o pipefail  # Fail if any command in a pipeline fails

# Alternative: combine all
set -euo pipefail

# Validate arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <input_file> <output_file>" >&2
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"

# Check prerequisites
for cmd in awk sed grep; do
    if ! command -v "$cmd" &> /dev/null; then
        echo "Error: $cmd is not installed" >&2
        exit 1
    fi
done

# Check input file
if [ ! -r "$INPUT_FILE" ]; then
    echo "Error: Cannot read $INPUT_FILE" >&2
    exit 1
fi

# Main logic
main() {
    echo "Processing $INPUT_FILE..."
    # ... processing ...
    echo "Done. Output written to $OUTPUT_FILE"
}

main
```

## Examples

### Example 1: System Info Script

```bash
#!/bin/bash
# A script that prints system information

echo "=== System Information ==="
echo "Hostname: $(hostname)"

echo "=== CPU ==="
lscpu | grep "Model name" | head -1

echo "=== Memory ==="
free -h | head -2

echo "=== Disk Usage ==="
df -h / | tail -1

echo "=== Network ==="
ip addr | grep "inet " | awk '{print $2}'

echo "=== Running Processes ==="
ps aux --sort=-%cpu | head -5

echo "=== Uptime ==="
uptime
```

### Example 2: Log Analyzer

```bash
#!/bin/bash
# Analyze a web server access log

LOG_FILE="${1:-/var/log/nginx/access.log}"

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Cannot read $LOG_FILE" >&2
    exit 1
fi

echo "=== Log Analysis: $LOG_FILE ==="

echo "Total requests:"
wc -l < "$LOG_FILE"

echo "HTTP Status Code Distribution:"
awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn

echo "Top 10 IP addresses:"
awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10

echo "Top 10 requested URLs:"
awk '{print $7}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10

echo "Requests per day:"
awk '{print $4}' "$LOG_FILE" | cut -d: -f1 | tr -d '[' | sort | uniq -c

echo "Most active 5-minute window:"
awk '{
    gsub(/^\[|\]$/, "", $4);
    window = substr($4, 1, 14) "0]";
    print window
}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -5
```

### Example 3: File Organizer

```bash
#!/bin/bash
# Organize files in a directory by type

TARGET_DIR="${1:-.}"  # Default to current directory

if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: $TARGET_DIR is not a directory" >&2
    exit 1
fi

cd "$TARGET_DIR" || exit 1

# Organize by file extension
for file in *; do
    if [ -f "$file" ]; then
        ext="${file##*.}"  # Get extension after last '.'
        ext_dir="${ext:-no_extension}"

        mkdir -p "$ext_dir"
        cp -n "$file" "$ext_dir/"  # -n = no overwrite
        echo "Copied $file → $ext_dir/"
    fi
done

echo "Done. Files organized by extension."

# Show summary
echo ""
echo "=== Summary ==="
for dir in */; do
    count=$(find "$dir" -type f | wc -l)
    echo "  $dir: $count files"
done
```

## Summary

- The shell is both an interactive command interpreter and script interpreter
- Shebang (`#!/bin/bash`) specifies the interpreter for scripts
- Variables use `$name` or `${name}` for expansion; arithmetic with `$((...))`
- Conditionals: `if`, `case`; loops: `for`, `while`, `until`
- Pipes (`|`) connect commands into powerful pipelines
- Redirection controls stdin/stdout/stderr (`>`, `<`, `2>`, `&>`)
- Job control: background (`&`), foreground, suspend, `nohup`
- `grep` for pattern matching, `sed` for stream editing, `awk` for field processing
- `trap` handles signals; `set -euo pipefail` for robust scripts
- Named pipes (FIFOs) allow inter-process communication through the filesystem

## Exercises

### Basic

1. Write a script that lists all files in the current directory, sorted by size (largest first). Include the file size and name in the output.
2. Write a script that renames all `.txt` files in a directory to `.bak` extension.
3. Write a script that counts the number of files in a directory, broken down by extension (e.g., `.txt: 5`, `.jpg: 12`, `.md: 3`).

### Intermediate

4. Write a script that monitors a log file (use `tail -f`) for lines containing "ERROR" and sends an email alert (use `mail` or write to a file) if more than 10 errors appear in 60 seconds.
5. Write a script that takes a directory path and creates a dated backup: `backup_project_2026-06-09_1430.tar.gz`. The script should keep only the last 7 backups and delete older ones.
6. Write an Apache/nginx log analyzer that generates an HTML report with tables showing top IPs, top URLs, response code distribution, and a simple line chart using inline SVG.

### Advanced

7. Write a shell script that implements a simple **pipeline scheduler**: given a file listing commands and their estimated run times, schedule them across N parallel workers. Use job control (`wait -n`, background processes) to execute up to N tasks in parallel. Report completion times.
8. Write a script that performs **fuzzy file search**. Given a partial filename, search the entire filesystem and show matches. Use a fast find strategy: search home directory first, then common locations (`/etc`, `/var/log`), and only if not found search `/usr` and `/opt`. Show the search path and time taken.
9. Write a **shell-based REPL** calculator that supports variables, arithmetic, and a history command. Use `read -e` (readline) for line editing, store history in a file, and support `+`, `-`, `*`, `/`, `%` operators with `$((...))` evaluation.
