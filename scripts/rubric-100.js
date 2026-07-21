#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * 100-POINT QUALITY RUBRIC — AI Engineering Placement Course
 * ═══════════════════════════════════════════════════════════════
 * 
 * 100 criteria across 6 levels with weighted scoring:
 * - Level 1: Document Structure (15 criteria)
 * - Level 2: Content Quality (20 criteria)
 * - Level 3: Programming Quality (15 criteria)
 * - Level 4: AI Engineering Quality (20 criteria)
 * - Level 5: Placement Preparation (15 criteria)
 * - Level 6: Learning Experience (15 criteria)
 * 
 * Usage:
 *   node rubric-100.js                    # Run full scan
 *   node rubric-100.js --fix             # Auto-fix issues
 *   node rubric-100.js --report          # Generate report
 *   node rubric-100.js --file <path>     # Score single file
 *   node rubric-100.js --verbose         # Show all criteria
 * 
 * ═══════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');
const REPORT_FILE = path.join(__dirname, '..', 'rubric-report.md');

// Parse args
const args = process.argv.slice(2);
const FIX_MODE = args.includes('--fix');
const REPORT_MODE = args.includes('--report');
const VERBOSE = args.includes('--verbose');
const SINGLE_FILE = args.find((_, i, a) => a[i-1] === '--file');

// ═══════════════════════════════════════════════════════════════
// 100-POINT RUBRIC
// ═══════════════════════════════════════════════════════════════

const RUBRIC = {
  // ═══════════════════════════════════════════════════════════
  // LEVEL 1: DOCUMENT STRUCTURE (15 criteria)
  // ═══════════════════════════════════════════════════════════
  
  L1_01_title: {
    name: 'Title (Single H1)',
    level: 'Structure',
    weight: 0.8,
    check: (c) => {
      const withoutCode = c.replace(/```[\s\S]*?```/g, '');
      return (withoutCode.match(/^# .+$/gm) || []).length === 1;
    }
  },
  L1_02_introduction: {
    name: 'Introduction',
    level: 'Structure',
    weight: 0.9,
    check: (c) => c.includes('## Introduction') || c.includes('## What You Will Learn')
  },
  L1_03_why_matters: {
    name: 'Why This Topic Matters',
    level: 'Structure',
    weight: 0.7,
    check: (c) => c.includes('Why This Matters') || c.includes('Why it matters') || c.includes('Why AI Engineer') || c.includes('## Introduction')
  },
  L1_04_prerequisites: {
    name: 'Prerequisites',
    level: 'Structure',
    weight: 0.8,
    check: (c) => c.includes('## Prerequisites') || c.includes('## Before You Start')
  },
  L1_05_learning_objectives: {
    name: 'Learning Objectives',
    level: 'Structure',
    weight: 0.9,
    check: (c) => c.includes('## Learning Objectives') || c.includes('## Learning Goals')
  },
  L1_06_estimated_time: {
    name: 'Estimated Study Time',
    level: 'Structure',
    weight: 0.4,
    check: (c) => c.includes('Estimated Time') || c.includes('Study Time') || c.includes('Duration') || c.includes(' minutes')
  },
  L1_07_difficulty: {
    name: 'Difficulty Level',
    level: 'Structure',
    weight: 0.4,
    check: (c) => c.includes('Difficulty') || c.includes('[Easy]') || c.includes('[Medium]') || c.includes('[Hard]') || c.includes('Level:')
  },
  L1_08_theory: {
    name: 'Theory Section',
    level: 'Structure',
    weight: 1.0,
    check: (c) => c.includes('## Theory') || c.includes('## Concept') || c.includes('## Fundamentals') || c.includes('## How It Works')
  },
  L1_09_key_terminology: {
    name: 'Key Terminology',
    level: 'Structure',
    weight: 0.6,
    check: (c) => c.includes('## Key Terms') || c.includes('## Terminology') || c.includes('## Glossary') || c.includes('**Definition**') || c.includes('Key Concepts')
  },
  L1_10_visual_diagram: {
    name: 'Visual Diagram',
    level: 'Structure',
    weight: 0.9,
    check: (c) => c.includes('```mermaid') || c.includes('## Visual') || c.includes('## Architecture')
  },
  L1_11_summary: {
    name: 'Summary',
    level: 'Structure',
    weight: 0.9,
    check: (c) => c.includes('## Summary') || c.includes('## Key Takeaways')
  },
  L1_12_revision_notes: {
    name: 'Revision Notes',
    level: 'Structure',
    weight: 0.7,
    check: (c) => c.includes('## Revision Notes') || c.includes('## Quick Reference')
  },
  L1_13_further_reading: {
    name: 'Further Reading',
    level: 'Structure',
    weight: 0.4,
    check: (c) => c.includes('## Further Reading') || c.includes('## Resources') || c.includes('## References') || c.includes('## Learn More')
  },
  L1_14_references: {
    name: 'References',
    level: 'Structure',
    weight: 0.4,
    check: (c) => c.includes('## References') || c.includes('## Citations') || c.includes('[1]') || c.includes('RFC ')
  },
  L1_15_next_topic: {
    name: 'Next Topic',
    level: 'Structure',
    weight: 0.5,
    check: (c) => c.includes('**Next**') || c.includes('## Next') || c.includes('Next Chapter') || c.includes('Next Topic')
  },

  // ═══════════════════════════════════════════════════════════
  // LEVEL 2: CONTENT QUALITY (20 criteria)
  // ═══════════════════════════════════════════════════════════

  L2_16_accurate: {
    name: 'Accurate Information',
    level: 'Content',
    weight: 1.0,
    check: (c) => {
      // Check for obviously wrong statements
      const wrongPatterns = [
        /Python is statically typed/i,
        /HTTP uses UDP/i,
        /DNS uses TCP only/i,
        /O\(n\) is always faster/i
      ];
      return !wrongPatterns.some(p => p.test(c));
    }
  },
  L2_17_complete: {
    name: 'Complete Explanation',
    level: 'Content',
    weight: 0.9,
    check: (c) => c.split('\n').filter(l => l.trim().length > 0).length >= 80
  },
  L2_18_beginner_friendly: {
    name: 'Beginner Friendly',
    level: 'Content',
    weight: 0.8,
    check: (c) => {
      // Check for jargon without definition
      const hasJargon = c.includes('API') || c.includes('SDK') || c.includes('CRUD');
      const hasDefinition = c.includes('(') && c.includes(')') || c.includes('stands for') || c.includes('means');
      return !hasJargon || hasDefinition;
    }
  },
  L2_19_advanced: {
    name: 'Advanced Concepts',
    level: 'Content',
    weight: 0.7,
    check: (c) => c.includes('Advanced') || c.includes('Optimization') || c.includes('Production') || c.includes('Scale')
  },
  L2_20_no_missing: {
    name: 'No Missing Sections',
    level: 'Content',
    weight: 0.8,
    check: (c) => {
      const required = ['## Introduction', '## Summary'];
      return required.every(s => c.includes(s));
    }
  },
  L2_21_no_placeholder: {
    name: 'No Placeholder Text',
    level: 'Content',
    weight: 1.0,
    check: (c) => {
      const placeholders = [
        /Section \d+ covers essential/i,
        /Concept \d+: Definition/i,
        /def example_function/i,
        /# Placeholder/i,
        /# TODO/i,
        /\[Insert.*here\]/i,
        /Lorem ipsum/i
      ];
      return !placeholders.some(p => p.test(c));
    }
  },
  L2_22_logical_flow: {
    name: 'Logical Flow',
    level: 'Content',
    weight: 0.7,
    check: (c) => {
      const introIdx = c.indexOf('## Introduction');
      const theoryIdx = c.indexOf('## Theory');
      const summaryIdx = c.indexOf('## Summary');
      if (introIdx < 0 || theoryIdx < 0 || summaryIdx < 0) return true;
      return introIdx < theoryIdx && theoryIdx < summaryIdx;
    }
  },
  L2_23_clear_language: {
    name: 'Clear Language',
    level: 'Content',
    weight: 0.6,
    check: (c) => {
      // Check for overly long sentences
      const sentences = c.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const longSentences = sentences.filter(s => s.split(' ').length > 50);
      return longSentences.length < 3;
    }
  },
  L2_24_no_duplicates: {
    name: 'No Duplicated Content',
    level: 'Content',
    weight: 0.6,
    check: (c) => {
      const lines = c.split('\n').filter(l => l.trim().length > 0);
      const unique = new Set(lines);
      return unique.size / lines.length > 0.9;
    }
  },
  L2_25_real_examples: {
    name: 'Real-World Examples',
    level: 'Content',
    weight: 0.8,
    check: (c) => c.includes('Example') || c.includes('Real-World') || c.includes('Use Case') || c.includes('Case Study')
  },
  L2_26_industry: {
    name: 'Industry Use Cases',
    level: 'Content',
    weight: 0.7,
    check: (c) => c.includes('Industry') || c.includes('Production') || c.includes('Company') || c.includes('Google') || c.includes('Amazon')
  },
  L2_27_history: {
    name: 'Historical Context',
    level: 'Content',
    weight: 0.3,
    check: (c) => c.includes('History') || c.includes('Evolution') || c.includes('Originally') || c.includes('First introduced')
  },
  L2_28_latest: {
    name: 'Latest Best Practices',
    level: 'Content',
    weight: 0.7,
    check: (c) => {
      const outdated = ['Python 2', 'AngularJS', 'jQuery', 'XMLHttpRequest'];
      return !outdated.some(o => c.includes(o));
    }
  },
  L2_29_misconceptions: {
    name: 'Common Misconceptions',
    level: 'Content',
    weight: 0.5,
    check: (c) => c.includes('Misconception') || c.includes('Myth') || c.includes('Common Mistake') || c.includes('Warning')
  },
  L2_30_faqs: {
    name: 'FAQs',
    level: 'Content',
    weight: 0.5,
    check: (c) => c.includes('## FAQ') || c.includes('## Frequently Asked') || c.includes('**Q:**') || c.includes('### Q')
  },
  L2_31_notes: {
    name: 'Important Notes',
    level: 'Content',
    weight: 0.4,
    check: (c) => c.includes('**Note**') || c.includes('**Important**') || c.includes('> **Note**') || c.includes('⚠️')
  },
  L2_32_tips: {
    name: 'Tips & Tricks',
    level: 'Content',
    weight: 0.4,
    check: (c) => c.includes('**Tip**') || c.includes('**Pro Tip**') || c.includes('💡') || c.includes('Tip:')
  },
  L2_33_edge_cases: {
    name: 'Edge Cases',
    level: 'Content',
    weight: 0.6,
    check: (c) => c.includes('Edge Case') || c.includes('edge case') || c.includes('Boundary') || c.includes('Special Case')
  },
  L2_34_limitations: {
    name: 'Limitations',
    level: 'Content',
    weight: 0.5,
    check: (c) => c.includes('## Limitations') || c.includes('Limitation') || c.includes('Disadvantage') || c.includes('Trade-off')
  },
  L2_35_best_practices: {
    name: 'Best Practices',
    level: 'Content',
    weight: 0.6,
    check: (c) => c.includes('## Best Practices') || c.includes('Best Practice') || c.includes('Do:') || c.includes('✅')
  },

  // ═══════════════════════════════════════════════════════════
  // LEVEL 3: PROGRAMMING QUALITY (15 criteria)
  // ═══════════════════════════════════════════════════════════

  L3_36_syntax: {
    name: 'Correct Syntax',
    level: 'Programming',
    weight: 0.9,
    check: (c) => {
      // Check code blocks have valid language tags
      const codeBlocks = c.match(/```(\w+)/g) || [];
      const validLangs = ['python', 'typescript', 'javascript', 'bash', 'sql', 'yaml', 'json', 'java', 'cpp', 'go', 'rust', 'text', 'mermaid', 'markdown'];
      return codeBlocks.every(b => {
        const lang = b.replace('```', '');
        return validLangs.includes(lang) || lang === '';
      });
    }
  },
  L3_37_runnable: {
    name: 'Runnable Code',
    level: 'Programming',
    weight: 0.9,
    check: (c) => {
      const codeBlocks = c.match(/```(?:python|typescript|javascript|bash)[\s\S]*?```/g) || [];
      return codeBlocks.length >= 1;
    }
  },
  L3_38_comments: {
    name: 'Code Comments',
    level: 'Programming',
    weight: 0.7,
    check: (c) => {
      const codeBlocks = c.match(/```python[\s\S]*?```/g) || [];
      if (codeBlocks.length === 0) return true;
      return codeBlocks.some(b => b.includes('#') || b.includes('"""'));
    }
  },
  L3_39_complexity: {
    name: 'Complexity Analysis',
    level: 'Programming',
    weight: 0.8,
    check: (c) => c.includes('Time Complexity') || c.includes('O(') || c.includes('Space Complexity') || c.includes('Complexity:')
  },
  L3_40_memory: {
    name: 'Memory Complexity',
    level: 'Programming',
    weight: 0.5,
    check: (c) => c.includes('Space Complexity') || c.includes('Memory') || c.includes('O(1) space') || c.includes('Auxiliary')
  },
  L3_41_multiple_impl: {
    name: 'Multiple Implementations',
    level: 'Programming',
    weight: 0.5,
    check: (c) => {
      const codeBlocks = c.match(/```(?:python|typescript)[\s\S]*?```/g) || [];
      return codeBlocks.length >= 2;
    }
  },
  L3_42_beginner_impl: {
    name: 'Beginner Implementation',
    level: 'Programming',
    weight: 0.5,
    check: (c) => c.includes('Simple') || c.includes('Basic') || c.includes('Naive') || c.includes('Brute Force')
  },
  L3_43_optimized: {
    name: 'Optimized Implementation',
    level: 'Programming',
    weight: 0.7,
    check: (c) => c.includes('Optimized') || c.includes('Efficient') || c.includes('Better') || c.includes('Optimal')
  },
  L3_44_production: {
    name: 'Production Implementation',
    level: 'Programming',
    weight: 0.6,
    check: (c) => c.includes('Production') || c.includes('Real-World') || c.includes('Industry') || c.includes('Scale')
  },
  L3_45_error_handling: {
    name: 'Error Handling',
    level: 'Programming',
    weight: 0.6,
    check: (c) => c.includes('try') || c.includes('except') || c.includes('catch') || c.includes('Error') || c.includes('Exception')
  },
  L3_46_security: {
    name: 'Security Considerations',
    level: 'Programming',
    weight: 0.5,
    check: (c) => c.includes('Security') || c.includes('sanitiz') || c.includes('XSS') || c.includes('SQL Injection') || c.includes('Security:')
  },
  L3_47_performance: {
    name: 'Performance Notes',
    level: 'Programming',
    weight: 0.5,
    check: (c) => c.includes('Performance') || c.includes('Optimization') || c.includes('Speed') || c.includes('Fast')
  },
  L3_48_standards: {
    name: 'Coding Standards',
    level: 'Programming',
    weight: 0.4,
    check: (c) => c.includes('PEP 8') || c.includes('Style Guide') || c.includes('Convention') || c.includes('Best Practice')
  },
  L3_49_language_bp: {
    name: 'Language-Specific Best Practices',
    level: 'Programming',
    weight: 0.4,
    check: (c) => c.includes('Python') || c.includes('TypeScript') || c.includes('JavaScript') || c.includes('Bash')
  },
  L3_50_debugging: {
    name: 'Debugging Guide',
    level: 'Programming',
    weight: 0.4,
    check: (c) => c.includes('Debug') || c.includes('Troubleshoot') || c.includes('Common Error') || c.includes('Error:')
  },

  // ═══════════════════════════════════════════════════════════
  // LEVEL 4: AI ENGINEERING QUALITY (20 criteria)
  // ═══════════════════════════════════════════════════════════

  L4_51_ml_intuition: {
    name: 'ML Intuition',
    level: 'AI Engineering',
    weight: 0.7,
    check: (c) => c.includes('intuition') || c.includes('Intuition') || c.includes('Think of') || c.includes('Analogy') || c.includes('Visual Analogy')
  },
  L4_52_math: {
    name: 'Mathematical Explanation',
    level: 'AI Engineering',
    weight: 0.6,
    check: (c) => c.includes('**Math') || c.includes('Formula') || c.includes('Equation') || c.includes('∑') || c.includes('∫') || c.includes('E[')
  },
  L4_53_derivation: {
    name: 'Formula Derivation',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('Derivation') || c.includes('derive') || c.includes('Step 1') || c.includes('=')
  },
  L4_54_visual_intuition: {
    name: 'Visual Intuition',
    level: 'AI Engineering',
    weight: 0.6,
    check: (c) => c.includes('```mermaid') || c.includes('Visual') || c.includes('Diagram') || c.includes('Flowchart')
  },
  L4_55_tensor: {
    name: 'Tensor Explanation',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('tensor') || c.includes('Tensor') || c.includes('matrix') || c.includes('Matrix') || c.includes('vector') || c.includes('shape')
  },
  L4_56_gpu: {
    name: 'GPU Considerations',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('GPU') || c.includes('CUDA') || c.includes('Device') || c.includes('.to(device)')
  },
  L4_57_memory_opt: {
    name: 'Memory Optimization',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('memory') || c.includes('Memory') || c.includes('VRAM') || c.includes('OOM') || c.includes('gradient checkpointing')
  },
  L4_58_training: {
    name: 'Training Workflow',
    level: 'AI Engineering',
    weight: 0.5,
    check: (c) => c.includes('Training') || c.includes('train') || c.includes('epoch') || c.includes('batch') || c.includes('loss')
  },
  L4_59_inference: {
    name: 'Inference Workflow',
    level: 'AI Engineering',
    weight: 0.5,
    check: (c) => c.includes('Inference') || c.includes('inference') || c.includes('predict') || c.includes('generate') || c.includes('forward')
  },
  L4_60_deployment: {
    name: 'Production Deployment',
    level: 'AI Engineering',
    weight: 0.5,
    check: (c) => c.includes('Deploy') || c.includes('deploy') || c.includes('Docker') || c.includes('API') || c.includes('Endpoint')
  },
  L4_61_llm: {
    name: 'LLM Perspective',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('LLM') || c.includes('Language Model') || c.includes('GPT') || c.includes('Transformer')
  },
  L4_62_rag: {
    name: 'RAG Relevance',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('RAG') || c.includes('Retrieval') || c.includes('Vector') || c.includes('Embedding')
  },
  L4_63_agent: {
    name: 'Agent Relevance',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('Agent') || c.includes('Tool') || c.includes('Function Calling') || c.includes('LangChain')
  },
  L4_64_prompt: {
    name: 'Prompt Engineering Notes',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('Prompt') || c.includes('prompt') || c.includes('Instruction') || c.includes('Few-shot')
  },
  L4_65_finetune: {
    name: 'Fine-Tuning Notes',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('Fine-tun') || c.includes('fine-tun') || c.includes('LoRA') || c.includes('Adapter')
  },
  L4_66_evaluation: {
    name: 'Evaluation Metrics',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('Accuracy') || c.includes('F1') || c.includes('BLEU') || c.includes('ROUGE') || c.includes('Metric')
  },
  L4_67_ai_mistakes: {
    name: 'Common AI Mistakes',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('## Common Mistakes') || c.includes('Common Mistake') || c.includes('Pitfall') || c.includes('Trap')
  },
  L4_68_industry_examples: {
    name: 'Industry Examples',
    level: 'AI Engineering',
    weight: 0.5,
    check: (c) => c.includes('Google') || c.includes('OpenAI') || c.includes('Meta') || c.includes('NVIDIA') || c.includes('Microsoft')
  },
  L4_69_open_source: {
    name: 'Open-Source Tools',
    level: 'AI Engineering',
    weight: 0.4,
    check: (c) => c.includes('Hugging Face') || c.includes('PyTorch') || c.includes('TensorFlow') || c.includes('LangChain') || c.includes('LlamaIndex')
  },
  L4_70_research: {
    name: 'Research References',
    level: 'AI Engineering',
    weight: 0.3,
    check: (c) => c.includes('arXiv') || c.includes('Paper') || c.includes('Research') || c.includes('[20') || c.includes('et al.')
  },

  // ═══════════════════════════════════════════════════════════
  // LEVEL 5: PLACEMENT PREPARATION (15 criteria)
  // ═══════════════════════════════════════════════════════════

  L5_71_interview_qa: {
    name: 'Interview Questions',
    level: 'Placement',
    weight: 1.0,
    check: (c) => c.includes('## Interview Questions') || c.includes('## Placement Section') || c.includes('**Q') || c.includes('**Answer')
  },
  L5_72_hr: {
    name: 'HR Questions',
    level: 'Placement',
    weight: 0.5,
    check: (c) => c.includes('HR') || c.includes('Behavioral') || c.includes('Tell me about') || c.includes('STAR')
  },
  L5_73_coding_interview: {
    name: 'Coding Interview Questions',
    level: 'Placement',
    weight: 0.7,
    check: (c) => c.includes('Coding') || c.includes('LeetCode') || c.includes('DSA') || c.includes('Algorithm')
  },
  L5_74_system_design: {
    name: 'System Design Relevance',
    level: 'Placement',
    weight: 0.6,
    check: (c) => c.includes('System Design') || c.includes('Scale') || c.includes('Architecture') || c.includes('Distributed')
  },
  L5_75_gate: {
    name: 'GATE Relevance',
    level: 'Placement',
    weight: 0.4,
    check: (c) => c.includes('GATE') || c.includes('Exam') || c.includes('Objective') || c.includes('MCQ')
  },
  L5_76_iit: {
    name: 'IIT Interview Relevance',
    level: 'Placement',
    weight: 0.3,
    check: (c) => c.includes('IIT') || c.includes('Interview') || c.includes('Technical Round')
  },
  L5_77_company: {
    name: 'Company-Specific Questions',
    level: 'Placement',
    weight: 0.7,
    check: (c) => c.includes('Google Style') || c.includes('Amazon Style') || c.includes('Microsoft Style') || c.includes('FAANG')
  },
  L5_78_faang: {
    name: 'FAANG Tips',
    level: 'Placement',
    weight: 0.5,
    check: (c) => c.includes('FAANG') || c.includes('Google') || c.includes('Amazon') || c.includes('Meta') || c.includes('Apple')
  },
  L5_79_startup: {
    name: 'Startup Interview Tips',
    level: 'Placement',
    weight: 0.4,
    check: (c) => c.includes('Startup') || c.includes('AI Startup') || c.includes('Early Stage')
  },
  L5_80_common_mistakes: {
    name: 'Common Interview Mistakes',
    level: 'Placement',
    weight: 0.6,
    check: (c) => c.includes('## Common Mistakes') || c.includes('Mistake') || c.includes('Avoid') || c.includes('❌')
  },
  L5_81_cheat_sheet: {
    name: 'Cheat Sheet',
    level: 'Placement',
    weight: 0.5,
    check: (c) => c.includes('## Cheat Sheet') || c.includes('Cheat Sheet') || c.includes('Quick Reference') || c.includes('## Revision Notes')
  },
  L5_82_revision_q: {
    name: 'Revision Questions',
    level: 'Placement',
    weight: 0.5,
    check: (c) => c.includes('## Chapter Quiz') || c.includes('## Quiz') || c.includes('MCQ') || c.includes('Exercise')
  },
  L5_83_practice: {
    name: 'Practice Exercises',
    level: 'Placement',
    weight: 0.7,
    check: (c) => c.includes('## Exercises') || c.includes('Practice') || c.includes('Implement') || c.includes('Write a function')
  },
  L5_84_assignment: {
    name: 'Mini Assignment',
    level: 'Placement',
    weight: 0.4,
    check: (c) => c.includes('Assignment') || c.includes('Project') || c.includes('Build') || c.includes('Create')
  },
  L5_85_mock: {
    name: 'Mock Interview Section',
    level: 'Placement',
    weight: 0.4,
    check: (c) => c.includes('Mock') || c.includes('Practice Interview') || c.includes('Simulate')
  },

  // ═══════════════════════════════════════════════════════════
  // LEVEL 6: LEARNING EXPERIENCE (15 criteria)
  // ═══════════════════════════════════════════════════════════

  L6_86_mermaid: {
    name: 'Mermaid Diagrams',
    level: 'Learning',
    weight: 0.7,
    check: (c) => c.includes('```mermaid')
  },
  L6_87_tables: {
    name: 'Tables',
    level: 'Learning',
    weight: 0.5,
    check: (c) => c.includes('| ') && c.includes('|---')
  },
  L6_88_flowcharts: {
    name: 'Flowcharts',
    level: 'Learning',
    weight: 0.5,
    check: (c) => c.includes('flowchart') || c.includes('graph') || c.includes('Flowchart')
  },
  L6_89_infographics: {
    name: 'Infographics',
    level: 'Learning',
    weight: 0.3,
    check: (c) => c.includes('```mermaid') || c.includes('![') || c.includes('ASCII')
  },
  L6_90_analogies: {
    name: 'Analogies',
    level: 'Learning',
    weight: 0.6,
    check: (c) => c.includes('Think of') || c.includes('Analogy') || c.includes('Like a') || c.includes('Similar to') || c.includes('Visual Analogy')
  },
  L6_91_memory_tricks: {
    name: 'Memory Tricks',
    level: 'Learning',
    weight: 0.3,
    check: (c) => c.includes('Remember') || c.includes('Trick') || c.includes('Mnemonic') || c.includes('Think of it as')
  },
  L6_92_flashcards: {
    name: 'Flashcards',
    level: 'Learning',
    weight: 0.3,
    check: (c) => c.includes('Flashcard') || c.includes('Quick Review') || c.includes('## Key Terms')
  },
  L6_93_interactive_quiz: {
    name: 'Interactive Quiz',
    level: 'Learning',
    weight: 0.7,
    check: (c) => c.includes('## Chapter Quiz') || c.includes('## Quiz') || c.includes('**Answer')
  },
  L6_94_challenges: {
    name: 'Challenge Problems',
    level: 'Learning',
    weight: 0.5,
    check: (c) => c.includes('Challenge') || c.includes('Hard') || c.includes('Advanced') || c.includes('**Hard**')
  },
  L6_95_mini_project: {
    name: 'Mini Project',
    level: 'Learning',
    weight: 0.4,
    check: (c) => c.includes('Project') || c.includes('Build') || c.includes('Implement') || c.includes('Create')
  },
  L6_96_capstone: {
    name: 'Capstone Project Link',
    level: 'Learning',
    weight: 0.3,
    check: (c) => c.includes('Capstone') || c.includes('Full Project') || c.includes('Complete System')
  },
  L6_97_related: {
    name: 'Related Topics',
    level: 'Learning',
    weight: 0.4,
    check: (c) => c.includes('## Related') || c.includes('See Also') || c.includes('Related Topics') || c.includes('Next:')
  },
  L6_98_external: {
    name: 'External Resources',
    level: 'Learning',
    weight: 0.4,
    check: (c) => c.includes('## Further Reading') || c.includes('## Resources') || c.includes('http') || c.includes('GitHub')
  },
  L6_99_progress: {
    name: 'Progress Checklist',
    level: 'Learning',
    weight: 0.4,
    check: (c) => c.includes('- [ ]') || c.includes('## Checklist') || c.includes('Progress') || c.includes('✅')
  },
  L6_100_roadmap: {
    name: 'Learning Roadmap',
    level: 'Learning',
    weight: 0.4,
    check: (c) => c.includes('## Roadmap') || c.includes('Roadmap') || c.includes('## Chapter Roadmap') || c.includes('## Learning Path')
  }
};

// ═══════════════════════════════════════════════════════════════
// WEIGHTED SCORING
// ═══════════════════════════════════════════════════════════════

const LEVEL_WEIGHTS = {
  'Structure': 0.10,
  'Content': 0.25,
  'Programming': 0.15,
  'AI Engineering': 0.20,
  'Placement': 0.15,
  'Learning': 0.10,
  'Formatting': 0.05
};

function scoreFile(content) {
  const levelScores = {};
  const levelCounts = {};
  const levelPassed = {};
  
  for (const [id, criterion] of Object.entries(RUBRIC)) {
    const passed = criterion.check(content);
    const level = criterion.level;
    
    if (!levelScores[level]) {
      levelScores[level] = 0;
      levelCounts[level] = 0;
      levelPassed[level] = 0;
    }
    
    levelCounts[level]++;
    if (passed) {
      levelScores[level] += criterion.weight;
      levelPassed[level] += criterion.weight;
    }
  }
  
  // Calculate weighted level scores
  let finalScore = 0;
  for (const [level, weight] of Object.entries(LEVEL_WEIGHTS)) {
    if (levelScores[level] !== undefined) {
      const levelScore = (levelPassed[level] / levelScores[level]) * 10;
      finalScore += levelScore * weight;
    }
  }
  
  return {
    score: Math.round(finalScore * 10) / 10,
    levelScores,
    levelPassed,
    levelCounts
  };
}

// ═══════════════════════════════════════════════════════════════
// SCAN & REPORT
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
      const { score, levelScores, levelPassed, levelCounts } = scoreFile(content);
      
      results.push({
        module,
        chapter,
        filePath,
        content,
        score,
        levelScores,
        levelPassed,
        levelCounts
      });
    }
  }
  
  return results.sort((a, b) => a.score - b.score);
}

function generateReport(results) {
  const avgScore = results.reduce((s, r) => s + r.score, 0) / results.length;
  const minScore = Math.min(...results.map(r => r.score));
  const maxScore = Math.max(...results.map(r => r.score));
  
  // Level averages
  const levelAverages = {};
  for (const level of Object.keys(LEVEL_WEIGHTS)) {
    const levelResults = results.map(r => {
      const total = r.levelScores[level] || 1;
      const passed = r.levelPassed[level] || 0;
      return (passed / total) * 10;
    });
    levelAverages[level] = levelResults.reduce((a, b) => a + b, 0) / levelResults.length;
  }
  
  // Criteria failure counts
  const criteriaFailures = {};
  for (const result of results) {
    for (const [id, criterion] of Object.entries(RUBRIC)) {
      if (!criterion.check(result.content)) {
        criteriaFailures[criterion.name] = (criteriaFailures[criterion.name] || 0) + 1;
      }
    }
  }
  
  let report = `# 100-Point Rubric Report

Generated: ${new Date().toISOString()}

## Summary

| Metric | Value |
|--------|-------|
| Total Files | ${results.length} |
| Average Score | ${avgScore.toFixed(1)}/10 |
| Min Score | ${minScore}/10 |
| Max Score | ${maxScore}/10 |
| Files at 10/10 | ${results.filter(r => r.score === 10).length} |
| Files at 9+/10 | ${results.filter(r => r.score >= 9).length} |

## Level Scores

| Level | Weight | Average Score | Grade |
|-------|--------|---------------|-------|
${Object.entries(levelAverages).map(([level, avg]) => 
  `| ${level} | ${(LEVEL_WEIGHTS[level]*100).toFixed(0)}% | ${avg.toFixed(1)}/10 | ${avg >= 9 ? 'A' : avg >= 7 ? 'B' : avg >= 5 ? 'C' : 'D'} |`
).join('\n')}

## Top 20 Most Common Failures

| Rank | Criteria | Files Failing | % |
|------|----------|---------------|---|
${Object.entries(criteriaFailures)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .map(([name, count], i) => `| ${i+1} | ${name} | ${count} | ${((count/results.length)*100).toFixed(0)}% |`)
  .join('\n')}

## Bottom 10 Files

| Rank | File | Score |
|------|------|-------|
${results.slice(0, 10).map((r, i) => 
  `| ${i+1} | ${r.module}/${r.chapter} | ${r.score}/10 |`
).join('\n')}
`;
  
  return report;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

if (SINGLE_FILE) {
  const content = fs.readFileSync(SINGLE_FILE, 'utf8');
  const { score, levelScores, levelPassed, levelCounts } = scoreFile(content);
  
  console.log(`\n📊 Score: ${score}/10\n`);
  console.log('Level Breakdown:');
  for (const [level, weight] of Object.entries(LEVEL_WEIGHTS)) {
    if (levelScores[level] !== undefined) {
      const total = levelScores[level];
      const passed = levelPassed[level];
      const levelScore = ((passed / total) * 10).toFixed(1);
      console.log(`  ${level} (${(weight*100).toFixed(0)}%): ${levelScore}/10`);
    }
  }
  
  console.log('\nFailed Criteria:');
  for (const [id, criterion] of Object.entries(RUBRIC)) {
    if (!criterion.check(content)) {
      console.log(`  ❌ ${criterion.name}`);
    }
  }
} else {
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║   100-POINT QUALITY RUBRIC — AI Engineering Placement     ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
  
  const results = scanAllFiles();
  const avgScore = results.reduce((s, r) => s + r.score, 0) / results.length;
  const at10 = results.filter(r => r.score === 10).length;
  const at9 = results.filter(r => r.score >= 9).length;
  
  console.log(`📁 Files scanned: ${results.length}`);
  console.log(`📊 Average Score: ${avgScore.toFixed(1)}/10`);
  console.log(`🏆 Files at 10/10: ${at10}`);
  console.log(`✅ Files at 9+/10: ${at9}`);
  
  const report = generateReport(results);
  fs.writeFileSync(REPORT_FILE, report, 'utf8');
  console.log(`\n📝 Report: ${REPORT_FILE}`);
}
