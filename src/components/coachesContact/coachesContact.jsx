import React from "react";
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { connect } from "react-redux";

import "./coachesContact.scss";

const CoachesContact = ({ teamData }) => {
  let teamDataArray = Object.entries(teamData);
  teamDataArray.sort((a, b) => {
    let aa = a[1].teamNum;
    let bb = b[1].teamNum;
    return aa - bb;
  });

  return (
    <div className='coachesContact'>
      <h1 className='admin-title'>Coach Contact Information</h1>
      <table className="f6 w-100 mw8 center pa4 ma2">
        <thead>
          <tr >
            <th>Team</th>
            <th>Coach</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teamDataArray.map((team, i) => {
            return (
              <tr key={i}>
                <td>{`${team[1].division}`}</td>
                <td className="coach">{`${team[1].headCoach}`}</td>
                <td>{`${team[1].coachPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`}</td>
                <td className="email">{`${team[1].teamEmail}`}</td>
              </tr>
            )
          })}
          <tr>
            <td>DOC</td>
            <td className="coach">Demetra "Petey" Noble</td>
            <td>(330) 646-2493</td>
            <td className="email">demi711petey@aol.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(CoachesContact);