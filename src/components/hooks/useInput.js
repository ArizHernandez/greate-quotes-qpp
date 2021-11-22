import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValid = validate(value);
  const hasError = !inputValid && isTouched;

  function onBlurInputHandler() {
    setIsTouched(true);
  }

  function onChangeInputHandler(event) {
    setValue(event.target.value);
  }

  function reset() {
    setValue("");
  }

  return {
    value,
    hasError,
    isValid: inputValid,
    reset,
    onChangeInputHandler,
    onBlurInputHandler,
  };
};

export default useInput;
