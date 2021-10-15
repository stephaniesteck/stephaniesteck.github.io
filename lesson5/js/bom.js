const input =  document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){
    let value = input.value;
    let liCount = document.getElementsByTagName('li').length+1;
    
    if (!value.trim()) {
        console.log('nothing was entered try again');
    } else if (liCount > 25) {
        alert('You have tried to enter more than 25, please delete one before adding a new chapter.');
    } else {
        const liNew = document.createElement('li');
        const btnNew = document.createElement('button');
        btnNew.className ='delete-btn';
        liNew.textContent = value;
        btnNew.textContent ='❌';

        list.appendChild(liNew).appendChild(btnNew);
        btnNew.onclick = function() {
            list.removeChild(liNew);
        }
    }
    input.focus();

    input.value = ' ';
});