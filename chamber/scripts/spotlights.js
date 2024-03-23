const dataURL = "https://avril-eg.github.io/wdd230/chamber/data/members.json";
   
async function getSpotlight() {
    const response = await fetch(dataURL);
    const data = await response.json();
   
    displaySpotlight(data.members);
}
getSpotlight();


function displaySpotlight(members) {
    // console.log(members);

    let topMembers = members.filter((member) => member.membership === "Silver" || member.membership === "Gold");

    let randomMembers = topMembers.sort(() => 0.5 - Math.random()).slice(0, 4);

    const spotlights = document.querySelector(".cards");

    randomMembers.forEach((member) => {
        const spotlight = document.createElement("article");
        spotlight.classList.add("card");
    
       let status = member.membership === "Silver" ? "silver" : "gold";

        spotlight.innerHTML = `
        <h3 class="card-header ${status}">${member.membership} Member</h3>
        <div class="card-body">
        <img src="${member.logo}" alt="${member.company.toLowerCase()}-logo" loading="lazy" width=75 height=auto>
        <div class="contact-info">
            <address>
                ${member.address}
                <br />
                ${member.city}, ${member.state} ${member.zip}
            </address>
            <div>
                <a href=${member.website} target="_blank">${member.website}</a>
            </div>
        </div>
        </div>
    `;

        spotlights.appendChild(spotlight);
    });
}