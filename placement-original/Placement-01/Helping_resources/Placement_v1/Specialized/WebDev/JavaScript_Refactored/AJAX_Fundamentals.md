# AJAX Fundamentals

## Learning Objectives
After completing this section, you will be able to:
- Understand what AJAX is and how it works
- Create and send asynchronous HTTP requests
- Work with different data formats (JSON, XML, text)
- Handle responses and errors in AJAX requests
- Implement practical AJAX applications

## What is AJAX?

AJAX (Asynchronous JavaScript and XML) is a set of web development techniques that allows web applications to send and receive data from a server asynchronously, without interfering with the display and behavior of the existing page.

### Key Characteristics of AJAX

- **Asynchronous**: Requests don't block the execution of other JavaScript code
- **Background Communication**: Data is exchanged with the server without page reloads
- **Dynamic Updates**: Page content can be updated dynamically with new data
- **Better User Experience**: Applications feel more responsive and interactive

### How AJAX Works

1. An event occurs in a web page (button click, page load, etc.)
2. JavaScript creates an XMLHttpRequest object or uses the Fetch API
3. The request is sent to a server
4. The server processes the request
5. The server sends a response back
6. JavaScript processes the response
7. Page content is updated based on the response

## Making AJAX Requests

There are three main ways to make AJAX requests in modern JavaScript:

### 1. XMLHttpRequest (XHR)

The original method for making AJAX requests, still widely supported:

```javascript
// Creating an XHR request
function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    // Configure the request
    xhr.open(method, url);
    
    // Set headers if needed
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Handle response
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    
    // Handle network errors
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: 'Network Error'
      });
    };
    
    // Send the request
    if (data) {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
}

// Usage
makeRequest('https://api.example.com/data')
  .then(response => {
    console.log('Success:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### 2. Fetch API

A modern, promise-based API for making HTTP requests:

```javascript
// Basic GET request
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// POST request with data
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
```

### 3. Axios (Third-party library)

A popular HTTP client library that simplifies AJAX requests:

```javascript
// Basic GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// POST request with data
axios.post('https://api.example.com/submit', {
  name: 'John Doe',
  email: 'john@example.com'
})
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## HTTP Methods

AJAX requests can use different HTTP methods depending on the operation:

- **GET**: Retrieve data from the server
- **POST**: Send data to create a new resource
- **PUT**: Update an existing resource
- **DELETE**: Remove a resource
- **PATCH**: Partially update a resource

```javascript
// Example of different HTTP methods with Fetch API

// GET request
fetch('https://api.example.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data));

// POST request
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
})
  .then(response => response.json())
  .then(data => console.log(data));

// PUT request
fetch('https://api.example.com/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Updated', email: 'john@example.com' })
})
  .then(response => response.json())
  .then(data => console.log(data));

// DELETE request
fetch('https://api.example.com/users/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Working with Different Data Formats

### JSON (JavaScript Object Notation)

The most common data format for modern web APIs:

```javascript
// Sending JSON data
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30,
    isActive: true
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// Receiving and parsing JSON data
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    console.log(data.name);
    console.log(data.age);
  });
```

### XML (eXtensible Markup Language)

An older but still used format in some systems:

```javascript
// Receiving and parsing XML data
fetch('https://api.example.com/data-xml')
  .then(response => response.text())
  .then(str => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(str, 'text/xml');
    
    // Access XML elements
    const name = xmlDoc.getElementsByTagName('name')[0].textContent;
    const age = xmlDoc.getElementsByTagName('age')[0].textContent;
    
    console.log(name, age);
  });
```

### FormData

For sending form data, especially with file uploads:

```javascript
// Creating and sending FormData
const formData = new FormData();
formData.append('username', 'john_doe');
formData.append('avatar', fileInput.files[0]);

fetch('https://api.example.com/upload', {
  method: 'POST',
  body: formData
  // Note: Don't set Content-Type header when using FormData
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### Plain Text

For simple text responses:

```javascript
fetch('https://api.example.com/text-data')
  .then(response => response.text())
  .then(text => console.log(text));
```

## Error Handling

Proper error handling is crucial for robust AJAX applications:

### With Fetch API

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error (show message to user, retry, etc.)
  })
  .finally(() => {
    // Code that runs regardless of success or failure
    console.log('Request completed');
  });
```

### With async/await

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  } finally {
    // Code that runs regardless of success or failure
    console.log('Request completed');
  }
}

fetchData();
```

## AJAX with jQuery

jQuery provides simplified methods for AJAX requests:

```javascript
// Basic GET request
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log('Success:', data);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});

// Shorthand methods
$.get('https://api.example.com/data', function(data) {
  console.log(data);
});

$.post('https://api.example.com/submit', {
  name: 'John',
  email: 'john@example.com'
}, function(data) {
  console.log(data);
});

// Promise-based syntax
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET'
})
  .done(function(data) {
    console.log('Success:', data);
  })
  .fail(function(xhr, status, error) {
    console.error('Error:', error);
  })
  .always(function() {
    console.log('Request completed');
  });
```

## Cross-Origin Resource Sharing (CORS)

CORS is a security feature that restricts cross-origin HTTP requests:

### CORS Issues and Solutions

```javascript
// Request to another domain may be blocked by CORS
fetch('https://different-domain.com/api/data')
  .then(response => response.json())
  .catch(error => {
    console.error('CORS error:', error);
  });

// Solutions:
// 1. Server-side: The server needs to include proper CORS headers
// 2. Proxy: Use a server-side proxy to make the request
// 3. JSONP: For GET requests only (older method)
```

### JSONP (JSON with Padding)

An older technique to bypass same-origin policy for GET requests:

```javascript
function handleResponse(data) {
  console.log('JSONP data:', data);
}

// Create a script element that loads data from another domain
const script = document.createElement('script');
script.src = 'https://different-domain.com/api/data?callback=handleResponse';
document.body.appendChild(script);
```

## Practical AJAX Applications

### 1. Loading Content Dynamically

```javascript
// Load content when a button is clicked
document.getElementById('loadButton').addEventListener('click', function() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '<p>Loading...</p>';
  
  fetch('https://api.example.com/articles')
    .then(response => response.json())
    .then(articles => {
      let html = '';
      articles.forEach(article => {
        html += `
          <div class="article">
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <a href="article.html?id=${article.id}">Read more</a>
          </div>
        `;
      });
      contentDiv.innerHTML = html;
    })
    .catch(error => {
      contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
    });
});
```

### 2. Form Submission without Page Reload

```javascript
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent normal form submission
  
  const form = this;
  const statusDiv = document.getElementById('formStatus');
  statusDiv.textContent = 'Sending...';
  
  // Collect form data
  const formData = new FormData(form);
  
  fetch('https://api.example.com/contact', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        statusDiv.textContent = 'Message sent successfully!';
        form.reset(); // Clear the form
      } else {
        statusDiv.textContent = `Error: ${data.message}`;
      }
    })
    .catch(error => {
      statusDiv.textContent = `Error: ${error.message}`;
    });
});
```

### 3. Live Search with Autocomplete

```javascript
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('searchResults');
let timeoutId;

searchInput.addEventListener('input', function() {
  const query = this.value.trim();
  
  // Clear previous timeout
  clearTimeout(timeoutId);
  
  if (query.length < 2) {
    resultsDiv.innerHTML = '';
    return;
  }
  
  // Add a small delay to avoid making too many requests
  timeoutId = setTimeout(() => {
    resultsDiv.innerHTML = '<p>Searching...</p>';
    
    fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(results => {
        if (results.length === 0) {
          resultsDiv.innerHTML = '<p>No results found</p>';
          return;
        }
        
        let html = '<ul>';
        results.forEach(item => {
          html += `<li><a href="${item.url}">${item.title}</a></li>`;
        });
        html += '</ul>';
        
        resultsDiv.innerHTML = html;
      })
      .catch(error => {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }, 300);
});
```

### 4. Infinite Scroll

```javascript
let page = 1;
const contentDiv = document.getElementById('content');
let isLoading = false;
let hasMoreData = true;

// Function to load more content
function loadMoreContent() {
  if (isLoading || !hasMoreData) return;
  
  isLoading = true;
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading';
  loadingIndicator.textContent = 'Loading more items...';
  contentDiv.appendChild(loadingIndicator);
  
  fetch(`https://api.example.com/items?page=${page}`)
    .then(response => response.json())
    .then(data => {
      // Remove loading indicator
      contentDiv.removeChild(loadingIndicator);
      
      if (data.items.length === 0) {
        hasMoreData = false;
        const endMessage = document.createElement('p');
        endMessage.textContent = 'No more items to load';
        contentDiv.appendChild(endMessage);
        return;
      }
      
      // Append new items
      data.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        contentDiv.appendChild(itemDiv);
      });
      
      page++;
      isLoading = false;
    })
    .catch(error => {
      console.error('Error:', error);
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error';
      errorDiv.textContent = `Error loading content: ${error.message}`;
      contentDiv.appendChild(errorDiv);
      contentDiv.removeChild(loadingIndicator);
      isLoading = false;
    });
}

// Initial load
loadMoreContent();

// Load more content when scrolling near the bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadMoreContent();
  }
});
```

### 5. Real-time Updates with Polling

```javascript
let latestId = 0;
const messagesDiv = document.getElementById('messages');

// Function to fetch new messages
function fetchNewMessages() {
  fetch(`https://api.example.com/messages?since=${latestId}`)
    .then(response => response.json())
    .then(data => {
      if (data.messages.length > 0) {
        // Update latest message ID
        latestId = data.messages[data.messages.length - 1].id;
        
        // Append new messages
        data.messages.forEach(message => {
          const messageDiv = document.createElement('div');
          messageDiv.className = 'message';
          messageDiv.innerHTML = `
            <strong>${message.user}:</strong> ${message.text}
            <span class="time">${new Date(message.timestamp).toLocaleTimeString()}</span>
          `;
          messagesDiv.appendChild(messageDiv);
          
          // Scroll to bottom
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
      }
    })
    .catch(error => {
      console.error('Error fetching messages:', error);
    })
    .finally(() => {
      // Poll again after a delay
      setTimeout(fetchNewMessages, 5000);
    });
}

// Start polling
fetchNewMessages();
```

## Review Questions

1. **What is AJAX and why is it important for web applications?**
   - How does AJAX differ from traditional web page requests?
   - What are the advantages of using AJAX?
   - What are some common use cases for AJAX?

2. **Compare and contrast XMLHttpRequest, Fetch API, and jQuery AJAX methods.**
   - What are the advantages and disadvantages of each approach?
   - When would you choose one over the others?
   - How has AJAX evolved over time?

3. **How do you handle errors in AJAX requests?**
   - What types of errors can occur in AJAX requests?
   - How do you implement proper error handling?
   - What are best practices for providing feedback to users?

## Exercises

1. **Basic AJAX Request**
   - Create a simple web page that loads data from a public API
   - Display the data in a formatted way on the page
   - Implement loading indicators and error handling

2. **AJAX Form Submission**
   - Create a form that submits data via AJAX
   - Validate the form data before submission
   - Display success or error messages to the user
   - Reset the form after successful submission

3. **Advanced AJAX Application**
   - Build a mini application that uses multiple AJAX requests
   - Implement features like filtering, sorting, or pagination
   - Use proper error handling and loading states
   - Optimize the application for performance

## Additional Resources

- [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [jQuery AJAX Documentation](https://api.jquery.com/jquery.ajax/)
- [Axios Documentation](https://axios-http.com/docs/intro)

## Next Steps
After mastering AJAX fundamentals, you'll be ready to explore more advanced topics like WebSockets for real-time communication, or dive deeper into building full-featured applications with frameworks like React, Vue, or Angular.