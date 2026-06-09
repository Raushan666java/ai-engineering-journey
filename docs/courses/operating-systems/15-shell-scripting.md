# Chapter 15 — Shell Scripting

## Learning Objectives

1. Write shell scripts with variables, conditionals, loops, and functions.
2. Use pipes and redirection to compose commands.
3. Manage jobs and processes from the command line.
4. Monitor system utilisation with ps, top, and strace.
5. Understand the execution environment of a shell.

## 15.1 The UNIX Shell

A shell is a command-line interpreter that provides a user interface to the operating system. It parses commands, expands wildcards and variables, sets up I/O redirection, and executes programs. The most common shell on Linux is Bash (Bourne Again SHell).

A shell script is a file containing a sequence of shell commands. The first line specifies the interpreter:

```bash
#!/bin/bash
```

## 15.2 Variables

Shell variables are untyped — they store strings:

```bash
name="Alice"
echo "Hello, $name"
echo "Filename: ${name}.txt"

# Command substitution
files=$(ls)
echo "Files: $files"

# Arithmetic
((result = 3 + 5))
echo $result
```

### 15.2.1 Special Variables

| Variable | Meaning |
|----------|---------|
| `$0` | Script name |
| `$1`, `$2`, ... | Positional parameters |
| `$#` | Number of arguments |
| `$@` | All arguments as separate words |
| `$*` | All arguments as single word |
| `$?` | Exit status of last command |
| `$$` | PID of the current shell |
| `$!` | PID of the last background process |

## 15.3 Conditionals

```bash
if [ "$1" = "hello" ]; then
    echo "Hello to you too"
elif [ -f "$1" ]; then
    echo "$1 is a file"
else
    echo "Unknown: $1"
fi

# Test operators
# -f file : file exists and is regular
# -d dir  : directory exists
# -z str  : string is empty
# -n str  : string is non-empty
# s1 = s2 : string equality
# n1 -eq n2 : numeric equality

case "$1" in
    start)
        echo "Starting..."
        ;;
    stop)
        echo "Stopping..."
        ;;
    *)
        echo "Usage: $0 {start|stop}"
        exit 1
        ;;
esac
```

## 15.4 Loops

```bash
# For loop over explicit list
for color in red green blue; do
    echo "Color: $color"
done

# For loop over command output
for file in *.txt; do
    echo "Processing: $file"
done

# C-style for loop
for ((i = 0; i < 10; i++)); do
    echo "Iteration $i"
done

# While loop
count=0
while [ $count -lt 10 ]; do
    echo "Count: $count"
    ((count++))
done

# Reading a file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt
```

## 15.5 Functions

```bash
greet() {
    local name="$1"   # local scope
    echo "Hello, $name!"
}

greet "World"

# Function returning a value via stdout
get_uptime() {
    uptime | awk '{print $3}'
}

echo "System uptime: $(get_uptime)"
```

## 15.6 Pipes and Redirection

### 15.6.1 Redirection

```bash
# Redirect stdout to file (overwrite)
command > output.txt

# Redirect stdout to file (append)
command >> output.txt

# Redirect stderr to file
command 2> error.txt

# Redirect both stdout and stderr
command &> all_output.txt

# Read input from file
command < input.txt

# Here document (multiline input)
cat << EOF > config.txt
host=localhost
port=8080
EOF
```

### 15.6.2 Pipes

A pipe connects stdout of one process to stdin of another:

```bash
# List processes, filter for 'bash', count lines
ps aux | grep bash | wc -l

# Find the largest file in /var/log
ls -1S /var/log | head -5

# Sort disk usage by size
du -sk * | sort -rn | head -10
```

Pipes are implemented by the `pipe()` system call and `dup2()` to redirect file descriptors.

## 15.7 Job Control

```bash
# Run command in background
sleep 100 &

# List background jobs
jobs

# Bring job to foreground
fg %1

# Send job to background (after Ctrl+Z)
bg %1

# Run command immune to SIGHUP
nohup long_running_command &

# Run with diminished priority
nice -n 19 slow_command

# Change priority of running process
renice +5 -p 1234
```

## 15.8 Process Monitoring

### 15.8.1 ps

```bash
# All processes (BSD style)
ps aux

# Process tree
ps axjf

# Thread view
ps -eLf

# Custom output
ps -eo pid,ppid,user,%cpu,%mem,comm --sort=-%cpu | head
```

### 15.8.2 top and htop

Interactive process viewers:

```
top - 14:23:01 up 10 days,  2 users,  load average: 0.15, 0.10, 0.05
Tasks: 231 total,   1 running, 230 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.3 us,  1.2 sy,  0.0 ni, 96.1 id,  0.4 wa,  0.0 hi,  0.0 si
MiB Mem :  15934.8 total,   8234.5 free,   3201.2 used,   4499.1 buff/cache
MiB Swap:   8192.0 total,   8192.0 free,      0.0 used.  11144.7 avail Mem
```

### 15.8.3 strace

`strace` intercepts and records system calls made by a process:

```bash
# Trace all system calls of a command
strace ls /tmp

# Trace specific calls
strace -e open,read,write ./program

# Trace a running process
strace -p 1234

# Show timestamps
strace -t -T ./program

# Count system calls
strace -c ./program
```

## 15.9 Practical Script Patterns

### 15.9.1 Safe Script Template

```bash
#!/bin/bash
set -euo pipefail

# -e : exit on any error
# -u : treat unset variables as errors
# -o pipefail : pipeline fails if any command fails

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >&2
}

die() {
    log "FATAL: $*"
    exit 1
}

main() {
    local input="${1:?Usage: $0 <input>}"
    log "Processing $input"
    # ... script logic ...
}

main "$@"
```

### 15.9.2 Parallel Processing

```bash
# Run tasks in parallel with a limit
for url in $(cat urls.txt); do
    (curl -s "$url" > "downloads/$(basename $url)" &)
    while [ $(jobs -r | wc -l) -ge 4 ]; do
        sleep 1
    done
done
wait
echo "All downloads complete"
```

## Summary

Shell scripting automates system administration and development tasks. Variables, conditionals, loops, and functions provide programming constructs within the shell. Pipes and redirection compose single-purpose tools into powerful pipelines. Job control manages concurrent processes. Monitoring commands (ps, top, strace) provide visibility into system state. Safe scripting patterns with `set -euo pipefail` prevent common errors.

## Exercises

### Review Questions

1. What is the difference between `$@` and `$*`?
2. How does a pipe differ from I/O redirection?
3. What is the purpose of `set -euo pipefail` in a shell script?
4. How does `strace` help in debugging a program?
5. What is the difference between a foreground job and a background job?

### Application Problems

1. Write a shell script that monitors CPU and memory usage of a given process (by PID) for 60 seconds, sampling every 5 seconds. Output a timestamped log.
2. Write a pipeline that finds the top 10 IP addresses accessing an Apache web server from its access log, sorted by request count.
3. Write a script that takes a directory as argument, finds all empty files and directories, and prompts the user before deleting each one.

### Challenge Problem

1. Write a shell script-based parallel file downloader. It takes a file of URLs as input and a concurrency level N (default 4). Using background jobs and job control, maintain exactly N concurrent `curl` downloads. When one completes, start the next. Print progress information (URL, size, elapsed time) for each completed download. Handle errors (failed downloads, network timeouts) gracefully.
