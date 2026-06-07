# 💾 JavaScript Local Storage

## Basic Operations
```javascript
// Store data
localStorage.setItem('username', 'john_doe');
localStorage.setItem('preferences', JSON.stringify({theme: 'dark', lang: 'en'}));

// Retrieve data
const username = localStorage.getItem('username');
const preferences = JSON.parse(localStorage.getItem('preferences') || '{}');

// Remove data
localStorage.removeItem('username');

// Clear all data
localStorage.clear();

// Check if key exists
if (localStorage.getItem('username') !== null) {
    console.log('Username exists');
}
```

## Storage Manager Class
```javascript
class StorageManager {
    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
    
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Parse error:', e);
            return defaultValue;
        }
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
    
    static clear() {
        localStorage.clear();
    }
    
    static exists(key) {
        return localStorage.getItem(key) !== null;
    }
    
    static size() {
        return localStorage.length;
    }
    
    static keys() {
        return Object.keys(localStorage);
    }
}
```

## Session Storage
```javascript
// Similar to localStorage but session-scoped
sessionStorage.setItem('tempData', 'session value');
const tempData = sessionStorage.getItem('tempData');
sessionStorage.removeItem('tempData');
sessionStorage.clear();
```