    const banner = document.querySelector(".banner");
    const weekDay = new Date().getDay();

if (weekDay == 1 || weekDay == 2 || weekDay == 3){
    const button = document.createElement('button');
    button.textContent = 'X';
    const invitation = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = `Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.!`;
    banner.appendChild(button);
    invitation.appendChild(title);
    banner.appendChild(invitation);
    button.addEventListener('click', () =>{
        banner.classList.add('closed-banner')
    })
}
else{
    banner.setAttribute('style', 'display: none');
}


