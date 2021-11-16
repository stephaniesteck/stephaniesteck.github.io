const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

    const towns = jsonObject['towns'];

    const townList = ["Soda Springs", "Fish Haven", "Preston"];

    townList.sort(function(a, b){ return b.value - a.value});
    console.log(townList);
    
    for (let i = 0; i <towns.length; i++) {
        if(townList.includes(towns[i].name)) {
            let townImage;

            switch (towns[i].name) {
                case 'Preston':
                    townImage ='./images/preston.jpg';
                break;
                case 'Soda Springs': 
                townImage = './images/sodasprings.jpg';
                break;
                case 'Fish Haven':
                    townImage ='./images/fishhaven.jpg';
                break;
                
            }
            

            let townDiv = document.createElement('div');
            let textDiv = document.createElement('div');
            let townH3 = document.createElement('h3');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let rainFall = document.createElement('p');
            let population = document.createElement('p');
            let townImg = document.createElement('img');

            townDiv.classList.add('town-div');
            textDiv.classList.add('text-div');
            townH3.classList.add('town-h3');
            motto.classList.add('motto');
            yearFounded.classList.add('town-founded');
            yearFounded.classList.add('town-p');
            rainFall.classList.add('town-rain');
            rainFall.classList.add('town-p');
            population.classList.add('pop');
            population.classList.add('town-p');
            townImg.classList.add('town-img');

            townH3.textContent = towns[i].name;
            motto.textContent = `${towns[i].motto}`;
            yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
            rainFall.textContent = `Average Rainfall: ${towns[i].averageRainfall}`;
            population.textContent = `Current Population: ${towns[i].currentPopulation}`;
            townImg.src = townImage;
            townImg.alt = `image of town ${towns[i].name}`;

            textDiv.appendChild(townH3);
            textDiv.appendChild(motto);
            textDiv.appendChild(yearFounded);
            textDiv.appendChild(rainFall);
            textDiv.appendChild(population);
            townDiv.appendChild(textDiv);
            townDiv.appendChild(townImg);

            document.querySelector('.towns-id').appendChild(townDiv);
        }
    }
});