import { registerT } from '../action-types';

export const actionRegister = () => ({
  type: registerT.TRY,
});

export const actionRegisterSuccess = () => ({
  type: registerT.SUCCESS,
});

export const actionRegisterFail = () => ({
  type: registerT.fail,
});
