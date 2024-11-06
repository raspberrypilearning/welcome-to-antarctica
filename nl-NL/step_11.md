## Verbeter je project

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

Als je tijd hebt, kun je nog wat meer feiten toevoegen, de rasterindeling aanpassen en de hero-afbeeldingen wijzigen om de pagina helemaal te personaliseren!

</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### Voeg meer feiten toe

\--- collapse ---

---

## title: Voeg een nieuw feit toe aan de homepage

Hier is een feitje over de onderzoeksstations op Antarctica dat je aan de startpagina kunt toevoegen.

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<p>Van de 56 landen die het Antarctisch Verdrag hebben ondertekend, exploiteren er 55 een soort onderzoeksstation op het continent. Het aantal onderzoekers dat actief is op Antartica bedraagt ongeveer 4.800 in de zomer en 1.200 in de winter.</p>

\--- /code ---

Je kunt de klasse `research` gebruiken om een nieuwe achtergrondafbeelding aan dit feit toe te voegen.

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card research">

</span>

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Voeg nieuwe dieren toe aan wildlife.html

Er zijn nog drie foto's van Antarctische wilde dieren - kies er één om toe te voegen aan jouw `wildlife.html` pagina.

Je kunt de volgende klassen gebruiken:

- `albatross` - een afbeelding van Antarctische albatros
- `minke-whale` - voor de Antarctische dwergvinvis
- `gentoo-pinguïn` - voor een andere pinguïn, dit is de Gentoo pinguïn

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card albatross">

</span>

\--- /code ---

Doe online onderzoek naar het dier en voeg een interessant feitje over het dier toe aan je pagina!

\--- /collapse ---

### Pas je rasters aan

Je kunt ook de rasters op je pagina's aanpassen om de weergave van jouw gegevens aan te passen.

\--- collapse ---

---

## title: Voeg extra kolommen en rijen toe

Je kunt de `fact-holder` en `fact-holder-wildlife` klassen bewerken om meer rijen of kolommen toe te voegen.

## --- code ---

language: css
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* Fact holder - homepage \*/
.fact-holder {
display: grid;
height: 70vh; /\*70% van het zichtbare gedeelte van de pagina \*/
grid-template-rows: 33% 33% 33%;
grid-template-columns: 50% 50%;
}

\--- /code ---

Je kunt ook `grid-row-start` en `grid-row-end` eigenschappen toevoegen, of `grid-column-start` en `grid-colum-end` aan de achtergrond afbeeldingen om je items over rijen en kolommen te plaatsen en de lay-outs verder aan te passen.

\--- /collapse ---

### Verander je hero-afbeeldingen

\--- collapse ---

---

## title: Voeg verschillende hero-afbeeldingen toe

In de startersprojecten staan meerdere afbeeldingen die je kunt gebruiken als je hero-afbeeldingen.

Nog niet gebruikte afbeeldingen...

`antarctic-landscape.jpg`
`antarctic-seasons.jpg`
`antarctic-walk.jpg`

Je kunt de URL van de afbeelding in de CSS-klassen voor je hero-afbeeldingen wijzigen om de site te personaliseren.

\--- /collapse ---

### Het verbeterde project bekijken

\--- collapse ---

---

## title: Verbeterd project

Je kunt het [geüpgrade project hier](https://editor.raspberrypi.org/en/projects/welcome-to-antarctica-upgraded){:target="_blank"} bekijken.

\--- /collapse ---
