import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryout.scss";

const TryOuts = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00" }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play with FIRE?
          </CardTitle>
          <h3>FIRE FASTPITCH will have open tryouts for the teams in age 10U, 12U, 14U and 16U divisions on </h3> <br/> <h1>Saturday August 1st</h1> 
          <h2>REGISTRATION:</h2> 
          <a href="Preregistration" rel="noopener noreferrer">
            <h3>Pre-registration form can be filled out here!</h3>
          </a> <h3> or at Field #1 on the day of tryouts. </h3>
          <br />
          <h3>10U — 10:00 AM - 12:00 PM* ARIVE @ 9:30 AM</h3>
          <h3>12U — 12:00 PM - 2:00 PM* ARIVE @ 11:30 AM</h3>
          <h3>14U — 2:00 PM - 4:00 PM* ARIVE @ 1:30 PM</h3>
          <h3>16U — 4:00 PM - 6:00 PM* ARIVE @ 3:30 PM</h3>
          <br />
          <h2>*PITCHERS & CATCHERS</h2> <h3> will need to stay an additional 30 min to be evaluated separately</h3>
          <br/>
          <h2>LOCATION:</h2>
          <a
            href={`https://goo.gl/maps/TSZ2T6Ti4oo`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>800 Gillmer Rd <br /> Leavittsbug Ohio 44430</h3>
          </a>
          <br />
          <h1>Wednesday Aug. 5th from 6-8 PM</h1>
          <h3>We will follow that up with an all age group make up or call back on Wednesday Aug. 5th from 6-8 PM on all three fields simultaneously.</h3>
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

export default TryOuts;
