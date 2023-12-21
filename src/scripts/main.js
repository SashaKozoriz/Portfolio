'use strict';

const enButton = document.getElementById('en');
const uaButton = document.getElementById('ua');

enButton.addEventListener('click', () => {
  uaButton.classList.add('nav__link__lang--not-active');
  enButton.classList.remove('nav__link__lang--not-active');
});

uaButton.addEventListener('click', () => {
  enButton.classList.add('nav__link__lang--not-active');
  uaButton.classList.remove('nav__link__lang--not-active');
});


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});