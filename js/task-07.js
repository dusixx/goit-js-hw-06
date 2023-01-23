const refs = {
  fontSizeCtrl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

////////////////////////
// event handlers
////////////////////////

const onFontSizeInputChange = ({ currentTarget: { value } }) => {
  refs.text.style.fontSize = `${value}px`;
};

// инициализируем текущим значением
refs.text.style.fontSize = `${refs.fontSizeCtrl.value}px`;
refs.fontSizeCtrl.addEventListener("input", onFontSizeInputChange);
