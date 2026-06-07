# 11. jQuery Practice Problem Solutions

Here are sample solutions for the 10 jQuery practice problems. Each solution includes code and a brief explanation.

---

## 1. Toggle Paragraph Visibility
```html
<button id="toggleBtn">Toggle Paragraph</button>
<p id="myPara">This is a paragraph.</p>
<script>
  $('#toggleBtn').click(function() {
    $('#myPara').toggle();
  });
</script>
```

---

## 2. Change Background Color on Hover
```html
<div id="hoverDiv" style="width:100px;height:100px;background:#eee;"></div>
<script>
  $('#hoverDiv').hover(
    function() { $(this).css('background', 'yellow'); },
    function() { $(this).css('background', '#eee'); }
  );
</script>
```

---

## 3. Form Validation
```html
<input type="text" id="name">
<input type="email" id="email">
<button id="submitBtn" disabled>Submit</button>
<script>
  $('input').on('input', function() {
    let allFilled = $('#name').val() && $('#email').val();
    $('#submitBtn').prop('disabled', !allFilled);
  });
</script>
```

---

## 4. Dynamic List Item Addition
```html
<input type="text" id="itemInput">
<button id="addBtn">Add</button>
<ul id="myList"></ul>
<script>
  $('#addBtn').click(function() {
    let val = $('#itemInput').val();
    if(val) $('#myList').append('<li>' + val + '</li>');
  });
</script>
```

---

## 5. Image Gallery Filter
```html
<button id="showCats">Show Cats</button>
<img class="cat" src="cat1.jpg">
<img class="dog" src="dog1.jpg">
<script>
  $('#showCats').click(function() {
    $('img').hide();
    $('img.cat').show();
  });
</script>
```

---

## 6. Accordion Menu
```html
<h3 class="accordion">Section 1</h3>
<div class="panel">Content 1</div>
<h3 class="accordion">Section 2</h3>
<div class="panel">Content 2</div>
<script>
  $('.panel').hide();
  $('.accordion').click(function() {
    $(this).next('.panel').slideToggle();
  });
</script>
```

---

## 7. AJAX Data Fetch
```html
<button id="fetchBtn">Fetch Data</button>
<div id="result"></div>
<script>
  $('#fetchBtn').click(function() {
    $.get('https://jsonplaceholder.typicode.com/posts/1', function(data) {
      $('#result').text(data.title);
    });
  });
</script>
```

---

## 8. Character Counter
```html
<textarea id="myText"></textarea>
<span id="charCount">0</span>
<script>
  $('#myText').on('input', function() {
    $('#charCount').text($(this).val().length);
  });
</script>
```

---

## 9. Tabbed Navigation
```html
<ul>
  <li class="tab" data-tab="1">Tab 1</li>
  <li class="tab" data-tab="2">Tab 2</li>
</ul>
<div class="tab-content" id="tab1">Content 1</div>
<div class="tab-content" id="tab2" style="display:none;">Content 2</div>
<script>
  $('.tab').click(function() {
    var tab = $(this).data('tab');
    $('.tab-content').hide();
    $('#tab' + tab).show();
  });
</script>
```

---

## 10. Smooth Scroll to Section
```html
<a href="#section1" class="scroll">Go to Section 1</a>
<div id="section1" style="margin-top:500px;">Section 1</div>
<script>
  $('.scroll').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
  });
</script>
```

---

Feel free to modify and experiment with these solutions! If you want more problems or explanations, let me know.
