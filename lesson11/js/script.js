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
    let b = new Date(localStorage.a);
    
    
    //a = Date.parse(localStorage.a);
    let output = '';
    let c = (a.getTime()-b.getTime()) / (1000 * 3600 * 24);
    if (c > 0) {
        output = c;
    }
    else {
        output = 0;
    }

    localStorage.a = a;
    document.querySelector('.lastvisit').innerHTML = output.toFixed(0) + ` Days Since Last Visit`;
   
})