const darkModeButton = document.querySelector("[data-js='dark-button']");
const header = document.querySelector('[data-js="header"]');
const nav = document.querySelector('[data-js="nav"]');
const icons = document.querySelector(".svg");

console.log(icons);
darkModeButton.addEventListener("input", () => {
  document.body.classList.toggle("dark");
  nav.classList.toggle("dark");
  header.classList.toggle("dark");
  icons.classList.toggle("svg--white");
});
