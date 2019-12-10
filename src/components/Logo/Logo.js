import React, { Fragment } from "react";
import Tilt from "react-tilt";
import Atom from "./atom.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt shadow-3 br2 ma3 mt0"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            src={Atom}
            style={{ paddingTop: "5px" }}
            width="100"
            height="100"
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
