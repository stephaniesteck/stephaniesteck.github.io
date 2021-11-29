const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const town = jsObject["towns"];
        const townFilter = town.filter((x) => x.name.includes("Soda Springs"));
        let length = townFilter[0].events.length;
        console.log(jsObject);

        for (let i = 0; i < length; i++) {
            let townEvent = document.createElement("li");
            townEvent.textContent = townFilter[0].events[i];
            document.querySelector(".event-list").appendChild(townEvent);
        }
    });