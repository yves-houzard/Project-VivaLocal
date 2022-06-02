export const authentT = {
  TRY: 'maraicher/authent/try',
  SUCCESS: 'maraicher/authent/success',
  FAIL: 'maraicher/authent/fail',
  DISCONNECT: 'maraicher/authent/disconnect',
  OPEN_FORM: 'maraicher/authent/form/open',
  CLOSE_FORM: 'maraicher/authent/form/close',
  TRY_WITH_TOKEN: 'maraicher/authent/try-token',
};

export const registerT = {
  TRY: 'maraicher/register/form/submit/try',
  SUCCESS: 'maraicher/register/success',
  FAIL: 'maraicher/register/fail',
};

export const searchT = {
  SET_ORIGIN: 'maraicher/search/origin/set',
  TRY: 'maraicher/search/origin/try',
  SUCCESS: 'maraicher/search/origin/success',
  SET_CAN_LOCATE: 'maraicher/search/origin/can-locate',
  GET_PROFESSIONAL: 'maraicher/search/get/pro',
  GET_PROFESSIONAL_SUCCESS: 'maraicher/search/get/pro/success',
  GET_ONE_PROFESSIONAL: 'maraicher/search/get/one/pro',
  GET_ONE_PROFESSIONAL_SUCCESS: 'maraicher/search/get/one/pro/success',
};

export const appT = {
  SET_INPUT: 'maraicher/input/set',
  PASS_CLICK_TARGET: 'maraicher/app/click-event/target/name/pass',
  INPUT_RADIO: 'maraicher/input/radio',
  REQUEST_ERROR: 'maraicher/app/request/error',
  LOADING: 'maraicher/app/loading',
  UPLOAD_PICTURE_TRY: 'maraicher/app/company/image/upload/try',
  UPLOAD_PICTURE_SUCCESS: 'maraicher/app/company/image/upload/success',
  UPLOAD_PICTURE_FAIL: 'maraicher/app/company/image/upload/fail',
  SPINNER_INIT: 'maraicher/app/loading/init',
  SPINNER_OFF: 'maraicher/app/loading/kill',
  COUNT_PROFESSIONAL: 'maraicher/count/get',
  COUNT_PROFESSIONAL_SUCCESS: 'maraicher/count/get/success',
  SCROLLBAR_SET: 'maraicher/scrollbar/set',
};

export const userT = {
  GET_FAVORITES: 'maraicher/user/favorites/get',
  GET_FAVORITES_SUCCESS: 'maraicher/user/favorites/get/success',
  DELETE_FAVORITES: 'maraicher/user/favorites/delete',
  DELETE_FAVORITES_SUCCESS: 'maraicher/user/favorites/delete/success',
  ADD_FAVORITES: 'maraicher/user/favorites/add',
  ADD_FAVORITES_SUCCESS: 'maraicher/user/favorites/add/success',
  FILL_EDIT_USER_FORM: 'maraicher/user/profile/edit/load',
  SAVE_PROFILE: 'maraicher/user/profile/edit/save',
};

export const toggleT = {
  INFOS_TOGGLE: 'maraicher/toggle/infos',
  COM_TOGGLE: 'maraicher/toggle/communication',
  MENU__TOGGLE: 'maraicher/toggle/menu',
  EDITING_INFOS_TOGGLE: 'maraicher/toggle/editingInfos',
  EDITING_COM_TOGGLE: 'maraicher/toggle/editingCom',
  EDITING_PRODUCT_TOGGLE: 'maraicher/toggle/editingProduct',
  PRODUCT_EDITION_ON: 'maraicher/toggle/product-edition/on',
  PRODUCT_EDITION_OFF: 'maraicher/toggle/product-edition/off',
  ON: 'maraicher/toggle/generic/on',
  OFF: 'maraicher/toggle/generic/off',
};

export const companyT = {
  GET_COMPANY: 'maraicher/company/display',
  SUCCESS: 'maraicher/company/success',
  REGISTER: 'maraicher/company/register',
  SUCCESS_REGISTER: 'maraicher/company/successRegister',
  INPUT_EDITING: 'maraicher/company/inputEditing',
  REGISTER_EDITING: 'maraicher/company/registerEditing',
  DISPLAY_EDITING: 'maraicher/company/displayEditing',
};

export const navigateT = {
  GO_TO_DEFAULT: 'maraicher/navigate/default-page',
  SEARCH_PAGE: 'maraicher/navigate/search-page',
  CHECK_ACCESS: 'maraicher/navigate/control-access',
};

export const productT = {
  REGISTER: 'maraicher/product/register',
  SUCCESS_REGISTER: 'maraicher/product/successRegister',
  FAIL_REGISTER: 'maraicher/product/failRegister',
  DELETE: 'maraicher/product/delete',
  SUCCESS_DELETE: 'maraicher/product/successDelete',
  INPUT_EDITING: 'maraicher/product/inputEditing',
  REGISTER_EDITING: 'maraicher/product/registerEditing',
  DISPLAY_EDITING: 'maraicher/product/displayEditing',
  GET_PRODUCT: 'maraicher/product/display',
  FILL_EDIT_PRODUCT_FORM: 'maraicher/product/edit/form/fill',
  UPDATE_TRY: 'maraicher/product/update/try',
  UPDATE_SUCCESS: 'maraicher/product/update/success',
  UPDATE_FAIL: 'maraicher/product/update/fail',
};
