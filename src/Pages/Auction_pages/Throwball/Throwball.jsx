import React from "react";
import "./Throwball.css";
import throwball_data from "./Throwball_data";
import List from "./List";
export default function Throwball() {
  return (
    <>
      <div className="outer">
        <h1>Auction Result's</h1>

        <div className="Auction">
          <div className="Game_name">
            <h1>THROW BALL</h1>
          </div>
          <div className="team_name">TEAM NAME</div>
          <div className="details">
            <div className="players">
              <h1>PLAYER'S</h1>
              <br />
              <br />
              <div>
                {throwball_data.map((info) => (
                  <List player_name={info.name} />
                ))}
              </div>
            </div>
            <div className="year">
              <h1>YEAR</h1>
              <br />
              <br />
              <div>
                {throwball_data.map((info) => (
                  <List player_name={info.year} />
                ))}
              </div>
            </div>
            <div className="prices">
              <h1>PRICE'S</h1>
              <br />
              <br />
              <div>
                {throwball_data.map((info) => (
                  <List player_price={info.price} />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
