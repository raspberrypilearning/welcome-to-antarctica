## Add hero images

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Put some cool images at the top of your webpage to show everyone what it's about!
</div>
<div>
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step4" width="700" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>
</div>
</div>

### Add a hero image to the header

A large full width image at the top of a page is called a **hero image**.

--- task ---

Add new `<div>` element to the `<header>`.

Give the new `<div>` a class attribute of `hero-image`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html" class="active">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
      <div class="hero-image"></div>
    </header>

--- /code ---

--- /task ---

--- task ---

In `style.css` add a new selector for the `hero-image` class.

Instead of adding a `<img>` element, you can use the CSS `background-image` property to add your image. 

The image should fill the `<div>` element (by setting the size to `cover`) and be centered.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 74
line_highlights: 
---
.hero-image {
  min-height: 50vh;
  background-image: url('northern-lights.jpg'); 
  background-size: cover;
  background-position: center;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Copy the header

`index.html` is looking great! Time to add the header to the other pages.

--- task ---

Highlight and copy (Ctrl + C or Cmd + C) the whole `<header>` section in `index.html`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 9
line_highlights: 10-19
---

  <body>
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html" class="active">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
      <div class="hero-image"></div>
    </header>

--- /code ---

--- /task ---

--- task ---

Paste the `<header>` into `wildlife.html` and change which link has the active class.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 9
line_highlights: 10-19
---

  <body>
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="wildlife.html" class="active">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
      <div class="hero-image"></div>
    </header>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Check the `index.html` link has active removed and `wildlife.html` has active added.

--- task ---

Highlight and copy (Ctrl + C or Cmd + C) the whole `<header>` section in `index.html` again.

--- /task ---

--- task ---

Paste the `<header>` into `climate.html` and change which link has the active class.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 9
line_highlights: 10-19
---

  <body>
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html" class="active">Climate</a>
        </div>
      </nav>
      <div class="hero-image"></div>
    </header>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Check the `index.html` link has active removed and `climate.html` has active added.

### Style the Wildlife page header

The other pages should have different hero images that represent their content!

--- task ---

Inside `style.css` add a new class selector for wildlife.

Rather than recreating the whole class, you can just set a new `background-image` property.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 81
line_highlights: 
---
.wildlife {
    background-image: url('penguins.jpg');
}

--- /code ---

--- /task ---

--- task ---

Now apply the new `wildlife` class as an **addition** to the `hero-image` class in `wildlife.html`.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="wildlife.html" class="active">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
      <div class="hero-image wildlife"></div>
    </header>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Make sure there is a space between the `hero-image` and `wildlife` classes


### Style the Climate page header

--- task ---

Inside `style.css` add another new class selector for climate.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 85
line_highlights: 
---
.climate {
    background-image: url('daytime-antarctica.jpg');
}

--- /code ---

--- /task ---

--- task ---

Now apply the new `climate` class as an **addition** to the `hero-image` class in `climate.html`.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---
    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html" class="active">Climate</a>
        </div>
      </nav>
      <div class="hero-image climate"></div>
    </header>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Make sure there is a space between the `hero-image` and `climate` classes.

--- task ---

Next, you will make your webpages awesome by arranging things with grids and adding fun movements with animations!