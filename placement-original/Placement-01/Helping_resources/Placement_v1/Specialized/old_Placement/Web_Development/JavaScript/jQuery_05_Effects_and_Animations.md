# 5. jQuery Effects and Animations

## Showing and Hiding Elements
- `.show()`: Display hidden elements.
- `.hide()`: Hide elements.
- `.toggle()`: Toggle visibility.
- Optional duration parameter for animation (e.g., `.show(400)`).

## Fading and Sliding
- `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`: Fade elements in/out.
- `.slideDown()`, `.slideUp()`, `.slideToggle()`: Slide elements up/down.
- All accept duration and callback parameters.

## Custom Animations
- `.animate(properties, duration, callback)`: Animate CSS properties.
```js
$('#box').animate({ left: '250px', opacity: 0.5 }, 1000);
```
- Can animate multiple properties at once.

## Chaining Effects
- jQuery allows chaining multiple methods for sequential effects.
```js
$('#box').fadeIn(400).slideDown(400).animate({ left: '100px' }, 500);
```

## Examples
```js
// Hide all paragraphs
$('p').hide();
// Fade in a div
$('#myDiv').fadeIn(600);
// Slide up a menu
$('.menu').slideUp();
```

## Best Learning Methods
- **Practice:** Apply effects to different elements in a sample page.
- **Mini-Projects:** Build an image slider, modal, or accordion.
- **Experiment:** Chain effects and try custom animations.
- **Read Docs:** Explore the [jQuery effects documentation](https://api.jquery.com/category/effects/).

---

Type "next" to get the syllabus and notes for the next topic: AJAX with jQuery.
