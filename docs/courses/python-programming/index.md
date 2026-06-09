# Python Programming — A Comprehensive University Textbook

## Course Description

This textbook provides a rigorous, systematic introduction to the Python programming language. It assumes no prior programming experience but progresses rapidly through foundational concepts, intermediate constructs, and advanced paradigms including object-oriented programming, functional techniques, and modern API development. All content targets Python 3.10 and later releases.

## Learning Outcomes

Upon completion, students will:

- Write idiomatic Python using correct syntax, control flow, and data structures
- Design and implement programs using functions, classes, modules, and packages
- Apply functional programming techniques including lambdas, decorators, and generators
- Handle errors, files, and serialization robustly
- Leverage the Python standard library for real-world tasks
- Build and test APIs and data pipelines using NumPy, pandas, FastAPI, and pytest

## How to Use This Textbook

Each chapter follows a consistent pedagogical structure: theoretical exposition with subsections, worked code examples with output, a chapter summary, and graduated exercises (review questions, application problems, and a challenge problem). Code blocks are complete and runnable. Readers should execute examples in a local Python environment and complete all exercises.

## Required Setup

```bash
python --version   # 3.10 or higher recommended
pip --version      # latest
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
```

## Chapter Listing

| #  | Chapter | Topics |
|----|---------|--------|
| 1  | Introduction | History, REPL, installation, indentation, comments, IDEs, virtual environments, pip |
| 2  | Variables & Types | Dynamic typing, int, float, str, bool, None, complex, type conversion, all operator categories |
| 3  | Control Flow | if/elif/else, match-case, chained comparisons, short-circuit evaluation, ternary expressions |
| 4  | Loops & Iteration | for, while, break, continue, else, enumerate, zip, reversed, sorted |
| 5  | Strings | Literals, indexing, slicing, methods, f-strings, format specifiers, raw strings, bytes vs str |
| 6  | Lists | Creation, indexing, slicing, methods, list comprehensions, nested lists, shallow vs deep copy |
| 7  | Tuples & Sets | Tuples, unpacking, namedtuple, sets, frozenset, set comprehensions, set operations |
| 8  | Dictionaries | Creation, operations, dict comprehensions, defaultdict, Counter, OrderedDict, merging, JSON |
| 9  | Functions | Parameters, scope (LEGB), docstrings, annotations, nested functions, closures |
| 10 | Lambda & Functional | Lambda, map, filter, reduce, partial, operator module, function composition |
| 11 | Modules & Packages | Import mechanisms, `__name__ == "__main__"`, packages, imports, pip, requirements.txt |
| 12 | Object-Oriented Programming | Classes, attributes, methods, classmethod, staticmethod, property, `__slots__`, dataclass |
| 13 | Inheritance & Protocols | super(), MRO, multiple inheritance, mixins, ABCs, structural subtyping |
| 14 | Magic Methods | `__str__`, `__repr__`, `__eq__`, `__hash__`, `__getitem__`, `__call__`, `__enter__`, `__iter__`, and more |
| 15 | Decorators | Function decorators, @wraps, decorator patterns, class decorators, decorator factories |
| 16 | Generators & Itertools | yield, generator expressions, send/throw/close, yield from, itertools |
| 17 | Exceptions & File I/O | try/except/else/finally, raise, custom exceptions, file modes, csv, json, pickle, pathlib |
| 18 | Standard Library Tour | os, sys, shutil, datetime, re, collections, itertools, functools, math, random, typing, argparse, logging |
| 19 | APIs & Testing | requests, httpx, FastAPI, Pydantic, unittest, pytest, fixtures, parametrize, mocking |
| 20 | NumPy & pandas | Arrays, broadcasting, linear algebra, Series, DataFrame, groupby, merge, matplotlib, seaborn |

## Recommended Weekly Schedule

| Week | Chapter | Topics |
|------|---------|--------|
| 1 | 1, 2 | Environment, fundamentals, types, operators |
| 2 | 3, 4 | Control flow, loops |
| 3 | 5, 6 | Strings, lists |
| 4 | 7, 8 | Tuples, sets, dictionaries |
| 5 | 9, 10 | Functions, lambda |
| 6 | 11 | Modules, packages |
| 7 | 12, 13 | OOP, inheritance |
| 8 | 14, 15 | Magic methods, decorators |
| 9 | 16 | Generators, itertools |
| 10 | 17 | Exceptions, file I/O |
| 11 | 18 | Standard library |
| 12 | 19 | APIs, testing |
| 13 | 20 | NumPy, pandas |
| 14 | Review | Capstone project |

## Grading Scheme

| Component | Weight |
|-----------|--------|
| Review Questions | 10% |
| Application Problems | 30% |
| Challenge Problems | 30% |
| Final Project | 30% |
