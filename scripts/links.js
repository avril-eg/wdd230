const baseURL = "https://avril-eg.github.io/wdd230/";
const linksURL = "https://avril-eg.github.io/wdd230/data/links.json";
//const linksList = document.querySelector("#linklist");


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
    // console.log(weeks);

    weeks.forEach (week=>{
        // console.log(week);
        const listItem = document.createElement("li");
        const lessonWeek = document.createTextNode(`${week.lesson}: `);

        listItem.appendChild(lessonWeek);

        week.links.forEach((link) => {
            // console.log(link);
            const a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.textContent = link.title;

            listItem.appendChild(a);

            if (week.links.length > 1 && week.links.indexOf(link) < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });
        // console.log(listItem);

        const list = document.querySelector("#linklist");
        list.appendChild(listItem);
    });
};