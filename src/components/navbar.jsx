import React, { Component } from "react";
import ProfilePic from "../images/profile pic.svg";
import { Link } from "react-router-dom";
// import { ReactComponent as Chakra } from "../svgs/chakra.svg";

class Navitem extends Component {
  render() {
    const { href, text, children } = this.props;
    const style = {
      fontWeight: "800px",
      color: "black",
    };
    return (
      <li className={text ? "nav-item linker" : "nav-item"}>
        <Link to={href} className="nav-link" activeClassName="active">
          {this.contentOrText(text, children)}
        </Link>
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
          <Navitem text="about" href="/about" />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
