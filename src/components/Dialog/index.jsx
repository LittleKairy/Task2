import React from "react";
import "./index.css";

export default function Dialog(props) {
  const handleClickNo = () => {
    props.changeDiaglogShow(false, false);
  };

  const handleClickYes = () => {
    props.changeDiaglogShow(false, true);
  };

  return (
    <div className="dialog-container">
      <div className="block">
        <i
          className="icon-cancle iconfont icon-cancel-test"
          onClick={handleClickNo}
        ></i>
        <div className="title">
          <i className="icon-info iconfont icon-tishi"></i>
          <p>
            确定跳转至<span> {props.article.title} </span>吗？
          </p>
        </div>

        <div className="btns">
          <button onClick={handleClickNo}>no</button>
          <button onClick={handleClickYes}>yes</button>
        </div>
      </div>
    </div>
  );
}
