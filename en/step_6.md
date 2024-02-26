## Using grids and animations

Animations and interactivity will make your webpage more fun for visitors!

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

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

Hover your mouse over the images to see your animation!

--- /task ---

Next, you will use a new grid arrangement to organise content in a different way to keep things interesting!