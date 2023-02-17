import { utils } from "./utils.js";

const controlsRef = document.querySelector("#controls");

const refs = {
  boxes: document.querySelector("#boxes"),
  amountInput: controlsRef.children[0],
  createBtn: controlsRef.children[1],
  destroyBtn: controlsRef.children[2],
};

const destroyBoxes = rootRef => (rootRef.innerHTML = "");

const createBoxes = (amount, rootRef) => {
  const INITIAL_SIZE = 30;

  const markup = Array.from({ length: amount })
    .map((_, idx) => {
      const size = `${INITIAL_SIZE + idx * 10}px`;
      const color = utils.getRandomHexColor();

      return `
        <div style="
          width: ${size}; 
          height: ${size}; 
          background-color: ${color}">
        </div>`;
    })
    .join("");

  rootRef?.insertAdjacentHTML("beforeend", markup);
};

const onCreateButtonClick = () => {
  createBoxes(refs.amountInput.value, refs.boxes);
};

const onDestroyButtonClick = () => {
  const INITIAL_AMOUNT = 1;

  refs.amountInput.value = refs.amountInput.min || INITIAL_AMOUNT;
  destroyBoxes(refs.boxes);
};

const onAmountInputChange = ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  amountInput.value = Math.max(min, Math.min(max, value));
};

refs.amountInput.value = 5;
refs.amountInput.addEventListener("input", onAmountInputChange);
refs.createBtn.addEventListener("click", onCreateButtonClick);
refs.destroyBtn.addEventListener("click", onDestroyButtonClick);

//
// Вариант 2
//
// const createBoxes = (amount, rootRef) => {
//   const INITIAL_SIZE = 30;

//   const boxes = Array.from({ length: amount }).map((_, idx) => {
//     const box = document.createElement("div");
//     const { style } = box;

//     style.width = style.height = `${INITIAL_SIZE + idx * 10}px`;
//     style.backgroundColor = utils.getRandomHexColor();

//     return box;
//   });

//   rootRef?.append(...boxes);

//   return boxes;
// };
