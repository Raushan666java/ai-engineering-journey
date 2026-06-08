# 🌐 JavaScript AJAX

## XMLHttpRequest
```javascript
// Basic AJAX GET request
function makeAjaxRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback(new Error(`HTTP ${xhr.status}`), null);
            }
        }
    };
    
    xhr.open('GET', url, true);
    xhr.send();
}

// Usage
makeAjaxRequest('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', JSON.parse(data));
    }
});
```

## AJAX POST Request
```javascript
function postData(url, data, callback) {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(null, xhr.responseText);
            } else {
                callback(new Error(`HTTP ${xhr.status}`), null);
            }
        }
    };
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

// Usage
const postData = {
    title: 'New Post',
    body: 'Post content',
    userId: 1
};

postData('https://jsonplaceholder.typicode.com/posts', postData, (error, response) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Response:', JSON.parse(response));
    }
});
```

## Fetch API (Modern AJAX)
```javascript
// GET request with Fetch
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// POST request with Fetch
async function postDataFetch(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Post error:', error);
        throw error;
    }
}
```

## AJAX with Promise
```javascript
function ajaxPromise(url, options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const method = options.method || 'GET';
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
                }
            }
        };
        
        xhr.open(method, url, true);
        
        if (options.headers) {
            Object.keys(options.headers).forEach(key => {
                xhr.setRequestHeader(key, options.headers[key]);
            });
        }
        
        xhr.send(options.body || null);
    });
}

// Usage
ajaxPromise('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(JSON.parse(data)))
    .catch(error => console.error(error));
```

## File Upload with AJAX
```javascript
function uploadFile(file, url) {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        
        const xhr = new XMLHttpRequest();
        
        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                console.log(`Upload progress: ${percentComplete}%`);
            }
        };
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(`Upload failed: ${xhr.status}`));
                }
            }
        };
        
        xhr.open('POST', url, true);
        xhr.send(formData);
    });
}

// Usage
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        uploadFile(file, '/upload')
            .then(response => console.log('Upload successful:', response))
            .catch(error => console.error('Upload failed:', error));
    }
});
```

## AJAX Error Handling
```javascript
function robustAjaxRequest(url, options = {}) {
    const maxRetries = options.maxRetries || 3;
    const timeout = options.timeout || 5000;
    
    function attemptRequest(retryCount = 0) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            
            // Set timeout
            xhr.timeout = timeout;
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.responseText);
                    } else if (retryCount < maxRetries) {
                        console.log(`Retrying request (${retryCount + 1}/${maxRetries})`);
                        setTimeout(() => {
                            attemptRequest(retryCount + 1)
                                .then(resolve)
                                .catch(reject);
                        }, 1000 * (retryCount + 1)); // Exponential backoff
                    } else {
                        reject(new Error(`HTTP ${xhr.status} after ${maxRetries} retries`));
                    }
                }
            };
            
            xhr.ontimeout = function() {
                if (retryCount < maxRetries) {
                    console.log(`Request timeout, retrying (${retryCount + 1}/${maxRetries})`);
                    attemptRequest(retryCount + 1)
                        .then(resolve)
                        .catch(reject);
                } else {
                    reject(new Error(`Request timeout after ${maxRetries} retries`));
                }
            };
            
            xhr.onerror = function() {
                reject(new Error('Network error'));
            };
            
            xhr.open(options.method || 'GET', url, true);
            xhr.send(options.body || null);
        });
    }
    
    return attemptRequest();
}
```

## CORS Handling
```javascript
// Simple CORS request
function corsRequest(url, options = {}) {
    return fetch(url, {
        method: options.method || 'GET',
        mode: 'cors',
        credentials: 'include', // Include cookies
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : null
    });
}

// JSONP for cross-origin requests (legacy)
function jsonp(url, callback) {
    const script = document.createElement('script');
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    window[callbackName] = function(data) {
        callback(data);
        document.head.removeChild(script);
        delete window[callbackName];
    };
    
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.head.appendChild(script);
}
```

## Practice Problems

### 1. Weather App
```javascript
async function getWeather(city) {
    const apiKey = 'your-api-key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return {
            city: data.name,
            temperature: Math.round(data.main.temp - 273.15), // Convert from Kelvin
            description: data.weather[0].description,
            humidity: data.main.humidity
        };
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
}
```

### 2. User Management System
```javascript
class UserAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async getUsers() {
        const response = await fetch(`${this.baseUrl}/users`);
        return response.json();
    }
    
    async getUser(id) {
        const response = await fetch(`${this.baseUrl}/users/${id}`);
        return response.json();
    }
    
    async createUser(userData) {
        const response = await fetch(`${this.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
    
    async updateUser(id, userData) {
        const response = await fetch(`${this.baseUrl}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
    
    async deleteUser(id) {
        const response = await fetch(`${this.baseUrl}/users/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}
```

### 3. Real-time Data Fetcher
```javascript
class RealTimeDataFetcher {
    constructor(url, interval = 5000) {
        this.url = url;
        this.interval = interval;
        this.isRunning = false;
        this.callbacks = [];
    }
    
    addCallback(callback) {
        this.callbacks.push(callback);
    }
    
    async fetchData() {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            
            this.callbacks.forEach(callback => callback(data));
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.fetchData(); // Initial fetch
        
        this.intervalId = setInterval(() => {
            this.fetchData();
        }, this.interval);
    }
    
    stop() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
```