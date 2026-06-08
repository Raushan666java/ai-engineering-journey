# JavaScript Basics

## Learning Objectives
After completing this section, you will be able to:
- Write syntactically correct JavaScript code
- Understand variable declaration and scope
- Work with different data types
- Perform type conversion and use operators effectively
- Apply proper commenting techniques

## Syntax and Statements

JavaScript syntax is the set of rules that define how JavaScript programs are constructed:

### Basic Syntax
- JavaScript is case-sensitive (`myVariable` is different from `myvariable`)
- Statements end with semicolons (optional but recommended)
- Code blocks are enclosed in curly braces `{}`
- Whitespace is generally ignored (used for readability)

### Example:
```javascript
// This is a statement
let greeting = "Hello, World!";

// This is a code block
if (greeting.length > 5) {
    console.log(greeting);
}
```

## Variables: var, let, const

Variables are containers for storing data values. JavaScript provides three ways to declare variables:

### var
- Function-scoped (or globally-scoped if declared outside a function)
- Can be redeclared and updated
- Hoisted to the top of its scope and initialized with `undefined`

```javascript
var name = "John";
var name = "Jane"; // Valid redeclaration
name = "Alice";    // Valid update
```

### let
- Block-scoped (only available within the block it's defined)
- Cannot be redeclared in the same scope
- Can be updated
- Hoisted to the top of its block but not initialized

```javascript
let age = 25;
// let age = 30; // Error: Cannot redeclare
age = 30;       // Valid update

if (true) {
    let age = 40; // Different variable (different scope)
    console.log(age); // 40
}
console.log(age); // 30
```

### const
- Block-scoped
- Cannot be redeclared or updated
- Must be initialized at declaration
- For objects and arrays, the content can still be modified

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign

// But for objects and arrays:
const person = { name: "John" };
person.name = "Jane"; // Valid - modifying property
// person = { name: "Alice" }; // Error: Cannot reassign
```

### When to use each:
- `const`: Default choice for variables that shouldn't be reassigned
- `let`: For variables that need to be reassigned
- `var`: Rarely used in modern JavaScript (legacy code)

## Data Types

JavaScript has two categories of data types:

### Primitive Types
Values that are immutable and directly represent data:

1. **String**: Text data
   ```javascript
   let name = "John";
   let greeting = 'Hello';
   let template = `Hello, ${name}`; // Template literal
   ```

2. **Number**: Numeric data (both integers and floating-point)
   ```javascript
   let age = 25;
   let price = 19.99;
   let scientific = 2.5e6; // 2,500,000
   ```

3. **Boolean**: Logical data (true/false)
   ```javascript
   let isActive = true;
   let hasPermission = false;
   ```

4. **null**: Represents intentional absence of value
   ```javascript
   let empty = null;
   ```

5. **undefined**: Represents uninitialized variable
   ```javascript
   let notDefined;
   console.log(notDefined); // undefined
   ```

6. **Symbol**: Unique and immutable value (ES6)
   ```javascript
   const id = Symbol('id');
   ```

7. **BigInt**: For integers larger than Number can represent (ES2020)
   ```javascript
   const bigNumber = 9007199254740991n;
   ```

### Reference Types
Values that are mutable and store references to data:

1. **Object**: Collection of key-value pairs
   ```javascript
   const person = {
       name: "John",
       age: 30,
       isStudent: false
   };
   ```

2. **Array**: Ordered collection of values
   ```javascript
   const colors = ["red", "green", "blue"];
   ```

3. **Function**: Callable object
   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }
   ```

4. **Date**, **RegExp**, **Map**, **Set**, etc. (specialized objects)

### Checking Types
Use the `typeof` operator to check a value's type:

```javascript
typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (this is a known bug)
typeof {}           // "object"
typeof []           // "object" (arrays are objects)
typeof function(){} // "function"
```

## Type Conversion and Coercion

JavaScript handles type conversions in two ways:

### Explicit Type Conversion (Type Casting)
Manually converting from one type to another:

```javascript
// To String
String(123)         // "123"
(123).toString()    // "123"

// To Number
Number("123")       // 123
parseInt("123")     // 123
parseFloat("123.45") // 123.45
+"123"              // 123 (unary plus)

// To Boolean
Boolean(1)          // true
Boolean(0)          // false
Boolean("")         // false
Boolean("hello")    // true
!!1                 // true (double negation)
```

### Implicit Type Conversion (Type Coercion)
JavaScript automatically converts types in certain operations:

```javascript
// String conversion
"Hello" + 123       // "Hello123"
"10" + 5            // "105"

// Numeric conversion
"10" - 5            // 5
"10" * 5            // 50
"10" / 5            // 2

// Boolean conversion
if ("hello") {      // Converted to true
    console.log("Truthy value");
}

if (0) {            // Converted to false
    // This won't execute
}
```

### Truthy and Falsy Values
Values that evaluate to `true` or `false` in boolean contexts:

**Falsy values:**
- `false`
- `0`, `-0`, `0n` (BigInt zero)
- `""`, `''`, ``` `` ``` (empty strings)
- `null`
- `undefined`
- `NaN`

**Truthy values:**
- Everything else, including:
- `true`
- Any number other than 0
- Any non-empty string
- All objects and arrays (even empty ones)

## Operators

JavaScript provides various operators for different operations:

### Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation (ES2016)
- `++` Increment
- `--` Decrement

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

let c = 5;
c++;                 // c is now 6
c--;                 // c is now 5
```

### Assignment Operators
- `=` Simple assignment
- `+=`, `-=`, `*=`, `/=`, etc. Compound assignment

```javascript
let x = 10;
x += 5;              // x = x + 5 (15)
x -= 3;              // x = x - 3 (12)
x *= 2;              // x = x * 2 (24)
x /= 4;              // x = x / 4 (6)
```

### Comparison Operators
- `==` Equal to (with type coercion)
- `===` Strictly equal to (no type coercion)
- `!=` Not equal to (with type coercion)
- `!==` Strictly not equal to (no type coercion)
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

```javascript
console.log(5 == "5");   // true (coercion)
console.log(5 === "5");  // false (strict)
console.log(5 != "6");   // true
console.log(5 !== "5");  // true (strict)
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true
```

### Logical Operators
- `&&` Logical AND
- `||` Logical OR
- `!` Logical NOT

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(true || false);  // true
console.log(false || false); // false
console.log(!true);          // false
console.log(!false);         // true
```

### Bitwise Operators
- `&` Bitwise AND
- `|` Bitwise OR
- `^` Bitwise XOR
- `~` Bitwise NOT
- `<<` Left shift
- `>>` Right shift
- `>>>` Unsigned right shift

```javascript
console.log(5 & 3);   // 1 (0101 & 0011 = 0001)
console.log(5 | 3);   // 7 (0101 | 0011 = 0111)
console.log(5 ^ 3);   // 6 (0101 ^ 0011 = 0110)
console.log(~5);      // -6 (inverts bits)
console.log(5 << 1);  // 10 (shift left 1 bit)
console.log(5 >> 1);  // 2 (shift right 1 bit)
```

### Ternary (Conditional) Operator
- `condition ? expr1 : expr2`

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

### Other Operators
- `typeof` Returns a string indicating the type
- `instanceof` Tests if an object is an instance of a class
- `in` Tests if a property exists in an object
- `delete` Deletes a property from an object
- `new` Creates an instance of an object
- `void` Evaluates an expression and returns undefined

```javascript
console.log(typeof 42);           // "number"
console.log([] instanceof Array); // true
console.log("name" in {name: "John"}); // true

const obj = {prop: 42};
delete obj.prop;                  // removes prop
console.log(obj.prop);            // undefined
```

## Comments

Comments are used to add notes to code or temporarily disable code:

### Single-line Comments
Use `//` for comments that span a single line:

```javascript
// This is a single-line comment
let x = 5; // This comment is after code
```

### Multi-line Comments
Use `/* */` for comments that span multiple lines:

```javascript
/* This is a multi-line comment
   that spans several lines
   and can be used for longer explanations
*/
```

### JSDoc Comments
Special comments used for documentation:

```javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}
```

## Practical Applications

### Creating Variables and Performing Operations
```javascript
// Online store product information
const productName = "Wireless Headphones";
const price = 79.99;
const inStock = true;
const discountPercentage = 15;

// Calculate discounted price
const discountAmount = price * (discountPercentage / 100);
const discountedPrice = price - discountAmount;

console.log(`Product: ${productName}`);
console.log(`Original Price: $${price.toFixed(2)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Available: ${inStock ? "Yes" : "No"}`);
```

### Converting Between Data Types
```javascript
// User input from a form (strings)
const inputAge = "25";
const inputScore = "85.5";
const inputActive = "true";

// Convert to appropriate types for processing
const age = Number(inputAge);
const score = parseFloat(inputScore);
const isActive = inputActive === "true";

// Perform operations with converted values
const nextYearAge = age + 1;
const scorePercentage = score / 100;
const status = isActive ? "Active" : "Inactive";

console.log(`Next year's age: ${nextYearAge}`);
console.log(`Score as percentage: ${scorePercentage}`);
console.log(`Account status: ${status}`);
```

### Using Operators to Solve Problems
```javascript
// Quiz scoring system
const correctAnswers = 8;
const totalQuestions = 10;
const passingThreshold = 0.7; // 70%

// Calculate score percentage
const scorePercentage = correctAnswers / totalQuestions;

// Determine if passed
const passed = scorePercentage >= passingThreshold;

// Calculate points needed to pass
const pointsNeeded = Math.ceil(totalQuestions * passingThreshold);
const additionalPointsNeeded = passed ? 0 : pointsNeeded - correctAnswers;

console.log(`Score: ${correctAnswers}/${totalQuestions} (${(scorePercentage * 100).toFixed(1)}%)`);
console.log(`Result: ${passed ? "Passed" : "Failed"}`);
console.log(`Points needed to pass: ${pointsNeeded}`);
console.log(`Additional points needed: ${additionalPointsNeeded}`);
```

## Review Questions

1. **What are the differences between var, let, and const?**
   - How does scope differ between these variable declarations?
   - When would you use each type of variable declaration?
   - What happens if you try to redeclare or reassign each type?

2. **How does type coercion work in JavaScript?**
   - What is the difference between explicit and implicit type conversion?
   - In what situations does JavaScript perform automatic type conversion?
   - How would you avoid unexpected results from type coercion?

3. **What is operator precedence and why is it important?**
   - How does JavaScript determine the order of operations?
   - What are some common operator precedence issues?
   - How can you control the order of operations in complex expressions?

## Exercises

1. **Variable Declaration Practice**
   - Create variables using var, let, and const
   - Try to reassign and redeclare each type
   - Observe and document the behavior

2. **Type Conversion Challenge**
   - Convert strings to numbers and vice versa
   - Handle edge cases like empty strings, "NaN", etc.
   - Create a function that safely converts user input to a number

3. **Operator Mastery**
   - Write expressions using multiple operators
   - Predict the results before running the code
   - Use parentheses to change the order of operations

## Additional Resources

- [MDN: JavaScript Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [JavaScript.info: Variables](https://javascript.info/variables)
- [JavaScript.info: Data Types](https://javascript.info/types)
- [JavaScript.info: Type Conversions](https://javascript.info/type-conversions)

## Next Steps
After mastering JavaScript basics, you'll be ready to move on to control structures like conditionals and loops in the next section.