import React, { Component } from "react";
import ProfilePic from "../images/profile pic.svg";
// import { ReactComponent as Chakra } from "../svgs/chakra.svg";

class Navitem extends Component {
  render() {
    const { href, text, children } = this.props;
    return (
      <li className="nav-item">
        <a href={href} className="nav-link">
          {this.contentOrText(text, children)}
        </a>
      </li>
    );
  }
  contentOrText(text, children) {
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
          <Navitem text="Home" href="/" />
          <Navitem text="My Projects" href="/projects" />
          <Navitem text="Contact Me" href="/contact" />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
