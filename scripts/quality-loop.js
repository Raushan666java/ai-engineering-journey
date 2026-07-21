#!/usr/bin/env node
/**
 * Autonomous Quality Loop for AI Engineering Placement Course
 * 
 * Self-healing loop that:
 * 1. Scans all 224 chapters against quality criteria
 * 2. Identifies issues (style, formatting, content, headings)
 * 3. Auto-fixes issues where possible
 * 4. Logs all changes
 * 5. Repeats until zero issues remain
 * 
 * Usage: node scripts/quality-loop.js [--max-iterations 10] [--verbose]
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');
const LOG_FILE = path.join(__dirname, '..', 'quality-loop.log');

// Parse CLI args
const args = process.argv.slice(2);
const MAX_ITERATIONS = parseInt(args.find((_, i, a) => a[i-1] === '--max-iterations') || '10');
const VERBOSE = args.includes('--verbose');

// Quality criteria definitions
const CRITERIA = {
  // === HEADING HIERARCHY ===
  heading_hierarchy: {
    name: 'Heading Hierarchy (H1→H2→H3)',
    check: (content, filePath) => {
      const issues = [];
      const lines = content.split('\n');
      let lastLevel = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(/^(#{1,6})\s/);
        if (match) {
          const level = match[1].length;
          if (lastLevel > 0 && level > lastLevel + 1) {
            issues.push({
              line: i + 1,
              message: `Heading skip: H${lastLevel} → H${level}`,
              severity: 'MEDIUM',
              autoFix: true
            });
          }
          lastLevel = level;
        }
      }
      return issues;
    },
    fix: (content) => {
      const lines = content.split('\n');
      const fixed = [];
      let lastLevel = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(/^(#{1,6})\s/);
        if (match) {
          const level = match[1].length;
          if (lastLevel > 0 && level > lastLevel + 1) {
            // Insert missing heading level
            const insertLevel = lastLevel + 1;
            fixed.push('');
            fixed.push(`${'#'.repeat(insertLevel)} Details`);
          }
          lastLevel = level;
        }
        fixed.push(lines[i]);
      }
      return fixed.join('\n');
    }
  },

  // === DUPLICATE H1 ===
  duplicate_h1: {
    name: 'Duplicate H1 Headings',
    check: (content) => {
      const issues = [];
      const h1Matches = content.match(/^# .+$/gm) || [];
      if (h1Matches.length > 1) {
        issues.push({
          line: 1,
          message: `${h1Matches.length} H1 headings found (should be 1)`,
          severity: 'MEDIUM',
          autoFix: true
        });
      }
      return issues;
    },
    fix: (content) => {
      let firstH1Found = false;
      return content.replace(/^# (.+)$/gm, (match, title) => {
        if (!firstH1Found) {
          firstH1Found = true;
          return match;
        }
        return `## ${title}`;
      });
    }
  },

  // === MISSING BLANK LINES ===
  missing_blank_lines: {
    name: 'Missing Blank Lines Before Headings',
    check: (content) => {
      const issues = [];
      const lines = content.split('\n');
      
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].match(/^#{1,3}\s/) && lines[i-1].trim() !== '' && !lines[i-1].match(/^```/)) {
          issues.push({
            line: i + 1,
            message: `Missing blank line before heading: "${lines[i].substring(0, 40)}..."`,
            severity: 'LOW',
            autoFix: true
          });
        }
      }
      return issues;
    },
    fix: (content) => {
      // Add blank line before any ## or ### that doesn't have one
      return content.replace(/([^\n])\n(## )/g, '$1\n\n$2')
                    .replace(/([^\n])\n(### )/g, '$1\n\n$2');
    }
  },

  // === CODE BLOCKS WITHOUT LANGUAGE ===
  code_blocks_no_lang: {
    name: 'Code Blocks Without Language Tag',
    check: (content) => {
      const issues = [];
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '```' && (i === 0 || !lines[i-1].match(/^```/))) {
          // This is an opening code block without language
          // Check if it's a closing block by looking ahead
          let isOpening = true;
          for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
            if (lines[j].trim() === '```') {
              isOpening = false;
              break;
            }
          }
          if (isOpening) {
            issues.push({
              line: i + 1,
              message: 'Code block without language tag',
              severity: 'LOW',
              autoFix: true
            });
          }
        }
      }
      return issues;
    },
    fix: (content) => {
      // Replace ``` followed by newline with ```text
      return content.replace(/```\n/g, '```text\n');
    }
  },

  // === GENERIC INTRODUCTIONS ===
  generic_introductions: {
    name: 'Generic/Placeholder Introductions',
    check: (content) => {
      const issues = [];
      const introMatch = content.match(/## Introduction\n\n(.+?)(?=\n\n## )/s);
      
      if (introMatch) {
        const intro = introMatch[1];
        const genericPatterns = [
          /^This chapter covers the core concepts/i,
          /^Understanding .+ is essential/i,
          /^This lesson covers/i,
          /^In this chapter, we will/i,
          /^This chapter provides/i
        ];
        
        for (const pattern of genericPatterns) {
          if (pattern.test(intro) && intro.length < 100) {
            issues.push({
              line: content.substring(0, content.indexOf(introMatch[0])).split('\n').length,
              message: 'Generic/placeholder introduction',
              severity: 'HIGH',
              autoFix: false // Needs topic-specific content
            });
            break;
          }
        }
      }
      return issues;
    }
  },

  // === PLACEHOLDER CODE ===
  placeholder_code: {
    name: 'Placeholder/Stub Code',
    check: (content) => {
      const issues = [];
      const placeholderPatterns = [
        /# Placeholder/i,
        /# TODO/i,
        /# FIXME/i,
        /def example_function/i,
        /def process\(item\)/i,
        /Section \d+ covers essential/i,
        /Concept \d+: Definition/i
      ];
      
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        for (const pattern of placeholderPatterns) {
          if (pattern.test(lines[i])) {
            issues.push({
              line: i + 1,
              message: `Placeholder code: "${lines[i].substring(0, 50)}"`,
              severity: 'HIGH',
              autoFix: false
            });
          }
        }
      }
      return issues;
    }
  },

  // === TRAILING WHITESPACE ===
  trailing_whitespace: {
    name: 'Trailing Whitespace',
    check: (content) => {
      const issues = [];
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== lines[i].trimEnd() && lines[i].trim() !== '') {
          issues.push({
            line: i + 1,
            message: 'Trailing whitespace',
            severity: 'LOW',
            autoFix: true
          });
        }
      }
      return issues;
    },
    fix: (content) => {
      return content.split('\n').map(l => l.trimEnd()).join('\n');
    }
  },

  // === CONSISTENT SECTION ORDER ===
  section_order: {
    name: 'Consistent Section Order',
    check: (content) => {
      const issues = [];
      const expectedOrder = [
        '## Learning Objectives',
        '## Introduction',
        '## Prerequisites',
        '## Theory',
        '## Examples',
        '## Visual Analogy',
        '## Common Mistakes',
        '## Revision Notes',
        '## Summary',
        '## Placement Section',
        '## Chapter Quiz',
        '## Exercises'
      ];
      
      const foundSections = [];
      for (const section of expectedOrder) {
        const idx = content.indexOf(section);
        if (idx > -1) {
          foundSections.push({ section, idx });
        }
      }
      
      // Check if sections are in order
      for (let i = 1; i < foundSections.length; i++) {
        if (foundSections[i].idx < foundSections[i-1].idx) {
          issues.push({
            line: 1,
            message: `Section order: "${foundSections[i].section}" appears before "${foundSections[i-1].section}"`,
            severity: 'LOW',
            autoFix: false
          });
        }
      }
      return issues;
    }
  },

  // === REQUIRED SECTIONS ===
  required_sections: {
    name: 'Required Sections Present',
    check: (content) => {
      const issues = [];
      const required = [
        '## Learning Objectives',
        '## Summary'
      ];
      
      for (const section of required) {
        if (!content.includes(section)) {
          issues.push({
            line: 1,
            message: `Missing required section: ${section}`,
            severity: 'HIGH',
            autoFix: false
          });
        }
      }
      return issues;
    }
  },

  // === MERMAID SYNTAX ===
  mermaid_syntax: {
    name: 'Mermaid Diagram Syntax',
    check: (content) => {
      const issues = [];
      const mermaidBlocks = content.match(/```mermaid\n([\s\S]*?)```/g) || [];
      
      for (const block of mermaidBlocks) {
        const inner = block.replace(/```mermaid\n/, '').replace(/```/, '');
        
        // Check for common issues
        if (!inner.includes('flowchart') && !inner.includes('graph') && 
            !inner.includes('sequenceDiagram') && !inner.includes('classDiagram') &&
            !inner.includes('stateDiagram') && !inner.includes('gantt') &&
            !inner.includes('pie')) {
          issues.push({
            line: 1,
            message: 'Mermaid block with unrecognized diagram type',
            severity: 'LOW',
            autoFix: false
          });
        }
        
        // Check for broken connections
        if (inner.includes('-->') && inner.match(/-->\s*$/m)) {
          issues.push({
            line: 1,
            message: 'Mermaid: broken connection (--> with no target)',
            severity: 'MEDIUM',
            autoFix: false
          });
        }
      }
      return issues;
    }
  }
};

// Main quality loop
class QualityLoop {
  constructor() {
    this.iteration = 0;
    this.totalIssuesFixed = 0;
    this.totalIssuesFound = 0;
    this.history = [];
  }

  scanAllFiles() {
    const results = {};
    const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));
    
    for (const module of modules) {
      const modulePath = path.join(BASE, module);
      const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
      
      for (const chapter of chapters) {
        const filePath = path.join(modulePath, chapter);
        const content = fs.readFileSync(filePath, 'utf8');
        const key = `${module}/${chapter}`;
        
        const fileIssues = [];
        for (const [id, criterion] of Object.entries(CRITERIA)) {
          const issues = criterion.check(content, filePath);
          for (const issue of issues) {
            fileIssues.push({ ...issue, criterion: id, criterionName: criterion.name });
          }
        }
        
        if (fileIssues.length > 0) {
          results[key] = { filePath, content, issues: fileIssues };
        }
      }
    }
    
    return results;
  }

  fixFile(fileResult) {
    let { filePath, content, issues } = fileResult;
    let fixedCount = 0;
    
    for (const issue of issues) {
      if (issue.autoFix) {
        const criterion = CRITERIA[issue.criterion];
        if (criterion && criterion.fix) {
          const before = content;
          content = criterion.fix(content);
          if (content !== before) {
            fixedCount++;
          }
        }
      }
    }
    
    if (fixedCount > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return fixedCount;
  }

  async run() {
    console.log('🔄 Starting Autonomous Quality Loop\n');
    console.log(`📁 Scanning: ${BASE}`);
    console.log(`🔧 Max iterations: ${MAX_ITERATIONS}`);
    console.log(`📝 Log file: ${LOG_FILE}\n`);
    
    const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
    logStream.write(`\n${'='.repeat(60)}\n`);
    logStream.write(`Quality Loop Started: ${new Date().toISOString()}\n`);
    logStream.write(`${'='.repeat(60)}\n`);
    
    while (this.iteration < MAX_ITERATIONS) {
      this.iteration++;
      console.log(`\n${'─'.repeat(50)}`);
      console.log(`🔍 Iteration ${this.iteration}/${MAX_ITERATIONS}`);
      console.log(`${'─'.repeat(50)}`);
      
      // Scan
      const results = this.scanAllFiles();
      const totalIssues = Object.values(results).reduce((sum, r) => sum + r.issues.length, 0);
      const fixableIssues = Object.values(results).reduce((sum, r) => 
        sum + r.issues.filter(i => i.autoFix).length, 0);
      
      console.log(`📊 Found: ${totalIssues} issues (${fixableIssues} auto-fixable)`);
      
      if (VERBOSE) {
        for (const [key, result] of Object.entries(results)) {
          console.log(`\n  📄 ${key}:`);
          for (const issue of result.issues) {
            const icon = issue.autoFix ? '🔧' : '⚠️';
            console.log(`    ${icon} [${issue.severity}] ${issue.criterionName}: ${issue.message}`);
          }
        }
      }
      
      if (totalIssues === 0) {
        console.log('\n✅ No issues found! Quality loop complete.');
        logStream.write(`Iteration ${this.iteration}: 0 issues — DONE\n`);
        break;
      }
      
      // Fix
      let totalFixed = 0;
      for (const [key, result] of Object.entries(results)) {
        const fixed = this.fixFile(result);
        totalFixed += fixed;
      }
      
      this.totalIssuesFound += totalIssues;
      this.totalIssuesFixed += totalFixed;
      
      console.log(`🔧 Fixed: ${totalFixed} issues`);
      console.log(`📈 Running total: ${this.totalIssuesFixed}/${this.totalIssuesFound} issues fixed`);
      
      logStream.write(`Iteration ${this.iteration}: Found ${totalIssues}, Fixed ${totalFixed}\n`);
      
      // If no auto-fixable issues, we're stuck
      if (fixableIssues === 0) {
        console.log('\n⚠️ No auto-fixable issues remaining. Manual review needed for remaining issues.');
        logStream.write(`Iteration ${this.iteration}: Stuck — no auto-fixable issues\n`);
        break;
      }
    }
    
    console.log(`\n${'═'.repeat(50)}`);
    console.log(`📊 Quality Loop Summary`);
    console.log(`${'═'.repeat(50)}`);
    console.log(`Iterations: ${this.iteration}`);
    console.log(`Total issues found: ${this.totalIssuesFound}`);
    console.log(`Total issues fixed: ${this.totalIssuesFixed}`);
    console.log(`Issues remaining: ${this.totalIssuesFound - this.totalIssuesFixed}`);
    
    logStream.write(`\n${'='.repeat(60)}\n`);
    logStream.write(`Quality Loop Complete: ${new Date().toISOString()}\n`);
    logStream.write(`Iterations: ${this.iteration}\n`);
    logStream.write(`Total found: ${this.totalIssuesFound}\n`);
    logStream.write(`Total fixed: ${this.totalIssuesFixed}\n`);
    logStream.write(`${'='.repeat(60)}\n`);
    
    logStream.end();
  }
}

// Run the loop
const loop = new QualityLoop();
loop.run().catch(console.error);
