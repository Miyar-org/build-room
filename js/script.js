// The part that handles the mmenu icon click animations
const menuIcon = document.querySelector('.menuicon');
const body = document.body;
let degrees = 0;
menuIcon.addEventListener('click', () => {
    degrees += 90;
    menuIcon.style.rotate = `${degrees}deg`;
    body.classList.toggle('menuaction');

});