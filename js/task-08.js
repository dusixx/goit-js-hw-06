const onValidationError = fieldName => {
  alert(`Error: No empty fields allowed (${fieldName})`);
};

//
// Вариант 1 (elements)
//
const getFormData = (form, onError) => {
  const formData = {};

  for (const { tagName, value, name } of form.elements) {
    if (tagName.toLowerCase() !== "input") continue;

    if (value.length === 0) return onError(name);

    formData[name] = value;
  }

  return formData;
};

//
// Вариант 2 (FormData)
//
const getFormData2 = (form, onError) => {
  const result = {};
  const formData = new FormData(form);

  for (const [name, value] of formData) {
    if (value.length === 0) return onError(name);

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
  const formData = getFormData2(form, onValidationError);

  if (formData) {
    console.log("formData", formData);
    form.reset();
  }
};

document.querySelector(".login-form").addEventListener("submit", onLoginFormSubmit);
