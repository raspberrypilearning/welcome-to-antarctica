## Style a navbar

In this step, you will style the navbar you created and add it to the other pages.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- task ---

Add a `nav-items` class attribute to the `<div>` containing the navbar links.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13
--------------------------------------------------------

```
<header>
  <nav>
    <div class="nav-items">
      <a href="index.html">Home</a>
      <a href="wildlife.html">Wildlife</a>
      <a href="climate.html">Climate</a>
    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

### Style the whole navbar

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Styling HTML elements with <span style="color: #0faeb0">**CSS**</span> requires you to specify what styling should apply to which elements. To do this, you use **selectors**. You can select tags like `nav` or you can be more specific and select classes by adding a `.` before the class name — like `.nav-items`.
</p>

\--- task ---

Open the `style.css` file and find the `nav` element selector.

Add a background colour property.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 36
line_highlights: 44
--------------------------------------------------------

/\* Nav bar \*/
nav {
padding: 0 15px;
height: 60px;
font-size: 22px;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--nav-colour);
}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

\--- collapse ---

---

## title: I don't see any new colour?

Make sure that `background-color` is spelled without a 'u' in 'colour'.  `--nav-colour` should still have a 'u', though!

Make sure there is a `;` at the end of the line.

\--- /collapse ---

\--- /task ---

\--- collapse ---

---

## title: Style a class or an element?

If you want to apply styling to specific HTML elements, you can create a class in a CSS file. You can then add the `class` attribute to an element in your HTML code to let the browser know what styling should be applied.

You can also style elements (like `<header>` or `<nav>`) directly.

\--- /collapse ---

\--- task ---

Create a selector for the `nav-items` class to space out the links.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 47
line_highlights: 48-51
-----------------------------------------------------------

/\* Nav items \*/
.nav-items {
display: flex;
gap: 100px;
}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

### Style the links

As well as styling the whole navbar, you can style individual links.

\--- task ---

Create another selector to style each `<a>` tag in the `nav-items` `<div>`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 53
line_highlights: 54-58
-----------------------------------------------------------

/\* Nav bar links \*/
.nav-items > a {
color: var(--nav-items-colour);
text-decoration: none;
transition: .4s ease-in-out;
}

\--- /code ---

\--- collapse ---

---

## title: Select elements within a class

Sometimes you will want to style particular elements within a **container** that has a class. To do this you use the `>` operator.

The example you just used styles all `<a>` elements within a container that has the `nav-items` class.

This allows you to style certain links without affecting all the links on your page. It saves you having to give a class to each individual link.

\--- /collapse ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

\--- task ---

Add a selector to style each link when you hover over it.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 60
line_highlights: 61-63
-----------------------------------------------------------

/\* Nav links hover \*/
.nav-items > a:hover {
color: var(--nav-items-active);
}

\--- /code ---

\--- collapse ---

---

## title: Add interaction styling to an element

When writing CSS, you might want to change the styling of an element when the user interacts with it.

In the example above, you are changing the styling of the `a` elements, but only when a user **hovers** over them with their mouse. The syntax for this is `a:hover`.

The style in this selector will **only** be used when a user's mouse is on top of the element.

\--- /collapse ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

### Create an active link

The `index.html` page will be loaded first.

When that page is open, the link should stay white and not be clickable.

\--- task ---

Add a new `active` CSS class for the link to the page that is currently open.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 65
line_highlights: 66-69
-----------------------------------------------------------

/\* Nav links active \*/
.nav-items .active {
color: var(--nav-items-active);
pointer-events: none;
}

\--- /code ---

\--- /task ---

Open `index.html`.

Add the `active` class attribute to the index.html `<a>` tag.

\--- task ---

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13
--------------------------------------------------------

```
<header>
  <nav>
    <div class="nav-items">
      <a href="index.html" class="active">Home</a>
      <a href="wildlife.html">Wildlife</a>
      <a href="climate.html">Climate</a>
    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

### Change the fonts

\--- task ---

Import a Google font to style the fonts on your pages.

Open `defaults.css`

Place this `@import` statement at the top of your file.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 1
line_highlights: 2
-------------------------------------------------------

/\* Import a font \*/
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

\--- /code ---

\--- /task ---

\--- task ---

Create a new variable inside the `:root` selector, called `--body-font` and set the new Orbitron font.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 4
line_highlights: 8
-------------------------------------------------------

:root {

\--body-background: #ece8ef;
\--body-text-colour: #000500;
\--body-font: "Orbitron", sans-serif;

\--- /code ---

\--- /task ---

\--- task ---

Add the `font-family` property inside the body selector and set it to the new `--body-font` variable you just created.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 4
line_highlights: 14
--------------------------------------------------------

body {
background-color: var(--body-background);
color: var(--body-text-colour);
padding: 0;
margin: 0;
box-sizing: border-box;
width: 100%;
min-height: 100vh; /\* Make the content fill the page so the footer is at the bottom \*/
display: flex;
flex-direction: column;
font-family: var(--body-font);
}
\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

Next, you're going to put some cool images at the top of your webpage to show everyone what it's about!
