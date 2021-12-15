const events = 'https://stephaniesteck.github.io/final/json/events.json';

fetch(events)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const events = jsonObject['events'];

        for (let i = 0; i < events.length; i++) {
            console.log(events[i]);
            let e = document.createElement('section');
            let eventname = document.createElement('h3');
            let place = document.createElement('p');
            let day = document.createElement('p');
            let time = document.createElement('p');

            eventname.textContent = `Event: ${events[i].name}`;
            place.textContent = `Place: ${events[i].place}`;
            day.textContent = `Day: ${events[i].day}`;
            time.textContent = `Time: ${events[i].time}`;

            e.appendChild(eventname).appendChild(place).appendChild(day).appendChild(time);

            document.querySelector('.town-events').appendChild(e);
        }
    });