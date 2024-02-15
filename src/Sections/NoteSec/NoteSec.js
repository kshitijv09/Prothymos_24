import React from "react";
import "./NoteSec.css";
import Director from "../../Assets/Director.jpg"

const NoteSec = () => {
  return (
    <div className="note-main-conatiner">
      <div className="note-card-main-container">
        <img
          src={Director}
          alt="avatar"
        />
        <div className="note-card-text-container">
          <h1 style={{ color: "rgba(255,255,255,0.7)" }}>Director's Note</h1>
          <p>
          Prothymos 2024 is set to showcase the immense talent and passion of our students.
           This year's event promises to be bigger and better than ever before, 
           with a wide range of sports and activities to participate in.
            I encourage all of you to actively participate in Prothymos 2024 and support our students in their endeavors. 
            Let us come together as a community and celebrate the spirit of sportsmanship and teamwork. 
            Best wishes to all the participants
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteSec;
