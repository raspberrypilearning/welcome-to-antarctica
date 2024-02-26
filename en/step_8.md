## Responsive navigation bar

Make your content smart! No matter if the page is big or small, or if someone is using a different device, it will always look amazing.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step8" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

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
title: Why use a max width of 768px?
---

768px is the typical width of a tablet screen and mobile phone screens are even narrower. Using this width you can make sure your content looks great on all mobile devices. 

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

### Update the other pages

--- task ---

Open `wildlife.html`.

Copy and paste the `hamburger` `<div>` element inside the `<nav>` tags. 

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

You now need to add the hamburger `<div>` and JavaScript file to climate.html as well.

--- task ---

Open `climate.html`.

Copy and paste the `hamburger` `<div>` element inside the `<nav>` tags. 

Also copy and paste (CTRL + C or CMD + C) the **javascript** file to your page. 

--- /task ---

--- task ---

**Click the Run button** to see your changes.

Click on each menu item to navigate from page to page.

Resize the preview window to below 768px to see how it responds.

--- /task ---

You have now built a responsive navigation bar. But you the grids could look better when the website is viewed on a mobile device.