# CSS Grid

## Introduction to CSS Grid

CSS Grid Layout is a two-dimensional layout system designed for organizing content in rows and columns. Unlike Flexbox (which is one-dimensional), Grid allows precise control over both rows and columns simultaneously.

## Grid Container Properties

To create a grid container, set the `display` property to `grid` or `inline-grid`:

```css
.container {
  display: grid; /* or inline-grid */
}
```

### grid-template-columns and grid-template-rows

Define the columns and rows of the grid with their sizes.

```css
.container {
  /* 3 columns: 100px, 200px, 100px */
  grid-template-columns: 100px 200px 100px;
  
  /* 2 rows: 50px, 100px */
  grid-template-rows: 50px 100px;
}
```

#### Using fr unit (fraction of available space)
```css
.container {
  /* 3 equal columns */
  grid-template-columns: 1fr 1fr 1fr;
  /* or */
  grid-template-columns: repeat(3, 1fr);
  
  /* First column 2x wider than others */
  grid-template-columns: 2fr 1fr 1fr;
}
```

#### Using repeat() function
```css
.container {
  /* 5 columns of 100px each */
  grid-template-columns: repeat(5, 100px);
  
  /* Pattern repetition */
  grid-template-columns: repeat(3, 100px 200px);
  /* Creates: 100px 200px 100px 200px 100px 200px */
}
```

#### Using minmax() function
```css
.container {
  /* Columns between 100px and 1fr */
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  
  /* Rows at least 100px tall */
  grid-template-rows: repeat(2, minmax(100px, auto));
}
```

#### Using auto-fill and auto-fit
```css
.container {
  /* As many 100px columns as will fit */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  
  /* Similar to auto-fill but collapses empty tracks */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

### grid-template-areas

Defines named grid areas.

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

Use a period (`.`) for empty cells:
```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content ."
    "footer footer footer";
}
```

### grid-template

Shorthand for `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.

```css
.container {
  grid-template:
    "header header header" 50px
    "sidebar content content" 1fr
    "footer footer footer" 50px
    / 200px 1fr 1fr;
}
```

### grid-column-gap, grid-row-gap, grid-gap

Creates space between grid cells.

```css
.container {
  grid-column-gap: 20px; /* gap between columns */
  grid-row-gap: 10px; /* gap between rows */
  
  /* Shorthand */
  grid-gap: 10px 20px; /* row-gap column-gap */
  grid-gap: 15px; /* same gap for rows and columns */
}
```

Modern syntax (preferred):
```css
.container {
  column-gap: 20px;
  row-gap: 10px;
  gap: 10px 20px;
  gap: 15px;
}
```

### justify-items

Aligns grid items along the row axis (horizontally).

```css
.container {
  justify-items: start; /* align to start of cell */
  /* justify-items: end; */ /* align to end of cell */
  /* justify-items: center; */ /* align to center of cell */
  /* justify-items: stretch; */ /* default - stretch to fill cell */
}
```

### align-items

Aligns grid items along the column axis (vertically).

```css
.container {
  align-items: start; /* align to top of cell */
  /* align-items: end; */ /* align to bottom of cell */
  /* align-items: center; */ /* align to center of cell */
  /* align-items: stretch; */ /* default - stretch to fill cell */
}
```

### place-items

Shorthand for `align-items` and `justify-items`.

```css
.container {
  place-items: center; /* both align-items and justify-items: center */
  place-items: start end; /* align-items: start; justify-items: end; */
}
```

### justify-content

Aligns the entire grid within the container along the row axis.

```css
.container {
  justify-content: start; /* default - align grid to left */
  /* justify-content: end; */ /* align grid to right */
  /* justify-content: center; */ /* center grid horizontally */
  /* justify-content: stretch; */ /* stretch grid to fill width */
  /* justify-content: space-around; */ /* equal space around grid columns */
  /* justify-content: space-between; */ /* equal space between grid columns */
  /* justify-content: space-evenly; */ /* equal space between and around grid columns */
}
```

### align-content

Aligns the entire grid within the container along the column axis.

```css
.container {
  align-content: start; /* default - align grid to top */
  /* align-content: end; */ /* align grid to bottom */
  /* align-content: center; */ /* center grid vertically */
  /* align-content: stretch; */ /* stretch grid to fill height */
  /* align-content: space-around; */ /* equal space around grid rows */
  /* align-content: space-between; */ /* equal space between grid rows */
  /* align-content: space-evenly; */ /* equal space between and around grid rows */
}
```

### place-content

Shorthand for `align-content` and `justify-content`.

```css
.container {
  place-content: center; /* both align-content and justify-content: center */
  place-content: space-between center; /* align-content: space-between; justify-content: center; */
}
```

### grid-auto-columns and grid-auto-rows

Define the size of automatically generated grid tracks.

```css
.container {
  grid-auto-columns: 100px; /* auto-generated columns will be 100px wide */
  grid-auto-rows: minmax(100px, auto); /* auto-generated rows will be at least 100px tall */
}
```

### grid-auto-flow

Controls how auto-placed items are inserted in the grid.

```css
.container {
  grid-auto-flow: row; /* default - fill rows first */
  /* grid-auto-flow: column; */ /* fill columns first */
  /* grid-auto-flow: dense; */ /* attempt to fill holes earlier in the grid */
  /* grid-auto-flow: row dense; */ /* fill rows and attempt to fill holes */
}
```

### grid

Shorthand for all grid properties.

```css
.container {
  grid: 100px 300px / 3fr 1fr; /* grid-template-rows / grid-template-columns */
  
  /* Complex example */
  grid:
    "header header" 80px
    "sidebar content" 1fr
    "footer footer" 60px
    / 200px 1fr;
}
```

## Grid Item Properties

### grid-column-start, grid-column-end, grid-row-start, grid-row-end

Determine a grid item's location within the grid.

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

### grid-column and grid-row

Shorthand for start and end properties.

```css
.item {
  grid-column: 1 / 3; /* start / end */
  grid-row: 2 / 4;
  
  /* Using span */
  grid-column: 1 / span 2; /* start at 1, span 2 columns */
  grid-row: 2 / span 2; /* start at 2, span 2 rows */
  
  /* Spanning to end */
  grid-column: 1 / -1; /* start at 1, end at last line */
}
```

### grid-area

Specifies a grid item's size and location, or assigns it to a named grid area.

```css
/* Using line numbers */
.item {
  grid-area: 2 / 1 / 4 / 3; /* row-start / column-start / row-end / column-end */
}

/* Using named area */
.item {
  grid-area: header; /* must match a name in grid-template-areas */
}
```

### justify-self

Aligns a grid item within its cell along the row axis.

```css
.item {
  justify-self: start; /* align to left of cell */
  /* justify-self: end; */ /* align to right of cell */
  /* justify-self: center; */ /* align to center of cell horizontally */
  /* justify-self: stretch; */ /* default - stretch to fill cell width */
}
```

### align-self

Aligns a grid item within its cell along the column axis.

```css
.item {
  align-self: start; /* align to top of cell */
  /* align-self: end; */ /* align to bottom of cell */
  /* align-self: center; */ /* align to center of cell vertically */
  /* align-self: stretch; */ /* default - stretch to fill cell height */
}
```

### place-self

Shorthand for `align-self` and `justify-self`.

```css
.item {
  place-self: center; /* both align-self and justify-self: center */
  place-self: start end; /* align-self: start; justify-self: end; */
}
```

## Grid Lines and Tracks

- **Grid Line**: The dividing lines that make up the grid structure
- **Grid Track**: The space between two adjacent grid lines (a row or column)
- **Grid Cell**: The intersection of a row and column
- **Grid Area**: Any rectangular area bounded by four grid lines

## Implicit and Explicit Grids

- **Explicit Grid**: Defined by `grid-template-rows` and `grid-template-columns`
- **Implicit Grid**: Automatically generated when items are placed outside the explicit grid

## Grid Template Areas

Grid template areas provide a visual way to design grid layouts:

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## Responsive Grid Layouts

### Using minmax and auto-fit/auto-fill
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Using media queries
```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "footer";
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  }
}
```