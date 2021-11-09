const date = new Date().toISOString().slice(1, 10);
document.querySelector(".storm-date").setAttribute("value", date);

let elem = document.querySelector('input[type=range]');

let rangeValue = function(){
    let newValue = elem.value;
    let target = document.querySelector(".bar");
    target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);