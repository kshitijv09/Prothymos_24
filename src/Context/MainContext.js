import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [selectedAuctionTeam, setSelectedAuctionTeam] = useState(null);
  const [selectedSport,setSelectedSport]=useState(null)
  return (
    <UserContext.Provider
      value={{
        showAuctionModal,
        setShowAuctionModal,
        selectedAuctionTeam,
        setSelectedAuctionTeam,
        selectedSport,setSelectedSport
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
