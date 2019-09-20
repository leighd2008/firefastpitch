import { createSelector } from "reselect";

const selectTeam = state => state.hidden;

export const selectTeamHidden = createSelector(
  [selectTeam],
  hidden => hidden
);
