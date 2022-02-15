import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSocialIcons = () => {
  return (
    <div className="footer-social-icon">
      <a href={"#"}>
        <FaFacebookF />{" "}
      </a>
      <a href={"#"}>
        <FaTwitter />{" "}
      </a>
      <a href={"#"}>
        <FaInstagram />{" "}
      </a>
      <a href={"#"}>
        <FaYoutube />{" "}
      </a>
    </div>
  );
};

export default FooterSocialIcons;
