const url = "https://avril-eg.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#members");

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");


async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    
    members.forEach((member) => {
        let card = document.createElement('section');
        let cardText = document.createElement('div')
        let name = document.createElement('p');
        let adress = document.createElement('p')
        let phone = document.createElement('p')
        let website = document.createElement('a')
        let image = document.createElement('img');
        name.textContent = `${member.name}`;
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}'s card`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', 452);
        image.setAttribute('heigth', 266);
        adress.textContent = `${member.adress}`
        phone.textContent = `${member.phone}`
        website.textContent = `${member.website}`
        website.setAttribute('href', member.website)

  card.appendChild(image);
        cardText.appendChild(name);
        cardText.appendChild(adress);
        cardText.appendChild(phone)
        cardText.appendChild(website);
        card.appendChild(cardText);
        cards.appendChild(card);        
    });
}

getBusinessData(url);

gridBtn.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
	cards.classList.remove("grid");
	cards.classList.add("list");
});





