$(document).ready(function () {
    // Fonction pour afficher/masquer la section #toggle-products
    function toggleProducts(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        $("#toggle-products").slideToggle(); // Alterne l'affichage de l'élément
    }

    // Attache l'événement "click" au lien "Products" par son ID
    $("#products-button").on("click", toggleProducts);
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.categories ul li');
    const categoryImage = document.getElementById('category-image');

    // Mise à jour des chemins d'image avec des exemples clairs
    const images = {
        motherboard: 'images/motherboard.jpg',
        monitor: 'images/monitor.jpg',
        'graphics-card': 'images/graphics-card.jpg',
        'mini-pc': 'images/mini-pc.jpg',
        networking: 'images/networking.jpg',
    };

    // Attache un gestionnaire d'événement pour chaque élément de catégorie
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            if (images[category]) {
                // Change la source et l'attribut alt de l'image
                categoryImage.src = images[category];
                categoryImage.alt = `${category} image`;
            } else {
                console.error(`Image non trouvée pour la catégorie: ${category}`);
            }
        });
    });
});
