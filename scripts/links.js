const baseURL = "https://avril-eg.github.io/wdd230/";
const linksURL = "https://avril-eg.github.io/wdd230/data/links.json";
const linksList = document.querySelector("#linklist");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);

getLinks();

function displayLinks(lessons){
    

    lessons.forEach(lesson => {
        let li = document.createElement("li");
        li.textContent = `${lessons.lesson}`;
        lesson.links.forEach((link, i) =>{
            let a = document.createElement('a');
            a.setAttribute("href", link.url);
            if (i === lesson.links.length - 1){
                a.textContent = `${link.title}`;
            }else{
                a.textContent = `${link.title} | `;
            }
            li.appendChild(a); 
        })  
        // add li element to the ul element
        linksList.appendChild(li);      
    });
}}