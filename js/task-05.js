import { utils } from "./utils.js";

const DEFAULT_USERNAME = "Anonymous";
const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener(
  "input",
  ({ currentTarget: { value: name } }) =>
    (nameOutputRef.textContent = utils.capitalize(name.trim()) || DEFAULT_USERNAME),
);
