# ⏰ JavaScript Asynchronous Programming

## Callbacks
```javascript
// Basic callback
function fetchData(callback) {
    setTimeout(() => {
        let data = {id: 1, name: 'John'};
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});

// Callback hell example
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});
```

## Promises
```javascript
// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve('Operation successful!');
        } else {
            reject('Operation failed!');
        }
    }, 1000);
});

// Using Promise
myPromise
    .then(result => {
        console.log(result);
        return 'Next step';
    })
    .then(nextResult => {
        console.log(nextResult);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise completed');
    });
```

## Async/Await
```javascript
// Async function
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Using async function
async function main() {
    try {
        let data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

main();
```

## Promise Methods
```javascript
// Promise.all() - Wait for all promises
let promise1 = fetch('/api/data1');
let promise2 = fetch('/api/data2');
let promise3 = fetch('/api/data3');

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        console.log('All requests completed');
        return Promise.all(responses.map(r => r.json()));
    })
    .then(data => {
        console.log('All data:', data);
    });

// Promise.race() - First to complete
Promise.race([promise1, promise2, promise3])
    .then(firstResponse => {
        console.log('First response:', firstResponse);
    });

// Promise.allSettled() - Wait for all, regardless of outcome
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} fulfilled:`, result.value);
            } else {
                console.log(`Promise ${index} rejected:`, result.reason);
            }
        });
    });
```

## Fetch API
```javascript
// GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'New Post',
        body: 'This is the post content',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log('Success:', data));

// Async/await with fetch
async function fetchPost(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let post = await response.json();
        return post;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

## Timers
```javascript
// setTimeout - Execute once after delay
let timeoutId = setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

// Clear timeout
clearTimeout(timeoutId);

// setInterval - Execute repeatedly
let intervalId = setInterval(() => {
    console.log('Executed every second');
}, 1000);

// Clear interval
clearInterval(intervalId);

// Async with setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log('Start');
    await delay(2000);
    console.log('After 2 seconds');
}
```

## Error Handling in Async Code
```javascript
// Promise error handling
function fetchWithErrorHandling(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.log('Fetch error:', error.message);
            throw error; // Re-throw if needed
        });
}

// Async/await error handling
async function fetchUserData(userId) {
    try {
        let response = await fetch(`/api/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`User not found: ${response.status}`);
        }
        
        let userData = await response.json();
        return userData;
    } catch (error) {
        console.log('Failed to fetch user:', error.message);
        return null;
    }
}
```