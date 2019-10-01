import TeamMenuActionTypes from "./teamMenu.types";

const INITIAL_STATE = {
  hidden: true
};

const teamMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamMenuActionTypes.TOGGLE_TEAMS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default teamMenuReducer;
