let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.getElementById('nav-items')

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
}

const handleResize = () => {
  const screenWidth = window.innerWidth;
  if (navigationItems.style.display === "none" && screenWidth > 768) {
    navigationItems.style.display = "flex";
  }
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
window.addEventListener("resize", handleResize);