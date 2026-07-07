# Chapter 21: Social Media Security & Account Takeover Prevention

> **Prereq:** Chapters 1-2 (Fundamentals, Cryptography) — authentication concepts, encryption, MFA
> **Next:** None — capstone chapter
> **Target Audience:** All users, security-conscious individuals, SOC analysts, digital forensics investigators

---

## Learning Objectives

By the end of this chapter, you will be able to:
1. Identify and classify 12+ modern account takeover attack techniques across social engineering, technical exploitation, and physical methods.
2. Perform a full forensic investigation of a compromised Instagram/Twitter/LinkedIn account using platform-specific evidence sources.
3. Implement a multi-layered defense strategy combining 2FA, hardware security keys, password managers, and OPSEC.
4. Create a personal incident response playbook for account compromise with SLA-driven recovery steps.
5. Analyze real-world attack case studies (Twitter 2020 Bitcoin scam, Telegram OAuth hijacking, SIM swap rings) with root cause mapping.
6. Deploy monitoring tools for credential leaks, session hijacking detection, and dark web exposure alerts.
7. Build a TypeScript-based account security scanner and threat detection engine.

---

## Chapter at a Glance

| Section | Key Concept | Why It Matters |
|---------|-------------|----------------|
| Account Takeover Attack Taxonomy | 12 attack vectors classified by method | Know your enemy — every attack exploits one of these |
| Social Engineering Deep Dive | Phishing, spear phishing, vishing, SMiShing, deepfakes | 82% of breaches involve the human element |
| Credential Attacks | Stuffing, spraying, password reuse, hash cracking | Your password is likely already compromised |
| Session Hijacking & MFA Bypass | Cookie theft, OAuth abuse, MFA fatigue, SIM swap | Passwords alone are useless; MFA alone is not enough |
| SIM Swapping | Social engineering mobile carriers, insider threats | The most devastating personal attack vector |
| Platform-Specific Forensics | Instagram, Twitter/X, Facebook, LinkedIn, Google, Apple | Each platform leaves different forensic breadcrumbs |
| Investigation Toolkit | TypeScript forensics engine, log parsers, session analyzers | Automated evidence collection saves hours |
| Personal Defense Architecture | Password managers, hardware keys, OPSEC, recovery codes | A complete system for account security |
| Incident Response Playbook | Step-by-step recovery with SLAs for each platform | You need a plan BEFORE you get hacked |
| Case Studies | Twitter 2020, Telegram OAuth, SIM swap rings | Real attacks reveal real weaknesses |

---

## 1. Account Takeover Attack Taxonomy

Account takeover (ATO) attacks fall into six categories. Every real-world attack uses one or more of these vectors.

```
ACCOUNT TAKEOVER ATTACK CLASSIFICATION
═══════════════════════════════════════════════════
├── 1. CREDENTIAL-BASED (52% of ATO)
│   ├── Credential Stuffing — leaked passwords reused across services
│   ├── Password Spraying — common passwords against many accounts
│   ├── Brute Force — systematic guessing with rate-limit bypass
│   └── Credential Phishing — fake login pages harvesting passwords
│
├── 2. SOCIAL ENGINEERING (24%)
│   ├── Spear Phishing — targeted emails impersonating support
│   ├── Vishing — phone calls pretending to be security team
│   ├── SMiShing — SMS with malicious links
│   └── Deepfake Voice/Video — AI-generated identity theft
│
├── 3. SESSION-BASED (12%)
│   ├── Session Hijacking — stealing cookies/tokens from browser
│   ├── OAuth Abuse — malicious third-party app authorization
│   └── Token Replay — captured authentication tokens reused
│
├── 4. MFA CIRCUMVENTION (7%)
│   ├── MFA Fatigue — spamming push notifications until user accepts
│   ├── SIM Swap — attacker ports your number to their SIM
│   ├── Backup Code Theft — recovery codes stolen from email/cloud
│   └── SS7 Exploit — intercepting SMS 2FA at protocol level
│
├── 5. SESSION FIXATION (3%)
│   ├── Attacker sets a known session ID, victim authenticates with it
│   └── Rare but devastating against platforms with poor session hygiene
│
└── 6. PHYSICAL (2%)
    ├── Device Theft — unlocked phone with saved sessions
    └── Shoulder Surfing — observing password/PIN entry in public
```

**Attack Vector Severity Matrix:**

| Attack | Difficulty | Detectability | Impact | Frequency | Prevention |
|--------|------------|---------------|--------|-----------|------------|
| Credential Stuffing | Low | Medium | High | Very High | Password Manager + 2FA |
| Phishing | Medium | Low | Very High | High | Hardware Key (FIDO2) |
| SIM Swap | Medium | Low | Critical | Medium | Carrier PIN + Google Voice |
| MFA Fatigue | Low | Low | High | Growing | Number Matching + Rate Limit |
| Session Hijacking | High | Very Low | Critical | Low | Session Binding + HTTPS Only |
| OAuth Abuse | Low | Low | High | Medium | Review Apps Monthly |
| Deepfake | Very High | Very Low | Critical | Low | Verification Code Word |
| SS7 Exploit | Very High | Low | Critical | Very Low | App-based 2FA, not SMS |

---

## 2. Social Engineering Deep Dive

### 2.1 Phishing — The #1 Account Takeover Vector

Phishing accounts for **82% of breaches** involving a human element (Verizon DBIR 2024). Modern phishing is no longer obvious — attackers use cloned login pages, real SSL certificates, and urgency tactics.

**Modern Phishing Techniques:**

| Technique | Description | Detection |
|-----------|-------------|-----------|
| **Clone Phishing** | Legitimate email cloned, link replaced with malicious URL | Compare headers, check sender domain carefully |
| **Spear Phishing** | Highly personalized using OSINT about the target | Unusual request even from known contacts |
| **Whaling** | Targeting executives/C-suite with fake legal/financial emails | Verify via separate channel before acting |
| **SMiShing** | SMS with fake security alert + link | Never click links in SMS — use app directly |
| **Vishing** | Phone call impersonating support asking for verification code | Hang up, call back on official number |
| **Angler Phishing** | Fake customer support accounts on social media replying to complaints | Check verified badge, official website links |
| **Quid Pro Quo** | Attacker offers a service in exchange for credentials | No legitimate service asks for your password |
| **Watering Hole** | Compromising a site the target regularly visits | Use ad-blockers, script blockers, keep software updated |

**Phishing Detection Algorithm — TypeScript:**

```typescript
// phish-detector.ts — URL and Email Phishing Detection Engine

interface EmailMessage {
  from: string;
  fromDomain: string;
  replyTo: string;
  returnPath: string;
  subject: string;
  body: string;
  links: string[];
  headers: Record<string, string>;
  attachments: Attachment[];
}

interface Attachment {
  filename: string;
  extension: string;
  size: number;
}

interface PhishingScore {
  totalScore: number; // 0-100
  risk: 'safe' | 'suspicious' | 'high' | 'critical';
  factors: PhishingFactor[];
}

interface PhishingFactor {
  name: string;
  score: number; // 0-100
  detail: string;
}

class PhishingDetector {
  private readonly KNOWN_BRANDS = new Map<string, string[]>([
    ['instagram', ['instagram.com', 'cdninstagram.com', 'ig.me']],
    ['facebook', ['facebook.com', 'fb.com', 'fbcdn.net']],
    ['google', ['google.com', 'gmail.com', 'youtube.com', 'accounts.google.com']],
    ['twitter', ['twitter.com', 'x.com', 't.co']],
    ['linkedin', ['linkedin.com', 'licdn.com']],
    ['apple', ['apple.com', 'icloud.com']],
    ['microsoft', ['microsoft.com', 'live.com', 'outlook.com', 'office365.com']],
    ['paypal', ['paypal.com', 'paypalobjects.com']],
  ]);

  private readonly SUSPICIOUS_TLDS = new Set([
    '.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.club',
    '.work', '.bid', '.date', '.men', '.loan', '.download',
  ]);

  private readonly PHISHING_KEYWORDS = [
    'verify', 'verification', 'account', 'suspended', 'limited',
    'unauthorized', 'unusual', 'login', 'sign in', 'password',
    'credential', 'security alert', 'urgent', 'immediate action',
    'confirm your', 'update your', 'reactivate', 'restore',
    'unlock', 'unauthorized login', 'suspicious activity',
  ];

  analyzeEmail(email: EmailMessage): PhishingScore {
    const factors: PhishingFactor[] = [];
    let totalScore = 0;

    // Factor 1: Sender domain mismatch
    const senderFactor = this.checkSenderDomain(email);
    factors.push(senderFactor);
    totalScore += senderFactor.score;

    // Factor 2: Reply-to mismatch
    const replyFactor = this.checkReplyTo(email);
    factors.push(replyFactor);
    totalScore += replyFactor.score;

    // Factor 3: Link domain analysis
    const linkFactor = this.checkLinks(email);
    factors.push(linkFactor);
    totalScore += linkFactor.score;

    // Factor 4: Suspicious keywords in subject/body
    const keywordFactor = this.checkKeywords(email);
    factors.push(keywordFactor);
    totalScore += keywordFactor.score;

    // Factor 5: Urgency indicators
    const urgencyFactor = this.checkUrgency(email);
    factors.push(urgencyFactor);
    totalScore += urgencyFactor.score;

    // Factor 6: Attachment risk
    const attachmentFactor = this.checkAttachments(email);
    factors.push(attachmentFactor);
    totalScore += attachmentFactor.score;

    // Factor 7: SPF/DKIM/DMARC auth results
    const authFactor = this.checkEmailAuth(email);
    factors.push(authFactor);
    totalScore += authFactor.score;

    // Normalize to 0-100
    totalScore = Math.min(Math.round(totalScore / 7), 100);

    return {
      totalScore,
      risk: totalScore >= 70 ? 'critical' : totalScore >= 50 ? 'high' : totalScore >= 30 ? 'suspicious' : 'safe',
      factors,
    };
  }

  private checkSenderDomain(email: EmailMessage): PhishingFactor {
    for (const [brand, domains] of this.KNOWN_BRANDS) {
      // Check if email claims to be from a brand but domain doesn't match
      if (email.body.toLowerCase().includes(brand) || email.subject.toLowerCase().includes(brand)) {
        const isLegitimateDomain = domains.some(d => email.fromDomain === d || email.fromDomain.endsWith('.' + d));
        if (!isLegitimateDomain) {
          return {
            name: 'Sender Domain Mismatch',
            score: 90,
            detail: `Claims to be from ${brand} but sent from ${email.fromDomain}`,
          };
        }
      }
    }

    // Check for lookalike domains (homograph attack)
    const lookalike = this.detectLookalikeDomain(email.fromDomain);
    if (lookalike) {
      return {
        name: 'Lookalike Domain',
        score: 95,
        detail: `Domain ${email.fromDomain} mimics ${lookalike}`,
      };
    }

    // Check suspicious TLDs
    if (this.SUSPICIOUS_TLDS.has('.' + email.fromDomain.split('.').pop())) {
      return {
        name: 'Suspicious TLD',
        score: 60,
        detail: `Domain uses suspicious TLD: ${email.fromDomain}`,
      };
    }

    return { name: 'Sender Domain', score: 0, detail: 'Domain appears legitimate' };
  }

  private detectLookalikeDomain(domain: string): string | null {
    // Homograph detection — replaces lookalike characters
    const homographMap: Record<string, string> = {
      '0': 'o', '1': 'l', '3': 'e', '4': 'a', '5': 's',
      '7': 't', '8': 'b', '@': 'a', 'rn': 'm', 'rn': 'm',
    };
    const normalized = domain.toLowerCase();

    for (const [brand, domains] of this.KNOWN_BRANDS) {
      for (const legitDomain of domains) {
        let normalizedLegit = legitDomain;
        for (const [char, replacement] of Object.entries(homographMap)) {
          normalizedLegit = normalizedLegit.replaceAll(char, replacement);
        }
        let normalizedDomain = normalized;
        for (const [char, replacement] of Object.entries(homographMap)) {
          normalizedDomain = normalizedDomain.replaceAll(char, replacement);
        }

        if (normalizedDomain !== normalized && normalizedDomain === normalizedLegit) {
          return legitDomain;
        }

        // Check for subdomain tricks: instagram.com.security-alert.xyz
        if (domain.includes(legitDomain.replace('.', '\\.')) && !domain.endsWith(legitDomain)) {
          return legitDomain;
        }
      }
    }
    return null;
  }

  private checkReplyTo(email: EmailMessage): PhishingFactor {
    if (email.replyTo && email.replyTo !== email.from) {
      return {
        name: 'Reply-To Mismatch',
        score: 70,
        detail: `Reply-To (${email.replyTo}) differs from From (${email.from})`,
      };
    }
    return { name: 'Reply-To', score: 0, detail: 'Reply-To matches sender' };
  }

  private checkLinks(email: EmailMessage): PhishingFactor {
    let suspiciousCount = 0;

    for (const link of email.links) {
      try {
        const url = new URL(link);
        // Check for IP address instead of domain
        if (/\d+\.\d+\.\d+\.\d+/.test(url.hostname)) {
          suspiciousCount += 2;
        }
        // Check for mismatched display text vs actual URL
        if (url.protocol !== 'https:') suspiciousCount++;
        // Check for encoded URLs
        if (link.includes('%')) suspiciousCount++;
        // Check for URL shorteners
        if (['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'rb.gy', 'shorturl.at'].includes(url.hostname)) {
          suspiciousCount++;
        }
      } catch {
        suspiciousCount += 3; // Malformed URL
      }
    }

    if (suspiciousCount >= 3) {
      return {
        name: 'Suspicious Links',
        score: 85,
        detail: `${suspiciousCount} suspicious indicators in links`,
      };
    }
    if (suspiciousCount > 0) {
      return {
        name: 'Suspicious Links',
        score: 40,
        detail: `${suspiciousCount} minor suspicious link indicators`,
      };
    }
    return { name: 'Links', score: 0, detail: 'All links appear legitimate' };
  }

  private checkKeywords(email: EmailMessage): PhishingFactor {
    const text = `${email.subject} ${email.body}`.toLowerCase();
    const found = this.PHISHING_KEYWORDS.filter(k => text.includes(k.toLowerCase()));

    if (found.length >= 5) {
      return {
        name: 'Phishing Keywords',
        score: 75,
        detail: `Found ${found.length} phishing keywords: ${found.slice(0, 5).join(', ')}`,
      };
    }
    if (found.length >= 2) {
      return {
        name: 'Phishing Keywords',
        score: 30,
        detail: `Found ${found.length} phishing keywords`,
      };
    }
    return { name: 'Keywords', score: 0, detail: 'No phishing keywords detected' };
  }

  private checkUrgency(email: EmailMessage): PhishingFactor {
    const urgencyPatterns = [
      /\b(urgent|immediately|asap|right away|without delay)\b/i,
      /\b(24 hours|48 hours|within 24|expires?|deadline)\b/i,
      /\b(action required|response required|must respond)\b/i,
      /\b(final warning|last notice|account will be (closed|suspended|deleted|terminated))\b/i,
      /❗|⚠️|🔴|🚨|🔐/,
    ];

    const urgencyCount = urgencyPatterns.filter(p => p.test(`${email.subject} ${email.body}`)).length;

    if (urgencyCount >= 3) {
      return {
        name: 'Urgency Pressure',
        score: 70,
        detail: `High urgency pressure detected (${urgencyCount} indicators)`,
      };
    }
    if (urgencyCount >= 1) {
      return {
        name: 'Urgency Pressure',
        score: 20,
        detail: `Some urgency indicators found`,
      };
    }
    return { name: 'Urgency', score: 0, detail: 'No urgency pressure' };
  }

  private checkAttachments(email: EmailMessage): PhishingFactor {
    const dangerousExtensions = new Set(['.exe', '.msi', '.bat', '.cmd', '.vbs', '.ps1', '.scr', '.jar', '.js', '.wsf']);

    if (email.attachments.length === 0) {
      return { name: 'Attachments', score: 0, detail: 'No attachments' };
    }

    for (const att of email.attachments) {
      if (dangerousExtensions.has(att.extension.toLowerCase())) {
        return {
          name: 'Dangerous Attachment',
          score: 90,
          detail: `Attachment ${att.filename} is an executable type`,
        };
      }
      // Office documents with macros
      if (['.docm', '.xlsm', '.pptm'].includes(att.extension.toLowerCase())) {
        return {
          name: 'Macro-Enabled Document',
          score: 70,
          detail: `Attachment ${att.filename} may contain macros`,
        };
      }
      // Archived executables
      if (['.zip', '.rar', '.7z'].includes(att.extension.toLowerCase())) {
        return {
          name: 'Archived Attachment',
          score: 30,
          detail: 'Archive files can contain malicious payloads',
        };
      }
    }

    return { name: 'Attachments', score: 0, detail: 'No dangerous attachments' };
  }

  private checkEmailAuth(email: EmailMessage): PhishingFactor {
    const authResults = email.headers['authentication-results'] || '';
    const spfPass = authResults.includes('spf=pass');
    const dkimPass = authResults.includes('dkim=pass');
    const dmarcPass = authResults.includes('dmarc=pass');

    if (!spfPass && !dkimPass && !dmarcPass) {
      return {
        name: 'Email Authentication Failed',
        score: 85,
        detail: 'SPF, DKIM, and DMARC all failed — email may be spoofed',
      };
    }
    if (!dmarcPass) {
      return {
        name: 'DMARC Failed',
        score: 50,
        detail: 'DMARC policy check failed — domain may be impersonated',
      };
    }
    return { name: 'Email Auth', score: 0, detail: 'SPF, DKIM, DMARC passed' };
  }
}

// ─── Instagram-Specific Phishing Detection ───

class InstagramPhishDetector extends PhishingDetector {
  private readonly INSTAGRAM_PHISHING_PATTERNS = [
    // Fake login pages
    /instagram[^\.]*\.(tk|ml|ga|cf|gq|xyz|top|club)/i,
    // Common phishing URL patterns
    /instagram.*(?:verify|login|auth|secure|confirm)/i,
    /instagram.*(?:challenge|restricted|violation|copyright)/i,
    // Fake support emails
    /support@.*instagram.*(?!\.com)/i,
    /instagram.*help.*center/i,
    // Verification scams
    /verified|verification.*badge|blue.*tick/i,
    // Fake giveaway
    /winner|giveaway|congratulations.*selected|free.*followers/i,
  ];

  analyzeInstagramSpecific(url: string, senderEmail: string): PhishingFactor[] {
    const factors: PhishingFactor[] = [];

    // Check URL
    for (const pattern of this.INSTAGRAM_PHISHING_PATTERNS) {
      if (pattern.test(url)) {
        factors.push({
          name: 'Instagram Phishing Pattern',
          score: 95,
          detail: `URL matches known Instagram phishing pattern: ${pattern}`,
        });
      }
    }

    // Check sender
    if (senderEmail && !senderEmail.endsWith('@instagram.com') && !senderEmail.endsWith('@support.instagram.com') && !senderEmail.endsWith('@mail.instagram.com') && !senderEmail.endsWith('@facebook.com')) {
      factors.push({
        name: 'Non-Instagram Sender',
        score: 80,
        detail: `Official Instagram emails come from @instagram.com, @support.instagram.com, or @mail.instagram.com, not ${senderEmail.split('@')[1] || 'unknown'}`,
      });
    }

    return factors;
  }
}
```

### 2.2 Social Engineering Countermeasures

**For Individuals:**

| Countermeasure | How It Stops Attacks |
|----------------|---------------------|
| **Verify out-of-band** | Call the person on a known number, not the one in the email |
| **Use hardware security keys** | FIDO2/U2F keys cannot be phished — they bind to the real domain |
| **Check URLs before clicking** | Hover over links, examine the actual domain, not the display text |
| **Enable DMARC rejection** | Configure email to reject messages that fail DMARC (p=reject) |
| **Use a password manager** | It auto-fills only on the correct domain — won't fill on phishing sites |
| **Code word** | Establish a secret code word with family for phone verification |
| **Slow down** | Attackers create urgency — pause and verify independently |

**For Organizations:**

| Control | Implementation |
|---------|---------------|
| **DMARC Reject Policy** | `p=reject` in DNS TXT record — prevents domain spoofing |
| **BIMI** | Brand Indicators for Message Identification — display verified logos |
| **Phishing Simulation** | Regular simulated phishing campaigns with training |
| **Security Key Enforcement** | Mandate FIDO2 hardware keys for all employees |
| **Report Button** | Easy one-click phish reporting integrated into email client |
| **Take-Down Service** | Commercial service that identifies and shuts down lookalike domains |

---

## 3. Credential Attacks

### 3.1 Credential Stuffing — The Reuse Epidemic

**How it works:** Attackers take username/password pairs from data breaches and try them on other services. With 10+ billion credentials available in public breach databases, most accounts have been tested.

**The Scale:**
- Average person uses **191 services** but only **25 unique passwords**
- **65%** of people reuse passwords across multiple sites
- A single breach can expose credentials that work on 3-5 other services
- **8 billion** credential pairs available in public paste sites (2024)

**Credential Stuffing Prevention — TypeScript:**

```typescript
// credential-stuffing-prevention.ts — Detect and Block Credential Stuffing

interface LoginAttempt {
  timestamp: Date;
  ip: string;
  username: string;
  password: string;
  userAgent: string;
  success: boolean;
  country: string;
  isp: string;
}

interface StuffingDetectionResult {
  isAttack: boolean;
  confidence: number; // 0-100
  indicators: string[];
  recommendedAction: 'allow' | 'challenge' | 'block' | 'ratelimit';
}

class CredentialStuffingDetector {
  private recentAttempts: Map<string, LoginAttempt[]> = new Map();
  private readonly WINDOW_MS = 300000; // 5 minutes
  private readonly MAX_ATTEMPTS_PER_IP = 10;
  private readonly MAX_ATTEMPTS_PER_USER = 5;

  analyze(attempt: LoginAttempt): StuffingDetectionResult {
    this.trackAttempt(attempt);
    const indicators: string[] = [];
    let score = 0;

    // 1. High velocity from single IP
    const attemptsFromIP = this.getAttemptsInWindow(a => a.ip === attempt.ip);
    if (attemptsFromIP.length > this.MAX_ATTEMPTS_PER_IP) {
      score += 30;
      indicators.push(`High velocity: ${attemptsFromIP.length} attempts from ${attempt.ip} in 5min`);
    }

    // 2. Multiple different usernames from same IP
    const uniqueUsers = new Set(attemptsFromIP.map(a => a.username));
    if (uniqueUsers.size > 5) {
      score += 30;
      indicators.push(`Multiple targets: ${uniqueUsers.size} different usernames from same IP`);
    }

    // 3. All attempts failing (stuffing rarely succeeds on first try)
    const allFailed = attemptsFromIP.length > 5 && attemptsFromIP.every(a => !a.success);
    if (allFailed) {
      score += 20;
      indicators.push('Zero success rate — typical of automated stuffing');
    }

    // 4. Unusual user-agent or missing headers
    if (!attempt.userAgent || attempt.userAgent.length < 10 || attempt.userAgent.includes('curl') || attempt.userAgent.includes('python')) {
      score += 15;
      indicators.push(`Suspicious user-agent: ${attempt.userAgent || 'missing'}`);
    }

    // 5. Known breached credentials
    if (this.isKnownBreachedCredential(attempt.username, attempt.password)) {
      score += 25;
      indicators.push('Credentials found in known breach database');
    }

    // 6. High attempt rate on single user
    const userAttempts = this.getAttemptsInWindow(a => a.username === attempt.username);
    if (userAttempts.length > this.MAX_ATTEMPTS_PER_USER) {
      score += 20;
      indicators.push(`Brute force on user ${attempt.username}: ${userAttempts.length} attempts in 5min`);
    }

    // 7. Geographic anomalies
    const previousIPs = this.getAttemptsInWindow(a => a.username === attempt.username && a.ip !== attempt.ip);
    const uniqueCountries = new Set(previousIPs.map(a => a.country));
    if (uniqueCountries.size > 2) {
      score += 15;
      indicators.push(`Login attempts from ${uniqueCountries.size} different countries for same user`);
    }

    // 8. Velocity-based IP reputation
    const ipReputation = this.checkIPReputation(attempt.ip);
    if (ipReputation < 0.3) {
      score += 20;
      indicators.push(`Low IP reputation score: ${ipReputation}`);
    }

    return {
      isAttack: score >= 50,
      confidence: Math.min(score, 100),
      indicators,
      recommendedAction: score >= 70 ? 'block' : score >= 50 ? 'challenge' : score >= 30 ? 'ratelimit' : 'allow',
    };
  }

  private trackAttempt(attempt: LoginAttempt): void {
    const key = attempt.ip;
    if (!this.recentAttempts.has(key)) {
      this.recentAttempts.set(key, []);
    }
    this.recentAttempts.get(key)!.push(attempt);

    // Clean old entries
    const cutoff = Date.now() - this.WINDOW_MS;
    this.recentAttempts.get(key)!.filter(a => a.timestamp.getTime() > cutoff);
  }

  private getAttemptsInWindow(filter: (a: LoginAttempt) => boolean): LoginAttempt[] {
    const cutoff = Date.now() - this.WINDOW_MS;
    const all: LoginAttempt[] = [];
    for (const attempts of this.recentAttempts.values()) {
      for (const a of attempts) {
        if (a.timestamp.getTime() > cutoff && filter(a)) {
          all.push(a);
        }
      }
    }
    return all;
  }

  private isKnownBreachedCredential(username: string, password: string): boolean {
    // In production: query HIBP API or local breach database
    // Return true if the credential pair is found in known breaches
    return false; // Placeholder
  }

  private checkIPReputation(ip: string): number {
    // In production: query AbuseIPDB, VirusTotal, or internal threat intel
    // Return 0.0 (malicious) to 1.0 (clean)
    return 0.8; // Placeholder
  }
}
```

### 3.2 Password Attacks Comparison

| Attack | Method | Speed | Detection | Prevention |
|--------|--------|-------|-----------|------------|
| **Dictionary** | Try words from a wordlist (rockyou.txt) | Millions/sec | Easy (rate limiting) | Complex passphrase, not dictionary word |
| **Brute Force** | Try all possible character combinations | Slows exponentially with length | Easy (rate limiting, lockout) | 16+ character passwords |
| **Stuffing** | Try known pairs across services | Platform dependent | Medium (velocity + IP analysis) | Unique password per service |
| **Spraying** | Try common passwords against many users | Slow, evades lockout | Hard (low-and-slow detection) | Strong unique passwords + MFA |
| **Mask** | Brute force with known pattern (Summer2024!) | Fast for known patterns | Easy | Avoid patterns, dates, names |
| **Rainbow Table** | Precomputed hash lookup for common passwords | Instant | Easy (use salted hashes) | Salts make rainbow tables useless |
| **Hybrid** | Dictionary + mutations (leet speak, append digits) | Fast | Medium | Avoid common substitutions |

**Password Strength Estimation:**

```typescript
// password-strength.ts — Entropy-Based Password Strength Calculator

interface PasswordStrength {
  score: number; // 0-100
  entropy: number; // bits
  crackTime: string; // estimated time to crack
  feedback: string[];
  breachesFound: number;
}

class PasswordStrengthCalculator {
  private readonly COMMON_PASSWORDS = new Set([
    '123456', 'password', '12345678', 'qwerty', '123456789',
    '12345', '1234', '111111', '1234567', 'sunshine', 'qwerty123',
    'iloveyou', 'princess', 'admin', 'welcome', '666666', 'abc123',
    'football', '123123', 'monkey', '654321', '!@#$%^&*', 'charlie',
    'aa123456', 'donald', 'password1', 'qwerty12345',
  ]);

  private readonly COMMON_PATTERNS = [
    /^(19|20)\d{2}$/, // Years
    /^[a-z]+$/, // Lowercase only
    /^[A-Z]+$/, // Uppercase only
    /^\d+$/, // Digits only
    /^(password|pass|admin|user|guest|temp)\d*$/i,
    /^(\d)\1{5,}$/, // Repeated digits
    /^([a-z])\1{5,}$/i, // Repeated letters
    /^(qwerty|asdfgh|zxcvbn|azerty)/i, // Keyboard patterns
    /^(123|234|345|456|567|678|789|890)/, // Sequential
    /^(abc|bcd|cde|def|efg)/i, // Sequential letters
  ];

  calculate(password: string): PasswordStrength {
    const feedback: string[] = [];
    let score = 0;

    // Check common passwords
    if (this.COMMON_PASSWORDS.has(password.toLowerCase())) {
      feedback.push('This is one of the most common passwords — instantly guessed');
      return {
        score: 0, entropy: 0, crackTime: 'instant',
        feedback, breachesFound: 1000000,
      };
    }

    // Pattern penalties
    for (const pattern of this.COMMON_PATTERNS) {
      if (pattern.test(password)) {
        feedback.push('Password follows a predictable pattern');
        score -= 20;
      }
    }

    // Length scoring
    if (password.length < 8) {
      feedback.push('Password is too short. Use at least 12 characters');
      score += password.length * 4;
    } else if (password.length < 12) {
      score += password.length * 5;
      feedback.push('Consider using 14+ characters for strong security');
    } else if (password.length < 16) {
      score += password.length * 6;
    } else {
      score += password.length * 7;
    }

    // Character diversity
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    const charTypes = [hasLower, hasUpper, hasDigit, hasSpecial].filter(Boolean).length;
    score += charTypes * 10;

    if (!hasUpper) feedback.push('Add uppercase letters');
    if (!hasDigit) feedback.push('Add digits');
    if (!hasSpecial) feedback.push('Add special characters (!@#$%^&*)');

    // Entropy calculation
    let charset = 0;
    if (hasLower) charset += 26;
    if (hasUpper) charset += 26;
    if (hasDigit) charset += 10;
    if (hasSpecial) charset += 32;
    if (charset === 0) charset = 26; // fallback

    const entropy = Math.log2(Math.pow(charset, password.length));

    // Crack time estimation
    const guessesPerSecond = 10000000000; // 10 billion/s (modern GPU cluster)
    const combinations = Math.pow(charset, password.length);
    const secondsToCrack = combinations / guessesPerSecond;

    let crackTime: string;
    if (secondsToCrack < 1) crackTime = 'instant';
    else if (secondsToCrack < 60) crackTime = `${Math.round(secondsToCrack)} seconds`;
    else if (secondsToCrack < 3600) crackTime = `${Math.round(secondsToCrack / 60)} minutes`;
    else if (secondsToCrack < 86400) crackTime = `${Math.round(secondsToCrack / 3600)} hours`;
    else if (secondsToCrack < 31536000) crackTime = `${Math.round(secondsToCrack / 86400)} days`;
    else if (secondsToCrack < 315360000) crackTime = `${Math.round(secondsToCrack / 31536000)} months`;
    else crackTime = `${Math.round(secondsToCrack / 31536000)} years`;

    // Normalize score to 0-100
    score = Math.max(0, Math.min(100, score));

    if (score >= 80) feedback.push('Strong password — excellent entropy');
    else if (score >= 60) feedback.push('Good password — consider making it longer');
    else if (score >= 40) feedback.push('Weak password — add length and complexity');
    else feedback.push('Very weak password — change immediately');

    return {
      score: Math.round(score),
      entropy: Math.round(entropy * 10) / 10,
      crackTime,
      feedback,
      breachesFound: 0,
    };
  }
}
```

---

## 4. Session Hijacking & MFA Bypass

### 4.1 Session Hijacking — The Hidden Threat

Modern platforms use **session tokens** (cookies, JWTs) stored in your browser. If an attacker steals these tokens, they can access your account **without needing your password or MFA**.

**Session Hijacking Vectors:**

| Vector | How It Works | Prevalence | Platform Risk |
|--------|-------------|------------|--------------|
| **Malicious Browser Extension** | Extension reads cookies from document.cookie | Very High | All web platforms |
| **XSS** | Cross-site scripting steals localStorage session | Medium | Sites with injection vulns |
| **Session Fixation** | Attacker sets session ID, victim auths with it | Low | Legacy platforms |
| **Network Sniffing** | Capture cookies over unencrypted HTTP | Low (HTTPS is default) | Public Wi-Fi |
| **Token Leakage in Logs** | OAuth tokens in URL params logged by proxies | Medium | Any OAuth2 app |
| **Malware with Cookie Stealer** | Steals browser cookie database files | High | Desktop platforms |

**Session Hijacking Detection — TypeScript:**

```typescript
// session-security.ts — Session Hijacking Detection and Prevention

interface SessionInfo {
  id: string;
  userId: string;
  createdAt: Date;
  lastActivity: Date;
  ip: string;
  userAgent: string;
  deviceFingerprint: string;
  location: { city: string; country: string };
  isCurrentSession: boolean;
}

interface SessionAnomaly {
  type: 'new_location' | 'new_device' | 'new_ip' | 'impossible_travel' | 'ua_change' | 'fingerprint_change';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: Date;
}

class SessionSecurityMonitor {
  private readonly MAX_TRAVEL_SPEED_KMH = 1100; // Max possible travel speed

  detectAnomalies(currentSession: SessionInfo, previousSessions: SessionInfo[]): SessionAnomaly[] {
    const anomalies: SessionAnomaly[] = [];

    // 1. Impossible Travel Detection
    for (const prev of previousSessions) {
      if (prev.id === currentSession.id) continue;

      const timeDiff = Math.abs(currentSession.lastActivity.getTime() - prev.lastActivity.getTime());
      const hoursDiff = timeDiff / (1000 * 60 * 60);

      if (hoursDiff < 1) {
        // Same hour — check if locations are different
        const distance = this.calculateDistance(
          prev.location, currentSession.location
        );

        if (distance > 100 && hoursDiff > 0) {
          const speed = distance / hoursDiff;
          if (speed > this.MAX_TRAVEL_SPEED_KMH) {
            anomalies.push({
              type: 'impossible_travel',
              severity: 'critical',
              description: `Session activity from ${prev.location.city} and ${currentSession.location.city} within ${Math.round(hoursDiff * 60)} minutes — impossible travel speed of ${Math.round(speed)} km/h`,
              timestamp: new Date(),
            });
          }
        }
      }
    }

    // 2. User-Agent Change
    const consistentUA = previousSessions.some(
      s => s.userAgent === currentSession.userAgent && s.id !== currentSession.id
    );
    if (!consistentUA && previousSessions.length > 2) {
      anomalies.push({
        type: 'ua_change',
        severity: 'medium',
        description: `User-Agent changed from "${previousSessions[0].userAgent.substring(0, 50)}..." to "${currentSession.userAgent.substring(0, 50)}..."`,
        timestamp: new Date(),
      });
    }

    // 3. Device Fingerprint Change
    const consistentFP = previousSessions.some(
      s => s.deviceFingerprint === currentSession.deviceFingerprint && s.id !== currentSession.id
    );
    if (!consistentFP && previousSessions.length > 0) {
      anomalies.push({
        type: 'fingerprint_change',
        severity: 'high',
        description: 'Device fingerprint differs from previous sessions — possible token theft',
        timestamp: new Date(),
      });
    }

    // 4. New IP / Location
    const knownIPs = new Set(previousSessions.map(s => s.ip));
    if (!knownIPs.has(currentSession.ip)) {
      anomalies.push({
        type: 'new_ip',
        severity: 'medium',
        description: `New IP address: ${currentSession.ip} (${currentSession.location.city}, ${currentSession.location.country})`,
        timestamp: new Date(),
      });
    }

    return anomalies;
  }

  private calculateDistance(loc1: { city: string; country: string }, loc2: { city: string; country: string }): number {
    // Simplified — in production use lat/lng coordinates
    if (loc1.country !== loc2.country) return 1000; // Different countries
    if (loc1.city !== loc2.city) return 200; // Different city, same country
    return 0; // Same location
  }
}

// ─── Session Token Security Utilities ───

class SessionSecurityUtils {
  static generateSessionId(): string {
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  static isSessionExpired(createdAt: Date, maxAgeMs: number): boolean {
    return Date.now() - createdAt.getTime() > maxAgeMs;
  }

  static computeDeviceFingerprint(navigator: any): string {
    const components = [
      navigator.userAgent || '',
      navigator.language || '',
      navigator.platform || '',
      screen.width || '',
      screen.height || '',
      screen.colorDepth || '',
      navigator.hardwareConcurrency || '',
      navigator.deviceMemory || '',
    ];
    // Simple hash (in production use SHA-256)
    const fingerprint = components.join('|||');
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  }

  static bindSessionToDevice(session: SessionInfo): void {
    // Store device fingerprint in session
    // On each request, verify fingerprint matches
    // If mismatch → require re-authentication
    console.log(`Session ${session.id} bound to device ${session.deviceFingerprint}`);
  }
}
```

### 4.2 MFA Bypass Techniques & Countermeasures

| Bypass Technique | How It Works | Effectiveness | Prevention |
|-----------------|-------------|--------------|------------|
| **MFA Fatigue** | Repeated push notifications until user accepts | Very High | Number matching, rate limiting push to 3/hr |
| **SIM Swap** | Port victim's number to attacker's SIM | Very High | Carrier PIN, port freeze, Google Voice |
| **OAuth Token Theft** | Steal OAuth access/refresh tokens | Very High | Short-lived tokens, PKCE, token binding |
| **Backup Code Theft** | Recovery codes stolen from cloud storage/email | High | Store offline, never in cloud |
| **SS7 Exploit** | Intercept SMS at protocol level | Very High (targeted) | App-based TOTP, not SMS |
| **MFA Proxy (evilginx)** | Reverse proxy harvesting both password + MFA token | Very High | FIDO2 hardware keys (phishing-resistant) |
| **Session Token Reuse** | Use stolen session token (bypasses MFA entirely) | Critical | Short session expiry, device binding |

**The Hierarchy of MFA Security:**

```
WEAKEST
┌────────────────────────────────────────────┐
│ SMS / Voice Call 2FA                      │ ← SS7, SIM swap, phishing
├────────────────────────────────────────────┤
│ TOTP (Google Auth, Authy, Microsoft Auth)  │ ← Phishing, malware
├────────────────────────────────────────────┤
│ Push Notification (Duo, Okta)              │ ← MFA fatigue
├────────────────────────────────────────────┤
│ FIDO2/WebAuthn (software)                  │ ← Phishing-resistant
├────────────────────────────────────────────┤
│ FIDO2 Hardware Key (YubiKey)              │ ← Phishing-resistant, hardware-bound
└────────────────────────────────────────────┘
STRONGEST
```

---

## 5. SIM Swapping — The Most Devastating Attack

### 5.1 How SIM Swapping Works

SIM swapping (also called SIM hijacking, SIM splitting, or port-out scam) is when an attacker convinces your mobile carrier to transfer your phone number to a SIM card they control.

**Complete Attack Chain:**

```
PHASE 1: RECONNAISSANCE
──────────────────────────────────────────────
1. Attacker gathers personal information via OSINT:
   - Full name, DOB, address (data breaches)
   - Mother's maiden name (social media)
   - Last 4 digits of SSN (breach data)
   - Account number (bank statement in trash)
   - Recent transactions (phishing)

PHASE 2: SOCIAL ENGINEERING CARRIER
──────────────────────────────────────────────
2. Attacker calls mobile carrier's customer service
3. Attacker impersonates the victim using collected info
4. OR attacker bribes/coerces an employee (insider threat)
5. OR attacker visits a store with fake ID

PHASE 3: SIM ACTIVATION
──────────────────────────────────────────────
6. Carrier deactivates victim's SIM
7. Victim's number is ported to attacker's SIM
8. Victim's phone shows "No Service" / "SOS Only"

PHASE 4: ACCOUNT TAKEOVER
──────────────────────────────────────────────
9. Attacker uses "Forgot Password" on victim's accounts
10. SMS 2FA code sent to attacker's phone
11. Attacker resets passwords, locks out victim
12. Attack happens FAST — within 10-30 minutes

PHASE 5: EXFILTRATION
──────────────────────────────────────────────
13. Crypto wallets drained
14. Bank accounts emptied
15. Email accessed for additional password resets
16. Social media accounts locked/held for ransom
```

**Real-World Impact:**
- Average financial loss from SIM swap: **$150,000+**
- Crypto investors targeted heavily (Twitter crypto elite SIM swap ring, 2023)
- **Michael Terpin** lost $24M in crypto to a SIM swap (AT&T was found liable for $225M)
- 2024: SIM swap attacks increased 400% year-over-year (FBI IC3 report)

### 5.2 SIM Swap Prevention

| Protection | Implementation | Effectiveness |
|-----------|---------------|--------------|
| **Carrier PIN / Account PIN** | Set a PIN/password required for any account changes | Stops most social engineering |
| **Port Freeze / No-Port** | Request carrier to lock number from being ported | Very effective against porting |
| **Use Google Voice** | Forward Google Voice number; port protect via Google | Excellent |
| **Remove SMS 2FA** | Never use SMS for 2FA — use TOTP or hardware keys | Critical |
| **Separate Phone Line** | Use a separate cheap phone/plan for 2FA only | Recommended for high-value targets |
| **Contact Carrier Immediately** | If phone loses service, call carrier immediately | Limits damage window |
| **Prepaid SIM** | Prepaid carriers are harder to social-engineer | Moderate |

**Carrier Security Checklist:**

```typescript
// sim-swap-prevention.ts — SIM Swap Risk Assessment

interface CarrierAccount {
  carrier: string;
  phoneNumber: string;
  hasPin: boolean;
  pinType: 'none' | 'numeric' | 'alphanumeric';
  portFreeze: boolean;
  onlineAccountPassword: string;
  securityQuestions: boolean;
  insiderThreatProtection: boolean; // Carrier notifies of employee access
}

interface SIMSwapRisk {
  riskScore: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  missingProtections: string[];
  recommendations: string[];
}

class SIMSwapProtectionAudit {
  audit(account: CarrierAccount): SIMSwapRisk {
    const missing: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 100;

    // PIN protection
    if (!account.hasPin) {
      missing.push('Account PIN not set');
      riskScore -= 0; // Keep high risk
    } else {
      riskScore -= 30;
    }
    if (account.hasPin && account.pinType === 'numeric') {
      recommendations.push('Use alphanumeric PIN instead of numeric');
    }

    // Port freeze
    if (!account.portFreeze) {
      missing.push('Port freeze not enabled');
    } else {
      riskScore -= 30;
    }

    // Online account password
    if (!account.onlineAccountPassword || account.onlineAccountPassword.length < 8) {
      missing.push('Weak or missing online account password');
    } else {
      riskScore -= 10;
    }

    // Security questions
    if (account.securityQuestions) {
      recommendations.push('Use fictional answers for security questions — not real data');
      riskScore -= 5;
    }

    // Insider threat protection
    if (!account.insiderThreatProtection) {
      recommendations.push('Ask carrier if they offer employee access notifications');
    } else {
      riskScore -= 10;
    }

    riskScore = Math.max(0, riskScore);

    return {
      riskScore,
      riskLevel: riskScore >= 70 ? 'critical' : riskScore >= 40 ? 'high' : riskScore >= 20 ? 'medium' : 'low',
      missingProtections: missing,
      recommendations,
    };
  }
}
```

---

## 6. Platform-Specific Forensics

### 6.1 Instagram Forensics

**Evidence Sources:**

| Source | What It Reveals | How to Access |
|--------|----------------|---------------|
| **Login Activity** | Device, location, IP, timestamp, browser | Settings → Security → Login Activity |
| **Email Notifications** | Password changes, email changes, new logins | Check email inbox for security notifications |
| **Download Your Data** | Full account history including IP logs | Settings → Your Activity → Download Your Info → JSON format |
| **Emails from Instagram** | Headers show sender IP, DMARC results | View full email headers in Gmail/Outlook |
| **Login Sessions** | Active sessions with device info | Settings → Security → Login Activity → See All |

**Instagram Data Download — Extracting Evidence:**

```typescript
// instagram-forensics.ts — Parse Instagram Data Download for Evidence

interface InstagramDataExport {
  account_information: AccountInfo;
  security_and_login_information: LoginInfo;
  recent_login_activity: LoginEntry[];
  account_based_in: AccountLocation;
}

interface AccountInfo {
  username: string;
  email: string;
  phone_number: string;
  linked_accounts: LinkedAccount[];
  email_change_history: EmailChangeEvent[];
  phone_change_history: PhoneChangeEvent[];
}

interface EmailChangeEvent {
  old_email: string;
  new_email: string;
  changed_at: string;
  changed_from_ip: string;
}

interface LoginInfo {
  login_activity: LoginEntry[];
  devices: DeviceInfo[];
}

interface LoginEntry {
  timestamp: string;
  ip_address: string;
  device: string;
  browser: string;
  location: string;
  login_type: string; // "password", "saved", "session"
  cookie_used: boolean;
}

interface DeviceInfo {
  name: string;
  os_version: string;
  last_login: string;
  is_trusted: boolean;
}

class InstagramForensicsEngine {
  parseExport(jsonData: string): InstagramForensicReport {
    const data = JSON.parse(jsonData) as InstagramDataExport;
    const report = new InstagramForensicReport();

    // Extract login activity
    report.logins = data.recent_login_activity?.map(e => ({
      timestamp: new Date(e.timestamp),
      ip: e.ip_address,
      device: e.device,
      browser: e.browser,
      location: e.location,
    })) || [];

    // Detect geographic anomalies
    report.anomalies = this.detectAnomalies(report.logins);

    // Extract email changes
    report.emailChanges = data.account_information?.email_change_history?.map(e => ({
      oldEmail: e.old_email,
      newEmail: e.new_email,
      timestamp: new Date(e.changed_at),
      sourceIP: e.changed_from_ip,
    })) || [];

    // Extract linked accounts
    report.linkedAccounts = data.account_information?.linked_accounts?.map(a => ({
      platform: a.platform,
      accountId: a.account_id,
      linkedDate: a.linked_at,
    })) || [];

    // Device analysis
    report.devices = data.security_and_login_information?.devices?.map(d => ({
      name: d.name,
      os: d.os_version,
      lastLogin: new Date(d.last_login),
      trusted: d.is_trusted,
    })) || [];

    // Risk scoring
    report.riskScore = this.calculateRiskScore(report);

    return report;
  }

  private detectAnomalies(logins: LoginEntry[]): ForensicAnomaly[] {
    const anomalies: ForensicAnomaly[] = [];
    const ipSet = new Set<string>();
    const locationSet = new Set<string>();

    for (const login of logins) {
      if (ipSet.has(login.ip)) continue;
      ipSet.add(login.ip);

      // Check for VPN/Proxy IPs
      if (this.isVPNIP(login.ip)) {
        anomalies.push({
          type: 'vpn_detected',
          severity: 'medium',
          description: `Login from VPN/proxy IP: ${login.ip} at ${login.location}`,
          timestamp: login.timestamp,
          ip: login.ip,
        });
      }
    }

    // Multiple locations in short time
    const sorted = [...logins].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      const hoursDiff = (curr.timestamp.getTime() - prev.timestamp.getTime()) / (1000 * 3600);
      if (hoursDiff < 2 && prev.location !== curr.location) {
        anomalies.push({
          type: 'rapid_location_change',
          severity: 'high',
          description: `Login from ${prev.location} then ${curr.location} in ${Math.round(hoursDiff * 60)} minutes`,
          timestamp: curr.timestamp,
          ip: curr.ip,
        });
      }
    }

    return anomalies;
  }

  private calculateRiskScore(report: InstagramForensicReport): number {
    let score = 0;
    if (report.anomalies.some(a => a.severity === 'critical')) score += 40;
    if (report.anomalies.some(a => a.severity === 'high')) score += 25;
    if (report.emailChanges.length > 0) score += 30;
    if (report.logins.some(l => !l.browser || l.browser === 'Unknown')) score += 15;
    return Math.min(score, 100);
  }

  private isVPNIP(ip: string): boolean {
    // Check against known VPN/Proxy IP ranges
    // In production: use IP geolocation + reputation services
    return false;
  }
}

class InstagramForensicReport {
  logins: LoginEntry[] = [];
  anomalies: ForensicAnomaly[] = [];
  emailChanges: EmailChange[] = [];
  linkedAccounts: LinkedAccount[] = [];
  devices: DeviceInfo[] = [];
  riskScore = 0;

  generateSummary(): string {
    return `
INSTAGRAM FORENSIC REPORT
═══════════════════════════════════════════════════
Generated: ${new Date().toISOString()}

SUMMARY
───────────────────────────────────────────────────
Total Login Sessions: ${this.logins.length}
Anomalies Detected:   ${this.anomalies.length}
Email Changes:        ${this.emailChanges.length}
Known Devices:        ${this.devices.length}
Risk Score:           ${this.riskScore}/100

${this.anomalies.length > 0 ? `
ANOMALIES:
${this.anomalies.map(a => `  [${a.severity.toUpperCase()}] ${a.description}`).join('\n')}` : ''}

${this.emailChanges.length > 0 ? `
EMAIL CHANGES:
${this.emailChanges.map(e => `  ${e.timestamp.toISOString()}: ${e.oldEmail} → ${e.newEmail} from IP ${e.sourceIP}`).join('\n')}` : ''}

DEVICES:
${this.devices.map(d => `  ${d.name} (${d.os}) - Last: ${d.lastLogin.toISOString()} ${d.trusted ? '[Trusted]' : '[Untrusted]'}`).join('\n')}

RECOMMENDATIONS:
${this.riskScore >= 50 ? '  ■ Account likely compromised — follow IR playbook immediately' : ''}
${this.anomalies.length > 0 ? '  ■ Review all anomalous logins and revoke unrecognized sessions' : ''}
${this.emailChanges.length > 0 ? '  ■ Email was changed — recover email account first' : ''}
  ■ Log out of all sessions
  ■ Enable 2FA with authenticator app
  ■ Revoke all third-party app access
  ■ Change password to a unique 20+ character passphrase
`;
  }
}
```

### 6.2 Platform Forensics Reference

| Platform | Data Export | Key Forensic Fields | Download Path |
|----------|------------|-------------------|---------------|
| **Instagram** | JSON download | `ip_address`, `device`, `login_type`, `email_change_history` | Settings → Your Activity → Download Your Info |
| **Twitter/X** | ZIP/TAR archive | `ipAddress`, `loginTime`, `device`, `oauthApps` | Settings → Your Account → Download Archive |
| **Facebook** | JSON download | `ip_address`, `browser`, `device`, `login_history`, `session` | Settings → Your Facebook Info → Download |
| **LinkedIn** | ZIP archive | `loginIp`, `loginTimestamp`, `userAgent` | Settings → Data Privacy → Get Copy of Data |
| **Google** | Takeout (JSON) | `ip`, `device`, `signInId`, `oauthClientId`, `recoveryEmail` | takeout.google.com |
| **Apple** | Data & Privacy | `deviceInfo`, `ipAddress`, `signInTime`, `accountChange` | privacy.apple.com |
| **Telegram** | Export from desktop | `session`, `ip`, `device`, `activeSessions` | Settings → Privacy → Active Sessions |
| **Discord** | Privacy Request | `ip`, `userAgent`, `sessionStart`, `oauthApps` | Settings → Privacy → Request Data |

---

## 7. Personal Defense Architecture

### 7.1 The Layered Defense Model

```
LAYER 1 — PASSWORD HYGIENE
═══════════════════════════════════════════════════
■ Password Manager (Bitwarden/1Password/Proton Pass)
  → Unique 20+ char random password for every service
  → Auto-fill prevents phishing (only fills on correct domain)
  → Breach monitoring alerts (Have I Been Pwned integration)

LAYER 2 — TWO-FACTOR AUTHENTICATION
═══════════════════════════════════════════════════
■ Hardware Security Key (YubiKey 5 Series) — Primary 2FA
  → FIDO2/WebAuthn — phishing-resistant, domain-bound
  → Works on: Google, GitHub, Twitter, Facebook, Microsoft, Apple
  → Buy 2 keys: main + backup (store backup in safe/offsite)
■ TOTP Authenticator — Secondary 2FA (when hardware not supported)
  → Use Authy (encrypted backup) or Ente Auth (open source)
  → NEVER use SMS-based 2FA as primary

LAYER 3 — SESSION MANAGEMENT
═══════════════════════════════════════════════════
■ Use separate browser profiles for personal vs sensitive accounts
  → Chrome profile for social media
  → Firefox profile for banking/finance
  → Brave profile for work/email
■ Disable browser extensions on sensitive sites
■ Log out of sessions when not in use
■ Never click "Remember this device" on public computers

LAYER 4 — EMAIL SECURITY
═══════════════════════════════════════════════════
■ Use a dedicated email for account recovery (not daily email)
■ Enable 2FA on email account with hardware key
■ DMARC reject policy on custom domains
■ Check Have I Been Pwned weekly for email breaches

LAYER 5 — COMMUNICATION OPSEC
═══════════════════════════════════════════════════
■ Never share 2FA codes with anyone (including "support")
■ Verify identity out-of-band before sharing sensitive info
■ Use Signal for sensitive conversations
■ Treat every call/SMS claiming to be support as suspicious

LAYER 6 — MONITORING
═══════════════════════════════════════════════════
■ Google Account: Check "Security Checkup" monthly
■ Instagram: Check Login Activity weekly
■ Apple ID: Check "Device List" monthly
■ Have I Been Pwned: Monitor all email addresses
■ Credit freeze (US) / Credit monitoring (all countries)
```

### 7.2 Account Security Scanner — TypeScript

```typescript
// account-security-scanner.ts — Scan Your Account Security Posture

interface AccountConfig {
  platform: string;
  has2FA: boolean;
  twoFAType: 'none' | 'sms' | 'totp' | 'push' | 'fido2' | 'hardware';
  passwordLength: number;
  passwordReused: boolean;
  uniquePassword: boolean;
  hardwareKeyRegistered: boolean;
  recoveryCodesSaved: boolean;
  recoveryCodesOffline: boolean;
  activeSessions: number;
  sessionCountry: boolean; // same country always?
  linkedApps: number;
  emailLoggedIn: boolean;
  phoneAttached: boolean;
}

interface SecurityScore {
  overall: number; // 0-100
  level: 'poor' | 'fair' | 'good' | 'excellent';
  byCategory: {
    authentication: number;
    credentials: number;
    sessions: number;
    recovery: number;
    ecosystem: number;
  };
  recommendations: string[];
}

class AccountSecurityScanner {
  scan(config: AccountConfig): SecurityScore {
    const scores = {
      authentication: this.scoreAuthentication(config),
      credentials: this.scoreCredentials(config),
      sessions: this.scoreSessions(config),
      recovery: this.scoreRecovery(config),
      ecosystem: this.scoreEcosystem(config),
    };

    const overall = Math.round(
      (scores.authentication * 0.30) +
      (scores.credentials * 0.25) +
      (scores.sessions * 0.15) +
      (scores.recovery * 0.15) +
      (scores.ecosystem * 0.15)
    );

    const recommendations: string[] = [];

    if (!config.has2FA) recommendations.push('Enable 2FA immediately');
    if (config.twoFAType === 'sms') recommendations.push('Replace SMS 2FA with TOTP or hardware key — SMS is vulnerable to SIM swap');
    if (config.passwordReused) recommendations.push('Stop reusing passwords — use a password manager');
    if (config.passwordLength < 12) recommendations.push('Use passwords 14+ characters');
    if (config.activeSessions > 5) recommendations.push('Revoke old sessions');
    if (config.linkedApps > 10) recommendations.push('Review and revoke unused third-party app access');
    if (!config.recoveryCodesSaved) recommendations.push('Save recovery codes offline');
    if (!config.recoveryCodesOffline) recommendations.push('Recovery codes must be stored OFFLINE (not in Google Drive/iCloud)');

    return {
      overall,
      level: overall >= 80 ? 'excellent' : overall >= 60 ? 'good' : overall >= 40 ? 'fair' : 'poor',
      byCategory: scores,
      recommendations,
    };
  }

  private scoreAuthentication(config: AccountConfig): number {
    let score = 0;
    if (config.has2FA) score += 30;
    if (config.twoFAType === 'fido2') score += 50;
    else if (config.twoFAType === 'hardware') score += 50;
    else if (config.twoFAType === 'totp') score += 35;
    else if (config.twoFAType === 'push') score += 25;
    else if (config.twoFAType === 'sms') score += 10;
    if (config.hardwareKeyRegistered) score += 20;
    return Math.min(score, 100);
  }

  private scoreCredentials(config: AccountConfig): number {
    let score = 0;
    if (config.passwordLength >= 20) score += 40;
    else if (config.passwordLength >= 14) score += 30;
    else if (config.passwordLength >= 10) score += 15;
    if (!config.passwordReused) score += 40;
    if (config.uniquePassword) score += 20;
    return Math.min(score, 100);
  }

  private scoreSessions(config: AccountConfig): number {
    let score = 50; // Start at medium
    if (config.activeSessions <= 3) score += 20;
    else if (config.activeSessions <= 8) score += 10;
    else score -= 10;
    if (config.sessionCountry) score += 20;
    return Math.max(0, Math.min(score, 100));
  }

  private scoreRecovery(config: AccountConfig): number {
    let score = 0;
    if (config.recoveryCodesSaved) score += 40;
    if (config.recoveryCodesOffline) score += 40;
    if (config.emailLoggedIn) score -= 10; // Bad — email is single point of failure
    if (config.phoneAttached) score -= 5; // Phone is attack vector for SIM swap
    return Math.max(0, Math.min(score, 100));
  }

  private scoreEcosystem(config: AccountConfig): number {
    let score = 60;
    if (config.linkedApps <= 5) score += 20;
    else if (config.linkedApps <= 15) score += 10;
    else score -= 10;
    return Math.max(0, Math.min(score, 100));
  }
}
```

---

## 8. Incident Response Playbook

### 8.1 Immediate Action — The First 15 Minutes

When you discover your account is compromised, time is critical. Follow this exact sequence:

```
┌─────────────────────────────────────────────────────┐
│ ⚠️  ACCOUNT COMPROMISED — EMERGENCY RESPONSE        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  MINUTE 0-2: CONFIRM COMPROMISE                     │
│  ├── Can you still log in?                          │
│  ├── Email changed? Check inbox for notification    │
│  └── Password changed? Try reset via email/phone     │
│                                                     │
│  MINUTE 2-5: SECURE WHAT YOU CAN                    │
│  ├── Try "Forgot Password" → reset                  │
│  ├── Check if recovery email/phone still yours      │
│  └── Submit platform recovery form (see below)      │
│                                                     │
│  MINUTE 5-10: CONTAIN THE ATTACK                    │
│  ├── Check linked financial accounts                 │
│  ├── Notify bank if financial info is at risk        │
│  └── Change email password FIRST (if still have it) │
│                                                     │
│  MINUTE 10-15: DOCUMENT                             │
│  ├── Screenshot EVERYTHING before it's lost          │
│  ├── Note timestamps of notifications               │
│  └── Record attacker activity from your account      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 8.2 Platform-Specific Recovery

| Platform | Recovery URL | Process | Typical Time |
|----------|-------------|---------|--------------|
| **Instagram** | `instagram.com/hacked` | Email/phone verification → submit ID → wait | 1-5 days |
| **Facebook** | `facebook.com/hacked` | Identify friends → ID upload → security code | 1-3 days |
| **Twitter/X** | `twitter.com/account/access` | Email verification → ID upload → appeal | 1-7 days |
| **Google** | `g.co/recover` | Account recovery questions → email → phone | Hours to 3 days |
| **Apple ID** | `iforgot.apple.com` | Email + phone verification → security questions | Hours to 2 days |
| **Microsoft** | `account.live.com/acsr` | Recovery form → automated verification | Hours to 2 days |
| **LinkedIn** | `linkedin.com/help` | Email verification → report compromise | 1-2 days |
| **Telegram** | App → Settings → Privacy → Security → Active Sessions | Terminate sessions immediately | Instant |
| **Discord** | `discord.com/account-recovery` | Email verification → ticket | Hours to 1 day |

### 8.3 Post-Recovery Hardening Checklist

```typescript
// recovery-checklist.ts — Post-Compromise Hardening Checklist

interface RecoveryStep {
  id: string;
  category: 'password' | '2fa' | 'sessions' | 'apps' | 'email' | 'monitoring' | 'legal';
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  estimatedTime: string;
  completed: boolean;
}

class PostRecoveryChecklist {
  generate(): RecoveryStep[] {
    return [
      // Password
      { id: 'P1', category: 'password', description: 'Change password — unique 20+ chars, never used before', priority: 'critical', estimatedTime: '5 min', completed: false },
      { id: 'P2', category: 'password', description: 'Update password in password manager', priority: 'critical', estimatedTime: '2 min', completed: false },
      { id: 'P3', category: 'password', description: 'Check password for OTHER accounts where password was reused', priority: 'critical', estimatedTime: '15 min', completed: false },

      // 2FA
      { id: '2F1', category: '2fa', description: 'Enable 2FA with authenticator app (not SMS)', priority: 'critical', estimatedTime: '5 min', completed: false },
      { id: '2F2', category: '2fa', description: 'Register hardware security key (YubiKey)', priority: 'high', estimatedTime: '5 min', completed: false },
      { id: '2F3', category: '2fa', description: 'Generate and save new recovery codes OFFLINE', priority: 'critical', estimatedTime: '3 min', completed: false },
      { id: '2F4', category: '2fa', description: 'Remove old 2FA method (especially SMS)', priority: 'high', estimatedTime: '2 min', completed: false },

      // Sessions
      { id: 'S1', category: 'sessions', description: 'Log out of all active sessions', priority: 'critical', estimatedTime: '2 min', completed: false },
      { id: 'S2', category: 'sessions', description: 'Review login activity — document attacker IPs and device info', priority: 'high', estimatedTime: '10 min', completed: false },
      { id: 'S3', category: 'sessions', description: 'Remove unknown devices from trusted device list', priority: 'high', estimatedTime: '3 min', completed: false },

      // Apps
      { id: 'A1', category: 'apps', description: 'Revoke ALL third-party application access', priority: 'critical', estimatedTime: '5 min', completed: false },
      { id: 'A2', category: 'apps', description: 'Re-authorize only apps you actively use and recognize', priority: 'medium', estimatedTime: '10 min', completed: false },

      // Email
      { id: 'E1', category: 'email', description: 'Change email account password', priority: 'critical', estimatedTime: '5 min', completed: false },
      { id: 'E2', category: 'email', description: 'Enable 2FA on email account with hardware key', priority: 'critical', estimatedTime: '5 min', completed: false },
      { id: 'E3', category: 'email', description: 'Check email forwarding rules (attacker may have set forwarding)', priority: 'high', estimatedTime: '5 min', completed: false },
      { id: 'E4', category: 'email', description: 'Check email filters (attacker may have created "delete" filters)', priority: 'high', estimatedTime: '5 min', completed: false },
      { id: 'E5', category: 'email', description: 'Check account recovery email/phone — ensure it is YOURS', priority: 'critical', estimatedTime: '3 min', completed: false },

      // Monitoring
      { id: 'M1', category: 'monitoring', description: 'Check Have I Been Pwned for all email addresses', priority: 'high', estimatedTime: '5 min', completed: false },
      { id: 'M2', category: 'monitoring', description: 'Set up breach alerts (Firefox Monitor, Google Dark Web Report)', priority: 'medium', estimatedTime: '5 min', completed: false },
      { id: 'M3', category: 'monitoring', description: 'Monitor financial accounts for unusual transactions (next 30 days)', priority: 'high', estimatedTime: '30 min/week', completed: false },
      { id: 'M4', category: 'monitoring', description: 'Check credit report for unauthorized accounts', priority: 'medium', estimatedTime: '15 min', completed: false },

      // Legal
      { id: 'L1', category: 'legal', description: 'File cyber crime report at local police station / cyber cell', priority: 'high', estimatedTime: '1-2 hours', completed: false },
      { id: 'L2', category: 'legal', description: 'Report to platform — submit evidence of compromise', priority: 'medium', estimatedTime: '30 min', completed: false },
      { id: 'L3', category: 'legal', description: 'If financial loss > $5K: file FBI IC3 complaint (ic3.gov)', priority: 'medium', estimatedTime: '30 min', completed: false },
      { id: 'L4', category: 'legal', description: 'Preserve all evidence: screenshots, emails, logs', priority: 'high', estimatedTime: '15 min', completed: false },
    ];
  }

  printReport(checklist: RecoveryStep[]): string {
    const categories = [...new Set(checklist.map(c => c.category))];

    let report = `
POST-COMPROMISE RECOVERY CHECKLIST
═══════════════════════════════════════════════════
Date: ${new Date().toISOString().split('T')[0]}

`;
    for (const cat of categories) {
      const items = checklist.filter(c => c.category === cat);
      const completed = items.filter(c => c.completed).length;
      report += `[${cat.toUpperCase()}] ${completed}/${items.length} complete\n`;
      for (const item of items) {
        report += `  [${item.completed ? '✓' : ' '}] ${item.priority.toUpperCase()}: ${item.description}\n`;
      }
      report += '\n';
    }

    report += `OVERALL: ${checklist.filter(c => c.completed).length}/${checklist.length} steps completed\n`;
    return report;
  }
}
```

---

## 9. Real-World Case Studies

### 9.1 Twitter Bitcoin Scam 2020 — The Ultimate Social Engineering Attack

**Overview:**
- **Date:** July 15, 2020
- **Impact:** 130+ high-profile accounts compromised (Barack Obama, Elon Musk, Joe Biden, Bill Gates, Kanye West, Apple, Uber)
- **Financial:** $118,000 in Bitcoin stolen (in 12 minutes)
- **Method:** Social engineering of Twitter employees + internal tool access

**Full Attack Chain:**

```
PHASE 1: RECONNAISSANCE
───────────────────────────────────────────────
Attacker (17-year-old in Florida, "Kirk") and two accomplices
Target: Twitter's internal admin tools ("agent" tools)
Method: Social media research on Twitter employees working remotely

PHASE 2: INITIAL ACCESS  
───────────────────────────────────────────────
Kirk calls Twitter employees, impersonates IT support
Uses COVID-19 remote work context as cover
Phrases: "I'm from IT, we're testing the VPN"
1 employee gives credentials → Kirk accesses Twitter VPN

PHASE 3: INTERNAL RECONNAISSANCE
───────────────────────────────────────────────
Kirk discovers Twitter's internal admin Slack channel
Finds reference to "agent" — internal tool for account control
Accesses internal tool via VPN with stolen credentials

PHASE 4: ACCOUNT TAKEOVER
───────────────────────────────────────────────
Uses "agent" tool to:
  → Reset 2FA on target accounts
  → Change associated email
  → Take over account completely
Targets high-profile accounts specifically

PHASE 5: BITCOIN SCAM
───────────────────────────────────────────────
From each hijacked account, tweets identical message:
  "I am giving back to my community. All Bitcoin sent to
   my address below will be sent back doubled. ...
   Address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"

Bitcoin address is attacker-controlled
~$118,000 sent within 12 minutes before Twitter deletes tweets

PHASE 6: AFTERMATH
───────────────────────────────────────────────
FBI arrests Kirk (17) and accomplices
Twitter share price drops 4% next day
Congressional hearings on security
Kirk sentenced to 3 years in prison
```

**Root Cause Analysis:**

| Failure | What Happened | Correct Implementation |
|---------|--------------|----------------------|
| No MFA on VPN | Employee gave password → full VPN access | MFA + hardware key required for VPN |
| No IP allowlist | Admin tools accessible from any IP | Restrict admin tools to corporate office IPs only |
| No admin tool segmentation | One tool could reset 2FA and change email | Split critical operations across 2+ roles |
| No anomaly detection | Employee accessed admin tools at 3 AM from unknown IP | Detect and block unusual access patterns |
| No separation of duties | Same tool could both initiate and approve changes | Require second person approval for sensitive actions |
| COVID-19 workarounds | Remote work led to reduced security controls | Maintain security standards even during crisis |

**Modern Twitter Security Improvements:**
- FIDO2 hardware keys mandatory for all employees
- Admin tool access requires 2-person approval
- AI-based anomaly detection on admin tool access
- Account recovery now takes 24+ hours for high-profile accounts

### 9.2 Telegram OAuth Hijacking — The Authentication Proxy Attack

**Overview:**
Attacker sets up a fake Telegram login page using OAuth proxy tool (evilginx2). When the victim logs in, the proxy captures both the password AND the SMS/Telegram 2FA code, giving the attacker full session access.

**Attack Setup:**
```
VICTIM → clicks phishing link
       → arrives at lookalike Telegram login at telegram-.xyz
       → enters phone number
       → enters Telegram code (SMS or Telegram app)
       → proxy forwards to real Telegram
       → VICTIM sees: "New login from Chrome on Windows" in Telegram
       → Victim thinks it's their own login → approves
       → ATTACKER captures: session token, can access account forever
```

**Prevention:**
- Always check the domain in the address bar before logging in
- Enable "Show sensitive content" warnings in Telegram
- Check active sessions regularly in Telegram Settings
- Use hardware security keys where supported (Telegram doesn't support FIDO2 yet)

### 9.3 SIM Swap Ring — The Crypto Investor Targeted Attack

**Overview (Michael Terpin vs. AT&T, 2018):**
- Victim: Michael Terpin, cryptocurrency investor
- Attacker: SIM swap ring targeting high-net-worth crypto investors
- Method: Attacker paid AT&T employee $1,000 to swap Terpin's number
- Loss: $24 million in cryptocurrency
- Legal: AT&T found grossly negligent, jury awarded $225M (reduced to $7.5M on appeal)

**Attack Execution:**
```
Day 1: Attacker gathers personal info on Terpin via public records
Day 2: Attacker contacts AT&T store, impersonates Terpin
Day 3: AT&T employee performs SIM swap (for $1,000 bribe)
Day 4: Terpin's phone shows "No Service" at 2 AM
Day 4 (2:15 AM): Attacker resets Terpin's crypto exchange passwords
Day 4 (2:16 AM): SMS 2FA codes sent to attacker's SIM
Day 4 (2:30 AM): $24M in cryptocurrency transferred out
Day 4 (8:00 AM): Terpin wakes up to "No Service" — too late
```

---

## 10. Monitoring Tools & Services

| Tool | Type | What It Monitors | Cost |
|------|------|-----------------|------|
| **Have I Been Pwned** | Breach notification | Email addresses in known breaches | Free |
| **Google Dark Web Report** | Dark web monitoring | Email, SSN, phone found on dark web | Free (Google One) |
| **Firefox Monitor** | Breach notification | Email addresses in breaches | Free |
| **Dehashed** | Breach search | Search 10B+ breached records | Free/Paid |
| **SpyCloud** | Credential monitoring | Stolen credentials, session tokens | Paid |
| **KrebsOnSecurity** | Threat intelligence | Latest scams, breach news | Free |
| **FraudWatch** | Brand monitoring | Phishing sites targeting your brand | Paid |
| **Google Alerts** | Web monitoring | Custom keywords (your name, handle) | Free |
| **SocialScan** | Social monitoring | Social media account security score | Free |
| **F-Secure Identity Theft** | Full monitoring | Personal info, credit, social media | Paid |

---

## 11. Password Manager Setup Guide

### 11.1 Recommended Password Managers

| Manager | Security | Platform | Price | Key Feature |
|---------|----------|----------|-------|-------------|
| **Bitwarden** | AES-256, open source | All | Free/$10/yr | Open source audit, self-host option |
| **1Password** | AES-256, Secret Key | All | $36/yr | Travel Mode, Secret Key (extra layer) |
| **Proton Pass** | Zero-access encryption | All | Free/$24/yr | Integrated with Proton ecosystem |
| **KeePassXC** | AES-256, local only | Desktop | Free | Fully offline, file-based |
| **Apple iCloud Keychain** | End-to-end encrypted | Apple only | Free | Native iOS/macOS integration |

**Password Manager Security Comparison:**

| Feature | Bitwarden | 1Password | Proton Pass | KeePassXC |
|---------|-----------|-----------|-------------|-----------|
| Open Source | ✅ | ❌ | ✅ | ✅ |
| Third-Party Audit | ✅ | ✅ | ✅ | ✅ |
| Zero-Knowledge | ✅ | ✅ (with Secret Key) | ✅ | ✅ (offline) |
| Self-Host Option | ✅ | ❌ | ❌ | ✅ (file-based) |
| Hardware Key Support | ✅ | ✅ | ✅ | ❌ |
| Breach Alerts | ✅ (HIBP) | ✅ (Watchtower) | ✅ | ❌ |

---

## Summary

- **Account Takeover Taxonomy:** 6 categories (credential, social engineering, session, MFA bypass, fixation, physical) with varying difficulty and impact — credential-based attacks are most common (52%), SIM swapping is most devastating.
- **Phishing Detection:** Analyze sender domain, reply-to, links, keywords, urgency, attachments, and SPF/DKIM/DMARC authentication results programmatically.
- **Credential Stuffing Prevention:** Track login velocity per IP, unique username count, success rate, user-agent consistency, and geographic anomalies to distinguish automated attacks from legitimate traffic.
- **Password Strength:** Entropy-based calculation with crack time estimation — 14+ character passwords with 4 character types provide > 100-bit entropy, taking centuries to brute force.
- **Session Security:** Bind sessions to device fingerprints, detect impossible travel, monitor user-agent and location changes — session token theft bypasses both password and MFA.
- **MFA Hierarchy:** SMS < TOTP < Push < FIDO2 Software < FIDO2 Hardware — SMS 2FA is vulnerable to SIM swap, SS7, and phishing. Hardware security keys are the only phishing-resistant MFA.
- **SIM Swap:** The most devastating personal attack — attacker ports your number to their SIM, intercepts SMS 2FA, drains accounts within minutes. Prevent with carrier PIN, port freeze, and removing SMS 2FA entirely.
- **Platform Forensics:** Instagram, Twitter, Facebook, Google all provide data exports with IP logs, device info, and session history — analyze these to identify the attacker and trace the compromise.
- **Defense Architecture:** Layered approach: password manager → hardware key 2FA → session management → email security → OPSEC → monitoring. Each layer independently protects even if other layers fail.
- **IR Playbook:** First 15 minutes are critical — confirm compromise, try password reset, contain linked accounts, document everything, then report and recover.

---

## Chapter Quiz

1. What percentage of breaches involve a human element according to Verizon DBIR?
   - A) 52%   B) 68%   C) 82%   D) 95%

2. Which MFA method is considered phishing-resistant?
   - A) SMS 2FA
   - B) TOTP (Google Authenticator)
   - C) Push notification (Duo)
   - D) FIDO2 hardware key (YubiKey)

3. What is the primary defense against credential stuffing attacks?
   - A) Longer passwords
   - B) Special characters in passwords
   - C) Unique password for every service
   - D) Monthly password changes

4. In the Twitter 2020 Bitcoin scam, how did the attacker gain initial access?
   - A) Phishing email to a Twitter employee
   - B) Brute-forcing employee passwords
   - C) Exploiting a Twitter API vulnerability
   - D) Social engineering Twitter's internal IT support

5. What is the most effective single protection against SIM swapping attacks?
   - A) Using a complex password
   - B) Setting a carrier account PIN
   - C) Installing antivirus software
   - D) Using a VPN

6. Which forensic data source from Instagram reveals the IP address of login attempts?
   - A) Instagram Stories viewer list
   - B) Instagram Direct Messages
   - C) Instagram data download (JSON format)
   - D) Instagram profile page

7. What is "MFA fatigue"?
   - A) Users tired of entering MFA codes
   - B) Spamming push notifications until the user accepts
   - C) MFA server overload from too many requests
   - D) Battery drain from authentication apps

8. How does a password manager prevent phishing?
   - A) It encrypts all internet traffic
   - B) It auto-fills passwords only on the exact correct domain
   - C) It blocks all unknown websites
   - D) It generates random usernames

9. What does "impossible travel" detection look for?
   - A) Logins from countries with no internet infrastructure
   - B) Logins from two far-apart locations within a time too short for travel
   - C) Logins using VPNs from sanctioned countries
   - D) Logins during nighttime hours

10. In SIM swap attacks, what happens after the attacker activates their SIM?
    - A) The victim's device is remotely wiped
    - B) SMS 2FA codes go to the attacker's phone
    - C) The victim's bank account is frozen
    - D) All of the above

<details>
<summary>Quiz Answers</summary>
1. C, 2. D, 3. C, 4. D, 5. B, 6. C, 7. B, 8. B, 9. B, 10. B
</details>

---

## Exercises

### Review Questions

1. List 5 types of account takeover attacks and rank them by prevalence.
2. Explain the difference between credential stuffing and password spraying.
3. What is a SIM swap attack and why is SMS 2FA vulnerable to it?
4. Describe the session hijacking attack vector — how does it bypass password and MFA?

### Application Problems

1. Write a personal incident response plan for a hypothetical Instagram compromise. Include: notification sources, recovery steps in order, evidence collection methods, and timeline of actions.

2. Audit your own account security using the `AccountSecurityScanner` class from Section 7. Score all your major accounts (Google, Instagram, Twitter, email, banking) and create a plan to fix the lowest-scoring areas.

3. Given the following login data, identify which are likely credential stuffing attempts vs legitimate logins:
   - IP 185.234.72.18: 47 login attempts, 44 different usernames, 0 successes, all within 3 minutes
   - IP 103.234.18.5: 3 login attempts, 1 username, all with correct password but user had MFA
   - IP 192.168.1.50: 2 login attempts, 1 username, 1 success (correct password + MFA)

### Challenge Problems

1. Build a complete home lab for social media security testing: set up a phishing simulation using GoPhish, create a realistic Instagram login page clone, and demonstrate to a friend how credential harvesting works — then show them how to detect it.

2. Research and document the latest SIM swap attack techniques by analyzing at least 3 real-world cases from the past 2 years. Create a prevention checklist specific to cryptocurrency investors.

---

> **File Statistics:** This chapter contains 750+ lines covering social media security, account takeover prevention, digital forensics, personal defense architecture, and incident response.
