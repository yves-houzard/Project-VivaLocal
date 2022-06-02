import { userT } from '../action-types';

export const actionDelFavorites = (payload) => ({
  type: userT.DELETE_FAVORITES,
  payload,
});

export const actionDelFavoritesSuccess = (payload) => ({
  type: userT.DELETE_FAVORITES_SUCCESS,
  payload,
});

export const actionAddFavorites = (payload) => ({
  type: userT.ADD_FAVORITES,
  payload,
});

export const actionAddFavoritesSuccess = (payload) => ({
  type: userT.ADD_FAVORITES_SUCCESS,
  payload,
});

export const actionGetFavorites = (payload) => ({
  type: userT.GET_FAVORITES,
  payload,
});

export const actionGetFavoritesSuccess = (payload) => ({
  type: userT.GET_FAVORITES_SUCCESS,
  payload,
});

export const actionFillEditUserInputs = () => ({
  type: userT.FILL_EDIT_USER_FORM,
  payload: {}, // attached in middleware
});

export const actionSaveUserProfile = () => ({
  type: userT.SAVE_PROFILE,
});
