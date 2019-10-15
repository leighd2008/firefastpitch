import React from "react";
import { connect } from "react-redux";

import { toggleTeamsHidden } from "../../redux/teamMenu/teamMenu.actions";
import TeamsDropdown from "../teamsDropdown/teamsDropdown";

import "./teamMenu.scss";

const TeamMenu = ({ toggleTeamsHidden, hidden }) => (
  <div className="teams" onClick={toggleTeamsHidden}>
    <h2>TEAMS</h2>
    {hidden ? null : <TeamsDropdown />}
  </div>
);

const mapStateToProps = ({ teamMenu: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleTeamsHidden: () => dispatch(toggleTeamsHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMenu);
