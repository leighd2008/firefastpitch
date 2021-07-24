import React from "react";
// import { connect } from "react-redux";

// import Modal from "../Modal/Modal";
// import {
//   openModalHandler,
//   closeModalHandler,
// } from "../../redux/recruiting/recruiting.actions";

import "./newdoc.scss";

const NewDOC = ({ openModalHandler, closeModalHandler, isShowing }) => (
  <div className="newdoc">
    {/* {isShowing ? (
      <div onClick={closeModalHandler} className="back-drop"></div>
    ) : null}
    <div className="open-modal" onClick={openModalHandler}> */}
      <h1 className="fancy">Director of Coaching (DOC): Demetra Noble</h1>
      <h1 className="plain">Will oversee all team coaches and formulate a uniform itinerary for practices, drills, lessons and pre-game warm ups.</h1>
    {/* </div> */}
    {/* <Modal className="modal" show={isShowing} close={closeModalHandler}>
      <div className="iframe-container">
        <iframe
          title="recruiting tips"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7soS5kzJw64"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Modal> */}
  </div>
);

// const mapStateToProps = ({ recruiting: { isShowing } }) => ({
//   isShowing,
// });

// const mapDispatchToProps = (dispatch) => ({
//   openModalHandler: () => dispatch(openModalHandler()),
//   closeModalHandler: () => dispatch(closeModalHandler()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NewDOC);
export default NewDOC;