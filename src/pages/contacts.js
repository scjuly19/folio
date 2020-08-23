import React from "react";
import "../styles/contact.css";
const Contacts = () => {
  return (
    <div id="contact" className="contact-main">
      <div>
        <h1 className="sub-title">Contact Me</h1>
        <p>
          If I look like a match for the one you are looking for, feel free to
          reach out to me!
        </p>
        
          <span>E-mail- scjuly69@gmail.com</span>
         
     
      </div>
      <h1>Follow Me</h1>
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/scjuly19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="" src={require("../icons/linkedin.png")} className="icon" />
        </a>
        <a
          href="https://www.instagram.com/sakshi.codes"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
        >
          <img
            alt=""
            src={require("../icons/instagram.png")}
            className="icon"
          />
        </a>
        <a
          href="https://github.com/scjuly19"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
        >
          <img alt="" src={require("../icons/github.png")} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
