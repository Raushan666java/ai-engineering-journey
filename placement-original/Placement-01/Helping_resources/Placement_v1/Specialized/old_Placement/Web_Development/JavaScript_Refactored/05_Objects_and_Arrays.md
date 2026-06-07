# Objects and Arrays in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Create and manipulate JavaScript objects and arrays
- Understand object methods and prototypes
- Use array methods for data transformation
- Apply destructuring and spread/rest operators
- Implement basic inheritance patterns

## Objects

Objects are collections of key-value pairs that store data and functionality together.

### What is an Object?

In JavaScript, objects are the fundamental data structure used to store collections of data and more complex entities. Unlike arrays which use numeric indices, objects use keys (strings or symbols) to access values.

### Creating Objects

There are several ways to create objects in JavaScript:

#### 1. Object Literals

The most common way to create objects is using object literals:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  isEmployed: true,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    street: "123 Main St",
    city: "Boston",
    zipCode: "02101"
  }
};
```

#### 2. Using the Object Constructor

```javascript
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
```

#### 3. Using Object.create()

```javascript
const personPrototype = {
  greet: function() {
    return `Hello, my name is ${this.firstName}`;
  }
};

const employee = Object.create(personPrototype);
employee.firstName = "Jane";
employee.jobTitle = "Developer";

console.log(employee.greet()); // "Hello, my name is Jane"
```

#### 4. Constructor Functions

```javascript
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

const john = new Person("John", "Doe", 30);
console.log(john.getFullName()); // "John Doe"
```

#### 5. ES6 Classes (Syntactic Sugar)

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const jane = new Person("Jane", "Smith", 28);
console.log(jane.getFullName()); // "Jane Smith"
```

### Accessing and Modifying Properties

There are two main ways to access object properties:

#### 1. Dot Notation

```javascript
const person = {
  name: "John",
  age: 30
};

console.log(person.name); // "John"
person.age = 31;
console.log(person.age); // 31
```

#### 2. Bracket Notation

```javascript
console.log(person["name"]); // "John"
person["age"] = 32;
console.log(person["age"]); // 32

// Bracket notation is useful when property names are dynamic
const propertyName = "name";
console.log(person[propertyName]); // "John"
```

#### Adding New Properties

```javascript
person.email = "john@example.com";
person["isEmployed"] = true;
```

#### Deleting Properties

```javascript
delete person.age;
console.log(person.age); // undefined
```

#### Checking if a Property Exists

```javascript
// Using the in operator
console.log("name" in person); // true
console.log("age" in person); // false (after deletion)

// Using hasOwnProperty (only checks own properties, not inherited)
console.log(person.hasOwnProperty("name")); // true

// Using undefined check (less reliable)
console.log(person.name !== undefined); // true
```

### Methods

Methods are functions that are stored as object properties.

```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  
  // ES6 shorthand method syntax
  subtract(a, b) {
    return a - b;
  },
  
  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
```

### The `this` Keyword

In object methods, `this` refers to the object the method belongs to:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName()); // "John Doe"
```

However, the value of `this` can change depending on how a function is called:

```javascript
const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // "Hello, my name is John"

const greetFunction = person.greet;
greetFunction(); // "Hello, my name is undefined" (this is now the global object)

// Solutions:
// 1. Using bind
const boundGreet = person.greet.bind(person);
boundGreet(); // "Hello, my name is John"

// 2. Using arrow functions (which don't have their own this)
const person2 = {
  name: "Jane",
  hobbies: ["reading", "swimming"],
  showHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};

person2.showHobbies();
// "Jane likes reading"
// "Jane likes swimming"
```

### Prototypes and Inheritance

JavaScript uses prototype-based inheritance. Every object has a prototype (accessible via `__proto__` or `Object.getPrototypeOf`).

#### Prototype Chain

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the speak method
Dog.prototype.speak = function() {
  return `${this.name} barks!`;
};

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // "Rex barks!"
```

#### ES6 Class Inheritance (Syntactic Sugar)

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks!`;
  }
}

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // "Rex barks!"
```

### Object Methods

JavaScript provides several built-in methods for working with objects:

#### Object.keys(), Object.values(), Object.entries()

```javascript
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

console.log(Object.keys(person));   // ["name", "age", "job"]
console.log(Object.values(person)); // ["John", 30, "Developer"]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["job", "Developer"]]

// Iterating using entries
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

#### Object.assign()

Copies properties from one or more source objects to a target object:

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);
console.log(target); // { a: 1, b: 3, c: 4 }
console.log(result === target); // true

// Creating a new object without modifying the originals
const newObj = Object.assign({}, target, source);
```

#### Object.freeze() and Object.seal()

```javascript
// Object.freeze() - prevents adding, removing, or changing properties
const frozen = Object.freeze({ name: "John" });
frozen.age = 30; // Silently fails in non-strict mode
console.log(frozen); // { name: "John" }

// Object.seal() - prevents adding or removing properties, but allows changing existing ones
const sealed = Object.seal({ name: "Jane" });
sealed.name = "Jane Smith"; // Works
sealed.age = 28; // Silently fails
console.log(sealed); // { name: "Jane Smith" }
```

### Destructuring Objects

Destructuring allows you to extract values from objects into distinct variables:

```javascript
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Basic destructuring
const { name, age } = person;
console.log(name, age); // "John" 30

// Destructuring with new variable names
const { name: fullName, age: years } = person;
console.log(fullName, years); // "John" 30

// Destructuring nested objects
const { address: { city, country } } = person;
console.log(city, country); // "New York" "USA"

// Default values
const { name, job = "Unknown" } = person;
console.log(job); // "Unknown"

// Rest operator in object destructuring
const { name, ...rest } = person;
console.log(rest); // { age: 30, address: { city: "New York", country: "USA" } }
```

### Spread Operator with Objects

The spread operator (`...`) allows you to create shallow copies of objects or merge objects:

```javascript
// Copying an object
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // { a: 1, b: 2 }

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

// Adding properties while copying
const enhanced = { ...original, c: 3, d: 4 };
console.log(enhanced); // { a: 1, b: 2, c: 3, d: 4 }
```

## Arrays

Arrays are ordered collections of values that can be of any type.

### What is an Array?

An array is a special type of object used to store multiple values in a single variable. Arrays use numeric indices starting from 0.

### Creating Arrays

There are several ways to create arrays:

#### 1. Array Literals

```javascript
const fruits = ["Apple", "Banana", "Orange"];
const mixed = [1, "Hello", true, { name: "John" }, [1, 2, 3]];
```

#### 2. Using the Array Constructor

```javascript
const numbers = new Array(1, 2, 3, 4, 5);
const emptyArray = new Array(5); // Creates an array with 5 empty slots
```

#### 3. Array.from() and Array.of()

```javascript
// Array.from() - creates arrays from array-like or iterable objects
const arrayFromString = Array.from("hello");
console.log(arrayFromString); // ["h", "e", "l", "l", "o"]

// With a mapping function
const mapped = Array.from([1, 2, 3], x => x * 2);
console.log(mapped); // [2, 4, 6]

// Array.of() - creates an array from its arguments
const numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

### Accessing and Modifying Elements

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements
console.log(fruits[0]); // "Apple"
console.log(fruits[fruits.length - 1]); // "Mango"

// Modifying elements
fruits[1] = "Pear";
console.log(fruits); // ["Apple", "Pear", "Orange", "Mango"]

// Adding elements
fruits[4] = "Strawberry";
console.log(fruits); // ["Apple", "Pear", "Orange", "Mango", "Strawberry"]

// Arrays can have "holes"
fruits[10] = "Kiwi";
console.log(fruits); // ["Apple", "Pear", "Orange", "Mango", "Strawberry", empty × 5, "Kiwi"]
console.log(fruits.length); // 11
```

### Array Methods

JavaScript arrays have many built-in methods for common operations:

#### Adding and Removing Elements

```javascript
const fruits = ["Apple", "Banana", "Orange"];

// push() - adds elements to the end
fruits.push("Mango", "Pineapple");
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango", "Pineapple"]

// pop() - removes the last element
const lastFruit = fruits.pop();
console.log(lastFruit); // "Pineapple"
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// unshift() - adds elements to the beginning
fruits.unshift("Strawberry", "Kiwi");
console.log(fruits); // ["Strawberry", "Kiwi", "Apple", "Banana", "Orange", "Mango"]

// shift() - removes the first element
const firstFruit = fruits.shift();
console.log(firstFruit); // "Strawberry"
console.log(fruits); // ["Kiwi", "Apple", "Banana", "Orange", "Mango"]

// splice() - adds/removes elements from any position
// splice(start, deleteCount, ...itemsToAdd)
fruits.splice(2, 1, "Peach", "Plum"); // Remove 1 element at index 2, add 2 new elements
console.log(fruits); // ["Kiwi", "Apple", "Peach", "Plum", "Orange", "Mango"]

// slice() - returns a new array from a portion of an existing array
const citrus = fruits.slice(3, 5); // From index 3 up to (but not including) index 5
console.log(citrus); // ["Plum", "Orange"]
console.log(fruits); // Original array is unchanged
```

#### Searching and Finding Elements

```javascript
const numbers = [10, 20, 30, 40, 50, 30];

// indexOf() - returns the first index of an element, or -1 if not found
console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(60)); // -1

// lastIndexOf() - returns the last index of an element, or -1 if not found
console.log(numbers.lastIndexOf(30)); // 5

// includes() - checks if an array includes an element
console.log(numbers.includes(40)); // true
console.log(numbers.includes(60)); // false

// find() - returns the first element that satisfies a condition
const found = numbers.find(num => num > 25);
console.log(found); // 30

// findIndex() - returns the index of the first element that satisfies a condition
const foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); // 2

// some() - checks if at least one element satisfies a condition
const hasLargeNumber = numbers.some(num => num > 45);
console.log(hasLargeNumber); // true

// every() - checks if all elements satisfy a condition
const allLargeNumbers = numbers.every(num => num > 5);
console.log(allLargeNumbers); // true
```

#### Transforming Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - creates a new array by transforming each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce() - reduces an array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// reduceRight() - like reduce, but works from right to left
const result = ["a", "b", "c"].reduceRight((acc, char) => acc + char, "");
console.log(result); // "cba"

// flat() - creates a new array with all sub-array elements concatenated
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap() - map followed by flat with depth 1
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words); // ["Hello", "world", "How", "are", "you"]
```

#### Sorting and Reversing

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// sort() - sorts the elements of an array
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// reverse() - reverses the order of the elements
fruits.reverse();
console.log(fruits); // ["Orange", "Mango", "Banana", "Apple"]

// Custom sort with compare function
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 5, 10, 25, 40, 100]

// Sorting objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people); // Sorted by age ascending
```

#### Other Useful Methods

```javascript
// join() - joins all elements into a string
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join(", ")); // "Apple, Banana, Orange"

// concat() - merges two or more arrays
const morefruits = ["Mango", "Kiwi"];
const allFruits = fruits.concat(morefruits);
console.log(allFruits); // ["Apple", "Banana", "Orange", "Mango", "Kiwi"]

// fill() - fills elements with a static value
const filled = new Array(3).fill("X");
console.log(filled); // ["X", "X", "X"]

// Array.isArray() - checks if a value is an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false
```

### Destructuring Arrays

Destructuring allows you to extract values from arrays into distinct variables:

```javascript
const rgb = [255, 200, 0];

// Basic destructuring
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 200 0

// Skipping elements
const [first, , third] = rgb;
console.log(first, third); // 255 0

// Default values
const [x, y, z, a = 1] = rgb;
console.log(a); // 1

// Rest operator in array destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### Spread Operator with Arrays

The spread operator (`...`) allows you to expand an array into individual elements:

```javascript
// Copying an array
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

// Merging arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Using spread with functions
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Creating arrays with additional elements
const enhanced = [0, ...original, 4, 5];
console.log(enhanced); // [0, 1, 2, 3, 4, 5]
```

## Practical Applications

### Building a Contact Management System with Objects

```javascript
// Contact management system
const contactManager = {
  contacts: [],
  
  addContact(name, email, phone) {
    const id = Date.now().toString();
    const newContact = { id, name, email, phone };
    this.contacts.push(newContact);
    return id;
  },
  
  findContactById(id) {
    return this.contacts.find(contact => contact.id === id);
  },
  
  updateContact(id, updatedInfo) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = { ...this.contacts[index], ...updatedInfo };
      return true;
    }
    return false;
  },
  
  deleteContact(id) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  },
  
  searchContacts(query) {
    query = query.toLowerCase();
    return this.contacts.filter(contact => 
      contact.name.toLowerCase().includes(query) || 
      contact.email.toLowerCase().includes(query)
    );
  },
  
  getAllContacts() {
    return [...this.contacts];
  }
};

// Usage
contactManager.addContact("John Doe", "john@example.com", "555-1234");
contactManager.addContact("Jane Smith", "jane@example.com", "555-5678");
console.log(contactManager.getAllContacts());

const searchResults = contactManager.searchContacts("john");
console.log(searchResults);

contactManager.updateContact(searchResults[0].id, { phone: "555-4321" });
console.log(contactManager.getAllContacts());
```

### Transforming and Filtering Data with Array Methods

```javascript
// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true },
  { id: 3, name: "Coffee Maker", price: 79.99, category: "Kitchen", inStock: false },
  { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", inStock: true },
  { id: 5, name: "Headphones", price: 199.99, category: "Electronics", inStock: true },
  { id: 6, name: "Blender", price: 49.99, category: "Kitchen", inStock: true }
];

// Filter products by category
function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

const electronics = filterByCategory(products, "Electronics");
console.log(electronics);

// Calculate total price of all products
function calculateTotal(products) {
  return products.reduce((total, product) => total + product.price, 0).toFixed(2);
}

console.log(`Total value: $${calculateTotal(products)}`);

// Find the most expensive product
function findMostExpensive(products) {
  return products.reduce((max, product) => 
    product.price > max.price ? product : max, products[0]);
}

console.log("Most expensive product:", findMostExpensive(products));

// Create formatted product descriptions
function createProductDescriptions(products) {
  return products.map(product => 
    `${product.name} - $${product.price} - ${product.inStock ? "In Stock" : "Out of Stock"}`
  );
}

console.log(createProductDescriptions(products));

// Group products by category
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
}

console.log(groupByCategory(products));
```

### Creating a Mini Library System with Inheritance

```javascript
// Base Media class
class Media {
  constructor(title, creator, year) {
    this.title = title;
    this.creator = creator;
    this.year = year;
    this.isAvailable = true;
  }
  
  checkout() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return true;
    }
    return false;
  }
  
  return() {
    this.isAvailable = true;
  }
  
  getInfo() {
    return `${this.title} by ${this.creator} (${this.year})`;
  }
}

// Book subclass
class Book extends Media {
  constructor(title, author, year, pages, genre) {
    super(title, author, year);
    this.pages = pages;
    this.genre = genre;
  }
  
  getInfo() {
    return `${super.getInfo()} - ${this.pages} pages, ${this.genre}`;
  }
}

// Movie subclass
class Movie extends Media {
  constructor(title, director, year, duration, rating) {
    super(title, director, year);
    this.duration = duration;
    this.rating = rating;
  }
  
  getInfo() {
    return `${super.getInfo()} - ${this.duration} mins, Rated ${this.rating}`;
  }
}

// Library system
class Library {
  constructor(name) {
    this.name = name;
    this.catalog = [];
  }
  
  addItem(item) {
    this.catalog.push(item);
  }
  
  findItemsByTitle(title) {
    title = title.toLowerCase();
    return this.catalog.filter(item => 
      item.title.toLowerCase().includes(title)
    );
  }
  
  checkoutItem(item) {
    return item.checkout();
  }
  
  returnItem(item) {
    item.return();
  }
  
  getAvailableItems() {
    return this.catalog.filter(item => item.isAvailable);
  }
  
  getItemsByCreator(creator) {
    creator = creator.toLowerCase();
    return this.catalog.filter(item => 
      item.creator.toLowerCase().includes(creator)
    );
  }
}

// Usage
const library = new Library("City Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180, "Classic");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281, "Fiction");
const movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, 142, "R");

library.addItem(book1);
library.addItem(book2);
library.addItem(movie1);

console.log(library.findItemsByTitle("great"));
console.log(library.getAvailableItems());

library.checkoutItem(book1);
console.log(library.getAvailableItems());

library.returnItem(book1);
console.log(library.getAvailableItems());
```

## Review Questions

1. **How does prototype inheritance work in JavaScript?**
   - What is the prototype chain and how does it function?
   - How do you create inheritance relationships between objects?
   - What's the difference between `__proto__` and `prototype`?
   - How does ES6 class syntax relate to prototypal inheritance?

2. **What are the most useful array methods and when would you use them?**
   - Which array methods are used for adding and removing elements?
   - Which array methods are used for transforming data?
   - Which array methods are used for searching and filtering?
   - How do you choose between map, filter, and reduce?

3. **How can destructuring make your code more readable?**
   - What are the benefits of using destructuring with objects and arrays?
   - How can you use default values with destructuring?
   - What is the rest operator and how does it work with destructuring?
   - What are some common patterns for using destructuring in functions?

## Exercises

1. **Object Manipulation**
   - Create an object representing a car with properties for make, model, year, and color
   - Add methods to start, stop, and describe the car
   - Create a second car object that inherits from the first
   - Add and modify properties on both objects to demonstrate inheritance

2. **Array Transformation Challenge**
   - Given an array of numbers, use array methods to:
     - Filter out odd numbers
     - Double the remaining even numbers
     - Calculate the sum of the resulting array
     - Find the maximum value
   - Implement the solution using chained array methods

3. **Library Catalog System**
   - Create a more advanced version of the library system from the examples
   - Add features like searching by genre, tracking checkout history, and calculating late fees
   - Use object-oriented principles and array methods to organize the code
   - Implement a user interface for interacting with the library

## Additional Resources

- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info: Objects](https://javascript.info/object)
- [JavaScript.info: Arrays](https://javascript.info/array)
- [JavaScript.info: Destructuring assignment](https://javascript.info/destructuring-assignment)

## Next Steps
After mastering objects and arrays, you'll be ready to move on to strings and numbers in JavaScript, which will allow you to work with text and numerical data more effectively.