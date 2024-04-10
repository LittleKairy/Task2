import React from "react";
import "./index.css";

export default function Left({ leftList }) {
  return (
    <div className="left-container">
      {leftList.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <i className={`icon iconfont ${item.icon}`}></i>
            <span className="title">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
