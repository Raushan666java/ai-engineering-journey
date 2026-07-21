#!/usr/bin/env node
/**
 * Script to add missing course-writer sections to all chapters.
 * Adds: Introduction, Prerequisites, Common Mistakes, Revision Notes,
 * Summary, Placement Section (company-specific interview questions)
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

// Module topics for generating relevant content
const MODULE_TOPICS = {
  '03-data-structures-algorithms': {
    name: 'Data Structures & Algorithms',
    topics: {
      '01': { intro: 'Time and space complexity analysis is the foundation of algorithm design. Understanding Big-O notation helps you evaluate whether your code will scale to millions of data points — a critical skill for AI engineers working with large datasets and training pipelines.', prereqs: ['Basic programming in Python or TypeScript', 'Understanding of loops and functions'], mistakes: ['Confusing O(n) with O(n²) when analyzing nested loops', 'Forgetting to count auxiliary space in space complexity', 'Assuming worst-case is always the right metric', 'Not considering input size when choosing algorithms', 'Mixing up time complexity of different sorting algorithms'], revision: ['Big-O = worst case upper bound', 'Big-Theta = tight bound (average case)', 'Big-Omega = best case lower bound', 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)', 'Space complexity = auxiliary space + input space', 'Amortized analysis averages over sequence of operations', 'Master theorem solves divide-and-conquer recurrences'] },
      '02': { intro: 'Arrays are the most fundamental data structure, providing O(1) random access. Understanding array operations, their memory layout, and common patterns like sliding window is essential for coding interviews and building efficient data pipelines.', prereqs: ['Time and space complexity basics', 'Basic programming'], mistakes: ['Not considering edge cases (empty array, single element)', 'Off-by-one errors in index calculations', 'Forgetting that array insertion/deletion is O(n)', 'Not using two-pointer technique when applicable', 'Ignoring cache locality benefits of arrays'], revision: ['Arrays: O(1) access, O(n) insert/delete', 'Cache-friendly due to contiguous memory', 'Two-pointer technique for sorted arrays', 'Sliding window for subarray problems', 'Prefix sums for range queries'] },
      '03': { intro: 'Strings are sequences of characters with unique operations. Many interview problems involve string manipulation, pattern matching, and anagram/subsequence detection. Understanding string algorithms is crucial for NLP and text processing in AI.', prereqs: ['Array basics', 'Character encoding (ASCII/Unicode)'], mistakes: ['Forgetting strings are immutable in many languages', 'Not handling Unicode characters correctly', 'Off-by-one in substring operations', 'Not considering case sensitivity', 'Using wrong pattern matching algorithm'], revision: ['Strings are immutable in Python/Java', 'Anagram = same characters, different order', 'Substring vs subsequence difference', 'KMP for efficient pattern matching', 'Trie for prefix-based string operations'] },
      '04': { intro: 'Linked lists form the backbone of many advanced data structures like stacks, queues, and graphs. Mastering pointer manipulation and linked list algorithms is a classic interview topic that tests your understanding of memory and data organization.', prereqs: ['Basic programming', 'Understanding of pointers/references'], mistakes: ['Losing reference to remaining list during traversal', 'Not handling edge cases (empty list, single node)', 'Forgetting to update head/tail pointers', 'Infinite loops from incorrect cycle detection', 'Not using dummy nodes for simplification'], revision: ['Singly linked: O(1) insert/delete at head', 'Doubly linked: O1 insert/delete with reference', 'Fast/slow pointer for cycle detection', 'Dummy node simplifies edge cases', 'Reversing a linked list is O(n) time O(1) space'] },
      '05': { intro: 'The two-pointer technique is a powerful pattern for solving array and linked list problems efficiently. By using two indices that move intelligently, you can solve many problems in O(n) time that would otherwise require O(n²).', prereqs: ['Array basics', 'Time complexity analysis'], mistakes: ['Not sorting the array first when required', 'Moving only one pointer when both should move', 'Not handling the case where pointers cross', 'Forgetting to check for duplicates', 'Not considering the two-pointer vs sliding window distinction'], revision: ['Two pointers: opposite ends or same direction', 'Opposite ends for sorted array problems', 'Same direction for partitioning problems', 'Fast/slow for cycle detection and middle finding', 'Often combined with sorting for O(n log n) solutions'] },
      '06': { intro: 'Hash maps provide O(1) average-case lookup, insertion, and deletion. They are the go-to data structure for frequency counting, caching, and implementing sets. Understanding hash collisions and when to use hash maps vs arrays is essential.', prereqs: ['Array basics', 'Basic understanding of hashing'], mistakes: ['Not handling hash collisions', 'Using mutable objects as keys', 'Forgetting that hash maps have O(n) worst case', 'Not considering memory overhead', 'When to use map vs set vs array'], revision: ['Hash map: O(1) avg lookup/insert/delete', 'Hash set: O(1) membership testing', 'Collision resolution: chaining vs open addressing', 'Use for frequency counting and two-sum patterns', 'Ordered map for sorted key requirements'] },
      '07': { intro: 'Stacks and queues are fundamental LIFO and FIFO data structures. They appear in countless problems from balanced parentheses to BFS traversal. Mastering these structures helps you solve problems involving ordering, nesting, and processing sequences.', prereqs: ['Array basics', 'Basic programming'], mistakes: ['Using stack when queue is needed (and vice versa)', 'Not handling empty stack/queue operations', 'Forgetting that stacks can be implemented with arrays', 'Not using monotonic stack for next greater element', 'Mixing up push/pop vs enqueue/dequeue'], revision: ['Stack: LIFO — push, pop, peek', 'Queue: FIFO — enqueue, dequeue, peek', 'Monotonic stack for next greater/smaller element', 'BFS uses queue, DFS uses stack', 'Two stacks can simulate a queue'] },
      '08': { intro: 'Trees are hierarchical data structures fundamental to representing organized data. Binary trees, BSTs, and balanced trees (AVL, Red-Black) are essential for efficient searching, sorting, and representing hierarchical relationships in AI systems.', prereqs: ['Linked list concepts', 'Recursion basics', 'Stack/queue usage'], mistakes: ['Not handling null/empty tree cases', 'Confusing tree height vs depth', 'Forgetting that BST property must be maintained', 'Not using level-order traversal when needed', 'Confusing BST with binary tree'], revision: ['BST: left < root < right', 'In-order traversal of BST gives sorted order', 'Height-balanced trees guarantee O(log n)', 'BFS uses queue (level-order), DFS uses stack/recursion', 'AVL trees self-balance after insert/delete'] },
      '09': { intro: 'Heaps (priority queues) are specialized trees that efficiently provide the minimum or maximum element. They are essential for scheduling, top-K problems, and implementing algorithms like Dijkstra\'s shortest path.', prereqs: ['Binary tree basics', 'Array representation of trees'], mistakes: ['Not understanding 0-indexed vs 1-indexed heap', 'Forgetting to heapify after modifications', 'Using heap when a sorted array suffices', 'Not considering the O(n) build-heap vs O(n log n) inserts', 'Confusing min-heap with max-heap'], revision: ['Min-heap: parent ≤ children', 'Max-heap: parent ≥ children', 'Insert: O(log n), Extract-min: O(log n)', 'Build heap from array: O(n)', 'Used in heapsort, Dijkstra, and top-K problems'] },
      '10': { intro: 'Tries (prefix trees) are specialized trees for efficient string operations. They provide O(m) lookup where m is the key length, making them ideal for autocomplete, spell checking, and IP routing tables.', prereqs: ['Tree basics', 'String operations'], mistakes: ['Not handling prefix sharing correctly', 'Forgetting to mark end-of-word nodes', 'Not considering memory overhead of tries', 'Using tries for small datasets where hash maps suffice', 'Not implementing deletion correctly'], revision: ['Trie: O(m) search where m = key length', 'Each node represents a character', 'Prefix sharing reduces space', 'Used for autocomplete and spell check', 'Patricia/Radix tries compress common prefixes'] },
      '11': { intro: 'Graphs model relationships between entities — social networks, dependencies, maps, and neural network architectures. Understanding graph traversal (BFS/DFS), shortest paths, and topological sorting is essential for AI engineers.', prereqs: ['Queue and stack basics', 'Recursion', 'Tree traversal concepts'], mistakes: ['Not handling disconnected components', 'Forgetting to mark visited nodes', 'Using DFS when BFS gives shortest path', 'Not considering directed vs undirected graphs', 'Confusing topological sort with DFS order'], revision: ['BFS: shortest path in unweighted graphs', 'DFS: cycle detection, topological sort', 'Dijkstra: shortest path with positive weights', 'Bellman-Ford: handles negative weights', 'Topological sort: only for DAGs'] },
      '12': { intro: 'Dynamic programming solves complex problems by breaking them into overlapping subproblems. Recognizing DP patterns — optimal substructure and overlapping subproblems — is crucial for solving interview problems efficiently.', prereqs: ['Recursion basics', 'Time complexity analysis', 'Array/matrix operations'], mistakes: ['Not identifying overlapping subproblems', 'Forgetting to handle base cases', 'Using recursion without memoization', 'Not considering space optimization', 'Confusing DP with greedy approaches'], revision: ['DP = recursion + memoization', 'Top-down: recursive with cache', 'Bottom-up: iterative with table', 'Optimal substructure + overlapping subproblems = DP', 'Space optimization often possible'] },
      '13': { intro: 'Backtracking systematically explores all possible solutions by building candidates incrementally and abandoning invalid ones. It is essential for constraint satisfaction problems, permutations, combinations, and puzzles.', prereqs: ['Recursion basics', 'Array/string operations'], mistakes: ['Not pruning search space early', 'Forgetting to undo changes after recursive call', 'Not handling duplicates correctly', 'Using backtracking when a greedy approach works', 'Not considering the time complexity (often exponential)'], revision: ['Backtracking = DFS + pruning', 'Build candidate incrementally', 'Undo changes when backtracking', 'Used for permutations, combinations, Sudoku', 'Time complexity is typically O(2^n) or O(n!)'] },
      '14': { intro: 'Greedy algorithms make locally optimal choices at each step, hoping to find a global optimum. They are simpler and faster than DP but only work when the greedy choice property holds.', prereqs: ['Sorting basics', 'Time complexity analysis'], mistakes: ['Assuming greedy always gives optimal solution', 'Not proving greedy choice property', 'Using greedy when DP is needed', 'Not considering edge cases', 'Forgetting to sort input first when needed'], revision: ['Greedy: locally optimal → globally optimal (sometimes)', 'Always prove greedy choice property', 'Activity selection, Huffman coding, Kruskal/Prim', 'DP when greedy fails', 'Sorting often precedes greedy'] },
      '15': { intro: 'Binary search is one of the most important algorithms, reducing search time from O(n) to O(log n). Understanding its variants — finding boundaries, searching in rotated arrays — is essential for efficient problem solving.', prereqs: ['Array basics', 'Time complexity analysis'], mistakes: ['Not handling integer overflow in mid calculation', 'Forgetting that array must be sorted', 'Using wrong boundary conditions', 'Not considering the three variants (left, right, standard)', 'Confusing binary search with linear search'], revision: ['Binary search: O(log n) on sorted array', 'mid = left + (right - left) / 2 to avoid overflow', 'Three variants: standard, leftmost, rightmost', 'Works on any monotonic function', 'Search space reduction is key'] },
      '16': { intro: 'Sliding window is a powerful technique for solving subarray/substring problems in O(n) time. It maintains a window over the data and slides it to find optimal solutions without checking every possible subarray.', prereqs: ['Array/string basics', 'Two-pointer technique'], mistakes: ['Not handling the window expansion phase', 'Forgetting to shrink the window when condition is met', 'Not considering all window sizes for variable-size windows', 'Using sliding window when the problem doesn\'t have the right structure', 'Confusing fixed-size with variable-size windows'], revision: ['Fixed-size window: use when window size is given', 'Variable-size window: expand/shrink based on condition', 'O(n) time — each element enters and leaves window once', 'Useful for: max/sum/substring problems', 'Combined with hash maps for character counting'] },
      '17': { intro: 'Matrix problems are common in coding interviews and have direct applications in image processing, neural networks, and scientific computing. Understanding matrix traversal, rotation, and diagonal patterns is essential.', prereqs: ['2D array basics', 'Array traversal'], mistakes: ['Confusing row-major vs column-major order', 'Not handling boundary conditions in matrix traversal', 'Forgetting that matrix rotation can be done in-place', 'Not considering diagonal traversal patterns', 'Using O(n²) space when O(1) is possible'], revision: ['Row-major: matrix[row][col]', 'Spiral traversal: layer by layer', 'Diagonal: row+col = constant', 'Rotation: transpose + reverse rows', 'Saddle point: min in row, max in column'] },
      '18': { intro: 'Bit manipulation uses individual bits for efficient computation. It is essential for low-level optimization, cryptography, and solving problems that require checking subsets or toggling states.', prereqs: ['Binary number system', 'Basic logic gates'], mistakes: ['Not understanding operator precedence', 'Forgetting that >> is division by 2', 'Not handling negative numbers correctly', 'Using bit manipulation when it\'s not optimal', 'Confusing & with && and | with ||'], revision: ['& = AND, | = OR, ^ = XOR, ~ = NOT', '<< = multiply by 2, >> = divide by 2', 'XOR: a ^ a = 0, a ^ 0 = a', 'n & (n-1) clears lowest set bit', 'Used for subset enumeration and optimization'] }
    }
  },
  '04-git-linux-cli': {
    name: 'Git, Linux & CLI',
    topics: {
      '01': { intro: 'Git is the industry-standard version control system. Understanding Git fundamentals — init, add, commit, branching — is essential for every software engineer. AI engineers use Git to manage training code, model versions, and collaboration.', prereqs: ['Basic command line usage', 'Text editor familiarity'], mistakes: ['Committing too frequently without meaningful messages', 'Not using .gitignore for sensitive files', 'Force pushing to shared branches', 'Not understanding staging area', 'Forgetting to pull before pushing'], revision: ['git init → initialize repo', 'git add → stage changes', 'git commit → save snapshot', 'git status → check state', 'git log → view history', '.gitignore → exclude files', 'Commit often, push after review'] },
      '02': { intro: 'Branching strategies like GitFlow and trunk-based development enable teams to work in parallel without conflicts. Understanding when to create branches, how to merge vs rebase, and conflict resolution is crucial for team productivity.', prereqs: ['Git basics (init, add, commit)'], mistakes: ['Not deleting merged branches', 'Rebasing shared branches', 'Not writing meaningful branch names', 'Forgetting to resolve merge conflicts properly', 'Not using pull requests for code review'], revision: ['Branch: isolated development line', 'Merge: preserves history, creates merge commit', 'Rebase: linear history, cleaner log', 'GitFlow: main, develop, feature, release, hotfix', 'Trunk-based: single main branch, short-lived feature branches'] },
      '03': { intro: 'Advanced Git operations — stash, cherry-pick, bisect, reflog — give you powerful tools for managing complex workflows. These skills are essential for debugging, code review, and maintaining clean version history.', prereqs: ['Git basics', 'Branching and merging'], mistakes: ['Not stashing before switching branches', 'Using cherry-pick on merge commits', 'Not using bisect for efficient debugging', 'Forgetting that reflog is local only', 'Not understanding that stash is stack-based'], revision: ['git stash: temporarily shelve changes', 'git cherry-pick: apply specific commit', 'git bisect: binary search for bug', 'git reflog: recovery tool for lost commits', 'git revert: undo commit by creating new commit'] },
      '04': { intro: 'Linux command line skills are essential for AI engineers who work with remote servers, GPU clusters, and deployment pipelines. Mastering file operations, permissions, and text processing saves hours of manual work.', prereqs: ['Terminal basics'], mistakes: ['Using rm -rf without caution', 'Not understanding file permissions', 'Not using quotes around filenames with spaces', 'Forgetting that Linux is case-sensitive', 'Not using find/locate for file search'], revision: ['ls -la: detailed listing', 'chmod 755: rwxr-xr-x', 'grep -rn: recursive search', 'find / -name "*.py": find files', '管道 (|) pipes output to next command', 'tee: write to file and stdout'] },
      '05': { intro: 'CLI productivity tools — aliases, tmux, history expansion, tab completion — dramatically speed up your workflow. AI engineers who master the command line can iterate faster on experiments and deployments.', prereqs: ['Linux basics', 'Shell fundamentals'], mistakes: ['Not setting up aliases for repetitive commands', 'Not using tmux for long-running processes', 'Not learning keyboard shortcuts', 'Forgetting to save .bashrc/.zshrc changes', 'Not using history search (Ctrl+R)'], revision: ['alias ll="ls -la": save keystrokes', 'tmux: persistent terminal sessions', 'Ctrl+R: reverse history search', '!!: repeat last command', '$?: check last command exit code'] },
      '06': { intro: 'DevOps automation — CI/CD, GitHub Actions, pre-commit hooks — ensures code quality and rapid deployment. AI engineers use these to automate model training, testing, and deployment pipelines.', prereqs: ['Git basics', 'Linux command line'], mistakes: ['Not using CI/CD for all projects', 'Hardcoding secrets in workflows', 'Not running tests before deployment', 'Forgetting to cache dependencies', 'Not using branch protection rules'], revision: ['CI: test on every push', 'CD: deploy automatically after tests pass', 'GitHub Actions: YAML-based workflows', 'Pre-commit hooks: lint before commit', 'Secrets: never commit, use CI/CD secrets'] }
    }
  }
};

// Generate placement section for any topic
function generatePlacementSection(moduleNum, chapterNum, topicName) {
  return `
## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of ${topicName}. When would you choose one approach over another?
2. Design a system that efficiently handles ${topicName} at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to ${topicName}. What was your approach and what was the result?
2. How would you explain ${topicName} to a non-technical stakeholder?

#### Microsoft Style
1. How does ${topicName} integrate with enterprise systems and cloud architectures?
2. What are the security implications of ${topicName}?

#### NVIDIA Style
1. How would you optimize ${topicName} for GPU-accelerated computing?
2. What parallel processing patterns apply to ${topicName}?

#### AI Startup Style
1. How would you implement ${topicName} in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using ${topicName}?

### Resume Tips
- **Technical Skills**: List ${topicName} under relevant technical skills
- **Project Description**: "Implemented ${topicName} to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include ${topicName} in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of ${topicName}
- [ ] Practice 3-5 problems related to ${topicName}
- [ ] Prepare 2 real-world examples of using ${topicName}
- [ ] Know the time/space complexity of common ${topicName} operations
- [ ] Have questions ready about how the company uses ${topicName}`;
}

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Extract module and chapter info from path
  const dirName = path.basename(path.dirname(filePath));
  const fileName = path.basename(filePath, '.md');
  const chapterNum = fileName.split('-')[0];
  
  // Determine module key
  let moduleKey = null;
  for (const key of Object.keys(MODULE_TOPICS)) {
    if (dirName.startsWith(key.split('-')[0])) {
      moduleKey = key;
      break;
    }
  }
  
  const topicInfo = MODULE_TOPICS[moduleKey]?.topics?.[chapterNum];
  const topicName = topicInfo?.intro ? dirName.replace(/^\d+-/, '').replace(/-/g, ' ') : dirName;
  
  let changes = [];
  
  // Add Introduction after Learning Objectives if missing
  if (!content.includes('## Introduction') && !content.includes('## Prerequisites')) {
    const loMatch = content.match(/## Learning Objectives[\s\S]*?(?=\n## )/);
    if (loMatch) {
      const insertPoint = content.indexOf(loMatch[0]) + loMatch[0].length;
      const introSection = `\n## Introduction\n\n${topicInfo?.intro || `${topicName} is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.`}\n\n## Prerequisites\n\n${topicInfo?.prereqs ? topicInfo.prereqs.map(p => `- ${p}`).join('\n') : '- Basic programming knowledge\n- Understanding of data structures'}`;
      content = content.slice(0, insertPoint) + introSection + content.slice(insertPoint);
      changes.push('Added Introduction + Prerequisites');
    }
  }
  
  // Add Common Mistakes if missing
  if (!content.includes('## Common Mistakes')) {
    const nextMarker = content.lastIndexOf('> **Next**');
    const exercisesMarker = content.lastIndexOf('## Exercises');
    const insertPoint = nextMarker > 0 ? nextMarker : (exercisesMarker > 0 ? exercisesMarker + content.slice(exercisesMarker).indexOf('\n\n') + 2 : content.length - 10);
    
    const mistakesSection = `\n## Common Mistakes\n\n${topicInfo?.mistakes ? topicInfo.mistakes.map((m, i) => `${i+1}. ${m}`).join('\n') : `1. Not understanding the fundamental concepts before applying them\n2. Skipping edge cases in implementation\n3. Not analyzing time/space complexity\n4. Forgetting to handle null/empty inputs\n5. Not practicing enough problems to build pattern recognition`}`;
    content = content.slice(0, insertPoint) + mistakesSection + content.slice(insertPoint);
    changes.push('Added Common Mistakes');
  }
  
  // Add Revision Notes if missing
  if (!content.includes('## Revision Notes')) {
    const nextMarker = content.lastIndexOf('> **Next**');
    const insertPoint = nextMarker > 0 ? nextMarker : content.length - 10;
    
    const revisionSection = `\n## Revision Notes\n\n${topicInfo?.revision ? topicInfo.revision.map(r => `- ${r}`).join('\n') : `- Key concept 1: Core principle of ${topicName}\n- Key concept 2: Common implementation pattern\n- Key concept 3: Time/space complexity to remember\n- Key concept 4: When to apply this technique\n- Key concept 5: Common interview pattern\n- Key concept 6: Edge cases to handle\n- Key concept 7: Related concepts for deeper understanding`}`;
    content = content.slice(0, insertPoint) + revisionSection + content.slice(insertPoint);
    changes.push('Added Revision Notes');
  }
  
  // Add Summary if missing
  if (!content.includes('## Summary')) {
    const nextMarker = content.lastIndexOf('> **Next**');
    const insertPoint = nextMarker > 0 ? nextMarker : content.length - 10;
    
    const summarySection = `\n## Summary\n\n${topicInfo?.intro ? topicInfo.intro.split('.').slice(0, 2).join('.') + '.' : `This chapter covered the essential concepts of ${topicName}, including theoretical foundations, practical implementations, and common patterns. Understanding these concepts is crucial for both technical interviews and real-world AI engineering applications.`} Master the core principles, practice common patterns, and always consider time/space complexity when implementing solutions.`;
    content = content.slice(0, insertPoint) + summarySection + content.slice(insertPoint);
    changes.push('Added Summary');
  }
  
  // Add Placement Section if missing
  if (!content.includes('## Placement Section')) {
    const nextMarker = content.lastIndexOf('> **Next**');
    const insertPoint = nextMarker > 0 ? nextMarker : content.length - 10;
    
    const placementSection = generatePlacementSection(moduleKey, chapterNum, topicName);
    content = content.slice(0, insertPoint) + placementSection + content.slice(insertPoint);
    changes.push('Added Placement Section');
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return null;
}

// Main execution
console.log('📚 Adding missing sections to all chapters...\n');

let totalFiles = 0;
let modifiedFiles = 0;

const modules = fs.readdirSync(BASE).filter(f => {
  const fullPath = path.join(BASE, f);
  return fs.statSync(fullPath).isDirectory() && /^\d{2}-/.test(f);
});

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  for (const chapter of chapters) {
    const filePath = path.join(modulePath, chapter);
    totalFiles++;
    
    const changes = processFile(filePath);
    if (changes) {
      modifiedFiles++;
      console.log(`✅ ${module}/${chapter}: ${changes.join(', ')}`);
    }
  }
}

console.log(`\n📊 Results: ${modifiedFiles}/${totalFiles} files modified`);
