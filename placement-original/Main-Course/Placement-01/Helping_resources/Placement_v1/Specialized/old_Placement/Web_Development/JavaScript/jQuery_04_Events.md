# 4. jQuery Events

## Binding and Unbinding Events
- `.on(event, handler)`: Attach an event handler.
- `.off(event, handler)`: Remove an event handler.
- Shorthand methods: `.click()`, `.dblclick()`, `.mouseenter()`, `.mouseleave()`, `.keyup()`, `.keydown()`, `.submit()`, etc.

## Common Events
- Mouse events: `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`, `mousemove`
- Keyboard events: `keydown`, `keyup`, `keypress`
- Form events: `submit`, `change`, `focus`, `blur`

## Event Delegation
- Attach a handler to a parent element to handle events for current and future child elements.
```js
$('ul').on('click', 'li', function() {
  alert($(this).text());
});
```
- Useful for dynamic content.

## Event Object and Event Methods
- The event handler receives an event object with info about the event.
- Common methods:
  - `event.preventDefault()`: Prevent default action (e.g., form submission).
  - `event.stopPropagation()`: Stop event from bubbling up the DOM.
  - `event.target`: The element that triggered the event.

## Examples
```js
// Click event
$('#btn').on('click', function() {
  alert('Button clicked!');
});
// Unbind event
$('#btn').off('click');
// Prevent form submission
$('form').on('submit', function(e) {
  e.preventDefault();
  // handle form
});
```

## Best Learning Methods
- **Practice:** Bind and unbind events on different elements.
- **Mini-Projects:** Build an interactive UI (e.g., todo list, modal, tabs).
- **Experiment:** Use event delegation for dynamic lists.
- **Read Docs:** Explore the [jQuery event documentation](https://api.jquery.com/category/events/).

---

Type "next" to get the syllabus and notes for the next topic: Effects and Animations.
