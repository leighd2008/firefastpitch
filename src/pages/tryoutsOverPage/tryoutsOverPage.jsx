import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryoutsOverPage.scss";

const TryoutsOver = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play with FIRE?
          </CardTitle>
          <h3>FIRE FASTPITCH Try-outs are over, check back for details on next year's tryouts. </h3> <br />

          <h3>If you or anyone you know is interested in discussing a coaching opportunity please contact us here by PM or email at: </h3>
          <h2>Fire.Fastpitch.Softball@gmail.com</h2>
          <br />
          <h2>or call 330-980-1366</h2>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryoutsOver;
