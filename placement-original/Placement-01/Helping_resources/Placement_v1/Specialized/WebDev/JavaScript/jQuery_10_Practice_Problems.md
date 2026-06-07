# 10. jQuery Practice Problems

Sharpen your jQuery skills with these hands-on practice problems. Each problem includes a description, requirements, and hints.

---

## 1. Toggle Paragraph Visibility
**Problem:**
- Create a button that toggles the visibility of a paragraph when clicked.

**Requirements:**
- Use jQuery's `.toggle()` or `.slideToggle()` method.

**Hint:**
- Bind a click event to the button and select the paragraph using a selector.

---

## 2. Change Background Color on Hover
**Problem:**
- Change the background color of a div when the mouse hovers over it and revert when the mouse leaves.

**Requirements:**
- Use `.hover()` or `.mouseenter()` and `.mouseleave()`.

**Hint:**
- Use `.css()` to change the background color.

---

## 3. Form Validation
**Problem:**
- Validate a form so that the submit button is enabled only when all fields are filled.

**Requirements:**
- Use `.keyup()` or `.on('input', ...)` to check field values.

**Hint:**
- Use `.prop('disabled', true/false)` for the button.

---

## 4. Dynamic List Item Addition
**Problem:**
- Add a new item to a list when a button is clicked. The item text should come from an input field.

**Requirements:**
- Use `.append()` or `.after()`.

**Hint:**
- Get the input value and append a new `<li>` to the list.

---

## 5. Image Gallery Filter
**Problem:**
- Show only images with a certain class when a filter button is clicked.

**Requirements:**
- Use `.hide()`, `.show()`, or `.filter()`.

**Hint:**
- Use classes to categorize images and filter them.

---

## 6. Accordion Menu
**Problem:**
- Create an accordion menu where clicking a header expands/collapses the content below it.

**Requirements:**
- Use `.slideToggle()` and event delegation if needed.

**Hint:**
- Use `.next()` to select the content panel.

---

## 7. AJAX Data Fetch
**Problem:**
- Fetch data from a public API and display it in a div when a button is clicked.

**Requirements:**
- Use `$.ajax()` or `$.get()`.

**Hint:**
- Use a free API like [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 8. Character Counter
**Problem:**
- Display a live character count as the user types in a textarea.

**Requirements:**
- Use `.on('input', ...)`.

**Hint:**
- Use `.val().length` to get the character count.

---

## 9. Tabbed Navigation
**Problem:**
- Implement tabbed navigation where clicking a tab shows the corresponding content and hides others.

**Requirements:**
- Use `.click()`, `.hide()`, and `.show()`.

**Hint:**
- Use data attributes or index to match tabs and content.

---

## 10. Smooth Scroll to Section
**Problem:**
- Smoothly scroll to a section of the page when a navigation link is clicked.

**Requirements:**
- Use `animate()` to scroll the page.

**Hint:**
- Use the section's offset and `$('html, body').animate()`.

---

## Best Learning Methods
- **Implement each problem in a small project or CodePen.**
- **Experiment with variations and additional features.**
- **Review the official jQuery documentation for each method used.**
- **Ask questions and share solutions on forums.**

---

Ready for solutions or want more problems? Let me know!
