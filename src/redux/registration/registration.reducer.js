import RegistrationActionTypes from "./registration.types"
// import { addEventToSchedule } from "./field.utils";

const INITIAL_STATE = {
  preregistration: null
};

const registrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegistrationActionTypes.UPDATE_PREREGISTRATION:
      return {
        ...state,
        preregistration: action.payload
      };
    
    default:
      return state;
  }
};

export default registrationReducer;