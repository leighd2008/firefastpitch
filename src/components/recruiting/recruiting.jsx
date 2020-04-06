import React from "react";

import "./recruiting.scss";

import Modal from "../Modal/Modal";

class Recruiting extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    };
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
    const { isShowing } = this.state;

    return (
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
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Recruiting;
