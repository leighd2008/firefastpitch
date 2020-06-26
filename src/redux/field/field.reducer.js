import FieldActionTypes from "./field.types"

const INITIAL_STATE = {
  // field1Schedule: [
  //   { start_date: '2020-06-25 18:00', end_date: '2020-06-25 20:00', text: 'Event 1', id: 1 },
  //   { start_date: '2020-06-26 18:00', end_date: '2020-06-26 20:00', text: 'Event 2', id: 2 },
  // ],
  // field2Schedule: [
  //   { start_date: '2020-06-23 18:00', end_date: '2020-06-23 20:00', text: 'Event 1', id: 1 },
  //   { start_date: '2020-06-24 18:00', end_date: '2020-06-24 20:00', text: 'Event 2', id: 2 },
  // ],
  // field3Schedule: [
  //   { start_date: '2020-06-22 18:00', end_date: '2020-06-22 20:00', text: 'Event 1', id: 1 },
  //   { start_date: '2020-06-27 18:00', end_date: '2020-06-27 20:00', text: 'Event 2', id: 2 },
  // ],
  fields: null
};

const fieldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FieldActionTypes.UPDATE_FIELDS:
      return {
        ...state,
        fields: action.payload
      };
    default:
      return state;
  }
};

export default fieldReducer;