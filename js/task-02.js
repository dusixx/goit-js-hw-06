const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const fillList = (listSelector, ingredients) => {
  const items = ingredients.map(name => {
    const listItem = document.createElement("li");

    listItem.textContent = name;
    listItem.classList.add("item");

    return listItem;
  });

  document.querySelector(listSelector)?.append(...items);
};

fillList("#ingredients", ingredients);
