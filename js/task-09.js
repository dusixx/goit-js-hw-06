import { utils } from "./utils.js";

const refs = {
  body: document.body,
  colorSpan: document.querySelector(".color"),
  colorBtn: document.querySelector(".change-color"),
};

const onColorButtonClick = () => {
  const hexColor = utils.getRandomHexColor();

  refs.body.style.backgroundColor = hexColor;
  refs.colorSpan.textContent = hexColor;
};

refs.colorBtn.addEventListener("click", onColorButtonClick);
