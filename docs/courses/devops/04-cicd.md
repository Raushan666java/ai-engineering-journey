# Chapter 4: CI/CD Pipelines

## Learning Objectives

By the end of this chapter, students will be able to:

1. Explain the principles and benefits of continuous integration and continuous delivery
2. Design and implement CI/CD pipelines using GitHub Actions
3. Configure pipelines in GitLab CI, Jenkins, and CircleCI
4. Apply pipeline patterns including matrix builds, reusable workflows, and deployment gates
5. Integrate environment management and secrets into pipeline workflows

## Theory

![CI/CD Pipeline: Continuous Integration and Delivery](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/devops/ch03-cicd.png)

### 4.1 Continuous Integration Principles

Continuous Integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day. Each merge triggers an automated build and test suite. The core principles are:

**Automated Builds** — Every commit triggers an automated process that compiles code, runs static analysis, executes unit tests, and produces build artifacts. Builds must be self-contained and reproducible.

**Fast Feedback** — The build-verify cycle should complete within minutes. Slow feedback encourages developers to bypass the CI process. Parallel test execution, incremental builds, and test optimization techniques maintain speed.

**Frequent Merges** — Developers integrate their changes at least daily. Small, frequent changes reduce merge conflicts and make it easier to identify which change introduced a regression.

**Fail Fast** — Pipelines should abort on the first failure rather than continuing to run subsequent stages. Immediate notification enables rapid remediation.

### 4.2 Continuous Delivery and Deployment

Continuous Delivery (CD) extends CI by ensuring the codebase is always in a deployable state. Every successful CI build produces artifacts that could be released to production. The decision to deploy is a business decision, not a technical constraint.

Continuous Deployment takes this further by automatically deploying every change that passes the pipeline to production. No human intervention is required. This practice requires exceptional test coverage, feature flags, robust monitoring, and automated rollback capabilities.

**Environment Promotion** — Artifacts progress through environments: development, integration, staging, and production. Each environment validates specific concerns. Staging mirrors production configuration to catch environment-specific issues. Deployments to production use the same artifact that passed testing in lower environments, never a rebuilt version.

**Deployment Gates** — Automated and manual checks that control promotion between environments. Gates include: test coverage thresholds, security scan results, approval workflows, and canary analysis results.

### 4.3 GitHub Actions

GitHub Actions provides CI/CD natively within the GitHub ecosystem. Workflows are YAML files stored in `.github/workflows/`.

**Core Concepts**:
- **Workflow** — An automated process defined in YAML, triggered by events
- **Job** — A set of steps that execute on the same runner
- **Step** — An individual task: shell command or action
- **Action** — A reusable unit of automation (community or custom)
- **Runner** — A server that executes workflows (GitHub-hosted or self-hosted)
- **Event** — A trigger: push, pull_request, schedule, workflow_dispatch

**Matrix Builds** — Run the same job across multiple combinations of variables (OS versions, language versions, target architectures). Matrix strategies are defined with `matrix` in the job configuration.

**Reusable Workflows** — Define a workflow in one repository and call it from others using `uses: org/repo/.github/workflows/workflow.yml@ref`. This enables organization-wide pipeline standards.

**Environments** — Deployment targets with protection rules: required reviewers, wait timers, and environment-specific secrets. Environments track deployment history.

**Secrets and Variables** — Encrypted secrets store credentials, tokens, and keys. Organization-level secrets are available across repos. Environment variables configure job behavior without hardcoding.

### 4.4 GitLab CI

GitLab CI uses `.gitlab-ci.yml` at the repository root. Pipeline structure includes stages, jobs, and artifacts.

**Concepts**:
- **Stages** — Ordered groups of jobs (build, test, deploy). Jobs within a stage run in parallel.
- **Runners** — Executors registered with GitLab (shared, group, or specific).
- **Artifacts** — Files saved from jobs for use in later stages or external download.
- **Cache** — Dependencies between pipeline runs for speed.
- **Templates** — Reusable job definitions via `extends` and `include`.

**Key Features**: Auto DevOps (convention-based pipeline), review apps (ephemeral environments per branch), container registry integration, and pages deployment.

### 4.5 Jenkins

Jenkins is the longest-standing CI/CD tool, with a plugin ecosystem of over 1,800 extensions.

**Architecture** — Jenkins master distributes build jobs to agent nodes. Jobs are defined via declarative or scripted Pipeline (Groovy DSL). Jenkinsfile contains the pipeline definition, ideally stored in version control (Pipeline as Code).

**Pipeline Types**:
- **Declarative Pipeline** — Structured syntax with agents, stages, steps, post-conditions
- **Scripted Pipeline** — Full Groovy flexibility for complex workflows

**Strengths**: Extensive plugin ecosystem, fine-grained access control, and mature pipeline capabilities. **Weaknesses**: UI-heavy configuration, plugin version conflicts, and operational overhead of master maintenance.

### 4.6 CircleCI

CircleCI provides cloud-based CI with intelligent caching and parallelism. Configuration uses `.circleci/config.yml`.

**Key Concepts**:
- **Orbs** — Reusable configuration packages (like GitHub Actions)
- **Executors** — Docker, machine, or macOS execution environments
- **Workspaces** — Share files between jobs in the same pipeline
- **Contexts** — Environment variable sets shared across projects

### 4.7 Pipeline Patterns

**Test Pyramid Pipeline** — Execute different categories of tests at appropriate stages: unit tests (fast, many), integration tests (medium, fewer), end-to-end tests (slow, few). Fail early to reduce cycle time.

**Build Once, Deploy Many** — Compile and package the artifact once. Promote the same binary through environments. This eliminates the risk of environment-specific build differences.

**Approval Gates** — Manual approval steps before production deployment. Useful for compliance-sensitive environments. Gating should be the exception, not the default.

**Rollback Pattern** — Pipelines should support automated rollback. Best practice: deploy incrementally (canary, blue-green) and monitor metrics. If error rates exceed thresholds, the pipeline triggers automatic rollback.

## Examples

### Example 4.1: GitHub Actions Workflow with Matrix Build

```yaml
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      - run: npm ci
      - run: npm test
      - run: npm run build

  security-scan:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Semgrep
        uses: semgrep/semgrep-action@v1
```

### Example 4.2: GitLab CI with Stages and Artifacts

```yaml
stages:
  - build
  - test
  - deploy

variables:
  CONTAINER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA

build:
  stage: build
  script:
    - docker build -t $CONTAINER_IMAGE .
    - docker push $CONTAINER_IMAGE
  artifacts:
    paths:
      - dist/

test:
  stage: test
  script:
    - npm test
    - npm run lint

deploy-staging:
  stage: deploy
  environment:
    name: staging
    url: https://staging.example.com
  script:
    - kubectl set image deployment/app app=$CONTAINER_IMAGE
  only:
    - main
```

## Summary

CI/CD pipelines automate the path from code commit to production deployment. GitHub Actions offers deep GitHub integration with reusable workflows and matrix builds. GitLab CI provides built-in container registry and review apps. Jenkins offers mature extensibility through plugins. CircleCI emphasizes caching and parallelism. Effective pipelines implement the build-once-deploy-many pattern, respect the test pyramid, provide fast feedback, and incorporate security scanning. Pipeline design must balance speed, reliability, and compliance requirements.

## Exercises

### Review Questions

1. What distinguishes continuous delivery from continuous deployment?
2. How does a matrix build improve CI efficiency for multi-platform projects?
3. Explain the purpose of deployment gates and provide two examples.
4. What is the build-once-deploy-many pattern and why is it important?
5. Compare GitHub Actions reusable workflows with CircleCI orbs.

### Application Problems

1. Create a GitHub Actions workflow for a Node.js application that runs linting, unit tests, and builds a Docker image. Use a matrix strategy for Node.js versions 18 and 20. Include a concurrency setting to cancel redundant in-progress runs.
2. Set up a GitLab CI pipeline with three stages (build, test, deploy) for a Python application. Use artifacts to pass test reports between stages. Deploy to a staging environment only when the main branch passes all tests.
3. Design a Jenkins declarative pipeline for a Java project with parallel unit and integration test execution. Include a post-build step that archives test results and publishes a JAR artifact to Nexus.

### Challenge Problem

Design a complete CI/CD pipeline architecture for a regulated financial services organization with the following constraints: 50 microservices across four language ecosystems, SOC 2 compliance requiring audit trails for all production changes, four-person security team that must review all production deployments, 99.95% uptime target requiring automated rollback within 5 minutes of metric degradation, and deployment frequency target of 50+ per day. Specify the CI/CD tool, pipeline stages, testing strategy, deployment model (blue-green, canary, or feature flags), gating process, rollback automation, security scanning integration, and audit logging approach. Justify each architectural decision against the stated constraints.
