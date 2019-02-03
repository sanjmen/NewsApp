import React from "react";
import withSubscription from "../hoc/with_subscription";
import CommentListWithSubscription from "../comments";
import Post from "../post";
import './style.css';

function PostList(props) {
  const { error, data, isLoaded } = props;
  return (
    <div className="posts">
      {error ? (
        <p>{error.message}</p>
      ) : !isLoaded ? (
        <p>Loading ...</p>
      ) : (
        data.map(post => (
          <div key={post.id} className="post">
            <Post post={post} />
            <CommentListWithSubscription postId={post.id} />
          </div>
        ))
      )}
    </div>
  );
}

const PostListWithSubscription = withSubscription(PostList, DataSource =>
  DataSource.getPosts()
);

export default PostListWithSubscription;
