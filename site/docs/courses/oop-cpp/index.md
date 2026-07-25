---
slug: /oop-cpp/index
title: "Object-Oriented Programming with C++"
sidebar_label: "Object-Oriented Programming with C++"
sidebar_position: 17
---
# Object-Oriented Programming with C++

## Course Overview

This textbook presents a comprehensive treatment of object-oriented programming (OOP) using the C++ programming language. The material is designed for undergraduate computer science students who possess a working knowledge of procedural programming in C or a similar language. The course progresses from fundamental language features through advanced idioms, equipping students with both theoretical understanding and practical implementation skills.

C++ occupies a unique position in the programming landscape: it offers zero-cost abstractions, direct memory control, and full compatibility with C, while simultaneously supporting modern object-oriented, generic, and functional programming paradigms. The language has undergone significant evolution through the C++11, C++14, and C++17 standards, each introducing features that fundamentally reshape how idiomatic C++ is written.

## Prerequisites

- Proficiency in procedural programming (variables, control flow, functions, arrays, pointers)
- Familiarity with basic data structures (linked lists, stacks, queues)
- Understanding of memory management concepts (stack vs heap allocation)

## Learning Outcomes

Upon completing this course, students will be able to:

1. Design and implement class hierarchies using encapsulation, inheritance, and polymorphism
2. Manage resource lifetimes through constructors, destructors, and the Rule of Five
3. Write type-safe generic code using templates and the Standard Template Library (STL)
4. Exploit move semantics and perfect forwarding for high-performance code
5. Avoid common pitfalls including memory leaks, dangling references, and undefined behaviour
6. Apply concurrency primitives for safe multi-threaded programs
7. Recognize and implement fundamental design patterns in idiomatic C++

## Chapter List

| # | Chapter | Topics |
|---|---------|--------|
| 1 | Introduction to C++ | C++ vs C, I/O streams, namespaces, default parameters, function overloading, references |
| 2 | Classes and Objects | class/struct, access specifiers, member functions, this pointer, const members, static members |
| 3 | Constructors and Destructors | Default, parameterized, copy constructors, initializer lists, delegating constructors, destructors |
| 4 | Inheritance | Base/derived classes, access control, inheritance types, diamond problem, virtual inheritance |
| 5 | Polymorphism | Virtual functions, vtable/vptr, pure virtual, abstract classes, virtual destructor, RTTI |
| 6 | Operator Overloading | Overloading rules, binary/unary operators, friend functions, stream operators, conversions |
| 7 | Templates | Function templates, class templates, specialization, variadic templates, SFINAE |
| 8 | Exception Handling | try/catch/throw, stack unwinding, RAII, noexcept, standard and custom exceptions |
| 9 | STL Containers | vector, list, deque, map, set, unordered_map, adaptors: stack, queue, priority_queue |
| 10 | STL Algorithms | sort, find, binary_search, accumulate, for_each, transform, copy, lambda integration |
| 11 | File I/O | fstream, ifstream, ofstream, text vs binary, positioning, serialization |
| 12 | Smart Pointers | unique_ptr, shared_ptr, weak_ptr, make_ functions, custom deleters, circular references |
| 13 | Move Semantics | Lvalues/rvalues, move constructor, move assignment, std::move, std::forward, perfect forwarding |
| 14 | Lambdas | Syntax, capture clauses, generic lambdas, IIFE, STL integration |
| 15 | Concurrency | std::thread, mutex, lock_guard, condition_variable, async, future, promise, atomics |
| 16 | Design Patterns | Singleton, Factory, Builder, Adapter, Decorator, Facade, Observer, Strategy, Iterator |

## How to Use This Textbook

Each chapter follows a consistent structure: learning objectives define the goals, theory sections present concepts with rationale and trade-offs, code examples illustrate correct usage, a summary consolidates key points, and graded exercises test comprehension at three levels of difficulty.

All code examples are written to the C++17 standard unless otherwise noted. Compilation instructions assume a modern compiler: GCC 8+, Clang 7+, or MSVC 2019+. Example compilation command:

```
g++ -std=c++17 -Wall -Wextra -o program source.cpp
```

## Recommended Reading

- B. Stroustrup, *The C++ Programming Language*, 4th Edition
- S. Meyers, *Effective Modern C++*
- N. Josuttis, *The C++ Standard Library*, 2nd Edition
- H. Sutter, *Exceptional C++*
