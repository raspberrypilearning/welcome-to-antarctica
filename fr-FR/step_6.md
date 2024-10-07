## Utiliser des animations

Les animations et l'interactivité rendront ta page web plus amusante pour les visiteurs !

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Ajouter des animations au survol

Plutôt que de simplement montrer le texte de fait, ajoute une certaine interaction à ta page !

Rends les faits invisibles.

\--- task ---

Ouvre `style.css`.

Définis la propriété `opacity` de `.fact` à `0`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 126
---------------------------------------------------------

.fact {
font-size: 100%;
color: var(--fact-text-colour);
background-color: var(--fact-background);
height: 100%;
margin: 0;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 5px;
opacity: 0;
}

\--- /code ---

\--- /task ---

Rends les faits à nouveau visibles lorsque l'utilisateur les survole.

\--- task ---

Ajoute un nouveau sélecteur `.fact:hover`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 129
line_highlights: 130-132
-------------------------------------------------------------

/\* Survol du fait \*/
.fact:hover {
opacity: 1;
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

\--- /task ---

Au lieu de changer tout de suite, adoucis le changement avec une transition.

\--- task ---

Ajoute une propriété `transition` à `.fact`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 127
---------------------------------------------------------

.fact {
font-size: 100%;
color: var(--fact-text-colour);
background-color: var(--fact-background);
height: 100%;
margin: 0;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 5px;
opacity: 0;
transition: .4s ease-in-out;
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

Passe ta souris sur les images pour voir ton animation !

\--- /task ---

Ensuite, tu vas utiliser une nouvelle grille pour organiser le contenu d'une manière différente afin qu'il reste intéressant !
