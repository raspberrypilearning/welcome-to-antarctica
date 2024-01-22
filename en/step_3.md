## Style a navbar

In this step, you will style the navbar you created and add it to the other pages.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- collapse ---

---
title: How do I style my navbar?
---

If you want to apply styling to specific HTML elements, you can create a class in a CSS file. You can then add a class= attribute to an element in your HTML code to let the browser know what styling should be applied.

You can also style elements (like `<header>` or `<nav>`) directly.

--- /collapse ---

### Style the whole navbar

--- task ---

Click on the `style.css` file and find the `nav` class.

Add a background colour property.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 38
line_highlights: 45
---
nav {
  padding: 0 15px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #33658A;
}

--- /code ---

--- /task ---

**Debug step:** Make sure that `color` is spelled without a 'u'.

**Debug step:** Make sure there is a `;` at the end of the line.

As well as styling the whole navbar, you can style individual links.

--- task ---

Add a `nav-items` class attribute to the `<div>` containing the navbar links. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 12
---

    <header>
      <nav>
        <div class="nav-items">
          <a href="index.html">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

Create a selector for the `nav-items` class to space out the links.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 48
---
.nav-items {
  display: flex;
  gap: 100px;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Style the links

--- task ---

Create another selector to style each `<a>` tag in the `nav-items` div.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 53
---
.nav-items > a {
  color: #55DDE0;
  text-decoration: none;
  font-weight: 500;
  font-size: 22px;
  transition: .4s ease-in-out;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

--- task ---

Add a selector to style each link when you hover over it.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 61
---
.nav-items > a:hover {
  color: white;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

The index.html page will be loaded first.

When that page is open, there is no need for its link to be clickable.

--- task ---

Add a new `active` CSS class for the link to the page that is currently open.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 65
---
.nav-items .active {
  color: white;
  pointer-events: none;
}

--- /code ---

--- /task ---

Add the `active` class attribute to the index.html `<a>` tag.

--- task ---

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13
---

    <header>
      <nav class="navigation-header">
        <div class="nav-items">
          <a href="index.html" class="active">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
    </header>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Change the fonts

--- task ---

Import a Google font to style the fonts on your pages.

Place it at the top of your style.css file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 1
---

@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')

--- /code ---

--- /task ---

--- task ---

Add the font property inside the body selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 3
line_highlights: 13
---
body {
  background-color: #ECE8EF;
  color: #000500;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh; /* Make the content fill the page so the footer is at the bottom */
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
}
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

Next, you're going to put some cool images at the top of your webpage to show everyone what it's about!