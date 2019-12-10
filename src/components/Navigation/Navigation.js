import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav mb4">
      <h3 className=" white f2 mv4 pt2">FaceMe</h3>
      <div className="navLinks fr w-30 mv4">
        <p className="pointer dim dib f2 underline white  mv0">{"Register"}</p>
        <p className="pointer dim dib f2 underline white ml3 mv0">{"Login"}</p>
      </div>
    </div>
  );
};

export default Navigation;

//In Navigations .css nav div that is positioned relative has to be set the width and height
//in order for the absolute positioned child elemnt inside it can move around relative to parent size
