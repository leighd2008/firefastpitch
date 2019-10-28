import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFangearItems } from "../../redux/fangear/fangear.selectors";

import FanGearItem from "../../components/fangear-item/fangear-item";

import "./fangearpage.scss";

const FanGearPage = ({ fangear }) => {
  return (
    <div className="fan-gear-page">
      <h1 className="fan-gear-title">FanGear</h1>
      <div className="fan-gear-items">
        {fangear.map(item => (
          <FanGearItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  fangear: selectFangearItems
});

export default connect(mapStateToProps)(FanGearPage);
