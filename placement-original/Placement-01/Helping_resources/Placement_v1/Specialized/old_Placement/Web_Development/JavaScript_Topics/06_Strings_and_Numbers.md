# Strings and Numbers in JavaScript

## Strings

### What is a String?
- A string is a sequence of characters used to represent text.
- Strings are immutable (cannot be changed after creation).

### Creating Strings
- Using single, double, or backticks:
```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`;
```

### String Methods
- `length`: Returns the length of the string.
- `indexOf(substring)`: Finds the index of a substring.
- `slice(start, end)`: Extracts a section of a string.
- `substring(start, end)`: Similar to slice, but no negative indices.
- `substr(start, length)`: Extracts a substring (deprecated, but still used).
- `replace(search, replacement)`: Replaces part of the string.
- `split(separator)`: Splits a string into an array.
- `join(separator)`: Joins array elements into a string.
- `trim()`: Removes whitespace from both ends.
- `toUpperCase()`, `toLowerCase()`: Changes case.
- `includes(substring)`: Checks if substring exists.
- `startsWith()`, `endsWith()`

### Template Literals
- Use backticks (`` ` ``) for multi-line strings and embedding expressions:
```js
let name = 'Alice';
let greeting = `Hello, ${name}!`;
```

### Escape Characters
- Use `\n` for newline, `\t` for tab, `\\` for backslash, etc.

## Numbers

### What is a Number?
- JavaScript has only one number type (floating-point, 64-bit IEEE 754).
- Special values: `Infinity`, `-Infinity`, `NaN` (Not a Number)

### Creating Numbers
```js
let num1 = 42;
let num2 = 3.14;
let num3 = Number('123');
```

### Number Methods
- `toFixed(digits)`: Formats with fixed decimals.
- `toPrecision(digits)`: Formats to specified length.
- `parseInt(string)`, `parseFloat(string)`: Converts strings to numbers.
- `isNaN(value)`: Checks if value is NaN.
- `isFinite(value)`: Checks if value is a finite number.

### Math Object
- Provides mathematical constants and functions:
- `Math.PI`, `Math.E`, `Math.abs()`, `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.max()`, `Math.min()`, `Math.random()`, `Math.pow()`, `Math.sqrt()`