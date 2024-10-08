## Grilles réactives

En rendant les grilles réactives, tout le monde peut en apprendre davantage sur l'Antarctique, quel que soit l'appareil sur lequel les informations sont consultées.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-complete" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Rendre tes grilles réactives

Si l'écran est petit, les grilles que tu as créées précédemment sont difficiles à lire.

Rends la disposition plus haute en utilisant quatre lignes et une colonne.

\--- task ---

Ajoute le sélecteur `fact-holder` à la requête `@media`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 237-241
-------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
display: none;
}

.nav-items {
display: none;
flex-direction: column;
align-items: center;
position: absolute;
right: 0;
top: 58px;
background-color: var(--nav-colour);
width: 100%;
height: calc(100vh - 58px);
padding-top: 60px;
gap: 10vh;
}

.fact-holder {
height: 100vh;
grid-template-rows: 25% 25% 25% 25%;
grid-template-columns: 100%;
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- /task ---

Sur la page `wildlife.html`, il y a une disposition différente de la grille d'affichage des faits.

Cette disposition doit également être modifiée lorsque la largeur de l'écran diminue.

Tu vas la rendre plus haute et faire en sorte qu'il y ait cinq lignes dans une colonne.

\--- task ---

Ajoute le sélecteur `fact-holder-wildlife` à la requête `@media`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 243-247
-------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
display: none;
}

.nav-items {
display: none;
flex-direction: column;
align-items: center;
position: absolute;
right: 0;
top: 58px;
background-color: var(--nav-colour);
width: 100%;
height: calc(100vh - 58px);
padding-top: 60px;
gap: 10vh;
}

.fact-holder {
display: grid;
height: 100vh;
grid-template-rows: 25% 25% 25% 25%;
grid-template-columns: 100%;
}

.fact-holder-wildlife {
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr;
height: 140vh;
}

}

\--- /code ---

\--- /task ---

Tu peux faire en sorte que l'image du pingouin s'étende sur deux lignes en modifiant ses propriétés `grid-row-start` et `grid-row-end`.

Tu dois également modifier l'image de l'orque pour qu'elle s'étende sur la colonne unique utilisée dans la mise en page `fact-holder-wildlife` (pour l'instant, elle est stylisée pour s'étendre sur deux colonnes).

\--- task ---

Ajoute les sélecteurs `penguins` et `orcas` à la requête `@media`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 249-252, 254-257
----------------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
display: none;
}

.nav-items {
display: none;
flex-direction: column;
align-items: center;
position: absolute;
right: 0;
top: 58px;
background-color: var(--nav-colour);
width: 100%;
height: calc(100vh - 58px);
padding-top: 60px;
gap: 10vh;
}

.fact-holder {
display: grid;
height: 100vh;
grid-template-rows: 25% 25% 25% 25%;
grid-template-columns: 100%;
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
grid-column-start: 1;
grid-column-end: 2;
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

Redimensionne la fenêtre de prévisualisation en dessous de 768 px pour voir comment chaque page réagit.

\--- /task ---

Bravo ! Tu as maintenant conçu un site web réactif qui permet aux gens de découvrir un endroit qu'ils n'auront peut-être jamais l'occasion de visiter : l'Antarctique.

Ensuite, tu réfléchiras à ce que tu as appris en répondant à un quiz.
