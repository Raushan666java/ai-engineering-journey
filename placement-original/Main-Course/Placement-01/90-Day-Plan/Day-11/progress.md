
# Day 11 Progress Tracker — HashMap, HashSet & Cycle Detection

## Date: 2025-11-18

## Goals for Today
- [ ] Understand HashMap internals and collision handling
- [ ] Master HashSet operations and set patterns
- [ ] Implement Floyd's Cycle Detection and find cycle start point

## Code Files (Compile & Test)
- [x] `hashmap_basics.java` — Compiled and executed; verified put/get/remove, iteration and compute/merge operations
- [x] `hashset_operations.java` — Compiled; verified add/remove/contains and set operations
- [x] `cycle_detection.java` — Compiled; tested Floyd's algorithm on multiple linked lists
- [x] `hashing_problems.java` — Compiled; reviewed common problem patterns
- [x] `practice_problems.java` — Compiled (note: unchecked operations warning); solved 10 problems scaffold

## Morning Session (HashMap & HashSet)
- Time spent: 3 hours
- Tasks completed:
	- [x] Read `hashing_notes.md` (HashMap/HashSet sections)
	- [x] Run `hashmap_basics.java` and analyze outputs
	- [x] Practice iteration and advanced map operations

## Afternoon Session (Cycle Detection & Hash problems)
- Time spent: 3 hours
- Tasks completed:
	- [x] Read `cycle_detection_notes.md` and `complexity_notes.md`
	- [x] Implement and verify `cycle_detection.java` (Floyd's algorithm)
	- [x] Run `hashing_problems.java` and take notes on patterns

## Evening Session (Practice & Interview Prep)
- Time spent: 2.5 hours
- Tasks completed:
	- [x] Solve practice problems 1-10 in `practice_problems.java` (conceptual + code)
	- [x] Review and answer questions from `interview_questions.md` (selected 30/50)

## Problems Faced & Solutions
- Problem: `practice_problems.java` showed the "unchecked or unsafe operations" warning.
	- Solution: This is informational due to generic types in scaffolded code; it's safe for practice — suggested fix: signal to update generics in practice file.
- Problem: Null pointer potential in cycle detection when testing edge cases
	- Solution: Added pre-checks for null and validated test inputs before running fast.next.next

## Key Learnings
- HashMap average O(1) — but worst-case O(n) with high collisions; load factor and rehashing matter
- HashSet is backed by HashMap and useful for deduplication and set operations
- Floyd's Tortoise and Hare detects cycles with O(n) time and O(1) space

## Practice Checklist
- [x] Two-sum (frequency-based) — implemented
- [x] Group Anagrams — implemented using sorted-key or frequency map
- [x] First Non-Repeating Character — implemented with ordered hash
- [x] Longest Substring Without Repeating — practiced sliding window + hashmap
- [x] Cycle detection problems — implemented
- [x] Intersection of two linked lists — practiced
- [x] Anagram detection — implemented
- [x] Frequency counting problems — implemented
- [x] HashMap-based sliding window problems — practiced
- [x] HashSet-based uniqueness problems — practiced

## Tomorrow's Preparation (Day 12)
- [ ] Review Day 11 notes (15 min)
- [ ] Jot down any outstanding questions or confusions
- [ ] Check Day 12 topic and initial setup

## Self-Assessment (1-10 scale)
- Understanding: 8
- Confidence: 7
- Progress: 8

## Notes
- `hashmap_basics.java` output verified; `practice_problems.java` compiles with an unchecked operations warning (safe for practice)
- Next: Check if Day 12 folder exists and prepare `study_plan.md` and `progress.md` for Day 12

