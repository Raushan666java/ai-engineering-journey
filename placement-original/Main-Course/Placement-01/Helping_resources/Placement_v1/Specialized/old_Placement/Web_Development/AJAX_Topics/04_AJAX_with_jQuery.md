# AJAX with jQuery

## jQuery AJAX Methods

### $.ajax()
- Most flexible and customizable method.
```js
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});
```

### $.get()
- Simplified method for GET requests.
```js
$.get('https://api.example.com/data', function(data) {
  console.log(data);
});

// With data parameters
$.get('https://api.example.com/data', { id: 123 }, function(data) {
  console.log(data);
}, 'json');
```

### $.post()
- Simplified method for POST requests.
```js
$.post('https://api.example.com/data',
  { name: 'John', age: 30 },
  function(data) {
    console.log(data);
  },
  'json'
);
```

## Handling Responses and Errors

### Success and Error Callbacks
```js
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  success: function(data, status, xhr) {
    console.log('Data:', data);
    console.log('Status:', status);
    console.log('XHR object:', xhr);
  },
  error: function(xhr, status, error) {
    console.error('XHR object:', xhr);
    console.error('Status:', status);
    console.error('Error:', error);
  }
});
```

### Promise-based Approach
```js
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

## Loading External Content

### .load() Method
- Loads HTML from the server and puts it into the selected element.
```js
$('#result').load('page.html');

// Load a specific part of the page
$('#result').load('page.html #content');

// With callback
$('#result').load('page.html', function(response, status, xhr) {
  if (status === 'error') {
    console.error('Error loading page:', xhr.statusText);
  }
});
```

## AJAX Events

### Global AJAX Events
```js
// Show loading indicator before any AJAX request
$(document).ajaxStart(function() {
  $('#loading').show();
});

// Hide loading indicator after all AJAX requests complete
$(document).ajaxStop(function() {
  $('#loading').hide();
});

// Other global events:
// ajaxSend, ajaxSuccess, ajaxError, ajaxComplete
```

### Local AJAX Events
```js
$.ajax({
  url: 'https://api.example.com/data',
  beforeSend: function() {
    $('#loading').show();
  },
  complete: function() {
    $('#loading').hide();
  },
  success: function(data) {
    console.log(data);
  },
  error: function(xhr, status, error) {
    console.error(error);
  }
});
```