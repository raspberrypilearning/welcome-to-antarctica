## Réflexion

Bien joué. Tu as créé un site web en utilisant HTML, CSS et JavaScript.

Réponds aux trois questions ci-dessous pour réfléchir à ce que tu as appris.

Tu seras guidé vers la bonne réponse. Tu peux faire cette activité autant de fois que tu le souhaites.

\--- question ---

---

## legend: Question 1 sur 3

Quelle balise est utilisée pour définir un lien hypertexte lors de la création de liens de navigation en HTML ?

## --- code ---

language: html
filename: index.html
line_numbers: false
--------------------------------------------------------

```
<header>
  <nav class="navigation-header">
    <div class="nav-items">
      <a class="active" href="index.html">Accueil</a>
      <a href="wildlife.html">Faune</a>
      <a href="climate.html">Climat</a>
    </div>
    <div class="burger">
      <span id="openHam">&#9776;</span>
      <span id="closeHam">&#x2716;</span>
    </div>
  </nav>
    <div class="hero-image home"></div>
</header>
```

\--- /code ---

\--- choices ---

- ( ) `<link>`

  \--- feedback ---

  Pas tout à fait. La balise `<link>` est utilisée pour définir des ressources externes, telles que les feuilles de style, mais pas pour créer des hyperliens.

  \--- /feedback ---

- ( ) `<span>`

  \--- feedback ---

Pas tout à fait. La balise `<span>` est utilisée pour regrouper les éléments en ligne et appliquer les styles, pas pour créer des hyperliens.

\--- /feedback ---

- (x) `<a>`

  \--- feedback ---

Correct ! La balise `<a>` est utilisée pour créer des hyperliens en HTML. Elle signifie « ancre » et est suivie de l'attribut href, en spécifiant la destination du lien.

\--- /feedback ---

\--- /choices ---

\--- /question ---
