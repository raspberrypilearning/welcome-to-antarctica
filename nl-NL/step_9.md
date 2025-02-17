## Responsieve rasters

Door de roosters responsief te maken, kan iedereen meer leren over Antarctica, ongeacht het apparaat waarop de informatie wordt bekeken.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/welcome-to-antarctica-complete" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Maak je rasters responsief

Als het scherm klein is, zijn de rasters die je eerder hebt gemaakt moeilijk te lezen.

Maak de lay-out hoger door vier rijen en één kolom te gebruiken.

--- task ---

Voeg de `fact-holder` selector toe aan de `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 237-241
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

  .fact-holder {
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }
  
}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

Op de pagina `wildlife.html` is er een andere rasterindeling voor feiten.

Die lay-out moet ook veranderen als de schermbreedte kleiner wordt.

Je gaat hem hoger maken en er vijf rijen in één kolom van maken.

--- task ---

Voeg de `fact-holder-wildlife` selector toe aan de `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 243-247
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }
  
}

--- /code ---

--- /task ---

Je kunt de pinguïnafbeelding over twee rijen laten lopen door de eigenschappen `grid-row-start` en `grid-row-end` te wijzigen.

Je moet ook de orka-afbeelding aanpassen, zodat deze de ene kolom beslaat die wordt gebruikt in de lay-out 'fact-holder-wildlife' (op dit moment is de lay-out zo gemaakt dat deze twee kolommen beslaat).

--- task ---

Voeg de `penguins` en `orcas` selectors toe aan de `@media` query.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 249-252, 254-257
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }

  .penguins {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .orcas {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Wijzig de grootte van het preview venster naar minder dan 768px om te zien hoe elke pagina reageert.

--- /task ---

Goed gedaan! Je hebt nu een responsieve website gebouwd waarmee mensen een plek kunnen ontdekken die ze anders misschien nooit zouden bezoeken: Antarctica.

Hierna, ga je nadenken over wat je hebt geleerd door een quiz te beantwoorden.
