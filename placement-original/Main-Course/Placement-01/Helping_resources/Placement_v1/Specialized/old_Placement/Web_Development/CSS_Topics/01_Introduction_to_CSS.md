# Introduction to CSS

## What is CSS?
CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. CSS controls the layout, formatting, and appearance of web pages, allowing for the separation of content (HTML) and presentation (CSS).

## History and Evolution of CSS
- **CSS1** (1996): First CSS specification with basic styling capabilities
- **CSS2** (1998): Added positioning, z-index, media types, and bidirectional text
- **CSS2.1** (2011): Correction and standardization of CSS2
- **CSS3** (2000s-present): Modular approach with independent modules like selectors, box model, backgrounds, text effects, animations, etc.
- **CSS4**: Not a single specification but continued development of individual modules

## CSS Versions
- **CSS1**: Basic styling (fonts, colors, spacing)
- **CSS2/2.1**: Layout features (positioning, z-index, media types)
- **CSS3**: Modular approach with advanced features:
  - Rounded corners, shadows, gradients
  - Animations and transitions
  - Flexbox and Grid layout
  - Media queries for responsive design
  - Custom fonts
  - Multiple backgrounds
  - 2D/3D transformations

## Why Use CSS?
1. **Separation of concerns**: Content (HTML) separate from presentation (CSS)
2. **Consistency**: Apply the same styles across multiple pages
3. **Maintainability**: Change styles in one place for the entire site
4. **Bandwidth efficiency**: Reduced file sizes with external stylesheets
5. **Device adaptability**: Responsive design for different screen sizes
6. **Accessibility**: Improve readability and user experience
7. **Browser compatibility**: Control appearance across different browsers

## CSS Syntax and Structure

### Basic Syntax
```css
selector {
    property: value;
    another-property: value;
}
```

### Example
```css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
```

### CSS Implementation Methods

1. **Inline CSS** (using the style attribute):
```html
<p style="color: red; font-size: 16px;">This is a paragraph.</p>
```

2. **Internal CSS** (using the style tag in the head section):
```html
<head>
    <style>
        p {
            color: red;
            font-size: 16px;
        }
    </style>
</head>
```

3. **External CSS** (linking to an external .css file):
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
p {
    color: red;
    font-size: 16px;
}
```

4. **@import rule** (importing one stylesheet into another):
```css
@import url("typography.css");
```