/* eslint-disable padded-blocks */
/* we import action types */
import {
  appT,
  userT,
  companyT,
  productT,
  toggleT,
  authentT,
} from '../action-types';

/* we set initial state */
const initialState = {
  authent: {
    mail: '',
    password: '',
  },
  register: {
    first_name: '',
    last_name: '',
    pseudo: '',
    mail: '',
    address: '',
    zip: '',
    city: '',
    phone: '',
    password: '',
    password2: '',
    role: 'user',
  },
  editUser: {
    first_name: '',
    last_name: '',
    pseudo: '',
    mail: '',
    address: '',
    zip: '',
    city: '',
    phone: '',
    password: '',
    password2: '',
  },
  companyRegister: {
    name: '',
    siret: '',
    mail: '',
    address: '',
    zip: '',
    city: '',
    phone: '',
  },
  productRegister: {
    type: '',
    name: '',
    detail: '',
    price: '',
    price_kg: true,
  },
  companyEditing: {
    name: '',
    siret: '',
    mail: '',
    zip: '',
    city: '',
    phone: '',
    detail: '',
    communication: '',
  },
  search: {
    search: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    /* we update a field */
    case appT.SET_INPUT: {
      const { nameSpace, input } = action.payload;
      // console.log('update input', nameSpace, input);

      return {
        ...state,
        [nameSpace]: {
          ...state[nameSpace],
          ...input,
        },
      };
    }
    case appT.INPUT_RADIO: {
      return {
        ...state,
        productRegister: {
          ...state.productRegister,
          ...action.payload,
        },
      };
    }
    case companyT.INPUT_EDITING: {
      return {
        ...state,
        companyEditing: {
          ...state.companyEditing,
          ...action.payload,
          detail: action.payload.detail ? action.payload.detail : '',
          communication: action.payload.communication ? action.payload.communication : '',
        },
      };
    }
    case userT.FILL_EDIT_USER_FORM: {
      return {
        ...state,
        editUser: action.payload,
      };
    }

    case productT.FILL_EDIT_PRODUCT_FORM: {
      // console.log('reducer Fill Edit Product', action.payload.nameSpace);
      return {
        ...state,
        [action.payload.nameSpace]: action.payload.inputs,
      };
    }

    /* when a product is registered, we reset product registration form */
    case productT.SUCCESS_REGISTER:
      return {
        ...state,
        productRegister: { ...initialState.productRegister },
      };
    case toggleT.OFF:
      return {
        ...state,
        registerProduct: action.payload === 'registerProduct' ? false : state.registerProduct,
      };

    case authentT.DISCONNECT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
