# Typography and Text Styling in CSS

## Font Properties

### font-family
Specifies the font for text. Provide multiple fonts as fallbacks.

```css
/* Generic font family */
body {
  font-family: sans-serif;
}

/* Specific fonts with fallbacks */
h1 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* Quoted font names (required for fonts with spaces) */
p {
  font-family: 'Times New Roman', Times, serif;
}
```

Generic font families:
- `serif`: Fonts with small lines at the ends of characters (e.g., Times New Roman)
- `sans-serif`: Fonts without serifs (e.g., Arial, Helvetica)
- `monospace`: Fixed-width fonts (e.g., Courier, Consolas)
- `cursive`: Fonts that mimic handwriting
- `fantasy`: Decorative fonts

### font-size
Sets the size of the font.

```css
/* Absolute sizes */
h1 {
  font-size: 32px;
}

/* Relative sizes */
h2 {
  font-size: 1.5em; /* Relative to parent element */
}

p {
  font-size: 1rem; /* Relative to root element (html) */
}

small {
  font-size: 80%; /* Relative to parent element */
}

/* Viewport-based sizes */
h1 {
  font-size: 5vw; /* 5% of viewport width */
}
```

### font-weight
Sets the thickness or boldness of the font.

```css
/* Keyword values */
p {
  font-weight: normal; /* 400 */
}

h1 {
  font-weight: bold; /* 700 */
}

/* Numeric values (100 to 900) */
h2 {
  font-weight: 600; /* Semi-bold */
}

/* Relative values */
em {
  font-weight: lighter; /* Lighter than parent */
}

strong {
  font-weight: bolder; /* Bolder than parent */
}
```

### font-style
Sets the style of the font (normal, italic, or oblique).

```css
p {
  font-style: normal;
}

em {
  font-style: italic;
}

span {
  font-style: oblique;
}
```

### font-variant
Sets whether text should be displayed in small caps.

```css
h2 {
  font-variant: small-caps;
}
```

### line-height
Sets the height of a line of text (often called "leading").

```css
p {
  line-height: 1.5; /* 1.5 times the font size (recommended) */
}

h1 {
  line-height: 1.2; /* Tighter for headings */
}

.custom {
  line-height: 24px; /* Absolute value */
}

.percentage {
  line-height: 150%; /* Percentage of the font size */
}
```

### font Shorthand
Combines multiple font properties into one declaration.

```css
/* font: font-style font-variant font-weight font-size/line-height font-family */
p {
  font: italic small-caps bold 16px/1.5 'Helvetica Neue', Arial, sans-serif;
}

/* Minimum required: font-size and font-family */
h1 {
  font: 24px Arial, sans-serif;
}
```

## Text Properties

### text-align
Sets the horizontal alignment of text.

```css
p {
  text-align: left; /* Default */
}

h1 {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify; /* Text is stretched to fill the width */
}
```

### text-decoration
Sets the decoration added to text.

```css
a {
  text-decoration: none; /* Removes underline from links */
}

h2 {
  text-decoration: underline;
}

.strike {
  text-decoration: line-through;
}

.fancy {
  text-decoration: underline wavy red; /* style, type, color */
}
```

### text-transform
Controls the capitalization of text.

```css
h1 {
  text-transform: uppercase; /* ALL CAPS */
}

h2 {
  text-transform: capitalize; /* First Letter Of Each Word */
}

.lowercase {
  text-transform: lowercase; /* all lowercase */
}

.normal {
  text-transform: none; /* No transformation */
}
```

### text-indent
Sets the indentation of the first line of text.

```css
p {
  text-indent: 2em; /* Indents the first line by 2em */
}

.negative {
  text-indent: -20px; /* Negative indent (hanging indent) */
}
```

### letter-spacing
Sets the spacing between characters.

```css
h1 {
  letter-spacing: 2px; /* More space between characters */
}

.tight {
  letter-spacing: -0.5px; /* Tighter spacing */
}
```

### word-spacing
Sets the spacing between words.

```css
p {
  word-spacing: 5px; /* More space between words */
}
```

### white-space
Specifies how white space inside an element is handled.

```css
pre {
  white-space: pre; /* Preserves white space */
}

.nowrap {
  white-space: nowrap; /* Prevents text from wrapping */
}

.pre-wrap {
  white-space: pre-wrap; /* Preserves white space and wraps */
}

.pre-line {
  white-space: pre-line; /* Collapses spaces, preserves line breaks */
}
```

### text-shadow
Adds shadow to text.

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* horizontal-offset vertical-offset blur-radius color */
}

.multiple-shadows {
  text-shadow: 
    1px 1px 2px black, 
    0 0 10px blue, 
    0 0 5px darkblue;
}
```

## Web Fonts and @font-face

### Using Google Fonts
```html
<!-- In HTML head -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
/* In CSS */
body {
  font-family: 'Roboto', sans-serif;
}
```

### Using @font-face
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/custom-font.woff2') format('woff2'),
       url('fonts/custom-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Controls how the font is displayed while loading */
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

## Multi-column Text

### column-count
Specifies the number of columns.

```css
.article {
  column-count: 3; /* Divides text into 3 columns */
}
```

### column-width
Specifies the minimum width for each column.

```css
.article {
  column-width: 200px; /* Creates as many columns as fit with min width of 200px */
}
```

### column-gap
Sets the gap between columns.

```css
.article {
  column-gap: 40px;
}
```

### column-rule
Adds a line between columns.

```css
.article {
  column-rule: 1px solid #ccc;
}
```

### columns Shorthand
Combines column-count and column-width.

```css
.article {
  columns: 3 200px; /* 3 columns with min width of 200px */
}
```

## Best Practices for Typography

1. **Use a limited number of fonts**: Typically 2-3 fonts per design.
2. **Ensure readability**: Maintain adequate font size (16px+ for body text) and line height (1.4-1.6).
3. **Consider contrast**: Ensure sufficient contrast between text and background.
4. **Use relative units**: Prefer em, rem, or % over fixed pixel sizes for better accessibility.
5. **Test on multiple devices**: Ensure typography works across different screen sizes.
6. **Optimize web fonts**: Use font-display and limit font weights/styles to improve performance.
7. **Consider fallbacks**: Always provide system font fallbacks for web fonts.