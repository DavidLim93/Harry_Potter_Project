import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const linkStyles = {
        display: "inline-block",
        width: "80px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

return (
    <div className="navbar">
        <NavLink to="/" exact style={linkStyles}>Home</NavLink>
        <NavLink to="/spellscontainer" exact style={linkStyles}>Spells</NavLink>
        <NavLink to="/addspell" exact style={linkStyles}>New Spell</NavLink>
    </div>
)
}

export default Navbar;