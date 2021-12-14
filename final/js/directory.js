const directory = "https://stephaniesteck.github.io/final/directory.json";

fetch(directory)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const directory = jsonObject['businesses'];

        for (let i = 0; i < directory.length; i++) {
            if(directory.includes(directory[i].name)) {
            let busImage;

            switch (directory[i].name) {
                case 'The BLDG 178':
                    busImage ='../images/bldg1.jpg';
                break;
                case 'Casino Star Threatre':
                    busImage = '../images/casino.jpg';
                break;
                case 'Gunnison Market':
                    busImage = '../images/gunnisonm.jpg';
                break;
                case 'Donaldson Insurance Agency Copy Station':
                    busImage = '../images/copys.jpg';
                break;
                case 'Donaldson Insurance Agency':
                    busImage = '../images/don.jpg';
                break;
                case 'Satterwhite Log Homes':
                    busImage = '../images/satter.jpg';
                break;
                case 'Lyle Young Welding':
                    busImage = '../images/young.jpg';
                break;
            }}
            
            let cardsb = document.createElement('section');
            let name = document.createElement('h3');
            let busImg = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let link = document.createElement('button');

            name.textContent = `${directory[i].name}`;
            address.textContent = `${directory[i].address}`;
            phone.textContent = `${directory[i].phone}`;
            link.src = directory[i].pageurl;
            //busImg.src = busImage;
            //busImg.alt = ` image of ${directory[i].name}`;
            

            cardsb.appendChild(name).appendChild(busImg).appendChild(address).appendChild(phone).appendChild(link);

            document.querySelector('.cards').appendChild(cardsb);
        }

        })