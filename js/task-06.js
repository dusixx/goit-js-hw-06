import { utils } from "./utils.js";

const onInputBlur = ({ currentTarget: inputRef }) => {
  const validLen = Number(inputRef.dataset.length);
  const currentLen = inputRef.value.length;

  if (currentLen === 0) {
    return inputRef.classList.remove("valid", "invalid");
  }

  const cls = currentLen === validLen ? ["invalid", "valid"] : ["valid", "invalid"];
  utils.replaceClass(inputRef, ...cls);
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
