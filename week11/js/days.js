document.addEventListener('DOMContentLoaded', function() {
    // get the name from local storage
    let usersName = localStorage.getItem('uName');
        // calls and passes name to banner function
        welcomeBanner(usersName);
 }, false);
 
function welcomeBanner(name) {
    // random greeting list
    let greetingArray = [
        'we\'re so glad you\'re here',
        'have a wonderful day',
        'we hope you have sunshine',
        'you are the best',
        'some clouds look like puppies',
        'it\'s ok to dance in the rain',
        'stay dry and stay safe',
        'you\'re a real gem'
    ];

    let b = document.getElementsByClassName('welcome-banner')[0];
    // check to see if there is a name in local memory
    if (name != null) {
        // get a random int between 0 and the length of the array
        let getNum = Math.floor(Math.random() * greetingArray.length);
        // addes the text to the welcome banner
        b.textContent = `Hey ${name}, ${greetingArray[getNum]}! It's been ${compareDateTime()} days since your last visit.`;
        // unhides the welcome banner
        b.classList.remove('hidden');
    } else {
        // just adds a day count if there was no name entered
        b.textContent = `Hey, it's been ${compareDateTime()} days since your last visit.`;
        // unhides the welcome banner
        b.classList.remove('banner');
    }
}