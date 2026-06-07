# Lists in HTML

## Ordered Lists
Ordered lists (`<ol>`) display items in a numbered sequence.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Ordered List Attributes

#### type
Specifies the numbering type:
- `type="1"`: Numbers (default)
- `type="A"`: Uppercase letters
- `type="a"`: Lowercase letters
- `type="I"`: Uppercase Roman numerals
- `type="i"`: Lowercase Roman numerals

```html
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>
```

#### start
Specifies the start value:

```html
<ol start="5">
    <li>This will be numbered 5</li>
    <li>This will be numbered 6</li>
    <li>This will be numbered 7</li>
</ol>
```

#### reversed
Reverses the numbering:

```html
<ol reversed>
    <li>This will be numbered 3</li>
    <li>This will be numbered 2</li>
    <li>This will be numbered 1</li>
</ol>
```

## Unordered Lists
Unordered lists (`<ul>`) display items with bullets.

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

### Unordered List Attributes

#### type
Specifies the bullet style (though CSS is preferred for styling):
- `type="disc"`: Filled circle (default)
- `type="circle"`: Empty circle
- `type="square"`: Filled square

```html
<ul type="square">
    <li>Item with square bullet</li>
    <li>Another item with square bullet</li>
</ul>
```

## Definition Lists
Definition lists (`<dl>`) display terms and their definitions.

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets, used for styling web pages.</dd>
    
    <dt>JavaScript</dt>
    <dd>A programming language that enables interactive web pages.</dd>
</dl>
```

- `<dl>`: Definition list container
- `<dt>`: Definition term
- `<dd>`: Definition description

## Nested Lists
Lists can be nested inside other lists.

```html
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Oranges</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
            <li>Spinach</li>
        </ul>
    </li>
</ul>
```

## List Attributes

### Common Attributes for List Items
- `value`: Sets the numbering for an `<li>` element in an ordered list

```html
<ol>
    <li>First item</li>
    <li value="5">This will be numbered 5</li>
    <li>This will be numbered 6</li>
</ol>
```

## Styling Lists with CSS
While HTML attributes can control some aspects of lists, CSS is the preferred method for styling:

```css
/* Change bullet style */
ul {
    list-style-type: square;
}

/* Use custom image as bullet */
ul {
    list-style-image: url('bullet.png');
}

/* Remove bullets completely */
ul {
    list-style-type: none;
}

/* Change numbering style */
ol {
    list-style-type: lower-roman;
}

/* Horizontal list (for navigation) */
ul.navbar {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.navbar li {
    display: inline-block;
    margin-right: 10px;
}
```