import React from "react";
import "./Home.css";
import Landing from "../../Sections/Landing/Landing";
import HomeSec2 from "../../Sections/HomeSec2/HomeSec2";
import HomeSec3 from "../../Sections/HomeSec3/HomeSec3";
import NoteSec from "../../Sections/NoteSec/NoteSec";
import TechTeam from "../../Sections/TechTeam/TechTeam";
import Footer from "../../Sections/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Landing />
      <hr className="hr-line" />
      <HomeSec2 />
      <hr className="hr-line" />
      <HomeSec3 />
      <hr className="hr-line" id="director-note" />
      <NoteSec />
      <hr className="hr-line" id="tech-team" />
      <TechTeam />
      <hr className="hr-line" />
      <Footer />
    </div>
  );
};

export default Home;
