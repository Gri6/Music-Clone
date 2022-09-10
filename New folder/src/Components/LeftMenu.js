import React from "react";
import { BsSpotify, BsThreeDots } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import "../Styes/LeftMenu.css";
import { MenuList } from "./MenuList";
import { Menu } from "./Menu";
import { MenuPlayList } from "./MenuPlayList";
import { TrackList } from "./TrackList";

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <BsSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <BsThreeDots />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />

      <MenuPlayList />

      <TrackList />
    </div>
  );
};

export { LeftMenu };
