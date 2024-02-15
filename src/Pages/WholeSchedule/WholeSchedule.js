import React from "react";
import "./WholeSchedule.css";
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import Navbar from "../../Components/Nav/Nav";
import Footer from "../../Sections/Footer/Footer";
import { timeArray1,sportArray1,venueArray1, timeArray2,sportArray2,venueArray2, timeArray3,sportArray3,venueArray3 } from "../../Data/WholeScheduleData/WholeScheduleData";

const WholeSchedule = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 90 }}>
        <PrimaryHeading title="Schedule"/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "1%"}}>
        <h1 className="second-heading">Day 1</h1>
        </div>
        <div className="table-schedule">
        <div className="column-schedule">
            <h1>Sport</h1>
            {sportArray1.map((sport,index)=>{return(<p key={index}>{sport}</p>)})}
          </div>
          <div className="column-schedule">
            <h1>Time</h1>
            {timeArray1.map((time,index)=>{return(<p key={index}>{time}</p>)})}
          </div>
          
          <div className="column-schedule">
            <h1>Venue</h1>
            {venueArray1.map((venue,index)=>{return(<p key={index}>{venue}</p>)})}
          </div>
        </div>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "1%"}}>
        <h1 className="second-heading">Day 2</h1>
        </div>
        <div className="table-schedule">
        <div className="column-schedule">
            <h1>Sport</h1>
            {sportArray2.map((sport,index)=>{return(<p key={index}>{sport}</p>)})}
          </div>
          <div className="column-schedule">
            <h1>Time</h1>
            {timeArray2.map((time,index)=>{return(<p key={index}>{time}</p>)})}
          </div>
          
          <div className="column-schedule">
            <h1>Venue</h1>
            {venueArray2.map((venue,index)=>{return(<p key={index}>{venue}</p>)})}
          </div>
        </div>



        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "1%"}}>
        <h1 className="second-heading">Day 3</h1>
        </div>
        <div className="table-schedule">
        <div className="column-schedule">
            <h1>Sport</h1>
            {sportArray3.map((sport,index)=>{return(<p key={index}>{sport}</p>)})}
          </div>
          <div className="column-schedule">
            <h1>Time</h1>
            {timeArray3.map((time,index)=>{return(<p key={index}>{time}</p>)})}
          </div>
          
          <div className="column-schedule">
            <h1>Venue</h1>
            {venueArray3.map((venue,index)=>{return(<p key={index}>{venue}</p>)})}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WholeSchedule;
