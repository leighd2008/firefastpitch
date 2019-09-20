import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import teamReducer from "./team/team.reducer";

export default combineReducers({
  user: userReducer,
  team: teamReducer
});
