

function addChapter(){
    let chapterNum = document.querySelector('#input').value;
    const list = document.querySelector('ul');
    console.log('There');
    //store input value
    console.log(chapterNum);
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

    }
}