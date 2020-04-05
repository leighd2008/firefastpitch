import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTeams } from "./redux/team/team.actions";

import WithSpinner from "./components/with-spinner/with-spinner";

import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import AdminPage from "./pages/adminpage/adminpage";
// import FanGearPage from "./pages/fangearpage/fangearpage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TryoutsPage from "./pages/tryoutspage/tryout";
import TrainingPage from "./pages/trainingpage/training";
import TournamentPage from "./pages/TournamentPage/TournamentPage";

import Modal from "../src/components/Modal/Modal";

// import CheckoutPage from "./pages/checkoutPage/checkoutPage";
import { Fire14UURLS, Fire12UURLS } from "../src/pages/teamPage/events";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapshotToMap,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const TeamPageWithSpinner = WithSpinner(TeamPage);
const TournamentPageWithSpinner = WithSpinner(TournamentPage);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      isShowing: false,
    };
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    const { updateTeams } = this.props;
    const collectionRef = firestore.collection("teams");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const teamsMap = convertCollectionsSnapshotToMap(snapshot);
        updateTeams(teamsMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    const { loading, isShowing } = this.state;
    return (
      <div>
        <Header />
        <div className="recruiting">
          {isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop"></div>
          ) : null}
          <div className="open-modal" onClick={this.openModalHandler}>
            <h1 className="plain">Are you ready for the College Scouts?</h1>
            <h1 className="fancy">Click here for Tips!</h1>
          </div>
          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          >
            <div className="iframe-container">
              <iframe
                title="recruiting tips"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7soS5kzJw64"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Modal>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/Fire14U"
            render={() => (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 14U"
                title="Fire14U"
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
                title="Fire12U"
                eventurls={Fire12UURLS}
              />
            )}
          />
          <Route path="/Tryouts" component={TryoutsPage} />
          <Route path="/Training" component={TrainingPage} />
          <Route
            path="/Tournaments"
            render={() => <TournamentPageWithSpinner isLoading={loading} />}
          />
          <Route path="/Adminpage" component={AdminPage} />
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
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateTeams: (teamsMap) => dispatch(updateTeams(teamsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
