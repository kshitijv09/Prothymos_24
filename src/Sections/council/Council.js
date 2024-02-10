import React from "react";
import "./Council.css";
import CouncilCard from "../../Components/CouncilCard/CouncilCard";

const CouncilTeam = () => {
  return (
    <div className="council-team-main-container">
      <h1 className="council-team-heading">Sport Council</h1>
      <div className="council-card-main-container-2">
        <CouncilCard />
        {/* <TechCard />
        <TechCard />
        <TechCard />
        <TechCard /> */}
      </div>
    </div>
  );
};

export default CouncilTeam;