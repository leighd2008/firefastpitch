import React from "react";

import "./celebrate.scss";

const Celebrate = () => {
  const images = require.context("../../assets", true);
  let imgsrc1 = images(`./Chloe_1st_dinger.jpg`);
  let imgsrc2 = images(`./Chloe_2cnd_dinger.jpg`);

  return (
    <div className="celebrate">
      <div className="pics">
        <img src={imgsrc1} alt="first" />
        <img src={imgsrc2} alt="second" />
      </div>
      <div className="subtitle">
        <h1>
          FIRE FASTPITCH TWO DINGERS for Cloe Lopez (14U) This girl is truly on
          FIRE"
        </h1>
      </div>
    </div>
  );
};
export default Celebrate;
