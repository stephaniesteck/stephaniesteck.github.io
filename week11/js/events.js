const townsRequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsRequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // holds json object data
    const towns = jsonObject['towns'];

    // get current page title 
    const currentPage = document.querySelector('.page-title').textContent;
    // trims the ' Idaho' from the title
    const trimmedPageName = currentPage.slice(0, currentPage.length - 6);

    // loop though town list from the json data
    for (let i = 0; i < towns.length; i++ ) {
        // check to see if current town is in townList and matches current page create UI elements
        if (towns[i].name == trimmedPageName) {
            outputEvents(towns[i].events);
        }
    }
});

function outputEvents(events) {
    // get the element list
    const eventList = document.querySelector('.event-list');
    // loop though the events and add them to the page
    for (let i = 0; i < events.length; i++) {
        // create element, class, content
        let ev = `<p class="event-item"><i class="far fa-calendar-alt"></i>${events[i]}</p>`
        // output to page
        eventList.insertAdjacentHTML('beforeend', ev);
    }
}