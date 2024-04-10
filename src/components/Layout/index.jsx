import React from "react";
import MenuList from "../MenuList";
// import Main from "../Main";
import "./index.css";

export default function Layout(props) {
  // console.log(props);
  return (
    <div className="layout-container">
      <div className="left">
        <MenuList leftList={props.leftList} />
      </div>
      <div className="main">{props.children}</div>
    </div>
  );
}
