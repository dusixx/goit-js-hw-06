//
// Вариант 1 (elements)
//
const getFormData = form => {
  const formData = {};

  for (const { tagName, value, name } of form.elements) {
    if (tagName.toLowerCase() !== "input") continue;

    if (value.length === 0) {
      return alert(`Error: No empty fields allowed (${name})`);
    }

    formData[name] = value;
  }

  return formData;
};

//
// Вариант 2 (FormData)
//
const getFormData2 = form => {
  const result = {};
  const formData = new FormData(form);

  for (const [name, value] of formData) {
    if (value.length === 0) {
      return alert(`Error: No empty fields allowed (${name})`);
    }

    result[name] = value;
  }

  return result;
};

////////////////////////
// event handlers
////////////////////////

const onLoginFormSubmit = event => {
  event.preventDefault();
  const { currentTarget: form } = event;

  console.log("formData", getFormData2(form));
  form.reset();
};

document.querySelector(".login-form").addEventListener("submit", onLoginFormSubmit);
