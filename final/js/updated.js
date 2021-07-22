var strong = document.lastModified;
document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();

function toggleMenu() {
    document.getElementsByClassName('headermenu')[0].classList.toggle('responsive');
}