import React from "react";
import { connect } from "react-redux";

// import Modal from "../Modal/Modal";
import {
  openBCModalHandler,
  closeBCModalHandler,
} from "../../redux/admin/admin.actions";
// import "./birthCertificate.scss";

const BirthCertificate = ({ openBCModalHandler, closeBCModalHandler, bcShowing, playerIndex }) => {
  
  return (
    <div className="birthcertificate">
      {/* {bcShowing ? (
        <div onClick={closeBCModalHandler} className="back-drop"></div>
      ) : null}
      <div className="open-pumpkin" onClick={openBCModalHandler}>
        <h1 className="fancy">First Annual Fire Fastpitch Pumpkin Smash Information</h1>
      </div>
      <Modal className="modal" show={bcShowing} close={closeBCModalHandler}>
        <div className="pumpkin-smash">
          Birth Certificate goes here!
        </div>
      </Modal> */}
    </div>
  )
};

const mapStateToProps = ({ event: { bcShowing } }) => ({
  bcShowing,
});

const mapDispatchToProps = (dispatch) => ({
  openBCModalHandler: () => dispatch(openBCModalHandler()),
  closeBCModalHandler: () => dispatch(closeBCModalHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BirthCertificate);
