## Different types of grids

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

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

--- save ---

### Code to add




#### CSS

.fact-holder-animals {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 3fr;
    height: 70vh;
}

**Inside .penguins**
grid-row-start: 1;
grid-row-end: 3;

**Inside .orcas**
grid-column-start: 1;
grid-column-end: 3;

.fact-holder-climate {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
        "top top"
        "right left"
        "bottom bottom";
    height: 70vh;
}

**Inside .temperature**
grid-area: top;

**Inside .sunburn**
grid-area: right;

**Inside .ice**
grid-area: left;

**Inside .rainfall**
grid-area: bottom;