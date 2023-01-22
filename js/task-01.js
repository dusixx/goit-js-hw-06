const makeDescription = () => {
  const { children: categories } = document.querySelector("#categories");
  const desc = [];

  desc.push(`Number of categories: ${categories.length}\n`);

  for (const category of categories) {
    const {
      firstElementChild: { textContent: categoryTitle },
      lastElementChild: {
        children: { length: elementsCount },
      },
    } = category;

    desc.push(`Category: ${categoryTitle}`, `Elements: ${elementsCount}\n`);
  }

  return desc.join("\n");
};

console.log(makeDescription());
