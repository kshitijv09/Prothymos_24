import React, { useEffect, useState } from "react";
import "./Landing.css";
import Animation from "../../Components/Animation/Animation";
import Nav from "../../Components/Nav/Nav";

const Landing = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 7 second!");
      setShowAnimation(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="primary-heading--container">
      <h1 className="primary-heading">Join the ultimate sports celebration</h1>
      <h1 className="secondary-heading">Stay fit and active.</h1>
      <h1 className="third-heading">Celebrate the joy of sports.</h1>
      <h1 className="fourth-heading">Where?</h1>
      {showAnimation ? <Animation /> : null}
    </div>
  );
};

export default Landing;
