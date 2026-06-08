# 🏗️ JavaScript Objects

## Object Creation
```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return "Hello, I'm " + this.name;
    };
}

let john = new Person("John", 30);

// Object.create()
let personPrototype = {
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

let alice = Object.create(personPrototype);
alice.name = "Alice";
alice.age = 25;
```

## Object Properties
```javascript
let person = {
    name: "John",
    age: 30
};

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adding properties
person.city = "NYC";
person["country"] = "USA";

// Deleting properties
delete person.age;

// Property existence
console.log("name" in person);           // true
console.log(person.hasOwnProperty("name")); // true
```

## Object Methods
```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // ES6 method shorthand
    greet() {
        return `Hello, I'm ${this.fullName()}`;
    }
};

// 'this' context
let obj = {
    name: "Test",
    regularMethod: function() {
        console.log(this.name); // "Test"
    },
    arrowMethod: () => {
        console.log(this.name); // undefined
    }
};
```

## Object Destructuring
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC",
    country: "USA"
};

// Basic destructuring
let {name, age} = person;

// Renaming variables
let {name: fullName, age: years} = person;

// Default values
let {name, age, salary = 50000} = person;

// Nested destructuring
let user = {
    id: 1,
    info: {
        name: "John",
        email: "john@example.com"
    }
};

let {info: {name, email}} = user;
```

## Built-in Object Methods
```javascript
let person = {name: "John", age: 30, city: "NYC"};

// Object.keys()
console.log(Object.keys(person)); // ["name", "age", "city"]

// Object.values()
console.log(Object.values(person)); // ["John", 30, "NYC"]

// Object.entries()
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "NYC"]]

// Object.assign()
let target = {a: 1};
let source = {b: 2, c: 3};
Object.assign(target, source); // {a: 1, b: 2, c: 3}

// Object.freeze()
Object.freeze(person);
person.age = 31; // Won't work

// Object.seal()
Object.seal(person); // Can modify existing but can't add/delete
```

## Property Descriptors
```javascript
let obj = {};

// Define property with descriptor
Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
});

// Get property descriptor
let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);

// Define multiple properties
Object.defineProperties(obj, {
    age: {
        value: 30,
        writable: false
    },
    city: {
        value: 'NYC',
        enumerable: false
    }
});
```

## Getters and Setters
```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

console.log(person.fullName); // "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName); // "Jane"
```