import React from "react";

import "./welcome.scss";

const Welcome = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./12U_14U_teams.jpg`);
  return (
    <div className="welcome">
      <div className="content">
        <h1 className="title">
          These TEAMS are on FIRE! Can you handle the heat?
        </h1>
      </div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgsrc})`
        }}
      />
    </div>
  );
};

export default Welcome;
