import React from "react";
import OHSAArulesdoc from "../../assets/OHSAArulesdoc.pdf"


import "./OHSAArules.scss";

const OHSAArules = () => {
  return (
    <div >
      <h1 className="OHSAArules">
        <a href={OHSAArulesdoc} target="_blank" rel="noopener noreferrer" >OHSAA Information and Guidance for "Travel/Non-School Team" Teams & Coaches</a>
      </h1>
    </div>
  );
};
export default OHSAArules;
