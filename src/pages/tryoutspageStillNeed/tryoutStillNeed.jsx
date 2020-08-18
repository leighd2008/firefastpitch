import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryoutStillNeed.scss";

const TryOutsStillNeed = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play with FIRE?
          </CardTitle>
          <h3>FIRE FASTPITCH is looking for the following girls to complete our teams: </h3> <br />

          <h2>10U - PITCHERS & MOST POSITIONS</h2>
          <br/>
          <h3>12U - SPEED UTILITY</h3>
          <br />
          <h2>14U - CATCHER & UTILITY</h2> 
          <br />
          <h3>16U - PITCHER</h3>
          <br />
          <h2>LOCATION:</h2>
          <a
            href={`https://goo.gl/maps/TSZ2T6Ti4oo`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>800 Gillmer Rd <br /> Leavittsbug Ohio 44430</h3>
          </a>
          <br />
          <h3>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us here by PM or email at: </h3>
          <h2>Fire.Fastpitch.Softball@gmail.com</h2>
          <br />
          <h2>or call 330-980-1366</h2>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryOutsStillNeed;
