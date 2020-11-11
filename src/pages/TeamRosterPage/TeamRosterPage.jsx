import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";

import { Card, CardTitle } from "reactstrap";

class TeamRoster extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    const { index, teamData } = this.props;
    const teamDataArray = Object.entries(teamData);
    
    
    return (
      <Card
        className="ma0 roster"
        style={{
          backgroundColor: "#rgb(194, 198, 202)",
          borderColor: "red",
          borderWidth: "4px",
          minWidth: "60vw"
        }}
      >
        <CardTitle tag="h1">
          {`Team Roster: ${teamDataArray[index][1].title} Division`}
        </CardTitle>
        <table className="f6 w-100 mw8 center pa4 ma2">
          <thead>
            <tr >
              <th>Jersey Number</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Player Email</th>
              <th>Parent 1</th>
              <th>Parent 1 Email</th>
              <th>Parent 1 Phone</th>
              <th>Parent 2</th>
              <th>Parent 2 Email</th>
              <th>Parent 2 Phone</th>
            </tr>
          </thead>
          <tbody>
            {teamDataArray[index][1].roster.map((player, i) => {
                return (
                  <tr className="stripe-dark" key={i}>
                    <td>{`${player.jersey || ''}`}</td>
                    <td >{`${player.name || ''} ${player.last || ''}`}</td>
                    <td>{player.DOB}</td>
                    <td>{`${player.email || ''}`}</td>
                    <td>{player.parent1}</td>
                    <td>{player.parent1email}</td>
                    <td>{player.parent1phone}</td>
                    <td>{player.parent2 || ''}</td>
                    <td>{player.parent2email || ''}</td>
                    <td>{player.parent2phone || ''}</td>
                  </tr>
                )
            }
            )}
          </tbody>
        </table>
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData 
})

export default connect(mapStateToProps)(TeamRoster);
