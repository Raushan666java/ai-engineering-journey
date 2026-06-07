# CSS Box Model

## What is the Box Model?
The CSS box model is a fundamental concept that describes how elements are rendered on a web page. Every HTML element is treated as a rectangular box with content, padding, border, and margin areas.

## Components of the Box Model

### Content
- The actual content of the element (text, images, etc.)
- Controlled by `width` and `height` properties

### Padding
- Clear space between the content and the border
- Controlled by `padding` properties

### Border
- A line around the padding (or content if no padding)
- Controlled by `border` properties

### Margin
- Clear space outside the border
- Controlled by `margin` properties

## Visual Representation
```
+-----------------------------------------------+
|                   MARGIN                      |
|   +---------------------------------------+   |
|   |               BORDER                  |   |
|   |   +-------------------------------+   |   |
|   |   |           PADDING             |   |   |
|   |   |   +---------------------+     |   |   |
|   |   |   |       CONTENT       |     |   |   |
|   |   |   +---------------------+     |   |   |
|   |   |                               |   |   |
|   |   +-------------------------------+   |   |
|   |                                       |   |
|   +---------------------------------------+   |
|                                               |
+-----------------------------------------------+
```

## Box-sizing Property
The `box-sizing` property defines how the width and height of an element are calculated.

### content-box (default)
- `width` and `height` apply to the content area only
- Padding and border are added to the specified width and height

```css
.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 200px + 20px*2 + 5px*2 = 250px */
}
```

### border-box
- `width` and `height` include content, padding, and border
- Often preferred for easier layout calculations

```css
.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 200px (content area is reduced to fit) */
}
```

## Width and Height
- `width`, `height`: Set the dimensions of the content area
- `min-width`, `min-height`: Set minimum dimensions
- `max-width`, `max-height`: Set maximum dimensions

```css
.element {
    width: 50%;
    height: 200px;
    min-width: 300px;
    max-width: 600px;
}
```

## Padding
- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Individual sides
- `padding` shorthand: All sides at once

```css
/* Individual sides */
.element {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}

/* Shorthand - all sides equal */
.element {
    padding: 10px;
}

/* Shorthand - vertical | horizontal */
.element {
    padding: 10px 20px;
}

/* Shorthand - top | horizontal | bottom */
.element {
    padding: 10px 20px 15px;
}

/* Shorthand - top | right | bottom | left (clockwise) */
.element {
    padding: 10px 20px 15px 25px;
}
```

## Border
- `border-width`, `border-style`, `border-color`: Individual properties
- `border` shorthand: All properties at once
- Can be applied to individual sides with `-top`, `-right`, `-bottom`, `-left`

```css
/* Individual properties */
.element {
    border-width: 2px;
    border-style: solid;
    border-color: #333;
}

/* Shorthand */
.element {
    border: 2px solid #333;
}

/* Individual sides */
.element {
    border-top: 2px solid #333;
    border-right: 1px dashed #999;
    border-bottom: 2px solid #333;
    border-left: 1px dashed #999;
}
```

## Margin
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Individual sides
- `margin` shorthand: All sides at once
- Can have negative values to overlap elements

```css
/* Individual sides */
.element {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

/* Shorthand - same as padding */
.element {
    margin: 10px;                  /* all sides */
    margin: 10px 20px;             /* vertical | horizontal */
    margin: 10px 20px 15px;        /* top | horizontal | bottom */
    margin: 10px 20px 15px 25px;   /* top | right | bottom | left */
}

/* Auto margins for horizontal centering */
.center {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    /* or shorthand: margin: 0 auto; */
}
```

## Margin Collapse
When two vertical margins meet, they collapse into a single margin equal to the larger of the two.

```css
.top-element {
    margin-bottom: 20px;
}

.bottom-element {
    margin-top: 30px;
}
/* The margin between these elements will be 30px, not 50px */
```

## Box-shadow and Border-radius

### Box-shadow
Creates a shadow effect around an element's box.

```css
.element {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    /* horizontal-offset vertical-offset blur-radius color */
}

/* Multiple shadows */
.element {
    box-shadow: 
        0 2px 5px rgba(0, 0, 0, 0.3),
        0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Inset shadow */
.element {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}
```

### Border-radius
Rounds the corners of an element's border.

```css
/* Equal radius on all corners */
.element {
    border-radius: 10px;
}

/* Individual corners (top-left, top-right, bottom-right, bottom-left) */
.element {
    border-radius: 10px 5px 15px 20px;
}

/* Create a circle */
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
```