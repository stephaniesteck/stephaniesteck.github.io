document.addEventListener('DOMContentLoaded', function() {        
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric' ,
        month: 'long'
    };

    let todaysDate = getDate.toLocaleDateString('en-GB', dayOptions);

    if (todaysDate.split(',')[0] == 'Friday') {
        pancakeBanner();
    } else {
        console.log('No pancakes for you!');
    }

    document.querySelector('#last-updated').textContent = todaysDate;   
}, false); 

function pancakeBanner() {
    document.getElementsByClassName('banner')[0].classList.remove('hidden');
}

function toggleMenu() {
    document.getElementsByClassName('headermenu')[0].classList.toggle('responsive');
}

const currentRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b71ce55e24508e70ddc75b03913dddc2';
const fiveDayRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b71ce55e24508e70ddc75b03913dddc2';

fetch(currentRequestURL)
.then((response) = response.json())
.then((jsObject) = {
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
fuction windChill() {
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

//five day forecast
fetch(fiveDayRequestURL)
    .then((response) =. response.json())
    .then((jsObject) =.{
        let forecast =jsObject.list;
        //holds icon &temp objects for the five day
        let fiveDay = [];

        //loops through response
        for(let i = 0; i < forecast.length; i++) {
            //isolate time
            let time = parseInt(forecast[i].dt+txt.slice(10, 13));
            //if time is 18:00 then add to 5 day array
            if(time == 18) {
                //icon and temp obj
                let w= {
                    wIcon: forecast[i].weather[0].icon,
                    wDesc: forecast[i].weather[0].description,
                    wTemp: parseInt(forecast[i].main.temp),
                    wDate: forecast[i].dt_txt.slice(0, 10)
                };
                fiveDay.push(w);
            }
        }
        console.log(fiveDay);
        //loops through 5 day array outputs data on page
        for(let i = 0; i < fiveDay.length; i++) {
            //set value for content output
            let o_icon = 'https://openweathermap.org/img/w${fiveDate[i].wIcon}.png';
            let o_desc = fiveDay[i].wDesc;
            let o_temp = fiveDay[i].wTemp;
            let o_date = fiveDay[i].wDate;
            //get html elements
            let dayOutput = document.getElementById('day-output');
            let weatherOutput = document.getElementById('weather-output');

            //create elements
            let dayTh = document.createElement('th');

            //creates weather info content
            let weatherInfo = '<td class="forecast-info">
                <img src="${o_icon}" alt="${o_desc}" class ="w-icon">
                <span>${o_temp} &#176;F</span>
            </td>';

            //add content to elements
            dayTh.textContent = calcDayOfWeek(o_date);

            //add elements to html
            dayOutput.appendChild(dayTh);
            weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
           
        }

        //returns long string of day of week based on date
        fuction calcDayOfWeek(date) {
            let dayOfWeek = new Date(date).toLocaleDateString('en-us', {weekday: 'long'});
        }
    });
