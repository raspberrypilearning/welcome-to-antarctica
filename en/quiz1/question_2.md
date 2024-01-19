--- question ---

---
legend: Question 2 of 3
---

You used CSS properties in your project to specify the position of your content using a grid layout.

Which lines of code below help you specify the position of an element in a grind layout?

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.orcas {
  background-image: url('orca-photo.jpg');
  grid-column-start: 1;
  grid-column-end: 3;
}

--- /code ---

--- choices ---

- ( ) 2

  --- feedback ---

Take another look. The first line creates the `.orcas` selector but does not specify the position.
 
  --- /feedback ---

- ( ) 1

  --- feedback ---

Not quite. The second line sets the background URL image for the Orcas content.

  --- /feedback ---

- (x) 3 and 4

  --- feedback ---

  Correct! The third line and fourth line use the `grid-column` properties which allow you specify the position of an element within a grid

  --- /feedback ---

--- /choices ---

--- /question ---
