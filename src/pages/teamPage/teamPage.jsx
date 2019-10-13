import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamEvents from "../../components/teamEvents/teamEvents";
import Banner from "../../components/banner/banner";
import { selectTeamData } from "../../redux/team/team.selectors";

const TeamPage = ({ teamname, title, eventurls, teamData }) => {
  const team = teamData[title];
  const location = `${team.location}`;
  const eventboard = team.eventUrls;
  const images = require.context("../../assets", true);
  let imgsrc = images(`./${team.teamPic}`);
  const calendarLink = `${team.calendarLink}`;

  return (
    <div className="App">
      <Banner
        backgroundImage={imgsrc}
        teamName={team.teamName}
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
