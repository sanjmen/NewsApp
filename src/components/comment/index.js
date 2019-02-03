import React from "react";
import './style.css';

export default function Comment(props) {
  return (
    <p>
      {props.comment.text} by {props.comment.user}
    </p>
  );
}
