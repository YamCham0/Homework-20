import React from 'react';
import "./Home.css";
import myself from './images/Who.png';




export default function Home() {
  return (
    <div>
        <header>
          <h1 id="myName">Yamil Chamochumbi</h1>
        </header>
        <img id="hero" src={myself} alt="Me, Myself and I."/>
        <h3 id="navInfo">Hello World!!!</h3>
        <div id="infoHouse">
          <p id="myInfo">Since I was a kid I have always dreamt about working with computers.
            Passionate about everything I do and attentive to little details, so much that is annoying.
            Imaginary squirrels will attack me and I'm in constant war with my cat over the keyboard.<br />
            Would like to be employed by a company that will help me grow in within the industry.<br />
            In search of new knowledge and experiences.
            
          </p>
        </div>
      </div>
    )
  };