import TEAM_DATA from "./team.data";

// import TeamActionTypes from "./team.types";

const INITIAL_STATE = {
  teams: TEAM_DATA
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case TeamActionTypes.UPDATE_TEAMS:
    //   return {
    //     ...state,
    //     teams: action.payload
    //   };
    default:
      return state;
  }
};

export default teamReducer;
