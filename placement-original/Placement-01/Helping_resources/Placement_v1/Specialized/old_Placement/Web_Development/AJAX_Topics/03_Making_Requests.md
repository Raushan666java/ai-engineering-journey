# Making AJAX Requests

## Creating and Sending GET, POST, PUT, DELETE Requests

### GET Request
- Used to retrieve data from the server.
```js
// Using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();

// Using Fetch API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

### POST Request
- Used to send data to the server to create/update a resource.
```js
// Using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 201) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send(JSON.stringify({ name: 'John', age: 30 }));

// Using Fetch API
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### PUT Request
- Used to update an existing resource.
```js
// Using Fetch API
fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 31 })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### DELETE Request
- Used to delete a resource.
```js
// Using Fetch API
fetch('https://api.example.com/data/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('Resource deleted successfully');
    }
  });
```

## Setting Request Headers
```js
// Using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.setRequestHeader('Authorization', 'Bearer token123');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

// Using Fetch API
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Handling Responses and Status Codes
```js
fetch('https://api.example.com/data')
  .then(response => {
    // Check status code
    if (response.ok) { // status in the range 200-299
      return response.json();
    } else if (response.status === 404) {
      throw new Error('Resource not found');
    } else if (response.status === 401) {
      throw new Error('Unauthorized');
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Error Handling
```js
// Using try/catch with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle error (show user message, retry, etc.)
  }
}
```