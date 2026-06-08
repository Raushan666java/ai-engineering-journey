# ⚡ JavaScript Events

## Event Handling Methods
```javascript
// Method 1: HTML attribute
// <button onclick="handleClick()">Click me</button>

// Method 2: DOM property
let button = document.getElementById('myButton');
button.onclick = function() {
    console.log('Button clicked!');
};

// Method 3: addEventListener (recommended)
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event);
});

// Arrow function event handler
button.addEventListener('click', (event) => {
    console.log('Arrow function handler');
});
```

## Event Object
```javascript
button.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Mouse coordinates:', event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
});
```

## Common Events
```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mousedown', handler);
element.addEventListener('mouseup', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
element.addEventListener('mousemove', handler);

// Keyboard events
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('keypress', handler);

// Form events
form.addEventListener('submit', handler);
input.addEventListener('change', handler);
input.addEventListener('input', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

## Event Delegation
```javascript
// Instead of adding event listeners to each item
let list = document.getElementById('myList');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// This works for dynamically added items too
let newItem = document.createElement('li');
newItem.textContent = 'New item';
list.appendChild(newItem); // Will also respond to clicks
```

## Custom Events
```javascript
// Create custom event
let customEvent = new CustomEvent('myCustomEvent', {
    detail: {
        message: 'Hello from custom event!',
        timestamp: Date.now()
    }
});

// Listen for custom event
element.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event received:', event.detail);
});

// Dispatch custom event
element.dispatchEvent(customEvent);
```

## Event Bubbling and Capturing
```javascript
// Event bubbling (default)
element.addEventListener('click', handler, false);

// Event capturing
element.addEventListener('click', handler, true);

// Stop propagation
function handler(event) {
    event.stopPropagation(); // Stops bubbling/capturing
    event.stopImmediatePropagation(); // Stops other listeners on same element
}
```

## Removing Event Listeners
```javascript
function myHandler(event) {
    console.log('Event handled');
}

// Add listener
element.addEventListener('click', myHandler);

// Remove listener (must use same function reference)
element.removeEventListener('click', myHandler);
```