# 📊 JavaScript Arrays

## Array Creation
```javascript
// Array literal
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Array constructor
let arr1 = new Array(5);        // Empty array with length 5
let arr2 = new Array(1, 2, 3);  // [1, 2, 3]

// Array.from()
let str = "hello";
let chars = Array.from(str); // ["h", "e", "l", "l", "o"]

// Array.of()
let nums = Array.of(1, 2, 3); // [1, 2, 3]
```

## Array Methods - Mutating
```javascript
let fruits = ["apple", "banana"];

// push() - Add to end
fruits.push("orange");          // ["apple", "banana", "orange"]

// pop() - Remove from end
let last = fruits.pop();        // "orange"

// unshift() - Add to beginning
fruits.unshift("mango");        // ["mango", "apple", "banana"]

// shift() - Remove from beginning
let first = fruits.shift();     // "mango"

// splice() - Add/remove elements
fruits.splice(1, 0, "grape");   // Add "grape" at index 1
fruits.splice(1, 1);            // Remove 1 element at index 1

// sort()
let numbers = [3, 1, 4, 1, 5];
numbers.sort();                 // [1, 1, 3, 4, 5]
numbers.sort((a, b) => b - a);  // [5, 4, 3, 1, 1] (descending)

// reverse()
numbers.reverse();              // [1, 1, 3, 4, 5]
```

## Array Methods - Non-Mutating
```javascript
let numbers = [1, 2, 3, 4, 5];

// map() - Transform elements
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter() - Filter elements
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce() - Reduce to single value
let sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find() - Find first matching element
let found = numbers.find(n => n > 3); // 4

// findIndex() - Find index of first matching element
let index = numbers.findIndex(n => n > 3); // 3

// includes() - Check if element exists
let hasThree = numbers.includes(3); // true

// indexOf() - Find index of element
let indexOfThree = numbers.indexOf(3); // 2

// slice() - Extract portion
let portion = numbers.slice(1, 4); // [2, 3, 4]

// concat() - Combine arrays
let moreNumbers = [6, 7, 8];
let combined = numbers.concat(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
```

## Array Iteration
```javascript
let fruits = ["apple", "banana", "orange"];

// forEach()
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// for...of
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in (not recommended for arrays)
for (let index in fruits) {
    console.log(fruits[index]);
}

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

## Array Destructuring
```javascript
let numbers = [1, 2, 3, 4, 5];

// Basic destructuring
let [first, second] = numbers; // first = 1, second = 2

// Skip elements
let [a, , c] = numbers; // a = 1, c = 3

// Rest operator
let [head, ...tail] = numbers; // head = 1, tail = [2, 3, 4, 5]

// Default values
let [x, y, z = 0] = [1, 2]; // x = 1, y = 2, z = 0

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

## Advanced Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];

// every() - Test if all elements pass test
let allPositive = numbers.every(n => n > 0); // true

// some() - Test if at least one element passes test
let hasEven = numbers.some(n => n % 2 === 0); // true

// reduceRight() - Reduce from right to left
let rightReduced = numbers.reduceRight((acc, n) => acc + n, 0); // 15

// flat() - Flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
let flattened = nested.flat(2); // [1, 2, 3, 4, 5, 6]

// flatMap() - Map then flatten
let words = ["hello", "world"];
let chars = words.flatMap(word => word.split('')); // ['h','e','l','l','o','w','o','r','l','d']
```

## Array-like Objects
```javascript
// Arguments object (in functions)
function example() {
    console.log(arguments.length);
    let argsArray = Array.from(arguments);
    return argsArray;
}

// NodeList to Array
let divs = document.querySelectorAll('div');
let divsArray = Array.from(divs);

// String to Array
let str = "hello";
let strArray = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
```