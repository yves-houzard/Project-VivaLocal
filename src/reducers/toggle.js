import { toggleT } from '../action-types';

const initialState = {
  settingsInfos: false,
  activeMenu: false,
  editingInfos: false,
  editingCom: false,
  editingProduct: false,
  registerProduct: false,
  products: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case toggleT.ON: {
      return {
        ...state,
        [action.payload]: true,
      };
    }
    case toggleT.OFF: {
      return {
        ...state,
        [action.payload]: false,
      };
    }
    case toggleT.INFOS_TOGGLE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case toggleT.COM_TOGGLE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case toggleT.MENU__TOGGLE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case toggleT.EDITING_INFOS_TOGGLE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case toggleT.EDITING_COM_TOGGLE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case toggleT.PRODUCT_EDITION_ON:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]: true,
        },
      };

    case toggleT.PRODUCT_EDITION_OFF: {
      const stateCopy = { ...state };
      /* we delete key from state copy
      (as we don’t want to maintain too much Toggle values in memory) */
      delete stateCopy.products[action.payload];
      /* then we return new state */
      return stateCopy;
    }

    default:
      return state;
  }
};

export default reducer;
