import React from "react";
import "./nav.css";
import Icon from "./Logo.png";
import Toggle from "./Toggle";
import { useState } from "react";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    console.log("hi");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Icon} alt="" />
        </div>
        <ul className={isNavbarVisible ? "" : "hide"}>
          <li className="list" onClick={toggleNavbar}>
            Home
          </li>
          <li className="list">Feature</li>
          <li className="list">Community</li>
          <li className="list">Blog</li>
          <li className="list">Pricing</li>
          <li className="list btn">Pricing</li>
        </ul>
        <div className="toggle">
          <Toggle onToggle={toggleNavbar} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
