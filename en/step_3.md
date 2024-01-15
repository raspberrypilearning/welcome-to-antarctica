## Style a navbar

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
In this step, you will create a navbar to link the pages on the website. This will allow users to navigate from one page to another.
</div>
<div>
<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step2" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>
</div>
</div>

--- task ---

Open the [Welcome to Antarctica starter project](https://staging-editor.raspberrypi.org/en/projects/welcome-to-Antarctica-starter){:target="_blank"}.

--- /task ---

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

You can style this by changing the background colour.

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