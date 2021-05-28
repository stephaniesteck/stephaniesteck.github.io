const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const liNew = document.createElement('li');
    const listText = document.createElement('span');
    const btnNew = document.createElement('button');

    liNew.appendChild(liNew);
    listText.textContent = liNew;
    liNew.appendChild(liNew);
    btnNew.textContent = 'X';
    list.appendChild(liNew);

    btnNew.onclick =function(e) {
        list.removeChild(liNew);
    }
    input.focus();
});