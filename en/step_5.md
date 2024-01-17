## Using grids and animations

Make your webpages awesome by arranging things with grids and adding fun movements with animations!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a grid

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 34
---
    <div>
        <span>
        <p>
            You probably know it’s the coldest continent on the planet, but
            did you know Antarctica is also the driest? On average, the 7th
            Continent sees just 200 mm (8 in) of precipitation a year, the
            majority of it along the coast.
        </p>

--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---

--- /code ---

--- /task ---

### Style the facts

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---

--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---

--- /code ---

--- /task ---

### Add animations on hover

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---

--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18
---

--- /code ---

--- /task ---

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Step content... 
Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

Next, you will use a new grid arrangement to organise content in a different way to keep things interesting!

### Code to Add

Classes to all of this on the index page...

<div class="fact-holder">
    <span class="fact-card sun">
        <p class="fact">You probably know it’s the coldest continent on the planet, but did you know Antarctica is also the driest? On average, the 7th Continent sees just 200 mm (8 in) of precipitation a year, the majority of it along the coast.</p>
    </span>
    <span class="fact-card discovery">
        <p class="fact">The southernmost continent is thought to have been discovered relatively late in human history, in 1820 by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.</p>
    </span>
    <span class="fact-card explorers">
        <p class="fact">One of the more controversial Antarctic facts among historians is who first set foot on the continent. Many believe it was sealer John Davis in February, 1821. However, the first documented and confirmed landing was by a whaling and sealing Antarctic expedition in January, 1895. A crew led by Norwegian Leonard Kristensen landed a small boat with six men aboard from their ship - aptly named Antarctic - at Cape Adare. </p>
    </span>
    <span class="fact-card ownership">
        <p class="fact">Antarctica is governed by the Antarctic Treaty system, which suspends all territorial claims. First signed by 12 nations in 1959, the Treaty now has 53 supporting nations, 29 of which are considered “Consultative Parties” and are actively involved in decision-making.</p>
    </span>
</div>

#### CSS

.fact-card {
    width: 100%;
    display: flex;
    background-size: cover;
    background-position: center;
}

.fact:hover {
    opacity: 1;
}

**Inside fact**
opacity: 0;
transition: .4s ease-in-out;