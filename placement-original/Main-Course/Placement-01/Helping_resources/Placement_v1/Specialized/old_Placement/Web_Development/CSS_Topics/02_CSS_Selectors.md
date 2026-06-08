# CSS Selectors

## Basic Selectors

### Element Selector
Selects all elements of the specified type.
```css
p {
    color: blue;
}
```

### Class Selector
Selects all elements with the specified class attribute.
```css
.highlight {
    background-color: yellow;
}
```

### ID Selector
Selects a single element with the specified id attribute.
```css
#header {
    background-color: black;
    color: white;
}
```

### Universal Selector
Selects all elements.
```css
* {
    margin: 0;
    padding: 0;
}
```

## Combinators

### Descendant Selector (space)
Selects all elements that are descendants of a specified element.
```css
article p {
    font-style: italic;
}
```

### Child Selector (>)
Selects all elements that are direct children of a specified element.
```css
ul > li {
    list-style-type: square;
}
```

### Adjacent Sibling Selector (+)
Selects an element that is directly after another specific element.
```css
h2 + p {
    font-weight: bold;
}
```

### General Sibling Selector (~)
Selects all elements that are siblings of a specified element.
```css
h2 ~ p {
    color: gray;
}
```

## Attribute Selectors

### [attribute]
Selects elements with the specified attribute.
```css
[disabled] {
    opacity: 0.5;
}
```

### [attribute="value"]
Selects elements with the specified attribute and value.
```css
[type="text"] {
    border: 1px solid gray;
}
```

### [attribute^="value"]
Selects elements with an attribute value beginning with the specified value.
```css
[href^="https"] {
    color: green;
}
```

### [attribute$="value"]
Selects elements with an attribute value ending with the specified value.
```css
[href$=".pdf"] {
    background-image: url('pdf-icon.png');
}
```

### [attribute*="value"]
Selects elements with an attribute value containing the specified value.
```css
[class*="nav"] {
    font-weight: bold;
}
```

## Pseudo-classes and Pseudo-elements

### Pseudo-classes
Select elements based on a certain state.
```css
a:hover {
    text-decoration: underline;
}

input:focus {
    border-color: blue;
}

li:first-child {
    font-weight: bold;
}

li:nth-child(odd) {
    background-color: #f2f2f2;
}
```

### Pseudo-elements
Select and style a part of an element.
```css
p::first-line {
    font-variant: small-caps;
}

p::first-letter {
    font-size: 2em;
}

p::before {
    content: "»";
    color: red;
}

p::after {
    content: "«";
    color: red;
}
```

## Specificity and Cascade

### Specificity
Determines which CSS rule applies when multiple rules target the same element.

Specificity hierarchy (from highest to lowest):
1. Inline styles
2. IDs
3. Classes, attributes, and pseudo-classes
4. Elements and pseudo-elements

### Cascade
When specificity is equal, the last rule declared wins.

### !important
Overrides all other declarations.
```css
p {
    color: red !important; /* This will take precedence */
}
```

## Multiple Selectors
Apply the same styles to multiple selectors by separating them with commas.
```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```