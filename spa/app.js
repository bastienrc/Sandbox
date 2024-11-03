// Object contenant les vues de l'application
const routes = {
  home: `<h1>Accueil</h1><p>Bienvenue sur la page d'accueil.</p>`,
  about: `<h1>À propos</h1><p>Voici la page à propos.</p>`,
  contact: `<h1>Contact</h1><p>Vous pouvez nous contacter ici.</p>`,
};

// Fonction pour afficher la vue en fonction de l'URL
function navigate() {
  // Récupère le hash (e.g., #home, #about, etc.)
  const path = window.location.hash.slice(1) || "home";

  // Trouve la vue correspondante ou un message d'erreur si elle n'existe pas
  const view = routes[path] || `<h1>404</h1><p>Page non trouvée</p>`;

  // Rendre la vue dans le conteneur principal
  document.getElementById("app").innerHTML = view;
}

// Détecte les changements dans le hash de l'URL et affiche la vue correspondante
window.addEventListener("hashchange", navigate);

// Charge la vue initiale lors de l'ouverture de la page
window.addEventListener("load", navigate);
