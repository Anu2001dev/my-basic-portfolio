import React, { Component } from "react";
import { ReactComponents as Anime } from "../images/anime.svg";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="main-container">
        <Anime />
        <div className="intro">
          <span className="main-text">Hi! I am Anupama Dissanayake</span>
          <br />
          <span className="sub-text">
            I am a programmer and a web developerer
            <br /> I have experience in javascript, html, css while expertising
            in python
          </span>
          <button>
            <a href="/projects">View my projects</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Intro;
