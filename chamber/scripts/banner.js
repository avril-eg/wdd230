const banner = document.querySelector('#banner');

const weekDay = new Date().getDay();


if (weekDay == 1 || weekDay == 2 || weekDay == 3){
   
    banner.style.display = "block";
}
    button.addEventListener('click', () =>{
        banner.classList.add('closed-banner')
    })

{
    banner.setAttribute('style', 'display: none');
}

