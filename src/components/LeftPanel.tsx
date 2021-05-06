import React from "react";
import arrow from "../assets/arrow.svg";
const LeftPanel = () => {
  return (
    <div className="left_panel">
      <div className="song_list_container">
        <div className="title">
          Album Song List
          <img src={arrow} />
        </div>
        <ul className="songs">
          <li>
            <span>01</span> Get It Together
          </li>
          <li>
            <span>02</span> Waiting for You
          </li>
          <li>
            <span>03</span> Don't Make Me Wait
          </li>
        </ul>
      </div>
      <button className="spotify_login_btn">Login With Spotify</button>
    </div>
  );
};

export default LeftPanel;
