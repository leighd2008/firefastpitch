import { createSelector } from "reselect";

const selectTeam = state => state.team;

export const selectTeamData = createSelector(
  [selectTeam],
  team => team.teams
);

export const selectTeamsForDatabase = createSelector(
  [selectTeam],
  teams => Object.keys(teams).map(key => teams[key])
);
