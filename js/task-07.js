const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const onFontSizeInput = ({ currentTarget: { value } }) => {
  textRef.style.fontSize = `${value}px`;
};

textRef.style.fontSize = `${fontSizeRef.value}px`;
fontSizeRef.addEventListener("input", onFontSizeInput);
