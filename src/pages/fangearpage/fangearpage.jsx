import React from "react";

import FANGEAR_DATA from "../../redux/fangear/fangear.data";
import FanGearItem from "../../components/fangear-item/fangear-item";

import "./fangearpage.scss";

class FanGearPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fangear: FANGEAR_DATA
    };
  }

  render() {
    const { fangear } = this.state;
    console.log(fangear);
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
  }
}

export default FanGearPage;
