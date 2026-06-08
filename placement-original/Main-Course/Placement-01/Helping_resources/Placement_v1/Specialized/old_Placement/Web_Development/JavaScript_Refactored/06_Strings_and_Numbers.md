# Strings and Numbers in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Manipulate strings using built-in methods
- Format strings with template literals
- Perform mathematical operations with the Math object
- Handle number precision and formatting
- Apply string and number methods to solve common programming problems

## Strings

Strings are sequences of characters used to represent text in JavaScript.

### Creating Strings

There are three ways to create strings in JavaScript:

```javascript
// Single quotes
const singleQuotes = 'Hello, world!';

// Double quotes
const doubleQuotes = "Hello, world!";

// Template literals (backticks)
const templateLiteral = `Hello, world!`;
```

### String Properties

The most commonly used string property is `length`, which returns the number of characters in a string:

```javascript
const str = "Hello";
console.log(str.length); // 5
```

### String Methods

JavaScript provides many built-in methods for manipulating strings:

#### Accessing Characters

```javascript
const str = "Hello";
console.log(str.charAt(0)); // "H"
console.log(str[0]); // "H" (bracket notation)
```

#### Searching Within Strings

```javascript
const str = "Hello, world!";

// indexOf - returns the position of the first occurrence or -1 if not found
console.log(str.indexOf("world")); // 7
console.log(str.indexOf("xyz")); // -1

// lastIndexOf - returns the position of the last occurrence or -1 if not found
console.log(str.lastIndexOf("o")); // 8

// includes - returns true if the string contains the substring
console.log(str.includes("world")); // true

// startsWith - checks if the string starts with the specified substring
console.log(str.startsWith("Hello")); // true

// endsWith - checks if the string ends with the specified substring
console.log(str.endsWith("!")); // true
```

#### Extracting Substrings

```javascript
const str = "Hello, world!";

// slice(start, end) - extracts a portion of the string
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(7)); // "world!"
console.log(str.slice(-6)); // "world!"

// substring(start, end) - similar to slice but doesn't accept negative indices
console.log(str.substring(0, 5)); // "Hello"

// substr(start, length) - extracts a specified number of characters
console.log(str.substr(7, 5)); // "world"
```

#### Modifying Strings

```javascript
const str = "Hello, world!";

// toUpperCase - converts to uppercase
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// toLowerCase - converts to lowercase
console.log(str.toLowerCase()); // "hello, world!"

// trim - removes whitespace from both ends
const paddedStr = "   Hello, world!   ";
console.log(paddedStr.trim()); // "Hello, world!"
console.log(paddedStr.trimStart()); // "Hello, world!   "
console.log(paddedStr.trimEnd()); // "   Hello, world!"

// replace - replaces the first occurrence of a substring
console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"

// replaceAll - replaces all occurrences (ES2021)
const multipleHello = "Hello Hello Hello";
console.log(multipleHello.replaceAll("Hello", "Hi")); // "Hi Hi Hi"

// split - splits a string into an array of substrings
console.log(str.split(", ")); // ["Hello", "world!"]
console.log(str.split("")); // ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!"]

// concat - joins two or more strings
console.log(str.concat(" Welcome to JavaScript.")); // "Hello, world! Welcome to JavaScript."

// padStart/padEnd - pads the string to a specified length
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"

// repeat - repeats the string a specified number of times
console.log("Ha".repeat(3)); // "HaHaHa"
```

### Template Literals

Template literals (introduced in ES6) provide an improved way to work with strings:

```javascript
const name = "John";
const age = 30;

// String concatenation (old way)
const greeting1 = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template literal (new way)
const greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting1); // "Hello, my name is John and I am 30 years old."
console.log(greeting2); // "Hello, my name is John and I am 30 years old."
```

#### Benefits of Template Literals

1. **Expression Interpolation**
```javascript
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // "The sum of 5 and 10 is 15."
```

2. **Multi-line Strings**
```javascript
const multiLine = `This is a string
that spans multiple
lines without needing escape characters.`;
```

3. **Tagged Templates**
```javascript
function highlight(strings, ...values) {
  let result = "";
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += `<strong>${values[i]}</strong>`;
    }
  });
  return result;
}

const name = "John";
const age = 30;
const highlightedText = highlight`My name is ${name} and I am ${age} years old.`;
// "My name is <strong>John</strong> and I am <strong>30</strong> years old."
```

### Escape Characters

Escape characters allow you to include special characters in strings:

| Escape Sequence | Character Represented |
|-----------------|----------------------|
| `\'`            | Single quote         |
| `\"`            | Double quote         |
| `\\`            | Backslash            |
| `\n`            | New line             |
| `\r`            | Carriage return      |
| `\t`            | Tab                  |
| `\b`            | Backspace            |
| `\f`            | Form feed            |
| `\v`            | Vertical tab         |
| `\0`            | Null character       |

Example:
```javascript
const text = "She said, \"Hello!\"";
console.log(text); // She said, "Hello!"

const path = "C:\\Users\\John\\Documents";
console.log(path); // C:\Users\John\Documents

const multiLine = "Line 1\nLine 2";
console.log(multiLine);
// Line 1
// Line 2
```

## Numbers

JavaScript has only one number type, which represents both integers and floating-point numbers.

### Creating Numbers

```javascript
// Integer
const integer = 42;

// Floating-point
const float = 3.14;

// Scientific notation
const scientific = 5e3; // 5000

// Binary (base 2)
const binary = 0b1010; // 10

// Octal (base 8)
const octal = 0o744; // 484

// Hexadecimal (base 16)
const hex = 0xFF; // 255

// BigInt (for integers larger than 2^53 - 1)
const bigInt = 9007199254740991n;
```

### Number Properties

```javascript
console.log(Number.MAX_VALUE); // Largest representable number
console.log(Number.MIN_VALUE); // Smallest representable positive number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // Not a Number
```

### Number Methods

```javascript
const num = 123.456;

// toString - converts a number to a string
console.log(num.toString()); // "123.456"
console.log(num.toString(2)); // binary: "1111011.0111010010111100011010101"
console.log(num.toString(16)); // hexadecimal: "7b.74bc6a7ef9db22d"

// toFixed - formats a number with a specific number of decimal places
console.log(num.toFixed(2)); // "123.46" (rounds to 2 decimal places)

// toPrecision - formats a number to a specified length
console.log(num.toPrecision(4)); // "123.5" (4 significant digits)

// toExponential - returns a string representing the number in exponential notation
console.log(num.toExponential(2)); // "1.23e+2"

// Converting strings to numbers
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42 (ignores non-numeric characters)
console.log(parseInt("0xFF", 16)); // 255 (parses hexadecimal)

console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14.15")); // 3.14 (stops at the second decimal)

console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("42px")); // NaN (stricter than parseInt)

// Checking if a value is a number
console.log(isNaN(NaN)); // true
console.log(isNaN("string")); // true
console.log(isNaN(42)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("string")); // false (more precise than global isNaN)

console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true
console.log(Number.isInteger(42.5)); // false

console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false (too large)
```

### The Math Object

The `Math` object provides mathematical constants and functions:

#### Constants

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
```

#### Rounding Methods

```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.floor(4.7)); // 4 (rounds down)
console.log(Math.ceil(4.3)); // 5 (rounds up)

console.log(Math.trunc(4.7)); // 4 (removes decimal part)
```

#### Minimum and Maximum

```javascript
console.log(Math.min(5, 10, 3, 8, 1)); // 1
console.log(Math.max(5, 10, 3, 8, 1)); // 10

// Using with arrays
const numbers = [5, 10, 3, 8, 1];
console.log(Math.min(...numbers)); // 1
console.log(Math.max(...numbers)); // 10
```

#### Random Numbers

```javascript
// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Random integer between 1 and 10
```

#### Mathematical Operations

```javascript
console.log(Math.abs(-5)); // 5 (absolute value)
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.cbrt(27)); // 3 (cube root)
console.log(Math.pow(2, 3)); // 8 (2^3)

console.log(Math.sign(-5)); // -1 (sign of a number)
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0

// Trigonometric functions (angles in radians)
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(Math.PI)); // -1
console.log(Math.tan(Math.PI / 4)); // 1

// Logarithmic functions
console.log(Math.log(Math.E)); // 1 (natural logarithm)
console.log(Math.log10(100)); // 2 (base 10 logarithm)
console.log(Math.log2(8)); // 3 (base 2 logarithm)
```

### Handling Floating-Point Precision

JavaScript uses IEEE 754 double-precision floating-point format, which can lead to precision issues:

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004 (not exactly 0.3)
console.log(0.1 + 0.2 === 0.3); // false
```

Solutions for handling precision issues:

1. **Using toFixed and parsing back to number**
```javascript
const sum = 0.1 + 0.2;
console.log(Number(sum.toFixed(1))); // 0.3
```

2. **Multiplying and dividing**
```javascript
const result = (0.1 * 10 + 0.2 * 10) / 10;
console.log(result); // 0.3
```

3. **Using a small epsilon value for comparison**
```javascript
function areEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}

console.log(areEqual(0.1 + 0.2, 0.3)); // true
```

## Practical Applications

### Building a Text Analyzer

```javascript
function textAnalyzer(text) {
  // Convert to lowercase for case-insensitive analysis
  const lowerText = text.toLowerCase();
  
  // Word count
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Character count (excluding spaces)
  const charCount = text.replace(/\s/g, '').length;
  
  // Sentence count
  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
  
  // Average word length
  const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  const avgWordLength = totalWordLength / wordCount || 0;
  
  // Character frequency
  const charFrequency = {};
  for (const char of lowerText) {
    if (char.trim() === '') continue; // Skip spaces
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  
  // Most common words (top 5)
  const wordFrequency = {};
  for (const word of words) {
    // Remove punctuation
    const cleanWord = word.replace(/[^\w]/g, '');
    if (cleanWord.length > 0) {
      wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
    }
  }
  
  const sortedWords = Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  
  return {
    wordCount,
    charCount,
    sentenceCount,
    avgWordLength: avgWordLength.toFixed(2),
    charFrequency,
    mostCommonWords: sortedWords
  };
}

// Example usage
const sampleText = `
  JavaScript is a programming language that is one of the core technologies of the World Wide Web. 
  JavaScript is easy to learn. JavaScript is fun and practical!
`;

console.log(textAnalyzer(sampleText));
```

### Creating a Formatted Report Generator

```javascript
function generateReport(data, title) {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  
  // Create header
  let report = `
=======================================
${title.toUpperCase()}
Generated on: ${formattedDate} at ${formattedTime}
=======================================

`;
  
  // Add summary
  report += `SUMMARY:
Total Items: ${data.length}
Average Value: $${calculateAverage(data).toFixed(2)}
Highest Value: $${findHighestValue(data).toFixed(2)}
Lowest Value: $${findLowestValue(data).toFixed(2)}

`;
  
  // Add detailed items
  report += `DETAILED ITEMS:
`;
  
  data.forEach((item, index) => {
    report += `
Item #${index + 1}
  Name: ${item.name}
  Category: ${item.category}
  Price: $${item.price.toFixed(2)}
  In Stock: ${item.inStock ? 'Yes' : 'No'}
  ${item.description ? `Description: ${item.description}` : ''}
`;
  });
  
  // Add footer
  report += `
=======================================
End of Report
=======================================
`;
  
  return report;
  
  // Helper functions
  function calculateAverage(items) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total / items.length || 0;
  }
  
  function findHighestValue(items) {
    return Math.max(...items.map(item => item.price));
  }
  
  function findLowestValue(items) {
    return Math.min(...items.map(item => item.price));
  }
}

// Example usage
const inventoryData = [
  { name: "Laptop", category: "Electronics", price: 999.99, inStock: true, description: "High-performance laptop with 16GB RAM" },
  { name: "Smartphone", category: "Electronics", price: 699.99, inStock: true },
  { name: "Coffee Maker", category: "Kitchen", price: 79.99, inStock: false, description: "Programmable coffee maker with timer" },
  { name: "Headphones", category: "Electronics", price: 199.99, inStock: true }
];

console.log(generateReport(inventoryData, "Inventory Report"));
```

### Implementing a Scientific Calculator

```javascript
class ScientificCalculator {
  constructor() {
    this.memory = 0;
    this.history = [];
  }
  
  // Basic operations
  add(a, b) {
    const result = a + b;
    this.addToHistory(`${a} + ${b} = ${result}`);
    return result;
  }
  
  subtract(a, b) {
    const result = a - b;
    this.addToHistory(`${a} - ${b} = ${result}`);
    return result;
  }
  
  multiply(a, b) {
    const result = a * b;
    this.addToHistory(`${a} × ${b} = ${result}`);
    return result;
  }
  
  divide(a, b) {
    if (b === 0) {
      const error = "Error: Division by zero";
      this.addToHistory(`${a} ÷ ${b} = ${error}`);
      throw new Error(error);
    }
    const result = a / b;
    this.addToHistory(`${a} ÷ ${b} = ${result}`);
    return result;
  }
  
  // Scientific operations
  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.addToHistory(`${base}^${exponent} = ${result}`);
    return result;
  }
  
  sqrt(number) {
    if (number < 0) {
      const error = "Error: Cannot calculate square root of negative number";
      this.addToHistory(`√${number} = ${error}`);
      throw new Error(error);
    }
    const result = Math.sqrt(number);
    this.addToHistory(`√${number} = ${result}`);
    return result;
  }
  
  sin(angle, isDegrees = true) {
    const radians = isDegrees ? this.degreesToRadians(angle) : angle;
    const result = Math.sin(radians);
    this.addToHistory(`sin(${angle}${isDegrees ? '°' : ' rad'}) = ${result}`);
    return result;
  }
  
  cos(angle, isDegrees = true) {
    const radians = isDegrees ? this.degreesToRadians(angle) : angle;
    const result = Math.cos(radians);
    this.addToHistory(`cos(${angle}${isDegrees ? '°' : ' rad'}) = ${result}`);
    return result;
  }
  
  tan(angle, isDegrees = true) {
    const radians = isDegrees ? this.degreesToRadians(angle) : angle;
    const result = Math.tan(radians);
    this.addToHistory(`tan(${angle}${isDegrees ? '°' : ' rad'}) = ${result}`);
    return result;
  }
  
  log(number, base = 10) {
    if (number <= 0 || base <= 0 || base === 1) {
      const error = "Error: Invalid input for logarithm";
      this.addToHistory(`log_${base}(${number}) = ${error}`);
      throw new Error(error);
    }
    
    let result;
    if (base === 10) {
      result = Math.log10(number);
      this.addToHistory(`log(${number}) = ${result}`);
    } else if (base === Math.E) {
      result = Math.log(number);
      this.addToHistory(`ln(${number}) = ${result}`);
    } else {
      result = Math.log(number) / Math.log(base);
      this.addToHistory(`log_${base}(${number}) = ${result}`);
    }
    
    return result;
  }
  
  // Memory functions
  memoryStore(value) {
    this.memory = value;
    this.addToHistory(`M+ ${value}`);
    return this.memory;
  }
  
  memoryRecall() {
    this.addToHistory(`MR = ${this.memory}`);
    return this.memory;
  }
  
  memoryClear() {
    this.memory = 0;
    this.addToHistory("MC");
    return this.memory;
  }
  
  // Utility functions
  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }
  
  round(number, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
  }
  
  // History management
  addToHistory(entry) {
    this.history.push({
      timestamp: new Date(),
      operation: entry
    });
    
    // Keep history limited to last 100 operations
    if (this.history.length > 100) {
      this.history.shift();
    }
  }
  
  getHistory(limit = 10) {
    return this.history.slice(-limit);
  }
  
  clearHistory() {
    this.history = [];
    return "History cleared";
  }
}

// Example usage
const calc = new ScientificCalculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.power(2, 3)); // 8
console.log(calc.sin(90)); // 1
console.log(calc.log(100)); // 2
console.log(calc.getHistory());
```

## Review Questions

1. **What are the most commonly used string methods?**
   - How would you extract a substring from a larger string?
   - What methods would you use to search for a specific pattern in a string?
   - How can you transform a string to different cases?
   - What's the difference between `slice()`, `substring()`, and `substr()`?

2. **How do template literals improve string formatting?**
   - What advantages do template literals have over traditional string concatenation?
   - How can you include expressions within template literals?
   - What are tagged template literals and when would you use them?
   - How do template literals handle multi-line strings?

3. **How would you handle floating-point precision issues in JavaScript?**
   - Why does `0.1 + 0.2 !== 0.3` in JavaScript?
   - What techniques can you use to compare floating-point numbers?
   - How would you perform financial calculations that require precision?
   - What are the limitations of the Number type in JavaScript?

## Exercises

1. **String Manipulation Challenge**
   - Create a function that reverses a string without using the built-in `reverse()` method
   - Write a function that counts the occurrences of a specific character in a string
   - Implement a function that converts a string to title case (first letter of each word capitalized)
   - Create a function that checks if a string is a palindrome (reads the same forward and backward)

2. **Number Formatting Utilities**
   - Write a function to format a number as currency (e.g., $1,234.56)
   - Create a function to convert between different number bases (decimal, binary, hexadecimal)
   - Implement a function to round a number to a specified number of significant figures
   - Write a function to format large numbers with suffixes (e.g., 1.2K, 3.5M, 2.7B)

3. **Advanced Text Analyzer**
   - Enhance the text analyzer example to include:
     - Reading level assessment based on sentence length and word complexity
     - Identification of passive voice usage
     - Sentiment analysis (positive/negative tone)
     - Keyword extraction and frequency analysis
   - Create a user interface to input text and display the analysis results

## Additional Resources

- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript.info: Strings](https://javascript.info/string)
- [JavaScript.info: Numbers](https://javascript.info/number)
- [Floating Point Guide](https://floating-point-gui.de/) - Understanding floating-point arithmetic

## Next Steps
After mastering strings and numbers, you'll be ready to move on to working with dates and times in JavaScript, which will allow you to handle temporal data effectively.