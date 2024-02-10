import React from "react";
import "./CouncilCard.css";
import CouncilCardData from "./CouncilCardData";

const CouncilCard = () => {
  return (
    <div className="main">
      {
        CouncilCardData.map((value, index) => {
          return (
            <div className="council-team-card--container">
              <img
                src={value.img}
                alt="team member"
              />
              <div className="text-container">
                <h1>{value.name}</h1>
                <h2>{value.position}</h2>
              </div>
            </div>
            
          )
        })
      }

    </div>

  );
};

export default CouncilCard;