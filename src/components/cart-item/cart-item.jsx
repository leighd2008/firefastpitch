import React from "react";

import "./cart-item.scss";

const CartItem = ({ item: { image, price, title, quantity } }) => {
  const images = require.context("../../assets/fangear", true);
  let imgsrc = images(`./${image}`);
  return (
    <div className="cart-item">
      <img src={imgsrc} alt="item" />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
