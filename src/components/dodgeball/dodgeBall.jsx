import React from "react";

import "./dodgeBall.scss";
const images = require.context("../../assets", true);
let imgsrc = images("./dodgeBall_Tourn.jpg");

const DodgeBall = () => (
  <div className="dodgeball">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imgsrc})`
      }}
    />
    <div className="subtitle">
      <h1>
        Double elimination Dodgeball Tournament for 10U, 12U, 14U travel teams.
        <br />
        See flyer for details Held at the beautiful{" "}
        <a
          href="https://www.takethefieldsports.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Take the Field Indoor facility
        </a>{" "}
        in Warren OH.
        <br />
        Please email us at Fire.Fastpitch.Softball@gmail for entry form or
        questions.
      </h1>
    </div>
  </div>
);

export default DodgeBall;
