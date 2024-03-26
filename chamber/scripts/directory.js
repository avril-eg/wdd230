const url = "https://avril-eg.github.io/wdd230/";
const dataUrl = "https://avril-eg.github.io/wdd230/chamber/data/members.json";



async function getMembers() {
    const response = await fetch(dataUrl);
    const data = await response.json();
   
    displayMembers(data.members);
}
getMembers();

const displayMembers = (members) => {
    const cards =document.querySelector("#members");
    
    members.forEach((member) => {
        let card = document.createElement('section');
        card.setAttribute('class', 'member');
        let companyName = document.createElement('h3');
        companyName.textContent = member.company;
        let address = document.createElement('p');
        let address2 = document.createElement("p");
        address.textContent = member.address;
        address2.textContent =  `${member.city}, ${member.state} ${member.zip}`;
        let phone = document.createElement('p');
        phone.textContent = member.phone;
        let website = document.createElement('a');
        website.setAttribute("href", `https://${member.website}`);
        website.textContent = member.website;

        let logo = document.createElement('img');
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.company}'-image`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '400');
        logo.setAttribute('heigth', 'auto');


        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone)
        card.appendChild(website);
        
        cards.appendChild(card);
    });
};

// Grid and List toggles

const gridbutton = document.querySelector("#gridBtn");
const listbutton = document.querySelector("#listBtn");
const display = document.querySelector("#members");

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

