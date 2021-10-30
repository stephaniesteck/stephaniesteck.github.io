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


document.addEventListener('DOMContentLoaded', function() {
    let a = new Date();
    let b = new Date();
        console.log(b - a);
            localStorage.a = a;
            localStorage.b = b;
        a = Date.parse(localStorage.a);
        b = Date.parse(localStorage.b);
            c = (b - a);
            if (c < 0) {
                output = c;
            }
            else {
                output = 0;
            }

    document.querySelector('.lastvisit').value = output;
   
})