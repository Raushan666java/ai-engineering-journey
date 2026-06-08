# Flexbox in CSS

## Introduction to Flexbox

Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for arranging items in rows or columns. It provides a more efficient way to distribute space and align items, even when their size is unknown or dynamic.

## Flex Container Properties

To create a flex container, set the `display` property to `flex` or `inline-flex`:

```css
.container {
  display: flex; /* or inline-flex */
}
```

### flex-direction

Defines the direction of the main axis (the direction flex items are placed).

```css
.container {
  flex-direction: row; /* default - left to right */
  /* flex-direction: row-reverse; */ /* right to left */
  /* flex-direction: column; */ /* top to bottom */
  /* flex-direction: column-reverse; */ /* bottom to top */
}
```

### flex-wrap

Determines whether flex items should wrap or not if they can't fit in one line.

```css
.container {
  flex-wrap: nowrap; /* default - single line */
  /* flex-wrap: wrap; */ /* multiple lines */
  /* flex-wrap: wrap-reverse; */ /* multiple lines, reversed */
}
```

### flex-flow

Shorthand for `flex-direction` and `flex-wrap`.

```css
.container {
  flex-flow: row nowrap; /* default */
  /* flex-flow: column wrap; */
  /* flex-flow: row-reverse wrap-reverse; */
}
```

### justify-content

Aligns flex items along the main axis.

```css
.container {
  justify-content: flex-start; /* default - items at start */
  /* justify-content: flex-end; */ /* items at end */
  /* justify-content: center; */ /* items at center */
  /* justify-content: space-between; */ /* equal space between items */
  /* justify-content: space-around; */ /* equal space around items */
  /* justify-content: space-evenly; */ /* equal space between and around items */
}
```

### align-items

Aligns flex items along the cross axis.

```css
.container {
  align-items: stretch; /* default - stretch to fill container */
  /* align-items: flex-start; */ /* items at start of cross axis */
  /* align-items: flex-end; */ /* items at end of cross axis */
  /* align-items: center; */ /* items at center of cross axis */
  /* align-items: baseline; */ /* items aligned by their baselines */
}
```

### align-content

Aligns multiple lines of flex items along the cross axis (only works when there are multiple lines).

```css
.container {
  flex-wrap: wrap; /* must have multiple lines */
  align-content: stretch; /* default - lines stretch to fill container */
  /* align-content: flex-start; */ /* lines packed at start */
  /* align-content: flex-end; */ /* lines packed at end */
  /* align-content: center; */ /* lines packed at center */
  /* align-content: space-between; */ /* equal space between lines */
  /* align-content: space-around; */ /* equal space around lines */
  /* align-content: space-evenly; */ /* equal space between and around lines */
}
```

### gap, row-gap, column-gap

Creates space between flex items.

```css
.container {
  gap: 10px; /* gap between all items */
  /* row-gap: 10px; */ /* gap between rows */
  /* column-gap: 20px; */ /* gap between columns */
}
```

## Flex Item Properties

### order

Controls the order in which flex items appear.

```css
.item {
  order: 0; /* default */
  /* order: 1; */ /* appears after items with lower order */
  /* order: -1; */ /* appears before items with higher order */
}
```

### flex-grow

Determines how much a flex item can grow relative to other items.

```css
.item {
  flex-grow: 0; /* default - does not grow */
  /* flex-grow: 1; */ /* grows to fill available space */
  /* flex-grow: 2; */ /* grows twice as much as items with flex-grow: 1 */
}
```

### flex-shrink

Determines how much a flex item can shrink relative to other items.

```css
.item {
  flex-shrink: 1; /* default - can shrink if necessary */
  /* flex-shrink: 0; */ /* does not shrink */
  /* flex-shrink: 2; */ /* shrinks twice as much as items with flex-shrink: 1 */
}
```

### flex-basis

Defines the default size of a flex item before remaining space is distributed.

```css
.item {
  flex-basis: auto; /* default - size based on content */
  /* flex-basis: 0; */ /* size based solely on flex-grow */
  /* flex-basis: 200px; */ /* specific initial size */
  /* flex-basis: 25%; */ /* percentage of container */
}
```

### flex

Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
  flex: 0 1 auto; /* default (flex-grow: 0, flex-shrink: 1, flex-basis: auto) */
  /* flex: 1; */ /* same as flex: 1 1 0% */
  /* flex: auto; */ /* same as flex: 1 1 auto */
  /* flex: none; */ /* same as flex: 0 0 auto */
  /* flex: 1 0 200px; */ /* grow, don't shrink, start at 200px */
}
```

### align-self

Overrides the container's `align-items` for specific flex items.

```css
.item {
  align-self: auto; /* default - follows container's align-items */
  /* align-self: flex-start; */ /* item at start of cross axis */
  /* align-self: flex-end; */ /* item at end of cross axis */
  /* align-self: center; */ /* item at center of cross axis */
  /* align-self: stretch; */ /* item stretches to fill container */
  /* align-self: baseline; */ /* item aligned by baseline */
}
```

## Main Axis and Cross Axis

- **Main Axis**: The primary axis along which flex items are laid out (horizontal for row, vertical for column)
- **Cross Axis**: The perpendicular axis to the main axis

```
Main Axis (flex-direction: row)
→ → → → → → → → → → → → → →
↓                           ↓
↓        Cross Axis         ↓
↓                           ↓
```

## Flex Direction and Wrap

### flex-direction: row (default)
```
→ → → → → → → → →
[1] [2] [3] [4] [5]
```

### flex-direction: row-reverse
```
← ← ← ← ← ← ← ← ←
[5] [4] [3] [2] [1]
```

### flex-direction: column
```
↓
↓ [1]
↓ [2]
↓ [3]
↓ [4]
↓ [5]
↓
```

### flex-direction: column-reverse
```
↑
↑ [5]
↑ [4]
↑ [3]
↑ [2]
↑ [1]
↑
```

### flex-wrap: nowrap (default)
```
[1] [2] [3] [4] [5] [6] [7] [8] [9]
```

### flex-wrap: wrap
```
[1] [2] [3] [4] [5]
[6] [7] [8] [9]
```

## Alignment and Justification

### justify-content (main axis alignment)
```
flex-start:    [1] [2] [3] [4] [5] . . . . .
flex-end:      . . . . . [1] [2] [3] [4] [5]
center:        . . . [1] [2] [3] [4] [5] . .
space-between: [1] . . [2] . . [3] . . [4] . . [5]
space-around:  . [1] . . [2] . . [3] . . [4] . [5] .
space-evenly:  . [1] . [2] . [3] . [4] . [5] .
```

### align-items (cross axis alignment)
```
flex-start:  [1]   [2]   [3]
             ---   ---   ---

center:      ---   ---   ---
             [1]   [2]   [3]
             ---   ---   ---

flex-end:    ---   ---   ---
             ---   ---   ---
             [1]   [2]   [3]

stretch:     [1]   [2]   [3]
             [1]   [2]   [3]
             [1]   [2]   [3]

baseline:    [1]   ---   [3]
             ---   [2]   ---
             ---   ---   ---
```

## Practical Flexbox Layouts

### Navigation Bar
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
}
```

### Card Layout
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 0 1 300px; /* Don't grow, can shrink, basis 300px */
}
```

### Holy Grail Layout
```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  flex: 0 0 auto;
}

.main-content {
  display: flex;
  flex: 1 0 auto;
}

.sidebar-left, .sidebar-right {
  flex: 0 0 200px;
}

.content {
  flex: 1 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar-left, .sidebar-right {
    flex: 0 0 auto;
  }
}
```

### Centering with Flexbox
```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered-item {
  /* No additional positioning needed */
}
```