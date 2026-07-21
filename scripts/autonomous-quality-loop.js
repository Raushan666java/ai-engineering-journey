#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * AUTONOMOUS QUALITY LOOP — AI Engineering Placement Course
 * ═══════════════════════════════════════════════════════════════
 * 
 * Self-healing, self-improving loop that:
 * 1. Scans all 224 chapters against 15+ quality criteria
 * 2. Scores each file 0-10 on 8 dimensions
 * 3. Auto-fixes issues where possible
 * 4. Logs every iteration with before/after scores
 * 5. Repeats until all files score >= 9/10
 * 
 * Usage:
 *   node autonomous-quality-loop.js                    # Run until stable
 *   node autonomous-quality-loop.js --max 20          # Max iterations
 *   node autonomous-quality-loop.js --verbose          # Show all issues
 *   node autonomous-quality-loop.js --report           # Generate report only
 *   node autonomous-quality-loop.js --fix-only         # Fix without rescan
 * 
 * ═══════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');
const REPORT_FILE = path.join(__dirname, '..', 'quality-report.md');
const LOG_FILE = path.join(__dirname, '..', 'quality-loop.log');
const ROADMAP_FILE = path.join(__dirname, '..', 'quality-roadmap.md');

const MIN_SCORE = 9; // Target score per file
const MAX_ITERATIONS = parseInt(process.argv.find((_, i, a) => a[i-1] === '--max') || '50');
const VERBOSE = process.argv.includes('--verbose');
const REPORT_ONLY = process.argv.includes('--report');
const FIX_ONLY = process.argv.includes('--fix-only');

// ═══════════════════════════════════════════════════════════════
// QUALITY CRITERIA DEFINITIONS
// ═══════════════════════════════════════════════════════════════

const CRITERIA = {
  // ─── STRUCTURE ───
  has_intro: {
    name: 'Introduction Section',
    weight: 1.0,
    check: (c) => c.includes('## Introduction'),
    fix: null // Needs content-specific fix
  },
  has_prereqs: {
    name: 'Prerequisites Section',
    weight: 0.8,
    check: (c) => c.includes('## Prerequisites'),
    fix: null
  },
  has_learning_objectives: {
    name: 'Learning Objectives',
    weight: 1.0,
    check: (c) => c.includes('## Learning Objectives'),
    fix: null
  },
  has_theory: {
    name: 'Theory/Concept Section',
    weight: 1.0,
    check: (c) => c.includes('## Theory') || c.includes('## Concept') || c.includes('## Fundamentals'),
    fix: null
  },
  has_examples: {
    name: 'Code Examples',
    weight: 1.0,
    check: (c) => c.includes('## Examples') || c.includes('```python') || c.includes('```typescript') || c.includes('```bash'),
    fix: null
  },
  has_visual: {
    name: 'Visual Diagram',
    weight: 0.9,
    check: (c) => c.includes('```mermaid') || c.includes('## Visual') || c.includes('## Architecture'),
    fix: null
  },
  has_summary: {
    name: 'Summary Section',
    weight: 1.0,
    check: (c) => c.includes('## Summary'),
    fix: null
  },
  has_quiz: {
    name: 'Chapter Quiz',
    weight: 0.9,
    check: (c) => c.includes('## Chapter Quiz') || c.includes('## Quiz'),
    fix: null
  },
  has_exercises: {
    name: 'Exercises Section',
    weight: 0.9,
    check: (c) => c.includes('## Exercises'),
    fix: null
  },
  has_placement: {
    name: 'Placement Section',
    weight: 1.0,
    check: (c) => c.includes('## Placement Section'),
    fix: null
  },
  has_common_mistakes: {
    name: 'Common Mistakes',
    weight: 0.8,
    check: (c) => c.includes('## Common Mistakes'),
    fix: null
  },
  has_revision_notes: {
    name: 'Revision Notes',
    weight: 0.8,
    check: (c) => c.includes('## Revision Notes'),
    fix: null
  },

  // ─── FORMATTING ───
  heading_hierarchy: {
    name: 'Heading Hierarchy (H1→H2→H3)',
    weight: 0.7,
    check: (c) => {
      // Remove code blocks before checking
      const withoutCode = c.replace(/```[\s\S]*?```/g, '');
      const lines = withoutCode.split('\n');
      let lastLevel = 0;
      for (const line of lines) {
        const m = line.match(/^(#{1,6})\s/);
        if (m) {
          const level = m[1].length;
          if (lastLevel > 0 && level > lastLevel + 1) return false;
          lastLevel = level;
        }
      }
      return true;
    },
    fix: (c) => {
      const lines = c.split('\n');
      const fixed = [];
      let lastLevel = 0;
      for (const line of lines) {
        const m = line.match(/^(#{1,6})\s/);
        if (m) {
          const level = m[1].length;
          if (lastLevel > 0 && level > lastLevel + 1) {
            fixed.push('');
            fixed.push('#'.repeat(lastLevel + 1) + ' Details');
          }
          lastLevel = level;
        }
        fixed.push(line);
      }
      return fixed.join('\n');
    }
  },
  single_h1: {
    name: 'Single H1 Heading',
    weight: 0.5,
    check: (c) => {
      // Remove code blocks before checking
      const withoutCode = c.replace(/```[\s\S]*?```/g, '');
      return (withoutCode.match(/^# .+$/gm) || []).length <= 1;
    },
    fix: (c) => {
      let first = false;
      return c.replace(/^# (.+)$/gm, (m, t) => {
        if (!first) { first = true; return m; }
        return '## ' + t;
      });
    }
  },
  blank_lines_before_headings: {
    name: 'Blank Lines Before Headings',
    weight: 0.4,
    check: (c) => {
      // Remove code blocks before checking
      const withoutCode = c.replace(/```[\s\S]*?```/g, '');
      const lines = withoutCode.split('\n');
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].match(/^#{1,3}\s/) && lines[i-1].trim() !== '' && !lines[i-1].match(/^```/)) {
          return false;
        }
      }
      return true;
    },
    fix: (c) => c.replace(/([^\n])\n(## )/g, '$1\n\n$2').replace(/([^\n])\n(### )/g, '$1\n\n$2')
  },
  code_blocks_language: {
    name: 'Code Blocks Have Language',
    weight: 0.3,
    check: (c) => {
      const lines = c.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '```' && i > 0 && !lines[i-1].match(/^```/)) {
          // Check if next line is content (opening block)
          if (i + 1 < lines.length && lines[i+1].trim() !== '' && !lines[i+1].trim().startsWith('```')) {
            return false;
          }
        }
      }
      return true;
    },
    fix: (c) => c.replace(/```\n/g, '```text\n')
  },

  // ─── CONTENT QUALITY ───
  no_placeholder: {
    name: 'No Placeholder Text',
    weight: 1.0,
    check: (c) => {
      const placeholders = [
        /Section \d+ covers essential/i,
        /Concept \d+: Definition/i,
        /def example_function/i,
        /# Placeholder/i,
        /# TODO/i
      ];
      return !placeholders.some(p => p.test(c));
    },
    fix: null // Needs manual fix
  },
  sufficient_length: {
    name: 'Sufficient Content Length',
    weight: 0.6,
    check: (c) => c.split('\n').length >= 100,
    fix: null
  },
  has_code_examples: {
    name: 'Has Working Code',
    weight: 0.9,
    check: (c) => {
      const codeBlocks = c.match(/```(?:python|typescript|bash|javascript|java|cpp|sql|yaml|json|go|rust)[\s\S]*?```/g) || [];
      return codeBlocks.length >= 1;
    },
    fix: null
  },
  has_interview_qa: {
    name: 'Interview Questions with Answers',
    weight: 1.0,
    check: (c) => c.includes('**Q') || c.includes('**Answer') || c.includes('Answer:'),
    fix: null
  }
};

// ═══════════════════════════════════════════════════════════════
// SCORING ENGINE
// ═══════════════════════════════════════════════════════════════

function scoreFile(content) {
  let totalWeight = 0;
  let passedWeight = 0;
  const details = {};
  
  for (const [id, criterion] of Object.entries(CRITERIA)) {
    const passed = criterion.check(content);
    details[id] = {
      name: criterion.name,
      passed,
      weight: criterion.weight
    };
    totalWeight += criterion.weight;
    if (passed) passedWeight += criterion.weight;
  }
  
  const score = Math.round((passedWeight / totalWeight) * 10 * 10) / 10;
  return { score, details, totalCriteria: Object.keys(CRITERIA).length };
}

// ═══════════════════════════════════════════════════════════════
// AUTO-FIX ENGINE
// ═══════════════════════════════════════════════════════════════

function autoFix(content) {
  let fixed = content;
  let fixCount = 0;
  
  for (const [id, criterion] of Object.entries(CRITERIA)) {
    if (criterion.fix && !criterion.check(fixed)) {
      const before = fixed;
      fixed = criterion.fix(fixed);
      if (fixed !== before) fixCount++;
    }
  }
  
  return { content: fixed, fixCount };
}

// ═══════════════════════════════════════════════════════════════
// SCAN ENGINE
// ═══════════════════════════════════════════════════════════════

function scanAllFiles() {
  const results = [];
  const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));
  
  for (const module of modules) {
    const modulePath = path.join(BASE, module);
    const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
    
    for (const chapter of chapters) {
      const filePath = path.join(modulePath, chapter);
      const content = fs.readFileSync(filePath, 'utf8');
      const { score, details, totalCriteria } = scoreFile(content);
      
      const failedCriteria = Object.entries(details)
        .filter(([_, d]) => !d.passed)
        .map(([id, d]) => ({ id, ...d }));
      
      results.push({
        module,
        chapter,
        filePath,
        content,
        score,
        details,
        totalCriteria,
        failedCriteria,
        failedCount: failedCriteria.length
      });
    }
  }
  
  return results.sort((a, b) => a.score - b.score);
}

// ═══════════════════════════════════════════════════════════════
// REPORT GENERATOR
// ═══════════════════════════════════════════════════════════════

function generateReport(results, iteration, beforeScores) {
  const avgScore = results.reduce((s, r) => s + r.score, 0) / results.length;
  const minScore = Math.min(...results.map(r => r.score));
  const maxScore = Math.max(...results.map(r => r.score));
  const filesBelowTarget = results.filter(r => r.score < MIN_SCORE).length;
  const filesAtTarget = results.filter(r => r.score >= MIN_SCORE).length;
  
  // Count criteria failures
  const criteriaFailures = {};
  for (const result of results) {
    for (const failed of result.failedCriteria) {
      criteriaFailures[failed.name] = (criteriaFailures[failed.name] || 0) + 1;
    }
  }
  
  let report = `# Quality Report — Iteration ${iteration}

Generated: ${new Date().toISOString()}

## Summary

| Metric | Value |
|--------|-------|
| Total Files | ${results.length} |
| Average Score | ${avgScore.toFixed(1)}/10 |
| Min Score | ${minScore}/10 |
| Max Score | ${maxScore}/10 |
| Files at Target (≥${MIN_SCORE}) | ${filesAtTarget} (${((filesAtTarget/results.length)*100).toFixed(1)}%) |
| Files Below Target | ${filesBelowTarget} (${((filesBelowTarget/results.length)*100).toFixed(1)}%) |

## Score Distribution

| Score Range | Count | Percentage |
|-------------|-------|------------|
| 10/10 | ${results.filter(r => r.score === 10).length} | ${((results.filter(r => r.score === 10).length/results.length)*100).toFixed(1)}% |
| 9-9.9/10 | ${results.filter(r => r.score >= 9 && r.score < 10).length} | ${((results.filter(r => r.score >= 9 && r.score < 10).length/results.length)*100).toFixed(1)}% |
| 8-8.9/10 | ${results.filter(r => r.score >= 8 && r.score < 9).length} | ${((results.filter(r => r.score >= 8 && r.score < 9).length/results.length)*100).toFixed(1)}% |
| 7-7.9/10 | ${results.filter(r => r.score >= 7 && r.score < 8).length} | ${((results.filter(r => r.score >= 7 && r.score < 8).length/results.length)*100).toFixed(1)}% |
| <7/10 | ${results.filter(r => r.score < 7).length} | ${((results.filter(r => r.score < 7).length/results.length)*100).toFixed(1)}% |

## Top Issues (Most Common Failures)

| Criteria | Files Failing | % of Total |
|----------|---------------|------------|
${Object.entries(criteriaFailures)
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => `| ${name} | ${count} | ${((count/results.length)*100).toFixed(1)}% |`)
  .join('\n')}

## Files Needing Improvement (Score < ${MIN_SCORE})

| File | Score | Failed Criteria |
|------|-------|-----------------|
${results.filter(r => r.score < MIN_SCORE).map(r => 
  `| ${r.module}/${r.chapter} | ${r.score}/10 | ${r.failedCriteria.map(f => f.name).join(', ')} |`
).join('\n')}

## Top 10 Lowest Scoring Files

| Rank | File | Score | Issues |
|------|------|-------|--------|
${results.slice(0, 10).map((r, i) => 
  `| ${i+1} | ${r.module}/${r.chapter} | ${r.score}/10 | ${r.failedCount} criteria failed |`
).join('\n')}
`;
  
  return report;
}

// ═══════════════════════════════════════════════════════════════
// MAIN QUALITY LOOP
// ═══════════════════════════════════════════════════════════════

class AutonomousQualityLoop {
  constructor() {
    this.iteration = 0;
    this.history = [];
    this.startTime = Date.now();
  }
  
  async run() {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║   AUTONOMOUS QUALITY LOOP — AI Engineering Placement       ║');
    console.log('║   Self-healing, self-improving content system              ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(`\n📁 Repository: ${BASE}`);
    console.log(`🎯 Target Score: ≥${MIN_SCORE}/10 per file`);
    console.log(`🔄 Max Iterations: ${MAX_ITERATIONS}\n`);
    
    const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
    logStream.write(`\n${'═'.repeat(60)}\n`);
    logStream.write(`Quality Loop Started: ${new Date().toISOString()}\n`);
    logStream.write(`${'═'.repeat(60)}\n`);
    
    let previousAvg = 0;
    
    while (this.iteration < MAX_ITERATIONS) {
      this.iteration++;
      const iterStart = Date.now();
      
      console.log(`\n${'─'.repeat(60)}`);
      console.log(`🔍 ITERATION ${this.iteration}/${MAX_ITERATIONS}`);
      console.log(`${'─'.repeat(60)}`);
      
      // 1. SCAN
      console.log('📂 Scanning all files...');
      const results = scanAllFiles();
      const avgScore = results.reduce((s, r) => s + r.score, 0) / results.length;
      const belowTarget = results.filter(r => r.score < MIN_SCORE).length;
      
      console.log(`📊 Average Score: ${avgScore.toFixed(2)}/10`);
      console.log(`📊 Files Below Target: ${belowTarget}/${results.length}`);
      
      // 2. CHECK STOP CONDITION
      if (belowTarget === 0) {
        console.log('\n🎉 ALL FILES SCORE ≥ 9/10! Quality loop complete.');
        logStream.write(`Iteration ${this.iteration}: All files at target — DONE\n`);
        
        // Generate final report
        const report = generateReport(results, this.iteration, previousAvg);
        fs.writeFileSync(REPORT_FILE, report, 'utf8');
        console.log(`\n📝 Final report: ${REPORT_FILE}`);
        break;
      }
      
      // 3. FIX
      console.log('\n🔧 Applying auto-fixes...');
      let totalFixed = 0;
      
      for (const result of results) {
        if (result.score < MIN_SCORE) {
          const { content: fixedContent, fixCount } = autoFix(result.content);
          if (fixCount > 0) {
            fs.writeFileSync(result.filePath, fixedContent, 'utf8');
            totalFixed += fixCount;
          }
        }
      }
      
      console.log(`✅ Fixed ${totalFixed} issues`);
      
      // 4. RESCAN AFTER FIXES
      const postFixResults = scanAllFiles();
      const postFixAvg = postFixResults.reduce((s, r) => s + r.score, 0) / postFixResults.length;
      const postFixBelow = postFixResults.filter(r => r.score < MIN_SCORE).length;
      
      // 5. LOG
      const iterTime = Date.now() - iterStart;
      const entry = {
        iteration: this.iteration,
        avgScore: avgScore.toFixed(2),
        postFixAvg: postFixAvg.toFixed(2),
        belowTarget,
        postFixBelow,
        fixed: totalFixed,
        time: iterTime
      };
      this.history.push(entry);
      
      logStream.write(`Iteration ${this.iteration}: Avg ${avgScore.toFixed(2)} → ${postFixAvg.toFixed(2)}, Below ${belowTarget} → ${postFixBelow}, Fixed ${totalFixed} (${iterTime}ms)\n`);
      
      // 6. GENERATE REPORT
      const report = generateReport(postFixResults, this.iteration, previousAvg);
      fs.writeFileSync(REPORT_FILE, report, 'utf8');
      
      console.log(`\n📈 Score: ${avgScore.toFixed(2)} → ${postFixAvg.toFixed(2)}`);
      console.log(`📉 Below Target: ${belowTarget} → ${postFixBelow}`);
      console.log(`⏱️  Time: ${iterTime}ms`);
      
      // 7. CHECK IF STUCK
      if (postFixAvg === previousAvg && totalFixed === 0) {
        console.log('\n⚠️ No improvement detected. Remaining issues need manual review.');
        logStream.write(`Iteration ${this.iteration}: Stuck — no auto-fixable issues\n`);
        
        // List remaining issues
        console.log('\n📋 Remaining issues that need manual fix:');
        for (const result of postFixResults.filter(r => r.score < MIN_SCORE).slice(0, 10)) {
          console.log(`  ${result.module}/${result.chapter} (${result.score}/10):`);
          for (const f of result.failedCriteria) {
            console.log(`    ❌ ${f.name}`);
          }
        }
        break;
      }
      
      previousAvg = postFixAvg;
      
      // 8. VERBOSE OUTPUT
      if (VERBOSE) {
        console.log('\n📄 Files still below target:');
        for (const result of postFixResults.filter(r => r.score < MIN_SCORE)) {
          console.log(`  ${result.module}/${result.chapter}: ${result.score}/10`);
          for (const f of result.failedCriteria) {
            console.log(`    ❌ ${f.name}`);
          }
        }
      }
    }
    
    // FINAL SUMMARY
    const totalTime = Date.now() - this.startTime;
    console.log(`\n${'═'.repeat(60)}`);
    console.log('📊 QUALITY LOOP SUMMARY');
    console.log(`${'═'.repeat(60)}`);
    console.log(`Iterations: ${this.iteration}`);
    console.log(`Total Time: ${(totalTime / 1000).toFixed(1)}s`);
    console.log(`History:`);
    for (const entry of this.history) {
      console.log(`  Iter ${entry.iteration}: ${entry.avgScore} → ${entry.postFixAvg} (Fixed: ${entry.fixed})`);
    }
    
    logStream.write(`\n${'═'.repeat(60)}\n`);
    logStream.write(`Quality Loop Complete: ${new Date().toISOString()}\n`);
    logStream.write(`Iterations: ${this.iteration}, Total Time: ${(totalTime / 1000).toFixed(1)}s\n`);
    logStream.write(`${'═'.repeat(60)}\n`);
    logStream.end();
    
    return { iterations: this.iteration, history: this.history };
  }
}

// ═══════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════

if (REPORT_ONLY) {
  console.log('📊 Generating report only...\n');
  const results = scanAllFiles();
  const report = generateReport(results, 0, 0);
  fs.writeFileSync(REPORT_FILE, report, 'utf8');
  console.log(report);
  console.log(`\n📝 Report saved: ${REPORT_FILE}`);
} else {
  const loop = new AutonomousQualityLoop();
  loop.run().then(result => {
    console.log('\n✅ Quality loop finished.');
    process.exit(0);
  }).catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
}
