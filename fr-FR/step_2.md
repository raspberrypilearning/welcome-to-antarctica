## Créer une barre de navigation

Dans cette étape, tu crées une barre de navigation (aussi appelée navbar en anglais), pour relier les pages du site web. Elle permettra aux utilisateurs de naviguer d'une page à l'autre.
<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/welcome-to-antarctica-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Ouvre le [projet de démarrage Bienvenue en Antarctique](https://editor.raspberrypi.org/fr-FR/projects/welcome-to-antarctica-starter){:target="_blank"}.

--- /task ---

Ton projet de démarrage contient :

- Trois pages HTML avec du texte
- Un fichier CSS qui contient le style d'une partie du contenu
- Les images que tu utiliseras dans le projet
- Un fichier JavaScript pour que la barre de navigation réagisse lorsque la taille de la page change

--- task ---

Jette un œil au projet de démarrage.

Ouvre `index.html`. Y a-t-il des éléments HTML que tu reconnais ?

--- /task ---

### Ajouter le code HTML pour afficher la barre de navigation

Le contenu de la page web est placé dans les balises `<body>`.

La barre de navigation est placée dans les balises `<nav>` de l'en-tête de la page web.

--- task ---

Trouve les balises `<header>` et `</header>`.
Ajoute les balises `<nav>`.

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

Tu vas utiliser un `<div>` pour contenir les liens vers les autres pages.

À l'intérieur des balises `<nav>`, ajoute un nouveau `<div>`.

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
En <span style="color: #0faeb0">**HTML**</span>, la balise `<a>` est utilisée pour créer des liens. Ces liens peuvent être utilisés pour envoyer les utilisateurs vers une autre page du même site ou vers un site externe. Tu mets le texte à lier à l'intérieur de `<a>` et `</a>`, et l'attribut `href` fournit le nom de fichier de la page vers laquelle le lien mène. Pour les pages externes, l'attribut `href` fournit l'adresse web (commençant généralement par « https:// ») de la page vers laquelle tu veux établir un lien.
</p>

--- task ---

Ajoute des balises `<a>` pour créer des liens vers chaque page.

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
          <a href="index.html">Accueil</a>
          <a href="wildlife.html">Faune</a>
          <a href="climate.html">Climat</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

### Enregistre ton projet

Ton projet est enregistré automatiquement. Retourne au lien de démarrage dans le même navigateur web pour voir tes modifications.

--- task ---

**Clique sur Run**

Tu devrais :

- Voir les liens de navigation en haut

- Cliquer sur un lien pour accéder aux pages Faune ou Climat

- Remarquer que la barre de navigation n'apparaît pas sur les pages consacrées à la faune ou au climat

**Astuce :** dans le Code Editor, tu peux utiliser le bouton retour du navigateur (←) pour revenir à la page d'accueil.

--- /task ---

Ensuite, tu vas ajouter la barre de navigation aux autres pages et styliser tes pages pour qu'elles soient encore plus belles !
