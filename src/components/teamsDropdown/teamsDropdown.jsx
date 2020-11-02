import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink exact to="/Fire16U" activeClassName="selected">
        <h4>Fire 16U</h4>
      </NavLink><NavLink exact to="/Fire14U" activeClassName="selected">
        <h4>Fire 07</h4>
      </NavLink>
      <NavLink exact to="/Fire12U" activeClassName="selected">
        <h4>Fire 12U</h4>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
