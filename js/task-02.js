import { ingredients } from "./utils.js";

const fillList = (listSelector, ingredients) => {
  const listRef = document.querySelector(listSelector);

  listRef?.append(
    ...ingredients.map(name => {
      const li = document.createElement("li");
      li.textContent = name;
      li.classList.add("item");

      return li;
    }),
  );

  return listRef;
};

fillList("#ingredients", ingredients);
