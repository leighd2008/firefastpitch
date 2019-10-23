import React from "react";

import { connect } from "react-redux";
import SignInPage from "../sign-inpage/sign-inpage";

import "./adminpage.scss";

const AdminPage = ({ currentUser }) =>
  currentUser ? (
    <div className="adminPage">
      <h1 className="admin-title">
        This is where administrative stuff will happen eventually!
      </h1>
    </div>
  ) : (
    <SignInPage />
  );

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AdminPage);
