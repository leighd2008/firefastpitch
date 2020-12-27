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
        <div className="outer">
          <div className="inner">

            <table className="f6 w-100 mw8 center pa4 ma2 roster">
              <thead>
                <tr >
                  <th className="fix">Name</th>
                  <th>Jersey Number</th>
                  <th>Birth Certificate</th>
                  <th>1st Qtr Report Card</th>
                  {/* <th>2cnd Qtr Report Card</th>
                  <th>3rd Qtr Report Card</th>
                  <th>4th Qtr Report Card</th> */}
                </tr>
              </thead>
              <tbody>
                {teamDataArray[index][1].roster.map((player, i) => {
                  let playerIndex = i
                  return (
                    <tr className="stripe-dark" key={i}>
                      <th className="fix">{`${player.name || ''} ${player.last || ''}`}</th>
                      <th>{`${player.jersey || ''}`}</th>
                      {player.birthCert ? 
                        <td><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon> </td> :
                        <td><UploadFiles title={title} playerIndex={playerIndex} category='birthCert'/></td> 
                      }
                      {player.reportCard1 ?
                        <td><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></td> :
                        <td ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard1' /></td>
                      }
                      {/* {player.reportCard2 ?
                        <td><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></td> :
                        <td ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard2' /></td>
                      }
                      {player.reportCard3 ?
                        <td><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></td> :
                        <td ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard3' /></td>
                      }
                      {player.reportCard4 ?
                        <td><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></td> :
                        <td ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard4' /></td>
                      } */}
                    </tr>
                  )
                }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
      <span>Swipe/Scroll to the side to upload report cards</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(MembersOnlyPage);
