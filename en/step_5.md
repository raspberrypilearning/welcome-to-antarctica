## Using grids

Make your webpage layouts awesome by arranging things with grids!

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a grid

The navbar looks great, but the paragraphs of text need some work.

You can organise the text content using a grid layout.

--- collapse ---

---
title: Use the display property to change layouts
---

One of the most important decisions when styling a webpage is how to arrange the elements on the page. 

To change the way elements are arranged, you can use the CSS `display` property. 

There are a few options available for layouts:
+ `inline` - the default, where height and width are determined by the contents
+ `block` - the element will start on a new line and take up the whole width
+ `flex` - makes changing layout and alignment easier
+ `grid` - creates a table layout with rows and columns so elements can be precisely placed

--- /collapse ---

--- task ---

Open `index.html`.

Add a `fact-holder` class attribute to the `<div>` that includes the four paragraphs of text.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 27
---
  <section>
    <div class="fact-holder">
      <span>
        <p>
          Antarctica is the coldest continent, but it is also the driest! On average, there is just 200mm (8 inches) of precipitation a year, the majority of it along the coast.
        </p>
      </span>

--- /code ---

--- /task ---

--- task ---

**Click Run**

--- collapse ---

---
title: My webpage still looks the same?
---

Make sure there is an `=` between `class` and `fact-holder`.  

Make sure there are `"` marks around `fact-holder`.

--- /collapse ---

--- /task ---

At the moment, the paragraphs take up different amounts of space.

![The index.html page after the grid has been added. An arrow stretches all the way across and is labelled 100%. Underneath, an arrow spans the width of the first paragraph and is labelled 75%, next to it another arrow spans the width of the second paragraph and is labelled 25%.](images/grid-sizes.png)

You can change the widths of the grid columns to make them even.

--- task ---

Open `style.css`.

Alter the heights of the two grid rows and the widths of the two grid columns to 50%.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 92
line_highlights: 96-97
---
/* Fact holder - homepage */
.fact-holder {
  display: grid;
  height: 50vh;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
}

--- /code ---

--- /task ---

--- task ---

**Click Run**

--- collapse ---

---
title: My grid has not changed?
---

Make sure there is a space between each `50%`.  

--- /collapse ---

--- /task ---

### Style the facts

The layout of the fact cards is organised. 

However, the fact cards still need styling.

--- task ---

Open `index.html`.

Add a `fact-card` class attribute to each `<span>` element.

Also add the class attribute for each `<span>` element that defines its background image.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28, 33, 38, 43
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

--- task ---

**Click Run**

--- collapse ---

---
title: My grid looks weird?
---

Check all your opening brackets `<` have closing brackets `>`.

--- /collapse ---

--- /task ---

--- task ---

Open `style.css`.

Add the `fact-card` selector to the `style.css` file. This will make sure the background images are centered and cover the whole `<span>` element.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 109-114
---
/* Fact card */ 
.fact-card {
  width: 100%;
  display: flex;
  background-size: cover;
  background-position: center;
}

--- /code ---

The `style.css` file already has the selectors for `sun`, `discovery`, `explorers`, and `ownership`.

--- /task ---

--- task ---

**Click Run**

--- collapse ---

---
title: I can't see my images?
---

In `index.html`, check both class attributes are between the same `"` marks.

In `index.html`, make sure there is a space between each class.

--- /collapse ---

--- /task ---

### Make it more accessible

With the images in place, the text is hard to read. This means your website is not as **accessible** as it could be.

Next, you are going to change the colour of the text and add a transparent background.

--- task ---

Open `index.html`.

Add the `fact` class attribute to each paragraph.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29, 34, 39, 44
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

--- /task ---

--- task ---

**Click Run**

--- /task ---

Next, you are going to add animations to your paragraphs to make the pages interactive!
