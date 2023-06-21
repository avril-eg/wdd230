const requesturl = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p1.textContent = `Date of Birth: ${prophet.birthdate}`;
  p2.textContent = `Place of Birth: ${prophet.birthplace}`;

  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute("loading", "lazy");

  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(portrait);

  document.querySelector("div.cards").appendChild(card);
}


