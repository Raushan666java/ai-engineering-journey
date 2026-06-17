# Configuration Management

## Learning Objectives

After completing this chapter, the student will be able to: explain the purpose of software configuration management; describe version control principles and use Git for common workflows; explain the change management process and the role of the change control board; describe build management and build automation tools; explain release management and semantic versioning; describe continuous integration and continuous delivery pipelines; and explain DevOps practices.

## Theory

![Configuration Management System](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/software-engineering/ch-10-configuration-management.png)

### The Purpose of Configuration Management

Software configuration management (SCM) is the discipline of identifying, organising, and controlling changes to software artefacts throughout the software lifecycle. SCM ensures that the correct versions of all artefacts are used at each stage of development and that changes are managed in a controlled manner.

The artefacts managed by SCM include source code, build scripts, configuration files, requirements documents, design models, test cases, user documentation, and deployment scripts. Without effective SCM, teams experience lost work, integration conflicts, untestable builds, and unreliable releases.

### Version Control

Version control is the foundation of configuration management. A version control system tracks changes to files over time, enabling developers to collaborate, revert to previous states, and maintain parallel lines of development.

Centralised version control systems, such as CVS and Subversion, store the repository on a central server. Developers check out files, make changes, and commit them back to the server. Centralised systems provide simple administration and fine-grained access control, but they create a single point of failure and require network connectivity for most operations.

Distributed version control systems, such as Git and Mercurial, store the complete repository history on each developer's machine. Developers commit changes locally and push them to remote repositories. Distributed systems support offline work, provide full backup of the repository on every clone, and enable flexible branching workflows.

Git has become the dominant version control system. Git's object model is based on content-addressable storage, where each commit is identified by a SHA-1 hash of its contents. Git's branching model is lightweight and efficient: branches are simply pointers to commits.

Common Git workflows include: the Centralised Workflow, where developers work on a single master branch; the Feature Branch Workflow, where each feature is developed in a dedicated branch and merged via pull requests; the Gitflow Workflow, which defines parallel branches for features, releases, and hotfixes; and the Forking Workflow, where developers fork a repository and submit pull requests from their forks.

### Change Management

Change management controls how changes are proposed, evaluated, approved, and implemented. The change management process typically includes: change request submission, where a change is formally requested with a description of the proposed change and its rationale; impact analysis, where the effects of the change on cost, schedule, quality, and other system components are assessed; change control board (CCB) review, where a board of stakeholders reviews the change request and impact analysis; decision, where the CCB approves, rejects, or defers the change; implementation, where the approved change is designed, coded, and tested; and verification, where the change is validated and the configuration status is updated.

The formality of the change management process varies with project criticality. Safety-critical projects require rigorous change control; agile projects typically use a lighter process, with the product owner making most change decisions.

### Build Management

Build management automates the process of transforming source code and other artefacts into executable software. A build system resolves dependencies, compiles source code, links components, runs tests, and packages the result.

Build automation tools include Make, a widely used but platform-dependent tool; Ant, a Java build tool using XML configuration; Maven, which adds dependency management and standard build conventions; Gradle, which uses a Groovy-based DSL; and MSBuild for .NET projects.

Key build management concepts include: reproducible builds, where the same source code always produces the same executable; incremental builds, where only changed components are recompiled; dependency management, where external libraries are automatically resolved and retrieved; and build pipelines, where multiple build steps are chained together.

### Release Management

Release management controls the process of making software available for use. A release is a specific version of a software system that has been tested and approved for distribution.

Semantic versioning provides a standard format for release numbering: MAJOR.MINOR.PATCH. The MAJOR version is incremented for incompatible API changes. The MINOR version is incremented when new features are added in a backward-compatible manner. The PATCH version is incremented for backward-compatible bug fixes. Pre-release versions can be denoted by appending a hyphen and identifiers such as "alpha", "beta", or "rc.1".

Release branches isolate release preparation from ongoing development. On a release branch, the team performs final testing, documentation, and packaging. When the release is ready, it is tagged and merged back into the main development branch.

### Continuous Integration

Continuous integration (CI) is the practice of merging all developer changes into a shared mainline frequently — typically several times per day. Each integration is verified by an automated build and automated tests, giving the team immediate feedback on the quality of their changes.

The benefits of CI include: early detection of integration problems; reduced integration risk; immediate feedback to developers; always-deployable code; and increased confidence in the quality of the codebase.

A CI pipeline typically includes: code checkout, compilation, unit test execution, static analysis, code coverage measurement, and reporting. If any step fails, the team is notified immediately, and fixing the build becomes the highest priority.

### Continuous Delivery

Continuous delivery (CD) extends CI by ensuring that the software can be released to production at any time. In continuous delivery, every change that passes the CI pipeline is deployed to a staging environment that mirrors production and is subjected to additional testing. The decision to deploy to production is a manual business decision.

Continuous deployment takes this further: every change that passes the entire pipeline is automatically deployed to production. Continuous deployment requires high confidence in the testing pipeline and is typically used by organisations with sophisticated automated testing and monitoring.

### DevOps Practices

DevOps is a cultural and professional movement that emphasises collaboration between development and operations teams. The goals of DevOps include: reducing the time between committing a change and deploying it to production; improving the reliability of releases; and enabling rapid feedback from production to development.

Key DevOps practices include: infrastructure as code, where infrastructure is provisioned and managed using code and automated tools; automated deployment, where deployments are scripted and repeatable; monitoring and observability, where production systems are continuously monitored and metrics are collected; incident response, where problems are detected and resolved quickly with post-mortems to prevent recurrence; and blameless culture, where failures are treated as learning opportunities rather than opportunities for blame.

### Infrastructure as Code

Infrastructure as code (IaC) treats infrastructure provisioning and configuration as software engineering activities. IaC enables repeatable, version-controlled, and automated infrastructure management.

Configuration management tools (Ansible, Chef, Puppet) focus on installing and configuring software on existing servers. They are declarative: the desired state is specified, and the tool ensures that the target system matches that state.

Provisioning tools (Terraform, CloudFormation) focus on creating and managing infrastructure resources such as servers, networks, and storage. They manage the lifecycle of cloud resources across multiple providers.

## Examples

### Case Study: Gitflow in an Enterprise

An enterprise software team adopted the Gitflow workflow. The master branch contained production-ready code. The develop branch contained integrated features. Feature branches were created from develop and merged back via pull requests. Release branches were forked from develop for final preparation. Hotfix branches were forked from master for emergency fixes. This workflow provided clear separation between development, integration, and release activities.

### Template: Semantic Versioning

Given version 2.4.1:
- 2 is the MAJOR version (incompatible API changes)
- 4 is the MINOR version (backward-compatible new features)
- 1 is the PATCH version (backward-compatible bug fixes)

Release 2.4.1-alpha.1 indicates a pre-release of the patch version.

### Template: CI Pipeline Configuration

| Stage | Tool | Actions |
|-------|------|---------|
| Checkout | Git | Clone repository, checkout branch |
| Build | Maven | Compile source, run unit tests, package JAR |
| Static Analysis | SonarQube | Analyse code quality, calculate coverage |
| Integration Test | TestNG | Run integration tests against test database |
| Package | Docker | Build container image |
| Deploy | Ansible | Deploy to staging environment |
| Acceptance | Selenium | Run end-to-end browser tests |

## Summary

Configuration management controls the evolution of software artefacts. Version control, dominated by Git, provides the foundation. Change management ensures that changes are systematically evaluated before implementation. Build management automates the creation of executable software. Release management and semantic versioning provide structured release processes. CI/CD pipelines automate integration, testing, and delivery. DevOps practices integrate development and operations. Infrastructure as code extends automation to infrastructure management.

## Exercises

### Review Questions

1. What artefacts should be under configuration management?
2. Distinguish between centralised and distributed version control.
3. What information does each Git commit record?
4. Describe the purpose of a change control board.
5. What is the purpose of a build system?
6. Explain the MAJOR.MINOR.PATCH format of semantic versioning.
7. What is continuous integration, and what benefits does it provide?
8. Distinguish between continuous delivery and continuous deployment.
9. What is infrastructure as code?
10. Distinguish between configuration management tools and provisioning tools in IaC.

### Application Problems

1. Your team of six developers is starting a web application project. Design a Git branching strategy appropriate for a team using continuous delivery. Specify the branch types, naming conventions, and merge rules.
2. A project library is at version 3.1.0. A bug is found in the library and fixed. The fix is backward-compatible. What is the new version number? If the fix introduces a public API change that breaks existing clients, what version number is used?
3. Design a CI/CD pipeline for a Java web application deployed on Kubernetes. Specify the stages, tools, and triggers for each stage. Describe what happens when each stage fails.

### Challenge Problem

A large organisation with fifty development teams, hundreds of microservices, and multiple data centres is migrating from a legacy release process that involves manual builds, manual testing, and scheduled quarterly releases. The target is continuous delivery with automated testing and weekly releases. The migration must be incremental. Design a configuration management strategy that addresses version control, build management, release management, and deployment automation. Consider how you will handle dependencies between services, how you will coordinate multiple teams, what governance you will implement for the CI/CD pipeline, and how you will ensure traceability from requirements through to deployed releases. Address the cultural changes required and how you will build confidence in automated processes.
