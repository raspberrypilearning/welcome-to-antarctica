## Style a navbar

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
In this step, you will style the navbar you created and add it to the other pages.
</div>
<div>
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step3" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>
</div>
</div>

--- task ---

Add a CSS class inside the opening <nav> tag to style the navbar.

Also add a CSS class to syle each nav item.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 11-13, 16
---

    <header>
      <nav class="navigation-header">
        <div class="navigation-items">
          <a href="index.html" class="active">Home</a>
          <a href="wildlife.html">Wildlife</a>
          <a href="climate.html">Climate</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

Click on the `style.css` file and find the `nav` class.

Add a background colour property to style the nav bar.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
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

### Create new selectors

--- task ---

Create a selector to style how each navbar item is displayed.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
---
    .navigation-items {
        display: flex;
        gap: 100px;
    }

--- /code ---

--- /task ---

--- task ---

Create another selector to style each navbar item's font.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
---
    .navigation-items > a {
      color: #55DDE0;
      text-decoration: none;
      font-weight: 500;
      font-size: 22px;
      transition: .4s ease-in-out;
    }

--- /code ---

--- /task ---

--- task ---

Add a selector to style each menu item when you hover over it.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
---
    .navigation-items > a:hover {
       color: white;
    }

--- /code ---

--- /task ---

--- task ---

Finally, add a property for the active state.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
---
  .navigation-items .active {
      color: white;
      pointer-events: none;
  }

--- /code ---

--- /task ---

--- task ---

Import a Google font to style the fonts on your pages.

Place it at the top of your style.css file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 37
line_highlights: 44
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
line_number_start: 37
line_highlights: 44
---
    body {
      display: flex;
      flex-direction: column;
      font-family: 'Orbitron', sans-serif;
    }
--- /code ---

--- /task ---


#### HTML

#### CSS

**Inside nav**
background-color: #33658A;

**Create new selectors:**
.navigation-items {
    display: flex;
    gap: 100px;
}

.navigation-items > a {
    color: #55DDE0;
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
    transition: .4s ease-in-out;
}

.navigation-items > a:hover {
    color: white;
}

.navigation-items .active {
    color: white;
    pointer-events: none;
}

@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')

### inside body
font-family: 'Orbitron', sans-serif;