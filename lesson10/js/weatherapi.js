const currentRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cc15d373ad20fce24426cef4741d290a';
const fiveDayURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cc15d373ad20fce24426cef4741d290a';

fetch(currentRequestURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
});

fetch(fiveDayURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
});