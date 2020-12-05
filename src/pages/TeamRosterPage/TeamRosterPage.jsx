import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import BirthCertificate from '../../components/birthCertificate/birthCertificate';
import {
  toggleBCModal,
  openBCModalHandler,
  closeBCModalHandler,
  openRCModalHandler,
  closeRCModalHandler,
} from "../../redux/admin/admin.actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Card, CardTitle } from "reactstrap";
import './TeamRosterPage.scss';

// class TeamRoster extends Component { 
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false,
//       isOpen: false
//     };
//   }

//   viewFile = (playerIndex, index, teamDataArray) => {
//     alert(teamDataArray[index][1].roster[playerIndex].birthCert)
//   }

//   render() {

const TeamRoster = ({ index, teamData, toggleBCModal, bcShowing }) => {

    const teamDataArray = Object.entries(teamData);
    
    
  return (
      <div>
      <Card
        className="ma0 roster"
        style={{
          backgroundColor: "#rgb(194, 198, 202)",
          borderColor: "red",
          borderWidth: "4px",
          minWidth: "60vw",
          maxHeight: "80vh"
        }}
      >
        <CardTitle tag="h1">
          {`Team Roster: ${teamDataArray[index][1].title} Division`}
        </CardTitle>
        <table className="f6 w-100 mw8 center pa4 ma2">
          <thead>
            <tr >
              <th>Birth Certificate</th>
              <th>Report Card</th>
              <th>Name</th>
              <th>Jersey Number</th>
              <th>DOB</th>
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
              let playerIndex = i
                return (
                  <tr className="stripe-dark" key={i}>
                    {player.birthCert ?
                      (
                          <td onClick={toggleBCModal}>
                            <img className='fileImage'
                              src={player.birthCert}
                              alt="birth certificate"
                              />
                          </td>
                        ) :
                      <td>Not On File</td>
                    }
                    {player.reportCard ?
                      (<td>
                        <img className='fileImage' src={player.reportCard} alt="Report Card" />
                      </td>) :
                      <td>Not on File</td>
                    }
                    <td >{`${player.name || ''} ${player.last || ''}`}</td>
                    <td>{`${player.jersey || ''}`}</td>
                    <td>{player.DOB}</td>
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
      <BirthCertificate />
    </div>
    );
  }

const mapStateToProps = state => ({
  teamData: selectTeamData(state),
  bcShowing: state.admin.bcShowing,
});


// const mapStateToProps = createStructuredSelector({
//   teamData: selectTeamData,
// })

const mapDispatchToProps = (dispatch) => ({
  toggleBCModal: () => dispatch(toggleBCModal()),
  openBCModalHandler: () => dispatch(openBCModalHandler()),
  closeBCModalHandler: () => dispatch(closeBCModalHandler()),
  openRCModalHandler: () => dispatch(openRCModalHandler()),
  closeRCModalHandler: () => dispatch(closeRCModalHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamRoster);
