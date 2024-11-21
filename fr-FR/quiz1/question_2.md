\--- question ---

---

## legend: Question 2 sur 3

Tu as utilisé des propriétés CSS dans ton projet pour spécifier la position de ton contenu à l'aide d'une disposition en grille.

Regarde le style CSS du sélecteur orcas.

Quelles sont les colonnes occupées par l'image de l'orque ?

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start:
line_highlights:
-----------------------------------------------------

.orcas {
background-image: url('orca-photo.jpg');
grid-column-start: 1;
grid-column-end: 3;
}

\--- /code ---

\--- choices ---

- (x) 1 et 2

  \--- feedback ---

  Correct ! La valeur de `grid-column-start` définit dans quelle colonne l'affichage de l'image doit commencer (l'image commence dans la première colonne) et la valeur de `grid-column-end` définit dans quelle colonne l'affichage de l'image doit se terminer (l'image n'est pas affichée dans la troisième colonne).

  \--- /feedback ---

- ( ) 2 et 3

  \--- feedback ---

  Regarde encore une fois. La valeur de `grid-column-start` définit la colonne à partir de laquelle l'image doit être affichée et la valeur de `grid-column-end` définit la colonne à partir de laquelle l'image ne sera **pas** affichée.

  \--- /feedback ---

- ( ) 1, 2, et 3

  \--- feedback ---

  Presque ! L'image de l'orque commence dans la première colonne, mais la valeur de `grid-column-end` détermine sur quelle colonne l'affichage de l'image doit se terminer.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
