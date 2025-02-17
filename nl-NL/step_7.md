## Verschillende soorten rasters

Gebruik een nieuw raster voor de Wilde dieren-pagina om de feitenkaarten op een andere manier te ordenen en het interessant te houden!

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/welcome-to-antarctica-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Wijzig de titel van de Wilde dieren-pagina

--- task ---

Open `wildlife.html`.

Wijzig de `h1`-tekst.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <section>
      <h1>Beweeg je muis over de kaarten hieronder om meer te weten te komen over de dieren op Antarctica</h1>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

### Voeg een raster toe aan de Wilde dieren-pagina

--- task ---

Voeg het `fact-holder` class attribuut toe aan de `<div>`.

Voeg een 'fact-card' en een achtergrondafbeelding klasse toe aan elk `<span>` element.

Voeg het `fact` class attribuut toe aan elke alinea.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 23
line_highlights: 27-29, 33-34, 38-39, 43-44
---
<section>
  <h1>
    Beweeg je muis over de kaarten hieronder om meer te weten te komen over de dieren op Antarctica  </h1>
  <div class="fact-holder">
    <span class="fact-card penguins">
      <p class="fact">
        Keizerspinguïns leven in kolonies op zee-ijs. Zee-ijs is bevroren zeewater en vormt een rand rond het Antarctische continent. In de winter breidt het zee-ijs zich uit. In de zomer wordt het gebied kleiner, omdat het zee-ijs smelt. Tegen de tijd dat de kuikens klaar zijn om uit te vliegen, bevindt de rand van het zee-ijs zich al dicht bij de kolonie. De jonge pinguïns hoeven dan niet ver te reizen om aan voedsel te komen.
      </p>
    </span>
    <span class="fact-card krill">
      <p class="fact">
        Krill wordt door veel organismen gegeten, zoals pinguïns, vogels en zelfs de gigantische zeeolifant! Omdat er zoveel verschillende organismen zijn die zich voeden met krill, moet er heel veel krill beschikbaar zijn, vooral omdat krill slechts 5 cm lang is!
      </p>
    </span>
    <span class="fact-card seals">
      <p class="fact">
        Zeehonden hebben een prachtige dikke vacht en een dikke vetlaag, waardoor ze optimaal zijn aangepast aan de kou. Er leven zes soorten in Antarctica: Antarctische pelsrobben, zeeluipaarden, Ross-zeehonden, zuidelijke zeeolifanten, krabbeneters en Weddell-zeehonden.
      </p>
    </span>
    <span class="fact-card orcas">
      <p class="fact">
        Bovenaan de voedselketen staan de orka's, die in het Engels ook wel killer whales worden genoemd. Dit zijn de grootste carnivoren op aarde, ze kunnen bijna 10 meter lang worden! Ze zwemmen overal op aarde rond, maar vooral in de Zuidelijke Oceaan rond Antarctica.
      </p>
    </span>
  </div>
</section>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

Er zijn verschillende manieren om de grootte van je rasterlay-out te bepalen. Je kunt bijvoorbeeld `fr` gebruiken om **fracties** van de grootte te maken.

--- collapse ---

---
title: Fracties gebruiken om de grootte van rasters te bepalen
---

In plaats van percentages te gebruiken en te moeten controleren of de som 100% is, kun je ook fracties van de ruimte gebruiken.

Om dit te doen gebruik je de eenheid `fr` - dus als je vier kolommen wil die elk kwart van de breedte van het raster zijn, je zou deze CSS gebruiken:

~~~css
grid-columns: 1fr 1fr 1fr 1fr 
~~~

Er zijn er in totaal **4** en elke kolom is 1/4 breed.

Ze hoeven ook niet gelijk te zijn. Je kunt ook 2 rijen maken, één van 3/4 en de andere van 1/4:

~~~css
grid-rows: 3fr 1fr
~~~

--- /collapse ---

--- task ---

Open `style.css`.

Voeg de `fact-holder-wildlife` selector toe aan het `style.css` bestand.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 100
line_highlights: 101-106
---

/* Feitenhouder - wilde dieren */
.fact-holder-wildlife {
  display: grid;
  height: 70vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 3fr;
}

--- /code ---

--- /task ---

--- task ---

Open `wildlife.html`.

Verander het klasse attribuut in de `<div>` naar je nieuwe `fact-holder-wildlife` klasse.

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 27
line_highlights: 27
---
  <div class="fact-holder-wildlife">
    <span class="fact-card penguins">
        <p class="fact">
        Keizerspinguïns ...

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

Nu heeft je wilde dieren raster 3 rijen die elk een derde van de ruimte in beslag nemen, en 2 kolommen die 1/3 en 2/3 van de breedte zijn.

![Het wild dieren raster, waarbij elke rij is gelabeld met een derde. Onderaan is de eerste kolom gelabeld als een derde, en de tweede kolom is gelabeld als twee derden.](images/wildlife_grid_size.png)

--- /task ---

De rasterindeling bepaalt automatisch de positie van je items. Je kunt echter ook zelf aangeven hoe je items wilt laten weergeven.

Je kunt er dus voor zorgen dat het pinguïn-feit zich over twee rijen uitstrekt. en het orca-feit strekt zich bijvoorbeeld uit over beide kolommen op de laatste rij.

--- task ---

Voeg `grid-row-start` toe aan `.penguins` en stel het in op `1`.

Voeg `grid-row-end` toe aan `.penguins` en stel het in op `3`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 157
line_highlights: 159-160
---

.penguins {
  background-image: url('penguin-photo.jpg');
  grid-row-start: 1;
  grid-row-end: 3;
}

--- /code ---

De `grid-row-start` eigenschap is de **eerste** rij waarin het element wordt weergegeven.

En `grid-row-end` is de rij waar het element eindigt — de afbeelding zal **niet** op deze rij worden weergegeven.

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

--- task ---

Voeg `grid-column-start` toe aan `.orcas` en stel het in op `1`.

Voeg `grid-column-end` toe aan `.orcas` en stel het in op `3`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 171
line_highlights: 173-174
---

.orcas {
  background-image: url('orca-photo.jpg');
  grid-column-start: 1;
  grid-column-end: 3;
}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

### Wijzig de kop van de Klimaatpagina

--- task ---

Open `climate.html`.

Wijzig de `h1`-tekst.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 22
line_highlights: 23
---
    <section>
      <h1>Beweeg de muis over de kaarten hieronder om meer te weten te komen over het klimaat op Antarctica</h1>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

### Voeg een raster toe aan de Klimaatpagina

--- task ---

Voeg het `fact-holder` class attribuut toe aan de `<div>`.

Voeg een 'fact-card' en een achtergrondafbeelding klasse toe aan elk `<span>` element.

Voeg het `fact` class attribuut toe aan elke alinea.

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 23
line_highlights: 25-27, 31-32, 36-37, 41-42
---
  <section>
    <h1>Beweeg je muis over de kaarten hieronder om meer te weten te komen over het klimaat op Antarctica</h1>
    <div class="fact-holder">
      <span class="fact-card temperature">
        <p class="fact">
          Antarctica is het koudste continent op aarde. De gemiddelde temperatuur in het binnenland bedraagt -57 °C, in de winter kan deze zakken tot -90 °C. Aan de kust is het warmer en in de zomer kunnen de temperaturen oplopen tot maximaal 8 °C.
        </p>
      </span>
      <span class="fact-card sunburn">
        <p class="fact">
          Op Antarctica kun je verbranden, de sneeuw weerkaatst bijna alle ultraviolette straling. Je voelt de hitte misschien niet, maar je moet je huid toch beschermen tegen de zonnestralen.
        </p>
      </span>
      <span class="fact-card ice">
        <p class="fact">
          Deze ijskap is gemiddeld 1,6 km dik en beslaat ongeveer 98% van het continent. Deze ijskap bevat bijna 90% van het ijs van de hele wereld, dus het is geen wonder dat het Antarctische klimaat zo koud is!
        </p>
      </span>
      <span class="fact-card rainfall">
        <p class="fact">
          Technisch gezien is Antarctica een woestijn omdat het daar zo droog is. De gemiddelde jaarlijkse neerslag aan de kust bedraagt slechts 166 millimeter. Bij zulke koude omstandigheden smelt de sneeuw vrijwel nooit. In plaats daarvan wordt het in de loop van de tijd samengeperst en vormt het een deel van de ijskap.
        </p>
      </span>
    </div>
  </section>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

--- /task ---

Nu ga je je inhoud slim maken. Het maakt niet uit of de pagina groot of klein is, of dat iemand een ander apparaat gebruikt: de pagina ziet er altijd fantastisch uit.
