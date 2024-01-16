## Add hero images

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step4" width="700" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>
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

#### index.html

**HTML**
<div class="hero-image"></div>

#### wildlife.html

<div class="navigation-items" id="navigation-items">
        <a href="index.html">Home</a>
        <a href="wildlife.html" class="active">Wildlife</a>
        <a href="climate.html">Climate</a>
    </div>
</nav>
<div class="hero-image wildlife"></div>

#### climate.html

<nav class="navigation-header">
    <div class="navigation-items" id="navigation-items">
        <a href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a href="climate.html" class="active">Climate</a>
    </div>
</nav>
<div class="hero-image wildlife"></div>

**CSS**
.hero-image {
    min-height: 50vh;
    background-image: url('northern-lights.jpg'); 
    background-size: cover;
    background-position: center;
}

.wildlife {
    background-image: url('penguins.jpg');
}

.climate {
    background-image: url('daytime-antarctica.jpg');
}