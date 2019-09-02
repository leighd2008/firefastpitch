import React from "react";

import TeamsDropdown from "../teamsDropdown/teamsDropdown";

import "./teams.scss";

class Teams extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTeamsHidden = this.toggleTeamsHidden.bind(this);
    this.state = {
      teamsOpen: true
    };
  }

  toggleTeamsHidden() {
    this.setState(prevState => ({
      teamsOpen: !this.state.teamsOpen
    }));
  }

  render() {
    return (
      <div className="teams" onClick={this.toggleTeamsHidden}>
        <h1>Teams</h1>
        {this.state.teamsOpen ? null : <TeamsDropdown />}
      </div>
    );
  }
}

export default Teams;
