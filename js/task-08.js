const onValidationError = (fieldName, fieldValue) => {
  if (fieldValue.length === 0) {
    alert(`Error: No empty fields allowed (${fieldName})`);

    return true;
  }
};

const getFormData = (form, onValidationError) => {
  const result = {};
  const formData = new FormData(form);

  for (const [name, value] of formData) {
    if (onValidationError(name, value)) return null;
    result[name] = value;
  }

  return result;
};

document.querySelector(".login-form")?.addEventListener("submit", e => {
  e.preventDefault();

  const { currentTarget: form } = e;
  const formData = getFormData(form, onValidationError);

  if (formData) {
    console.log("formData", formData);
    form.reset();
  }
});
