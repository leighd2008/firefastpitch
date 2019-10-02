import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink exact to="/Fire14U" activeClassName="selected">
        <h2>Fire 14U</h2>
      </NavLink>
      <NavLink exact to="/Fire12U" activeClassName="selected">
        <h2>Fire 12U</h2>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
