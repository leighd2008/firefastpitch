import { createSelector } from "reselect";

const selectFangear = state => state.fangear;

export const selectFangearItems = createSelector(
  [selectFangear],
  fangear => fangear.fangear
);

export const selectFangearColors = createSelector(
  [selectFangear],
  fangear => fangear.colors
);

export const selectFangearSizes = createSelector(
  [selectFangear],
  fangear => fangear.sizes
);
