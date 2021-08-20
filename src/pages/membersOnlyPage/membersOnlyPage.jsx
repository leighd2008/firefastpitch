import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StickyTable, Row, Cell } from 'react-sticky-table';

import { Card, CardTitle } from "reactstrap";

import "./membersOnlyPage.scss";
import UploadFiles from "../../components/uploadFiles/uploadFiles";

const MembersOnlyPage = ({ title, teamname, index, teamData }) => {
  const teamDataArray = Object.entries(teamData);
  console.log(teamDataArray);

  return (
    <div className="members-only">
      <h1>{`${teamname} Family Secret Stuff`}</h1>
      <h2>{`Coach: ${teamDataArray[index][1].headCoach}`}</h2>
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
        <div className="table-container">
          <StickyTable >
            {/* <thead> */}
            <Row >
              <Cell>Name</Cell>
              <Cell>Jersey Number</Cell>
              <Cell>Birth Certificate</Cell>
              <Cell>1st Qtr Report Card</Cell>
              <Cell>2cnd Qtr Report Card</Cell>
              <Cell>3rd Qtr Report Card</Cell>
              <Cell>4th Qtr Report Card</Cell>
            </Row>
            {/* </thead>
            <tbody> */}
            {teamDataArray[index][1].roster.map((player, i) => {
              let playerIndex = i
              return (
                <Row className="stripe-dark" key={i}>
                  <Cell className="fix">{`${player.name || ''} ${player.last || ''}`}</Cell>
                  <Cell>{`${player.jersey || ''}`}</Cell>
                  {player.birthCert ?
                    <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon> </Cell> :
                    <Cell><UploadFiles title={title} playerIndex={playerIndex} category='birthCert' /></Cell>
                  }
                  {player.reportCard1 ?
                    <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></Cell> :
                    <Cell ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard1' /></Cell>
                  }
                  {player.reportCard2 ?
                    <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></Cell> :
                    <Cell ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard2' /></Cell>
                  }
                  {player.reportCard3 ?
                      <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></Cell> :
                      <Cell ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard3' /></Cell>
                    }
                  {player.reportCard4 ?
                      <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></Cell> :
                      <Cell ><UploadFiles title={title} playerIndex={playerIndex} category='reportCard4' /></Cell>
                    }
                </Row>
              )
            }
            )}
            {/* </tbody> */}
          </StickyTable>
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
