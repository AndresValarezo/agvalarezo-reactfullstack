const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.navbar');

hamburguer.addEventListener('click', function (e) {
    menu.classList.toggle('spread');
});

window.addEventListener('click', function (e) {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        menu.classList.toggle('spread');
    }
});