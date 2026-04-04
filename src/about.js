export default function renderAbout() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `                
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit voluptas perspiciatis mollitia
                    corrupti culpa officia voluptatem illo error, adipisci aut atque omnis placeat blanditiis unde
                    cupiditate facilis iusto dolor est!
                    Accusamus deleniti excepturi porro sed tenetur. Impedit temporibus, quia voluptatum omnis earum
                    error. Laborum adipisci esse, pariatur qui exercitationem nostrum ab quibusdam asperiores, deserunt
                    non numquam, sint quia vero nobis?
                    Odit recusandae molestias qui, inventore aspernatur velit sapiente eum animi? Laborum, accusamus
                    repellendus porro explicabo fugit omnis nobis aperiam veritatis, nam deserunt ullam inventore eaque
                    illo commodi nemo magni quam.</p>`;

  return container;
}
