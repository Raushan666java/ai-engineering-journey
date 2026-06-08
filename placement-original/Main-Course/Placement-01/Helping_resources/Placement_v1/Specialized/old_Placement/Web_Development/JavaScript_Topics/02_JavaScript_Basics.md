# JavaScript Basics

## Syntax and Statements
- JavaScript statements end with a semicolon (optional but recommended).
- Code blocks are defined by curly braces `{}`.
- Case-sensitive language.

## Variables: var, let, const
- `var`: Function-scoped, can be redeclared and updated. Hoisted.
- `let`: Block-scoped, can be updated but not redeclared in the same scope. Not hoisted.
- `const`: Block-scoped, cannot be updated or redeclared. Must be initialized at declaration.

## Data Types
- Primitive: string, number, boolean, null, undefined, symbol, bigint
- Reference: object, array, function

## Type Conversion and Coercion
- Implicit: JavaScript automatically converts types (e.g., '5' + 2 = '52').
- Explicit: Use `Number()`, `String()`, `Boolean()` for conversion.

## Operators
- Arithmetic: +, -, *, /, %, **
- Assignment: =, +=, -=, etc.
- Comparison: ==, ===, !=, !==, >, <, >=, <=
- Logical: &&, ||, !
- Bitwise: &, |, ^, ~, <<, >>, >>>
- Ternary: condition ? expr1 : expr2

## Comments
- Single-line: // comment
- Multi-line: /* comment */