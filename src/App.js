import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTeams } from "./redux/team/team.actions";

import WithSpinner from "./components/with-spinner/with-spinner";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import AdminPage from "./pages/adminpage/adminpage";
// import FanGearPage from "./pages/fangearpage/fangearpage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TryoutsPage from "./pages/tryoutspage/tryout";
import TrainingPage from "./pages/trainingpage/training";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";
import { Fire14UURLS, Fire12UURLS } from "../src/pages/teamPage/events";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapshotToMap
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const TeamPageWithSpinner = WithSpinner(TeamPage);

class App extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

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
    const { updateTeams } = this.props;
    const collectionRef = firestore.collection("teams");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const teamsMap = convertCollectionsSnapshotToMap(snapshot);
      updateTeams(teamsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/Fire14U"
            render={() => (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 14U"
                title="fire14U"
                eventurls={Fire14UURLS}
              />
            )}
          />
          <Route
            path="/Fire12U"
            render={() => (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 12U"
                title="fire12U"
                eventurls={Fire12UURLS}
              />
            )}
          />
          <Route path="/Tryouts" component={TryoutsPage} />
          <Route path="/Training" component={TrainingPage} />
          <Route path="/Adminpage" component={AdminPage} />
          {/* <Route path="/FanGear" component={FanGearPage} /> */}
          <Route
            exact
            path="/AdminSignIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/Adminpage" />
              ) : (
                <SignInPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateTeams: teamsMap => dispatch(updateTeams(teamsMap))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
