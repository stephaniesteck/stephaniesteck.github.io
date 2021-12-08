const events = 'https://stephaniesteck.github.io/final/events.json';

fetch(events)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        let ev = object.events;

        for (let i = 0; i < ev.length; i++) {
            console.log(events[i]);
            let e = document.createElement('section');
            let name = document.createElement('h3');
            let place = document.createElement('p');
            let day = document.createElement('p');
            let time = document.createElement('p');

            name.textContent = `Event: ${events[i].name}`;
            place.textContent = `Place: ${events[i].place}`;
            day.textContent = `Day: ${events[i].day}`;
            time.textContent = `Time: ${events[i].time}`;

            e.appendChild(name).appendChild(place).appendChild(day).appendChild(time);

            document.querySelector('.town-events').appendChild(e);
        }
    });