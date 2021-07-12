import React from "react";

// import Tournament14U from "../../components/tournament14U/tournament14U";
import Recruiting from "../../components/recruiting/recruiting";
import TourneyWins from "../../components/tourneyWins/tourneyWins";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <TourneyWins />
    {/* <Tournament14U /> */}
    <Recruiting />
    <Teams />
    <Celebrate />
  </div>
);

export default HomePage;
