import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink exact to="/Fire18U" activeClassName="selected">
        <h4>Fire 18U</h4>
      <NavLink exact to="/Fire16U" activeClassName="selected">
        <h4>Fire 16U</h4>
      </NavLink><NavLink exact to="/Fire07" activeClassName="selected">
        <h4>Fire 07</h4>
        </NavLink>
      </NavLink><NavLink exact to="/Fire08" activeClassName="selected">
        <h4>Fire 08</h4>
      </NavLink>
      <NavLink exact to="/Fire12U" activeClassName="selected">
        <h4>Fire 12U</h4>
      </NavLink>
      <NavLink exact to="/Fire10U" activeClassName="selected">
        <h4>Fire 10U</h4>
      </NavLink>
      <NavLink exact to="/Fire8U" activeClassName="selected">
        <h4>Fire 8u</h4>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
