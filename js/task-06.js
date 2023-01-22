//
// Вариант 1
//
const onValidationInputBlur = ({ currentTarget: inputRef }) => {
  // приходит числовой строкой
  const validLen = Number(inputRef.dataset.length);
  const currentLen = inputRef.value.length;
  const { classList } = inputRef;

  switch (currentLen) {
    case 0:
      classList.remove("valid", "invalid");
      if (classList.length === 0) inputRef.removeAttribute("class");
      break;

    case validLen:
      classList.add("valid");
      classList.remove("invalid");
      break;

    default:
      classList.add("invalid");
      classList.remove("valid");
  }
};

//
// Вариант 2
//
const onValidationInputBlur2 = ({ currentTarget: inputRef }) => {
  const COLOR_VALID = "#4caf50";
  const COLOR_INVALID = "#f44336";

  const validLen = +inputRef.dataset.length;
  const currentLen = inputRef.value.length;

  inputRef.style.borderColor =
    currentLen === 0 ? null : currentLen === validLen ? COLOR_VALID : COLOR_INVALID;
};

document.querySelector("#validation-input").addEventListener("blur", onValidationInputBlur);
