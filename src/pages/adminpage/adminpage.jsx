import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import SignInPage from "../sign-inpage/sign-inpage";


import "./adminpage.scss";

const AdminPage = ({ currentUser }) =>
  currentUser ? (
    <div className="adminPage">
      <div className="fields">
        <NavLink exact to="/Field1" activeClassName="selected" title="Field 1">
          <h4>Field 1 Scheduling</h4>
        </NavLink>
        <NavLink exact to="/Field2" activeClassName="selected" title="Field 2">
          <h4>Field 2 Scheduling</h4>
        </NavLink>
        <NavLink exact to="/Field3" activeClassName="selected" title="Field 3">
          <h4>Field 3 Scheduling</h4>
        </NavLink>
        <NavLink exact to="/Registered" activeClassName="selected" title="Registered">
          <h4>Preregistered Players</h4>
        </NavLink>
        <NavLink exact to="/10URoster" activeClassName="selected" title="10URoster">
          <h4>10U Team Roster</h4>
        </NavLink>
        <NavLink exact to="/12URoster" activeClassName="selected" title="12URoster">
          <h4>12U Team Roster</h4>
        </NavLink>
        <NavLink exact to="/14URoster" activeClassName="selected" title="14URoster">
          <h4>14U Team Roster</h4>
        </NavLink>
        <NavLink exact to="/16URoster" activeClassName="selected" title="16URoster">
          <h4>16U Team Roster</h4>
        </NavLink>
      </div>
    </div>
  ) : (
    <SignInPage />
  );

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AdminPage);
