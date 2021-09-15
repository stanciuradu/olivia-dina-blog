import React from "react";
import logo from "../assets/images/logo.png";
import "../components/Header.css";

function Header() {
  return (
    <div className="container">
      <div className='header'>
        <img src={logo} alt="Logo" />
        <em>
          <h3>Olivia Dina Blog's</h3>
        </em>
      </div>
    </div>
  );
}

export default Header;
