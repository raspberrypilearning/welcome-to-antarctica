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
Change title on wildlife html page
<section>
    <h1>Hover on the cards below to learn about the animals in Antarctica</h1>

Classes to wildlife html page
<section class="fact-holder-wildlife">
    <span class="fact-card penguins">
        <p class="fact">
            Emperor penguins, like all penguins in Antarctica, live in colonies dotted around the coastline.
            Emperor penguins are unique in having colonies on sea ice. Sea ice is frozen sea water which
            fringes the Antarctic continent. In the winter, the sea ice extent expands. In the summer, it
            shrinks as the sea ice melts. By the time the chicks are ready to fledge, the sea ice edge is
            close to the colony, so the young penguins don’t have to travel far to get their food.
        </p>
    </span>
    <span class="fact-card krill">
        <p class="fact">
            The producer in Antarctica are tiny organisms, known as phytoplankton. These organisms get their
            energy from the sunlight. Krill is then the main consumer of the phytoplankton, which is eaten
            by many other organisms such as penguins, birds, or even ginormous elephant seals! Because there
            are so many different organisms feeding from the krill, there needs to be lots and lots of krill
            available, especially as they are only 2 inches long!
        </p>
    </span>
    <span class="fact-card seals">
        <p class="fact">
            There are many different seals in Antarctica. They have thick beautiful fur coats and blubber,
            making them supremely adapted to the cold. There are six species in Antarctica: Antarctic Fur
            Seals, Leopard Seals, Ross Seals, Southern Elephant seals, Crabeater Seals and Weddell Seals.
        </p>
    </span>
    <div class="fact-card orcas">
        <p class="fact">
            At the top of the food chain, there are Orcas, often known as Killer Whales. These are the
            biggest carnivores on Earth, reaching almost 10m in length! They can be found swimming all
            around the Earth’s oceans, but in particular in the Southern Ocean around Antarctica.
        </p>
        </span>
    </div>

Change title on climate html page

<section>
    <h1>Hover on the cards below to learn about the climate in Antarctica</h1>
            

Classes to climate html page

<section class="fact-holder-climate">
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
    <div class="fact-card rainfall">
        <p class="fact">
            Technically, Antarctica is a desert because it is so dry there; with an average annual precipitation of just 166mm along the coastal regions, and even less when moving further inland. With such cold conditions the snow hardly ever melts; instead, it will mostly become compressed over time to form part of the ice sheet. This is known as an ice cap climate (classified as a continent where the average monthly temperature never exceeds 0°C).
        </p>
    </span>
</div>


#### CSS

.fact-holder-wildlife {
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