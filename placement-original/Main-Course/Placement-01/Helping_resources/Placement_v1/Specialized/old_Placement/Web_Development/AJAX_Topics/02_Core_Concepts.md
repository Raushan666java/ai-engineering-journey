# AJAX Core Concepts

## XMLHttpRequest Object
- Traditional way to make AJAX requests.
- Example:
```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true); // true for asynchronous
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```
- Properties: `readyState`, `status`, `responseText`, `responseXML`
- Methods: `open()`, `send()`, `setRequestHeader()`
- Events: `onreadystatechange`, `onload`, `onerror`

## The Fetch API
- Modern, promise-based API for making HTTP requests.
- Example:
```js
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
- Returns a Promise that resolves to the Response object.
- More concise and easier to use than XMLHttpRequest.

## Promises and async/await in AJAX
- Promises provide a cleaner way to handle asynchronous operations.
- async/await makes asynchronous code look synchronous.
- Example with async/await:
```js
async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Data Formats: JSON, XML, HTML, Text
- **JSON (JavaScript Object Notation):**
  - Lightweight, easy to read/write, and parse in JavaScript.
  - Example: `{"name": "John", "age": 30}`
  - Parse with `JSON.parse()`, stringify with `JSON.stringify()`.

- **XML (eXtensible Markup Language):**
  - More verbose than JSON, but structured and flexible.
  - Example: `<person><name>John</name><age>30</age></person>`
  - Parse with DOM methods or libraries.

- **HTML:**
  - Used when you need to insert pre-formatted HTML into the page.
  - Can be directly inserted into the DOM.

- **Text:**
  - Plain text responses for simple data.
  - No parsing required.