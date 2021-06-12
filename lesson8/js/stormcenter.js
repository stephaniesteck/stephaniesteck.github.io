var strong = document.lastModified;
document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}