## Using grids and animations

Make your webpages awesome by arranging things with grids and adding fun movements with animations!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a grid

The navbar looks great, but the paragraphs of text need some work.

You can organise the text content using a grid layout.

**TODO** Add collapse to talk about flex etc used before

--- task ---

Open `index.html`

Add a `fact-holder` class attribute to the `<div>` that includes the four paragraphs of text.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 26
---
    <div class="fact-holder">
      <span>
        <p>
          You probably know it’s the coldest continent on the planet, but did you know Antarctica is also the driest? On average, the 7th Continent sees just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

**Debug step:** Make sure there is an `=` between `class` and `fact-holder`.  
**Debug step:** Make sure there are `"` marks around `fact-holder`.

At the moment, the paragraphs are taking up different amounts of space.

**TODO** Add image to show 75% and 25% on rows and columns

You can change the widths of the paragraphs to make them even.

--- task ---

Open `style.css`

Alter the heights of the two grid rows and the widths of the two grid columns to 50%.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 53
line_highlights: 56-57
---

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
          You probably know it’s the coldest continent on the planet, but did you know Antarctica is also the driest? On average, the 7th Continent sees just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>
      <span class="fact-card discovery">
        <p>
          The southernmost continent is thought to have been discovered relatively late in human history, in 1820 by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.
        </p>
      </span>
      <span class="fact-card explorers">
        <p>
          One of the more controversial Antarctic facts among historians is who first set foot on the continent. Many believe it was sealer John Davis in February, 1821. However, the first documented and confirmed landing was by a whaling and sealing Antarctic expedition in January, 1895. A crew led by Norwegian Leonard Kristensen landed a small boat with six men aboard from their ship - aptly named Antarctic - at Cape Adare.
        </p>
      </span>
      <span class="fact-card ownership">
        <p>
          Antarctica is governed by the Antarctic Treaty system, which suspends all territorial claims. First signed by 12 nations in 1959, the Treaty now has 53 supporting nations, 29 of which are considered “Consultative Parties” and are actively involved in decision-making.
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
line_number_start: 112
---

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

--- task ---

Open `index.html`

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
          You probably know it’s the coldest continent on the planet, but did you know Antarctica is also the driest? On average, the 7th Continent sees just 200 mm (8 in) of precipitation a year, the majority of it along the coast.
        </p>
      </span>
      <span class="fact-card discovery">
        <p class="fact">
          The southernmost continent is thought to have been discovered relatively late in human history, in 1820 by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.
        </p>
      </span>
      <span class="fact-card explorers">
        <p class="fact">
          One of the more controversial Antarctic facts among historians is who first set foot on the continent. Many believe it was sealer John Davis in February, 1821. However, the first documented and confirmed landing was by a whaling and sealing Antarctic expedition in January, 1895. A crew led by Norwegian Leonard Kristensen landed a small boat with six men aboard from their ship - aptly named Antarctic - at Cape Adare.
        </p>
      </span>
      <span class="fact-card ownership">
        <p class="fact">
          Antarctica is governed by the Antarctic Treaty system, which suspends all territorial claims. First signed by 12 nations in 1959, the Treaty now has 53 supporting nations, 29 of which are considered “Consultative Parties” and are actively involved in decision-making.
        </p>
      </span>

--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Add animations on hover

Rather than just showing the fact cards, add some interaction to your page!

Make the facts invisible.

--- task ---

Open `style.css`.

Set the `opacity` property of `.fact` to `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 100
line_highlights: 110
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
line_number_start: 121
---

.fact:hover {
  opacity: 1;
}

--- /code ---

--- collapse ---

---
title: Adding interaction styling to an element
---

When writing CSS you might want to change the styling on an element when the user interacts with it. 

In the example above, you are changing the styling of the `.fact` class, but only when a user **hovers** over it with their mouse. The syntax for this is `fact:hover`. 

The style in this selector will **only** be used when a user's mouse is on top of the element.

--- /collapse ---

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
line_number_start: 100
line_highlights: 111
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