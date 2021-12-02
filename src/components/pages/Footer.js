import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="Github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href=""
        className="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href=""
        className="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}