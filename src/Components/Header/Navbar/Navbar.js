import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "../Navbar/Navbar.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarInfos: [
        { id: 1, value: "صفحه اصلی" },
        { id: 2, value: "تماس با ما " },
        { id: 3, value: "سوالات متداول" },
        { id: 4, value: "درباره ما" },
      ],
      isClicked: false,
    };
  }
  showHamburgerHandler() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }
  endHamburgerHandler() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }
  render() {
    return (
      <nav>
        <div className="navbarMainContainer">
          <div className="hamburIconParent">
            <GiHamburgerMenu
              className="hamburIcon"
              onClick={this.showHamburgerHandler.bind(this)}/>
          </div>
          <ul className={`navbarList ${this.state.isClicked ? "navbarListShow" : ""}`}>
            <div className= {`${this.state.isClicked ? "outIconParent" : "outIconParentNotShow"}`}>
              <IoMdClose onClick={this.endHamburgerHandler.bind(this)} />
            </div>
            {this.state.navbarInfos.map((item) => {
              return (
                <li key={item.id}>
                  <a href="/#/">{item.value}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
