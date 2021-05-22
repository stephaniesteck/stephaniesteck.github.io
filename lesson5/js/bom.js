function addChapter(){
    let chapterNum = document.querySelector('#favchap').value;
    
    if (!chapterNum.trim()){
        alert('nothing entered try again');
    } else if (parseInt(chapterNum) > 25){
        alert('you have reached the limit of 25 chapters. Please remove one before adding another chapter');
    } else {
        const liNew =document.createElement('li');
        const btnNew =document.createElement('button');

        
    }
    
}