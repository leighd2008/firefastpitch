import AdminActionTypes from "./admin.types";

export const toggleBCModal = () => ({
  type: AdminActionTypes.TOGGLE_BC_MODAL,
});

export const openBCModalHandler = () => ({
  type: AdminActionTypes.OPEN_BC_MODAL_HANDLER,
});

export const closeBCModalHandler = () => ({
  type: AdminActionTypes.CLOSE_BC_MODAL_HANDLER,
});

export const openRCModalHandler = () => ({
  type: AdminActionTypes.OPEN_RC_MODAL_HANDLER,
});

export const closeRCModalHandler = () => ({
  type: AdminActionTypes.CLOSE_RC_MODAL_HANDLER,
});
