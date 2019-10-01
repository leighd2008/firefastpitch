import { createSelector } from "reselect";

const selectTeamMenu = state => state.hidden;

export const selectTeamMenuHidden = createSelector(
  [selectTeamMenu],
  hidden => hidden
);
