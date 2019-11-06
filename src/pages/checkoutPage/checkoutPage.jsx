import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import CustomButton from "../../components/custom-button/custom-button";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="image">
        <span>Product</span>
      </div>
      <div className="title">
        <span>Description</span>
      </div>
      <div className="color">
        <span>Color</span>
      </div>
      <div className="size">
        <span>Size</span>
      </div>
      <div className="quantity">
        <span>Quantity</span>
      </div>
      <div className="price">
        <span>Price</span>
      </div>
      <div className="remove">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <CustomButton
      onClick={() => {
        // history.push("/checkout");
        // dispatch(toggleCartHidden());
      }}
    >
      Add to Team Order
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
