## Animaties gebruiken

Animaties en interactiviteit maken je webpagina leuker voor bezoekers!

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/welcome-to-antarctica-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Animaties toevoegen bij bewegen

In plaats van alleen de feitelijke tekst te laten zien, voeg wat interactie toe aan je pagina!

Maak de feiten onzichtbaar.

--- task ---

Open `style.css`.

Stel de `opacity` eigenschap van `.fact` in op `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 126
---

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

--- /code ---

--- /task ---

Maak de feiten weer zichtbaar wanneer de gebruiker eroverheen beweegt.

--- task ---

Voeg een nieuwe selector `.fact:hover` toe.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 129
line_highlights: 130-132
---

/* Feitenhouder */
.fact:hover {
  opacity: 1;
}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

In plaats van meteen over te schakelen, kun je de verandering soepeler laten verlopen met een overgang.

--- task ---

Voeg een `transition` eigenschap toe aan `.fact`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 127
---

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

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Beweeg je muis over de afbeeldingen om je animatie te zien!

--- /task ---

Vervolgens ga je een nieuwe rasterindeling gebruiken om de inhoud op een andere manier te organiseren, zodat het interessant blijft!
