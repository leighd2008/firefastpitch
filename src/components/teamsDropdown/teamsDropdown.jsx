import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";
import { Fire14UURLS, Fire12UURLS } from "../../pages/teamPage/events";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink
        exact
        to="/Fire14U"
        activeClassName="selected"
        teamname={"Fire 14U"}
        eventurls={Fire14UURLS}
      >
        <h2>Fire 14U</h2>
      </NavLink>
      <NavLink
        exact
        to="/Fire12U"
        activeClassName="selected"
        teamname={"Fire 12U"}
        eventurls={Fire12UURLS}
      >
        <h2>Fire 12U</h2>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
