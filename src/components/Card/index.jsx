import React from "react";
import "./index.css";

export default function Card(props) {
  const handleClick = (title) => {
    // console.log(title);
    props.clickHandler(title);
  };

  return (
    <div
      className="card-container"
      onClick={() => {
        handleClick(props.title);
      }}
    >
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
    </div>
  );
}
