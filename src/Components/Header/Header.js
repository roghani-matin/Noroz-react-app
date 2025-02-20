import React, { Component } from 'react'
import "../Header/Header.css"
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero'
import Happy from './HNY/Happy'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar/>
        <Hero/>
        <Happy/>
      </header>
    )
  }
}
