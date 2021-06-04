var navMain = document.querySelector('.menu__block');
var navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('menu__block--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('menu__block--opened')) {
    navMain.classList.remove('menu__block--opened');
  } else {
    navMain.classList.add('menu__block--opened');
  }
});
