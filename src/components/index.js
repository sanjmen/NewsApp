import React from "react";
import PostListWithSubscription from "./posts";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <main className="main">
        <PostListWithSubscription />
      </main>
    </div>
  );
}