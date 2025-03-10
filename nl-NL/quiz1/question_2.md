--- question ---

---
legend: Vraag 2 van 3
---

Je hebt CSS-eigenschappen in je project gebruikt om de positie van je inhoud op te geven met behulp van een grid (raster) lay-out.

Kijk naar de CSS-stijl voor de orcas-selector.

Welke kolommen beslaat de orka-afbeelding?

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.orcas {
  background-image: url('orca-photo.jpg');
  grid-column-start: 1;
  grid-column-end: 3;
}

--- /code ---

--- choices ---

- (x) 1 en 2

  --- feedback ---

  Juist! `grid-column-start` stelt in in welke kolom de weergave van de afbeelding moet beginnen (de afbeelding begint in de eerste kolom) en de waarde van `grid-column-end` stelt in in welke kolom de weergave van de afbeelding moet eindigen (de afbeelding wordt niet weergegeven in de derde kolom).

  --- /feedback ---

- ( ) 2 en 3

  --- feedback ---

  Kijk nog een keer. `grid-column-start` stelt in, in welke kolom de weergave van de afbeelding moet starten en de waarde van `grid-column-end` stelt in vanaf welke kolom de afbeelding **niet** moet worden weergegeven.

  --- /feedback ---

- ( ) 1, 2 en 3

  --- feedback ---

  Bijna! De afbeelding van de orka begint in de eerste kolom, maar de waarde van `grid-column-end` bepaalt op welke kolom de weergave van de afbeelding moet eindigen.

  --- /feedback ---

--- /choices ---

--- /question ---
