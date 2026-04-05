export default function renderAbout() {
  const container = document.createElement("div");
  container.classList.add("about-page","container");

  container.innerHTML = `                
                <h1>About Us</h1>
                <p>Pizza Palace was founded in 2018 by two friends, Marco and Jamie, who were tired of settling for average takeaway pizza. Armed with a secondhand wood-fired oven, a family recipe for dough, and a stubborn refusal to use anything but the best ingredients, they started making pizzas for friends and family out of a small kitchen in East London.</p>
                <p>Word spread fast. By 2020, Pizza Palace had its first dedicated kitchen and a small but loyal delivery radius. Today we deliver across the city, but our approach hasn't changed — every pizza is still hand-stretched, wood-fired, and made with ingredients we're genuinely proud of.</p>
                <p>We believe fast food doesn't have to mean compromised food. It just means we're really, really good at what we do.</p>`;

  return container;
}
