const hambutton = document.querySelector('.ham-menu');
const nav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);

window.onresize =() => {if (window.innerWidth > 520) nav.classList.remove('responsive')};