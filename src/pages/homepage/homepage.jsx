import React from "react";

import Recruiting from "../../components/recruiting/recruiting";
// import PumpkinSmash from "../../components/pumpkinSmash/pumpkinSmash";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    {/* <PumpkinSmash /> */}
    <Recruiting />
    <Teams />
    <Celebrate />
  </div>
);

export default HomePage;
