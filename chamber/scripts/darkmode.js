const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const modeButton = document.querySelector("#checkbox");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  if (modeButton.checked) {
    main.style.background = "#000";
    main.style.color = "#fff";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
  }
});