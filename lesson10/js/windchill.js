document.addEventListener('DOMContentLoaded', function() {
    
    let temp = parseInt(document.querySelector('#d-temp').textContent);
    let windSpeed = parseInt(document.querySelector('#d-wind-s').textContent);
    // var for wind chill
    let windChill = '';
    
    
    if (temp > 50 || windSpeed < 3) {
        windChill = '--';
    
    } else {
        windChill = parseInt((35.74 + (0.6215 * temp)) -
        (35.75 * Math.pow(windSpeed, 0.16)) + 
        (0.4275 * temp * Math.pow(windSpeed, 0.16)));
    }

    
    document.querySelector('#d-wind-c').textContent = windChill;

 }, false);