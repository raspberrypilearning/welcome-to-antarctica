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

--- collapse ---

---
title: Ajouter un nouveau fait à la page d'accueil
---

Voici une information sur les stations de recherche en Antarctique que tu peux ajouter à la page d'accueil.

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<p>Sur les 56 pays signataires du traité de l'Antarctique, 55 exploitent une station de recherche sur le continent. Le nombre de chercheurs actifs sur l'Antarctique est d'environ 4 800 en été et 1 200 en hiver.</p>

--- /code ---

Tu peux utiliser la classe `research` pour ajouter une nouvelle image d'arrière-plan à ce fait.

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<span class="fact-card research">

</span>

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Ajouter de nouveaux animaux à wildlife.html
---

Il y a trois autres images de la faune antarctique. Choisis-en une pour l'ajouter à ta page `wildlife.html`.

Tu peux utiliser les classes :

- `albatros` : une image de l'albatros de l'Antarctique
- `minke-whale` : pour le petit rorqual de l'Antarctique
- `gentoo-penguin` : pour un autre pingouin, ici l'espèce Gentoo

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<span class="fact-card albatross">

</span>

--- /code ---

Fais des recherches sur l'animal en ligne et ajoute un fait intéressant à son sujet sur ta page !

--- /collapse ---

### Régler tes grilles

Tu peux aussi modifier les grilles de tes pages pour ajuster la façon dont tes faits sont affichés.

--- collapse ---

---
title: Ajouter des colonnes et des lignes supplémentaires
---

Tu peux modifier les classes `fact-holder` et `fact-holder-wildlife` pour ajouter des lignes ou des colonnes.

--- code ---
---
language: css
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

/* Détenteur de faits - page d'accueil */
.fact-holder {
  display: grid;
  height: 70vh; /* 70 % de la zone visible de la page */
  grid-template-rows: 33% 33% 33%;
  grid-template-columns: 50% 50%;
}

--- /code ---

Tu peux aussi ajouter les propriétés `grid-row-start` et `grid-row-end`, ou `grid-column-start` et `grid-colum-end` aux classes d'images d'arrière-plan pour placer tes éléments sur des lignes et des colonnes afin de personnaliser tes mises en page.

--- /collapse ---

### Changer tes images Hero

--- collapse ---

---
title: Ajouter des images Hero différentes
---

Dans les projets de démarrage, il y a plusieurs images que tu peux utiliser pour tes images Hero.

Les images que tu n'as pas encore utilisées sont...

`antarctic-landscape.jpg`
`antarctic-seasons.jpg`
`antarctic-walk.jpg`

Tu peux changer l'URL de l'image dans les classes CSS de tes images Hero pour que le site soit le tien.

--- /collapse ---

### Voir le projet amélioré

--- collapse ---

---
title: Projet amélioré
---

Tu peux voir le [projet amélioré ici](https://editor.raspberrypi.org/fr-FR/projects/welcome-to-antarctica-upgraded){:target="_blank"}.

--- /collapse ---
