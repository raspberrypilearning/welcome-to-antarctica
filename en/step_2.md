## Create a navbar

~~~

~~~

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Open a [new Scratch project](http://rpf.io/scratch-new){:target="_blank"}. Scratch will open in another browser tab.

[[[working-offline]]]

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

#### HTML

<nav class="navigation-header">
    <div class="navigation-items" id="navigation-items">
        <a class="active" href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a href="climate.html">Climate</a>
    </div>
</nav>

#### CSS

**Inside nav**
background-color: #33658A;

**Create new selectors:**
.navigation-items {
    display: flex;
    gap: 100px;
}

.navigation-items > a {
    color: #55DDE0;
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
    transition: .4s ease-in-out;
}

.navigation-items > a:hover {
    color: white;
}

.navigation-items .active {
    color: white;
    pointer-events: none;
}