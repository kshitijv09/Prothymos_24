import React from "react";
import "./HomeSec2.css";

const HomeSec2 = ({SecImg}) => {
  return (
    <div className="home-sec-2-main-container">
      <div className="home-sec-2-text-container">
        <h1>Experience the thrill of sports</h1>
        <p>
        It's not whether you get knocked down; it's whether you get up.
        </p>
      </div>
      <img
      src={SecImg}
        alt="sports"
      />
    </div>
  );
};

export default HomeSec2;
