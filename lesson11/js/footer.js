const year =document.querySelector("#copyright")
	year.innerHTML = new Date().getFullYear();
	
document.addEventListener('DOMContentLoaded', function() {        
    // get and format current date 
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };
    let todaysDate = getDate.toLocaleDateString(undefined, dayOptions);

    // update the last modified date and time
    document.querySelector('#lastmod').textContent = todaysDate;   
 }, false); 
