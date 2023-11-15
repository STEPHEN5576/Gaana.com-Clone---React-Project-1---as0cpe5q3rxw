import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
function DropDown({ song }) {
  return (
    <div className="dropdown">
      <button className="dropdown-button">{song}</button>
      <div className="dropdown-content">
        <Link to={"/dropdown"}>Party</Link>
        <Link to={"/dropdown"}>Romance</Link>
        <Link to={"/dropdown"}>Bakth</Link>
        <Link to={"/dropdown"}>90s & 2000s</Link>
        <Link to={"/dropdown"}>Indie</Link>
        <Link to={"/dropdown"}>EDM</Link>
        <Link to={"/dropdown"}>Ghazala</Link>
        <Link to={"/dropdown"}>Workout</Link>
        <Link to={"/dropdown"}>Stars</Link>
        <Link to={"/dropdown"}>Retro</Link>
        <Link to={"/dropdown"}>Wedding</Link>
        <Link to={"/dropdown"}>Kids</Link>
        <Link to={"/dropdown"}>Lata-Forever</Link>
        <Link to={"/dropdown"}>Dance</Link>
        <Link to={"/dropdown"}>Friendship</Link>
      </div>
    </div>
  );
}

export default DropDown;
