## Using grids and animations

Make your webpages awesome by arranging things with grids and adding fun movements with animations!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a grid

The navbar looks great, but the paragraphs of text need some work.

You can organise the text content using a grid layout.

--- collapse ---

---
title: Using the display property to change layouts
---

One of the most important decisions when styling a webpage is how to layout the elements on the page. 

To change the way elements are arranged you can use the CSS `display` property. 

There are a few options available for layouts:
+ `inline` - the default, height and width are determined by the contents.
+ `block` - the element will start on a new line and take up the whole width.
+ `flex` - makes changing layout and alignment easier.
+ `grid` - creates a table layout with rows and columns so elements can be precisely placed.

--- /collapse ---

--- task ---

Open `index.html`.

Add a `fact-holder` class attribute to the `<div>` that includes the four paragraphs of text.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 25
line_highlights: 26
---
  <section>
    <div class="fact-holder">
      <span>
        <p>
          Antarctica is the coldest continent, but it is also the driest! On average there just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Make sure there is an `=` between `class` and `fact-holder`.  
**Debug step:** Make sure there are `"` marks around `fact-holder`.

At the moment, the paragraphs are taking up different amounts of space.

![The index.html page after the grid has been added. A arrow stretches all the way across and is labelled 100%. Underneath an arrow spans the width of the first paragraph and is labelled 75%, next to it another arrow spans the width of the second paragraph and is labelled 25%.](images/grid-sizes.png)

You can change the widths of the grid columns to make them even.

--- task ---

Open `style.css`.

Alter the heights of the two grid rows and the widths of the two grid columns to 50%.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 95
line_highlights: 96-101
---
/* Fact holder - homepage */
.fact-holder {
  display: grid;
  height: 50vh;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Make sure there a space between each `50%`.  

### Style the facts

The layout of the fact cards is organised. 

However, the fact cards still need styling.

--- task ---

Open `index.html`

Add a `fact-card` class attribute to each `<span>` element.

Also add the class attribute for each `<span>` element that defines its background image.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 27, 32, 37, 42
---
    <div class="fact-holder">
      <span class="fact-card sun">
        <p>
          Antarctica is the coldest continent, but it is also the driest! On average there just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>
      <span class="fact-card discovery">
        <p>
          The continent is thought to have been discovered relatively late in human history, in 1820 by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.
        </p>
      </span>
      <span class="fact-card explorers">
        <p>
          Who first set foot on the continent? The first documented and confirmed landing was a crew led by Norwegian Leonard Kristensen at Cape Adare.
        </p>
      </span>
      <span class="fact-card ownership">
        <p>
          Antarctica is governed by the Antarctic Treaty. The Treaty now has 53 supporting nations, 29 of which are considered “Consultative Parties” and are actively involved in decision-making.
        </p>
      </span>

--- /code ---

--- /task ---

The `style.css` file already has the selectors for `sun`, `discovery`, `explorers` and `ownership`.

--- task ---

Open `style.css`

Add the `fact-card` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 109
line_highlights: 110-115
---
/* Fact card */ 
.fact-card {
  width: 100%;
  display: flex;
  background-size: cover;
  background-position: center;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Both class attributes should be between the same `"` marks.

**Debug step:** Leave a space between each class.

### Style the facts

With the images in place the text is hard to read. This means your website is not as **accessible** as it could be.

Next you are going to change the colour of the text and add a transparent background.

--- task ---

Open `index.html`.

Add the `fact` class attribute to each paragraph.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 28, 33, 38, 43
---
    <div class="fact-holder">
      <span class="fact-card sun">
        <p class="fact">
          Antarctica is the coldest continent, but it is also the driest! On average there just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>
      <span class="fact-card discovery">
        <p class="fact">
          The continent is thought to have been discovered relatively late in human history, in 1820 by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.
        </p>
      </span>
      <span class="fact-card explorers">
        <p class="fact">
          Who first set foot on the continent? The first documented and confirmed landing was a crew led by Norwegian Leonard Kristensen at Cape Adare.
        </p>
      </span>
      <span class="fact-card ownership">
        <p class="fact">
          Antarctica is governed by the Antarctic Treaty. The Treaty now has 53 supporting nations, 29 of which are considered “Consultative Parties” and are actively involved in decision-making.
        </p>
      </span>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Add animations on hover

Rather than just showing the fact text, add some interaction to your page!

Make the facts invisible.

--- task ---

Open `style.css`.

Set the `opacity` property of `.fact` to `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 114
line_highlights: 124
---

.fact {
  font-size: 100%;
  color:#ECE8EF;
  background-color: #000500A5;
  height: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 5px;
  opacity: 0;
}

--- /code ---

--- /task ---

Make the facts visible again when the user hovers over it.

--- task ---

Add a new selector `.fact:hover`

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 129-131
---

/* Fact hover */
.fact:hover {
  opacity: 1;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

Instead of switching right away, smooth out the change with a transition.

--- task ---

Add a `transition` property to `.fact`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 114
line_highlights: 125
---

.fact {
  font-size: 100%;
  color:#ECE8EF;
  background-color: #000500A5;
  height: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 5px;
  opacity: 0;
  transition: .4s ease-in-out;
}

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

Next, you will use a new grid arrangement to organise content in a different way to keep things interesting!