import React from "react";
import Intro from "./intro";
import About from "./about";
import Work from "./work";
import Contact from "./contacts";
import "../styles/home.css";
import '../styles/common.css';

const Home = () => {
  const onclick = (id) => {
    switch (id) {
      case "about":
        document.getElementById("about").scrollIntoView();
        break;
      case "work":
        document.getElementById("work").scrollIntoView();
        break;
      case "contact":
        document.getElementById("contact").scrollIntoView();
        break;
      case "home":
        document.getElementById("home").scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  };
  // const showNavBar = () => {

  // };
  return (
    <div className="container">
      <div className="navbar">
        <button onClick={() => onclick("home")}>Home</button>

        <button onClick={() => onclick("about")}>About</button>

        <button onClick={() => onclick("work")}>Work</button>

        <button onClick={() => onclick("contact")}>Contact</button>
      </div>

      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
