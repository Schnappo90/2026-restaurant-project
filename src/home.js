export default function renderHome() {
  const mainBanner = document.createElement("div");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  container.classList.add("container");
  mainBanner.classList.add("main-banner");
  h1.textContent = "Pizza Palace";
  h2.textContent = "Buy One Get One Free";
  mainBanner.append(container);
  container.append(h1, h2);

  return mainBanner
}
