import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TryoutsPage from "./pages/tryoutspage/tryout";
import TrainingPage from "./pages/trainingpage/training";
import { Fire14UURLS, Fire12UURLS } from "../src/pages/teamPage/events";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

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

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
          <Route path="/Tryouts" component={TryoutsPage} />
          <Route path="/Training" component={TrainingPage} />
          <Route path="/AdminSignIn" component={SignInPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
