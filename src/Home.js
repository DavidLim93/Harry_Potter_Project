import React from "react";
import logo from "./img/logo.png"

function Home() {
  return (
  <div>
  <h2 className="h2">Welcome to the page where you can see the different spells used in the world of magic!</h2>
  <img className="logo" src={logo}></img>
  </div>)
}

export default Home;