import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5, faReact, faJs, faNode
  } from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

export default function Skills() {
    return (
      <div>
          <header>
            <h1>Skills</h1>
          </header>
          <div className="iCon fa-1x">
          <FontAwesomeIcon className="iHtml5 skill" icon={faHtml5} size="3x" spin/>
          <FontAwesomeIcon className="iReact skill" icon={faReact} size="3x" pulse/>
          <FontAwesomeIcon className="iJs skill" icon={faJs} size="3x" spin/>
          <FontAwesomeIcon className="iNode skill" icon={faNode} size="3x" pulse/>
          </div>
            <p>HTML5, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, React.js,
              Node.js, MongoDB, PHP frameworks like MySQL, Heroku, 
              Security and Session Storage, and User Authentication.
            </p>
        </div>
      )
    };
