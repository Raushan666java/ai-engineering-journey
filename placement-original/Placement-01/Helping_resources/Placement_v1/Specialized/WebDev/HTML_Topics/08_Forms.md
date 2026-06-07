# Forms in HTML

## Form Structure and Attributes

The `<form>` element is used to create an HTML form for user input.

### Basic Form Structure
```html
<form action="/submit-form" method="post">
  <!-- Form controls go here -->
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>
```

### Form Attributes
- **action**: URL where form data is sent when submitted
- **method**: HTTP method used to send data (get or post)
- **name**: Name of the form
- **target**: Where to display the response (_self, _blank, _parent, _top)
- **enctype**: How form data should be encoded (important for file uploads)
- **autocomplete**: Whether browser should autocomplete form fields (on, off)
- **novalidate**: Disables browser validation

### Example with Attributes
```html
<form action="/upload" method="post" enctype="multipart/form-data" name="uploadForm" target="_self" autocomplete="off" novalidate>
  <!-- Form controls -->
</form>
```

## Input Types

The `<input>` element is the most commonly used form element with many different types.

### Text Input
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter username" maxlength="20" required>
```

### Password Input
```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="Enter password" minlength="8" required>
```

### Checkbox
```html
<input type="checkbox" id="subscribe" name="subscribe" checked>
<label for="subscribe">Subscribe to newsletter</label>
```

### Radio Buttons
```html
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>

<input type="radio" id="other" name="gender" value="other">
<label for="other">Other</label>
```

### Number Input
```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="18" max="120" step="1">
```

### Date Input
```html
<label for="birthdate">Birthdate:</label>
<input type="date" id="birthdate" name="birthdate" min="1900-01-01" max="2023-12-31">
```

### Time Input
```html
<label for="meeting-time">Meeting time:</label>
<input type="time" id="meeting-time" name="meeting-time">
```

### Email Input
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="name@example.com">
```

### URL Input
```html
<label for="website">Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com">
```

### Tel Input
```html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
```

### Color Input
```html
<label for="color">Choose color:</label>
<input type="color" id="color" name="color" value="#ff0000">
```

### Range Input
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" step="1" value="50">
```

### File Input
```html
<label for="photo">Upload photo:</label>
<input type="file" id="photo" name="photo" accept="image/*">

<!-- Multiple files -->
<input type="file" id="gallery" name="gallery" multiple accept="image/*">
```

### Hidden Input
```html
<input type="hidden" id="user-id" name="user-id" value="12345">
```

### Submit Button
```html
<input type="submit" value="Submit Form">
```

### Reset Button
```html
<input type="reset" value="Reset Form">
```

### Button Input
```html
<input type="button" value="Click Me" onclick="alert('Button clicked!')">
```

### Image Button
```html
<input type="image" src="submit-button.png" alt="Submit" width="100" height="30">
```

## Form Controls

### Textarea
```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here..."></textarea>
```

### Select Dropdown
```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>
```

### Option Groups
```html
<label for="car">Choose a car:</label>
<select id="car" name="car">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

### Multiple Select
```html
<label for="fruits">Select fruits:</label>
<select id="fruits" name="fruits" multiple size="4">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="grape">Grape</option>
  <option value="kiwi">Kiwi</option>
</select>
```

### Button Element
```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hello!')">Click Me</button>
```

### Fieldset and Legend
```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
```

### Datalist
```html
<label for="browser">Choose your browser:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

## Form Validation

### Required Attribute
```html
<input type="text" id="username" name="username" required>
```

### Pattern Attribute
```html
<input type="text" id="zipcode" name="zipcode" pattern="[0-9]{5}" title="Five digit zip code">
```

### Min and Max Attributes
```html
<input type="number" id="age" name="age" min="18" max="120">
<input type="date" id="birthdate" name="birthdate" min="1900-01-01" max="2023-12-31">
```

### Minlength and Maxlength Attributes
```html
<input type="password" id="password" name="password" minlength="8" maxlength="20">
```

### Custom Validation with JavaScript
```html
<form id="myForm" onsubmit="return validateForm()">
  <input type="text" id="username" name="username">
  <span id="usernameError"></span>
  <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
  const username = document.getElementById('username').value;
  const errorElement = document.getElementById('usernameError');
  
  if (username.length < 5) {
    errorElement.textContent = 'Username must be at least 5 characters';
    return false;
  }
  
  return true;
}
</script>
```

## HTML5 Form Features

### Autocomplete
```html
<input type="email" name="email" autocomplete="email">
<input type="tel" name="phone" autocomplete="tel">
```

### Autofocus
```html
<input type="text" name="search" autofocus>
```

### Multiple
```html
<input type="file" name="photos" multiple>
<input type="email" name="cc" multiple>
```

### Placeholder
```html
<input type="text" name="search" placeholder="Search...">
```

### Readonly
```html
<input type="text" name="username" value="johndoe" readonly>
```

### Disabled
```html
<input type="text" name="username" value="johndoe" disabled>
```

### Form Attribute
```html
<!-- Input outside the form but still part of it -->
<form id="myForm" action="/submit">
  <!-- Form fields -->
</form>

<input type="text" name="extraField" form="myForm">
```

### Formaction, Formmethod, Formenctype
```html
<form action="/submit" method="post">
  <input type="text" name="username">
  
  <!-- Regular submit button -->
  <button type="submit">Regular Submit</button>
  
  <!-- Button that overrides form attributes -->
  <button type="submit" 
          formaction="/special-submit" 
          formmethod="get" 
          formenctype="multipart/form-data">
    Special Submit
  </button>
</form>
```

## Form Accessibility

### Proper Labeling
```html
<!-- Method 1: Using the for attribute -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Method 2: Wrapping the input -->
<label>
  Username:
  <input type="text" name="username">
</label>
```

### ARIA Attributes
```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" aria-required="true" aria-describedby="password-help">
<div id="password-help" aria-live="polite">Password must be at least 8 characters</div>
```

### Fieldset for Related Controls
```html
<fieldset>
  <legend>Contact Preferences</legend>
  <input type="checkbox" id="email-contact" name="contact" value="email">
  <label for="email-contact">Email</label>
  
  <input type="checkbox" id="phone-contact" name="contact" value="phone">
  <label for="phone-contact">Phone</label>
</fieldset>
```

### Tabindex
```html
<input type="text" name="first" tabindex="1">
<input type="text" name="second" tabindex="2">
<input type="text" name="third" tabindex="3">
```