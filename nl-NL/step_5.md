## Rasters gebruiken

Maak je webpagina lay-outs geweldig door dingen te rangschikken met behulp van rasters!

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Voeg een raster toe

De navigatiebalk ziet er goed uit, maar de tekstalinea's moeten nog wat verbeterd worden.

Je kunt de tekstinhoud organiseren met behulp van een rasterweergave.

\--- collapse ---

---

## title: Gebruik de display eigenschap om de lay-outs te wijzigen

Een van de belangrijkste beslissingen bij het opmaken van een webpagina is hoe de elementen op de pagina worden gerangschikt.

Om de manier waarop elementen worden gerangschikt te wijzigen, kun je de CSS-eigenschap `display` gebruiken.

Er zijn een paar opties beschikbaar voor lay-outs:

- `inline` - de standaard, waarbij hoogte en breedte worden bepaald door de inhoud
- `block` - het element begint op een nieuwe regel en neemt de volledige breedte in beslag
- `flex` - maakt het wijzigen van de lay-out en uitlijning eenvoudiger
- `grid` - creëert een tabelindeling met rijen en kolommen, zodat elementen nauwkeurig kunnen worden geplaatst

\--- /collapse ---

\--- task ---

Open `index.html`.

Voeg een `fact-holder` class attribuut toe aan de `<div>` die de vier alinea's tekst bevat.

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
              Antarctica is het koudste continent, maar ook het droogste! Gemiddeld valt er slechts 200 mm (8 inch) neerslag per jaar, waarvan het grootste deel langs de kust.
        </p>
      </span>

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- collapse ---

---

## title: Mijn webpagina ziet er nog steeds hetzelfde uit?

Zorg ervoor dat er een `=` staat tussen `class` en `fact-holder`.

Zorg ervoor dat er `"`-tekens rond `fact-holder` staan.

\--- /collapse ---

\--- /task ---

Op dit moment nemen de paragrafen verschillende hoeveelheden ruimte in beslag.

![De index.html pagina nadat het raster is toegevoegd. Er is een pijl die over de hele breedte loopt en die 100% aangeeft. Daaronder overspant een pijl de breedte van de eerste alinea en is gelabeld met 75%, ernaast overspant een andere pijl de breedte van de tweede alinea en is gelabeld met 25%.](images/grid-sizes.png)

Je kunt de breedtes van de rasterkolommen wijzigen om ze gelijk te maken.

\--- task ---

Open `style.css`.

Wijzig de hoogte van de twee rasterrijen en de breedtes van de twee rasterkolommen naar 50%.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 92
line_highlights: 96-97
-----------------------------------------------------------

/\* Fact holder - homepage \*/
.fact-holder {
display: grid;
height: 50vh;
grid-template-rows: 50% 50%;
grid-template-columns: 50% 50%;
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- collapse ---

---

## title: Mijn raster is niet veranderd?

Zorg ervoor dat er een spatie tussen elke `50%` staat.

\--- /collapse ---

\--- /task ---

### De feiten opmaken

De indeling van de feitenkaarten is nu overzichtelijker.

De kaartjes met feiten moeten echter nog wel opgemaakt worden.

\--- task ---

Open `index.html`.

Voeg een `fact-card` class attribuut toe aan elk `<span>` element.

Voeg ook het class-kenmerk toe voor elk `<span>`-element dat de achtergrondafbeelding definieert.

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
      Antarctica is het koudste continent, maar ook het droogste! Gemiddeld valt er slechts 200 mm (8 inch) neerslag per jaar, het grootste deel daarvan langs de kust.
    </p>
  </span>
  <span class="fact-card discovery">
    <p>
      Men denkt dat het continent relatief laat in de menselijke geschiedenis is ontdekt, in 1820 door de Russische expeditie van Fabian Gottlieb von Bellingshausen en Mikhail Lazarev.
    </p>
  </span>
  <span class="fact-card explorers">
    <p>
      Wie zette als eerste voet op het continent? De eerste gedocumenteerde en bevestigde landing was een bemanning onder leiding van de Noor Leonard Kristensen bij Kaap Adare.
    </p>
  </span>
  <span class="fact-card ownership">
    <p>
      Antarctica wordt geregeerd door het Antarctisch Verdrag. Het verdrag heeft nu 53 ondersteunende landen, waarvan er 29 worden beschouwd als “raadgevende partijen” die actief betrokken zijn bij de besluitvorming.
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- collapse ---

---

## title: Mijn raster ziet er raar uit?

Controleer of alle openingshaakjes `<` sluithaakjes `>` hebben.

\--- /collapse ---

\--- /task ---

\--- task ---

Open `style.css`.

Voeg de `fact-card` selector toe aan het `style.css` bestand. Dit zorgt ervoor dat de achtergrondafbeeldingen gecentreerd zijn en het hele `<span>` element omvatten.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 109-114
-------------------------------------------------------------

/\* Fact card \*/
.fact-card {
width: 100%;
display: flex;
background-size: cover;
background-position: center;
}

\--- /code ---

Het bestand `style.css` bevat al de selectoren voor `sun`, `discovery`, `explorers` en `ownership`.

\--- /task ---

\--- task ---

**Klik op Run**

\--- collapse ---

---

## title: Ik kan mijn afbeeldingen niet zien?

Controleer in `index.html`, of beide klassenattributen tussen dezelfde `"` markeringen staan.

Zorg ervoor dat er in `index.html` een spatie tussen elke class is.

\--- /collapse ---

\--- /task ---

### Maak het toegankelijker

Door de afbeeldingen is de tekst moeilijk te lezen. Dit betekent dat jouw website niet zo **toegankelijk** is.

Vervolgens ga je de kleur van de tekst veranderen en een transparante achtergrond toevoegen.

\--- task ---

Open `index.html`.

Voeg het `fact` class attribuut toe aan elke alinea.

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
      Antarctica is het koudste continent, maar ook het droogste! Gemiddeld valt er slechts 200 mm (8 inch) neerslag per jaar, het grootste deel daarvan langs de kust.
    </p>
  </span>
  <span class="fact-card discovery">
    <p class="fact">
      Men denkt dat het continent relatief laat in de menselijke geschiedenis is ontdekt, in 1820 door de Russische expeditie van Fabian Gottlieb von Bellingshausen en Mikhail Lazarev.
    </p>
  </span>
  <span class="fact-card explorers">
    <p class="fact">
      Wie zette als eerste voet op het continent? De eerste gedocumenteerde en bevestigde landing was een bemanning onder leiding van de Noor Leonard Kristensen bij Kaap Adare.
    </p>
  </span>
  <span class="fact-card ownership">
    <p class="fact">
      Antarctica wordt geregeerd door het Antarctisch Verdrag. Het verdrag heeft nu 56 ondersteunende landen, waarvan er 29 worden beschouwd als “raadgevende partijen” en actief betrokken zijn bij de besluitvorming.
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

\--- /task ---

Zodadelijk ga je animaties aan je alinea's toevoegen om de pagina's interactief te maken!
