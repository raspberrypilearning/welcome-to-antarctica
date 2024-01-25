## Style a navbar

In this step, you will style the navbar you created and add it to the other pages.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- collapse ---

---
title: How do I style my navbar?
---

If you want to apply styling to specific HTML elements, you can create a class in a CSS file. You can then add a `class` attribute to an element in your HTML code to let the browser know what styling should be applied.

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
line_number_start: 35
line_highlights: 43
---
/* Nav bar */
nav {
  padding: 0 15px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33658A;
}

--- /code ---

--- /task ---

**Debug step:** Make sure that `color` is spelled without a 'u'.

**Debug step:** Make sure there is a `;` at the end of the line.

As well as styling the whole navbar, you can style individual links.

--- task ---

Open `index.html`.

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

Open `style.css`.

Create a selector for the `nav-items` class to space out the links.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 47
line_highlights: 48-51
---
/* Nav items */
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
line_highlights: 54-58
---
/* Nav bar links */
.nav-items > a {
  color: #55DDE0;
  text-decoration: none;
  transition: .4s ease-in-out;
}

--- /code ---

--- collapse ---

---
title: Selecting elements within a class
---

Sometimes you will want to style particular elements within a **container** that has a class. To do this you use the `>` operator.

The example you just used styles all `<a>` elements within a container that has the `nav-items` class. 

This allows you to style certain links without affecting all the links on your page. It saves you having to give a class to each individual link.

--- /collapse ---

**Click the Run button** to see your changes.

--- /task ---

--- task ---

Add a selector to style each link when you hover over it.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 59
line_highlights: 60-62
---
/* Nav links hover */
.nav-items > a:hover {
  color: white;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

The index.html page will be loaded first.

When that page is open, the link should stay white and its link should not be clickable.

--- task ---

Add a new `active` CSS class for the link to the page that is currently open.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 64
line_highlights: 65-68
---
/* Nav links active */
.nav-items .active {
  color: white;
  pointer-events: none;
}

--- /code ---

--- /task ---

Open `index.html`.

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