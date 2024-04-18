## Responsive navigation bar

Make your content smart! No matter if the page is big or small, or if someone is using a different device, it will always look amazing.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step8" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Webpages can be viewed on many different devices and should be <span style="color: #0faeb0">**responsive**</span> to each device. This means that if a user views your page on a mobile phone, it should respond to the smaller screen size and if they view it on a desktop PC, it should respond to the larger screen size. 
</p>

### Make the navbar responsive

On a smaller screen, the links in the navbar might get too close together. 

You are going to make the links disappear and replaced them with a **hamburger menu** (☰). 

--- task ---

Open `index.html`.

Inside the `<nav>` tags, add a new `<div>` with the `class="hamburger"` attribute. 

Add two `<span>` tags. One is for the 'hamburger' icon (☰) used to open the menu. The other is for a cross icon (✖) used to close the menu.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 12
line_highlights: 18-21
---
    <nav>
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
title: Use ASCII codes for characters
---

To make the hamburger menu and cross, you have used an **ASCII** code. This is a way of adding special characters that don't feature on your keyboard. 

You can find a full list of ASCII codes on [this website](https://www.ascii-code.com/).

--- /collapse ---

--- /task ---

--- task ---

**Click Run**

--- /task ---

You are using an `id` attribute on each `<span>` element. A unique `id` can be given to any element.

The new icons should only be visible when the screen is small enough.

When the page first loads, you don't want the `<div>` to display.

--- task ---

Open `style.css`.

Add the `hamburger` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 71
line_highlights: 72-78
---

/* Hamburger menu */
.hamburger {
  display: none;
  font-size: 20px;
  font-weight: 800;
  color: var(--hamburger-colour);
  margin-left: auto;
}

--- /code ---

--- /task ---

--- task ---

**Click Run**

--- /task ---

### Create a media query

You are going to use a **media query** to change the styling of elements based on the width of the screen. 

We have set 768px as the screen width, below which the media query will trigger.

--- collapse ---

---
title: Using media queries
---

A CSS media query can be used to check lots of things about the way a webpage is currently being displayed. 

You can check attributes of the device showing the page, like the width or the height. For mobile devices, you can check whether they are in landscape or portrait mode. 

You can also use media queries to change the styling of a page when it is printed.

--- /collapse ---

--- task ---

At the bottom of `style.css`, add your media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 212-214
---

/* Media query */
@media screen and (max-width:768px) {

}

--- /code ---

--- /task ---

--- collapse ---

---
title: Why use a max width of 768px?
---

The typical width of a tablet screen is 768px and mobile phone screens are even narrower. Using this width, you can make sure your content looks great on all mobile devices. 

When the page width is more than 768px, the navbar displays the three page links at the top of the page.

When the page width is 768px or less, the navbar can be hidden and a 'hamburger' menu shown to save space.

--- /collapse ---

When the hamburger menu icon is displayed, the cross will remain hidden.

When the hamburger icon is clicked, the page links will be displayed and the close icon will be shown.

--- task ---

Add selectors to style the `.hamburger` `<div>`. 

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 214-217, 219-221
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

--- /task ---

--- task ---

**Click Run**

Resize the Code Editor to see your changes!

--- /task ---

You need to open and close the navigation menu.

The navigation items don't look very good at the moment, so add some new styling to make them look like a menu.

You will set the nav items to `display: none` so they are not shown before the menu is opened.

--- task ---

Open `style.css`.

Add a new `.nav-items` selector and styling to the media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 223-235
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
    background-color: var(--nav-colour);
    width: 100%;
    height: calc(100vh - 58px);
    padding-top: 60px;
    gap: 10vh;
  }  

}

--- /code ---

--- /task ---

--- task ---

**Click Run**

--- /task ---

--- task ---

Open `index.html`.

Add the **JavaScript** file to your page. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 53
line_highlights: 53
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

--- /task ---

--- task ---

**Click Run**

Click on the hamburger menu to see your navigation items appear. Then click the cross to close the menu.

--- /task ---

### Update the other pages

--- task ---

Open `wildlife.html`.

Copy and paste the `hamburger` `<div>` element inside the `<nav>` tags. 

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 13
line_highlights: 19-22
---
    <nav>
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

Also add the **JavaScript** file to your page. 

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 55
line_highlights: 55
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

--- /task ---

--- task ---

**Click Run**

Click on the hamburger menu to see your navigation items appear. Then click the cross to close the menu.

--- /task ---

You now need to add the hamburger `<div>` and JavaScript file to climate.html as well.

--- task ---

Open `climate.html`.

Copy and paste the `hamburger` `<div>` element inside the `<nav>` tags. 

Also copy and paste (CTRL + C or CMD + C) the **JavaScript** file to your page. 

--- /task ---

--- task ---

**Click Run**

Click on each menu item to navigate from page to page.

Resize the preview window to below 768px to see how it responds.

--- /task ---

You have now built a responsive navigation bar. But you the grids could look better when the website is viewed on a mobile device.
