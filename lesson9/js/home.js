var strong = document.lastModified;
document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected');
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    let soda = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');
    soda.classList.add('soda-title');
    h2.classList.add('soda-h2');
    motto.classList.add('soda-motto');
    yearFounded.classList.add('soda-year');
    currentPopulation.classList.add('soda-pop');
    averageRainfall.classList.add('soda-rain');

    const towns = jsonObject['towns'];

    h2.textContent = towns[0].name;
    motto.textContent = towns[0].motto;
    yearFounded.textContent = 'Year Founded ' + towns[0].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + towns[0].currentPopulation;
    averageRainfall.textContent = "Average Rainfall: " + towns[0].averageRainfall;

    soda.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);

    document.querySelector('article.soda').appendChild(soda);
});

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    let fish = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');
    fish.classList.add('fish-title');
    h2.classList.add('fish-h2');
    motto.classList.add('fish-motto');
    yearFounded.classList.add('fish-year');
    currentPopulation.classList.add('fish-pop');
    averageRainfall.classList.add('fish-rain');

    const towns = jsonObject['towns'];

    h2.textContent = towns[2].name;
    motto.textContent = towns[2].motto;
    yearFounded.textContent = 'Year Founded ' + towns[2].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + towns[2].currentPopulation;
    averageRainfall.textContent = "Average Rainfall: " + towns[2].averageRainfall;

    fish.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);

    document.querySelector('article.fish').appendChild(fish);
});

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    let preston = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');
    preston.classList.add('preston-title');
    h2.classList.add('preston-h2');
    motto.classList.add('preston-motto');
    yearFounded.classList.add('preston-year');
    currentPopulation.classList.add('preston-pop');
    averageRainfall.classList.add('preston-rain');

    const towns = jsonObject['towns'];

    h2.textContent = towns[6].name;
    motto.textContent = towns[6].motto;
    yearFounded.textContent = 'Year Founded ' + towns[6].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + towns[6].currentPopulation;
    averageRainfall.textContent = "Average Rainfall: " + towns[6].averageRainfall;

    preston.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);

    document.querySelector('article.preston').appendChild(preston);
});