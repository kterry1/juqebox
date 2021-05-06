import React from "react";
import facebookLogo from "../assets/facebook.svg";
import instagramLogo from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";

const SocialIcons = () => {
  return (
    <div className="social_icons_container">
      <img className="facebook" src={facebookLogo} alt="link to facebook" />
      <img className="instagram" src={instagramLogo} alt="link to instagram" />
      <img className="tiktok" src={tiktok} alt="link to tiktok" />
    </div>
  );
};

export default SocialIcons;
