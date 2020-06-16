import React, { Component } from "react";
import ProfilePic from "../images/profile pic.svg";
// import { ReactComponent as Chakra } from "../svgs/chakra.svg";

class Navitem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a href="/" className="nav-link">
          {this.contentOrText()}
        </a>
      </li>
    );
  }
  contentOrText() {
    const { text, children } = this.props;
    return text ? <span className="nav-text">{text}</span> : children;
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Navitem>
            <div className="title-container">
              <img src={ProfilePic} alt="profile pic" id="prof-pic" />
              <span className="title">Anupama Dissanayake</span>
            </div>
          </Navitem>
          <Navitem text="Home" />
          <Navitem text="My Projects" />
          <Navitem text="Contact Me" />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
