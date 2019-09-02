import React from "react";
import { NavLink } from "react-router-dom";

import Teams from "../teams/teams";

import { ReactComponent as Logo } from "../../assets/FireLogo.svg";

import "./header.scss";

const Header = () => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink className="option" exact to="/" activeClassName="selected">
        <h1>Home</h1>
      </NavLink>
      <NavLink className="option" to="/Tryouts" activeClassName="selected">
        <h1>Tryouts</h1>
      </NavLink>
      <NavLink
        className="option"
        exact
        to="/Training"
        activeClassName="selected"
      >
        <h1>Training</h1>
      </NavLink>
      <Teams />
    </div>
  </div>
);

export default Header;
