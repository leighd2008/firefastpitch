import React from "react";

import Recruiting from "../../components/recruiting/recruiting";
// import Welcome from "../../components/welcome/welcome";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <Recruiting />
    <Teams />
    {/* <Welcome /> */}
    <Celebrate />
  </div>
);

export default HomePage;
