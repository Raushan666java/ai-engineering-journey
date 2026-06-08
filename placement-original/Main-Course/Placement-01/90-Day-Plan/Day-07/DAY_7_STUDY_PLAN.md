# DAY 7: INHERITANCE & POLYMORPHISM - STUDY PLAN

## 🕘 9-Hour Recommended Schedule

---

### Morning Session (9:00 AM - 12:00 PM) — Concepts & Core Syntax

**Hour 1: Basic Inheritance**
- Review `InheritanceComplete.java` Sections: Basic Inheritance, field and method inheritance.
- Practice creating classes with `extends` and verify inherited members.
- Create a small example: `Person` -> `Employee` -> `Manager`.

**Hour 2: Constructors & super()**
- Study constructor chaining and `super()` usage in `InheritanceComplete.java`.
- Practice scenarios: parent without default constructor, copy constructor behavior.

**Hour 3: Access modifiers & IS-A/HAS-A**
- Read `InheritanceComplete.java` Access Modifiers section.
- Practice converting composition `HAS-A` to inheritance `IS-A` where applicable.

---

### Afternoon Session (2:00 PM - 5:00 PM) — Polymorphism & Practical Applications

**Hour 4: Overriding & dynamic dispatch**
- Review `PolymorphismComplete.java` for overriding and dynamic dispatch.
- Practice: Create base `Shape` class with multiple derived classes and use `Shape` references.

**Hour 5: Casting & instanceof**
- Practice safe downcasting using `instanceof`.
- Understand `ClassCastException` and write guard code.

**Hour 6: Design Patterns & Real World**
- Read `DesignFactoryPattern.java` & `PolymorphismComplete.java` design examples (Strategy, Template, Adapter).
- Implement a small Factory + Strategy example.

---

### Evening Session (7:00 PM - 10:00 PM) — LeetCode & Practice Problems

**Hour 7: LeetCode Practice - Trees**
- Solve `MaximumDepthBinaryTree.java` (Approach 1 preferred)
- Try iterative BFS & DFS variants for familiarity.

**Hour 8: LeetCode Practice - LCA & Validate BST**
- Solve `LowestCommonAncestor.java` — recursion and parent map approaches.
- Solve `ValidateBinarySearchTree.java` — recursive bounds & in-order approach.

**Hour 9: Practice Problems**
- Go through `Day7PracticeProblems.java` problems and re-implement 10 of them without looking at the solution.
- Focus on edge cases and safe casting.

---

## ✅ Nightly Revision
- 20-minute quick revision focusing on differences between `extends` and `implements`.
- Re-run failing LeetCode cases and debug.

## 📝 Goals for the Day
- Understand the differences between inheritance and composition.
- Know when to use inheritance and when to prefer composition.
- Implement polymorphic designs and use `@Override` correctly.
- Resolve common runtime issues (casting & ClassCastException).
- Be comfortable with abstract classes and interfaces.

---

## 💡 Tips
- Prefer composition over inheritance for flexibility unless there is a true IS-A relationship.
- For constructor chains, always inspect the base class constructors first.
- Use `@Override` to avoid mistakes while overriding.
- Use interfaces for type abstraction and polymorphism.
- Practice `instanceof` checks, but minimize downcasting in clean design.

---

**Great progress! Finish this with the practice problems and you’ll be interview-ready for OOP & Polymorphism topics.**
