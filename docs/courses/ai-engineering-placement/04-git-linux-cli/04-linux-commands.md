# Linux Commands

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Navigate the filesystem with ls, cd, pwd, and directory shortcuts |
| LO2 | Create, copy, move, and remove files and directories safely |
| LO3 | Control file permissions with chmod, chown, and numeric mode |
| LO4 | Search file contents with grep and locate files with find |
| LO5 | Build powerful pipelines using pipes, redirects, and xargs |
| LO6 | Combine commands for real-world system administration tasks |

## Introduction

Linux command line skills are essential for AI engineers who work with remote servers, GPU clusters, and deployment pipelines. Mastering file operations, permissions, and text processing saves hours of manual work.

## Prerequisites

- Terminal basics

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 04.1 | Navigation | ls, cd, pwd, path shortcuts |
| 04.2 | File Operations | cp, mv, rm, mkdir, touch |
| 04.3 | Permissions | chmod, chown, numeric vs symbolic mode |
| 04.4 | Searching | grep, find, locate, which |
| 04.5 | Pipes and Redirection | |, >, >>, <, xargs, tee |
| 04.6 | Real-World Tasks | Combining commands for daily work |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Linux Commands] --> B[Navigation]
    B --> C[File Operations]
    C --> D[Permissions]
    D --> E[Searching]
    E --> F[Pipes & Redirection]
    F --> G[Real-World Tasks]
```text

## Theory

### 04.1 Navigation

**Listing files and directories:**

```bash


## Examples

### Basic Example

```python
## Basic linux commands example
def example():
    """Demonstrate linux commands"""
    result = "Hello, linux commands!"
    print(result)
    return result

example()
```

### Expected Output

```text
Hello, linux commands!
```

## Basic listing
ls

## Long format (permissions, owner, size, date)
ls -l

## List all files including hidden
ls -la

## Human-readable file sizes
ls -lh

## Sort by modification time (newest first)
ls -lt

## Sort by size (largest first)
ls -lS

## List only directories
ls -d */

## Recursive listing (includes subdirectories)
ls -R

## One file per line
ls -1
```text

**Changing directories:**

```bash

## Change to a directory
cd /var/log

## Change to home directory
cd ~
cd

## Change to previous directory
cd -

## Change to parent directory
cd ..

## Change to parent's parent
cd ../..

## Go to home directory subfolder
cd ~/projects/my-app
```text

**Directory shortcuts:**

| Shortcut | Meaning |
|----------|---------|
| `~` | Home directory |
| `.` | Current directory |
| `..` | Parent directory |
| `-` | Previous directory |
| `$HOME` | Home directory (env variable) |

**Printing the working directory:**

```bash

## Show current directory path
pwd

## Show physical path (resolve symlinks)
pwd -P
```text


## Overview

### 04.2 File Operations

**Creating files and directories:**

```bash

## Create empty file or update timestamp
touch newfile.txt

## Create multiple files
touch file1.txt file2.txt file3.txt

## Create directories
mkdir mydir

## Create nested directories
mkdir -p parent/child/grandchild

## Create with specific permissions
mkdir -m 755 public_dir
```text

**Copying files and directories:**

```bash

## Copy a file
cp source.txt destination.txt

## Copy to a directory
cp source.txt /backup/

## Copy directory recursively
cp -r source-dir/ backup-dir/

## Preserve permissions, timestamps, ownership
cp -p important.conf /backup/

## Verbose output (show what's being copied)
cp -v *.log /var/log/archive/

## Copy only if newer (don't overwrite newer destination)
cp -u config.yaml /etc/app/

## Interactive mode (prompt before overwrite)
cp -i source.txt dest.txt

## Copy a file, creating backup if destination exists
cp --backup=numbered source.txt dest.txt
```text

**Moving and renaming files:**

```bash

## Move a file
mv oldname.txt newname.txt

## Move to a directory
mv file.txt /tmp/

## Rename a file
mv report.pdf final-report.pdf

## Move multiple files to a directory
mv *.jpg /images/

## Verbose move
mv -v old-dir/ new-location/

## Don't overwrite existing files
mv -n file.txt /backup/

## Interactive move
mv -i file.txt /backup/
```text

**Removing files and directories:**

```bash

## Remove a file
rm unwanted.txt

## Remove interactively (prompt for each file)
rm -i *.log

## Remove multiple files
rm file1.txt file2.txt file3.txt

## Remove directory and contents
rm -r old-directory/

## Force remove without prompts
rm -f temporary-file.tmp

## Remove empty directory
rmdir empty-dir/

## Remove directory tree (alternative to rm -r)
rm -rf build/

## Remove only .pyc files recursively
find . -name "*.pyc" -exec rm {} +
```text

**⚠️ Dangerous commands to avoid:**

```bash

## NEVER run these without extreme caution:
rm -rf /                    # Deletes entire filesystem
rm -rf /*                   # Same thing
rm -rf ~                    # Deletes your home directory
find / -name "*.tmp" -exec rm {} +  # Dangerous recursive delete
```text


## Overview

### 04.3 Permissions

Linux file permissions control who can read, write, and execute files.

**Permission structure:**

```text
-rwxr-xr-- 1 user group 4096 Jan 15 10:30 file.txt
│├─┤├─┤├─┤
│ │   │ │  └── others: r-- (read)
│ │   │ └───── group: r-x (read, execute)
│ │   └─────── owner: rwx (read, write, execute)
│ └─────────── type: - = file, d = directory
└───────────── special bits
```text

| Permission | File | Directory |
|------------|------|-----------|
| `r` (4) | Read file contents | List directory contents |
| `w` (2) | Modify file | Create/delete files in directory |
| `x` (1) | Execute as program | Enter (cd into) directory |

**Symbolic mode with chmod:**

```bash

## Add execute permission for owner
chmod u+x script.sh

## Remove write permission for group
chmod g-w file.txt

## Add read permission for others
chmod o+r public-file.txt

## Set exact permissions: owner=rwx, group=r-x, others=r--
chmod u=rwx,g=rx,o=r file.txt

## Add execute for all users
chmod +x deploy.sh

## Remove all permissions for others
chmod o= private-file.txt
```text

**Numeric (octal) mode with chmod:**

```bash

## rwxr-xr-- = 754
chmod 754 script.sh

## rwxr-xr-x = 755 (common for executables)
chmod 755 deploy.sh

## rw-r--r-- = 644 (common for regular files)
chmod 644 config.yaml

## rw------- = 600 (private files)
chmod 600 ~/.ssh/id_rsa

## rwx------ = 700 (private executables)
chmod 700 ~/bin/myscript
```text

**Changing ownership:**

```bash

## Change file owner
sudo chown alice file.txt

## Change owner and group
sudo chown alice:developers file.txt

## Change ownership recursively
sudo chown -R alice:team /var/www/

## Change only the group
chgrp developers project/
```text

**Special permissions:**

```bash

## Setuid: execute as file owner (use sparingly)
chmod u+s /usr/bin/program
chmod 4755 /usr/bin/program

## Setgid: execute with group privileges
chmod g+s /shared/dir/
chmod 2755 /shared/dir/

## Sticky bit: only owner can delete files in directory
chmod +t /tmp/shared/
chmod 1777 /tmp/shared/
```text


## Overview

### 04.4 Searching

**grep — search file contents:**

```bash

## Basic text search
grep "error" logfile.txt

## Case-insensitive search
grep -i "error" logfile.txt

## Search recursively in directory
grep -r "TODO" src/

## Show line numbers
grep -n "function" app.ts

## Count matching lines
grep -c "404" access.log

## Show 3 lines before and after match
grep -B 3 -A 3 "Exception" app.log

## Invert match (lines NOT containing pattern)
grep -v "debug" app.log

## Search for literal string (no regex)
grep -F "user.name" config.yaml

## Extended regex (grep -E or egrep)
grep -E "error|warning|critical" syslog.txt

## Perl regex for complex patterns
grep -P "\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" access.log

## Output only matching part
grep -o "error:.*" app.log
```text

**find — search for files by name, size, time:**

```bash

## Find files by name
find /var -name "*.log"

## Case-insensitive name search
find . -iname "readme.md"

## Find directories named "node_modules"
find . -type d -name "node_modules"

## Find files larger than 100MB
find / -type f -size +100M

## Find files modified in the last 7 days
find . -mtime -7

## Find files accessed in the last 30 minutes
find . -amin -30

## Find empty files
find . -empty -type f

## Find files with specific permissions
find . -perm 755

## Find and execute command on results
find . -name "*.tmp" -exec rm {} +

## Find and delete (using + for batch)
find . -name "*.log" -delete

## Find files and limit depth
find . -maxdepth 2 -name "*.ts"
```text

**Other search tools:**

```bash

## which: find command location
which python3

## /usr/bin/python3

## whereis: find binary, source, manual
whereis git

## git: /usr/bin/git /usr/share/man/man1/git.1.gz

## locate: fast search using pre-built database
locate nginx.conf

## May need to update: sudo updatedb
```text


## Overview

### 04.5 Pipes and Redirection

Pipes and redirects are the backbone of Linux command composition.

**Output redirection:**

```bash

## Overwrite file with output
echo "hello" > output.txt

## Append output to file
echo "world" >> output.txt

## Redirect stderr to file
command 2> errors.log

## Append stderr to file
command 2>> errors.log

## Redirect both stdout and stderr
command > output.txt 2>&1
command &> output.txt

## Discard all output
command > /dev/null 2>&1
```text

**Input redirection:**

```bash

## Feed file contents as input
wc -l < file.txt

## Here document (multi-line input)
cat << EOF
Line 1
Line 2
Line 3
EOF

## Here string
grep "pattern" <<< "string to search"
```text

**Pipes:**

```bash

## Pipe output of one command as input to another
ls -la | grep ".txt"

## Chain multiple commands
cat access.log | grep "404" | awk '{print $1}' | sort | uniq -c

## Count files by extension
find . -type f | sed 's/.*\.//' | sort | uniq -c | sort -rn

## Pipe with xargs (convert stdin to command arguments)
find . -name "*.log" | xargs rm

## Safer xargs with null delimiter
find . -name "*.log" -print0 | xargs -0 rm

## xargs with parallel execution
cat urls.txt | xargs -P 4 -I {} curl -s {}
```text

**tee — split output to file and screen:**

```bash

## Write to file AND display
ls -la | tee listing.txt

## Append to file AND display
ls -la | tee -a listing.txt

## Pipe chain: save intermediate result
find . -name "*.ts" | tee files.txt | wc -l
```text

**xargs — build commands from input:**

```bash

## Delete all .jpg files
find . -name "*.jpg" | xargs rm

## Kill processes by name
ps aux | grep "node" | awk '{print $2}' | xargs kill

## Chmod all .sh files
find . -name "*.sh" | xargs chmod +x

## Parallel download
cat urls.txt | xargs -P 8 -I {} wget {}
```text


## Overview

### 04.6 Real-World Tasks

**Log analysis pipeline:**

```bash

## Find top 10 most frequent IP addresses in access log
cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10

## Find all 500 errors in the last hour
grep "500" access.log | awk '$4 >="[21/Jan/2024:10:"'

## Count requests per endpoint
awk '{print $7}' access.log | sort | uniq -c | sort -rn | head -20

## Find slow requests (> 2 seconds)
awk '$NF > 2.0 {print $0}' access.log
```text

**Disk usage and cleanup:**

```bash

## Find largest files in current directory
du -ah . | sort -rh | head -20

## Find directories using more than 500MB
du -sh */ | sort -rh | head -10

## Find and remove files older than 30 days
find /var/log -name "*.log" -mtime +30 -delete

## Find files larger than 50MB
find . -type f -size +50M -exec ls -lh {} +

## Clean up node_modules recursively
find . -name "node_modules" -type d -exec rm -rf {} +
```text

**Monitoring and debugging:**

```bash

## Watch a log file in real-time
tail -f /var/log/syslog

## Watch with pattern filtering
tail -f app.log | grep --line-buffered "ERROR"

## Find what's using a port
lsof -i :8080

## Find large files created in last 24 hours
find . -type f -mtime -1 -size +10M -exec ls -lh {} +

## Monitor disk space every 5 seconds
watch -n 5 df -h
```text

## Summary

- `ls -la` shows all files with permissions, size, and dates
- `cd -` returns to the previous directory; `~` is home
- `cp -r` copies directories; `-p` preserves permissions
- `mv` renames and moves files; use `-i` for interactive mode
- `rm -rf` is powerful and dangerous — always double-check before running
- `chmod` uses numeric (755, 644) or symbolic (u+x, g-w) modes
- `grep -r` searches recursively; `-i` for case-insensitive; `-n` for line numbers
- `find` searches by name, size, time, and can execute commands on results
- Pipes (`|`) chain commands; `>` overwrites; `>>` appends
- `xargs` converts piped input into command arguments
- `tee` splits output to both file and screen

## Practical Takeaways

| Scenario | Command |
|----------|---------|
| Find all TODO comments in code | `grep -rn "TODO" src/` |
| Find large files eating disk | `find / -size +100M -exec ls -lh {} +` |
| Count lines of code by extension | `find . -name "*.ts" \| xargs wc -l` |
| Watch logs in real-time | `tail -f /var/log/app.log` |
| Make a script executable | `chmod +x script.sh` |
| Protect SSH keys | `chmod 600 ~/.ssh/id_rsa` |

## Interview Q&A

<details class="tp-qa-card" data-qid="git04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between `>` and `>>` in Linux?
  </summary>
  <div class="tp-qa-answer">
    <p><code>&gt;</code> <strong>overwrites</strong> the destination file with the command output. <code>&gt;&gt;</code> <strong>appends</strong> the output to the end of the destination file. If the file doesn't exist, both create it. Use <code>&gt;</code> for fresh output and <code>&gt;&gt;</code> for logging/appending.</p><pre><code>echo "first" > file.txt    # file.txt contains: first
echo "second" >> file.txt   # file.txt contains: first\nsecond</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you find all files larger than 100MB and older than 30 days?
  </summary>
  <div class="tp-qa-answer">
    <p>Use the <code>find</code> command with combined conditions:</p><pre><code>find / -type f -size +100M -mtime +30 -exec ls -lh {} +</code></pre>
    <p><code>-type f</code> limits to files, <code>-size +100M</code> finds files over 100MB, <code>-mtime +30</code> finds files modified more than 30 days ago. The <code>-exec</code> flag runs <code>ls -lh</code> on each result for detailed output.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Explain chmod 755 vs chmod 644. When would you use each?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>755</strong> (rwxr-xr-x): Owner can read/write/execute; group and others can read and execute. Use for scripts, executables, and directories that users need to enter.</p>
    <p><strong>644</strong> (rw-r--r--): Owner can read/write; group and others can only read. Use for regular files like configs, documents, and source code that shouldn't be executed.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What does xargs do and why is it needed with pipes?
  </summary>
  <div class="tp-qa-answer">
    <p>Pipes (<code>|</code>) pass the <strong>output</strong> of one command as <strong>stdin</strong> to another. But many commands expect arguments, not stdin. <code>xargs</code> converts piped input into command arguments. Example: <code>find . -name "*.tmp" | xargs rm</code> — <code>find</code> outputs filenames, <code>xargs</code> feeds them as arguments to <code>rm</code>. Use <code>-print0</code> and <code>-0</code> for filenames with spaces.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How would you find all TODO comments in a TypeScript project?
  </summary>
  <div class="tp-qa-answer">
    <p>Use recursive grep with line numbers:</p><pre><code>grep -rn "TODO" src/ --include="*.ts"
grep -rn "FIXME\|HACK\|XXX" src/ --include="*.ts"</code></pre>
    <p><code>-r</code> searches recursively, <code>-n</code> shows line numbers, <code>--include</code> filters to TypeScript files. The second example uses extended regex to find multiple markers at once.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does `ls -lha` display?

a) Only hidden files
b) Long format listing with human-readable sizes including hidden files
c) Recursive listing of all files
d) Files sorted by name

<details class="tp-qa-card" data-qid="git04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>-l</code> enables long format, <code>-h</code> makes sizes human-readable (KB, MB, GB), <code>-a</code> shows all files including hidden (dotfiles). Together they show a complete, readable directory listing.</p></div></details>

**Q2**: Which command removes a directory and all its contents?

a) rmdir mydir
b) rm mydir
c) rm -r mydir
d) rm -rf mydir/

<details class="tp-qa-card" data-qid="git04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c</strong></p><p><code>rm -r</code> recursively removes a directory and all contents. <code>rmdir</code> only removes empty directories. <code>rm -rf</code> force-removes without prompting — use with extreme caution.</p></div></details>

**Q3**: How do you search for a pattern in all .log files under /var/log?

a) find /var/log -name "*.log" | grep "pattern"
b) grep -r "pattern" /var/log --include="*.log"
c) grep "pattern" /var/log/*.log
d) All of the above

<details class="tp-qa-card" data-qid="git04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d</strong></p><p>All three approaches work. Option b (<code>grep -r --include</code>) is cleanest. Option a pipes find into grep. Option c uses shell globbing. Choose based on depth and simplicity needs.</p></div></details>

**Q4**: What is the purpose of the sticky bit (chmod +t) on a directory?

a) Prevents anyone from deleting files
b) Only the file owner can delete files in that directory
c) Makes all files executable
d) Sets the group to the directory's group

<details class="tp-qa-card" data-qid="git04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>The sticky bit on a directory means only the file owner, directory owner, or root can delete or rename files within it. This is how <code>/tmp</code> works — all users can write, but only they can delete their own files.</p></div></details>

**Q5**: In the command `ls -la | grep ".txt" | wc -l`, what does the pipeline do?

a) Lists all text files
b) Counts the number of .txt files in the current directory
c) Counts lines in all text files
d) Finds the largest text file

<details class="tp-qa-card" data-qid="git04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>ls -la</code> lists all files, <code>grep ".txt"</code> filters to lines containing .txt, and <code>wc -l</code> counts those lines. Each line from <code>ls -la</code> represents one file, so the output is the count of .txt files.</p></div></details>

## Practical Tips

- Use `ls -lt` to find recently modified files; `ls -lS` for largest files first
- Always quote filenames with spaces: `rm "file name.txt"`
- Use `find -exec {} +` instead of `find -exec \;` for better performance
- Combine `grep -v` to exclude patterns from results
- Use `tee` to log pipeline output to a file while still seeing it on screen
- Practice dangerous commands with `echo` first: `echo rm -rf *.log`

## Exercises

**Easy** — List all files in `/etc` larger than 10KB, sorted by size. Then find all `.conf` files in the same directory.

**Medium** — Write a one-liner that finds all `.js` files modified in the last 2 days, counts their lines, and shows the total. Use pipes and xargs.

**Medium** — Create a directory structure with `mkdir -p`, set different permissions on each level, and verify access as different users with `su`.

**Hard** — Analyze an Apache/Nginx access log: find the top 5 IPs, most common HTTP status codes, and average request size. Use only awk, sort, uniq, and wc.

---


## Common Mistakes

1. Using rm -rf without caution
2. Not understanding file permissions
3. Not using quotes around filenames with spaces
4. Forgetting that Linux is case-sensitive
5. Not using find/locate for file search

## Revision Notes

- ls -la: detailed listing
- chmod 755: rwxr-xr-x
- grep -rn: recursive search
- find / -name "*.py": find files
- 管道 (|) pipes output to next command
- tee: write to file and stdout

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of git linux cli. When would you choose one approach over another?
2. Design a system that efficiently handles git linux cli at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to git linux cli. What was your approach and what was the result?
2. How would you explain git linux cli to a non-technical stakeholder?

#### Microsoft Style
1. How does git linux cli integrate with enterprise systems and cloud architectures?
2. What are the security implications of git linux cli?

#### NVIDIA Style
1. How would you optimize git linux cli for GPU-accelerated computing?
2. What parallel processing patterns apply to git linux cli?

#### AI Startup Style
1. How would you implement git linux cli in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using git linux cli?

### Resume Tips
- **Technical Skills**: List git linux cli under relevant technical skills
- **Project Description**: "Implemented git linux cli to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include git linux cli in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of git linux cli
- [ ] Practice 3-5 problems related to git linux cli
- [ ] Prepare 2 real-world examples of using git linux cli
- [ ] Know the time/space complexity of common git linux cli operations
- [ ] Have questions ready about how the company uses git linux cli> **Next**: [05 Bash Scripting →](05-bash-scripting.md)
