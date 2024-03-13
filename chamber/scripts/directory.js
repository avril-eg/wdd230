const url = "https://avril-eg.github.io/wdd230/";
const dataUrl = "https://avril-eg.github.io/wdd230/chamber/data/members.json";



async function getMembers() {
    try {
        const response = await fetch(dataUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            //displayMembers(data.members);
        } else ;{
            throw Error(await response.text())
        } 
    } catch (error) {
        console.log(error);
        throw error;
    }
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
        address.textContent = member.address;
        let phone = document.createElement('p');
        phone.textContent = member.phone;
        let website = document.createElement('a');
        website.setAttribute("href", `https://${member.website}`);
        website.textContent = member.website;

        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.company.toLowerCase()}'-image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '400');
        image.setAttribute('heigth', 'auto');


        card.appendChild(image);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone)
        card.appendChild(website);
        
        cards.appendChild(card);
    });
};

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const display = document.querySelector("article");

gridBtn.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }





