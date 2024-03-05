const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData()
{
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthInfo = document.createElement("p");
        let portrait = document.createElement("img");
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthInfo.innerHTML = `Date of Birth: ${prophet.birthdate} <br>Place of Birth: ${prophet.birthplace}`;
        
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("heigth", "440");

        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}




  

  
    
  
