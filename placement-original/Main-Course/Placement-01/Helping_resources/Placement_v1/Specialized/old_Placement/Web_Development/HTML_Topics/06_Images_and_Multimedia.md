# Images and Multimedia in HTML

## Image Tags and Attributes

The `<img>` element is used to embed images in an HTML document.

### Basic Syntax
```html
<img src="image.jpg" alt="Description of image">
```

### Essential Attributes
- **src**: Specifies the path to the image (required)
- **alt**: Provides alternative text for the image (required for accessibility)

### Additional Attributes
- **width**, **height**: Specify dimensions in pixels
- **title**: Provides additional information (tooltip)
- **loading**: Controls how the browser loads the image (eager, lazy)

### Examples
```html
<!-- Basic image -->
<img src="cat.jpg" alt="A cat sitting on a windowsill">

<!-- With dimensions -->
<img src="logo.png" alt="Company Logo" width="200" height="100">

<!-- With title -->
<img src="chart.jpg" alt="Sales chart for Q1 2023" title="Q1 2023 Sales Data">

<!-- Lazy loading -->
<img src="large-image.jpg" alt="Large landscape photo" loading="lazy">
```

## Image Formats

### JPEG (Joint Photographic Experts Group)
- Best for photographs and complex images with many colors
- Lossy compression (quality vs file size tradeoff)
- Does not support transparency
- File extensions: .jpg, .jpeg

### PNG (Portable Network Graphics)
- Best for images with transparency, text, or sharp edges
- Lossless compression
- Supports transparency (alpha channel)
- File extensions: .png

### GIF (Graphics Interchange Format)
- Supports simple animations
- Limited to 256 colors
- Supports transparency (binary - either fully transparent or opaque)
- File extensions: .gif

### SVG (Scalable Vector Graphics)
- Vector-based format (scales without quality loss)
- Best for logos, icons, and simple illustrations
- Can be styled with CSS and manipulated with JavaScript
- File extensions: .svg

### WebP
- Modern format with better compression than JPEG and PNG
- Supports both lossy and lossless compression
- Supports animation and transparency
- File extensions: .webp

## Responsive Images

### Using the srcset Attribute
Provides multiple image sources for different screen resolutions.

```html
<img src="small.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 1500w"
     alt="Responsive image">
```

### Using the sizes Attribute
Tells the browser what size the image will be displayed at different breakpoints.

```html
<img src="small.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 1500w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="Responsive image">
```

### Using the picture Element
Provides more control over which image is displayed based on media queries.

```html
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 600px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>
```

## Image Maps
Image maps define clickable areas on an image.

```html
<img src="world-map.jpg" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="0,0,100,100" href="north-america.html" alt="North America">
  <area shape="circle" coords="200,200,50" href="europe.html" alt="Europe">
  <area shape="poly" coords="300,100,320,150,350,120" href="asia.html" alt="Asia">
</map>
```

- **shape**: Defines the shape (rect, circle, poly)
- **coords**: Specifies coordinates for the shape
- **href**: Destination URL when the area is clicked
- **alt**: Alternative text for the area

## Audio and Video Elements

### Audio Element
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

#### Audio Attributes
- **controls**: Displays audio controls (play, pause, volume)
- **autoplay**: Starts playing automatically (discouraged)
- **loop**: Repeats the audio when finished
- **muted**: Mutes the audio
- **preload**: Specifies if/how the audio should be loaded (auto, metadata, none)

### Video Element
```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

#### Video Attributes
- **controls**: Displays video controls
- **width**, **height**: Dimensions in pixels
- **autoplay**: Starts playing automatically (discouraged)
- **loop**: Repeats the video when finished
- **muted**: Mutes the audio
- **poster**: Specifies an image to show before the video plays
- **preload**: Specifies if/how the video should be loaded

## Embedding Media

### Embedding YouTube Videos
```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Embedding Google Maps
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..." 
  width="600" height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

### Embedding Other Content
```html
<!-- Generic iframe -->
<iframe src="https://example.com/embed" width="500" height="300"></iframe>

<!-- Embedding PDF -->
<object data="document.pdf" type="application/pdf" width="500" height="700">
  <p>Your browser does not support PDFs. <a href="document.pdf">Download the PDF</a>.</p>
</object>
```

## Best Practices for Images and Multimedia

1. **Always include alt text**: Provide descriptive alternative text for images.
2. **Optimize file sizes**: Compress images for faster loading.
3. **Specify dimensions**: Include width and height attributes to prevent layout shifts.
4. **Use responsive techniques**: Ensure images work well on all screen sizes.
5. **Consider accessibility**: Provide captions and transcripts for audio/video content.
6. **Choose the right format**: Select the appropriate image format for each use case.
7. **Lazy load when appropriate**: Use loading="lazy" for images below the fold.
8. **Provide fallbacks**: Include alternative content for browsers that don't support certain features.