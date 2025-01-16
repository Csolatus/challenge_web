$(document).ready(function () {
    // Fonction pour afficher/masquer la section #toggle-products
    function toggleProducts(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        $("#toggle-products").slideToggle(); // Alterne l'affichage de l'élément
    }

    // Attache l'événement "click" au lien "Products" par son ID
    $("#products-button").on("click", toggleProducts);
});


document.addEventListener("DOMContentLoaded", () => {
    // Animation pour les articles principaux (highlight-articles)
    const highlightArticles = document.querySelectorAll('.highlight-articles .article');

    highlightArticles.forEach(article => {
        article.addEventListener('mouseenter', () => {
            article.style.transition = "background-color 0.3s ease";
        });

        article.addEventListener('mouseleave', () => {
            article.style.backgroundColor = ""; // Revient à la couleur initiale
        });
    });

    // Interaction des boutons dans la barre de recherche (vérification classe existante)
    const buttons = document.querySelectorAll(".nav-right button");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Bouton ${index + 1} cliqué!`);
        });
    });

    // Changement de couleur sur hover pour les cartes
    const cards = document.querySelectorAll(".secondary-articles .card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "background-color 0.3s ease"; // Ajout transition
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "transparent"; // Retour à l'état initial
        });
    });
});

