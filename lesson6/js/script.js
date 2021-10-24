const hambutton = document.querySelector('.ham-menu');
const nav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);

window.onresize =() => {if (window.innerWidth > 520) nav.classList.remove('responsive')};


  
//Get a date object
const d = new Date();
//If tiday is not friday hidde the banner
if (d.getDay() !== 5) {
    document.querySelector('.pancakes').classList.add('hidden');
} 
