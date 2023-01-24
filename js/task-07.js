const refs = {
  fontSizeCtrl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onFontSizeInputChange = ({ currentTarget: { value } }) => {
  refs.text.style.fontSize = `${value}px`;
};

// инициализируем текущим
refs.text.style.fontSize = `${refs.fontSizeCtrl.value}px`;
refs.fontSizeCtrl.addEventListener("input", onFontSizeInputChange);
