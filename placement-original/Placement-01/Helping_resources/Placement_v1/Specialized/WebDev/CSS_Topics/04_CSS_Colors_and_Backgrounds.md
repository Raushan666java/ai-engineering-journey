# CSS Colors and Backgrounds

## Color Values

### Color Names
CSS provides 140+ predefined color names.

```css
h1 {
    color: red;
}
p {
    color: steelblue;
}
```

Common named colors: `black`, `white`, `red`, `green`, `blue`, `yellow`, `purple`, `gray`, `orange`, etc.

### Hexadecimal Colors
Six-digit codes representing RGB values (#RRGGBB).

```css
h1 {
    color: #ff0000; /* red */
}
p {
    color: #4682b4; /* steelblue */
}
```

Shorthand for repeating values:
```css
div {
    color: #f00; /* same as #ff0000 */
}
```

### RGB and RGBA Colors
RGB: Red, Green, Blue values (0-255).
RGBA: RGB with Alpha (opacity) value (0-1).

```css
h1 {
    color: rgb(255, 0, 0); /* red */
}
p {
    color: rgba(70, 130, 180, 1); /* steelblue */
}
div {
    color: rgba(255, 0, 0, 0.5); /* semi-transparent red */
}
```

### HSL and HSLA Colors
HSL: Hue (0-360), Saturation (0%-100%), Lightness (0%-100%).
HSLA: HSL with Alpha (opacity) value (0-1).

```css
h1 {
    color: hsl(0, 100%, 50%); /* red */
}
p {
    color: hsla(207, 44%, 49%, 1); /* steelblue */
}
div {
    color: hsla(0, 100%, 50%, 0.5); /* semi-transparent red */
}
```

## Text Color and Background Color

### Text Color
The `color` property sets the color of text.

```css
p {
    color: #333; /* dark gray text */
}
```

### Background Color
The `background-color` property sets the background color of an element.

```css
div {
    background-color: #f5f5f5; /* light gray background */
}
```

### Combining Text and Background Colors
```css
.alert {
    color: white;
    background-color: red;
}
```

## Background Properties

### background-image
Sets one or more background images.

```css
div {
    background-image: url('image.jpg');
}
```

### background-repeat
Controls how background images repeat.

```css
div {
    background-image: url('pattern.png');
    background-repeat: repeat; /* default - repeat both horizontally and vertically */
}

.no-repeat {
    background-repeat: no-repeat; /* image appears once */
}

.repeat-x {
    background-repeat: repeat-x; /* repeat horizontally only */
}

.repeat-y {
    background-repeat: repeat-y; /* repeat vertically only */
}

.space {
    background-repeat: space; /* repeat with space between */
}

.round {
    background-repeat: round; /* repeat and scale to fit */
}
```

### background-position
Sets the starting position of a background image.

```css
div {
    background-image: url('image.jpg');
    background-repeat: no-repeat;
    background-position: center; /* center the image */
}
```

Values can be:
- Keywords: `top`, `bottom`, `left`, `right`, `center`
- Percentages: `50% 25%` (horizontal vertical)
- Length units: `20px 30px` (horizontal vertical)

```css
.top-right {
    background-position: top right;
}

.center-bottom {
    background-position: center bottom;
}

.custom {
    background-position: 25% 75%;
}
```

### background-size
Controls the size of background images.

```css
div {
    background-image: url('image.jpg');
    background-size: 200px 100px; /* width height */
}
```

Special values:
- `cover`: Scale to cover the entire container (may crop)
- `contain`: Scale to fit inside the container (may leave empty space)

```css
.cover {
    background-size: cover;
}

.contain {
    background-size: contain;
}
```

### background-attachment
Determines if the background scrolls with the content.

```css
div {
    background-image: url('image.jpg');
    background-attachment: scroll; /* default - scrolls with content */
}

.fixed {
    background-attachment: fixed; /* stays fixed when scrolling */
}

.local {
    background-attachment: local; /* scrolls with element's content */
}
```

## Gradients

### Linear Gradients
Creates a gradient along a straight line.

```css
div {
    background-image: linear-gradient(to right, red, yellow);
}
```

Direction can be:
- Keywords: `to top`, `to right`, `to bottom`, `to left`, `to top right`, etc.
- Angle: `45deg`, `90deg`, etc.

```css
.diagonal {
    background-image: linear-gradient(45deg, red, yellow);
}

.multi-color {
    background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}

.color-stops {
    background-image: linear-gradient(to right, red 20%, yellow 80%);
}
```

### Radial Gradients
Creates a gradient that radiates from a center point.

```css
div {
    background-image: radial-gradient(circle, red, yellow);
}
```

Shape can be:
- `circle`: Circular gradient
- `ellipse`: Elliptical gradient (default)

```css
.circle-gradient {
    background-image: radial-gradient(circle, red, yellow);
}

.ellipse-gradient {
    background-image: radial-gradient(ellipse, red, yellow);
}

.positioned {
    background-image: radial-gradient(circle at top right, red, yellow);
}

.sized {
    background-image: radial-gradient(circle 100px, red, yellow);
}
```

## Multiple Backgrounds
Multiple backgrounds can be layered on top of each other.

```css
div {
    background-image: 
        url('top-image.png'),
        url('middle-image.png'),
        url('bottom-image.png');
    background-position: 
        top left,
        center,
        bottom right;
    background-repeat: 
        no-repeat,
        no-repeat,
        no-repeat;
}
```

## Opacity and Transparency
Control the transparency of elements.

### opacity
Affects the entire element and its children.

```css
div {
    opacity: 0.5; /* 50% transparent */
}
```

### rgba/hsla for Transparency
Affects only the color property, not the entire element.

```css
div {
    background-color: rgba(255, 0, 0, 0.5); /* semi-transparent red */
    color: rgba(0, 0, 0, 0.8); /* semi-transparent black text */
}
```