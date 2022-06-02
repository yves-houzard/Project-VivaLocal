import { appT } from '../action-types';

const initialState = {
  displayCompany: true,
};

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case appT.SPINNER_INIT:
      return {
        ...state,
        [action.payload]: true,
      };
    case appT.UPLOAD_PICTURE_TRY: {
      return {
        ...state,
        [action.payload.productId || 'main']: true,
      };
    }
    // case appT.UPLOAD_PICTURE_SUCCESS:
    case appT.SPINNER_OFF:
    case appT.UPLOAD_PICTURE_FAIL: {
      const stateCopy = { ...state };
      /* we delete key from state copy
      (as we don’t want to maintain too much loading values in memory) */
      delete stateCopy[action.payload || 'main'];
      /* then we return new state */
      return stateCopy;
    }

    default:
      return state;
  }
};

export default loadingReducer;
