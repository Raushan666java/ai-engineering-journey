# Chapter 3: Build Tools and Packaging

## Learning Objectives

![Build Tools and Packaging Ecosystem](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch03-build-tools.png)

By the end of this chapter, students will be able to:

1. Distinguish between build and package phases in the software delivery lifecycle
2. Use language-specific build tools correctly for multiple ecosystems
3. Configure artifact repositories for secure and efficient dependency management
4. Apply semantic versioning principles to software releases
5. Generate and interpret Software Bill of Materials (SBOM) documents

## Theory

### 3.1 Build vs Package

The software delivery lifecycle separates the **build** phase from the **package** phase, though these are often conflated in practice.

**Build** is the process of transforming source code into executable artifacts. This includes compilation (for compiled languages), minification (for JavaScript), asset compilation (SCSS to CSS), code generation, and resource processing. The output of a build is typically one or more binary or intermediate files.

**Package** is the process of assembling build outputs and metadata into a deployable unit. A package includes the executable artifact, dependency declarations, version metadata, and sometimes configuration files or installation scripts. Packaging formats include JAR, Wheel, npm tarball, Debian package, RPM, and OCI container image.

Making this distinction explicit improves pipeline design. A build pipeline produces artifacts; a release pipeline packages, signs, and publishes them. Separation enables verifying build artifacts before committing to packaging.

### 3.2 Language-Specific Tools

**JavaScript/TypeScript** â€” npm (Node Package Manager) manages dependencies from the npm registry. `package.json` declares dependencies; `package-lock.json` pins exact versions for reproducibility. Yarn and pnpm are alternative package managers that offer faster installs and stricter dependency resolution. Build tooling includes Webpack (module bundling), Rollup (library bundling), esbuild (ultra-fast build), and Bun (runtime + package manager + bundler).

**Python** â€” pip installs packages from PyPI. `requirements.txt` lists top-level dependencies; `pip freeze` outputs the full resolved dependency tree. Poetry and Pipenv provide more sophisticated dependency management with lock files, virtual environment management, and build system integration. Setuptools and Flit handle packaging: `setup.py` or `pyproject.toml` define package metadata, entry points, and build configuration.

**Java** â€” Maven and Gradle are the dominant build tools. Maven uses XML (`pom.xml`) with a convention-over-configuration philosophy. Gradle uses a Groovy or Kotlin DSL, supporting incremental builds and build caching. Both resolve dependencies from Maven Central or private repositories. Build outputs are JAR, WAR, or EAR files.

**Go** â€” Go uses a built-in module system (`go mod`). `go.mod` declares dependencies; `go.sum` provides verification hashes. Go compiles to a single static binary, simplifying deployment. Multi-stage builds in Docker leverage the Go compiler's efficiency.

**Rust** â€” Cargo manages dependencies from crates.io. `Cargo.toml` declares dependencies with semantic version constraints. Cargo builds produce executables or libraries. It handles testing, benchmarking, documentation generation, and publishing.

**.NET** â€” NuGet is the package format and registry. MSBuild and the dotnet CLI handle compilation and packaging. `csproj` files declare dependencies. Paket is an alternative dependency manager.

### 3.3 Artifact Repositories

Artifact repositories store and serve build outputs and dependencies. They provide access control, caching, version management, and metadata storage.

**Nexus Repository OSS/Pro** â€” Supports Maven, npm, Docker, PyPI, NuGet, and more. Provides proxy repositories (cache remote registries), hosted repositories (store internal artifacts), and group repositories (aggregate multiple sources). Pro features include cleanup policies, S3 blob storage, and health checks.

**JFrog Artifactory** â€” Universal artifact repository with support for all major package formats. Integrates natively with CI/CD tools. Features include build integration (traces which artifacts comprise a build), release management, and binary analysis. Artifactory also serves as a Helm chart repository and Docker registry.

**Cloud Package Registries** â€” GitHub Packages, GitLab Container Registry, AWS CodeArtifact, Azure Artifacts, and GCP Artifact Registry provide integrated artifact storage within their respective platforms. These reduce operational overhead for teams already using the platform.

**Docker Hub and Container Registries** â€” Container images are the dominant deployment artifact. Registries include Docker Hub (public and private), Amazon ECR, Azure Container Registry, Google Container Registry, and GitHub Container Registry. All support vulnerability scanning, immutable tags, and access control.

### 3.4 Versioning

Version numbers communicate meaning about the nature of changes between releases.

**Semantic Versioning (SemVer)** â€” Format: `MAJOR.MINOR.PATCH`. Increment MAJOR for incompatible API changes, MINOR for backwards-compatible feature additions, and PATCH for backwards-compatible bug fixes. Pre-release versions append a hyphen and identifier (`1.0.0-alpha.1`). Build metadata appends a plus (`1.0.0+build.123`). SemVer enables dependency resolution tools to determine compatible versions automatically.

**Calendar Versioning (CalVer)** â€” Format based on release date, such as `YY.MM.MINOR` or `YY.0M.0D`. Used by Ubuntu (`24.04`), Unity, and pip. CalVer communicates freshness rather than compatibility scope.

**Zero-Ver and Other Schemes** â€” ZeroVer (`0.x`) indicates pre-stable development. Version Proliferation Review (VPR) and other organizational standards exist for specialized contexts.

### 3.5 Software Bill of Materials (SBOM)

An SBOM is a formal, machine-readable inventory of all components in a software artifact. It lists each component, its version, license, and dependency relationships.

**Formats** â€” SPDX (Software Package Data Exchange) and CycloneDX are the dominant standards. Both are ISO/IEC standards. SPDX focuses on licensing; CycloneDX includes vulnerability metadata and cryptographic hashes.

**Generation** â€” Tools like Syft, Trivy, and language-specific plugins analyze build outputs and generate SBOMs. Generation should be integrated into the CI/CD pipeline as a post-build step.

**Use Cases** â€” Vulnerability management (correlate components against CVE databases), license compliance, supply chain risk assessment, and regulatory compliance (US Executive Order 14028 mandates SBOMs for government software).

## Examples

### Example 3.1: npm package.json with SemVer and Scripts

```json
{
  "name": "@org/api-service",
  "version": "2.1.0",
  "description": "REST API service for order management",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "test": "jest --coverage",
    "lint": "eslint src/",
    "package": "npm pack"
  },
  "dependencies": {
    "express": "^4.18.0",
    "pino": "^8.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.0.0"
  }
}
```

### Example 3.2: Maven pom.xml with Repository Configuration

```xml
<project>
  <groupId>com.org</groupId>
  <artifactId>payment-processor</artifactId>
  <version>3.2.1</version>
  <packaging>jar</packaging>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>3.1.0</version>
    </dependency>
  </dependencies>
  <distributionManagement>
    <repository>
      <id>internal-releases</id>
      <url>https://nexus.internal.org/repository/maven-releases/</url>
    </repository>
  </distributionManagement>
</project>
```

### Example 3.3: SBOM Generation with Syft

```bash
# Generate SBOM for a container image in CycloneDX format
syft packages myapp:latest -o cyclonedx-json > sbom.cdx.json

# Generate SBOM from a filesystem
syft packages /path/to/build/output -o spdx-json > sbom.spdx.json

# Verify the SBOM with Grype for known vulnerabilities
grype sbom:sbom.cdx.json
```

## Summary

Build tools and packaging form the foundation of the software delivery pipeline. Each language ecosystem provides specialized tools optimized for its compilation model and runtime characteristics. Artifact repositories enable secure, scalable dependency management. Semantic versioning communicates change impact. SBOM generation provides supply chain transparency. Understanding the complete build and packaging lifecycle is essential for designing effective CI/CD pipelines and maintaining secure software supply chains.

## Exercises

### Review Questions

1. What is the difference between a build artifact and a package? Provide examples.
2. How does Maven's convention-over-configuration differ from Gradle's approach?
3. Explain the three components of semantic versioning and when each is incremented.
4. What information does an SBOM contain, and in which two standard formats is it represented?
5. Why would an organization use a private artifact repository instead of directly accessing public registries?

### Application Problems

1. Create a Node.js project with three npm dependencies. Generate a complete SBOM in CycloneDX format using Syft. Display the component list and identify any dependencies with known vulnerabilities using Grype.
2. Configure a Maven project that publishes artifacts to a local Nexus repository. Include a dependency with a version range, and verify that Maven resolves the correct version from the repository.
3. Build a Go project with multiple modules. Generate a `go.mod` and `go.sum`. Demonstrate how Go's minimal version selection resolves dependency conflicts differently than Maven's nearest-wins strategy.

### Challenge Problem

Design a complete artifact management strategy for an organization with 30 microservices written in three languages (Java, Go, Node.js). Define the artifact repository architecture (which registries, proxy configuration, cleanup policies), the versioning scheme (how SemVer maps to release channels), the SBOM generation and storage strategy, and how the CI/CD pipeline integrates with the repository. Address security concerns including signed artifacts, vulnerability scanning, and access control. The strategy must support 200+ daily deployments and compliance with SOC 2 and supply chain security requirements.
