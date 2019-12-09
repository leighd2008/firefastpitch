import React from "react";

import Welcome from "../../components/welcome/welcome";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <Welcome />
    <Celebrate />
    <Teams />
  </div>
);

export default HomePage;
