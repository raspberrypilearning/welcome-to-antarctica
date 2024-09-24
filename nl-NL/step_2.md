## Create a navbar

In this step, you will create a navigation bar, often known as a navbar, to link the pages on the website. This will allow users to navigate from one page to another.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- task ---

Open the [Welcome to Antarctica starter project](https://editor.raspberrypi.org/en/projects/welcome-to-antarctica-starter){:target="_blank"}.

\--- /task ---

Your starter project contains:

- Three HTML pages with some text content
- A CSS file that contains styling for some of the content
- The images you will use in the project
- A JavaScript file to make the navbar respond when the page size changes

\--- task ---

Have a look at the starter project.

Open `index.html`. Are there any HTML elements you recognise?

\--- /task ---

### Add the HTML to show the navbar

Webpage content is placed in the `<body>` tags.

The navbar is placed in `<nav>` tags in the webpage header.

\--- task ---

Find the `<header>` and `</header>` tags.
Add the `<nav>` tags.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 12, 14
------------------------------------------------------------

```
<header>
  <nav>
    
  </nav>
</header>
```

\--- /code ---

\--- /task ---

\--- task ---

You are going to use a `<div>` to contain the links to the other pages.

Inside the `<nav>` tags, add a new `<div>`.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13-15
-----------------------------------------------------------

```
<header>
  <nav>
    <div>

    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
In <span style="color: #0faeb0">**HTML**</span>, the `<a>` tag is used to create links. These links can be used to send users to another page on the same site or to an external site. You put the text to be linked inside `<a>` and `</a>`, and the `href` attribute provides the filename of the page that the link leads to. For external pages, the `href` attribute provides the web address (usually beginning with "https://") of the page you want to link to.
</p>

\--- task ---

Add `<a>` tags to create links to each page.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 14-16
-----------------------------------------------------------

```
<header>
  <nav>
    <div>
      <a href="index.html">Home</a>
      <a href="wildlife.html">Wildlife</a>
      <a href="climate.html">Climate</a>
    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

### Save your project

Your project is saved automatically. Return to the starter link in the same web browser to see your changes.

\--- task ---

**Click Run**

You should:

- See the navigation links at the top

- Click a link to navigate to the Wildlife or Climate pages

- Notice that the navbar does not appear on the Wildlife or Climate pages

**Tip:** In the Code Editor, you can use the browser back button (←) to return to the homepage.

\--- /task ---

Next, you are going to add the navbar to the other pages and then style your pages to make them look even better!
