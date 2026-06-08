# 🔧 Git & Version Control - Complete Theory

## 📋 What is Version Control?

Version control is a system that records changes to files over time so you can recall specific versions later.

### Benefits of Version Control
- **Track Changes**: Complete history of modifications
- **Collaboration**: Multiple developers working together
- **Backup**: Distributed copies of code
- **Branching**: Parallel development streams
- **Rollback**: Revert to previous versions

## 🎯 Git Fundamentals

### Git Architecture
```
Working Directory → Staging Area → Local Repository → Remote Repository
     (add)           (commit)         (push)
```

### Three States of Git
1. **Modified**: Changed but not staged
2. **Staged**: Marked for next commit
3. **Committed**: Stored in local database

### Basic Git Commands
```bash
# Repository setup
git init
git clone <url>

# Basic workflow
git add <file>
git commit -m "message"
git push origin main
git pull origin main

# Status and history
git status
git log
git diff
```

## 🌿 Branching Strategies

### Git Flow
- **main**: Production-ready code
- **develop**: Integration branch
- **feature/***: New features
- **release/***: Release preparation
- **hotfix/***: Critical fixes

### GitHub Flow
- **main**: Always deployable
- **feature branches**: Short-lived
- **Pull requests**: Code review
- **Deploy**: From main branch

### Branch Commands
```bash
# Create and switch
git checkout -b feature/new-feature
git switch -c feature/new-feature

# Merge branches
git checkout main
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

## 🤝 Collaboration Workflows

### Centralized Workflow
- Single main branch
- Direct commits to main
- Simple but limited

### Feature Branch Workflow
- Feature branches for development
- Pull requests for integration
- Code review process

### Forking Workflow
- Fork repository
- Work in personal fork
- Submit pull requests
- Common in open source

## 🔧 Advanced Git Operations

### Rebasing
```bash
# Interactive rebase
git rebase -i HEAD~3

# Rebase onto branch
git rebase main
```

### Cherry-picking
```bash
# Apply specific commit
git cherry-pick <commit-hash>
```

### Stashing
```bash
# Save work temporarily
git stash
git stash pop
git stash list
```

### Reset Operations
```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (unstage changes)
git reset HEAD~1

# Hard reset (discard changes)
git reset --hard HEAD~1
```

## 🔒 Git Best Practices

### Commit Messages
- Use conventional commits format
- Be descriptive and concise
- Include issue references

### Branch Naming
- Use descriptive names
- Include issue numbers
- Follow team conventions

### Code Reviews
- Review all changes
- Provide constructive feedback
- Ensure code quality

### Security
- Never commit secrets
- Use .gitignore properly
- Sign commits when required