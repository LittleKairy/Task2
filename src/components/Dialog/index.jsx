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
        <p className="title">确定跳转至{props.title}吗</p>

        <div className="btns">
          <button onClick={handleClickNo}>no</button>
          <button onClick={handleClickYes}>yes</button>
        </div>
      </div>
    </div>
  );
}
