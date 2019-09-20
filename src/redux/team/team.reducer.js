import TeamActionTypes from "./team.types";

const INITIAL_STATE = {
  hidden: true
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamActionTypes.TOGGLE_TEAMS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default teamReducer;
