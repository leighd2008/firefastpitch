import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tryouts from "./components/tryouts/tryout";
import Training from "./components/training/training";
// import FanWear from './components/fan_wear/fan_wear';

function App() {
  return (
    <div>
      <Header />
      {/* <div className="fanWearBanner" style={{ textAlign: "center" }}>
        <a
          href="https://www.bsnteamsports.com/shop/FF2019?utm_source=school&utm_medium=banner&utm_campaign=store_shop&utm_content=products"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 style={{ color: "red" }}>
            Click to Shop the 2019 FIRE FASTPITCH GEAR Store!
          </h1>
        </a>
        <h2>Hurry, shops closes 08/28/2019.</h2>
      </div> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Teams" component={TeamPage} />
        <Route path="/Tryouts" component={Tryouts} />
        <Route path="/Training" component={Training} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
