import React from "react";

const navButtons = ["Home", "About", "Work", "Projects", "Blogs", "Contact"];
const NavBar = ({ onclick }) => {
  return (
    <>
      <div className="web-menu">
        {navButtons.map((item) => (
          <button
            onClick={() => onclick(item.toLowerCase())}
            key={item}
            className="nav-btn"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default NavBar;
