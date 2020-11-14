const hamburger = document.querySelector('#js-hamburger-menu');
const menu = document.querySelector('#js-mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});
