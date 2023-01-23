const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const createList = (ingredients, listSelector) => {
  const items = ingredients.map(name => {
    const li = document.createElement("li");

    li.textContent = name;
    li.classList.add("item");

    return li;
  });

  document.querySelector(listSelector)?.append(...items);
};

createList(ingredients, "#ingredients");
