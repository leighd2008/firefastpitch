import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors"

import { Card, CardTitle } from "reactstrap";

// const SHEET_ID = '1HyH4DmYh1uSQWixRn-iS458ydhLrsBMOmnwh23Z2pHA';
// const ACCESS_TOKEN = 'ya29.a0AfH6SMA_I_DKHxwkOppQY_mlX64aKAdDJkKUThkp4T-D78rl64hdNj6qLQ7LGE9Z_cXCCCrbzc2nqDEOH34VdRCm1MjXorb7mp6QCEhpxHavaQnvRS9RZTo26AJ-biXoTcs_5jeIPJ1zc1Kc1ATExlUOEs30EZWaOp4'
// sheetid = 0

class Registered extends React.Component {

  // updateSheetValues1 = () => {
  //   let { index } = this.props.index;
  //   console.log(this.props);

  //   console.log(this.props.index);
  //   fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${ACCESS_TOKEN}`,
  //     },
  //     body: JSON.stringify({

  //       requests: [{
  //         repeatCell: {
  //           range: {
  //             startColumnIndex: 0,
  //             endColumnIndex: 1,
  //             startRowIndex: 0,
  //             endRowIndex: 1,
  //             sheetId: 4
  //           },
  //           cell: {
  //             userEnteredValue: {
  //               "numberValue": 10
  //             },
  //           },
  //           fields: "*"
  //         }
  //       }]

  //     })
  //   })
  // }

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
        {/* <button onClick={this.updateSheetValues1}>Update A1</button> */}
        <table className="f6 w-100 mw8 center pa4 ma2">
          <thead>
            <tr>
              <th>Attended</th>
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
                  <td>{`${player.attended}`}</td>
                  <td>{`${player.name} ${player.last}`}</td>
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
};

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData
})

export default connect(mapStateToProps)(Registered);

