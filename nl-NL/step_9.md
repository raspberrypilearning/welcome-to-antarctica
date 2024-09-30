## Responsieve rasters

Making the grids responsive will make sure that anyone can learn about Antarctica, no matter what device they are viewing on.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-complete" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Make your grids responsive

When the screen is small, the grids you made earlier are hard to read.

Make the layout taller by changing it to use four rows and one column.

\--- task ---

Add the `fact-holder` selector to the `@media` query.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 237-241
-------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
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

.fact-holder {
height: 100vh;
grid-template-rows: 25% 25% 25% 25%;
grid-template-columns: 100%;
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

\--- /task ---

On the `wildlife.html` page, there is a different fact holder grid layout.

That layout also needs to change when the screen width reduces.

You are going to make it taller and change it to five rows in one column.

\--- task ---

Add the `fact-holder-wildlife` selector to the `@media` query.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 243-247
-------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
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

\--- /code ---

\--- /task ---

You can make the penguin image span two rows by changing its `grid-row-start` and `grid-row-end` properties.

You also need to change the orca image to span the single column used in the `fact-holder-wildlife` layout (at the moment, it is styled to span two columns).

\--- task ---

Add the `penguins` and `orcas` selectors to the `@media` query.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 249-252, 254-257
----------------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
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

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

Resize the preview window to below 768px to see how each page responds.

\--- /task ---

Fantastic work! You have now built a responsive website that lets people discover a place they may never get a chance to visit — Antarctica.

Next, you will reflect on your learning by completing a quiz.
