import * as types from "./actionTypes";

export const saveModalDetails = (modalDetails) => {
  return {
    type: types.SAVE_MODAL_DETAILS,
    modalDetails,
  };
};

export const setModal = (set) => {
  return {
    type: types.SET_MODAL,
    set,
  };
};
