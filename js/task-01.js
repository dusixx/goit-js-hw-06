const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}\n`);

items.forEach(({ firstElementChild, lastElementChild }) =>
  console.log(
    `Category: ${firstElementChild.textContent}`,
    `\nElements: ${lastElementChild.children.length}`,
  ),
);
