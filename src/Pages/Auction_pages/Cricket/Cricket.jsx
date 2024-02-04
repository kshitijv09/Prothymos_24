import React from "react";
import "./Cricket.css";
import circket_data from "./Cricket_data";
import Football_data from "../../../Data/Football/Football_data";
import Table from "./Table";
import Navbar from "../../../Components/Nav/Nav";
import Footer from "../../../Sections/Footer/Footer";
import TeamCard from "../../../Components/TeamCard/TeamCard";
import { cricketTeams } from "../../../Data/Cricket/Cricket_Teams";
import PrimaryHeading from "../../../Components/PrimaryHeading/PrimaryHeading";
import { football_teams } from "../../../Data/Football/FootBall_teams";
export default function Cricket() {
  const selectPage = () => {
    if (window.location.pathname === "/auction/football") {
      return {
        title: "Football Team",
        data: football_teams,
      };
    } else if (window.location.pathname === "/auction/cricket") {
      return {
        title: "Cricket Team",
        data: cricketTeams,
      };
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div style={{ paddingTop: 80 }}>
          <PrimaryHeading title={selectPage()?.title} />
          <div className="main-container-auction">
            {selectPage().data?.map((ele) => (
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
