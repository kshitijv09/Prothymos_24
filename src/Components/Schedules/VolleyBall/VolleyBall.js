import React from 'react';
import "../Styles/sports.css"
import VolleyBallScheduleData from "./VolleyBallScheduleData";

const VolleyBallSchedulePage = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-heading">Volley-Ball Schedule</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th colSpan="1">Team1</th>
            <th colSpan="1"></th>
            <th colSpan="1">Team2</th>
            <th>Match Time</th>
          </tr>
        </thead>
        <tbody>
          {VolleyBallScheduleData.map((match, index) => (
            <tr key={index}>
              <td className="team1">{match.Team1}</td>
              <td>vs</td>
              <td className="team2">{match.Team2}</td>
              <td>{match.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolleyBallSchedulePage;
