import { authentT } from '../action-types';

/* launch authentication */
export const actionAuthent = () => ({
  type: authentT.TRY,
});

/* authentication success */
export const actionAuthentSuccess = (payload) => ({
  type: authentT.SUCCESS,
  payload,
});

/* authentication fail */
export const actionAuthentFail = () => ({
  type: authentT.FAIL,
});

/* disconnect action */
export const actionDisconnect = () => ({
  type: authentT.DISCONNECT,
});

/* open connection form popup */
export const actionOpenAuthentForm = () => ({
  type: authentT.OPEN_FORM,
});

/* close connection form popup */
export const actionCloseAuthentForm = () => ({
  type: authentT.CLOSE_FORM,
});

export const actionAuthentWithToken = (payload) => ({
  type: authentT.TRY_WITH_TOKEN,
  payload,
});
