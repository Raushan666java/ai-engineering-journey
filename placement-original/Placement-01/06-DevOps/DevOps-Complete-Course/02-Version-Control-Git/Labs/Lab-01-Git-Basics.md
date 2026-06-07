# 🧪 Lab 01: Git Basics

## 🎯 Objective
Master fundamental Git operations and workflows.

## 📋 Prerequisites
- Git installed and configured
- Text editor or IDE
- Terminal/Command prompt

## 🛠️ Lab Exercises

### Exercise 1: Repository Setup
```bash
# Create new directory
mkdir git-lab-project
cd git-lab-project

# Initialize Git repository
git init

# Configure user (if not done globally)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Check configuration
git config --list
```

### Exercise 2: Basic Workflow
```bash
# Create files
echo "# Git Lab Project" > README.md
echo "console.log('Hello Git!');" > app.js
echo "node_modules/" > .gitignore

# Check status
git status

# Stage files
git add README.md
git add app.js .gitignore

# Commit changes
git commit -m "Initial commit: Add README, app.js, and .gitignore"

# View history
git log --oneline
```

### Exercise 3: Branching and Merging
```bash
# Create feature branch
git checkout -b feature/user-login

# Make changes
echo "function login() { return true; }" >> app.js
git add app.js
git commit -m "feat: add login function"

# Switch to main
git checkout main

# Merge feature
git merge feature/user-login

# Delete feature branch
git branch -d feature/user-login
```

### Exercise 4: Remote Repository
```bash
# Add remote (replace with your repository URL)
git remote add origin https://github.com/username/git-lab-project.git

# Push to remote
git push -u origin main

# Clone repository (in different directory)
cd ..
git clone https://github.com/username/git-lab-project.git cloned-project
```

### Exercise 5: Conflict Resolution
```bash
# Create conflicting changes
git checkout -b feature/conflict-demo
echo "Modified in feature branch" >> README.md
git add README.md
git commit -m "Modify README in feature branch"

git checkout main
echo "Modified in main branch" >> README.md
git add README.md
git commit -m "Modify README in main branch"

# Attempt merge (will create conflict)
git merge feature/conflict-demo

# Resolve conflict manually in README.md
# Then stage and commit
git add README.md
git commit -m "Resolve merge conflict in README.md"
```

## ✅ Success Criteria
- [ ] Repository initialized and configured
- [ ] Files staged and committed successfully
- [ ] Branches created, merged, and deleted
- [ ] Remote repository connected and synced
- [ ] Merge conflicts resolved properly

## 🎯 Challenge Tasks
1. Create a `.gitignore` file for a Node.js project
2. Use interactive rebase to squash commits
3. Set up Git hooks for automated checks
4. Practice cherry-picking specific commits