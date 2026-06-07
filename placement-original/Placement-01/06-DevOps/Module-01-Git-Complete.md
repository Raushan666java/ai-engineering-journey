# 📚 Module 1: Version Control & Git - Complete Course

## Week 1: Git Fundamentals

### Day 1-2: Version Control Basics

#### What is Version Control?
Version control is a system that records changes to files over time so you can recall specific versions later.

**Benefits:**
- Track changes and history
- Collaborate with multiple developers
- Backup and restore capabilities
- Branching and merging
- Blame/annotation features

#### Types of Version Control Systems

**1. Local Version Control**
```bash
# Simple file copying approach (not recommended)
cp myfile.txt myfile_backup_20231201.txt
```

**2. Centralized Version Control (CVS, SVN)**
- Single server contains all versioned files
- Clients check out files from central place

**3. Distributed Version Control (Git, Mercurial)**
- Every client has complete history
- No single point of failure

#### Git Architecture

```
Working Directory → Staging Area → Local Repository → Remote Repository
     (add)           (commit)         (push)
```

#### Git Installation & Setup

**Linux/Ubuntu:**
```bash
sudo apt update
sudo apt install git
```

**Windows:**
```bash
# Download from git-scm.com or use chocolatey
choco install git
```

**macOS:**
```bash
brew install git
```

**Verify Installation:**
```bash
git --version
# Output: git version 2.34.1
```

#### Initial Configuration

**Global Configuration (applies to all repositories):**
```bash
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"  # VS Code as editor
```

**View Configuration:**
```bash
git config --list
git config --global --list
git config user.name  # Check specific setting
```

**Configuration Levels:**
```bash
git config --system    # System-wide (/etc/gitconfig)
git config --global    # User-specific (~/.gitconfig)
git config --local     # Repository-specific (.git/config)
```

### Day 3-4: Repository Operations

#### Creating a Repository

**Initialize New Repository:**
```bash
mkdir my-project
cd my-project
git init
# Creates .git directory with repository metadata
```

**Clone Existing Repository:**
```bash
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder-name
git clone git@github.com:user/repo.git  # SSH
```

#### Repository Structure
```
my-project/
├── .git/           # Git metadata (hidden)
│   ├── config      # Repository configuration
│   ├── HEAD        # Points to current branch
│   ├── objects/    # Git objects (commits, trees, blobs)
│   └── refs/       # References (branches, tags)
├── .gitignore      # Files to ignore
└── README.md       # Project documentation
```

#### Basic Git Workflow

**1. Create Files:**
```bash
echo "# My Project" > README.md
echo "console.log('Hello World');" > app.js
```

**2. Check Status:**
```bash
git status
# Shows:
# - Untracked files
# - Modified files
# - Staged files
```

**3. Add Files to Staging:**
```bash
git add README.md           # Add specific file
git add app.js README.md    # Add multiple files
git add .                   # Add all files
git add *.js               # Add all JS files
```

**4. Commit Changes:**
```bash
git commit -m "Initial commit: Add README and app.js"
git commit -m "feat: add user authentication module"
```

**5. View History:**
```bash
git log                     # Full log
git log --oneline          # Compact view
git log --graph --all      # Visual graph
git log --stat             # Show file changes
git log -p                 # Show patch/diff
git log --since="2 weeks ago"
git log --author="John Doe"
```

#### Git Status Explained

```bash
git status
```

**Output Interpretation:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   feature.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        temp.txt
```

### Day 5-7: Basic Git Workflow

#### The Three States of Git

**1. Working Directory:**
- Your actual files
- Where you make changes

**2. Staging Area (Index):**
- Prepared changes for next commit
- Snapshot of what will be committed

**3. Repository (.git directory):**
- Committed snapshots
- Complete project history

#### Detailed Workflow Example

```bash
# 1. Start with clean working directory
git status
# On branch main, nothing to commit, working tree clean

# 2. Create new feature
echo "function login() { return true; }" > auth.js
git status
# Untracked files: auth.js

# 3. Stage the file
git add auth.js
git status
# Changes to be committed: new file: auth.js

# 4. Make more changes
echo "// TODO: Add validation" >> auth.js
git status
# Changes to be committed: new file: auth.js
# Changes not staged: modified: auth.js

# 5. Stage updated version
git add auth.js
git status
# Changes to be committed: new file: auth.js

# 6. Commit changes
git commit -m "feat: add authentication module"
git status
# On branch main, nothing to commit, working tree clean
```

#### Viewing Differences

**Working Directory vs Staging:**
```bash
git diff                    # Unstaged changes
git diff auth.js           # Specific file
```

**Staging vs Repository:**
```bash
git diff --staged          # Staged changes
git diff --cached          # Same as --staged
```

**Between Commits:**
```bash
git diff HEAD~1            # Current vs previous commit
git diff abc123 def456     # Between specific commits
git diff main feature      # Between branches
```

#### Undoing Changes

**Unstage Files:**
```bash
git restore --staged auth.js    # Remove from staging
git reset HEAD auth.js          # Alternative method
```

**Discard Working Directory Changes:**
```bash
git restore auth.js             # Restore from staging
git checkout -- auth.js        # Alternative method
```

**Modify Last Commit:**
```bash
git commit --amend -m "New commit message"
git commit --amend --no-edit    # Keep same message
```

#### .gitignore File

**Common Patterns:**
```bash
# .gitignore
# Dependencies
node_modules/
*.log

# Build outputs
dist/
build/
*.min.js

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
temp/
```

**Gitignore Rules:**
```bash
*.log           # Ignore all .log files
!important.log  # Exception: don't ignore this file
temp/           # Ignore entire directory
/config.json    # Ignore only in root directory
**/logs         # Ignore logs directory anywhere
```

#### Commit Message Best Practices

**Conventional Commits Format:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Examples:**
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login validation bug"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
git commit -m "refactor: extract validation logic"
git commit -m "test: add unit tests for auth module"
git commit -m "chore: update dependencies"
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

---

## Week 2: Branching & Collaboration

### Day 1-2: Branching Strategies

#### Understanding Branches

**What is a Branch?**
- Lightweight movable pointer to a commit
- Allows parallel development
- Default branch is usually `main` or `master`

**Branch Visualization:**
```
main:     A---B---C---F
               \     /
feature:        D---E
```

#### Basic Branch Operations

**Create Branch:**
```bash
git branch feature/login           # Create branch
git checkout feature/login         # Switch to branch
git checkout -b feature/login      # Create and switch (shortcut)
git switch -c feature/login        # Modern alternative
```

**List Branches:**
```bash
git branch                         # Local branches
git branch -r                      # Remote branches
git branch -a                      # All branches
git branch -v                      # With last commit info
```

**Switch Branches:**
```bash
git checkout main                  # Switch to main
git switch main                    # Modern alternative
```

**Delete Branches:**
```bash
git branch -d feature/login        # Delete merged branch
git branch -D feature/login        # Force delete
git push origin --delete feature/login  # Delete remote branch
```

#### Branching Workflow Example

```bash
# Start from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/user-profile

# Work on feature
echo "User profile component" > profile.js
git add profile.js
git commit -m "feat: add user profile component"

# Add more commits
echo "Profile validation" >> profile.js
git add profile.js
git commit -m "feat: add profile validation"

# Switch back to main
git checkout main

# Create another feature
git checkout -b feature/dashboard
echo "Dashboard component" > dashboard.js
git add dashboard.js
git commit -m "feat: add dashboard component"
```

#### Merging Branches

**Fast-Forward Merge:**
```bash
# When target branch hasn't changed
git checkout main
git merge feature/login
# Creates linear history
```

**Three-Way Merge:**
```bash
# When both branches have new commits
git checkout main
git merge feature/dashboard
# Creates merge commit
```

**Merge Strategies:**
```bash
git merge --ff-only feature/login     # Only if fast-forward possible
git merge --no-ff feature/login       # Always create merge commit
git merge --squash feature/login      # Squash all commits into one
```

#### Branching Strategies

**1. Git Flow:**
```
main (production)
├── develop (integration)
│   ├── feature/user-auth
│   ├── feature/dashboard
│   └── feature/reports
├── release/v1.2.0
└── hotfix/critical-bug
```

**2. GitHub Flow:**
```
main (production)
├── feature/user-auth
├── feature/dashboard
└── hotfix/bug-fix
```

**3. GitLab Flow:**
```
main → pre-production → production
```

### Day 3-4: Remote Repositories

#### Understanding Remotes

**What is a Remote?**
- Reference to repository on another server
- Enables collaboration
- Common remotes: origin, upstream

**Add Remote:**
```bash
git remote add origin https://github.com/user/repo.git
git remote add upstream https://github.com/original/repo.git
```

**View Remotes:**
```bash
git remote                         # List remote names
git remote -v                      # List with URLs
git remote show origin             # Detailed info
```

**Change Remote URL:**
```bash
git remote set-url origin https://github.com/user/new-repo.git
git remote set-url origin git@github.com:user/repo.git  # Switch to SSH
```

#### Push and Pull Operations

**Push Changes:**
```bash
git push origin main               # Push main branch
git push origin feature/login      # Push feature branch
git push -u origin main            # Set upstream tracking
git push --all origin              # Push all branches
git push --tags origin             # Push all tags
```

**Pull Changes:**
```bash
git pull origin main               # Fetch and merge
git pull --rebase origin main      # Fetch and rebase
git fetch origin                   # Fetch without merging
git fetch --all                    # Fetch all remotes
```

**Tracking Branches:**
```bash
git branch -u origin/main          # Set upstream for current branch
git push -u origin feature/login   # Push and set upstream
git branch -vv                     # Show tracking info
```

#### Collaboration Workflow

**1. Fork and Clone:**
```bash
# Fork repository on GitHub, then:
git clone https://github.com/yourusername/repo.git
cd repo
git remote add upstream https://github.com/original/repo.git
```

**2. Create Feature Branch:**
```bash
git checkout -b feature/new-feature
# Make changes and commits
git push -u origin feature/new-feature
```

**3. Keep Fork Updated:**
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

**4. Create Pull Request:**
- Go to GitHub/GitLab
- Create pull request from your feature branch
- Add description and reviewers

### Day 5-7: Conflict Resolution

#### Understanding Merge Conflicts

**When Conflicts Occur:**
- Same file modified in different branches
- Same lines changed differently
- File deleted in one branch, modified in another

**Conflict Example:**
```bash
# Create conflict scenario
git checkout main
echo "Hello World" > greeting.txt
git add greeting.txt
git commit -m "Add greeting"

git checkout -b feature/spanish
echo "Hola Mundo" > greeting.txt
git add greeting.txt
git commit -m "Add Spanish greeting"

git checkout main
echo "Hello Universe" > greeting.txt
git add greeting.txt
git commit -m "Update greeting"

# Try to merge - conflict occurs
git merge feature/spanish
```

**Conflict Markers:**
```
<<<<<<< HEAD
Hello Universe
=======
Hola Mundo
>>>>>>> feature/spanish
```

#### Resolving Conflicts

**Manual Resolution:**
```bash
# Edit the file to resolve conflict
echo "Hello World - Hola Mundo" > greeting.txt

# Stage resolved file
git add greeting.txt

# Complete merge
git commit -m "Merge feature/spanish - resolve greeting conflict"
```

**Using Merge Tools:**
```bash
git config --global merge.tool vimdiff
git mergetool                      # Launch merge tool
```

**Popular Merge Tools:**
- VS Code (built-in)
- KDiff3
- Meld
- P4Merge
- Beyond Compare

#### Advanced Conflict Resolution

**Abort Merge:**
```bash
git merge --abort                  # Cancel merge process
git reset --hard HEAD              # Reset to before merge
```

**Choose Specific Version:**
```bash
git checkout --ours greeting.txt   # Keep our version
git checkout --theirs greeting.txt # Keep their version
```

**Rebase Conflicts:**
```bash
git rebase main
# Resolve conflicts in each commit
git add resolved-file.txt
git rebase --continue
# Or abort: git rebase --abort
```

#### Preventing Conflicts

**Best Practices:**
1. Pull frequently from main branch
2. Keep feature branches small and short-lived
3. Communicate with team about file changes
4. Use consistent code formatting
5. Avoid working on same files simultaneously

**Pre-merge Checks:**
```bash
# Check what will be merged
git log --oneline main..feature/branch
git diff main...feature/branch

# Test merge without committing
git merge --no-commit --no-ff feature/branch
git merge --abort  # If you don't want to proceed
```

---

## Week 3: Advanced Git Workflows

### Day 1-2: Git Flow Implementation

#### Git Flow Overview

**Branch Types:**
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `release/*`: Release preparation
- `hotfix/*`: Critical fixes

#### Installing Git Flow

```bash
# Ubuntu/Debian
sudo apt install git-flow

# macOS
brew install git-flow-avh

# Windows
# Download from: https://github.com/petervanderdoes/gitflow-avh
```

#### Git Flow Commands

**Initialize Git Flow:**
```bash
git flow init
# Accept defaults or customize branch names
```

**Feature Workflow:**
```bash
# Start feature
git flow feature start user-authentication
# Equivalent to:
# git checkout -b feature/user-authentication develop

# Work on feature (make commits)
echo "Auth module" > auth.js
git add auth.js
git commit -m "feat: add authentication module"

# Finish feature
git flow feature finish user-authentication
# Equivalent to:
# git checkout develop
# git merge --no-ff feature/user-authentication
# git branch -d feature/user-authentication
```

**Release Workflow:**
```bash
# Start release
git flow release start v1.2.0

# Prepare release (version bumps, documentation)
echo "1.2.0" > VERSION
git add VERSION
git commit -m "chore: bump version to 1.2.0"

# Finish release
git flow release finish v1.2.0
# Merges to main and develop, creates tag
```

**Hotfix Workflow:**
```bash
# Start hotfix from main
git flow hotfix start critical-security-fix

# Fix the issue
echo "Security patch" > security.patch
git add security.patch
git commit -m "fix: resolve critical security vulnerability"

# Finish hotfix
git flow hotfix finish critical-security-fix
# Merges to main and develop, creates tag
```

#### GitHub Flow (Simplified)

**Workflow:**
1. Create branch from main
2. Make changes and commits
3. Open pull request
4. Review and discuss
5. Merge to main
6. Deploy

```bash
# GitHub Flow example
git checkout main
git pull origin main
git checkout -b feature/user-dashboard

# Make changes
git add .
git commit -m "feat: add user dashboard"
git push -u origin feature/user-dashboard

# Create pull request on GitHub
# After review and approval, merge via GitHub UI
```

### Day 3-4: Advanced Operations

#### Interactive Rebase

**Purpose:**
- Rewrite commit history
- Squash commits
- Edit commit messages
- Reorder commits

**Interactive Rebase:**
```bash
git rebase -i HEAD~3               # Last 3 commits
git rebase -i abc123               # Since specific commit
```

**Rebase Options:**
```
pick abc123 feat: add login
squash def456 fix: login validation
reword ghi789 feat: add dashboard
edit jkl012 feat: user profile
drop mno345 temp: debug code
```

**Commands:**
- `pick`: Use commit as-is
- `reword`: Change commit message
- `edit`: Stop to amend commit
- `squash`: Combine with previous commit
- `drop`: Remove commit

#### Cherry-Pick

**Purpose:**
- Apply specific commits to current branch
- Useful for hotfixes or selective merging

```bash
# Cherry-pick single commit
git cherry-pick abc123

# Cherry-pick multiple commits
git cherry-pick abc123 def456

# Cherry-pick range
git cherry-pick abc123..def456

# Cherry-pick without committing
git cherry-pick --no-commit abc123
```

#### Stash Operations

**Purpose:**
- Temporarily save uncommitted changes
- Switch branches with clean working directory

```bash
# Stash changes
git stash                          # Stash with default message
git stash save "Work in progress"  # Stash with message
git stash -u                       # Include untracked files

# List stashes
git stash list
# stash@{0}: WIP on main: abc123 Latest commit
# stash@{1}: On feature: def456 Previous stash

# Apply stash
git stash pop                      # Apply and remove latest stash
git stash apply                    # Apply without removing
git stash apply stash@{1}          # Apply specific stash

# Manage stashes
git stash show stash@{0}           # Show stash contents
git stash drop stash@{0}           # Delete specific stash
git stash clear                    # Delete all stashes
```

#### Reset Operations

**Types of Reset:**

**Soft Reset:**
```bash
git reset --soft HEAD~1
# Moves HEAD, keeps staging and working directory
# Use case: Redo last commit
```

**Mixed Reset (default):**
```bash
git reset HEAD~1
git reset --mixed HEAD~1
# Moves HEAD, resets staging, keeps working directory
# Use case: Unstage changes
```

**Hard Reset:**
```bash
git reset --hard HEAD~1
# Moves HEAD, resets staging and working directory
# Use case: Completely undo commits (DANGEROUS)
```

**Reset Examples:**
```bash
# Undo last commit, keep changes staged
git reset --soft HEAD~1

# Unstage all files
git reset HEAD

# Discard all changes and commits
git reset --hard HEAD~3

# Reset to specific commit
git reset --hard abc123
```

### Day 5-7: Git Hooks & Automation

#### Understanding Git Hooks

**What are Git Hooks?**
- Scripts that run automatically on Git events
- Located in `.git/hooks/` directory
- Can be written in any scripting language

**Types of Hooks:**

**Client-side Hooks:**
- `pre-commit`: Before commit is created
- `prepare-commit-msg`: Before commit message editor
- `commit-msg`: After commit message is entered
- `post-commit`: After commit is completed
- `pre-push`: Before push to remote

**Server-side Hooks:**
- `pre-receive`: Before any refs are updated
- `update`: Before each ref is updated
- `post-receive`: After all refs are updated

#### Pre-commit Hook Examples

**Basic Pre-commit Hook:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "Running pre-commit checks..."

# Run tests
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi

# Run linting
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Commit aborted."
    exit 1
fi

echo "Pre-commit checks passed!"
exit 0
```

**Advanced Pre-commit Hook:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Running pre-commit checks...${NC}"

# Check for debugging statements
if grep -r "console.log\|debugger\|TODO" --include="*.js" src/; then
    echo -e "${RED}Found debugging statements or TODOs. Please remove them.${NC}"
    exit 1
fi

# Check file size
large_files=$(find . -type f -size +1M -not -path "./.git/*")
if [ -n "$large_files" ]; then
    echo -e "${RED}Large files detected:${NC}"
    echo "$large_files"
    echo -e "${RED}Please use Git LFS for large files.${NC}"
    exit 1
fi

# Run prettier
npm run format
if [ $? -ne 0 ]; then
    echo -e "${RED}Code formatting failed.${NC}"
    exit 1
fi

# Run tests
npm test
if [ $? -ne 0 ]; then
    echo -e "${RED}Tests failed.${NC}"
    exit 1
fi

echo -e "${GREEN}All pre-commit checks passed!${NC}"
exit 0
```

**Make Hook Executable:**
```bash
chmod +x .git/hooks/pre-commit
```

#### Commit Message Hook

**commit-msg Hook:**
```bash
#!/bin/bash
# .git/hooks/commit-msg

commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'

if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format!"
    echo "Format: type(scope): description"
    echo "Types: feat, fix, docs, style, refactor, test, chore"
    echo "Example: feat(auth): add user login functionality"
    exit 1
fi

# Check commit message length
if [ $(head -n1 "$1" | wc -c) -gt 72 ]; then
    echo "Commit message too long (max 72 characters)"
    exit 1
fi

exit 0
```

#### Pre-push Hook

**pre-push Hook:**
```bash
#!/bin/bash
# .git/hooks/pre-push

protected_branch='main'
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ $protected_branch = $current_branch ]; then
    echo "Direct push to main branch is not allowed"
    echo "Please create a feature branch and submit a pull request"
    exit 1
fi

# Run full test suite before push
echo "Running full test suite..."
npm run test:full
if [ $? -ne 0 ]; then
    echo "Full test suite failed. Push aborted."
    exit 1
fi

exit 0
```

#### Automation with GitHub Actions

**Basic CI Workflow:**
```yaml
# .github/workflows/ci.yml
name: Continuous Integration

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm test
    
    - name: Run build
      run: npm run build
```

#### Husky for Git Hooks Management

**Installation:**
```bash
npm install --save-dev husky
npx husky install
npm set-script prepare "husky install"
```

**Add Hooks:**
```bash
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/pre-push "npm run build"
```

**Package.json Configuration:**
```json
{
  "scripts": {
    "prepare": "husky install",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --write"]
  }
}
```

---

## 🎯 Week 1-3 Assessment Projects

### Week 1 Project: Personal Portfolio Repository

**Requirements:**
1. Create repository with proper structure
2. Implement meaningful commit history
3. Use proper commit message format
4. Include .gitignore file
5. Document project in README.md

### Week 2 Project: Collaborative Development

**Requirements:**
1. Fork existing repository
2. Create feature branches
3. Implement pull request workflow
4. Resolve merge conflicts
5. Maintain clean commit history

### Week 3 Project: Advanced Git Workflow

**Requirements:**
1. Implement Git Flow workflow
2. Set up pre-commit hooks
3. Use interactive rebase
4. Implement automated testing
5. Create release with proper tagging

---

**Next: Module 2 - Containerization with Docker**