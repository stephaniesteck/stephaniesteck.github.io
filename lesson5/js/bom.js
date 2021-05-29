const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const liNew = document.createElement('li');
    const btnNew = document.createElement('button');

    let value = input.value;
    
    liNew.textContent = value;
    btnNew.textContent = 'X';
    list.appendChild(liNew).appendChild(newBtn);

    btnNew.onclick =function() {
        list.removeChild(liNew);
    };
    input.focus();
});