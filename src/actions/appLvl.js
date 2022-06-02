import { appT } from '../action-types';

export const actionSetInput = (nameSpace, name, value) => ({
  type: appT.SET_INPUT,
  payload: {
    nameSpace,
    input: { // a name space to gather inputs…
      [name]: value, // input to be updated with value
    },
  },
});

export const actionRequestError = (payload) => ({
  type: appT.REQUEST_ERROR,
  payload,
});

export const actionsLoading = (value) => ({
  type: appT.LOADING,
  payload: {
    loading: value,
  },
});

export const actionUploadPic = (file, productId) => ({
  type: appT.UPLOAD_PICTURE_TRY,
  payload: {
    file,
    productId,
  },
});

// export const actionUploadPicSuccess = (productId, image) => ({
export const actionUploadPicSuccess = (image, productId = null) => ({
  type: appT.UPLOAD_PICTURE_SUCCESS,
  payload: {
    productId,
    image,
  },
});

export const actionUploadPicFail = () => ({
  type: appT.UPLOAD_PICTURE_FAIL,
});

export const actionInitSpinner = (payload) => ({
  type: appT.SPINNER_INIT,
  payload,
});

export const actionKillSpinner = (payload) => ({
  type: appT.SPINNER_OFF,
  payload,
});

export const actionCountPro = () => ({
  type: appT.COUNT_PROFESSIONAL,
});

export const actionCountProSucces = (payload) => ({
  type: appT.COUNT_PROFESSIONAL_SUCCESS,
  payload,
});

export const actionSetScrollValue = (payload) => ({
  type: appT.SCROLLBAR_SET,
  payload,
});
