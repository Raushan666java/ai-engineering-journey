# 🔤 JavaScript Strings

## String Creation
```javascript
// String literals
let str1 = "Hello World";
let str2 = 'JavaScript';
let str3 = `Template literal`;

// String constructor
let str4 = new String("Hello");

// Multi-line strings
let multiLine = `This is a
multi-line
string`;
```

## String Properties and Methods
```javascript
let str = "JavaScript Programming";

// Properties
console.log(str.length); // 21

// Case methods
console.log(str.toLowerCase());    // "javascript programming"
console.log(str.toUpperCase());    // "JAVASCRIPT PROGRAMMING"

// Search methods
console.log(str.indexOf("Script"));     // 4
console.log(str.lastIndexOf("a"));      // 18
console.log(str.includes("Program"));   // true
console.log(str.startsWith("Java"));    // true
console.log(str.endsWith("ing"));       // true

// Extraction methods
console.log(str.charAt(4));           // "S"
console.log(str.charCodeAt(4));       // 83
console.log(str.slice(4, 10));        // "Script"
console.log(str.substring(4, 10));    // "Script"
console.log(str.substr(4, 6));        // "Script"

// Modification methods (return new string)
console.log(str.replace("JavaScript", "JS"));     // "JS Programming"
console.log(str.replaceAll("a", "@"));            // "J@v@Script Progr@mming"
console.log(str.split(" "));                      // ["JavaScript", "Programming"]
console.log(str.trim());                          // Removes whitespace
console.log(str.padStart(25, "*"));               // "****JavaScript Programming"
console.log(str.padEnd(25, "*"));                 // "JavaScript Programming****"
```

## Template Literals
```javascript
let name = "John";
let age = 30;

// Template literal with expressions
let message = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line template literal
let html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let highlighted = highlight`Hello ${name}, you are ${age} years old`;
```

## String Comparison
```javascript
let str1 = "apple";
let str2 = "banana";

console.log(str1 < str2);        // true (lexicographic comparison)
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)

// Case-insensitive comparison
console.log(str1.toLowerCase() === str2.toLowerCase());
```

## Regular Expressions with Strings
```javascript
let text = "The quick brown fox jumps over the lazy dog";

// match()
let matches = text.match(/the/gi); // ["The", "the"]

// search()
let position = text.search(/fox/); // 16

// replace() with regex
let replaced = text.replace(/the/gi, "a"); // "a quick brown fox jumps over a lazy dog"

// split() with regex
let words = text.split(/\s+/); // Split by whitespace
```

## String Escape Characters
```javascript
let str = "He said, \"Hello World!\""; // Escaped quotes
let path = "C:\\Users\\John\\Documents";  // Escaped backslashes
let newLine = "Line 1\nLine 2";          // New line
let tab = "Column 1\tColumn 2";          // Tab
let unicode = "\u0048\u0065\u006C\u006C\u006F"; // "Hello"
```

## String Iteration
```javascript
let str = "Hello";

// for...of loop
for (let char of str) {
    console.log(char); // H, e, l, l, o
}

// Traditional for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // H, e, l, l, o
}

// Array methods (after converting)
let chars = Array.from(str);
chars.forEach(char => console.log(char));
```

## String Validation
```javascript
// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number validation
function isValidPhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Password strength
function isStrongPassword(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
}
```

## String Manipulation Examples
```javascript
// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count occurrences
function countOccurrences(str, substring) {
    return str.split(substring).length - 1;
}

// Remove duplicates
function removeDuplicateChars(str) {
    return [...new Set(str)].join('');
}

// Palindrome check
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
```