import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import TeamMenu from "../teamMenu/teamMenu";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { closeTeamDropdown } from "../../redux/teamMenu/teamMenu.actions";

// import CartIcon from "../cart-icon/cart-icon";
// import CartDropdown from "../cart-dropdown/cart-dropdown";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/FireLogo.svg";

import "./header.scss";

const Header = ({ currentUser, closeTeamDropdown, hidden }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink
        className="option"
        exact
        to="/"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h2>Home</h2>
      </NavLink>
      {/* <NavLink
        className="option"
        to="/FanGear"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h2>FanGear</h2>
      </NavLink> */}
      <NavLink
        className="option"
        to="/Tryouts"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h2>Tryouts</h2>
      </NavLink>
      <NavLink
        className="option"
        exact
        to="/Training"
        activeClassName="selected"
        onClick={closeTeamDropdown}
      >
        <h2>Training</h2>
      </NavLink>
      <TeamMenu />
      {currentUser ? (
        <NavLink className="option" to="/Adminpage" onClick={closeTeamDropdown}>
          <h2>Admin</h2>
        </NavLink>
      ) : (
        <NavLink
          className="option"
          to="/AdminSignIn"
          onClick={closeTeamDropdown}
        >
          <h2>Admin</h2>
        </NavLink>
      )}
      {currentUser ? (
        <NavLink
          className="option"
          to="/"
          onClick={event => {
            auth.signOut();
            closeTeamDropdown();
          }}
        >
          <h2>Sign out</h2>
        </NavLink>
      ) : null}
      {/* <CartIcon /> */}
    </div>
    {/* {hidden ? null : <CartDropdown />} */}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  closeTeamDropdown: () => dispatch(closeTeamDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
