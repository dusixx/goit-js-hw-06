export const utils = {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  },

  isStr(v) {
    return typeof v === "string";
  },

  capitalize(v) {
    return this.isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : v;
  },

  replaceClass({ classList }, oldClass, newClass) {
    if (!classList.replace(oldClass, newClass)) classList.add(newClass);
  },

  fitIntoRange(v, min, max) {
    return Math.max(min, Math.min(max, v));
  },
};

export const galleryItems = [
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

export const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
