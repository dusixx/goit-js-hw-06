import { default as utils } from "./utils.js";

const DEFAULT_USERNAME = "Anonymous";

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

////////////////////////
// event handlers
////////////////////////

const onNameInputChange = ({ currentTarget: nameInputRef }) => {
  refs.nameOutput.textContent = utils.capitalize(nameInputRef.value || DEFAULT_USERNAME);
};

refs.nameInput.addEventListener("input", onNameInputChange);
