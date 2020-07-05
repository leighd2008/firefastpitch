import React from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTeams } from "./redux/team/team.actions";
import { updateFields } from "./redux/field/field.actions";

import WithSpinner from "./components/with-spinner/with-spinner";

import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import TeamPage from "./pages/teamPage/teamPage";
import SignInPage from "./pages/sign-inpage/sign-inpage";
import AdminPage from "./pages/adminpage/adminpage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TryoutsPage from "./pages/tryoutspage/tryout";
import TrainingPage from "./pages/trainingpage/training";
import TournamentPage from "./pages/TournamentPage/TournamentPage";
import FieldSchedulerPage from "./pages/fieldSchedulerPage/fieldSchedulerPage"
import PreregistrationPage from "./pages/preregistrationpage/preregistrationpage.jsx";


import { Fire14UURLS, Fire12UURLS } from "../src/pages/teamPage/events";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapshotToMap,
  convertCollectionsSnapshotToMap2,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const TeamPageWithSpinner = WithSpinner(TeamPage);
const TournamentPageWithSpinner = WithSpinner(TournamentPage);
const FieldSchedulerPageWithSpinner = WithSpinner(FieldSchedulerPage);


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
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
    const collectionRef1 = firestore.collection("teams");

    
    this.unsubscribeFromSnapshot = collectionRef1.onSnapshot(
      async (snapshot) => {
        const teamsMap = convertCollectionsSnapshotToMap(snapshot);
        updateTeams(teamsMap);
        this.setState({ loading: false });
      }
    );

    const { updateFields } = this.props;
    const collectionRef2 = firestore.collection("fields");


    this.unsubscribeFromSnapshot = collectionRef2.onSnapshot(
      async (snapshot) => {
        const fieldsMap = convertCollectionsSnapshotToMap2(snapshot);
        updateFields(fieldsMap)
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/Fire14U"
            component={withRouter(() => 
              (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 14U"
                title="Fire14U"
                eventurls={Fire14UURLS} />
              
            ))}
          />
          <Route
            path="/Fire12U"
            component={withRouter(() => 
              (
              <TeamPageWithSpinner
                isLoading={loading}
                teamname="Fire 12U"
                title="Fire12U"
                eventurls={Fire12UURLS} />
            ))}
          />
          <Route path="/Tryouts" component={TryoutsPage} />
          <Route path="/Training" component={TrainingPage} />
          <Route path="/Preregistration" component={PreregistrationPage} />
          <Route
            path="/Tournaments"
            render={() => <TournamentPageWithSpinner isLoading={loading} />}
          />
          <Route path="/Adminpage"
            component={withRouter(() =>
              (
                <AdminPage />
              ))} 
          />
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
          <Route
            path="/Field1"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field1"
                fieldname="Field 1"
              />
            ))}
          />
          <Route
            path="/Field2"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field2"
                fieldname="Field 2"
              />
            ))}
          />
          <Route
            path="/Field3"
            component={withRouter(() =>
                (
              <FieldSchedulerPageWithSpinner
                isLoading={loading}
                title="Field3"
                fieldname="Field 3"
              />
            ))}
          />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateTeams: (teamsMap) => dispatch(updateTeams(teamsMap)),
  updateFields: (fieldsMap) => dispatch(updateFields(fieldsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
