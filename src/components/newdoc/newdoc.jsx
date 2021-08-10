import React from "react";
import { NavLink } from "react-router-dom";

import "./newdoc.scss";

const NewDOC = () => (
  <div className="newdoc">
    <NavLink className="newDocBio" to="/DOC">
      <h1 className="fancy">Director of Coaching (DOC): Demetra Noble</h1>
      <h1 className="fancy"> Click for Bio </h1>
    </NavLink>
  </div>
);

export default NewDOC;