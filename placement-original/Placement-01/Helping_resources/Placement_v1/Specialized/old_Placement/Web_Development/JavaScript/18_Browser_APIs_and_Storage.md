# 18. Browser APIs and Storage in JavaScript

## What are Browser APIs?
- Browser APIs are built-in interfaces provided by browsers to interact with the environment, user, and device.
- They allow JavaScript to access and manipulate browser features beyond the DOM.

## Common Browser APIs

### 1. Fetch API
- Used for making network requests (AJAX, REST APIs).
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```
- Supports Promises and async/await.

### 2. Storage APIs
- **LocalStorage:** Stores key-value pairs in the browser with no expiration.
```js
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
```
- **SessionStorage:** Similar to LocalStorage, but data is cleared when the session ends.
- **Cookies:** Small pieces of data stored in the browser, sent with every HTTP request.
```js
document.cookie = 'username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT';
```
- **IndexedDB:** Low-level API for storing large amounts of structured data.

### 3. Other Useful APIs
- **Geolocation API:** Get user's location.
- **History API:** Manipulate browser history.
- **Web Storage API:** Unified interface for LocalStorage and SessionStorage.
- **Notification API:** Show desktop notifications.
- **Clipboard API:** Read/write to the clipboard.
- **File API:** Read files from user input.

## Example: Using LocalStorage
```js
// Save data
data = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(data));
// Retrieve data
const user = JSON.parse(localStorage.getItem('user'));
```

## Best Practices for Browser APIs and Storage
- Always check for API support (`if ('geolocation' in navigator) { ... }`).
- Handle errors and permissions gracefully.
- Avoid storing sensitive data in LocalStorage or cookies.
- Use IndexedDB for large or complex data.

## Best Learning Methods
- **Practice:** Build small apps using LocalStorage, Fetch, and other APIs.
- **Mini-Projects:** Create a notes app, todo list, or weather app using browser APIs.
- **Experiment:** Try out different APIs in the browser console.
- **Read Docs:** Refer to MDN Web Docs for up-to-date API information.
- **Teach Back:** Explain how browser storage and APIs work to others.

---

Type "next" to get notes for Frameworks, Libraries, and Ecosystem, or specify another topic.
