document.addEventListener('DOMContentLoaded', function() {        
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric' ,
        month: 'long'
    };

    let todaysDate = getDate.toLocaleDateString('en-GB', dayOptions);

    if (todaysDate.split(',')[0] == 'Friday') {
        pancakeBanner();
    } else {
        console.log('No pancakes for you!')
    };

    document.querySelector('#last-updated').textContent = todaysDate;   
}, false); 

function pancakeBanner() {
    document.getElementsByClassName('banner')[0].classList.remove('hidden');
}


function toggleMenu() {
    document.getElementsByClassName('headermenu')[0].classList.toggle('responsive');
}

