import React from "react";
import "../Cricket/Cricket.css";
import football_data from "./Football_data";
import Table from "../Cricket/Table";
export default function Football() {


    return (
        <>
            <div className="outer">
                <h1>Auction Result's</h1>

                <div className="Auction">
                    <div className="Game_name">
                        <h1>FOOTBALL</h1>
                    </div>
                    <div className="team_name">TEAM NAME</div>


                    <div className="table-details">
                        <Table count={1} team={football_data[0]} />
                    </div>


                    <div className="table-details">
                        <Table count={2} team={football_data[1]} />
                    </div>

                    <div className="table-details">
                        <Table count={3} team={football_data[2]} />
                    </div>

                    <div className="table-details">
                        <Table count={4} team={football_data[3]} />
                    </div>

                    <div className="table-details">
                        <Table count={5} team={football_data[4]} />
                    </div>

                    <div className="table-details">
                        <Table count={6} team={football_data[5]} />
                    </div>

                </div>
            </div>
        </>
    );
}
