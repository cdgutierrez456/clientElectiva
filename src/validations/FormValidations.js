export const minLengthValidation = (inputData, minLength) => {
  const { value } = inputData;
  removeClassErrorSuccess(inputData);
  if (value.length >= minLength) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
};

export const emailValidation = (inputData) => {
  const emailValid =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const { value } = inputData;
  removeClassErrorSuccess(inputData);
  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
};

export const removeClassErrorSuccess = (inputData) => {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
};
