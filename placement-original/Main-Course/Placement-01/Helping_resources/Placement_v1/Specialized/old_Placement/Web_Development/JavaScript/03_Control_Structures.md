# 3. Control Structures in JavaScript

## Conditional Statements

### if, else if, else
```js
if (condition) {
  // code block
} else if (anotherCondition) {
  // another code block
} else {
  // default code block
}
```
- Used to execute code blocks based on conditions.

### switch Statement
```js
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```
- Useful for multiple possible values of a variable.

## Looping Statements

### for Loop
```js
for (let i = 0; i < 5; i++) {
  // code block
}
```
- Used when the number of iterations is known.

### while Loop
```js
while (condition) {
  // code block
}
```
- Used when the number of iterations is not known in advance.

### do-while Loop
```js
do {
  // code block
} while (condition);
```
- Executes the code block at least once before checking the condition.

## break and continue
- `break`: Exits the nearest enclosing loop or switch.
- `continue`: Skips the current iteration and continues with the next.

---

Type "next" to get detailed notes for the next topic: Functions.
