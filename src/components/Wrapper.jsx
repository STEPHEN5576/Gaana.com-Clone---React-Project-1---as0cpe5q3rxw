import React from "react";
// import SwiperContainer from './SwiperContainer';
import { Link } from "react-router-dom";
import './Wrapper.css'
import DropDown from "./dropdown/Dropdown";
// import DropDown from './DropDown'
function Wrapper() {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/topchart">Trending</Link>
        </li>
        <li>
          <Link to="/newrelease">New Songs</Link>
        </li>
        <li>
          <Link to="/old-songs">Old Songs</Link>
        </li>
        <li>
          <Link to="/old-songs"><DropDown song="Moods & Genres"/></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Wrapper;
