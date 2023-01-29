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
  if (!galleryRef) return;

  const markup = images
    .map(
      ({ url, alt }) =>
        `<li class="${parentClass}__item">
           <img class="${parentClass}__img" src="${url}" alt="${alt}">
         </li>`,
    )
    .join("");

  // добавляем в конец
  galleryRef.insertAdjacentHTML("beforeend", markup);

  return galleryRef;
};

createGallery(images, "gallery");
