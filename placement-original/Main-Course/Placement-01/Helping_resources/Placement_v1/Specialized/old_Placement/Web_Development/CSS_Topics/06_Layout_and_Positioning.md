# Layout and Positioning in CSS

## Display Property

The `display` property specifies how an element is displayed.

### Common Values

#### block
- Takes up the full width available
- Starts on a new line
- Can have width and height set

```css
div {
  display: block; /* Default for div */
}

span {
  display: block; /* Changes inline span to block */
}
```

#### inline
- Takes only as much width as necessary
- Does not start on a new line
- Cannot have width and height set
- Ignores top and bottom margins

```css
span {
  display: inline; /* Default for span */
}

div {
  display: inline; /* Changes block div to inline */
}
```

#### inline-block
- Flows like an inline element
- Can have width, height, margins, and padding like a block element

```css
.button {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: 10px;
}
```

#### none
- Removes the element from the document flow
- Element is not displayed and takes up no space

```css
.hidden {
  display: none;
}
```

#### flex
- Creates a flex container
- Direct children become flex items

```css
.container {
  display: flex;
}
```

#### grid
- Creates a grid container
- Direct children become grid items

```css
.container {
  display: grid;
}
```

#### table, table-row, table-cell
- Makes elements behave like table elements

```css
.table {
  display: table;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
}
```

## Position Property

The `position` property specifies the positioning method for an element.

### static (default)
- Normal flow of the document
- Not affected by top, right, bottom, left properties

```css
div {
  position: static;
}
```

### relative
- Positioned relative to its normal position
- Takes up space in its original position
- Can be moved using top, right, bottom, left

```css
.box {
  position: relative;
  top: 20px;
  left: 30px; /* Moves 20px down and 30px right from normal position */
}
```

### absolute
- Positioned relative to the nearest positioned ancestor
- Removed from the normal document flow
- Other elements behave as if it doesn't exist
- Can be positioned using top, right, bottom, left

```css
.parent {
  position: relative; /* Creates a positioning context */
}

.child {
  position: absolute;
  top: 0;
  right: 0; /* Positions at the top-right corner of parent */
}
```

### fixed
- Positioned relative to the viewport
- Stays in the same place even when scrolling
- Removed from the normal document flow

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
}
```

### sticky
- Hybrid of relative and fixed
- Behaves as relative until it crosses a specified threshold
- Then behaves as fixed

```css
.nav {
  position: sticky;
  top: 0; /* Sticks to top when scrolled to this position */
}
```

## Float and Clear

### float
Allows elements to float to the left or right of their container.

```css
.left {
  float: left; /* Floats to the left */
}

.right {
  float: right; /* Floats to the right */
}

.none {
  float: none; /* Default - does not float */
}
```

### clear
Specifies which sides of an element cannot be adjacent to floating elements.

```css
.clear-left {
  clear: left; /* No floating elements allowed on left side */
}

.clear-right {
  clear: right; /* No floating elements allowed on right side */
}

.clear-both {
  clear: both; /* No floating elements allowed on either side */
}
```

### Clearfix Hack
Ensures a container includes all its floated children.

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

## z-index and Stacking Context

The `z-index` property specifies the stack order of positioned elements.

```css
.back {
  position: relative; /* z-index only works on positioned elements */
  z-index: 1;
}

.front {
  position: relative;
  z-index: 2; /* Higher z-index appears in front */
}
```

### Stacking Context
A stacking context is formed by:
- Root element (HTML)
- Elements with position other than static and a z-index value
- Elements with opacity less than 1
- Elements with transform, filter, perspective, clip-path, mask, etc.

```css
.parent {
  position: relative;
  z-index: 1;
}

.child1 {
  position: absolute;
  z-index: 100; /* High value */
}

.another-parent {
  position: relative;
  z-index: 2; /* Higher than first parent */
}

.child2 {
  position: absolute;
  z-index: 1; /* Low value but will appear above child1 */
}
```

## Overflow Handling

The `overflow` property specifies what happens if content overflows an element's box.

```css
.container {
  width: 300px;
  height: 200px;
  overflow: visible; /* Default - content is not clipped */
}

.hidden {
  overflow: hidden; /* Content is clipped, no scrollbars */
}

.scroll {
  overflow: scroll; /* Content is clipped, scrollbars are added */
}

.auto {
  overflow: auto; /* Scrollbars are added only when necessary */
}
```

### overflow-x and overflow-y
Control overflow separately for horizontal and vertical directions.

```css
.container {
  overflow-x: hidden; /* Hide horizontal overflow */
  overflow-y: auto; /* Add vertical scrollbar if needed */
}
```

## Centering Techniques

### Horizontal Centering

#### For Block Elements
```css
.center-block {
  margin-left: auto;
  margin-right: auto;
  width: 80%; /* Must have a width */
}
```

#### For Inline or Inline-Block Elements
```css
.center-inline {
  text-align: center;
}
```

### Vertical Centering

#### Using Line Height (for single-line text)
```css
.center-text {
  line-height: 100px; /* Same as container height */
  height: 100px;
}
```

#### Using Flexbox
```css
.flex-center {
  display: flex;
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  height: 300px;
}
```

#### Using Position and Transform
```css
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### Using Grid
```css
.grid-center {
  display: grid;
  place-items: center;
  height: 300px;
}
```

## Best Practices for Layout and Positioning

1. **Choose the right display property** for your needs.
2. **Use relative positioning** for small adjustments without breaking document flow.
3. **Be careful with absolute positioning** as it removes elements from the flow.
4. **Avoid excessive floating** as it can lead to complex layouts and clearfix issues.
5. **Use modern layout techniques** like Flexbox and Grid when possible.
6. **Be mindful of z-index** and stacking contexts to avoid unexpected overlapping.
7. **Test responsive behavior** to ensure layouts work on different screen sizes.