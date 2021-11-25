const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cc15d373ad20fce24426cef4741d290a";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp')
    const weathericon =document.querySelector('#imagesrc');

    currentTemp.textContent = jsObject.main.temp.toFixed(0);

    let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
    let imgalt = jsObject.weather[0].description;  // note how we reference the weather array

    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
  });