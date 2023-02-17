import { utils } from "./utils.js";

const colorSpanRef = document.querySelector(".color");

document
  .querySelector(".change-color")
  ?.addEventListener(
    "click",
    () =>
      (document.body.style.backgroundColor = colorSpanRef.textContent = utils.getRandomHexColor()),
  );
