import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";

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
              {/* <th>Report Card</th> */}
            </tr>
          </thead>
          <tbody>
            {teamDataArray[index][1].roster.map((player, i) => {
              let index = i
              return (
                <tr className="stripe-dark" key={i}>
                  <td>{`${player.jersey || ''}`}</td>
                  <td >{`${player.name || ''} ${player.last || ''}`}</td>
                  {player.birthCert ? 
                    <img className='fileImage' src={player.birthCert} alt="birth certificate" /> :
                    <td><UploadFiles title={title} index={index} /></td> 
                  }
                  {/* <td><UploadFiles  /></td> */}
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