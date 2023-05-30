
//Chamber meeting banner div
const banner = document.querySelector('#banner');
const d = new Date();

if (d.getDay() == 1 || d.getDay() == 2) {
    document.getElementById("banner").style.display = "block";
}