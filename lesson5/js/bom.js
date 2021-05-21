const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){
    //store input value
    let value = input.value;
    //shows total number
    letliCount =  document.getElementsByTagName('li').length+1;
    //verify a value was added
    if (!value.trim()){
        console.log('nothing entered try again');
    } else if (liCount > 25){
        alert('you have reached the limit of 25 chapters. Please remove one before adding another chapter');
    } else {
        const liNew =document.createElement('li');
        const btnNew =document.createElement('button');

        btnNew.className ='delete-btn';
        liNew.textContent = value;
        btnNew.textContent = 'X';

        btnNew.onClick = function() {
            list.removeChild(liNew);
        };
    }
    input.focus();
    input.value();
});