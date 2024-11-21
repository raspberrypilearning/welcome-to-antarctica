## Een navigatiebalk vormgeven

In deze stap ga je de navigatiebalk die je hebt gemaakt opmaken en toevoegen aan de andere pagina's.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- task ---

Voeg een `nav-items`- class attribuut toe aan de `<div>` die de navigatiebalkkoppelingen bevat.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13
--------------------------------------------------------

```
<header>
  <nav>
    <div class="nav-items">
      <a href="index.html">Home</a>
      <a href="wildlife.html">Wilde dieren</a>
      <a href="climate.html">Klimaat</a>
    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

### De hele navigatiebalk vormgeven

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Voor het opmaken van HTML-elementen met <span style="color: #0faeb0">**CSS**</span> moet je aangeven welke opmaak van toepassing is op welke elementen. Om dit te doen, gebruik je **selectors**. Je kunt tags zoals "nav" selecteren of je kunt meer specifiek classes selecteren door een '.' toe te voegen voor de class naam — zoals `.nav-items`.
</p>

\--- task ---

Open het bestand `style.css` en zoek de `nav`-elementselector.

Voeg een achtergrondkleureigenschap (background-color) toe.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 36
line_highlights: 44
--------------------------------------------------------

/\* Navigatiebalk \*/
nav {
padding: 0 15px;
height: 60px;
font-size: 22px;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--nav-colour);
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- collapse ---

---

## title: Ik zie geen enkele nieuwe kleur?

Zorg ervoor dat `background-color` gespeld is zonder de 'u' in 'colour'.  `--nav-colour` schrijf je wel met een 'u'!

Zorg ervoor dat er een `;` aan het einde van de regel staat.

\--- /collapse ---

\--- /task ---

\--- collapse ---

---

## title: Een class of element opmaken?

Als je opmaak wilt toepassen op specifieke HTML elementen, kun je een **class** maken in een CSS-bestand. Je kunt vervolgens het `class`-attribuut toevoegen aan een element in je HTML-code om de browser te laten weten welke styling moet worden toegepast.

Je kunt ook elementen (zoals `<header>` of `<nav>`) rechtstreeks opmaken.

\--- /collapse ---

\--- task ---

Maak een selector voor de klasse `nav-items` om de ruimte tussen de links te verdelen.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 47
line_highlights: 48-51
-----------------------------------------------------------

/\* Nav items \*/
.nav-items {
display: flex;
gap: 100px;
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

### De links opmaken

Je kunt niet alleen de hele navigatiebalk stylen, maar ook afzonderlijke links.

\--- task ---

Maak een andere selector aan om elke `<a>`-tag in de `nav-items` `<div>`-tag te stylen.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 53
line_highlights: 54-58
-----------------------------------------------------------

/\* Nav bar links \*/
.nav-items > a {
color: var(--nav-items-colour);
text-decoration: none;
transition: .4s ease-in-out;
}

\--- /code ---

\--- collapse ---

---

## title: Selecteer elementen in een class

Soms wil je specifieke elementen in een **container** met een class opmaken. Om dit te doen, gebruik je de `>` operator.

Het voorbeeld dat je zojuist hebt gebruikt maakt alle `<a>` elementen op binnen een container die de `nav-items` klasse heeft.

Dit stelt je in staat bepaalde links op te maken zonder alle links op je pagina te beïnvloeden. Je hoeft dan niet aan elke afzonderlijke link een klasse toe te kennen.

\--- /collapse ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

\--- task ---

Voeg een selector toe om elke link op te maken wanneer je erover beweegt met je muis.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 60
line_highlights: 61-63
-----------------------------------------------------------

/\* Nav links hover \*/
.nav-items > a:hover {
color: var(--nav-items-active);
}

\--- /code ---

\--- collapse ---

---

## title: Voeg interactie-opmaak toe aan een element

Wanneer je CSS schrijft, wil je misschien de opmaak van een element wijzigen wanneer de gebruiker ermee communiceert.

In het bovenstaande voorbeeld wijzig je de stijl van de `a`-elementen, maar alleen wanneer een gebruiker er met de muis overheen **beweegt**. De syntaxis hiervoor is `a:hover`.

De opmaak in deze selector wordt **alleen** gebruikt wanneer de muis van de gebruiker zich boven het element bevindt.

\--- /collapse ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

### Een actieve link maken

De `index.html` pagina zal als eerste worden geladen.

Wanneer de pagina geopend is, moet de link wit blijven en niet aanklikbaar zijn.

\--- task ---

Voeg een nieuwe `active` CSS class toe voor de link naar de pagina die momenteel geopend is.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 65
line_highlights: 66-69
-----------------------------------------------------------

/\* Nav links active \*/
.nav-items .active {
color: var(--nav-items-active);
pointer-events: none;
}

\--- /code ---

\--- /task ---

Open `index.html`.

Voeg het `active` class attribuut toe aan de index.html `<a>`-tag.

\--- task ---

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13
--------------------------------------------------------

```
<header>
  <nav>
    <div class="nav-items">
      <a href="index.html" class="active">Home</a>
      <a href="wildlife.html">Wilde dieren</a>
      <a href="climate.html">Klimaat</a>
    </div>
  </nav>
</header>
```

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

### De lettertypen wijzigen

\--- task ---

Importeer een Google lettertype om de lettertypes op je pagina's op te maken.

Open `defaults.css`

Plaats deze `@import`-instructie bovenaan jouw bestand.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 1
line_highlights: 2
-------------------------------------------------------

/\* Importeer een lettertype \*/
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

\--- /code ---

\--- /task ---

\--- task ---

Maak een nieuwe variabele aan binnen de `:root`-selector, met de naam `--body-font` en stel het nieuwe Orbitron-lettertype in.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 4
line_highlights: 8
-------------------------------------------------------

:root {

\--body-background: #ece8ef;
\--body-text-colour: #000500;
\--body-font: "Orbitron", sans-serif;

\--- /code ---

\--- /task ---

\--- task ---

Voeg de eigenschap `font-family` toe in de body-selector en stel deze in op de nieuwe variabele `--body-font` die je zojuist hebt gemaakt.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 4
line_highlights: 14
--------------------------------------------------------

body {
background-color: var(--body-background);
color: var(--body-text-colour);
padding: 0;
margin: 0;
box-sizing: border-box;
width: 100%;
min-height: 100vh; /\* Zorgt er voor de de inhoud de pagina vult zodat de voettekst aan de onderkant staat \*/
display: flex;
flex-direction: column;
font-family: var(--body-font);
}
\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

Vervolgens ga je een aantal leuke afbeeldingen bovenaan je webpagina plaatsen, zodat iedereen kan zien waar het over gaat!
