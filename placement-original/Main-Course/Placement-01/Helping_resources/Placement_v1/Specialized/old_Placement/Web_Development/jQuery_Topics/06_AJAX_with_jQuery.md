# AJAX with jQuery

## AJAX Methods in jQuery
- `$.ajax(options)`: Most flexible, full control over AJAX requests.
- `$.get(url, data, callback, type)`: Simple GET request.
- `$.post(url, data, callback, type)`: Simple POST request.
- `.load(url, data, callback)`: Load data from server and place into element.

## Sending and Receiving Data
- Send and receive data in JSON, HTML, XML, or text formats.
- Use `dataType` option to specify expected response type.

## Handling Responses and Errors
- `success`: Callback for successful response.
- `error`: Callback for errors (network, server, etc.).
- `complete`: Callback after request finishes (success or error).

## Loading External Content
- `.load()`: Load HTML from a URL and inject into selected element.
```js
$('#result').load('/snippet.html');
```

## AJAX Events
- `beforeSend`: Called before request is sent.
- `success`: Called on successful response.
- `error`: Called on error.
- `complete`: Called after request finishes.

## Example: Basic AJAX Request
```js
$.ajax({
  url: '/api/data',
  method: 'GET',
  dataType: 'json',
  beforeSend: function() { $('#loader').show(); },
  success: function(data) { $('#result').html(data.message); },
  error: function(xhr) { alert('Error: ' + xhr.status); },
  complete: function() { $('#loader').hide(); }
});
```