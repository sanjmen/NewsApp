import React from "react";
import './style.css';

export default function Post(props) {
  return (
    <React.Fragment>
      <h1>{props.post.title}</h1>
      <p>{props.post.text}</p>
    </React.Fragment>
  );
}
