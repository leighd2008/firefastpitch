import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFieldData } from "../../redux/field/field.selectors";
import { firestore } from "../../firebase/firebase.utils";
import Scheduler from '../../components/scheduler/scheduler';
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './fieldSchedulerPage.scss';

class FieldScheduler extends Component {
  
  logDataUpdate = (action, ev, id) => {
    let newEvent = { end_date: ev.end_date, start_date: ev.start_date, text: ev.text, id: ev.id }
    console.log(this.currentUser)
    // let eventCreator = this.props.currentUser.email;
    let events1 = [
      newEvent,
      ...this.props.fieldData[this.props.title].schedule
    ];
    console.log('events', events1)

    events1.forEach((item) => (
      // eslint-disable-next-line no-sequences
      console.log('item', item),
      item.end_date = item.end_date.toJSON(),
      item.start_date = item.start_date.toJSON()
    ))

    const fieldId = this.props.fieldData[this.props.title].id;
    firestore.collection("fields").doc(fieldId).update({
      schedule: events1,
      // eventCreator: eventCreator
    });
  }

  // refreshPage = () => {
  //   window.location.reload();
  // };
  
  render() {
    const { fieldname, fieldData, title } = this.props;
    // const evCreator = fieldData[title].eventCreator;
    // console.log(fieldData[title].schedule, fieldId )
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
            {fieldname}
          </h1>
          {/* <p className="refresh">
            Please
        <button className='refreshbutton' type="button" onClick={this.refreshPage}>
              <span>Refresh</span>
            </button>
        page after adding an event.
      </p> */}
        </div>
        <div className='scheduler-container'>
          <Scheduler
            events={fieldData[title].schedule}
            timeFormatState={false}
            // eslint-disable-next-line no-sequences
            onDataUpdated={this.logDataUpdate}
            // fieldData={evCreator}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fieldData: selectFieldData
})

export default connect(mapStateToProps)(FieldScheduler);