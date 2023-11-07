import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useEffect, useState } from "react";
import "./Sidebar.css";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <DehazeIcon />
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          <DehazeIcon />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/podcast">Podcasts</a>
          </li>
          <li>
            <a href="/my-music">My Library</a>
          </li>
          <li>
            <a href="/premium">Get Premium</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
