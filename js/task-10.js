import { utils } from "./utils.js";

const controlsRef = document.querySelector("#controls");

const refs = {
  boxes: document.querySelector("#boxes"),
  amountInput: controlsRef.children[0],
  createBtn: controlsRef.children[1],
  destroyBtn: controlsRef.children[2],
};

const createBoxes = (amount, rootRef) => {
  const INITIAL_SIZE = 30;
  const SIZE_INC = 10;

  rootRef?.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: amount }, (_, idx) => {
      const size = `${INITIAL_SIZE + idx * SIZE_INC}px`;
      const color = utils.getRandomHexColor();

      return `
        <div style="
          width: ${size}; 
          height: ${size}; 
          background-color: ${color}">
        </div>`;
    }).join(""),
  );
};

const destroyBoxes = rootRef => (rootRef.innerHTML = "");

refs.amountInput.addEventListener("input", ({ currentTarget: amountInput }) => {
  const { min, value, max } = amountInput;
  amountInput.value = Math.max(min, Math.min(max, value));
});

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.amountInput.value, refs.boxes);
});

refs.destroyBtn.addEventListener("click", () => {
  const INITIAL_AMOUNT = 1;

  refs.amountInput.value = refs.amountInput.min || INITIAL_AMOUNT;
  destroyBoxes(refs.boxes);
});
