import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer/Offer";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Offer/>
      </>
    );
  }
}
