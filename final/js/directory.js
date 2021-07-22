const direct = 'https://stephaniesteck.github.io/businesses.json';

fetch(direct)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const business = jsonObject['business'];
    
    for (let i = 0; i < business.length; i++ ) {
        console.log(business[i]);
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let img = document.createElement('img');
        
        h2.textContent = `${business[i].name} ${business[i].phonenum}`;
        birth.textContent = `Adress: ${business[i].address}`;
        place.textContent = `City: ${business[i].city}`;
        img.src = business[i].imageurl;
        img.alt = `${business[i].name} ${business[i].phonenum} - ${business[i].order}`;

        card.appendChild(h2).appendChild(birth).appendChild(place).appendChild(img);
        document.querySelector('div.cards').appendChild(card);
    }
});