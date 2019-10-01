import TEAM_DATA from "./team.data";

const INITIAL_STATE = {
  teams: TEAM_DATA
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default teamReducer;
