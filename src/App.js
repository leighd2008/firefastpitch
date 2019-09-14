import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tryouts from "./pages/tryoutspage/tryout";
import Training from "./pages/trainingpage/training";
import { Fire14UURLS, Fire12UURLS } from "../src/pages/teamPage/events";

const initialState = {
  // homeImage: homeImage,
  // backgroundImage: homeImage,
  teamName: "",
  route: "home",
  index: 0
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onRouteChange = (route, team, eventUrls) => {
    if (route === "home") {
      this.setState(initialState);
    }
    this.setState({
      route: route,
      // homeImage: homeImage,
      teamName: team,
      eventUrls: eventUrls
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/Fire14U"
            component={() => (
              <TeamPage teamname="Fire 14U" eventurls={Fire14UURLS} />
            )}
          />
          <Route
            path="/Fire12U"
            component={() => (
              <TeamPage teamname="Fire 12U" eventurls={Fire12UURLS} />
            )}
          />
          <Route path="/Tryouts" component={Tryouts} />
          <Route path="/Training" component={Training} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
