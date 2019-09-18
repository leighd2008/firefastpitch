import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import Teams from "../teams/teams";

import { ReactComponent as Logo } from "../../assets/FireLogo.svg";

import "./header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink className="option" exact to="/" activeClassName="selected">
        <h2>Home</h2>
      </NavLink>
      <NavLink className="option" to="/Tryouts" activeClassName="selected">
        <h2>Tryouts</h2>
      </NavLink>
      <NavLink
        className="option"
        exact
        to="/Training"
        activeClassName="selected"
      >
        <h2>Training</h2>
      </NavLink>
      <Teams />
      {currentUser ? (
        <NavLink className="option" to="/Adminpage">
          <h2>Admin</h2>
        </NavLink>
      ) : (
        <NavLink className="option" to="/AdminSignIn">
          <h2>Admin</h2>
        </NavLink>
      )}
      {currentUser ? (
        <NavLink className="option" to="/" onClick={() => auth.signOut()}>
          <h2>Sign out</h2>
        </NavLink>
      ) : null}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
