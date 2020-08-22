import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectRegistrationData } from "../../redux/registration/registration.selectors";

import { Card, CardTitle } from "reactstrap";

// import PropTypes from 'prop-types';
// import { Test } from './TeamRoster.styles';

class TeamRoster extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TeamRoster will mount');
  }

  componentDidMount = () => {
    console.log('TeamRoster mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TeamRoster will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TeamRoster will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('TeamRoster did update');
  }

  componentWillUnmount = () => {
    console.log('TeamRoster will unmount');
  }

  render() {
    const { registrationData, index } = this.props;
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
            <tr >
              <th>Jersey Number</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Player Email</th>
              <th>Parent 1</th>
              <th>Parent 1 Email</th>
              <th>Parent 1 Phone</th>
              <th>Parent 2</th>
              <th>Parent 2 Email</th>
              <th>Parent 2 Phone</th>
            </tr>
          </thead>
          <tbody>
            {registrationDataArray[index][1].players.map((player, i) => {
              if (player.onTeam) {
                return (
                  <tr className="stripe-dark" key={i}>
                    <td>{`${player.jersey_number || ''}`}</td>
                    <td >{`${player.name} ${player.last}`}</td>
                    <td>{player.DOB}</td>
                    <td>{`${player.email || ''}`}</td>
                    <td>{player.parent1}</td>
                    <td>{player.parent1email}</td>
                    <td>{player.parent1phone}</td>
                    <td>{player.parent2 || ''}</td>
                    <td>{player.parent2email || ''}</td>
                    <td>{player.parent2phone || ''}</td>
                  </tr>
                )
              }
            }
            )}
          </tbody>
        </table>
      </Card>
    );
  }
}

// TeamRoster.propTypes = {
//   // bla: PropTypes.string,
// };

// TeamRoster.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = createStructuredSelector({
  registrationData: selectRegistrationData,
})


// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(TeamRoster);
