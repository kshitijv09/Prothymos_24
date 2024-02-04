import React from "react";
import "./TechTeam.css";
import TechCard from "../../Components/TechCard/TechCard";

const TechTeam = () => {
  return (
    <div className="tech-team-main-container">
      <h1 className="tech-team-heading">Tech Team</h1>
      <div className="tech-card-main-container-2">
        <TechCard />
        {/* <TechCard />
        <TechCard />
        <TechCard />
        <TechCard /> */}
      </div>
    </div>
  );
};

export default TechTeam;
