import React from "react";
import withSubscription from "../hoc/with_subscription";
import Comment from "../comment";
import './style.css';

function CommentList(props) {
  const { error, data, isLoaded } = props;
  return (
    <div className="comment">
      {error ? (
        <p>{error.message}</p>
      ) : !isLoaded ? (
        <p>Loading ...</p>
      ) : (
        data.map(comment => <Comment comment={comment} key={comment.id} />)
      )}
    </div>
  );
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource, props) => DataSource.getComments(props.postId)
);

export default CommentListWithSubscription;
