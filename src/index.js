import "./style.css";
import { renderHomePage } from "./pages/home.js";
import { renderMenuPage } from "./pages/menu.js";

const initializeEventListeners = function() {
  const home = document.querySelector("#home");
  const menu = document.querySelector("#menu");

  home.addEventListener("click", () => {
    renderHomePage();
  })

  menu.addEventListener("click", () => {
    renderMenuPage();
  })
}

renderHomePage();
initializeEventListeners();