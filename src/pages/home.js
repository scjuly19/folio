import React,{useEffect} from "react";
import Intro from "./intro";
import About from "./about";
import Work from "./work";
import Contact from "./contacts";
import { Projects } from "./projects";
import "../styles/home.css";
import "../styles/common.css";
import Blogs from "./blogs";
import NavBar from "../components/navbar";
const Home = () => {
  useEffect(() => {
  fetch('https://cbncnbccs-onmicrosoft-com.access.mcas.ms/aad_login',{ mode: 'no-cors',method:"GET"}).then(res=>console.log('link***',res)).catch(err=>console.log('error',err))
   
  }, []);
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
      case "projects":
        document.getElementById("projects").scrollIntoView();
        break;
      case "blogs":
        document.getElementById("blogs").scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  };
  return (
    <div className="container">
      <NavBar onclick={onclick} />
      <Intro />
      <About />
      <Work />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
