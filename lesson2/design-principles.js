let date = new Date();

function writedate() {
    // MM/DD/YYYY HH:MM:SS
    let hour = date.getHours();
    var hourText = hour;
    var timeOfDay = 'AM';
    if (hour > 12) {
        hourText = hour - 12;
        timeOfDay = 'PM';
    }
    document.getElementById("copyright").innerHTML = date.getFullYear();
    document.getElementById("lastUpdate").innerHTML = document.lastModified;
}
document.querySelector('#lastmod').textContent = document.lastModified