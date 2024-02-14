import React from "react";

const Table = ({ team }) => {
  {console.log("Hi ",team)}
  return (
    <section className="team-table">
      <div className="table-header table-body">
        <div className="table-body-row1">Name</div>
        <div className="table-body-row2">Price</div>
        <div className="table-body-row3">Year</div>
      </div>

      {team.map((row) => {
        return (
          <div className="table-body">
            <div className="table-body-row1">{row.name}</div>
            <div className="table-body-row2">{row.price}</div>
            <div className="table-body-row3">{row.year}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Table;
