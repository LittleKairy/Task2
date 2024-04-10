import React from "react";
import "./index.css";

export default function Card(props) {
  const handleClick = (article) => {
    // console.log(title);
    props.clickHandler(article);
  };

  return (
    <div
      className="card-container"
      onClick={() => {
        handleClick(props.article);
      }}
    >
      <p className="title">{props.article.title}</p>
      <p className="content">{props.article.content}</p>
    </div>
  );
}
