import React from "react";

function List({ player_name, year, player_price}) {
  return (
    <>
      <h1>
        {player_name} 
        {year}
        {player_price}
      </h1>
    </>
  );
}

export default List;
