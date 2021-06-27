import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryout.scss";

const TryOuts = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play with FIRE?
          </CardTitle>
          <h3>FIRE FASTPITCH team tryouts for all age groups will be </h3> 
          <h1>July 31st, Aug. 1st, Aug. 7th & Aug. 8th</h1>
          <h3>REGISTRATION:</h3> 
          <a href="Preregistration" rel="noopener noreferrer">
            <h2>Pre-registration form can be filled out here!</h2>
          </a>
           <h3> or at Field #1 on the day of tryouts. </h3>
          <br />
          <h2>8U(2013 & 2014) </h2><h3>9:00-10:30AM Field 2 - ARIVE @ 8:30AM</h3>
          <br />
          <h2>10U(2011 & 2012) </h2><h3>9:00-10:30AM Field 1 - ARIVE @ 8:30AM</h3>
          <br />
          <h2>12U(2009 & 2010) </h2><h3>11:00AM-1:00PM Field 2 - ARIVE @ 10:30AM</h3>
          <br />
          <h2>14U(2007 & 2008) </h2><h3>11:00AM-1:00PM Field 1 - ARIVE @ 10:30AM</h3>
          <br />
          <h2>16U(2005 & 2006) </h2><h3>1:30-3:30PM Field 2 - ARIVE @ 1:00PM</h3>
          <br />
          <h2>18U(2003 & 2004) </h2><h3>1:30-3:30PM Field 1 - ARIVE @ 1:00PM</h3>
          <br />
          <h2>*PITCHERS & CATCHERS</h2> <h3> will need to stay an additional 30 min to be evaluated separately</h3>
          <br />
          <h2>Please be sure that the girls are dressed & equipped at they would for a game. Arrive hydrated and bring water.</h2>
          <br />
          <h3>There is nothing to be nervous about, we look for much more than home runs & 70 MPH fastballs. We look for character, confidence and hustle!!!</h3>
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
          
          <h2>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us: </h2>
          <h3>Fire.Fastpitch.Softball@gmail.com</h3>
          <br />
          <h3>or call 330-980-1366</h3>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryOuts;
