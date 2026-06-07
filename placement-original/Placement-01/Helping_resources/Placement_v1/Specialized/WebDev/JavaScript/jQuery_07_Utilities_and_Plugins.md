# 7. jQuery Utilities and Plugins

## Utility Methods
- `.each()`: Iterate over a jQuery collection or array.
- `.map()`: Transform a collection or array and return a new array.
- `$.extend(target, object1, object2, ...)`: Merge objects (shallow copy).
- `$.grep(array, function)`: Filter array elements.
- `$.inArray(value, array)`: Check if value exists in array (returns index or -1).

## Using Plugins
- Plugins extend jQuery with new methods or widgets.
- To use a plugin:
  1. Download or link the plugin script after jQuery in your HTML.
  2. Call the plugin method on a jQuery object.
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/path/to/jquery.plugin.js"></script>
<script>
  $('#element').pluginName(options);
</script>
```

## Creating Plugins
- Add methods to `$.fn` to create your own plugins.
```js
$.fn.highlight = function(color) {
  this.css('background', color);
  return this;
};
$('p').highlight('yellow');
```

## jQuery UI Basics
- jQuery UI is a set of user interface interactions, effects, widgets, and themes built on top of jQuery.
- Common widgets: `draggable`, `sortable`, `datepicker`, `accordion`, `dialog`.
```js
$('#item').draggable();
$('#list').sortable();
$('#date').datepicker();
```
- Include jQuery UI CSS and JS files in your project.

## Best Learning Methods
- **Practice:** Use utility methods to manipulate arrays and objects.
- **Mini-Projects:** Add a jQuery UI widget to a sample page.
- **Experiment:** Write your own simple plugin.
- **Read Docs:** Explore the [jQuery utility documentation](https://api.jquery.com/category/utilities/) and [jQuery UI docs](https://jqueryui.com/).

---

Type "next" to get the syllabus and notes for the next topic: Best Practices.
