import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Toolbar from '../../components/Toolbar/Toolbar';
import Scheduler from '../../components/scheduler/scheduler';
import MessageArea from '../../components/MessageArea/MessageArea';
import './fieldSchedulerPage.scss';

const data = [
  { start_date: '2020-06-25 6:00', end_date: '2020-06-25 8:00', text: 'Event 1', id: 1 },
  { start_date: '2020-06-26 10:00', end_date: '2020-06-26 18:00', text: 'Event 2', id: 2 }
];

class FieldScheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTimeFormatState: true,
      messages: []
    };
  }

    addMessage(message) {
      const maxLogLength = 5;
      const newMessage = { message };
      const messages = [
        newMessage,
        ...this.state.messages
      ];

      if (messages.length > maxLogLength) {
        messages.length = maxLogLength;
      }
      this.setState({ messages });
    }

    logDataUpdate = (action, ev, id) => {
      const text = ev && ev.text ? `(${ev.text})` : '';
      const message = `event ${action}: ${id} ${text}`;
      this.addMessage(message);
    }
  

  handleTimeFormatStateChange = (state) => {
    this.setState({
      currentTimeFormatState: state
    });
  }

  render() {
    const { currentTimeFormatState, messages } = this.state;
    const { fieldname } = this.props;

    return (
      <div>
        <div className="fields">
          <NavLink exact to="/Field1" activeClassName="selected" title="Field 1">
            <h4>Field 1 Scheduling</h4>
          </NavLink>
          <NavLink exact to="/Field2" activeClassName="selected" title="Field 2">
            <h4>Field 2 Scheduling</h4>
          </NavLink>
          <NavLink exact to="/Field3" activeClassName="selected" title="Field 3">
            <h4>Field 3 Scheduling</h4>
          </NavLink>
        </div>
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
            onDataUpdated={this.logDataUpdate}
          />
        </div>
        <MessageArea messages={messages} />
      </div>
    );
  }
}

export default FieldScheduler;