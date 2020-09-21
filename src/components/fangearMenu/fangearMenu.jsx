import React from "react";
import { connect } from "react-redux";

import { toggleFangearHidden } from "../../redux/fangearMenu/fangearMenu.actions";
import FangearDropdown from "../fangearDropdown/fangearDropdown";

import "./fangearMenu.scss";

const FangearMenu = ({ toggleFangearHidden, hidden }) => (
  <div className="stores" onClick={toggleFangearHidden}>
    <h2>Fangear</h2>
    {hidden ? null : <FangearDropdown />}
  </div>
);

const mapStateToProps = ({ fangearMenu: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleFangearHidden: () => dispatch(toggleFangearHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FangearMenu);
