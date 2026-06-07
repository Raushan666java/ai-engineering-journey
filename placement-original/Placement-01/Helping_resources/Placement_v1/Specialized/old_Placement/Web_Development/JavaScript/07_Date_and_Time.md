# 7. Date and Time in JavaScript

## Date Object
- JavaScript provides the built-in `Date` object for handling dates and times.
- Can represent any date and time from 1 January 1970 (UTC) to 31 December 275760.

## Creating Date Objects
- Current date and time:
```js
const now = new Date();
```
- Specific date and time:
```js
const birthday = new Date('1995-12-17T03:24:00');
const another = new Date(2025, 6, 18, 10, 30, 0); // (year, month-0, day, hour, min, sec)
```
- From timestamp (milliseconds since 1970-01-01):
```js
const fromTimestamp = new Date(1626600000000);
```

## Getting Date and Time Components
- `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`
- `getTime()` (timestamp in ms)
- Example:
```js
const d = new Date();
console.log(d.getFullYear()); // 2025
console.log(d.getMonth());    // 0-11 (Jan=0)
```

## Setting Date and Time Components
- `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, `setMinutes()`, `setSeconds()`, `setMilliseconds()`
- Example:
```js
d.setFullYear(2030);
d.setMonth(0); // January
```

## Formatting Dates
- `toDateString()`, `toTimeString()`, `toLocaleDateString()`, `toLocaleTimeString()`, `toISOString()`
- Example:
```js
console.log(d.toLocaleDateString());
console.log(d.toISOString());
```

## Parsing Dates
- `Date.parse('2025-07-18')` returns timestamp (ms)

## Working with Timezones
- JavaScript `Date` uses the browser's local timezone by default.
- Use `toUTCString()`, `getTimezoneOffset()` for UTC and timezone info.

## Common Pitfalls
- Months are 0-indexed (0 = January, 11 = December).
- Date parsing can be inconsistent across browsers—prefer ISO format.

---

## Best Learning Methods for Date and Time
- **Practice:** Create, format, and manipulate dates in code.
- **Mini-Projects:** Build a digital clock, countdown timer, or calendar app.
- **Flashcards:** Memorize key methods and their use-cases.
- **Visualization:** Draw timelines to understand date manipulations.
- **Solve Problems:** Use coding platforms for date/time challenges.
- **Teach Back:** Explain concepts to someone else or write blog posts.

---

Type "next" to get detailed notes for the next topic: Error Handling.
