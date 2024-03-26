const visitsDisplay = document.querySelector("#last");
let lastVisit = window.localStorage.getItem("lastVisit-ws");



if (lastVisit) {
lastVisit = Number(lastVisit); // Convert lastVisit to a number
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / millisecondsPerDay);

if (daysSinceLastVisit <= 0) {
    visitsDisplay.textContent = 'Back so soon! Awesome!';
} else if (daysSinceLastVisit === 1) {
    visitsDisplay.textContent = 'You last visited 1 day ago.';
} else {
    visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
}
} else {
    // Handle the first visit case
    visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
}

localStorage.setItem('lastVisit-ws', currentDate); 