param(
    [string]$FilePath = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\placement-preparation\01-resume-aptitude.md"
)

# Read file and normalize line endings to LF for matching
$rawContent = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
$content = $rawContent.Replace("`r`n", "`n")

$linesBefore = ($content -split "`n").Length
Write-Host "Before: $linesBefore lines (LF-normalized)"

# === Replacement 1: Pro Tip after keywords table in section 1.4 ===
$old1 = '| Analytical skills | Product thinking | Research, innovation |

### 1.5 Common Mistakes'
$new1 = '| Analytical skills | Product thinking | Research, innovation |

> **Pro Tip:** Tailor your skills section to each job description — if the posting emphasizes Redis and microservices, those should be listed prominently, not buried at the bottom. ATS systems weight keywords by position and frequency. Keep your master list long, but trim to 8–12 relevant technologies per application.

### 1.5 Common Mistakes'

if ($content.Contains($old1)) { Write-Host "REP1: FOUND" } else { Write-Host "REP1: NOT FOUND" }
$content = $content.Replace($old1, $new1)

# === Replacement 2: Warning + takeaway after section 2 (LinkedIn) ===
$old2 = '- Have your resume ready in the format they ask for

---

## 3. Aptitude Crash Course (200+ Lines)'
$new2 = '- Have your resume ready in the format they ask for

> **Warning:** Referral requests sent without any prior interaction are almost always ignored. Always personalize your connection message, mention something specific about the person''s work or profile, and build at least a brief conversation before asking for a referral. A templated "I need a referral" message is worse than not sending one at all.

---

> **One-Sentence Takeaway:** An optimized LinkedIn profile with a strong headline, quantified experience, and strategic networking unlocks referral opportunities and increases recruiter outreach by 3x.

---

## 3. Aptitude Crash Course (200+ Lines)'
if ($content.Contains($old2)) { Write-Host "REP2: FOUND" } else { Write-Host "REP2: NOT FOUND" }
$content = $content.Replace($old2, $new2)

# === Replacement 3: Takeaway after section 3 (Aptitude) ===
$old3 = '| 25 | c) Enthusiasm | Zeal = great energy or enthusiasm |

---

> **Next chapter:**'
$new3 = '| 25 | c) Enthusiasm | Zeal = great energy or enthusiasm |

---

> **One-Sentence Takeaway:** Aptitude tests measure speed and pattern recognition — mastering formula shortcuts, logical reasoning frameworks, and time management is far more critical than advanced mathematical ability. Consistent timed practice is the only path to improvement.

---

> **Next chapter:**'
if ($content.Contains($old3)) { Write-Host "REP3: FOUND" } else { Write-Host "REP3: NOT FOUND" }
$content = $content.Replace($old3, $new3)

# === Replacement 4: Remember callout before section 3.2 Solved Problems ===
$old4 = '## 3.2 20 Solved Problems

#### Problem 1: Percentage'
$new4 = '> **Remember:** The 20 problems below cover every major aptitude pattern tested in campus placements. Attempt each problem on your own first — covering the answer before solving defeats the purpose. If you get stuck, trace the formula back to section 3.1.

## 3.2 20 Solved Problems

#### Problem 1: Percentage'
if ($content.Contains($old4)) { Write-Host "REP4: FOUND" } else { Write-Host "REP4: NOT FOUND" }
$content = $content.Replace($old4, $new4)

# === Replacement 5: Enrichment before section 6 (Cover Letter Writing) ===
$old5 = '- Playing acoustic guitar and photography
```

---

## 6. Cover Letter Writing'
$new5 = '- Playing acoustic guitar and photography
```

---

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Resume | One-page professional summary of qualifications, experience, and education | Snapshot of your career; ATS-scanned before human review | Submitting to job portals, campus placement drives |
| LinkedIn Profile | Extended professional profile with network, content, and endorsements | Always-on digital presence; recruiters search proactively | Building professional brand, networking for referrals |
| Aptitude Preparation | Practice of quantitative, logical, and verbal reasoning | Tests speed and pattern recognition, not advanced math | First-round screening in campus placements |
| Cover Letter | 4-paragraph narrative connecting your background to the role | Differentiator when GPAs are similar; not always required | Off-campus applications, product company roles |
| ATS Optimization | Formatting and keyword strategy to pass automated filters | 75% of resumes rejected before human review | Applying to any company using application tracking systems |

## Quick Reference

| Topic | Key Resource | Time Investment | Impact |
|-------|------------|-----------------|--------|
| Resume | Single-column ATS format, quantified bullets | 2–3 days to draft + iterate | High (shortlisting gate) |
| LinkedIn | Complete profile + weekly posts | 1–2 hours initial + 30 min/week | Medium (referral source) |
| Aptitude | Formula sheets + timed practice | 2–4 hours/week for 4 weeks | High (first-round filter) |
| Cover Letter | 4-paragraph template | 1 hour per application | Low–Medium (tiebreaker) |
| GitHub | 6 pinned repos with clean READMEs | 1–2 days initial setup | Medium (product companies) |

## Cross-Application Matrix

| Preparation Area | Service-Based (TCS, Infy) | Product-Based (Flipkart, Uber) | FAANG (Google, Microsoft) |
|-----------------|--------------------------|-------------------------------|---------------------------|
| Resume Focus | CGPA, skills, certifications | Projects, internships, impact metrics | Publications, open-source, competitive programming |
| LinkedIn Priority | Low–Medium | Medium–High | High (referrals) |
| Aptitude Weight | High (mandatory section) | Medium (initial filter) | Low–Medium (Google assessment) |
| Cover Letter | Rarely read | Sometimes read | Usually required for off-campus |
| ATS Sensitivity | Very High | High | Moderate |

## Chapter Quiz

Test your understanding of placement preparation fundamentals.

**Q1:** What is the most important factor recruiters check during the 6-second resume scan?

<details>
<summary>Show Answer</summary>

**Answer:** The top third of the page — which must contain your name, skills, education CGPA, and one strong project. Recruiters decide whether to continue reading in those first 6 seconds based on what they see in this prime real estate.

</details>

**Q2:** Which LinkedIn strategy is most effective for getting referrals at target companies?

<details>
<summary>Show Answer</summary>

**Answer:** Build a relationship first — connect with a personalized note, learn about their experience, then ask for the referral after a conversation. Never ask for a referral in the first connection request.

</details>

**Q3:** Why do ATS filters reject 75% of resumes before a human sees them?

<details>
<summary>Show Answer</summary>

**Answer:** Because resumes use non-standard formatting (tables, columns, graphics), lack keywords from the job description, or use non-standard section headers. Single-column layouts with standard headings and optimized keywords dramatically improve pass rates.

</details>

**Q4:** What matters more than advanced math in placement aptitude tests?

<details>
<summary>Show Answer</summary>

**Answer:** Speed and pattern recognition. Time management — knowing when to skip a problem and which formula to apply — is more critical than solving complex mathematical problems under time pressure.

</details>

---

## 6. Cover Letter Writing'
if ($content.Contains($old5)) { Write-Host "REP5: FOUND" } else { Write-Host "REP5: NOT FOUND" }
$content = $content.Replace($old5, $new5)

# Convert back to CRLF and write
$contentCRLF = $content.Replace("`n", "`r`n")
$linesAfter = ($content -split "`n").Length
Write-Host "After: $linesAfter lines"
Write-Host "Added: $($linesAfter - $linesBefore) lines"

[System.IO.File]::WriteAllText($FilePath, $contentCRLF, [System.Text.Encoding]::UTF8)
Write-Host "File written successfully"
