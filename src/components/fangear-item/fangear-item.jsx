import React from "react";

import "./fangear-item.scss";

const FanGearItem = ({ id, title, price, image, size }) => {
  const images = require.context("../../assets/fangear", true);
  let imgsrc = images(`./${image}`);

  return (
    <div className={`${size} fangear-item`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imgsrc})`
        }}
      />
      <div className="fangear-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default FanGearItem;
