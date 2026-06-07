# Git & Version Control Mastery 🔀

## Complete Guide from Basics to Advanced

---

## Table of Contents

1. [Git Fundamentals](#git-fundamentals)
2. [Branching Strategies](#branching-strategies)
3. [Advanced Git Commands](#advanced-git-commands)
4. [Git Workflows](#git-workflows)
5. [Collaboration Best Practices](#collaboration-best-practices)
6. [Resolving Conflicts](#resolving-conflicts)
7. [Git Hooks & Automation](#git-hooks-automation)
8. [Troubleshooting & Recovery](#troubleshooting-recovery)
9. [GitHub/GitLab Features](#github-gitlab-features)
10. [Git Best Practices](#git-best-practices)

---

## Git Fundamentals

### Basic Configuration

```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# Enable color output
git config --global color.ui auto

# View all settings
git config --list

# Edit config file directly
git config --global --edit
```

### Essential Commands

```bash
# Initialize repository
git init

# Clone repository
git clone https://github.com/username/repo.git
git clone git@github.com:username/repo.git  # SSH

# Check status
git status
git status -s  # Short format

# Add files to staging
git add file.txt
git add .                    # All files
git add *.js                 # Pattern matching
git add -p                   # Interactive staging

# Commit changes
git commit -m "Commit message"
git commit -am "Add and commit"  # Add tracked files and commit
git commit --amend               # Modify last commit

# View history
git log
git log --oneline
git log --graph --oneline --all
git log --author="John Doe"
git log --since="2 weeks ago"
git log -p file.txt          # See changes to specific file

# View changes
git diff                     # Unstaged changes
git diff --staged            # Staged changes
git diff HEAD~2 HEAD         # Between commits
git diff branch1..branch2    # Between branches

# Stash changes
git stash
git stash save "Work in progress"
git stash list
git stash pop                # Apply and remove
git stash apply              # Apply but keep
git stash drop stash@{0}
git stash clear
```

---

## Branching Strategies

### Git Flow

```
master (production)
  │
  ├── develop (integration)
  │     │
  │     ├── feature/user-authentication
  │     ├── feature/payment-integration
  │     └── feature/admin-dashboard
  │     │
  │     └── release/v1.2.0
  │           │
  │           └── hotfix/critical-bug
  │
  └── hotfix/security-patch
```

```bash
# Git Flow Commands

# Start a feature
git checkout develop
git checkout -b feature/new-feature

# Finish a feature
git checkout develop
git merge --no-ff feature/new-feature
git branch -d feature/new-feature

# Start a release
git checkout develop
git checkout -b release/v1.2.0
# Make version bump, final fixes

# Finish release
git checkout main
git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Version 1.2.0"
git checkout develop
git merge --no-ff release/v1.2.0
git branch -d release/v1.2.0

# Hotfix
git checkout main
git checkout -b hotfix/critical-bug
# Fix the bug
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.2.1 -m "Hotfix 1.2.1"
git checkout develop
git merge --no-ff hotfix/critical-bug
git branch -d hotfix/critical-bug
```

### GitHub Flow (Simpler)

```
main
  │
  ├── feature/add-user-profile
  ├── fix/button-alignment
  └── docs/update-readme
```

```bash
# Create feature branch
git checkout main
git pull origin main
git checkout -b feature/add-user-profile

# Make changes and commit
git add .
git commit -m "Add user profile page"

# Push to remote
git push -u origin feature/add-user-profile

# Create Pull Request on GitHub
# After review and approval, merge to main
# Delete branch after merge
git checkout main
git pull origin main
git branch -d feature/add-user-profile
```

### Trunk-Based Development

```
main (always deployable)
  │
  ├── short-lived-feature-1 (< 2 days)
  └── short-lived-feature-2 (< 2 days)
```

```bash
# Create short-lived branch
git checkout main
git pull origin main
git checkout -b feature/quick-fix

# Commit frequently
git add .
git commit -m "Work in progress"

# Rebase before merging
git checkout main
git pull origin main
git checkout feature/quick-fix
git rebase main

# Merge to main
git checkout main
git merge feature/quick-fix
git push origin main
```

---

## Advanced Git Commands

### Interactive Rebase

```bash
# Rebase last 3 commits
git rebase -i HEAD~3

# In editor:
# pick abc1234 First commit
# squash def5678 Second commit (combine with previous)
# reword ghi9012 Third commit (change message)
# edit jkl3456 Fourth commit (stop to modify)

# Squash all commits in feature branch
git checkout feature-branch
git rebase -i main
```

### Cherry Pick

```bash
# Apply specific commit from another branch
git cherry-pick abc1234

# Cherry pick multiple commits
git cherry-pick abc1234 def5678

# Cherry pick without committing
git cherry-pick -n abc1234
```

### Reflog (Recover Lost Commits)

```bash
# View all reference changes
git reflog

# Output:
# abc1234 HEAD@{0}: commit: Add feature
# def5678 HEAD@{1}: reset: moving to HEAD~1
# ghi9012 HEAD@{2}: commit: Remove feature

# Recover lost commit
git checkout ghi9012
git checkout -b recovered-branch

# Or reset to previous state
git reset --hard HEAD@{2}
```

### Bisect (Find Bug Introduction)

```bash
# Start bisect session
git bisect start

# Mark current commit as bad
git bisect bad

# Mark known good commit
git bisect good abc1234

# Git will checkout middle commit
# Test and mark as good or bad
git bisect good   # or git bisect bad

# Continue until bug found
# Git will tell you the commit that introduced bug

# End bisect session
git bisect reset
```

### Submodules

```bash
# Add submodule
git submodule add https://github.com/user/repo.git path/to/submodule

# Clone repo with submodules
git clone --recursive https://github.com/user/repo.git

# Or after cloning
git submodule init
git submodule update

# Update submodules
git submodule update --remote

# Remove submodule
git submodule deinit path/to/submodule
git rm path/to/submodule
rm -rf .git/modules/path/to/submodule
```

### Worktrees

```bash
# Create worktree (work on multiple branches simultaneously)
git worktree add ../project-feature feature/new-feature

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../project-feature

# Prune deleted worktrees
git worktree prune
```

---

## Git Workflows

### Feature Branch Workflow

```bash
# 1. Create feature branch
git checkout main
git pull origin main
git checkout -b feature/user-authentication

# 2. Work on feature
echo "// Authentication code" > auth.js
git add auth.js
git commit -m "Add authentication module"

# 3. Keep branch updated
git checkout main
git pull origin main
git checkout feature/user-authentication
git merge main  # or git rebase main

# 4. Push feature branch
git push -u origin feature/user-authentication

# 5. Create Pull Request

# 6. After approval, merge and cleanup
git checkout main
git pull origin main
git branch -d feature/user-authentication
git push origin --delete feature/user-authentication
```

### Forking Workflow

```bash
# 1. Fork repository on GitHub

# 2. Clone your fork
git clone https://github.com/your-username/repo.git
cd repo

# 3. Add upstream remote
git remote add upstream https://github.com/original-owner/repo.git

# 4. Create feature branch
git checkout -b feature/new-feature

# 5. Make changes and commit
git add .
git commit -m "Add new feature"

# 6. Keep fork updated
git fetch upstream
git checkout main
git merge upstream/main

# 7. Rebase feature branch
git checkout feature/new-feature
git rebase main

# 8. Push to your fork
git push origin feature/new-feature

# 9. Create Pull Request to upstream repository
```

---

## Collaboration Best Practices

### Commit Message Convention

```bash
# Format:
# <type>(<scope>): <subject>
#
# <body>
#
# <footer>

# Types:
# feat: New feature
# fix: Bug fix
# docs: Documentation
# style: Formatting
# refactor: Code restructuring
# test: Adding tests
# chore: Maintenance

# Examples:
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): handle null response in user endpoint"
git commit -m "docs(readme): update installation instructions"
git commit -m "refactor(database): optimize query performance"

# Detailed commit message
git commit -m "feat(payment): add Stripe integration

Integrate Stripe payment gateway for processing credit card payments.
- Add Stripe SDK
- Create payment service
- Add payment confirmation email

Closes #123"
```

### Pull Request Template

```markdown
<!-- .github/pull_request_template.md -->

## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally

## Related Issues

Closes #123
```

### Code Review Guidelines

```bash
# Reviewer: Pull the branch
git fetch origin
git checkout feature/new-feature

# Review changes
git log main..feature/new-feature
git diff main...feature/new-feature

# Test locally
npm install
npm test
npm run dev

# Leave comments on GitHub

# Approve or request changes
```

---

## Resolving Conflicts

### Merge Conflicts

```bash
# Scenario: Conflict during merge
git merge feature-branch

# Output:
# Auto-merging file.js
# CONFLICT (content): Merge conflict in file.js
# Automatic merge failed; fix conflicts and then commit the result.

# View conflicts
git status

# Open conflicted file
# <<<<<<< HEAD
# Your changes
# =======
# Their changes
# >>>>>>> feature-branch

# Resolve manually, then:
git add file.js
git commit -m "Resolve merge conflict in file.js"

# Or abort merge
git merge --abort
```

### Rebase Conflicts

```bash
# During rebase
git rebase main

# Conflict occurs
# Fix conflicts, then:
git add fixed-file.js
git rebase --continue

# Skip commit if not needed
git rebase --skip

# Abort rebase
git rebase --abort
```

### Using Merge Tools

```bash
# Set merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Or use built-in tools
git config --global merge.tool vimdiff

# Resolve conflicts with tool
git mergetool

# Available tools: kdiff3, meld, vimdiff, vscode
```

---

## Git Hooks & Automation

### Pre-commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "Running pre-commit checks..."

# Run linter
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix errors before committing."
    exit 1
fi

# Run tests
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix tests before committing."
    exit 1
fi

# Check for console.log
if git diff --cached | grep -E "console\.(log|debug|info)"; then
    echo "❌ Found console statements. Please remove them."
    exit 1
fi

echo "✅ All checks passed!"
exit 0
```

### Pre-push Hook

```bash
#!/bin/bash
# .git/hooks/pre-push

echo "Running pre-push checks..."

# Run full test suite
npm run test:all
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Push aborted."
    exit 1
fi

# Check for WIP commits
if git log --oneline @{u}.. | grep -i "wip\|work in progress"; then
    echo "⚠️  Found WIP commits. Are you sure you want to push? (y/n)"
    read answer
    if [ "$answer" != "y" ]; then
        exit 1
    fi
fi

exit 0
```

### Commit Message Hook

```bash
#!/bin/bash
# .git/hooks/commit-msg

commit_msg=$(cat $1)

# Check commit message format
if ! echo "$commit_msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{10,}"; then
    echo "❌ Invalid commit message format"
    echo "Format: <type>(<scope>): <subject>"
    echo "Example: feat(auth): add login functionality"
    exit 1
fi

exit 0
```

### Using Husky (Recommended)

```bash
# Install Husky
npm install -D husky

# Initialize
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/pre-commit "npm run lint"

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

---

## Troubleshooting & Recovery

### Undo Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

### Undo Specific File

```bash
# Unstage file
git reset HEAD file.txt

# Discard changes
git checkout -- file.txt

# Or in Git 2.23+
git restore file.txt
git restore --staged file.txt
```

### Recover Deleted Branch

```bash
# Find deleted branch commit
git reflog

# Recreate branch
git checkout -b recovered-branch abc1234
```

### Fix Wrong Branch Commits

```bash
# You committed to main instead of feature branch

# 1. Create new branch from current state
git branch feature-branch

# 2. Reset main to before commits
git checkout main
git reset --hard origin/main

# 3. Continue work on feature branch
git checkout feature-branch
```

### Remove File from Git History

```bash
# Remove sensitive file from all history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/sensitive-file.txt" \
  --prune-empty --tag-name-filter cat -- --all

# Or use BFG Repo-Cleaner (faster)
java -jar bfg.jar --delete-files sensitive-file.txt
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
```

### Resolve "Detached HEAD"

```bash
# You're in detached HEAD state

# Create branch from current state
git checkout -b new-branch

# Or go back to a branch
git checkout main
```

---

## GitHub/GitLab Features

### GitHub Actions (CI/CD)

```yaml
# .github/workflows/test.yml
name: Tests

on:
    push:
        branches: [main, develop]
    pull_request:
        branches: [main]

jobs:
    test:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v2

            - name: Setup Node.js
              uses: actions/setup-node@v2
              with:
                  node-version: "18"

            - name: Install dependencies
              run: npm ci

            - name: Run linter
              run: npm run lint

            - name: Run tests
              run: npm test

            - name: Build
              run: npm run build
```

### GitHub Pull Request Labels

```bash
# Add labels to PR
gh pr edit 123 --add-label "bug,high-priority"

# Common labels:
# - bug: Bug fix
# - feature: New feature
# - documentation: Documentation update
# - high-priority: Urgent
# - work-in-progress: Not ready for review
# - needs-review: Ready for review
# - approved: Approved by reviewers
```

### GitLab CI/CD

```yaml
# .gitlab-ci.yml
stages:
    - test
    - build
    - deploy

test:
    stage: test
    script:
        - npm ci
        - npm run lint
        - npm test
    only:
        - merge_requests
        - main

build:
    stage: build
    script:
        - npm run build
    artifacts:
        paths:
            - dist/
    only:
        - main

deploy:
    stage: deploy
    script:
        - ./deploy.sh
    only:
        - main
    when: manual
```

---

## Git Best Practices

### 1. Commit Often, Push Carefully

```bash
# Good: Small, focused commits
git commit -m "feat: add user validation"
git commit -m "feat: add error handling"
git commit -m "test: add user validation tests"

# Bad: Large, unfocused commits
git commit -m "Add user feature with validation, error handling, tests, and documentation"
```

### 2. Write Meaningful Commit Messages

```bash
# Good
git commit -m "fix(auth): prevent token expiration race condition

When multiple requests were made simultaneously, tokens could
expire before validation, causing authentication failures.

Added mutex lock to prevent concurrent token refresh.

Fixes #456"

# Bad
git commit -m "fix stuff"
git commit -m "updates"
git commit -m "asdfasdf"
```

### 3. Keep Branches Short-Lived

```bash
# Good: Feature branch merged within 2-3 days
# Bad: Feature branch open for weeks

# Regularly sync with main
git checkout feature-branch
git fetch origin
git rebase origin/main
```

### 4. Use .gitignore

```bash
# .gitignore

# Dependencies
node_modules/
vendor/

# Environment variables
.env
.env.local

# Build outputs
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Laravel specific
storage/
bootstrap/cache/
public/hot
public/storage
```

### 5. Never Commit Secrets

```bash
# Bad - never do this
git add .env
git commit -m "Add configuration"

# Good - use environment variables
# Add .env to .gitignore
echo ".env" >> .gitignore

# Use .env.example as template
cp .env .env.example
# Remove sensitive values from .env.example
git add .env.example
```

### 6. Use Tags for Releases

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push origin v1.0.0
git push origin --tags

# List tags
git tag -l

# Checkout specific version
git checkout v1.0.0

# Delete tag
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

### 7. Review Before Pushing

```bash
# Review commits before pushing
git log origin/main..HEAD

# Review changes
git diff origin/main..HEAD

# Interactive rebase to clean up
git rebase -i origin/main

# Then push
git push origin feature-branch
```

---

## Git Aliases (Speed Up Your Workflow)

```bash
# Add to ~/.gitconfig or use git config --global alias.name 'command'

[alias]
    # Status
    st = status -s

    # Log
    lg = log --graph --oneline --decorate --all
    ll = log --pretty=format:'%C(yellow)%h%C(reset) - %C(cyan)%an%C(reset) - %C(green)%ar%C(reset) - %s'

    # Commit
    cm = commit -m
    ca = commit -am
    amend = commit --amend --no-edit

    # Branch
    br = branch
    co = checkout
    cob = checkout -b

    # Diff
    df = diff
    dfc = diff --cached

    # Stash
    save = stash save
    pop = stash pop

    # Undo
    undo = reset --soft HEAD~1
    unstage = reset HEAD

    # Remote
    sync = !git fetch origin && git rebase origin/main
    publish = push -u origin HEAD

    # Cleanup
    cleanup = !git branch --merged main | grep -v 'main' | xargs git branch -d
```

### Usage

```bash
git st              # git status -s
git lg              # Pretty log graph
git cm "message"    # Commit with message
git cob new-branch  # Create and checkout branch
git sync            # Fetch and rebase
git cleanup         # Delete merged branches
```

---

## Quick Reference

### Essential Commands

| Command                 | Description           |
| ----------------------- | --------------------- |
| `git init`              | Initialize repository |
| `git clone <url>`       | Clone repository      |
| `git add <file>`        | Stage changes         |
| `git commit -m "msg"`   | Commit changes        |
| `git push`              | Push to remote        |
| `git pull`              | Pull from remote      |
| `git status`            | Check status          |
| `git log`               | View history          |
| `git branch`            | List branches         |
| `git checkout <branch>` | Switch branch         |
| `git merge <branch>`    | Merge branch          |

### Common Scenarios

```bash
# Start new feature
git checkout main
git pull
git checkout -b feature/new-feature

# Save work temporarily
git stash
git checkout other-branch
git stash pop

# Update feature branch
git checkout feature-branch
git rebase main

# Fix mistake in last commit
git commit --amend

# Undo uncommitted changes
git checkout -- file.txt

# Create release tag
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin v1.0.0
```

---

**Master these Git concepts and you'll collaborate effectively with any team! 🚀**
