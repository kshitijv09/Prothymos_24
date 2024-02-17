import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SportCard from "./Components/Sports/SportCard";
import Auction from "./Components/Auction_pages/Auction";
import WholeSchedule from "./Pages/WholeSchedule/WholeSchedule";
import Teams from "./Pages/Auction_pages/SportTeams/Teams";
import Schedule from "./Pages/Schedule/Schedule";
import Result from "./Pages/Result/Result";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auction />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<SportCard />} />
          <Route path="/schedule" element={<WholeSchedule />} />
          <Route path="/schedule/:sport" element={<Schedule/>}/>
          <Route path="/result/:sport" element={<Result/>}/>
          <Route path="/auction/:sport" element={<Teams />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
