// The part that handles the mmenu icon click animations
const menuIcon = document.querySelector('.menuicon');
const body = document.body;
let degrees = 0;
menuIcon.addEventListener('click', () => {
    degrees += 90;
    menuIcon.style.rotate = `${degrees}deg`;
    body.classList.toggle('menuaction');

});

const indexitem = document.querySelector('.index');
indexitem.addEventListener('click', () => {
    degrees += 90;
    menuIcon.style.rotate = `${degrees}deg`;
    body.classList.remove('menuaction');
});

// Tashfeen Miyar: JS Code block
let currentSection = '';

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        degrees += 90;
        menuIcon.style.rotate = '${degrees}deg';
        body.classList.remove('menuaction');
    }
});

document.addEventListener('click', (event) => {
    if (body.classList.contains('menuaction') && !menuIcon.contains(event.target) && !event.target.closest('.index')) {
        degrees += 90;
        menuIcon.style.rotate = `${degrees}deg`;
        body.classList.remove('menuaction');
    }
});

const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            currentSection = entry.target.id;
            history.replaceState(null, '', window.location.pathname);
            }
        });
}, {
    threshold: 0.5
});

sections.forEach((section) => {
    sectionObserver.observe(section);
});

if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);

    if (targetSection) {
        targetSection.scrollIntoView();
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Build Room is no longer visible.');
    } else {
        console.log('Welcome back to Build Room.');
    }
});