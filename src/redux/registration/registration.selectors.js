import { createSelector } from "reselect";

const selectRegistration = state => state.registration;

export const selectRegistrationData = createSelector(
  [selectRegistration],
  registration => registration.preregistration
);

// export const selectRegistrationForDatabase = createSelector(
//   [selectRegistrationData],
//   preregsitration => (preregsitration ? Object.keys(preregsitration).map(key => preregsitration[key]) : [])
// );

// export const selectOneDivision = collectionUrlParam => createSelector(
//   [selectRegistrationData],
//   preregsitration => (preregsitration ? preregsitration[collectionUrlParam] : null)
// );