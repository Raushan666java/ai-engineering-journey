# 2. jQuery Selectors and Filters

## Basic Selectors
- **ID Selector:** `$('#id')` — Selects element with the given ID.
- **Class Selector:** `$('.class')` — Selects all elements with the given class.
- **Element Selector:** `$('tag')` — Selects all elements of the given tag.

## Attribute Selectors
- `[attribute]`: Selects elements with the specified attribute.
- `[attribute="value"]`: Selects elements with the attribute equal to value.
- `[attribute^="value"]`: Starts with value.
- `[attribute$="value"]`: Ends with value.
- `[attribute*="value"]`: Contains value.

## Hierarchy and Child Selectors
- **Descendant:** `$('parent descendant')` — All descendants.
- **Child:** `$('parent > child')` — Direct children only.
- **Adjacent Sibling:** `$('prev + next')` — Next sibling.
- **General Sibling:** `$('prev ~ siblings')` — All following siblings.

## Filtering Methods
- `.first()`, `.last()`, `.eq(index)`: Select first, last, or nth element.
- `.filter(selector)`: Filter elements by selector or function.
- `.not(selector)`: Exclude elements matching selector.
- `.has(selector)`: Elements containing selector.
- `.is(selector)`: Check if any element matches selector.

## Examples
```js
// Select all paragraphs
$('p');
// Select element with id="main"
$('#main');
// Select all elements with class="item"
$('.item');
// Select input elements with type="text"
$('input[type="text"]');
// Select first list item
$('li').first();
// Select all direct children
div > p
```

## Best Learning Methods
- **Practice:** Try different selectors in a sample HTML page.
- **Experiment:** Combine filters and selectors for complex queries.
- **Mini-Projects:** Build a dynamic list or table with filtering.
- **Read Docs:** Explore the [jQuery selector documentation](https://api.jquery.com/category/selectors/).

---

Type "next" to get the syllabus and notes for the next topic: DOM Manipulation.
