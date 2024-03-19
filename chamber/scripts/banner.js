    const banner = document.getElementById("banner");
    const weekDay = new Date().getDay();

    if (weekDay == 1 || weekDay == 2 || weekDay == 3){
        const button = document.createElement('button');
        button.textContent = '❌';
        banner.appendChild(button);
        button.addEventListener('click', () =>{
        banner.classList.add('closed-banner')
        })
    }
    else{
        banner.setAttribute('style', 'display: none');
    }

    