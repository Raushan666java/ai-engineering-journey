# Objects and Arrays in JavaScript

## Objects

### What is an Object?
- An object is a collection of key-value pairs (properties and methods).
- Keys are strings (or Symbols), values can be any data type.

### Creating Objects
- Object literal:
```js
const person = {
  name: 'Alice',
  age: 25,
  greet: function() {
    console.log('Hello!');
  }
};
```
- Using `new Object()`:
```js
const obj = new Object();
obj.key = 'value';
```

### Accessing and Modifying Properties
- Dot notation: `person.name`
- Bracket notation: `person['age']`
- Add: `person.city = 'Delhi'`
- Delete: `delete person.age`

### Methods
- Functions inside objects are called methods.
- `this` refers to the object itself inside a method.

### Prototypes and Inheritance
- Every object has a prototype (accessed via `__proto__` or `Object.getPrototypeOf`).
- Inheritance allows objects to share properties/methods.
- Example:
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

### Object Methods
- `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`
- `Object.assign(target, source)`
- `Object.create(proto)`

### Destructuring Objects
```js
const { name, age } = person;
```

## Arrays

### What is an Array?
- An array is an ordered list of values (elements), indexed from 0.
- Can hold any data type, including objects and other arrays.

### Creating Arrays
- Array literal:
```js
const numbers = [1, 2, 3, 4];
```
- Using `new Array()`:
```js
const arr = new Array(5); // [empty × 5]
```

### Accessing and Modifying Elements
- Access: `numbers[0]`
- Modify: `numbers[1] = 10`
- Add: `numbers.push(5)`
- Remove: `numbers.pop()`

### Array Methods
- Adding/removing: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`
- Iteration: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`
- Searching: `indexOf`, `includes`, `findIndex`
- Sorting: `sort`, `reverse`
- Joining: `join`, `concat`

### Destructuring Arrays
```js
const [first, second] = numbers;
```

### Spread and Rest Operators
- Spread: `const arr2 = [...numbers, 5]`
- Rest: `function sum(...args) {}`