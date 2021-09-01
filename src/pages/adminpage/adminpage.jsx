import React from "react";
import { NavLink } from "react-router-dom";
import { selectTeamData } from "../../redux/team/team.selectors";

import { connect } from "react-redux";
import SignInPage from "../sign-inpage/sign-inpage";
import HomePage from "../homepage/homepage";

import "./adminpage.scss";

const AdminPage = ({ currentUser, teamData }) => {
  let teamDataArray = Object.entries(teamData);
  teamDataArray.sort((a, b) => {
    let aa = a[1].teamNum;
    let bb = b[1].teamNum;
    return aa - bb;
  });
  
  
  return (
  currentUser ?
    currentUser.role === "admin" | currentUser.role === "coach" ?
      (
        <div className="adminPage">
          <div className='adminLinks'>
            <div className="fields">
              <NavLink exact to="/Field1" activeClassName="selected" title="Field 1">
                <h4>Field 1 Scheduling</h4>
              </NavLink>
              <NavLink exact to="/Field2" activeClassName="selected" title="Field 2">
                <h4>Field 2 Scheduling</h4>
              </NavLink>
              <NavLink exact to="/Field3" activeClassName="selected" title="Field 3">
                <h4>Field 3 Scheduling</h4>
              </NavLink>
              <NavLink exact to="/Registered" activeClassName="selected" title="Registered">
                <h4>Preregistered Players</h4>
              </NavLink>
              <NavLink exact to="/18URoster" activeClassName="selected" title="18URoster">
                <h4>18U Team Roster</h4>
              </NavLink>
              <NavLink exact to="/16URoster" activeClassName="selected" title="16URoster">
                <h4>16U Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2007Roster" activeClassName="selected" title="2007Roster">
                <h4>2007 Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2008Roster" activeClassName="selected" title="2008Roster">
                <h4>2008 Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2009Roster" activeClassName="selected" title="2009Roster">
                <h4>2009 Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2010Roster" activeClassName="selected" title="2010Roster">
                <h4>2010 Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2011Roster" activeClassName="selected" title="2011Roster">
                <h4>2011 Team Roster</h4>
              </NavLink>
              <NavLink exact to="/2012Roster" activeClassName="selected" title="2012Roster">
                <h4>2012 Team Roster</h4>
              </NavLink>
            </div>
          </div>
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
                        <td>{`${team[1].headCoach}`}</td>
                        <td>{`${team[1].coachPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`}</td>
                        <td>{`${team[1].teamEmail}`}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td>DOC</td>
                    <td>Demetra "Petey" Noble</td>
                    <td>(330) 646-2493</td>
                    <td>demi711petey@aol.com</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      ) : (
          // alert('The account you entered is not an Admin Account')
          < HomePage />
      )
    : (
    <SignInPage />
      )
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  teamData: selectTeamData(state),
});

export default connect(mapStateToProps)(AdminPage);
