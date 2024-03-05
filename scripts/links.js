const baseURL = "https://avril-eg.github.io/wdd230/";
const linksURL = "https://avril-eg.github.io/wdd230/data/links.json";
const linksList = document.querySelector("#linklist");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);

getLinks();

function displayLinks(lessons) {
    lessons.forEach(lesson => {
        const li = document.createElement("li");
        li.innerHTML = `${lessons.lesson}:`
        lesson.links.forEach(link => {
            li.innerHTML += ` <a href="${link.url}">${link.title}</a> |`
        })
        li.innerHTML = li.innerHTML.slice(0, -1);
        
        linksList.appendChild(li);
    });
}




  

  
    
  

  }
  
  getLinks();

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




  

  
    
  
