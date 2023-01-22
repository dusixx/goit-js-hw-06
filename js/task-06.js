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

document.querySelector("#validation-input").addEventListener("blur", onValidationInputBlur);
