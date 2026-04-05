import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const content = document.getElementById("content");
const navButton = document.querySelectorAll(".nav-btn");
const menuOpenButton = document.querySelector('.menu-burger-btn');
const navEl = document.querySelector('nav');

let currentPage = "home";

const mq = window.matchMedia('(min-width: 769px)');


function handleScreenChange(e) {
  if (e.matches) {
    // Desktop
    navEl.classList.remove('hide');
  } else {
    // Mobile
    navEl.classList.add('hide');
  }
}

mq.addEventListener("change", handleScreenChange);

menuOpenButton.addEventListener("click", () => {
    navEl.classList.toggle('hide');
    navEl.classList.contains('hide')
    ? menuOpenButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>menu</title>
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>`
    : menuOpenButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>`
    
})

handleScreenChange(mq);

// content.append(renderHome());

const pages = {
  home: renderHome,
  menu: renderMenu,
  about: renderAbout,
};

function setActivePage(page) {
  if (page === currentPage) return;

  currentPage = page;

  navButton.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  content.innerHTML = "";
  content.append(pages[page]());
}

navButton.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePage(button.dataset.page);
  });
});

content.addEventListener("click", (e) => {
  const page = e.target.dataset.page;
  if (page) setActivePage(page);
});


// setActivePage("home");