import React from "react";

import NewDOC from "../../components/newdoc/newdoc";
import Recruiting from "../../components/recruiting/recruiting";
import TourneyWins from "../../components/tourneyWins/tourneyWins";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <NewDOC />
    <TourneyWins />
    <Recruiting />
    <Teams />
    <Celebrate />
  </div>
);

export default HomePage;
