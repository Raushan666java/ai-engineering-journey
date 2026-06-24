# Chapter 5: Containerization

> **Prev:** [CI/CD](./04-continuous-integration.md)
> **Next:** [Docker](./05-docker.md)

---

## Learning Objectives

- Understand containerization concepts and how containers differ from virtual machines.
- Explain the benefits of containers for DevOps: consistency, lightweight isolation, and fast startup.
- Understand the container ecosystem: Docker, containerd, OCI standards, and container runtimes.
- Design multi-stage builds for smaller and more secure images.
- Implement container security best practices.
- Understand image layering and caching for efficient builds.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Containers vs VMs | Shared kernel vs hypervisor | Containers are lighter but share the host OS |
| OCI Standards | Open Container Initiative | Ensures portability across container runtimes |
| Image Layers | Union filesystem (OverlayFS) | Layer ordering affects caching and rebuild speed |
| Multi-Stage Builds | Separate build from runtime | Produces tiny production images |
| Container Security | Least privilege, no root | Run as non-root user, read-only root filesystem |
| Resource Limits | CPU, memory, disk constraints | Prevent noisy neighbor problems |
| Container Registry | Store and distribute images | Use immutable tags (SHA digest) |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Container Concepts] --> B[VM Comparison]
    A --> C[OCI Standards]
    C --> D[Image Specification]
    C --> E[Runtime Specification]
    D --> F[Docker]
    D --> G[Podman]
    D --> H[containerd]
    F --> I[Image Layers]
    I --> J[Multi-Stage Builds]
    J --> K[Security Hardening]
    K --> L[Registry]
    L --> M[Deployment]
```

## Theory

### Containers vs Virtual Machines

The fundamental difference is kernel architecture:

```mermaid
flowchart TD
    subgraph "Virtual Machines"
        V1[Hypervisor]
        V1 --> VM1[Guest OS]
        V1 --> VM2[Guest OS]
        V1 --> VM3[Guest OS]
        VM1 --> APP1[App]
        VM2 --> APP2[App]
        VM3 --> APP3[App]
    end
    subgraph "Containers"
        C1[Host OS Kernel]
        C1 --> CT1[Container]
        C1 --> CT2[Container]
        C1 --> CT3[Container]
        CT1 --> CAP1[App]
        CT2 --> CAP2[App]
        CT3 --> CAP3[App]
    end
```

| Aspect | Virtual Machine | Container |
|--------|----------------|-----------|
| Kernel | Each VM has its own OS kernel | All containers share the host kernel |
| Startup | Minutes (OS boot) | Milliseconds (process start) |
| Size | GB (full OS image) | MB (app + dependencies) |
| Isolation | Hardware-level isolation | Namespace + cgroup isolation |
| Resource overhead | High (full OS per VM) | Minimal (only app process) |
| Portability | VM image format | OCI image standard |

### OCI Standards

The Open Container Initiative defines two core specifications:

**Image Specification (image-spec):**
- Defines how container images are built and structured
- Images consist of a manifest, config file, and layer tarballs
- Content-addressable storage via digest (SHA-256)

**Runtime Specification (runtime-spec):**
- Defines how containers are executed
- Configures namespaces, cgroups, mounts, capabilities
- Defines the lifecycle (create, start, stop, delete)

**OCI-compliant runtimes:**
- runc (reference implementation, used by Docker)
- crun (C-based, faster than runc)
- Youki (Rust-based)
- Kata Containers (VM-based isolation)

### Container Image Layers

Container images are built as a stack of read-only layers on top of a union filesystem (OverlayFS):

```mermaid
flowchart LR
    subgraph "Container Image"
        A[Layer 0: Base Image<br/>Ubuntu/Debian/Alpine]
        B[Layer 1: System Packages<br/>ca-certificates, curl]
        C[Layer 2: Runtime<br/>Node.js, Python]
        D[Layer 3: Application Code<br/>src/]
        E[Layer 4: Config<br/>package.json, .env]
        F[Layer 5: Container Config<br/>CMD, ENTRYPOINT]
    end
    A --> B --> C --> D --> E --> F
```

Each Dockerfile instruction creates a new layer. Layers are cached and reused across builds:

**Layer caching rules:**
- If a layer's instructions and context haven't changed, Docker reuses the cached layer
- If a layer changes, all subsequent layers must be rebuilt
- Order matters: place infrequently changing instructions first (system deps, package install)
- Place frequently changing instructions last (application code)

### Multi-Stage Builds

Multi-stage builds use multiple FROM statements to separate the build environment from the runtime environment:

```mermaid
flowchart LR
    subgraph "Build Stage"
        B1[FROM node:20 AS build]
        B2[COPY package*.json ./]
        B3[RUN npm ci]
        B4[COPY src/ ./]
        B5[RUN npm run build]
    end
    subgraph "Runtime Stage"
        R1[FROM node:20-alpine]
        R2[COPY --from=build dist/ ./]
        R3[USER node]
        R4[CMD node server.js]
    end
    B5 --> R2
```

**Benefits:**
- Tiny production images (no build tools, no dev dependencies)
- No source code in production images
- Reduced attack surface
- Faster deployments with smaller images

### Container Security

**Principle of least privilege:**
- Run as non-root user (never as root inside container)
- Drop unnecessary Linux capabilities
- Use read-only root filesystem
- Don't run SSH daemons in containers

**Image scanning:**
- Scan for known vulnerabilities (Trivy, Snyk, Grype)
- Use minimal base images (distroless, alpine)
- Pin base images to specific digests
- Regularly rebuild images (even with same code) to pick up security patches

**Runtime security:**
- Set resource limits (CPU, memory)
- Use seccomp profiles to restrict syscalls
- Use AppArmor/SELinux for mandatory access control
- Disable privilege escalation (`--security-opt no-new-privileges`)

### Container Registries

Registries store and distribute container images:

| Registry | Type | Features |
|----------|------|----------|
| Docker Hub | Public/Private | Most popular, automated builds |
| GitHub Container Registry | Integrated with GitHub | Free for public images |
| Amazon ECR | AWS | IAM integration |
| Google Artifact Registry | GCP | Cloud-native |
| Azure Container Registry | Azure | ACR tasks |
| Harbor | Self-hosted | Vulnerability scanning, replication |

**Tagging strategies:**
- Immutable tags: `v1.0.0`, `sha-abc1234`
- Mutable tags: `latest`, `stable` (use carefully)
- Best practice: always reference by digest in production

---

## Examples

### Example 1: Multi-Stage Build for TypeScript Application

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (caching optimization)
COPY package.json package-lock.json ./
RUN npm ci --only=production && \
    npm ci --only=dev

# Copy source and build
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine AS production

# Security: create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only production dependencies and built output
COPY package.json package-lock.json ./
RUN npm ci --only=production && \
    npm cache clean --force

COPY --from=builder /app/dist ./dist

# Security: non-root user
USER appuser

# Security: read-only filesystem
# (enable at runtime with --read-only --tmpfs /tmp)

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/server.js"]
```

### Example 2: Container Security Scanner

```typescript
import { execSync } from 'child_process';

interface Vulnerability {
  id: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  package: string;
  installedVersion: string;
  fixedVersion: string;
  description: string;
}

interface ScanResult {
  image: string;
  vulnerabilities: Vulnerability[];
  passed: boolean;
}

class ContainerSecurityScanner {
  async scanImage(imageName: string, tag: string): Promise<ScanResult> {
    console.log(`🔍 Scanning ${imageName}:${tag}...`);

    // Simulated Trivy scan integration
    const results: Vulnerability[] = [
      {
        id: 'CVE-2024-1234',
        severity: 'HIGH',
        package: 'lodash',
        installedVersion: '4.17.20',
        fixedVersion: '4.17.21',
        description: 'Prototype pollution in lodash',
      },
    ];

    const criticalCount = results.filter(v => v.severity === 'CRITICAL').length;
    const highCount = results.filter(v => v.severity === 'HIGH').length;

    // Fail on CRITICAL or HIGH vulnerabilities
    const passed = criticalCount === 0 && highCount === 0;

    return { image: `${imageName}:${tag}`, vulnerabilities: results, passed };
  }

  generateReport(result: ScanResult): string {
    let report = `# Container Security Scan Report\n\n`;
    report += `**Image:** ${result.image}\n`;
    report += `**Status:** ${result.passed ? '✅ PASSED' : '❌ FAILED'}\n\n`;

    if (result.vulnerabilities.length === 0) {
      report += 'No vulnerabilities found.\n';
      return report;
    }

    report += `| Severity | Package | Installed | Fixed | CVE |\n`;
    report += `|----------|---------|-----------|-------|----|\n`;

    for (const v of result.vulnerabilities) {
      const sev = v.severity === 'CRITICAL' ? '🔴' :
                  v.severity === 'HIGH' ? '🟠' :
                  v.severity === 'MEDIUM' ? '🟡' : '⚪';
      report += `| ${sev} ${v.severity} | ${v.package} | ${v.installedVersion} | ${v.fixedVersion} | ${v.id} |\n`;
    }

    if (!result.passed) {
      report += '\n## Action Required\n\n';
      report += 'Fix all CRITICAL and HIGH vulnerabilities before deploying to production.\n';
    }

    return report;
  }
}

const scanner = new ContainerSecurityScanner();
const result = await scanner.scanImage('myapp', 'latest');
console.log(scanner.generateReport(result));
```

### Example 3: Dockerfile Generator

```typescript
type BaseImage = 'node' | 'python' | 'go' | 'rust' | 'nginx' | 'alpine';
type PackageManager = 'npm' | 'yarn' | 'pip' | 'cargo';

interface DockerfileConfig {
  base: BaseImage;
  version: string;
  port: number;
  packageManager: PackageManager;
  buildCommand: string;
  startCommand: string;
  hasDevDependencies: boolean;
  useMultiStage: boolean;
}

class DockerfileGenerator {
  generate(config: DockerfileConfig): string {
    if (config.useMultiStage) {
      return this.generateMultiStage(config);
    }
    return this.generateSingleStage(config);
  }

  private generateMultiStage(config: DockerfileConfig): string {
    const lines: string[] = [];

    // Build stage
    lines.push(`FROM ${config.base}:${config.version}-alpine AS builder`);
    lines.push('');
    lines.push('WORKDIR /app');
    lines.push('');
    lines.push('COPY package*.json ./');
    lines.push(`RUN ${config.packageManager} ci`);
    lines.push('');
    lines.push('COPY . .');
    lines.push(`RUN ${config.buildCommand}`);
    lines.push('');

    // Production stage
    lines.push(`FROM ${config.base}:${config.version}-alpine`);
    lines.push('');
    lines.push('RUN addgroup -S appgroup && adduser -S appuser -G appgroup');
    lines.push('');
    lines.push('WORKDIR /app');
    lines.push('');
    lines.push('COPY --from=builder /app/dist ./dist');
    lines.push('COPY --from=builder /app/node_modules ./node_modules');
    lines.push('');
    lines.push('USER appuser');
    lines.push('');
    lines.push(`EXPOSE ${config.port}`);
    lines.push('');
    lines.push(`CMD ["${config.startCommand}"]`);

    return lines.join('\n');
  }

  private generateSingleStage(config: DockerfileConfig): string {
    const lines: string[] = [];

    lines.push(`FROM ${config.base}:${config.version}-alpine`);
    lines.push('');
    lines.push('RUN addgroup -S appgroup && adduser -S appuser -G appgroup');
    lines.push('');
    lines.push('WORKDIR /app');
    lines.push('');
    lines.push('COPY package*.json ./');
    lines.push(`RUN ${config.packageManager} ci${config.hasDevDependencies ? '' : ' --only=production'}`);
    lines.push('');
    lines.push('COPY . .');
    lines.push(`RUN ${config.buildCommand}`);
    lines.push('');
    lines.push('USER appuser');
    lines.push('');
    lines.push(`EXPOSE ${config.port}`);
    lines.push('');
    lines.push(`CMD ["${config.startCommand}"]`);

    return lines.join('\n');
  }
}

const gen = new DockerfileGenerator();
const dockerfile = gen.generate({
  base: 'node',
  version: '20',
  port: 3000,
  packageManager: 'npm',
  buildCommand: 'npm run build',
  startCommand: 'node dist/server.js',
  hasDevDependencies: true,
  useMultiStage: true,
});
console.log(dockerfile);
```

---

## Practical Takeaways

1. **Always use multi-stage builds.** Separate build dependencies from runtime for smaller, more secure images.
2. **Pin base image versions and digests.** Never use `latest` in production pipelines.
3. **Run as non-root.** Create a dedicated user inside the container for least privilege.
4. **Optimize layer ordering.** Put infrequently changing layers first for better cache utilization.
5. **Scan images for vulnerabilities.** Integrate Trivy or Snyk into your CI pipeline.
6. **Set resource limits.** Prevent containers from exhausting host resources.

---

## Chapter Quiz

<details><summary>Question 1: What is the main difference between containers and VMs?</summary>**A)** Containers are slower than VMs<br>**B)** Containers share the host kernel; VMs have their own kernel<br>**C)** VMs use less disk space<br>**D)** Containers cannot run Linux<br><br>**Answer: B)** Containers share the host kernel; VMs have their own kernel</details>

<details><summary>Question 2: What is the purpose of multi-stage builds?</summary>**A)** Build multiple images at once<br>**B)** Separate build dependencies from runtime for smaller images<br>**C)** Run multiple containers simultaneously<br>**D)** Speed up the build process<br><br>**Answer: B)** Separate build dependencies from runtime for smaller images</details>

<details><summary>Question 3: What is the OCI responsible for?</summary>**A)** Defining container image and runtime standards<br>**B)** Distributing Docker images<br>**C)** Providing container hosting<br>**D)** Managing container networks<br><br>**Answer: A)** Defining container image and runtime standards</details>

<details><summary>Question 4: Why should containers run as non-root?</summary>**A)** It's faster<br>**B)** It reduces the attack surface if the container is compromised<br>**C)** Root cannot access the network<br>**D)** Non-root users have better logging<br><br>**Answer: B)** It reduces the attack surface if the container is compromised</details>

<details><summary>Question 5: Why should you order Dockerfile instructions from least to most frequently changing?</summary>**A)** It makes the file easier to read<br>**B)** It maximizes Docker layer caching efficiency<br>**C)** It reduces the number of layers<br>**D)** It improves runtime performance<br><br>**Answer: B)** It maximizes Docker layer caching efficiency</details>

---

## Summary

- Containers provide lightweight, isolated environments that share the host kernel, unlike VMs which include a full guest OS.
- The OCI defines standards for container images and runtimes, ensuring portability across platforms.
- Container images are built from read-only layers that enable caching and efficient storage.
- Multi-stage builds separate the build environment from the runtime, producing minimal production images.
- Container security requires running as non-root, dropping capabilities, scanning for vulnerabilities, and setting resource limits.
- Registries store and distribute images; use immutable tags based on SHA digests for production deployments.

---

## Exercises

### Review Questions
1. How do containers achieve isolation without a hypervisor?
2. What are the benefits and tradeoffs of multi-stage builds?
3. How does Docker layer caching work and how can you optimize it?
4. What security hardening measures should every container implement?
5. What is the difference between OCI image spec and runtime spec?

### Application Problems
1. Write a multi-stage Dockerfile for a TypeScript application that produces a minimal production image.
2. Create a security scanning CI step that fails builds on critical vulnerabilities.
3. Design an image tagging strategy that supports traceability and rollback.
4. Implement resource limits for a containerized application running alongside other services.

### Challenge Problem
1. Design a complete container strategy for a microservices architecture with 6 TypeScript services. Include: multi-stage Dockerfiles for each service (optimized for caching), a Docker Compose file for local development, a CI pipeline that builds, scans, and pushes images with immutable tags, a registry cleanup policy (keep last 30 days of images), a security hardening checklist applied to all images, and a base image update strategy to regularly rebuild images with security patches.
