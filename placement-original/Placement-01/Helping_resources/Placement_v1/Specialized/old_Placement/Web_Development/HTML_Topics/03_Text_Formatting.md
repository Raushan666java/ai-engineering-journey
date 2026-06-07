# Text Formatting in HTML

## Headings (h1-h6)
HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important).

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

Best practices:
- Use only one `<h1>` per page for SEO
- Maintain a logical hierarchy (don't skip levels)
- Use headings for structure, not for styling

## Paragraphs
The `<p>` element defines a paragraph.

```html
<p>This is a paragraph of text. HTML will automatically remove extra spaces and line breaks.</p>
<p>This is another paragraph.</p>
```

## Text Formatting Tags

### Bold and Strong
- `<b>`: Bold text without semantic importance
- `<strong>`: Bold text with semantic importance (emphasis)

```html
<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
```

### Italic and Emphasis
- `<i>`: Italic text without semantic importance
- `<em>`: Italic text with semantic importance (emphasis)

```html
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
```

### Highlighting
- `<mark>`: Highlighted/marked text

```html
<p>This is <mark>highlighted</mark> text.</p>
```

### Underline and Strikethrough
- `<u>`: Underlined text
- `<s>` or `<del>`: Strikethrough text
- `<ins>`: Inserted text (usually underlined)

```html
<p>This is <u>underlined</u> text.</p>
<p>This is <s>strikethrough</s> text.</p>
<p>This is <del>deleted</del> and <ins>inserted</ins> text.</p>
```

### Subscript and Superscript
- `<sub>`: Subscript text
- `<sup>`: Superscript text

```html
<p>H<sub>2</sub>O is water.</p>
<p>2<sup>3</sup> equals 8.</p>
```

### Small Text
- `<small>`: Smaller text (often used for fine print)

```html
<p>This is normal text. <small>This is smaller text.</small></p>
```

## Preformatted Text
The `<pre>` element preserves both spaces and line breaks.

```html
<pre>
  This text
    maintains its
      formatting
        exactly as written.
</pre>
```

## Quotations and Citations

### Blockquote
- `<blockquote>`: Block-level quotation

```html
<blockquote cite="https://www.source.com">
    <p>This is a longer quotation from another source.</p>
</blockquote>
```

### Inline Quote
- `<q>`: Inline quotation (browsers typically add quotation marks)

```html
<p>As the saying goes, <q>To be or not to be</q>.</p>
```

### Citation
- `<cite>`: Title of a work being referenced

```html
<p>My favorite book is <cite>The Great Gatsby</cite>.</p>
```

## Abbreviations and Acronyms
- `<abbr>`: Abbreviation or acronym with a title attribute for the full form

```html
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

## Code and Technical Text
- `<code>`: Computer code
- `<kbd>`: Keyboard input
- `<samp>`: Sample output
- `<var>`: Variable

```html
<p><code>const x = 5;</code> is JavaScript code.</p>
<p>Press <kbd>Ctrl + S</kbd> to save.</p>
<p>The program returned <samp>Error 404</samp>.</p>
<p>The equation is <var>E</var> = <var>m</var><var>c</var><sup>2</sup>.</p>
```