# Tables in HTML

## Table Structure

The basic structure of an HTML table consists of the `<table>` element containing rows (`<tr>`) which contain cells (`<td>` or `<th>`).

### Basic Table Structure
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

### Table Elements
- `<table>`: Container for the entire table
- `<tr>`: Table row
- `<th>`: Table header cell (bold and centered by default)
- `<td>`: Table data cell (regular cell)

## Table Attributes

### Common Table Attributes
```html
<table border="1" cellspacing="0" cellpadding="5" width="100%">
  <!-- Table content -->
</table>
```

- `border`: Specifies the border width (deprecated in HTML5, use CSS instead)
- `cellspacing`: Space between cells (deprecated in HTML5, use CSS instead)
- `cellpadding`: Space between cell content and cell walls (deprecated in HTML5, use CSS instead)
- `width`: Table width (deprecated in HTML5, use CSS instead)

### Cell Attributes
```html
<td colspan="2" rowspan="3" align="center" valign="middle">Cell content</td>
```

- `colspan`: Number of columns a cell should span
- `rowspan`: Number of rows a cell should span
- `align`: Horizontal alignment (deprecated in HTML5, use CSS instead)
- `valign`: Vertical alignment (deprecated in HTML5, use CSS instead)

## Table Headers and Footers

### Table Sections
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

- `<thead>`: Groups header content
- `<tbody>`: Groups body content
- `<tfoot>`: Groups footer content

Note: `<tfoot>` can appear before `<tbody>` in the code, but browsers will render it at the bottom.

## Spanning Rows and Columns

### Column Spanning
```html
<table border="1">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First</td>
    <td>Last</td>
    <td>Years</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>30</td>
  </tr>
</table>
```

### Row Spanning
```html
<table border="1">
  <tr>
    <th>Name</th>
    <td>John Doe</td>
  </tr>
  <tr>
    <th rowspan="2">Contact</th>
    <td>Email: john@example.com</td>
  </tr>
  <tr>
    <td>Phone: 123-456-7890</td>
  </tr>
</table>
```

## Table Styling

### Basic CSS for Tables
```css
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
```

### Border Collapse
```css
/* Traditional borders (default) */
table {
  border-collapse: separate;
  border-spacing: 2px;
}

/* Modern borders (recommended) */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

### Zebra Striping
```css
/* Alternate row colors */
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

## Responsive Tables

### Method 1: Horizontal Scrolling
```css
.table-container {
  overflow-x: auto;
}
```

```html
<div class="table-container">
  <table>
    <!-- Table content -->
  </table>
</div>
```

### Method 2: Responsive Table with Data Attributes
```html
<table class="responsive-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">John Doe</td>
      <td data-label="Email">john@example.com</td>
      <td data-label="Phone">123-456-7890</td>
    </tr>
  </tbody>
</table>
```

```css
@media screen and (max-width: 600px) {
  .responsive-table thead {
    display: none;
  }
  
  .responsive-table tr {
    display: block;
    margin-bottom: 15px;
    border: 1px solid #ddd;
  }
  
  .responsive-table td {
    display: block;
    text-align: right;
    border-bottom: 1px solid #ddd;
  }
  
  .responsive-table td:last-child {
    border-bottom: none;
  }
  
  .responsive-table td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
}
```

## Best Practices for HTML Tables

1. **Use tables for tabular data only**, not for layout purposes
2. **Include proper headers** using `<th>` elements
3. **Use `<caption>` for table titles** to improve accessibility
4. **Structure with `<thead>`, `<tbody>`, and `<tfoot>`** for better organization
5. **Keep tables simple** and avoid excessive nesting
6. **Make tables accessible** by using proper markup and ARIA attributes
7. **Use CSS for styling** instead of HTML attributes
8. **Consider responsive design** for mobile devices
9. **Test tables on different screen sizes** to ensure usability