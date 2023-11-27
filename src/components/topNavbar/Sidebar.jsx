import React, { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // You can add any side effect logic here if needed
  }, [isOpen]);

  return (
    <>
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <DehazeIcon />
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="toggle-buttons" onClick={() => setIsOpen(!isOpen)}>
          <div className="close-button">
            <CloseIcon />
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/podcast" onClick={closeSidebar}>
              Podcasts
            </Link>
          </li>
          <li>
            <Link to="/my-music" onClick={closeSidebar}>
              My Library
            </Link>
          </li>
          <li>
            <Link to="/subscription" onClick={closeSidebar}>
              Get Premium
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
