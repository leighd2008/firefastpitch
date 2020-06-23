import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Scheduler from '../../components/scheduler/scheduler';
import './fieldSchedulerPage.scss';

const data = [
  { start_date: '2020-06-25 6:00', end_date: '2020-06-25 8:00', text: 'Event 1', id: 1 },
  { start_date: '2020-06-26 10:00', end_date: '2020-06-26 18:00', text: 'Event 2', id: 2 }
];

class FieldScheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTimeFormatState: true
    };
  }

  handleTimeFormatStateChange = (state) => {
    this.setState({
      currentTimeFormatState: state
    });
  }

  render() {
    const { currentTimeFormatState } = this.state;
    const { fieldname } = this.props;

    return (
      <div>
        <div className="tool-bar">
          <h1 className="title">
            Johnson Community Center {fieldname}
          </h1>
          <Toolbar
            timeFormatState={currentTimeFormatState}
            onTimeFormatStateChange={this.handleTimeFormatStateChange}
            />
        </div>
        <div className='scheduler-container'>
          <Scheduler
            events={data}
            timeFormatState={currentTimeFormatState}
          />
        </div>
      </div>
    );
  }
}

export default FieldScheduler;