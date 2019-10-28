import React, { Component } from "react";

import "./select-menu.scss";

class SelectMenu extends Component {
  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map(data => (
      <option key={data.id} value={data.name}>
        {data.name}
      </option>
    ));

    return (
      <select
        name="customSearch"
        className="custom-search-select"
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}

export default SelectMenu;
