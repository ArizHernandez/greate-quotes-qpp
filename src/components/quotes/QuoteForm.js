import { Fragment, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import useInput from "../hooks/useInput";
import Swal from "sweetalert2";

import { Prompt } from "react-router-dom";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const {
    value: authorValue,
    isValid: authorIsValid,
    hasError: authorHasError,
    onChangeInputHandler: authorOnChange,
    onBlurInputHandler: authorOnBlur,
  } = useInput((value) => value.trim() !== "");

  const {
    value: textValue,
    isValid: textIsValid,
    hasError: textHasError,
    onChangeInputHandler: textOnChange,
    onBlurInputHandler: textOnBlur,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (authorIsValid && textIsValid) {
    formIsValid = true;
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (isEntering) return;

    if (!formIsValid) {
      textOnBlur();
      authorOnBlur();
      Swal.fire(
        "Incompleted Information",
        "Your information is incompleted, please complete the form.",
        "warning"
      );
      return;
    }

    props.onAddQuote({ author: authorValue, text: textValue });
  }

  function finishEnteringHandler() {
    setIsEntering(false);
  }

  function formFocusedHandler() {
    setIsEntering(true);
  }

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure to leave from this page?, You will lost all information entered"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div
            className={`${classes.control} ${authorHasError ? "invalid" : ""}`}
          >
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={authorValue}
              onBlur={authorOnBlur}
              onChange={authorOnChange}
            />
            {authorHasError && <p>Author name is not valid*</p>}
          </div>

          <div
            className={`${classes.control} ${textHasError ? "invalid" : ""}`}
          >
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              value={textValue}
              onChange={textOnChange}
              onBlur={textOnBlur}
              style={{ resize: "none" }}
            />
            {textHasError && <p>Text is not valid*</p>}
          </div>

          <div className={classes.actions}>
            <button
              onClick={finishEnteringHandler}
              type="submit"
              className="btn"
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
