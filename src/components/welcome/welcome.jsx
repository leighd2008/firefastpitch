import React from "react";

import "./welcome.scss";

const Welcome = () => (
  <div className="welcome">
    <div className="content">
      <h1 className="title">
        These TEAMS are on FIRE! Can you handle the heat?
      </h1>
    </div>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"})`
      }}
    />
  </div>
);

export default Welcome;
