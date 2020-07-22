import { actionTypes } from '../constants/actionTypes.js';

export const changeStatus = (text) => {
  return (dispatch) => {
    setTimeout(
      () =>
        dispatch({
          type: actionTypes.CHANGE_STATUS,
          payload: `${text} is typing...`,
        }),
      1000
    );
  };
};
