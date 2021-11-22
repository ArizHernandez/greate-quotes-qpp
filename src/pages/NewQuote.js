import { Fragment } from "react";

import QuoteForm from "../components/quotes/QuoteForm";
import { quoteActions } from "../store/quote";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const NewQuote = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (quote) => {
    dispatch(quoteActions.addQuote(quote));

    Swal.fire("Succes", "Your Quote has created!", "success");
    history.push("/quotes");
  };

  return (
    <Fragment>
      <QuoteForm onAddQuote={submitHandler} />
    </Fragment>
  );
};

export default NewQuote;
