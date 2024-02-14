import React from "react";
import SportData from "./SportData";
import Navbar from "../Nav/Nav";
import "./SportCard.css";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import Footer from "../../Sections/Footer/Footer";

import { useNavigate } from "react-router-dom";
const SportCard = () => {
  window.scrollTo(0, 0);
  const Navigate = useNavigate();
  //   {
  // style={{ display: "flex", width: "50%" }}
  //     console.log(props);
  //   }
  const handleSchedule = (val) => {
    //   if(key==1){
    // Navigate('/schedule/cricket');
    //   }
    Navigate(`/schedule/${val}`);
  };
  const handleAuction = (val) => {
    //   if(key==1){
    // Navigate('/schedule/cricket');
    //   }
    Navigate(`/auction/${val}`);
  };
  return (
    <div style={{ paddingTop: 80 }}>
      <Navbar />
      <PrimaryHeading title="sports" />
      <div className="sport-container">
        {SportData.map((sport, index) => {
          return (
            <section className="record">
              {/* <div class="record-arrow"></div> */}
              <div
                id="record1"
                className="record-display"
                style={{ backgroundImage: `url(${sport.img})` }}
              >

              </div>
              <div className="record-desc">
                <h2>{sport.value}</h2>
        
                <div  key={index} 
                className={`sport ${index === 1 || index === 2 || index === 3 || index === 6 || index === 0 ? "btn-container" : "special"}`}>

               { sport.value && (sport.value==="Cricket" || sport.value=== "Kabaddi"
                ||sport.value==="Football" || sport.value==="Volleyball" ||sport.value=== "Throwball" ) &&
                  (<button
                    className="auc btn"
                    onClick={() => {
                      handleAuction(sport.value);
                    }}
                  >
                    Auction
                  </button>)
        } 
                  {/* </div> */}
                  {/* <div className="sch-btn"> */}
                  <button
                    className="sch btn"
                    onClick={() => {
                      handleSchedule(sport.value);
                    }}
                  >
                    Schedule
                  </button>
                  {/* </div> */}
                  {/* <div className="res-btn"> */}
                  <button className="res btn">Results</button>
                  {/* </div> */}
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default SportCard;
