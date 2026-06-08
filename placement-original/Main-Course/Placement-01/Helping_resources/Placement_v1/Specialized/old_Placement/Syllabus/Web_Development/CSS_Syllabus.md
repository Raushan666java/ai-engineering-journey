# 🎨 CSS - Complete Syllabus
*Duration: 3-4 weeks | Focus: Styling & Layout*

## Week 1: CSS Fundamentals 🟢

### CSS Basics
**Syntax & Selectors (1 day)**
```css
/* Basic CSS Syntax */
selector {
    property: value;
}

/* Basic Selectors */
/* Element Selector */
p {
    color: blue;
}

/* Class Selector */
.highlight {
    background-color: yellow;
}

/* ID Selector */
#header {
    font-size: 24px;
}

/* Attribute Selector */
input[type="text"] {
    border: 1px solid gray;
}

/* Combinators */
/* Descendant Selector */
article p {
    line-height: 1.6;
}

/* Child Selector */
ul > li {
    list-style-type: square;
}

/* Adjacent Sibling Selector */
h2 + p {
    font-weight: bold;
}

/* General Sibling Selector */
h2 ~ p {
    color: gray;
}

/* Pseudo-classes */
a:hover {
    text-decoration: underline;
}

a:visited {
    color: purple;
}

li:first-child {
    font-weight: bold;
}

li:last-child {
    margin-bottom: 0;
}

li:nth-child(odd) {
    background-color: #f2f2f2;
}

/* Pseudo-elements */
p::first-letter {
    font-size: 2em;
}

p::first-line {
    font-weight: bold;
}

p::before {
    content: "→ ";
}

p::after {
    content: " ←";
}
```

**Colors & Typography (1 day)**
```css
/* Colors */
.color-keywords {
    color: red;
    background-color: black;
    border-color: blue;
}

.color-hex {
    color: #ff0000; /* Red */
    background-color: #000000; /* Black */
    border-color: #0000ff; /* Blue */
}

.color-rgb {
    color: rgb(255, 0, 0); /* Red */
    background-color: rgb(0, 0, 0); /* Black */
    border-color: rgb(0, 0, 255); /* Blue */
}

.color-rgba {
    background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}

.color-hsl {
    color: hsl(0, 100%, 50%); /* Red */
    background-color: hsl(0, 0%, 0%); /* Black */
    border-color: hsl(240, 100%, 50%); /* Blue */
}

.color-hsla {
    background-color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
}

/* Typography */
body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
}

h1, h2, h3 {
    font-family: 'Georgia', serif;
}

h1 {
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

p {
    font-size: 1em;
    font-weight: 400;
    text-align: justify;
    text-indent: 1.5em;
    word-spacing: 2px;
}

.quote {
    font-style: italic;
    font-variant: small-caps;
}

/* Web Fonts */
@font-face {
    font-family: 'CustomFont';
    src: url('custom-font.woff2') format('woff2'),
         url('custom-font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.custom-font {
    font-family: 'Roboto', sans-serif;
}
```

**Box Model & Sizing (1 day)**
```css
/* Box Model */
.box {
    /* Content */
    width: 300px;
    height: 200px;
    
    /* Padding */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    /* Shorthand */
    padding: 10px 20px; /* top/bottom left/right */
    padding: 10px 20px 15px 25px; /* top right bottom left */
    
    /* Border */
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    /* Shorthand */
    border: 2px solid #333;
    border-radius: 5px;
    
    /* Margin */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    /* Shorthand */
    margin: 10px 20px; /* top/bottom left/right */
    margin: 10px auto; /* top/bottom left/right=auto (center) */
    margin: 0 auto; /* center horizontally */
}

/* Box Sizing */
* {
    box-sizing: border-box; /* Include padding and border in element's width and height */
}

.content-box {
    box-sizing: content-box; /* Default */
    width: 300px; /* Content only */
    padding: 20px;
    border: 2px solid black;
    /* Total width: 300px + 40px (padding) + 4px (border) = 344px */
}

.border-box {
    box-sizing: border-box;
    width: 300px; /* Content + padding + border */
    padding: 20px;
    border: 2px solid black;
    /* Total width: 300px (content area adjusted automatically) */
}
```

**Display & Positioning (2 days)**
```css
/* Display Property */
.block {
    display: block; /* Takes full width, starts on new line */
}

.inline {
    display: inline; /* Takes only needed width, no line break */
}

.inline-block {
    display: inline-block; /* Inline but respects width/height */
    width: 100px;
    height: 100px;
}

.none {
    display: none; /* Removes from layout */
}

.hidden {
    visibility: hidden; /* Invisible but keeps space */
}

/* Position Property */
.static {
    position: static; /* Default, follows normal flow */
}

.relative {
    position: relative; /* Positioned relative to normal position */
    top: 20px;
    left: 30px;
}

.absolute {
    position: absolute; /* Positioned relative to nearest positioned ancestor */
    top: 0;
    right: 0;
}

.fixed {
    position: fixed; /* Positioned relative to viewport */
    bottom: 20px;
    right: 20px;
}

.sticky {
    position: sticky; /* Positioned based on scroll position */
    top: 0;
}

/* Z-index */
.layer1 {
    position: relative;
    z-index: 1; /* Higher values appear on top */
}

.layer2 {
    position: relative;
    z-index: 2;
}

/* Float */
.float-left {
    float: left;
}

.float-right {
    float: right;
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

## Week 2: Layout Techniques 🟡

### CSS Layout
**Flexbox (2 days)**
```css
/* Flexbox Container */
.flex-container {
    display: flex;
    
    /* Direction */
    flex-direction: row; /* default */
    /* flex-direction: row-reverse; */
    /* flex-direction: column; */
    /* flex-direction: column-reverse; */
    
    /* Wrapping */
    flex-wrap: nowrap; /* default */
    /* flex-wrap: wrap; */
    /* flex-wrap: wrap-reverse; */
    
    /* Shorthand */
    /* flex-flow: row wrap; */
    
    /* Main Axis Alignment */
    justify-content: flex-start; /* default */
    /* justify-content: flex-end; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
    /* justify-content: space-evenly; */
    
    /* Cross Axis Alignment */
    align-items: stretch; /* default */
    /* align-items: flex-start; */
    /* align-items: flex-end; */
    /* align-items: center; */
    /* align-items: baseline; */
    
    /* Multi-line Alignment */
    align-content: stretch; /* default */
    /* align-content: flex-start; */
    /* align-content: flex-end; */
    /* align-content: center; */
    /* align-content: space-between; */
    /* align-content: space-around; */
}

/* Flexbox Items */
.flex-item {
    /* Order */
    order: 0; /* default */
    
    /* Flexibility */
    flex-grow: 0; /* default, don't grow */
    flex-shrink: 1; /* default, can shrink */
    flex-basis: auto; /* default size */
    
    /* Shorthand */
    flex: 0 1 auto; /* default */
    /* flex: 1; */ /* grow, fill container */
    /* flex: auto; */ /* 1 1 auto */
    /* flex: none; */ /* 0 0 auto */
    
    /* Self Alignment (overrides container's align-items) */
    align-self: auto; /* default */
    /* align-self: flex-start; */
    /* align-self: flex-end; */
    /* align-self: center; */
    /* align-self: stretch; */
    /* align-self: baseline; */
}

/* Common Flexbox Patterns */
/* Centering */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

/* Navigation */
nav ul {
    display: flex;
    list-style: none;
    padding: 0;
}

nav li {
    margin-right: 20px;
}

/* Card Layout */
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    flex: 0 0 calc(33.333% - 20px);
    margin: 10px;
}
```

**CSS Grid (2 days)**
```css
/* Grid Container */
.grid-container {
    display: grid;
    
    /* Explicit Grid */
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 50px 100px;
    
    /* Using fr unit */
    /* grid-template-columns: 1fr 2fr 1fr; */
    
    /* Using repeat() */
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    
    /* Named Grid Lines */
    /* grid-template-columns: [start] 1fr [middle] 2fr [end]; */
    
    /* Grid Template Areas */
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    
    /* Gaps */
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    /* Shorthand */
    grid-gap: 15px 10px; /* row column */
    
    /* Alignment */
    /* Align grid items along row axis */
    justify-items: stretch; /* default */
    /* justify-items: start; */
    /* justify-items: end; */
    /* justify-items: center; */
    
    /* Align grid items along column axis */
    align-items: stretch; /* default */
    /* align-items: start; */
    /* align-items: end; */
    /* align-items: center; */
    
    /* Align grid tracks within container (row axis) */
    justify-content: start; /* default */
    /* justify-content: end; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
    /* justify-content: space-evenly; */
    
    /* Align grid tracks within container (column axis) */
    align-content: start; /* default */
    /* align-content: end; */
    /* align-content: center; */
    /* align-content: space-between; */
    /* align-content: space-around; */
    /* align-content: space-evenly; */
}

/* Grid Items */
.grid-item {
    /* Placement by grid lines */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    
    /* Shorthand */
    grid-column: 1 / 3; /* start / end */
    grid-row: 1 / 2;
    
    /* Using span */
    /* grid-column: 1 / span 2; */
    /* grid-row: 1 / span 1; */
    
    /* Placement by area name */
    grid-area: header;
    
    /* Self Alignment (overrides container's alignment) */
    justify-self: stretch; /* default */
    /* justify-self: start; */
    /* justify-self: end; */
    /* justify-self: center; */
    
    align-self: stretch; /* default */
    /* align-self: start; */
    /* align-self: end; */
    /* align-self: center; */
}

/* Common Grid Patterns */
/* Basic 12-column grid */
.grid-12 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
}

/* Holy Grail Layout */
.holy-grail {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav content sidebar"
        "footer footer footer";
    min-height: 100vh;
}

.holy-grail-header { grid-area: header; }
.holy-grail-nav { grid-area: nav; }
.holy-grail-content { grid-area: content; }
.holy-grail-sidebar { grid-area: sidebar; }
.holy-grail-footer { grid-area: footer; }
```

**Responsive Design (1 day)**
```css
/* Mobile First Approach */
/* Base styles for mobile */
.container {
    width: 100%;
    padding: 15px;
}

.column {
    width: 100%;
    margin-bottom: 20px;
}

/* Media Queries */
/* Tablet */
@media screen and (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
    
    .column {
        width: 48%;
        float: left;
        margin-right: 4%;
    }
    
    .column:nth-child(2n) {
        margin-right: 0;
    }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    .container {
        max-width: 1000px;
    }
    
    .column {
        width: 30%;
        margin-right: 5%;
    }
    
    .column:nth-child(2n) {
        margin-right: 5%;
    }
    
    .column:nth-child(3n) {
        margin-right: 0;
    }
}

/* Print Styles */
@media print {
    body {
        font-size: 12pt;
        color: black;
        background: white;
    }
    
    nav, aside, footer {
        display: none;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    a::after {
        content: " (" attr(href) ")";
    }
}

/* Responsive Images */
img {
    max-width: 100%;
    height: auto;
}

/* Responsive Typography */
html {
    font-size: 16px;
}

@media screen and (min-width: 768px) {
    html {
        font-size: 18px;
    }
}

@media screen and (min-width: 1200px) {
    html {
        font-size: 20px;
    }
}

h1 {
    font-size: 2rem; /* Relative to html font-size */
}

p {
    font-size: 1rem;
}
```

## Week 3: Advanced CSS 🟠

### CSS Techniques
**Transitions & Animations (1 day)**
```css
/* Transitions */
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.05);
}

/* Individual Transition Properties */
.custom-transition {
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.1s;
}

/* Timing Functions */
.timing-examples div {
    transition: transform 1s;
}

.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }
.cubic-bezier { transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); }

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.fade-in {
    animation: fadeIn 1s ease forwards;
}

.slide-in {
    animation: slideIn 0.5s ease-out forwards;
}

.pulse {
    animation: pulse 2s infinite;
}

/* Animation Properties */
.custom-animation {
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 3;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-play-state: running;
}

/* Shorthand */
.animation-shorthand {
    animation: fadeIn 2s ease-in-out 0.5s 3 alternate forwards;
}
```

**Transforms (1 day)**
```css
/* 2D Transforms */
.translate {
    transform: translate(20px, 30px); /* x, y */
}

.translateX {
    transform: translateX(20px);
}

.translateY {
    transform: translateY(30px);
}

.scale {
    transform: scale(1.5); /* x and y */
}

.scaleX {
    transform: scaleX(1.5);
}

.scaleY {
    transform: scaleY(1.5);
}

.rotate {
    transform: rotate(45deg);
}

.skew {
    transform: skew(10deg, 20deg); /* x, y */
}

.skewX {
    transform: skewX(10deg);
}

.skewY {
    transform: skewY(20deg);
}

/* Multiple Transforms */
.multiple {
    transform: translate(20px, 30px) rotate(45deg) scale(1.5);
}

/* Transform Origin */
.origin {
    transform-origin: top left;
    transform: rotate(45deg);
}

/* 3D Transforms */
.perspective-container {
    perspective: 1000px;
}

.rotate3d {
    transform: rotate3d(1, 1, 1, 45deg);
}

.rotateX {
    transform: rotateX(45deg);
}

.rotateY {
    transform: rotateY(45deg);
}

.rotateZ {
    transform: rotateZ(45deg);
}

.translate3d {
    transform: translate3d(20px, 30px, 40px); /* x, y, z */
}

.translateZ {
    transform: translateZ(40px);
}

.scale3d {
    transform: scale3d(1.5, 1.5, 2); /* x, y, z */
}

/* 3D Space */
.preserve3d {
    transform-style: preserve-3d;
}

.backface {
    backface-visibility: hidden;
}
```

**CSS Variables & Preprocessors (1 day)**
```css
/* CSS Variables (Custom Properties) */
:root {
    /* Global variables */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
    --font-size-base: 16px;
    --spacing-unit: 8px;
    --border-radius: 4px;
}

.button {
    background-color: var(--primary-color);
    color: white;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
}

.button-secondary {
    background-color: var(--secondary-color);
}

/* Local scope */
.card {
    --card-padding: 16px;
    padding: var(--card-padding);
}

/* Fallback values */
.element {
    color: var(--undefined-color, #666);
}

/* Dynamic variables with media queries */
@media (min-width: 768px) {
    :root {
        --font-size-base: 18px;
        --spacing-unit: 12px;
    }
}

/* SCSS Example (for reference) */
/*
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;

@mixin button($bg-color) {
    background-color: $bg-color;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    
    &:hover {
        background-color: darken($bg-color, 10%);
    }
}

.button {
    @include button($primary-color);
}

.button-secondary {
    @include button($secondary-color);
}

// Nesting
nav {
    background-color: #f8f8f8;
    
    ul {
        list-style: none;
        padding: 0;
        
        li {
            display: inline-block;
            margin-right: 10px;
            
            a {
                color: $text-color;
                text-decoration: none;
                
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
*/
```

**Advanced Selectors & Specificity (1 day)**
```css
/* Advanced Selectors */
/* Direct child */
.parent > .child {
    color: red;
}

/* Adjacent sibling */
h2 + p {
    font-weight: bold;
}

/* General sibling */
h2 ~ p {
    color: gray;
}

/* Attribute selectors */
[type="text"] {
    border: 1px solid gray;
}

[class^="btn-"] {
    /* Classes starting with "btn-" */
    padding: 5px 10px;
}

[class*="icon"] {
    /* Classes containing "icon" */
    background-repeat: no-repeat;
}

[href$=".pdf"] {
    /* href ending with ".pdf" */
    background-image: url('pdf-icon.png');
}

[data-type~="important"] {
    /* data-type containing the word "important" */
    font-weight: bold;
}

/* Pseudo-classes */
/* Form states */
input:focus {
    border-color: blue;
}

input:disabled {
    background-color: #f2f2f2;
}

input:checked + label {
    font-weight: bold;
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

/* Structural pseudo-classes */
li:first-child {
    font-weight: bold;
}

li:last-child {
    margin-bottom: 0;
}

li:nth-child(odd) {
    background-color: #f2f2f2;
}

li:nth-child(3n+1) {
    /* Every 3rd item, starting with 1st */
    color: blue;
}

p:only-child {
    font-style: italic;
}

div:empty {
    display: none;
}

/* Negation pseudo-class */
.item:not(.featured) {
    opacity: 0.8;
}

input:not([type="submit"]) {
    border: 1px solid gray;
}

/* Specificity */
/* Specificity hierarchy (lowest to highest):
   1. Element selectors (h1, p, div)
   2. Class selectors (.example), attribute selectors ([type="text"]), pseudo-classes (:hover)
   3. ID selectors (#example)
   4. Inline styles (style="")
   5. !important
*/

/* Specificity: 0-0-1 */
p {
    color: black;
}

/* Specificity: 0-1-0 */
.text {
    color: blue;
}

/* Specificity: 0-1-1 */
p.text {
    color: green;
}

/* Specificity: 1-0-0 */
#unique {
    color: red;
}

/* Specificity: 1-0-1 */
#unique p {
    color: purple;
}

/* Overrides all of the above */
p {
    color: orange !important;
}
```

## Week 4: CSS Architecture & Projects 🔴

### CSS Architecture
**CSS Methodologies (1 day)**
```css
/* BEM (Block Element Modifier) */
/* Block */
.card {
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Element */
.card__title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.card__image {
    width: 100%;
    height: auto;
}

.card__content {
    padding: 15px;
}

/* Modifier */
.card--featured {
    border: 2px solid gold;
}

.card--dark {
    background: #333;
    color: white;
}

/* OOCSS (Object Oriented CSS) */
/* Structure */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
}

/* Skin */
.btn-primary {
    background: blue;
    color: white;
}

.btn-secondary {
    background: gray;
    color: white;
}

.btn-large {
    padding: 15px 30px;
    font-size: 1.2rem;
}

/* SMACSS (Scalable and Modular Architecture for CSS) */
/* Base */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Layout */
.l-header {
    height: 80px;
}

.l-sidebar {
    width: 250px;
    float: left;
}

.l-main {
    margin-left: 270px;
}

/* Module */
.nav {
    list-style: none;
}

.nav-item {
    display: inline-block;
}

/* State */
.is-active {
    font-weight: bold;
}

.is-hidden {
    display: none;
}

/* Theme */
.theme-dark {
    background: #333;
    color: white;
}
```

**CSS Optimization & Performance (1 day)**
```css
/* Efficient Selectors */
/* Avoid deep nesting */
/* Bad */
nav ul li a span {
    color: red;
}

/* Better */
.nav-link span {
    color: red;
}

/* Avoid universal selectors */
/* Bad */
* {
    box-sizing: border-box;
}

/* Better */
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}

/* Minimize Repaints and Reflows */
/* Use transform instead of top/left for animations */
/* Bad */
@keyframes move-bad {
    from { top: 0; left: 0; }
    to { top: 100px; left: 100px; }
}

/* Better */
@keyframes move-good {
    from { transform: translate(0, 0); }
    to { transform: translate(100px, 100px); }
}

/* Batch DOM changes */
/* Bad */
.box {
    width: 100px;
    height: 100px;
    background: red;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}

/* Better */
.box {
    width: 100px;
    height: 100px;
    background: red;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}

/* Critical CSS */
/* Inline critical CSS in <head> */
/*
<style>
    /* Critical CSS for above-the-fold content */
    body { margin: 0; font-family: sans-serif; }
    header { height: 60px; background: #333; }
    .hero { height: 400px; background: #f2f2f2; }
</style>
*/

/* Load non-critical CSS asynchronously */
/*
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
*/

/* Minification */
/* Original */
.button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
}

/* Minified */
.button{background-color:#3498db;color:#fff;padding:10px 20px;border-radius:4px}

/* CSS Containment */
.widget {
    contain: content; /* Isolates this element's rendering */
}

.list-container {
    contain: layout; /* Isolates layout effects */
}

.offscreen-menu {
    contain: paint; /* Isolates painting effects */
}

.complex-component {
    contain: strict; /* Combines layout, paint, and size */
}
```

### Projects
**Project 1: Responsive Portfolio (2 days)**
```css
/* Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3 {
    margin-bottom: 20px;
    font-weight: 700;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

p {
    margin-bottom: 15px;
}

/* Header */
header {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
}

/* Navigation */
nav ul {
    display: flex;
    list-style: none;
}

nav li {
    margin-left: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    padding-top: 80px;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 12px 30px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #2980b9;
}

/* About Section */
.about {
    padding: 100px 0;
    background-color: #f9f9f9;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 40px;
}

.about-image {
    flex: 1;
}

.about-image img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text {
    flex: 1;
}

/* Skills Section */
.skills {
    padding: 100px 0;
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.skill-card {
    background-color: white;
    border-radius: 4px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
}

.skill-card:hover {
    transform: translateY(-10px);
}

.skill-card i {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #3498db;
}

/* Projects Section */
.projects {
    padding: 100px 0;
    background-color: #f9f9f9;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.project-card {
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-image {
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 20px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

.project-tag {
    background-color: #e0f7fa;
    color: #00838f;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 5px;
    margin-bottom: 5px;
}

/* Contact Section */
.contact {
    padding: 100px 0;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

.form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

textarea.form-control {
    min-height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    padding: 50px 0;
    text-align: center;
}

.social-links {
    margin-bottom: 20px;
}

.social-links a {
    color: white;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #3498db;
}

/* Media Queries */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .menu-toggle {
        display: block;
    }
    
    nav ul {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: #2c3e50;
        flex-direction: column;
        padding: 20px;
    }
    
    nav ul.show {
        display: flex;
    }
    
    nav li {
        margin: 10px 0;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .about-image, .about-text {
        flex: none;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .btn {
        padding: 10px 20px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```

## Interview Preparation

### Common CSS Interview Questions
1. What is the box model in CSS?
2. Explain the difference between `display: none` and `visibility: hidden`.
3. What are the different positioning methods in CSS?
4. How does CSS specificity work?
5. What is the difference between Flexbox and Grid?
6. Explain the concept of responsive design and how to implement it.
7. What are CSS preprocessors and what are their advantages?
8. How do CSS animations differ from transitions?
9. What is the purpose of media queries?
10. Explain the concept of CSS variables (custom properties).

### CSS Best Practices
- Use a consistent naming convention (BEM, OOCSS, etc.)
- Organize CSS with a clear structure
- Minimize specificity conflicts
- Use shorthand properties when possible
- Avoid inline styles
- Use CSS resets or normalizers
- Optimize for performance
- Write responsive CSS with mobile-first approach
- Comment your code for complex sections
- Use modern CSS features with appropriate fallbacks

## Resources
- **Documentation**: [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Flexbox**: [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid**: [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Practice**: [CodePen](https://codepen.io/), [CSS Battle](https://cssbattle.dev/)
- **Learning**: [freeCodeCamp](https://www.freecodecamp.org/), [CSS-Tricks](https://css-tricks.com/)