import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const filters = [
    "Customizable",
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <p className="item-count">3425 ITEMS</p>
        <button className="hide-filter">HIDE FILTER</button>
      </div>

      <div className="filter-section">
        {filters.map((name, index) => (
          <div key={index} className="filter-item">
            <div className="filter-title">{name}</div>
            <select>
              <option>All</option>
            </select>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
