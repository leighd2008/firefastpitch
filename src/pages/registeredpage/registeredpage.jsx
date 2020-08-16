import React from 'react';
import Registered from "./registered";

import { Card } from "reactstrap";

import './registeredPage.scss'

const RegisteredPage = () => {
  return (
    <Card
      className="ma3 roster"
      style={{
        backgroundColor: "#rgb(194, 198, 202)",
        borderColor: "red",
        borderWidth: "4px",
        minWidth: "48vw"
      }}
    >
      <Registered index={3} />
      <br/>
      <Registered index={0} />
      <br />
      <Registered index={1} />
      <br />
      <Registered index={2} />
    </Card>
  );
}

export default RegisteredPage;

