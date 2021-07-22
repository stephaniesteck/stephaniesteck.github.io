const currentRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5538927&units=imperial&appid=b71ce55e24508e70ddc75b03913dddc2';
const threeDayRequestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.15&lon=111.81&exclude=hourly,dailyappid=b71ce55e24508e70ddc75b03913dddc2';


fetch(currentRequestURL)
.then((response) => response.json())
.then((jsObject) => {
    //current codition
    let current = jsObject.weather[0].main;
    let c = document.getElementById('d-current');
    c.textContent = current;
    // current temp 
    let temp = jsObject.main.temp;
    let t = document.getElementById('d-temp');
    t.textContent = parseInt(temp);
    // humidity
    let humidity = jsObject.main.humidity;
    let h = document.getElementById('d-humid');
    h.textContent = humidity;
    // wind speed
    let wind = jsObject.wind.speed;
    let w = document.getElementById('d-wind-s');
    w.textContent = wind;

    //windchill function
    windChill();

});

//calucate wind-chill
function windChill() {
    //create let for the temp and wind speed
    let temp = parseInt(document.querySelector('#d-temp').textContent);
    let windSpeed =parseInt(document.querySelector('#d-wind-s').textContent);
    // let for wind chill
    let windChill =' ';

    //check windchill
    if (temp > 50 || windSpeed < 3) {
        windChill = '__ ';
        // temp below 50 and windspeed more than 3 mph
    } else {
        windChill = parseInt((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed, 0.16)));
    }
    //output
    document.querySelector('#d-wind-c').textContent - windChill;
    }

fetch(threeDayRequestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let forecast =jsObject.list;
        //holds icon &temp objects for the five day
        let threeDay = [];

        //loops through response
        for(let i = 0; i < forecast.length; i++) {
            //isolate time
            let time = parseInt(forecast[i].dt_txt.slice(10, 13));
            //if time is 18:00 then add to 5 day array
            if(time == 18) {
                //icon and temp obj
                let w= {
                    wIcon: forecast[i].weather[0].icon,
                    wDesc: forecast[i].weather[0].description,
                    wTemp: parseInt(forecast[i].main.temp),
                    wDate: forecast[i].dt_txt.slice(0, 10)
                };
                threeDay.push(w);
            }
        }

        console.log(threeDay);
        //loops through 3 day array outputs data on page
        for(let i = 0; i < threeDay.length; i++) {
            //set value for content output
            let o_icon =   `https://openweathermap.org/img/w/${threeDay[i].wIcon}.png`;
            let o_desc = threeDay[i].wDesc;
            let o_temp = threeDay[i].wTemp;
            let o_date = threeDay[i].wDate;
            //get html elements
            let dayOutput = document.getElementById('day-output');
            let weatherOutput = document.getElementById('weather-output');

            //create elements
            let dayTh = document.createElement('th');

            //creates weather info content
            let weatherInfo = `<td class="forecast-info">
                <img src="${o_icon}" alt="${o_desc}" class ="w-icon">
                <span>${o_temp} &#176;F</span>
            </td>`;

            //add content to elements
            dayTh.textContent = calcDayOfWeek(o_date);

            //add elements to html
            dayOutput.appendChild(dayTh);
            weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
           
        }
           
        });