import { default as utils } from "./utils.js";

const DEFAULT_USERNAME = "Anonymous";

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const onNameInputChange = ({ currentTarget: nameInputRef }) => {
  const newName = utils.capitalize(nameInputRef.value.trim());
  refs.nameOutput.textContent = newName || DEFAULT_USERNAME;
};

refs.nameInput.addEventListener("input", onNameInputChange);
