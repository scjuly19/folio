import React from "react";
import "../styles/contact.css";
const Contacts = () => {
  return (
    <footer id="contact" className="contact-main">
      <div>
        <h2 className="sub-title">Contact Me</h2>
        <p>Feel free to reach out to me!</p>
      </div>
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
        <a
          href="https://www.twitter.com/scjuly19"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
        >
          <img
            alt=""
            src={require("../icons/twitter-sign.png")}
            className="icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Contacts;
