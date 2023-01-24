export default {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  },

  isStr(v) {
    return typeof v === "string";
  },

  capitalize(v) {
    return this.isStr(v) ? v[0].toUpperCase() + v.slice(1) : v;
  },

  replaceClass({ classList }, oldClass, newClass) {
    if (!classList.replace(oldClass, newClass)) classList.add(newClass);
  },
};
