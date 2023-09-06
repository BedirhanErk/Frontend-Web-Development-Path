const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 

var userName = prompt("What is your name?");

// Get DOM elements
let welcomeDOM = document.querySelector("#text");
let dateDOM = document.querySelector("#date");
let timeDOM = document.querySelector("#time");

// Clear elements' HTML
welcomeDOM.innerHTML = "";
dateDOM.innerHTML = "";
timeDOM.innerHTML = "";

// Say Hello to user
welcomeDOM.innerHTML = `Hello, ${userName ? userName : "Guest"}! Welcome!`;

// Get date and time
function getDateTime (dateNow) {
    dateDOM.innerHTML = `${String(dateNow.getMonth() + 1).padStart(2, '0')}-${String(dateNow.getDate()).padStart(2, '0')}-${dateNow.getFullYear()} ${WEEK[dateNow.getDay()]}`;
    
    timeDOM.innerHTML = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds() < 10 ? String(dateNow.getSeconds()).padStart(2, '0') : dateNow.getSeconds()}`;
}

getDateTime(new Date());
var intervalId = window.setInterval(function(){
    getDateTime(new Date());
}, 1000);