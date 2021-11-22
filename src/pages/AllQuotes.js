import { Fragment } from "react";
import { useSelector } from "react-redux";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
  const quotes = useSelector((state) => state.quote);

  if (quotes.isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (quotes.items.length === 0) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={quotes.items} />
    </Fragment>
  );
};

export default AllQuotes;
