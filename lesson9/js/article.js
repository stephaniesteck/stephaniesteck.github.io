const requestURL = 'https://idahonews.com/';

fetch(requestURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const news = jsonObject.response.docs;

        let length = Object.keys(jsonObject.response.docs).length;

        let articleDiv = document.createElement('div');
        let headline = document.createElement('h2');
        let snippet = document.createElement('p');
        let url = document.createElement('a');

        articleDiv.classList.add('home-article');
        headline.classList.add('home-headline');
        snippet.classList.add('home-p');
        url.classList.add('home-article-url');

        headline.textContent = news[i].headline.main;
        snippet.textContent = news[i].snippet;
        url.href = news[i].web_url;
        url.target = '_blank';
        url.textContent = 'Read More ...';

        articleDiv.appendChild(headline);
        articleDiv.appendChild(snippet).appendChild(url);
        document.querySelector('.home-news').appendChild(articleDiv);
    
    
});
