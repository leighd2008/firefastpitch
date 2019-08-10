import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import './tryout.scss';

const TryOuts = () => {
  
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">Are you ready to play with FIRE?</CardTitle>
          <h2>FIRE FASTPITCH Try-outs are over, however, we still have roster spots to fill for 8U and 10U. </h2>
          <CardText tag="h1">
            <h3>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us. </h3>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default TryOuts;
