import { quoteActions } from "../../store/quote";
import classes from "./NewCommentForm.module.css";
import useInput from "../hooks/useInput";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const NewCommentForm = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const {
    value: commentValue,
    hasError: commentHasError,
    isValid: commentIsValid,
    onChangeInputHandler: commentOnChange,
    onBlurInputHandler: commentOnBlur,
  } = useInput((value) => value !== "");

  let formValid = false;

  if (commentIsValid) {
    formValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    dispatch(
      quoteActions.addQuote({ id: params.quoteId, comment: commentValue })
    );

    Swal.fire("Success", "Comment created", "success");
    props.setIsAddingComment(false);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div
        className={`${classes.control} ${commentHasError ? "invalid" : ""}`}
        onSubmit={submitFormHandler}
      >
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          value={commentValue}
          onBlur={commentOnBlur}
          onChange={commentOnChange}
        />
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
