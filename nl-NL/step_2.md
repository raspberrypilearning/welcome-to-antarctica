## Maak een navigatiebalk

In deze stap maak je een navigatiebalk (in het Engels ook wel navbar genoemd), om de pagina's op de website met elkaar te verbinden. Hiermee kunnen gebruikers van de ene naar de andere pagina navigeren.
<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/welcome-to-antarctica-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open het [Welkom op Antarctica startproject](https://editor.raspberrypi.org/nl-NL/projects/welcome-to-antarctica-starter){:target="_blank"}.

--- /task ---

Je startproject bevat:

- Drie HTML-pagina's met wat tekstinhoud
- Een CSS-bestand dat styling bevat voor een deel van de inhoud
- De afbeeldingen die je in het project gaat gebruiken
- Een JavaScript bestand om de navigatiebalk te laten reageren wanneer de paginagrootte wordt gewijzigd

--- task ---

Bekijk het startproject.

Open `index.html`. Zijn er HTML-elementen die je herkent?

--- /task ---

### Voeg de HTML toe om de navigatiebalk weer te geven

De inhoud van een webpagina wordt tussen de `<body>`-tags geplaatst.

De navigatiebalk wordt tussen de `<nav>`-tags in de header van de webpagina geplaatst.

--- task ---

Zoek de tags `<header>` en `</header>`.
Voeg de `<nav>`-tags toe.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 12, 14
---

    <header>
      <nav>
        
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

Je gaat `<div>` gebruiken om de links naar de andere pagina's in op te nemen.

Voeg binnen de `<nav>`-tags een nieuwe `<div>` toe.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13-15
---

    <header>
      <nav>
        <div>

        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
In <span style="color: #0faeb0">**HTML**</span> wordt de `<a>` tag gebruikt om links te maken. Deze links kunnen worden gebruikt om gebruikers naar een andere pagina op dezelfde site of naar een externe site te sturen. Je plaatst de tekst waarnaar je wil linken binnen de `<a>` en `</a>` tags, en het `href` attribuut bevat de bestandsnaam van de pagina waar de link naar leidt. Voor externe pagina's geeft het `href`-attribuut het webadres (meestal beginnend met "https://") van de pagina waarnaar je wilt linken.
</p>

--- task ---

Voeg `<a>` tags toe om links naar elke pagina te maken.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 14-16
---

    <header>
      <nav>
        <div>
          <a href="index.html">Home</a>
          <a href="wildlife.html">Wilde dieren</a>
          <a href="climate.html">Klimaat</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

### Sla je project op

Je project wordt automatisch opgeslagen. Ga terug naar de startlink in dezelfde webbrowser om je wijzigingen te zien.

--- task ---

**Klik op Run**

Je zou:

- De navigatielinks bovenaan moeten zien

- Op een link moeten klikken om naar de pagina's Wilde dieren of Klimaat te gaan

- Let op: de navigatiebalk verschijnt niet op de pagina's Wilde dieren of Klimaat

**Tip:** In de Code Editor, kun je de back button (←) van de browser gebruiken om terug te gaan naar de homepage.

--- /task ---

Zo meteen ga je de navigatiebalk aan de andere pagina's toevoegen en vervolgens je pagina's opmaken om ze er nog beter uit te laten zien!
