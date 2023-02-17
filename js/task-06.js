import { utils } from "./utils.js";

document
  .querySelector("#validation-input")
  ?.addEventListener("blur", ({ currentTarget: inputRef }) => {
    const validLen = Number(inputRef.dataset.length);
    const currentLen = inputRef.value.length;

    if (currentLen === 0) return inputRef.classList.remove("valid", "invalid");

    const cls = currentLen === validLen ? "invalid valid" : "valid invalid";
    utils.replaceClass(inputRef, ...cls.split(" "));
  });
