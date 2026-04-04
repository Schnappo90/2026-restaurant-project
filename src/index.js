import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const content = document.getElementById("content");
const buttons = document.querySelectorAll("button");

let currentPage = "home"

//if e.target.dataset.page === currentPage, then return. else render

content.append(renderHome())

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const page = e.target.dataset.page;

    if (!page) {
      console.warn("Button is missing a data-page attribute:", e.target);
      return;
    }

    if(page === currentPage) return

    currentPage = page;
    content.innerHTML = "";

    switch (page) {
      case "home":
        content.append(renderHome());
        console.log(currentPage)
        break;

      case "about":
        content.append(renderAbout());
        console.log(currentPage)
        break;

      case "menu":
        content.append(renderMenu());
        break;

      default:
        break;
    }
  });
});
