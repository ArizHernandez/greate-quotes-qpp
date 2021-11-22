import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import CommentsList from "./CommentsList";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();
  const quotes = useSelector((state) => state.quote.items);

  const selectedQuote = quotes.find((quote) => String(quote.id) === quoteId);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm setIsAddingComment={setIsAddingComment} />
      )}

      {selectedQuote?.comments?.length > 0 ? (
        <CommentsList comments={selectedQuote?.comments} />
      ) : (
        <p>No Comments...</p>
      )}
    </section>
  );
};

export default Comments;
