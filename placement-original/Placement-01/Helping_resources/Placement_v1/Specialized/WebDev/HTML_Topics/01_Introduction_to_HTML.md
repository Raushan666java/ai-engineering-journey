# Introduction to HTML

## What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of a web page using a series of elements or tags that define different parts of content such as headings, paragraphs, links, images, etc.

## History and Evolution of HTML
- **HTML 1.0** (1991): The original version created by Tim Berners-Lee
- **HTML 2.0** (1995): First standard HTML specification
- **HTML 3.2** (1997): Added tables, applets, and text flow around images
- **HTML 4.01** (1999): Added stylesheets, scripting, frames, and more
- **XHTML 1.0** (2000): Reformulation of HTML as XML
- **HTML5** (2014): Current standard with new elements, attributes, and behaviors

## HTML vs XHTML vs HTML5

### HTML
- More forgiving syntax
- Case-insensitive tags
- Some elements don't need closing tags

### XHTML
- Stricter syntax rules (based on XML)
- Case-sensitive (lowercase tags)
- All elements must be closed
- Attributes must be quoted

### HTML5
- Modern features and APIs
- Semantic elements (header, footer, nav, etc.)
- Audio and video support
- Canvas for drawing
- Local storage capabilities
- Improved form controls

## Basic Structure of an HTML Document
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
```

## HTML Document Type Declaration
The `<!DOCTYPE>` declaration helps the browser understand what version of HTML the page is written in. For HTML5, the declaration is simple:

```html
<!DOCTYPE html>
```

For older HTML versions, the DOCTYPE declaration was more complex and included references to DTDs (Document Type Definitions).