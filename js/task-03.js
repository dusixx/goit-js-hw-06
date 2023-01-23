const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGallery = (images, parentClass) => {
  const galleryRef = document.querySelector(`.${parentClass}`);

  const markup = images
    .map(({ url, alt }) => {
      const itemClassStr = parentClass ? `class="${parentClass}__item"` : "";
      const imgClassStr = parentClass ? `class="${parentClass}__img"` : "";

      return `<li ${itemClassStr}>
                <img ${imgClassStr}" src="${url}" alt="${alt}">
              </li>`;
    })
    .join("\n");

  galleryRef.insertAdjacentHTML("afterbegin", markup);
};

createGallery(images, "gallery");
