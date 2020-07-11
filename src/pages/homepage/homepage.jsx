import React from "react";

import Recruiting from "../../components/recruiting/recruiting";
import Welcome from "../../components/welcome/welcome";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <h2>Due to technical difficulties, Tryout preregistration forms filled out before July 11th were not saved. If you filled out a form prior to Jully 11th please fill out the form again.</h2>
    <Recruiting />
    <Welcome />
    <Celebrate />
    <Teams />
  </div>
);

export default HomePage;
