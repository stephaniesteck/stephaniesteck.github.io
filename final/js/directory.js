const directory = "https://stephaniesteck.github.io/final/directory.json";

fetch(directory)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const directory = jsonObject['businesses'];

        for (let i = 0; i < directory.length; i++) {
            let busImage;

            switch (directory[i].name) {
                case 'The BLDG 178':
                    busImage ='./images/bldg1.jpg';
                break;
                case 'Casino Star Threatre':
                    busImage = './images/casino.jpg';
                break;
                case 'Gunnison Market':
                    busImage = './images/gunnisonm.jpg';
                break;
                case 'Donaldson Insurance Agency Copy Station':
                    busImage = './images/copys.jpg';
                break;
                case 'Donaldson Insurance Agency':
                    busImage = './images/don.jpg';
                break;
                case 'Satterwhite Log Homes':
                    busImage = './images/satter.jpg';
                break;
                case 'Lyle Young Welding':
                    busImage = './images/young.jpg';
                break;
            }
            
            let cards = document.createElement('section');
            let name = document.createElement('h3');
            busImage = document.createElement('img');
            let description = document.createElement('p');
            let link = document.createElement('button');

            name.textContent = `${directory[i].name}`;
            busImage.src = busImage;
            busImage.alt = ` images of ${directory[i].name}`;
            description.textContent = `${directory[i].description}`;
            link.src = directory[i].pageurl;

            cards.appendChild(name).appendChild(busImage).appendChild(description).appendChild(link);

            document.querySelector('.cards').appendChild(cards);
        }

        })