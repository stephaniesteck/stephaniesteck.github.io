const townsRequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsRequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     
    // holds json object data
    const towns = jsonObject['towns'];

    // get current page title 
    const currentPage = document.querySelector('.preston').textContent;

    // loop though town list from the json data
    console.log(currentPage)
    for (let i = 0; i < towns.length; i++ ) {
        // check to see if current town is in townList and matches current page create UI elements
        if (towns[i].name == currentPage) {
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
        let ev = `<p class="event-item"><i class="hidden"></i>${events[i]}</p>`
        // output to page
        eventList.insertAdjacentHTML('beforeend', ev);
    }
}