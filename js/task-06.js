import { default as utils } from "./utils.js";

//
// Вариант 1
//
const onInputBlur = ({ currentTarget: inputRef }) => {
  const validLen = Number(inputRef.dataset.length);
  const currentLen = inputRef.value.length;

  if (currentLen === 0) {
    return inputRef.classList.remove("valid", "invalid");
  }

  if (currentLen === validLen) {
    utils.replaceClass(inputRef, "invalid", "valid");
  } else {
    utils.replaceClass(inputRef, "valid", "invalid");
  }
};

document.querySelector("#validation-input")?.addEventListener("blur", onInputBlur);

//
// Вариант 2
//
// const onValidationInputBlur2 = ({ currentTarget: inputRef }) => {
//   const COLOR_VALID = "#4caf50";
//   const COLOR_INVALID = "#f44336";

//   const validLen = +inputRef.dataset.length;
//   const currentLen = inputRef.value.length;

//   inputRef.style.borderColor =
//     currentLen === 0 ? null : currentLen === validLen ? COLOR_VALID : COLOR_INVALID;
// };

// document.querySelector("#validation-input")?.addEventListener("blur", onValidationInputBlur);
