---
slug: /ai-engineering-placement/02-git-branching
title: "02 Git Branching"
sidebar_label: "02 Git Branching"
sidebar_position: 54
---
<!-- Clear Language: Keep sentences under 50 words -->
# Git Branching

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Create, list, rename, and delete branches effectively |
| LO2 | Merge branches using fast-forward and three-way merge strategies |
| LO3 | Rebase branches to maintain linear history and resolve conflicts |
| LO4 | Apply GitFlow and trunk-based branching strategies in real projects |
| LO5 | Handle merge conflicts confidently with systematic resolution workflows |
| LO6 | Decide when to use merge vs rebase based on team context |

## Introduction

Branching strategies like GitFlow and trunk-based development enable teams to work in parallel without conflicts. Understanding when to create branches, how to merge vs rebase, and conflict resolution is crucial for team productivity.

## Prerequisites

- Git basics (init, add, commit)

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 02.1 | Branch Basics | Create, list, switch, delete branches |
| 02.2 | Merging | Fast-forward, three-way merge, conflict resolution |
| 02.3 | Rebasing | Linear history, interactive rebase, golden rule |
| 02.4 | GitFlow | Feature, develop, release, hotfix branches |
| 02.5 | Trunk-Based | Short-lived branches, feature flags |
| 02.6 | Interview Prep | Common branching scenarios and questions |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Branching] --> B[Create & Switch]
    B --> C[Merge]
    C --> D[Rebase]
    D --> E[GitFlow]
    E --> F[Trunk-Based]
    F --> G[Conflict Resolution]
```text

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

### 02.1 Branch Basics

A branch in Git is a lightweight, movable pointer to a commit. The default branch is typically `main` (or `master`). HEAD points to the current branch.

**Creating and listing branches:**

```bash

## List local branches (* = current)
git branch

## List all branches (local + remote)
git branch -a

## Create a new branch
git branch feature/login

## Create a branch from a specific commit
git branch hotfix/bug-123 abc1234

## Rename current branch
git branch -m old-name new-name

## Delete a branch (safe — only if fully merged)
git branch -d feature/old

## Force delete a branch (even if unmerged)
git branch -D feature/abandoned
```text

**Switching branches:**

```bash

## Switch to an existing branch
git switch feature/login

## Create and switch in one command
git switch -c feature/signup

## Legacy syntax (still works)
git checkout feature/login

## Create and switch (legacy)
git checkout -b feature/signup
```text

**What happens when you switch branches:**

Git updates the files in your working directory to match the snapshot of the target branch's latest commit. If you have uncommitted changes, Git may refuse to switch or carry them over.

```mermaid
flowchart LR
    A[main: commit C] --> B[feature: commit D]
    B --> C[Switch to main]
    C --> D[Files revert to commit C state]
```text


## Overview

### 02.2 Merging

Merging brings changes from one branch into another. Git supports two main strategies: fast-forward and three-way merge.

**Fast-forward merge:**

```bash

## Switch to the branch you want to merge INTO
git switch main

## Merge feature branch
git merge feature/login

## If the feature branch is ahead of main with no divergence,

## Git simply moves the main pointer forward (fast-forward)
```text

```mermaid
flowchart LR
    subgraph Before
    A[main: C] --> B[feature: D]
    end
    subgraph After
    C[main + feature: D]
    end
```text

**Three-way merge:**

```bash

## When both branches have diverged, Git creates a merge commit
git switch main
git merge feature/login

## Preserve branch history (no fast-forward)
git merge --no-ff feature/login

## Always creates a merge commit — useful for feature branch history
```text

```mermaid
flowchart TD
    A[main: C] --> C[merge commit: E]
    B[feature: D] --> C
    C --> F[main points to E]
```text

**Merge strategies:**

| Strategy | When to Use | Command |
|----------|-------------|---------|
| Fast-forward | Feature branch only ahead of main | `git merge feature` |
| Three-way | Both branches diverged | `git merge feature` (auto) |
| No fast-forward | Always create merge commit | `git merge --no-ff feature` |
| Squash | Clean up WIP commits | `git merge --squash feature` |

**Squash merge:**

```bash

## Combine all feature commits into one commit on main
git switch main
git merge --squash feature/login

## Review the squashed changes
git diff --staged

## Commit with a clean message
git commit -m "Add user login with OAuth2"
```text


## Overview

### 02.3 Rebasing

Rebase replays commits from one branch onto another, creating a linear history. Unlike merge, it rewrites commit hashes.

**Basic rebase:**

```bash

## Switch to your feature branch
git switch feature/login

## Rebase onto main
git rebase main

## This replays all feature commits on top of main's latest commit
```text

```mermaid
flowchart TD
    subgraph Before
    A[main: C] --> B[feature: D, E]
    end
    subgraph After
    C[main: C] --> D[feature: D', E']
    end
```text

**Interactive rebase (cleaning up history):**

```bash

## Rebase the last 5 commits
git rebase -i HEAD~5

## This opens an editor with actions:
pick abc1234 Add login form
pick def5678 Fix typo in login
pick ghi9012 Add password validation
pick jkl3456 Fix validation regex
pick mno7890 Add remember me checkbox
```text

**Interactive rebase commands:**

```text
pick   = keep commit as-is
reword = keep commit, edit message
edit   = pause to amend commit
squash = combine with previous commit, keep both messages
fixup  = combine with previous commit, discard this message
drop   = remove commit entirely
```text

Example — squashing fix-up commits:

```text
pick abc1234 Add login form
fixup def5678 Fix typo in login
fixup ghi9012 Fix validation regex
pick jkl3456 Add password validation
pick mno7890 Add remember me checkbox
```text

This produces 3 clean commits instead of 5 messy ones.

**The golden rule of rebase:**

> Never rebase commits that have been pushed to a shared/remote branch.

Rebase rewrites commit hashes. If others have based work on those commits, rewriting them creates confusion and duplicate commits.

**Resolving rebase conflicts:**

```bash

## During rebase, conflicts may occur

## Fix the conflicted files, then:

## Stage resolved files
git add resolved-file.ts

## Continue the rebase
git rebase --continue

## Skip the current commit (if you want to drop it)
git rebase --skip

## Abort and return to pre-rebase state
git rebase --abort
```text


## Overview

### 02.4 GitFlow

GitFlow is a structured branching model designed around release cycles. It uses five branch types.

**GitFlow branch structure:**

```mermaid
flowchart TD
    main[main - production] --> develop[develop - integration]
    develop --> feature1[feature/login]
    develop --> feature2[feature/signup]
    develop --> release[release/v1.2]
    release --> main
    main --> hotfix[hotfix/crash-fix]
    hotfix --> main
    hotfix --> develop
```text

**Branch types and roles:**

| Branch | Purpose | Merges Into | Lifetime |
|--------|---------|-------------|----------|
| `main` | Production code | — | Permanent |
| `develop` | Integration branch | `main` via release | Permanent |
| `feature/*` | New features | `develop` | Short-lived |
| `release/*` | Release prep | `main` + `develop` | Short-lived |
| `hotfix/*` | Production fixes | `main` + `develop` | Short-lived |

**GitFlow workflow in practice:**

```bash

## Start a new feature
git switch develop
git switch -c feature/user-profile

## Work on feature...
git add .
git commit -m "feat(profile): add user profile page"

## Finish feature — merge into develop
git switch develop
git merge --no-ff feature/user-profile
git branch -d feature/user-profile

## Start a release
git switch develop
git switch -c release/v1.2.0

## Bump version, final fixes...
git commit -m "chore(release): bump version to 1.2.0"

## Merge release into main
git switch main
git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Release v1.2.0"

## Merge release back into develop
git switch develop
git merge --no-ff release/v1.2.0
git branch -d release/v1.2.0

## Hotfix from production
git switch main
git switch -c hotfix/crash-fix

## Fix the bug...
git commit -m "fix(auth): prevent crash on invalid token"

## Merge hotfix into main AND develop
git switch main
git merge --no-ff hotfix/crash-fix
git switch develop
git merge --no-ff hotfix/crash-fix
git branch -d hotfix/crash-fix
```text


## Overview

### 02.5 Trunk-Based Development

Trunk-based development uses a single main branch (trunk) with very short-lived feature branches. Features are toggled with feature flags rather than long-lived branches.

**Key principles:**

- Branches live hours or days, not weeks
- All developers commit to main frequently (multiple times per day)
- Feature flags gate incomplete features in production
- CI/CD runs on every commit to main

```bash

## Short-lived branch workflow
git switch main
git pull
git switch -c fix/memory-leak

## Quick fix, commit, push
git add -A
git commit -m "fix: resolve memory leak in websocket handler"
git push origin fix/memory-leak

## Create PR, get reviewed, merge within hours

## Delete branch immediately after merge
git branch -d fix/memory-leak
```text

**Feature flags example:**

```typescript
// Feature flag in code — feature exists but is hidden
if (featureFlags.isEnabled('new-checkout')) {
  return <NewCheckoutFlow />;
}
return <LegacyCheckoutFlow />;
```text

**GitFlow vs Trunk-Based comparison:**

| Aspect | GitFlow | Trunk-Based |
|--------|---------|-------------|
| Branch lifetime | Days to weeks | Hours to days |
| Best for | Release cycles, versioned software | Continuous deployment |
| Complexity | High (5 branch types) | Low (main + short branches) |
| Merge conflicts | Frequent (long branches) | Rare (short branches) |
| Feature flags | Optional | Essential |
| Team size | Large teams | Small to large teams |


## Overview

### 02.6 Handling Merge Conflicts

Conflicts occur when two branches modify the same lines. Git marks the conflicting sections for manual resolution.

**Conflict markers:**

```text
<<<<<<< HEAD
const timeout = 3000;
=======
const timeout = 5000;
>>>>>>> feature/new-timeout
```text

- `<<<<<<< HEAD` — your current branch's version
- `=======` — separator
- `>>>>>>> feature/new-timeout` — incoming branch's version

**Resolution workflow:**

```bash

## Attempt merge
git switch main
git merge feature/new-timeout

## CONFLICT (content): Merge conflict in config.ts

## Check which files have conflicts
git status

## Open and resolve conflicts in your editor

## After resolving, stage the files
git add config.ts

## Complete the merge
git commit -m "Merge feature/new-timeout, resolve timeout conflict"

## If things go wrong, abort
git merge --abort
```text

**Using a merge tool:**

```bash

## Configure a merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

## Launch the merge tool
git mergetool

## After resolving, mark as resolved
git add resolved-file.ts
git commit
```text

## Summary

- Branches are lightweight pointers to commits — cheap to create and delete
- `git switch -c` creates and switches; `git branch -d` deletes merged branches
- Fast-forward merge moves the pointer forward; three-way merge creates a merge commit
- `git merge --squash` combines all branch commits into one clean commit
- Rebase replays commits for linear history — never rebase shared/pushed commits
- Interactive rebase (`git rebase -i`) lets you squash, reorder, and edit commits
- GitFlow uses 5 branch types for release-based projects
- Trunk-based development uses short-lived branches with feature flags
- Conflict resolution: edit files, `git add`, then `git commit` to finish
- Always run `git pull --rebase` before pushing to keep history clean

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| New feature | `git switch -c feature/name` from develop | Working directly on main |
| Clean up commits | `git rebase -i` before pushing | Pushing WIP commits |
| Merging to main | `git merge --no-ff` for traceability | Forgetting merge commits |
| Long-lived branch | Rebase frequently onto develop | Letting branches diverge far |
| Conflict resolution | Resolve carefully, test, then commit | Accepting both sides blindly |
| After merge | Delete the feature branch | Leaving stale branches |

## Interview Q&A

<details class="tp-qa-card" data-qid="git02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between git merge and git rebase?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Merge</strong> creates a merge commit that combines both branch histories, preserving the full history. <strong>Rebase</strong> replays commits from one branch onto another, creating a linear history but rewriting commit hashes. Use merge for shared/public branches (preserves history) and rebase for local/private branches (clean linear history).</p><pre><code># Merge: preserves history
git switch main
git merge --no-ff feature

## Rebase: linear history
git switch feature
git rebase main</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: When would you use --squash merge?
  </summary>
  <div class="tp-qa-answer">
<p>Use squash merge when a feature branch has many small WIP commits ("fix typo", "wip", "trying something") and you want a single clean commit on the target branch. This keeps the main branch history clean. It loses the individual commit history of the branch but.
is ideal for messy development branches.</p><pre><code>git switch main
git merge --squash feature/messy-branch
git commit -m "feat: add complete user authentication"</code></pre>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Explain the golden rule of rebasing and why it matters.
  </summary>
  <div class="tp-qa-answer">
<p>"Never rebase commits that have been pushed to a shared branch." Rebase rewrites commit hashes. If a teammate has pulled your old commits and.
built work on top of them, rebasing creates new hashes. Their copy now points to different commits, causing duplicates, confusion, and.
potential data loss. Rebase only local, unpushed commits.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Describe GitFlow. What are the five branch types?
  </summary>
  <div class="tp-qa-answer">
    <p>GitFlow is a branching model for release-based projects with five branch types:</p>
    <p><strong>main</strong> — production-ready code, only receives merges from release/hotfix branches.</p>
    <p><strong>develop</strong> — integration branch where features are merged for testing.</p>
    <p><strong>feature/*</strong> — new features branched from develop, merged back when complete.</p>
    <p><strong>release/*</strong> — release preparation (version bumps, final fixes), merged into both main and develop.</p>
    <p><strong>hotfix/*</strong> — urgent production fixes, merged into both main and develop.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you resolve a merge conflict?
  </summary>
  <div class="tp-qa-answer">
<p>1) Run the merge and identify conflicted files with <code>git status</code>. 2) Open each file and find conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>,.
<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>). 3) Edit to keep the correct code, removing all markers. 4) Stage resolved files with <code>git add</code>. 5) Complete with <code>git commit</code> (for.
merge) or <code>git rebase --continue</code> (for rebase). Use <code>git merge --abort</code> or <code>git rebase --abort</code> to cancel if needed.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does `git checkout -b feature/login` do?

a) Switches to an existing branch called feature/login
b) Creates a new branch and switches to it
c) Creates a branch from the last commit
d) Both b and c

<details class="tp-qa-card" data-qid="git02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d</strong></p><p><code>git checkout -b</code> (or <code>git switch -c</code>) creates a new branch from the current HEAD commit and switches to it immediately. The new branch starts at the same commit as your current branch.</p></div></details>

**Q2**: Which command deletes a branch that has already been merged?

a) git branch -D feature/old
b) git branch -d feature/old
c) git branch -r feature/old
d) git branch --delete feature/old

<details class="tp-qa-card" data-qid="git02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>git branch -d</code> safely deletes a branch only if it has been fully merged. <code>-D</code> (uppercase) force-deletes even if unmerged. Both b and d work since <code>--delete</code> is the long form of <code>-d</code>.</p></div></details>

**Q3**: What is the key difference between a fast-forward merge and a three-way merge?

a) Fast-forward creates a merge commit; three-way doesn't
b) Fast-forward requires no merge commit; three-way creates one
c) Three-way is faster than fast-forward
d) Fast-forward only works on main

<details class="tp-qa-card" data-qid="git02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>Fast-forward simply moves the branch pointer forward when the target branch is ahead with no divergence — no merge commit is created. Three-way merge is used when both branches have diverged and creates a new merge commit combining both histories.</p></div></details>

**Q4**: When should you NOT use git rebase?

a) When your feature branch has unpushed commits
b) When commits have been pushed to a shared branch
c) When you want linear history
d) When cleaning up WIP commits

<details class="tp-qa-card" data-qid="git02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>Never rebase commits that have been pushed to a shared branch. Rebase rewrites commit hashes, which breaks the history for anyone who has pulled those commits. Only rebase local, unpushed commits.</p></div></details>

**Q5**: In GitFlow, which branch receives merges from both `release/*` and `hotfix/*` branches?

a) develop
b) main
c) feature
d) staging

<details class="tp-qa-card" data-qid="git02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>main</code> receives merges from both release and hotfix branches since it represents production code. Release and hotfix branches also merge back into develop to keep it synchronized.</p></div></details>

## Practical Tips

- Use descriptive branch names: `feature/`, `bugfix/`, `hotfix/`, `chore/`
- Keep branches short-lived — rebase onto develop daily if the branch lives long
- Use `git merge --no-ff` to preserve branch history in merge commits
- Before creating a PR, rebase onto target: `git rebase main`
- Delete branches immediately after merging: `git branch -d branch-name`
- Use `git branch -vv` to see which branches track which remote branches

## Exercises

**Easy** — Create a feature branch, make 3 commits on it, switch back to main, and merge it. Verify the log shows the correct history.

**Medium** — Create a merge conflict: edit the same line on two branches, merge, resolve the conflict, and complete the merge. Document each step.

**Medium** — Use `git cherry-pick` to apply a single commit from one branch to another. Then use `git revert` to undo that change.

**Hard** — Rebase a feature branch onto main, encounter and resolve conflicts during rebase, then use `git rebase --continue` to finish. Verify the linear history with `git log --oneline --graph`.

---


## Common Mistakes

1. Not deleting merged branches
2. Rebasing shared branches
3. Not writing meaningful branch names
4. Forgetting to resolve merge conflicts properly
5. Not using pull requests for code review

## Revision Notes

- Branch: isolated development line
- Merge: preserves history, creates merge commit
- Rebase: linear history, cleaner log
- GitFlow: main, develop, feature, release, hotfix
- Trunk-based: single main branch, short-lived feature branches

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
- [ ] Have questions ready about how the company uses git linux cli> **Next**: [03 Git Workflow →](03-git-workflow.md)


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

**Q: How long does it take to master git branching?
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

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of git branching helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding git branching at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of git branching like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply git branching concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of git branching?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply git branching in real systems?
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

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Git, Linux & CLI?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Git, Linux & CLI, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
