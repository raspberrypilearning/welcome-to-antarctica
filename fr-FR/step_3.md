## Styliser une barre de navigation

Dans cette étape, tu vas styliser la barre de navigation que tu as créée et l'ajouter aux autres pages.
<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/welcome-to-antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Ajoute un attribut de classe `nav-items` au `<div>` contenant les liens de la barre de navigation.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13
---

    <header>
      <nav>
        <div class="nav-items">
          <a href="index.html">Accueil</a>
          <a href="wildlife.html">Faune</a>
          <a href="climate.html">Climat</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

### Styliser toute la barre de navigation

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Pour styliser les éléments HTML avec <span style="color: #0faeb0">**CSS**</span>, tu dois spécifier quel style doit s'appliquer à quels éléments. Pour cela, tu utilises des **sélecteurs**. Tu peux sélectionner des balises comme `nav` ou tu peux sélectionner des classes plus spécifiquement en ajoutant un `.` avant le nom de la classe comme `.nav-items`.
</p>

--- task ---

Ouvre le fichier `style.css` et trouve le sélecteur de l'élément `nav`.

Ajoute une propriété de couleur d'arrière-plan.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 36
line_highlights: 44
---
/* Barre de navigation */
nav {
  padding: 0 15px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav-colour);
}

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

--- collapse ---

---
title: Je ne vois pas de nouvelle couleur ?
---

Assure-toi que `background-color` s'écrit sans le 'u' de 'colour'.  `--nav-colour` devrait quand même avoir un 'u' !

Assure-toi qu'il y a un `;` à la fin de la ligne.

--- /collapse ---

--- /task ---

--- collapse ---

---
title: Styliser une classe ou un élément ?
---

Si tu veux appliquer un style à des éléments HTML spécifiques, tu peux créer une classe dans un fichier CSS. Tu peux ensuite ajouter l'attribut `class` à un élément dans ton code HTML pour indiquer au navigateur quel style doit être appliqué.

Tu peux aussi donner un style à des éléments (comme `<header>` ou `<nav>`) directement.

--- /collapse ---

--- task ---

Crée un sélecteur pour la classe `nav-items` afin d'espacer les liens.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 47
line_highlights: 48-51
---
/ *Élément de navigation */
.nav-items {
  display: flex;
  gap: 100px;
}

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

### Styliser les liens

En plus de styliser l'ensemble de la barre de navigation, tu peux styliser des liens individuels.

--- task ---

Crée un autre sélecteur pour styliser chaque balise `<a>` dans le `nav-items` `<div>`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 53
line_highlights: 54-58
---
/* Liens de la barre de navigation */
.nav-items > a {
  color: var(--nav-items-colour);
  text-decoration: none;
  transition: .4s ease-in-out;
}

--- /code ---

--- collapse ---

---
title: Sélectionner les éléments dans une classe
---

Parfois, tu voudras styliser des éléments particuliers à l'intérieur d'un **conteneur** qui a une classe. Pour cela, tu utilises l'opérateur `>`.

L'exemple que tu viens d'utiliser stylise tous les éléments `<a>` à l'intérieur d'un conteneur qui a la classe `nav-items`.

Cela te permet de styliser certains liens sans affecter tous les liens de ta page. Cela t'évite de devoir donner une classe à chaque lien individuel.

--- /collapse ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

--- task ---

Ajoute un sélecteur pour styliser chaque lien lorsque tu le survoles.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 60
line_highlights: 61-63
---
/* Survol des liens de navigation */
.nav-items > a:hover {
  color: var(--nav-items-active);
}

--- /code ---

--- collapse ---

---
title: Ajouter un style d'interaction à un élément
---

Lorsque tu écris du CSS, tu souhaiterais peut-être modifier le style d'un élément lorsque l'utilisateur interagit avec lui.

Dans l'exemple ci-dessus, tu modifies le style des éléments `a`, mais seulement lorsqu'un utilisateur les **survole** avec sa souris. La syntaxe est `a:hover`.

Le style de ce sélecteur sera **uniquement** utilisé lorsque la souris de l'utilisateur se trouve au-dessus de l'élément.

--- /collapse ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

### Créer un lien actif

La page `index.html` sera chargée en premier.

Lorsque cette page est ouverte, le lien doit rester blanc et ne pas être cliquable.

--- task ---

Ajoute une nouvelle classe CSS `active` pour le lien vers la page actuellement ouverte.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 65
line_highlights: 66-69
---
/* Liens actifs de navigation */
.nav-items .active {
  color: var(--nav-items-active);
  pointer-events: none;
}

--- /code ---

--- /task ---

Ouvre `index.html`.

Ajoute l'attribut de classe `active` à la balise `<a>` du fichier index.html.

--- task ---

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13
---
    <header>
      <nav>
        <div class="nav-items">
          <a href="index.html" class="active">Accueil</a>
          <a href="wildlife.html">Faune</a>
          <a href="climate.html">Climat</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

### Changer les polices

--- task ---

Importe une police Google pour styliser les polices de tes pages.

Ouvre `defaults.css`

Place cette déclaration `@import` au début de ton fichier.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 1
line_highlights: 2
---

/* Importer une police */
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

--- /code ---

--- /task ---

--- task ---

Crée une nouvelle variable à l'intérieur du sélecteur `:root`, appelée `--body-font` et définit la nouvelle police Orbitron.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 4
line_highlights: 8
---

:root {

  --body-background: #ece8ef;
  --body-text-colour: #000500;
  --body-font: "Orbitron", sans-serif;

--- /code ---

--- /task ---

--- task ---

Ajoute la propriété `font-family` à l'intérieur du sélecteur body et attribue-lui la nouvelle variable `--body-font` que tu viens de créer.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 4
line_highlights: 14
---
body {
  background-color: var(--body-background);
  color: var(--body-text-colour);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh; /* Fais en sorte que le contenu remplisse la page pour que le pied de page soit en bas. */
  display: flex;
  flex-direction: column;
  font-family: var(--body-font);
}
--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

Ensuite, tu vas mettre des images sympas en haut de ta page web pour montrer à tout le monde de quoi il s'agit !
