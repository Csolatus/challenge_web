// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {

    // java lié au header
    $(document).ready(function () {
        // Fonction pour afficher/masquer la section #toggle-products
        function toggleProducts(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            $("#toggle-products").slideToggle(); // Alterne l'affichage de l'élément
        }
    
        // Attache l'événement "click" au lien "Products" par son ID
        $("#products-button").on("click", toggleProducts);
    });


       // Fonction pour ajouter un écouteur d'événement avec vérification
const addClickListener = (selector, message) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', () => alert(message));
    }
  };
  
  // Ajouter des écouteurs d'événements aux boutons
  addClickListener('#products-button', 'Redirection vers la page des produits...');
  addClickListener('#nav-button-langue', 'Sélection de la langue...');
  addClickListener('#nav-button-login', 'Accès au compte utilisateur...');
  
  // Ajouter un effet visuel simple aux éléments de la grille
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.opacity = '0.8';
    });
    item.addEventListener('mouseleave', () => {
      item.style.opacity = '1';
    });
  });
  
  // Gestion des popups
  const loginPopup = document.getElementById('login-popup');
  const registerPopup = document.getElementById('register-popup');
  const loginButton = document.getElementById('nav-button-login');
  const closeLoginButton = loginPopup.querySelector('.close');
  const closeRegisterButton = registerPopup.querySelector('.close');
  const showRegisterPopupLink = loginPopup.querySelector('.register-link');
  
  function showPopup(popup) {
    popup.style.display = 'block';
  }
  
  function closePopup(popup) {
    popup.style.display = 'none';
  }
  
  if (loginButton) {
    loginButton.addEventListener('click', () => showPopup(loginPopup));
  }
  
  if (closeLoginButton) {
    closeLoginButton.addEventListener('click', () => closePopup(loginPopup));
  }
  
  if (showRegisterPopupLink) {
    showRegisterPopupLink.addEventListener('click', event => {
      event.preventDefault();
      closePopup(loginPopup);
      showPopup(registerPopup);
    });
  }
  
  if (closeRegisterButton) {
    closeRegisterButton.addEventListener('click', () => closePopup(registerPopup));
  }
  
  window.addEventListener('click', event => {
    if (event.target === loginPopup) closePopup(loginPopup);
    if (event.target === registerPopup) closePopup(registerPopup);
  });
  
  // Gestion de la pop-up des langues
  const languagePopup = document.getElementById('language-popup');
  const languageButton = document.getElementById('nav-button-langue');
  const closeLanguagePopup = languagePopup.querySelector('.close');
  
  if (languageButton) {
    languageButton.addEventListener('click', () => {
      languagePopup.style.display = 'block';
    });
  }
  
  if (closeLanguagePopup) {
    closeLanguagePopup.addEventListener('click', () => {
      languagePopup.style.display = 'none';
    });
  }
  
  window.addEventListener('click', event => {
    if (event.target === languagePopup) {
      languagePopup.style.display = 'none';
    }
  });
  
  // Filtrage dynamique des langues
  const languageSearch = document.getElementById('language-search');
  const languageList = document.getElementById('language-list');
  const languages = Array.from(languageList.getElementsByTagName('li'));
  
  if (languageSearch) {
    languageSearch.addEventListener('input', () => {
      const searchValue = languageSearch.value.toLowerCase().trim();
      languages.forEach(language => {
        if (language.textContent.toLowerCase().includes(searchValue)) {
          language.style.display = '';
        } else {
          language.style.display = 'none';
        }
      });
    });
  }
  
    // Sélection d'une langue
    languages.forEach(language => {
      language.addEventListener('click', () => {
        alert(`Langue sélectionnée : ${language.textContent}`);
        languagePopup.style.display = 'none';
      });
    });

});