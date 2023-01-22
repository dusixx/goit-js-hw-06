import { default as utils } from "./utils.js";

const controlsRef = document.querySelector("#controls");

const refs = {
  boxes: document.querySelector("#boxes"),
  controls: controlsRef,
  amountInput: controlsRef.firstElementChild,
  createBtn: controlsRef.children[1],
  destroyBtn: controlsRef.children[2],
};

const createBoxes = (amount = 0, initialSize = 30) =>
  // amount приходит числовой строкой
  Array(amount)
    .fill()
    .map((_, idx) => {
      const box = document.createElement("div");
      const { style } = box;

      style.width = style.height = `${initialSize + idx * 10}px`;
      style.backgroundColor = utils.getRandomHexColor();

      return box;
    });

////////////////////////
// event handlers
////////////////////////

const onCreateButtonClick = () => {
  // заполняем div.boxes, очищая текущий контент
  if (refs.boxes.innerHTML.length > 0) refs.boxes.innerHTML = "";
  refs.boxes.append(...createBoxes(+refs.amountInput.value));
};

const onDestroyButtonClick = () => {
  refs.boxes.innerHTML = "";
};

const onAmountInputChange = ({ currentTarget: amountInput }) => {
  const { value, max, min } = amountInput;
  // корректируем введенное значение
  amountInput.value = Math.max(min, Math.min(max, value));
};

////////////////////////
// main
////////////////////////

// initial value
refs.amountInput.value = +refs.amountInput.min || 1;

refs.amountInput.addEventListener("input", onAmountInputChange);
refs.createBtn.addEventListener("click", onCreateButtonClick);
refs.destroyBtn.addEventListener("click", onDestroyButtonClick);
