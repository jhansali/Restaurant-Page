import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function initializeSite() {
  loadHome();

  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');

  homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  contactButton.addEventListener('click', () => {
    clearContent();
    loadContact();
  });
}

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

initializeSite();
