let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
};
  
// Ajouter des écouteurs d'événements aux boutons
addClickListener('.buy-now', 'Redirection vers la page d\'achat...');
addClickListener('.language', 'Sélection de la langue...');
addClickListener('.account', 'Accès au compte utilisateur...');

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

// Fonction pour basculer la visibilité du menu sur mobile
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
    navLinks.classList.toggle('show');
    }
};

// Ajouter un écouteur d'événement pour le bouton du menu mobile
const menuButton = document.querySelector('.mobile-menu-button');
if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
}
// New code for login pop-up
const loginPopup = document.getElementById('login-popup');
const accountButton = document.querySelector('.account');
const closeButton = document.querySelector('.close');

accountButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';

});

closeButton.addEventListener('click', () => {
    loginPopup.style.display = 'none';

});

window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }

});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Here you would typically send the login data to a server
    console.log('Login attempt:', { username, password });
    loginPopup.style.display = 'none';

});

const registerPopup = document.getElementById('register-popup');
const registerLink = document.querySelector('.register-link');
const registerForm = document.getElementById('register-form');

// Ouvrir la page d'inscription
registerLink.addEventListener('click', (e) => {
e.preventDefault();
loginPopup.style.display = 'none';
registerPopup.style.display = 'block';

});

// Fermer la page d'inscription
registerPopup.querySelector('.close').addEventListener('click', () => {
registerPopup.style.display = 'none';

});

// Gestion du formulaire d'inscription
registerForm.addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('register-email').value;
const username = document.getElementById('register-username').value;
const password = document.getElementById('register-password').value;

// Simuler une inscription
console.log('Registration data:', { email, username, password });

// Afficher la page de connexion
registerPopup.style.display = 'none';
loginPopup.style.display = 'block';

});

// Ouvrir la pop-up Language
const languageButton = document.querySelector('.language');
const languagePopup = document.getElementById('language-popup');
const closeLanguagePopup = languagePopup.querySelector('.close');

languageButton.addEventListener('click', () => {
    languagePopup.style.display = 'block';
});

closeLanguagePopup.addEventListener('click', () => {
    languagePopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === languagePopup) {
        languagePopup.style.display = 'none';
    }
});

// Filtrer les langues dynamiquement
const languageSearch = document.getElementById('language-search');
const languageList = document.getElementById('language-list');
const languages = Array.from(languageList.getElementsByTagName('li'));

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

// Permettre la sélection d'une langue par clic
languages.forEach(language => {
    language.addEventListener('click', () => {
        alert(`Langue sélectionnée : ${language.textContent}`);
        languagePopup.style.display = 'none';
    });
});

// JavaScript pour gérer le carrousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

rightButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) moveToSlide(track, currentSlide, nextSlide);
});

leftButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) moveToSlide(track, currentSlide, prevSlide);
});