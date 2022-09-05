import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Registered from "./registered";
import CsvDownload from 'react-json-to-csv'
import { selectRegisteredData } from "../../redux/registration/registration.selectors";

import './registeredPage.scss'

const RegisteredPage = (registeredData) => {
    const registeredDataArray = Object.entries(registeredData);
  return (
    <div>
    {console.log(registeredDataArray[0][1].Registered.players)}
      <h4 className="tc">This page displays all registered players, click here to view new registrations for 2022</h4>
      <Registered index={2} division={'10U'} />
      <br />
      <Registered index={1} division={'12U'} />
      <br />
      <Registered index={4} division={'14U'} />
      <br />
      <Registered index={3} division={'16U'}/>
      <br />
      <Registered index={0} division={'18U'}/>
      <br />
      <h4>All registered players</h4>
      <CsvDownload data={registeredDataArray[0][1].Registered.players} />
      
      {/* <Registered index={2} /> */}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  registeredData: selectRegisteredData,
})

export default connect(mapStateToProps)(RegisteredPage);

