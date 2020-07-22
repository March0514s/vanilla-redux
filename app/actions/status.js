import { actionTypes } from '../constants/actionTypes';

export const changeStatus = (userName) => ({
  type: actionTypes.CHANGE_STATUS,
  payload: `${userName} is typing`,
});
