## Utiliser des grilles

Fais une mise en page géniale de tes pages web en organisant les choses avec des grilles !

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Ajouter une grille

La barre de navigation est superbe, mais les paragraphes de texte ont besoin d'être retravaillés.

Tu peux organiser le contenu du texte à l'aide d'une grille.

\--- collapse ---

---

## title: Utiliser la propriété d'affichage pour modifier les mises en page

L'une des décisions les plus importantes lors du stylisme d'une page web est la façon de disposer les éléments sur la page.

Pour modifier la façon dont les éléments sont disposés, tu peux utiliser la propriété CSS `display`.

Il y a quelques options disponibles pour les mises en page :

- `inline` : la valeur par défaut, où la hauteur et la largeur sont déterminées par le contenu
- `block` : l'élément commence sur une nouvelle ligne et prend toute la largeur
- `flex` : facilite la modification de la mise en page et de l'alignement
- `grid` : crée un tableau avec des lignes et des colonnes pour que les éléments puissent être placés avec précision

\--- /collapse ---

\--- task ---

Ouvre `index.html`.

Ajoute un attribut de classe `fact-holder` au `<div>` qui comprend les quatre paragraphes de texte.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 27
--------------------------------------------------------

  <section>
    <div class="fact-holder">
      <span>
            <p>
              L'Antarctique est le continent le plus froid, mais aussi le plus sec ! En moyenne, il n'y a que 200 mm (8 pouces) de précipitations par an, dont la majeure partie se trouve sur la côte.
        </p>
      </span>

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- collapse ---

---

## title: Ma page web a toujours la même apparence ?

Assure-toi qu'il y a un `=` entre `class` et `fact-holder`.

Et qu'il y a des marques `"` autour de `fact-holder`.

\--- /collapse ---

\--- /task ---

Pour l'instant, les paragraphes occupent des espaces différents.

![La page index.html après l'ajout de la grille. La flèche qui traverse toute la largeur indique 100 %. En dessous, une flèche s'étend sur la largeur du premier paragraphe et indique 75 % ; à côté, une autre flèche s'étend sur la largeur du deuxième paragraphe et indique 25 %](images/grid-sizes.png)

Tu peux modifier la largeur des colonnes de la grille pour les uniformiser.

\--- task ---

Ouvre `style.css`.

Modifie les hauteurs des deux lignes de la grille et les largeurs des deux colonnes de la grille à 50 %.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 92
line_highlights: 96-97
-----------------------------------------------------------

/\* Détenteur de faits - page d'accueil \*/
.fact-holder {
display: grid;
height: 50vh;
grid-template-rows: 50% 50%;
grid-template-columns: 50% 50%;
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- collapse ---

---

## title: Ma grille n'a pas été modifiée ?

Assure-toi qu'il y a un espace entre chaque `50%`.

\--- /collapse ---

\--- /task ---

### Styliser les faits

La mise en page des fiches est organisée.

Cependant, les cartes de faits ont encore besoin d'être stylisées.

\--- task ---

Ouvre `index.html`.

Ajoute un attribut de classe `fact-card` à chaque élément `<span>`.

Ajoute également l'attribut de classe pour chaque élément `<span>` qui définit son image d'arrière-plan.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28, 33, 38, 43
--------------------------------------------------------------------

```
<div class="fact-holder">
  <span class="fact-card sun">
    <p>
      L'Antarctique est le continent le plus froid, mais aussi le plus sec ! En moyenne, il n'y a que 200 mm (8 pouces) de précipitations par an, la plupart le long des côtes.
    </p>
  </span>
  <span class="fact-card discovery">
    <p>
      Le continent aurait été découvert relativement tard dans l'histoire de l'humanité, en 1820 par l'expédition russe de Fabian Gottlieb von Bellingshausen et Mikhail Lazarev.
    </p>
  </span>
  <span class="fact-card explorers">
    <p>
      Qui a posé le pied sur le continent pour la première fois ? Le premier débarquement documenté et confirmé a été effectué par un équipage dirigé par le Norvégien Leonard Kristensen au cap Adare.
    </p>
  </span>
  <span class="fact-card ownership">
    <p>
      L'Antarctique est régi par le traité sur l'Antarctique. Le traité compte aujourd'hui 53 nations qui le soutiennent, dont 29 sont considérées comme des « parties consultatives » et participent activement à la prise de décision.
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- collapse ---

---

## title: Ma grille a l'air bizarre ?

Vérifie que toutes tes accolades `<` ont des accolades fermées `>`.

\--- /collapse ---

\--- /task ---

\--- task ---

Ouvre `style.css`.

Ajoute le sélecteur `fact-card` au fichier `style.css`. Cela permet de s'assurer que les images d'arrière-plan sont centrées et couvrent l'ensemble de l'élément `<span>`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 109-114
-------------------------------------------------------------

/\* Fiche d'information \*/
.fact-card {
width: 100%;
display: flex;
background-size: cover;
background-position: center;
}

\--- /code ---

Le fichier `style.css` contient déjà les sélecteurs pour `sun`, `discovery`, `explorers` et `ownership`.

\--- /task ---

\--- task ---

**Clique sur Run**

\--- collapse ---

---

## title: Je ne vois pas mes images ?

Dans `index.html`, vérifie que les deux attributs de classe sont entre les mêmes marques `"`.

Dans `index.html`, assure-toi qu'il y a un espace entre chaque classe.

\--- /collapse ---

\--- /task ---

### Rendre plus accessible

Les images rendent le texte difficile à lire. Cela signifie que ton site web n'est pas aussi **accessible** qu'il pourrait l'être.

Ensuite, tu vas changer la couleur du texte et ajouter un arrière-plan transparent.

\--- task ---

Ouvre `index.html`.

Ajoute l'attribut de classe `fact` à chaque paragraphe.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29, 34, 39, 44
--------------------------------------------------------------------

```
<div class="fact-holder">
  <span class="fact-card sun">
    <p class="fact">
      L'Antarctique est le continent le plus froid, mais aussi le plus sec ! En moyenne, il n'y a que 200 mm (8 pouces) de précipitations par an, la plupart le long des côtes.
    </p>
  </span>
  <span class="fact-card discovery">
    <p class="fact">
      Le continent aurait été découvert relativement tard dans l'histoire de l'humanité, en 1820 par l'expédition russe de Fabian Gottlieb von Bellingshausen et Mikhail Lazarev.
    </p>
  </span>
  <span class="fact-card explorers">
    <p class="fact">
      Qui a posé le pied sur le continent pour la première fois ? Le premier débarquement documenté et confirmé a été effectué par un équipage dirigé par le Norvégien Leonard Kristensen au cap Adare.
    </p>
  </span>
  <span class="fact-card ownership">
    <p class="fact">
      L'Antarctique est régi par le traité sur l'Antarctique. Le traité compte aujourd'hui 53 nations qui le soutiennent, dont 29 sont considérées comme des « parties consultatives » et participent activement à la prise de décision.
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- /task ---

Ensuite, tu vas ajouter des animations à tes paragraphes pour rendre les pages interactives !
