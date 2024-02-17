import React from 'react';
import "./ResultCard.css";

const ResultCard = ({ result }) => {
    {console.log(result)}
  return (
    <div>     
          <div  className="result-card">
            <div className="card">
              <h1>Match {result.match_no}</h1>
              <h2>{result.team1} vs {result.team2}</h2>
              <i>{result.result}</i>
            </div>
          </div>
    </div>
  );
};

export default ResultCard;