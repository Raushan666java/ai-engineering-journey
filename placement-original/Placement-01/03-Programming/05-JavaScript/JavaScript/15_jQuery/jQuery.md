# 💎 jQuery Complete Guide

## jQuery Setup
```html
<!-- CDN -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Local -->
<script src="jquery-3.6.0.min.js"></script>

<script>
$(document).ready(function() {
    // jQuery code here
});

// Shorthand
$(function() {
    // jQuery code here
});
</script>
```

## Selectors
```javascript
// Basic selectors
$('#myId')              // ID selector
$('.myClass')           // Class selector
$('p')                  // Element selector
$('*')                  // Universal selector

// Attribute selectors
$('[name="email"]')     // Attribute equals
$('[name*="mail"]')     // Attribute contains
$('[name^="user"]')     // Attribute starts with
$('[name$="name"]')     // Attribute ends with

// Pseudo selectors
$('p:first')            // First paragraph
$('p:last')             // Last paragraph
$('p:even')             // Even paragraphs
$('p:odd')              // Odd paragraphs
$('input:checked')      // Checked inputs
$('input:disabled')     // Disabled inputs

// Hierarchy selectors
$('div p')              // Descendant
$('div > p')            // Direct child
$('h2 + p')             // Adjacent sibling
$('h2 ~ p')             // General sibling
```

## DOM Manipulation
```javascript
// Content manipulation
$('#myDiv').html('<p>New HTML content</p>');
$('#myDiv').text('New text content');
$('#myDiv').val('New input value');

// Attribute manipulation
$('#myImg').attr('src', 'new-image.jpg');
$('#myImg').removeAttr('alt');
$('#myDiv').prop('checked', true);

// CSS manipulation
$('#myDiv').css('color', 'red');
$('#myDiv').css({
    'background-color': 'blue',
    'font-size': '16px'
});

// Class manipulation
$('#myDiv').addClass('active');
$('#myDiv').removeClass('inactive');
$('#myDiv').toggleClass('highlight');
$('#myDiv').hasClass('active');
```

## Effects and Animations
```javascript
// Basic effects
$('#myDiv').show();
$('#myDiv').hide();
$('#myDiv').toggle();

// Fading effects
$('#myDiv').fadeIn();
$('#myDiv').fadeOut();
$('#myDiv').fadeToggle();
$('#myDiv').fadeTo(1000, 0.5); // Duration, opacity

// Sliding effects
$('#myDiv').slideDown();
$('#myDiv').slideUp();
$('#myDiv').slideToggle();

// Custom animations
$('#myDiv').animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
}, 1000);

// Animation queue
$('#myDiv')
    .animate({left: '100px'}, 1000)
    .animate({top: '100px'}, 1000)
    .animate({left: '0px'}, 1000)
    .animate({top: '0px'}, 1000);
```

## Event Handling
```javascript
// Click event
$('#myButton').click(function() {
    alert('Button clicked!');
});

// Multiple events
$('#myInput').on('focus blur', function() {
    $(this).toggleClass('active');
});

// Event delegation
$(document).on('click', '.dynamic-button', function() {
    console.log('Dynamic button clicked');
});

// Custom events
$('#myDiv').on('customEvent', function(event, data) {
    console.log('Custom event triggered:', data);
});

$('#myDiv').trigger('customEvent', ['Hello World']);

// Event object
$('#myButton').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
});
```

## AJAX with jQuery
```javascript
// GET request
$.get('https://jsonplaceholder.typicode.com/posts/1', function(data) {
    console.log('Data received:', data);
});

// POST request
$.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New Post',
    body: 'Post content',
    userId: 1
}, function(data) {
    console.log('Post created:', data);
});

// AJAX method
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log('Success:', data);
    },
    error: function(xhr, status, error) {
        console.log('Error:', error);
    },
    complete: function() {
        console.log('Request completed');
    }
});

// JSON request
$.getJSON('https://jsonplaceholder.typicode.com/posts/1', function(data) {
    console.log('JSON data:', data);
});

// Load HTML content
$('#content').load('page.html');
```

## Form Handling
```javascript
// Form submission
$('#myForm').submit(function(event) {
    event.preventDefault();
    
    // Serialize form data
    const formData = $(this).serialize();
    console.log('Form data:', formData);
    
    // Serialize as object
    const formObject = $(this).serializeArray();
    console.log('Form object:', formObject);
    
    // AJAX form submission
    $.post('/submit', formData, function(response) {
        console.log('Form submitted:', response);
    });
});

// Form validation
function validateForm() {
    let isValid = true;
    
    // Required fields
    $('input[required]').each(function() {
        if ($(this).val() === '') {
            $(this).addClass('error');
            isValid = false;
        } else {
            $(this).removeClass('error');
        }
    });
    
    // Email validation
    const email = $('#email').val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        $('#email').addClass('error');
        isValid = false;
    }
    
    return isValid;
}
```

## Utilities
```javascript
// Each iteration
$('li').each(function(index, element) {
    console.log(index + ': ' + $(element).text());
});

// Map function
const texts = $('li').map(function() {
    return $(this).text();
}).get();

// Filtering
$('li').filter('.active').css('color', 'red');
$('li').not('.inactive').show();

// Finding
$('#container').find('p').addClass('found');
$('p').parent().addClass('parent');
$('p').children().addClass('child');
$('p').siblings().addClass('sibling');

// Data attributes
$('#myDiv').data('user-id', 123);
const userId = $('#myDiv').data('user-id');
```

## jQuery Plugins
```javascript
// Creating a simple plugin
$.fn.highlight = function(options) {
    const settings = $.extend({
        color: 'yellow',
        duration: 1000
    }, options);
    
    return this.each(function() {
        $(this).css('background-color', settings.color)
               .delay(settings.duration)
               .queue(function() {
                   $(this).css('background-color', '').dequeue();
               });
    });
};

// Usage
$('p').highlight({color: 'lightblue', duration: 2000});

// Popular plugins examples
// Datepicker
$('#datepicker').datepicker();

// Slider
$('#slider').slider({
    min: 0,
    max: 100,
    value: 50
});

// Modal
$('#modal').dialog({
    width: 400,
    height: 300,
    modal: true
});
```

## Advanced jQuery
```javascript
// Deferred objects
function asyncOperation() {
    const deferred = $.Deferred();
    
    setTimeout(function() {
        if (Math.random() > 0.5) {
            deferred.resolve('Success!');
        } else {
            deferred.reject('Failed!');
        }
    }, 1000);
    
    return deferred.promise();
}

asyncOperation()
    .done(function(result) {
        console.log('Success:', result);
    })
    .fail(function(error) {
        console.log('Error:', error);
    });

// When - multiple promises
$.when(
    $.get('/api/users'),
    $.get('/api/posts'),
    $.get('/api/comments')
).done(function(users, posts, comments) {
    console.log('All requests completed');
});

// Custom selectors
$.expr[':'].contains = function(element, index, match) {
    return $(element).text().indexOf(match[3]) >= 0;
};

// Usage: $('p:contains("hello")')
```

## Practice Projects

### 1. Dynamic Todo List
```javascript
$(document).ready(function() {
    let todoId = 0;
    
    // Add todo
    $('#addTodo').click(function() {
        const todoText = $('#todoInput').val();
        if (todoText.trim() !== '') {
            const todoItem = $(`
                <li data-id="${todoId}">
                    <span class="todo-text">${todoText}</span>
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </li>
            `);
            
            $('#todoList').append(todoItem);
            $('#todoInput').val('');
            todoId++;
        }
    });
    
    // Complete todo
    $(document).on('click', '.complete-btn', function() {
        $(this).closest('li').toggleClass('completed');
    });
    
    // Delete todo
    $(document).on('click', '.delete-btn', function() {
        $(this).closest('li').fadeOut(300, function() {
            $(this).remove();
        });
    });
});
```

### 2. Image Gallery with Lightbox
```javascript
$(document).ready(function() {
    // Create lightbox
    const lightbox = $(`
        <div id="lightbox" style="display:none;">
            <div class="lightbox-content">
                <img id="lightbox-img" src="" alt="">
                <span class="close">&times;</span>
            </div>
        </div>
    `);
    
    $('body').append(lightbox);
    
    // Open lightbox
    $('.gallery img').click(function() {
        const imgSrc = $(this).attr('src');
        $('#lightbox-img').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });
    
    // Close lightbox
    $('.close, #lightbox').click(function() {
        $('#lightbox').fadeOut();
    });
    
    // Prevent closing when clicking on image
    $('#lightbox-img').click(function(e) {
        e.stopPropagation();
    });
});
```

### 3. AJAX Contact Form
```javascript
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Show loading
        $('#submitBtn').prop('disabled', true).text('Sending...');
        
        // Validate form
        if (!validateContactForm()) {
            $('#submitBtn').prop('disabled', false).text('Send Message');
            return;
        }
        
        // Submit form
        $.ajax({
            url: '/contact',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#contactForm')[0].reset();
                showMessage('Message sent successfully!', 'success');
            },
            error: function() {
                showMessage('Failed to send message. Please try again.', 'error');
            },
            complete: function() {
                $('#submitBtn').prop('disabled', false).text('Send Message');
            }
        });
    });
    
    function validateContactForm() {
        let isValid = true;
        
        // Clear previous errors
        $('.error').removeClass('error');
        
        // Validate required fields
        $('#contactForm input[required], #contactForm textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                $(this).addClass('error');
                isValid = false;
            }
        });
        
        // Validate email
        const email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email').addClass('error');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showMessage(message, type) {
        const messageDiv = $(`<div class="message ${type}">${message}</div>`);
        $('#contactForm').prepend(messageDiv);
        
        setTimeout(function() {
            messageDiv.fadeOut(function() {
                $(this).remove();
            });
        }, 3000);
    }
});
```