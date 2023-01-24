import { default as utils } from "./utils.js";

const refs = {
  body: document.body,
  colorSpan: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
};

const onColorButtonClick = () => {
  refs.body.style.backgroundColor = refs.colorSpan.textContent = utils.getRandomHexColor();
};

refs.colorBtn.addEventListener("click", onColorButtonClick);
