import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import teamMenuReducer from "./teamMenu/teamMenu.reducer";
import all_teamsReducer from "./all_teams/all_teams.reducer";
import teamReducer from "./team/team.reducer";
import trainingReducer from "./training/training.reducer";
import fangearReducer from "./fangear/fangear.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  teamMenu: teamMenuReducer,
  all_teams: all_teamsReducer,
  team: teamReducer,
  training: trainingReducer,
  fangear: fangearReducer
});
