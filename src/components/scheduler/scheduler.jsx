import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import "./scheduler.scss";
import { firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";

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

      events1.forEach((item) => (
        // eslint-disable-next-line no-sequences
        console.log('item', item),
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
      
    });

    scheduler.attachEvent('onEventDeleted', (id, ev) => {
      
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
    scheduler.templates.event_class = function (start, end, event) {
      if (event.type === 'Diane') return 'Diane_event';
      else if (event.type === 'Rich') return 'Rich_event';
      else if (event.type === 'Mike') return 'Mike_event'
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
})

export default connect(mapStateToProps)(Scheduler);
