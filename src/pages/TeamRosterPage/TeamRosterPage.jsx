import React, { useState } from 'react';
import { connect } from 'react-redux';
import CsvDownload from 'react-json-to-csv'

import { selectTeamData } from "../../redux/team/team.selectors";
import {
  toggleBCModal,
  toggleRCModal,
} from "../../redux/admin/admin.actions";
import Modal from "../../components/Modal/Modal";

import { Card, CardTitle } from "reactstrap";
import './TeamRosterPage.scss';

const TeamRoster = ({ index, teamData, toggleBCModal, bcShowing, /*toggleRCModal, rcShowing*/ }) => {

  const [playerIndex, setplayerIndex] = useState("");

  const handleBCClick = (e, playerIndex) => {
    setplayerIndex(playerIndex)
    toggleBCModal()
  }

  
  const teamDataArray = Object.entries(teamData);

  //copy team roster
  const team_roster = teamDataArray[index][1].roster.map(e => Object.assign({}, e))
  team_roster.forEach(elm => elm.positions = elm.positions.toString())
  team_roster.forEach(elm => delete elm.birthCert)

  
  console.log(teamDataArray)
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
              {/* <th>1st Qtr Report Card</th>
              <th>2cnd Qtr Report Card</th>
              <th>3rd Qtr Report Card</th>
              <th>4th Qtr Report Card</th> */}
              <th>Name</th>
              <th>Jersey Number</th>
              <th>DOB</th>
              <th>Parent 1</th>
              <th>Parent 1 Email</th>
              <th>Parent 1 Phone</th>
              <th className='address'>Address</th>
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
                        <td onClick={e => handleBCClick(e, playerIndex)}>
                        <img className='fileImage'
                          src={player.birthCert}
                          alt="birth certificate"
                          />
                        </td>
                       :
                      <td>Not On File</td>
                    }
                    {/* {player.reportCard1 ?
                      (<td onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard1} alt="Report Card" />
                      </td>) :
                      <td>Not on File</td>
                    }
                    {player.reportCard2 ?
                      (<td onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard2} alt="Report Card" />
                      </td>) :
                      <td>Not on File</td>
                    }
                    {player.reportCard3 ?
                      (<td onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard3} alt="Report Card" />
                      </td>) :
                      <td>Not on File</td>
                    }
                    {player.reportCard4 ?
                      (<td onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard4} alt="Report Card" />
                      </td>) :
                      <td>Not on File</td>
                    } */}
                    <td >{`${player.name || ''} ${player.last || ''}`}</td>
                    <td>{`${player.jersey || ''}`}</td>
                    <td>{player.DOB}</td>
                    <td>{player.parent1}</td>
                    <td>{player.parent1email}</td>
                    <td className='phone'>{player.parent1phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</td>
                    {player.address ?
                      <td className='street'>{`${player.address}
                      ${player.city}, ${player.state}
                      ${player.zipcode} `}</td> :
                      <td>Not on File</td>
                    }
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
      <CsvDownload data={team_roster} />
      <Modal className="bc modal" show={bcShowing} close={toggleBCModal}>
        {playerIndex || playerIndex === 0 ?
          <img className='fileImage'
          src={teamDataArray[index][1].roster[playerIndex].birthCert}
          alt="birth certificate"
          />  : null}
      </Modal>
      {/* <Modal className="bc modal" show={rcShowing} close={toggleRCModal}>
        {playerIndex || playerIndex === 0 ?
          <img className='fileImage'
            src={teamDataArray[index][1].roster[playerIndex].reportCard1}
            alt="report card"
          /> : null}
      </Modal> */}
    </div>
    );
  }

const mapStateToProps = state => ({
  teamData: selectTeamData(state),
  bcShowing: state.admin.bcShowing,
  rcShowing: state.admin.rcShowing,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBCModal: () => dispatch(toggleBCModal()),
  toggleRCModal: () => dispatch(toggleRCModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamRoster);
