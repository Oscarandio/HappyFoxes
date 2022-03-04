import { registerImage } from "./lazy";

// crear imagen
// agregar en contenedor #imagen

{
  /* <div id="images">
  <div class="p-4">
    <img class="mx-auto" 
    width="320" 
    src="https://randomfox.ca/images/2.jpg" 
    alt="zorro"></div>
</div> */
}

const minimum = 1;
const maximum = 123;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "object-cover mx-auto w-80 h-64 rounded-2xl";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};
addButton.addEventListener("click", addImage);
