import React from "react";
import "./PrimaryHeading.css";

const PrimaryHeading = ({ title }) => {
  return (
    <div>
      <h1 className="primary-heading-one">{title}</h1>
    </div>
  );
};

export default PrimaryHeading;
