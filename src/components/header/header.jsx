import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import TeamMenu from "../teamMenu/teamMenu";
// import Modal from "../Modal/Modal";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { closeTeamDropdown } from "../../redux/teamMenu/teamMenu.actions";

import { ReactComponent as Logo } from "../../assets/Fire_CO-OP_banner.svg";

import "./header.scss";

const Header = ({
  currentUser,
  closeTeamDropdown,
  // isShowing,
  // openModalHandler,
  // closeModalHandler,
}) => (
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
    {/* <div>
      {isShowing ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button className="open-modal-btn" onClick={openModalHandler}>
        Open Modal
      </button>
      <Modal className="modal" show={isShowing} close={closeModalHandler}>
        Maybe aircrafts fly very high because they don't want to be seen in
        plane sight?
      </Modal>
    </div> */}
    <div>
      <h1 className="fangear">
        Get your
        <a
          href="http://sideline.bsnsports.com/schools/ohio/leavittsburg/fire-fastpitch-softball
"
          rel="noopener noreferrer"
          target="_blank"
        >
          FANGEAR
        </a>
        or
        <a
          href="https://firefastpitchsoftball.itemorder.com/sale"
          rel="noopener noreferrer"
          target="_blank"
        >
          GLITTER FANGEAR
        </a>
        here!
      </h1>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  closeTeamDropdown: () => dispatch(closeTeamDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
