<!-- Clear Language: Keep sentences under 50 words -->
# Git Basics

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand how Git tracks changes and manages project history |
| LO2 | Initialize repos, stage files, and create commits with meaningful messages |
| LO3 | Use git status, git log, and git diff to inspect repository state |
| LO4 | Configure .gitignore to exclude files and directories from version control |
| LO5 | Apply undo and recovery workflows for common mistakes |
| LO6 | Follow commit message conventions used in professional teams |

## Introduction

Git is the industry-standard version control system. Understanding Git fundamentals — init, add, commit, branching — is essential for every software engineer. AI engineers use Git to manage training code, model versions, and collaboration.

## Prerequisites

- Basic command line usage
- Text editor familiarity

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 01.1 | Git Initialization | Creating repos, understanding .git directory |
| 01.2 | Staging and Committing | add, commit, the three-area model |
| 01.3 | Inspecting History | log, diff, show, status |
| 01.4 | Undoing Changes | restore, reset, amend |
| 01.5 | .gitignore | Excluding files from tracking |
| 01.6 | Real-World Workflows | Commit conventions, atomic commits |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Git Basics] --> B[Init]
    B --> C[Stage & Commit]
    C --> D[Inspect History]
    D --> E[Undo Changes]
    E --> F[.gitignore]
    F --> G[Best Practices]
```text

## Theory

### 01.1 Git Initialization

Git is a distributed version control system that tracks changes to files over time. Unlike centralized systems, every developer has a full copy of the repository history on their machine.

**Creating a new repository:**

```bash


## Examples

### Basic Example

```python

## Basic git basics example
def example():
    """Demonstrate git basics"""
    result = "Hello, git basics!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, git basics!
```text

## Create a new repo in the current directory
git init

## Create a new repo in a specific directory
git init my-project
```text

Running `git init` creates a hidden `.git` directory that stores all version control metadata: commit objects, branch refs, configuration, and the object database.

**Cloning an existing repository:**

```bash

## Clone via HTTPS
git clone https://github.com/user/repo.git

## Clone via SSH
git clone git@github.com:user/repo.git

## Clone into a specific directory
git clone https://github.com/user/repo.git my-folder
```text

Cloning copies the entire history, all branches, and sets up a remote called `origin` automatically.

**Key Git concepts:**

- **Working Directory**: Your actual files on disk
- **Staging Area (Index)**: Files marked for the next commit
- **Repository (.git)**: The committed history database
- **HEAD**: A pointer to the current commit

```mermaid
flowchart LR
    A[Working Directory] -->|git add| B[Staging Area]
    B -->|git commit| C[Repository]
    C -->|git checkout| A
```text


## Overview

### 01.2 Staging and Committing

The staging area lets you craft commits selectively. You can stage some changes while leaving others unstaged, allowing atomic, focused commits.

**Adding files to the staging area:**

```bash

## Stage a specific file
git add index.html

## Stage all changes in current directory
git add .

## Stage all changes everywhere
git add -A

## Stage specific file types
git add *.js

## Stage changes interactively (choose hunks)
git add -p
```text

**Committing staged changes:**

```bash

## Commit with inline message
git commit -m "Add user authentication module"

## Commit all tracked changes (skip staging)
git commit -am "Fix login redirect bug"

## Commit with verbose output showing diff
git commit -v -m "Update API rate limiting"

## Amend the last commit (message or files)
git commit --amend -m "Fix: correct typo in auth header"
```text

**The three-area model in practice:**

```bash

## Edit a file
echo "console.log('hello');" > app.js

## Check status — shows unstaged changes
git status

## Stage the file
git add app.js

## Check status — shows staged changes
git status

## Commit
git commit -m "Initialize app entry point"

## Check status — clean working tree
git status
```text


## Overview

### 01.3 Inspecting History

Git log shows the commit history. Understanding how to read and filter it is essential for debugging and code review.

**Viewing commit history:**

```bash

## Compact one-line log
git log --oneline

## Graph with branches
git log --oneline --graph --all

## Last 5 commits
git log -5

## Show file changes per commit
git log --stat

## Show actual diffs
git log -p

## Filter by author
git log --author="Alice"

## Filter by date
git log --since="2024-01-01" --until="2024-06-01"

## Search commit messages
git log --grep="fix" --oneline
```text

**Comparing changes with diff:**

```bash

## Unstaged changes (working dir vs staging)
git diff

## Staged changes (staging vs last commit)
git diff --staged

## Diff between two commits
git diff abc1234 def5678

## Diff between branches
git diff main..feature-branch

## Diff showing only filenames
git diff --name-only

## Diff with word-level changes
git diff --word-diff
```text

**Inspecting specific commits:**

```bash

## Show a commit's details and diff
git show abc1234

## Show commit stats only
git show --stat abc1234

## Show the contents of a file at a specific commit
git show abc1234:path/to/file.ts
```text


## Overview

### 01.4 Undoing Changes

Mistakes happen. Git provides multiple tools to undo changes, each with different safety levels.

**Discarding unstaged changes:**

```bash

## Discard changes in a specific file
git restore index.html

## Discard all working directory changes
git restore .

## Restore a file from last commit
git restore --source=HEAD~2 path/to/file.ts
```text

**Unstaging files:**

```bash

## Unstage a specific file (keeps working dir changes)
git restore --staged index.html

## Unstage all files
git restore --staged .
```text

**Resetting commits (use with caution):**

```bash

## Soft reset: move HEAD, keep staged changes
git reset --soft HEAD~1

## Mixed reset (default): unstage changes, keep in working dir
git reset HEAD~1

## Hard reset: discard everything (DANGEROUS)
git reset --hard HEAD~1

## Reset to a specific commit
git reset --hard abc1234
```text

**Recovering with reflog:**

```bash

## View the reflog (safety net for lost commits)
git reflog

## Recover a "lost" commit
git reset --hard HEAD@{2}
```text


## Overview

### 01.5 .gitignore

The `.gitignore` file tells Git which files and directories to ignore. This prevents generated files, secrets, and dependencies from being tracked.

**Creating a .gitignore:**

```bash

## Create a .gitignore file
touch .gitignore
```text

**Common .gitignore patterns:**

```gitignore

## Dependencies
node_modules/
venv/
__pycache__/

## Build output
dist/
build/
*.o
*.class

## Environment files
.env
.env.local
.env.*.local

## IDE files
.vscode/
.idea/
*.swp
*.swo

## OS files
.DS_Store
Thumbs.db

## Logs
*.log
logs/

## Coverage reports
coverage/
htmlcov/
```text

**Pattern syntax:**

```gitignore

## Ignore all .log files
*.log

## But keep important.log
!important.log

## Ignore all files in temp/ directory
temp/

## Ignore build/ at root only (not sub/build/)
/build

## Ignore TODO files in root and subdirs
/**/TODO

## Ignore files ending in .bak
*~

## Ignore files with spaces in name
"My Documents/"
```text

**Removing tracked files from Git (after adding to .gitignore):**

```bash

## Remove file from Git but keep on disk
git rm --cached secret.env

## Remove directory from Git but keep locally
git rm -r --cached node_modules/

## Commit the removal
git commit -m "Remove tracked secrets and dependencies"
```text


## Overview

### 01.6 Real-World Best Practices

**Atomic commits:** Each commit should represent one logical change. This makes code review easier and bisection reliable.

```bash

## Bad: one massive commit
git add .
git commit -m "Update everything"

## Good: separate logical changes
git add src/auth.ts src/auth.test.ts
git commit -m "Add JWT authentication with tests"

git add src/api/routes.ts
git commit -m "Add protected API routes"

git add README.md
git commit -m "Update README with auth setup instructions"
```text

**Commit message convention (Conventional Commits):**

```text
<type>(<scope>): <description>

[optional body]

[optional footer]
```text

```bash
git commit -m "feat(auth): add OAuth2 Google login"
git commit -m "fix(api): handle null response from payment gateway"
git commit -m "docs(readme): add installation steps"
git commit -m "refactor(db): simplify query builder"
git commit -m "test(auth): add edge case for expired tokens"
git commit -m "chore(deps): upgrade axios to 1.6.0"
```text

**Commit message rules:**

- Use imperative mood: "Add feature" not "Added feature"
- Keep subject line under 72 characters
- Capitalize the subject line
- No period at the end of the subject
- Use body to explain "what" and "why", not "how"

## Summary

- Git tracks changes in a three-area model: working directory, staging area, repository
- `git init` creates a new repository; `git clone` copies an existing one
- `git add` stages files; `git commit` records staged snapshots
- `git status`, `git log`, and `git diff` are your primary inspection tools
- `git restore` undoes working directory changes; `git restore --staged` unstages
- `git reset` moves HEAD (use `--soft`, `--mixed`, or `--hard` carefully)
- `.gitignore` prevents files from being tracked — configure it early
- Write atomic commits with conventional commit messages
- `git reflog` is your safety net for recovering "lost" commits
- Always review changes before staging with `git diff`

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Starting a project | `git init` + `.gitignore` immediately | Committing without .gitignore |
| Daily work | Small, frequent atomic commits | One giant end-of-day commit |
| Commit messages | Conventional format with scope | "fix stuff" or "update" |
| Reviewing changes | `git diff --staged` before committing | Blindly staging everything |
| Undoing mistakes | `git restore` for files, `git reset` for commits | `git reset --hard` without checking reflog |
| Finding bugs | `git log --oneline` + `git bisect` | Manually reading every commit |

## Interview Q&A

<details class="tp-qa-card" data-qid="git01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between git reset --soft, --mixed, and --hard?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>--soft</strong> moves HEAD but keeps changes staged. <strong>--mixed</strong> (default) moves HEAD and unstages changes but keeps them in the working directory. <strong>--hard</strong> moves HEAD and discards all changes permanently. Use --soft for amending commits, --mixed for reorganizing, and --hard only when you're certain you want to discard changes.</p><pre><code># Soft: keeps changes staged
git reset --soft HEAD~1

## Mixed: unstages but keeps files
git reset HEAD~1

## Hard: discloses everything
git reset --hard HEAD~1</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the three areas of Git (working directory, staging area, repository).
  </summary>
  <div class="tp-qa-answer">
    <p>The <strong>working directory</strong> is your project's files on disk. The <strong>staging area (index)</strong> is a preparation zone where you select which changes to include in the next commit. The <strong>repository (.git)</strong> stores the permanent history of committed snapshots. Files flow: Working Directory → (git add) → Staging Area → (git commit) → Repository. This design lets you craft precise, atomic commits rather than dumping all changes at once.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you recover a commit that was accidentally reset?
  </summary>
  <div class="tp-qa-answer">
    <p>Use <code>git reflog</code> to find the lost commit hash. The reflog tracks every movement of HEAD. Once you find the hash, use <code>git reset --hard &lt;hash&gt;</code> or <code>git cherry-pick &lt;hash&gt;</code> to restore it. Reflog entries expire after 90 days by default.</p><pre><code># Find the lost commit
git reflog

## Restore it
git reset --hard abc1234</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Write a proper commit message for adding rate limiting to an API.
  </summary>
  <div class="tp-qa-answer">
    <p>Using conventional commits format:</p><pre><code>feat(api): add rate limiting middleware

- Implement token bucket algorithm for request throttling
- Default limit: 100 requests per minute per IP
- Add X-RateLimit-Remaining header to responses
- Return 429 Too Many Requests when exceeded

Closes #234</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What does .gitignore do and what happens if you add a file after .gitignore?
  </summary>
  <div class="tp-qa-answer">
    <p>.gitignore tells Git to skip tracking files matching its patterns. However, if a file is already tracked before adding it to .gitignore, Git continues tracking it. You must explicitly untrack it with <code>git rm --cached &lt;file&gt;</code> for .gitignore to take effect on that file.</p><pre><code># File is tracked, .gitignore won't help
git rm --cached secret.env
git commit -m "Stop tracking secret.env"</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which command stages all modified and new files in the current directory?

a) git commit -a
b) git add .
c) git add -A
d) Both b and c

<details class="tp-qa-card" data-qid="git01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d</strong></p><p>Both <code>git add .</code> and <code>git add -A</code> stage all changes. The difference: <code>git add .</code> stages changes in the current directory and below, while <code>git add -A</code> stages changes everywhere in the repo. At the repo root they behave identically.</p></div></details>

**Q2**: What is the correct order of the Git workflow?

a) commit → add → edit
b) edit → commit → add
c) edit → add → commit
d) add → edit → commit

<details class="tp-qa-card" data-qid="git01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c</strong></p><p>The standard workflow is: edit files → stage changes with <code>git add</code> → commit with <code>git commit</code>. You edit working files, selectively stage what you want, then commit a snapshot of staged changes.</p></div></details>

**Q3**: Which command shows the differences between the staging area and the last commit?

a) git diff
b) git diff --staged
c) git diff HEAD
d) git show

<details class="tp-qa-card" data-qid="git01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>git diff</code> shows working directory vs staging area. <code>git diff --staged</code> (or --cached) shows staging area vs last commit. This is the diff that will be included in your next commit.</p></div></details>

**Q4**: What happens when you run `git commit --amend`?

a) Creates a new branch with the changes
b) Deletes the last commit entirely
c) Modifies the last commit with new changes or message
d) Reverts the last commit

<details class="tp-qa-card" data-qid="git01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c</strong></p><p><code>git commit --amend</code> modifies the most recent commit. You can change the message, add forgotten files, or both. It creates a new commit hash that replaces the previous one. Never amend commits that have been pushed to a shared branch.</p></div></details>

**Q5**: In .gitignore, what does the pattern `*.log` do?

a) Ignores only files named "*.log"
b) Ignores all files ending in .log
c) Ignores the log directory
d) Ignores all files containing "log" in the name

<details class="tp-qa-card" data-qid="git01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>The <code>*.log</code> pattern uses a wildcard that matches any characters before ".log". It ignores all files with the .log extension in any directory. To ignore only in root, use <code>/*.log</code>.</p></div></details>

## Practical Tips

- Always run `git status` before committing to verify what will be included
- Use `git add -p` to stage parts of files selectively — great for separating mixed changes
- Write commit messages in imperative mood: "Add feature" not "Added feature"
- Keep commits atomic: one logical change per commit for easier review and bisection
- Use `git log --oneline --graph` for a compact visual history of branches
- Set up a `.gitignore` at project start — adding it later requires `git rm --cached`


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding git linux cli is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to git linux cli.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: git linux cli concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In git linux cli, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

**Easy** — Initialize a new Git repository, create three files, stage them individually, and commit each with a meaningful message. Verify with `git log`.

**Medium** — Create a `.gitignore` that excludes `node_modules/`, `*.env`, and `dist/`. Add a `node_modules/` directory and `.env` file, verify they are ignored, then test that a tracked file added before `.gitignore` still shows in `git status`.

**Medium** — Make a commit, then accidentally run `git reset --hard HEAD~1`. Use `git reflog` to find and restore the lost commit.

**Hard** — Set up a project with 10 commits. Use `git rebase -i` to squash the last 5 commits into one. Then use `git reflog` to recover the original state.

---


## Common Mistakes

1. Committing too frequently without meaningful messages
2. Not using .gitignore for sensitive files
3. Force pushing to shared branches
4. Not understanding staging area
5. Forgetting to pull before pushing

## Revision Notes

- git init → initialize repo
- git add → stage changes
- git commit → save snapshot
- git status → check state
- git log → view history
- .gitignore → exclude files
- Commit often, push after review

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
- [ ] Have questions ready about how the company uses git linux cli> **Next**: [02 Git Branching →](02-git-branching.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 20-30 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Git, Linux & CLI fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master git basics?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

Understanding the evolution of git basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding git basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of git basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply git basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of git basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply git basics in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (8 minutes)
**Day 2**: Complete exercises and practice (8 minutes)
**Day 3**: Review flashcards and take quiz (4 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying git basics to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production