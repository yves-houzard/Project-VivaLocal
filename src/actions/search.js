import { searchT } from '../action-types';

export const actionSearchSubmit = (value) => ({
  type: searchT.TRY,
  payload: {
    value,
  },
});

export const actionSearchSuccess = (payload) => ({
  type: searchT.SUCCESS,
  payload,
});

export const actionLocate = (payload) => ({
  type: searchT.SET_CAN_LOCATE,
  payload,
});

export const actionGetPro = () => ({
  type: searchT.GET_PROFESSIONAL,
});

export const actionGetProSuccess = (payload) => ({
  type: searchT.GET_PROFESSIONAL_SUCCESS,
  payload,
});

export const actionGetOnePro = (payload) => ({
  type: searchT.GET_ONE_PROFESSIONAL,
  payload,
});

export const actionGetOneProSuccess = (payload) => ({
  type: searchT.GET_ONE_PROFESSIONAL_SUCCESS,
  payload,
});
