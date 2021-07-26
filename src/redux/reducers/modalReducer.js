import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const modalReducer = (state = initialState.modal, action) => {
  switch (action.type) {
    case types.SAVE_MODAL_DETAILS:
      return { ...state, modalDetails: { ...action.modalDetails } };
    case types.SET_MODAL:
      return { ...state, setModal: action.set };
    default:
      return state;
  }
};

export default modalReducer;
