## Different types of grids

Use a new grid arrangement on the wildlife page to organise the fact cards in a different way to keep things interesting!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Change the title of the wildlife page

--- task ---

Open `wildlife.html`

Change the `h1` text.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <section>
      <h1>Hover on the cards below to learn about the animals in Antarctica</h1>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Add a grid to the wildlife page

--- task ---

Add the `fact-holder` class attribute to the `<div>`.

Add a `fact-card` and a background image class to each `<span>` element.

Add the `fact` class attribute to each paragraph.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
<div class="fact-holder">
  <span class="fact-card penguins">
    <p class="fact">
      Emperor penguins, live in colonies on sea ice. Sea ice is frozen sea water which fringes the Antarctic continent. In the winter sea ice expands. In the summer, it shrinks as the sea ice melts. By the time the chicks are ready to fledge, the sea ice edge is close to the colony, so the young penguins don’t have to travel far to get their food.
    </p>
  </span>
  <span class="fact-card krill">
    <p class="fact">
      Krill is eaten by many other organisms such as penguins, birds, or even ginormous elephant seals! Because there are so many different organisms feeding from the krill, there needs to be lots and lots of krill available, especially as they are only 2 inches long!
    </p>
  </span>
  <span class="fact-card seals">
    <p class="fact">
      Seals have thick beautiful fur coats and blubber, making them supremely adapted to the cold. There are six species in Antarctica: Antarctic Fur Seals, Leopard Seals, Ross Seals, Southern Elephant seals, Crabeater Seals and Weddell Seals.
    </p>
  </span>
  <span class="fact-card orcas">
    <p class="fact">
      At the top of the food chain, there are Orcas, often known as Killer Whales. These are the biggest carnivores on Earth, reaching almost 10m in length! They can be found swimming all around the Earth’s oceans, but in particular in the Southern Ocean around Antarctica.
    </p>
  </span>
</div>
    
--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

There are different ways to size your grid layout, you can use `fr` to create **fractions** of the sizing.

**TODO** Fractions collapse

--- task ---

Open `style.css`

Add the `fact-holder-wildlife` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.fact-holder-wildlife {
  display: grid;
  height: 70vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 3fr;
}

--- /code ---

**TODO** Check line numbering

--- /task ---

--- task ---

Open `wildlife.html`.

Change the class attribute on the `<div>` to your new `fact-holder-wildlife` class.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 30
line_highlights: 30
---
  <div class="fact-holder-wildlife">
    <span class="fact-card penguins">
        <p class="fact">
        Emperor penguins, live in colonies on sea ice. Sea ice is frozen sea water which fringes the Antarctic continent. In the winter sea ice expands. In the summer, it shrinks as the sea ice melts. By the time the chicks are ready to fledge, the sea ice edge is close to the colony, so the young penguins don’t have to travel far to get their food.
        </p>
    </span>

--- /code ---

**Click the Run button** to see your changes.

Now your wildlife grid has 3 rows that take up a third of the space each, and two columns that are 1/3 and 2/3 of the width.

**TODO** Create image to highlight the point above 

--- /task ---

Grid layout will automatically position your items. You can also specify how you want items to be displayed.

You will make it so the penguin fact stretches over two rows, and the orca fact takes up the whole last row.

--- task ---

Add `grid-row-start` to `.penguins` and set it to `1`.

Add `grid-row-end ` to `.penguins` and set it to `3`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.penguins {
  background-image: url('penguin-photo.jpg');
  grid-row-start: 1;
  grid-row-end: 3;
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

**TODO** Add collapse about setting the row here

--- task ---

Add `grid-column-start` to `.orcas` and set it to `1`.

Add `grid-column-end ` to `.orcas` and set it to `3`.

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

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

### Change the title of the climate page

--- task ---

Open `climate.html`.

Change the `h1` text.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <section>
      <h1>Hover on the cards below to learn about the climate in Antarctica</h1>
    
--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

### Add a grid to the climate page

--- task ---

Add the `fact-holder` class attribute to the `<div>`.

Add a `fact-card` and a background image class to each `<span>` element.

Add the `fact` class attribute to each paragraph.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <div class="fact-holder">
      <span class="fact-card temperature">
        <p class="fact">
          Antarctica is the coldest continent on Earth. The average temperature in the interior throughout the year is about -57°C, with the minimum temperature being -90°C during the winter season. Although the coast is warmer and temperatures can reach a maximum of between -2°C and 8°C during the summer. It is, on average, the coldest, windiest, and driest of all the continents on Earth.
        </p>
      </span>
      <span class="fact-card sunburn">
        <p class="fact">
          Strangely enough, one can suffer serious sunburn whilst there as the snow acts as a reflector which reflects nearly all the ultraviolet rays, so although you may not feel the heat, you still need to make sure to keep your skin safe from the rays.
        </p>
      </span>
      <span class="fact-card ice">
        <p class="fact">
          This ice sheet is, on average, 1.6 km thick and covers about 98% of the entire continent; this is nearly 90% of the entire world’s ice, so it’s no wonder the Antarctic climate is so cold!
        </p>
      </span>
      <span class="fact-card rainfall">
        <p class="fact">
          Technically, Antarctica is a desert because it is so dry there; with an average annual precipitation of just 166mm along the coastal regions, and even less when moving further inland. With such cold conditions the snow hardly ever melts; instead, it will mostly become compressed over time to form part of the ice sheet. This is known as an ice cap climate (classified as a continent where the average monthly temperature never exceeds 0°C).
        </p>
      </span>
    </div>
    
--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

You can also assign names to different areas of your grid to make placing items easier.

--- task ---

Open `style.css`

Add the `fact-holder-climate` selector to the `style.css` file.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.fact-holder-climate {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "top top"
    "right left"
    "bottom bottom";
  height: 70vh;
}

--- /code ---

**TODO** Check line numbering

**TODO** Add collapse about template areas.

--- /task ---

--- task ---

Open `climate.html`.

Change the class attribute on the `<div>` to your new `fact-holder-climate` class.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <div class="fact-holder-climate">
      <span class="fact-card temperature">
        <p class="fact">
          Antarctica is the coldest continent on Earth. The average temperature in the interior throughout the year is about -57°C, with the minimum temperature being -90°C during the winter season. Although the coast is warmer and temperatures can reach a maximum of between -2°C and 8°C during the summer. It is, on average, the coldest, windiest, and driest of all the continents on Earth.
        </p>
      </span>
    
--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

**TODO** Debug steps

You can place specific facts into the labelled grid areas with CSS.

--- task ---

Open `style.css`.

Add the `grid-area` property to the `.temperature` selector and set it to `top`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.temperature {
  background-image: url('snow.jpg');
  grid-area: top;
}

--- /code ---

**Debug step:** Make sure that `top` **is not** between `"` marks.

--- /task ---

--- task ---

Add the `grid-area` property to the `.sunburn` selector and set it to `left`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.sunburn {
  background-image: url('sun.jpg');
  grid-area: left;
}

--- /code ---

--- /task ---

--- task ---

Add the `grid-area` property to the `.ice` selector and set it to `right`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.ice {
  background-image: url('ice.jpg');
  grid-area: right;
}

--- /code ---

--- /task ---

--- task ---

Add the `grid-area` property to the `.rainfall` selector and set it to `bottom`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.rainfall {
  background-image: url('rain.jpg');
  grid-area: bottom;
}

--- /code ---

**TODO** Check line numbering

**Click the Run button** to see your changes.

--- /task ---

**TODO** Debug steps

Next you will make your content smart. No matter if the page is big or small, or if someone is using a different device, it will always look amazing.