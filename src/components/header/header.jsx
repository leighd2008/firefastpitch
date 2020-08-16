import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import TeamMenu from "../teamMenu/teamMenu";
import Corona from "../corona/corona";
import OHSAArules from "../OHSAArules/OHSAArules";
import Fangear from "../fangear/fangear";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { closeTeamDropdown } from "../../redux/teamMenu/teamMenu.actions";

import logo from "../../assets/fireBanner.jpg";

import "./header.scss";

const Header = ({ currentUser, closeTeamDropdown }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <img src={logo} alt="logo" className="logo" />
    </NavLink>
    <div className="options">
      <NavLink
        className="option"
        exact
        to="/"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h3>Home</h3>
      </NavLink>
      <NavLink
        className="option"
        to="/Tournaments"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h3>Tournaments</h3>
      </NavLink>
      <NavLink
        className="option"
        to="/Tryouts"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h3>Tryouts</h3>
      </NavLink>
      <NavLink
        className="option"
        exact
        to="/Training"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h3>Training</h3>
      </NavLink>
      <TeamMenu />
      {currentUser ? (
        <NavLink className="option" to="/Adminpage" onClick={closeTeamDropdown}>
          <h3>Admin</h3>
        </NavLink>
      ) : (
        <NavLink
          className="option"
          to="/AdminSignIn"
          onClick={closeTeamDropdown}
        >
          <h3>Admin</h3>
        </NavLink>
      )}
      {currentUser ? (
        <NavLink
          className="option"
          to="/"
          onClick={(event) => {
            auth.signOut();
            closeTeamDropdown();
          }}
        >
          <h3>Sign out</h3>
        </NavLink>
      ) : null}
    </div>
    <Corona />
    <Fangear />
    <OHSAArules/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  closeTeamDropdown: () => dispatch(closeTeamDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
