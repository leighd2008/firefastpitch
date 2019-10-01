import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import teamMenuReducer from "./teamMenu/teamMenu.reducer";
import all_teamsReducer from "./all_teams/all_teams.reducer";

export default combineReducers({
  user: userReducer,
  teamMenu: teamMenuReducer,
  all_teams: all_teamsReducer
});
