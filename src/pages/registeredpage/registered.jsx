import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors"

import { Card, CardTitle } from "reactstrap";

const Registered = ({ index, registrationData }) => {
  const registrationDataArray = Object.entries(registrationData);

  return (
    <Card
      className="ma0 roster"
      style={{
        backgroundColor: "#rgb(194, 198, 202)",
        borderColor: "red",
        borderWidth: "4px",
        minWidth: "60vw"
      }}
    >
      <CardTitle tag="h1">
        {`Registered Players: ${registrationDataArray[index][1].title} Division`}
      </CardTitle>
      <table className="f6 w-100 mw8 center pa4 ma2">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Experience</th>
            <th>Previous Teams</th>
            <th>Positions</th>
            <th>Bats</th>
            <th>Throws</th>
            {/* <th>Email</th>
            <th>Phone</th> */}
          </tr>
        </thead>
        <tbody>
          {registrationDataArray[index][1].players.map((player, i) => {
            return (
              <tr className="stripe-dark" key={i}>
                <td>{player.name}</td>
                <td>{player.DOB}</td>
                <td>{player.experience}</td>
                <td>{player.previous}</td>
                <td>{player.positions}</td>
                <td>{player.bats}</td>
                <td>{player.throws}</td>
                {/* <td>{player.email}</td>
                <td>{player.phone}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData
})

export default connect(mapStateToProps)(Registered);

