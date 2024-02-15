import React, { useState,useEffect,useContext } from "react";
import "./Auction.css";
import { UserContext } from "../../Context/MainContext";
import Table from "../../Pages/Auction_pages/SportTeams/Table";
import football_data from "../../Data/Football/Football_data"
import cricket_data from "../../Data/Cricket/Cricket_data";
import volleyball_data from "../../Data/Volleyball/Volleyball_data"
import throwball_data from "../../Data/Throwball/Throwball_data"
import kabaddi_data from "../../Data/Kabbadi/Kabbadi_data"

function Auction() {
  const { selectedAuctionTeam, showAuctionModal, setShowAuctionModal,selectedSport } =
    useContext(UserContext);

    const [sportInfo,setSportInfo]=useState([])

    useEffect(() => {
      // Fetch data based on the sport name
      switch (selectedSport) {
        case "Cricket":
          setSportInfo(cricket_data)
          break;
        case "Volleyball":
          setSportInfo(volleyball_data)
          break;
        case "Throwball":
          setSportInfo(throwball_data)
          break;
        case "Kabaddi":
          setSportInfo(kabaddi_data)
          break;
        case "Football":
          setSportInfo(football_data)
          break;
        default:
          setSportInfo([]);
          break;
      }
    }, [selectedSport]);

  return (
    <div className="modalContainer">
      {showAuctionModal && (
        <div className="modal">
          <button onClick={() => setShowAuctionModal(false)}>X</button>
          <div className="main-container-table-auction">
            <h1
              style={{
                fontSize: "2rem",
                textAlign: "center",
                marginBottom: 20,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#57C5B6",
              }}
            >
              {console.log(selectedAuctionTeam.id-1," SP info is ",sportInfo[selectedAuctionTeam.id-1])}
              Team:- {selectedAuctionTeam.title}
            </h1>
            
            <Table team={sportInfo[selectedAuctionTeam.id-1]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Auction;
