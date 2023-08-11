// Obtenez la balise meta par son ID
const metaThemeColor = document.getElementById("theme-color-meta");

// Obtenez la valeur de la variable CSS pour la couleur principale
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--bgcolor");

// Mettez à jour la valeur de la balise meta avec la couleur principale
metaThemeColor.setAttribute("content", primaryColor);