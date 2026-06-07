# Control Structures in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Implement conditional logic using if/else statements and switch
- Create and control loops for repetitive tasks
- Use break and continue statements to control loop execution
- Apply control structures to solve practical programming problems

## Conditional Statements

Conditional statements allow your code to make decisions and execute different code blocks based on different conditions.

### if, else if, else

The `if` statement executes a block of code if a specified condition is true.

#### Basic Syntax:
```javascript
if (condition) {
  // code to execute if condition is true
}
```

#### if...else:
```javascript
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

#### if...else if...else:
```javascript
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition1 is false and condition2 is true
} else {
  // code to execute if both conditions are false
}
```

#### Example:
```javascript
const hour = new Date().getHours();

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```

#### Conditional (Ternary) Operator
A shorthand for simple if-else statements:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Example:
```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

### switch Statement

The `switch` statement evaluates an expression and executes code blocks based on matching cases.

#### Syntax:
```javascript
switch (expression) {
  case value1:
    // code to execute when expression equals value1
    break;
  case value2:
    // code to execute when expression equals value2
    break;
  default:
    // code to execute if no case matches
}
```

#### Example:
```javascript
const day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log(`Today is ${dayName}`);
```

#### Important Notes:
- The `break` statement exits the switch block
- Without `break`, execution continues to the next case
- The `default` case is executed if no case matches
- Multiple cases can share the same code block

```javascript
// Multiple cases sharing code
const fruit = "Apple";

switch (fruit) {
  case "Apple":
  case "Pear":
  case "Banana":
    console.log("Common fruit");
    break;
  case "Dragonfruit":
  case "Starfruit":
    console.log("Exotic fruit");
    break;
  default:
    console.log("Unknown fruit");
}
```

### When to use if/else vs. switch

- **Use if/else when:**
  - You have complex conditions
  - Conditions involve ranges or different variables
  - You have a small number of conditions
  - Conditions are not based on equality

- **Use switch when:**
  - You're comparing a single variable against multiple values
  - You have many conditions based on the same variable
  - You need clearer, more readable code for multiple conditions

## Looping Statements

Loops execute a block of code repeatedly until a specified condition is met.

### for Loop

The `for` loop repeats until a specified condition evaluates to false.

#### Syntax:
```javascript
for (initialization; condition; afterthought) {
  // code to execute in each iteration
}
```

- **initialization**: Expression executed once before the loop starts
- **condition**: Expression evaluated before each iteration; loop continues if true
- **afterthought**: Expression executed after each iteration

#### Example:
```javascript
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

#### Looping through arrays:
```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### while Loop

The `while` loop executes as long as a specified condition is true.

#### Syntax:
```javascript
while (condition) {
  // code to execute in each iteration
}
```

#### Example:
```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

### do-while Loop

The `do-while` loop executes at least once, then repeats as long as a specified condition is true.

#### Syntax:
```javascript
do {
  // code to execute in each iteration
} while (condition);
```

#### Example:
```javascript
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);
```

### for...of Loop (ES6)

The `for...of` loop iterates over iterable objects (arrays, strings, etc.).

#### Syntax:
```javascript
for (variable of iterable) {
  // code to execute in each iteration
}
```

#### Example:
```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### for...in Loop

The `for...in` loop iterates over the enumerable properties of an object.

#### Syntax:
```javascript
for (variable in object) {
  // code to execute in each iteration
}
```

#### Example:
```javascript
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

> **Note:** `for...in` is not recommended for arrays, as it iterates over all enumerable properties, not just numeric indices.

## break and continue

These statements provide additional control within loops.

### break

The `break` statement terminates the current loop or switch statement.

#### Example:
```javascript
// Stop when i is 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 1, 2
```

### continue

The `continue` statement skips the current iteration and continues with the next one.

#### Example:
```javascript
// Skip when i is 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```

### Labels

Labels can be used with `break` and `continue` to target specific loops in nested structures.

#### Example:
```javascript
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // Breaks out of both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

## Practical Applications

### Building a Simple Calculator with Conditionals

```javascript
function calculate(num1, num2, operator) {
  let result;
  
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operator";
  }
  
  return result;
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Error: Division by zero
```

### Creating a Number Guessing Game with Loops

```javascript
function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess;
  let gameOver = false;
  
  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 100.");
  
  // This would normally use prompt() in a browser environment
  // For demonstration, we'll simulate some guesses
  const simulatedGuesses = [50, 25, 37, 42];
  
  while (!gameOver && attempts < simulatedGuesses.length) {
    guess = simulatedGuesses[attempts];
    attempts++;
    
    console.log(`Attempt ${attempts}: You guessed ${guess}`);
    
    if (guess < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!`);
      gameOver = true;
    }
  }
  
  if (!gameOver) {
    console.log(`Game over! The secret number was ${secretNumber}.`);
  }
}

guessingGame();
```

### Implementing FizzBuzz

```javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
```

## Review Questions

1. **When would you use a switch statement instead of if/else?**
   - What are the advantages of switch over if/else for certain scenarios?
   - How does the execution flow differ between switch and if/else?
   - What types of values work best with switch statements?

2. **What are the key differences between for, while, and do-while loops?**
   - When would you choose one loop type over another?
   - Which loop guarantees at least one execution?
   - How do you initialize and update variables in each loop type?

3. **How can break and continue change the flow of a loop?**
   - What is the difference between break and continue?
   - How do labeled statements work with break and continue?
   - In what scenarios would you use break versus continue?

## Exercises

1. **Grade Calculator**
   - Create a function that takes a numerical score (0-100)
   - Use if/else statements to return the corresponding letter grade:
     - A: 90-100
     - B: 80-89
     - C: 70-79
     - D: 60-69
     - F: 0-59
   - Handle invalid inputs (negative numbers, values over 100)

2. **Day Planner**
   - Create a function that takes a day of the week
   - Use a switch statement to output a schedule for that day
   - Include a default case for invalid inputs

3. **Sum of Even Numbers**
   - Write a function that calculates the sum of all even numbers from 1 to n
   - Implement the solution using different loop types (for, while, do-while)
   - Use the continue statement to skip odd numbers

4. **Prime Number Checker**
   - Create a function that checks if a number is prime
   - Use a loop with a break statement to optimize the solution
   - Test with various inputs

## Additional Resources

- [MDN: Making decisions in your code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript.info: Conditional branching](https://javascript.info/ifelse)
- [JavaScript.info: Loops: while and for](https://javascript.info/while-for)

## Next Steps
After mastering control structures, you'll be ready to move on to functions in JavaScript, which will allow you to create reusable blocks of code.