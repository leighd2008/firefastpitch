import { createSelector } from "reselect";

const selectTeam = state => state.team;

export const selectTeamData = createSelector(
  [selectTeam],
  team => team.teams
);
