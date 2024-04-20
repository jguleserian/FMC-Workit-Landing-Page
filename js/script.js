const title = document.querySelector('h1');
const logoLight = document.querySelector('.logo-light');


title.addEventListener('mouseover', () => {
  title.classList.add('hover-green', 'transition');
  /*title.classList.add('transition');*/
});
title.addEventListener('mouseout', () => {
  title.classList.remove('hover-green', 'transition');
});

logoLight.addEventListener('mouseover', () => {
  logoLight.classList.add('transition');
});

logoLight.addEventListener('mouseout', () => {
  logoLight.classList.remove('transition');
});

