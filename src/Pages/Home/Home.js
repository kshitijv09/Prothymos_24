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
      <HomeSec2 SecImg="https://i.pinimg.com/564x/22/87/33/228733e4335c731eeac3a09990040288.jpg"/>
      <hr className="hr-line" />
      <HomeSec3 SecImg="https://i.pinimg.com/564x/e7/c6/9f/e7c69fc3200cf00fe652e8edca02e987.jpg"/>
      <hr className="hr-line" id="director-note" />
      <HomeSec2 SecImg="https://i.pinimg.com/564x/2e/44/59/2e44590648c3f3b6446a45fe5875e291.jpg"/>
      <hr className="hr-line" />
      <NoteSec />
      <hr className="hr-line" id="tech-team" />
      <TechTeam />
      <hr className="hr-line" />
      <Footer />
    </div>
  );
};

export default Home;
