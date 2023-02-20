import { galleryItems } from "./utils.js";

const createGallery = (images, parentClass) => {
  const galleryRef = document.querySelector(`.${parentClass}`);
  if (!galleryRef) return null;

  galleryRef.insertAdjacentHTML(
    "beforeend",
    images
      .map(
        ({ url, alt }) =>
          `<li class="${parentClass}__item">
           <img class="${parentClass}__img" src="${url}" alt="${alt}">
         </li>`,
      )
      .join(""),
  );

  return galleryRef;
};

createGallery(galleryItems, "gallery");
