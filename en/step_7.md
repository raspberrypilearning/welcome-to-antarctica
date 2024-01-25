## Make it responsive

Make your content smart! No matter if the page is big or small, or if someone is using a different device, it will always look amazing.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Webpages can be viewed on many different devices and should be <span style="color: #0faeb0">**responsive**</span> to each device. This means that if a user views your page on a mobile phone, it should respond to a smaller screen and if they view it on a desktop PC, it should respond to a larger screen. 
</p>

### Make the navbar responsive

On a smaller screen the links in the navbar might get too close together. 

You are going to make the links disappear and be replaced with a **hamburger menu** (☰). 

--- task ---

Open `index.html`.

Inside the `<nav>` tags add a new `<div>` with the `class="hamburger"` attribute. 

Add two `<span>` tags. One is for the 'hamburger' icon (☰) used to open the menu. The other is for a cross icon (✖) used to close the menu.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 17-20
---
    <nav class="navigation-header">
      <div class="nav-items">
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

--- collapse ---

---
title: Using ASCII codes for characters
---

To make the hamburger menue and cross you have used an **ASCII** code, this is a way of adding special characters that don't feature on your keyboard. 

You can find a full list of ASCII codes on [this website](https://www.ascii-code.com/).

--- /collapse ---

**Click the Run button** to see your changes.

--- /task ---

You are using an `id` attribute on each `<span>` element. A unique `id` can be given to any element.

The new icons should only be visible when the screen is small enough.

When the page first loads you don't want the `<div>` to display.

--- task ---

Open `style.css`.

Add the `hamburger` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 74
line_highlights: 75-81
---

/* Hamburger menu */
.hamburger {
  display: none;
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-left: auto;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Create a media query

You are going to use a **media query** to change the styling of elements based on the width of the screen. 

We have set 768px as the screen width below which the media query will trigger.

--- collapse ---

---
title: Using media queries
---

A CSS media query can be used to check lots of things about the way a webpage is currently being displayed. 

You can check attributes of the device showing the page, like the width or the height. For mobile devices you can check whether they are in landscape or portrait mode. 

You can also use media queries to change the styling of a page when it is printed.

--- /collapse ---

--- task ---

At the bottom of `style.css` add your media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 214
line_highlights: 215-217
---

/* Media query */
@media screen and (max-width:768px) {

}

--- /code ---

--- /task ---

--- collapse ---

---
title: Why have we chosen 768px?
---

When the page width is more than 768px, the navbar displays the three page links at the top of the page.

When the page width is 768px or less, the navbar can be hidden and a 'hamburger' menu shown to save space.

--- /collapse ---

Whent the hamburger menu icon is displayed, the cross will remain hidden.

When the hamburger icon is clicked, the page links will be displayed and the close icon will be shown.

--- task ---

Add selectors to style the `.hamburger` `<div>`. 

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 215
line_highlights: 217-220, 222-224
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

**Click the Run button** to see your changes.

Resize the editor preview to see your navbar change!

--- /task ---

You need to open and close the navigation menu.

The navigation items don't look very good at the moment, add some new styling to make them look like a menu.

Before the menu is opened you will set the nav items to `display: none` so they are not shown.

--- task ---

Open `style.css`.

Add a new `.nav-items` selector and styling to the media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 215
line_highlights: 226-238
---
@media screen and (max-width:768px) {
    
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  
  .hamburger #closeHam {
    display: none;
  }   
  
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

**Click the Run button** to see your changes.

--- /task ---

--- task ---

Open `index.html`.

Add the **javascript** file to your page. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 54
line_highlights: 54
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

**Click the Run button** to see your changes.

Click on the burger menu to see your navigation items appear, click the cross to close the menu.

--- /task ---

### Make your grids responsive

When the screen is small, the grids you made earlier are hard to read. 

Make the layout taller by changing it to use four rows and one column.

--- task ---

Add the `fact-holder` selector to the `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 215
line_highlights: 240-245
---
@media screen and (max-width:768px) {
    
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  
  .hamburger #closeHam {
    display: none;
  }   
  
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }
  
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

On the `wildlife.html page`, there is a different fact holder grid layout. 

That layout also needs to change when the screen width reduces. 

You are going to make it taller and change it to five rows in one column.

--- task ---

Add the `fact-holder-wildlife` selector to the `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 215
line_highlights: 247-251
---
@media screen and (max-width:768px) {
    
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  
  .hamburger #closeHam {
    display: none;
  }   
  
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }
  
}

--- /code ---

--- /task ---

You can make the penguin image span two rows by changing its `grid-row-start` and `grid-row-end` properties.

You also need to change the orca image to span the single column used in the `fact-holder-wildlife` layout (at the moment, it is styled to span two columns).

--- task ---

Add the `penguins` and `orcas` selectors to the `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 215
line_highlights: 253-256, 258-261
---
@media screen and (max-width:768px) {
    
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  
  .hamburger #closeHam {
    display: none;
  }   
  
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
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
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Update the other pages

--- task ---

Open `wildlife.html`.

Copy and paste the `<div>` class inside the `<nav>` tags. 

Also remove the `active` class from the `<a>` tag linking to `index.html`.

Add it to the `<a>` tag linking to `wildlife.html`

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 11
line_highlights: 17-20
---
    <nav class="navigation-header">
      <div class="nav-items">
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

--- /task ---

--- task ---

Also add the **javascript** file to your page. 

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 54
line_highlights: 54
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

**Click the Run button** to see your changes.

Click on the burger menu to see your navigation items appear, click the cross to close the menu.

--- /task ---

You will now need to repeat the same steps for climate.html.

--- task ---

OOpen `climate.html`.

Copy and paste the `<div>` class inside the `<nav>` tags. 

Also remove the `active` class from the `<a>` tag linking to `climate.html`.

Add it to the `<a>` tag linking to `climate.html`

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 11
line_highlights: 17-20
---
    <nav class="navigation-header">
      <div class="nav-items">
        <a href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a class="active" href="climate.html">Climate</a>
      </div>
      <div class="hamburger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>
    
--- /code ---

--- /task ---

--- task ---

Also copy and paste (CTRL + C or CMD + C) the **javascript** file to your page. 

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 54
line_highlights: 54
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

**Click the Run button** to see your changes.

Click on each menu item to navigate from page to page.

Resize the preview window to below 768px to see how it responds.

--- /task ---

Fantastic work! You have now built a responsive website that lets people discover a place they may never get a chance to visit - Antarctica. 

Next, you will reflect on your learning by completing a quiz.