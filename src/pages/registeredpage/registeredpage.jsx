import React from 'react';
import Registered from "./registered";

import './registeredPage.scss'

const RegisteredPage = () => {
  return (
    <div>
      <Registered index={2} />
      <br />
      <Registered index={1} />
      <br />
      <Registered index={4} />
      <br />
      <Registered index={3} />
      <br />
      <Registered index={0} />
      <br />
      {/* <Registered index={2} /> */}
    </div>
  );
}

export default RegisteredPage;

