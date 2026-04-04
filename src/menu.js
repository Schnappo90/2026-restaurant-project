// import { container } from "webpack";
import menuItems from "./menuItems.js";

export default function renderMenu() {
  const menuContainer = document.createElement("div");

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  h1.textContent = "Menu";
  h2.textContent = "The best Neapolitan pizza in London";

  menuContainer.classList.add("menu-page","container");

  menuItems.forEach((item) => {
    const liEl = document.createElement("li");

    liEl.innerHTML = `
                <li class="menu-item">
                    <div class="menu-item__header">
                        <h3 class="menu-item__name">${item.name}</h3>
                        <span class="menu-item__price">£${item.price}</span>
                    </div>
                    <p class="menu-item__description">${item.description}</p>
                    <div class="menu-item__footer">
                        <span class="menu-item__calories">${item.calories} kcal</span>
                        ${item.vegetarian ? `<span class="menu-item__badge">V</span>` : ""}
                    </div>
                </li>`;
    ul.append(liEl);
  });

  menuContainer.append(h1, h2, ul);

  return menuContainer;
}
