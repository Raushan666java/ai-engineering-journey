# 3. jQuery DOM Manipulation

## Getting and Setting Content
- `.text()`: Get or set the text content of elements.
- `.html()`: Get or set the HTML content.
- `.val()`: Get or set the value of form elements.

## Adding, Removing, and Replacing Elements
- `.append(content)`: Add content to the end of each element.
- `.prepend(content)`: Add content to the beginning.
- `.after(content)`, `.before(content)`: Insert content after/before elements.
- `.remove()`: Remove elements from the DOM.
- `.empty()`: Remove all child nodes.
- `.replaceWith(content)`: Replace elements with new content.

## Modifying Attributes and Properties
- `.attr(name, value)`: Get or set attribute value.
- `.removeAttr(name)`: Remove attribute.
- `.prop(name, value)`: Get or set property value.

## Manipulating CSS Classes and Styles
- `.addClass(class)`, `.removeClass(class)`, `.toggleClass(class)`: Manage classes.
- `.css(property, value)`: Get or set CSS properties.

## Traversing the DOM
- `.parent()`, `.parents()`: Get parent elements.
- `.children()`: Get direct children.
- `.siblings()`: Get siblings.
- `.closest(selector)`: Get the first ancestor matching selector.
- `.find(selector)`: Get descendants matching selector.
- `.next()`, `.prev()`: Get next/previous sibling.

## Examples
```js
// Set text of all paragraphs
$('p').text('Hello!');
// Add a new item to a list
$('ul').append('<li>New Item</li>');
// Remove all divs with class 'ad'
$('div.ad').remove();
// Add a class to all buttons
$('button').addClass('active');
// Find all inputs inside a form
$('form').find('input');
```

## Best Learning Methods
- **Practice:** Manipulate elements in a sample HTML page.
- **Mini-Projects:** Build a dynamic list, todo app, or form handler.
- **Experiment:** Try chaining multiple DOM methods.
- **Read Docs:** Explore the [jQuery DOM documentation](https://api.jquery.com/category/manipulation/).

---

Type "next" to get the syllabus and notes for the next topic: Events.
