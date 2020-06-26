import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFieldData } from "../../redux/field/field.selectors";

import Toolbar from '../../components/Toolbar/Toolbar';
import Scheduler from '../../components/scheduler/scheduler';
import MessageArea from '../../components/MessageArea/MessageArea';
import './fieldSchedulerPage.scss';

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
    const { fieldname, fieldData, title } = this.props;
    const field = fieldData[title];
    console.log(field)

    return (
      <div>
        <div className="fields">
          {title === "Field1" ?
            null :
            <NavLink exact to="/Field1" activeClassName="selected" title="Field 1">
              <h4>Field 1 Scheduling</h4>
            </NavLink>}
          {title === "Field2" ?
            null :
            <NavLink exact to="/Field2" activeClassName="selected" title="Field 2">
              <h4>Field 2 Scheduling</h4>
            </NavLink>}
          {title === "Field3" ?
            null :
            <NavLink exact to="/Field3" activeClassName="selected" title="Field 3">
              <h4>Field 3 Scheduling</h4>
            </NavLink>}
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
            events={fieldData[title].schedule}
            timeFormatState={currentTimeFormatState}
            onDataUpdated={this.logDataUpdate}
          />
        </div>
        <MessageArea messages={messages} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fieldData: selectFieldData
})

export default connect(mapStateToProps)(FieldScheduler);