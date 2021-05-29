const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const liNew = document.innerHTML('li');
    const listText = document.innerHTML('span');
    const btnNew = document.innerHTML('button');

    liNew.appendChild(liNew);
    listText.textContent = liNew;
    liNew.appendChild(liNew);
    btnNew.textContent = 'X';
    list.appendChild(liNew);

    btnNew.onclick =function() {
        list.removeChild(liNew);
    };
    input.focus();
});