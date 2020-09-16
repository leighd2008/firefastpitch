import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import "./scheduler.scss";
import { firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectFieldData } from "../../redux/field/field.selectors";


const scheduler = window.scheduler;
class Scheduler extends Component {

  initSchedulerEvents() {
    if (scheduler._$initialized) {
      return;
    }
    scheduler.attachEvent('onEventAdded', (id, ev) => {
      let eventCreator = this.props.currentUser.email;
      let type = this.props.currentUser.displayName;
      let newEvent = { end_date: ev.end_date, start_date: ev.start_date, text: ev.text, id: ev.id, eventCreator, type }
      let events1 = [
        newEvent,
        ...this.props.events
      ];
      console.log(events1)

      events1.forEach((item) => (
        // eslint-disable-next-line no-sequences
        item.end_date = item.end_date.toJSON(),
        item.start_date = item.start_date.toJSON()
      ))

      const fieldId = this.props.fieldId;
      firestore.collection("fields").doc(fieldId).update({
        schedule: events1,
      })
        .then(response => {
          window.location = 'Adminpage'
        })
    });

    scheduler.attachEvent('onEventChanged', (id, ev) => {
      let evChanger = this.props.currentUser.email;
      
      let changedEvent = { end_date: ev.end_date, start_date: ev.start_date, text: ev.text, id: ev.id, eventCreator: ev.eventCreator, type:ev.type }
      let changeEventId = ev.id;
      let evCreator = ev.eventCreator;
      let { events } = this.props;
      let events1 = [];
      let events2 = [];


      if (evChanger === evCreator | evChanger === 'fire.fastpitch.softball@gmail.com' ) {
        events.filter(event => event.id !== changeEventId).map(filteredEvent => (events1.push(filteredEvent)))
        events2 = [
          changedEvent,
          ...events1
        ];
        
        events2.forEach((item) => (
          // eslint-disable-next-line no-sequences
          item.end_date = item.end_date.toJSON(),
          item.start_date = item.start_date.toJSON()
          ))
          console.log(events2)
          console.log(events)
          const fieldId = this.props.fieldId;
          firestore.collection("fields").doc(fieldId).update({
            schedule: events2,
          })
            .then(response => {
              window.location = 'Adminpage'
            })
        } else {
          alert(`You do not have permission to change this event. Please contact Rich Miekle to have the event deleted`)
          window.location = 'Adminpage'
        }
    });

    scheduler.attachEvent('onEventDeleted', (id, ev) => {
      let evDeleter = this.props.currentUser.email;
      let delEventId = ev.id;
      let evCreator = ev.eventCreator;
      let { events } = this.props;
      let events1 = [];

      if (evDeleter === evCreator | evDeleter === 'fire.fastpitch.softball@gmail.com' ) {
        events.filter(event => event.id !== delEventId).map(filteredEvent => (events1.push(filteredEvent)))
      } else {
        events1 = events;
        alert(`You do not have permission to delete this event. Please contact Rich Miekle to have the event deleted`)
      };

      events1.forEach((item) => (
        // eslint-disable-next-line no-sequences
        item.end_date = item.end_date.toJSON(),
        item.start_date = item.start_date.toJSON()
      ))

      const fieldId = this.props.fieldId;
      firestore.collection("fields").doc(fieldId).update({
        schedule: events1,
      })
        .then(response => {
          window.location = 'Adminpage'
        })
    });

    scheduler._$initialized = true;
  }

  componentDidMount() {
    scheduler.skin = 'material';
    scheduler.config.header = [
      'day',
      'week',
      'month',
      'date',
      'prev',
      'today',
      'next'
    ];

    scheduler.config.hour_date = '%g:%i %A';
    scheduler.config.time_step = 30;
    scheduler.config.first_hour = 9;
    scheduler.config.last_hour = 21;
    scheduler.xy.scale_width = 70;
    scheduler.config.day_date = "%m/%d";
    scheduler.config.default_date = "%m/%d/%y";

    scheduler.templates.event_class = function (start, end, event) {
      if (event.type === 'Diane') return 'Diane_event';
      else if (event.type === 'Rich') return 'Rich_event';
      else if (event.type === 'Mike') return 'Mike_event';
      else if (event.type === 'Jeremy') return 'Jeremy_event';
      else if (event.type === 'Stan') return 'Stan_event';
      else if (event.type === 'Jim') return 'Jim_event'
    }

    this.initSchedulerEvents();

    const { events } = this.props;
    scheduler.init(this.schedulerContainer, new Date());
    scheduler.clearAll();
    scheduler.parse(events);
  }
  
render() {
    return (
      <div
        ref={(input) => { this.schedulerContainer = input }}
        style={{ width: '90%', height: '90%' }}
      ></div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fieldData: selectFieldData
})

export default connect(mapStateToProps)(Scheduler);
