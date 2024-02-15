import React from "react";
import "./TechCard.css";
import TechCardData from "./TechCardData";

const TechCard = () => {
  return (
    <div className="main">
      {
        TechCardData.map((value, index) => {
          return (
            <div className="tech-team-card--container">
              <img
                src={value.img}
                alt="team member"
              />
              <div className="text-container">
                <h1>{value.name}</h1>
                <h2>{value.role}</h2>
              </div>
            </div>
          )
        })
      }

    </div>

  );
};

export default TechCard;
