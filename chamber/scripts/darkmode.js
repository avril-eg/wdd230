// Toggle Dark/Light Mode
function screenMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");

  const sections = document.querySelectorAll("main, div.info, div.spotlights, div.event, article.card, div.weather-info, div.form-wrapper, section.member div.form-wrapper");
  sections.forEach((section) => {
      section.classList.toggle("dark-mode");
  });
}