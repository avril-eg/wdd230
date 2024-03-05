const baseURL = "https://avril-eg.github.io/wdd230/";
const linksURL = "https://avril-eg.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();


  fetch(url)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    //console.table(jsonObject); for temporary checking for valid response and data parsing
    
    const prophets = jsonObject['prophets'];
   
   // for (let i = 0; i < prophets.length; i++ ) { 
      
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        const image = document.createElement('img');
        const fullname = `${prophet.name} ${prophet.lastname}`;

        h2.textContent = fullname;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent =`Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${fullname} - ${prophet.order}`);

     
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(image);

      document.querySelector('#cards').appendChild(card);
            
    })
  });