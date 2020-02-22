import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamEvents from "../../components/teamEvents/teamEvents";
import Banner from "../../components/banner/banner";
import { selectTeamData } from "../../redux/team/team.selectors";

import "./teamPage.scss";

const TeamPage = ({ eventurls, teamname, title, teamData }) => {
  const team = teamData[title];
  const teamName = `${team.teamName}`;
  const location = `${team.location}`;
  const eventboard = team.eventUrls;
  const images = require.context("../../assets", true);
  let imgsrc = images(`./${team.teamPic}`);
  const calendarLink = `${team.calendarLink}`;

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Banner
        backgroundImage={imgsrc}
        teamName={teamName}
        location={location}
      />
      <p className="refresh">
        Please
        <button type="button" onClick={refreshPage}>
          <span>Refresh</span>
        </button>
        page if the events listed are for the wrong team.
      </p>
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
