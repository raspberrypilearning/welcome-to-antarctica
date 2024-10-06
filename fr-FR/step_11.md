## Améliorer ton projet

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

Si tu as le temps, tu peux ajouter quelques faits supplémentaires, régler la disposition de la grille et changer les images Hero pour personnaliser complètement la page !

</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### Ajouter plus de faits

\--- collapse ---

---

## title: Ajouter un nouveau fait à la page d'accueil

Voici une information sur les stations de recherche en Antarctique que tu peux ajouter à la page d'accueil.

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<p>Sur les 56 pays signataires du traité de l'Antarctique, 55 exploitent une station de recherche sur le continent. Le nombre de chercheurs actifs sur l'Antarctique est d'environ 4 800 en été et 1 200 en hiver.</p>

\--- /code ---

Tu peux utiliser la classe `research` pour ajouter une nouvelle image d'arrière-plan à ce fait.

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card research">

</span>

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Add some new animals to wildlife.html

There are three more pictures of Antarctic wildlife — choose one to add to your `wildlife.html` page.

You can use the classes:

- `albatross` - an image of the Antarctic albatross
- `minke-whale` - for the Antarctic minke whale
- `gentoo-penguin` - for another penguin, this is the Gentoo species

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card albatross">

</span>

\--- /code ---

Research the animal online and add an interesting fact about them to your page!

\--- /collapse ---

### Adjust your grids

You can also change the grids on your pages to adjust the way your facts are displayed.

\--- collapse ---

---

## title: Add extra columns and rows

You can edit the the `fact-holder` and `fact-holder-wildlife` classes to add more rows or columns.

## --- code ---

language: css
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* Fact holder - homepage _/
.fact-holder {
display: grid;
height: 70vh; /_ 70% of the visible area of the page \*/
grid-template-rows: 33% 33% 33%;
grid-template-columns: 50% 50%;
}

\--- /code ---

You could also add `grid-row-start` and `grid-row-end` properties, or `grid-column-start` and `grid-colum-end` to the background image classes to place your items across rows and columns to customise your layouts.

\--- /collapse ---

### Change your hero images

\--- collapse ---

---

## title: Add different hero images

In the starter projects there are multiple images you can use for your hero images.

Images you have not used yet are...

`antarctic-landscape.jpg`
`antarctic-seasons.jpg`
`antarctic-walk.jpg`

You can change the image URL in the CSS classes for your hero images to make the site your own.

\--- /collapse ---

### See the upgraded project

\--- collapse ---

---

## title: Upgraded project

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/welcome-to-antartica-upgraded){:target="_blank"}.

\--- /collapse ---
