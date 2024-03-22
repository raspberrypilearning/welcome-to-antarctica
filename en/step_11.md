## Upgrade your project

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

If you have time, you can add some more facts, adjust the grid layouts, and change the hero images to make the page your own! 
</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### Add more facts

--- collapse ---

---
title: Add a new fact to the homepage
---

Here is a fact about the research stations on Antartica that you can add to the home page. 

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<p>Of the 56 countries that have signed the Antarctic Treaty, 55 of them operate some sort of research station on the continent. The number of researchers active on Antartica is roughly 4,800 in the summer and 1,200 in the winter.</p>

--- /code ---

You can use the class `research` to add a new background image to this fact.

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<span class="fact-card research">

</span>

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Add some new animals to wildlife.html
---

There are three more pictures of Antarctic wildlife — choose one to add to your `wildlife.html` page. 

You can use the classes:
+ `albatross` - an image of the Antarctic albatross
+ `minke-whale` - for the Antarctic minke whale
+ `gentoo-penguin` - for another penguin, this is the Gentoo species

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<span class="fact-card albatross">

</span>

--- /code ---

Research the animal online and add an interesting fact about them to your page!

--- /collapse ---

### Adjust your grids

You can also change the grids on your pages to adjust the way your facts are displayed. 

--- collapse ---

---
title: Add extra columns and rows
---

You can edit the the `fact-holder` and `fact-holder-wildlife` classes to add more rows or columns. 

--- code ---
---
language: css
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

/* Fact holder - homepage */
.fact-holder {
  display: grid;
  height: 70vh; /* 70% of the visible area of the page */
  grid-template-rows: 33% 33% 33%;
  grid-template-columns: 50% 50%;
}

--- /code ---

You could also add `grid-row-start` and `grid-row-end` properties, or `grid-column-start` and `grid-colum-end` to the background image classes to place your items across rows and columns to customise your layouts. 

--- /collapse ---

### Change your hero images

--- collapse ---

---
title: Add different hero images
---

In the starter projects there are multiple images you can use for your hero images.

Images you have not used yet are...

`antarctic-landscape.jpg`
`antarctic-seasons.jpg`
`antarctic-walk.jpg`

You can change the image URL in the CSS classes for your hero images to make the site your own.

--- /collapse ---

### See the upgraded project

--- collapse ---

---
title: Upgraded project
---

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/welcome-to-antartica-upgraded){:target="_blank"}.

--- /collapse ---
