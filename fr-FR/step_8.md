## Barre de navigation réactive

Rends ton contenu intelligent ! Peu importe que la page soit grande ou petite, ou que quelqu'un utilise un appareil différent, la page a toujours fière allure.

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/welcome-to-antarctica-step8" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Les pages web peuvent être consultées sur de nombreux appareils différents et doivent être <span style="color: #0faeb0">**réactives**</span> pour chaque appareil. Cela signifie que si un utilisateur consulte ta page sur un téléphone portable, elle doit répondre à la taille d'écran la plus petite et s'il la consulte sur un ordinateur de bureau, elle doit répondre à la taille d'écran la plus grande. 
</p>

### Rendre la barre de navigation réactive

Sur un écran plus petit, les liens de la barre de navigation pourraient être trop rapprochés.

Tu vas faire disparaître les liens et les remplacer par un **menu hamburger** (☰).

--- task ---

Ouvre `index.html`.

À l'intérieur des balises `<nav>`, ajoute un nouveau `<div>` avec l'attribut `class="burger"`.

Ajoute deux balises `<span>`. L'une est pour l'icône « hamburger » (☰) utilisée pour ouvrir le menu. L'autre est pour une icône en forme de croix (✖️) utilisée pour fermer le menu.

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
        <a class="active" href="index.html">Accueil</a>
        <a href="wildlife.html">Faune</a>
        <a href="climate.html">Climat</a>
      </div>
      <div class="burger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>

--- /code ---

--- collapse ---

---
title: Utiliser les codes ASCII pour les caractères
---

Pour réaliser le menu hamburger et la croix, tu as utilisé un code **ASCII**. Il s'agit d'un moyen d'ajouter des caractères spéciaux qui ne figurent pas sur ton clavier.

Tu peux trouver une liste complète des codes ASCII sur [ce site web] (https://www.ascii-code.com/).

--- /collapse ---

--- /task ---

--- task ---

**Clique sur Run**

--- /task ---

Tu utilises un attribut `id` sur chaque élément `<span>`. Un `id` unique peut être attribué à chaque élément.

Les nouvelles icônes ne devraient être visibles que lorsque l'écran est suffisamment petit.

Lorsque la page se charge pour la première fois, tu ne veux pas que le `<div>` s'affiche.

--- task ---

Ouvre `style.css`.

Ajoute le sélecteur `hamburger` au fichier `style.css`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 71
line_highlights: 72-78
---

/* Menu hamburger */
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

**Clique sur Run**

--- /task ---

### Créer une requête média

Tu vas utiliser une **requête média** pour modifier le style des éléments en fonction de la largeur de l'écran.

Nous avons fixé à 768 px la largeur de l'écran, en dessous de laquelle la requête média se déclenchera.

--- collapse ---

---
title: Utiliser des requêtes média
---

Une requête média CSS peut être utilisée pour vérifier beaucoup de choses sur la façon dont une page web est actuellement affichée.

Tu peux vérifier les attributs de l'appareil qui affiche la page, comme la largeur ou la hauteur. Pour les appareils mobiles, tu peux vérifier s'ils sont en mode paysage ou portrait.

Tu peux aussi utiliser les requêtes média pour modifier le style d'une page lorsqu'elle est imprimée.

--- /collapse ---

--- task ---

En bas de `style.css`, ajoute ta requête média.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 212-214
---

/* Requête média */
@media screen and (max-width:768px) {

}

--- /code ---

--- /task ---

--- collapse ---

---
title: Pourquoi utiliser une largeur max de 768 px ?
---

La largeur habituelle d'un écran de tablette est de 768 px et les écrans de téléphone portable sont encore plus petits. En utilisant cette largeur, tu peux t'assurer que ton contenu est superbe sur tous les appareils mobiles.

Lorsque la largeur de la page est supérieure à 768 px, la barre de navigation affiche les trois liens de la page en haut de la page.

Lorsque la largeur de la page est inférieure ou égale à 768 px, la barre de navigation peut être cachée et un menu « hamburger » affiché pour gagner de la place.

--- /collapse ---

Lorsque l'icône du menu hamburger est affichée, la croix reste cachée.

Lorsque l'on clique sur l'icône hamburger, les liens de la page s'affichent et l'icône fermer apparaît.

--- task ---

Ajoute des sélecteurs pour styliser le `<div>` `.burger`.

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

**Clique sur Run**

Redimensionne le Code Editor pour voir tes changements !

--- /task ---

Tu dois ouvrir et fermer le menu de navigation.

Les éléments de navigation n'ont pas l'air top pour l'instant, alors ajoute une nouvelle mise en forme pour qu'ils ressemblent à un menu.

Tu définiras les éléments de navigation sur `display: none` pour qu'ils ne soient pas affichés avant l'ouverture du menu.

--- task ---

Ouvre `style.css`.

Ajoute un nouveau sélecteur `.nav-items` et un style à la requête média.

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

**Clique sur Run**

--- /task ---

--- task ---

Ouvre `index.html`.

Ajoute le fichier **JavaScript** à ta page.

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

**Clique sur Run**

Clique sur le menu hamburger pour voir apparaître tes éléments de navigation. Puis clique sur la croix pour fermer le menu.

--- /task ---

### Mettre à jour les autres pages

--- task ---

Ouvre `wildlife.html`.

Copie et colle l'élément `<div>` `burger` à l'intérieur des balises `<nav>`.

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
        <a href="index.html">Accueil</a>
        <a class="active" href="wildlife.html">Faune</a>
        <a href="climate.html">Climat</a>
      </div>
      <div class="burger">
        <span id="openHam">&#9776;</span>
        <span id="closeHam">&#x2716;</span>
      </div>
    </nav>

--- /code ---

--- /task ---

--- task ---

Ajoute également le fichier **JavaScript** à ta page.

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

**Clique sur Run**

Clique sur le menu hamburger pour voir apparaître tes éléments de navigation. Puis clique sur la croix pour fermer le menu.

--- /task ---

Tu dois maintenant ajouter le `<div>` burger et le fichier JavaScript au fichier climate.html.

--- task ---

Ouvre `climate.html`.

Copie et colle l'élément `<div>` `burger` à l'intérieur des balises `<nav>`.

Copie et colle aussi (CTRL + C ou CMD + C) le fichier **JavaScript** sur ta page.

--- /task ---

--- task ---

**Clique sur Run**

Clique sur chaque élément du menu pour naviguer d'une page à l'autre.

Redimensionne la fenêtre de prévisualisation en dessous de 768 px pour voir comment elle réagit.

--- /task ---

Tu as maintenant conçu une barre de navigation réactive. Mais les grilles pourraient avoir un meilleur aspect lorsque le site web est consulté sur un appareil mobile.
