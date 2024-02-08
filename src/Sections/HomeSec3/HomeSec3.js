import React from "react";
import "./HomeSec3.css";

const HomeSec3 = ({SecImg}) => {
  return (
    <div className="home-sec-2-main-container sec-3-main-container">
      <img
        className="sec-3-img"
        src={SecImg}
        alt="sports"
      />
      <div className="home-sec-2-text-container">
        <h1>Experience the thrill of sports</h1>
        <p>
          Discover the biggest and best sports festivals from around the world.
        </p>
      </div>
    </div>
  );
};

export default HomeSec3;
