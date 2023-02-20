import { utils } from "./utils.js";

const boxesRef = document.querySelector("#boxes");
const [amountRef, createBtnRef, destroyBtnRef] = document.querySelector("#controls")?.children;

amountRef.addEventListener("input", ({ currentTarget: amountInput }) => {
  amountInput.value = utils.fitIntoRange(amountInput);
});

createBtnRef.addEventListener("click", () => {
  createBoxes(amountRef.value, boxesRef);
});

destroyBtnRef.addEventListener("click", () => {
  amountRef.value = amountRef.min;
  destroyBoxes(boxesRef);
});

function destroyBoxes(rootRef) {
  rootRef.innerHTML = "";
}

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
