# 17. Object-Oriented Programming (OOP) and Advanced Concepts in JavaScript

## Object-Oriented Programming (OOP) in JavaScript

### What is OOP?
- OOP is a programming paradigm based on the concept of objects, which contain data (properties) and code (methods).
- Promotes code reuse, modularity, and organization.

### Key OOP Principles
- **Encapsulation:** Bundling data and methods that operate on that data within objects.
- **Abstraction:** Hiding complex implementation details and showing only the necessary features.
- **Inheritance:** Objects can inherit properties and methods from other objects (prototypes/classes).
- **Polymorphism:** Objects can take on many forms (e.g., method overriding).

### Classes and Objects
- ES6 introduced the `class` syntax for creating objects and handling inheritance.
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

### Encapsulation with Private Fields
- Use `#` for private fields (ES2022+):
```js
class Counter {
  #count = 0;
  increment() { this.#count++; }
  get value() { return this.#count; }
}
```

### Static Methods and Properties
- Belong to the class, not instances.
```js
class MathUtil {
  static add(a, b) { return a + b; }
}
console.log(MathUtil.add(2, 3));
```

### Getters and Setters
- Control access to object properties.
```js
class Person {
  constructor(name) { this._name = name; }
  get name() { return this._name; }
  set name(newName) { this._name = newName; }
}
```

### Inheritance and `super`
- Use `extends` and `super()` to inherit and call parent methods.

### Polymorphism
- Override methods in subclasses to provide specific behavior.

## Advanced JavaScript Concepts

### Closures
- Functions that remember their lexical scope even after the outer function has finished.

### Higher-Order Functions
- Functions that take other functions as arguments or return them.

### Currying
- Transforming a function with multiple arguments into a sequence of functions each taking a single argument.

### Memoization
- Caching the results of expensive function calls for performance.

### Event Loop and Concurrency
- JavaScript is single-threaded but uses the event loop for asynchronous operations.
- Concepts: call stack, callback queue, microtasks, macrotasks.

### Prototypes and Prototype Chain
- Every object has a prototype; inheritance is achieved via the prototype chain.

### Module Systems
- ES6 modules (`import`/`export`), CommonJS (`require`/`module.exports`)

### Generators and Iterators
- Generators: Functions that can be paused and resumed (`function*` and `yield`).
- Iterators: Objects that define a sequence and potentially a return value.

### Symbols
- Unique and immutable primitive values, often used as object property keys.

### WeakMap and WeakSet
- Collections that allow for garbage-collected keys (objects only).

## Best Learning Methods for OOP and Advanced Concepts
- **Practice:** Build projects using classes, inheritance, and advanced patterns.
- **Mini-Projects:** Implement custom data structures, event emitters, or module loaders.
- **Visualization:** Draw class hierarchies and prototype chains.
- **Debugging:** Use browser dev tools to inspect objects and prototypes.
- **Teach Back:** Explain OOP and advanced concepts to others.

---

Type "next" to get detailed notes for the next advanced JavaScript topic or specify a particular concept you want to learn more about.
