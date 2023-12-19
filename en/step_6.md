## Make it responsive

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

### Code to Add

<div class="hamburger">
    <span id="openHam">&#9776;</span>
    <span id="closeHam">&#x2716;</span>
</div>

### CSS styles

@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')

### inside body
font-family: 'Orbitron', sans-serif;

.hamburger {
    display: none;
    font-size: 20px;
    font-weight: 800;
    color: white;
    margin-left: auto
}


@media screen and (max-width:768px) {
    
    .hamburger {
        display: flex;
        cursor: pointer;
    }
    .hamburger #closeHam {
        display: none;
    }

    .navigation-items {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        right: 0;
        top: 58px;
        background-color: #33658A;
        width: 100%;
        height: calc(100vh - 58px);
        padding-top: 60px;
        gap: 10vh;
    }

    .fact-holder {
        display: grid;
        grid-template-rows: 25% 25% 25% 25%;
        grid-template-columns: 100%;
        height: 100vh;
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
        grid-column-start: revert;
        grid-column-end: revert;
    }

    .fact-holder-climate {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            "top"
            "left"
            "right"
            "bottom";
        height: 70vh;
    }
}

### Javascript