const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${fontSizeRef.value}px`;
fontSizeRef.addEventListener(
  "input",
  ({ currentTarget: { value } }) => (textRef.style.fontSize = `${value}px`),
);
