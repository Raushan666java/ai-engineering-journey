---
id: 06-networking-and-security
slug: /ai-engineering-placement/04-git-linux-cli/06-networking-and-security
title: "DevOps Automation"
sidebar_label: "DevOps Automation"
sidebar_position: 58
---
<!-- Clear Language: Keep sentences under 50 words -->
# DevOps Automation

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand CI/CD principles and how they accelerate development |
| LO2 | Create GitHub Actions workflows for building, testing, and deploying |
| LO3 | Set up pre-commit hooks to enforce code quality before commits |
| LO4 | Configure automated testing and linting in CI pipelines |
| LO5 | Implement deployment automation with environments and secrets |
| LO6 | Apply DevOps best practices for secure, reliable automation |

## Introduction

DevOps automation — CI/CD, GitHub Actions, pre-commit hooks — ensures code quality and rapid deployment. AI engineers use these to automate model training, testing, and deployment pipelines.

## Prerequisites

- Git basics
- Linux command line

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 06.1 | CI/CD Fundamentals | Continuous integration, delivery, deployment |
| 06.2 | GitHub Actions | Workflows, jobs, steps, actions marketplace |
| 06.3 | Pre-Commit Hooks | Local quality gates, linting, formatting |
| 06.4 | Automated Testing | Unit, integration, end-to-end in CI |
| 06.5 | Deployment Automation | Environments, secrets, rollback strategies |
| 06.6 | Security & Best Practices | Supply chain security, secrets management |

## Chapter Roadmap

```mermaid
flowchart LR
    A[DevOps Automation] --> B[CI/CD Principles]
    B --> C[GitHub Actions]
    C --> D[Pre-Commit Hooks]
    D --> E[Automated Testing]
    E --> F[Deployment]
    F --> G[Security]
```text

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

### 06.1 CI/CD Fundamentals

CI/CD automates the path from code change to production deployment, reducing manual errors and accelerating delivery.

**The CI/CD pipeline:**

```mermaid
flowchart LR
    A[Code Commit] --> B[Build]
    B --> C[Test]
    C --> D[Scan]
    D --> E[Deploy Staging]
    E --> F[Manual Approval]
    F --> G[Deploy Production]
```text

| Stage | What Happens | Tools |
|-------|-------------|-------|
| **Continuous Integration** | Code is built, tested, and validated on every push | GitHub Actions, Jenkins |
| **Continuous Delivery** | Artifacts are automatically staged for release | ArgoCD, Spinnaker |
| **Continuous Deployment** | Every passing change deploys to production | Kubernetes, Terraform |

**Key CI/CD principles:**

- **Fail fast**: Run the fastest checks first (lint → type-check → unit tests → integration)
- **Reproducibility**: Every build uses the same dependencies and environment
- **Immutability**: Build artifacts are never modified; promote through environments
- **Trunk-based development**: Short-lived branches, frequent merges to main
- **Fast feedback**: Developers should know within minutes if their change is broken

### 06.2 GitHub Actions

GitHub Actions is GitHub's built-in CI/CD platform. Workflows run in response to events (push, PR, schedule) using YAML configuration.

**Workflow structure:**

```yaml


## Examples

### Basic Example

```python

## Basic networking and security example
def example():
    """Demonstrate networking and security"""
    result = "Hello, networking and security!"
    print(result)
    return result

example()
```text

### Expected Output

```text
Hello, networking and security!
```text

## .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run Prettier check
        run: npm run format:check

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test

      - name: Run integration tests
        run: npm run test:integration

      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}

  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install and build
        run: |
          npm ci
          npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: build-output
          path: dist/
```text

**Key workflow concepts:**

```yaml

## Triggers
on:
  push:           # When code is pushed
  pull_request:   # When PR is opened/updated
  schedule:       # Cron schedule
    - cron: '0 2 * * 1'  # Every Monday at 2 AM
  workflow_dispatch: # Manual trigger

## Matrix strategy — test across multiple versions
jobs:
  test:
    strategy:
      matrix:
        node-version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

## Conditional steps
steps:
  - name: Deploy
    if: github.ref == 'refs/heads/main'
    run: npm run deploy

## Caching dependencies
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```text

**Reusable workflows:**

```yaml

## .github/workflows/reusable-build.yml
name: Reusable Build
on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm ci && npm run build

## Caller workflow
jobs:
  build:
    uses: ./.github/workflows/reusable-build.yml
    with:
      node-version: '20'
```text

**Complete CI/CD pipeline with deploy:**

```yaml
name: Full Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

  deploy-staging:
    if: github.ref == 'refs/heads/main'
    needs: ci
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to staging
        run: |
          echo "Deploying to staging..."
          # Deploy commands here
        env:
          DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://app.example.com
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
        env:
          DEPLOY_KEY: ${{ secrets.PRODUCTION_DEPLOY_KEY }}
```text


## Overview

### 06.3 Pre-Commit Hooks

Pre-commit hooks run automatically before each `git commit`, catching issues before they enter the codebase.

**Using the pre-commit framework:**

```bash

## Install pre-commit
pip install pre-commit

## Create .pre-commit-config.yaml

## Install hooks
pre-commit install

## Run against all files
pre-commit run --all-files
```text

**.pre-commit-config.yaml:**

```yaml
repos:
  # General file checks
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-json
      - id: check-added-large-files
        args: ['--maxkb=500']
      - id: check-merge-conflict
      - id: detect-private-key

  # Python
  - repo: https://github.com/psf/black
    rev: 24.1.0
    hooks:
      - id: black

  - repo: https://github.com/pycqa/isort
    rev: 5.13.0
    hooks:
      - id: isort

  - repo: https://github.com/pycqa/flake8
    rev: 7.0.0
    hooks:
      - id: flake8

  # JavaScript/TypeScript
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v8.56.0
    hooks:
      - id: eslint
        files: \.(js|ts|tsx)$

  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: v3.1.0
    hooks:
      - id: prettier
        types_or: [javascript, typescript, json, css]

  # Security
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks
```text

**Custom pre-commit hooks:**

```yaml

## .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: commit-message
        name: Check commit message format
        language: system
        entry: bash -c 'msg=$(cat "$1"); if ! echo "$msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,72}$"; then echo "Invalid commit message. Use: type(scope): description"; exit 1; fi'
        args: [COMMIT_MSG]
        stages: [commit-msg]

      - id: typecheck
        name: TypeScript type check
        language: system
        entry: npx tsc --noEmit
        files: \.(ts|tsx)$
        pass_filenames: false

      - id: test-changed
        name: Run tests for changed files
        language: system
        entry: bash -c 'changed=$(git diff --cached --name-only --diff-filter=ACM | grep -E "\.test\.(ts|tsx)$" | head -1); if [ -n "$changed" ]; then npm test -- --changedSince=HEAD; fi'
        pass_filenames: false
```text

**Husky (JavaScript projects):**

```bash

## Install husky
npm install husky --save-dev
npx husky init

## Add pre-commit hook
echo "npm run lint && npm run test" > .husky/pre-commit

## Add commit-msg hook
echo "npx commitlint --edit" > .husky/commit-msg
```text

**commitlint configuration:**

```javascript
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor',
      'test', 'chore', 'perf', 'ci', 'build'
    ]],
    'subject-max-length': [2, 'always', 72],
  },
};
```text


## Overview

### 06.4 Automated Testing in CI

**Testing strategy for CI:**

```mermaid
flowchart TD
    A[Commit] --> B[Lint + Format]
    B --> C[Unit Tests]
    C --> D[Integration Tests]
    D --> E[E2E Tests]
    E --> F[Performance Tests]
    F --> G[Security Scan]
    G --> H[Deploy]
```text

**GitHub Actions test workflow:**

```yaml
name: Tests
on: [push, pull_request]

jobs:
  unit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run test:unit -- --coverage
      - uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/

  integration:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
          POSTGRES_DB: testdb
        ports: ['5432:5432']
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7
        ports: ['6379:6379']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/testdb
          REDIS_URL: redis://localhost:6379
```text

**Test reporting:**

```yaml

## Publish test results
- uses: dorny/test-reporter@v1
  if: always()
  with:
    name: Test Results
    path: 'test-results/**/*.xml'
    reporter: jest-junit

## Code coverage with threshold
- name: Check coverage
  run: |
    npx jest --coverage --coverageThreshold='{"global":{"lines":80,"functions":80}}'
```text


## Overview

### 06.5 Deployment Automation

**Environment protection rules:**

```yaml

## GitHub Settings → Environments → production

## Configure:

## - Required reviewers

## - Wait timer (e.g., 5 minutes)

## - Deployment branches (only main)

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://app.example.com
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: ./deploy.sh
        env:
          API_KEY: ${{ secrets.API_KEY }}
```text

**Secrets management:**

```bash

## GitHub Secrets (Settings → Secrets → Actions)

## Store: API keys, deploy tokens, database URLs

## Reference in workflows: ${{ secrets.SECRET_NAME }}

## ⚠️ Never do this:
echo ${{ secrets.MY_SECRET }}  # Visible in logs

## ✅ Use env to mask secrets:
- run: deploy.sh
  env:
    API_KEY: ${{ secrets.API_KEY }}
```text

**Blue-green deployment pattern:**

```yaml
deploy:
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to green environment
      run: |
        # Deploy new version to green
        ./deploy.sh green

    - name: Run smoke tests
      run: |
        # Test green environment
        curl -f https://green.example.com/health

    - name: Switch traffic to green
      run: |
        # Update load balancer to point to green
        ./switch-traffic.sh green

    - name: Keep blue as rollback
      run: |
        # Blue remains available for instant rollback
        echo "Blue available at blue.example.com"
```text

**Rollback strategy:**

```yaml
deploy:
  steps:
    - name: Deploy
      id: deploy
      run: |
        # Save current version for rollback
        CURRENT=$(kubectl get deployment app -o jsonpath='{.spec.template.spec.containers[0].image}')
        echo "previous_version=$CURRENT" >> $GITHUB_OUTPUT
        # Deploy new version
        kubectl set image deployment/app app=myapp:${{ github.sha }}

    - name: Verify deployment
      run: |
        kubectl rollout status deployment/app --timeout=300s

    - name: Rollback on failure
      if: failure()
      run: |
        kubectl rollout undo deployment/app
        echo "Rolled back to ${{ steps.deploy.outputs.previous_version }}"
```text


## Overview

### 06.6 Security & Best Practices

**GitHub Actions security:**

```yaml

## Pin actions to specific commits (not tags)
- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11  # v4.1.1

## Use minimal permissions
permissions:
  contents: read
  pull-requests: write
  packages: write

## Avoid script injection
- run: echo "Processing ${{ github.event.issue.title }}"
  # DANGEROUS if title contains shell commands
  # Use env instead:
- run: echo "Processing $ISSUE_TITLE"
  env:
    ISSUE_TITLE: ${{ github.event.issue.title }}

## Don't upload artifacts from PRs from forks
- uses: actions/upload-artifact@v4
  if: github.event_name != 'pull_request'
```text

**Supply chain security:**

```yaml

## Scan for vulnerabilities
- uses: github/codeql-action/analyze@v3
  with:
    languages: javascript

## Check for secrets in code
- uses: gitleaks/gitleaks-action@v2
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

## Verify dependency integrity
- run: npm ci
  # npm ci uses package-lock.json for deterministic installs
```text

**Branch protection rules:**

```text
GitHub Settings → Branches → Add rule:
✅ Require pull request reviews (1+ approvals)
✅ Require status checks (CI must pass)
✅ Require branches to be up to date
✅ Require conversation resolution
✅ Require linear history (no merge commits)
✅ Include administrators
✅ Allow force pushes: never
✅ Allow deletions: never
```text

**DevOps best practices checklist:**

| Practice | Why It Matters |
|----------|---------------|
| Pin action versions to commits | Prevents supply chain attacks |
| Use `npm ci` not `npm install` | Deterministic, uses lockfile |
| Cache dependencies | Faster builds, lower costs |
| Run tests in parallel | Faster feedback |
| Use environment protection | Prevents accidental deploys |
| Store secrets in vault | Never commit secrets |
| Automate rollbacks | Faster recovery from failures |
| Monitor deployments | Catch issues early |

## Summary

- CI/CD automates the path from commit to production — catch issues early
- GitHub Actions workflows define build/test/deploy pipelines in YAML
- Matrix testing ensures compatibility across OS and language versions
- Pre-commit hooks enforce code quality before code enters the repository
- Use the `pre-commit` framework or Husky for consistent local checks
- Test in CI with services (databases, caches) using Docker containers
- Protect secrets with GitHub Secrets — never echo them in logs
- Pin actions to commit hashes for supply chain security
- Branch protection rules enforce review and CI requirements
- Blue-green deployments enable instant rollback

## Practical Takeaways

| Scenario | Tool/Approach |
|----------|--------------|
| CI for a Node.js project | GitHub Actions with matrix strategy |
| Pre-commit linting | pre-commit framework + husky |
| Test database in CI | GitHub Actions services (postgres, redis) |
| Deploy to staging | GitHub Actions with environment protection |
| Prevent secret leaks | GitHub Secrets + env references |
| Fast CI builds | npm ci + actions/cache |
| Safe production deploys | Blue-green with rollback on failure |

## Interview Q&A

<details class="tp-qa-card" data-qid="git06-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between continuous integration, delivery, and deployment?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Continuous Integration (CI)</strong>: Developers merge code frequently; automated builds and tests validate every change.</p>
    <p><strong>Continuous Delivery (CD)</strong>: Extends CI — every passing change is automatically staged for release, but deployment to production requires manual approval.</p>
    <p><strong>Continuous Deployment</strong>: Extends CD further — every passing change deploys to production automatically with no human intervention. The key difference is who gates production: human (delivery) vs automated (deployment).</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git06-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you prevent secrets from being exposed in GitHub Actions logs?
  </summary>
  <div class="tp-qa-answer">
<p>1) Store secrets in GitHub Settings → Secrets → Actions. 2) Reference them as <code>${{ secrets.SECRET_NAME }}</code> in workflows. 3) Pass them as environment variables,.
never echo them directly. 4) GitHub automatically masks secrets in logs if accidentally printed. 5) Avoid script injection by not using secrets in <code>run:</code> echo statements — use <code>env:</code> instead. 6) Use OIDC tokens for.
cloud credentials instead of long-lived secrets.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git06-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Why should you pin GitHub Actions to commit SHAs instead of tags?
  </summary>
  <div class="tp-qa-answer">
    <p>Tags like <code>@v4</code> are mutable — an attacker who compromises an action's repository can push malicious code under the same tag. Commit SHAs are immutable. Pinning to <code>@b4ffde65f46336ab88eb53be808477a3936bae11</code> ensures you always run the exact same code. Renovate or Dependabot can keep pinned versions updated automatically.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git06-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What problem do pre-commit hooks solve?
  </summary>
  <div class="tp-qa-answer">
<p>Pre-commit hooks run checks (linting, formatting, type checking, secret scanning) <strong>before</strong> each git commit. This catches issues at the earliest possible point — before code enters the repository or.
CI pipeline. Benefits: faster feedback (local, no CI wait), consistent code quality, prevents broken code from being pushed, and reduces CI costs by catching simple issues early.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="git06-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: Describe a blue-green deployment strategy and its advantages.
  </summary>
  <div class="tp-qa-answer">
<p>Blue-green deployment maintains two identical production environments. "Blue" serves live traffic; "green" gets the new version. After testing green, traffic is switched instantly. Advantages: zero-downtime deployments,.
instant rollback (switch back to blue), ability to test the new version under real traffic before switching, and simple deployment process. Disadvantages: requires double the infrastructure resources.</p>
  </div>
  <button class="tp-qa-mark-btn">Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">Bookmark</button>
</details>

## Chapter Quiz

**Q1**: In GitHub Actions, what does the `needs` keyword do?

a) Specifies required secrets
b) Defines job dependencies (a job waits for another to finish)
c) Lists required environment variables
d) Sets minimum runner requirements

<details class="tp-qa-card" data-qid="git06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>needs</code> defines job dependencies. A job with <code>needs: lint</code> won't start until the <code>lint</code> job completes successfully. This lets you build sequential pipelines: lint → test → build → deploy.</p></div></details>

**Q2**: What does `npm ci` do that `npm install` doesn't?

a) Installs faster
b) Deletes node_modules and installs exactly from package-lock.json
c) Skips optional dependencies
d) Runs tests after install

<details class="tp-qa-card" data-qid="git06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p><code>npm ci</code> deletes <code>node_modules</code> and installs exactly what's in <code>package-lock.json</code>, ensuring deterministic builds. It never modifies <code>package-lock.json</code>. <code>npm install</code> may update the lockfile and can produce different dependency trees.</p></div></details>

**Q3**: Which GitHub Actions feature allows testing across multiple Node.js versions?

a) services
b) matrix strategy
c) needs
d) environment

<details class="tp-qa-card" data-qid="git06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>The <code>strategy.matrix</code> creates multiple job instances with different configurations. Example: test across Node 18, 20, 22 on both Ubuntu and Windows with 6 parallel jobs.</p></div></details>

**Q4**: What is the purpose of GitHub Actions environments?

a) Define runner operating systems
b) Group deployment targets with protection rules and secrets
c) Set workflow-level permissions
d) Cache build artifacts

<details class="tp-qa-card" data-qid="git06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>Environments (staging, production) can have protection rules: required reviewers, wait timers, and branch restrictions. They also scope secrets — staging secrets aren't available in production jobs.</p></div></details>

**Q5**: What happens when a pre-commit hook fails?

a) The commit is created anyway
b) The commit is blocked until the issue is fixed
c) The hook is skipped automatically
d) Git creates a backup and proceeds

<details class="tp-qa-card" data-qid="git06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p><p>When a pre-commit hook exits with non-zero status, Git blocks the commit. The developer must fix the issue (format the code, remove secrets, etc.) and try again. This enforces quality standards before code enters the repository.</p></div></details>

## Practical Tips

- Start with a minimal CI: lint + unit tests — expand gradually
- Use `npm ci` in CI for deterministic, faster installs
- Cache dependencies with `actions/cache` — saves 30-60% build time
- Run lint before tests — fail fast on style issues
- Use GitHub Actions environments for staging/production separation
- Pin third-party actions to commit SHAs, not tags
- Add branch protection rules early — prevent force pushes and unreviewed code
- Use `if: failure()` steps for automatic rollback notifications
- Test CI changes on a feature branch before merging workflow changes

## Exercises


## Common Mistakes

1. Not using CI/CD for all projects
2. Hardcoding secrets in workflows
3. Not running tests before deployment
4. Forgetting to cache dependencies
5. Not using branch protection rules**Easy** — Create a GitHub Actions workflow that runs ESLint and Prettier on every push. Verify it passes on a clean commit and fails on a file with lint errors.

**Medium** — Set up a pre-commit config with trailing-whitespace, end-of-file-fixer, and a custom hook that checks commit message format follows conventional commits.

**Medium** — Build a CI pipeline with matrix testing across Node 18 and 20, include a PostgreSQL service container for integration tests, and upload coverage reports.

**Hard** — Implement a complete CI/CD pipeline: lint → test → build → deploy to staging (with environment protection) → manual approval → deploy to production. Include rollback on failure.

---

> **End of Module 04**: [Back to Module Index →](

## Revision Notes

- CI: test on every push
- CD: deploy automatically after tests pass
- GitHub Actions: YAML-based workflows
- Pre-commit hooks: lint before commit
- Secrets: never commit, use CI/CD secrets

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
- [ ] Have questions ready about how the company uses git linux cliindex.md)


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

**Q: How long does it take to master networking and security?
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

Understanding the evolution of networking and security helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding networking and security at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of networking and security like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply networking and security concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of networking and security?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply networking and security in real systems?
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