import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.actions";

import "./fangear-item.scss";

const FanGearItem = ({ item, addItem }) => {
  const { title, price, image, size } = item;
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
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(FanGearItem);
