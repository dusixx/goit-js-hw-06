import { default as utils } from "./utils.js";

const controlsRef = document.querySelector("#controls");

const refs = {
  boxes: document.querySelector("#boxes"),
  controls: controlsRef,
  amountInput: controlsRef.firstElementChild,
  createBtn: controlsRef.children[1],
  destroyBtn: controlsRef.children[2],
};

const destroyBoxes = rootRef => {
  rootRef.innerHTML = "";
  return rootRef;
};

const createBoxes = (amount, rootRef) => {
  const INITIAL_SIZE = 30;

  const boxes = Array.from({ length: amount }).map((_, idx) => {
    const box = document.createElement("div");
    const { style } = box;

    style.width = style.height = `${INITIAL_SIZE + idx * 10}px`;
    style.backgroundColor = utils.getRandomHexColor();

    return box;
  });

  rootRef?.append(...boxes);
};

////////////////////////
// event handlers
////////////////////////

const onCreateButtonClick = () => {
  createBoxes(+refs.amountInput.value, refs.boxes);
};

const onDestroyButtonClick = () => {
  const INITIAL_AMOUNT = 1;

  refs.amountInput.value = +refs.amountInput.min || INITIAL_AMOUNT;
  destroyBoxes(refs.boxes);
};

const onAmountInputChange = ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  amountInput.value = Math.max(min, Math.min(max, value));
};

////////////////////////
// main
////////////////////////

refs.amountInput.value = 5;

refs.amountInput.addEventListener("input", onAmountInputChange);
refs.createBtn.addEventListener("click", onCreateButtonClick);
refs.destroyBtn.addEventListener("click", onDestroyButtonClick);
