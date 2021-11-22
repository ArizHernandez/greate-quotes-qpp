import { Fragment } from "react";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { quoteActions } from "../store/quote";

import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import {
  Route,
  useParams,
  useHistory,
  Link,
  useRouteMatch,
} from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quotes = useSelector((state) => state.quote);

  const history = useHistory();
  const dispatch = useDispatch();

  const selectedQuote = quotes.items.find(
    (quote) => String(quote.id) === params.quoteId
  );

  if (quotes.isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!selectedQuote) {
    return <h1 className="centered">No Quote Find</h1>;
  }

  const deleteHandler = () => {
    Swal.fire({
      title: "Delete quote",
      text: "Are you sure to delete this quote?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(quoteActions.deleteQuote(params.quoteId));

        Swal.fire("Success", "Your quote has deleted", "success");

        history.push("/quotes");
      }
    });
  };

  return (
    <Fragment>
      <Link to="/quotes" className="btn btn-outline">
        &#8617; Quotes
      </Link>

      <HighlightedQuote
        author={selectedQuote?.author}
        text={selectedQuote?.text}
      />

      <Route path={match.path} exact>
        <div className="options">
          <button onClick={deleteHandler} className="btn btn-red">
            Delete Quote
          </button>
          <Link to={`${match.url}/comments`} className="btn btn-comments">
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
