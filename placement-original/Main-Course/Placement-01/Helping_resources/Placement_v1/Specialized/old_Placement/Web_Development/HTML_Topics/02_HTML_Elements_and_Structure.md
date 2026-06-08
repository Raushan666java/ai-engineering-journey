# HTML Elements and Structure

## HTML Tags and Elements
An HTML element consists of a start tag, content, and an end tag:

```html
<tagname>Content goes here...</tagname>
```

- **Start tag**: `<tagname>`
- **Content**: Text or other elements
- **End tag**: `</tagname>`

Some elements are self-closing (empty elements) and don't have content or end tags:

```html
<br>
<!-- or with self-closing syntax -->
<br />
```

## HTML Attributes
Attributes provide additional information about HTML elements:

```html
<tagname attribute="value">Content</tagname>
```

Common attributes:
- `id`: Unique identifier for an element
- `class`: Specifies one or more class names for styling
- `style`: Inline CSS styling
- `title`: Extra information (tooltip text)
- `lang`: Language of the content
- `data-*`: Custom data attributes

## Nesting Elements
HTML elements can be nested (placed inside other elements):

```html
<div>
    <h1>Main Heading</h1>
    <p>This is a <strong>paragraph</strong> with nested elements.</p>
</div>
```

Proper nesting requires that elements are closed in the reverse order they were opened.

## Block vs Inline Elements

### Block Elements
- Start on a new line
- Take up the full width available
- Have a line break before and after
- Examples: `<div>`, `<h1>` to `<h6>`, `<p>`, `<ul>`, `<li>`, `<section>`

### Inline Elements
- Do not start on a new line
- Take only as much width as necessary
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<code>`

## HTML Comments
Comments are not displayed in the browser but can help document your HTML code:

```html
<!-- This is a comment -->
<!-- 
    This is a
    multi-line comment
-->
```

Comments are useful for:
- Explaining code
- Debugging
- Temporarily disabling code
- Adding reminders or notes