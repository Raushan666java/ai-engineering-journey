# 15. JavaScript Design Patterns

## What are Design Patterns?
- Design patterns are proven solutions to common software design problems.
- They provide templates for writing maintainable, scalable, and reusable code.

## Why Use Design Patterns?
- Improve code organization and readability.
- Promote best practices and code reuse.
- Make code easier to test and maintain.

## Common JavaScript Design Patterns

### 1. Singleton Pattern
- Ensures a class has only one instance and provides a global point of access.
```js
const Singleton = (function() {
  let instance;
  function createInstance() {
    return { value: 'I am the instance' };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // true
```

### 2. Module Pattern
- Encapsulates private data and exposes public methods.
```js
const Counter = (function() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
})();
Counter.increment();
console.log(Counter.getCount());
```

### 3. Factory Pattern
- Creates objects without specifying the exact class.
```js
function Car(type) {
  this.type = type;
}
function carFactory(type) {
  return new Car(type);
}
const sedan = carFactory('Sedan');
```

### 4. Observer Pattern
- Allows objects to subscribe to and receive updates from another object.
```js
class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const subject = new Subject();
subject.subscribe(data => console.log('Received:', data));
subject.notify('Hello!');
```

### 5. Prototype Pattern
- Uses prototypes to share properties and methods among objects.
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
const dog = new Animal('Dog');
dog.speak();
```

### 6. Command Pattern
- Encapsulates a request as an object, allowing for parameterization and queuing.
```js
function Command(execute) {
  this.execute = execute;
}
const sayHello = new Command(() => console.log('Hello!'));
sayHello.execute();
```

## Best Practices for Using Design Patterns
- Use patterns when they solve real problems, not just for the sake of it.
- Keep implementations simple and readable.
- Combine patterns as needed for complex scenarios.

## Best Learning Methods for Design Patterns
- **Practice:** Implement each pattern in small projects.
- **Compare:** Study how patterns are used in open-source code.
- **Mini-Projects:** Refactor code to use appropriate patterns.
- **Teach Back:** Explain patterns and their use-cases to others.

---

Type "next" to get detailed notes for the next topic: JavaScript Interview Questions and Answers.
