const currentRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=cc15d373ad20fce24426cef4741d290a';

fetch(currentRequestURL)
.then((response) => response.json())
  .then((jsObject) => {


    const six = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = 0;
    six.forEach(forecast => {
        let thedate = new Date(forecast.dt_txt);
        document.querySelector(`#dayofweek${day+1}`).textContent = weekday[thedate.getDay()];
        document.querySelector(`#forecast${day+1}`).textContent = forecast.main.temp;
        const weathericon = document.querySelector(`#icon${day+1}`);
        day++;

        //const currentTemp = document.querySelector('#current-temp')
        let imgsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let imgalt = forecast.weather[0].description;

        //currentTemp.textContent = forecast.main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
    })

 
  });