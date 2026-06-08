# DSA PROBLEM TRACKER

<span class="ascii-rule"></span>

> Track your solved problems. Check karo, save hota hai, kabhi nahi bhulega.

<div id="dsa-stats-bar" class="dsa-header">
  <span class="dsa-total">Solved: <strong id="dsa-solved">0</strong> / <strong id="dsa-total">0</strong></span>
  <div class="progress-bar" style="flex:1;max-width:300px"><div class="progress-bar-fill" id="dsa-bar" style="width:0%"></div></div>
  <button class="btn btn-small" id="dsa-reset">RESET ALL</button>
</div>

## Arrays

- [ ] Two Sum
- [ ] Best Time to Buy and Sell Stock
- [ ] Product of Array Except Self
- [ ] Maximum Subarray (Kadane's)
- [ ] Contains Duplicate
- [ ] Find Minimum in Rotated Sorted Array
- [ ] Search in Rotated Sorted Array
- [ ] 3Sum
- [ ] Container With Most Water
- [ ] Remove Duplicates from Sorted Array
- [ ] Trapping Rain Water
- [ ] Move Zeroes
- [ ] Rotate Array
- [ ] Next Permutation
- [ ] Maximum Product Subarray
- [ ] First Missing Positive
- [ ] Longest Consecutive Sequence
- [ ] Subarray Sum Equals K
- [ ] Merge Intervals
- [ ] Majority Element

## Strings

- [ ] Valid Anagram
- [ ] Longest Substring Without Repeating Characters
- [ ] Longest Palindromic Substring
- [ ] Group Anagrams
- [ ] Palindrome Check
- [ ] Minimum Window Substring
- [ ] String to Integer (atoi)
- [ ] Implement strStr()
- [ ] Reverse Words in a String
- [ ] Count and Say
- [ ] Zigzag Conversion
- [ ] Longest Common Prefix
- [ ] Simplify Path
- [ ] Decode String
- [ ] Repeated DNA Sequences

## Linked Lists

- [ ] Reverse a Linked List
- [ ] Detect Cycle in Linked List
- [ ] Merge Two Sorted Lists
- [ ] Remove Nth Node From End
- [ ] Find Middle of Linked List
- [ ] Add Two Numbers
- [ ] Intersection of Two Linked Lists
- [ ] Palindrome Linked List
- [ ] Copy List with Random Pointer
- [ ] LRU Cache
- [ ] Sort List
- [ ] Flatten a Multilevel Doubly Linked List

## Trees

- [ ] Binary Tree Inorder Traversal
- [ ] Maximum Depth of Binary Tree
- [ ] Same Tree
- [ ] Invert Binary Tree
- [ ] Diameter of Binary Tree
- [ ] Balanced Binary Tree
- [ ] Lowest Common Ancestor of BST
- [ ] Binary Tree Level Order Traversal
- [ ] Validate Binary Search Tree
- [ ] Kth Smallest Element in BST
- [ ] Construct Binary Tree from Pre/Inorder
- [ ] Serialize and Deserialize Binary Tree
- [ ] Binary Tree Zigzag Level Order
- [ ] Path Sum III
- [ ] Convert Sorted Array to BST

## Graphs

- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Course Schedule (Topological Sort)
- [ ] Pacific Atlantic Water Flow
- [ ] Graph Valid Tree
- [ ] Word Ladder
- [ ] Rotting Oranges
- [ ] Flood Fill
- [ ] Alien Dictionary
- [ ] Surrounded Regions
- [ ] Longest Increasing Path in Matrix
- [ ] Minimum Height Trees

## Dynamic Programming

- [ ] Climbing Stairs
- [ ] Coin Change
- [ ] Longest Increasing Subsequence
- [ ] Longest Common Subsequence
- [ ] Edit Distance
- [ ] House Robber
- [ ] House Robber II
- [ ] Partition Equal Subset Sum
- [ ] Word Break
- [ ] Maximum Product Subarray
- [ ] Unique Paths
- [ ] Decode Ways
- [ ] Knapsack (0/1)
- [ ] Rod Cutting
- [ ] Egg Dropping Problem

## Stacks & Queues

- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Implement Queue using Stacks
- [ ] Daily Temperatures
- [ ] Evaluate Reverse Polish Notation
- [ ] Sort a Stack
- [ ] Next Greater Element
- [ ] Sliding Window Maximum

## Heaps & Priority Queue

- [ ] Kth Largest Element in Array
- [ ] Top K Frequent Elements
- [ ] Merge K Sorted Lists
- [ ] Median from Data Stream
- [ ] Find K Pairs with Smallest Sums
- [ ] Task Scheduler

## Searching & Sorting

- [ ] Binary Search
- [ ] First and Last Position in Array
- [ ] Find Peak Element
- [ ] Search a 2D Matrix
- [ ] Quickselect / Kth Largest
- [ ] Sort Colors (Dutch Flag)
- [ ] Find All Duplicates in Array
- [ ] Missing Number (XOR)

## Recursion & Backtracking

- [ ] N-Queens
- [ ] Sudoku Solver
- [ ] Permutations
- [ ] Subsets
- [ ] Combination Sum
- [ ] Palindrome Partitioning
- [ ] Generate Parentheses
- [ ] Letter Combinations of a Phone Number
- [ ] Word Search

## Bit Manipulation

- [ ] Single Number
- [ ] Number of 1 Bits
- [ ] Counting Bits
- [ ] Reverse Bits
- [ ] Power of Two
- [ ] Sum of Two Integers

## Design & OOP

- [ ] Design Twitter / Feed System
- [ ] Design HashMap
- [ ] Serialize and Deserialize BST
- [ ] Range Sum Query (Segment Tree)
- [ ] Trie (Prefix Tree)
- [ ] Autocomplete System

<style>
#dsa-stats-bar {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 20px;
  background: var(--bg-surface); border: 2px solid var(--ink);
  box-shadow: var(--shadow-hard);
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.dsa-total {
  font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
  white-space: nowrap;
}
#dsa-reset {
  font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
  background: none; border: 1px solid var(--rule-soft); color: var(--ink-mute);
  cursor: pointer; padding: 4px 12px; margin-left: auto;
}
#dsa-reset:hover { border-color: var(--ink); color: var(--ink); }
.btn-small { padding: 4px 12px; font-size: 0.65rem; }
</style>

<script>
(function() {
  'use strict';
  var KEY = 'aej:dsa:v1';
  var data = JSON.parse(localStorage.getItem(KEY)) || {};

  function save() { localStorage.setItem(KEY, JSON.stringify(data)); }

  function updateStats() {
    var cbs = document.querySelectorAll('.task-list-item input[type="checkbox"]');
    var total = cbs.length;
    var done = 0;
    for (var i = 0; i < total; i++) { if (cbs[i].checked) done++; }
    document.getElementById('dsa-solved').textContent = done;
    document.getElementById('dsa-total').textContent = total;
    var pct = total > 0 ? Math.round(done / total * 100) : 0;
    document.getElementById('dsa-bar').style.width = pct + '%';
  }

  document.addEventListener('DOMContentLoaded', function() {
    var cbs = document.querySelectorAll('.task-list-item input[type="checkbox"]');
    for (var i = 0; i < cbs.length; i++) {
      var cb = cbs[i];
      var label = cb.parentElement.textContent.trim();
      if (data[label]) cb.checked = true;
      cb.addEventListener('change', function() {
        var lbl = this.parentElement.textContent.trim();
        if (this.checked) data[lbl] = true;
        else delete data[lbl];
        save();
        updateStats();
      });
    }
    updateStats();

    document.getElementById('dsa-reset').addEventListener('click', function() {
      if (confirm('Reset all DSA progress?')) {
        data = {};
        save();
        var cbs = document.querySelectorAll('.task-list-item input[type="checkbox"]');
        for (var i = 0; i < cbs.length; i++) cbs[i].checked = false;
        updateStats();
      }
    });
  });
})();
</script>
