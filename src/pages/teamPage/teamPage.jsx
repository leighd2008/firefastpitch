import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamEvents from "../../components/teamEvents/teamEvents";
import Banner from "../../components/banner/banner";
import { selectTeamData } from "../../redux/team/team.selectors";

const TeamPage = ({ teamname, eventurls, teamData }) => {
  const index = teamData.findIndex(teamData => teamData.teamName === teamname);
  const location = `${teamData[index].location}`;
  const eventboard = teamData[index].eventUrls;
  const images = require.context("../../assets", true);
  let imgsrc = images(`./${teamData[index].teamPic}`);
  const calendarLink = `${teamData[index].calendarLink}`;

  return (
    <div className="App">
      <Banner
        backgroundImage={imgsrc}
        teamName={teamname}
        location={location}
      />
      {eventboard === true ? (
        <div>
          <TeamEvents
            eventUrls={eventurls}
            teamname={teamname}
            calendarLink={calendarLink}
          />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
});

export default connect(mapStateToProps)(TeamPage);
