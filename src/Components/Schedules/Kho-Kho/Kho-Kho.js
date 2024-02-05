import React from 'react';
import './Cricket.css';
import CricketScheduleData from "./CricketScheduleData";

const CricketSchedulePage = () => {
  return (
    <div className="cricket-schedule-container">
      <h1 className="cricket-schedule-heading">Cricket Schedule</h1>
      <table className="cricket-schedule-table">
        <thead>
          <tr>
            <th colSpan="1">Team1</th>
            <th colSpan="1"></th>
            <th colSpan="1">Team2</th>
            <th>Match Time</th>
          </tr>
        </thead>
        <tbody>
          {CricketScheduleData.map((match, index) => (
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

export default CricketSchedulePage;