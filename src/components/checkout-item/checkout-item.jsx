import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { title, image, price, quantity, color, size } = cartItem;
  const images = require.context("../../assets/fangear", true);
  let imgsrc = images(`./${image}`);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imgsrc} />
      </div>
      <span className="title">{title}</span>
      <span className="color">{color}</span>
      <span className="size">{size}</span>
      <span className="quantity">
        {/* <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div> */}
        <span className="value">{quantity}</span>
        {/* <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchFromProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchFromProps
)(CheckoutItem);
