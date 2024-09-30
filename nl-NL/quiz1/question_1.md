## Reflectie

Goed gedaan. Je hebt een website gemaakt met behulp van HTML, CSS en JavaScript.

Beantwoord de drie onderstaande vragen om terug te kijken op wat je hebt geleerd.

Je wordt naar het juiste antwoord geleid. Je kunt deze activiteit zo vaak doen als je wilt.

\--- question ---

---

## legend: Vraag 1 van 3

Welke tag wordt gebruikt om een hyperlink te definiëren bij het maken van navigatielinks in HTML?

## --- code ---

language: html
filename: index.html
line_numbers: false
--------------------------------------------------------

```
0>
  <nav class="navigation-header">
    <div class="nav-items">
      <a class="active" href="index.html">Home</a>
      <a href="wildlife.html">Wilde dieren</a>
      <a href="climate.html">Klimaat</a>
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

  Niet helemaal. De tag `<link>` wordt gebruikt om externe bronnen, zoals stylesheets, te definiëren, maar niet om hyperlinks te maken.

  \--- /feedback ---

- ( ) `<span>`

  \--- feedback ---

Niet helemaal. De tag `<span>` wordt gebruikt om inline-elementen te groeperen en stijlen toe te passen, niet om hyperlinks te maken.

\--- /feedback ---

- (x) `<a>`

  \--- feedback ---

Juist! De tag `<a>` wordt gebruikt om hyperlinks in HTML te maken. Het staat voor "anchor" en wordt gevolgd door het href attribuut, waarin de locatie van de link wordt aangegeven.

\--- /feedback ---

\--- /choices ---

\--- /question ---
