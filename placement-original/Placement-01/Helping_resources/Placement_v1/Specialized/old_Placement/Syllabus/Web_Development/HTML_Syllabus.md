# 🌐 HTML - Complete Syllabus
*Duration: 2-3 weeks | Focus: Semantic Markup & Structure*

## Week 1: HTML Fundamentals 🟢

### HTML Basics
**Document Structure (1 day)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

**Text Elements (1 day)**
```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs and Text Formatting -->
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
<p>This text contains <mark>highlighted</mark> content and <code>code snippets</code>.</p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup> text.</p>

<!-- Line Breaks and Horizontal Rules -->
<p>This is a line<br>with a break.</p>
<hr>
<p>Content after horizontal rule.</p>

<!-- Preformatted Text -->
<pre>
    This text preserves
        whitespace and
    formatting.
</pre>
```

**Lists (1 day)**
```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
    </li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Definition List -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard markup language for web pages.</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used for styling web pages.</dd>
</dl>
```

**Links & Navigation (1 day)**
```html
<!-- Basic Links -->
<a href="https://www.example.com">External Link</a>
<a href="about.html">Internal Link</a>
<a href="#section-id">Link to Page Section</a>
<a href="mailto:contact@example.com">Email Link</a>
<a href="tel:+1234567890">Phone Link</a>

<!-- Link Attributes -->
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    Open in New Tab
</a>

<!-- Image as Link -->
<a href="https://www.example.com">
    <img src="logo.png" alt="Company Logo">
</a>

<!-- Navigation Menu -->
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

**Images & Media (1 day)**
```html
<!-- Basic Images -->
<img src="image.jpg" alt="Description of image">

<!-- Image with Size Attributes -->
<img src="image.jpg" alt="Sized image" width="300" height="200">

<!-- Responsive Images -->
<picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <source media="(min-width: 480px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Responsive image">
</picture>

<!-- Figure with Caption -->
<figure>
    <img src="chart.jpg" alt="Sales chart">
    <figcaption>Fig.1 - Annual Sales Data</figcaption>
</figure>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>

<!-- Video -->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video element.
</video>
```

## Week 2: Advanced HTML 🟡

### Semantic HTML
**Semantic Structure (1 day)**
```html
<header>
    <h1>Website Title</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <section id="home">
        <h2>Home</h2>
        <p>Welcome to our website!</p>
    </section>
    
    <section id="about">
        <h2>About Us</h2>
        <p>Learn more about our company.</p>
        
        <article>
            <h3>Our History</h3>
            <p>Founded in 2010, we've been serving customers for over a decade.</p>
        </article>
    </section>
    
    <aside>
        <h3>Related Information</h3>
        <p>Check out our latest news and updates.</p>
    </aside>
</main>

<footer>
    <p>&copy; 2023 My Company. All rights reserved.</p>
</footer>
```

**Tables (1 day)**
```html
<!-- Basic Table -->
<table>
    <caption>Monthly Savings</caption>
    <thead>
        <tr>
            <th>Month</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$5000</td>
            <td>$3000</td>
            <td>$2000</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$5200</td>
            <td>$3100</td>
            <td>$2100</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Total Savings</td>
            <td>$4100</td>
        </tr>
    </tfoot>
</table>

<!-- Advanced Table Features -->
<table>
    <colgroup>
        <col style="background-color: #f2f2f2">
        <col span="2">
        <col style="background-color: #e6f7ff">
    </colgroup>
    <tr>
        <th rowspan="2">Category</th>
        <th colspan="2">Products</th>
        <th rowspan="2">Revenue</th>
    </tr>
    <tr>
        <th>Name</th>
        <th>Units</th>
    </tr>
    <tr>
        <td>Electronics</td>
        <td>Laptop</td>
        <td>20</td>
        <td>$20,000</td>
    </tr>
</table>
```

**Forms (2 days)**
```html
<!-- Basic Form -->
<form action="/submit-form" method="post">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" minlength="8" required>
    </div>
    
    <button type="submit">Submit</button>
</form>

<!-- Form Input Types -->
<form>
    <!-- Text Inputs -->
    <input type="text" placeholder="Username">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <input type="tel" placeholder="Phone Number">
    <input type="number" min="1" max="100" step="1" value="1">
    <input type="url" placeholder="Website">
    
    <!-- Date and Time -->
    <input type="date">
    <input type="time">
    <input type="datetime-local">
    <input type="month">
    <input type="week">
    
    <!-- Selection Inputs -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
    
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    
    <select name="country">
        <option value="">Select Country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
    </select>
    
    <!-- Multi-select -->
    <select name="languages" multiple>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
    </select>
    
    <!-- Text Area -->
    <textarea name="message" rows="4" cols="50" placeholder="Your message"></textarea>
    
    <!-- File Upload -->
    <input type="file" name="document">
    <input type="file" name="images" multiple accept="image/*">
    
    <!-- Hidden Input -->
    <input type="hidden" name="user_id" value="123">
    
    <!-- Buttons -->
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Click Me</button>
</form>

<!-- Form with Fieldset and Legend -->
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname">
        
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname">
    </fieldset>
    
    <fieldset>
        <legend>Contact Information</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
    </fieldset>
</form>
```

### HTML5 Features
**Semantic Elements (1 day)**
```html
<!-- HTML5 Semantic Elements -->
<header>Site header and navigation</header>
<nav>Navigation links</nav>
<main>Main content of the page</main>
<article>Self-contained content</article>
<section>Grouped related content</section>
<aside>Sidebar content</aside>
<footer>Footer information</footer>

<!-- Additional Semantic Elements -->
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Caption for the image</figcaption>
</figure>

<details>
    <summary>Click to expand</summary>
    <p>Hidden content that can be expanded.</p>
</details>

<time datetime="2023-07-21">July 21, 2023</time>
<mark>Highlighted text</mark>
<progress value="70" max="100">70%</progress>
<meter value="0.6">60%</meter>
```

**Embedding Content (1 day)**
```html
<!-- iframes -->
<iframe src="https://www.example.com" width="600" height="400" title="Example Website"></iframe>

<!-- Embedded Maps -->
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619427748465!5m2!1sen!2sin" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>

<!-- Embedded Videos -->
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

<!-- SVG -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

<!-- Canvas -->
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>
```

## Week 3: HTML Best Practices & Projects 🟠

### HTML Best Practices
**Accessibility (1 day)**
```html
<!-- Accessible HTML -->
<!-- Use semantic elements -->
<nav aria-label="Main Navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<section>
    <h2>Section Title</h2>
    <h3>Subsection Title</h3>
</section>

<!-- Alt text for images -->
<img src="logo.png" alt="Company Logo">

<!-- ARIA attributes -->
<button aria-label="Close" aria-expanded="false">
    <span class="icon">×</span>
</button>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Form accessibility -->
<label for="name">Name:</label>
<input type="text" id="name" name="name" aria-required="true">

<!-- Tables with headers -->
<table>
    <caption>Monthly Budget</caption>
    <thead>
        <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Rent</th>
            <td>$1000</td>
        </tr>
    </tbody>
</table>
```

**SEO & Metadata (1 day)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Page Title | Website Name</title>
    <meta name="description" content="A brief description of the page content (150-160 characters)">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Author Name">
    
    <!-- Open Graph Meta Tags (for social sharing) -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description">
    <meta name="twitter:image" content="https://example.com/image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://example.com/page">
</head>
<body>
    <!-- Page content -->
</body>
</html>
```

**Responsive Design (1 day)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Responsive viewport meta tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
</head>
<body>
    <!-- Responsive Images -->
    <img src="small.jpg" 
         srcset="small.jpg 500w,
                 medium.jpg 1000w,
                 large.jpg 1500w"
         sizes="(max-width: 600px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
         alt="Responsive image">
    
    <!-- Picture Element for Art Direction -->
    <picture>
        <source media="(min-width: 1200px)" srcset="desktop.jpg">
        <source media="(min-width: 768px)" srcset="tablet.jpg">
        <img src="mobile.jpg" alt="Responsive image with art direction">
    </picture>
    
    <!-- Responsive Video Embed -->
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    </div>
</body>
</html>
```

### Projects
**Project 1: Personal Portfolio (2 days)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe | Web Developer</title>
    <meta name="description" content="Portfolio of John Doe, a web developer specializing in front-end development.">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>John Doe</h1>
            <p>Web Developer & Designer</p>
            <img src="profile.jpg" alt="John Doe profile picture">
        </section>
        
        <section id="about">
            <h2>About Me</h2>
            <p>I'm a passionate web developer with expertise in HTML, CSS, and JavaScript.</p>
            
            <h3>Skills</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
            </ul>
        </section>
        
        <section id="projects">
            <h2>My Projects</h2>
            
            <article class="project">
                <h3>E-commerce Website</h3>
                <img src="project1.jpg" alt="E-commerce project screenshot">
                <p>A responsive e-commerce website built with HTML, CSS, and JavaScript.</p>
                <a href="#project1">View Project</a>
            </article>
            
            <article class="project">
                <h3>Portfolio Template</h3>
                <img src="project2.jpg" alt="Portfolio template screenshot">
                <p>A customizable portfolio template for creative professionals.</p>
                <a href="#project2">View Project</a>
            </article>
        </section>
        
        <section id="contact">
            <h2>Contact Me</h2>
            <form action="/submit-form" method="post">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
        <div class="social-links">
            <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com" aria-label="GitHub">GitHub</a>
            <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
        </div>
    </footer>
</body>
</html>
```

## Interview Preparation

### Common HTML Interview Questions
1. What is HTML5 and what are its new features?
2. Explain the difference between `<div>` and `<span>`.
3. What is semantic HTML and why is it important?
4. Explain the difference between `<strong>` vs `<b>` and `<em>` vs `<i>`.
5. What is the purpose of the `alt` attribute in images?
6. Explain the difference between block and inline elements.
7. What is the purpose of the `doctype` declaration?
8. How do you make a webpage responsive?
9. What are data attributes in HTML?
10. Explain the difference between localStorage, sessionStorage, and cookies.

### HTML Best Practices
- Use semantic HTML elements
- Maintain proper heading hierarchy
- Include alt text for images
- Use descriptive link text
- Validate your HTML code
- Keep markup clean and minimal
- Ensure proper nesting of elements
- Use appropriate input types for forms
- Include proper meta tags
- Make your HTML accessible

## Resources
- **Documentation**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **Validation**: [W3C Markup Validation Service](https://validator.w3.org/)
- **Accessibility**: [WebAIM](https://webaim.org/)
- **Practice**: [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/)
- **Learning**: [freeCodeCamp](https://www.freecodecamp.org/), [W3Schools](https://www.w3schools.com/html/)