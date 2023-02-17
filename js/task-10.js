import { utils } from "./utils.js";

const INITIAL_BOXES_AMOUNT = 1;
const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");
const amountInputRef = controlsRef.children[0];
const createBtnRef = controlsRef.children[1];
const destroyBtnRef = controlsRef.children[2];

amountInputRef.value = amountInputRef.min || INITIAL_BOXES_AMOUNT;

amountInputRef.addEventListener("input", ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  amountInput.value = utils.fitIntoRange(value, min, max);
});

createBtnRef.addEventListener("click", () => {
  createBoxes(amountInputRef.value, boxesRef);
});

destroyBtnRef.addEventListener("click", () => {
  amountInputRef.value = amountInputRef.min || INITIAL_BOXES_AMOUNT;
  destroyBoxes(boxesRef);
});

function createBoxes(amount, rootRef) {
  const INITIAL_SIZE = 30;
  const SIZE_INC = 10;

  rootRef?.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: amount }, (_, idx) => {
      const size = `${INITIAL_SIZE + idx * SIZE_INC}px`;

      return `
        <div style="
          width: ${size}; 
          height: ${size}; 
          background-color: ${utils.getRandomHexColor()}">
        </div>`;
    }).join(""),
  );
}

function destroyBoxes(rootRef) {
  rootRef.innerHTML = "";
}
