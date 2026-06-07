# Day 10 Study Plan: Streams and Lambda Expressions

## Overview
Day 10 focuses on **Functional Programming in Java** - mastering Lambda Expressions, Streams API, and Optional. These Java 8+ features are essential for modern Java development and commonly tested in interviews.

## Daily Schedule (9 hours total)

### Morning Session (3 hours) - Lambda Expressions & Functional Interfaces
**Time: 9:00 AM - 12:00 PM**

**Hour 1: Lambda Basics (9:00 - 10:00)**
- Read `lambda_notes.md` (Introduction, Syntax, Variable Capture)
- Study lambda syntax variations
- Run and analyze `lambda_basics.java`
- Practice: Write 5 lambda expressions for different scenarios

**Hour 2: Functional Interfaces (10:00 - 11:00)**
- Study built-in functional interfaces (Predicate, Function, Consumer, Supplier)
- Learn predicate and function composition
- Practice using each functional interface type
- Complete exercises on method references

**Hour 3: Method References (11:00 - 12:00)**
- Master all 4 types of method references
- Practice converting lambdas to method references
- Review `lambda_notes.md` best practices
- Quiz yourself on lambda concepts

### Afternoon Session (3 hours) - Streams API
**Time: 1:00 PM - 4:00 PM**

**Hour 1: Stream Creation & Basics (1:00 - 2:00)**
- Read `streams_notes.md` (Introduction, Creating Streams)
- Run and analyze `streams_basics.java`
- Practice creating streams from different sources
- Understand lazy evaluation with examples

**Hour 2: Stream Operations (2:00 - 3:00)**
- Study intermediate operations (filter, map, flatMap, sorted, distinct)
- Study terminal operations (collect, reduce, forEach, count)
- Run and analyze `stream_operations.java`
- Practice chaining stream operations

**Hour 3: Collectors API (3:00 - 4:00)**
- Study groupingBy, partitioningBy, joining
- Run and analyze `collectors_demo.java`
- Review `streams_cheatsheet.md`
- Practice complex grouping scenarios

### Evening Session (3 hours) - Practice & Integration
**Time: 5:00 PM - 8:00 PM**

**Hour 1: Practice Problems (5:00 - 6:00)**
- Solve problems 1-5 in `practice_problems.java`
- Focus on filter-map-collect patterns
- Practice groupBy and reduce operations

**Hour 2: Advanced Patterns (6:00 - 7:00)**
- Solve problems 6-10 in `practice_problems.java`
- Study `common_patterns.md`
- Practice multi-level grouping and complex transformations
- Review parallel streams

**Hour 3: Interview Preparation (7:00 - 8:00)**
- Review `interview_questions.md` (Questions 1-20)
- Practice explaining concepts verbally
- Write code for common interview patterns
- Review all code files and identify key takeaways

## Learning Objectives

### Lambda Expressions
✅ Understand lambda syntax and functional interfaces  
✅ Master method references (4 types)  
✅ Understand variable capture and effectively final  
✅ Be able to compose predicates and functions  

### Streams API
✅ Create streams from various sources  
✅ Differentiate intermediate and terminal operations  
✅ Understand lazy evaluation  
✅ Master filter, map, flatMap, reduce operations  
✅ Use Collectors API for grouping and aggregation  

### Optional
✅ Understand purpose and benefits of Optional  
✅ Use Optional for safe value retrieval  
✅ Chain Optional operations with map/flatMap  
✅ Know best practices and anti-patterns  

### Practical Skills
✅ Write clean, functional-style Java code  
✅ Solve data transformation problems using streams  
✅ Optimize code with parallel streams when appropriate  
✅ Apply patterns to real-world scenarios  

## Resources Required

### Code Files (Run and analyze)
- `lambda_basics.java` - Lambda expressions and functional interfaces
- `streams_basics.java` - Stream creation and operations
- `stream_operations.java` - Deep dive into stream operations
- `collectors_demo.java` - Collectors API demonstrations
- `practice_problems.java` - 10 comprehensive problems

### Notes (Read thoroughly)
- `lambda_notes.md` - Complete lambda expressions guide
- `streams_notes.md` - Complete Streams API guide
- `optional_notes.md` - Complete Optional guide

### Resources (Quick reference)
- `streams_cheatsheet.md` - Quick reference for all stream operations
- `common_patterns.md` - 15 common stream patterns
- `interview_questions.md` - 40 interview questions with answers

## Expected Outcomes

By the end of Day 10, you should be able to:

### Knowledge
- Explain what functional programming is and its benefits
- Describe how lambda expressions work internally
- Explain lazy evaluation in streams
- Differentiate between intermediate and terminal operations
- Understand when to use parallel streams

### Skills
- Write lambda expressions for any functional interface
- Convert between lambdas and method references
- Create and manipulate streams fluently
- Use Collectors API for complex grouping and aggregation
- Handle Optional values safely
- Solve data transformation problems using functional approach

### Code Proficiency
- Implement filter-map-collect patterns
- Use groupBy and partitionBy effectively
- Apply reduce for aggregations
- Chain stream operations efficiently
- Write clean, functional-style Java code

### Interview Readiness
- Answer 40 common interview questions about streams and lambdas
- Explain concepts clearly and concisely
- Write stream-based solutions on whiteboard
- Identify when to use functional vs imperative approach

## Practice Checklist

### Morning
- [ ] Run `lambda_basics.java` and understand all outputs
- [ ] Write 5 custom lambda expressions
- [ ] Practice all 4 types of method references
- [ ] Implement custom functional interface

### Afternoon
- [ ] Run `streams_basics.java` and trace lazy evaluation
- [ ] Run `stream_operations.java` and analyze each pattern
- [ ] Run `collectors_demo.java` and understand grouping
- [ ] Create streams from 5 different sources

### Evening
- [ ] Solve all 10 practice problems
- [ ] Implement at least 5 patterns from `common_patterns.md`
- [ ] Answer 20 interview questions without looking at answers
- [ ] Write 3 real-world use cases using streams

## Time Management Tips

- **Pomodoro Technique**: 25 min focus + 5 min break
- **Break Schedule**:
  - 10:00 AM - 5 min break
  - 11:00 AM - 5 min break
  - 12:00 PM - 1 hour lunch break
  - 2:00 PM - 5 min break
  - 3:00 PM - 5 min break
  - 4:00 PM - 15 min break
  - 6:00 PM - 10 min break
  - 7:00 PM - 5 min break

## Self-Assessment Questions

Ask yourself at the end of the day:
1. Can I explain what a lambda expression is and when to use it?
2. Can I write a stream pipeline to solve a data transformation problem?
3. Do I understand the difference between map and flatMap?
4. Can I use groupingBy to create multi-level groupings?
5. Do I know when to use Optional and how to chain operations?
6. Can I identify and apply common stream patterns?
7. Am I comfortable with method references?
8. Can I explain lazy evaluation in my own words?

If you answer "No" to any question, revisit that topic before ending the day.

## Notes
- **Focus Areas**: Understanding lazy evaluation is crucial - trace through code step by step
- **Common Mistakes**: Don't reuse streams, avoid side effects in lambdas
- **Performance**: Remember parallel streams aren't always faster - test with real data
- **Interview Tip**: Be able to convert imperative loops to functional streams
- Remember to take regular breaks
- Stay hydrated and maintain good posture
- Review Day 9 Collections for 15 minutes - streams work with collections!
