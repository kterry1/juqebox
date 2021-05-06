import React from "react";
import headphonesLogo from "../assets/headphones.svg";
import juqebox from "../assets/Juqebox.svg";
import searchLogo from "../assets/searchLogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo_container">
        <img className="headphones" src={headphonesLogo} alt="" />
        <img className="juqebox" src={juqebox} alt="Juqebox" />
      </div>
      <div className="search_container">
        <img className="search_logo" src={searchLogo} alt="search" />
        <input className="search" />
      </div>
    </nav>
  );
};

export default Navbar;
