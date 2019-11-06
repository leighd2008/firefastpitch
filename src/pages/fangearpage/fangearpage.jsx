import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, CardTitle, CardBody } from "reactstrap";

import { selectFangearItems } from "../../redux/fangear/fangear.selectors";

import FanGearItem from "../../components/fangear-item/fangear-item";

import "./fangearpage.scss";

const FanGearPage = ({ fangear }) => {
  let number = 0;
  return (
    <div className="fan-gear-page">
      <h1 className="fan-gear-title">FanGear</h1>
      <div className="order-instructions">
        <Card
          style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00" }}
        >
          <CardBody>
            <CardTitle className="tc f1" tag="h1">
              A Team order will be placed once the total items of a given color
              reaches 12. Hats can be ordered individually. We are planning on a
              Christmas order. Please use this site to add items to the team
              order. Money will need to be turned in prior to (order date goes
              here).
            </CardTitle>
            <h1>{`Total Black/White items ${number}`}</h1>
            <h1>{`Total Red items ${number}`}</h1>
            <h1>{`Total Hats ${number}`}</h1>
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
