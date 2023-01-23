import { default as utils } from "./utils.js";

const controlsRef = document.querySelector("#controls");

const refs = {
  boxes: document.querySelector("#boxes"),
  controls: controlsRef,
  amountInput: controlsRef.firstElementChild,
  createBtn: controlsRef.children[1],
  destroyBtn: controlsRef.children[2],
};

const destroyBoxes = ref => {
  ref.innerHTML = "";
  return ref;
};

const createBoxes = (amount = 0) => {
  const INITIAL_SIZE = 30;

  // amount приходит числовой строкой
  const boxes = Array(amount)
    .fill()
    .map((_, idx) => {
      const box = document.createElement("div");
      const { style } = box;

      style.width = style.height = `${INITIAL_SIZE + idx * 10}px`;
      style.backgroundColor = utils.getRandomHexColor();

      return box;
    });

  destroyBoxes(refs.boxes).append(...boxes);
};

////////////////////////
// event handlers
////////////////////////

const onCreateButtonClick = () => createBoxes(+refs.amountInput.value);
const onDestroyButtonClick = () => destroyBoxes(refs.boxes);

const onAmountInputChange = ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  // корректируем введенное значение
  amountInput.value = Math.max(min, Math.min(max, value));
};

////////////////////////
// main
////////////////////////

// initial value
refs.amountInput.value = 10; // +refs.amountInput.min || 1;

refs.amountInput.addEventListener("input", onAmountInputChange);
refs.createBtn.addEventListener("click", onCreateButtonClick);
refs.destroyBtn.addEventListener("click", onDestroyButtonClick);
