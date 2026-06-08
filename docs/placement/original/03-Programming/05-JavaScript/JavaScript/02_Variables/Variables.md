# 📦 JavaScript Variables

## Variable Declaration
```javascript
// var - Function scoped, hoisted
var name = "John";

// let - Block scoped
let age = 25;

// const - Block scoped, immutable
const PI = 3.14159;
```

## Data Types
```javascript
// Primitive Types
let str = "Hello";          // String
let num = 42;               // Number
let bool = true;            // Boolean
let nothing = null;         // Null
let undefined_var;          // Undefined
let symbol = Symbol('id');  // Symbol
let bigInt = 123n;          // BigInt

// Non-Primitive Types
let obj = {name: "John"};   // Object
let arr = [1, 2, 3];        // Array
let func = function() {};   // Function
```

## Variable Scope
```javascript
// Global scope
var globalVar = "I'm global";

function testScope() {
    // Function scope
    var functionVar = "I'm in function";
    
    if (true) {
        // Block scope
        let blockVar = "I'm in block";
        const blockConst = "I'm also in block";
    }
}
```

## Hoisting
```javascript
// var hoisting
console.log(x); // undefined
var x = 5;

// Function hoisting
sayHello(); // Works!
function sayHello() {
    console.log("Hello!");
}
```

## Type Checking
```javascript
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```