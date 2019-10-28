import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SelectMenu from "../select-menu/select-menu";
import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.actions";

import {
  selectFangearColors,
  selectFangearSizes
} from "../../redux/fangear/fangear.selectors";

import "./fangear-item.scss";

class FanGearItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      size: ""
    };
  }

  handleSelectColor = selectedValue => {
    // this.setState({
    this.props.item.color = selectedValue;
    console.log(this.props.item);
    // });
  };

  handleSelectSize = selectedValue => {
    // this.setState({
    this.props.item.size = selectedValue;
    console.log(this.props.item);
    // });
  };

  render() {
    const { item, addItem, colors, sizes } = this.props;
    // const { color, size } = this.state;
    const { title, price, image, imagesize } = item;
    const images = require.context("../../assets/fangear", true);
    let imgsrc = images(`./${image}`);
    let displaySizes = true;

    if (title === "Hats") displaySizes = false;

    return (
      <div className={`${imagesize} fangear-item`}>
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
        <SelectMenu
          arrayOfData={colors}
          onSelectChange={this.handleSelectColor}
        />
        {displaySizes ? (
          <SelectMenu
            arrayOfData={sizes}
            onSelectChange={this.handleSelectSize}
          />
        ) : null}
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  colors: selectFangearColors,
  sizes: selectFangearSizes
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FanGearItem);
