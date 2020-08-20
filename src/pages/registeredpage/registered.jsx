import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors";

import { Card, CardTitle } from "reactstrap";

class Registered extends React.Component {


  render() {
    const { registrationData, index } = this.props;
    const registrationDataArray = Object.entries(registrationData);
    console.log(registrationDataArray);

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
            <tr >
              <th>Tryout Number</th>
              <th>Attended</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Positions</th>
              <th>Bats</th>
              <th>Throws</th>
            </tr>
          </thead>
          <tbody>
            {registrationDataArray[index][1].players.map((player, i) => {
              return (
                <tr className="stripe-dark" onClick={(e) => alert(`${player.name} ${player.last} email: ${player.email} \n ${player.parent1} \n       phone: ${player.parent1phone} \n       email: ${player.parent1email || ''} \n ${player.parent2 || ""}\n        phone: ${player.parent2phone || ""} \n       email: ${player.parent2email || ""} `)} key={i}>
                  <td>{`${player.tryout || ''}`}</td>
                  <td>{`${player.attended || ''}`}</td>
                  <td >{`${player.name} ${player.last}`}</td>

                  <td>{player.DOB}</td>
                  <td>{player.positions}</td>
                  <td>{player.bats}</td>
                  <td>{player.throws}</td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </Card>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData,
})

export default connect(mapStateToProps)(Registered);

