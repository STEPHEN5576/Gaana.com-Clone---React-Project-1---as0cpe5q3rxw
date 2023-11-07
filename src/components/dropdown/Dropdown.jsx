import React from "react";
import "./Dropdown.css";
function DropDown({ song }) {
  return (
    <div className="dropdown">
      <button className="dropdown-button">{song}</button>
      <div className="dropdown-content">
        <a href ="/occasion/party">Party</a>
        <a href="/occasion/romance">Romance</a>
        <a href="/occasion/devotional">Bakth</a>
        <a href="/occasion/90searly2000s">90s & 2000s</a>
        <a href="/occasion/indie">Indie</a>
        <a href="/occasion/edm">EDM</a>
        <a href="/occasion/ghazals">Ghazala</a>
        <a href="/occasion/workout">Workout</a>
        <a href="/occasion/stars">Stars</a>
        <a href="/occasion/retroacrossdecades">Retro</a>
        <a href="/occasion/wedding1">Wedding</a>
        <a href="/occasion/kids">Kids</a>
        <a href="/occasion/lats-forever">Lata-Forever</a>
        <a href="/occasion/dance">Dance</a>
        <a href="/occasion/friendshipday">Friendship</a>
      </div>
    </div>
  );
}

export default DropDown;
