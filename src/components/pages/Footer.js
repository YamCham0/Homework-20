import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";


export default function Footer() {
  return (

    <div class="social-container">
      <h5>Links</h5>
      <a href="https://www.github.com/YamCham0" target="_blank"
        className="Github social" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/YamCham0" target="_blank"
        className="Twitter social" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/yamcham0-bab408220" target="_blank"
        className="LinkedIn social" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}


