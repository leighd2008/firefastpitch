import React from "react";

import FormInput from "../form-input/form-input";
// import CustomButton from "../custom-button/custom-button";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./order_form.scss";

const OrderForm = ({ cartItem }) => {
  const { title, price, color, size } = cartItem;

  return (
    <div className="order-form">
      {/* <span>Sign up with your email and password</span> */}
      {/* <form className="order-form"> */}
      <FormInput
        type="text"
        name="title"
        value={title}
        readOnly={true}
        // onChange={this.handleChange}
        // label="title"
        required
      />
      <FormInput
        type="text"
        name="price"
        value={`$${price}`}
        readOnly={true}
        // onChange={this.handleChange}
        // label="price"
        required
      />
      <FormInput
        type="text"
        name="color"
        value={color}
        readOnly={true}
        // onChange={this.handleChange}
        // label="color"
        required
      />
      <FormInput
        type="text"
        name="size"
        value={size}
        readOnly={true}
        // onChange={this.handleChange}
        // label="size"
        required
      />
      {/* <CustomButton type="submit">Add to Team Order</CustomButton> */}
      {/* </form> */}
    </div>
  );
};

export default OrderForm;
