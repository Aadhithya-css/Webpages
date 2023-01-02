const menu = document.querySelector('.menu');
const menu_open = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');
const overlay = document.querySelector('.overlay');

menu_open.addEventListener('click', () => {
    menu.classList.add('appear');
    overlay.classList.add('opacity');
});

menu_close.addEventListener('click', () => {
    menu.classList.remove('appear');
    overlay.classList.remove('opacity');
});