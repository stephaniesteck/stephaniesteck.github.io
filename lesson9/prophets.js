const requestURL ='https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);

    const prophets = jsonObject['prophets'];

   for (let i = 0; i < prophets.length; i++) {
       console.log(prophets[i]);
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let birth = document.createElement('p');
       let place = document.createElement('p');
       let img = document.createElement('img');

        h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
        birth.textContent = `Date Of Birth: ${prophets[i].birthdate}`;
        place.textContent = `Place of Birth: ${prophets[i].birthplace}`;
        img.src = prophets[i].imageurl;
        img.alt = `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`;

        card.appendChild(h2).appendChild(birth).appendChild(place).appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    }
});