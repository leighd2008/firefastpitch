import React from "react";
import CoronaUpdate from "../../assets/Baseball-Softball.pdf"
import OHSAArulesdoc from "../../assets/OHSAArulesdoc.pdf"

import "./guidelinesDropdown.scss";

const GuidelinesDropdown = () => (
  <div className="guidelines-dropdown">
    <div className="guidelines">
      <a href={CoronaUpdate} target="_blank" rel="noopener noreferrer" ><h4>Corona Virus</h4>
      </a>
      <a href={OHSAArulesdoc} target="_blank" rel="noopener noreferrer" ><h4>OHSAA rules</h4>
      </a>
    </div>
  </div>
);

export default GuidelinesDropdown;
