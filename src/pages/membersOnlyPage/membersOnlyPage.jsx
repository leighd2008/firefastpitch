import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Card, CardTitle } from "reactstrap";

import "./membersOnlyPage.scss";
import UploadFiles from "../../components/uploadFiles/uploadFiles";

const MembersOnlyPage = ({ title, teamname, index, teamData }) => {
  const teamDataArray = Object.entries(teamData);

  return(
    <div className="members-only">
      <h1>{`${teamname} Family Secret Stuff`}</h1>
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
              <th>Birth Certificate</th>
              <th>Report Card</th>
            </tr>
          </thead>
          <tbody>
            {teamDataArray[index][1].roster.map((player, i) => {
              let playerIndex = i
              return (
                <tr className="stripe-dark" key={i}>
                  <td>{`${player.jersey || ''}`}</td>
                  <td >{`${player.name || ''} ${player.last || ''}`}</td>
                  {player.birthCert ? 
                    (<td>{player.birthCert.match(/\.(jpeg|jpg|png)$/) ?
                      <img className='fileImage' src={player.birthCert} alt="birth certificate" /> :
                      <FontAwesomeIcon icon={faCheckCircle} />}
                    </td>) :
                    <td><UploadFiles title={title} playerIndex={playerIndex} category='birthCert'/></td> 
                  }
                  {player.reportCard ?
                    (<td>{player.reportCard.match(/\.(jpeg|jpg|png)$/) ?
                      <img className='fileImage' src={player.reportCard} alt="Report Card" /> :
                      <FontAwesomeIcon icon={faCheckCircle} />}
                    </td>) :
                    <td><UploadFiles title={title} playerIndex={playerIndex} category='reportCard' /></td>
                  }
                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(MembersOnlyPage);
