import React, { useEffect, useState,useContext } from "react";
import "./Teams.css";
import Table from "./Table";
import { UserContext } from "../../../Context/MainContext";
import Navbar from "../../../Components/Nav/Nav";
import Footer from "../../../Sections/Footer/Footer";
import TeamCard from "../../../Components/TeamCard/TeamCard";
import PrimaryHeading from "../../../Components/PrimaryHeading/PrimaryHeading";
import { cricket_teams } from "../../../Data/Cricket/Cricket_Teams";
import { volleyball_teams } from "../../../Data/Volleyball/Volleyball_Teams";
import { throwball_teams } from "../../../Data/Throwball/ThrowballTeams";
import { kabaddi_teams } from "../../../Data/Kabbadi/Kabaddi_Teams";
import { football_teams } from "../../../Data/Football/FootBall_teams";

import { useParams } from "react-router-dom";


export default function Teams() {

    const { setSelectedSport } =
    useContext(UserContext);
  const { sport } = useParams();
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    // Fetch data based on the sport name
    switch (sport) {
      case "Cricket":
        setSelectedSport("Cricket")
        setSportData(cricket_teams);
        break;
      case "Volleyball":
        setSelectedSport("Volleyball")
        setSportData(volleyball_teams);
        break;
      case "Throwball":
        setSelectedSport("Throwball")
        setSportData(throwball_teams);
        break;
      case "Kabaddi":
        setSelectedSport("Kabaddi")
        setSportData(kabaddi_teams);
        break;
      case "Football":
        setSelectedSport("Football")
        setSportData(football_teams);
        break;
      default:
        setSportData([]);
        break;
    }
  }, [sport]);

  return (
    <>
      <div>
        <Navbar />
        <div style={{ paddingTop: 80 }}>
          <PrimaryHeading title={sport} />
          <div className="main-container-auction">
            {sportData.map((ele) => (
              <TeamCard
                key={ele.id}
                title={ele.title}
                img={ele.img}
                cap={ele.cap}
                vCap={ele.vCap}
                ele={ele}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
