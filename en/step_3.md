## Add hero images

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

<div class="navigation-items" id="navigation-items">
        <a href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a href="climate.html" class="active">Climate</a>
    </div>
</nav>
<div class="hero-image climate"></div>

**CSS**
.hero-image {
    min-height: 50vh;
    background: url('northern-lights.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}

.wildlife {
    background: url('penguins.jpg') no-repeat;
    background-size: cover;
    background-position: bottom;
}

.climate {
    background: url('daytime-antartica.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}