## Make it responsive

Make your content smart! No matter if the page is big or small, or if someone is using a different device, it will always look amazing.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Webpages can be viewed on many different devices and should be <span style="color: #0faeb0">**responsive**</span> to each device. This means that if a user views your page on a mobile phone, it should respond to a smaller screen and if they view it on a desktop PC, it should respond to a larger screen. 
</p>

### Make the navbar responsive

On a smaller screen the links in the navbar might get too close together. 

You are going to make the links disappear and be replaced with a **burger menu**. 

**ToDo** Add image of a burger menu button

--- task ---

Open `index.html`.

Inside the `<nav>` tags add a new `<div>` with two `<span>` tags. 

One for the burger menu icon and one for a cross to close the menu.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <nav class="navigation-header">
      <div class="nav-items" id="nav-items">
        <a class="active" href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a href="climate.html">Climate</a>
      </div>
      <div class="hamburger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>
    
--- /code ---

**TODO** Check line numbering

**TODO** Add collapse about ASCII codes

**Click the Run button** to see your changes.

--- /task ---

You are using an `id` attribute on the `<span>` elements. A unique `id` can be given to any element.

The new icons should only be visible when the screen is small enough.

When the page first loads you don't want them to display.

--- task ---

Open `style.css`.

Add the `hamburger` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.hamburger {
  display: none;
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-left: auto;
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

### Create a media query

You are going to use a **media query** to change the styling of elements based on the width of the screen. 

**TODO** Add collapse about media queries (Media queries can be used to check many things, such as: width and height of the viewport width and height of the device orientation (is the tablet/phone in landscape or portrait mode?)
resolution)

--- task ---

At the bottom of `style.css` add your media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

@media screen and (max-width:768px) {

}

--- /code ---

**TODO** Check line numbering

--- /task ---

When the page width is more than 768px, the navbar displays the three page links at the top of the page.

If the page width reduces, the navbar can be hidden and a 'hamburger' menu (☰) shown.

When the hamburger menu is clicked, the page links will be displayed and a close icon will show.

**TODO** Pete

--- task ---

Add selectors and styling for the `.hamburger` `<div>`. 

The hamburger menu will `<span>`.

When the screen is small, the burger icon should show but the cross will remain hidden.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---
@media screen and (max-width:768px) {
    
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  
  .hamburger #closeHam {
    display: none;
  }   

}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

Resize the editor preview to see your navbar change!

--- /task ---

--- task ---

Open `index.html`.

Add the **javascript** file to your page. 

This will allow your users to open and close the navigation menu.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

Click on the burger menu to see your navigation items appear, click the cross to close the menu.

--- /task ---

--- task ---

The navigation items don't look very good at the moment, add some new styling to make them look like a menu.

Open `style.css`.

Add a new `.nav-items` selector and styling to the media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---
@media screen and (max-width:768px) {
  
  .nav-items {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    top: 58px;
    background-color: #33658A;
    width: 100%;
    height: calc(100vh - 58px);
    padding-top: 60px;
    gap: 10vh;
  }  

}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

### Make your grids responsive

When the screen is small, the grids you made earlier are hard to read. 

You are now going to change the way they display on smaller screens.

--- task ---

Add styling to your media query for the `.fact-holder` grid on `index.html`. 

You are going to make it taller, and change it to have 4 rows and 1 column.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---
@media screen and (max-width:768px) {

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }
  
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

--- task ---



--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---
@media screen and (max-width:768px) {

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }

  .penguins {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .orcas {
    grid-column-start: revert;
    grid-column-end: revert;
  }
  
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

--- task ---



--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---
@media screen and (max-width:768px) {

  .fact-holder-climate {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "top"
        "left"
        "right"
        "bottom";
    height: 140vh;
  }
  
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

### Update the other pages

--- task ---

Open `wildlife.html`.

Copy and paste the `<div>` class inside the `<nav>` tags  . 

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <nav class="navigation-header">
      <div class="nav-items" id="nav-items">
        <a href="index.html">Home</a>
        <a class="active" href="wildlife.html">Wildlife</a>
        <a href="climate.html">Climate</a>
      </div>
      <div class="hamburger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>
    
--- /code ---

**TODO** Check line numbering

--- /task ---





### Code to Add

#### Inside of <nav> in each HTML file

<div class="hamburger">
    <span id="openHam">&#9776;</span>
    <span id="closeHam">&#x2716;</span>
</div>

### CSS styles

#### New classes

.hamburger {
    display: none;
    font-size: 20px;
    font-weight: 800;
    color: white;
    margin-left: auto;
}

@media screen and (max-width:768px) {
    
    .hamburger {
        display: flex;
        cursor: pointer;
    }
    
    .hamburger #closeHam {
        display: none;
    }

    .navigation-items {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        right: 0;
        top: 58px;
        background-color: #33658A;
        width: 100%;
        height: calc(100vh - 58px);
        padding-top: 60px;
        gap: 10vh;
    }

    .fact-holder {
        display: grid;
        grid-template-rows: 25% 25% 25% 25%;
        grid-template-columns: 100%;
        height: 100vh;
    }
    
    .fact-holder-wildlife {
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        height: 140vh;
    }

    .penguins {
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .orcas {
        grid-column-start: revert;
        grid-column-end: revert;
    }

    .fact-holder-climate {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            "top"
            "left"
            "right"
            "bottom";
        height: 140vh;
    }
}

### Javascript add at bottom above </body> of each HTML file

<script type="text/javascript" src="responsive-navbar.js"></script>