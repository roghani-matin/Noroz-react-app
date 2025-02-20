import React, { Component } from "react";
import "../HeroSection/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="heroMainContainer">
        <div className="heroMainContent">
          <div className="heroBackImage">
            <img src="Images/HeaderImages/haftsin.png" alt="" />
          </div>
          <div className="heroTextInfos">
            <h1>جشنواره فروش نوروزی ژاکت</h1>
            <p> بیش از ۱۰۰ کالای تخفیف‌خورده از ۱ تا ۱۳ فروردین</p>
            <a href="/#/">
              <span className="scrollButtom"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
