import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, CardTitle, CardBody } from "reactstrap";

import { selectFangearItems } from "../../redux/fangear/fangear.selectors";

import FanGearItem from "../../components/fangear-item/fangear-item";

import "./fangearpage.scss";

const FanGearPage = ({ fangear }) => {
  return (
    <div className="fan-gear-page">
      <h1 className="fan-gear-title">FanGear</h1>
      <div className="order-instructions">
        <Card
          style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00" }}
        >
          <CardBody>
            <CardTitle className="tc f1" tag="h1">
              Orders will be placed once the total items requested reaches 12.
              We are currently at 0. Upon checkout you have the choice of paying
              online (a service fee will be added), alternatively, payments can
              be made directly to Shelly Householder(12U team mom) with no
              service fee.
            </CardTitle>
          </CardBody>
        </Card>
      </div>
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
