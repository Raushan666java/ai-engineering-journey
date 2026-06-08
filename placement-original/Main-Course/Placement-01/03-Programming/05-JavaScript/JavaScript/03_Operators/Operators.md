# ⚡ JavaScript Operators

## Arithmetic Operators
```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 Addition
console.log(a - b);  // 7  Subtraction
console.log(a * b);  // 30 Multiplication
console.log(a / b);  // 3.33 Division
console.log(a % b);  // 1  Modulus
console.log(a ** b); // 1000 Exponentiation

// Increment/Decrement
let x = 5;
console.log(++x);    // 6 Pre-increment
console.log(x++);    // 6 Post-increment
console.log(--x);    // 6 Pre-decrement
console.log(x--);    // 6 Post-decrement
```

## Assignment Operators
```javascript
let x = 10;
x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 4;  // x = x % 4 = 2
x **= 3; // x = x ** 3 = 8
```

## Comparison Operators
```javascript
let a = 5, b = "5";

console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)
console.log(a != b);   // false (loose inequality)
console.log(a !== b);  // true (strict inequality)
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 5);   // true
```

## Logical Operators
```javascript
let x = true, y = false;

console.log(x && y);   // false (AND)
console.log(x || y);   // true (OR)
console.log(!x);       // false (NOT)

// Short-circuit evaluation
let result = x && "Hello"; // "Hello"
let result2 = y || "Default"; // "Default"
```

## Bitwise Operators
```javascript
let a = 5;  // 101 in binary
let b = 3;  // 011 in binary

console.log(a & b);  // 1 (AND)
console.log(a | b);  // 7 (OR)
console.log(a ^ b);  // 6 (XOR)
console.log(~a);     // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2 (Right shift)
```

## Ternary Operator
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
```

## Operator Precedence
```javascript
let result = 2 + 3 * 4;     // 14 (not 20)
let result2 = (2 + 3) * 4;  // 20

// Common precedence order:
// 1. () Parentheses
// 2. ** Exponentiation
// 3. *, /, % Multiplication, Division, Modulus
// 4. +, - Addition, Subtraction
// 5. <, >, <=, >= Comparison
// 6. ==, !=, ===, !== Equality
// 7. && Logical AND
// 8. || Logical OR
// 9. = Assignment
```