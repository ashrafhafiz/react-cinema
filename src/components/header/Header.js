import React, { useState } from "react";

import logo from "../../assets/cinema-logo.svg";
import "./Header.scss";

const HEADER_MENU_LIST_ITEMS = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: "now_playing",
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Popular",
    type: "popular",
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Top Rated",
    type: "top_rated",
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Upcoming",
    type: "Upcoming",
  },
];

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);

    if (navClass) document.body.classList.add("header-nav-open");
    else document.body.classList.remove("header-nav-open");
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`${
              menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"
            }`}
            id="header-mobile-menu"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? "header-nav-list header-mobile-nav" : "header-nav-list"
            }`}
          >
            {HEADER_MENU_LIST_ITEMS.map((item) => (
              <li key={item.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={item.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{item.name}</span>
              </li>
            ))}
            <input
              type="text"
              className="search-input"
              placeholder="Search for a movie"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
