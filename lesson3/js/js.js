const year =document.querySelector("#copyright")
	year.innerHTML = new Date().getFullYear();

const lastmod =document.querySelector("#lastmod");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date(document.lastModified);
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const date = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
const last = document.querySelector("#lastmod");
const dayNames = days[d.getDay()];
const monthNames = months[d.getMonth()];
const y = d.getFullYear();
lastmod.innerHTML =date;