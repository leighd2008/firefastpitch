import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import {
  openEventModalHandler,
  closeEventModalHandler,
} from "../../redux/event/event.actions";

import "./battleInTheBurg.scss";

const BattleInTheBurg = ({ openEventModalHandler, closeEventModalHandler, isEventShowing }) => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./BattleInTheBurg.jpg`);
  return(
  <div className="battleInTheBurg">
    {isEventShowing ? (
      <div onClick={closeEventModalHandler} className="back-drop"></div>
    ) : null}
    <div className="open-battle" onClick={openEventModalHandler}>
      <h1 className="fancy">1st Annual Battle in the Burg registration form</h1>
    </div>
    <Modal className="modal" show={isEventShowing} close={closeEventModalHandler}>
      <div className="battle-burg">
        <img
          alt="battle in the burg flyer"
          src={imgsrc}
        ></img>
      </div>
    </Modal>
    </div>
  )
};

const mapStateToProps = ({ event: { isEventShowing } }) => ({
  isEventShowing,
});

const mapDispatchToProps = (dispatch) => ({
  openEventModalHandler: () => dispatch(openEventModalHandler()),
  closeEventModalHandler: () => dispatch(closeEventModalHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleInTheBurg);
