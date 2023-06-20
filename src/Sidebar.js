import React from "react";
import { MdDashboard, MdPeople, MdMessage, MdSettings } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
    
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <MdDashboard className="sidebar-icon" size={20} />
        </li>
        <li>
          <MdPeople className="sidebar-icon" size={20} />
        </li>
        <li>
          <MdMessage className="sidebar-icon" size={20} />
        </li>
        <li>
          <MdSettings className="sidebar-icon" size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
