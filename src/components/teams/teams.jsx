import React from "react";
import { connect } from "react-redux";

import { toggleTeamsHidden } from "../../redux/team/team.actions";
import TeamsDropdown from "../teamsDropdown/teamsDropdown";

import "./teams.scss";

const Teams = ({ toggleTeamsHidden, hidden }) => (
  <div className="teams" onClick={toggleTeamsHidden}>
    <h1>Teams</h1>
    {hidden ? null : <TeamsDropdown />}
  </div>
);

const mapStateToProps = ({ team: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleTeamsHidden: () => dispatch(toggleTeamsHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
