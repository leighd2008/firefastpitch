import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './PrintRoster.styles';

class PrintRoster extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('PrintRoster will mount');
  }

  componentDidMount = () => {
    console.log('PrintRoster mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('PrintRoster will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('PrintRoster will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('PrintRoster did update');
  }

  componentWillUnmount = () => {
    console.log('PrintRoster will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="PrintRosterWrapper">
        Test content
      </div>
    );
  }
}

PrintRoster.propTypes = {
  // bla: PropTypes.string,
};

PrintRoster.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrintRoster);
