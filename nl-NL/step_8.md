## Responsieve navigatiebalk

Maak je inhoud slim! Het maakt niet uit of de pagina groot of klein is, of dat iemand een ander apparaat gebruikt: de pagina ziet er altijd fantastisch uit.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/welcome-to-antarctica-step8" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Webpagina's kunnen op veel verschillende apparaten worden bekeken en moeten <span style="color: #0faeb0">**responsief**</span> zijn voor elk apparaat. Dit betekent dat als een gebruiker jouw webpagina op een mobiele telefoon bekijkt, het moet reageren op een kleiner scherm en als ze het op een desktop PC bekijken, moet het op een groter scherm reageren. 
</p>

### Maak de navigatiebalk responsief

Op een kleiner scherm kunnen de links in de navigatiebalk te dicht op elkaar staan.

Je gaat de links laten verdwijnen en vervangen door een **hamburgermenu** (☰).

--- task ---

Open `index.html`.

Voeg binnen de `<nav>`-tags een nieuwe `<div>` toe met het kenmerk `class="burger"`.

Voeg twee `<span>`-tags toe. Eén daarvan is het 'hamburger'-icoontje (☰) waarmee je het menu opent. De andere is een kruispictogram (✖) waarmee je het menu kunt sluiten.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 12
line_highlights: 18-21
---
    <nav>
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

--- /code ---

--- collapse ---

---
title: Gebruik ASCII-codes voor tekens
---

Om het hamburgermenu en kruispictogram te maken, heb je een **ASCII** code gebruikt. Dit is een manier om speciale tekens toe te voegen die niet voorkomen op je toetsenbord.

Je vindt een volledige lijst met ASCII codes op [deze website](https://www.ascii-code.com/).

--- /collapse ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

Je gebruikt een `id` attribuut op elk `<span>` element. Aan elk element kan een unieke `id` worden gegeven.

De nieuwe pictogrammen mogen alleen zichtbaar zijn als het scherm klein genoeg is.

Wanneer de pagina voor het eerst wordt geladen, wil je niet dat de `<div>` wordt weergegeven.

--- task ---

Open `style.css`.

Voeg de `burger` selector toe aan het `style.css` bestand.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 71
line_highlights: 72-78
---

/* Burger menu */
.burger {
  display: none;
  font-size: 20px;
  font-weight: 800;
  color: var(--burger-colour);
  margin-left: auto;
}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

### Een media query maken

Je gaat een **media-query** gebruiken om de stijl van elementen gebaseerd op de breedte van het scherm te wijzigen.

We hebben 768px ingesteld als schermbreedte, als de breedte kleiner is wordt de media-query geactiveerd.

--- collapse ---

---
title: Media query's gebruiken
---

Met een CSS-mediaquery kun je allerlei zaken controleren over de manier waarop een webpagina op dat moment wordt weergegeven.

Je kunt attributen controleren van het apparaat dat de pagina toont, zoals de breedte of de hoogte. Voor mobiele apparaten kun je controleren of ze zich in liggende of portretmodus bevinden.

Je kunt ook media queries ook gebruiken om de opmaak van een pagina te wijzigen wanneer deze wordt afgedrukt.

--- /collapse ---

--- task ---

Voeg onderaan `style.css` je media query toe.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 212-214
---

/* Media query */
@media screen and (max-width:768px) {

}

--- /code ---

--- /task ---

--- collapse ---

---
title: Waarom een maximale breedte van 768px gebruiken?
---

De gebruikelijke breedte van een tabletscherm is 768px en mobiele telefoonschermen zijn nog kleiner. Met behulp van deze breedte kun je ervoor zorgen dat jouw inhoud er op alle mobiele apparaten geweldig uitziet.

Wanneer de paginabreedte groter dan 768px is, geeft de navigatiebalk de drie paginalinks weer aan de bovenkant van de pagina.

Wanneer de paginabreedte 768px of minder is, kan de navigatiebalk verborgen worden en een 'burger' menu getoond worden om ruimte te besparen.

--- /collapse ---

Wanneer het burgermenu-icoon wordt weergegeven, blijft het kruis verborgen.

Wanneer je op burgericoontje klikt, worden de paginalinks weergegeven en wordt het sluit pictogram getoond.

--- task ---

Voeg selectoren toe om de opmaak van `.burger` `<div>` aan te passen.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 214-217, 219-221
---
@media screen and (max-width:768px) {    
  
  .burger {
    display: flex;
    cursor: pointer;
  }
  
  .burger #closeHam {
    display: none;
  }   

}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Wijzig het formaat van de Code Editor om je wijzigingen te zien!

--- /task ---

Je moet het navigatiemenu openen en sluiten.

De navigatie-items zien er op dit moment niet goed uit, dus voeg nieuwe opmaak toe om ze eruit te laten zien als een menu.

Je stelt de navigatie-items in op `display: none`, zodat ze niet worden weergegeven voordat het menu wordt geopend.

--- task ---

Open `style.css`.

Voeg een nieuwe `.nav-items` selector en opmaak toe aan de media query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 223-235
---
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

}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

--- task ---

Open `index.html`.

Voeg het **JavaScript** bestand toe aan je pagina.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 53
line_highlights: 53
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Klik op het burgermenu om je navigatie-items te zien verschijnen. Klik vervolgens op het kruisje om het menu te sluiten.

--- /task ---

### De andere pagina's bijwerken

--- task ---

Open `wildlife.html`.

Kopieer en plak het `burger` `<div>` element binnen de `<nav>` tags.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 13
line_highlights: 19-22
---
    <nav>
      <div class="nav-items">
        <a href="index.html">Home</a>
        <a class="active" href="wildlife.html">Wilde dieren</a>
        <a href="climate.html">Klimaat</a>
      </div>
      <div class="burger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>

--- /code ---

--- /task ---

--- task ---

Voeg ook het **JavaScript** bestand toe aan je pagina.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 55
line_highlights: 55
---
    <script type="text/javascript" src="responsive-navbar.js"></script>
  </body>
</html>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Klik op het burgermenu om je navigatie-items te zien verschijnen. Klik vervolgens op het kruisje om het menu te sluiten.

--- /task ---

Je moet de burger `<div>` en het JavaScript-bestand ook aan climate.html toevoegen.

--- task ---

Open `climate.html`.

Kopieer en plak het `burger` `<div>` element binnen de `<nav>` tags.

Kopieer en plak (CTRL + C of CMD + C) ook het **JavaScript**-bestand naar je pagina.

--- /task ---

--- task ---

**Klik op Run**

Klik op elk menu-item om te navigeren van pagina naar pagina.

Wijzig de grootte van het preview venster naar minder dan 768px om te zien hoe het reageert.

--- /task ---

Je hebt nu een responsieve navigatiebalk gebouwd. Maar de rasters zouden er beter uit kunnen zien als de website op een mobiel apparaat wordt bekeken.
