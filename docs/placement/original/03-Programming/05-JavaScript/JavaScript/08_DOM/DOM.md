# 🌐 JavaScript DOM Manipulation

## Selecting Elements
```javascript
// By ID
let element = document.getElementById('myId');

// By class name
let elements = document.getElementsByClassName('myClass');

// By tag name
let paragraphs = document.getElementsByTagName('p');

// Query selector (CSS selectors)
let firstElement = document.querySelector('.myClass');
let allElements = document.querySelectorAll('.myClass');

// Advanced selectors
let specificElement = document.querySelector('div.container > p:first-child');
```

## Modifying Elements
```javascript
let element = document.getElementById('myElement');

// Content modification
element.innerHTML = '<strong>New HTML content</strong>';
element.textContent = 'New text content';
element.innerText = 'New inner text';

// Attribute manipulation
element.setAttribute('class', 'newClass');
element.getAttribute('class');
element.removeAttribute('class');
element.hasAttribute('class');

// Style manipulation
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '16px';

// Class manipulation
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
element.classList.contains('active');
```

## Creating and Inserting Elements
```javascript
// Create elements
let newDiv = document.createElement('div');
let newText = document.createTextNode('Hello World');

// Set properties
newDiv.textContent = 'New div content';
newDiv.className = 'new-div';

// Insert elements
let container = document.getElementById('container');
container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);

// Insert adjacent HTML
element.insertAdjacentHTML('beforebegin', '<p>Before element</p>');
element.insertAdjacentHTML('afterbegin', '<p>At start of element</p>');
element.insertAdjacentHTML('beforeend', '<p>At end of element</p>');
element.insertAdjacentHTML('afterend', '<p>After element</p>');
```

## Removing Elements
```javascript
let element = document.getElementById('myElement');

// Remove element
element.remove();

// Remove child
let parent = document.getElementById('parent');
let child = document.getElementById('child');
parent.removeChild(child);

// Clear all children
parent.innerHTML = '';
```

## Traversing the DOM
```javascript
let element = document.getElementById('myElement');

// Parent navigation
let parent = element.parentNode;
let parentElement = element.parentElement;

// Child navigation
let children = element.children;
let childNodes = element.childNodes;
let firstChild = element.firstElementChild;
let lastChild = element.lastElementChild;

// Sibling navigation
let nextSibling = element.nextElementSibling;
let prevSibling = element.previousElementSibling;
```

## Form Manipulation
```javascript
let form = document.getElementById('myForm');
let input = document.getElementById('myInput');

// Get form data
let formData = new FormData(form);
let inputValue = input.value;

// Set form data
input.value = 'New value';
input.checked = true; // For checkboxes/radio

// Form validation
input.setCustomValidity('Custom error message');
input.reportValidity();
```