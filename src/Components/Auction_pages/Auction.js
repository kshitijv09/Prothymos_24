import React, { useContext } from "react";
import "./Auction.css";
import { UserContext } from "../../Context/MainContext";
import Table from "../../Pages/Auction_pages/Cricket/Table";
import circket_data from "../../Pages/Auction_pages/Cricket/Cricket_data";
import football_data from "../../Pages/Auction_pages/Football/Football_data";

function Auction() {
  const { selectedAuctionTeam, showAuctionModal, setShowAuctionModal } =
    useContext(UserContext);

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
              Team:- {selectedAuctionTeam.title}
            </h1>
            <Table team={football_data[selectedAuctionTeam.num]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Auction;
