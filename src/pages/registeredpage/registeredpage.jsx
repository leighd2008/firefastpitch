import React from 'react';
import Registered from "./registered";

import './registeredPage.scss'

const RegisteredPage = () => {
  return (
    <div>
      <h4 class="tc">This page displays all registered players, click here to view new registrations for 2022</h4>
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
      {/* <Registered index={2} /> */}
    </div>
  );
}

export default RegisteredPage;

