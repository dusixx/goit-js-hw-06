import { ingredients } from "./utils.js";

const fillList = (listSelector, ingredients) => {
  const items = ingredients.map(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.classList.add("item");

    return li;
  });

  document.querySelector(listSelector)?.append(...items);
};

fillList("#ingredients", ingredients);
