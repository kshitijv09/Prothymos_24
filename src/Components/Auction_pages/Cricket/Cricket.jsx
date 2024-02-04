import React from "react";
import "./Cricket.css";
import circket_data from "../../../Data/Cricket/Cricket_data";
import List from "./List";
import TeamCard from "../../TeamCard/TeamCard";
import { cricketTeams } from "../../../Data/Cricket/Cricket_Teams";
import Navbar from "../../Nav/Nav";
import Footer from "../../../Sections/Footer/Footer";
import PrimaryHeading from "../../PrimaryHeading/PrimaryHeading";

export default function Cricket() {
  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <Navbar />
        <PrimaryHeading title="Cricket Teams" />
        <div className="aution-card-main-container">
          {cricketTeams?.map((ele) => (
            <TeamCard
              key={ele.id}
              ele={ele}
              title={ele.title}
              img={ele.img}
              cap={ele.cap}
              vCap={ele.vCap}
            />
          ))}
        </div>
        <Footer />
      </div>

      <div className="outer">
        <h1>Auction Result's</h1>

        <div className="Auction">
          <div className="Game_name">
            <h1>CRICKET</h1>
          </div>
          <div className="team_name">TEAM NAME</div>
          <div className="details">
            <div className="players">
              <h1>PLAYER'S</h1>
              <br />
              <br />
              <div>
                {circket_data.map((info) => (
                  <List player_name={info.name} />
                ))}
              </div>
            </div>
            <div className="year">
              <h1>YEAR</h1>
              <br />
              <br />
              <div>
                {circket_data.map((info) => (
                  <List player_name={info.year} />
                ))}
              </div>
            </div>
            <div className="prices">
              <h1>PRICE'S</h1>
              <br />
              <br />
              <div>
                {circket_data.map((info) => (
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
