import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const content = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");

let currentPage = "home";

// content.append(renderHome());

const pages = {
  home: renderHome,
  menu: renderMenu,
  about: renderAbout,
};

function setActivePage(page) {
  if (page === currentPage) return;

  currentPage = page;

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  content.innerHTML = "";
  content.append(pages[page]());
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePage(button.dataset.page);
  });
});

content.addEventListener("click", (e) => {
  const page = e.target.dataset.page;
  if (page) setActivePage(page);
});


// setActivePage("home");