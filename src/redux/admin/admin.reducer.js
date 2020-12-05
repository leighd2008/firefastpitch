import AdminActionTypes from "./admin.types";

const INITIAL_STATE = {
  bcShowing: false, /* birth certificate */
  rcShowing: false, /* report card */
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.TOGGLE_BC_MODAL:
      return {
        ...state,
        bcShowing: !state.bcShowing,
      };
    case AdminActionTypes.OPEN_BC_MODAL_HANDLER:
      return {
        ...state,
        bcShowing: true,
      };
    case AdminActionTypes.CLOSE_BC_MODAL_HANDLER:
      return {
        ...state,
        bcShowing: false,
      };
    case AdminActionTypes.OPEN_RC_MODAL_HANDLER:
      return {
        ...state,
        rcShowing: true,
      };
    case AdminActionTypes.CLOSE_RC_MODAL_HANDLER:
      return {
        ...state,
        rcShowing: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
