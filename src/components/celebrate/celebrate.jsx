import React from "react";

import "./celebrate.scss";

const Celebrate = () => {
  const images = require.context("../../assets", true);
  let imgsrc1 = images(`./Chloe_1st_dinger.jpg`);
  let imgsrc2 = images(`./Chloe_2cnd_dinger.jpg`);

  return (
    <div className="celebrate">
      <div className="pics">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imgsrc1})`
          }}
        />
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imgsrc2})`
          }}
        />
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
