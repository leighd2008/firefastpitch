import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import teamMenuReducer from "./teamMenu/teamMenu.reducer";
import all_teamsReducer from "./all_teams/all_teams.reducer";
import teamReducer from "./team/team.reducer";
import trainingReducer from "./training/training.reducer";
import fangearReducer from "./fangear/fangear.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  teamMenu: teamMenuReducer,
  all_teams: all_teamsReducer,
  team: teamReducer,
  training: trainingReducer,
  fangear: fangearReducer
});

export default persistReducer(persistConfig, rootReducer);
