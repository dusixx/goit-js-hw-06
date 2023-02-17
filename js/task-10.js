import { utils } from "./utils.js";

const INITIAL_BOXES_AMOUNT = 1;
const boxesRef = document.querySelector("#boxes");
const [amountRef, createBtnRef, destroyBtnRef] = document.querySelector("#controls")?.children;

amountRef.value = amountRef.min || INITIAL_BOXES_AMOUNT;

amountRef.addEventListener("input", ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  amountInput.value = utils.fitIntoRange(value, min, max);
});

createBtnRef.addEventListener("click", () => {
  createBoxes(amountRef.value, boxesRef);
});

destroyBtnRef.addEventListener("click", () => {
  amountRef.value = amountRef.min || INITIAL_BOXES_AMOUNT;
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
