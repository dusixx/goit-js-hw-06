const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const makeListItems = ingredients =>
  ingredients.map(name => {
    const listItem = document.createElement("li");

    listItem.textContent = name;
    listItem.classList.add("item");

    return listItem;
  });

document.querySelector("#ingredients").append(...makeListItems(ingredients));
