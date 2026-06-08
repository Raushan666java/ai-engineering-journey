# 📄 JavaScript JSON

## JSON Basics
```javascript
// JSON.stringify() - Convert to JSON string
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "coding"]
};

const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30,"city":"New York","hobbies":["reading","coding"]}'

// JSON.parse() - Parse JSON string
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // {name: "John", age: 30, city: "New York", hobbies: ["reading", "coding"]}
```

## JSON with Replacer/Reviver
```javascript
// Stringify with replacer function
const data = {
    name: "John",
    password: "secret123",
    age: 30
};

const jsonWithReplacer = JSON.stringify(data, (key, value) => {
    if (key === 'password') return undefined; // Exclude password
    return value;
});

// Parse with reviver function
const jsonString = '{"name":"John","birthDate":"2023-01-01"}';
const parsed = JSON.parse(jsonString, (key, value) => {
    if (key === 'birthDate') return new Date(value);
    return value;
});
```

## JSON Validation
```javascript
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

// Safe JSON parsing
function safeJSONParse(str, defaultValue = null) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.error('Invalid JSON:', e.message);
        return defaultValue;
    }
}
```