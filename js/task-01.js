const items = Array.from(document.querySelector("#categories").children);

console.log(`Number of categories: ${items.length}\n`);

items.forEach(({ firstElementChild, lastElementChild }) =>
  console.log(
    `Category: ${firstElementChild.textContent}`,
    `\nElements: ${lastElementChild.children.length}`,
  ),
);
