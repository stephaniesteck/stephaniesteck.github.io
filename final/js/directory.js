const directory = "https://stephaniesteck.github.io/final/json/directory.json";

fetch(directory)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject)

        const business = jsonObject["businesses"];

        const businessList = ["The BLGD 178", "Casino Star Theatre", "Gunnison Market", "Donaldson Insurance Agency Copy Station", "Donaldson Insurance Agency", "Satterwhite Log Homes", "Lyle Young Welding"];

       // businessList.sort(fuction(a,b){ return b.value - a.value});
        console.log(businessList);

        for (let i = 0; i <business.length; i++) {
            if(businessList.includes(business[i].name)) {
                let bizImage;

            switch (business[i].name) {
                case 'The BLDG 178':
                    bizImage ='../images/bldg1.jpg';
                break;
                case 'Casino Star Theatre': 
                    bizImage = '../images/casino.jpg';
                break;
                case 'Gunnison Market':
                    bizImage ='../images/gunnisonm.jpg';
                break;
                case 'Donaldson Insurance Agency Copy Station':
                    bizImage ='../images/copys.jpg';
                break;
                case 'Donaldson Insurance Agency': 
                    bizImage = '../images/don.jpg';
                break;
                case 'Satterwhite Log Homes':
                    bizImage ='../images/satter.jpg';
                break;
                case 'Lyle Young Welding':
                    bizImage ='../images/young.jpg';
                break;
                
            }
            let bizDiv = document.createElement('div');
            let textDiv = document.createElement('div');
            let bizH3 = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let bizUrl = document.createElement('a');
            let bImg = document.createElement('img');

            bizDiv.classList.add('biz-div');
            textDiv.classList.add('text-div');
            bizH3.classList.add('biz-h3');
            address.classList.add('address');
            phone.classList.add('phone');
            bizUrl.classList.add('biz-btn');
            bImg.classList.add('biz-img');

            bizH3.textContent = business[i].name;
            address.textContent = business[i].address;
            phone.textContent = business[i].phone;
            bizUrl.textContent = business[i].pageurl;
            bImg.src =bizImage;
            bImg.alt = `image of business ${business[i].name}`;
            
            textDiv.appendChild(bizH3);
            textDiv.appendChild(address);
            textDiv.appendChild(phone);
            textDiv.appendChild(bizUrl);
            bizDiv.appendChild(textDiv);
            bizDiv.appendChild(bImg);

            document.querySelector('.cards').appendChild(bizDiv);
            }
        }
    });