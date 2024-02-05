import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SportCard from "./Components/Sports/SportCard";
import CricketSchedulePage from "./Components/Schedules/Cricket/Cricket";
import VolleyBallSchedulePage from "./Components/Schedules/VolleyBall/VolleyBall";
import CricketAuctionPage from "./Pages/Auction_pages/Cricket/Cricket";
import FootballAuctionPage from "./Pages/Auction_pages/Football/Football";
import ThrowballAuctionPage from "./Components/Auction_pages/Throwball/Throwball";
import Auction from "./Components/Auction_pages/Auction";
import WholeSchedule from "./Pages/WholeSchedule/WholeSchedule";
import Teams from "./Pages/Auction_pages/SportTeams/Teams";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auction />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<SportCard />} />
          <Route path="/schedule" element={<WholeSchedule />} />
          <Route path="/schedule/cricket" element={<CricketSchedulePage />} />
          <Route
            path="/schedule/Volleyball"
            element={<VolleyBallSchedulePage />}
          />
          <Route path="/auction/:sport" element={<Teams />} />
         {/*  <Route path="/auction/cricket" element={<CricketAuctionPage />} />
          <Route path="/auction/football" element={<CricketAuctionPage />} />
          <Route path="/auction/football" element={<FootballAuctionPage />} />
          <Route path="/auction/throwball" element={<ThrowballAuctionPage />} />
          <Route path="/auction/Volleyball" element={<Auction />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
