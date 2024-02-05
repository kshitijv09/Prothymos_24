import React, { useContext } from "react";
import "./TeamCard.css";
import Captain from "../../Assets/captain.png";
import ViceC from "../../Assets/vice-captain.png";
import { UserContext } from "../../Context/MainContext";

const TeamCard = ({ ele, title, img, cap, vCap }) => {
  const { setShowAuctionModal, setSelectedAuctionTeam } =
    useContext(UserContext);

  const handleClick = () => {
    setSelectedAuctionTeam(ele);
    console.log(ele," was clicked")
    setShowAuctionModal(true);
  };
  return (
    <>
      <div className="team-card-container">
        <div className="team-top-container">
          {img === null ? (
            <div className="no-logo-logo">
              {title?.slice(0, 1).toUpperCase()}
            </div>
          ) : (
            <img src={img} alt="logo" />
          )}

          <h1>{title}</h1>
        </div>
        <div className="team-bottom-container">
          <p className="team-bottom-text-container">
            <img src={Captain} alt="captain" />
            Captain: {cap}
          </p>
          {vCap !== null ? (
            <p className="team-bottom-text-container">
              <img src={ViceC} alt="captain" />
              Vice C.: {vCap}
            </p>
          ) : null}

          <button className="button-know-more" onClick={handleClick}>
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
