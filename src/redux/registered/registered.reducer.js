import RegisteredActionTypes from "./registered.types"
// import { addEventToSchedule } from "./field.utils";

const INITIAL_STATE = {
  registered: null
};

const registeredReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisteredActionTypes.UPDATE_REGISTERED:
        return {
        ...state,
        registered: action.payload
        };
      
    default:
      return state;
  }
};

export default registeredReducer;