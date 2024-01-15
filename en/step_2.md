## Create a navbar

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
In this step, you will create a navbar to link the pages on the website. This will allow users to navigate from one page to another.
</div>
<div>
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/welcome-to-Antarctica-step2" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>
</div>
</div>

--- task ---

Open the [Welcome to Antarctica starter project](https://staging-editor.raspberrypi.org/en/projects/welcome-to-Antarctica-starter){:target="_blank"}.

--- /task ---

Your starter project contains:
+ three HTML pages with some text content
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file to make the navbar respond when the page size changes.


### Add the HTML to show the navbar

Webpage content is placed in the <body> tags.

The navbar is placed in <nav> tags in the webpage header.

--- task ---

Find the <header> and </header> tags.
Add the <nav> tags.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 11-13
---

    <header>
      <nav>
        
      </nav>
    </header>

--- /code ---

--- /task ---

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
In <span style="color: #0faeb0">**HTML**</span> the `<a>` tag is used to create links: 
<br>
* You put the link text that appears on the webpage inside `<a>` and `</a>` 
<br>
* The `href` attribute provides the web address (usually beginning with 'https://') of the page you want to link to <br>
* You can also add `target="_blank"` to make the linked webpage open in a new tab in the web browser, instead of the new page replacing the current webpage.
</p>

--- task ---

Add <a> tags to create links to each page.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 12-14
---

    <header>
      <nav>
        <a href="index.html">Home</a>
        <a href="wildlife.html">Wildlife</a>
        <a href="climate.html">Climate</a>
      </nav>
    </header>

--- /code ---

--- /task ---

## Save your project

Your project is saved automatically. Return to the starter link in the same web browser to see your changes. 

**Test:** Click the **Run** button to see the changes you have made. The navigation links will appear at the top.

Click a link to navigate to the Wildlife or Climate page.

Notice that the navbar does not appear on the Wildlife or Climate page.

**TODO**

Next you are going to add the navbar to the other pages and then style your pages to make them look even better!
