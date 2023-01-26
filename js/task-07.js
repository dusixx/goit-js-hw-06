const refs = {
  fontSizeInput: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onFontSizeInput = ({ currentTarget: { value } }) => {
  refs.text.style.fontSize = `${value}px`;
};

// инициализируем текущим
refs.text.style.fontSize = `${refs.fontSizeInput.value}px`;
refs.fontSizeInput.addEventListener("input", onFontSizeInput);
