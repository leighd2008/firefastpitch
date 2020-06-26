import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import teamMenuReducer from "./teamMenu/teamMenu.reducer";
import all_teamsReducer from "./all_teams/all_teams.reducer";
import teamReducer from "./team/team.reducer";
import trainingReducer from "./training/training.reducer";
import recruitingReducer from "./recruiting/recruiting.reducer";
import fieldReducer from "./field/field.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  teamMenu: teamMenuReducer,
  all_teams: all_teamsReducer,
  team: teamReducer,
  training: trainingReducer,
  recruiting: recruitingReducer,
  field: fieldReducer,
});

export default persistReducer(persistConfig, rootReducer);
