import React from 'react';
import { connect } from "react-redux";
import { firestore } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors";
import { selectTeamData } from "../../redux/team/team.selectors";

import { Card, CardTitle } from "reactstrap";

class Registered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.updateRoster = this.updateRoster.bind(this);

  }

  updateRoster = (players, teamdiv, teamId) => {
    let teamMembers = this.props.teamData[teamdiv].roster;
    let currentRoster = []

    this.props.teamData[teamdiv].roster.map((member, i) => {
      return currentRoster.push(`${member.name} ${member.last}`)
    })

    players.map((player, i) => {
      
      if (player.onTeam && teamdiv === `Fire${player.year || player.division}`) {
        if (!currentRoster.includes(`${player.name} ${player.last}`)) {
          player.jersey = '';
          teamMembers.push(player)
        }
      } else {
        if (currentRoster.includes(`${player.name} ${player.last}`)) {
          teamMembers = teamMembers.filter(teamMembers => teamMembers.name!==player.name && teamMembers.last!==player.last)
        }
      }
      return teamMembers;
      }
    )
    firestore.collection("teams").doc(teamId).update({
      roster: teamMembers,
    })
  }

  checkboxHandler = (player, id) => (e) => {
    let division = player.division
    let year = player.year
    let players = this.props.registrationData[division]['players']
    
    if (e.target.checked) {
      players[id].onTeam = "yes";
    } else {
      players[id].onTeam = "";
    }
    
    const divisionId = this.props.registrationData[division].id;
    const teamdiv = `Fire${year || division}`
    const teamId = this.props.teamData[teamdiv].id
    firestore.collection("preregistration2021").doc(divisionId).update({
      players: players,
    })
    this.updateRoster(players, teamdiv, teamId);
  }

  render() {
    const { registrationData, index } = this.props;
    const registrationDataArray = Object.entries(registrationData);
    registrationDataArray[index][1].players.sort((a, b) => new Date(b.DOB) - new Date(a.DOB))

    return (
      <Card
        className="ma0 registered"
        style={{
          backgroundColor: "#rgb(194, 198, 202)",
          borderColor: "red",
          borderWidth: "4px",
          minWidth: "60vw"
        }}
      >
        <CardTitle tag="h1">
          {`Registered Players: ${registrationDataArray[index][1].title} Division`}
        </CardTitle>
        <table className="f6 w-100 mw8 center pa4 ma2">
          <thead>
            <tr >
              <th>Tryout Number</th>
              <th>Attended</th>
              <th>Session</th>
              <th>Name</th>
              <th>Previous Experience</th>
              <th>DOB</th>
              <th>Positions</th>
              <th>Bats</th>
              <th>Throws</th>
              <th>Coaching Interest</th>
              <th>On Team</th>
            </tr>
          </thead>
          <tbody>
            {registrationDataArray[index][1].players.map((player, i) => {
              return (
                <tr className="stripe-dark"  key={i}>
                  <td>{`${player.tryout || ''}`}</td>
                  <td>{`${player.attended || ''}`}</td>
                  <td>{`${player.session || ''}`}</td>
                  <td onClick={(e) => alert(`${player.name} ${player.last} email: ${player.email} \n ${player.parent1} \n phone: ${player.parent1phone} \n email: ${player.parent1email || ''} \n ${player.parent2 || ""}\n phone: ${player.parent2phone || ""} \n email: ${player.parent2email || ""} `)}>{`${player.name || ''} ${player.last || ''}`}</td>

                  <td>{player.previous}</td>
                  <td>{player.DOB}</td>
                  <td>{player.positions}</td>
                  <td>{player.bats}</td>
                  <td>{player.throws}</td>
                  <td>{player.coaching}</td>
                  <td><input type="checkbox" division={player.division} id={`${i}`} defaultChecked={player.onTeam} onChange= {this.checkboxHandler(player, i)}/></td>
                  {/* <td>{player.onTeam}</td> */}
                </tr>

              );
            })}
          </tbody>
        </table>
      </Card>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData,
  teamData: selectTeamData
})

export default connect(mapStateToProps)(Registered);

